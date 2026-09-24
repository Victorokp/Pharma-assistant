/**
 * ProgressStore — the single storage façade used by all components.
 *
 * Two interchangeable backends behind one API:
 * - Guest (default): the original localStorage behavior, byte-for-byte.
 * - Server (signed in): PostgreSQL via the authenticated student API, with
 *   full history (the old 50-result local cap no longer applies).
 *
 * Login merge (handleAuthChange): local quiz history is uploaded once,
 * idempotently — the server skips ids it already has (unique on
 * (user, localId)), so repeated sign-ins never duplicate rows. Local data is
 * only cleared after the server round-trip is confirmed; on any failure the
 * app stays on the guest backend with local data intact, ready to merge on
 * the next sign-in. Local writes that land mid-merge are buffered and
 * flushed before the switch, so nothing is lost.
 *
 * Components keep calling saveQuizResult / loadProgressStats exactly as
 * before — the backend is selected transparently.
 */
import {
  mergeQuizResults,
  getLessonProgress,
} from '@workspace/api-client-react';
import type {
  QuizResult,
  ProgressStats,
  TopicPerformance,
} from './progress-core';
import { computeStatsFromQuizzes, makeLocalQuiz } from './progress-core';
import {
  clearProgress as clearGuestProgress,
  computeStats as computeGuestStats,
  computeTopicPerformance as computeGuestTopicPerformance,
  getTopicQuizHistory as getGuestTopicQuizHistory,
  readGuestData,
  saveQuizResult as saveGuestQuizResult,
} from './progress-storage';
import { fetchServerQuizzes, saveServerLessonProgress } from './progress-server';

export type { QuizResult, ProgressStats, TopicPerformance };
export { computeGuestTopicPerformance as computeTopicPerformance };
export { getGuestTopicQuizHistory as getTopicQuizHistory };
/**
 * Guest/localStorage clear — the original behavior, unchanged. Only reachable
 * in guest mode: the Progress page hides the clear action when the server
 * backend is active, so account data is never deleted by this path.
 */
export { clearGuestProgress as clearProgress };

/** True when the signed-in server backend is the source of truth. */
let serverBackendActive = false;

export function isServerBackendActive(): boolean {
  return serverBackendActive;
}

/** Subscribers notified when the active backend flips (sign-in / sign-out). */
const backendListeners = new Set<() => void>();

/** Subscribe to backend switches; returns an unsubscribe function. */
export function onBackendChange(listener: () => void): () => void {
  backendListeners.add(listener);
  return () => {
    backendListeners.delete(listener);
  };
}

function notifyBackendChange(): void {
  for (const listener of backendListeners) listener();
}

/** Set while the login merge runs; guest writes are buffered meanwhile. */
let merging = false;
let writesDuringMerge: QuizResult[] = [];

/** Map a client quiz onto the API merge payload (dates as ISO strings). */
function toQuizInput(quiz: QuizResult) {
  return {
    id: quiz.id,
    completedAt: new Date(quiz.completedAt).toISOString(),
    subject: quiz.subject,
    difficulty: quiz.difficulty,
    totalQuestions: quiz.totalQuestions,
    correct: quiz.correct,
    incorrect: quiz.incorrect,
    percentage: quiz.percentage,
    topicOutcomes: quiz.topicOutcomes,
  };
}

/**
 * The one quiz-write entry point (was progress-storage.saveQuizResult).
 *
 * - Guest: exact original local behavior.
 * - Signed in: optimistic return with a client-generated id (the server
 *   merge is keyed by it), sent in the background. If the send fails, the
 *   result falls back to local storage so it is never lost; the next
 *   sign-in merge reconciles it.
 */
export function saveQuizResult(result: Omit<QuizResult, 'id' | 'completedAt'>): QuizResult {
  if (serverBackendActive) {
    const quiz = makeLocalQuiz(result);
    void mergeQuizResults({ results: [toQuizInput(quiz)] }).catch(() => {
      saveGuestQuizResult(result);
    });
    return quiz;
  }
  const quiz = saveGuestQuizResult(result);
  if (merging) writesDuringMerge.push(quiz);
  return quiz;
}

/** Aggregate stats for the active backend. */
export async function loadProgressStats(): Promise<ProgressStats> {
  if (serverBackendActive) {
    try {
      return computeStatsFromQuizzes(await fetchServerQuizzes());
    } catch {
      // Server unreachable: fall back to local data so the UI keeps working.
      return computeGuestStats();
    }
  }
  return computeGuestStats();
}

export type MergeOutcome =
  | { status: 'merged'; uploaded: number }
  | { status: 'nothing-to-merge' }
  | { status: 'failed' };

