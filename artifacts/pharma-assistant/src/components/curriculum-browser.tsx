import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle2, ChevronDown, ChevronRight, FlaskConical, GraduationCap, Layers, ListTree, PenLine } from 'lucide-react';
import { CURRICULUM, countSubtopics, countTopics, type CurriculumCourse, type CurriculumHandoff, type CurriculumSubtopic, type CurriculumTopic, buildHandoff } from '@/lib/curriculum';
import { useLessonProgress } from '@/lib/lesson-progress-hook';

/**
 * Pharmacy Curriculum browser.
 *
 * Three-level drill-down: courses (cards) → topics → subtopics.
 * Every topic and subtopic offers "Study this topic" and "Quiz me on this
 * topic" handoffs into Study Mode and Quiz Mode via route navigation.
 *
 * Standalone (no props) it renders its own course grid, as before. When
 * embedded in the Courses library, the library owns course selection and
 * hands the selected course in via `startCourseId` + `onExit`.
 */
export default function CurriculumBrowser({
  onStudyTopic,
  onQuizTopic,
  startCourseId = null,
  onExit,
}: {
  onStudyTopic: (handoff: CurriculumHandoff) => void;
  onQuizTopic: (handoff: CurriculumHandoff) => void;
  /** When set, the browser opens directly on this course (library-embedded mode). */
  startCourseId?: string | null;
  /** Called when the student leaves the course detail view (library-embedded mode). */
  onExit?: () => void;
}) {
  const [internalCourseId, setInternalCourseId] = useState<string | null>(null);
  const embedded = startCourseId !== null || onExit !== undefined;
  const selectedCourseId = embedded ? startCourseId : internalCourseId;
  const [openTopicIds, setOpenTopicIds] = useState<Set<string>>(new Set());
  // Completed-lesson dots (Phase 9): surfaces the previously write-only
  // lesson-progress read path; empty map for guests, so no dots show.
  const { completedMap, synced: progressSynced } = useLessonProgress();

  const selectedCourse = CURRICULUM.find((course) => course.id === selectedCourseId) ?? null;

  // Reset open topics whenever the selected course changes.
  useEffect(() => {
    setOpenTopicIds(new Set());
  }, [selectedCourseId]);

  const exitCourse = () => {
    setOpenTopicIds(new Set());
    if (embedded) {
      onExit?.();
    } else {
      setInternalCourseId(null);
    }
  };

  const selectCourse = (courseId: string) => {
    setOpenTopicIds(new Set());
    setInternalCourseId(courseId);
  };

  const toggleTopic = (topicId: string) => {
    setOpenTopicIds((current) => {
      const next = new Set(current);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7" data-testid="curriculum-browser">
      {/* Contextual header only while a course is open — the Courses library
          already introduces the curriculum at the top level. */}
      {selectedCourse && (
        <div className="flex items-start gap-4" data-testid="curriculum-course-heading">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <GraduationCap className="size-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{selectedCourse.code}</p>
            <h2 className="mt-1 font-serif text-2xl font-semibold tracking-[-0.03em] text-primary">{selectedCourse.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {selectedCourse.topics.length > 0
                ? 'Browse the topics in this course. Select a topic to see its subtopics.'
                : 'Topics for this course have not been added yet — they will appear here once added.'}
            </p>
          </div>
        </div>
      )}

      {!selectedCourse && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="curriculum-course-grid">
          {CURRICULUM.map((course) => (
            <CourseCard key={course.id} course={course} onSelect={() => selectCourse(course.id)} />
          ))}
        </div>
      )}

      {selectedCourse && (
        <div className="mt-6" data-testid="curriculum-course-detail">
          <button
            type="button"
            onClick={exitCourse}
            className="focus-ring flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-primary transition-all hover:border-primary/40 hover:bg-muted"
            data-testid="button-curriculum-back"
          >
            <ChevronRight className="size-3.5 rotate-180" aria-hidden="true" />
            All courses
          </button>

          <ul className="mt-4 space-y-2" data-testid="curriculum-topic-list">
            {selectedCourse.topics.map((topic) => {
              const isOpen = openTopicIds.has(topic.id);
              return (
                <li key={topic.id} className="animate-rise-in rounded-2xl border border-border bg-background">
                  <button
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    aria-expanded={isOpen}
                    className="focus-ring flex min-h-12 w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/60"
                    data-testid={`curriculum-topic-${topic.id}`}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <ListTree className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex min-w-0 items-center gap-1.5">
                          <span className="truncate text-sm font-semibold text-primary">{topic.name}</span>
                          {progressSynced && topic.subtopics.length > 0 && topic.subtopics.every((subtopic) => completedMap.get(subtopic.id)) && (
                            <CheckCircle2 className="size-3.5 shrink-0 text-success" aria-hidden="true" data-testid={`topic-complete-${topic.id}`} />
                          )}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {topic.subtopics.length > 0
                            ? `${topic.subtopics.length} subtopic${topic.subtopics.length === 1 ? '' : 's'}`
                            : 'No subtopics yet'}
                        </span>
                      </span>
                    </span>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {isOpen && topic.subtopics.length > 0 && (
                    <ul className="border-t border-border px-4 py-2.5" data-testid={`curriculum-subtopics-${topic.id}`}>
                      {topic.subtopics.map((subtopic) => (
                        <li key={subtopic.id} className="py-1.5">
                          <div className="flex items-center gap-2.5">
                            {progressSynced && completedMap.get(subtopic.id) ? (
                              <CheckCircle2 className="size-3.5 shrink-0 text-success" aria-hidden="true" data-testid={`subtopic-complete-${subtopic.id}`} />
                            ) : (
                              <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            )}
                            <span className="min-w-0 flex-1 text-sm text-muted-foreground">{subtopic.name}</span>
                          </div>
                          <HandoffActions
                            handoff={buildHandoff(selectedCourse, topic, subtopic)}
                            onStudyTopic={onStudyTopic}
                            onQuizTopic={onQuizTopic}
                            testPrefix={`curriculum-${topic.id}-${subtopic.id}`}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                  <HandoffActions
                    handoff={buildHandoff(selectedCourse, topic)}
                    onStudyTopic={onStudyTopic}
                    onQuizTopic={onQuizTopic}
                    testPrefix={`curriculum-${topic.id}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, onSelect }: { course: CurriculumCourse; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="focus-ring group flex min-h-11 flex-col items-start rounded-2xl border border-border bg-background p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md active:translate-y-0 sm:p-5"
      data-testid={`curriculum-course-${course.id}`}
    >
      <span className="flex w-full items-center justify-between gap-2">
        <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
          {course.code.startsWith('BCH') ? <FlaskConical className="size-4" aria-hidden="true" /> : <BookOpen className="size-4" aria-hidden="true" />}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            {course.level}
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{course.code}</span>
        </span>
      </span>
      <span className="mt-3 block text-base font-bold leading-6 text-primary">{course.name}</span>
      <span className="mt-1 block text-sm leading-6 text-muted-foreground">{course.description}</span>
      <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
        <Layers className="size-3" aria-hidden="true" />
        {countTopics(course)} topics · {countSubtopics(course)} subtopics · {course.creditUnits} {course.creditUnits === 1 ? 'unit' : 'units'}
      </span>
    </button>
  );
}

/**
 * "Study this topic" / "Quiz me on this topic" actions for a topic or
 * subtopic row. Buttons sit side-by-side on wider screens and stack
 * full-width on phones; both are ≥40px tall for easy tapping.
 */
function HandoffActions({
  handoff,
  onStudyTopic,
  onQuizTopic,
  testPrefix,
}: {
  handoff: CurriculumHandoff;
  onStudyTopic: (handoff: CurriculumHandoff) => void;
  onQuizTopic: (handoff: CurriculumHandoff) => void;
  testPrefix: string;
}) {
  return (
    <div className="mt-2 flex flex-col gap-2 sm:flex-row">
      <button
        type="button"
        onClick={() => onStudyTopic(handoff)}
        className="focus-ring inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-primary/25 bg-secondary px-4 text-xs font-bold text-primary transition-all hover:border-primary/50 hover:bg-primary/10"
        data-testid={`button-${testPrefix}-study`}
      >
        <GraduationCap className="size-3.5" aria-hidden="true" />
        Study this topic
      </button>
      <button
        type="button"
        onClick={() => onQuizTopic(handoff)}
        className="focus-ring inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-accent/25 bg-accent/8 px-4 text-xs font-bold text-accent transition-all hover:border-accent/50 hover:bg-accent/14"
        data-testid={`button-${testPrefix}-quiz`}
      >
        <PenLine className="size-3.5" aria-hidden="true" />
        Quiz me on this topic
      </button>
    </div>
  );
}
