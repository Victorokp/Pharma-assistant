import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getPreferences, putPreferences } from '@workspace/api-client-react';
import { useAccount } from '@/lib/auth';

/**
 * Theme preference (Phase 8) — user-selectable appearance: system / light /
 * dark. Completes the design-system anticipation at index.css:203 ("an
 * explicit .dark class can force it later when a toggle is added").
 *
 * Resolution: 'system' follows prefers-color-scheme (existing CSS behavior);
 * 'light'/'dark' force the .light/.dark class on <html> (both variants are
 * declared in index.css, so forcing one disables the media query for that
 * root). The choice persists in localStorage for instant first paint and is
 * synced to the student's account via the existing preferences API
 * (key 'theme') when signed in — the first consumer of that backend
 * foundation. Guests keep a local-only preference; nothing else changes.
 */

export type ThemeChoice = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'pa.theme';
const PREF_KEY = 'theme';
const CHOICES: ThemeChoice[] = ['system', 'light', 'dark'];

function sanitize(value: string | null | undefined): ThemeChoice | null {
  return value === 'system' || value === 'light' || value === 'dark' ? value : null;
}

function readLocal(): ThemeChoice {
  try {
    return sanitize(window.localStorage.getItem(STORAGE_KEY)) ?? 'system';
  } catch {
    return 'system';
  }
}

function apply(choice: ThemeChoice) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  if (choice === 'light') root.classList.add('light');
  if (choice === 'dark') root.classList.add('dark');
  // 'system' → neither class: the existing prefers-color-scheme CSS applies.
}

type ThemeContextValue = {
  /** The stored choice (may be 'system'). */
  theme: ThemeChoice;
  /** What the user actually sees right now. */
  resolved: 'light' | 'dark';
  setTheme: (choice: ThemeChoice) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { isSignedIn, isLoaded } = useAccount();
  const [theme, setThemeState] = useState<ThemeChoice>(() =>
    typeof window === 'undefined' ? 'system' : readLocal(),
  );
  const [systemDark, setSystemDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  // Track the OS preference so 'system' resolves correctly live.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // Apply on every relevant change.
  useEffect(() => {
    apply(theme);
  }, [theme, systemDark]);

  // Hydrate from the account's server-side preference once signed in.
  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;
    let cancelled = false;
    getPreferences()
      .then((data) => {
        if (cancelled) return;
        const server = sanitize(data.items.find((item) => item.key === PREF_KEY)?.value);
        if (server && server !== readLocal()) {
          try {
            window.localStorage.setItem(STORAGE_KEY, server);
          } catch {
            // Private mode etc. — session-only adoption is fine.
          }
          setThemeState(server);
        }
      })
      .catch(() => {
        // Preferences unavailable (e.g. db not configured) — local stands.
      });
    return () => {
      cancelled = true;
    };
  }, [isLoaded, isSignedIn]);

  const setTheme = useCallback(
    (choice: ThemeChoice) => {
      setThemeState(choice);
      try {
        window.localStorage.setItem(STORAGE_KEY, choice);
      } catch {
        // Non-fatal: the choice still applies for this session.
      }
      if (isSignedIn) {
        // Fire-and-forget account sync; failure keeps the local choice.
        void putPreferences({ preferences: [{ key: PREF_KEY, value: choice }] }).catch(() => {});
      }
    },
    [isSignedIn],
  );

  // Expose a stable value object so consumers don't re-render needlessly.
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolved: theme === 'system' ? (systemDark ? 'dark' : 'light') : theme,
      setTheme,
    }),
    [theme, systemDark, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
