/**
 * Math text parsing pipeline.
 *
 * AI-generated study content mixes normal prose with mathematical
 * expressions. Math arrives delimited (the study-session system prompt
 * instructs the model to emit LaTeX inside delimiters):
 *
 *   - Block math:   $$...$$  or  \[...\]     (own line, larger, centered)
 *   - Inline math:  $...$    or  \(...\)     (flows within a sentence)
 *
 * parseMathSegments turns raw text into ordered segments the renderer can
 * display: normal text stays normal text, math goes to KaTeX. Parsing is
 * pure (no React, no DOM) so it can be unit-tested directly.
 */

/**
 * Normalize escaped newline sequences coming from AI responses.
 *
 * Models sometimes emit literal backslash-n / backslash-r sequences inside
 * JSON string values (double-escaped), or as plain text after truncation —
 * the student sees "line one\n\nline two" instead of paragraphs.
 *
 * Two guards keep equations intact:
 *   1. Math-delimited spans ($...$, $$...$$, \(...\), \[...\]) are never
 *      touched — LaTeX inside them goes to KaTeX as-is.
 *   2. In prose, a backslash + letter-run is only converted when it cannot
 *      be a real LaTeX macro. "\\neq", "\\nu", "\\nabla", "\\rho" are known
 *      macros and stay; "\\n" alone or unknown runs like "\\nThey" (not a
 *      valid LaTeX command) are escaped newlines that leaked through.
 *
 * Real newlines are preserved. Returns null when nothing changed so callers
 * can skip re-render work.
 */

/** Common KaTeX macros starting with n/r — these must survive normalization. */
const KNOWN_N_R_MACROS = new Set([
  'ne', 'neq', 'neg', 'nexists', 'nmid', 'notin', 'nparallel', 'nsubseteq',
  'nsupseteq', 'ntriangleleft', 'ntriangleright', 'nu', 'nabla', 'natural',
  'nearrow', 'newline', 'nleq', 'ngeq', 'nless', 'ngtr', 'nonumber',
  'nolimits', 'nRightarrow', 'nrightarrow', 'nsim', 'ncong', 'nprec', 'nsucc',
  'rho', 'right', 'rangle', 'rceil', 'rfloor', 'rgroup', 'rvert', 'rVert',
  'rm', 'rightharpoonup', 'rightharpoondown', 'rightleftharpoons', 'rq',
]);

/** Math-delimited spans (block first, then inline) — normalization no-go zones. */
const MATH_SPAN_PATTERN = /\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\]/g;

function normalizeProseEscapes(chunk: string): string {
  return chunk.replace(/\\([a-zA-Z]+)/g, (run, letters: string) => {
    if (letters === 'n') return '\n';
    if (letters === 'r') return '\r';
    if (KNOWN_N_R_MACROS.has(letters)) return run; // real LaTeX macro
    const head = letters[0];
    if (head === 'n' || head === 'r') {
      // e.g. "\\nThey" or "\\nb" — "\\" + this letter-run is not a real
      // LaTeX macro, so the leading n/r is an escaped newline that leaked
      // through; keep the remaining letters as text.
      return (head === 'n' ? '\n' : '\r') + letters.slice(1);
    }
    return run; // other macros (\\alpha, \\times, \\log…) untouched
  });
}

export function normalizeEscapedNewlines(text: string): string | null {
  if (!text.includes('\\')) return null;
  let out = '';
  let cursor = 0;
  for (const match of text.matchAll(MATH_SPAN_PATTERN)) {
    const index = match.index ?? 0;
    out += normalizeProseEscapes(text.slice(cursor, index));
    out += match[0]; // math span — untouched
    cursor = index + match[0].length;
  }
  out += normalizeProseEscapes(text.slice(cursor));
  return out === text ? null : out;
}

export type MathSegment =
  | { type: 'text'; value: string }
  | { type: 'math'; value: string; display: boolean };

/** Scan pattern helper: try to match `re` at exactly `from`. */
function matchAt(re: RegExp, input: string, from: number): RegExpMatchArray | null {
  re.lastIndex = from;
  const match = re.exec(input);
  return match && match.index === from ? match : null;
}

