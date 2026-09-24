/**
 * Shared AI response cache — server-side only.
 *
 * Caches reusable, non-personalized AI answers so repeated generic requests
 * cost zero upstream provider calls. Two-tier:
 *
 * 1. In-memory LRU (per server instance): fast, always available, survives
 *    nothing. Works with or without a configured database.
 * 2. Drizzle/Postgres table `ai_response_cache`: shared across server
 *    instances and future mobile clients (Web + Android + iPhone all talk to
 *    the same backend). Used whenever DATABASE_URL is configured; the server
 *    boots fine without it (cache simply degrades to tier 1).
 *
 * The database import is dynamic and failure-tolerant: a DB outage never
 * breaks an AI request, it just skips the shared tier. No student-owned data
 * (progress, quizzes, saved items, conversations) is ever written here.
 */
import { createHash, randomUUID } from "node:crypto";

/** Current cache version — bump to invalidate every cached response. */
export const CACHE_VERSION = 1;

/** How long a cached response stays fresh. */
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

/** In-memory LRU bounds. */
const MEMORY_MAX_ENTRIES = 500;

/** How long an in-flight promise is shared with concurrent requesters. */
const INFLIGHT_TTL_MS = 2 * 60 * 1000;

type CacheEntry = {
  answer: string;
  storedAt: number;
  expiresAt: number;
};

/** Backend availability, latched from the first attempt. */
let dbAvailable: boolean | null = null;

/** LRU bookkeeping: insertion/access order. */
const memoryOrder = new Set<string>();
const memoryCache = new Map<string, CacheEntry>();

/** In-flight upstream fetches, shared by concurrent identical requests. */
const inflight = new Map<string, Promise<string>>();
const inflightCreatedAt = new Map<string, number>();

/** Lightweight counters, exposed via logAiMetrics(). */
const metrics = {
  hits: { memory: 0, db: 0 },
  misses: 0,
  upstreamRequests: 0,
  providerFailures: 0,
  coalesced: 0,
  rejected: 0,
};

export function aiCacheMetrics() {
  return {
    hits: { ...metrics.hits },
    misses: metrics.misses,
    upstreamRequests: metrics.upstreamRequests,
    providerFailures: metrics.providerFailures,
    coalesced: metrics.coalesced,
    rejected: metrics.rejected,
    dbCacheActive: dbAvailable === true,
  };
}

export function logAiMetrics(): void {
  const m = aiCacheMetrics();
  console.log(
    `[ai-cache] version=${CACHE_VERSION} hits: memory=${m.hits.memory} db=${m.hits.db} · ` +
      `misses=${m.misses} · upstream=${m.upstreamRequests} · ` +
      `provider-failures=${m.providerFailures} · coalesced=${m.coalesced} · ` +
      `rejected=${m.rejected} · db-tier=${m.dbCacheActive}`,
  );
}

// ---------------------------------------------------------------------------
// Key construction: mode + normalized question + version
// ---------------------------------------------------------------------------

/**
 * Normalize the request text so trivial formatting differences don't create
 * duplicate cache entries: trim, collapse internal whitespace, lowercase,
 * strip trailing punctuation, unify curly quotes/dashes/ellipsis.
 */
export function normalizeQuestionText(input: string): string {
  return input
    .normalize("NFKC")
    .replace(/[\u2018\u2019\u201B]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[.!?…]+\s*$/, "")
    .trim();
}

/** Compose the cache key for a generic request. */
export function buildAiCacheKey(mode: string, question: string): string {
  return `${CACHE_VERSION}:${mode}:${createHash("sha256")
    .update(normalizeQuestionText(question))
    .digest("hex")}`;
}

/**
 * Denial-of-cache safety screen. Anything personal, user-specific, or
 * context-dependent must never be served from the shared cache. When
 * rejected, requests go straight to the provider exactly as before.
 */
export function isCacheableRequest(mode: string, question: string, context?: string): boolean {
  if (mode !== "ask" && mode !== "drug-profile") return false;

  const reject = () => {
    metrics.rejected += 1;
    return false;
  };

  // Study-session requests always carry session state → never cacheable.
  if (context !== undefined && context !== null) return reject();

  const normalized = normalizeQuestionText(question);
  if (normalized.length === 0 || normalized.length > 2000) return reject();

  // Personal data: emails, phone numbers, card numbers, URLs.
  if (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(normalized)) return reject(); // email
  if (/(\+\d{1,3}[\s-]?)?(\d[\s()-]{0,3}){7,}/.test(normalized)) return reject(); // phone/long digit runs
  if (/\b(?:https?:\/\/|www\.)\S+/.test(normalized)) return reject(); // URLs

  // First-person phrasing: the answer legitimately depends on the student.
  if (
    /\b(?:my|mine|i am|i'm|im|ive|i've|me)\b/.test(normalized) ||
    /\b(?:our|we)\b/.test(normalized)
  ) {
    return reject();
  }

  // Progress/performance questions are inherently user-specific.
  if (/\b(?:progress|score|scores|quiz history|performance)\b/.test(normalized)) {
    return reject();
  }

  return true;
}

// ---------------------------------------------------------------------------
// In-memory tier
// ---------------------------------------------------------------------------

function memoryGet(key: string): CacheEntry | null {
  const entry = memoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    memoryCache.delete(key);
    memoryOrder.delete(key);
    return null;
  }
  // LRU touch.
  memoryOrder.delete(key);
  memoryOrder.add(key);
  return entry;
}

