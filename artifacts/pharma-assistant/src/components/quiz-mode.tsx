import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ApiError, askPharmaAssistant } from '@workspace/api-client-react';
import { MathText } from '@/components/math-text';
import { stripGeneratedDisclaimer } from '@/lib/math-text';
import { saveQuizResult } from '@/lib/progress-storage';
import {
  AlertTriangle,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Info,
  ListChecks,
  RotateCcw,
  Sparkles,
  Target,
  XCircle,
} from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Letter = 'A' | 'B' | 'C' | 'D';

type QuizQuestion = {
  question: string;
  options: Record<Letter, string>;
  correctAnswer: Letter;
  explanation: string;
  topic: string;
  difficulty: Difficulty;
};

type QuizSetup = {
  subjectTopic: string;
  difficulty: Difficulty;
  questionCount: 5 | 10 | 15 | 20;
};

type Answered = {
  questionIndex: number;
  selected: Letter;
  correct: boolean;
};

type Phase = 'setup' | 'loading' | 'quiz' | 'results' | 'error';

/**
 * Extract the server's own error text when it provides one. The API attaches
 * specific messages for provider failures (quota exhausted, service
 * misconfiguration, empty AI response) that must reach the student verbatim
 * instead of being masked as a connection problem.
 */
function serverErrorMessage(error: unknown): string | null {
  if (!(error instanceof ApiError)) return null;
  const data = error.data as { error?: unknown } | string | null;
  const fromField =
    typeof data === 'object' && data !== null && typeof data.error === 'string'
      ? data.error.trim()
      : undefined;
  return fromField || null;
}

/**
 * Translate a failed quiz-generation request into an honest message:
 * - server-supplied message (quota/provider/empty-response) → shown verbatim;
 * - ApiError status 0 → genuine network failure → connection message;
 * - other 5xx → service temporarily unavailable (NOT the user's internet);
 * - 4xx → the server's specific message;
 * - non-ApiError throws → real network TypeErrors get a connection message,
 *   while quiz-JSON validation errors keep their specific wording.
 */
function describeQuizError(error: unknown): string {
  const serverMessage = serverErrorMessage(error);
  if (serverMessage) return serverMessage;
  if (error instanceof ApiError) {
    if (error.status === 0) {
      return 'No connection to the quiz service — check your internet connection and try again.';
    }
    if (error.status >= 500) {
      return 'The quiz service is temporarily unavailable. Please try again in a moment.';
    }
    return error.message;
  }
  const raw = error instanceof Error ? error.message : '';
  if (/failed to fetch|networkerror|load failed|fetch failed/i.test(raw)) {
    return 'No connection to the quiz service — check your internet connection and try again.';
  }
  return raw || 'Could not generate the quiz. Please try again.';
}

const DIFFICULTIES: Array<{ value: Difficulty; blurb: string }> = [
  { value: 'Easy', blurb: 'Core concepts and recall' },
  { value: 'Medium', blurb: 'Application and reasoning' },
  { value: 'Hard', blurb: 'Clinical scenarios and edge cases' },
];

const COUNTS: Array<5 | 10 | 15 | 20> = [5, 10, 15, 20];

const SUBJECTS = [
  'Pharmacy',
  'Pharmacology',
  'Pharmaceutical Chemistry',
  'Pharmaceutics',
  'Physiology',
  'Anatomy',
  'Biochemistry',
  'Pharmacognosy',
  'Microbiology',
] as const;

const CUSTOM_SUBJECT = 'Custom topic';

/** Extract the outermost JSON object from a possibly noisy model response. */
function extractJsonObject(raw: string): unknown {
  let text = raw.trim();
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) text = fenced[1].trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) throw new Error('No JSON object found in AI response.');
  return JSON.parse(text.slice(start, end + 1));
}

function isValidLetter(value: unknown): value is Letter {
  return value === 'A' || value === 'B' || value === 'C' || value === 'D';
}

