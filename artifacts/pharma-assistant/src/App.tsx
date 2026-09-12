import { type FormEvent, type ReactNode, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  Clock3,
  FlaskConical,
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
  const responseTimeout = useRef<number | null>(null);

  const submitQuestion = (rawQuestion: string) => {
    const trimmedQuestion = rawQuestion.trim();
    if (!trimmedQuestion || isThinking) return;

    const answer = getStarterAnswer(trimmedQuestion);
    const now = getTimeLabel();
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'user', text: trimmedQuestion, timestamp: now },
    ]);
    setQuestion('');
    setIsThinking(true);

    responseTimeout.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, role: 'assistant', text: answer, timestamp: getTimeLabel() },
      ]);
      setIsThinking(false);
      responseTimeout.current = null;
    }, 650);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuestion(question);
  };

  const handleReset = () => {
    if (responseTimeout.current !== null) {
      window.clearTimeout(responseTimeout.current);
      responseTimeout.current = null;
    }
    setMessages([]);
    setQuestion('');
    setIsThinking(false);
  };

  return (
    <div className="grain min-h-[100dvh] text-foreground">
      <header className="mx-auto flex w-full max-w-[1420px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3" data-testid="brand-pharma-assistant">
          <div className="flex size-10 items-center justify-center rounded-[13px] bg-primary text-secondary shadow-[4px_4px_0_hsl(var(--secondary))]">
            <Pill className="size-5" strokeWidth={2.5} aria-hidden="true" />
          </div>
          <div>
            <div className="font-serif text-[1.15rem] font-semibold tracking-[-0.03em]">pharma assistant</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">your everyday counter</div>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-xs font-medium text-muted-foreground shadow-sm sm:flex">
          <span className="size-2 rounded-full bg-[#67a774]" />
          Local answers only
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-[1420px] gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-12">
        <section className="min-w-0">
          <div className="mb-8 max-w-3xl animate-rise-in sm:mb-10">
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Clear answers, no rush
            </div>
            <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,6vw,5.7rem)] font-semibold leading-[.94] tracking-[-0.065em] text-primary">
              A calmer way to ask about medicine.
            </h1>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-muted-foreground">
              Get a plain-language starting point for common drugs, symptoms, and pharmacy questions. Bring your question exactly as it comes to mind.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-[#d9d2c1] bg-card shadow-[0_18px_50px_hsl(191_38%_18%_/_0.07)] animate-rise-in [animation-delay:80ms]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-[#e7f0ed] text-primary">
                  <CircleHelp className="size-[18px]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">Ask the counter</div>
                  <div className="text-xs text-muted-foreground">A local starter answer, not a diagnosis</div>
                </div>
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

            <div className="min-h-[290px] px-5 py-6 sm:min-h-[335px] sm:px-7">
              {messages.length === 0 && !isThinking ? (
                <div className="flex min-h-[245px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border border-[#e5ddca] bg-[#faf6e9] text-[#b28b2d]">
                    <Search className="size-6" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold tracking-[-0.03em] text-primary">What’s on your mind?</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                    Ask about a medicine, a missed dose, or what to expect from an everyday pharmacy product.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {starterPrompts.slice(0, 2).map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => submitQuestion(prompt)}
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
                        <span className="animate-pulse-soft">Looking through the local starter notes…</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-border bg-[#faf8f1] p-4 sm:p-5" data-testid="form-question">
              <div className="relative">
                <textarea
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Try “Can I take ibuprofen with food?”"
                  rows={2}
                  maxLength={280}
                  className="focus-ring min-h-[76px] w-full resize-none rounded-2xl border border-[#d9d2c1] bg-card px-4 py-3 pr-14 text-sm leading-6 text-primary shadow-sm transition-colors placeholder:text-[#9d988c] focus:border-[#a7bcb4] focus:outline-none"
                  data-testid="input-question"
                  aria-label="Your pharmacy question"
                />
                <button
                  type="submit"
                  disabled={!question.trim() || isThinking}
                  className="focus-ring absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-xl bg-secondary text-primary transition-all hover:-translate-y-0.5 hover:bg-[#f2cd70] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  data-testid="button-submit-question"
                  aria-label="Submit question"
                >
                  <Send className="size-4" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between px-1 text-[11px] text-muted-foreground">
                <span>Press submit when you’re ready.</span>
                <span>{question.length}/280</span>
              </div>
            </form>
          </div>

          <div className="mt-7 rounded-2xl border border-[#ded7c6] bg-[#f2ede0]/75 px-4 py-3.5 sm:px-5" data-testid="notice-educational">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-xs leading-5 text-muted-foreground">
                <span className="font-semibold text-primary">A quick safety note:</span> Pharma Assistant shares educational information only. It isn’t a substitute for a pharmacist or clinician, especially for urgent or personal medical concerns.
              </p>
            </div>
          </div>
        </section>

        <aside className="space-y-5 lg:pt-[166px]">
          <div className="rounded-[24px] border border-[#d9d2c1] bg-primary p-5 text-primary-foreground shadow-[0_18px_50px_hsl(191_38%_18%_/_0.12)] sm:p-6 animate-rise-in [animation-delay:160ms]">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#294f55] text-secondary">
                <BookOpen className="size-5" aria-hidden="true" />
              </div>
              <span className="rounded-full border border-[#547376] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.17em] text-[#c7d5cf]">Browse</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a9c0b9]">Popular topics</p>
            <h2 className="mt-2 font-serif text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em]">A few good places to start.</h2>
            <div className="mt-5 divide-y divide-[#31575c]">
              {popularTopics.map((topic) => (
                <button
                  type="button"
                  key={topic.label}
                  onClick={() => submitQuestion(topic.question)}
                  className="focus-ring group flex w-full items-center gap-3 py-3.5 text-left transition-colors first:pt-0 last:pb-0 hover:text-secondary"
                  data-testid={`button-topic-${topic.id}`}
                >
                  <topic.icon className="size-4 shrink-0 text-[#aec2bb] transition-colors group-hover:text-secondary" aria-hidden="true" />
                  <span className="min-w-0 flex-1 text-sm text-[#f3f1e7]">{topic.label}</span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-[#789194] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#ded7c6] bg-card p-5 sm:p-6 animate-rise-in [animation-delay:220ms]">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#fff0dd] text-accent">
                <ShieldCheck className="size-[18px]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-primary">When to ask a person</h2>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  A pharmacist can check your full medication list, allergies, and personal history — details this starter can’t see.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-[11px] font-semibold text-primary">
              <CheckCircle2 className="size-3.5 text-[#67a774]" aria-hidden="true" />
              Bring your medication list
            </div>
          </div>
        </aside>
      </main>

      <footer className="mx-auto flex w-full max-w-[1420px] flex-col gap-3 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>Made for the questions between appointments.</span>
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

type Topic = {
  id: string;
  label: string;
  question: string;
  icon: LucideIcon;
};

const starterPrompts = ['What is cetirizine?', 'How do I read a label?'];

const popularTopics: Topic[] = [
  { id: 'pain-relief', label: 'Everyday pain relief', question: 'What should I know about everyday pain relief?', icon: HeartPulse },
  { id: 'missed-dose', label: 'Missed a dose', question: 'What should I do if I missed a dose?', icon: Clock3 },
  { id: 'cold-allergy', label: 'Cold and allergy basics', question: 'What are the basics of cold and allergy medicine?', icon: FlaskConical },
  { id: 'medication-label', label: 'Reading a medication label', question: 'How do I read a medication label?', icon: BookOpen },
  { id: 'drug-questions', label: 'Questions to ask a pharmacist', question: 'What questions should I ask a pharmacist?', icon: Activity },
];

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
        <div className={`rounded-2xl px-4 py-3 text-sm leading-6 ${isUser ? 'rounded-tr-sm bg-primary text-primary-foreground' : 'rounded-tl-sm border border-[#dce6e1] bg-[#edf3f0] text-primary'}`}>
          {message.text}
        </div>
        <div className={`mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground ${isUser ? 'text-right' : ''}`}>
          {isUser ? 'You' : 'Local starter answer'} · {message.timestamp}
        </div>
      </div>
    </div>
  );
}

function getTimeLabel() {
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date());
}

function getStarterAnswer(question: string) {
  const normalized = question.toLowerCase();
  if (normalized.includes('cetirizine')) {
    return 'Cetirizine is an antihistamine commonly used for allergy symptoms such as sneezing, a runny nose, or itchy eyes. It can make some people drowsy. Follow the package directions, and ask a pharmacist if you take other medicines or have a health condition.';
  }
  if (normalized.includes('ibuprofen') || normalized.includes('pain relief')) {
    return 'Ibuprofen is an anti-inflammatory pain reliever. Taking it with food or milk may help reduce stomach upset, but it is not right for everyone — including some people with kidney disease, a history of stomach ulcers, or certain heart conditions. A pharmacist can help you choose safely.';
  }
  if (normalized.includes('missed') || normalized.includes('dose')) {
    return 'For a missed dose, the safest next step depends on the medicine. Check the leaflet or pharmacy label first; many medicines say to take it when remembered unless it is nearly time for the next dose. Do not double up unless a clinician specifically tells you to.';
  }
  if (normalized.includes('label')) {
    return 'Start with the active ingredient, strength, directions, and maximum amount in 24 hours. Check the warnings for age limits, drowsiness, and duplicate ingredients in other products. If a label is confusing, take it to your pharmacist before taking the medicine.';
  }
  if (normalized.includes('cold') || normalized.includes('allerg')) {
    return 'Cold and allergy products can overlap in their ingredients, especially pain relievers and antihistamines. Compare active ingredients rather than brand names, and choose one product that matches your main symptom. A pharmacist can help if you take regular medicines.';
  }
  return 'That is a good question to bring to the counter. I can offer a general starting point, but the right answer can change with your age, health history, allergies, and other medicines. Check the package information and ask a pharmacist for advice specific to you.';
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
