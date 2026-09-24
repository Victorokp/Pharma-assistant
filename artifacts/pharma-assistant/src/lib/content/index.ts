import type { Lesson, LessonSection } from './types';
import { bch201EnzymesLessons } from './bch201-enzymes';
import { bch201MetabolismLessons } from './bch201-metabolism';
import { bch201CarbMetabolism1Lessons } from './bch201-carb-metabolism-1';
import { bch201CarbMetabolism2Lessons } from './bch201-carb-metabolism-2';
import { bch201ProteinMetabolismLessons } from './bch201-protein-metabolism';
import { bch201LipidMetabolismLessons } from './bch201-lipid-metabolism';
import { bch201DisordersTcaLessons } from './bch201-disorders-tca';
import { bch201AminoAcidsLessons } from './bch201-amino-acids';
import { bch201AminoAcidMetabolismLessons } from './bch201-amino-acid-metabolism';
import { bch201ProteinStructureLessons } from './bch201-protein-structure';
import { bch201Membranes1Lessons } from './bch201-membranes-1';
import { bch201Membranes2Lessons } from './bch201-membranes-2';
import { bch201DigestionAbsorptionLessons } from './bch201-digestion-absorption';
import { bch201PcmLessons } from './bch201-pcm';
import { bch201BioenergeticsClinicalLessons } from './bch201-bioenergetics-clinical';
import { bch201NucleotidesLessons } from './bch201-nucleotides';
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
import { pct201SurfaceInterfacialLessons } from './pct201-surface-interfacial';
import { pct201RheologyLessons } from './pct201-rheology';
import { pct201MicromeriticsLessons } from './pct201-micromeritics';
import { pct201PowdersGranulesLessons } from './pct201-powders-granules';
import { pct201TabletsLessons } from './pct201-tablets';
import { pct201CapsulesLessons } from './pct201-capsules';
import { pct201SolutionsLessons } from './pct201-solutions';
import { pct201SuspensionsLessons } from './pct201-suspensions';
import { pct201EmulsionsLessons } from './pct201-emulsions';
import { pct201SemisolidsLessons } from './pct201-semisolids';
import { pct201SuppositoriesLessons } from './pct201-suppositories';
import { pct201SterileLessons } from './pct201-sterile';
import { pct201StabilityLessons } from './pct201-stability';
import { pct201CalculationFoundationsLessons } from './pct201-calculation-foundations';

export type { Lesson, LessonSection, LessonSectionKind, LessonTier } from './types';

/**
 * Registry of all authored lessons. Add one entry per content file as batches
 * land; `validate-content.mjs` verifies every entry against the locked
 * curriculum (IDs must exist, titles must match, no duplicates).
 */
