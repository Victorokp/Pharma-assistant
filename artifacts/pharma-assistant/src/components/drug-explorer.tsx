import { type FormEvent, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { ApiError, askPharmaAssistant } from '@workspace/api-client-react';
import { MathText } from '@/components/math-text';
import { checkDrugName } from '@/lib/drug-name-checker';
import {
  BookOpen,
  Brain,
  ChevronRight,
  FlaskConical,
  Info,
  Search,
  Send,
  Sparkles,
} from 'lucide-react';

/**
 * Drug Explorer — extracted unchanged from the long-scroll App.tsx.
 * Same AI profile behavior, same conservative spelling gate. The only
 * structural change: the profile's Study/Quiz/Ask-more buttons hand off via
 * route navigation (`/ask?q=…`, `/study?topic=…`, `/quiz?topic=…`) instead of
 * scrollIntoView state.
 */
export default function DrugExplorer() {
  const [, navigate] = useLocation();
  const [drugSearch, setDrugSearch] = useState('');
  const [drugProfile, setDrugProfile] = useState<DrugProfile | null>(null);
  const [isDrugSearching, setIsDrugSearching] = useState(false);
  const [drugError, setDrugError] = useState('');
  // Smart-name checker: shown when the typed name isn't an exact match but is
  // close to a known drug. Suggestions are never auto-applied — the student
  // confirms the corrected name before any search happens.
  const [drugSuggestions, setDrugSuggestions] = useState<DrugSuggestions | null>(null);
  const drugInput = useRef<HTMLInputElement | null>(null);

  const runDrugSearch = async (rawDrug: string) => {
    const trimmedDrug = rawDrug.trim();
    if (!trimmedDrug) {
      setDrugError('Enter a drug name to start a search.');
      drugInput.current?.focus();
      return;
    }

    setDrugError('');
    setDrugProfile(null);
    setDrugSuggestions(null);
    setIsDrugSearching(true);

    try {
      const answer = await askPharmaAssistant({
        question: `Create a Drug Explorer profile for the drug named "${trimmedDrug}".`,
        mode: 'drug-profile',
      });
      const profile = parseDrugProfile(answer.answer, trimmedDrug);
      if (!profile.hasReliableContent) {
        setDrugError(`I couldn't find a reliable educational profile for "${trimmedDrug}". Try checking the spelling or searching another drug.`);
        return;
      }
      setDrugProfile(profile);
    } catch {
      setDrugError('I couldn’t generate this drug profile right now. Please check the drug name and try again.');
    } finally {
      setIsDrugSearching(false);
    }
  };

  const handleDrugSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedDrug = drugSearch.trim();
    if (!trimmedDrug || isDrugSearching) {
      setDrugError('Enter a drug name to start a search.');
      drugInput.current?.focus();
      return;
    }

    // Smart spelling gate — runs locally, before any AI/API call. Exact
    // matches pass straight through with unchanged behavior; a confidently
    // close name offers one suggestion; several plausible names ask the
    // student to choose; nothing close falls through to the normal search.
    const nameCheck = checkDrugName(trimmedDrug);
    if (!nameCheck.exact) {
      if (nameCheck.suggestion) {
        setDrugSuggestions({ query: trimmedDrug, suggestion: nameCheck.suggestion.name, choices: [] });
        return;
      }
      if (nameCheck.choices.length > 0) {
        setDrugSuggestions({ query: trimmedDrug, suggestion: null, choices: nameCheck.choices.map((choice) => choice.name) });
        return;
      }
    }

    runDrugSearch(trimmedDrug);
  };

  const handleSuggestionSearch = (name: string) => {
    setDrugSearch(name);
    runDrugSearch(name);
  };

  const askFromDrugExplorer = (prompt: string, destination: string) => {
    navigate(`${destination}?q=${encodeURIComponent(prompt)}`);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Search the library</p>
            <p className="mt-1 text-sm text-muted-foreground">Start with a generic or brand name</p>
          </div>
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <FlaskConical className="size-5" aria-hidden="true" />
          </div>
        </div>
          <form onSubmit={handleDrugSearch} className="mt-5 flex flex-col gap-2 sm:flex-row">
            <input
              ref={drugInput}
              value={drugSearch}
              onChange={(event) => setDrugSearch(event.target.value)}
              placeholder="Search for a drug..."
              maxLength={100}
              className="focus-ring min-h-11 min-w-0 flex-1 rounded-xl border border-input bg-background px-4 text-sm text-primary placeholder:text-muted-foreground focus:border-ring focus:outline-none"
              data-testid="input-drug-search"
              aria-label="Search for a drug"
            />
            <button
              type="submit"
              disabled={!drugSearch.trim() || isDrugSearching}
              className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
              data-testid="button-drug-search"
            >
              <Search className="size-4" aria-hidden="true" />
              Search
            </button>
          </form>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">Educational information only. Always verify clinical details with a trusted reference.</p>
      </div>

      {isDrugSearching && (
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-5 text-sm text-primary sm:px-6" role="status" data-testid="status-drug-searching">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <Sparkles className="size-4 animate-pulse-soft" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold">Building a drug profile…</p>
            <p className="mt-1 text-xs text-muted-foreground">Checking the requested sections and preparing a study-friendly summary.</p>
          </div>
        </div>
      )}

      {drugSuggestions && !isDrugSearching && (
        <div className="rounded-2xl border border-border bg-card px-5 py-5 sm:px-6" role="status" data-testid="drug-suggestions">
          {drugSuggestions.suggestion ? (
            <>
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Search className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Did you mean {drugSuggestions.suggestion}?</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    We couldn't find an exact match for “{drugSuggestions.query}”. Confirm the name to see its profile.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => handleSuggestionSearch(drugSuggestions.suggestion!)}
                  className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
                  data-testid="button-drug-suggestion"
                >
                  <Search className="size-4" aria-hidden="true" />
                  Search {drugSuggestions.suggestion}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const original = drugSuggestions.query;
                    setDrugSuggestions(null);
                    // The dictionary only suggests spellings — it must never
                    // restrict what can be searched. Search the student's
                    // original text (the AI backend remains the source of
                    // truth for every drug, listed here or not).
                    runDrugSearch(original);
                  }}
                  className="focus-ring flex min-h-11 items-center justify-center rounded-xl border border-border bg-background px-4 text-sm font-bold text-primary transition-all hover:border-primary/40 hover:bg-muted"
                  data-testid="button-drug-suggestion-dismiss"
                >
                  Keep my spelling
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Search className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Which drug did you mean?</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    A few known drugs are close to “{drugSuggestions.query}” — pick the one you want.
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {drugSuggestions.choices.map((choice) => (
                  <li key={choice}>
                    <button
                      type="button"
                      onClick={() => handleSuggestionSearch(choice)}
                      className="focus-ring flex min-h-11 w-full items-center justify-between rounded-xl border border-border bg-background px-4 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-muted"
                      data-testid={`button-drug-choice-${choice.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="truncate">{choice}</span>
                      <ChevronRight className="ml-2 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {drugError && !isDrugSearching && (
        <div className="flex items-start gap-3 rounded-2xl border border-error/30 bg-error/8 px-5 py-5 text-sm text-primary sm:px-6" role="alert" data-testid="status-drug-error">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <p className="font-semibold">Drug profile unavailable</p>
            <p className="mt-1 leading-6 text-muted-foreground">{drugError}</p>
          </div>
        </div>
      )}

      {drugProfile && !isDrugSearching && (
        <article className="rounded-2xl border border-border bg-card shadow-sm" data-testid="drug-profile-result">
          <div className="border-b border-border px-5 py-5 sm:px-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Educational drug profile</p>
            <h3 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{drugProfile.displayName}</h3>
          </div>
          <div className="grid gap-3 px-5 py-5 sm:grid-cols-2 sm:px-7 lg:grid-cols-3">
            {drugProfile.sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-border bg-background p-4 sm:p-5">
                <h4 className="text-sm font-bold text-primary">{section.title}</h4>
                <div className="math-text-host mt-3 text-sm leading-6 text-muted-foreground">
                  <MathText content={section.content} />
                </div>
              </section>
            ))}
          </div>
          <div className="border-t border-border px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => askFromDrugExplorer(`Help me study ${drugProfile.displayName} in a focused five-minute session. Cover its class, mechanism, uses, cautions, and a memory aid.`, '/study')}
                className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
                data-testid="button-study-drug"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Study This Drug
              </button>
              <button
                type="button"
                onClick={() => askFromDrugExplorer(`Quiz me on ${drugProfile.displayName} with five pharmacy student questions, one at a time.`, '/quiz')}
                className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
                data-testid="button-quiz-drug"
              >
                <Brain className="size-4" aria-hidden="true" />
                Quiz Me
              </button>
              <button
                type="button"
                onClick={() => askFromDrugExplorer(`What else should I know about ${drugProfile.displayName} for pharmacy study?`, '/ask')}
                className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
                data-testid="button-ask-more-drug"
              >
                <Send className="size-4" aria-hidden="true" />
                Ask More
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              <span className="font-semibold text-primary">Educational use only:</span> This profile is general information and is not a substitute for advice from a pharmacist or clinician.
            </p>
          </div>
        </article>
      )}
    </div>
  );
}

type DrugProfileSection = {
  title: string;
  content: string;
};

type DrugProfile = {
  displayName: string;
  sections: DrugProfileSection[];
  hasReliableContent: boolean;
};

/** Spelling-checker state for Drug Explorer; never auto-applied. */
type DrugSuggestions = {
  /** The raw, unconfirmed input the student typed. */
  query: string;
  /** One confidently-close name, for the "Did you mean …?" state. */
  suggestion: string | null;
  /** Several plausible names, for the "Which drug did you mean?" state. */
  choices: string[];
};

const drugProfileSectionTitles = [
  'Generic name',
  'Drug class',
  'What it is',
  'Mechanism of action',
  'Common uses',
  'Common adverse effects',
  'Contraindications / important cautions',
  'Important drug interactions',
  'Pharmacokinetics',
  'Pharmacy Student Tip',
];

function parseDrugProfile(answer: string, searchedName: string): DrugProfile {
  const contentByTitle = new Map<string, string[]>();
  let currentTitle: string | null = null;

  for (const line of answer.split(/\r?\n/)) {
    const normalizedLine = line
      .trim()
      .replace(/^#{1,6}\s*/, '')
      .replace(/^\*{1,2}/, '')
      .replace(/\*{1,2}$/, '')
      .replace(/:$/, '')
      .trim()
      .toLowerCase();
    const matchedTitle = drugProfileSectionTitles.find((title) => title.toLowerCase() === normalizedLine);

    if (matchedTitle) {
      currentTitle = matchedTitle;
      contentByTitle.set(matchedTitle, []);
      continue;
    }

    if (currentTitle) {
      contentByTitle.get(currentTitle)?.push(line);
    }
  }

  const sections = drugProfileSectionTitles.map((title) => {
    const content = contentByTitle.get(title)?.join('\n').trim();
    return {
      title,
      content: content || 'Information unavailable or uncertain.',
    };
  });
  const genericName = sections.find((section) => section.title === 'Generic name')?.content;
  const displayName = genericName && !isUnavailableProfileText(genericName)
    ? genericName.split('\n')[0].replace(/^[-*]\s*/, '').trim()
    : searchedName;
  const hasReliableContent = sections.some((section) => !isUnavailableProfileText(section.content));

  return { displayName, sections, hasReliableContent };
}

function isUnavailableProfileText(content: string) {
  const normalized = content.toLowerCase();
  return normalized.includes('information unavailable or uncertain')
    || normalized.includes('unable to verify')
    || normalized.includes('not enough reliable information')
    || normalized.includes('not recognized');
}
