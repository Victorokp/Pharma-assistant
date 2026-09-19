import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 5: completes the locked pct-9 group block ("Expressions of
 * Concentration"): the Tier D orientation lesson plus all ten children
 * (pct-9-1 … pct-9-9 Tier B; pct-9-10 Tier C). Node IDs, titles, and the
 * parent topic (pct-4) mirror curriculum.ts exactly; nothing here creates,
 * renames, or reorders curriculum nodes.
 *
 * Cross-references: pct-8 (density/SG) supplies the w/w ↔ w/v bridge;
 * pct-5-9 (atomic/molecular weights) underpins molarity.
 */
export const pct201ConcentrationLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // GROUP ORIENTATION (Tier D — overview only; children are the units)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `"How much drug is in this preparation?" has many correct answers — grams per 100 g, grams per 100 mL, one part in a thousand, milligrams per litre, moles per litre — and each is the natural language of a particular setting: ointment labels, infusion bags, dilute injections, water-quality limits, and clinical chemistry respectively.

This block teaches you the whole family and, more importantly, how to move between its members. The ladder runs: **Percentage Strength** (the "parts per hundred" idea and its three bases) → the three percentage forms **% w/w**, **% w/v**, **% v/v** → **Ratio Strength** for very dilute solutions → **Parts per Million** and **Parts per Billion** for trace amounts → **Molar Concentration** for chemistry-level counting → **Other Expressions** (molality, normality, milliequivalents) → and the capstone, **Converting Between Concentration Expressions**, where every earlier lesson becomes a tool.

Keep one idea in view throughout: every expression is a ratio of *solute amount* to *solution amount*, differing only in the units chosen for each side. That is why conversion is possible at all — and why the density bridge from the previous block (pct-8) is the key that unlocks the mass↔volume conversions.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Every concentration expression = solute amount ÷ solution amount, in chosen units.
- Percentage has three bases (w/w, w/v, v/v); the basis must always be stated.
- Ratio strength and ppm/ppb handle very dilute systems; molarity handles chemical stoichiometry.
- Conversions between mass- and volume-based forms require density/SG (pct-8 bridge).`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the ten child lessons are the real study units, in ladder order: Percentage Strength → % w/w → % w/v → % v/v → Ratio Strength → ppm → ppb → Molar Concentration → Other Expressions → Converting Between Expressions.
- One family, one idea: solute-to-solution ratios; the skill is fluency in all dialects and in translating between them.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Percentage Strength (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Percentage Strength',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Percentage strength** expresses concentration as *parts of solute per hundred parts of solution*. It answers "how much in 100" — but "parts" is deliberately ambiguous until you say what is being measured. The solute and the solution can each be measured by **weight (w)** or by **volume (v)**, giving three working forms:

- **% w/w** — weight in weight: grams of solute per 100 g of product (semisolids, powders).
- **% w/v** — weight in volume: grams of solute per 100 mL of solution (the default for liquid medicines).
- **% v/v** — volume in volume: mL of solute per 100 mL of solution (liquid-in-liquid mixtures).

Two habits follow immediately. First, **always state the basis**: "a 5% solution" is incomplete — 5% w/w and 5% w/v are different preparations unless the density happens to be exactly 1.0 g/mL. Second, **convert to concrete amounts early**: x% w/v means x grams per 100 mL, which is x/100 grams per mL — the form you actually dispense.

Percentage strength is the pharmacist's daily dialect: it appears on formulated products, compounding worksheets, and dispensing labels. The three lessons that follow treat each basis in full; here the essential discipline is simply never to write, quote, or compute a percentage strength without its w/w, w/v, or v/v designation.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Percentage strength = parts of solute per 100 parts of solution.
- Three bases: % w/w (per 100 g product), % w/v (per 100 mL solution), % v/v (per 100 mL mixture).
- A bare "%" without a basis is incomplete and potentially dangerous in practice.
- % w/v is the pharmacy default for solutions: x% w/v = x g per 100 mL.`,
      },
      {
        kind: 'FORMULAS',
        body: `General form (basis-dependent):

$$
\\% = \\frac{\\text{amount of solute}}{\\text{amount of solution}} \\times 100
$$

The amount of solute and of solution must both be measured in the basis's terms (g or mL). The three child lessons apply this to w/w, w/v, and v/v in turn.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a solution is prepared by dissolving 5 g of drug and making up to a final volume of 250 mL. **Find:** the percentage strength (w/v).

1. Formula: $\\% \\, \\text{w/v} = \\dfrac{\\text{g solute}}{\\text{mL solution}} \\times 100$.
2. Substitute: $\\dfrac{5 \\text{ g}}{250 \\text{ mL}} \\times 100$.
3. Calculate: 5 ÷ 250 = 0.02 g/mL; × 100 = 2.

**Answer:** 2% w/v. **Interpretation:** "2% w/v" and "2 g per 100 mL" are the same statement in two dialects — and 0.02 g/mL is the third form you will dispense from. Percentage is never new information; it is a fixed way of packaging the solute-per-solution ratio.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Percentage strength is the language of the dispensary: morphine sulfate oral solution 5 mg in 5 mL is more often met as 0.1% w/v, chlorhexidine washes are quoted in % w/v, and ointment strengths in % w/w. Misreading which basis a percentage uses is a classic dispensing error — the number is the same, the preparation is not. This block exists so that the number and the basis are always read, and always written, together.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A label says "10% solution" with no basis stated. Explain, concretely, why that is insufficient — what two different preparations could it mean?
2. How many grams of drug are in a 5 mL spoonful of a 2% w/v suspension? Show the reasoning, not just the number.
3. Why does % w/v (rather than % w/w) become the practical default for aqueous oral solutions?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Percentage strength = solute per 100 parts of solution; basis (w/w, w/v, v/v) must always be stated.
- x% w/v = x g/100 mL = x/100 g per mL.
- Convert percentages to concrete amounts before dispensing or compounding.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — % w/w (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — % w/w',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Percentage weight in weight (% w/w)** states the grams of solute in every 100 grams of *product* — the whole finished preparation, not just the solvent. It is the natural basis wherever the product is measured by weight: ointments, creams, gels, pastes, and powdered mixtures.

Why weight in weight for semisolids? Because their volumes are awkward (a paste compresses; an ointment's volume depends on temperature and trapping of air), while a balance weighs them accurately and reproducibly. Manufacturing likewise portions semisolid batches by weight. With both sides in grams, density never enters the definition — no volume measurement is required anywhere, which is exactly why the basis is robust for products that are neither simple liquids nor true solids.

One reading habit matters enormously: the denominator is the **total product mass** (drug + everything else). A common beginner error is dividing by the mass of *base* or *solvent* alone. If 2 g of drug is mixed with 48 g of base, the product is 50 g, and the strength is 2/50 — not 2/48. Both numerator and denominator must describe the same boundary: solute-in-product.

% w/w also connects to the dilution logic used throughout this topic: because numerator and denominator share units, a % w/w strength can be applied directly to any batch size — 4% w/w means 4 g of drug in 100 g, 40 g in 1 kg, 400 g in 10 kg — scaling by simple proportion without any conversion.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- % w/w = grams of solute per 100 g of total product (solute + everything else).
- Standard basis for semisolids (ointments, creams, pastes, gels) and powders — weighed, not volume-measured.
- Density never enters: both sides are masses.
- Common error: dividing by base mass instead of total product mass.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\% \\, \\text{w/w} = \\frac{\\text{mass of solute (g)}}{\\text{mass of product (g)}} \\times 100
$$

Rearrangements follow by proportion:

$$
\\text{solute (g)} = \\frac{\\% \\, \\text{w/w} \\times \\text{product (g)}}{100} \\qquad \\text{product (g)} = \\frac{\\text{solute (g)} \\times 100}{\\% \\, \\text{w/w}}
$$

All masses in grams (or any consistent mass unit — the ratio is scale-free).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** 2 g of a drug is incorporated into 48 g of ointment base. **Find:** the percentage strength of the finished ointment.

1. Identify the denominator: total product = 2 g + 48 g = 50 g (not 48 g).
2. Formula: $\\% \\, \\text{w/w} = \\dfrac{\\text{solute}}{\\text{product}} \\times 100$.
3. Substitute: $\\dfrac{2}{50} \\times 100 = 4$.

**Answer:** 4% w/w. **Interpretation:** every 100 g of this ointment carries 4 g of drug — so a 25 g dispensed pot contains 1 g of drug (4 × 25/100). The strength scales to any product mass by proportion, which is precisely why w/w is the manufacturing basis for semisolids.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Topical product labels are % w/w: hydrocortisone cream 1% w/w means 1 g of drug per 100 g of cream. When you counsel a patient applying "a fingertip unit", or check a batch record for a compounded ointment, you are working in this dialect. Compounding worksheets for semisolids run almost entirely in grams — weighed on balances precisely because volumes are unreliable — and the % w/w strength is the identity that ties formula, batch, and dispensed quantity together.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 0.5 g of drug is mixed with 19.5 g of base. A student reports the strength as 2.56% w/w. What error was made, and what is the correct strength?
2. How many grams of drug are in 400 g of a 2.5% w/w ointment?
3. Why does % w/w need no density value anywhere in its calculations, while w/v conversions sometimes do?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- % w/w: grams per 100 g of TOTAL product — denominator includes the drug.
- Standard for ointments, creams, pastes, gels, powders; weighed on balances.
- Scales by proportion to any batch or dispensed size.
- Classic error: dividing by base mass alone (2 g + 48 g = 50 g product, not 48 g).`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — % w/v (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — % w/v',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Percentage weight in volume (% w/v)** states the grams of solute in every 100 mL of *solution*. It is the working default for liquid medicines — oral solutions, suspensions, injections, infusions — because dispensing is volumetric: syringes, measures, and infusion bags are all marked in mL, while the drug itself was weighed in grams. The basis mixes the two naturally: weight of what you care about (drug), volume of what you handle (product).

The definition is *operational*: "x% w/v" means x grams of solute made up to a final volume of 100 mL — the solute is dissolved and the volume completed to the mark, not "x grams added to 100 mL of solvent". Dissolving changes the volume, so the make-up-to-the-mark step is part of what the percentage claims. (This is why volumetric flasks exist.)

% w/v converts to the dispensing unit directly: x% w/v = x g/100 mL = x/100 g/mL = 10x mg/mL. That last form — milligrams per mL — is the one dose calculations actually consume, and the bridge between the label on the bottle and the volume drawn into the syringe. A 1% w/v injection is 10 mg/mL; a 2% w/v injection, 20 mg/mL. Reading percentages as mg/mL on sight is one of the highest-value reflexes in this entire topic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- % w/v = grams of solute per 100 mL of solution (made up to final volume).
- The pharmacy default for aqueous liquid medicines — dispensing is volumetric.
- x% w/v = x g/100 mL = (x/100) g/mL = 10x mg/mL — the dose-calculation form.
- "Made up to 100 mL" ≠ "added to 100 mL of solvent"; dissolving changes volume.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\% \\, \\text{w/v} = \\frac{\\text{mass of solute (g)}}{\\text{volume of solution (mL)}} \\times 100
$$

Working rearrangements:

$$
\\text{solute (g)} = \\frac{\\% \\, \\text{w/v} \\times V \\text{(mL)}}{100} \\qquad \\text{mg/mL} = \\% \\, \\text{w/v} \\times 10
$$

Grams in, millilitres of solution in; the mg/mL identity follows from x g per 100 mL = 10x mg per mL.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** an infusion bag contains 200 mL of 0.9% w/v sodium chloride. **Find:** the mass of NaCl delivered.

1. Formula: $\\text{solute (g)} = \\dfrac{\\% \\, \\text{w/v} \\times V}{100}$.
2. Substitute: $\\dfrac{0.9 \\times 200}{100}$.
3. Calculate: 0.9 × 200 = 180; ÷ 100 = 1.8 g.

**Answer:** 1.8 g of NaCl. **Interpretation:** the same result via the mg/mL reflex — 0.9% w/v = 9 mg/mL; 9 mg/mL × 200 mL = 1,800 mg = 1.8 g. Both routes must agree; if they do not, the percentage basis was misapplied. (0.9% w/v NaCl is physiological saline — its other concentration dialects are developed in the Molar Concentration lesson.)`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This is the dialect of the dispensing bench and the ward. Injectable products are labelled in % w/v, and every "how many mg in how many mL" dose calculation starts by converting that percentage into mg/mL. Oral liquids (antibiotic suspensions reconstituted to 250 mg/5 mL, i.e. 5% w/v) live in the same system. Errors here — reading 1% as 1 mg/mL instead of 10 mg/mL — are tenfold dosing errors, which is why this conversion is drilled until it is automatic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Express 4% w/v in mg/mL, and state the mass of drug in a 2.5 mL dose.
2. A prescription calls for 350 mg of a drug available as a 5% w/v injection. What volume should be drawn up?
3. Why does "0.9 g of NaCl dissolved in exactly 100 mL of water" not deserve the label 0.9% w/v? What step is missing?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- % w/v: grams per 100 mL of solution — the liquid-medicine default.
- x% w/v = 10x mg/mL — the reflex that drives every dose calculation.
- Solute (g) = (% w/v × V mL)/100; made up to volume, not added to solvent.
- 0.9% w/v NaCl = 9 mg/mL = 1.8 g in a 200 mL bag.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — % v/v (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — % v/v',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Percentage volume in volume (% v/v)** states the millilitres of solute (itself a liquid) in every 100 mL of *mixture*. It is the basis for liquid-in-liquid preparations: alcohol in spirits and tinctures, glycerin in mucilage-type mixtures, oils in emulsion concentrates — anywhere both the component and the whole are conveniently handled as liquids.

% v/v suits these systems because both sides are volumetric and the products are used volumetrically (poured, diluted, decanted). Measuring 40 mL of ethanol into a flask and making up to 100 mL gives a 40% v/v preparation — again "made up to", because the final mixture volume, not the solvent volume, is the denominator.

An honest academic note: when ethanol and water mix, the total volume is slightly *less* than the sum of the starting volumes (molecular packing — volume contraction). So "40 mL + 60 mL of water" is not exactly "100 mL of 40% v/v". The pharmacopoeial answer is operational: % v/v is defined by making the mixture to the stated final volume and, for alcohol-containing products, by standardised measurement at a stated temperature. The lesson is not the contraction itself but the habit it enforces — liquid volumes are conditions-dependent, so the basis defines the measurement procedure, not just the arithmetic.

In calculations % v/v behaves exactly like its siblings: a ratio scaled by proportion. 40% v/v means 40 mL per 100 mL, 400 mL per litre, 30 mL in a 75 mL mixture — no density, no molar mass, pure proportion.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- % v/v = mL of liquid solute per 100 mL of final mixture — for liquid-in-liquid systems.
- Classic uses: ethanol in spirits/tinctures, glycerin mixtures, oil concentrates.
- Made up to the final volume; ethanol–water contraction means component volumes are not strictly additive.
- Scales by pure proportion — no density or molar mass needed.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\% \\, \\text{v/v} = \\frac{\\text{volume of solute (mL)}}{\\text{volume of mixture (mL)}} \\times 100
$$

Rearrangements by proportion:

$$
\\text{solute (mL)} = \\frac{\\% \\, \\text{v/v} \\times V \\text{(mL)}}{100} \\qquad V \\text{(mL)} = \\frac{\\text{solute (mL)} \\times 100}{\\% \\, \\text{v/v}}
$$

Volumes in mL (or any consistent volume unit).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a spirit preparation is 40% v/v ethanol. **Find:** the ethanol content of a 750 mL bottle.

1. Formula: $\\text{solute (mL)} = \\dfrac{\\% \\, \\text{v/v} \\times V}{100}$.
2. Substitute: $\\dfrac{40 \\times 750}{100}$.
3. Calculate: 40 × 750 = 30,000; ÷ 100 = 300 mL.

**Answer:** 300 mL of ethanol in the bottle. **Interpretation:** the arithmetic is pure proportion — the only subtlety in v/v work is remembering the denominator is the final mixture volume and that the measurement is operational (made up to volume at stated conditions).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Alcohol-based preparations are the everyday face of % v/v: rubbing alcohol (isopropyl alcohol ~70% v/v), tinctures quoted by their ethanol content, and alcohol-based hand rubs formulated in the 60–80% v/v range under pharmacopoeial and WHO guidance. Counselling on flammability, storage, and dilution instructions all key off the v/v number, and dilution calculations ("how much 95% v/v alcohol and how much water make 500 mL of 70% v/v?") are stock pharmacy problems handled with the proportion methods of this block.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How many mL of pure glycerin are in 60 mL of a 15% v/v mixture?
2. Explain in one sentence why "40 mL ethanol + 60 mL water" is not guaranteed to produce exactly 100 mL of 40% v/v ethanol.
3. A dilution task: what volume of 90% v/v alcohol, made up to 450 mL, gives 70% v/v? (Hint: the *solute* volume is unchanged; only the final volume changes.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- % v/v: mL per 100 mL of final mixture — liquid-in-liquid basis.
- Solute (mL) = (% v/v × V)/100; scales by proportion.
- Ethanol–water contraction: "made up to volume" is part of the definition.
- Everyday anchors: 70% v/v rubbing alcohol, tincture ethanol contents.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Ratio Strength (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Ratio Strength',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Ratio strength** expresses very dilute solutions as "one part of solute in a stated number of parts of solution", written **1 in X** (or 1:X). "Part" inherits its meaning from a stated basis: 1 in 1,000 w/v means 1 g in 1,000 mL of solution; 1 in 1,000 w/w means 1 g in 1,000 g of product. The convention exists because percentages become unreadable at high dilutions — "0.1%" and "1 in 1,000" are the same concentration, but the ratio form is how dilute injections have traditionally been quoted and how clinical memory retains them.

The classic examples are emergency injections quoted by ratio strength — 1 in 1,000, 1 in 10,000 — where reading the ratio *as* a concentration in g/mL must be instant: 1 in 1,000 w/v = 1 g per 1,000 mL = 1 mg/mL. That single line is the entire practical skill: ratio → absolute amount per mL, because doses are prescribed in mg (or µg) and drawn in mL.

Conversion between ratio strength and percentage is a fixed step: a percentage is "parts per hundred", a ratio is "parts per X", so they differ by a factor of X/100. 1 in 1,000 = 0.1% w/v; 1 in 2,500 = 0.04% w/v; and backwards, 0.02% w/v = 1 in 5,000. In every direction: ratio → fraction → decimal → percentage, with the basis (w/v or w/w) carried along untouched. No density, no molar mass — dilution bookkeeping is pure proportion.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ratio strength "1 in X" = 1 part solute in X parts solution (basis stated: w/v or w/w).
- 1 in 1,000 w/v = 1 g/1,000 mL = 1 mg/mL — the emergency-dose reflex.
- Ratio ↔ percentage: 1 in X = (100/X)% — parts per X vs parts per 100.
- Used for very dilute products where percentages become unwieldy.`,
      },
      {
        kind: 'FORMULAS',
        body: `Conversions:

$$
\\text{1 in X (w/v)} = \\frac{1 \\text{ g}}{X \\text{ mL}} \\qquad \\% \\, \\text{w/v} = \\frac{100}{X} \\qquad X = \\frac{100}{\\% \\, \\text{w/v}}
$$

Absolute amount per mL:

$$
\\frac{1 \\text{ g}}{X \\text{ mL}} = \\frac{1{,}000 \\text{ mg}}{X \\text{ mL}} \\; \\text{(mg/mL)} = \\frac{1{,}000{,}000 \\; \\mu\\text{g}}{X \\text{ mL}} \\; (\mu\\text{g/mL})
$$

All ratio–percentage conversions are basis-preserving; the mass-per-volume chain is where doses come from.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** an injection labelled 1 in 1,000 w/v. **Find:** its strength in mg/mL and as a percentage.

1. Ratio → mass per volume: 1 g per 1,000 mL.
2. Convert to mg/mL: 1,000 mg ÷ 1,000 mL = 1 mg/mL.
3. Convert to percentage: parts per 1,000 → parts per 100: $100/1{,}000 = 0.1\\%$ w/v.

**Answer:** 1 mg/mL = 0.1% w/v. **Interpretation:** all three dialects describe one preparation. A dose of 0.5 mg therefore requires 0.5 mL — the mg/mL form is the one that feeds directly into the syringe, which is exactly why emergencies are drilled from the ratio form.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ratio strength survives in modern practice precisely where dilute emergency products keep their traditional labelling — reading "1 in 1,000" as 1 mg/mL on sight is a patient-safety reflex, and the surrounding dilution calculations (preparing a 1 in 10,000 irrigation from a 1 in 1,000 stock) are standard dispensary tasks handled by simple proportion: tenfold dilution of the concentration, tenfold increase of the final volume.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Express 1 in 5,000 w/v as a percentage and in µg/mL.
2. A stock is 1 in 500 w/v. How would you prepare 200 mL of a 1 in 2,500 w/v solution from it? State the volume of stock and the diluent.
3. Why do very dilute products traditionally use ratio strength rather than percentage — what goes wrong with "0.02%" as a working label?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 1 in X = 1 part per X parts; keep the basis (w/v, w/w) with the ratio.
- 1 in 1,000 w/v = 1 mg/mL = 0.1% w/v — the must-be-instant conversion.
- % ↔ ratio: multiply/divide by 100/X; dilution tasks are pure proportion.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Parts per Million (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Parts per Million',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Parts per million (ppm)** expresses concentration as one part of solute per million ($10^6$) parts of solution — the language of trace amounts, where percentages collapse into unreadable decimals (0.0001% and 1 ppm are the same concentration; only one of them is usable at a glance).

The practical conversions depend on the phase. For **dilute aqueous solutions**, density is ≈ 1.0 g/mL, so 1 L of water weighs ≈ 1 kg — and the mass-in-mass ratio becomes a friendly mass-per-volume statement:

$$
1 \\text{ ppm} \\approx 1 \\text{ mg per litre} \\; (\\text{mg/L})
$$

This is the form environmental and water-quality standards are written in: a fluoride limit quoted in mg/L *is* a statement in ppm. For **solids and metals** the mass basis is used directly: 1 ppm = 1 mg per kg of material — the form trace-impurity limits for pharmaceutical ingredients take. Both are the same ratio (one millionth by mass); only the units of the "part" change with convenience.

The percentage bridge is worth memorising: 1% = 1 part in 100 = 10,000 parts per million, so

$$
\\% = \\frac{\\text{ppm}}{10{,}000} \\qquad \\text{ppm} = \\% \\times 10{,}000
$$

As always in this block, the basis travels with the number: ppm w/w (mg/kg) and ppm w/v (mg/L in water) coincide numerically for dilute aqueous solutions because of water's friendly density — the same coincidence that makes SG numerically equal density in g/mL in the previous block.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 1 ppm = 1 part per 10⁶ parts — the trace-amount dialect where percentages become unreadable decimals.
- Dilute aqueous solutions: 1 ppm ≈ 1 mg/L (water's density makes mg/kg ≈ mg/L).
- Solids/metals: 1 ppm = 1 mg/kg — the trace-impurity-limit form.
- Bridge: 1% = 10,000 ppm; ppm = % × 10,000.`,
      },
      {
        kind: 'FORMULAS',
        body: `Defining ratio and its working forms:

$$
\\text{ppm} = \\frac{\\text{mass of solute}}{\\text{mass of solution}} \\times 10^6
$$

$$
\\text{ppm (aqueous)} \\approx \\frac{\\text{mg of solute}}{\\text{litre of solution}} \\qquad \\text{ppm (solids)} = \\frac{\\text{mg}}{\\text{kg}}
$$

$$
\\text{ppm} = \\% \\times 10{,}000 \\qquad \\% = \\frac{\\text{ppm}}{10{,}000}
$$

The mg/L ≈ ppm step uses ρ_water ≈ 1.0 g/mL (1 L ≈ 1 kg) — exact for dilute aqueous work, stated as an approximation for that reason.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a 500 mL sample of water contains 0.25 mg of a contaminant. **Find:** the concentration in ppm (aqueous).

1. Formula: ppm ≈ mg/L for dilute aqueous samples.
2. Convert the sample volume: 500 mL = 0.5 L.
3. Substitute: 0.25 mg ÷ 0.5 L = 0.5 mg/L.
4. Therefore: 0.5 ppm.

**Answer:** 0.5 ppm. **Interpretation:** as a percentage this would be 0.00005% — unreadable. The ppm form exists precisely so that trace concentrations can be stated, compared against limits, and acted on without counting zeros; the percentage bridge (0.5 ppm ÷ 10,000 = 0.00005%) confirms both dialects describe the same ratio.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `ppm is the regulatory dialect of purity and safety limits: trace-element impurities in drug substances, arsenic and lead limits in pharmacopoeial tests, fluoride in drinking water, and residual solvents are all quoted in ppm or mg/kg. When a monograph says "not more than 10 ppm", the pharmacist's task is often exactly the worked example — taking a measured milligram amount in a known mass or volume of sample and checking it against the limit in the same dialect.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Express 4 ppm (aqueous) in mg/L, in % , and in µg/mL — showing each bridge used.
2. A 250 mL aqueous sample contains 0.375 mg of a contaminant. Compute the concentration in ppm.
3. Why does "1 ppm ≈ 1 mg/L" hold for dilute aqueous solutions but not for a concentrated syrup or an ointment? Which quantity makes it true?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 1 ppm = one part per 10⁶; aqueous: ≈ 1 mg/L; solids: 1 mg/kg.
- 1% = 10,000 ppm — the bridge in both directions.
- The mg/L form leans on water's density (1 L ≈ 1 kg) — true for dilute aqueous work.
- ppm is the dialect of impurity and contaminant limits.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Parts per Billion (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-7',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Parts per Billion',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Parts per billion (ppb)** extends the trace dialect one thousand-fold finer: one part of solute per billion ($10^9$) parts of solution. When even ppm produces inconvenient decimals — modern elemental-impurity limits, ultra-trace contaminants, endocrine-active residues at nanogram levels — ppb keeps the numbers readable.

The unit chain is rigid and worth memorising as a ladder: 1% = 10,000 ppm = 10,000,000 ppb; 1 ppm = 1,000 ppb. For dilute aqueous solutions the working mass form follows the same density logic as ppm (1 L ≈ 1 kg):

$$
1 \\text{ ppb} \\approx 1 \\; \\mu\\text{g per litre} \\; (\\mu\\text{g/L})
$$

and for solids, 1 ppb = 1 µg/kg. Note the mg→µg and ppm→ppb steps are the *same* thousand-fold move — that parallel is what makes the ladder easy to carry in your head: three places of thousand (kg → g → mg → µg) mirror three dialects of thousand (ppb → ppm → %).

ppb is not a pharmacy counting-room unit — you will rarely compound in it — but it is the reading language of modern quality standards for trace elements, and the conceptual skill matters: converting between dialects without losing or inventing a factor of a thousand. That is precisely the skill the conversion lesson (pct-9-10) drills at the block's capstone.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 1 ppb = 1 part per 10⁹ parts — one thousand times finer than ppm.
- Ladder: 1% = 10,000 ppm = 10⁷ ppb; 1 ppm = 1,000 ppb.
- Dilute aqueous: 1 ppb ≈ 1 µg/L; solids: 1 µg/kg.
- Reading language of modern ultra-trace limits; the skill is factor-of-1,000 discipline.`,
      },
      {
        kind: 'FORMULAS',
        body: `Defining ratio and working forms:

$$
\\text{ppb} = \\frac{\\text{mass of solute}}{\\text{mass of solution}} \\times 10^9
$$

$$
\\text{ppb (aqueous)} \\approx \\frac{\\mu\\text{g}}{\\text{L}} \\qquad \\text{ppb (solids)} = \\frac{\\mu\\text{g}}{\\text{kg}}
$$

Ladder conversions:

$$
\\text{ppb} = \\text{ppm} \\times 1{,}000 = \\% \\times 10^{7}
$$

Each step of the ladder (ppb → ppm → %) is ×1,000, matching µg → mg → g.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a 4 L water sample contains 2 µg of an elemental contaminant. **Find:** the concentration in ppb, and re-express it in ppm and %.

1. Formula: ppb ≈ µg/L for dilute aqueous samples.
2. Substitute: 2 µg ÷ 4 L = 0.5 µg/L.
3. Therefore: 0.5 ppb.
4. Ladder down: 0.5 ppb ÷ 1,000 = 0.0005 ppm; ÷ 10,000 further = 0.00000005 % (i.e. $5 \\times 10^{-8}$%).

**Answer:** 0.5 ppb = 0.0005 ppm = $5 \\times 10^{-8}$ %. **Interpretation:** the ppb form is the only readable one — and the ladder arithmetic shows *why* it exists. Check the direction of every division: going ppb → ppm the number must shrink; if it grew, a factor of 1,000 was applied backwards.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Modern pharmacopoeial limits for elemental impurities in drug products are set at levels that read naturally in µg/g and ppb-scale quantities, and water-quality standards for injectable-grade water specify trace contaminants at similarly fine scales. The pharmacist's contribution is rarely measuring these — it is reading them correctly, comparing a measured µg/L value against a limit quoted in the same dialect, and never letting a factor of 1,000 slip during conversion.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 0.03 ppm to ppb and to µg/L (aqueous), stating each bridge.
2. A 2 L sample contains 5 µg of a contaminant. Compute the concentration in ppb, then in ppm.
3. A colleague reports "0.5 ppb = 500 ppm". Without recalculating from scratch, explain which step of the ladder went the wrong way and what the correct relationship is.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 1 ppb = one part per 10⁹; aqueous: ≈ 1 µg/L; solids: 1 µg/kg.
- Ladder: % —(×10,000)→ ppm —(×1,000)→ ppb; shrink the number as you step down.
- The mg↔µg and ppm↔ppb thousand-steps move in parallel — carry them together.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Molar Concentration (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-8',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Molar Concentration',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Molarity counts chemical particles, so it needs the mole concept:

- **mole** = the amount of substance containing as many particles as there are atoms in 12 g of carbon-12 ($6.02 \\times 10^{23}$ particles);
- **molar mass ($M_r$)** = the mass of one mole of a substance in grams, read from atomic/molecular weights (as introduced in the measurement block's Atomic and Molecular Weights lesson);
- one mole of any substance always contains the same number of particles — that is what makes molarity chemically meaningful.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Molar concentration (molarity, M)** expresses concentration as moles of solute per litre of solution:

$$
c = \\frac{n}{V}
$$

where $n$ is the amount in moles and $V$ the volume in litres. Its unit is mol/L, written M, with the usual decimal ladder: 1 M = 1,000 mM (millimolar) = 1,000,000 µM (micromolar).

Molarity is the chemist's dialect because reactions happen between *particles*, not grams. Two solutions mixed in equimolar amounts contain stoichiometrically matched particles — a statement gram-per-litre concentrations cannot make. In pharmacy this matters wherever body chemistry is the point: electrolyte concentrations in intravenous fluids are quoted in mmol/L because physiology responds to ion numbers, not ion mass.

The link back to the percentage dialect is the molar mass. Converting % w/v → molarity: x g per 100 mL → 10x g/L → ÷ $M_r$ → moles per litre. The landmark example is normal saline: 0.9% w/v NaCl = 9 g/L; with $M_r$(NaCl) = 58.44 g/mol, that is 9/58.44 = 0.154 mol/L = **154 mmol/L** — the concentration of sodium in extracellular fluid, which is precisely why the product is "physiological". One preparation, two dialects, and the molar one explains *why* it is physiological.

Dilution logic also runs clean in molarity: $c_1 V_1 = c_2 V_2$ — moles taken from stock equals moles delivered — the same proportion principle as every dilution in this block, now in particle-counting units.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Molarity c = n/V: moles of solute per litre of solution (mol/L = M); ladder M → mM → µM by thousands.
- Chemistry counts particles: stoichiometry and electrolyte physiology speak molar, not mass.
- % w/v → molarity: (x g/100 mL → 10x g/L) ÷ M_r.
- Landmark: 0.9% w/v NaCl = 9/58.44 = 0.154 M = 154 mmol/L — physiological.
- Dilution: c₁V₁ = c₂V₂ (moles conserved).`,
      },
      {
        kind: 'FORMULAS',
        body: `Definition and the mass bridge:

$$
c = \\frac{n}{V} = \\frac{m}{M_r \\times V}
$$

c in mol/L, n in mol, V in L, m in g, $M_r$ in g/mol.

Percentage bridge (w/v):

$$
c \\text{ (mol/L)} = \\frac{\\% \\, \\text{w/v} \\times 10}{M_r}
$$

(x g per 100 mL = 10x g per L; dividing by $M_r$ converts grams to moles.)

Dilution law:

$$
c_1 V_1 = c_2 V_2
$$

(any consistent volume units — the law is a mole balance).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** 5% w/v glucose, using $M_r$ ≈ 180 g/mol (standard approximate value). **Find:** the molar concentration.

1. Convert to g/L: 5 g per 100 mL = 50 g/L.
2. Bridge: $c = m/(M_r V) = 50/(180 \\times 1)$.
3. Calculate: 50/180 = 0.2777… ≈ 0.278 mol/L.

**Answer:** ≈ 0.278 M = 278 mmol/L. **Interpretation:** a 5% w/v glucose infusion and a 278 mmol/L glucose solution are the same bottle described in two dialects — the molar one is what metabolic and osmotic reasoning consumes. (For NaCl, note the ion count doubles in mmol/L terms: 154 mmol/L NaCl gives 154 mmol/L Na⁺ and 154 mmol/L Cl⁻ — a stoichiometric fact, not a new concentration.)`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Electrolyte products are prescribed and interpreted in mmol/L because that is the language of physiology: sodium 154 mmol/L in saline, potassium quoted in mmol/L for infusion-rate safety. Molarity is also the working unit of every chemistry-flavoured task in later pharmacology — receptor concentrations, enzyme kinetics (the Km you met in biochemistry is an molar quantity), and buffer calculations all count particles, not grams.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 2.1% w/v sodium bicarbonate ($M_r$ = 84) to mmol/L — showing the bridge step-by-step.
2. Why is an electrolyte solution's clinical appropriateness judged in mmol/L rather than % w/v? What does the molar dialect capture that the mass dialect cannot?
3. How many mmol of Na⁺ does a 500 mL bag of 0.9% w/v NaCl deliver, and what assumption about dissociation does your answer use?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Molarity = mol/L; counts particles — the dialect of stoichiometry and physiology.
- % w/v → M: multiply by 10, divide by $M_r$.
- 0.9% w/v NaCl = 154 mmol/L — mass dialect meets physiology.
- Dilutions: c₁V₁ = c₂V₂; electrolyte ion counts follow stoichiometry (NaCl → Na⁺ + Cl⁻).`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 9 — Other Expressions of Concentration (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-9',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Other Expressions of Concentration',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A survey lesson of the remaining dialects you will meet in later pharmacy units — each defined, each with the one idea that distinguishes it.

**Molality (mol/kg).** Moles of solute per **kilogram of solvent** (not of solution). Its distinguishing property: because both sides are masses, molality does not change with temperature — unlike molarity, whose litre-denominator expands as liquids warm. That temperature-independence is why molality appears in colligative work (freezing-point depression, osmotic reasoning at defined temperatures).

**Normality (N, equivalents per litre).** Moles of *reactive units* (equivalents) per litre. One equivalent is the amount that donates or accepts one mole of reactive charge — for acids and bases, one mole of H⁺ or OH⁻. Because one mole of sulfuric acid supplies two moles of H⁺, 1 M H₂SO₄ = 2 N. Normality is declining in modern usage (ambiguous without the reaction context), but it survives in older pharmacopoeial volumetric assays, so reading it remains necessary.

**Milliequivalents (mEq).** The electrolyte dialect of clinical practice. One milliequivalent is one thousandth of an equivalent; for an ion, mEq = mmol × |charge|. Potassium and sodium products are dosed in mEq because charge balance — not mass — is what physiology regulates. A 1-valent ion (Na⁺, K⁺) has mEq = mmol; a 2-valent ion (Ca²⁺) has mEq = 2 × mmol.

**Mass concentration (g/L, mg/mL).** The plain mass-per-volume form you have already used as the *bridge* in nearly every conversion of this block — named here as a dialect in its own right, because dose calculations ultimately run in it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Molality = mol/kg **solvent** — temperature-independent (mass denominator), unlike molarity.
- Normality = equivalents/L; 1 M H₂SO₄ = 2 N; ambiguous without reaction context — declining but readable.
- mEq = mmol × |charge|: Na⁺/K⁺ mmol = mEq; Ca²⁺ mEq = 2 × mmol — the clinical electrolyte dialect.
- Mass concentration (g/L, mg/mL) is the conversion bridge you have used throughout.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{molality } b = \\frac{n \\text{ (mol)}}{\\text{kg of solvent}} \\qquad \\text{normality } N = \\frac{\\text{equivalents}}{\\text{L}} = \\text{molarity} \\times n_{\\text{factor}}
$$

$$
\\text{mEq} = \\text{mmol} \\times |\\text{ionic charge}| \\qquad \\text{mass concentration} = \\frac{m}{V} \\; \\left(\\tfrac{\\text{g}}{\\text{L}}, \\tfrac{\\text{mg}}{\\text{mL}}\\right)
$$

$n_{\\text{factor}}$ = moles of reactive units (H⁺, OH⁻, electrons) per mole of solute in the reaction concerned.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a solution contains calcium ions at 2 mmol/L. **Find:** the concentration in mEq/L, and contrast with a sodium solution of the same mmol/L.

1. Formula: mEq = mmol × |charge|.
2. Calcium: 2 mmol/L × 2 = 4 mEq/L.
3. Sodium: 2 mmol/L × 1 = 2 mEq/L.

**Answer:** Ca²⁺ at 2 mmol/L = 4 mEq/L; Na⁺ at 2 mmol/L = 2 mEq/L. **Interpretation:** equal *particle* counts carry unequal *charge* counts — which is exactly why clinical electrolyte practice speaks mEq: the dialect tracks the physiological effect (charge) rather than the particle number (mmol).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `These dialects appear the moment pharmacy leaves pure dispensing: osmolarity and freezing-point work (molality) in compounding, volumetric assay read-through (normality) in quality control, and — above all — electrolyte products (mEq) in clinical practice, where potassium chloride infusions are prescribed in mEq and safety checking depends on reading that unit fluently. Recognising which dialect a document uses is the first step of every conversion.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain why molality, not molarity, is preferred for temperature-dependent physical measurements such as freezing-point work.
2. A solution is 3 mmol/L in Mg²⁺. Express this in mEq/L, and state why the answer differs from a 3 mmol/L Na⁺ solution.
3. Why can normality be ambiguous — what extra information does "1 N" always require?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Molality: mol per kg solvent; temperature-independent — colligative work uses it.
- Normality: equivalents per litre (1 M H₂SO₄ = 2 N); readable in older assays, context-dependent.
- mEq = mmol × charge — the clinical electrolyte unit (Na⁺/K⁺: mmol = mEq; Ca²⁺: ×2).
- Mass concentration (g/L, mg/mL): the ever-present conversion bridge.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 10 — Converting Between Concentration Expressions (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-9-10',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Expressions of Concentration — Converting Between Concentration Expressions',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This capstone assumes the whole block plus two tools from earlier:

- the **density/SG bridge** from the pct-8 block (m = V × SG), which converts volumes to masses — the key to w/v ↔ w/w;
- **molar masses ($M_r$)** from the measurement block, which convert grams to moles — the key to any mass dialect ↔ molarity.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Every conversion in this block is the same manoeuvre: return to the **solute-per-solution ratio**, re-express both sides in the target units, and let the units cancel honestly. The professional method:

1. **Convert to a canonical amount** — grams of solute per mL of solution (or per g of product) is the most convenient neutral form.
2. **Apply the specific bridges** the target dialect needs: ×100 for percentages; ÷X for ratio strength; ×10⁶/×10⁹ for ppm/ppb; ÷$M_r$ for molarity; ×SG for volume↔mass moves.
3. **Check dimensions and magnitude** — units must cancel to the target's, and the result must have plausible size (a trace contaminant converting to "5%" is a factor error, not a discovery).

The bridges and their triggers:

- **% w/v ↔ mg/mL** — needs nothing: ×10 / ÷10.
- **% w/v ↔ ratio strength** — needs nothing: 1 in X = 100/X %.
- **% ↔ ppm ↔ ppb** — needs nothing: ×10,000, then ×1,000.
- **% w/v ↔ molarity** — needs the molar mass: ×10 ÷ $M_r$ (mol/L).
- **% w/v ↔ % w/w** — needs **density/SG**: the pct-8 bridge (V × SG).

Notice the pattern: pure-ratio conversions need nothing; mass↔mole needs $M_r$; mass↔volume needs density. Recognising *which* bridge a conversion demands is the actual skill — it tells you whether the data in hand are even sufficient. A % w/w → % w/v conversion is **impossible without density**; stating that impossibility correctly is as much a part of competence as computing the possible cases.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- One manoeuvre: canonical ratio → target units, with honest unit cancellation.
- Pure-ratio bridges (%↔ratio↔ppm↔ppb) need no extra data; molarity needs $M_r$; w/w↔w/v needs density/SG.
- Sanity check twice: units cancel to target, magnitude plausible for the substance's real-world role.
- Missing-data conversions (w/w ↔ w/v, no density given) must be recognised as impossible, not guessed.`,
      },
      {
        kind: 'FORMULAS',
        body: `The conversion core, assembled from the block:

$$
\\% \\, \\text{w/v} = \\frac{\\text{g}}{\\text{mL}} \\times 100 \\qquad \\text{mg/mL} = 10 \\times \\% \\, \\text{w/v} \\\\
\\% \\, \\text{w/v} = \\frac{100}{X} \\text{ (1 in X)} \\\\
c \\text{ (mol/L)} = \\frac{\\% \\, \\text{w/v} \\times 10}{M_r} \\\\
\\% \\, \\text{w/w} = \\frac{\\% \\, \\text{w/v}}{\\text{SG}} \\qquad \\% \\, \\text{w/v} = \\% \\, \\text{w/w} \\times \\text{SG}
$$

The last pair derives from: X% w/v = X g per 100 mL; that solution mass = 100 × SG (g); so % w/w = X/(100 × SG) × 100 = X/SG.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a glucose solution is 5.0% w/v, $M_r$ ≈ 180 (standard approximate value), SG ≈ 1.0. **Express it in:** mg/mL, ratio strength, mol/L, ppm (aqueous), and % w/w.

1. **Canonical:** 5.0 g/100 mL = 0.05 g/mL = 50 mg/mL.
2. **mg/mL:** 50 mg/mL (from step 1 — already canonical).
3. **Ratio strength:** 5 g per 100 mL → 1 g per 20 mL → **1 in 20 w/v**.
4. **Molarity:** $c = (5.0 \\times 10)/180 = 50/180 = 0.2777… ≈ 0.278$ mol/L = 278 mmol/L.
5. **ppm (aqueous):** 0.05 g/mL = 50 g/L = 50,000 mg/L ≈ 50,000 ppm (= 5% × 10,000 — consistent).
6. **% w/w:** solution mass per 100 mL = 100 mL × 1.0 g/mL = 100 g; so 5 g/100 g = **5.0% w/w** (identical to w/v only because SG = 1.0).

**Answer:** 50 mg/mL = 1 in 20 w/v = 0.278 M = 50,000 ppm = 5.0% w/w. **Cross-check:** each conversion ran through the canonical ratio, so pairwise agreement is guaranteed by construction — e.g. 5.0% w/w × SG 1.0 returns 5.0% w/v ✓.

**Second case — the SG matters:** the same solution at SG 1.2: mass per 100 mL = 120 g → % w/w = 5/120 × 100 = 4.1666… ≈ **4.17% w/w**. The percentage *drops* because the same 5 g now sits in a heavier 100 mL of solution — the density bridge is doing real work, and skipping it would silently misreport the product.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Conversion fluency is the daily mechanics of pharmaceutics: a manufacturer's w/w specification must be checked against a w/v dispensing label (density bridge); a concentration quoted in % must feed a dose calculation in mg/mL (×10); an electrolyte prescription in mEq traces back to % w/v through mmol and $M_r$; and impurity limits in ppm must be compared against assay results in mg/L. Every one of these is the canonical-ratio manoeuvre — and every dispensing error it prevents is a factor-of-ten-class error caught by the unit check.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A solution is 2.5% w/v of a drug with $M_r$ = 250. Convert to mg/mL, ratio strength, and mmol/L — showing the canonical ratio at each step.
2. A product is labelled 10% w/w with SG 1.25. Express it as % w/v, and state explicitly which bridge your working used.
3. A colleague attempts to convert 3% w/w to % w/v "because the numbers are both percentages". Explain what data are missing, and what the conversion would need.
4. An impurity is measured at 0.004% w/w. Express it in ppm and ppb. Which dialect would a pharmacopoeial limit most likely use, and why?
5. Without computing: for a solution with SG > 1, is % w/w larger or smaller than the same solution's % w/v? Justify from the bridge formula.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One manoeuvre for every conversion: canonical ratio (g/mL) → target dialect, units cancelling honestly.
- No extra data needed: %↔ratio (100/X), %↔ppm (×10⁴), ppm↔ppb (×10³), % w/v↔mg/mL (×10).
- $M_r$ needed for molarity (×10 ÷ $M_r$); density/SG needed for w/w↔w/v (% w/w = % w/v ÷ SG).
- SG > 1 ⇒ % w/w < % w/v; missing density = impossible conversion, state it, never guess.
- Final defence: unit cancellation + magnitude sanity check.`,
      },
    ],
  },
];
