import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 7: completes the locked pct-12 group block ("Selected Clinical
 * Calculations"): the Tier D orientation lesson plus all seven children
 * (pct-12-1 … pct-12-7, all Tier C). Node IDs, titles, and the parent topic
 * (pct-4) mirror curriculum.ts exactly; nothing here creates, renames, or
 * reorders curriculum nodes.
 *
 * CLINICAL SAFETY DISCIPLINE (per the approved batch standard):
 *  - Every patient, dose, and concentration in these lessons is an ILLUSTRATIVE
 *    teaching value chosen for clean arithmetic — not prescribing guidance and
 *    not a real product's data.
 *  - Formulas marked as conventions (Mosteller BSA, Cockcroft-Gault, the linear
 *    renal-adjustment proportion, Holliday-Segar / 4-2-1 / 30–35 mL/kg/day) are
 *    standard educational formulas carried in verifyFlags where the exact
 *    convention is source-dependent. Real dose adjustment is drug-specific and
 *    protocol-driven — the lessons say so explicitly rather than implying a
 *    universal rule.
 *  - Arithmetic-derived values are traceable step-by-step; the blanket safety
 *    statement lives here in the orientation, not repeated in every lesson.
 */
export const pct201ClinicalLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // GROUP ORIENTATION (Tier D — overview only; children are the units)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Everything in Topic 4 so far computed a quantity for a *product*. This closing block changes the question: computing a dose for a *patient*. One idea organises all seven lessons — **individualisation**: a dose is not fixed by the drug alone but is *scaled* to the person receiving it, and each child lesson is one scaling principle.

The ladder runs: **Body-Weight Calculations** (scale by kilograms) → **Body-Surface Area** (scale by square metres) → **Creatinine-Related Calculations** (scale by how well the kidneys clear drug) → **Renal Function Calculations** (apply that clearance to adjust the dose) → **Fluid Requirements** (scale maintenance water, not drug) → **Clinical Concentration Calculations** (translate the scaled dose into measurable product) → **Other Introductory Clinical Calculations** (representative everyday patterns: quantity to dispense, day's supply, drip rate).

Two standing rules govern the whole block. First, every number describing a patient or a dose here is an **illustrative teaching value** — selected for clean arithmetic, not copied from a real protocol; genuine dose adjustment is drug-specific and guided by product information and clinical protocols, and the lessons mark each convention where it appears. Second, the calculation machinery is nothing new: proportion, unit cancellation, and the concentration dialects of pct-9 — the skill being taught is *selecting the right scaling principle*, then running familiar arithmetic without unit errors.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Each child lesson is one scaling principle: weight, surface area, renal clearance, fluid, concentration, supply arithmetic.
- Patient values here are illustrative teaching values; conventions are flagged where they appear.
- Safety rail: the units of the answer must answer the question asked.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the seven child lessons are the real study units, in ladder order: Body-Weight → Body-Surface Area → Creatinine-Related → Renal Function → Fluid Requirements → Clinical Concentration → Other Introductory.
- One family idea: individualise by scaling — pick the right scaling principle, then run proportion and unit checks exactly as in pct-9 and pct-11.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Body-Weight Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Body-Weight Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Two dose-expression conventions must be distinct before any arithmetic:

- **mg/kg** — the amount given *per administration* (or per procedure).
- **mg/kg/day** — the amount given *per day in total*, which must then be **divided** by the number of doses per day to obtain each individual dose.

Confusing "per dose" with "per day" is the classic error of this lesson type; every worked example below states which convention it is using.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Body-weight dosing scales the amount of drug to the size of the patient, on the assumption that the amount needed rises roughly in proportion to body mass. The computation is a single multiplication — but the pharmaceutical skill is in the surrounding discipline:

$$
\\text{dose (mg)} = \\text{weight (kg)} \\times \\text{dose/kg (mg/kg)}
$$

Three habits make the multiplication safe. First, **confirm the convention**: mg/kg (per dose) or mg/kg/day (total daily, then divide) — the two produce answers differing by the dosing frequency. Second, **use an accurate weight**: the weight that enters the formula must be the patient's actual weight in kilograms (a weight recorded in pounds is a unit-conversion step, not a formality). Third, **check plausibility**: the computed dose is later compared against the product's available strengths — an answer that cannot be measured with available products signals either an arithmetic slip or a convention mistake. Where a maximum cap applies, the working dose is the *smaller* of the weight-based amount and the cap — a comparison step, not a new formula.

Units verify the whole structure: kg × mg/kg collapses to mg, exactly as in every proportion of Topic 4.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- dose = weight × dose/kg; kg × mg/kg = mg (unit collapse proves the arrangement).
- mg/kg = per administration; mg/kg/day = total daily → divide by doses per day.
- Where a cap exists, the working dose = min(weight-based dose, cap).
- The arithmetic is trivial; the safety lives in convention, weight accuracy, and plausibility.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{dose (mg)} = W \\text{(kg)} \\times D \\text{(mg/kg)}
$$

$$
\\text{dose per administration (mg)} = \\frac{W \\text{(kg)} \\times D_{\\text{day}} \\text{(mg/kg/day)}}{n \\text{ (doses/day)}}
$$

$$
\\text{daily total (mg)} = W \\text{(kg)} \\times D_{\\text{day}} \\text{(mg/kg/day)}
$$

All forms are dimensionally self-checking: mg/kg × kg = mg; the divided form's units are still mg per administration.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — per-dose convention.**

**Given (illustrative):** patient weight 18 kg; dose expression 15 mg/kg per dose. **Find:** the dose per administration.

1. Formula: dose = W × D = 18 kg × 15 mg/kg.
2. Calculate: 18 × 15 = 270; units: kg × mg/kg = mg. ✓
3. **Answer: 270 mg per dose.**

**Example 2 — daily convention with divided doses.**

**Given (illustrative):** weight 24 kg; dose expression 20 mg/kg/day in **2 divided doses**. **Find:** each dose.

1. Daily total: 24 kg × 20 mg/kg/day = 480 mg/day.
2. Per dose: 480 mg ÷ 2 = **240 mg per dose**.

**Interpretation:** the two examples are one identity read under different conventions. Had Example 2's expression been misread as "20 mg/kg per dose", the dose would have been 480 mg per administration — exactly double the intended daily-per-dose amount. The convention check, not the multiplication, is where this lesson is won or lost. (All values are illustrative teaching numbers, exactly computable.)`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Weight-based expressions are the everyday language of paediatric and weight-tailored dosing. The dispensing checks this lesson builds: confirm which convention the prescription intends, confirm the weight on file is current and in kilograms, and confirm the computed amount is measurable with the available product strengths. Each check is a convention or unit inspection — the multiplication is the easy part.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A prescription states "12 mg/kg per dose" for a 32 kg patient (illustrative). Compute the dose, showing the unit collapse.
2. A 24 kg patient is prescribed (illustratively) 60 mg/kg/day in 3 divided doses. Compute each dose — and state which convention step, if skipped, would produce exactly three times the intended per-dose amount.
3. Conceptual: why is "per dose" vs "per day" a convention check rather than a unit conversion? What information distinguishes them on a prescription?
4. Formula-selection: a cap of 500 mg (illustrative) applies to the drug in Example 1. For a 40 kg patient, which quantity is the working dose — 40 × 15 = 600 mg, or the cap — and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- dose = W × D; the unit collapse (kg × mg/kg = mg) verifies the arrangement.
- Distinguish mg/kg (per dose) from mg/kg/day (total daily ÷ number of doses).
- Cap: working dose = min(weight-based, cap) — a comparison, not a formula.
- Convention check first, weight accuracy second, plausibility third, multiplication last.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Body-Surface Area (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Body-Surface Area',
    tier: 'C',
    verifyFlags: [
      'The Mosteller formula is the commonly taught BSA convention, chosen for its clean arithmetic; other published formulas (e.g. Du Bois, Haycock) exist and can give slightly different values. Authoritative work must quote the formula specified by the relevant protocol or product information.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `One prerequisite idea: **surface area does not scale like weight**. Doubling a patient's weight does not double their body surface — surface area grows more slowly than mass (it scales closer to mass^(2/3)). That is precisely why a separate scaling principle exists: for some medicines, the dose is expressed per square metre of body surface (**mg/m²**) instead of per kilogram. Computing the area itself needs height *and* weight, combined through a published formula.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The most commonly taught BSA formula is the **Mosteller formula**:

$$
\\text{BSA (m}^2\\text{)} = \\sqrt{\\frac{\\text{height (cm)} \\times \\text{weight (kg)}}{3600}}
$$

(The 3600 is a fixed constant of the convention; other published formulas use different constructions — see this lesson's verify flag.)

Once BSA is known, the dose arithmetic is the same single multiplication as the weight-based lesson, in a new unit:

$$
\\text{dose (mg)} = \\text{BSA (m}^2\\text{)} \\times \\text{dose/m}^2 \\text{(mg/m}^2\\text{)}
$$

Two disciplines govern the working. First, **rounding discipline**: carry the BSA unrounded (or to at least 4 significant figures) *into* the dose multiplication, and round only the final dose — rounding BSA early shifts the answer. Second, **unit collapse as verification**: m² × mg/m² = mg; if the units do not collapse to the dose unit, the arrangement is wrong. The square root itself is ordinary arithmetic, but it is the step most sensitive to calculator entry errors — re-derive one worked example by hand before trusting a result.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mosteller: BSA = √(height cm × weight kg ÷ 3600) — a convention among several (flagged).
- dose = BSA × mg/m²; m² × mg/m² = mg (unit collapse).
- Carry BSA unrounded into the dose step; round the final dose only.
- BSA ≠ weight scaling: area grows more slowly than mass — that is why both principles exist.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{BSA (m}^2\\text{)} = \\sqrt{\\frac{h \\text{(cm)} \\times W \\text{(kg)}}{3600}} \\qquad \\text{dose (mg)} = \\text{BSA} \\times D \\text{(mg/m}^2\\text{)}
$$

Combined (avoiding early rounding):

$$
\\text{dose (mg)} = D \\text{(mg/m}^2\\text{)} \\times \\sqrt{\\frac{h \\times W}{3600}}
$$

The combined form computes the dose in one expression — the rounding-safe habit made automatic.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — exact-square teaching case.**

**Given (illustrative):** height 180 cm, weight 80 kg; dose expression 250 mg/m². **Find:** BSA, then the dose.

1. Product: 180 × 80 = 14,400.
2. Divide by 3600: 14,400 ÷ 3600 = 4.
3. Square root: √4 = **2.00 m²** (exact).
4. Dose: 2.00 m² × 250 mg/m² = **500 mg**. Units: m² × mg/m² = mg ✓.

**Example 2 — the rounding discipline.**

**Given (illustrative):** height 170 cm, weight 60 kg; dose 250 mg/m². **Find:** the dose.

1. 170 × 60 = 10,200; ÷ 3600 = 2.8333…; √ = 1.6833… m² (≈ 1.68 m² when reported).
2. Dose from the **unrounded** BSA: 1.6833 × 250 = 420.8… → **≈ 421 mg**.
3. Contrast: rounding BSA to 1.68 *first* gives 420 mg — a 1 mg shift caused purely by early rounding.

**Interpretation:** Example 1 chose height and weight so the root is exact, isolating the method; Example 2 shows the real-world case where the rounding habit decides the final digit. Both doses are illustrative teaching values, not clinical recommendations.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Per-metre-squared dosing appears where protocols specify doses in mg/m² — the pharmacist's calculation tasks are computing BSA from a charted height and weight, then verifying the requested dose against the protocol's mg/m² expression. The two verifications from this lesson carry directly: recompute the square root independently, and confirm the unit collapse before accepting the final figure.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the BSA (illustratively) for a child of 160 cm and 40 kg, to 2 decimal places — and verify your square root by squaring it back.
2. A protocol expression (illustrative) is 200 mg/m² and the charted BSA is 1.73 m². Compute the dose with the unit collapse shown.
3. Why must BSA be carried unrounded into the dose multiplication? Demonstrate with Example 2's two paths (421 vs 420 mg).
4. Conceptual: a patient's weight doubles but their height is unchanged. Does their BSA double? Justify using the Mosteller structure (the height × weight product grows by 2, so BSA grows by √2 ≈ 1.41).`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- BSA (Mosteller, flagged convention) = √(cm × kg ÷ 3600); dose = BSA × mg/m².
- Unit collapse m² × mg/m² = mg verifies the dose step.
- Round once, at the end: unrounded BSA in, rounded dose out.
- Verify a square root by squaring it back — the entry-error defence.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Creatinine-Related Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Creatinine-Related Calculations',
    tier: 'C',
    verifyFlags: [
      'Cockcroft-Gault as taught here uses the mg/dL serum-creatinine convention with the 0.85 female factor. A µmol/L variant exists and requires a different constant; laboratory units must be confirmed before use. Thresholds quoted for illustration (e.g. "≈ 60 mL/min") are teaching values, not decision rules.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Two prerequisites, kept brief:

- **Serum creatinine (S-Cr)** is a muscle-waste product measured in blood, in mg/dL (the convention used here). Because healthy kidneys clear it steadily, its blood level *falls* when clearance is good and *rises* when clearance is poor — it is an inverse marker.
- **Creatinine clearance (CrCl)** is an estimate, in mL/min, of how fast the kidneys clear that marker — and by extension a proxy for how fast they clear many drugs.

So: high S-Cr suggests low clearance; low S-Cr suggests high clearance. The calculation below converts the blood measurement into an estimated clearance rate.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The standard taught estimate is the **Cockcroft-Gault equation**:

$$
\\text{CrCl (mL/min)} = \\frac{(140 - \\text{age}) \\times \\text{weight (kg)}}{72 \\times S_{Cr} \\text{(mg/dL)}}
$$

with a **female factor of 0.85** multiplying the result. Every element earns its place: (140 − age) decreases with age, encoding the decline of kidney performance over a lifetime; the weight term reflects that creatinine production rises with muscle mass; S-Cr sits in the **denominator with the 72 constant**, so *higher* creatinine → *lower* clearance (the inverse-marker logic from the FOUNDATION). The 0.85 adjusts for lower average muscle mass in females — a convention of the equation, stated here as such.

Read the equation's *structure* before computing: for a fixed age and S-Cr, CrCl scales **linearly with weight**; for fixed age and weight, CrCl falls **inversely with S-Cr**. That structural read is the fastest error-catcher — a computed result moving the wrong way against one of its inputs (e.g. clearance rising when S-Cr rises) announces an inverted or mis-entered term immediately.

Units check: the equation's constants (72) are defined so that the output lands in mL/min; the input convention (mg/dL) is part of the definition — a S-Cr reported in µmol/L must be converted first (flagged).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Cockcroft-Gault (flagged mg/dL convention): CrCl = (140 − age) × kg ÷ (72 × S-Cr); × 0.85 if female.
- S-Cr is an inverse marker: higher creatinine → lower estimated clearance.
- Structural checks: linear in weight, inverse in S-Cr, decreasing in age.
- Output is an estimate (mL/min) — the input to the renal-adjustment lesson, not a verdict.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{CrCl}_{\\text{male}} = \\frac{(140 - A) \\times W}{72 \\times C} \\qquad \\text{CrCl}_{\\text{female}} = 0.85 \\times \\frac{(140 - A) \\times W}{72 \\times C}
$$

where $A$ = age (years), $W$ = weight (kg), $C$ = serum creatinine (mg/dL, flagged convention).

Dimensional note: the constant 72 carries the unit conversion embedded in the convention — do not "simplify" it away; the equation is used as a unit.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — male patient (clean teaching values).**

**Given (illustrative):** male, age 60, weight 70 kg, S-Cr 1.0 mg/dL. **Find:** estimated CrCl.

1. Age term: 140 − 60 = 80.
2. Numerator: 80 × 70 = 5,600.
3. Denominator: 72 × 1.0 = 72.
4. Divide: 5,600 ÷ 72 = 77.8 (77.77…) → **CrCl ≈ 77.8 mL/min**.

**Example 2 — the female factor.**

**Given (illustrative):** same age, weight, and S-Cr; female. **Find:** estimated CrCl.

1. Male-path value: 77.8 mL/min (from Example 1).
2. Apply the factor: 77.8 × 0.85 = 66.1 (66.11…) → **CrCl ≈ 66.1 mL/min**.

**Interpretation:** the female factor is a single multiplication applied *after* the main estimate — applying it twice (or to the inputs instead of the result) is the common slip. Both results are illustrative estimates from clean teaching values: real estimates inherit the accuracy of the weight used and the laboratory's units.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Creatinine-based estimates are among the most frequently computed values in pharmacy practice because many dose decisions are keyed to renal function. The professional checks this lesson builds: confirm the laboratory's creatinine units before entering the equation, confirm the sex factor is applied exactly once, and sanity-check the direction of the result against the inputs (older or higher-creatinine → lower estimate). The estimate then feeds the adjustment methods of the next lesson.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute (illustratively) for a male, age 40, weight 80 kg, S-Cr 0.8 mg/dL: numerator, denominator, and CrCl to 1 decimal place.
2. Compute (illustratively) for a female, age 70, weight 60 kg, S-Cr 1.2 mg/dL — and verify the female factor was applied exactly once.
3. Direction test: a patient's S-Cr rises from 1.0 to 2.0 mg/dL with age and weight unchanged. What happens to the estimated CrCl, and which structural feature of the equation guarantees it?
4. Conceptual: why is serum creatinine alone insufficient to judge renal function — what two patient variables does Cockcroft-Gault add, and what role does each play?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- CrCl (Cockcroft-Gault, flagged convention) = (140 − age) × kg ÷ (72 × mg/dL S-Cr); × 0.85 female, once.
- S-Cr is an inverse marker: up in blood = down in clearance.
- Structure is the checker: linear in weight, inverse in S-Cr, decreasing in age.
- Confirm lab units first — the mg/dL convention is part of the equation's definition.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Renal Function Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Renal Function Calculations',
    tier: 'C',
    verifyFlags: [
      'The linear dose-adjustment proportion taught here (dose scaled by patient CrCl ÷ reference CrCl) is an ILLUSTRATIVE TEACHING MODEL chosen to exercise the arithmetic. Real renal dose adjustment is drug-specific: products specify exact rules (threshold CrCl values, fixed reduced doses, interval extensions) that must be followed as written. No universal adjustment rule exists.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This lesson consumes the previous one: the **estimated CrCl (mL/min)** from Cockcroft-Gault is the input that measures how much renal clearance the patient has. The question here: once clearance is known to be reduced, how is a dose adjusted? Keep one term precise: the **reference clearance** — a benchmark value the comparison is made against (an illustrative convention in this lesson; real protocols specify their own).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The teaching model of this lesson is a **linear proportion**: if the patient clears the drug at a fraction of the reference rate, the dose (in the model) is scaled by the same fraction:

$$
\\text{adjusted dose} = \\text{usual dose} \\times \\frac{\\text{patient CrCl}}{\\text{reference CrCl}}
$$

The companion strategy keeps the dose and stretches the **interval** by the same ratio (e.g. an adjusted fraction of $\tfrac{1}{2}$ doubles a q12h interval to q24h). Both strategies trade the same ratio against a different variable — daily amount vs time between doses.

The safety framing matters more than the arithmetic here, and it is stated plainly: **this linear proportion is a teaching model, not a clinical rule.** Real renal adjustment is drug-specific — products define threshold creatinine-clearance bands, fixed reduced doses, and interval extensions that must be followed as written, because elimination is rarely perfectly linear in clearance. What transfers to real practice is the *discipline*: identify the patient's clearance, identify which protocol band it falls into, and execute that band's rule without unit or direction errors. The model here lets you rehearse that discipline with fully verifiable arithmetic; the flagged convention note prevents the model from masquerading as a universal rule.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Teaching model: adjusted dose = usual dose × (patient CrCl ÷ reference CrCl) — flagged, illustrative.
- Interval strategy: keep the dose, multiply the interval by the same ratio.
- Real adjustment is drug-specific: protocol bands and fixed rules override any general model.
- Direction check: reduced clearance → reduced dose or longer interval, never more drug.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
D_{\\text{adj}} = D_{\\text{usual}} \\times \\frac{\\text{CrCl}_{\\text{patient}}}{\\text{CrCl}_{\\text{ref}}}
$$

$$
\\tau_{\\text{adj}} = \\tau_{\\text{usual}} \\times \\frac{\\text{CrCl}_{\\text{ref}}}{\\text{CrCl}_{\\text{patient}}}
$$

$\\tau$ = dosing interval. Note the ratio **inverts** between the two strategies: dose scales with the patient/reference fraction; interval scales with its reciprocal. Dimensionless ratios — no units to cancel, which is exactly why the direction must be checked by reasoning.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — dose-reduction path (illustrative drug "Drug X", teaching model).**

**Given (illustrative):** usual dose 500 mg; patient CrCl 30 mL/min; reference 60 mL/min. **Find:** the model-adjusted dose.

1. Fraction: 30 ÷ 60 = 0.5 (dimensionless).
2. Adjusted dose: 500 mg × 0.5 = **250 mg**.
3. Direction check: clearance halved → dose halved ✓.

**Example 2 — interval-extension path, same patient.**

1. Same fraction 0.5; interval strategy inverts it: 1 ÷ 0.5 = 2.
2. Usual interval (illustrative) q12h × 2 = **q24h** — same daily amount as 250 mg q12h? Check: 250 × 2 = 500 mg/day = the usual 500 mg q24h… in this *model*, daily totals match; real protocols rarely line up this neatly, which is precisely why they are followed as written.
3. **Answer:** 250 mg q12h or (model) usual dose q24h — two expressions of one ratio.

**Interpretation:** the arithmetic is proportion; the lesson is the inversion logic between the two paths and the boundary between a teaching model and a real protocol. Every number is exactly computable and illustrative.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `In practice, renal adjustment means reading the product information's renal section: a table of clearance bands, each with its exact instruction. The pharmacist's calculation role is to place the patient's estimated CrCl in the correct band and execute that band's rule — the discipline this lesson rehearses with clean numbers. The flagged teaching model builds the ratio instinct; the protocol table supplies the real rule.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative model) usual dose 500 mg, patient CrCl 15 mL/min, reference 60 mL/min: compute the model-adjusted dose and the direction check.
2. (Illustrative model) usual dose 300 mg q12h, patient CrCl 40 mL/min, reference 80 mL/min: compute the adjusted dose, and state the interval-extension equivalent under the model.
3. In the two strategies, why does the ratio invert (patient/ref for dose, ref/patient for interval)? Answer in terms of what each strategy holds constant.
4. Conceptual: a colleague applies the linear model to a real product whose information sheet specifies fixed reduced doses by clearance band. What is wrong with the approach — and which discipline from this lesson still applies?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Model (flagged): dose scales by patient CrCl ÷ reference CrCl; interval by the reciprocal.
- Dose path and interval path express one fraction two ways.
- Real renal adjustment = protocol bands executed as written; the model trains the arithmetic and direction discipline.
- Reduced clearance → less drug or more time between doses — never more drug.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Fluid Requirements (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Fluid Requirements',
    tier: 'C',
    verifyFlags: [
      'The pediatric maintenance conventions taught here (Holliday-Segar 100/50/20 per day; the 4/2/1 per-hour rule) and the commonly cited adult maintenance range (30–35 mL/kg/day) are published educational conventions, not universal prescriptions. Clinical fluid management is protocol- and patient-specific; the conventions are taught to exercise the arithmetic and tier logic.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Maintenance fluid** is the water a patient needs per day to replace ordinary losses — not to correct deficits. The conventions below are tiered by weight band, so the one prerequisite is the **band structure itself**: the per-kg amount *changes* as weight crosses each band boundary, which is what makes the addition (rather than one flat multiplication) the skill being taught.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The taught pediatric convention (**Holliday-Segar**, per 24 hours) assigns each kilogram its band's rate — the rate applies *only within its band*:

- first 10 kg: **100 mL/kg/day**
- second 10 kg (10–20 kg): **50 mL/kg/day**
- each kg beyond 20 kg: **20 mL/kg/day**

$$
\\text{mL/day} = 100 \\times (\\text{kg in band 1}) + 50 \\times (\\text{kg in band 2}) + 20 \\times (\\text{kg above 20})
$$

The hourly **4/2/1 rule** is the same idea per hour: 4 mL/h per kg for the first 10 kg, 2 for the next 10, 1 beyond 20. The two conventions are *different conventions*, not two routes to one number: for a 22 kg child the daily rule gives 1,540 mL/day (≈ 64 mL/h if divided by 24) while the hourly rule gives 62 mL/h (1,488 mL/day) — a small but real difference that exists because the conventions were constructed differently. Recognising which convention a protocol invokes is the actual professional skill (flagged).

For adults, a commonly cited teaching range is **30–35 mL/kg/day** — one flat multiplication, flagged as a convention. Unit checks are straightforward: kg × mL/kg/day = mL/day; kg × mL/h/kg = mL/h. The band structure is the only conceptual novelty, and the worked example makes it explicit.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Holliday-Segar (flagged): 100 / 50 / 20 mL/kg/day across the three weight bands — addition, not flat multiplication.
- 4/2/1 rule (flagged): the per-hour counterpart; a *different* convention, slightly different totals.
- Adult teaching range (flagged): 30–35 mL/kg/day — flat multiplication.
- Unit collapse: kg × mL/kg/day = mL/day; kg × mL/h/kg = mL/h.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{mL/day} = 100a + 50b + 20c
$$

$$
\\text{mL/h} = 4a + 2b + 1c
$$

where $a$ = kg in the first band (up to 10), $b$ = kg in the second band (10–20), $c$ = kg beyond 20, and $a + b + c$ = total weight. Adult (flagged convention): mL/day = W × (30–35).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — 22 kg child, daily convention (illustrative).**

1. Band 1: first 10 kg × 100 mL/kg/day = 1,000 mL/day.
2. Band 2: next 10 kg × 50 = 500 mL/day.
3. Band 3: remaining 2 kg × 20 = 40 mL/day.
4. Total: 1,000 + 500 + 40 = **1,540 mL/day**. (÷ 24 → 64.2 mL/h if an hourly rate is wanted from this convention.)

**Example 2 — same child, 4/2/1 hourly convention (illustrative).**

1. 4 × 10 = 40; 2 × 10 = 20; 1 × 2 = 2.
2. Total: 40 + 20 + 2 = **62 mL/h** → × 24 = 1,488 mL/day.

**Interpretation:** 1,540 vs 1,488 mL/day — a ~3% difference arising purely from convention construction, not arithmetic error. The example teaches the band mechanics *and* the convention-awareness discipline in one pass. All values are illustrative teaching numbers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists meet fluid arithmetic in paediatric compounding support, IV-fluid preparation checks, and rate verifications on ward charts. The transferable habits: identify which convention the chart invokes, run the band addition (never a flat per-kg multiplication across bands), and confirm the units of the answer — mL/day vs mL/h decide whether the figure belongs on a bag label or an infusion pump.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute (illustratively) the daily maintenance fluid for a 14 kg child by Holliday-Segar — show each band separately.
2. Compute (illustratively) for a 30 kg child: the daily total by Holliday-Segar, and the hourly rate by 4/2/1. Verify each band separately in both.
3. A colleague computes a 22 kg child's daily fluid as 22 × 70 = 1,540 mL/day using a flat "70 mL/kg/day". The total coincidentally matches Example 1 — but explain why the flat-rate method is still the wrong structure (what breaks at other weights, e.g. 14 kg or 30 kg?).
4. Unit/interpretation: a chart lists "maintenance: 62 mL/h". Which convention does this figure most likely come from, and what daily total does it correspond to?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Holliday-Segar: 100/50/20 mL/kg/day by band — add the bands, never flat-multiply.
- 4/2/1: per-hour counterpart; the two conventions differ slightly by design (64.2 vs 62 mL/h at 22 kg).
- Adult teaching range 30–35 mL/kg/day (flat) — all three conventions flagged.
- mL/day vs mL/h decides where the number belongs: bag label vs pump.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Clinical Concentration Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Clinical Concentration Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `One recap as the foundation: a **concentration** states how much drug sits in how much product — mg/mL is the working dialect (pct-9). Every calculation in this lesson is the concentration identity read in a direction:

$$
c \\text{(mg/mL)} = \\frac{m \\text{(mg)}}{V \\text{(mL)}} \\qquad \\Longleftrightarrow \\qquad V \\text{(mL)} = \\frac{m \\text{(mg)}}{c \\text{(mg/mL)}}
$$

with the unit collapse mg ÷ (mg/mL) = mL doing the verification, exactly as throughout Topic 4.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Clinical concentration calculations chain two steps that earlier lessons built separately:

**Step 1 — dose to amount:** the weight- or surface-based expressions of this block (pct-12-1, pct-12-2) produce an *amount* (mg). A weight-based dose = W (kg) × D (mg/kg), unit-collapsing to mg.

**Step 2 — amount to product:** the concentration identity converts that amount into a measurable *volume*: mL = mg ÷ (mg/mL). For infusions, the same identity extends through time: an infusion running at $r$ (mL/h) from a bag of concentration $c$ (mg/mL) delivers $c \\times r$ (mg/h) — the dose rate. Reversing it answers "what rate delivers this dose rate?" — $r$ = dose rate ÷ $c$.

$$
\\text{dose rate (mg/h)} = c \\text{(mg/mL)} \\times r \\text{(mL/h)}
$$

The unit chain is the whole method: kg × mg/kg = mg; mg ÷ (mg/mL) = mL; (mg/mL) × mL/h = mg/h. Every clinical concentration problem is one or more of these collapses chained in an order that ends at the units the question actually asks for — which is why the first move is always reading the question's target units.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two-step chain: patient scaling → mg, then concentration identity → mL (or rate).
- Infusion dose rate = concentration × flow rate; mg/mL × mL/h = mg/h.
- Read the target units first; run the collapses toward them.
- Bag concentration = amount ÷ final volume — declared *after* making up to volume (the pct-9 made-up-to-volume principle).`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
m \\text{(mg)} = W \\text{(kg)} \\times D \\text{(mg/kg)} \\qquad V \\text{(mL)} = \\frac{m}{c} \\qquad \\text{(mg/h)} = c \\times r
$$

$$
\\text{rate for a dose rate:} \\quad r \\text{(mL/h)} = \\frac{\\text{dose rate (mg/h)}}{c \\text{(mg/mL)}} \\qquad \\text{bag:} \\quad c = \\frac{\\text{mg in bag}}{\\text{final mL}}
$$

All five forms are the one concentration identity, rearranged; each verifies by unit collapse.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — dose to volume (illustrative).**

**Given:** weight 12 kg; expression 10 mg/kg; product concentration 50 mg/mL. **Find:** the volume to administer.

1. Amount: 12 kg × 10 mg/kg = 120 mg.
2. Volume: 120 mg ÷ 50 mg/mL = **2.4 mL**. Units: mg ÷ (mg/mL) = mL ✓.

**Example 2 — infusion dose rate (illustrative).**

**Given:** a bag contains 500 mg made up to a final volume of 100 mL; the pump runs at 25 mL/h. **Find:** the bag's concentration and the delivered dose rate.

1. Concentration: 500 mg ÷ 100 mL = 5 mg/mL.
2. Dose rate: 5 mg/mL × 25 mL/h = **125 mg/h**. Units: (mg/mL) × mL/h = mg/h ✓.

**Example 3 — the reverse direction.**

**Given:** the same 5 mg/mL bag; a (illustrative) target of 100 mg/h. **Find:** the pump rate.

1. Rate: 100 mg/h ÷ 5 mg/mL = **20 mL/h**. Units: (mg/h) ÷ (mg/mL) = mL/h ✓.

**Interpretation:** Examples 2 and 3 are one identity in both directions — the cross-check habit of Topic 4 (rate × concentration returns the target dose rate) closes the loop. All values are illustrative teaching numbers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This two-step chain is the most-executed calculation in dispensary and clinical pharmacy practice: prescription expresses mg (or mg/kg), the shelf carries mg/mL, and the syringe or pump needs mL (or mL/h). Every professional check in the chain — recompute the mg step, confirm the product's concentration as labelled, verify the mL answer against the device calibrated — is one of this lesson's unit collapses in action.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) weight 15 kg, expression 20 mg/kg, product 100 mg/mL: compute the volume, showing both unit collapses.
2. (Illustrative) a bag holds 250 mg in 50 mL final volume, run at 10 mL/h: compute the concentration and the delivered dose rate — then reverse-check by dividing the dose rate by your concentration.
3. Formula-selection: a question asks "what pump rate delivers 2 mg/min?" from a 2 mg/mL bag. Which two rearrangements chain here, and what intermediate conversion does mg/min → mg/h require before using the mg/h rate formula? (Compute it: 120 mg/h → 60 mL/h.)
4. Conceptual: a bag's concentration is declared "after making up to 100 mL". Why does the *final* volume — not the diluent volume added — belong in the denominator? (Recall the pct-9 made-up-to-volume principle.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Chain: scaling → mg → ÷ concentration → mL; infusions add × rate → mg/h.
- Bag concentration = mg ÷ final volume (made-up-to-volume, from pct-9).
- Read the target units first; each collapse is a rearrangement of one identity.
- Reverse-compute as the cross-check: rate × c must return the dose rate.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Other Introductory Clinical Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-12-7',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Selected Clinical Calculations — Other Introductory Clinical Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This survey node collects representative introductory patterns that complete the block's ladder — three everyday calculation genres that pharmacy students meet constantly and that use only tools already built in Topic 4: multiplication for totals, division for rates, and the unit-collapse check throughout. The three taught here are **quantity to dispense**, **day's supply**, and **drip rate** — chosen as representative of the genre the node name designates.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Quantity to dispense** asks: how many units (tablets, capsules, etc.) cover the full course? The structure is a product:

$$
\\text{quantity} = \\text{units per administration} \\times \\text{administrations per day} \\times \\text{days}
$$

**Day's supply** inverts the idea: given a dispensed quantity and a daily usage, how long does it last?

$$
\\text{day's supply} = \\frac{\\text{quantity dispensed}}{\\text{units used per day}}
$$

**Drip rate** converts an ordered volume over time into drops per minute, using the administration set's **drop factor** (drops per mL, a property of the giving set — illustrative 20 drops/mL here):

$$
\\text{drops/min} = \\frac{\\text{volume (mL)} \\times \\text{drop factor (drops/mL)}}{\\text{time (min)}}
$$

Each is proportion in a different costume, and each closes with the same verification: the units of the result must be the units asked for (tablets, days, drops/min). The drop-factor term is the only new vocabulary, and it is exactly what its name says — a per-millilitre conversion factor stamped on the set.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Quantity = per-administration × per-day × days (units × 1/day × days = units).
- Day's supply = quantity ÷ daily usage — the inverse of the quantity structure.
- Drip rate = (mL × drops/mL) ÷ min; the drop factor belongs to the giving set, not the drug.
- Target units first: the answer's units name the formula's arrangement.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
Q = u \\times n \\times d \\\\
S = \\frac{Q}{n} \\\\
R_{\\text{drops}} = \\frac{V \\text{(mL)} \\times f \\text{(drops/mL)}}{t \\text{(min)}}
$$

$Q$ = quantity, $u$ = units per administration, $n$ = administrations per day, $d$ = days, $S$ = day's supply, $f$ = drop factor (set property, illustrative 20 drops/mL here), $R$ = drip rate.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — quantity to dispense (illustrative).**

**Given:** 2 tablets per dose, 3 doses per day, 7 days. **Find:** the quantity.

1. Per day: 2 × 3 = 6 tablets/day.
2. Course: 6 × 7 = **42 tablets**. Units: tablets × 1/day × days = tablets ✓.

**Example 2 — day's supply (illustrative).**

**Given:** 90 tablets dispensed; regimen 3 tablets per day. **Find:** the supply.

1. 90 ÷ 3 = **30 days**. Cross-check against Example 1's structure: 30 days × 3/day = 90 ✓ — the inverse confirmed.

**Example 3 — drip rate (illustrative).**

**Given:** 1,000 mL over 8 hours; set drop factor 20 drops/mL. **Find:** drops/min.

1. Time: 8 h × 60 min/h = 480 min.
2. Drops: 1,000 mL × 20 drops/mL = 20,000 drops.
3. Rate: 20,000 ÷ 480 = 41.7 → **≈ 42 drops/min** (rounded to a countable whole).

**Interpretation:** three genres, one discipline — build the chain toward the target units, then verify by collapse or inverse. The rounding in Example 3 is stated (a drip count is physically whole drops); nothing else needed rounding. All values are illustrative.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Quantity and day's-supply arithmetic run on every dispensing transaction — the labels, the stock draw, and the insurance days-supply field all depend on them. Drip-rate arithmetic appears wherever an administration set (rather than a pump) meters an infusion. The shared habit this block leaves you with: name the target units, chain the collapses toward them, and close with an inverse or direction check.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) 1 capsule four times daily for 10 days: compute the quantity to dispense and verify by inverting into a day's supply.
2. (Illustrative) 60 tablets dispensed, 2 per day: day's supply — and which cross-check proves the division direction was right?
3. (Illustrative) 500 mL over 4 hours with a 15 drops/mL set: compute drops/min (time first: 240 min; 500 × 15 ÷ 240 = 31.25 → ≈ 31), and state where the drop factor comes from.
4. Conceptual: why is the drop factor a property of the administration set rather than of the drug or the patient? What changes in the drip-rate formula if a 10 drops/mL set is substituted?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Quantity = u × n × d; day's supply = Q ÷ n — inverses of one another, cross-check each other.
- Drip rate = mL × drops/mL ÷ min; drop factor is the set's stamped property.
- Target units first; verify by unit collapse or inverse computation.
- This closes the pct-12 ladder: scale, clear, hydrate, concentrate, supply — all one proportion discipline.`,
      },
    ],
  },
];
