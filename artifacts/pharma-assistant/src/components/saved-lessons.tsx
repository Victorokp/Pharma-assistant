import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useAccount } from '@/lib/auth';
import { useSavedItems, useToggleSavedLesson, useUpdateSavedItemNote } from '@/lib/saved-items';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookMarked, Loader2, NotebookPen } from 'lucide-react';

/**
 * Saved-lessons section on the Study page (Phase 7; notes added Phase 11).
 *
 * Signed-in students see their bookmarked lessons as tappable cards that
 * open /study/:nodeId, each with a personal note (the saved_items.note
 * column and contract field existed since the persistence phase — Phase 11
 * wires the edit path: a dedicated dialog, a PATCH endpoint, and honest
 * saving states). Guests see nothing (bookmarks are an account feature and
 * the page must not nag mid-flow); a failed fetch renders a quiet notice
 * rather than a scary error. No fabricated rows, no counts padded into the
 * empty state.
 */
export default function SavedLessons() {
  const { isSignedIn } = useAccount();
  const items = useSavedItems(isSignedIn);
  const [, navigate] = useLocation();
  const updateNote = useUpdateSavedItemNote();
  const { remove } = useToggleSavedLesson();

  // Note editor state: which card's dialog is open + the draft text.
  const [editing, setEditing] = useState<{ id: string; title: string; note: string } | null>(null);
  const [confirmingRemove, setConfirmingRemove] = useState<{ id: string; title: string } | null>(null);

  // Guard against removing a card whose dialog state outlives the row.
  useEffect(() => {
    if (editing && !items.data?.some((item) => item.id === editing.id)) setEditing(null);
    if (confirmingRemove && !items.data?.some((item) => item.id === confirmingRemove.id)) setConfirmingRemove(null);
  }, [items.data, editing, confirmingRemove]);

  if (!isSignedIn || items.isPending) return null;

  if (items.isError) {
    return (
      <p
        className="rounded-2xl border border-border bg-muted/60 px-4 py-3 text-xs leading-5 text-muted-foreground"
        data-testid="saved-lessons-error"
      >
        Saved lessons couldn't be loaded this time.
      </p>
    );
  }

  const saved = items.data ?? [];
  if (saved.length === 0) return null; // nothing saved → no section at all

  return (
    <section aria-label="Saved lessons" data-testid="saved-lessons">
      <div className="flex items-center gap-3">
        <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">
          <BookMarked className="mr-2 inline size-4 text-accent" aria-hidden="true" />
          Saved lessons
        </h2>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {saved.map((item) => {
          const hasNote = Boolean(item.note && item.note.trim());
          return (
            <li key={item.id} className="animate-rise-in">
              <div
                className="flex min-h-11 flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                data-testid={`saved-lesson-${item.nodeId ?? item.id}`}
              >
                <button
                  type="button"
                  onClick={() => item.nodeId && navigate(`/study/${item.nodeId}`)}
                  className="focus-ring flex w-full flex-col items-start rounded-xl text-left"
                  aria-label={`Open saved lesson: ${item.title}`}
                >
                  <span className="flex w-full items-center justify-between gap-2">
                    <BookMarked className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                    {items.isFetching && <Loader2 className="size-3 animate-spin text-muted-foreground" aria-hidden="true" />}
                  </span>
                  <span className="mt-2 line-clamp-2 text-sm font-bold leading-5 text-primary">{item.title}</span>
                  <span className="mt-1 text-[11px] text-muted-foreground">
                    Saved {new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </button>
                {hasNote && (
                  <p
                    className="mt-2 line-clamp-3 rounded-xl bg-muted/60 px-3 py-2 text-[11px] leading-4 text-muted-foreground"
                    data-testid={`saved-note-${item.nodeId ?? item.id}`}
                  >
                    {item.note}
                  </p>
                )}
                <span className="mt-2 flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setEditing({ id: item.id, title: item.title, note: item.note ?? '' })}
                    className="focus-ring flex min-h-8 items-center gap-1.5 rounded-lg px-2 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                    aria-label={hasNote ? `Edit note for ${item.title}` : `Add a note to ${item.title}`}
                    data-testid={`saved-note-edit-${item.nodeId ?? item.id}`}
                  >
                    <NotebookPen className="size-3.5" aria-hidden="true" />
                    {hasNote ? 'Edit note' : 'Add note'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmingRemove({ id: item.id, title: item.title })}
                    className="focus-ring flex min-h-8 items-center gap-1.5 rounded-lg px-2 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                    aria-label={`Remove ${item.title} from saved lessons`}
                    data-testid={`saved-remove-${item.nodeId ?? item.id}`}
                  >
                    Remove
                  </button>
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Note editor */}
      <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="sm:max-w-md" data-testid="saved-note-dialog">
          <DialogHeader>
            <DialogTitle className="font-serif text-primary">Personal note</DialogTitle>
            <DialogDescription className="line-clamp-2">{editing?.title}</DialogDescription>
          </DialogHeader>
          <textarea
            value={editing?.note ?? ''}
            onChange={(event) => setEditing((prev) => (prev ? { ...prev, note: event.target.value } : prev))}
            rows={5}
            maxLength={1000}
            placeholder="Why does this lesson matter? What to revisit before the exam…"
            className="focus-ring w-full resize-y rounded-xl border border-border bg-background px-3 py-2 text-sm leading-6 text-foreground placeholder:text-muted-foreground/70"
            aria-label="Personal note for this lesson"
            data-testid="saved-note-input"
          />
          <p className="text-[11px] text-muted-foreground">{(editing?.note ?? '').length}/1000</p>
          <DialogFooter className="gap-2">
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="focus-ring min-h-9 rounded-xl border border-border px-4 text-xs font-bold text-primary transition-colors hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={updateNote.isPending}
              onClick={() => {
                if (!editing) return;
                const text = editing.note.trim();
                updateNote.mutate(
                  { id: editing.id, note: text === '' ? null : text },
                  {
                    onSuccess: () => setEditing(null),
                  },
                );
              }}
              className="focus-ring flex min-h-9 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
              data-testid="saved-note-save"
            >
              {updateNote.isPending && <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />}
              Save note
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Removal confirmation */}
      <Dialog open={confirmingRemove !== null} onOpenChange={(open) => !open && setConfirmingRemove(null)}>
        <DialogContent className="sm:max-w-sm" data-testid="saved-remove-dialog">
          <DialogHeader>
            <DialogTitle className="font-serif text-primary">Remove saved lesson?</DialogTitle>
            <DialogDescription className="line-clamp-2">
              {confirmingRemove?.title} will no longer appear in your saved lessons. Any personal note on it goes too.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <button
              type="button"
              onClick={() => setConfirmingRemove(null)}
              className="focus-ring min-h-9 rounded-xl border border-border px-4 text-xs font-bold text-primary transition-colors hover:bg-muted"
            >
              Keep it
            </button>
            <button
              type="button"
              disabled={remove.isPending}
              onClick={() => {
                if (!confirmingRemove) return;
                remove.mutate(confirmingRemove.id, {
                  onSuccess: () => setConfirmingRemove(null),
                });
              }}
              className="focus-ring flex min-h-9 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
              data-testid="saved-remove-confirm"
            >
              {remove.isPending && <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />}
              Remove
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
