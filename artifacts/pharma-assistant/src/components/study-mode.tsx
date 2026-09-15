import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ApiError, askPharmaAssistant } from '@workspace/api-client-react';
import { MathText } from '@/components/math-text';
import { normalizeEscapedNewlines } from '@/lib/math-text';
import {
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Info,
  Lightbulb,
  MessageCircleQuestion,
  RotateCcw,
  Send,
  Sparkles,
  Timer,
  X,
} from 'lucide-react';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

type StudySetup = {
  subject: string;
  topic: string;
  difficulty: Difficulty;
  duration: 10 | 20 | 30 | null;
  /** Optional curriculum context (course + parent topic) from the Courses page. */
  curriculumContext: string | null;
};

type TutorStep = {
  kind: 'teaching' | 'evaluation' | 'complete';
  content: string;
  checkQuestion: string | null;
  objectives: string[];
  keyTakeaways: string[];
  struggledAreas: string[];
  topicsToReview: string[];
  revisionSummary: string;
};

type SessionEntry = {
  id: number;
  role: 'tutor' | 'student';
  kind: TutorStep['kind'] | 'student-answer' | 'system';
  text: string;
};

type Phase = 'setup' | 'session' | 'summary';

const DIFFICULTIES: Array<{ value: Difficulty; blurb: string }> = [
  { value: 'Beginner', blurb: 'Start from the fundamentals' },
  { value: 'Intermediate', blurb: 'Build on what you know' },
  { value: 'Advanced', blurb: 'Stretch into exam depth' },
];

const DURATIONS: Array<{ value: 10 | 20 | 30; label: string }> = [
  { value: 10, label: '10 min' },
  { value: 20, label: '20 min' },
  { value: 30, label: '30 min' },
];

const SUGGESTED_TOPICS: Array<{ subject: string; topic: string }> = [
  { subject: 'BCH 201', topic: 'Enzymes' },
  { subject: 'BCH 201', topic: 'Carbohydrate metabolism' },
  { subject: 'PHARM 301', topic: 'Pharmacokinetics' },
  { subject: 'PHARM 301', topic: 'Autonomic nervous system drugs' },
  { subject: 'PCOL 205', topic: 'Drug receptors' },
];

const CONTROLS: Array<{ label: string; action: TutorAction }> = [
  { label: 'Continue', action: 'continue' },
  { label: 'Explain differently', action: 'explain-differently' },
  { label: 'Give me an example', action: 'example' },
  { label: 'I don\'t understand', action: 'struggling' },
];

type TutorAction = 'continue' | 'explain-differently' | 'example' | 'struggling' | 'end';

const emptyStep: TutorStep = {
  kind: 'teaching',
  content: '',
  checkQuestion: null,
  objectives: [],
  keyTakeaways: [],
  struggledAreas: [],
  topicsToReview: [],
  revisionSummary: '',
};

/** Map network/server failures to student-friendly wording; pass through
 * deliberate server messages (e.g. credits, permissions) as-is. */
function friendlyRequestError(error: unknown, fallback: string): string {
  if (error instanceof ApiError && (error.status === 0 || error.status >= 500)) {
    return 'The tutor service is unreachable right now — check your connection and try again.';
  }
  return error instanceof Error && error.message ? error.message : fallback;
}

function isTutorStep(value: unknown): value is TutorStep {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  const kind = candidate.kind;
  if (kind !== 'teaching' && kind !== 'evaluation' && kind !== 'complete') return false;
  return typeof candidate.content === 'string' && candidate.content.length > 0;
}

/**
 * Normalize literal "\\n" / "\\r" sequences in a parsed tutor step.
 *
 * Models sometimes double-escape newlines inside the JSON string values
 * ("para1\\\\n\\\\npara2"), so JSON.parse leaves visible backslash-n text.
 * Normalizing after parsing fixes prose, list fields, and check questions in
 * one place. (Normalizing before JSON.parse would corrupt the JSON itself —
 * a real newline inside a string literal is invalid.)
 */
function normalizeStepText(value: string): string {
  return normalizeEscapedNewlines(value) ?? value;
}

