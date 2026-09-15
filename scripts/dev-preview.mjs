#!/usr/bin/env node
/**
 * Dev preview launcher.
 *
 * Builds and starts the API server on an internal port, then starts the
 * pharma-assistant Vite dev server on $PORT with /api proxied to the API
 * server (see API_PROXY_TARGET in artifacts/pharma-assistant/vite.config.ts).
 *
 * Env:
 *   PORT       (required) public port for the web app (injected by the host)
 *   BASE_PATH  (optional) Vite base path, defaults to "/"
 *   API_PORT   (optional) internal API server port, defaults to 5000
 *
 * A root .env (or .env.local) file, if present, is passed to the API server
 * via node --env-file so locally stored keys work in the preview.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { readFileSync } from 'node:fs';

// Load root .env files (dev convenience): real environment variables (e.g.
// injected by the host) always win over file values, and .env.local
// overrides .env, matching common dotenv conventions.
function loadEnvFiles() {
  for (const file of ['.env.local', '.env']) {
    let content;
    try {
      content = readFileSync(file, 'utf8');
    } catch {
      continue; // file does not exist
    }
    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq <= 0) continue;
      const key = line.slice(0, eq).trim();
      let value = line.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
        (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
      ) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = value;
    }
  }
}

loadEnvFiles();

const port = Number(process.env.PORT ?? 0);
if (!Number.isInteger(port) || port <= 0) {
  console.error('[preview] PORT environment variable is required but was not provided.');
  process.exit(1);
}

let apiPort = Number(process.env.API_PORT ?? 5000);
if (!Number.isInteger(apiPort) || apiPort <= 0) apiPort = 5000;
if (apiPort === port) apiPort = port === 5001 ? 5002 : 5001;

const basePath = process.env.BASE_PATH || '/';
const apiProxyTarget = `http://127.0.0.1:${apiPort}`;

// Load a root env file (if present) into the API server via Node's built-in
// --env-file support. The launcher never reads or prints the file's contents.
const envFile = ['.env.local', '.env']
  .map((name) => path.resolve(process.cwd(), name))
  .find((candidate) => existsSync(candidate));
const nodeEnvFileArgs = envFile ? [`--env-file=${envFile}`] : [];

console.log(
  `[preview] env file: ${envFile ? path.relative(process.cwd(), envFile) : 'none found'}`,
);
for (const name of ['HF_TOKEN', 'HUGGINGFACE_TOKEN', 'OPENAI_API_KEY']) {
  console.log(`[preview] ${name}: ${process.env[name] ? 'set' : 'not set'}`);
}

const children = [];
let shuttingDown = false;

function shutdown(exitCode) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    try {
      child.kill('SIGTERM');
    } catch {}
  }
  setTimeout(() => {
    for (const child of children) {
      try {
        child.kill('SIGKILL');
      } catch {}
    }
  }, 2000);
  process.exit(exitCode ?? 0);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

function watch(child, name) {
  children.push(child);
  const prefix = `[${name}]`;
  const pipe = (stream, write) => {
    stream.setEncoding('utf8');
    let buffer = '';
    stream.on('data', (chunk) => {
      buffer += chunk;
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      for (const line of lines) write(`${prefix} ${line}`);
    });
    stream.on('end', () => {
      if (buffer) write(`${prefix} ${buffer}`);
    });
  };
  pipe(child.stdout, console.log);
  pipe(child.stderr, console.error);
  child.on('exit', (code, signal) => {
    console.log(`${prefix} exited (${code ?? signal ?? 'unknown'})`);
    shutdown(code ?? 1);
  });
}

console.log('[preview] Building API server...');
const build = spawn('pnpm', ['--filter', '@workspace/api-server', 'run', 'build'], {
  stdio: 'inherit',
});
build.on('exit', (code) => {
  if (code !== 0) {
    console.error('[preview] API server build failed.');
    process.exit(code ?? 1);
  }

  console.log(
    `[preview] Starting API server on 127.0.0.1:${apiPort} and web app on 0.0.0.0:${port} (base path ${basePath}).`,
  );

  watch(
    spawn('node', [...nodeEnvFileArgs, '--enable-source-maps', './dist/index.mjs'], {
      cwd: 'artifacts/api-server',
      env: { ...process.env, PORT: String(apiPort) },
      stdio: ['ignore', 'pipe', 'pipe'],
    }),
    'api',
  );

  watch(
    spawn('pnpm', ['--filter', '@workspace/pharma-assistant', 'run', 'dev'], {
      env: {
        ...process.env,
        PORT: String(port),
        BASE_PATH: basePath,
        API_PROXY_TARGET: apiProxyTarget,
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    }),
    'web',
  );
});
