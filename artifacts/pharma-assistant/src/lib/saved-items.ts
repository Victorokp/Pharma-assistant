import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiError, createSavedItem, deleteSavedItem, getSavedItems, updateSavedItem } from '@workspace/api-client-react';
import type { SavedItem } from '@workspace/api-client-react';

/**
 * Saved lessons (bookmarks) — wiring the saved-items backend foundation
 * (table + routes + generated hooks, annotated "backend foundation only (no
 * UI yet)") to its UI. One module owns the list query so the save toggle on
 * a lesson page and the Saved-lessons section on /study stay consistent.
 *
 * Identity is server-side (requireAuth + Clerk): the client only supplies
 * kind/nodeId/title; the server scopes every row to request.authUserId.
 * kind is always 'lesson' — the only value in the current API contract.
 */

/** Query key shared by every consumer of the saved-items list. */
export const SAVED_ITEMS_KEY = ['saved-items'] as const;

/** Read the saved lessons for the signed-in student. Disabled while signed out. */
export function useSavedItems(enabled: boolean) {
  return useQuery({
    queryKey: SAVED_ITEMS_KEY,
    queryFn: async (): Promise<SavedItem[]> => {
      try {
        const data = await getSavedItems();
        return data.items;
      } catch (error) {
        // Session expired between enable and fetch — treat as signed out
        // rather than flashing an error for a read-only convenience list.
        if (error instanceof ApiError && error.status === 401) return [];
        throw error;
      }
    },
    enabled,
    staleTime: 30_000,
  });
}

/** A reactive Set of saved curriculum node ids for cheap toggle checks. */
export function useSavedNodeIds(enabled: boolean): Set<string> {
  const { data } = useSavedItems(enabled);
  return useMemo(() => new Set((data ?? []).map((item) => item.nodeId ?? '')), [data]);
}

/** Save (idempotent server-side) or remove a lesson bookmark. */
export function useToggleSavedLesson() {
  const queryClient = useQueryClient();
  const invalidate = () => {
    void queryClient.invalidateQueries({ queryKey: SAVED_ITEMS_KEY });
  };

  const save = useMutation({
    mutationFn: (input: { nodeId: string; title: string; note?: string }) =>
      createSavedItem({ kind: 'lesson', nodeId: input.nodeId, title: input.title, note: input.note ?? null }),
    onSuccess: invalidate,
  });

  const remove = useMutation({
    mutationFn: (savedItemId: string) => deleteSavedItem(savedItemId),
    onSuccess: invalidate,
  });

  return { save, remove };
}

/** Edit a saved lesson's personal note (Phase 11). */
export function useUpdateSavedItemNote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { id: string; note: string | null }) => updateSavedItem(input.id, { note: input.note }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: SAVED_ITEMS_KEY });
    },
  });
}
