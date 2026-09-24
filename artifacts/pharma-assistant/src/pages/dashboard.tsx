import { Link, useLocation } from 'wouter';
import { useEffect, useState } from 'react';
import { loadProgressStats, onBackendChange, type ProgressStats } from '@/lib/progress-store';
import PageHeading from '@/components/page-heading';
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  FileText,
  FlaskConical,
  LayoutDashboard,
  LibraryBig,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

/**
 * Dashboard — the real home of Pharma Assistant.
 *
 * Hierarchy: welcome → Continue Studying (the one prominent panel) → quick
 * actions → a quiet educational-use note. It does not repeat the navigation
 * bar: tiles are minimal icon+label+line, all rendered as client-side links,
 * and it uses only real data (last quiz, honest counts) — never invented
 * streaks or statistics.
 */
export default function DashboardPage() {
  const [, navigate] = useLocation();
  const [stats, setStats] = useState<ProgressStats | null>(null);

  // Reload whenever the storage backend switches (sign-in merge / sign-out)
  // so "Continue studying" reflects the student's real, current history.
  useEffect(() => {
    let cancelled = false;
    const refresh = () => {
      void loadProgressStats().then((next) => {
        if (!cancelled) setStats(next);
      });
    };
    refresh();
    const unsubscribe = onBackendChange(refresh);
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const recentQuizzes = stats?.recentQuizzes ?? [];
  const lastQuiz = recentQuizzes[0] ?? null;

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Welcome */}
      <PageHeading
        eyebrow="Pharma Assistant"
        title="Your study desk, ready."
        blurb="Read the lesson, test yourself, look up the drug, and watch your understanding grow — all in one place."
        icon={LayoutDashboard}
        testId="dashboard-heading"
      />

      {/* Continue studying — the one prominent panel */}
      <section
        className="animate-rise-in relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-md sm:p-7"
        data-testid="dashboard-continue"
      >
        <span
          className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-primary/8 blur-2xl"
          aria-hidden="true"
        />
        <p className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Continue studying
        </p>
        <div className="relative mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {lastQuiz ? (
            <div className="min-w-0">
              <p className="text-base font-semibold text-primary">
                Last quiz: {lastQuiz.subject} · {lastQuiz.percentage}%
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {stats!.quizzesCompleted} quiz{stats!.quizzesCompleted === 1 ? '' : 'zes'} completed · {stats!.questionsAnswered} question{stats!.questionsAnswered === 1 ? '' : 's'} answered
                {stats!.weakAreas.length > 0
                  ? ` · ${stats!.weakAreas.length} weak area${stats!.weakAreas.length === 1 ? '' : 's'} to review`
                  : ''}
              </p>
            </div>
          ) : (
            <div className="min-w-0">
              <p className="text-base font-semibold text-primary">Start your first study session</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Pick a course, open a lesson in Study Mode, or try a quick quiz — your progress will appear here.
              </p>
            </div>
          )}
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/study')}
              className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
              data-testid="dashboard-continue-study"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              Study now
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/quiz')}
              className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-bold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted active:translate-y-0"
              data-testid="dashboard-continue-quiz"
            >
              <Brain className="size-4" aria-hidden="true" />
              Quiz me
            </button>
          </div>
        </div>
      </section>

      {/* Quick actions — a quiet complement to the nav bar, not a repeat of it */}
      <section aria-label="Quick actions" data-testid="dashboard-quick-actions">
        <div className="flex items-baseline gap-3">
          <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Quick actions</h2>
          <span className="hidden text-sm text-muted-foreground sm:inline">Everything, one tap away</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {QUICK_ACTIONS.map((tile) => (
            <QuickAction key={tile.path} tile={tile} />
          ))}
        </div>
      </section>

      <p className="flex items-start gap-2 rounded-2xl border border-border bg-muted/60 px-4 py-3.5 text-xs leading-5 text-muted-foreground">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
        <span>
          <span className="font-semibold text-primary">Educational use only.</span> Pharma Assistant shares study information — it isn’t a substitute for a pharmacist or clinician.
        </span>
      </p>
    </div>
  );
}

/** One compact dashboard action: icon, label, one descriptive line. */
function QuickAction({ tile }: { tile: QuickActionTile }) {
  return (
    <Link
      href={tile.path}
      className="focus-ring group flex min-h-11 flex-col items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-left shadow-xs transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md active:translate-y-0"
      data-testid={tile.testId}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        <tile.icon className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-sm font-bold text-primary">
          {tile.label}
          <ChevronRight
            className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
        <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{tile.blurb}</span>
      </span>
    </Link>
  );
}

type QuickActionTile = {
  path: string;
  label: string;
  blurb: string;
  icon: LucideIcon;
  testId: string;
};

const QUICK_ACTIONS: QuickActionTile[] = [
  { path: '/courses', label: 'Courses', blurb: 'The full curriculum map.', icon: LibraryBig, testId: 'dashboard-courses' },
  { path: '/study', label: 'Study Mode', blurb: 'Lessons with check questions.', icon: BookOpen, testId: 'dashboard-study' },
  { path: '/quiz', label: 'Quiz', blurb: 'Practice with instant feedback.', icon: Brain, testId: 'dashboard-quiz' },
  { path: '/drugs', label: 'Drug Explorer', blurb: 'Student-friendly drug profiles.', icon: FlaskConical, testId: 'dashboard-drugs' },
  { path: '/progress', label: 'Progress', blurb: 'Scores and areas to review.', icon: TrendingUp, testId: 'dashboard-progress' },
  { path: '/ask', label: 'Ask AI', blurb: 'Structured answers, any question.', icon: MessagesSquare, testId: 'dashboard-ask' },
  { path: '/docs', label: 'Docs / Materials', blurb: 'Your PDFs, filed by course.', icon: FileText, testId: 'dashboard-docs' },
];