export const LESSONS: readonly Lesson[] = [...bch201EnzymesLessons, ...bch201MetabolismLessons, ...bch201CarbMetabolism1Lessons, ...bch201CarbMetabolism2Lessons, ...bch201ProteinMetabolismLessons, ...bch201LipidMetabolismLessons, ...bch201DisordersTcaLessons, ...bch201AminoAcidsLessons, ...bch201AminoAcidMetabolismLessons, ...bch201ProteinStructureLessons, ...bch201Membranes1Lessons, ...bch201Membranes2Lessons, ...bch201DigestionAbsorptionLessons, ...bch201PcmLessons, ...bch201BioenergeticsClinicalLessons, ...bch201NucleotidesLessons, ...pct201SpecificGravityLessons, ...pct201DensityBlockLessons, ...pct201ConcentrationLessons, ...pct201PotencyLessons, ...pct201ClinicalLessons, ...pct201DoseLessons, ...pct201FundamentalsLessons, ...pct201MeasurementSystemsLessons, ...pct201MeasurementPracticeLessons, ...pct201IntroductionLessons, ...pct201DosageFormsLessons, ...pct201ExcipientsLessons, ...pct201PrescriptionInterpretationLessons, ...pct201IsotonicBuffersLessons, ...pct201ElectrolytesLessons, ...pct201ParenteralLessons, ...pct201NutritionLessons, ...pct201DilutionAlligationLessons, ...pct201FormulaScalingLessons, ...pct201CompoundingLessons, ...pct201VeterinaryLessons, ...pct201PlantExtractsLessons, ...pct201DrugMoietyLessons, ...pct201RadiopharmaceuticalLessons, ...pct201PharmacokineticsLessons, ...pct201CostLessons, ...pct201DispensingEthicsLessons, ...pct201DispensingProcedureLessons, ...pct201PackagingLessons, ...pct201SolubilityLessons, ...pct201DiffusionPartitioningLessons, ...pct201SurfaceInterfacialLessons, ...pct201RheologyLessons, ...pct201MicromeriticsLessons, ...pct201PowdersGranulesLessons, ...pct201TabletsLessons, ...pct201CapsulesLessons, ...pct201SolutionsLessons, ...pct201SuspensionsLessons, ...pct201EmulsionsLessons, ...pct201SemisolidsLessons, ...pct201SuppositoriesLessons, ...pct201SterileLessons, ...pct201StabilityLessons, ...pct201CalculationFoundationsLessons];

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
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'introduction-to-biochemistry',
    topicName: 'Introduction to Biochemistry',
    lessonCount: 2,
    tiers: { C: 1, A: 1 },
    batch: 4,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'metabolism',
    topicName: 'Metabolism — Introduction to the Study of Intermediary Metabolism',
    lessonCount: 13,
    tiers: { C: 1, A: 2, B: 10 },
    batch: 4,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'carbohydrate-metabolism-topic',
    topicName: 'Carbohydrate Metabolism',
    lessonCount: 16,
    tiers: { C: 1, A: 5, B: 10 },
    batch: 5,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'protein-metabolism-topic',
    topicName: 'Protein Metabolism',
    lessonCount: 11,
    tiers: { C: 1, A: 2, B: 8 },
    batch: 4,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'lipid-metabolism-topic',
    topicName: 'Lipid Metabolism',
    lessonCount: 14,
    tiers: { C: 1, A: 4, B: 9 },
    batch: 5,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'disorders-of-intermediary-metabolism',
    topicName: 'Disorders of Intermediary Metabolism',
    lessonCount: 6,
    tiers: { C: 1, A: 2, B: 3 },
    batch: 6,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'citric-acid-cycle',
    topicName: 'Citric Acid Cycle',
    lessonCount: 7,
    tiers: { C: 1, A: 1, B: 5 },
    batch: 6,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'amino-acids',
    topicName: 'Amino Acids',
    lessonCount: 11,
    tiers: { C: 1, A: 2, B: 8 },
    batch: 7,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'amino-acid-metabolism',
    topicName: 'Amino Acid Metabolism',
    lessonCount: 14,
    tiers: { C: 1, A: 3, B: 10 },
    batch: 8,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'protein-structure-and-function',
    topicName: 'Protein Structure & Function',
    lessonCount: 15,
    tiers: { C: 1, A: 2, B: 12 },
    batch: 9,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'membranes-and-cell-structure',
    topicName: 'Membranes and Cell Structure',
    lessonCount: 17,
    tiers: { C: 1, A: 3, B: 13 },
    batch: 10,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'digestion',
    topicName: 'Digestion',
    lessonCount: 4,
    tiers: { C: 1, B: 3 },
    batch: 12,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'absorption',
    topicName: 'Absorption',
    lessonCount: 7,
    tiers: { C: 1, B: 6 },
    batch: 12,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'protein-calorie-malnutrition',
    topicName: 'Protein-Calorie Malnutrition (PCM)',
    lessonCount: 10,
    tiers: { C: 1, A: 5, B: 4 },
    batch: 13,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics',
    lessonCount: 7,
    tiers: { C: 1, A: 3, B: 3 },
    batch: 14,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'clinical-biochemistry',
    topicName: 'Clinical Biochemistry',
    lessonCount: 6,
    tiers: { C: 1, A: 2, B: 3 },
    batch: 14,
    validated: true,
  },
  {
    courseId: 'bch-201',
    courseCode: 'BCH 201',
    topicId: 'nucleotides-and-nucleic-acids',
    topicName: 'Nucleotides and Nucleic Acids',
    lessonCount: 11,
    tiers: { C: 1, A: 3, B: 7 },
    batch: 15,
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
