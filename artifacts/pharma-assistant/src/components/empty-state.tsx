import type { LucideIcon } from 'lucide-react';
import { type ReactNode } from 'react';

/**
 * Shared empty state — one consistent, honest pattern for "nothing here yet"
 * screens (Progress before first quiz, Docs placeholder, future features).
 * Icon chip + serif title + short message + optional action button.
 */
export default function EmptyState({
  icon: Icon,
  title,
  message,
  action,
  testId,
  tone = 'neutral',
}: {
  icon: LucideIcon;
  title: string;
  message: string;
  /** Optional call-to-action rendered under the message. */
  action?: ReactNode;
  testId?: string;
  /** 'neutral' = quiet blue chip; 'accent' = mint chip for onboarding moments. */
  tone?: 'neutral' | 'accent';
}) {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl border border-border px-6 py-10 text-center sm:py-12 ${
        tone === 'accent' ? 'bg-accent/8' : 'bg-muted/60'
      }`}
      data-testid={testId}
    >
      <span
        className={`flex size-12 items-center justify-center rounded-2xl ${
          tone === 'accent' ? 'bg-accent/12 text-accent' : 'bg-secondary text-primary'
        }`}
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-serif text-xl font-semibold tracking-[-0.03em] text-primary">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{message}</p>
      {action && <div className="mt-5 flex flex-wrap items-center justify-center gap-2">{action}</div>}
    </div>
  );
}
