import type { Lesson, LessonSection } from './types';
import { bch201EnzymesLessons } from './bch201-enzymes';
import { pct201SpecificGravityLessons } from './pct201-specific-gravity';
import { pct201DensityBlockLessons } from './pct201-density-block';
import { pct201ConcentrationLessons } from './pct201-concentration-block';
import { pct201PotencyLessons } from './pct201-potency-block';
import { pct201ClinicalLessons } from './pct201-clinical-block';
import { pct201DoseLessons } from './pct201-dose-block';
import { pct201FundamentalsLessons } from './pct201-fundamentals';
import { pct201MeasurementSystemsLessons } from './pct201-measurement-systems';
import { pct201MeasurementPracticeLessons } from './pct201-measurement-practice';
import { pct201IntroductionLessons } from './pct201-introduction-block';
import { pct201DosageFormsLessons } from './pct201-dosage-forms';
import { pct201ExcipientsLessons } from './pct201-excipients';
import { pct201PrescriptionInterpretationLessons } from './pct201-prescription-interpretation';
import { pct201IsotonicBuffersLessons } from './pct201-isotonic-buffers';
import { pct201ElectrolytesLessons } from './pct201-electrolytes';
import { pct201ParenteralLessons } from './pct201-parenteral';
import { pct201NutritionLessons } from './pct201-nutrition';
import { pct201DilutionAlligationLessons } from './pct201-dilution-alligation';
import { pct201FormulaScalingLessons } from './pct201-formula-scaling';
import { pct201CompoundingLessons } from './pct201-compounding';
import { pct201VeterinaryLessons } from './pct201-veterinary';
import { pct201PlantExtractsLessons } from './pct201-plant-extracts';
import { pct201DrugMoietyLessons } from './pct201-drug-moiety';
import { pct201RadiopharmaceuticalLessons } from './pct201-radiopharmaceutical';
import { pct201PharmacokineticsLessons } from './pct201-pharmacokinetics';
import { pct201CostLessons } from './pct201-cost';
import { pct201DispensingEthicsLessons } from './pct201-dispensing-ethics';
import { pct201DispensingProcedureLessons } from './pct201-dispensing-procedure';
import { pct201PackagingLessons } from './pct201-packaging';
import { pct201SolubilityLessons } from './pct201-solubility';
import { pct201DiffusionPartitioningLessons } from './pct201-diffusion-partitioning';

export type { Lesson, LessonSection, LessonSectionKind, LessonTier } from './types';

/**
 * Registry of all authored lessons. Add one entry per content file as batches
 * land; `validate-content.mjs` verifies every entry against the locked
 * curriculum (IDs must exist, titles must match, no duplicates).
 */
export const LESSONS: readonly Lesson[] = [...bch201EnzymesLessons, ...pct201SpecificGravityLessons, ...pct201DensityBlockLessons, ...pct201ConcentrationLessons, ...pct201PotencyLessons, ...pct201ClinicalLessons, ...pct201DoseLessons, ...pct201FundamentalsLessons, ...pct201MeasurementSystemsLessons, ...pct201MeasurementPracticeLessons, ...pct201IntroductionLessons, ...pct201DosageFormsLessons, ...pct201ExcipientsLessons, ...pct201PrescriptionInterpretationLessons, ...pct201IsotonicBuffersLessons, ...pct201ElectrolytesLessons, ...pct201ParenteralLessons, ...pct201NutritionLessons, ...pct201DilutionAlligationLessons, ...pct201FormulaScalingLessons, ...pct201CompoundingLessons, ...pct201VeterinaryLessons, ...pct201PlantExtractsLessons, ...pct201DrugMoietyLessons, ...pct201RadiopharmaceuticalLessons, ...pct201PharmacokineticsLessons, ...pct201CostLessons, ...pct201DispensingEthicsLessons, ...pct201DispensingProcedureLessons, ...pct201PackagingLessons, ...pct201SolubilityLessons, ...pct201DiffusionPartitioningLessons];

const byNodeId = new Map(LESSONS.map((lesson) => [lesson.nodeId, lesson]));

/** Exact-node lookup (topic or subtopic ID). */
export function getLessonById(nodeId: string): Lesson | undefined {
  return byNodeId.get(nodeId);
}

/**
 * Resolve the authored lesson for a Study Mode handoff (prefill values are
 * curriculum NAME strings, not IDs):
 *  1. The handoff names a subtopic → its lesson (a group's own orientation
 *     lesson is only used when the group name itself was selected).
 *  2. Otherwise the named topic's lesson (e.g. "Enzymes" → topic base).
 *  3. Otherwise fall back to the topic lesson when the requested name matches
 *     a child of that topic's lesson tree (defensive; keeps handoffs working
 *     for name variants). Returns undefined when nothing is authored — the
 *     caller then uses the live-AI path.
 */
