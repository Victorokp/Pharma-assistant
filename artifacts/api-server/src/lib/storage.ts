import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/**
 * Cloudflare R2 storage access for student documents (Phase 6).
 *
 * R2 speaks the S3 API, so the standard AWS SDK is used with an R2 endpoint.
 * Credentials live only in server environment variables (never exposed to
 * the Vite frontend) and the bucket is expected to be PRIVATE — every read
 * and write goes through short-lived presigned URLs minted here.
 *
 * Like @workspace/db, an unconfigured storage keeps the API server booting:
 * configuration problems surface as descriptive errors at call time, which
 * document routes translate into 503 responses.
 */

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const BUCKET = process.env.R2_BUCKET_NAME;

/** True when all four storage env vars are present. */
export const storageConfigured = Boolean(
  ACCOUNT_ID && ACCESS_KEY_ID && SECRET_ACCESS_KEY && BUCKET,
);

let client: S3Client | null = null;

function getClient(): S3Client {
  if (!storageConfigured) {
    throw new Error(
      "Document storage is not configured (CLOUDFLARE_ACCOUNT_ID, " +
        "CLOUDFLARE_R2_ACCESS_KEY_ID, CLOUDFLARE_R2_SECRET_ACCESS_KEY, " +
        "R2_BUCKET_NAME are required).",
    );
  }
  if (!client) {
    client = new S3Client({
      region: "auto",
      endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: ACCESS_KEY_ID!,
        secretAccessKey: SECRET_ACCESS_KEY!,
      },
    });
  }
  return client;
}

/** Server-side storage key — the client never picks it. */
export function buildStorageKey(userId: string, documentId: string): string {
  // documentId is always a server-generated UUID; the format is asserted
  // again at call sites so a stray id can never escape the prefix.
  if (!/^[0-9a-f-]{36}$/i.test(documentId)) {
    throw new Error("Invalid document id for storage key generation.");
  }
  return `${userId}/${documentId}.pdf`;
}

/** Short-lived presigned PUT for direct browser → R2 uploads. */
export async function presignUpload(
  storageKey: string,
  expiresInSeconds = 900,
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: storageKey,
    ContentType: "application/pdf",
  });
  return getSignedUrl(getClient(), command, { expiresIn: expiresInSeconds });
}

/** True when the object exists (and reports its size + content type). */
export async function objectExists(
  storageKey: string,
): Promise<{ exists: boolean; sizeBytes: number | null; contentType: string | null }> {
  try {
    const head = await getClient().send(
      new HeadObjectCommand({ Bucket: BUCKET, Key: storageKey }),
    );
    return {
      exists: true,
      sizeBytes: head.ContentLength ?? null,
      contentType: head.ContentType ?? null,
    };
  } catch (error) {
    const name = (error as { name?: string })?.name;
    // 404 from S3-style APIs surfaces as a "NotFound" error name.
    if (name === "NotFound" || name === "404") {
      return { exists: false, sizeBytes: null, contentType: null };
    }
    throw error;
  }
}

/** Short-lived presigned GET for viewing/downloading (~5 min expiry). */
export async function presignView(
  storageKey: string,
  expiresInSeconds = 300,
): Promise<string> {
  const command = new GetObjectCommand({ Bucket: BUCKET, Key: storageKey });
  return getSignedUrl(getClient(), command, { expiresIn: expiresInSeconds });
}

/** Best-effort object deletion — never throws. Returns whether it likely succeeded. */
export async function deleteObjectBestEffort(storageKey: string): Promise<boolean> {
  try {
    await getClient().send(
      new DeleteObjectCommand({ Bucket: BUCKET, Key: storageKey }),
    );
    return true;
  } catch {
    return false;
  }
}
