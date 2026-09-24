import { type ReactNode } from 'react';

/**
 * Shared skeleton for loading states (AI generation, future async pages).
 * Renders a card with a shimmering block — no fake content, just honest
 * "working on it" geometry that matches the app's card rhythm.
 */
export default function LoadingCard({
  lines = 3,
  label,
  testId,
  children,
}: {
  /** Number of shimmer lines under the header. */
  lines?: number;
  /** Visible status text under the header (e.g. "Writing your quiz…"). */
  label?: string;
  testId?: string;
  /** Optional custom body; when given, lines are not rendered. */
  children?: ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      data-testid={testId}
      role="status"
    >
      <div className="flex items-center gap-3">
        <span className="size-8 animate-pulse-soft rounded-lg bg-muted" aria-hidden="true" />
        <span className="h-4 w-40 animate-pulse-soft rounded-full bg-muted" aria-hidden="true" />
      </div>
      {children ? (
        <div className="mt-5">{children}</div>
      ) : (
        <>
          {label && <p className="mt-5 text-sm text-muted-foreground">{label}</p>}
          <div className="mt-4 space-y-2.5" aria-hidden="true">
            {Array.from({ length: lines }).map((_, index) => (
              <span
                key={index}
                className="block h-3 animate-pulse-soft rounded-full bg-muted"
                style={{ width: `${88 - index * 14}%`, animationDelay: `${index * 120}ms` }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
