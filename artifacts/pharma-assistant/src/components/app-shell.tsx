import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import {
  BookOpen,
  Brain,
  LayoutDashboard,
  LibraryBig,
  LogIn,
  LogOut,
  MessagesSquare,
  Pill,
  TrendingUp,
  FileText,
  FlaskConical,
  UserRound,
  type LucideIcon,
} from 'lucide-react';
import { useAccount } from '@/lib/auth';
import { fetchCurrentUserProfile } from '@/lib/progress-server';
import ThemeToggle from '@/components/theme-toggle';

/**
 * Persistent app shell for the multi-page app.
 *
 * All navigation uses wouter's client-side <Link> — the shell never
 * unmounts, so tapping a tab swaps page content instantly with no document
 * reload and no white flash (raw <a href> navigations previously tore the
 * whole SPA down and reloaded the document, which read as a 2–3s blank on
 * phones, especially in dev).
 *
 * Desktop: sticky top header with brand + pill navigation (primary routes,
 * divider, secondary routes).
 * Mobile: compact top header (brand only) + fixed bottom tab bar with the
 * five primary destinations, safe-area padded so nothing hides behind the
 * home indicator. Docs, Ask, and Drugs stay reachable from the dashboard
 * and desktop nav without crowding the mobile tab bar.
 */
export type ShellNavItem = {
  path: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
};

/**
 * Primary destinations — desktop pill nav and the mobile bottom tab bar
 * (Home | Courses | Study | Drugs | Progress). Progress is the student's
 * personal space (scores + account sign-in), reachable from Home as well.
 * Quiz, Ask, and Docs stay in the desktop nav and dashboard without
 * crowding the phone tab bar.
 */
const PRIMARY_NAV: ShellNavItem[] = [
  { path: '/dashboard', label: 'Dashboard', shortLabel: 'Home', icon: LayoutDashboard },
  { path: '/courses', label: 'Courses', shortLabel: 'Courses', icon: LibraryBig },
  { path: '/study', label: 'Study Mode', shortLabel: 'Study', icon: BookOpen },
  { path: '/drugs', label: 'Drugs', shortLabel: 'Drugs', icon: FlaskConical },
  { path: '/progress', label: 'Progress', shortLabel: 'Progress', icon: TrendingUp },
];

const SECONDARY_NAV: ShellNavItem[] = [
  { path: '/quiz', label: 'Quiz', shortLabel: 'Quiz', icon: Brain },
  { path: '/ask', label: 'Ask AI', shortLabel: 'Ask', icon: MessagesSquare },
  { path: '/docs', label: 'Docs / Materials', shortLabel: 'Docs', icon: FileText },
];

/**
 * Account control — sign-in entry point when signed out; a name chip with
 * sign-out when signed in. The display name comes from the student's own
 * account record (Clerk profile, synced server-side); nothing is invented.
 */
function AccountControl({ compact = false }: { compact?: boolean }) {
  const { authAvailable, isSignedIn, signIn, signOut } = useAccount();
  const [displayName, setDisplayName] = useState<string | null>(null);

  // Fetch the signed-in profile for a friendly greeting (best-effort;
  // the same endpoint performs the server-side user sync).
  useEffect(() => {
    if (!isSignedIn) {
      setDisplayName(null);
      return;
    }
    let cancelled = false;
    void fetchCurrentUserProfile()
      .then((profile) => {
        if (cancelled) return;
        setDisplayName(
          profile.firstName?.trim() ||
            profile.email?.split('@')[0] ||
            null,
        );
      })
      .catch(() => {
        // Server may not have auth configured; the chip still works.
      });
    return () => {
      cancelled = true;
    };
  }, [isSignedIn]);

  if (!authAvailable) return null;

  if (!isSignedIn) {
    return (
      <button
        type="button"
        onClick={signIn}
        className="focus-ring flex min-h-11 items-center gap-2 rounded-xl border border-primary/25 bg-secondary/70 px-3.5 text-xs font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/45 active:translate-y-0 sm:min-h-9"
        aria-label="Sign in to save your progress"
        data-testid="button-sign-in"
      >
        <LogIn className="size-4" aria-hidden="true" />
        Sign in
      </button>
    );
  }

  return (
    <span
      className="flex items-center gap-2 rounded-full border border-border bg-card/70 py-1 pl-1 pr-1 sm:pr-3"
      data-testid="account-signed-in"
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <UserRound className="size-4" aria-hidden="true" />
      </span>
      {!compact && (
        <span className="hidden max-w-[10rem] truncate text-xs font-bold text-primary sm:block">
          {displayName ?? 'Signed in'}
        </span>
      )}
      <button
        type="button"
        onClick={() => void signOut()}
        className="focus-ring flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
        aria-label="Sign out"
        data-testid="button-sign-out"
      >
        <LogOut className="size-4" aria-hidden="true" />
      </button>
    </span>
  );
}

export default function AppShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const isActive = (path: string) =>
    location === path || (path !== '/dashboard' && location.startsWith(`${path}/`));

  return (
    <div className="grain flex min-h-[100dvh] flex-col text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-5 px-5 py-3 sm:px-8 sm:py-4 lg:px-10">
          <Link
            href="/dashboard"
            className="focus-ring flex shrink-0 items-center gap-3 rounded-xl text-left"
            data-testid="brand-pharma-assistant"
          >
            <span className="flex size-10 items-center justify-center rounded-[13px] bg-primary text-primary-foreground shadow-sm transition-transform">
              <Pill className="size-5" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-[1.05rem] font-semibold tracking-[-0.03em] text-primary">Pharma Assistant</span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:block">study companion</span>
            </span>
          </Link>

          {/* Theme + account — ONE shared instance; both controls size
              themselves responsively (44px targets on small screens, compact
              from sm/md up), so no duplicate DOM copies are needed. */}

          {/* Desktop navigation */}
          <nav className="nav-scroll hidden max-w-[58vw] items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/70 p-1 md:flex" aria-label="Primary navigation">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`focus-ring flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-primary'
                }`}
                data-testid={`nav-${item.path.slice(1)}`}
              >
                <item.icon className="size-3.5" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
            <span className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden="true" />
            {SECONDARY_NAV.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`focus-ring flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-primary'
                }`}
                data-testid={`nav-${item.path.slice(1)}`}
              >
                <item.icon className="size-3.5" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-xs font-medium text-muted-foreground lg:flex">
              <span className="size-2 rounded-full bg-success" aria-hidden="true" />
              AI answers
            </div>
            <ThemeToggle />
            <AccountControl />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full flex-1 max-w-[1240px] px-5 pb-28 pt-7 sm:px-8 sm:pt-10 md:pb-12 lg:px-10">
        {children}
      </main>

      <footer className="mx-auto hidden w-full max-w-[1420px] flex-col gap-3 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 md:flex">
        <span>Made for the questions between study sessions.</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em]">
          Pharma Assistant · study companion
        </span>
      </footer>

      {/* Mobile bottom tab bar — safe-area padded, ≥44px touch targets */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        aria-label="Mobile navigation"
        data-testid="mobile-bottom-nav"
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-between px-2">
          {PRIMARY_NAV.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={active ? 'page' : undefined}
                className={`focus-ring flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 pb-2 pt-2 text-[11px] font-semibold transition-colors ${
                  active ? 'text-primary' : 'text-muted-foreground'
                }`}
                data-testid={`mobile-nav-${item.path.slice(1)}`}
              >
                <span
                  className={`flex h-8 w-12 items-center justify-center rounded-full transition-colors ${
                    active ? 'bg-primary/15' : ''
                  }`}
                >
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                {item.shortLabel}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
