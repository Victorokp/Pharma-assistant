import { useMemo } from 'react';
import { useLocation, Redirect } from 'wouter';
import StudyMode from '@/components/study-mode';
import { getLessonById, LESSONS } from '@/lib/content';
import { CURRICULUM } from '@/lib/curriculum';
import PageHeading from '@/components/page-heading';
import LessonSaveToggle from '@/components/lesson-save-toggle';
import LessonCompletionBadge from '@/components/lesson-completion-badge';
import { BookOpen, ChevronRight } from 'lucide-react';

/**
 * /study/:nodeId — a focused lesson-reading screen.
 *
 * Resolves the lesson by curriculum node ID, then prefills Study Mode with
 * the lesson's exact title (and course code) so the authored-lesson session
 * starts directly. Unknown IDs redirect back to /study rather than showing
 * a broken session. Bottom navigation walks the sibling lessons of the same
 * topic in curriculum order.
 */
export default function StudyLessonPage({ params }: { params?: { nodeId?: string } }) {
  const [location, navigate] = useLocation();
  const nodeId = params?.nodeId ?? decodeURIComponent(location.split('?')[0].split('/').pop() ?? '');
  const lesson = useMemo(() => (nodeId ? getLessonById(nodeId) : undefined), [nodeId]);

  const context = useMemo(() => {
    if (!lesson) return null;
    const course = CURRICULUM.find((course) => course.id === lesson.courseId);
    const topic = course?.topics.find((topic) => topic.id === lesson.topicId);
    return {
      courseCode: course?.code ?? null,
      courseName: course?.name ?? null,
      topicName: topic?.name ?? null,
    };
  }, [lesson]);

  /** Siblings in the same topic, ordered by the trailing curriculum number. */
  const siblings = useMemo(() => {
    if (!lesson) return [];
    return LESSONS.filter((candidate) => candidate.topicId === lesson.topicId).sort(
      (a, b) => Number(a.nodeId.match(/(\d+)$/)?.[1] ?? 0) - Number(b.nodeId.match(/(\d+)$/)?.[1] ?? 0),
    );
  }, [lesson]);

  if (!lesson) {
    // Unknown or unauthored node: fall back to the Study page instead of a
    // dead end. (Unauthored-but-valid curriculum nodes can still be studied
    // from /study via the live-AI path.)
    return <Redirect to="/study" replace />;
  }

  const index = siblings.findIndex((sibling) => sibling.nodeId === lesson.nodeId);
  const prev = index > 0 ? siblings[index - 1] : null;
  const next = index > -1 && index < siblings.length - 1 ? siblings[index + 1] : null;
  const subject = context?.courseCode ?? undefined;

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow={
          [context?.courseCode, context?.courseName].filter(Boolean).join(' · ') || 'Study Mode · Lesson'
        }
        title={lesson.title}
        blurb={
          context?.topicName
            ? `Part of ${context.topicName}. The session opens with the first section and its check question.`
            : 'The session opens with the first section and its check question.'
        }
        icon={BookOpen}
        testId="study-lesson-heading"
      />
      <div className="flex flex-wrap items-center gap-2">
        <LessonCompletionBadge nodeId={lesson.nodeId} />
        <LessonSaveToggle nodeId={lesson.nodeId} title={lesson.title} />
      </div>
      <div className="animate-rise-in" key={lesson.nodeId}>
        <StudyMode
          prefillTopic={lesson.title}
          prefillSubject={subject}
        />
      </div>

      {(prev || next) && (
        <nav aria-label="More lessons in this topic" className="grid gap-3 sm:grid-cols-2" data-testid="study-lesson-nav">
          {prev ? (
            <button
              type="button"
              onClick={() => navigate(`/study/${prev.nodeId}`)}
              className="focus-ring group flex min-h-11 items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 active:translate-y-0"
              data-testid="study-lesson-prev"
            >
              <ChevronRight className="size-4 shrink-0 rotate-180 text-muted-foreground transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Previous in topic</span>
                <span className="mt-0.5 block truncate text-sm font-semibold text-primary">{prev.title}</span>
              </span>
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
          {next ? (
            <button
              type="button"
              onClick={() => navigate(`/study/${next.nodeId}`)}
              className="focus-ring group flex min-h-11 items-center justify-end gap-3 rounded-2xl border border-border bg-card p-4 text-right transition-all hover:-translate-y-0.5 hover:border-primary/40 active:translate-y-0"
              data-testid="study-lesson-next"
            >
              <span className="min-w-0">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Next in topic</span>
                <span className="mt-0.5 block truncate text-sm font-semibold text-primary">{next.title}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
        </nav>
      )}
    </div>
  );
}
