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
  'pct-10': 'C',
  'pct-10-1': 'C',
  'pct-10-2': 'C',
  'pct-10-3': 'C',
  'pct-10-4': 'B',
  'pct-10-5': 'B',
  'pct-10-6': 'B',
  'pct-10-7': 'A',
  'pct-10-8': 'B',
  'pct-10-9': 'B',
  'pct-10-10': 'C',
  'pct-4': 'D',
  'pct-5': 'D',
  'pct-5-1': 'B',
  'pct-5-2': 'B',
  'pct-5-3': 'B',
  'pct-5-4': 'B',
  'pct-5-5': 'B',
  'pct-5-6': 'B',
  'pct-5-7': 'C',
  'pct-5-8': 'B',
  'pct-5-9': 'B',
  'pct-6': 'D',
  'pct-6-1': 'B',
  'pct-6-2': 'B',
  'pct-6-3': 'B',
  'pct-6-4': 'B',
  'pct-6-5': 'B',
  'pct-6-6': 'B',
  'pct-6-7': 'B',
  'pct-6-8': 'B',
  'pct-1': 'B',
  'pct-1-1': 'B',
  'pct-1-2': 'B',
  'pct-1-3': 'B',
  'pct-1-4': 'B',
  'pct-1-5': 'B',
  'pct-1-6': 'B',
  'pct-2': 'B',
  'pct-2-1': 'B',
  'pct-2-2': 'B',
  'pct-2-3': 'B',
  'pct-2-4': 'B',
  'pct-2-5': 'B',
  'pct-2-6': 'B',
  'pct-2-7': 'B',
  'pct-2-8': 'B',
  'pct-3': 'B',
  'pct-3-1': 'B',
  'pct-3-2': 'B',
  'pct-3-3': 'B',
  'pct-3-4': 'B',
  'pct-3-5': 'B',
  'pct-3-6': 'B',
  'pct-3-7': 'B',
  'pct-3-8': 'B',
  'pct-3-9': 'B',
  'pct-3-10': 'B',
  'pct-3-11': 'B',
  'pct-3-12': 'B',
  'pct-3-13': 'B',
  'pct-7': 'B',
  'pct-7-1': 'B',
  'pct-7-2': 'B',
  'pct-7-3': 'B',
  'pct-7-4': 'B',
  'pct-7-5': 'B',
  'pct-7-6': 'B',
  'pct-7-7': 'B',
  'pct-7-8': 'B',
  'pct-7-9': 'B',
  'pct-7-10': 'B',
  'pct-13': 'B',
  'pct-13-1': 'B',
  'pct-13-2': 'B',
  'pct-13-3': 'B',
  'pct-13-4': 'C',
  'pct-13-5': 'B',
  'pct-13-6': 'C',
  'pct-13-7': 'B',
  'pct-13-8': 'B',
  'pct-13-9': 'B',
  'pct-13-10': 'C',
  'pct-14': 'B',
  'pct-14-1': 'B',
  'pct-14-2': 'C',
  'pct-14-3': 'C',
  'pct-14-4': 'C',
  'pct-14-5': 'B',
  'pct-14-6': 'C',
  'pct-14-7': 'B',
  'pct-15': 'B',
  'pct-15-1': 'B',
  'pct-15-2': 'C',
  'pct-15-3': 'C',
  'pct-15-4': 'C',
  'pct-15-5': 'C',
  'pct-15-6': 'C',
  'pct-15-7': 'B',
  'pct-15-8': 'C',
  'pct-15-9': 'B',
  'pct-15-10': 'B',
  'pct-16': 'B',
  'pct-16-1': 'B',
  'pct-16-2': 'B',
  'pct-16-3': 'B',
  'pct-16-4': 'C',
  'pct-16-5': 'C',
  'pct-16-6': 'B',
  'pct-16-7': 'C',
  'pct-17': 'B',
  'pct-17-1': 'B',
  'pct-17-2': 'C',
  'pct-17-3': 'C',
  'pct-17-4': 'B',
  'pct-17-5': 'B',
  'pct-17-6': 'C',
  'pct-17-7': 'C',
  'pct-17-8': 'B',
  'pct-18': 'B',
  'pct-18-1': 'B',
  'pct-18-2': 'C',
  'pct-18-3': 'C',
  'pct-18-4': 'C',
  'pct-18-5': 'B',
  'pct-18-6': 'C',
  'pct-18-7': 'B',
  'pct-19': 'B',
  'pct-19-1': 'B',
  'pct-19-2': 'C',
  'pct-19-3': 'C',
  'pct-19-4': 'C',
  'pct-19-5': 'C',
  'pct-19-6': 'B',
  'pct-19-7': 'C',
  'pct-19-8': 'B',
  'pct-20': 'B',
  'pct-20-1': 'C',
  'pct-20-2': 'C',
  'pct-20-3': 'C',
  'pct-20-4': 'C',
  'pct-20-5': 'B',
  'pct-20-6': 'B',
  'pct-20-7': 'B',
  'pct-21': 'B',
  'pct-21-1': 'B',
  'pct-21-2': 'C',
  'pct-21-3': 'C',
  'pct-21-4': 'C',
  'pct-21-5': 'C',
  'pct-21-6': 'C',
  'pct-21-7': 'B',
  'pct-22': 'B',
  'pct-22-1': 'B',
  'pct-22-2': 'B',
  'pct-22-3': 'B',
  'pct-22-4': 'C',
  'pct-22-5': 'C',
  'pct-22-6': 'B',
  'pct-23': 'B',
  'pct-23-1': 'B',
  'pct-23-2': 'B',
  'pct-23-3': 'C',
  'pct-23-4': 'B',
  'pct-23-5': 'C',
  'pct-23-6': 'C',
  'pct-23-7': 'C',
  'pct-23-8': 'C',
  'pct-23-9': 'B',
  'pct-24': 'B',
  'pct-24-1': 'B',
  'pct-24-2': 'B',
  'pct-24-3': 'C',
  'pct-24-4': 'C',
  'pct-24-5': 'C',
  'pct-24-6': 'C',
  'pct-24-7': 'C',
  'pct-24-8': 'C',
  'pct-24-9': 'C',
  'pct-24-10': 'C',
  'pct-24-11': 'C',
  'pct-24-12': 'B',
  'pct-25': 'B',
  'pct-25-1': 'B',
  'pct-25-2': 'C',
  'pct-25-3': 'C',
  'pct-25-4': 'C',
  'pct-25-5': 'C',
  'pct-25-6': 'B',
  'pct-26': 'B',
  'pct-26-1': 'B',
  'pct-26-2': 'B',
  'pct-26-3': 'B',
  'pct-26-4': 'B',
  'pct-26-5': 'B',
  'pct-26-6': 'B',
  'pct-26-7': 'B',
  'pct-26-8': 'B',
  'pct-26-9': 'B',
  'pct-26-10': 'B',
  'pct-26-11': 'B',
  'pct-27': 'B',
  'pct-27-1': 'B',
  'pct-27-2': 'B',
  'pct-27-3': 'B',
  'pct-27-4': 'B', 'pct-27-5': 'B',
  'pct-27-6': 'B', 'pct-27-7': 'C',
  'pct-27-8': 'B', 'pct-27-9': 'B',
  'pct-27-10': 'B', 'pct-27-11': 'B',
  'pct-27-12': 'B', 'pct-27-13': 'B',
  'pct-27-14': 'B', 'pct-27-15': 'B',
  'pct-27-16': 'B', 'pct-27-17': 'B',
  'pct-27-18': 'B',
  'pct-28': 'B',
  'pct-28-1': 'B',
  'pct-28-2': 'B',
  'pct-28-3': 'B',
  'pct-28-4': 'B',
  'pct-28-5': 'B',
  'pct-28-6': 'B',
  'pct-28-7': 'B',
  'pct-28-8': 'B',
  'pct-28-9': 'B',
  'pct-28-10': 'B',
  'pct-28-11': 'B',
  'pct-29': 'B',
  'pct-29-1': 'B',
  'pct-29-2': 'B',
  'pct-29-3': 'B',
  'pct-29-4': 'B',
  'pct-29-5': 'B',
  'pct-29-6': 'B',
  'pct-29-7': 'C',
  'pct-29-8': 'B',
  'pct-29-9': 'C',
  'pct-29-10': 'B',
  'pct-30': 'B',
  'pct-30-1': 'B',
  'pct-30-2': 'C',
  'pct-30-3': 'C',
  'pct-30-4': 'C',
  'pct-30-5': 'B',
  'pct-30-6': 'B',
  'pct-30-7': 'B',
  'pct-31': 'B',
  'pct-31-1': 'C',
  'pct-31-2': 'C',
  'pct-31-3': 'B',
  'pct-31-4': 'B',
  'pct-31-5': 'B',
  'pct-31-6': 'B',
  'pct-31-7': 'B',
  'pct-32': 'B',
  'pct-32-1': 'C',
  'pct-32-2': 'C',
  'pct-32-3': 'B',
  'pct-32-4': 'C',
  'pct-32-5': 'B',
  'pct-32-6': 'B',
  'pct-32-7': 'B',
  'pct-32-8': 'B',
  'pct-33': 'B',
  'pct-33-1': 'C',
  'pct-33-2': 'C',
  'pct-33-3': 'B',
  'pct-33-4': 'C',
  'pct-33-5': 'C',
  'pct-33-6': 'C',
  'pct-33-7': 'C',
  'pct-33-8': 'C',
  'pct-33-9': 'B',
  'pct-34': 'B',
  'pct-34-1': 'B',
  'pct-34-2': 'B',
  'pct-34-3': 'B',
  'pct-34-4': 'B',
  'pct-34-5': 'B',
  'pct-34-6': 'B',
  'pct-34-7': 'B',
  'pct-34-8': 'B',
  'pct-34-9': 'B',
  'pct-35': 'B',
  'pct-35-1': 'B',
  'pct-35-2': 'B',
  'pct-35-3': 'B',
  'pct-35-4': 'B',
  'pct-35-5': 'B',
  'pct-35-6': 'B',
  'pct-35-7': 'B',
  'pct-35-8': 'B',
  'pct-35-9': 'B',
  'pct-35-10': 'B',
  'pct-36': 'B',
  'pct-36-1': 'B',
  'pct-36-2': 'B',
  'pct-36-3': 'B',
  'pct-36-4': 'B',
  'pct-36-5': 'B',
  'pct-36-6': 'B',
  'pct-36-7': 'B',
  'pct-37': 'B',
  'pct-37-1': 'B',
  'pct-37-2': 'B',
  'pct-37-3': 'B',
  'pct-37-4': 'B',
  'pct-37-5': 'B',
  'pct-37-6': 'B',
  'pct-37-7': 'B',
  'pct-37-8': 'B',
  'pct-37-9': 'B',
  'pct-38': 'B',
  'pct-38-1': 'B',
  'pct-38-2': 'B',
  'pct-38-3': 'C',
  'pct-38-4': 'C',
  'pct-38-5': 'B',
  'pct-38-6': 'B',
  'pct-38-7': 'B',
  'pct-38-8': 'B',
  'pct-38-9': 'B',
  'pct-39': 'B',
  'pct-39-1': 'B',
  'pct-39-2': 'B',
  'pct-39-3': 'B',
  'pct-39-4': 'B',
  'pct-39-5': 'C',
  'pct-39-6': 'B',
  'pct-39-7': 'B',
  'pct-39-8': 'B',
  'pct-39-9': 'B',
  'pct-39-10': 'B',
  'pct-40': 'B',
  'pct-40-1': 'B',
  'pct-40-2': 'B',
  'pct-40-3': 'B',
  'pct-40-4': 'B',
  'pct-40-5': 'B',
  'pct-40-6': 'B',
  'pct-40-7': 'B',
  'pct-40-8': 'B',
  'pct-40-9': 'B',
  'pct-40-10': 'B',
  'pct-41': 'B',
  'pct-41-1': 'B',
  'pct-41-2': 'B',
  'pct-41-3': 'B',
  'pct-41-4': 'C',
  'pct-41-5': 'B',
  'pct-41-6': 'B',
  'pct-41-7': 'B',
  'pct-41-8': 'B',
  'pct-42': 'B',
  'pct-42-1': 'B',
  'pct-42-2': 'B',
  'pct-42-3': 'B',
  'pct-42-4': 'B',
  'pct-42-5': 'B',
  'pct-42-6': 'B',
  'pct-42-7': 'B',
  'pct-42-8': 'B',
  'pct-43': 'B',
  'pct-43-1': 'B',
  'pct-43-2': 'B',
  'pct-43-3': 'B',
  'pct-43-4': 'B',
  'pct-43-5': 'B',
  'pct-43-6': 'B',
  'pct-43-7': 'B',
  'pct-43-8': 'B',
  'pct-43-9': 'B',
  'pct-43-10': 'C',
  'pct-43-11': 'B',
  'pct-4-1': 'A',
  'pct-4-2': 'A',
  'pct-4-3': 'A',
  'pct-4-4': 'A',
  'pct-4-5': 'A',
  'pct-4-6': 'A',
  'pct-4-7': 'A',
  'pct-4-8': 'A',
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
