import { useCallback, useMemo, useState } from 'react';
import { useLocation } from 'wouter';
import CurriculumBrowser from '@/components/curriculum-browser';
import PageHeading from '@/components/page-heading';
import { composeCurriculumContext, CURRICULUM, type CurriculumCourse, type CurriculumHandoff } from '@/lib/curriculum';
import { GraduationCap } from 'lucide-react';

/**
 * Courses page — a clean academic course library.
 *
 * Courses are grouped by level (e.g. "200 LEVEL") in curriculum order. Each
 * card shows the real curriculum data (code, name, description, topics /
 * subtopics, credit units) — never total course or lesson counts. Selecting a
 * course opens the existing CurriculumBrowser drill-down; topic and subtopic
 * handoffs navigate to Study / Quiz via query parameters.
 */
export default function CoursesPage() {
  const [, navigate] = useStateSafe();

  const handleStudyTopic = useCallback(
    (handoff: CurriculumHandoff) => {
      const params = new URLSearchParams({ topic: handoff.topic });
      if (handoff.courseCode) params.set('subject', handoff.courseCode);
      const context = composeCurriculumContext(handoff);
      if (context) params.set('context', context);
      navigate(`/study?${params.toString()}`);
    },
    [navigate],
  );

  const handleQuizTopic = useCallback(
    (handoff: CurriculumHandoff) => {
      const params = new URLSearchParams({ topic: handoff.topic });
      const context = composeCurriculumContext(handoff);
      if (context) params.set('context', context);
      navigate(`/quiz?${params.toString()}`);
    },
    [navigate],
  );

  // Group by level, preserving curriculum order within each group.
  const levelGroups = useMemo(() => {
    const groups = new Map<string, CurriculumCourse[]>();
    for (const course of CURRICULUM) {
      const key = course.level.trim();
      const list = groups.get(key) ?? [];
      list.push(course);
      groups.set(key, list);
    }
    return Array.from(groups.entries());
  }, []);

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Courses"
        title="Know the map."
        blurb="Every course, topic, and subtopic in one place — the structure your studying is built on."
        icon={GraduationCap}
        testId="courses-heading"
      />

      {selectedCourseId === null ? (
        <div className="space-y-8" data-testid="course-library">
          {levelGroups.map(([level, courses]) => (
            <section key={level} aria-label={`${level} courses`} className="animate-rise-in">
              <div className="flex items-center gap-3">
                <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {level}
                </h2>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <li key={course.id}>
                    <CourseLibraryCard
                      course={course}
                      onOpen={() => setSelectedCourseId(course.id)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <CurriculumBrowser
          startCourseId={selectedCourseId}
          onExit={() => setSelectedCourseId(null)}
          onStudyTopic={handleStudyTopic}
          onQuizTopic={handleQuizTopic}
        />
      )}
    </div>
  );
}

/** Minimal navigate hook indirection so both callbacks share one dependency. */
function useStateSafe() {
  return useLocation();
}

/**
 * One course in the library: code, name, real description, and the topics /
 * subtopics / credit-unit facts from the curriculum. No invented totals.
 */
function CourseLibraryCard({
  course,
  onOpen,
}: {
  course: CurriculumCourse;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="focus-ring group flex h-full min-h-11 w-full flex-col items-start rounded-2xl border border-border bg-card p-4 text-left shadow-xs transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md active:translate-y-0 sm:p-5"
      data-testid={`course-card-${course.id}`}
    >
      <span className="flex w-full items-center justify-between gap-2">
        <span className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
          {course.code}
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
          {course.creditUnits} {course.creditUnits === 1 ? 'unit' : 'units'}
        </span>
      </span>
      <span className="mt-3 block text-base font-bold leading-6 text-primary">{course.name}</span>
      <span className="mt-1 block text-sm leading-6 text-muted-foreground">{course.description}</span>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
        Open course
        <span
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </button>
  );
}