function parseQuestions(raw: string): QuizQuestion[] {
  const parsed: unknown = extractJsonObject(raw);
  const container = typeof parsed === 'object' && parsed !== null ? (parsed as Record<string, unknown>) : {};
  const rawQuestions = container.questions;

  if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
    throw new Error('The AI did not return any questions.');
  }

  const questions: QuizQuestion[] = [];
  for (const item of rawQuestions) {
    if (typeof item !== 'object' || item === null) continue;
    const q = item as Record<string, unknown>;
    // The app displays its own static educational-use notice; drop any the
    // model still appends so questions never end with boilerplate.
    const question = typeof q.question === 'string' ? stripGeneratedDisclaimer(q.question.trim()) : '';
    const rawOptions = typeof q.options === 'object' && q.options !== null ? (q.options as Record<string, unknown>) : {};
    const options: Partial<Record<Letter, string>> = {};
    for (const letter of ['A', 'B', 'C', 'D'] as const) {
      const value = rawOptions[letter];
      if (typeof value === 'string' && value.trim()) options[letter] = stripGeneratedDisclaimer(value.trim());
    }
    const correctAnswer = isValidLetter(q.correctAnswer) ? q.correctAnswer : undefined;
    const explanation = typeof q.explanation === 'string' ? stripGeneratedDisclaimer(q.explanation.trim()) : '';
    const topic = typeof q.topic === 'string' && q.topic.trim() ? q.topic.trim() : 'General';
    const difficulty: Difficulty =
      q.difficulty === 'Easy' || q.difficulty === 'Medium' || q.difficulty === 'Hard'
        ? q.difficulty
        : 'Medium';

    // A question must be complete and self-consistent to be usable.
    if (!question || !correctAnswer || !options.A || !options.B || !options.C || !options.D || !explanation) continue;

    questions.push({ question, options: options as Record<Letter, string>, correctAnswer, explanation, topic, difficulty });
  }

  if (questions.length === 0) {
    throw new Error('The AI returned questions, but none were complete enough to use.');
  }
  return questions;
}

function performanceMessage(percentage: number): string {
  if (percentage >= 90) return 'Outstanding — you have mastered this material.';
  if (percentage >= 75) return 'Strong work — a little polish and you are there.';
  if (percentage >= 60) return 'Solid effort — review the misses and go again.';
  if (percentage >= 40) return 'Getting there — focus on the weak areas below.';
  return 'Tough round — work through the weak topics, then retry.';
}

function Disclaimer() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#ded7c6] bg-[#f2ede0]/75 px-4 py-3.5">
      <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
      <p className="text-xs leading-5 text-muted-foreground">
        <span className="font-semibold text-primary">Educational use only:</span>{' '}
        AI-generated quiz for study practice. Verify important details with your course materials or a trusted reference.
      </p>
    </div>
  );
}

