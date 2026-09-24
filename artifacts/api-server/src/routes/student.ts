import { Router, type IRouter } from "express";
import { randomUUID } from "node:crypto";
import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@workspace/db";
import {
  lessonProgress,
  preferences,
  quizResults,
  savedItems,
  studySessions,
  users,
} from "@workspace/db/schema";
import { requireAuth, syncUserRow, type AuthedRequest } from "../middlewares/auth";
import {
  PutLessonProgressBody,
  MergeQuizResultsBody,
  CreateStudySessionBody,
  CreateSavedItemBody,
  UpdateSavedItemBody,
  DeleteSavedItemParams,
  PutPreferencesBody,
} from "@workspace/api-zod";

/**
 * Student-data routes — every handler is behind requireAuth, so identity
 * always comes from the verified Clerk token (request.authUserId), never
 * from the request body or query. Each query/update is filtered by that id,
 * so user A can never read or write user B's rows.
 *
 * All request bodies are validated with the generated Zod schemas before
 * touching the database.
 */

const router: IRouter = Router();

const now = () => new Date();

// ---------------------------------------------------------------------------
// Current user / profile (also performs the users-table sync)
// ---------------------------------------------------------------------------
router.get("/me", requireAuth, async (request: AuthedRequest, response) => {
  const userId = request.authUserId!;
  try {
    await syncUserRow(userId);
    const [row] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    response.json({
      id: row.id,
      email: row.email ?? null,
      firstName: row.firstName ?? null,
      lastName: row.lastName ?? null,
      createdAt: row.createdAt,
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "me endpoint failed");
    response.status(500).json({ error: "Could not load your profile." });
  }
});

// ---------------------------------------------------------------------------
// Lesson progress
// ---------------------------------------------------------------------------
router.get("/student/lesson-progress", requireAuth, async (request: AuthedRequest, response) => {
  try {
    const rows = await db
      .select()
      .from(lessonProgress)
      .where(eq(lessonProgress.userId, request.authUserId!))
      .orderBy(desc(lessonProgress.updatedAt))
      .limit(2000);
    response.json({
      items: rows.map((row) => ({
        nodeId: row.nodeId,
        completed: row.completed === 1,
        sectionsCompleted: row.sectionsCompleted ?? null,
        updatedAt: row.updatedAt,
      })),
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "lesson-progress read failed");
    response.status(500).json({ error: "Could not load lesson progress." });
  }
});

router.put("/student/lesson-progress", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = PutLessonProgressBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid lesson progress payload." });
    return;
  }
  try {
    const { nodeId, completed, sectionsCompleted } = parsed.data;
    await db
      .insert(lessonProgress)
      .values({
        id: randomUUID(),
        userId: request.authUserId!,
        nodeId,
        completed: completed ? 1 : 0,
        sectionsCompleted: sectionsCompleted ?? null,
        updatedAt: now(),
      })
      .onConflictDoUpdate({
        target: [lessonProgress.userId, lessonProgress.nodeId],
        set: { completed: completed ? 1 : 0, sectionsCompleted: sectionsCompleted ?? null, updatedAt: now() },
      });
    const [row] = await db
      .select()
      .from(lessonProgress)
      .where(and(eq(lessonProgress.userId, request.authUserId!), eq(lessonProgress.nodeId, nodeId)))
      .limit(1);
    response.json({
      nodeId: row.nodeId,
      completed: row.completed === 1,
      sectionsCompleted: row.sectionsCompleted ?? null,
      updatedAt: row.updatedAt,
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "lesson-progress write failed");
    response.status(500).json({ error: "Could not save lesson progress." });
  }
});

// ---------------------------------------------------------------------------
// Quiz results (merge is idempotent on the client quiz id)
// ---------------------------------------------------------------------------
router.get("/student/quiz-results", requireAuth, async (request: AuthedRequest, response) => {
  try {
    const rows = await db
      .select()
      .from(quizResults)
      .where(eq(quizResults.userId, request.authUserId!))
      .orderBy(desc(quizResults.completedAt))
      .limit(5000);
    response.json({
      items: rows.map((row) => ({
        id: row.localId ?? row.id,
        subject: row.subject,
        difficulty: row.difficulty,
        totalQuestions: row.totalQuestions,
        correct: row.correct,
        incorrect: row.incorrect,
        percentage: row.percentage,
        topicOutcomes: row.topicOutcomes,
        completedAt: row.completedAt,
      })),
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "quiz-results read failed");
    response.status(500).json({ error: "Could not load quiz history." });
  }
});

router.post("/student/quiz-results/merge", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = MergeQuizResultsBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid quiz results payload." });
    return;
  }
  try {
    const results = parsed.data.results;
    const localIds = results.map((result) => result.id);
    const existing = localIds.length
      ? await db
          .select({ localId: quizResults.localId })
          .from(quizResults)
          .where(and(eq(quizResults.userId, request.authUserId!), inArray(quizResults.localId, localIds)))
      : [];
    const existingIds = new Set(existing.map((row) => row.localId));
    const fresh = results.filter((result) => !existingIds.has(result.id));
    if (fresh.length > 0) {
      await db.insert(quizResults).values(
        fresh.map((result) => ({
          id: randomUUID(),
          userId: request.authUserId!,
          localId: result.id,
          subject: result.subject,
          difficulty: result.difficulty,
          totalQuestions: result.totalQuestions,
          correct: result.correct,
          incorrect: result.incorrect,
          percentage: result.percentage,
          topicOutcomes: result.topicOutcomes,
          completedAt: new Date(result.completedAt),
        })),
      );
    }
    response.json({ merged: fresh.length, duplicatesSkipped: results.length - fresh.length });
  } catch (error) {
    request.log?.error?.({ err: error }, "quiz-results merge failed");
    response.status(500).json({ error: "Could not save your quiz history." });
  }
});

