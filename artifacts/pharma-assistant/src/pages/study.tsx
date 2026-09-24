import { useMemo } from 'react';
import { useLocation, useSearch } from 'wouter';
import StudyMode from '@/components/study-mode';
import PageHeading from '@/components/page-heading';
import SavedLessons from '@/components/saved-lessons';
import { BookOpen, GraduationCap } from 'lucide-react';

/**
 * Study page — a dedicated learning workspace.
 *
 * Two paths in one place: authored lessons via the setup panel (prefilled
 * from Curriculum / Quiz / Drug Explorer handoffs via query parameters) and
 * a curated route list for discovery. No lesson or topic counts anywhere.
 */
export default function StudyPage() {
  // Wouter v3: useLocation() returns the pathname only; the query string
  // comes from useSearch(). (v2-style location.split('?') parsing silently
  // yields empty params on v3, which is exactly the handoff regression.)
  const search = useSearch();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Study Mode"
        title="Learn it properly."
        blurb="Progressive lessons with check questions — authored curriculum lessons first, AI tutoring when a topic isn't in the library yet."
        icon={BookOpen}
        testId="study-heading"
      />
      <div className="animate-rise-in">
        <StudyMode
          prefillTopic={params.get('topic')}
          prefillSubject={params.get('subject')}
          prefillContext={params.get('context')}
        />
      </div>
      <SavedLessons />
      <CuratedRoutes />
    </div>
  );
}

/**
 * A small, quiet discovery block under the workspace: three example entry
 * points into the lesson library plus a link to the full curriculum map.
 * Descriptive copy only — no counts.
 */
function CuratedRoutes() {
  const [, navigate] = useLocation();
  const routes = [
    { nodeId: 'pct-19-6', label: 'Geometric dilution', code: 'PCT 201', blurb: 'The mixing technique that keeps potent doses even.' },
    { nodeId: 'pct-38-3', label: 'Sedimentation', code: 'PCT 201', blurb: "Stokes' law and why suspensions settle." },
    { nodeId: 'pct-39-5', label: 'HLB concept', code: 'PCT 201', blurb: 'Matching emulsifiers to the phase you want.' },
  ];
  return (
    <section aria-label="Explore the lesson library" data-testid="study-curated-routes">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Explore the lesson library</h2>
        <button
          type="button"
          onClick={() => navigate('/courses')}
          className="focus-ring inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-xs font-semibold text-primary transition-all hover:border-primary/40 hover:bg-muted"
          data-testid="study-browse-courses"
        >
          <GraduationCap className="size-3.5" aria-hidden="true" />
          Browse all courses
        </button>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {routes.map((route) => (
          <button
            key={route.nodeId}
            type="button"
            onClick={() => navigate(`/study/${route.nodeId}`)}
            className="focus-ring group flex min-h-11 flex-col items-start rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md active:translate-y-0"
            data-testid={`study-route-${route.nodeId}`}
          >
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-accent">{route.code}</span>
            <span className="mt-1.5 block text-sm font-bold text-primary">{route.label}</span>
            <span className="mt-1 block text-xs leading-5 text-muted-foreground">{route.blurb}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
