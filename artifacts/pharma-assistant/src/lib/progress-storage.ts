/**
 * Student progress storage.
 *
 * Persistence layer for quiz history and derived progress analytics.
 * Uses localStorage: quiz data is non-sensitive study history, stays on the
 * student's device, and survives refresh. The store is an isolated module so
 * a server-backed implementation (Postgres via DATABASE_URL) can replace it
 * later without touching components.
 *
 * Storage key is versioned so a future schema change can migrate cleanly.
 */

const STORAGE_KEY = 'pharma-assistant.progress.v1';
const MAX_QUIZZES = 50;

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

function isTopicOutcomeArray(value: unknown): value is QuizResult['topicOutcomes'] {
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

function isQuizResult(value: unknown): value is QuizResult {
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

/** Read raw data; corrupted or partial entries are discarded defensively. */
function readData(): ProgressData {
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

function writeData(data: ProgressData): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable (private mode / quota): progress becomes
    // session-only rather than crashing the app.
  }
}

export function saveQuizResult(result: Omit<QuizResult, 'id' | 'completedAt'>): QuizResult {
  const data = readData();
  const quiz: QuizResult = {
    ...result,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    completedAt: new Date().toISOString(),
  };
  // Newest first, capped so storage stays small.
  const quizzes = [quiz, ...data.quizzes].slice(0, MAX_QUIZZES);
  writeData({ quizzes });
  return quiz;
}

/** Aggregate per-topic performance across all saved quizzes. */
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

export function computeStats(): ProgressStats {
  const { quizzes } = readData();
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

/** Percentages for a single topic across quizzes, oldest first. */
export function getTopicQuizHistory(topic: string): Array<{ quizId: string; percentage: number }> {
  const { quizzes } = readData();
  const chronological = [...quizzes].reverse();
  const history: Array<{ quizId: string; percentage: number }> = [];
  for (const quiz of chronological) {
    const outcomes = quiz.topicOutcomes.filter((outcome) => outcome.topic === topic);
    if (outcomes.length === 0) continue;
    const correct = outcomes.filter((outcome) => outcome.correct).length;
    history.push({ quizId: quiz.id, percentage: Math.round((correct / outcomes.length) * 100) });
  }
  return history;
}

/** Test/debug hook: remove all progress. */
export function clearProgress(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
