import { useCallback, useEffect, useState } from 'react';
import { loadLessonProgress, isServerBackendActive, onBackendChange } from '@/lib/progress-store';

/**
 * Lesson-completion state for signed-in students (Phase 9).
 *
 * The persistence layer already records lesson completion
 * (`saveLessonProgress` on lesson recap) and already exposes a read API
 * (`loadLessonProgress`) — but nothing in the UI ever surfaced it. This hook
 * is that read path: a refreshable map of nodeId → completed.
 *
 * Guests: `loadLessonProgress` returns an empty map when the server backend
 * isn't active, so every consumer degrades honestly (no fabricated state).
 * Refresh triggers: mount, window focus (a quiz/session may have completed
 * in another tab), and backend switches (sign-in merge / sign-out) — the
 * exact subscription pattern proven by progress-dashboard.
 */
export function useLessonProgress() {
  const [completedMap, setCompletedMap] = useState<Map<string, boolean>>(new Map());
  const [synced, setSynced] = useState(isServerBackendActive());

  const refresh = useCallback(() => {
    setSynced(isServerBackendActive());
    void loadLessonProgress().then((next) => {
      setCompletedMap(next);
    });
  }, []);

  useEffect(() => {
    refresh();
    const unsubscribe = onBackendChange(() => {
      refresh();
    });
    window.addEventListener('focus', refresh);
    return () => {
      unsubscribe();
      window.removeEventListener('focus', refresh);
    };
  }, [refresh]);

  return { completedMap, synced };
}

/** True when the given curriculum node is recorded as completed. */
export function useIsLessonCompleted(nodeId: string | null | undefined): boolean {
  const { completedMap } = useLessonProgress();
  return Boolean(nodeId && completedMap.get(nodeId));
}