export default function QuizMode({
  onStudyWeakAreas,
  prefillTopic,
  prefillContext,
}: {
  /** Called when the student taps Study Weak Areas; default scrolls to Study Mode. */
  onStudyWeakAreas?: (weakTopics: string[]) => void;
  /** Topic handed over from Progress/Curriculum: fills the custom topic during setup. */
  prefillTopic?: string | null;
  /** Extra context note (course, parent topic) from Curriculum, added to the quiz prompt. */
  prefillContext?: string | null;
} = {}) {
  const [phase, setPhase] = useState<Phase>('setup');

  const [subject, setSubject] = useState<string | null>(null);
  const [customTopic, setCustomTopic] = useState('');
  const subjectTopic = subject === CUSTOM_SUBJECT ? customTopic.trim() : (subject ?? '');
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [questionCount, setQuestionCount] = useState<5 | 10 | 15 | 20>(5);
  const [setupError, setSetupError] = useState('');
  /** Context note from the Curriculum handoff, included in the generation prompt. */
  const [curriculumContext, setCurriculumContext] = useState<string | null>(null);

  const [setup, setSetup] = useState<QuizSetup | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Letter | null>(null);
  const [answers, setAnswers] = useState<Answered[]>([]);
  const [loadError, setLoadError] = useState('');

  const answersRef = useRef<Answered[]>([]);
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const answeredCurrent = answers.some((a) => a.questionIndex === current);
  const isLastQuestion = current === questions.length - 1;

  const score = useMemo(() => {
    const correct = answers.filter((a) => a.correct).length;
    return { correct, incorrect: answers.length - correct };
  }, [answers]);

  const answeredQuestions = useMemo(
    () => answers.map((a) => ({ ...a, question: questions[a.questionIndex] })),
    [answers, questions],
  );

  const weakTopics = useMemo(() => {
    const counts = new Map<string, { misses: number; total: number }>();
    for (const entry of answeredQuestions) {
      const key = entry.question?.topic ?? 'General';
      const record = counts.get(key) ?? { misses: 0, total: 0 };
      record.total += 1;
      if (!entry.correct) record.misses += 1;
      counts.set(key, record);
    }
    return Array.from(counts.entries())
      .filter(([, value]) => value.misses > 0)
      .sort((a, b) => b[1].misses - a[1].misses)
      .map(([topic, value]) => ({ topic, misses: value.misses, total: value.total }));
  }, [answeredQuestions]);

  // Progress Dashboard hands over a topic: switch to Custom topic and fill it.
  // Curriculum handoffs may add prefillContext (course + parent topic).
  // Never interrupts an in-flight quiz.
  const lastQuizPrefillRef = useRef<string | null>(null);
  useEffect(() => {
    if (!prefillTopic || phase !== 'setup') return;
    if (lastQuizPrefillRef.current === prefillTopic) return;
    lastQuizPrefillRef.current = prefillTopic;
    setSubject(CUSTOM_SUBJECT);
    setCustomTopic(prefillTopic);
    setCurriculumContext(prefillContext ?? null);
  }, [phase, prefillTopic, prefillContext]);

  const startQuiz = useCallback(async () => {
    const trimmed = subjectTopic.trim();
    if (!trimmed) {
      setSetupError('Enter a subject or topic to quiz yourself on.');
      return;
    }
    const quizSetup: QuizSetup = { subjectTopic: trimmed, difficulty, questionCount };
    setSetupError('');
    setSetup(quizSetup);
    setPhase('loading');
    setLoadError('');
    try {
      const curriculumNote = curriculumContext ? ` Curriculum context: ${curriculumContext}.` : '';
      const prompt = `Generate a ${quizSetup.difficulty} difficulty quiz with exactly ${quizSetup.questionCount} multiple-choice questions on "${quizSetup.subjectTopic}" for pharmacy students.${curriculumNote}`;
      const response = await askPharmaAssistant({ question: prompt, mode: 'quiz-generation' });
      const parsed = parseQuestions(response.answer);
      // The model occasionally returns extra questions; serve exactly the requested count.
      setQuestions(parsed.slice(0, quizSetup.questionCount));
      setCurrent(0);
      setSelected(null);
      setAnswers([]);
      setPhase('quiz');
    } catch (error) {
      setLoadError(describeQuizError(error));
      setPhase('error');
    }
  }, [curriculumContext, difficulty, questionCount, subjectTopic]);

  const submitAnswer = useCallback(() => {
    if (selected === null || answeredCurrent) return; // no empty or double submits
    setAnswers((currentAnswers) => {
      if (currentAnswers.some((a) => a.questionIndex === current)) return currentAnswers;
      const isCorrect = selected === questions[current]?.correctAnswer;
      return [...currentAnswers, { questionIndex: current, selected, correct: isCorrect }];
    });
    setSelected(null);
  }, [answeredCurrent, current, questions, selected]);

  const nextQuestion = useCallback(() => {
    if (isLastQuestion) {
      setPhase('results');
      return;
    }
    setSelected(null);
    setCurrent((value) => value + 1);
  }, [isLastQuestion]);

  const retryQuiz = useCallback(() => {
    savedQuizRef.current = false; // a retried quiz is a new result
    setQuestions([]);
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setPhase('loading');
    void startQuiz();
  }, [startQuiz]);

  const newQuiz = useCallback(() => {
    savedQuizRef.current = false;
    setQuestions([]);
    setAnswers([]);
    setCurrent(0);
    setSelected(null);
    setLoadError('');
    setPhase('setup');
  }, []);

  // Reset the single-question view whenever the current index changes.
  useEffect(() => {
    setSelected(null);
  }, [current]);

  // Persist the completed quiz exactly once when the results phase is reached.
  const savedQuizRef = useRef(false);
  useEffect(() => {
    if (phase !== 'results' || savedQuizRef.current || answers.length === 0) return;
    savedQuizRef.current = true;
    const correct = answers.filter((a) => a.correct).length;
    saveQuizResult({
      subject: setup?.subjectTopic ?? 'General',
      difficulty: setup?.difficulty ?? 'Medium',
      totalQuestions: answers.length,
      correct,
      incorrect: answers.length - correct,
      percentage: Math.round((correct / answers.length) * 100),
      topicOutcomes: answers.map((a) => ({
        topic: questions[a.questionIndex]?.topic ?? 'General',
        correct: a.correct,
      })),
    });
  }, [answers, phase, questions, setup]);

  if (phase === 'setup') {
    return (
      <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-5 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-7" data-testid="quiz-mode-setup">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f0ed] text-primary">
            <Brain className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Quiz Mode</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl">
              Test what you know
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              AI-generated multiple-choice questions with explanations. Answers are checked as you go, and you get a full wrap-up at the end.
            </p>
          </div>
        </div>

        <fieldset className="mt-7">
          <legend className="text-sm font-bold text-primary">Subject / topic</legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[...SUBJECTS, CUSTOM_SUBJECT].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSubject(option)}
                aria-pressed={subject === option}
                className={`focus-ring min-h-11 rounded-xl border px-3 text-left text-sm font-semibold transition-all ${
                  subject === option
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-primary hover:border-primary/40'
                }`}
                data-testid={`button-quiz-subject-${option.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}
              >
                {option}
              </button>
            ))}
          </div>
          {subject === CUSTOM_SUBJECT && (
            <label className="mt-3 block">
              <span className="text-xs font-semibold text-muted-foreground">Your custom topic</span>
              <input
                value={customTopic}
                onChange={(event) => setCustomTopic(event.target.value)}
                placeholder="e.g. BCH 201 · Enzymes"
                maxLength={120}
                autoFocus
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-[#d9d2c1] bg-background px-4 text-sm text-primary placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
                data-testid="input-quiz-custom-topic"
              />
            </label>
          )}
        </fieldset>

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
                data-testid={`button-quiz-difficulty-${option.value.toLowerCase()}`}
              >
                <span className="block text-sm font-bold text-primary">{option.value}</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">{option.blurb}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-bold text-primary">Number of questions</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {COUNTS.map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setQuestionCount(count)}
                aria-pressed={questionCount === count}
                className={`focus-ring flex min-h-10 items-center rounded-full border px-4 text-sm font-semibold transition-all ${
                  questionCount === count
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-primary hover:border-primary/40'
                }`}
                data-testid={`button-quiz-count-${count}`}
              >
                {count}
              </button>
            ))}
          </div>
        </fieldset>

        {setupError && (
          <p className="mt-4 rounded-xl border border-[#e4b9a6] bg-[#fff4ed] px-4 py-3 text-sm text-primary" role="alert" data-testid="status-quiz-setup-error">
            {setupError}
          </p>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => void startQuiz()}
            disabled={!subjectTopic.trim()}
            className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            data-testid="button-start-quiz"
          >
            <ListChecks className="size-4" aria-hidden="true" />
            Start Quiz
          </button>
          <p className="text-xs leading-5 text-muted-foreground">
            Generating {questionCount} questions usually takes a few seconds.
          </p>
        </div>

        <div className="mt-6">
          <Disclaimer />
        </div>
      </div>
    );
  }

  if (phase === 'loading') {
    return (
      <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-8 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-10" data-testid="quiz-mode-loading">
        <div className="flex flex-col items-center text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
            <Sparkles className="size-6 animate-pulse-soft" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary">
            Writing your quiz…
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            {setup
              ? `${setup.questionCount} ${setup.difficulty.toLowerCase()}-level questions on ${setup.subjectTopic}.`
              : 'Preparing your questions.'}
          </p>
        </div>
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div className="rounded-[24px] border border-[#e4b9a6] bg-[#fff4ed] p-6 sm:p-8" data-testid="quiz-mode-error">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#ffe1cf] text-accent">
            <AlertTriangle className="size-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold tracking-[-0.04em] text-primary">Quiz unavailable</h2>
            <p className="mt-2 text-sm leading-6 text-primary">{loadError}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              You can try again — quizzes are generated fresh each time, so a retry often works.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={retryQuiz}
            className="focus-ring flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55]"
            data-testid="button-quiz-retry-generation"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Try again
          </button>
          <button
            type="button"
            onClick={newQuiz}
            className="focus-ring flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
            data-testid="button-quiz-back-to-setup"
          >
            Change settings
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'results') {
    const total = answeredQuestions.length || 1;
    const percentage = Math.round((score.correct / total) * 100);
    return (
      <div className="rounded-[24px] border border-[#d9d2c1] bg-card shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)]" data-testid="quiz-mode-results">
        <div className="border-b border-border px-5 py-6 sm:px-7">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Quiz complete</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">
            {score.correct} / {answeredQuestions.length || questions.length}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {percentage}% · {performanceMessage(percentage)}
          </p>
          <div className="mt-4 flex gap-2 text-xs font-semibold">
            <span className="flex items-center gap-1.5 rounded-full bg-[#e7f0ed] px-3 py-1.5 text-primary">
              <CheckCircle2 className="size-3.5 text-[#67a774]" aria-hidden="true" />
              {score.correct} correct
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-[#fff0dd] px-3 py-1.5 text-primary">
              <XCircle className="size-3.5 text-accent" aria-hidden="true" />
              {score.incorrect} incorrect
            </span>
          </div>
        </div>

        {weakTopics.length > 0 && (
          <div className="border-b border-border px-5 py-5 sm:px-7" data-testid="quiz-weak-topics">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              <Target className="size-3.5 text-accent" aria-hidden="true" />
              Topics you struggled with
            </p>
            <ul className="mt-3 space-y-2">
              {weakTopics.map((weak) => (
                <li key={weak.topic} className="flex items-start justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3">
                  <span className="text-sm font-semibold text-primary">{weak.topic}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {weak.misses} miss{weak.misses === 1 ? '' : 'es'} of {weak.total}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-3 px-5 py-5 sm:px-7" data-testid="quiz-review">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Review every question</p>
          {answeredQuestions.map((entry, index) => (
            <div key={entry.questionIndex} className="rounded-2xl border border-border bg-background p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-6 text-primary">
                  {index + 1}. <MathText content={entry.question?.question ?? ''} />
                </p>
                {entry.correct ? (
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#67a774]" aria-hidden="true" />
                ) : (
                  <XCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                )}
              </div>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Your answer: <span className="font-semibold">{entry.selected}. {entry.question?.options[entry.selected]}</span>
                {!entry.correct && (
                  <>
                    {' '}· Correct: <span className="font-semibold">{entry.question?.correctAnswer}. {entry.question?.options[entry.question.correctAnswer]}</span>
                  </>
                )}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                <MathText content={entry.question?.explanation ?? ''} />
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-border px-5 py-5 sm:flex-row sm:px-7">
          <button
            type="button"
            onClick={retryQuiz}
            className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55]"
            data-testid="button-retry-quiz"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Retry Quiz
          </button>
          <button
            type="button"
            onClick={newQuiz}
            className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
            data-testid="button-new-quiz"
          >
            <ListChecks className="size-4" aria-hidden="true" />
            New Quiz
          </button>
          <button
            type="button"
            onClick={() => {
              if (onStudyWeakAreas && weakTopics.length > 0) {
                onStudyWeakAreas(weakTopics.map((weak) => weak.topic));
                return;
              }
              document.getElementById('study')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
            data-testid="button-study-weak-areas"
            aria-label="Go to Study Mode to review weak topics"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Study Weak Areas
          </button>
        </div>
        <div className="px-5 pb-5 sm:px-7 sm:pb-7">
          <Disclaimer />
        </div>
      </div>
    );
  }

  // Quiz phase
  const question = questions[current];
  const submittedAnswer = answers.find((a) => a.questionIndex === current);
  const progressPercent = questions.length > 0 ? ((current + 1) / questions.length) * 100 : 0;

  return (
    <div className="rounded-[24px] border border-[#d9d2c1] bg-card shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)]" data-testid="quiz-mode-active">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-7">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Quiz Mode · {setup?.subjectTopic}
          </p>
          <h2 className="mt-1 font-serif text-xl font-semibold tracking-[-0.04em] text-primary sm:text-2xl">
            Question {current + 1} of {questions.length}
          </h2>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Score</p>
          <p className="text-sm font-bold text-primary">{score.correct} ✓ · {score.incorrect} ✗</p>
        </div>
        <button
          type="button"
          onClick={newQuiz}
          className="focus-ring ml-auto flex size-9 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:bg-muted"
          aria-label="End quiz and return to setup"
          data-testid="button-quiz-quit"
        >
          <XCircle className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="px-5 pt-4 sm:px-7">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#edf3f0]">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
            data-testid="quiz-progress-bar"
          />
        </div>
      </div>

      <div className="px-5 py-5 sm:px-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#e7f0ed] px-3 py-1 text-[11px] font-semibold text-primary">{question.topic}</span>
          <span className="rounded-full bg-[#fff0dd] px-3 py-1 text-[11px] font-semibold text-primary">{question.difficulty}</span>
        </div>

        <p className="mt-4 whitespace-pre-wrap text-base font-semibold leading-7 text-primary sm:text-lg">
          <MathText content={question.question} />
        </p>

        <div className="mt-4 space-y-2" role="radiogroup" aria-label="Answer options">
          {(['A', 'B', 'C', 'D'] as const).map((letter) => {
            const isPicked = selected === letter && !submittedAnswer;
            const isCorrectLetter = submittedAnswer && letter === question.correctAnswer;
            const isWrongPick = submittedAnswer && submittedAnswer.selected === letter && !submittedAnswer.correct;
            return (
              <button
                key={letter}
                type="button"
                role="radio"
                aria-checked={selected === letter}
                disabled={submittedAnswer !== undefined}
                onClick={() => setSelected(letter)}
                className={`focus-ring flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                  isCorrectLetter
                    ? 'border-[#67a774] bg-[#e7f0ed]'
                    : isWrongPick
                      ? 'border-[#e4b9a6] bg-[#fff4ed]'
                      : isPicked
                        ? 'border-primary bg-[#edf3f0] shadow-[0_0_0_3px_#f2cd70] animate-pulse-soft'
                        : 'border-border bg-background hover:border-primary/40'
                } ${submittedAnswer ? 'cursor-default' : ''}`}
                data-testid={`button-option-${letter}`}
              >
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                  isCorrectLetter
                    ? 'bg-[#67a774] text-white'
                    : isWrongPick
                      ? 'bg-accent text-white'
                      : isPicked
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-primary'
                }`}>
                  {letter}
                </span>
                <span className="min-w-0 flex-1 text-sm leading-6 text-primary">
                  <MathText content={question.options[letter]} />
                </span>
                {isPicked && (
                  <span
                    className="flex shrink-0 items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground"
                    data-testid="quiz-selected-badge"
                  >
                    <CheckCircle2 className="size-3" aria-hidden="true" />
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {submittedAnswer && (
          <div
            className={`mt-5 rounded-2xl border p-4 ${
              submittedAnswer.correct ? 'border-[#67a774] bg-[#e7f0ed]' : 'border-[#e4b9a6] bg-[#fff4ed]'
            }`}
            data-testid="quiz-feedback"
          >
            <p className="flex items-center gap-2 text-sm font-bold text-primary">
              {submittedAnswer.correct ? (
                <>
                  <CheckCircle2 className="size-4 text-[#67a774]" aria-hidden="true" />
                  Correct!
                </>
              ) : (
                <>
                  <XCircle className="size-4 text-accent" aria-hidden="true" />
                  Incorrect — the correct answer is {question.correctAnswer}.
                </>
              )}
            </p>
            <p className="mt-2 text-sm leading-6 text-primary">
              <MathText content={question.explanation} />
            </p>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {!submittedAnswer ? (
            <button
              type="button"
              onClick={submitAnswer}
              disabled={selected === null}
              className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
              data-testid="button-submit-answer"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
              Submit Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={nextQuestion}
              className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55]"
              data-testid="button-next-question-quiz"
            >
              {isLastQuestion ? 'See Results' : 'Next Question'}
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          )}
          {!submittedAnswer && selected === null && (
            <p className="text-xs text-muted-foreground">Select an answer to continue.</p>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-7 sm:pb-7">
        <Disclaimer />
      </div>
    </div>
  );
}
