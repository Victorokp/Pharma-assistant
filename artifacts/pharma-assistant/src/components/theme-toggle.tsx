import { useTheme } from '@/lib/theme';
import { Moon, SunMedium } from 'lucide-react';

/**
 * Theme toggle for the app header. A simple one-tap LIGHT ↔ DARK switch:
 * it always flips the *resolved* appearance, so one tap always produces a
 * visible change — never a no-op step through 'system'. (The 'system'
 * choice remains an internal default for first-load; the user-facing
 * control never cycles through it.)
 *
 * The icon shows the CURRENT resolved appearance; the label announces the
 * action (what tapping will do), never an ambiguous "change theme".
 */
export default function ThemeToggle() {
  const { resolved, setTheme } = useTheme();

  const next = resolved === 'dark' ? 'light' : 'dark';
  const Icon = resolved === 'dark' ? Moon : SunMedium;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="focus-ring flex size-11 items-center justify-center rounded-xl border border-border bg-card/70 text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:size-9"
      data-testid="button-theme-toggle"
    >
      <Icon className="size-4" aria-hidden="true" />
      <span className="sr-only">Switch to {next} theme</span>
    </button>
  );
}
