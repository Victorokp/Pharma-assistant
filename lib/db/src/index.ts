import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn(
    "[db] DATABASE_URL is not configured — database-backed features are disabled. " +
      "The API server keeps running (AI cache degrades to in-memory), but student-data and shared-cache queries will fail.",
  );
}

export const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

type Db = ReturnType<typeof drizzle<typeof schema>>;

/**
 * When DATABASE_URL is configured this is the real Drizzle instance.
 * When it is not, any query attempt throws a clear, descriptive error at
 * call time instead of crashing the entire server at boot — routes already
 * wrap queries in try/catch and report friendly errors.
 */
function dbUnavailable(): never {
  throw new Error(
    "DATABASE_URL is not configured — database-backed features are unavailable.",
  );
}

export const db: Db = pool
  ? drizzle(pool, { schema })
  : (new Proxy(
      {},
      {
        get: () => dbUnavailable,
      },
    ) as unknown as Db);

export * from "./schema";
