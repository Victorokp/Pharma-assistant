import { Router, type IRouter } from "express";
import { randomUUID } from "node:crypto";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@workspace/db";
import { documents } from "@workspace/db/schema";
import { requireAuth, syncUserRow, type AuthedRequest } from "../middlewares/auth";
import {
  buildStorageKey,
  deleteObjectBestEffort,
  objectExists,
  presignUpload,
  presignView,
  storageConfigured,
} from "../lib/storage";
import {
  CreateDocumentUploadUrlBody,
  UpdateDocumentBody,
} from "@workspace/api-zod";

/**
 * Documents routes — student-owned academic materials (Phase 6).
 *
 * Every handler is behind requireAuth: identity comes exclusively from the
 * verified Clerk token (request.authUserId), and every query/mutation is
 * filtered by that id. storageKey is always built server-side from the
 * verified user id + a server-generated UUID; the client can never choose
 * either. The bucket stays private — bytes move browser↔R2 directly over
 * short-lived presigned URLs, never through Express.
 */

const router: IRouter = Router();

const now = () => new Date();

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Shape returned for a document row (matches openapi DocumentMeta). */
function toMeta(row: typeof documents.$inferSelect) {
  return {
    id: row.id,
    title: row.title,
    courseCode: row.courseCode ?? null,
    topicHint: row.topicHint ?? null,
    kind: row.kind,
    sizeBytes: row.sizeBytes,
    status: row.status,
    pageCount: row.pageCount ?? null,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    lastAccessedAt: row.lastAccessedAt ?? null,
  };
}

// ---------------------------------------------------------------------------
// Upload initiation: create pending row + presigned PUT
// ---------------------------------------------------------------------------
router.post("/documents/upload-url", requireAuth, async (request: AuthedRequest, response) => {
  const parsed = CreateDocumentUploadUrlBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid document upload payload." });
    return;
  }
  if (!storageConfigured) {
    response.status(503).json({ error: "Document storage is not configured on this server." });
    return;
  }

  const userId = request.authUserId!;
  const documentId = randomUUID();
  // Server-side key construction — never taken from the client.
  const storageKey = buildStorageKey(userId, documentId);

  try {
    await syncUserRow(userId);
    await db.insert(documents).values({
      id: documentId,
      userId,
      title: parsed.data.title,
      courseCode: parsed.data.courseCode ?? null,
      topicHint: parsed.data.topicHint ?? null,
      kind: "pdf",
      sizeBytes: parsed.data.sizeBytes,
      storageKey,
      status: "pending",
      createdAt: now(),
      updatedAt: now(),
    });
    const uploadUrl = await presignUpload(storageKey);
    response.status(201).json({
      documentId,
      uploadUrl,
      // The browser must send exactly this header/value on the PUT.
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    request.log?.error?.({ err: error }, "upload-url failed");
    response.status(500).json({ error: "Could not start the upload." });
  }
});

// ---------------------------------------------------------------------------
// Upload completion: verify the object exists, then pending → ready
// ---------------------------------------------------------------------------
router.post("/documents/:id/complete", requireAuth, async (request: AuthedRequest, response) => {
  const userId = request.authUserId!;
  const documentId = String(request.params.id ?? "");
  if (!UUID_RE.test(documentId)) {
    response.status(400).json({ error: "Invalid document id." });
    return;
  }
  if (!storageConfigured) {
    response.status(503).json({ error: "Document storage is not configured on this server." });
    return;
  }

  try {
    // Ownership is part of the lookup — user A can never complete user B's row.
    const [row] = await db
      .select()
      .from(documents)
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)))
      .limit(1);
    if (!row) {
      response.status(404).json({ error: "Document not found." });
      return;
    }
    if (row.status === "ready") {
      // Idempotent completion.
      response.json({ document: toMeta(row) });
      return;
    }

    const head = await objectExists(row.storageKey);
    if (!head.exists) {
      // Do NOT mark ready when the object was never uploaded.
      response.status(409).json({ error: "Upload not found in storage — try uploading again." });
      return;
    }

    const [updated] = await db
      .update(documents)
      .set({ status: "ready", updatedAt: now() })
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)))
      .returning();
    response.json({ document: toMeta(updated) });
  } catch (error) {
    request.log?.error?.({ err: error }, "upload complete failed");
    response.status(500).json({ error: "Could not finalize the upload." });
  }
});

