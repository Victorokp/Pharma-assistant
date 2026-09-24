import DrugExplorer from '@/components/drug-explorer';
import PageHeading from '@/components/page-heading';
import { FlaskConical } from 'lucide-react';

/**
 * Drug Explorer page — a professional pharmacy lookup workspace hosting the
 * extracted Drug Explorer component. Spelling suggestions and AI profile
 * behavior are unchanged.
 */
export default function DrugsPage() {
  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Drug Explorer"
        title="Look up a drug."
        blurb="Generate a focused, student-friendly profile with the same AI study assistant that powers Ask."
        icon={FlaskConical}
        testId="drugs-heading"
      />
      <div className="animate-rise-in">
        <DrugExplorer />
      </div>
    </div>
  );
}
