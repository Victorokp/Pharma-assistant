import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { ClerkProvider, useAuth as useClerkAuth, useClerk } from '@clerk/clerk-react';
import { setAuthTokenGetter } from '@workspace/api-client-react';

/**
 * Authentication layer.
 *
 * Clerk is the authority for identity (Google + email sign-in, session
 * persistence, sign out). The publishable key is public by design; the
 * secret key lives only on the API server.
 *
 * Guest mode is first-class: when Clerk is not configured (no publishable
 * key) the app runs exactly as before — local storage only, no sign-in UI.
 * When Clerk IS configured, guests can still use every browsing/AI feature;
 * only server-persisted student data requires signing in.
 */

/** Public, safe to expose: Clerk publishable keys are designed for frontends. */
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

export type AccountState = {
  /** True when Clerk is configured with a publishable key. */
  authAvailable: boolean;
  /** True when a user is signed in (only possible when authAvailable). */
  isSignedIn: boolean;
  /** True while Clerk resolves the session on first load. */
  isLoaded: boolean;
  userId: string | null;
  signIn: () => void;
  signOut: () => Promise<void>;
};

const AccountContext = createContext<AccountState | null>(null);

export function useAccount(): AccountState {
  const context = useContext(AccountContext);
  if (!context) throw new Error('useAccount must be used within AccountProvider');
  return context;
}

/**
 * Inner provider: reads Clerk state and exposes it, and feeds verified
 * session tokens to the existing API client so every generated request
 * carries Authorization: Bearer <token> automatically.
 */
function ClerkBoundAccountProvider({ children }: { children: ReactNode }) {
  const { isLoaded, isSignedIn, userId, getToken, signOut: clerkSignOut } = useClerkAuth();
  const { openSignIn } = useClerk();

  useEffect(() => {
    setAuthTokenGetter(() => getToken());
    return () => setAuthTokenGetter(null);
  }, [getToken]);

  const signIn = useCallback(() => {
    openSignIn();
  }, [openSignIn]);

  const signOut = useCallback(async () => {
    await clerkSignOut();
  }, [clerkSignOut]);

  const value = useMemo<AccountState>(
    () => ({
      authAvailable: true,
      isSignedIn: Boolean(isSignedIn && userId),
      isLoaded,
      userId: userId ?? null,
      signIn,
      signOut,
    }),
    [isLoaded, isSignedIn, userId, signIn, signOut],
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

/**
 * Guest-mode provider: identical AccountState shape, but authAvailable is
 * false and sign-in is intentionally unavailable (UI hides the buttons).
 */
function GuestAccountProvider({ children }: { children: ReactNode }) {
  const value = useMemo<AccountState>(
    () => ({
      authAvailable: false,
      isSignedIn: false,
      isLoaded: true,
      userId: null,
      signIn: () => {},
      signOut: async () => {},
    }),
    [],
  );
  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

/**
 * Top-level auth wrapper. Mounts Clerk only when a publishable key exists,
 * so the app always boots — configured or not.
 */
export function AccountProvider({ children }: { children: ReactNode }) {
  if (!CLERK_PUBLISHABLE_KEY) {
    return <GuestAccountProvider>{children}</GuestAccountProvider>;
  }
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ClerkBoundAccountProvider>{children}</ClerkBoundAccountProvider>
    </ClerkProvider>
  );
}

export { CLERK_PUBLISHABLE_KEY };
