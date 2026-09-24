import { useMemo, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  ApiError,
  completeDocumentUpload,
  createDocumentUploadUrl,
  deleteDocument,
  getDocumentViewUrl,
  listDocuments,
  updateDocument,
} from '@workspace/api-client-react';
import type { DocumentMeta } from '@workspace/api-client-react';
import { useAccount } from '@/lib/auth';
import { CURRICULUM } from '@/lib/curriculum';
import PageHeading from '@/components/page-heading';
import EmptyState from '@/components/empty-state';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  CloudOff,
  FileText,
  Loader2,
  Pencil,
  Search,
  Trash2,
  Upload,
} from 'lucide-react';

/**
 * Docs / Materials — student-owned academic document library (Phase 6).
 *
 * Bytes live in private Cloudflare R2 (uploads go browser → storage directly
 * via presigned PUT; the API server never proxies file data). Metadata lives
 * in Postgres. All operations use the generated react-query hooks with the
 * Clerk Bearer token attached by the account provider.
 *
 * Upload flow: validate → metadata dialog → request upload URL → direct PUT
 * → complete (pending→ready) → invalidate. Duplicate submissions are blocked
 * by a submitting flag around the whole flow.
 *
 * Honest states: signed-out, auth not configured, storage not configured
 * (503), uploading, and empty library each get their own screen. No fake
 * progress, no fabricated timestamps, no invented documents.
 *
 * Search + course filtering run entirely client-side (V1) — no API call per
 * keystroke. Recent uses the server-provided lastAccessedAt only; opening a
 * document always mints a short-lived signed URL via GET /documents/:id/url.
 */

const MAX_BYTES = 25 * 1024 * 1024; // matches the API contract (25 MB)

/** Course options come from the real curriculum — no hardcoded list. */
const COURSE_CODES = Array.from(new Set(CURRICULUM.map((course) => course.code))).sort();

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function formatDate(iso: string | null | undefined): string {
  if (!iso) return 'never';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return 'never';
  return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

function apiErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ApiError) {
    const body = error.data as { error?: string } | undefined;
    if (body && typeof body.error === 'string') return body.error;
  }
  return fallback;
}

function isUnavailable(error: unknown): boolean {
  return error instanceof ApiError && error.status === 503;
}

