import type { NextFunction, Request, Response } from "express";
import { createClerkClient, verifyToken } from "@clerk/backend";

/**
 * Clerk authentication middleware.
 *
 * The server derives identity ONLY from the verified Clerk session token
 * (Authorization: Bearer). A user id supplied by the frontend is never
 * trusted. The Clerk secret key is read here, server-side, and never sent
 * to any client.
 */

const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
const CLERK_PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

/** True when auth is configured; student routes report 503 otherwise. */
export const authConfigured = Boolean(CLERK_SECRET_KEY && CLERK_PUBLISHABLE_KEY);

let clerkClient: ReturnType<typeof createClerkClient> | null = null;
function getClerk() {
  if (!clerkClient) {
    clerkClient = createClerkClient({
      secretKey: CLERK_SECRET_KEY ?? "",
      publishableKey: CLERK_PUBLISHABLE_KEY,
    });
  }
  return clerkClient;
}

export type AuthedRequest = Request & { authUserId?: string };

function extractBearerToken(request: Request): string | null {
  const header = request.headers.authorization;
  if (!header?.startsWith("Bearer ")) return null;
  const token = header.slice("Bearer ".length).trim();
  return token ? token : null;
}

/** Verify the bearer token and attach the Clerk user id, or respond 401. */
export async function requireAuth(
  request: AuthedRequest,
  response: Response,
  next: NextFunction,
): Promise<void> {
  if (!authConfigured) {
    response.status(503).json({ error: "Authentication is not configured on this server." });
    return;
  }
  const token = extractBearerToken(request);
  if (!token) {
    response.status(401).json({ error: "Sign in to access your saved data." });
    return;
  }
  try {
    const payload = await verifyToken(token, {
      secretKey: CLERK_SECRET_KEY ?? "",
    });
    const sub = payload.sub;
    if (typeof sub !== "string" || sub.length === 0) {
      response.status(401).json({ error: "Invalid session token." });
      return;
    }
    request.authUserId = sub;
    next();
  } catch {
    response.status(401).json({ error: "Your session has expired — please sign in again." });
  }
}

/**
 * Sync the minimal users row for the verified Clerk user.
 * Only the fields Pharma Assistant needs are stored — no addresses, no
 * phone numbers, no credentials.
 */
export async function syncUserRow(clerkUserId: string): Promise<void> {
  const { db } = await import("@workspace/db");
  const { users } = await import("@workspace/db/schema");
  let email: string | null = null;
  let firstName: string | null = null;
  let lastName: string | null = null;
  try {
    const clerkUser = await getClerk().users.getUser(clerkUserId);
    email = clerkUser.primaryEmailAddress?.emailAddress ?? null;
    firstName = clerkUser.firstName ?? null;
    lastName = clerkUser.lastName ?? null;
  } catch {
    // Profile fetch is best-effort; the row can still be keyed by id.
  }
  await db
    .insert(users)
    .values({ id: clerkUserId, email, firstName, lastName, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: users.id,
      set: { email, firstName, lastName, updatedAt: new Date() },
    });
}