// ---------------------------------------------------------------------------
// List: only the authenticated user's ready documents
// ---------------------------------------------------------------------------
router.get("/documents", requireAuth, async (request: AuthedRequest, response) => {
  const userId = request.authUserId!;
  try {
    const rows = await db
      .select()
      .from(documents)
      .where(and(eq(documents.userId, userId), eq(documents.status, "ready")))
      // Recent-first: lastAccessedAt DESC NULLS LAST, then createdAt DESC.
      .orderBy(desc(documents.lastAccessedAt), desc(documents.createdAt))
      .limit(500);
    response.json({ items: rows.map(toMeta) });
  } catch (error) {
    request.log?.error?.({ err: error }, "documents list failed");
    response.status(500).json({ error: "Could not load your documents." });
  }
});

// ---------------------------------------------------------------------------
// Signed view URL (~5 min), bumps lastAccessedAt — powers "Recent"
// ---------------------------------------------------------------------------
router.get("/documents/:id/url", requireAuth, async (request: AuthedRequest, response) => {
  const userId = request.authUserId!;
  const documentId = String(request.params.id ?? "");
  if (!UUID_RE.test(documentId)) {
    response.status(400).json({ error: "Invalid document id." });
    return;
  }
  if (!storageConfigured) {
    response.status(503).json({ error: "Document storage is not configured on this server." });
    return;
  }

  try {
    const [row] = await db
      .select()
      .from(documents)
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)))
      .limit(1);
    if (!row || row.status !== "ready") {
      response.status(404).json({ error: "Document not found." });
      return;
    }

    const url = await presignView(row.storageKey);
    await db
      .update(documents)
      .set({ lastAccessedAt: now() })
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)));

    response.json({ url, expiresIn: 300 });
  } catch (error) {
    request.log?.error?.({ err: error }, "signed url failed");
    response.status(500).json({ error: "Could not open the document." });
  }
});

// ---------------------------------------------------------------------------
// Patch: title / courseCode / topicHint only (never identity or storage fields)
// ---------------------------------------------------------------------------
router.patch("/documents/:id", requireAuth, async (request: AuthedRequest, response) => {
  const userId = request.authUserId!;
  const documentId = String(request.params.id ?? "");
  if (!UUID_RE.test(documentId)) {
    response.status(400).json({ error: "Invalid document id." });
    return;
  }

  const parsed = UpdateDocumentBody.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Invalid document update payload." });
    return;
  }

  try {
    const set: Partial<typeof documents.$inferInsert> = { updatedAt: now() };
    if (parsed.data.title !== undefined) set.title = parsed.data.title;
    if (parsed.data.courseCode !== undefined) set.courseCode = parsed.data.courseCode;
    if (parsed.data.topicHint !== undefined) set.topicHint = parsed.data.topicHint;

    // Ownership is part of the WHERE clause — cross-user patch is impossible.
    const [updated] = await db
      .update(documents)
      .set(set)
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)))
      .returning();
    if (!updated) {
      response.status(404).json({ error: "Document not found." });
      return;
    }
    response.json({ document: toMeta(updated) });
  } catch (error) {
    request.log?.error?.({ err: error }, "document patch failed");
    response.status(500).json({ error: "Could not update the document." });
  }
});

// ---------------------------------------------------------------------------
// Delete: storage object (best-effort) + row, scoped by ownership
// ---------------------------------------------------------------------------
router.delete("/documents/:id", requireAuth, async (request: AuthedRequest, response) => {
  const userId = request.authUserId!;
  const documentId = String(request.params.id ?? "");
  if (!UUID_RE.test(documentId)) {
    response.status(400).json({ error: "Invalid document id." });
    return;
  }

  try {
    const [row] = await db
      .select()
      .from(documents)
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)))
      .limit(1);
    if (!row) {
      response.status(404).json({ error: "Document not found." });
      return;
    }

    const storageDeleted = await deleteObjectBestEffort(row.storageKey);
    await db
      .delete(documents)
      .where(and(eq(documents.id, documentId), eq(documents.userId, userId)));
    // Best-effort policy: the row is removed even if storage cleanup failed;
    // the object becomes unreachable (no row → no URL can ever be minted).
    response.json({ ok: true, storageDeleted });
  } catch (error) {
    request.log?.error?.({ err: error }, "document delete failed");
    response.status(500).json({ error: "Could not delete the document." });
  }
});

export default router;
