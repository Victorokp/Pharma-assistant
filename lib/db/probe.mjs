// One-off DB reachability probe (no secrets printed — only a PASS/FAIL word).
// Run from lib/db so `pg` resolves: node ../../scripts/db-reachability-probe.mjs
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
try {
  await pool.query('SELECT 1');
  console.log('DB_REACHABLE');
} catch (error) {
  console.log('DB_UNREACHABLE:', String(error.message).slice(0, 140));
}
process.exit(0);