export default function DocsPage() {
  const { authAvailable, isSignedIn, isLoaded, signIn } = useAccount();
  const queryClient = useQueryClient();

  // ---------------------------------------------------------------- queries
  const documentsQuery = useQuery({
    queryKey: ['documents'],
    queryFn: listDocuments,
    enabled: isSignedIn,
    retry: (failureCount, error) => !isUnavailable(error) && failureCount < 2,
  });

  const items = useMemo(() => documentsQuery.data?.items ?? [], [documentsQuery.data]);
  const unavailable = documentsQuery.error ? isUnavailable(documentsQuery.error) : false;

  // ------------------------------------------------------------------ state
  const [search, setSearch] = useState('');
  const [courseFilter, setCourseFilter] = useState<string | null>(null);
  const [actionError, setActionError] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Upload pipeline state — one flag guards the whole flow so double clicks
  // and re-picks can never start a second concurrent submission.
  type UploadStage = 'idle' | 'validating' | 'requesting' | 'transferring' | 'finishing';
  const [uploadStage, setUploadStage] = useState<UploadStage>('idle');
  const [uploadError, setUploadError] = useState('');
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [uploadMeta, setUploadMeta] = useState({ title: '', courseCode: '', topicHint: '' });

  // Viewer state (short-lived signed URL from the API; never fabricated).
  const [viewer, setViewer] = useState<DocumentMeta | null>(null);
  const [viewerUrl, setViewerUrl] = useState('');
  const [viewerError, setViewerError] = useState('');

  // Edit dialog state.
  const [editing, setEditing] = useState<DocumentMeta | null>(null);
  const [editMeta, setEditMeta] = useState({ title: '', courseCode: '', topicHint: '' });

  // Delete confirmation state.
  const [deleteTarget, setDeleteTarget] = useState<DocumentMeta | null>(null);

  const uploading = uploadStage !== 'idle';

  // -------------------------------------------------------------- mutations
  const invalidate = () => {
    void queryClient.invalidateQueries({ queryKey: ['documents'] });
  };

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteDocument(id),
    onSuccess: () => {
      setDeleteTarget(null);
      invalidate();
    },
    onError: (error) => setActionError(apiErrorMessage(error, 'Could not delete the document.')),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, body }: { id: string; body: { title?: string; courseCode?: string | null; topicHint?: string | null } }) =>
      updateDocument(id, body),
    onSuccess: () => {
      setEditing(null);
      invalidate();
    },
    onError: (error) => setActionError(apiErrorMessage(error, 'Could not update the document.')),
  });

  const viewUrlMutation = useMutation({
    mutationFn: (id: string) => getDocumentViewUrl(id),
    onSuccess: (data) => {
      setViewerUrl(data.url);
      // lastAccessedAt changed server-side → keep "Recent" honest.
      invalidate();
    },
    onError: (error) => {
      setViewerError(apiErrorMessage(error, 'Could not open the document.'));
    },
  });

  // ---------------------------------------------------------------- actions
  function handleFileSelected(file: File | undefined) {
    setUploadError('');
    if (!file) return;
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      setUploadError('Only PDF files are supported right now.');
      return;
    }
    if (file.size > MAX_BYTES) {
      setUploadError('That PDF is larger than 25 MB — try compressing it first.');
      return;
    }
    if (file.size === 0) {
      setUploadError('That file is empty.');
      return;
    }
    // Client validation passed → metadata step. The actual upload only starts
    // when the student confirms the dialog (startUpload below).
    setPendingFile(file);
    setUploadMeta({
      title: file.name.replace(/\.pdf$/i, '').slice(0, 200) || 'Untitled document',
      courseCode: '',
      topicHint: '',
    });
  }

  async function startUpload() {
    if (!pendingFile || uploading) return; // duplicate-submission guard
    setUploadStage('requesting');
    setUploadError('');
    try {
      // 1) Pending row + presigned PUT (server builds the storage key).
      const ticket = await createDocumentUploadUrl({
        title: uploadMeta.title.trim().slice(0, 200) || 'Untitled document',
        courseCode: uploadMeta.courseCode.trim() ? uploadMeta.courseCode.trim().slice(0, 40) : null,
        topicHint: uploadMeta.topicHint.trim() ? uploadMeta.topicHint.trim().slice(0, 120) : null,
        sizeBytes: pendingFile.size,
        contentType: 'application/pdf',
      });
      // 2) Browser PUTs the bytes straight to storage (never via the API).
      setUploadStage('transferring');
      const put = await fetch(ticket.uploadUrl, {
        method: 'PUT',
        body: pendingFile,
        headers: { 'Content-Type': 'application/pdf' },
      });
      if (!put.ok) throw new Error('storage-rejected');
      // 3) Server verifies the object exists, pending → ready.
      setUploadStage('finishing');
      await completeDocumentUpload(ticket.documentId);
      invalidate();
      setPendingFile(null); // success → close the dialog
    } catch (error) {
      setUploadError(
        error instanceof ApiError
          ? apiErrorMessage(error, 'Upload failed — please try again.')
          : error instanceof Error && error.message === 'storage-rejected'
            ? 'Storage rejected the upload — try again in a moment.'
            : 'Upload failed — please try again.',
      );
      setUploadStage('idle'); // dialog stays open so the student can retry
    }
  }

  function closeUploadDialog() {
    if (uploadStage === 'requesting' || uploadStage === 'transferring' || uploadStage === 'finishing') return;
    setPendingFile(null);
    setUploadError('');
    setUploadStage('idle');
  }

  function openViewer(doc: DocumentMeta) {
    setViewer(doc);
    setViewerUrl('');
    setViewerError('');
    viewUrlMutation.mutate(doc.id);
  }

  function openEdit(doc: DocumentMeta) {
    setEditing(doc);
    setEditMeta({
      title: doc.title,
      courseCode: doc.courseCode ?? '',
      topicHint: doc.topicHint ?? '',
    });
  }

  // Derived lists — search + filter run over the fetched items only.
  const filterCourseOptions = useMemo(() => {
    const codes = new Set<string>();
    for (const item of items) if (item.courseCode) codes.add(item.courseCode);
    return Array.from(codes).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return items.filter((item) => {
      if (courseFilter && item.courseCode !== courseFilter) return false;
      if (!needle) return true;
      return (
        item.title.toLowerCase().includes(needle) ||
        (item.topicHint ?? '').toLowerCase().includes(needle) ||
        (item.courseCode ?? '').toLowerCase().includes(needle)
      );
    });
  }, [items, search, courseFilter]);

  const recent = useMemo(
    () =>
      items
        .filter((item) => item.lastAccessedAt)
        .sort((a, b) => (a.lastAccessedAt! < b.lastAccessedAt! ? 1 : -1))
        .slice(0, 5),
    [items],
  );

  const showSkeleton = isLoaded && isSignedIn && documentsQuery.isPending && !unavailable;

  // ------------------------------------------------------------------ render
  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Docs / Materials"
        title="Your materials, one place."
        blurb="Upload lecture notes and references as PDFs, file them by course, and open them anywhere — stored privately on your account."
        icon={FileText}
        testId="docs-heading"
      />

      {/* Auth not configured at all — docs require an account, so say so */}
      {isLoaded && !authAvailable && (
        <div
          className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3.5 sm:flex-row sm:items-center"
          data-testid="docs-auth-unavailable"
        >
          <CloudOff className="size-4 shrink-0 text-accent" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-xs leading-5 text-muted-foreground">
            <span className="font-semibold text-primary">Documents live on your account.</span>{' '}
            Sign-in isn't set up on this server yet, so your materials library is unavailable here.
            Everything else — Study Mode, Quizzes, and the curriculum — still works.
          </p>
        </div>
      )}

      {/* Signed-out prompt — mirrors the Progress page pattern */}
      {authAvailable && !isSignedIn && (
        <div
          className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3.5 sm:flex-row sm:items-center"
          data-testid="docs-sign-in-prompt"
        >
          <CloudOff className="size-4 shrink-0 text-accent" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-xs leading-5 text-muted-foreground">
            <span className="font-semibold text-primary">Your library lives on your account.</span>{' '}
            Sign in to upload and open your own study materials — they follow you across devices
            and stay private to you.
          </p>
          <button
            type="button"
            onClick={signIn}
            className="focus-ring flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            data-testid="docs-sign-in-button"
          >
            Sign in
          </button>
        </div>
      )}

      {isSignedIn && (
        <div className="animate-rise-in" data-testid="docs-workspace">
          {/* Toolbar: upload + search + course filter */}
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="focus-ring flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
                data-testid="docs-upload-button"
              >
                {uploading ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Upload className="size-4" aria-hidden="true" />
                )}
                {uploading ? uploadStageLabel(uploadStage) : 'Upload PDF'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf,.pdf"
                className="hidden"
                onChange={(event) => {
                  if (!uploading) handleFileSelected(event.target.files?.[0]);
                  event.target.value = '';
                }}
                data-testid="docs-file-input"
              />
              <label className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search title, topic, or course…"
                  className="focus-ring min-h-11 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm text-primary placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                  data-testid="docs-search-input"
                />
                <span className="sr-only">Search documents</span>
              </label>
            </div>

            {filterCourseOptions.length > 0 && (
              <div className="flex flex-wrap gap-2" data-testid="docs-course-filters">
                <button
                  type="button"
                  onClick={() => setCourseFilter(null)}
                  aria-pressed={courseFilter === null}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    courseFilter === null
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-primary hover:border-primary/40'
                  }`}
                >
                  All
                </button>
                {filterCourseOptions.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCourseFilter((current) => (current === code ? null : code))}
                    aria-pressed={courseFilter === code}
                    className={`focus-ring rounded-full border px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-all ${
                      courseFilter === code
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-primary hover:border-primary/40'
                    }`}
                    data-testid={`docs-course-chip-${chipId(code)}`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            )}

            {uploadError && !pendingFile && (
              <p className="rounded-xl border border-border bg-muted/60 px-4 py-3 text-xs leading-5 text-primary" role="alert" data-testid="docs-upload-error">
                {uploadError}
              </p>
            )}
          </div>

          {/* Storage/auth/db not configured upstream (503) — honest notice */}
          {unavailable && (
            <div className="mt-4 rounded-2xl border border-border bg-muted/60 px-4 py-3.5 text-xs leading-5 text-muted-foreground" data-testid="docs-unavailable">
              <span className="font-semibold text-primary">Materials storage isn't available on this server yet.</span>{' '}
              Documents will appear here once storage is configured. Nothing is lost — this is a
              service setup step, not a problem with your account.
            </div>
          )}

          {actionError && (
            <p className="mt-4 rounded-xl border border-border bg-muted/60 px-4 py-3 text-xs text-primary" role="alert" data-testid="docs-action-error">
              {actionError}
            </p>
          )}

          {/* Recent strip — server-provided lastAccessedAt only */}
          {!unavailable && recent.length > 0 && (
            <section aria-label="Recently opened" className="mt-6">
              <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">Recently opened</h2>
              <div className="mt-3 flex gap-3 overflow-x-auto pb-1" data-testid="docs-recent-strip">
                {recent.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => openViewer(doc)}
                    className="focus-ring flex min-h-11 w-44 shrink-0 flex-col items-start rounded-2xl border border-border bg-card p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                    data-testid={`docs-recent-${doc.id}`}
                  >
                    <FileText className="size-4 text-accent" aria-hidden="true" />
                    <span className="mt-2 line-clamp-2 text-xs font-bold leading-5 text-primary">{doc.title}</span>
                    <span className="mt-1 text-[11px] text-muted-foreground">{doc.courseCode ?? 'Unfiled'}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Library */}
          {!unavailable && (
            <section aria-label="All documents" className="mt-6">
              <h2 className="font-serif text-lg font-semibold tracking-[-0.02em] text-primary">All documents</h2>

              {showSkeleton && (
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="docs-loading">
                  {[0, 1, 2].map((n) => (
                    <div key={n} className="h-28 animate-pulse rounded-2xl border border-border bg-muted/40" />
                  ))}
                </div>
              )}

              {documentsQuery.isError && !unavailable && (
                <p className="mt-3 rounded-xl border border-border bg-muted/60 px-4 py-3 text-xs text-primary" role="alert" data-testid="docs-list-error">
                  {apiErrorMessage(documentsQuery.error, 'Could not load your documents.')}
                </p>
              )}

              {!showSkeleton && !documentsQuery.isError && filtered.length === 0 && (
                <div className="mt-3">
                  {items.length === 0 ? (
                    <EmptyState
                      icon={Upload}
                      tone="accent"
                      title="No materials yet"
                      message="Upload your first PDF — lecture notes, a past paper, anything you're studying. It stays private to your account."
                      testId="docs-empty-library"
                    />
                  ) : courseFilter && !search.trim() ? (
                    <EmptyState
                      icon={FileText}
                      title={`Nothing filed under ${courseFilter}`}
                      message="No documents are assigned to this course yet. Re-file one with the edit action, or clear the filter."
                      testId="docs-empty-course"
                    />
                  ) : (
                    <EmptyState
                      icon={Search}
                      title="Nothing matches"
                      message="Try a different search or clear the course filter."
                      testId="docs-empty-search"
                    />
                  )}
                </div>
              )}

              {!showSkeleton && filtered.length > 0 && (
                <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="docs-library-grid">
                  {filtered.map((doc) => (
                    <li key={doc.id} className="animate-rise-in">
                      <div
                        className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                        data-testid={`docs-card-${doc.id}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => openViewer(doc)}
                            className="focus-ring flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors hover:bg-primary/10"
                            aria-label={`Open ${doc.title}`}
                            data-testid={`docs-open-${doc.id}`}
                          >
                            <FileText className="size-4" aria-hidden="true" />
                          </button>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => openEdit(doc)}
                              className="focus-ring flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                              aria-label={`Edit ${doc.title}`}
                              data-testid={`docs-edit-${doc.id}`}
                            >
                              <Pencil className="size-3.5" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeleteTarget(doc)}
                              className="focus-ring flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                              aria-label={`Delete ${doc.title}`}
                              data-testid={`docs-delete-${doc.id}`}
                            >
                              <Trash2 className="size-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <button type="button" onClick={() => openViewer(doc)} className="focus-ring mt-3 text-left">
                          <span className="line-clamp-2 text-sm font-bold leading-5 text-primary">{doc.title}</span>
                        </button>
                        {(doc.courseCode || doc.topicHint) && (
                          <p className="mt-1.5 min-w-0 truncate text-[11px] leading-4 text-muted-foreground">
                            {doc.courseCode ?? 'Unfiled'}
                            {doc.topicHint ? ` · ${doc.topicHint}` : ''}
                          </p>
                        )}
                        <p className="mt-auto pt-2 text-[11px] text-muted-foreground">
                          PDF · {formatBytes(doc.sizeBytes)} · opened {formatDate(doc.lastAccessedAt)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
        </div>
      )}

      {/* Upload metadata dialog — validation happened at file pick */}
      <Dialog open={pendingFile !== null} onOpenChange={(open) => !open && closeUploadDialog()}>
        <DialogContent className="max-w-md rounded-2xl p-5" data-testid="docs-upload-dialog">
          <DialogHeader>
            <DialogTitle className="font-serif">Add material</DialogTitle>
            <DialogDescription>
              {pendingFile ? `${pendingFile.name} · ${formatBytes(pendingFile.size)}` : ''}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm font-bold text-primary">Title</span>
              <input
                value={uploadMeta.title}
                onChange={(event) => setUploadMeta((m) => ({ ...m, title: event.target.value }))}
                maxLength={200}
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-primary focus:border-ring focus:outline-none"
                data-testid="docs-upload-title"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-primary">Course</span>
              <select
                value={uploadMeta.courseCode}
                onChange={(event) => setUploadMeta((m) => ({ ...m, courseCode: event.target.value }))}
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-primary focus:border-ring focus:outline-none"
                data-testid="docs-upload-course"
              >
                <option value="">Unfiled</option>
                {COURSE_CODES.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-primary">Topic <span className="font-normal text-muted-foreground">(optional, free text)</span></span>
              <input
                value={uploadMeta.topicHint}
                onChange={(event) => setUploadMeta((m) => ({ ...m, topicHint: event.target.value }))}
                maxLength={120}
                placeholder="e.g. Enzymes"
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-primary placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                data-testid="docs-upload-topic"
              />
            </label>
            {uploadError && (
              <p className="rounded-xl border border-border bg-muted/60 px-4 py-3 text-xs leading-5 text-primary" role="alert" data-testid="docs-upload-dialog-error">
                {uploadError}
              </p>
            )}
            <p className="text-xs leading-5 text-muted-foreground">
              The file uploads directly to private storage after you confirm.
            </p>
          </div>
          <DialogFooter className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={closeUploadDialog}
              disabled={uploading}
              className="focus-ring min-h-10 flex-1 rounded-xl border border-border bg-background px-4 text-xs font-semibold text-primary hover:bg-muted disabled:opacity-45 sm:flex-none"
              data-testid="docs-upload-cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => void startUpload()}
              disabled={uploading || !uploadMeta.title.trim()}
              className="focus-ring flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 sm:flex-none"
              data-testid="docs-upload-confirm"
            >
              {uploading && <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />}
              {uploadStageLabel(uploadStage)}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit dialog — title / course / topic */}
      <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="max-w-md rounded-2xl p-5" data-testid="docs-edit-dialog">
          <DialogHeader>
            <DialogTitle className="font-serif">Edit document</DialogTitle>
            <DialogDescription>Update the title, course, or topic. The file itself never moves.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm font-bold text-primary">Title</span>
              <input
                value={editMeta.title}
                onChange={(event) => setEditMeta((m) => ({ ...m, title: event.target.value }))}
                maxLength={200}
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-primary focus:border-ring focus:outline-none"
                data-testid="docs-edit-title"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-primary">Course</span>
              <select
                value={editMeta.courseCode}
                onChange={(event) => setEditMeta((m) => ({ ...m, courseCode: event.target.value }))}
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-primary focus:border-ring focus:outline-none"
                data-testid="docs-edit-course"
              >
                <option value="">Unfiled</option>
                {COURSE_CODES.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-primary">Topic <span className="font-normal text-muted-foreground">(free text)</span></span>
              <input
                value={editMeta.topicHint}
                onChange={(event) => setEditMeta((m) => ({ ...m, topicHint: event.target.value }))}
                maxLength={120}
                className="focus-ring mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-primary focus:border-ring focus:outline-none"
                data-testid="docs-edit-topic"
              />
            </label>
          </div>
          <DialogFooter className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setEditing(null)}
              disabled={updateMutation.isPending}
              className="focus-ring min-h-10 flex-1 rounded-xl border border-border bg-background px-4 text-xs font-semibold text-primary hover:bg-muted disabled:opacity-45 sm:flex-none"
              data-testid="docs-edit-cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (!editing) return;
                const title = editMeta.title.trim();
                if (!title) return;
                updateMutation.mutate({
                  id: editing.id,
                  body: {
                    title: title.slice(0, 200),
                    courseCode: editMeta.courseCode.trim() ? editMeta.courseCode.trim().slice(0, 40) : null,
                    topicHint: editMeta.topicHint.trim() ? editMeta.topicHint.trim().slice(0, 120) : null,
                  },
                });
              }}
              disabled={updateMutation.isPending || !editMeta.title.trim()}
              className="focus-ring flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 sm:flex-none"
              data-testid="docs-edit-save"
            >
              {updateMutation.isPending && <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />}
              Save changes
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <Dialog open={deleteTarget !== null} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <DialogContent className="max-w-sm rounded-2xl p-5" data-testid="docs-delete-dialog">
          <DialogHeader>
            <DialogTitle className="font-serif">Delete document?</DialogTitle>
            <DialogDescription>
              “{deleteTarget?.title}” will be removed from your library and storage. This can't be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setDeleteTarget(null)}
              disabled={deleteMutation.isPending}
              className="focus-ring min-h-10 flex-1 rounded-xl border border-border bg-background px-4 text-xs font-semibold text-primary hover:bg-muted disabled:opacity-45 sm:flex-none"
              data-testid="docs-delete-cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => deleteTarget && deleteMutation.mutate(deleteTarget.id)}
              disabled={deleteMutation.isPending}
              className="focus-ring flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 sm:flex-none"
              data-testid="docs-delete-confirm"
            >
              {deleteMutation.isPending && <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />}
              Delete
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Viewer modal — native PDF in an iframe; mobile can open in a new tab */}
      {viewer && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-primary/60 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${viewer.title}`}
          data-testid="docs-viewer-overlay"
          onClick={() => setViewer(null)}
        >
          <div
            className="mx-auto flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-primary">{viewer.title}</p>
                <p className="text-[11px] text-muted-foreground">{viewer.courseCode ?? 'Unfiled'} · PDF</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {viewerUrl && (
                  <a
                    href={viewerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-primary transition-all hover:border-primary/40 hover:bg-muted"
                    data-testid="docs-viewer-new-tab"
                  >
                    Open in new tab
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setViewer(null)}
                  className="focus-ring flex min-h-9 items-center rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-primary transition-all hover:border-primary/40 hover:bg-muted"
                  data-testid="docs-viewer-close"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 bg-muted/40">
              {viewUrlMutation.isPending && !viewerError && (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground" data-testid="docs-viewer-loading">
                  <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" /> Opening…
                </div>
              )}
              {viewerError && (
                <div className="flex h-full items-center justify-center px-6 text-center text-sm text-primary" data-testid="docs-viewer-error">
                  {viewerError}
                </div>
              )}
              {viewerUrl && !viewerError && (
                <iframe
                  src={viewerUrl}
                  title={viewer.title}
                  className="h-full w-full border-0"
                  data-testid="docs-viewer-frame"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function uploadStageLabel(stage: 'idle' | 'validating' | 'requesting' | 'transferring' | 'finishing'): string {
  switch (stage) {
    case 'requesting':
      return 'Requesting…';
    case 'transferring':
      return 'Uploading…';
    case 'finishing':
      return 'Finishing…';
    default:
      return 'Upload PDF';
  }
}

function chipId(code: string): string {
  return code.toLowerCase().replaceAll(' ', '-');
}
