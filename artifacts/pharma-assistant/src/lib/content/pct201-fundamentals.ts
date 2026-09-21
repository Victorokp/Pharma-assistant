import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic: Fundamentals of Pharmaceutical Calculations (pct-4).
 *
 * Batch 9: the Tier D TOPIC orientation lesson for the pct-4 mega-topic.
 * Node ID, title, and binding mirror curriculum.ts exactly (pct-4 is a
 * TOP-LEVEL topic: parentTopicId null — verified in Batch 8/9 audits); nothing
 * here creates, renames, or reorders curriculum nodes.
 *
 * Tier D discipline: this lesson orients — it establishes what pharmaceutical
 * calculations are, the universal workflow, and the map of the territory. It
 * deliberately does NOT teach the material of the dedicated nodes ahead
 * (pct-4-1…4-8 foundations, pct-5/6/8/9/11/12 groups, pct-10 sibling topic);
 * those have their own batches. Section set follows the established Tier D
 * convention (UNDERSTAND + KEY FACTS + QUICK RECAP).
 */
export const pct201FundamentalsLessons: Lesson[] = [
  {
    nodeId: 'pct-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'topic',
    title: 'Fundamentals of Pharmaceutical Calculations',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pharmaceutical calculation is the discipline of computing an unknown pharmaceutical quantity from known ones: turning an ordered amount and a product's declared strength into a measurable volume, a formulation's ingredient list into weighable masses, a concentration into a dose. It matters because nothing in pharmacy is forgiving of a tenfold error — a misplaced decimal in a dose calculation is not a wrong answer on paper, it is a wrong amount in a syringe. The entire topic therefore trains one repeatable **workflow**, applied to ever-varying material:

1. **Identify what is known and what is asked** — the given quantities (amounts, strengths, concentrations, measurements) and, critically, the *units the answer must carry*. Naming the target unit first is the single most protective habit in the discipline.
2. **Set up the relationship with units visible** — quantities, strengths, and concentrations interact through multiplication and division exactly as their units do: a strength in mg per mL divided into an amount in mg leaves mL. When the units of a setup do not resolve toward the target, the setup is wrong *before any arithmetic runs* — this dimensional check is the topic's permanent safety rail.
3. **Choose the method** — most pharmaceutical problems are **proportions**: two ratios declared equal, with one element unknown,

$$
\\frac{a}{b} = \\frac{c}{d} \\qquad \\Longrightarrow \\qquad a \\cdot d = b \\cdot c
$$

cross-multiplication pairs the diagonals ($a \\cdot d = b \\cdot c$); the unknown is then isolated by division — e.g. with $x = c$: $\\;x = \\dfrac{a \\cdot d}{b}$. Check: $\\tfrac{2}{3} = \\tfrac{x}{9}$ gives $x = \\tfrac{2 \\cdot 9}{3} = 6$, and indeed $\\tfrac{6}{9} = \\tfrac{2}{3}$ ✓. The algebra is always the same: rearrange (isolate the unknown), substitute, cancel units.
4. **Calculate without premature rounding** — keep full precision through intermediate steps and round once, sensibly, at the end.
5. **Check and interpret** — estimate the expected magnitude before trusting the precise figure: an answer of 1,500 mL where a few mL was plausible fails inspection instantly, and the estimation habit catches what hidden arithmetic slips do not.

The territory ahead is layered, and each layer reuses this workflow in a new dialect: the **foundation skills** (fractions, percentages, ratios, significant figures, estimation — pct-4-1…pct-4-8) sharpen steps 2–5; the **measured territories** then apply them — measurement systems (pct-5) and measurement practice (pct-6) supply the unit vocabulary; density and specific gravity (pct-8), expressions of concentration (pct-9), and potency and units of activity (pct-11) each define one conversion family; selected clinical calculations (pct-12) individualise the results for patients; and the sibling topic Dose Calculations (pct-10) assembles the bridges into doses. Nothing ahead is a new kind of thinking — it is this workflow, practiced until it is reflex.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Workflow: known → asked (name the target unit) → method → calculate → check → interpret.
- Units are the safety rail: the surviving unit names the answer; a mismatch flags the setup.
- Round once, at the end; estimate first — reasonableness catches what precision hides.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Topic orientation — the study units ahead run: foundation skills (pct-4-1…4-8) → measurement systems (pct-5) → measurement practice (pct-6) → density & specific gravity (pct-8) → concentration expressions (pct-9) → potency & units (pct-11) → clinical calculations (pct-12), with Dose Calculations (pct-10) as the sibling topic.
- One discipline throughout: proportion and unit reasoning under the five-step workflow.
- Every later lesson assumes this orientation; revisit it whenever a calculation feels like a new subject.`,
      },
    ],
  },
];
