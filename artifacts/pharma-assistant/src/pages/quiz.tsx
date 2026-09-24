import { useCallback, useMemo } from 'react';
import { useLocation, useSearch } from 'wouter';
import QuizMode from '@/components/quiz-mode';
import PageHeading from '@/components/page-heading';
import { Brain } from 'lucide-react';

/**
 * Quiz page — a focused practice workspace hosting the existing QuizMode.
 * Curriculum handoffs arrive via ?topic=&context= query parameters; the
 * Quiz → Study weak-area handoff navigates to /study with the first weak
 * topic prefilled.
 */
export default function QuizPage() {
  const [, navigate] = useLocation();
  // Wouter v3: the query string comes from useSearch(), not useLocation().
  const search = useSearch();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const handleStudyWeakAreas = useCallback(
    (weakTopics: string[]) => {
      if (weakTopics.length > 0) {
        navigate(`/study?topic=${encodeURIComponent(weakTopics[0])}`);
      }
    },
    [navigate],
  );

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Quiz"
        title="Practice what you know."
        blurb="AI-generated multiple-choice questions with instant feedback and a full wrap-up at the end."
        icon={Brain}
        testId="quiz-heading"
      />
      <div className="animate-rise-in">
        <QuizMode
          onStudyWeakAreas={handleStudyWeakAreas}
          prefillTopic={params.get('topic')}
          prefillContext={params.get('context')}
        />
      </div>
    </div>
  );
}
