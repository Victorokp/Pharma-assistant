import { useCallback } from 'react';
import { useLocation } from 'wouter';
import ProgressDashboard from '@/components/progress-dashboard';
import StudyHistory from '@/components/study-history';
import PageHeading from '@/components/page-heading';
import { useAccount } from '@/lib/auth';
import { CloudOff, LogIn, TrendingUp } from 'lucide-react';

/**
 * Progress page — the existing ProgressDashboard on its own route.
 *
 * Storage backend is selected transparently by progress-store:
 * guests keep the original device-local behavior; signed-in students get
 * account-backed persistence (the banner explains the upgrade path without
 * forcing sign-in).
 * Topic handoffs navigate to Study / Quiz with the topic as a query param.
 */
export default function ProgressPage() {
  const [, navigate] = useLocation();
  const { authAvailable, isSignedIn, signIn } = useAccount();

  const handleStudyTopic = useCallback(
    (topic: string) => {
      navigate(`/study?topic=${encodeURIComponent(topic)}`);
    },
    [navigate],
  );

  const handleQuizTopic = useCallback(
    (topic: string) => {
      navigate(`/quiz?topic=${encodeURIComponent(topic)}`);
    },
    [navigate],
  );

  const showSignInPrompt = authAvailable && !isSignedIn;

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Progress"
        title="See how far you've come."
        blurb="Quizzes feed this dashboard automatically. Study your weak areas, then quiz again to watch the bars move."
        icon={TrendingUp}
        testId="progress-heading"
      />
      {showSignInPrompt && (
        <div
          className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3.5 sm:flex-row sm:items-center"
          data-testid="progress-sign-in-prompt"
        >
          <CloudOff className="size-4 shrink-0 text-accent" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-xs leading-5 text-muted-foreground">
            <span className="font-semibold text-primary">Your progress lives on this device.</span>{' '}
            Sign in to save your quiz history and lesson progress to your account — it will follow
            you across devices and survive clearing this browser.
          </p>
          <button
            type="button"
            onClick={signIn}
            className="focus-ring flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            data-testid="button-progress-sign-in"
          >
            <LogIn className="size-3.5" aria-hidden="true" />
            Sign in to sync
          </button>
        </div>
      )}
      <div className="animate-rise-in">
        <ProgressDashboard onStudyTopic={handleStudyTopic} onQuizTopic={handleQuizTopic} />
      </div>
      <StudyHistory />
    </div>
  );
}
