import { memo, useMemo } from 'react';
import katex from 'katex';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkBreaks from 'remark-breaks';
import { normalizeEscapedNewlines, unicodeMathToLatex } from '@/lib/math-text';

/**
 * Renders AI-generated content: full Markdown (bold, italics, headings,
 * bullet/numbered lists) with mathematical expressions rendered by KaTeX.
 *
 * Pipeline: Markdown AST -> remark-math extracts $...$ / $$...$$ nodes ->
 * rehype-katex renders them. Normal text stays normal text; prose is styled
 * with scoped classes that match the app's existing design.
 *
 * Fallback chain (content is never lost):
 *   1. Markdown+math render fails entirely -> plain regex-based math render
 *      (previous behaviour, math only).
 *   2. An individual equation fails KaTeX -> raw string in a styled fallback.
 */

/** Regex-based fallback used only if the Markdown pipeline throws. */
function fallbackMathSegments(content: string): Array<
  { type: 'text'; value: string } | { type: 'math'; value: string; display: boolean }
> {
  const segments: Array<
    { type: 'text'; value: string } | { type: 'math'; value: string; display: boolean }
  > = [];
  const pattern = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\$(\S(?:[^$\n]*?\S)?)\$|\\\(([\s\S]+?)\\\)/g;
  let cursor = 0;
  for (const match of content.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) segments.push({ type: 'text', value: content.slice(cursor, index) });
    const body = (match[1] ?? match[2] ?? match[3] ?? match[4] ?? '').trim();
    if (body) segments.push({ type: 'math', value: body, display: match[1] !== undefined || match[2] !== undefined });
    cursor = index + match[0].length;
  }
  if (cursor < content.length) segments.push({ type: 'text', value: content.slice(cursor) });
  return segments;
}

/**
 * Protect currency amounts ("$5 and $10") from remark-math's inline parser:
 * when a line contains two or more dollars immediately followed by a digit
 * (a currency pattern), escape those dollars so Markdown renders them
 * literally. Variable-leading math like $[H^+]$ is untouched.
 */
function protectCurrency(content: string): string {
  return content
    .split('\n')
    .map((line) => {
      const currencyDollars = line.match(/\$\d/g);
      return currencyDollars && currencyDollars.length >= 2 ? line.replace(/\$/g, '\\$') : line;
    })
    .join('\n');
}

function MathTextBase({ content }: { content: string }) {
  const rendered = useMemo(() => {
    if (!content) return null;
    try {
      // Normalize literal "\\n" / "\\r" sequences the model may emit inside
      // its JSON payload before Markdown sees them, so they become real line
      // breaks and paragraphs instead of visible backslash characters.
      const normalized = normalizeEscapedNewlines(content) ?? content;
      return (
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkBreaks]}
          rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false, errorColor: '#c2542e', output: 'html' }]]}
          components={{
            // Convert unicode math inside KaTeX error fallbacks so degraded
            // equations still show sensible symbols.
            span: ({ node, children, ...props }) => {
              void node;
              const className = (props as { className?: string }).className ?? '';
              if (className.includes('katex-error')) {
                return (
                  <span {...props} className={`${className} math-fallback`}>
                    {typeof children === 'string' ? unicodeMathToLatex(children) : children}
                  </span>
                );
              }
              return <span {...props}>{children}</span>;
            },
          }}
        >
          {protectCurrency(normalized)}
        </ReactMarkdown>
      );
    } catch {
      // Markdown pipeline failure: degrade to the previous math-only renderer
      // so the response still displays with equations intact.
      return fallbackMathSegments(content).map((segment, index) => {
        if (segment.type === 'text') {
          return <span key={index}>{segment.value}</span>;
        }
        try {
          const html = katex.renderToString(unicodeMathToLatex(segment.value), {
            displayMode: segment.display,
            throwOnError: true,
            strict: false,
            output: 'html',
          });
          return (
            <span
              key={index}
              className={segment.display ? 'math-block' : 'math-inline'}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <span key={index} className="math-fallback">
              {segment.value}
            </span>
          );
        }
      });
    }
  }, [content]);

  return <span className="math-text">{rendered}</span>;
}

export const MathText = memo(MathTextBase);