// ---------------------------------------------------------------------------
// Study sessions
// ---------------------------------------------------------------------------
router.get("/student/study-sessions", requireAuth, async (request: AuthedRequest, response) => {
  try {
    const rows = await db
      .select()
      .from(studySessions)
      .where(eq(studySessions.userId, request.authUserId!))
      .orderBy(desc(studySessions.startedAt))
      .limit(2000);
    response.json({
      items: rows.map((row) => ({
        id: row.id,
        nodeId: row.nodeId ?? null,
        subject: row.subject,
        topic: row.topic,
        difficulty: row.difficulty,
        mode: row.mode,
        status: row.status,
        startedAt: row.startedAt,
        endedAt: row.endedAt,
      })),
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "study-sessions read failed");
    response.status(500).json({ error: "Could not load study sessions." });
  }
});

router.post("/student/study-sessions", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = CreateStudySessionBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid study session payload." });
    return;
  }
  try {
    const input = parsed.data;
    const id = input.id ?? randomUUID();
    await db
      .insert(studySessions)
      .values({
        id,
        userId: request.authUserId!,
        nodeId: input.nodeId ?? null,
        subject: input.subject,
        topic: input.topic,
        difficulty: input.difficulty,
        mode: input.mode,
        plannedMinutes: input.plannedMinutes ?? null,
        sectionsCompleted: input.sectionsCompleted ?? null,
        status: input.status,
        keyTakeaways: input.keyTakeaways ?? [],
        topicsToReview: input.topicsToReview ?? [],
        startedAt: new Date(input.startedAt),
        endedAt: new Date(input.endedAt),
      })
      .onConflictDoNothing({ target: studySessions.id });
    const [row] = await db.select().from(studySessions).where(eq(studySessions.id, id)).limit(1);
    response.status(201).json({
      id: row.id,
      nodeId: row.nodeId ?? null,
      subject: row.subject,
      topic: row.topic,
      difficulty: row.difficulty,
      mode: row.mode,
      status: row.status,
      startedAt: row.startedAt,
      endedAt: row.endedAt,
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "study-session create failed");
    response.status(500).json({ error: "Could not save your study session." });
  }
});

