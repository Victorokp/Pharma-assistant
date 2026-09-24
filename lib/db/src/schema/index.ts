import { pgTable, text, timestamp, integer, jsonb, uniqueIndex, index } from "drizzle-orm/pg-core";

/**
 * Pharma Assistant persistent student data.
 *
 * Clerk is the authentication authority — no passwords, credentials, or
 * session tokens are ever stored here. Every student-owned row carries the
 * Clerk user ID (verified server-side on every request); nothing trusts a
 * client-supplied identity.
 */

/** Application mirror of an authenticated Clerk user. */
export const users = pgTable("users", {
  /** Clerk user ID — the permanent identity for all student-owned records. */
  id: text("id").primaryKey(),
  email: text("email"),
  /** Given/family name as provided by Clerk, for a friendly greeting only. */
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** One completed quiz. `localId` keeps the client's original id so the
 * login merge is idempotent (re-uploading the same quiz never duplicates). */
export const quizResults = pgTable(
  "quiz_results",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    /** Client-generated id from localStorage-era quizzes. */
    localId: text("local_id"),
    subject: text("subject").notNull(),
    difficulty: text("difficulty").notNull(),
    totalQuestions: integer("total_questions").notNull(),
    correct: integer("correct").notNull(),
    incorrect: integer("incorrect").notNull(),
    percentage: integer("percentage").notNull(),
    /** Per-question outcomes keyed by topic, for strong/weak analysis. */
    topicOutcomes: jsonb("topic_outcomes").$type<Array<{ topic: string; correct: boolean }>>().notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }).notNull(),
    syncedAt: timestamp("synced_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("quiz_results_user_local_id_uq").on(table.userId, table.localId),
    index("quiz_results_user_completed_idx").on(table.userId, table.completedAt),
  ],
);

/** One Study Mode session (summary level, no raw conversation storage). */
export const studySessions = pgTable(
  "study_sessions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    /** Curriculum node id when the session maps to an authored lesson. */
    nodeId: text("node_id"),
    subject: text("subject").notNull(),
    topic: text("topic").notNull(),
    difficulty: text("difficulty").notNull(),
    /** 'authored' = curated lesson path, 'ai' = live tutor path. */
    mode: text("mode").notNull(),
    /** Optional planned minutes (10/20/30) — no timing instrumentation yet. */
    plannedMinutes: integer("planned_minutes"),
    /** Sections delivered when the authored path completed. */
    sectionsCompleted: integer("sections_completed"),
    /** 'completed' | 'ended-early' */
    status: text("status").notNull(),
    /** Authored path: per-section titles taught; AI path: tutor takeaways. */
    keyTakeaways: jsonb("key_takeaways").$type<string[]>().notNull(),
    topicsToReview: jsonb("topics_to_review").$type<string[]>().notNull(),
    startedAt: timestamp("started_at", { withTimezone: true }).notNull(),
    endedAt: timestamp("ended_at", { withTimezone: true }).notNull(),
  },
  (table) => [
    index("study_sessions_user_started_idx").on(table.userId, table.startedAt),
    index("study_sessions_user_node_idx").on(table.userId, table.nodeId),
  ],
);

/** Read/completed state for an authored lesson, unique per (user, node). */
export const lessonProgress = pgTable(
  "lesson_progress",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    nodeId: text("node_id").notNull(),
    completed: integer("completed").notNull(),
    /** Total sections in the lesson when the session reached the recap. */
    sectionsCompleted: integer("sections_completed"),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("lesson_progress_user_node_uq").on(table.userId, table.nodeId)],
);

/** Bookmarked lessons/items — backend foundation only (no UI yet). */
export const savedItems = pgTable(
  "saved_items",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    /** 'lesson' initially; open for future item kinds. */
    kind: text("kind").notNull(),
    nodeId: text("node_id"),
    title: text("title").notNull(),
    /** Optional client note. */
    note: text("note"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("saved_items_user_node_uq").on(table.userId, table.nodeId),
    index("saved_items_user_created_idx").on(table.userId, table.createdAt),
  ],
);

/** Key/value student preferences, one row per preference key per user. */
export const preferences = pgTable(
  "preferences",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    key: text("key").notNull(),
    value: text("value").notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("preferences_user_key_uq").on(table.userId, table.key)],
);

/**
 * Student-owned academic documents (Phase 6 Docs/Materials).
 *
 * One row per uploaded file. Bytes live in private object storage (Cloudflare
 * R2); this table stores metadata only. Every row is keyed by the Clerk user
 * id verified server-side — ownership is never taken from the client, and
 * storageKey is always constructed server-side as `${userId}/${documentId}.pdf`.
 *
 * Status flow: pending → ready (set only after the storage object is verified
 * to exist). failed marks an upload that never completed. There is
 * deliberately NO foreign key to the curriculum — courseCode is a loose,
 * human-readable association.
 */
export const documents = pgTable(
  "documents",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    title: text("title").notNull(),
    /** Loose association, e.g. 'BCH 201'. Not a curriculum foreign key. */
    courseCode: text("course_code"),
    /** Free-text topic tag, e.g. 'Enzymes'. Not a curriculum foreign key. */
    topicHint: text("topic_hint"),
    /** 'pdf' initially; 'image'/'scan' reserved for the OCR phase. */
    kind: text("kind").notNull().default("pdf"),
    sizeBytes: integer("size_bytes").notNull(),
    storageKey: text("storage_key").notNull(),
    /** 'pending' → 'ready' (after object verification); 'failed' on abandon. */
    status: text("status").notNull().default("pending"),
    pageCount: integer("page_count"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    lastAccessedAt: timestamp("last_accessed_at", { withTimezone: true }),
  },
  (table) => [
    index("documents_user_course_idx").on(table.userId, table.courseCode),
    index("documents_user_recent_idx").on(table.userId, table.lastAccessedAt),
    index("documents_user_created_idx").on(table.userId, table.createdAt),
  ],
);

/**
 * Shared AI response cache — server-side optimization for reusable generic
 * responses (Ask AI / Drug Explorer). NOT student-owned data: rows are keyed
 * by a hash of the normalized request, never by user, and are safe to serve
 * to any student. Personalized requests are screened out and never cached.
 *
 * Versioning + expiry: `prompt_version`/`cache_key` prefix invalidate stale
 * entries on prompt changes; `expires_at` bounds freshness (best-effort
 * cleanup on read misses).
 */
export const aiResponseCache = pgTable(
  "ai_response_cache",
  {
    id: text("id").primaryKey(),
    /** version:mode:sha256(normalized question) — the lookup key. */
    cacheKey: text("cache_key").notNull(),
    requestMode: text("request_mode").notNull(),
    /** Normalized request text (audit/debug; no raw student input stored). */
    requestFingerprint: text("request_fingerprint"),
    provider: text("provider").notNull(),
    model: text("model").notNull(),
    /** Prompt/cache version — bump invalidates all rows at once. */
    promptVersion: text("prompt_version").notNull(),
    responseBody: text("response_body").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  },
  (table) => [uniqueIndex("ai_response_cache_key_uq").on(table.cacheKey)],
);
