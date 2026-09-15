import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, FlaskConical, GraduationCap, Layers, ListTree, PenLine } from 'lucide-react';
import { CURRICULUM, countSubtopics, countTopics, type CurriculumCourse, type CurriculumHandoff, type CurriculumSubtopic, type CurriculumTopic, buildHandoff } from '@/lib/curriculum';

/**
 * Pharmacy Curriculum browser.
 *
 * Three-level drill-down: courses (cards) → topics → subtopics.
 * Every topic and subtopic offers "Study this topic" and "Quiz me on this
 * topic" handoffs into the existing Study Mode and Quiz Mode (Phase 3).
 */
export default function CurriculumBrowser({
  onStudyTopic,
  onQuizTopic,
}: {
  onStudyTopic: (handoff: CurriculumHandoff) => void;
  onQuizTopic: (handoff: CurriculumHandoff) => void;
}) {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [openTopicIds, setOpenTopicIds] = useState<Set<string>>(new Set());

  const selectedCourse = CURRICULUM.find((course) => course.id === selectedCourseId) ?? null;

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
    <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-5 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-7" data-testid="curriculum-browser">
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f0ed] text-primary">
          <GraduationCap className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Curriculum</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl">
            {selectedCourse ? `${selectedCourse.code} — ${selectedCourse.name}` : 'Pharmacy courses'}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {selectedCourse
              ? selectedCourse.topics.length > 0
                ? 'Browse the topics in this course. Select a topic to see its subtopics.'
                : 'Topics for this course have not been added yet — they will appear here once added.'
              : 'The map of your pharmacy programme. Select a course to see its topics.'}
          </p>
        </div>
      </div>

      {!selectedCourse && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="curriculum-course-grid">
          {CURRICULUM.map((course) => (
            <CourseCard key={course.id} course={course} onSelect={() => setSelectedCourseId(course.id)} />
          ))}
        </div>
      )}

      {selectedCourse && (
        <div className="mt-6" data-testid="curriculum-course-detail">
          <button
            type="button"
            onClick={() => {
              setSelectedCourseId(null);
              setOpenTopicIds(new Set());
            }}
            className="focus-ring flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-primary transition-all hover:border-primary/40 hover:bg-muted"
            data-testid="button-curriculum-back"
          >
            <ChevronRight className="size-3.5 rotate-180" aria-hidden="true" />
            All courses
          </button>

          <ul className="mt-4 space-y-2" data-testid="curriculum-topic-list">
            {selectedCourse.topics.map((topic) => {
              const isOpen = openTopicIds.has(topic.id);
              return (
                <li key={topic.id} className="rounded-2xl border border-border bg-background">
                  <button
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    aria-expanded={isOpen}
                    className="focus-ring flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    data-testid={`curriculum-topic-${topic.id}`}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#fff0dd] text-accent">
                        <ListTree className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-primary">{topic.name}</span>
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
                            <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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

function CourseCard({ course, onSelect }: { course: CurriculumCourse; onSelect: () => void }) {  return (
    <button
      type="button"
      onClick={onSelect}
      className="focus-ring flex min-h-11 flex-col items-start rounded-2xl border border-border bg-background p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_30px_hsl(191_38%_18%_/_0.08)]"
      data-testid={`curriculum-course-${course.id}`}
    >
      <span className="flex w-full items-center justify-between gap-2">
        <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
          {course.code.startsWith('BCH') ? <FlaskConical className="size-4" aria-hidden="true" /> : <BookOpen className="size-4" aria-hidden="true" />}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#fff0dd] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-accent">
            {course.level}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-accent">{course.code}</span>
        </span>
      </span>
      <span className="mt-3 block text-sm font-bold text-primary">{course.name}</span>
      <span className="mt-1 block text-xs leading-5 text-muted-foreground">{course.description}</span>
      <span className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
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
        className="focus-ring inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-primary/30 bg-[#e7f0ed] px-4 text-xs font-bold text-primary transition-all hover:border-primary/60 hover:bg-[#dce9e4]"
        data-testid={`button-${testPrefix}-study`}
      >
        <GraduationCap className="size-3.5" aria-hidden="true" />
        Study this topic
      </button>
      <button
        type="button"
        onClick={() => onQuizTopic(handoff)}
        className="focus-ring inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-accent/30 bg-[#fff0dd] px-4 text-xs font-bold text-accent transition-all hover:border-accent/60 hover:bg-[#fdeacc]"
        data-testid={`button-${testPrefix}-quiz`}
      >
        <PenLine className="size-3.5" aria-hidden="true" />
        Quiz me on this topic
      </button>
    </div>
  );
}