function normalizeTutorStep(step: TutorStep): TutorStep {
  return {
    ...step,
    content: normalizeStepText(step.content),
    checkQuestion: step.checkQuestion ? normalizeStepText(step.checkQuestion) : null,
    objectives: step.objectives.map(normalizeStepText),
    keyTakeaways: step.keyTakeaways.map(normalizeStepText),
    struggledAreas: step.struggledAreas.map(normalizeStepText),
    topicsToReview: step.topicsToReview.map(normalizeStepText),
    revisionSummary: normalizeStepText(step.revisionSummary),
  };
}

/** Exported for tests: parse + normalize one tutor response. */
export function parseTutorStep(raw: string): TutorStep {
  // The model is instructed to return one JSON object with no fences, but be
  // defensive: strip markdown fences and extract the outermost object.
  let text = raw.trim();
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) text = fenced[1].trim();

  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start !== -1 && end > start) {
    text = text.slice(start, end + 1);
  }

  try {
    const parsed: unknown = JSON.parse(text);
    if (isTutorStep(parsed)) return normalizeTutorStep(parsed);
  } catch {
    // fall through to plain-text fallback
  }

  return {
    ...emptyStep,
    content: normalizeStepText(raw.trim()),
    checkQuestion: null,
  };
}

function buildSessionContext(
  setup: StudySetup,
  log: SessionEntry[],
  pendingQuestion: string | null,
): string {
  const parts: string[] = [];

  parts.push(
    `SUBJECT: ${setup.subject}`,
    `TOPIC: ${setup.topic}`,
    `DIFFICULTY: ${setup.difficulty}`,
    `PLANNED DURATION: ${setup.duration ? `${setup.duration} minutes` : 'unspecified (let the student decide when to end)'}`,
  );

  if (setup.curriculumContext) {
    parts.push(`CURRICULUM CONTEXT: ${setup.curriculumContext}`);
  }

  if (log.length > 0) {
    parts.push(
      'SESSION TRANSCRIPT (oldest first; "STUDENT" entries are the student\'s answers or control actions):',
      ...log.map((entry) => `${entry.role === 'tutor' ? 'TUTOR' : 'STUDENT'}: ${entry.text}`),
    );
  } else {
    parts.push('SESSION TRANSCRIPT: none yet (this is the start of the session).');
  }

  if (pendingQuestion) {
    parts.push(`PENDING CHECK QUESTION (do not reveal its answer; wait for the student): ${pendingQuestion}`);
  }

  return parts.join('\n');
}

function Disclaimer() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#ded7c6] bg-[#f2ede0]/75 px-4 py-3.5">
      <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
      <p className="text-xs leading-5 text-muted-foreground">
        <span className="font-semibold text-primary">Educational use only:</span>{' '}
        This tutor is general study help and is not a substitute for advice from a pharmacist or clinician.
      </p>
    </div>
  );
}