/**
 * AuthGate: called by the auth layer on every signed-in state transition.
 *
 * - Sign-out: switch back to the guest backend (local data remains where it
 *   was — guest writes continue locally).
 * - Sign-in: merge local quiz history into the account (idempotent), flush
 *   any writes that landed mid-merge, then switch to the server backend and
 *   retire the local copy. Never overwrites server data with local data:
 *   the server skip-list wins for ids it already has.
 */
export async function handleAuthChange(isSignedIn: boolean): Promise<MergeOutcome | null> {
  if (!isSignedIn) {
    if (serverBackendActive) {
      serverBackendActive = false;
      notifyBackendChange();
    }
    return null;
  }
  if (serverBackendActive || merging) return null; // already synced / in flight

  merging = true;
  writesDuringMerge = [];
  try {
    const local = readGuestData();
    let uploaded = 0;

    if (local.quizzes.length > 0) {
      try {
        const result = await mergeQuizResults({
          results: local.quizzes.map(toQuizInput),
        });
        uploaded = result.merged;
      } catch {
        // Stay on the guest backend; local data is untouched and will merge
        // on the next sign-in.
        return { status: 'failed' };
      }
    }

    // Flush quizzes completed while the merge was running. They are already
    // in localStorage (guest writes always land there), so a failed flush
    // just leaves them for the next sign-in — no re-save, no duplicates.
    if (writesDuringMerge.length > 0) {
      const buffered = writesDuringMerge;
      writesDuringMerge = [];
      try {
        const result = await mergeQuizResults({ results: buffered.map(toQuizInput) });
        uploaded += result.merged;
      } catch {
        return { status: 'failed' };
      }
    }

    // Server round-trips confirmed: switch backends, then free the local copy.
    serverBackendActive = true;
    notifyBackendChange();
    clearGuestProgress();
    return { status: uploaded > 0 ? 'merged' : 'nothing-to-merge', uploaded };
  } finally {
    merging = false;
    writesDuringMerge = [];
  }
}

// ---------------------------------------------------------------------------
// Study sessions + lesson progress (server persistence for signed-in students)
// ---------------------------------------------------------------------------

export type StudySessionRecord = {
  /** Curriculum node id when the session maps to an authored lesson. */
  nodeId?: string | null;
  subject: string;
  topic: string;
  difficulty: string;
  /** 'authored' = curated lesson path, 'ai' = live tutor path. */
  mode: 'authored' | 'ai';
  plannedMinutes?: number | null;
  sectionsCompleted?: number | null;
  status: 'completed' | 'ended-early';
  keyTakeaways: string[];
  topicsToReview: string[];
  startedAt: Date;
  endedAt: Date;
};

const clamp = (value: string, max: number) =>
  value.length > max ? value.slice(0, max - 1) + '…' : value;

/** Clamp a string list to the API's item/length limits. */
function clampList(values: string[], maxItems: number, itemMax: number): string[] {
  return values
    .filter((value) => typeof value === 'string' && value.trim().length > 0)
    .slice(0, maxItems)
    .map((value) => clamp(value.trim(), itemMax));
}

/**
 * Record a finished Study Mode session on the account (signed-in only).
 * Guests keep device-only history — persistence is the sign-in value-add.
 * Fire-and-forget by design: session telemetry must never block or break
 * the lesson UI.
 */
export async function recordStudySession(session: StudySessionRecord): Promise<void> {
  if (!serverBackendActive) return;
  try {
    const { createStudySession } = await import('@workspace/api-client-react');
    await createStudySession({
      nodeId: session.nodeId ?? null,
      subject: clamp(session.subject || 'General', 160),
      topic: clamp(session.topic || 'General', 200),
      difficulty: clamp(session.difficulty || 'Beginner', 32),
      mode: session.mode,
      plannedMinutes: session.plannedMinutes ?? null,
      sectionsCompleted: session.sectionsCompleted ?? null,
      status: session.status,
      keyTakeaways: clampList(session.keyTakeaways, 20, 500),
      topicsToReview: clampList(session.topicsToReview, 20, 200),
      startedAt: session.startedAt.toISOString(),
      endedAt: session.endedAt.toISOString(),
    });
  } catch {
    // Non-fatal: session history is a best-effort record.
  }
}

/** Mark an authored lesson as completed on the account (signed-in only). */
export async function saveLessonProgress(nodeId: string, completed: boolean): Promise<void> {
  if (!serverBackendActive) return;
  try {
    await saveServerLessonProgress(nodeId, completed);
  } catch {
    // Non-fatal: lesson progress syncs on the next completion.
  }
}

/** Signed-in read of lesson progress (empty map for guests / on failure). */
export async function loadLessonProgress(): Promise<Map<string, boolean>> {
  if (!serverBackendActive) return new Map();
  try {
    const data = await getLessonProgress();
    return new Map(data.items.map((item) => [item.nodeId, item.completed]));
  } catch {
    return new Map();
  }
}
