import { useMemo } from 'react';
import { useSearch } from 'wouter';
import AskAI from '@/components/ask-ai';
import PageHeading from '@/components/page-heading';
import { MessagesSquare } from 'lucide-react';

/**
 * Ask AI page — a dedicated assistant workspace hosting the original Ask
 * feature. ?q= seeds the question box (used by Drug Explorer handoffs).
 */
export default function AskPage() {
  // Wouter v3: the query string comes from useSearch(), not useLocation().
  const search = useSearch();
  const initialQuestion = useMemo(() => new URLSearchParams(search).get('q'), [search]);

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Ask AI"
        title="Ask anything pharmacy."
        blurb="Structured, safety-conscious educational answers for any pharmacy question."
        icon={MessagesSquare}
        testId="ask-heading"
      />
      <div className="animate-rise-in">
        <AskAI initialQuestion={initialQuestion} />
      </div>
    </div>
  );
}
