import { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  Brain,
  ClipboardList,
  Info,
  ListChecks,
  RefreshCw,
  Target,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { clearProgress, computeStats, type ProgressStats } from '@/lib/progress-storage';

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  testId,
}: {
  icon: typeof Award;
  label: string;
  value: string | number;
  hint?: string;
  testId: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4" data-testid={testId}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        <Icon className="size-4 text-accent" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-2 font-serif text-3xl font-semibold tracking-[-0.05em] text-primary">{value}</p>
      {hint && <p className="mt-1 text-xs leading-5 text-muted-foreground">{hint}</p>}
    </div>
  );
}

function TopicRow({
  topic,
  onStudyTopic,
}: {
  topic: ProgressStats['weakAreas'][number];
  onStudyTopic: (topic: string) => void;
}) {
  return (
    <li className="rounded-xl border border-border px-3 py-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-primary">{topic.topic}</span>
        <span className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {topic.correct}/{topic.answered} · {topic.percentage}%
          </span>
          <button
            type="button"
            onClick={() => onStudyTopic(topic.topic)}
            className="focus-ring flex min-h-8 items-center gap-1 rounded-full border border-border bg-card px-2.5 text-[11px] font-bold text-primary transition-all hover:border-primary/40 hover:bg-muted"
            data-testid={`button-study-topic-${topic.topic.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}
          >
            <BookOpen className="size-3" aria-hidden="true" />
            Study
          </button>
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#edf3f0]">
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${topic.percentage}%` }} />
      </div>
    </li>
  );
}

function TopicList({
  icon: Icon,
  title,
  emptyMessage,
  topics,
  emptyTestId,
  onStudyTopic,
}: {
  icon: typeof Target;
  title: string;
  emptyMessage: string;
  topics: ProgressStats['weakAreas'];
  emptyTestId: string;
  onStudyTopic: (topic: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-border bg-background p-4">
      <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
        <Icon className="size-4 text-accent" aria-hidden="true" />
        {title}
      </h3>
      {topics.length === 0 ? (
        <p className="mt-3 text-sm leading-5 text-muted-foreground" data-testid={emptyTestId}>
          {emptyMessage}
        </p>
      ) : (
        <ul className="mt-3 space-y-2">
          {topics.map((topic) => (
            <TopicRow key={topic.topic} topic={topic} onStudyTopic={onStudyTopic} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default function ProgressDashboard({
  onStudyTopic,
  onQuizTopic,
}: {
  /** Hand a topic to Study Mode (prefills the Study setup form). */
  onStudyTopic: (topic: string) => void;
  /** Hand a topic to Quiz Mode (prefills custom topic and starts setup). */
  onQuizTopic: (topic: string) => void;
}) {
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setStats(computeStats());
  }, []);

  if (!stats) return null;

  return (
    <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-5 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-7" data-testid="progress-dashboard">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0dd] text-accent">
            <TrendingUp className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Progress</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl">
              Your study progress
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Built automatically from your completed quizzes.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            clearProgress();
            setStats(computeStats());
          }}
          className="focus-ring flex size-9 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:bg-muted"
          aria-label="Clear all saved progress"
          data-testid="button-progress-clear"
        >
          <RefreshCw className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard icon={ClipboardList} label="Quizzes completed" value={stats.quizzesCompleted} testId="stat-quizzes-completed" />
        <StatCard icon={ListChecks} label="Questions answered" value={stats.questionsAnswered} testId="stat-questions-answered" />
        <StatCard icon={TrendingUp} label="Average score" value={`${stats.overallAverage}%`} hint="across all questions" testId="stat-average-score" />
        <StatCard icon={Award} label="Best score" value={`${stats.bestScore}%`} hint="single quiz" testId="stat-best-score" />
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <TopicList
          icon={Target}
          title="Needs review"
          emptyMessage="No weak areas yet — complete a quiz to find out what to sharpen."
          topics={stats.weakAreas}
          emptyTestId="progress-no-weak-areas"
          onStudyTopic={onStudyTopic}
        />
        <TopicList
          icon={Award}
          title="Strong areas"
          emptyMessage="Your strengths will appear here as you keep quizzing."
          topics={stats.strongAreas}
          emptyTestId="progress-no-strong-areas"
          onStudyTopic={onStudyTopic}
        />
      </div>

      <section className="mt-3 rounded-2xl border border-border bg-background p-4" data-testid="progress-recent-quizzes">
        <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
          <ClipboardList className="size-4 text-accent" aria-hidden="true" />
          Recent quizzes
        </h3>
        {stats.recentQuizzes.length === 0 ? (
          <p className="mt-3 text-sm leading-5 text-muted-foreground" data-testid="progress-no-quizzes">
            No quizzes yet — your results will show up here after your first quiz.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {stats.recentQuizzes.map((quiz) => (
              <li key={quiz.id} className="rounded-xl border border-border px-3 py-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-primary">{quiz.subject}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(quiz.completedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>
                    {quiz.difficulty} · {quiz.correct}/{quiz.totalQuestions} correct
                  </span>
                  <span className="font-bold text-primary">{quiz.percentage}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#edf3f0]">
                  <div
                    className={`h-full rounded-full transition-all ${quiz.percentage >= 75 ? 'bg-[#67a774]' : 'bg-accent'}`}
                    style={{ width: `${quiz.percentage}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {!dismissed && stats.quizzesCompleted === 0 && (
        <div className="mt-3 flex items-start gap-3 rounded-2xl border border-[#ded7c6] bg-[#f2ede0]/75 px-4 py-3.5">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <p className="text-xs leading-5 text-muted-foreground">
            Progress is stored on this device in your browser — it survives refreshes but is not synced
            across devices. Complete a quiz to start tracking.
          </p>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="focus-ring ml-auto shrink-0 text-xs font-bold text-accent hover:underline"
          >
            Got it
          </button>
        </div>
      )}

      <p className="mt-4 flex items-center gap-2 text-[11px] leading-5 text-muted-foreground">
        <XCircle className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
        Topic analysis needs at least 2 answered questions per topic.
      </p>
    </div>
  );
}
