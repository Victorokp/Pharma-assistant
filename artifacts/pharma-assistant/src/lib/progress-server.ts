/**
 * Server backend helpers — thin wrappers over the generated student API.
 *
 * All merge/idempotency policy lives in progress-store.ts (the backend
 * switcher); these functions only map API payloads onto the client shapes
 * the existing progress calculations expect.
 */
import {
  getQuizResults,
  putLessonProgress,
  getCurrentUser,
} from '@workspace/api-client-react';
import type { QuizResult, ProgressStats, TopicPerformance } from './progress-core';
import { computeStatsFromQuizzes } from './progress-core';

/**
 * Fetch the signed-in user's quiz history from the server and map it onto
 * the same shape the local store produces, so every existing progress
 * calculation keeps working without changes. Full history — no 50-item cap.
 */
export async function fetchServerQuizzes(): Promise<QuizResult[]> {
  const data = await getQuizResults();
  return data.items.map((item) => ({
    id: item.id,
    completedAt: new Date(item.completedAt).toISOString(),
    subject: item.subject,
    difficulty: item.difficulty,
    totalQuestions: item.totalQuestions,
    correct: item.correct,
    incorrect: item.incorrect,
    percentage: item.percentage,
    topicOutcomes: item.topicOutcomes.map((outcome) => ({
      topic: outcome.topic,
      correct: outcome.correct,
    })),
  }));
}

/** Stats computed from any quiz list — shared by both backends. */
export function statsFromQuizzes(quizzes: QuizResult[]): ProgressStats {
  return computeStatsFromQuizzes(quizzes);
}

/** Lesson progress on the server (write). */
export async function saveServerLessonProgress(nodeId: string, completed: boolean): Promise<void> {
  await putLessonProgress({ nodeId, completed, sectionsCompleted: null });
}

/** Current signed-in profile (also performs the server-side user sync). */
export async function fetchCurrentUserProfile() {
  return getCurrentUser();
}

export type { ProgressStats, TopicPerformance };
