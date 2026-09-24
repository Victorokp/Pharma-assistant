import { useLocation } from 'wouter';
import { AlertCircle, LayoutDashboard } from 'lucide-react';

/** 404 page — restyled to the app theme; unknown URLs land here. */
export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-7">
        <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-error/8 text-error">
          <AlertCircle className="size-5" aria-hidden="true" />
        </div>
        <h1 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.04em] text-primary">Page not found</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          That page doesn’t exist. Head back to your dashboard to keep studying.
        </p>
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="focus-ring mx-auto mt-5 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          data-testid="button-not-found-dashboard"
        >
          <LayoutDashboard className="size-4" aria-hidden="true" />
          Go to dashboard
        </button>
      </div>
    </div>
  );
}