export default function StudyMode({
  prefillTopic,
  prefillSubject,
  prefillContext,
}: {
  /** Topic handed over from Quiz/Progress/Curriculum: fills the topic input. */
  prefillTopic?: string | null;
  /** Course code handed over from Curriculum: fills the subject input. */
  prefillSubject?: string | null;
  /** Extra context note (course name, parent topic) from Curriculum. */
  prefillContext?: string | null;
} = {}) {
  const [phase, setPhase] = useState<Phase>('setup');

  // Setup form state
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('Beginner');
  const [duration, setDuration] = useState<10 | 20 | 30 | null>(null);
  const [setupError, setSetupError] = useState('');
  /** Context note from the Curriculum handoff; cleared when the student edits. */
  const [curriculumContext, setCurriculumContext] = useState<string | null>(null);

  // Session state
  const [setup, setSetup] = useState<StudySetup | null>(null);
  const [entries, setEntries] = useState<SessionEntry[]>([]);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [lastStep, setLastStep] = useState<TutorStep | null>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [sessionError, setSessionError] = useState('');
  const [transcript, setTranscript] = useState<SessionEntry[]>([]);

  const nextId = useRef(1);
  const logEndRef = useRef<HTMLDivElement | null>(null);
  const answerInputRef = useRef<HTMLTextAreaElement | null>(null);

  const transcriptRef = useRef<SessionEntry[]>([]);
  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  const appendEntry = useCallback((entry: Omit<SessionEntry, 'id'>) => {
    const withId: SessionEntry = { ...entry, id: nextId.current++ };
    setEntries((current) => [...current, withId]);
    setTranscript((current) => [...current, withId]);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [entries.length, isThinking]);

  const callTutor = useCallback(
    async (studentMessage: string, currentTranscript: SessionEntry[], currentPending: string | null) => {
      if (!setup) return;

      appendEntry({ role: 'student', kind: 'student-answer', text: studentMessage });
      setIsThinking(true);
      setSessionError('');

      try {
        const context = buildSessionContext(setup, currentTranscript, currentPending);
        const response = await askPharmaAssistant({
          question: studentMessage,
          mode: 'study-session',
          context,
        });

        const step = parseTutorStep(response.answer);

        if (step.kind === 'complete') {
          appendEntry({ role: 'tutor', kind: 'complete', text: step.content });
          setLastStep(step);
          setPendingQuestion(null);
          setPhase('summary');
          return;
        }

        appendEntry({
          role: 'tutor',
          kind: step.kind,
          text: step.checkQuestion
            ? `${step.content}\n\nCheck question: ${step.checkQuestion}`
            : step.content,
        });
        setLastStep(step);
        setPendingQuestion(step.checkQuestion ?? null);
        if (step.objectives.length > 0) {
          setObjectives((current) =>
            current.length === 0 ? step.objectives : current,
          );
        }
        answerInputRef.current?.focus();
      } catch (error) {
        setSessionError(friendlyRequestError(error, 'The tutor is unavailable right now. Please try again.'));
      } finally {
        setIsThinking(false);
      }
    },
    [appendEntry, setup],
  );

  const startSession = useCallback(async () => {
    const trimmedSubject = subject.trim();
    const trimmedTopic = topic.trim();
    if (!trimmedSubject || !trimmedTopic) {
      setSetupError('Enter both a subject and a topic to start your session.');
      return;
    }

    const sessionSetup: StudySetup = {
      subject: trimmedSubject,
      topic: trimmedTopic,
      difficulty,
      duration,
      curriculumContext,
    };
    setSetupError('');
    setSetup(sessionSetup);
    setEntries([]);
    setTranscript([]);
    setPendingQuestion(null);
    setObjectives([]);
    setLastStep(null);
    setStudentAnswer('');
    setPhase('session');

    try {
      setIsThinking(true);
      setSessionError('');
      const response = await askPharmaAssistant({
        question: `Start a ${sessionSetup.difficulty} level tutoring session on ${sessionSetup.topic} for ${sessionSetup.subject}.`,
        mode: 'study-session',
        context: buildSessionContext(sessionSetup, [], null),
      });
      const step = parseTutorStep(response.answer);
      appendEntry({ role: 'tutor', kind: step.kind, text: step.content });
      setLastStep(step);
      setPendingQuestion(step.checkQuestion ?? null);
      if (step.objectives.length > 1 || step.objectives.length > 0) {
        setObjectives(step.objectives);
      }
    } catch (error) {
      setSessionError(friendlyRequestError(error, 'Could not start the session. Please try again.'));
    } finally {
      setIsThinking(false);
    }
  }, [appendEntry, curriculumContext, difficulty, duration, subject, topic]);

  const submitAnswer = useCallback(() => {
    const trimmed = studentAnswer.trim();
    if (!trimmed || isThinking) return;
    const currentPending = pendingQuestion;
    setStudentAnswer('');
    setPendingQuestion(null);
    void callTutor(trimmed, transcriptRef.current, currentPending);
    setPendingQuestion(currentPending);
  }, [callTutor, isThinking, pendingQuestion, studentAnswer]);

  const runControl = useCallback(
    (action: TutorAction) => {
      if (isThinking) return;
      if (action === 'end') {
        const currentTranscript = transcriptRef.current;
        setStudentAnswer('');
        void callTutor('[END SESSION] Please end the session now: provide key takeaways, areas I struggled with, topics to review, and a short revision summary.', currentTranscript, pendingQuestion);
        return;
      }

      const prompts: Record<Exclude<TutorAction, 'end'>, string> = {
        continue: '[CONTINUE] I understand so far. Please continue teaching the next small step.',
        'explain-differently': '[EXPLAIN DIFFERENTLY] Please explain the current idea a different way, with a fresh example.',
        example: '[EXAMPLE] Please give me a pharmacy-specific example of the current idea.',
        struggling: "[I DON'T UNDERSTAND] I'm finding this hard. Please slow down and explain more simply, one step at a time.",
      };
      setStudentAnswer('');
      void callTutor(prompts[action], transcriptRef.current, pendingQuestion);
    },
    [callTutor, isThinking, pendingQuestion],
  );

  const endSession = useCallback(() => {
    if (isThinking || !setup) return;
    void callTutor(
      '[END SESSION] Please end the session now with key takeaways, areas I struggled with, topics to review, and a short revision summary.',
      transcriptRef.current,
      pendingQuestion,
    );
    setStudentAnswer('');
  }, [callTutor, isThinking, pendingQuestion, setup]);

  const restart = useCallback(() => {
    setPhase('setup');
    setSetup(null);
    setEntries([]);
    setTranscript([]);
    setPendingQuestion(null);
    setObjectives([]);
    setLastStep(null);
    setStudentAnswer('');
    setSessionError('');
    setCurriculumContext(null);
  }, []);

  const hasPendingQuestion = pendingQuestion !== null;
  const displayTranscript = useMemo(
    () => entries,
    [entries],
  );

  // Quiz Mode hands over weak topics via prefillTopic: fill the topic input
  // and show the setup form (an active session is never interrupted).
  // Curriculum handoffs add prefillSubject (course code) and prefillContext
  // (course name + parent topic) — the student can still edit everything
  // before starting.
  const lastPrefillRef = useRef<string | null>(null);
  useEffect(() => {
    if (!prefillTopic) return;
    if (lastPrefillRef.current === prefillTopic && topic.trim() !== '') return;
    lastPrefillRef.current = prefillTopic;
    setTopic(prefillTopic);
    if (prefillSubject) setSubject(prefillSubject);
    setCurriculumContext(prefillContext ?? null);
    setSetupError('');
    setPhase((currentPhase) => (currentPhase === 'session' ? currentPhase : 'setup'));
  }, [prefillTopic, prefillSubject, prefillContext, topic]);

  if (phase === 'setup') {
    return (
      <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-5 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-7" data-testid="study-mode-setup">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0dd] text-accent">
            <GraduationCap className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Study Mode</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl">
              Your personal pharmacy tutor
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The AI teaches progressively, checks your understanding with short questions, and adapts to how you're doing. You answer before moving on.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold text-primary">Subject</span>
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="e.g. BCH 201"
              maxLength={80}
              className="focus-ring mt-2 min-h-11 w-full rounded-xl border border-[#d9d2c1] bg-background px-4 text-sm text-primary placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
              data-testid="input-study-subject"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-primary">Topic</span>
            <input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="e.g. Enzymes"
              maxLength={120}
              className="focus-ring mt-2 min-h-11 w-full rounded-xl border border-[#d9d2c1] bg-background px-4 text-sm text-primary placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
              data-testid="input-study-topic"
            />
          </label>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {SUGGESTED_TOPICS.map((suggestion) => (
            <button
              key={`${suggestion.subject}-${suggestion.topic}`}
              type="button"
              onClick={() => {
                setSubject(suggestion.subject);
                setTopic(suggestion.topic);
              }}
              className="focus-ring rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-[#b9a974] hover:bg-[#fbf7e9]"
              data-testid={`button-suggested-${suggestion.subject.toLowerCase().replaceAll(' ', '-')}-${suggestion.topic.toLowerCase().replaceAll(' ', '-')}`}
            >
              {suggestion.subject} · {suggestion.topic}
              <span className="sr-only"> — fill subject and topic</span>
            </button>
          ))}
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-bold text-primary">Difficulty</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {DIFFICULTIES.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setDifficulty(option.value)}
                aria-pressed={difficulty === option.value}
                className={`focus-ring rounded-2xl border p-3 text-left transition-all ${
                  difficulty === option.value
                    ? 'border-primary bg-[#edf3f0] shadow-[0_10px_30px_hsl(191_38%_18%_/_0.08)]'
                    : 'border-border bg-background hover:border-primary/40'
                }`}
                data-testid={`button-difficulty-${option.value.toLowerCase()}`}
              >
                <span className="block text-sm font-bold text-primary">{option.value}</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">{option.blurb}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-bold text-primary">
            Study duration <span className="font-normal text-muted-foreground">(optional)</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {DURATIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setDuration((current) => (current === option.value ? null : option.value))}
                aria-pressed={duration === option.value}
                className={`focus-ring flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-all ${
                  duration === option.value
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-primary hover:border-primary/40'
                }`}
                data-testid={`button-duration-${option.value}`}
              >
                <Timer className="size-3.5" aria-hidden="true" />
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        {setupError && (
          <p className="mt-4 rounded-xl border border-[#e4b9a6] bg-[#fff4ed] px-4 py-3 text-sm text-primary" role="alert" data-testid="status-study-setup-error">
            {setupError}
          </p>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => void startSession()}
            disabled={!subject.trim() || !topic.trim()}
            className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            data-testid="button-start-study"
          >
            <GraduationCap className="size-4" aria-hidden="true" />
            Start session
          </button>
          <p className="text-xs leading-5 text-muted-foreground">
            The tutor starts with the fundamentals and checks your understanding as you go.
          </p>
        </div>

        <div className="mt-6">
          <Disclaimer />
        </div>
      </div>
    );
  }

  if (phase === 'summary') {
    return (
      <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-5 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-7" data-testid="study-mode-summary">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f0ed] text-primary">
            <CheckCircle2 className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Session complete</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl">
              Great work — here's your wrap-up
            </h2>
            {setup && (
              <p className="mt-1 text-sm text-muted-foreground">
                {setup.subject} · {setup.topic} · {setup.difficulty}
              </p>
            )}
          </div>
        </div>

        {lastStep?.content && (
          <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-[#dce6e1] bg-[#edf3f0] p-4 text-sm leading-6 text-primary">
            <MathText content={lastStep.content} />
          </div>
        )}

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            { title: 'Key takeaways', items: lastStep?.keyTakeaways ?? [], icon: CheckCircle2 },
            { title: 'Areas you struggled with', items: lastStep?.struggledAreas ?? [], icon: MessageCircleQuestion },
            { title: 'Topics to review', items: lastStep?.topicsToReview ?? [], icon: BookOpen },
          ].map((group) => (
            <section key={group.title} className="rounded-2xl border border-border bg-background p-4">
              <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
                <group.icon className="size-4 text-accent" aria-hidden="true" />
                {group.title}
              </h3>
              {group.items.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {group.items.map((item, index) => (
                    <li key={`${group.title}-${index}`} className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">Nothing noted.</p>
              )}
            </section>
          ))}
          {lastStep?.revisionSummary && (
            <section className="rounded-2xl border border-border bg-background p-4 sm:col-span-2">
              <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
                <Lightbulb className="size-4 text-accent" aria-hidden="true" />
                Revision summary
              </h3>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
                <MathText content={lastStep.revisionSummary} />
              </p>
            </section>
          )}
        </div>

        <div className="mt-6">
          <Disclaimer />
        </div>

        <button
          type="button"
          onClick={restart}
          className="focus-ring mt-6 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55]"
          data-testid="button-new-study-session"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Start a new session
        </button>
      </div>
    );
  }

  // Session phase
  return (
    <div className="rounded-[24px] border border-[#d9d2c1] bg-card shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)]" data-testid="study-mode-session">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-7">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Study Mode · live session</p>
          <h2 className="mt-1 font-serif text-xl font-semibold tracking-[-0.04em] text-primary sm:text-2xl">
            {setup ? `${setup.subject} — ${setup.topic}` : 'Session'}
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {setup?.difficulty}
            {setup?.duration ? ` · ${setup.duration} min planned` : ''}
          </p>
        </div>
        <button
          type="button"
          onClick={endSession}
          disabled={isThinking}
          className="focus-ring flex min-h-10 items-center gap-2 rounded-full border border-border bg-background px-4 text-xs font-bold text-primary transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-45"
          data-testid="button-end-study"
        >
          <X className="size-3.5" aria-hidden="true" />
          End session
        </button>
      </div>

      {objectives.length > 0 && (
        <div className="border-b border-border bg-[#edf3f0]/60 px-5 py-4 sm:px-7" data-testid="study-objectives">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            Learning objectives
          </p>
          <ul className="mt-2 space-y-1.5">
            {objectives.map((objective, index) => (
              <li key={`objective-${index}`} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-[#67a774]" aria-hidden="true" />
                {objective}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="max-h-[58dvh] space-y-4 overflow-y-auto px-5 py-5 sm:px-7" data-testid="study-conversation">
        {displayTranscript.map((entry) => {
          if (entry.role === 'student') {
            return (
              <div key={entry.id} className="flex justify-end">
                <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm leading-6 text-primary-foreground">
                  {entry.text}
                </div>
              </div>
            );
          }
          return (
            <div key={entry.id} className="flex items-start gap-3">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <GraduationCap className="size-4" aria-hidden="true" />
              </div>
              <div className="max-w-[85%]">
                <div className="whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-[#dce6e1] bg-[#edf3f0] px-4 py-3 text-sm leading-6 text-primary">
                  <MathText content={entry.text} />
                </div>
              </div>
            </div>
          );
        })}
        {isThinking && (
          <div className="flex items-start gap-3 animate-rise-in" role="status">
            <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <GraduationCap className="size-4 animate-pulse-soft" aria-hidden="true" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-[#edf3f0] px-4 py-3 text-sm text-primary">
              <span className="animate-pulse-soft">The tutor is thinking…</span>
            </div>
          </div>
        )}
        {sessionError && (
          <div className="rounded-2xl border border-[#e4b9a6] bg-[#fff4ed] px-4 py-3 text-sm text-primary" role="alert">
            {sessionError}
          </div>
        )}
        <div ref={logEndRef} />
      </div>

      <div className="border-t border-border px-5 py-4 sm:px-7">
        {hasPendingQuestion && (
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary" data-testid="study-pending-question">
            <MessageCircleQuestion className="size-4 text-accent" aria-hidden="true" />
            <span>The tutor asked a check question — answer it to continue.</span>
          </p>
        )}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitAnswer();
          }}
        >
          <textarea
            ref={answerInputRef}
            value={studentAnswer}
            onChange={(event) => setStudentAnswer(event.target.value)}
            placeholder={hasPendingQuestion ? 'Type your answer…' : 'Type a question or note for your tutor (optional)…'}
            rows={2}
            maxLength={1000}
            className="focus-ring w-full resize-none rounded-2xl border border-[#d9d2c1] bg-background px-4 py-3 text-sm leading-6 text-primary placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
            data-testid="input-study-answer"
            aria-label="Your answer or message to the tutor"
          />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {CONTROLS.map((control) => (
              <button
                key={control.label}
                type="button"
                onClick={() => runControl(control.action)}
                disabled={isThinking}
                className="focus-ring flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
                data-testid={`button-control-${control.action}`}
              >
                {control.action === 'continue' && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {control.action === 'example' && <Lightbulb className="size-3.5" aria-hidden="true" />}
                {control.action === 'struggling' && <Brain className="size-3.5" aria-hidden="true" />}
                {control.label}
              </button>
            ))}
            <button
              type="submit"
              disabled={!studentAnswer.trim() || isThinking}
              className="focus-ring ml-auto flex min-h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
              data-testid="button-submit-study-answer"
            >
              <Send className="size-3.5" aria-hidden="true" />
              Send
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
