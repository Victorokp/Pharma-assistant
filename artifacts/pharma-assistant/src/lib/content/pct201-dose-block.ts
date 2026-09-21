import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic: Dose Calculations (pct-10).
 *
 * Batch 8: completes the locked pct-10 topic block: the Tier C topic
 * orientation lesson plus all ten children (pct-10-1/2/3 Tier C;
 * pct-10-4/5/6/8/9 Tier B; pct-10-7 Tier A; pct-10-10 Tier C). Node IDs and
 * titles mirror curriculum.ts exactly; nothing here creates, renames, or
 * reorders curriculum nodes.
 *
 * Structural note (verified against the locked curriculum, Batch 8): pct-10
 * is a TOPIC-level node of the PCT 201 course (sibling of pct-1…pct-14), not
 * a grouping subtopic of pct-4 — the Phase-1 map records it as
 * type TOPIC / parentTopicId null. Every child therefore binds
 * topicId: 'pct-10' (self-binding for the topic lesson, parent binding for
 * children), and child titles carry no group prefix, byte-matching the plain
 * curriculum names.
 *
 * CLINICAL SAFETY DISCIPLINE (per the approved batch standard): all doses,
 * strengths, and patient values are illustrative teaching numbers chosen for
 * clean arithmetic — not prescribing guidance and not real product data. The
 * one convention referenced (age-based Young's rule, in pct-10-4) is
 * explicitly labelled a historical convention and carried in verifyFlags.
 * Calculation mechanics, not therapeutics, are the subject.
 */
export const pct201DoseLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC ORIENTATION (Tier C topic lesson — session base, like BCH 'enzymes')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'topic',
    title: 'Dose Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every dose calculation in this topic is the same four-step discipline applied to a different bridge: **recognise** what is ordered and what is available, **choose** the bridge that connects them, **set up** the units so they cancel toward the answer's units, then **calculate, check, and interpret**. The universal bridge is a ratio:

$$
\\text{amount to give} = \\frac{\\text{desired dose}}{\\text{strength on hand}} \\times \\text{unit that carries that strength}
$$

Read it with units, not memory: when the desired dose is in mg and the strength is mg per tablet, the ratio collapses to plain numbers — so the answer is in **tablets**. When the strength is mg per mL, mg ÷ (mg/mL) leaves **mL**. The unit that survives is always the answer, which is why dimensional analysis is the safety net rather than an optional flourish.

The ten children arrange the same bridge by *where the dose comes from*: a plain order (basic, from concentration, from available strength), a patient characteristic (age, weight, surface area), a schedule (divided, single vs multiple, max/min), or a whole population (pediatric). Learn the bridge once and each child is a variation — learn only recipes and every variation is a new problem.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- One bridge everywhere: desired ÷ strength × carrying unit; the surviving unit is the answer.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Method-recognition: three orders read "give 40 mg" (stock 10 mg tablets), "give 40 mg" (stock 10 mg/mL), and "give 40 mg/kg" for a 20 kg patient (stock 10 mg/mL). Which bridge does each demand, and what units does each answer carry?
2. Conceptual: why is the surviving unit of a collapse the best first check on any setup in this topic — before the arithmetic is even evaluated?
3. Trend-reasoning: an age-scaled dose computes above the adult reference. Without any calculation, what does that reveal about the setup?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Topic orientation — the ten child lessons are the study units, running: Basic → From Concentration → From Available Strength → By Age → By Weight → By BSA → Divided → Single/Multiple → Max/Min → Pediatric.
- The discipline: recognise → choose the bridge → set up units → calculate → check → interpret.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Basic Dose Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-1',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Basic Dose Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `One prerequisite distinction: **dose** vs **strength**. The *dose* is what the patient should receive (an amount of drug — mg). The *strength* is how much drug is packed into one unit of the product (mg per tablet, mg per mL, mg per capsule). Confusing the two is the root error of this whole topic; every calculation here keeps them in separate roles.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `A plain order states a dose: "give 250 mg". The shelf states a strength: "125 mg per tablet". The question the calculation answers is *how many of those units carry the ordered amount* — a ratio of like to like:

$$
\\text{units} = \\frac{\\text{dose ordered (mg)}}{\\text{strength (mg/unit)}} \\times 1 \\text{ unit}
$$

Why it works: dividing two mg quantities cancels mg and leaves a **count** — of tablets, capsules, or whatever unit the strength is declared per. The ratio is exactly the everyday reasoning "each tablet is 125 mg; how many 125s fit in 250?" — the formula merely formalises the counting.

The traps this lesson inoculates against, explicitly: using the strength as though it were the dose (an inversion that returns "0.5 tablets" for a dose *double* the strength — detectable by the units surviving the collapse); mixing mg with mcg in the ratio (a 1,000× error — convert before dividing); and entering the ratio backwards. The unit-collapse check catches all three: if mg ÷ (mg/unit) does not resolve to the units the question demands, the setup — not the arithmetic — is wrong.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- units = dose ÷ strength; mg ÷ (mg/unit) cancels to a plain count of units.
- Dose and strength are separate roles: ordered amount vs per-unit content.
- mcg must become mg (÷1,000) *before* the ratio — never inside it.
- The surviving unit is the answer's unit; anything else means the setup is inverted.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{number of units} = \\frac{D \\text{(mg)}}{H \\text{(mg/unit)}} \\qquad \\text{amount (mL)} = \\frac{D \\text{(mg)}}{c \\text{(mg/mL)}}
$$

$D$ = desired (ordered) dose; $H$ = strength on hand per unit; $c$ = concentration. Both forms are one ratio: dividing like units (mg/mg) yields a count; dividing mg by (mg/mL) yields mL.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — tablets (illustrative).**

**Given:** order 250 mg; stock 125 mg per tablet. **Find:** the number of tablets.

1. Ratio: $\\dfrac{250 \\text{ mg}}{125 \\text{ mg/tablet}}$.
2. Cancel: mg ÷ (mg/tablet) = tablets.
3. Calculate: 250 ÷ 125 = **2 tablets**.

**Example 2 — microgram order (illustrative).**

**Given:** order 0.3 mg; stock 100 mcg per tablet. **Find:** the tablets.

1. Convert *first*: 0.3 mg × 1,000 = 300 mcg.
2. Ratio: 300 mcg ÷ 100 mcg/tablet = **3 tablets**.

**Example 3 — liquid (illustrative).**

**Given:** order 80 mg; stock 40 mg/5 mL. **Find:** the volume.

1. Strength: 40 mg per 5 mL → 8 mg/mL (40 ÷ 5).
2. Volume: 80 mg ÷ 8 mg/mL = **10 mL**.
3. Reverse-check: 10 mL × 8 mg/mL = 80 mg ✓.

**Interpretation:** three products, one ratio. Example 2 shows the conversion living *outside* the ratio (a 1,000× misstep had it been skipped); Example 3 shows the reverse-check closing the loop. All values are illustrative teaching numbers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This is the most-executed calculation at the dispensing bench: every "give X mg" against a stocked strength resolves here. The professional habits the lesson leaves: read the strength exactly as printed (including its "per 5 mL" or "per tablet" tail), convert units before the ratio, and let the surviving unit confirm the setup before any number is trusted.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) Order 0.15 mg; stock 50 mcg tablets. Convert first, then compute the tablets — and state which step, skipped, would produce a 1,000× error.
2. (Illustrative) Order 350 mg; stock 70 mg/mL oral solution. Compute the mL and verify by the reverse calculation.
3. Error-detection: a colleague sets up 70 mg ÷ 350 mg and reports "0.2 mL" for question 2's data. What is inverted, and what unit would the *correct* collapse produce?
4. Conceptual: the order reads "1 tablet" rather than a mg amount. What has the prescriber's arithmetic already resolved, and what check remains before dispensing?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- units = D ÷ H; the mg cancels and the surviving unit is the answer.
- Convert mcg ↔ mg before the ratio, never inside it.
- Strengths carry a tail ("per 5 mL") — normalise to mg/mL first.
- Close every liquid calculation with the reverse check.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Dose from Concentration (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-2',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Dose from Concentration',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Concentration** is drug amount per product volume — mg/mL being the working dialect (built fully in pct-9). One habit from pct-8-4 returns here as the prerequisite: normalise any "mg per X mL" declaration by dividing through before use, so 80 mg/2 mL is handled as 40 mg/mL. The dose-from-concentration lesson is the volume direction of the basic ratio: it converts an ordered mg into the mL that carries it.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The bridge is the concentration identity rearranged toward volume:

$$
V \\text{(mL)} = \\frac{D \\text{(mg)}}{c \\text{(mg/mL)}}
$$

Why the division (not multiplication): the mL in the strength's denominator must migrate to the answer — and dividing by (mg/mL) is exactly that migration, leaving mL as the surviving unit. Multiplying by (mg/mL) instead would leave mg²/mL: a unit mismatch announcing the inversion instantly.

Two frequency-related declarations extend the arithmetic without changing the bridge. An order written **per administration** converts once; an order written as a **rate** (mg/min or mg/h) converts to a *rate* of volume (mL/min or mL/h) by the same ratio — the time unit simply rides along, e.g. mg/min ÷ (mg/mL) = mL/min. The declared period matters: "400 mg in four divided doses" is 100 mg per administration, each then converted separately. The declared volume is the measurable quantity — its unit (mL, or L for larger bags) must match the syringe, bag, or pump that will carry it, converting L ↔ mL before the final figure is stated.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- mL = mg ÷ (mg/mL); division migrates the mL from the strength into the answer.
- Multiplying by a concentration leaves mg²/mL — an instant inversion alarm.
- Rates convert by the same ratio: mg/min ÷ (mg/mL) = mL/min (time rides along).
- Divided-dose orders resolve to per-administration amounts before conversion.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
V = \\frac{D}{c} \\qquad r_V \\text{(mL/h)} = \\frac{R \\text{(mg/h)}}{c \\text{(mg/mL)}} \\qquad D_{\\text{per admin}} = \\frac{D_{\\text{total}}}{n}
$$

$V$ = volume, $D$ = dose, $c$ = concentration, $R$ = dose rate, $r_V$ = flow rate, $n$ = administrations. Each verifies by unit collapse: mg ÷ (mg/mL) = mL; (mg/h) ÷ (mg/mL) = mL/h.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — plain conversion (illustrative).**

**Given:** order 250 mg; product 50 mg/mL. **Find:** the volume.

1. Collapse: 250 mg ÷ 50 mg/mL.
2. Calculate: 250 ÷ 50 = **5 mL** (mg ÷ (mg/mL) = mL ✓).
3. Reverse-check: 5 mL × 50 mg/mL = 250 mg ✓.

**Example 2 — normalise the strength first (illustrative).**

**Given:** order 45 mg; product labelled 150 mg per 2 mL.

1. Normalise: 150 ÷ 2 = 75 mg/mL.
2. Volume: 45 ÷ 75 = **0.6 mL**.

**Example 3 — rate order (illustrative).**

**Given:** rate 2 mg/min; product 2 mg/mL.

1. Same ratio, time riding along: 2 mg/min ÷ 2 mg/mL = **1 mL/min**.
2. If the pump is calibrated in mL/h: × 60 = **60 mL/h** — the exact chain used in pct-12-6's check question, re-derived here from the bridge.

**Interpretation:** one identity, three costumes — bolus volume, normalised strength, rate. Every answer closes with the reverse check; every rate names its time unit explicitly. All values are illustrative teaching numbers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Concentration-to-volume conversion is the daily bridge between prescriptions and the physical products on the shelf — syringes are calibrated in mL, orders are written in mg, and this ratio is the only thing connecting them. The habits: normalise the printed strength, collapse the units before trusting the number, and state the rate's time unit whenever the order carries one.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) Order 120 mg; product 40 mg/mL: compute the volume and verify by the reverse calculation.
2. (Illustrative) Order 300 mg; product labelled 600 mg per 3 mL: normalise first, then compute — and state why entering "600" directly (treating it as mg/mL) would shrink the answer to one-third of the correct volume.
3. (Illustrative) Rate 3 mg/min from a 6 mg/mL product: express the flow in mL/min, then in mL/h for a pump calibrated hourly.
4. Setup-recognition: an order reads "800 mg in 4 divided doses" with stock 50 mg/mL. What is converted *first* — and what per-administration volume results?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- V = D ÷ c; the division migrates mL out of the strength and into the answer.
- Normalise "mg per X mL" declarations before dividing.
- Rates: mg/min ÷ (mg/mL) = mL/min; ×60 for hourly pumps.
- Divided orders → per-administration mg → then convert.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Dose from Available Strength (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-3',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Dose from Available Strength',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Two terms that this lesson separates deliberately. **Available strength** is the strength the product on the shelf actually declares — which may differ from the strength an order seems to assume. **Stock strength** is the same idea for the specific container stocked. The calculating question of this lesson: the ordered amount and the available strength do not match — resolve how much product delivers the order, *including* when the mismatch is in units (mg vs g, mg vs mcg) rather than in numbers.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The bridge is the pct-10-1 ratio with one discipline added: **reconcile the units of order and stock before dividing**, because real shelves mix conventions — grams on some labels, milligrams on others, micrograms on potent ones. The workflow:

1. Write the order in its own units (e.g. 0.5 g).
2. Write the available strength in its own units (e.g. 250 mg per capsule).
3. Convert one side to the other (0.5 g = 500 mg) — the conversion lives *outside* the ratio.
4. Divide: $\\dfrac{500 \\text{ mg}}{250 \\text{ mg/capsule}}$ = 2 capsules.

Why the reconciliation must precede the ratio: dividing mg by g (or by mcg) silently produces a factor of 1,000 in either direction — the classic gram/milligram dispensing error, which is invisible in the arithmetic and visible only in the units. The collapse check makes it visible: mg ÷ (mg/capsule) must cancel to capsules; a mg/g or mg/mcg remnant in the setup means the conversion step was skipped.

When the available strength is declared **per volume** (mg per mL, mg per 5 mL), the same lesson's ratio resolves to volume instead of count — the pct-10-2 bridge. And when several products could each deliver the order, the calculation per product is the same; what changes is the answer's unit (tablets vs mL), which is why the setup names the product's unit *before* arithmetic begins.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Reconcile order units and stock units before dividing — conversions live outside the ratio.
- mg ÷ g (or mcg) hides a factor of 1,000; the collapse check exposes it.
- Per-unit strengths → count answers; per-volume strengths → mL answers.
- The setup names the product's unit first; arithmetic never changes it.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{units} = \\frac{D}{H} \\quad (\\text{same units}) \\qquad V = \\frac{D}{c}
$$

with the standing precondition $D$ and $H$ (or $c$) expressed in **matching** units. The conversion factor between their scales (1 g = 1,000 mg; 1 mg = 1,000 mcg) is applied as a separate, visible step.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — gram order, milligram stock (illustrative).**

**Given:** order 0.5 g; stock 250 mg capsules. **Find:** the capsules.

1. Convert: 0.5 g × 1,000 = 500 mg.
2. Ratio: 500 mg ÷ 250 mg/capsule = **2 capsules** (mg cancels ✓).

**Example 2 — microgram order, milligram stock (illustrative).**

**Given:** order 600 mcg; stock 0.3 mg tablets.

1. Reconcile (either direction): 600 mcg = 0.6 mg, or 0.3 mg = 300 mcg.
2. Ratio: 0.6 mg ÷ 0.3 mg/tablet = **2 tablets**.

**Example 3 — per-volume stock with an unusual tail (illustrative).**

**Given:** order 200 mg; stock 125 mg per 5 mL.

1. Normalise: 125 ÷ 5 = 25 mg/mL.
2. Volume: 200 ÷ 25 = **8 mL**. Reverse-check: 8 × 25 = 200 mg ✓.

**Interpretation:** the arithmetic is the pct-10-1 ratio throughout; the lesson's content is the *reconciliation discipline* — three unit pairs (g/mg, mcg/mg, mg-per-5 mL) each resolved before the division. All values are illustrative teaching numbers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Stocks genuinely mix conventions — gram labels sit beside milligram labels on the same shelf, and potent drugs arrive in micrograms. The reconciliation habit this lesson drills (read both units aloud, convert one visibly, then divide) is the standard defence against the order-of-magnitude dispensing errors that unit mismatch produces.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) Order 1.2 g; stock 400 mg tablets: reconcile, then compute — and state the factor that would have leaked in had the division run on 1.2 ÷ 400.
2. (Illustrative) Order 250 mcg; stock 0.125 mg tablets: compute the tablets, showing the reconciliation in both directions.
3. (Illustrative) Order 350 mg; stock 175 mg per 5 mL: normalise, compute the mL, and verify by reverse calculation.
4. Error-detection: a setup reads "0.4 g ÷ 200 mg" without conversion and reports "0.002". Which discipline was skipped, what is the correct reconciled answer, and why did the unit collapse fail to warn here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Convert order↔stock units *before* the ratio; the conversion is a visible step.
- mg/g and mg/mcg mismatches hide ×1,000 errors; collapse checks expose skipped conversions.
- Per-volume stocks normalise first, then V = D ÷ c with a reverse check.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Dose Based on Age (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-4',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Dose Based on Age',
    tier: 'B',
    verifyFlags: [
      "Young's rule (age ÷ (age + 12) × adult dose) is taught here as a HISTORICAL convention, retained for examination familiarity. Modern practice scales pediatric doses by weight or BSA rather than age; no current protocol should be inferred from this convention.",
    ],
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Age-based scaling belongs to the history of pediatric dosing: before weight-based practice became standard, doses were estimated from age alone. The surviving convention is **Young's rule** — a *convention of examination practice, not modern therapeutics* (flagged):

$$
\\text{child dose} = \\frac{\\text{age (years)}}{\\text{age} + 12} \\times \\text{adult dose}
$$

The structure is worth reading rather than memorising: the fraction age/(age+12) rises from 0 toward 1 as age grows — a 2-year-old receives 2/14 of the adult amount, a 12-year-old half — encoding the idea that the dose approaches the adult value with maturity. The "+12" is the convention's fixed constant; it is not derived and not adjusted.

The important pharmaceutical skill this lesson actually teaches is **proportional reasoning about scaling factors**: any scaling convention produces a dimensionless fraction, and the fraction multiplies the reference dose — the same pattern the renal-adjustment model used in pct-12-4 (patient/reference ratio) and the same reason the fraction's direction must be reasoned, not remembered. Because age is a *crude* proxy for size, the lesson's honest takeaway is methodological: know the convention for the arithmetic it exercises, and know that weight- and BSA-based scaling (next two lessons) displaced it in practice. All doses in the example are illustrative teaching numbers; nothing here is a dosing recommendation.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Young's rule (flagged historical convention): child dose = age/(age + 12) × adult dose.
- The scaling fraction is dimensionless and rises toward 1 with age.
- The fraction multiplies the reference (adult) dose — the pct-12-4 scaling pattern.
- Age scaling is historical; weight and BSA displaced it in modern practice.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
D_{\\text{child}} = \\frac{A}{A + 12} \\times D_{\\text{adult}}
$$

$A$ = age in years; the fraction is dimensionless, so the dose keeps the adult dose's units. No unit cancellation is available in this convention — the check is the fraction's **range**: it must lie strictly between 0 and 1 for any age above 0.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the convention applied (illustrative adult dose 500 mg).**

**Given (illustrative):** age 4 years; adult dose 500 mg. **Find:** the scaled dose.

1. Fraction: 4 ÷ (4 + 12) = 4/14 = 2/7 ≈ 0.286.
2. Dose: 500 × 2/7 = 1,000/7 ≈ **142.9 mg** (≈ 143 mg rounded sensibly).

**Example 2 — the age-trend check (illustrative).**

Same 500 mg adult dose; ages 2 and 12:

- Age 2: 2/14 × 500 = 500/7 ≈ **71.4 mg**.
- Age 12: 12/24 × 500 = **250 mg** (exactly half — the fraction's 1/2 crossing point).

**Interpretation:** the trend is the verification: younger → smaller fraction → smaller dose, monotonically. A result moving against the trend (or exceeding the adult dose) signals an inverted or mis-entered fraction. Both examples are pure convention arithmetic on illustrative values — the flag marks what the convention is.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Examinations retain age-based questions, so the arithmetic is worth owning; practice has moved on, and the professional posture is to recognise the convention for what it is. When an age-based figure appears in real work, the modern reflex is to check whether a weight- or BSA-based expression exists — the two lessons that follow this one supply exactly that.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) Adult dose 240 mg, age 6 years: compute the Young's-rule dose and confirm the fraction lies between 0 and 1.
2. Trend-reasoning: without computing, state whether an age-8 scaled dose exceeds an age-3 scaled dose from the same adult dose — and justify from the fraction's structure.
3. (Illustrative) A scaled dose comes out *above* the adult dose. Diagnose the two most likely setups that produce this and name the range check that catches them.
4. Conceptual: why does the fraction have no units, and what does that imply for the dose's units?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Young's rule: age/(age+12) × adult dose — flagged historical convention.
- The fraction is dimensionless, rising toward 1; range check (0,1) is the verifier.
- Younger → smaller dose, monotonically — the trend is the error-catcher.
- Modern practice scales by weight or BSA; the convention survives in examinations.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Dose Based on Body Weight (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-5',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Dose Based on Body Weight',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `The mg/kg convention from pct-12-1 is the foundation: **mg/kg** states the amount per administration, **mg/kg/day** the total daily amount (which must then be divided by the doses per day). One addition this lesson makes: weight itself often arrives in the wrong unit — pounds on charts — and pounds → kilograms (÷ 2.2, the standard teaching conversion) is a *prerequisite* conversion, run before any dose arithmetic.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The computation is the weight bridge from pct-12-1 — multiplication with a unit collapse:

$$
\\text{dose (mg)} = W \\text{(kg)} \\times D \\text{(mg/kg)}
$$

The lesson's distinct task is the **full chain** when the weight needs converting and the product needs resolving. The pipeline:

1. **Convert the weight** if it arrives in lb: kg = lb ÷ 2.2 (visible, separate step).
2. **Resolve the dose expression's convention** (per dose vs per day).
3. **Multiply** with the collapse check: kg × mg/kg = mg.
4. **Bridge to product**: mg ÷ (mg/mL or mg/tablet) → mL or tablets (the pct-10-1/2 bridges).

Each arrow is one earlier lesson; the skill of this one is chaining them in the right order without letting a unit mismatch survive any step. The trap inventory: entering pounds as kilograms (a 2.2× overdose in the example's terms), multiplying by the per-day figure when the per-dose figure is wanted (the pct-12-1 double-dose trap), and converting the weight *after* the dose multiplication (harmless arithmetically, but it breaks the collapse check's clarity — convert inputs first).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- dose = W(kg) × D(mg/kg); kg × mg/kg = mg — the collapse verifies the setup.
- lb → kg first (÷ 2.2, teaching conversion), before any dose arithmetic.
- mg/kg/day → divide by doses per day before bridging to product.
- Full chain: convert weight → resolve convention → multiply → bridge to product.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
W \\text{(kg)} = \\frac{W \\text{(lb)}}{2.2} \\qquad D = W \\times d \\qquad V = \\frac{D}{c}
$$

$d$ = mg/kg (or mg/kg/day ÷ n); each form is a prior lesson's bridge; the chain is their composition, with every unit collapse checked at its own step.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example — the full chain (all values illustrative).**

**Given:** child 44 lb; expression 15 mg/kg per dose; stock 100 mg/2 mL. **Find:** the volume per dose.

1. Weight: 44 ÷ 2.2 = **20 kg**.
2. Dose: 20 kg × 15 mg/kg = **300 mg** (kg × mg/kg = mg ✓).
3. Normalise stock: 100 ÷ 2 = 50 mg/mL.
4. Volume: 300 ÷ 50 = **6 mL**.
5. Reverse-checks: 6 × 50 = 300 mg ✓; 300 ÷ 15 = 20 kg ✓ (weight recovered).

**Interpretation:** four lessons in five steps, each with its own collapse or reverse check — and each step's answer feeding the next. Had the pounds entered step 2 directly (44 × 15), the dose would have been 660 mg: a 2.2× error whose only alarm is the collapse check run *with* the correct units. Illustrative teaching values throughout.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Weight-based dosing is standard practice for pediatric and weight-tailored therapy, and the full chain — chart weight, expression, stock strength, measurable volume — is the daily dispensing computation. The lesson's discipline (convert inputs first, check each collapse at its own step) is what makes the chain auditable when a colleague reviews it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) 55 lb; 12 mg/kg per dose; stock 25 mg/mL: run the full chain to the volume, with a reverse check.
2. (Illustrative) 33 lb; 20 mg/kg/day in 2 divided doses; stock 50 mg/5 mL: resolve the convention, then compute each dose's volume.
3. Error-detection: a colleague computes 44 × 15 = 660 mg for the worked example's data. Which input unit was skipped, by what factor does the answer err, and which check (run correctly) catches it?
4. Conceptual: why convert the weight *before* the dose multiplication rather than after? What does the practice protect beyond the arithmetic itself?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Chain: lb ÷ 2.2 → kg; kg × mg/kg → mg; ÷ (mg/mL) → mL.
- Convention first (per dose vs per day ÷ n), conversion first, multiplication last.
- Reverse-check both ends: volume × c recovers mg; mg ÷ d recovers kg.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Dose Based on Body-Surface Area (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-6',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Dose Based on Body-Surface Area',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `BSA scaling restates the pct-12-2 foundation in dose-calculation terms: surface area scales more slowly than weight, so per-m² expressions exist where weight scaling is not the chosen principle; **Mosteller** is the commonly taught BSA formula (flagged convention there and here): $\\text{BSA} = \\sqrt{h \\times W / 3600}$, with $h$ in cm and $W$ in kg.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The dose step is the same multiplication pattern as weight-based dosing, wearing m²:

$$
\\text{dose (mg)} = \\text{BSA (m}^2\\text{)} \\times D \\text{(mg/m}^2\\text{)}
$$

with the collapse m² × mg/m² = mg verifying it. Two situations distinguish this lesson from pct-12-2's protocol-verification framing. **Situation 1 — BSA given:** a charted BSA arrives with the order; the dose is one multiplication, and the check is the collapse. **Situation 2 — BSA not given:** compute it from charted height and weight first (Mosteller), carrying it **unrounded** into the dose multiplication and rounding only the final dose — the rounding discipline pct-12-2 established, with the same 1-digit stakes.

The bridge to product is then the familiar division: mg ÷ (mg/mL) or mg ÷ (mg/tablet). The chain — BSA computation → dose multiplication → product bridge — is the weight-based lesson's chain with m² in place of kg, which is the point: one discipline, many scaling dialects. The traps that transfer: rounding BSA early (shifts the dose), entering height in metres or weight in pounds into Mosteller (both silently corrupt the 3600 constant's work), and reading mg/m² as mg/kg (a category error the units catch immediately).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- dose = BSA × mg/m²; m² × mg/m² = mg — the collapse verifies the step.
- No charted BSA → compute via Mosteller (cm, kg, 3600) before dosing.
- Carry BSA unrounded into the dose step; round the final dose only.
- The chain (scale → mg → bridge to product) is identical to weight-based dosing in structure.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{BSA} = \\sqrt{\\frac{h \\times W}{3600}} \\qquad D = \\text{BSA} \\times d \\qquad V = \\frac{D}{c}
$$

$d$ = mg/m²; the combined no-early-rounding form:

$$
D = d \\times \\sqrt{\\frac{h \\times W}{3600}}
$$

evaluates BSA and dose in one expression — the rounding-safe habit made automatic.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example — full chain with an exact-square teaching case (illustrative).**

**Given:** height 180 cm, weight 80 kg; expression 250 mg/m²; stock 100 mg/2 mL. **Find:** the volume.

1. BSA: √(180 × 80 ÷ 3600) = √4 = **2.00 m²** (exact).
2. Dose: 2.00 m² × 250 mg/m² = **500 mg** (m² × mg/m² = mg ✓).
3. Normalise stock: 100 ÷ 2 = 50 mg/mL.
4. Volume: 500 ÷ 50 = **10 mL**. Reverse-check: 10 × 50 = 500 mg ✓.

**Interpretation:** the exact square isolates the method; a non-square case (170 cm/60 kg → BSA 1.6833… → dose ≈ 420.8 → round sensibly at the end) exercises the rounding discipline exactly as pct-12-2's Example 2 did. The chain here ends one step further on — at the measurable volume — which is what makes this a dose-calculation lesson rather than a BSA lesson. Illustrative teaching values throughout.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Per-m² expressions appear where protocols specify them (notably oncology, taught properly in later courses); the pharmacist's contribution is the verifiable chain this lesson drills — recompute the BSA, collapse the dose step, bridge to the measurable volume, and confirm the units of every survivor. The rounding habit (once, at the end) is the same discipline the concentration and BSA lessons installed.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) Charted BSA 1.73 m²; expression 200 mg/m²; stock 50 mg/mL: compute the dose and the volume, with collapses shown.
2. (Illustrative) Height 160 cm, weight 40 kg; expression 150 mg/m²: compute the BSA (verify by squaring back), the dose, and the volume from a 25 mg/mL stock.
3. Error-detection: a colleague enters height in metres (1.8) and weight in kilograms into Mosteller. What does the 3600 constant then silently fail to do, and how does the squaring-back check expose it?
4. Conceptual: in what structural sense is this lesson the same calculation as pct-10-5? Answer in terms of the chain, not the units.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Chain: Mosteller (cm, kg) → m²; × mg/m² → mg; ÷ (mg/mL) → mL.
- Exact squares teach the method; the general case rounds once, at the end.
- Verify the root by squaring back; verify the volume by reverse multiplication.
- Same chain as weight-based dosing — m² replaces kg, nothing else moves.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Divided Doses (Tier A)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-7',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Divided Doses',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **divided dose** order states the **total daily amount** and the number of portions the day is split into; the calculation is one division:

$$
\\text{dose per administration} = \\frac{\\text{total daily dose}}{\\text{doses per day}}
$$

Why division: the daily total is the *sum* of equal portions, so each portion is the total shared equally — the units confirm it (mg ÷ count = mg per administration). The frequency vocabulary is the lesson's other content: **twice daily** = 2 portions, **three times daily** = 3, **four times daily** = 4; every other convention (hours-between, "every 12 h") converts to a count before dividing (q12h on a 24 h day = 2).

The standing trap, met throughout the block and formalised here: dividing *or* multiplying in the wrong direction. The direction check is the trend itself — the per-administration dose can **never exceed** the daily total it came from. A result above the total signals multiplication where division was wanted.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- per-administration = daily total ÷ doses per day; the portion never exceeds the total.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
D_{\\text{per admin}} = \\frac{D_{\\text{daily}}}{n}
$$

$n$ = number of administrations per day (from the stated frequency, counted or converted from hours-between).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (illustrative).**

**Given:** total daily dose 600 mg, in 4 divided doses. **Find:** each dose.

1. Divide: 600 ÷ 4 = **150 mg per dose**.
2. Direction check: 150 < 600 ✓; reassembly: 4 × 150 = 600 mg ✓.

**Interpretation:** the reassembly is the division's inverse — portions × count must rebuild the total exactly. Illustrative teaching value.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Divided-dose instructions appear on prescriptions constantly; the label directions, the quantity dispensed, and the daily-total checks all run on this one division — plus the reassembly habit when verifying that a computed regimen actually sums to the ordered daily amount.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) 900 mg daily in 3 divided doses: compute each dose and verify by reassembly.
2. Frequency-conversion: "every 6 hours" on a 24-hour day — how many administrations, and what does that make the divisor?
3. Error-detection: a colleague reports "1,200 mg per dose" from a 600 mg daily order in 2 divided doses. Which operation ran backwards, and which trend check catches it?
4. Conceptual: why must the per-administration amount never exceed the daily total? State it in terms of what the daily total *is*.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Divide the daily total by the day's dose count; portions can never exceed the total.
- Frequency words and q-hours both resolve to a count before dividing.
- Reassembly (n × portion = total) is the inverse check.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Single and Multiple Doses (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-8',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Single and Multiple Doses',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The distinction is temporal, not arithmetic: a **single dose** is one administration with no schedule — the calculation ends when the per-administration amount is resolved (the pct-10-1/2 bridges). A **multiple-dose schedule** repeats that amount on a frequency, and the new quantities are *totals over time*: total over a course = dose × administrations; administrations = frequency × days.

$$
\\text{total} = D_{\\text{per admin}} \\times n_{\\text{per day}} \\times \\text{days}
$$

The unit collapse confirms the structure: mg × (1/day) × day = mg. The same bridge run backwards supplies the schedule audits: dividing a dispensed quantity by the daily usage yields **day's supply** (the pct-12-7 inverse), and reassembling quantity ÷ days ÷ frequency yields the per-administration dose — each an inverse check on the others.

Two recognition skills complete the lesson. First, **reading which quantity the question asks for**: "how many tablets for 7 days?" wants the total; "how many per dose?" wants the portion; the mg arithmetic is identical, the arrangement differs. Second, **the schedule's arithmetic footprint**: frequency enters as a multiplier when building totals (dose → total) and as a divisor when dismantling them (total → dose) — the same bidirectional pattern as pct-10-7's division, generalised over days.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Single dose: end at the per-administration amount (pct-10-1/2 bridges).
- Totals over time: dose × per-day × days; collapses as mg × 1/day × day = mg.
- Inverses: day's supply = quantity ÷ daily usage; per-dose = total ÷ days ÷ per-day.
- Frequency multiplies when building totals and divides when dismantling them.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
T = D \\times n \\times d \\qquad S = \\frac{Q}{n} \\qquad D = \\frac{T}{n \\times d}
$$

$T$ = course total, $n$ = administrations per day, $d$ = days, $Q$ = quantity dispensed, $S$ = day's supply. Each is the others' rearrangement — verified by unit collapse (mg × 1/day × day = mg; units ÷ (units/day) = days).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example — one regimen, three questions (illustrative: 250 mg per dose, 3 times daily, 7 days, 250 mg tablets).**

1. **Per dose:** 250 mg ÷ 250 mg/tablet = **1 tablet** (the single-dose question).
2. **Course total:** 1 tablet × 3/day × 7 days = **21 tablets** (tablets × 1/day × day = tablets ✓).
3. **Day's supply from a 60-tablet dispensed quantity:** 60 ÷ 3 = **20 days**; cross-check: 20 × 3 = 60 ✓.

**Interpretation:** the three answers are one regimen read in three directions — portion, build-up, and dismantle. The reassembly and division cross-checks close every direction. Illustrative teaching values throughout.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every dispensing transaction touches this lesson: the label's directions imply the frequency, the quantity dispensed supplies the totals, and the day's supply recorded for the record is the inverse computation. The bidirectional fluency — building totals and dismantling them — is what lets a pharmacist spot when a stated quantity cannot cover the stated course.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) 500 mg per dose, 2 times daily, 10 days, 500 mg tablets: compute the per-dose tablets, the course total, and the day's supply from 40 dispensed tablets.
2. (Illustrative) A quantity of 24 capsules covers 4 times daily for 6 days — verify, then state which inverse confirms it.
3. Recognition: two questions read "250 mg three times daily for 5 days" — one asks the per-dose tablets, one the total for the course. Which arrangement does each want, and what distinguishes them in the wording?
4. Conceptual: why does frequency *multiply* in the total but *divide* in the day's supply? Answer in terms of what each quantity is.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Total = dose × per-day × days; day's supply = quantity ÷ per-day — inverses, cross-checking.
- Single-dose questions end at the portion; schedule questions build or dismantle totals.
- Frequency multiplies building up, divides tearing down.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 9 — Maximum and Minimum Doses (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-9',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Maximum and Minimum Doses',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Dose **ranges** state a floor and a ceiling: a **minimum dose** below which the preparation is not expected to produce its intended effect, and a **maximum dose** above which it should not be given. Both figures are properties of the product's authorised information for the specific preparation and patient group — this lesson teaches the *arithmetic of comparing* computed doses against such bounds, never the bounds themselves (which are always quoted from the reference at hand, illustrative here).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The computational content is a **comparison discipline**, and its mechanics deserve the same rigour as any calculation:

1. **Compute** the candidate dose by whichever bridge the order requires (all prior lessons supply it).
2. **Express both** quantities — candidate and bound — in the **same units and the same time frame**. A per-dose figure compares against a per-dose maximum; a daily total against a daily maximum; a mg figure against a mg bound. Mixing frames (comparing a per-dose amount to a daily maximum) produces false alarms and false comfort alike.
3. **Compare** and classify: below the minimum → flag; within range → proceed; above the maximum → flag.

$$
\\text{within range} \\iff D_{\\min} \\le D \\le D_{\\max}
$$

The comparisons are dimensionless only after unit reconciliation — the pct-10-3 lesson's discipline applied to bounds: mg vs mcg, per-dose vs per-day, each reconciled *before* the comparison sign is trusted. Weight- and age-scaled bounds multiply the same way the doses do (a mg/kg maximum applied to a weight yields a mg bound), reusing the pct-10-5 bridge verbatim. The professional output of the step is a **decision**: proceed, or intervene — the arithmetic merely informs it; the lesson's safety framing lives in this boundary between calculation and action.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Range check: D_min ≤ D ≤ D_max — after expressing all terms in one unit and one frame.
- Per-dose bounds compare with per-dose amounts; daily bounds with daily totals.
- Scaled bounds (mg/kg, mg/m²) become mg bounds through the pct-10-5/6 multiplication.
- The comparison informs a decision; it is not itself the decision.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
D_{\\min} \\le D \\le D_{\\max} \\qquad D_{\\max} = W \\times d_{\\max} \\text{(if weight-scaled)}
$$

The bounds carry the same units as the dose being compared; scaled bounds convert via the standard bridges. All comparisons require prior unit reconciliation (mg ↔ mcg, per-dose ↔ per-day).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — plain comparison (illustrative bounds).**

**Given:** computed dose 450 mg; stated (illustrative) range 250–500 mg per dose. **Find:** the classification.

1. Same units, same frame (mg, per dose) ✓.
2. Compare: 250 ≤ 450 ≤ 500 → **within range — proceed**.

**Example 2 — a frame mismatch diagnosed (illustrative).**

**Given:** computed daily total 900 mg; stated (illustrative) per-dose maximum 500 mg.

1. Naive comparison: 900 > 500 → "above maximum"?
2. Frame check: the bound is **per dose**; the 900 is **per day**. In 2 divided doses, each dose is 900 ÷ 2 = 450 mg.
3. Correct comparison: 450 ≤ 500 → **within range**.

**Interpretation:** Example 2 is the lesson: the frame reconciliation changed the verdict. The naive path would have triggered a false intervention — and the reverse path (comparing a per-dose figure to a daily bound) would suppress a true one. Illustrative teaching values throughout; real bounds always come from the authorised product information.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Range-checking is a standing professional duty: every computed dose is, in practice, compared against the product's authorised bounds before dispensing. The habits this lesson drills — reconcile units and frames first, classify second, intervene on evidence — are exactly the comparison discipline clinical practice demands.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) Computed 300 mg; range 200–350 mg per dose: classify, showing the frame check.
2. Frame-diagnosis (illustrative): computed per-dose 250 mg; stated daily maximum 1,000 mg in 4 divided doses. Reconcile the frame, then classify.
3. (Illustrative) Weight 20 kg; weight-scaled maximum 40 mg/kg/day: express the daily mg bound, then classify a computed 900 mg/day in 3 divided doses (each 300 mg).
4. Conceptual: why can comparing a per-dose figure against a daily maximum be *more dangerous* than not checking at all? Answer in terms of false alarms vs suppressed flags.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Classify only after one unit and one frame: D_min ≤ D ≤ D_max.
- Divided-dose frame fixes: daily ÷ n before comparing per-dose bounds.
- Scaled bounds convert through the weight/BSA bridges.
- The comparison informs the decision — it is not the decision.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 10 — Pediatric Dose Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-10-10',
    courseId: 'pct-201',
    topicId: 'pct-10',
    nodeType: 'subtopic',
    title: 'Pediatric Dose Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This capstone composes the block's scaling and bridging tools; nothing new enters the arithmetic:

- the mg/kg bridge (pct-10-5) and the BSA bridge (pct-10-6) — the two *modern* scaling principles;
- Young's rule (pct-10-4) as the *historical* age convention, retained for examination familiarity;
- divided doses (pct-10-7) and the product bridges (pct-10-1/2).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Pediatric dose calculation is **selection before arithmetic**: the methodological lesson of the block is that pediatric doses are scaled doses, and the scaling principle must be recognised or chosen before any bridge runs. The decision sequence:

1. **What does the reference express?** A mg/kg expression → the weight bridge; a mg/m² expression → the BSA bridge; a stated per-dose amount → no scaling bridge at all (go straight to the product bridge).
2. **Which inputs are charted?** Weight in lb → convert first (pct-10-5); height and weight with no charted BSA → compute it (pct-10-6).
3. **What is the schedule?** A daily total in divided doses → resolve per-administration amounts before bridging (pct-10-7).
4. **Bridge to the measurable product**, with the collapse and reverse checks at each step (pct-10-1/2).

The composition is where errors live — not in any single step but in **ordering**: converting the weight after the dose, dividing the daily total after the volume, rounding the BSA before the dose. The check pattern that catches ordering errors is *local verification at every step* (each collapse and each reverse check applied when its step completes, not at the end), because an error introduced in step 1 propagates invisibly through steps 2–4 and invalidates every downstream check. All patient values remain illustrative teaching numbers; the scaling principle, not therapeutics, is what varies between the methods.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Selection first: mg/kg → weight bridge; mg/m² → BSA bridge; stated amount → straight to product bridge.
- Compose in order: convert inputs → scale → divide the schedule → bridge to product.
- Local verification at every step — early errors poison all downstream checks.
- Young's rule remains examination arithmetic only (flagged in pct-10-4).`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
D = W \\times d_{\\text{kg}} \\quad \\text{or} \\quad D = \\text{BSA} \\times d_{\\text{m}^2} \\quad \\text{or} \\quad D = \\frac{A}{A+12} \\times D_{\\text{adult}} \\ (\\text{flagged})
$$

$$
D_{\\text{per admin}} = \\frac{D_{\\text{daily}}}{n} \\qquad V = \\frac{D}{c}
$$

One selection (first row), then schedule resolution, then the product bridge — the composition order is the content.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example — one patient, one order, the full composed chain (all values illustrative).**

**Given:** child 33 lb; expression 20 mg/kg/day in 2 divided doses; stock 50 mg/5 mL. **Find:** the volume per dose.

1. Weight: 33 ÷ 2.2 = **15 kg**.
2. Daily total: 15 kg × 20 mg/kg/day = **300 mg/day** (kg × mg/kg/day = mg/day ✓).
3. Per dose: 300 ÷ 2 = **150 mg**.
4. Normalise stock: 50 ÷ 5 = 10 mg/mL.
5. Volume: 150 ÷ 10 = **15 mL**.
6. Reverse-checks: 15 × 10 = 150 mg ✓; 150 × 2 = 300 mg/day ✓; 300 ÷ 20 = 15 kg ✓ (weight recovered).

**Interpretation:** five lessons composed in one chain — conversion (10-5), scaling (10-5), divided doses (10-7), stock normalisation and product bridge (10-1/2) — with the reassembly checks rebuilding the weight, the daily total, and the per-dose amount from the final volume. The composed chain is the block's summative skill. Illustrative teaching values throughout.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pediatric dispensing concentrates every risk this block has catalogued, which is why the composed chain runs with local verification at every step and a colleague-visible setup. The professional output is not a number but an audited pathway: scaling principle identified, inputs converted, schedule resolved, product bridged, reassembly proven.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) 44 lb; 15 mg/kg/day in 3 divided doses; stock 25 mg/mL: run the composed chain to the per-dose volume, with reassembly checks.
2. Selection (illustrative): an order states "5 mL twice daily" of a 25 mg/5 mL product for a child. Which bridge does *not* run here, and why? (The dose is stated as a volume — verify the mg it carries: 25 mg per dose, 50 mg/day.)
3. Ordering-error diagnosis: a colleague computes the volume from the daily total *before* dividing by the dose count. By what factor does the final volume err, and which local check catches it at the step where it occurs?
4. Conceptual: why does an error in step 1 of the composed chain invalidate the downstream reverse checks as well? Explain in terms of what each check actually verifies.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Select the scaling bridge from the reference's expression; compose in order; verify locally at every step.
- The composed chain: convert → scale → divide the schedule → bridge to product → reassemble.
- Stated-volume orders skip the scaling bridge — verify the mg they carry instead.`,
      },
    ],
  },
];