// ---------------------------------------------------------------------------
// Saved items
// ---------------------------------------------------------------------------
router.get("/student/saved-items", requireAuth, async (request: AuthedRequest, response) => {
  try {
    const rows = await db
      .select()
      .from(savedItems)
      .where(eq(savedItems.userId, request.authUserId!))
      .orderBy(desc(savedItems.createdAt))
      .limit(2000);
    response.json({
      items: rows.map((row) => ({
        id: row.id,
        kind: row.kind,
        nodeId: row.nodeId ?? null,
        title: row.title,
        note: row.note ?? null,
        createdAt: row.createdAt,
      })),
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "saved-items read failed");
    response.status(500).json({ error: "Could not load saved items." });
  }
});

router.post("/student/saved-items", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = CreateSavedItemBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid saved item payload." });
    return;
  }
  try {
    const input = parsed.data;
    const id = input.id ?? randomUUID();
    await db
      .insert(savedItems)
      .values({
        id,
        userId: request.authUserId!,
        kind: input.kind,
        nodeId: input.nodeId ?? null,
        title: input.title,
        note: input.note ?? null,
      })
      .onConflictDoNothing({ target: [savedItems.userId, savedItems.nodeId] });
    const [row] = await db.select().from(savedItems).where(eq(savedItems.id, id)).limit(1);
    response.status(201).json({
      id: row.id,
      kind: row.kind,
      nodeId: row.nodeId ?? null,
      title: row.title,
      note: row.note ?? null,
      createdAt: row.createdAt,
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "saved-item create failed");
    response.status(500).json({ error: "Could not save this item." });
  }
});

// Update a saved item's personal note. Ownership is part of the WHERE
// clause — a cross-user patch is impossible; unknown/foreign ids 404.
router.patch("/student/saved-items/:id", requireAuth, async (request: AuthedRequest, response) => {
  const parsedParams = DeleteSavedItemParams.safeParse(request.params);
  if (!parsedParams.success) {
    response.status(400).json({ error: "Invalid saved item id." });
    return;
  }
  const parsed = UpdateSavedItemBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid saved item update payload." });
    return;
  }
  try {
    const [updated] = await db
      .update(savedItems)
      .set({ note: parsed.data.note })
      .where(
        and(
          eq(savedItems.userId, request.authUserId!),
          eq(savedItems.id, parsedParams.data.id),
        ),
      )
      .returning();
    if (!updated) {
      response.status(404).json({ error: "Saved item not found." });
      return;
    }
    response.json({
      id: updated.id,
      kind: updated.kind,
      nodeId: updated.nodeId ?? null,
      title: updated.title,
      note: updated.note ?? null,
      createdAt: updated.createdAt,
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "saved-item patch failed");
    response.status(500).json({ error: "Could not update this item." });
  }
});

router.delete("/student/saved-items/:id", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = DeleteSavedItemParams.safeParse(request.params);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid saved item id." });
    return;
  }
  try {
    await db
      .delete(savedItems)
      .where(and(eq(savedItems.userId, request.authUserId!), eq(savedItems.id, parsed.data.id)));
    response.status(204).send();
  } catch (error) {
    request.log?.error?.({ err: error }, "saved-item delete failed");
    response.status(500).json({ error: "Could not remove this item." });
  }
});

// ---------------------------------------------------------------------------
// Preferences
// ---------------------------------------------------------------------------
router.get("/student/preferences", requireAuth, async (request: AuthedRequest, response) => {
  try {
    const rows = await db
      .select()
      .from(preferences)
      .where(eq(preferences.userId, request.authUserId!))
      .limit(200);
    response.json({
      items: rows.map((row) => ({ key: row.key, value: row.value, updatedAt: row.updatedAt })),
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "preferences read failed");
    response.status(500).json({ error: "Could not load preferences." });
  }
});

router.put("/student/preferences", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = PutPreferencesBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid preferences payload." });
    return;
  }
  try {
    for (const pref of parsed.data.preferences) {
      await db
        .insert(preferences)
        .values({ id: randomUUID(), userId: request.authUserId!, key: pref.key, value: pref.value, updatedAt: now() })
        .onConflictDoUpdate({
          target: [preferences.userId, preferences.key],
          set: { value: pref.value, updatedAt: now() },
        });
    }
    const rows = await db
      .select()
      .from(preferences)
      .where(eq(preferences.userId, request.authUserId!))
      .limit(200);
    response.json({
      items: rows.map((row) => ({ key: row.key, value: row.value, updatedAt: row.updatedAt })),
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "preferences write failed");
    response.status(500).json({ error: "Could not save preferences." });
  }
});

export default router;
