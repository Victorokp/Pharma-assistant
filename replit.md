# Pharma Assistant

An educational pharmacy study companion: ask AI questions, explore drug profiles, practice with generated quizzes, track progress, and browse the PharmD curriculum.

## Run & Operate

- `pnpm install` — install workspace dependencies (pnpm only; npm/yarn are blocked by `preinstall`)
- `pnpm run preview:web` — build + start the API server (internal port 5000) and the web app dev server on `$PORT` with `/api` proxied (`scripts/dev-preview.mjs`). Requires `PORT`; optional `BASE_PATH` (default `/`), `API_PORT`
- `pnpm run typecheck` — full typecheck across all packages (the project's verification gate)
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/pharma-assistant run typecheck` — typecheck just the web app
- `pnpm --filter @workspace/api-server run build` — build the API bundle (`dist/index.mjs`)
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec (Orval)
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only; schema is currently empty)
- Required env for AI: `HF_TOKEN` (or `HUGGINGFACE_TOKEN`); optional `OPENAI_API_KEY` fallback. `DATABASE_URL` is required by `lib/db` if the DB layer is imported. Keys live in root `.env`/`.env.local` (gitignored; loaded via `node --env-file` by the preview script)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9 (strict, project references)
- Web: React 19 + Vite 7 + Tailwind CSS 4 + shadcn/ui (Radix), wouter routing, TanStack Query, framer-motion
- AI answer rendering: react-markdown + remark-math + rehype-katex (KaTeX) + remark-breaks
- API: Express 5, pino/pino-http logging, esbuild bundle (ESM, `dist/index.mjs`)
- Validation/codegen: OpenAPI 3.1 spec → Orval → `@workspace/api-client-react` (react-query hooks) + `@workspace/api-zod` (Zod 3 schemas)
- DB: PostgreSQL + Drizzle ORM (`lib/db`) — scaffolded, not yet used by app features
- AI provider: Hugging Face Inference Providers (`router.huggingface.co`, model `openai/gpt-oss-120b:fastest`), OpenAI SDK fallback

## Where things live

- `artifacts/pharma-assistant/` — the web app (Vite root). `src/App.tsx` is a single-page sectioned app (Home/Ask, Drug Explorer, Quiz, Progress, Curriculum, Study) routed with wouter
- `artifacts/pharma-assistant/src/lib/curriculum.ts` — **source of truth** for all curriculum data: Course → Topics → Subtopics with stable slug IDs. Courses: ENT 211, ANA 201, ANA 203, BCH 201, PHM 201, PCH 201, PIO 201, PCG 201, PCY 201, PCT 201, PCT 203. Components need no changes to add content
- `artifacts/pharma-assistant/src/lib/drug-name-checker.ts` — smart spelling suggestions for Drug Explorer. `DRUG_REFERENCE_NAMES` is a spelling-only dictionary (~139 names) that must never restrict what can be searched
- `artifacts/pharma-assistant/src/lib/math-text.ts` + `src/components/math-text.tsx` — shared LaTeX/markdown rendering (`MathText`), used by chat answers, drug profiles, and Study Mode
- `artifacts/pharma-assistant/src/lib/progress-storage.ts` — localStorage-backed quiz/progress persistence
- `artifacts/pharma-assistant/src/components/study-mode.tsx`, `quiz-mode.tsx`, `progress-dashboard.tsx`, `curriculum-browser.tsx` — the four main feature components
- `artifacts/pharma-assistant/src/index.css` — Tailwind 4 theme: warm parchment background, deep-teal primary, gold accent; Fraunces serif headings, DM Sans body; dark mode via `.dark`
- `artifacts/api-server/src/routes/pharma.ts` — the single AI endpoint `POST /api/pharma/ask` with four system-prompt modes: `ask`, `drug-profile`, `study-session`, `quiz-generation`
- `artifacts/api-server/src/routes/health.ts` — `GET /api/healthz`
- `lib/api-spec/openapi.yaml` — API contract; `lib/api-client-react/` and `lib/api-zod/` hold Orval-generated code (never hand-edit `src/generated/`)
- `lib/db/` — Drizzle schema (empty scaffold) and pg pool
- `scripts/dev-preview.mjs` — dev preview launcher (API + Vite with proxy)

## Architecture decisions

- **Single AI endpoint, mode-switched prompts**: all features (Ask, Drug Explorer, Study Mode, Quiz) call the same `/api/pharma/ask` with a `mode` field; the server picks the system prompt. Study/Quiz return strict JSON parsed client-side
- **Curriculum is data, not UI**: courses/topics/subtopics live only in `src/lib/curriculum.ts`; the browser, Study Mode, and Quiz Mode consume it via handoff props (`composeCurriculumContext`)
- **Spelling suggestions never auto-apply**: the drug-name checker is a local, conservative fuzzy matcher (Levenshtein + bigram blend, prefix bonus) that only proposes names; the student confirms, and the AI backend remains the source of truth for drug info
- **Generated API layer**: client hooks/schemas are codegen'd from `openapi.yaml` via Orval; edit the spec and regenerate instead of editing generated files
- **Preview proxying**: the Vite dev server proxies `/api` to the Express server (`API_PROXY_TARGET`) so the app runs as one origin in dev

## Product

- **Ask Pharma Assistant** — chat with an AI tutor that answers pharmacy questions with structured, safety-disclaimed educational answers
- **Drug Explorer** — generates a sectioned educational drug profile (class, mechanism, uses, cautions, interactions, PK, student tip); includes smart "Did you mean …?" spelling suggestions and multi-choice disambiguation
- **Study Mode** — progressive tutoring sessions with check questions, `[CONTINUE]`/`[EXPLAIN DIFFERENTLY]`/`[END SESSION]` style directives, and session summaries
- **Quiz Mode** — AI-generated multiple-choice quizzes with instant feedback, difficulty levels, and wrap-up stats
- **Progress** — dashboard fed automatically by quiz results (localStorage), with study-weak-areas handoffs
- **Curriculum** — browsable course/topic/subtopic map with "Study this topic" / "Quiz me" handoffs into Study/Quiz Mode

## User preferences

- Curriculum edits: touch **only the named course**; preserve course IDs/codes/names/levels/credit units and existing topic/subtopic IDs; never invent lecturer content; organize supplied material into logical Topics → Subtopics without duplicating repeated headings
- Drug Explorer: never replace or break it; don't change the AI provider or HF_TOKEN setup; never expose/hardcode API keys; keep the 139-name spelling reference list unchanged unless explicitly requested — it must never restrict search
- Do not modify Ask AI, Study Mode, Quiz Mode, Progress, or curriculum handoff logic when working on unrelated features
- The app is intended to become an Android/mobile app later: keep architecture mobile-first, responsive, and migration-friendly (API-based, no desktop-only assumptions)
- After implementation, run typecheck (and targeted tests when they exist)

## Gotchas

- **pnpm only** — the root `preinstall` script fails for npm/yarn; `minimumReleaseAge: 1440` in `pnpm-workspace.yaml` is an intentional supply-chain defense (don't disable or set to 0)
- `artifacts/pharma-assistant/vite.config.ts` **throws without `PORT` and `BASE_PATH`** env vars — always run the web app through `pnpm run preview:web` or set both
- No test runner is configured; `pnpm run typecheck` is the verification gate for every change
- Orval is pinned to Zod 3 syntax (`version: 3` in `orval.config.ts`) while matching the workspace catalog — keep that pin when regenerating
- React and react-dom are pinned to exactly 19.1.0 (Expo compatibility for the future mobile build) — don't bump casually
- `.env`/`.env.local` are gitignored and never committed; the preview script passes them to the API server via `node --env-file` without reading or printing values
- KaTeX/markdown rendering expects AI output in LaTeX delimiters (`$...$`, `$$...$$`); system prompts enforce this — keep them in sync if editing prompts
- esbuild overrides in `pnpm-workspace.yaml` strip non-linux-x64 platform binaries (Replit target) — expect reinstall churn if platform files go missing

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
