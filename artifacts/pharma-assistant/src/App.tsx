import { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router as WouterRouter } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AccountProvider, useAccount } from '@/lib/auth';
import { ThemeProvider } from '@/lib/theme';
import { handleAuthChange } from '@/lib/progress-store';
import Router from '@/router';

const queryClient = new QueryClient();

/**
 * AuthGate — reacts to sign-in/sign-out transitions and drives the login
 * merge. When a guest signs in, local quiz history is merged into their
 * account (idempotent) and the server becomes the source of truth; when
 * they sign out, the guest backend takes over again with local data intact.
 * Purely side-effectful: renders nothing.
 */
function AuthGate() {
  const { isSignedIn } = useAccount();
  const lastSeen = useRef<boolean | null>(null);

  useEffect(() => {
    // Only react to real transitions (and the initial resolved state).
    if (lastSeen.current === isSignedIn) return;
    lastSeen.current = isSignedIn;
    void handleAuthChange(isSignedIn);
  }, [isSignedIn]);

  return null;
}

/**
 * App composition only: providers + router. All routes live in router.tsx,
 * the persistent header/bottom-nav shell in components/app-shell.tsx, and
 * each feature page in pages/. Feature logic stays in its original
 * components (study-mode, quiz-mode, ask-ai, drug-explorer, …) untouched.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AccountProvider>
          <ThemeProvider>
          <AuthGate />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          </ThemeProvider>
        </AccountProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