function memorySet(key: string, answer: string): void {
  const now = Date.now();
  if (memoryCache.has(key)) memoryOrder.delete(key);
  memoryCache.set(key, { answer, storedAt: now, expiresAt: now + CACHE_TTL_MS });
  memoryOrder.add(key);

  while (memoryOrder.size > MEMORY_MAX_ENTRIES) {
    const oldest = memoryOrder.values().next().value;
    if (oldest === undefined) break;
    memoryOrder.delete(oldest);
    memoryCache.delete(oldest);
  }
}

// ---------------------------------------------------------------------------
// Postgres tier (optional, failure-tolerant)
// ---------------------------------------------------------------------------

async function dbGet(key: string): Promise<CacheEntry | null> {
  if (dbAvailable === false || !process.env.DATABASE_URL) return null;
  try {
    const { db } = await import("@workspace/db");
    const { aiResponseCache } = await import("@workspace/db/schema");
    const { and, eq, gt } = await import("drizzle-orm");
    const rows = await db
      .select()
      .from(aiResponseCache)
      .where(and(eq(aiResponseCache.cacheKey, key), gt(aiResponseCache.expiresAt, new Date())))
      .limit(1);
    if (dbAvailable === null) dbAvailable = true;
    if (rows.length === 0) return null;
    const row = rows[0];
    return { answer: row.responseBody, storedAt: row.createdAt.getTime(), expiresAt: row.expiresAt.getTime() };
  } catch (error) {
    if (dbAvailable === null) {
      dbAvailable = false;
      console.warn(
        "[ai-cache] database tier unavailable (cache runs in-memory only). " +
          "Set DATABASE_URL to enable the shared cache:",
        error instanceof Error ? error.message : error,
      );
    }
    return null;
  }
}

async function dbSet(
  key: string,
  mode: string,
  question: string,
  answer: string,
  provider: "huggingface" | "openai",
): Promise<void> {
  if (dbAvailable === false || !process.env.DATABASE_URL) return;
  try {
    const { db } = await import("@workspace/db");
    const { aiResponseCache } = await import("@workspace/db/schema");
    const now = new Date();
    await db
      .insert(aiResponseCache)
      .values({
        id: randomUUID(),
        cacheKey: key,
        requestMode: mode,
        requestFingerprint: normalizeQuestionText(question).slice(0, 2000),
        provider,
        model: provider === "huggingface" ? "openai/gpt-oss-120b:fastest" : "gpt-5.4-mini",
        promptVersion: String(CACHE_VERSION),
        responseBody: answer,
        createdAt: now,
        expiresAt: new Date(now.getTime() + CACHE_TTL_MS),
      })
      .onConflictDoUpdate({
        target: aiResponseCache.cacheKey,
        set: {
          responseBody: answer,
          createdAt: now,
          expiresAt: new Date(now.getTime() + CACHE_TTL_MS),
        },
      });
    if (dbAvailable === null) dbAvailable = true;
  } catch {
    // Non-fatal: the in-memory tier still serves this instance.
  }
}

// ---------------------------------------------------------------------------
// Public API: lookup + store with request coalescing
// ---------------------------------------------------------------------------

export type AiCacheResult =
  | { outcome: "hit"; source: "memory" | "db"; answer: string }
  | { outcome: "miss" }
  | { outcome: "rejected" };

export async function lookupAiCache(mode: string, question: string, context?: string): Promise<AiCacheResult> {
  if (!isCacheableRequest(mode, question, context)) {
    return { outcome: "rejected" };
  }
  const key = buildAiCacheKey(mode, question);

  const mem = memoryGet(key);
  if (mem) {
    metrics.hits.memory += 1;
    return { outcome: "hit", source: "memory", answer: mem.answer };
  }

  const row = await dbGet(key);
  if (row) {
    metrics.hits.db += 1;
    memorySet(key, row.answer); // warm the memory tier
    return { outcome: "hit", source: "db", answer: row.answer };
  }

  metrics.misses += 1;
  return { outcome: "miss" };
}

/**
 * Store a freshly generated answer. Called only for requests that passed the
 * cacheability screen (lookup returned "miss", not "rejected").
 */
export async function storeAiResponse(
  mode: string,
  question: string,
  answer: string,
  provider: "huggingface" | "openai",
): Promise<void> {
  if (!isCacheableRequest(mode, question)) {
    return;
  }
  const key = buildAiCacheKey(mode, question);
  memorySet(key, answer);
  await dbSet(key, mode, question, answer, provider);
}

/** Count a provider failure (fallback/error path in the route). */
export function recordProviderFailure(): void {
  metrics.providerFailures += 1;
}

// ---------------------------------------------------------------------------
// Request coalescing
// ---------------------------------------------------------------------------

/**
 * Run the upstream AI call at most once per identical cacheable request:
 * concurrent requesters await the same in-flight promise instead of each
 * hitting the provider. All requesters receive the same result (or error).
 */
export async function coalesceUpstreamRequest(
  key: string,
  run: () => Promise<string>,
): Promise<string> {
  const existing = inflight.get(key);
  if (existing) {
    metrics.coalesced += 1;
    return existing;
  }

  const promise = run()
    .then((answer) => {
      inflight.delete(key);
      inflightCreatedAt.delete(key);
      return answer;
    })
    .catch((error) => {
      inflight.delete(key);
      inflightCreatedAt.delete(key);
      throw error;
    });

  inflight.set(key, promise);
  inflightCreatedAt.set(key, Date.now());
  metrics.upstreamRequests += 1;
  return promise;
}

/** Drop stale in-flight entries (defensive cleanup). */
export function sweepInflight(): void {
  const now = Date.now();
  for (const [key, createdAt] of inflightCreatedAt) {
    if (now - createdAt > INFLIGHT_TTL_MS) {
      inflight.delete(key);
      inflightCreatedAt.delete(key);
    }
  }
}
