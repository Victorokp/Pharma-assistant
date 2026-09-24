import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudySessions } from '@workspace/api-client-react';
import type { StudySession } from '@workspace/api-client-react';
import { useAccount } from '@/lib/auth';
import { isServerBackendActive, onBackendChange } from '@/lib/progress-store';
import { BookOpen, Clock, ListChecks } from 'lucide-react';

/**
 * Study history (Phase 10) — surfaces the previously write-only study-sessions
 * read path. GET /student/study-sessions and its generated hook have existed
 * since the persistence phase with zero frontend consumers; sessions were
 * recorded by Study Mode but never shown anywhere.
 *
 * Signed-in students see their recent Study Mode sessions — topic, subject,
 * mode (Lesson / AI tutor), duration, honest status (Completed / Ended early),
 * and date. Guests see nothing: persistence is the sign-in value-add, exactly
 * matching the write path's contract.
 *
 * Network discipline: react-query caches the list (staleTime 60s), so opening
 * Progress costs one request; refetch on window focus and on sign-in/sign-out
 * backend switches (the pattern proven by progress-dashboard).
 */

function formatDuration(startedAt: string, endedAt: string): string {
  const ms = new Date(endedAt).getTime() - new Date(startedAt).getTime();
  if (!Number.isFinite(ms) || ms < 0) return '—';
  const minutes = Math.round(ms / 60000);
  if (minutes < 1) return 'Under a minute';
  if (minutes === 1) return '1 min';
  return `${minutes} min`;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
}

const MODE_LABEL: Record<string, string> = {
  authored: 'Lesson',
  ai: 'AI tutor',
};

export default function StudyHistory() {
  const { isLoaded, isSignedIn } = useAccount();
  const [backendActive, setBackendActive] = useState(isServerBackendActive());

  // Follow sign-in/sign-out backend switches so the section appears/disappears
  // honestly rather than showing stale or fabricated history.
  useEffect(() => {
    const update = () => setBackendActive(isServerBackendActive());
    update();
    return onBackendChange(update);
  }, []);

  const sessionsQuery = useQuery({
    queryKey: ['study-sessions'],
    queryFn: async (): Promise<StudySession[]> => {
      const data = await getStudySessions();
      return data.items;
    },
    enabled: isLoaded && isSignedIn && backendActive,
    staleTime: 60_000,
  });

  if (!isLoaded || !isSignedIn || !backendActive) return null; // guests: no fabricated history

  if (!sessionsQuery.isFetched) {
    // First load in flight — quiet skeleton strip.
    return (
      <section aria-label="Study history" data-testid="study-history-loading">
        <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Study history</h2>
        <div className="mt-3 h-16 animate-pulse rounded-2xl border border-border bg-muted/40" />
      </section>
    );
  }

  if (sessionsQuery.isError) {
    return (
      <section aria-label="Study history" data-testid="study-history-error">
        <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Study history</h2>
        <p className="mt-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
          Study history couldn't be loaded this time.
        </p>
      </section>
    );
  }

  const sessions = sessionsQuery.data ?? [];

  if (sessions.length === 0) {
    return (
      <section aria-label="Study history" data-testid="study-history-empty">
        <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Study history</h2>
        <p className="mt-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
          No study sessions yet — finish a Study Mode session and it will appear here.
        </p>
      </section>
    );
  }

  const completedCount = sessions.filter((session) => session.status === 'completed').length;

  return (
    <section aria-label="Study history" data-testid="study-history">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Study history</h2>
        <p className="text-xs text-muted-foreground">
          {sessions.length} session{sessions.length === 1 ? '' : 's'} · {completedCount} completed
        </p>
      </div>
      <ul className="mt-3 space-y-2">
        {sessions.slice(0, 10).map((session) => (
          <li
            key={session.id}
            className="rounded-2xl border border-border bg-card px-4 py-3"
            data-testid={`study-session-${session.id}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="min-w-0 truncate text-sm font-semibold text-primary">
                {session.topic}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${
                  session.status === 'completed'
                    ? 'bg-accent/12 text-accent'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {session.status === 'completed' ? 'Completed' : 'Ended early'}
              </span>
            </div>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              <span className="font-mono font-semibold uppercase tracking-[0.1em]">{session.subject}</span>
              <span className="inline-flex items-center gap-1">
                <ListChecks className="size-3" aria-hidden="true" />
                {MODE_LABEL[session.mode] ?? session.mode}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" aria-hidden="true" />
                {formatDuration(session.startedAt, session.endedAt)}
              </span>
              <span className="inline-flex items-center gap-1">
                <BookOpen className="size-3" aria-hidden="true" />
                {formatDate(session.startedAt)}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
