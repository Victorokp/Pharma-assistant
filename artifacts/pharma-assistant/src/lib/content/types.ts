/**
 * Content layer types — the "HOW we teach" schema.
 *
 * The curriculum (src/lib/curriculum.ts) is the immutable source of WHAT is
 * taught (course → topic → subtopic). This layer attaches authored lesson
 * content to existing curriculum nodes WITHOUT ever modifying the curriculum.
 *
 * Equation contract (matches MathText): inline $...$, display $$...$$.
 * No raw LaTeX delimiters \( \) or \[ \] may appear in section bodies.
 */

/** Depth tier from the approved Phase-1 Study-Unit + Depth-Tier Map. */
export type LessonTier = 'A' | 'B' | 'C' | 'D';

/** Standard lesson sections per the approved Content Generation Standard. */
export type LessonSectionKind =
  | 'FOUNDATION'
  | 'UNDERSTAND'
  | 'KEY FACTS'
  | 'FORMULAS'
  | 'WORKED EXAMPLE'
  | 'PHARMACY CONNECTION'
  | 'CHECK QUESTIONS'
  | 'QUICK RECAP';

export type LessonSection = {
  kind: LessonSectionKind;
  /** Markdown body. Equations use $...$ / $$...$$ (rendered by MathText). */
  body: string;
};

export type LessonNodeType = 'topic' | 'subtopic';

/**
 * One authored lesson, attached to exactly one existing curriculum node.
 * `nodeId` must be an existing curriculum topic/subtopic ID; `title` must
 * equal that node's current name (validated — no renaming via content).
 */
export type Lesson = {
  /** Curriculum topic or subtopic ID (must exist — validation fails otherwise). */
  nodeId: string;
  /** Curriculum course ID, e.g. 'bch-201'. */
  courseId: string;
  /** Curriculum topic ID the node belongs to (== nodeId for topic lessons). */
  topicId: string;
  nodeType: LessonNodeType;
  /** Must match the curriculum node's exact current name. */
  title: string;
  tier: LessonTier;
  sections: LessonSection[];
  /** CONTENT GAP FLAG entries (rule 16): reported, never restructured. */
  gapFlags?: string[];
  /** REQUIRES SOURCE VERIFICATION entries (rule 12). */
  verifyFlags?: string[];
};
