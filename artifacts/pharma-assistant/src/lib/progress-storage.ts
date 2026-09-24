/**
 * Student progress storage — the original localStorage API, preserved.
 *
 * Persistence layer for quiz history and derived progress analytics. Uses
 * localStorage: quiz data is non-sensitive study history, stays on the
 * student's device, and survives refresh.
 *
 * Phase 3: the pure logic and storage primitives now live in
 * progress-core.ts so the server backend (progress-server.ts) reuses the
 * exact same computations. When a student signs in, progress-store.ts
 * swaps this module for the server backend transparently — components keep
 * calling the same functions.
 */

import {
  type ProgressData,
  type ProgressStats,
  type QuizResult,
  type TopicPerformance,
  computeStatsFromQuizzes,
  clearLocalData,
  makeLocalQuiz,
  readLocalData,
  writeLocalData,
} from './progress-core';

export type { ProgressData, ProgressStats, QuizResult, TopicPerformance };

/**
 * Save one completed quiz locally. Kept as the guest-backend write path;
 * when signed in, progress-store.saveQuizResult routes to the server
 * instead and this function is not called.
 */
export function saveQuizResult(result: Omit<QuizResult, 'id' | 'completedAt'>): QuizResult {
  const data = readLocalData();
  const quiz = makeLocalQuiz(result);
  // Newest first, capped so local storage stays small.
  const quizzes = [quiz, ...data.quizzes].slice(0, 50);
  writeLocalData({ quizzes });
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
  return computeStatsFromQuizzes(readLocalData().quizzes);
}

/** Percentages for a single topic across quizzes, oldest first. */
export function getTopicQuizHistory(topic: string): Array<{ quizId: string; percentage: number }> {
  const { quizzes } = readLocalData();
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

/** Test/debug hook: remove all progress (guest data only). */
export function clearProgress(): void {
  clearLocalData();
}

export { readLocalData as readGuestData, writeLocalData as writeGuestData };
