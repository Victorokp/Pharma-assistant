import { type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/**
 * Shared page heading for the multi-page app — one consistent header rhythm
 * for every route (eyebrow label, serif title, short blurb, optional icon,
 * optional right-aligned actions). Motion is a single subtle rise on mount.
 */
export default function PageHeading({
  eyebrow,
  title,
  blurb,
  icon: Icon,
  testId,
  children,
  actions,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  icon?: LucideIcon;
  testId?: string;
  children?: ReactNode;
  /** Optional right-side slot (buttons/links), bottom-aligned on desktop. */
  actions?: ReactNode;
}) {
  return (
    <div className="animate-rise-in flex items-start justify-between gap-4" data-testid={testId}>
      <div className="flex min-w-0 items-start gap-4">
        {Icon && (
          <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary sm:flex">
            <Icon className="size-[22px]" aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-1.5 font-serif text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.03em] text-primary sm:text-[2rem]">
            {title}
          </h1>
          {blurb && (
            <p className="mt-2.5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem] sm:leading-7">
              {blurb}
            </p>
          )}
          {children}
        </div>
      </div>
      {actions && <div className="hidden shrink-0 items-center gap-2 sm:flex">{actions}</div>}
    </div>
  );
}