export function getAuthoredLesson(
  subject: string,
  topicName: string,
): Lesson | undefined {
  const wanted = topicName.trim().toLowerCase();
  if (!wanted) return undefined;

  // 1) exact node-name match on subtopics (child lessons preferred).
  for (const lesson of LESSONS) {
    if (lesson.nodeType !== 'subtopic') continue;
    if (lesson.title.toLowerCase() === wanted) return lesson;
  }

  // 2) exact topic-name match.
  for (const lesson of LESSONS) {
    if (lesson.nodeType === 'topic' && lesson.title.toLowerCase() === wanted) {
      return lesson;
    }
  }

  // 3) curriculum-handoff form: the stored name is prefixed by its group
  //    ("Enzyme Kinetics — Michaelis-Menten Kinetics"). Match on the trailing
  //    node name so handoff prefill resolves to the child lesson.
  for (const lesson of LESSONS) {
    const title = lesson.title.toLowerCase();
    const sep = title.indexOf(' — ');
    if (sep > -1 && title.slice(sep + 3) === wanted) return lesson;
  }

  // 4) course-scoped fallback: the requested name belongs to an authored
  //    topic block (child of it) but has no own lesson → use the topic base.
  const subjectCode = subject.trim().toLowerCase();
  for (const lesson of LESSONS) {
    if (lesson.nodeType !== 'topic') continue;
    const courseMatches =
      subjectCode === '' || lesson.courseId.startsWith(subjectCode.slice(0, 3));
    if (courseMatches && wanted.includes(lesson.title.toLowerCase())) {
      return lesson;
    }
  }

  return undefined;
}

/** Render sections in canonical order (UNDERSTAND first, recap last). */
const SECTION_ORDER: LessonSection['kind'][] = [
  'FOUNDATION',
  'UNDERSTAND',
  'KEY FACTS',
  'FORMULAS',
  'WORKED EXAMPLE',
  'PHARMACY CONNECTION',
  'CHECK QUESTIONS',
  'QUICK RECAP',
];

export function orderedSections(sections: readonly LessonSection[]): LessonSection[] {
  return SECTION_ORDER.flatMap((kind) =>
    sections.filter((section) => section.kind === kind),
  );
}

/** One lesson body as a single markdown string (sections in canonical order). */
export function renderLessonSections(lesson: Lesson): string {
  return orderedSections(lesson.sections)
    .map((section) => `## ${section.kind}\n\n${section.body.trim()}`)
    .join('\n\n');
}

/** First check question from the CHECK QUESTIONS section, if present. */
export function firstCheckQuestion(lesson: Lesson): string | null {
  const section = lesson.sections.find((s) => s.kind === 'CHECK QUESTIONS');
  if (!section) return null;
  const first = section.body
    .split('\n')
    .find((line) => /^\d+\./.test(line.trim()));
  return first ? first.replace(/^\d+\.\s*/, '').trim() : null;
}

/** QUICK RECAP bullets, for the key-takeaways display. */
export function recapTakeaways(lesson: Lesson): string[] {
  const recap = lesson.sections.find((s) => s.kind === 'QUICK RECAP');
  if (!recap) return [];
  return recap.body
    .split('\n')
    .map((line) => line.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);
}

/**
 * Coverage manifest — declared coverage per curriculum topic block.
 * `validated` is set by scripts/validate-content.mjs when every entry in the
 * corresponding lesson file passes ID/title checks against curriculum.ts.
 */
export type ContentManifestEntry = {
  courseId: string;
  courseCode: string;
  topicId: string;
  topicName: string;
  lessonCount: number;
  tiers: Record<string, number>;
  batch: number;
  validated: boolean;
};

export const CONTENT_MANIFEST: readonly ContentManifestEntry[] = [
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'enzymes',
    topicName: 'Enzymes',
    lessonCount: 13,
    tiers: { A: 2, B: 7, C: 1, D: 2 },
    batch: 1,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-8',
    topicName: 'Density, Specific Gravity and Related Calculations',
    lessonCount: 7,
    tiers: { C: 6, D: 1 },
    batch: 2,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-9',
    topicName: 'Expressions of Concentration',
    lessonCount: 11,
    tiers: { B: 9, C: 1, D: 1 },
    batch: 5,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-11',
    topicName: 'Pharmaceutical Potency and Units of Activity',
    lessonCount: 8,
    tiers: { B: 5, C: 2, D: 1 },
    batch: 6,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-12',
    topicName: 'Selected Clinical Calculations',
    lessonCount: 8,
    tiers: { C: 7, D: 1 },
    batch: 7,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-10',
    topicName: 'Dose Calculations',
    lessonCount: 11,
    tiers: { A: 1, B: 5, C: 5 },
    batch: 8,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-4',
    topicName: 'Fundamentals of Pharmaceutical Calculations',
    lessonCount: 1,
    tiers: { D: 1 },
    batch: 9,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-5',
    topicName: 'International Systems of Measurement',
    lessonCount: 10,
    tiers: { B: 8, C: 1, D: 1 },
    batch: 10,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-6',
    topicName: 'Pharmaceutical Measurement',
    lessonCount: 9,
    tiers: { B: 8, D: 1 },
    batch: 11,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-1',
    topicName: 'Introduction to Pharmaceutics',
    lessonCount: 7,
    tiers: { B: 7 },
    batch: 12,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-2',
    topicName: 'Pharmaceutical Dosage Forms',
    lessonCount: 9,
    tiers: { B: 9 },
    batch: 13,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-3',
    topicName: 'Pharmaceutical Ingredients and Excipients',
    lessonCount: 14,
    tiers: { B: 14 },
    batch: 14,
    validated: true,
  },
  {
    courseId: 'pct-201',
    courseCode: 'PCT 201',
    topicId: 'pct-7',
    topicName: 'Prescription and Medication-Order Interpretation',
    lessonCount: 11,
    tiers: { B: 11 },
    batch: 15,
    validated: true,
  },
];
