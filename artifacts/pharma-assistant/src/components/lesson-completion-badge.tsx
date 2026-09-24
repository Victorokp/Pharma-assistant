import { useLessonProgress } from '@/lib/lesson-progress-hook';
import { CheckCircle2 } from 'lucide-react';

/**
 * Lesson completion badge (Phase 9): surfaces the previously write-only
 * lesson-progress read path on the lesson page itself. Shown only when the
 * server-backed progress data is actually loaded — guests see nothing rather
 * than a misleading state.
 */
export default function LessonCompletionBadge({ nodeId }: { nodeId: string }) {
  const { completedMap, synced } = useLessonProgress();
  if (!synced) return null; // guest / server backend inactive → no state to show
  const completed = completedMap.get(nodeId);
  if (!completed) return null; // not completed → badge stays quiet

  return (
    <span
      className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 text-xs font-bold text-accent"
      data-testid="lesson-completed-badge"
    >
      <CheckCircle2 className="size-3.5" aria-hidden="true" />
      Completed
    </span>
  );
}
