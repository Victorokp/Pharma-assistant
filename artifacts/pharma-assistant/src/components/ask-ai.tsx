import { type FormEvent, useRef, useState } from 'react';
import { ApiError, askPharmaAssistant } from '@workspace/api-client-react';
import { MathText } from '@/components/math-text';
import { CheckCircle2, RotateCcw, Search, Send, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * Ask AI — the original Home/Ask conversation feature, extracted from the
 * long-scroll App.tsx into its own page component. Behavior is unchanged:
 * same endpoint, same error handling, same MathText rendering. The optional
 * `initialQuestion` lets other pages (e.g. Drug Explorer handoffs) seed the
 * input via a query parameter instead of shared scroll state.
 */
export default function AskAI({ initialQuestion }: { initialQuestion?: string | null } = {}) {
  const [question, setQuestion] = useState(initialQuestion ?? '');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const questionInput = useRef<HTMLTextAreaElement | null>(null);

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
      // Report what actually happened: the server's own message (quota,
      // misconfiguration, empty response) takes priority; a genuine network
      // failure (ApiError status 0 or fetch TypeError) gets a connection
      // message; other 5xx are service problems, not the user's internet.
      const serverMessage =
        error instanceof ApiError &&
        typeof error.data === 'object' &&
        error.data !== null &&
        typeof (error.data as { error?: unknown }).error === 'string'
          ? ((error.data as { error: string }).error || null)
          : null;
      const raw = error instanceof Error ? error.message : '';
      const isNetworkFailure =
        (error instanceof ApiError && error.status === 0) ||
        (!(error instanceof ApiError) && /failed to fetch|networkerror|load failed|fetch failed/i.test(raw));
      const isServiceUnavailable = error instanceof ApiError && error.status >= 500;
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: serverMessage
            ? serverMessage
            : isNetworkFailure
              ? 'No connection to the AI answer service — check your internet connection and try again.'
              : isServiceUnavailable
                ? 'The AI answer service is temporarily unavailable. Please try again in a moment.'
                : raw || 'The AI answer service is unavailable right now. Please try again.',
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

  const handleReset = () => {
    setMessages([]);
    setQuestion('');
    setIsThinking(false);
  };

  return (
    <div className="space-y-8">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,.98fr)] lg:gap-12">
        <div className="animate-rise-in">
          <h2 className="max-w-xl font-serif text-[1.375rem] font-semibold tracking-[-0.03em] text-primary sm:text-2xl">
            Ask anything pharmacy.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Your intelligent pharmacy study companion. Ask a question and get a structured, student-friendly answer.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
              Local study library
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              Educational only
            </span>
          </div>
        </div>

        <div className="animate-rise-in [animation-delay:100ms]">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:p-5">
            <div className="absolute -right-14 -top-16 size-44 rounded-full bg-primary/8 blur-2xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between px-1">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Ask Pharma Assistant</p>
                  <p className="mt-1 text-sm text-muted-foreground">Start with a drug or topic</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
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
                  className="focus-ring min-h-[150px] w-full resize-none rounded-2xl border border-input bg-background px-4 py-4 text-[1rem] leading-7 text-primary shadow-inner transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                  data-testid="input-question"
                  aria-label="Ask about a drug or pharmacy topic"
                />
                <div className="mt-2 flex items-center justify-between px-1 text-[11px] text-muted-foreground">
                  <span>{isThinking ? 'Generating a structured answer…' : 'Educational answers for study use.'}</span>
                  <span>{question.length}/280</span>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    disabled={!question.trim() || isThinking}
                    className="focus-ring flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
                    data-testid="button-ask"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Ask
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">AI answer desk</p>
            <h2 className="mt-1 font-serif text-xl font-semibold tracking-[-0.03em] text-primary">Your study conversation</h2>
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
                Ask your first question above, or pick a starter prompt below.
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
                    className="focus-ring rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted"
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
                    <Sparkles className="size-4 animate-pulse-soft" aria-hidden="true" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-sm text-primary">
                    <span className="animate-pulse-soft">Writing a student-friendly answer…</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
};

const starterPrompts = ['What is cetirizine?', 'How do I read a label?'];

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
      <div className={`rounded-2xl px-4 py-3 text-sm leading-6 ${isUser ? 'whitespace-pre-wrap rounded-tr-sm bg-primary text-primary-foreground' : 'math-text-host rounded-tl-sm border border-border bg-secondary text-primary'}`}>
        {isUser ? message.text : <MathText content={message.text} />}
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
