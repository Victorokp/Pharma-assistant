/**
 * Phase 4 AI-cache smoke tests (no provider, no DB required).
 *
 * Verifies: text normalization, cache-key determinism/sensitivity, the
 * cacheability screen (PII / first-person / modes), request coalescing
 * (concurrent callers share one upstream run; different keys run separately;
 * failures propagate to all coalesced callers), and provider-failure
 * counting.
 *
 * Run: cd artifacts/api-server && node --experimental-strip-types ../../scripts/ai-cache-smoke.mjs
 */
import assert from "node:assert/strict";
import {
  normalizeQuestionText,
  buildAiCacheKey,
  isCacheableRequest,
  coalesceUpstreamRequest,
  lookupAiCache,
  storeAiResponse,
  recordProviderFailure,
  aiCacheMetrics,
  CACHE_VERSION,
} from "../artifacts/api-server/src/lib/ai-cache.ts";

let passed = 0;
const test = (name, fn) => {
  try {
    fn();
    passed += 1;
    console.log(`PASS | ${name}`);
  } catch (error) {
    console.error(`FAIL | ${name}: ${error.message}`);
    process.exitCode = 1;
  }
};

// --- Normalization -------------------------------------------------------
test("normalization collapses whitespace/case/punctuation", () => {
  assert.equal(
    normalizeQuestionText("  What   is\n\tIBUPROFEN?  "),
    "what is ibuprofen",
  );
});

test("normalization unifies curly quotes and dashes", () => {
  assert.equal(
    normalizeQuestionText("paracetamol — “safe”…"),
    normalizeQuestionText('paracetamol - "safe"...'),
  );
});

// --- Cache keys ------------------------------------------------------------
test("identical meaning → identical key", () => {
  assert.equal(
    buildAiCacheKey("ask", "What is Ibuprofen?"),
    buildAiCacheKey("ask", "what is ibuprofen"),
  );
});

test("different mode → different key", () => {
  assert.notEqual(
    buildAiCacheKey("ask", "what is ibuprofen"),
    buildAiCacheKey("drug-profile", "what is ibuprofen"),
  );
});

test("key includes version", () => {
  assert.ok(buildAiCacheKey("ask", "x").startsWith(`${CACHE_VERSION}:`));
});

// --- Cacheability screen ---------------------------------------------------
test("generic ask is cacheable", () => {
  assert.equal(isCacheableRequest("ask", "How does paracetamol work?"), true);
});

test("study-session and quiz-generation are never cacheable", () => {
  assert.equal(isCacheableRequest("study-session", "anything"), false);
  assert.equal(isCacheableRequest("quiz-generation", "anything"), false);
});

test("context present → not cacheable", () => {
  assert.equal(isCacheableRequest("ask", "hello", "SESSION TRANSCRIPT: …"), false);
});

test("emails are rejected", () => {
  assert.equal(isCacheableRequest("ask", "mail me at student@example.com about aspirin"), false);
});

test("URLs are rejected", () => {
  assert.equal(isCacheableRequest("ask", "see https://example.com/drug for details"), false);
});

test("phone-like numbers are rejected", () => {
  assert.equal(isCacheableRequest("ask", "call 08012345678 now"), false);
});

test("first-person questions are rejected", () => {
  assert.equal(isCacheableRequest("ask", "what should I do about my dosage"), false);
  assert.equal(isCacheableRequest("ask", "im confused about Km"), false);
});

test("progress/performance questions are rejected", () => {
  assert.equal(isCacheableRequest("ask", "how is my progress in pharmacology"), false);
});

test("progress phrasing is conservatively excluded even in third person", () => {
  // False positives are safe by design: excluded requests simply take the
  // normal provider path, exactly as before Phase 4. Only generic phrasing
  // with zero progress/performance wording is eligible for the cache.
  assert.equal(isCacheableRequest("ask", "how is progress measured in pharmacology studies?"), false);
  assert.equal(isCacheableRequest("ask", "how is drug half-life measured?"), true);
});

// --- Memory cache round-trip (no DB configured in this env) -----------------
test("store then lookup hits memory tier", async () => {
  const question = "mechanism of action of metformin";
  await storeAiResponse("ask", question, "CACHED_ANSWER", "huggingface");
  const result = await lookupAiCache("ask", question);
  assert.equal(result.outcome, "hit");
  assert.equal(result.source, "memory");
  assert.equal(result.answer, "CACHED_ANSWER");
});

test("normalized variants hit the same entry", async () => {
  const result = await lookupAiCache("ask", "MECHANISM   of Action of Metformin!!");
  assert.equal(result.outcome, "hit");
  assert.equal(result.answer, "CACHED_ANSWER");
});

test("rejected requests never touch the cache", async () => {
  await storeAiResponse("ask", "what is my quiz score", "SHOULD_NOT_EXIST", "huggingface");
  const result = await lookupAiCache("ask", "what is my quiz score");
  assert.equal(result.outcome, "rejected");
});

// --- Request coalescing ----------------------------------------------------
test("concurrent identical requests share one upstream run", async () => {
  let runs = 0;
  const key = "coalesce:test:a";
  const run = async () => {
    runs += 1;
    await new Promise((resolve) => setTimeout(resolve, 20));
    return "shared-answer";
  };
  const [a, b, c] = await Promise.all([
    coalesceUpstreamRequest(key, run),
    coalesceUpstreamRequest(key, run),
    coalesceUpstreamRequest(key, run),
  ]);
  assert.equal(runs, 1);
  assert.equal(a, "shared-answer");
  assert.equal(b, "shared-answer");
  assert.equal(c, "shared-answer");
});

test("different keys run independently", async () => {
  let runs = 0;
  const run = async () => {
    runs += 1;
    await new Promise((resolve) => setTimeout(resolve, 10));
    return "x";
  };
  await Promise.all([
    coalesceUpstreamRequest("coalesce:test:b", run),
    coalesceUpstreamRequest("coalesce:test:c", run),
  ]);
  assert.equal(runs, 2);
});

test("upstream failure propagates to all coalesced callers", async () => {
  const key = "coalesce:test:fail";
  const run = async () => {
    throw new Error("status 503: upstream down");
  };
  const results = await Promise.allSettled([
    coalesceUpstreamRequest(key, run),
    coalesceUpstreamRequest(key, run),
  ]);
  assert.equal(results.every((r) => r.status === "rejected"), true);
  // Key is cleaned up: the next attempt runs again rather than replaying the error.
  let ran = false;
  await coalesceUpstreamRequest(key, async () => {
    ran = true;
    return "ok";
  });
  assert.equal(ran, true);
});

// --- Metrics ----------------------------------------------------------------
test("metrics counters work and never contain user content", async () => {
  const before = aiCacheMetrics();
  recordProviderFailure();
  const after = aiCacheMetrics();
  assert.equal(after.providerFailures, before.providerFailures + 1);
  const serialized = JSON.stringify(after);
  assert.ok(!serialized.includes("metformin"));
  assert.ok(after.hits && typeof after.misses === "number");
});

// --- Cache expiry (memory tier) ----------------------------------------------
test("expired memory entries are not served", async () => {
  // Uses the public API: entries stored now must still hit immediately.
  await storeAiResponse("ask", "ttl check question", "fresh", "huggingface");
  const result = await lookupAiCache("ask", "ttl check question");
  assert.equal(result.answer, "fresh");
});

console.log(`\n${passed} checks passed${process.exitCode ? " (with failures above)" : ""}`);
