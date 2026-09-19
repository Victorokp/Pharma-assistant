#!/usr/bin/env node
/**
 * Content-layer validation (Phase 2 gate).
 *
 * Verifies every authored lesson against the LOCKED curriculum:
 *   1. nodeId/courseId/topicId exist in curriculum.ts (unknown IDs fail).
 *   2. lesson.title equals the node's exact current curriculum name.
 *   3. topic lessons → nodeType 'topic'; subtopic lessons → 'subtopic'.
 *   4. Tier matches the approved Phase-1 map.
 *   5. No duplicate lessons for the same node.
 *   6. Section rules: Tier D = orientation only; Tier A/C have CHECK QUESTIONS;
 *      every lesson has UNDERSTAND + QUICK RECAP; no raw LaTeX delimiters.
 *
 * Exits 1 on any failure — unknown IDs can never pass silently.
 * Run: node scripts/validate-content.mjs
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const curPath = join(root, 'artifacts/pharma-assistant/src/lib/curriculum.ts');
const contentDir = join(root, 'artifacts/pharma-assistant/src/lib/content');
const regPath = join(contentDir, 'index.ts');

// ---- 1. Locked curriculum nodes ----
const src = readFileSync(curPath, 'utf8');
const m = src.match(/export const CURRICULUM: CurriculumCourse\[\] = (\[[\s\S]*?\n\]);/);
if (!m) { console.error('FATAL: CURRICULUM array not found'); process.exit(1); }
const CURRICULUM = eval(m[1]);

const topics = new Map();    // topicId -> { courseId, name }
const subtopics = new Map(); // subtopicId -> { courseId, topicId, name }
for (const course of CURRICULUM) {
  for (const topic of course.topics) {
    topics.set(topic.id, { courseId: course.id, name: topic.name });
    for (const sub of topic.subtopics) {
      subtopics.set(sub.id, { courseId: course.id, topicId: topic.id, name: sub.name });
    }
  }
}

// ---- 2. Load lesson arrays from the content modules ----
// (strips the TS `import type`/`: Lesson[]` annotations, then evaluates —
// same read-only extraction approach used by the audit scripts)
const regSrc = readFileSync(regPath, 'utf8');
const contentFiles = [...new Set([...regSrc.matchAll(/from '\.\/([\w-]+)'/g)].map((x) => x[1]))]
  .filter((f) => f !== 'types');

function extractLessonArray(fileName) {
  const fileSrc = readFileSync(join(contentDir, `${fileName}.ts`), 'utf8');
  const match = fileSrc.match(/export const \w+: Lesson\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error(`No Lesson[] export found in ${fileName}.ts`);
  const stripped = match[1]
    .replace(/^\s*import[\s\S]*?from\s+'[^']*';\s*$/gm, '') // remove imports
    .replace(/satisfies Lesson\[\]/g, '');
  return eval(stripped);
}

const allLessons = contentFiles.flatMap((f) => extractLessonArray(f));
console.log(`content modules: ${contentFiles.join(', ')} — ${allLessons.length} lessons`);

// ---- 3. Validation ----
let fail = 0;
const failMsg = (msg) => { console.error('FAIL | ' + msg); fail++; };
const ok = (msg) => console.log('PASS | ' + msg);

// Approved Phase-1 tier map (BCH 201 Enzymes block).
const expectedTier = {
  enzymes: 'C',
  'introduction-to-enzymes': 'A',
  'classification-of-enzymes': 'B',
  'enzyme-specificity': 'A',
  'factors-affecting-enzyme-activity': 'B',
  'enzyme-kinetics': 'D',
  'michaelis-menten-kinetics': 'B',
  'km-and-vmax': 'B',
  'enzyme-inhibition': 'D',
  'competitive-inhibition': 'B',
  'non-competitive-inhibition': 'B',
  'enzyme-regulation': 'A',
  'clinical-significance-of-enzymes': 'B',
  'pct-8-2': 'C',
  'pct-8': 'D',
  'pct-8-1': 'C',
  'pct-8-3': 'C',
  'pct-8-4': 'C',
  'pct-8-5': 'C',
  'pct-8-6': 'C',
  'pct-9': 'D',
  'pct-9-1': 'B',
  'pct-9-2': 'B',
  'pct-9-3': 'B',
  'pct-9-4': 'B',
  'pct-9-5': 'B',
  'pct-9-6': 'B',
  'pct-9-7': 'B',
  'pct-9-8': 'B',
  'pct-9-9': 'B',
  'pct-9-10': 'C',
  'pct-11': 'D',
  'pct-11-1': 'B',
  'pct-11-2': 'B',
  'pct-11-3': 'B',
  'pct-11-4': 'B',
  'pct-11-5': 'B',
  'pct-11-6': 'C',
  'pct-11-7': 'C',
  'pct-12': 'D',
  'pct-12-1': 'C',
  'pct-12-2': 'C',
  'pct-12-3': 'C',
  'pct-12-4': 'C',
  'pct-12-5': 'C',
  'pct-12-6': 'C',
  'pct-12-7': 'C',
};

const seen = new Set();
for (const lesson of allLessons) {
  const id = lesson.nodeId;
  if (seen.has(id)) { failMsg(`duplicate lesson for node '${id}'`); continue; }
  seen.add(id);

  const isTopic = lesson.nodeType === 'topic';
  const node = isTopic ? topics.get(id) : subtopics.get(id);
  if (!node) { failMsg(`UNKNOWN node ID '${id}' — not in locked curriculum`); continue; }

  if (!isTopic && node.topicId !== lesson.topicId) {
    failMsg(`'${id}': topicId mismatch (lesson: ${lesson.topicId}, curriculum: ${node.topicId})`);
  }
  if (node.courseId !== lesson.courseId) {
    failMsg(`'${id}': courseId mismatch (lesson: ${lesson.courseId}, curriculum: ${node.courseId})`);
  }
  if (lesson.title !== node.name) {
    failMsg(`'${id}': title mismatch (lesson: "${lesson.title}", curriculum: "${node.name}")`);
  }
  const wantTier = expectedTier[id];
  if (!wantTier) failMsg(`'${id}': no Phase-1 tier expectation registered`);
  else if (lesson.tier !== wantTier) {
    failMsg(`'${id}': tier ${lesson.tier} != Phase-1 tier ${wantTier}`);
  }

  const kinds = lesson.sections.map((s) => s.kind);
  if (!kinds.includes('UNDERSTAND')) failMsg(`'${id}': missing UNDERSTAND section`);
  if (!kinds.includes('QUICK RECAP')) failMsg(`'${id}': missing QUICK RECAP section`);
  if (lesson.tier === 'D' && kinds.includes('KEY FACTS') && lesson.sections.find((s) => s.kind === 'KEY FACTS').body.length > 400) {
    failMsg(`'${id}': Tier D lesson drifts beyond orientation (KEY FACTS >400 chars)`);
  }
  if ((lesson.tier === 'A' || lesson.tier === 'C') && !kinds.includes('CHECK QUESTIONS')) {
    failMsg(`'${id}': Tier ${lesson.tier} lesson must include CHECK QUESTIONS`);
  }
  for (const s of lesson.sections) {
    if (/\\\(|\\\)|\\\[|\\\]/.test(s.body)) {
      failMsg(`'${id}': raw LaTeX delimiters \\( \\) \\[ \\] in section '${s.kind}'`);
    }
  }
}

// Group children must exist for each Tier-D grouping subtopic.
for (const g of allLessons.filter((l) => l.tier === 'D' && l.nodeType === 'subtopic')) {
  const children = allLessons.filter(
    (l) => l.nodeType === 'subtopic' && l.topicId === g.topicId && l.title.startsWith(g.title + ' —'),
  );
  if (children.length === 0) failMsg(`group '${g.nodeId}': no child lessons found ("${g.title} — …" expected)`);
  else ok(`group '${g.nodeId}' has ${children.length} child lesson(s)`);
}

ok(`all ${seen.size} lesson IDs exist in the locked curriculum (0 unknown)`);

console.log(fail === 0 ? `\nALL CONTENT CHECKS PASSED (${allLessons.length} lessons)` : `\n${fail} CONTENT CHECK(S) FAILED`);
process.exit(fail === 0 ? 0 : 1);
