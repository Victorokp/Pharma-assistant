/**
 * One-off extraction of BCH 201 curriculum nodes for Study Mode batch
 * verification. Uses the TS compiler (strip-types style parse) via a
 * lightweight regex approach is fragile — instead leverage node's
 * TypeScript-aware transpile by importing the compiled shape: curriculum.ts
 * is plain object literals, so we transpile on the fly with the TypeScript
 * package already in the workspace.
 *
 * Run: node scripts/extract-bch201.mjs
 */
import { readFileSync } from "node:fs";
import ts from "typescript";

const src = readFileSync(
  "artifacts/pharma-assistant/src/lib/curriculum.ts",
  "utf8",
);
const js = ts.transpileModule(src, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

const mod = { exports: {} };
new Function("module", "exports", js)(mod, mod.exports);

const CURRICULUM = mod.exports.CURRICULUM ?? mod.exports.default?.CURRICULUM;
if (!CURRICULUM) {
  console.error("Could not find CURRICULUM export");
  process.exit(1);
}

const course = CURRICULUM.find((c) => c.id === "bch-201");
if (!course) {
  console.error("bch-201 not found");
  process.exit(1);
}

const lines = [];
let total = 0;
for (const topic of course.topics) {
  lines.push(`TOPIC ${topic.id} — ${topic.name} (${topic.subtopics.length + 1} nodes)`);
  lines.push(`  ${topic.id} — ${topic.name} [topic]`);
  total += 1;
  for (const sub of topic.subtopics) {
    lines.push(`  ${sub.id} — ${sub.name} [sub]`);
    total += 1;
  }
}
lines.push(`\nTOTAL BCH201 NODES: ${total}`);
console.log(lines.join("\n"));
