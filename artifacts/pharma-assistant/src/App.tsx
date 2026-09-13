import { type FormEvent, type ReactNode, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { askPharmaAssistant } from '@workspace/api-client-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Info,
  Pill,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [drugSearch, setDrugSearch] = useState('');
  const [drugProfile, setDrugProfile] = useState<DrugProfile | null>(null);
  const [isDrugSearching, setIsDrugSearching] = useState(false);
  const [drugError, setDrugError] = useState('');
  const questionInput = useRef<HTMLTextAreaElement | null>(null);
  const drugInput = useRef<HTMLInputElement | null>(null);

  const submitQuestion = async (rawQuestion: string) => {
    const trimmedQuestion = rawQuestion.trim();
    if (!trimmedQuestion || isThinking) return;

    const now = getTimeLabel();
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'user', text: trimmedQuestion, timestamp: now },
    ]);
    setQuestion('');
    setIsThinking(true);

    try {
      const answer = await askPharmaAssistant({ question: trimmedQuestion });
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: answer.answer,
          timestamp: getTimeLabel(),
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: error instanceof Error ? error.message : 'The AI answer service is unavailable right now. Please try again.',
          timestamp: getTimeLabel(),
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuestion(question);
  };

  const handleDrugSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedDrug = drugSearch.trim();
    if (!trimmedDrug || isDrugSearching) {
      setDrugError('Enter a drug name to start a search.');
      drugInput.current?.focus();
      return;
    }

    setDrugError('');
    setDrugProfile(null);
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

  const scrollToSection = (section: SectionId) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const askFromDrugExplorer = (prompt: string) => {
    setQuestion(prompt);
    scrollToSection('home');
    window.setTimeout(() => questionInput.current?.focus(), 450);
  };

  const startQuiz = () => {
    setQuizRevealed(false);
    scrollToSection('quiz');
  };

  const startStudyMode = () => {
    scrollToSection('study');
  };

  const handleReset = () => {
    setMessages([]);
    setQuestion('');
    setIsThinking(false);
  };

  return (
    <div className="grain min-h-[100dvh] text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="focus-ring flex shrink-0 items-center gap-3 rounded-xl text-left"
            data-testid="brand-pharma-assistant"
          >
            <span className="flex size-10 items-center justify-center rounded-[13px] bg-primary text-secondary shadow-[4px_4px_0_hsl(var(--secondary))]">
              <Pill className="size-5" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-[1.05rem] font-semibold tracking-[-0.03em] text-primary">Pharma Assistant</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">study companion</span>
            </span>
          </button>

          <nav className="nav-scroll flex max-w-[58vw] items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/70 p-1 sm:max-w-none" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`focus-ring flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
                  activeSection === item.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-primary'
                }`}
                data-testid={`nav-${item.id}`}
              >
                <item.icon className="size-3.5" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-xs font-medium text-muted-foreground md:flex">
            <span className="size-2 rounded-full bg-[#67a774]" />
            AI answers
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1240px] px-5 pb-12 sm:px-8 lg:px-10">
        <section id="home" className="scroll-mt-28 py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,.98fr)] lg:gap-16">
            <div className="animate-rise-in">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9d2c1] bg-card/70 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                Your study desk, on demand
              </div>
              <h1 className="max-w-2xl font-serif text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[.91] tracking-[-0.07em] text-primary">
                Pharmacy knowledge, made clearer.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Your intelligent pharmacy study companion. Ask a question, practice a concept, or review a topic at your own pace.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#67a774]" aria-hidden="true" />
                  Local study library
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                  Educational only
                </span>
              </div>
            </div>

            <div className="animate-rise-in [animation-delay:100ms]">
              <div className="relative overflow-hidden rounded-[28px] border border-[#d9d2c1] bg-card p-4 shadow-[0_24px_70px_hsl(191_38%_18%_/_0.1)] sm:p-5">
                <div className="absolute -right-14 -top-16 size-44 rounded-full bg-secondary/20 blur-2xl" />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between px-1">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Ask Pharma Assistant</p>
                      <p className="mt-1 text-sm text-muted-foreground">Start with a drug or topic</p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#e7f0ed] text-primary">
                      <Search className="size-5" aria-hidden="true" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} data-testid="form-question">
                    <textarea
                      ref={questionInput}
                      value={question}
                      onChange={(event) => setQuestion(event.target.value)}
                      placeholder="Ask about a drug or pharmacy topic..."
                      rows={5}
                      maxLength={280}
                      className="focus-ring min-h-[150px] w-full resize-none rounded-2xl border border-[#d9d2c1] bg-background px-4 py-4 text-[1rem] leading-7 text-primary shadow-inner transition-colors placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
                      data-testid="input-question"
                      aria-label="Ask about a drug or pharmacy topic"
                    />
                    <div className="mt-2 flex items-center justify-between px-1 text-[11px] text-muted-foreground">
                      <span>{isThinking ? 'Generating a structured answer…' : 'Educational answers for study use.'}</span>
                      <span>{question.length}/280</span>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <button
                        type="submit"
                        disabled={!question.trim() || isThinking}
                        className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
                        data-testid="button-ask"
                      >
                        <Send className="size-4" aria-hidden="true" />
                        Ask
                      </button>
                      <button
                        type="button"
                        onClick={startQuiz}
                        className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
                        data-testid="button-quiz-me"
                      >
                        <Brain className="size-4" aria-hidden="true" />
                        Quiz Me
                      </button>
                      <button
                        type="button"
                        onClick={startStudyMode}
                        className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
                        data-testid="button-study-mode"
                      >
                        <BookOpen className="size-4" aria-hidden="true" />
                        Study Mode
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[24px] border border-[#d9d2c1] bg-card shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">AI answer desk</p>
                <h2 className="mt-1 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary">Your study conversation</h2>
              </div>
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="focus-ring flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  data-testid="button-reset-conversation"
                >
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  Reset
                </button>
              )}
            </div>
            <div className="min-h-[180px] px-5 py-6 sm:px-7">
              {messages.length === 0 && !isThinking ? (
                <div className="flex min-h-[130px] flex-col items-center justify-center text-center">
                  <Sparkles className="mb-3 size-5 text-accent" aria-hidden="true" />
                  <p className="max-w-md text-sm leading-6 text-muted-foreground">
                    Ask your first question above to see a local starter answer, or jump into Quiz Me and Study Mode.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {starterPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => {
                          setQuestion(prompt);
                          questionInput.current?.focus();
                        }}
                        className="focus-ring rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-[#b9a974] hover:bg-[#fbf7e9]"
                        data-testid={`button-starter-${prompt.toLowerCase().replaceAll(' ', '-')}`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-5" data-testid="conversation-messages">
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  {isThinking && (
                    <div className="flex items-start gap-3 animate-rise-in" data-testid="status-local-thinking">
                      <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <Sparkles className="size-4" aria-hidden="true" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-[#edf3f0] px-4 py-3 text-sm text-primary">
                        <span className="animate-pulse-soft">Writing a student-friendly answer…</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="drugs" className="scroll-mt-28 border-t border-border py-12 sm:py-16" data-testid="drug-explorer">
          <SectionEyebrow>Drug Explorer</SectionEyebrow>
          <div className="mt-3 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.06em] text-primary">Look up a drug.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Generate a focused, student-friendly profile with the same AI study assistant that powers Ask.</p>
            </div>
            <div className="rounded-[24px] border border-[#d9d2c1] bg-card p-5 shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Search the library</p>
                  <p className="mt-1 text-sm text-muted-foreground">Start with a generic or brand name</p>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f0ed] text-primary">
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
                  className="focus-ring min-h-11 min-w-0 flex-1 rounded-xl border border-[#d9d2c1] bg-background px-4 text-sm text-primary placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
                  data-testid="input-drug-search"
                  aria-label="Search for a drug"
                />
                <button
                  type="submit"
                  disabled={!drugSearch.trim() || isDrugSearching}
                  className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
                  data-testid="button-drug-search"
                >
                  <Search className="size-4" aria-hidden="true" />
                  Search
                </button>
              </form>
              <p className="mt-3 text-[11px] leading-5 text-muted-foreground">Educational information only. Always verify clinical details with a trusted reference.</p>
            </div>
          </div>

          {isDrugSearching && (
            <div className="mt-8 flex items-center gap-3 rounded-[24px] border border-border bg-card px-5 py-5 text-sm text-primary sm:px-6" role="status" data-testid="status-drug-searching">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Sparkles className="size-4 animate-pulse-soft" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold">Building a drug profile…</p>
                <p className="mt-1 text-xs text-muted-foreground">Checking the requested sections and preparing a study-friendly summary.</p>
              </div>
            </div>
          )}

          {drugError && !isDrugSearching && (
            <div className="mt-8 flex items-start gap-3 rounded-[24px] border border-[#e4b9a6] bg-[#fff4ed] px-5 py-5 text-sm text-primary sm:px-6" role="alert" data-testid="status-drug-error">
              <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold">Drug profile unavailable</p>
                <p className="mt-1 leading-6 text-muted-foreground">{drugError}</p>
              </div>
            </div>
          )}

          {drugProfile && !isDrugSearching && (
            <article className="mt-8 rounded-[24px] border border-[#d9d2c1] bg-card shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)]" data-testid="drug-profile-result">
              <div className="border-b border-border px-5 py-5 sm:px-7">
                <SectionEyebrow>Educational drug profile</SectionEyebrow>
                <h3 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{drugProfile.displayName}</h3>
              </div>
              <div className="grid gap-3 px-5 py-5 sm:grid-cols-2 sm:px-7 lg:grid-cols-3">
                {drugProfile.sections.map((section) => (
                  <section key={section.title} className="rounded-2xl border border-border bg-background p-4 sm:p-5">
                    <h4 className="text-sm font-bold text-primary">{section.title}</h4>
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{section.content}</p>
                  </section>
                ))}
              </div>
              <div className="border-t border-border px-5 py-5 sm:px-7">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => askFromDrugExplorer(`Help me study ${drugProfile.displayName} in a focused five-minute session. Cover its class, mechanism, uses, cautions, and a memory aid.`)}
                    className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#294f55]"
                    data-testid="button-study-drug"
                  >
                    <BookOpen className="size-4" aria-hidden="true" />
                    Study This Drug
                  </button>
                  <button
                    type="button"
                    onClick={() => askFromDrugExplorer(`Quiz me on ${drugProfile.displayName} with five pharmacy student questions, one at a time.`)}
                    className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
                    data-testid="button-quiz-drug"
                  >
                    <Brain className="size-4" aria-hidden="true" />
                    Quiz Me
                  </button>
                  <button
                    type="button"
                    onClick={() => askFromDrugExplorer(`What else should I know about ${drugProfile.displayName} for pharmacy study?`)}
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
        </section>

        <section id="quiz" className="scroll-mt-28 border-t border-border py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <SectionEyebrow>Quiz</SectionEyebrow>
              <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.06em] text-primary">Practice what you know.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">A quick local question to help you turn reading into recall.</p>
            </div>
            <div className="rounded-[24px] border border-[#d9d2c1] bg-primary p-6 text-primary-foreground shadow-[0_18px_50px_hsl(191_38%_18%_/_0.12)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#547376] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c7d5cf]">Question {quizQuestion + 1} of {quizQuestions.length}</span>
                <Brain className="size-5 text-secondary" aria-hidden="true" />
              </div>
              <p className="mt-7 max-w-2xl font-serif text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">{quizQuestions[quizQuestion].question}</p>
              {quizRevealed ? (
                <div className="mt-6 rounded-2xl border border-[#547376] bg-[#294f55] p-4 text-sm leading-6 text-[#edf3f0]" data-testid="quiz-answer">
                  <span className="font-bold text-secondary">Answer:</span> {quizQuestions[quizQuestion].answer}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setQuizRevealed(true)}
                  className="focus-ring mt-7 inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-[#f2cd70]"
                  data-testid="button-reveal-answer"
                >
                  Reveal answer
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              )}
              {quizRevealed && (
                <button
                  type="button"
                  onClick={() => {
                    setQuizQuestion((current) => (current + 1) % quizQuestions.length);
                    setQuizRevealed(false);
                  }}
                  className="focus-ring mt-6 flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-white"
                  data-testid="button-next-question"
                >
                  Next question
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </section>

        <section id="study" className="scroll-mt-28 border-t border-border py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
            <div className="rounded-[24px] border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0dd] text-accent">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <SectionEyebrow>Study Mode</SectionEyebrow>
                  <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.05em] text-primary">Small sessions add up.</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Use the prompt below as a starting point for a focused five-minute review.</p>
                </div>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {studyCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-border bg-background p-4">
                    <card.icon className="size-4 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-sm font-bold text-primary">{card.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[#ded7c6] bg-[#f2ede0]/75 p-6">
              <Info className="size-5 text-accent" aria-hidden="true" />
              <h2 className="mt-5 text-base font-bold text-primary">Keep it educational</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">This version uses a small local study library. Always use a pharmacist or clinician for personal medical advice.</p>
            </div>
          </div>
        </section>

        <div className="rounded-2xl border border-[#ded7c6] bg-[#f2ede0]/75 px-4 py-3.5 sm:px-5" data-testid="notice-educational">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-xs leading-5 text-muted-foreground">
              <span className="font-semibold text-primary">A quick safety note:</span> Pharma Assistant shares educational information only. It isn’t a substitute for a pharmacist or clinician, especially for urgent or personal medical concerns.
            </p>
          </div>
        </div>
      </main>

      <footer className="mx-auto flex w-full max-w-[1420px] flex-col gap-3 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>Made for the questions between study sessions.</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em]">
          <Clock3 className="size-3" aria-hidden="true" /> Starter library · v0.1
        </span>
      </footer>
    </div>
  );
}

type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
};

type DrugProfileSection = {
  title: string;
  content: string;
};

type DrugProfile = {
  displayName: string;
  sections: DrugProfileSection[];
  hasReliableContent: boolean;
};

type Topic = {
  id: string;
  label: string;
  question: string;
  icon: LucideIcon;
};

type SectionId = 'home' | 'drugs' | 'quiz' | 'study';

type QuizQuestion = {
  question: string;
  answer: string;
};

const navItems: Array<{ id: SectionId; label: string; icon: LucideIcon }> = [
  { id: 'home', label: 'Home', icon: HeartPulse },
  { id: 'drugs', label: 'Drugs', icon: FlaskConical },
  { id: 'quiz', label: 'Quiz', icon: Brain },
  { id: 'study', label: 'Study', icon: BookOpen },
];

const starterPrompts = ['What is cetirizine?', 'How do I read a label?'];

const popularTopics: Topic[] = [
  { id: 'pain-relief', label: 'Everyday pain relief', question: 'What should I know about everyday pain relief?', icon: HeartPulse },
  { id: 'missed-dose', label: 'Missed a dose', question: 'What should I do if I missed a dose?', icon: Clock3 },
  { id: 'cold-allergy', label: 'Cold and allergy basics', question: 'What are the basics of cold and allergy medicine?', icon: FlaskConical },
  { id: 'medication-label', label: 'Reading a medication label', question: 'How do I read a medication label?', icon: BookOpen },
];

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which part of a medicine label tells you the amount of active ingredient in each tablet?',
    answer: 'The strength, usually shown in milligrams (mg) or another unit next to the active ingredient.',
  },
  {
    question: 'Why should you compare active ingredients instead of only comparing brand names?',
    answer: 'Different brands can contain the same ingredient, and taking duplicates can lead to too much of a medicine.',
  },
  {
    question: 'What is a useful first step when you miss a dose?',
    answer: 'Check the medicine label or leaflet first, because the correct advice depends on the specific medicine.',
  },
];

const studyCards: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: 'Read', description: 'Choose one drug topic and review the key terms.', icon: BookOpen },
  { title: 'Recall', description: 'Close your notes and explain the idea in your own words.', icon: Brain },
  { title: 'Check', description: 'Use Quiz Mode to see what you remember.', icon: CheckCircle2 },
];

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

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>;
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex items-start gap-3 animate-rise-in ${isUser ? 'justify-end' : ''}`} data-testid={`message-${message.role}-${message.id}`}>
      {!isUser && (
        <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
          <Sparkles className="size-4" aria-hidden="true" />
        </div>
      )}
      <div className={`max-w-[82%] ${isUser ? 'items-end' : ''}`}>
        <div className={`whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${isUser ? 'rounded-tr-sm bg-primary text-primary-foreground' : 'rounded-tl-sm border border-[#dce6e1] bg-[#edf3f0] text-primary'}`}>
          {message.text}
        </div>
        <div className={`mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground ${isUser ? 'text-right' : ''}`}>
          {isUser ? 'You' : 'AI-generated educational answer'} · {message.timestamp}
        </div>
      </div>
    </div>
  );
}

function getTimeLabel() {
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date());
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
