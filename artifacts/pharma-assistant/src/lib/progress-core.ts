/**
 * Progress core — shared storage primitives and pure computations.
 *
 * Both backends (guest/localStorage and server/PostgreSQL) build on these
 * functions so every progress calculation behaves identically regardless of
 * where the data lives. The old 50-quiz local cap is lifted once the server
 * is the source of truth; local storage keeps a generous safety cap.
 */

export const STORAGE_KEY = 'pharma-assistant.progress.v1';
/** Bumped on every local write so cross-tab instances re-read before merging. */
export const DATA_VERSION_KEY = 'pharma-assistant.progress.dataVersion';
/** Local safety cap — the server keeps full history without a limit. */
const MAX_LOCAL_QUIZZES = 50;

/** One completed quiz. */
export type QuizResult = {
  id: string;
  /** ISO timestamp. */
  completedAt: string;
  subject: string;
  difficulty: string;
  /** Total questions that were answered in the quiz. */
  totalQuestions: number;
  correct: number;
  incorrect: number;
  percentage: number;
  /** Per-question outcomes, keyed by topic, for strong/weak analysis. */
  topicOutcomes: Array<{ topic: string; correct: boolean }>;
};

export type ProgressData = {
  quizzes: QuizResult[];
};

export type TopicPerformance = {
  topic: string;
  answered: number;
  correct: number;
  percentage: number;
};

export type ProgressStats = {
  quizzesCompleted: number;
  questionsAnswered: number;
  overallAverage: number;
  bestScore: number;
  strongAreas: TopicPerformance[];
  weakAreas: TopicPerformance[];
  recentQuizzes: QuizResult[];
};

export function isTopicOutcomeArray(value: unknown): value is QuizResult['topicOutcomes'] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as Record<string, unknown>).topic === 'string' &&
        typeof (item as Record<string, unknown>).correct === 'boolean',
    )
  );
}

export function isQuizResult(value: unknown): value is QuizResult {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.completedAt === 'string' &&
    typeof candidate.subject === 'string' &&
    typeof candidate.difficulty === 'string' &&
    typeof candidate.totalQuestions === 'number' &&
    typeof candidate.correct === 'number' &&
    typeof candidate.incorrect === 'number' &&
    typeof candidate.percentage === 'number' &&
    isTopicOutcomeArray(candidate.topicOutcomes)
  );
}

/** Read raw local data; corrupted or partial entries are discarded defensively. */
export function readLocalData(): ProgressData {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { quizzes: [] };
    const parsed: unknown = JSON.parse(raw);
    const quizzes = Array.isArray((parsed as ProgressData | null)?.quizzes)
      ? ((parsed as ProgressData).quizzes.filter(isQuizResult) as QuizResult[])
      : [];
    return { quizzes };
  } catch {
    return { quizzes: [] };
  }
}

/** Bump the data-version marker (used by cross-tab merge coordination). */
export function bumpDataVersion(): void {
  try {
    window.localStorage.setItem(DATA_VERSION_KEY, String(Date.now()));
  } catch {
    // ignore
  }
}

export function writeLocalData(data: ProgressData): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    bumpDataVersion();
  } catch {
    // Storage unavailable (private mode / quota): progress becomes
    // session-only rather than crashing the app.
  }
}

export function clearLocalData(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    bumpDataVersion();
  } catch {
    // ignore
  }
}

export function makeLocalQuiz(result: Omit<QuizResult, 'id' | 'completedAt'>): QuizResult {
  return {
    ...result,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    completedAt: new Date().toISOString(),
  };
}

/** Aggregate per-topic performance across quizzes (pure, backend-agnostic). */
export function computeTopicPerformance(quizzes: QuizResult[]): TopicPerformance[] {
  const totals = new Map<string, { answered: number; correct: number }>();
  for (const quiz of quizzes) {
    for (const outcome of quiz.topicOutcomes) {
      const key = outcome.topic.trim() || 'General';
      const record = totals.get(key) ?? { answered: 0, correct: 0 };
      record.answered += 1;
      if (outcome.correct) record.correct += 1;
      totals.set(key, record);
    }
  }
  return Array.from(totals.entries())
    .map(([topic, { answered, correct }]) => ({
      topic,
      answered,
      correct,
      percentage: Math.round((correct / answered) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

/** Pure stats computation shared by guest and server backends. */
export function computeStatsFromQuizzes(quizzes: QuizResult[]): ProgressStats {
  const answered = quizzes.reduce((sum, quiz) => sum + quiz.totalQuestions, 0);
  const correct = quizzes.reduce((sum, quiz) => sum + quiz.correct, 0);
  const topics = computeTopicPerformance(quizzes);

  return {
    quizzesCompleted: quizzes.length,
    questionsAnswered: answered,
    overallAverage: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    bestScore: quizzes.reduce((best, quiz) => Math.max(best, quiz.percentage), 0),
    // A topic needs at least 2 answers before we call it strong or weak.
    strongAreas: topics.filter((topic) => topic.answered >= 2 && topic.percentage >= 75),
    weakAreas: topics.filter((topic) => topic.answered >= 2 && topic.percentage < 75),
    recentQuizzes: quizzes.slice(0, 5),
  };
}