/**
 * Split raw content into text/math segments.
 *
 * Block delimiters are scanned before inline ones so `$$` is never consumed
 * as two adjacent `$` inline spans. Text between math keeps its original
 * whitespace; the renderer decides layout.
 */
export function parseMathSegments(raw: string): MathSegment[] {
  const segments: MathSegment[] = [];
  let plain = '';
  let cursor = 0;

  const flushPlain = () => {
    if (plain) {
      segments.push({ type: 'text', value: plain });
      plain = '';
    }
  };

  while (cursor < raw.length) {
    // Block math first: $$...$$ or \[...\]
    const blockMatch =
      matchAt(/\$\$([\s\S]+?)\$\$/g, raw, cursor) ??
      matchAt(/\\\[([\s\S]+?)\\\]/g, raw, cursor);

    if (blockMatch) {
      flushPlain();
      segments.push({ type: 'math', value: blockMatch[1].trim(), display: true });
      cursor += blockMatch[0].length;
      continue;
    }

    // Inline math: $...$ or \(...\). Pandoc-style guards: the $ body must
    // start and end with non-whitespace (so "$5 and $10" is never math) and
    // digit-only bodies are treated as currency, not math.
    const inlineMatch =
      matchAt(/\$(\S(?:[^$\n]*?\S)?)\$/g, raw, cursor) ??
      matchAt(/\\\(([\s\S]+?)\\\)/g, raw, cursor);

    if (inlineMatch) {
      const body = inlineMatch[1].trim();
      if (body && !/^[\d.,\s]+$/.test(body)) {
        flushPlain();
        segments.push({ type: 'math', value: body, display: false });
        cursor += inlineMatch[0].length;
        continue;
      }
    }

    plain += raw[cursor];
    cursor += 1;
  }

  flushPlain();
  return segments;
}

/**
 * Convert common unicode math in AI text to LaTeX so content that arrives
 * pre-rendered as unicode (e.g. "C₁V₁ = C₂V₂", "H⁺", "×") still renders as
 * real math when wrapped in delimiters.
 */
export function unicodeMathToLatex(input: string): string {
  const sup: Record<string, string> = {
    '⁰': '^0', '¹': '^1', '²': '^2', '³': '^3', '⁴': '^4',
    '⁵': '^5', '⁶': '^6', '⁷': '^7', '⁸': '^8', '⁹': '^9',
    '⁺': '^+', '⁻': '^-', 'ⁿ': '^n',
  };
  const sub: Record<string, string> = {
    '₀': '_0', '₁': '_1', '₂': '_2', '₃': '_3', '₄': '_4',
    '₅': '_5', '₆': '_6', '₇': '_7', '₈': '_8', '₉': '_9',
    '₊': '_+', '₋': '_-',
  };
  const greek: Record<string, string> = {
    'α': '\\alpha ', 'β': '\\beta ', 'γ': '\\gamma ', 'δ': '\\delta ',
    'ε': '\\varepsilon ', 'θ': '\\theta ', 'λ': '\\lambda ', 'μ': '\\mu ',
    'π': '\\pi ', 'ρ': '\\rho ', 'σ': '\\sigma ', 'τ': '\\tau ',
    'φ': '\\varphi ', 'ω': '\\omega ',
    'Δ': '\\Delta ', 'Σ': '\\Sigma ', 'Ω': '\\Omega ',
  };
  const symbols: Record<string, string> = {
    '×': '\\times ', '·': '\\cdot ', '÷': '\\div ', '−': '-',
    '≈': '\\approx ', '≤': '\\leq ', '≥': '\\geq ', '≠': '\\neq ',
    '±': '\\pm ', '∞': '\\infty ', '→': '\\to ', '⁄': '/', '√': '\\sqrt ',
  };

  let out = '';
  for (const char of input) {
    out +=
      sup[char] ??
      sub[char] ??
      greek[char] ??
      symbols[char] ??
      char;
  }
  return out;
}

/**
 * Parse a KaTeX-parse-error message to decide whether rendering is safe.
 * If KaTeX cannot parse an expression we show the original text rather than
 * throwing — content must never disappear.
 */
export function isKatexRenderable(value: string, renderCheck: (latex: string) => boolean): boolean {
  if (!value.trim()) return false;
  try {
    return renderCheck(value);
  } catch {
    return false;
  }
}
