import { useAccount } from '@/lib/auth';
import { useSavedItems, useToggleSavedLesson } from '@/lib/saved-items';
import { BookMarked, Bookmark, Loader2 } from 'lucide-react';

/**
 * Save/unsave bookmark toggle for the current lesson (Phase 7 Saved lessons).
 * Hidden for guests — docs/progress-style honest behavior without a sign-in
 * interrupt on the reading flow. State derives from the shared saved-items
 * query so /study and the lesson page can never disagree.
 */
export default function LessonSaveToggle({ nodeId, title }: { nodeId: string; title: string }) {
  const { isSignedIn } = useAccount();
  const items = useSavedItems(isSignedIn);
  const { save, remove } = useToggleSavedLesson();

  // Bookmarks are an account feature — guests don't see the control.
  if (!isSignedIn) return null;

  // The saved-item row id (not the nodeId) is what DELETE expects.
  const savedItem = (items.data ?? []).find((item) => item.nodeId === nodeId);

  const isSaved = Boolean(savedItem);
  const busy = save.isPending || remove.isPending;

  function toggle() {
    if (busy || !savedItem && isSaved) return; // can't remove without the row
    if (isSaved) {
      if (savedItem) remove.mutate(savedItem.id);
      return;
    }
    save.mutate({ nodeId, title });
  }

  const label = isSaved ? 'Saved — select to remove' : 'Save this lesson';

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={busy}
      aria-pressed={isSaved}
      className={`focus-ring flex min-h-10 w-full items-center justify-center gap-2 rounded-full border px-4 text-xs font-bold transition-all sm:w-auto sm:self-start ${
        isSaved
          ? 'border-accent/40 bg-accent/10 text-accent'
          : 'border-border bg-card text-primary hover:border-primary/40 hover:bg-muted'
      }`}
      data-testid="lesson-save-toggle"
      aria-label={label}
    >
      {busy ? (
        <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
      ) : isSaved ? (
        <BookMarked className="size-3.5" aria-hidden="true" />
      ) : (
        <Bookmark className="size-3.5" aria-hidden="true" />
      )}
      {isSaved ? 'Saved' : 'Save lesson'}
    </button>
  );
}
