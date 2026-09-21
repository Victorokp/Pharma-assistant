import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 10: completes the locked pct-5 group block ("International Systems of
 * Measurement"): the Tier D orientation lesson plus all nine children
 * (pct-5-1…5-6 and 5-8/5-9 Tier B; pct-5-7 Tier C). Node IDs, titles (with the
 * exact group-prefix convention), and the parent topic (pct-4) mirror
 * curriculum.ts exactly; nothing here creates, renames, or reorders nodes.
 *
 * Numeric-value discipline: metric prefixes and definitional scale conversions
 * (K = °C + 273.15; °F = 1.8·°C + 32) are exact definitions. Household and
 * apothecary equivalences (tsp 5 mL, tbsp 15 mL, fl oz 30 mL, lb 2.2 per kg,
 * grain 65 mg) are conventional teaching approximations carried in verifyFlags
 * on pct-5-7/5-8. Standard atomic weights are IUPAC convention values (flagged
 * on pct-5-9). Mole detail is deferred to pct-9-8 (cross-referenced, not
 * duplicated); detailed measuring practice stays with pct-6.
 */
export const pct201MeasurementSystemsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // GROUP ORIENTATION (Tier D — overview only; children are the units)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every pharmaceutical calculation runs on a quantity **and** its unit — "250" alone is not an amount of drug. This group builds the unit system itself, the vocabulary every later calculation assumes. The ladder runs: the **metric system** (the decimal skeleton) → the **International System of Units** (the formal standard built on it) → the **common pharmaceutical units** (the subset pharmacy uses daily) → the three everyday **quantities**: mass, volume, length → **time** → **temperature scales** → then the conversion skills: **intersystem conversions** and the **common equivalents** worth knowing cold → closing with **atomic and molecular weights**, the dimensionless bridge into molar language.

One idea organises everything: metric units are the *same quantity* at different scales, related by powers of ten, so converting is moving a decimal — while time and the household/apothecary systems are related by *definitions and conventions* instead, and are handled by stated factors rather than decimal shifts. Knowing which kind of conversion you are facing is the group's central skill.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Metric units differ by powers of ten — conversion is a decimal shift; time and household conversions use stated factors.
- The ladder: metric → SI → pharmacy units → mass/volume/length → time → temperature → conversions → equivalents → atomic/molecular weights.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the nine child lessons are the study units, in ladder order.
- Central skill: recognise whether a conversion is a power-of-ten shift (metric) or a stated-factor conversion (time, household, apothecary).`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Metric System (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Metric System',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **metric system** measures every quantity in one decimal framework: a small set of base units (gram for mass, litre for volume, metre for length) scaled by **prefixes** that are pure powers of ten. Each prefix is a multiplier with a fixed meaning, identical whichever quantity it attaches to: **kilo-** always means ×1,000 (kilogram, kilometre, kilojoule); **milli-** always means ÷1,000 (milligram, millilitre, millimetre); **micro-** always means ÷1,000,000; **centi-** always means ÷100; **deci-** ÷10; **deka-** ×10; **hecto-** ×100.

Why this matters pharmaceutically: the prefixes make conversion **arithmetic-free** in a sense — moving from grams to milligrams is multiplying by 1,000, i.e. shifting the decimal three places, with no memorised factor like "16 ounces to the pound". Because drug doses span enormous ranges (micrograms for potent drugs, grams for others), the same skeleton must carry them all, and it does. The habit that keeps it safe: **say the prefix's meaning out loud** when converting — micro = millionth — and let the decimal shift follow the meaning, not a remembered rule about which direction to move.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Metric = base units + decimal prefixes; each prefix means the same ×10ⁿ for any quantity.
- kilo ×10³ · hecto ×10² · deka ×10 · deci ÷10 · centi ÷10² · milli ÷10³ · micro ÷10⁶ · nano ÷10⁹.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (prefix-shift conversion, illustrative).**

**Given:** 0.25 g of a substance. **Express** it in milligrams and micrograms.

1. milli- = ÷1,000, so g → mg multiplies by 1,000: 0.25 × 1,000 = **250 mg**.
2. micro- = ÷10⁶, so g → µg multiplies by 1,000,000: 0.25 × 10⁶ = **250,000 µg**.
3. Chain check: mg → µg is another ×1,000: 250 × 1,000 = 250,000 ✓ — the two paths agree.

**Reasonableness:** a gram is a large pharmaceutical quantity; expecting a big number in the smaller unit and getting one (250,000) is the direction check passing. Illustrative teaching value.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every product label, prescription, and monograph quantity in this course sits on the metric skeleton. The professional reflex this lesson builds — decode the prefix before touching the number — is what prevents the classic micro/milli and milli/unit magnitude errors that later lessons teach you to catch.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert (illustratively) 1.5 g to mg and to µg, stating each prefix's meaning aloud in your working.
2. A label reads 500 micrograms. Express this in milligrams — and explain why the decimal moves *left* here.
3. Error-detection: a colleague converts 0.5 mg to "50 µg". Diagnose the error (the shift ran one place, not three) and give the correct answer.
4. Conceptual: why does the same prefix (kilo-) attach to both kilograms and kilometres without changing meaning?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Prefixes are fixed powers of ten, quantity-independent: kilo ×10³ → nano ÷10⁹.
- Convert by meaning, not by a memorised direction: smaller unit → bigger number.
- Chain conversions through the base unit as a cross-check.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — International System of Units (SI) (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — International System of Units (SI)',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **International System of Units (SI, from the French Système International)** is the formally defined modern metric standard: a worldwide agreement, maintained by an international body, that fixes a small set of **base units** and builds everything else from them. The seven base quantities and units: **length** — metre (m); **mass** — kilogram (kg); **time** — second (s); **electric current** — ampere (A); **thermodynamic temperature** — kelvin (K); **amount of substance** — mole (mol); **luminous intensity** — candela (cd). Pharmacy touches four of these daily (m, kg, s, mol) plus temperature.

**Derived units** are combinations of base units — area (m²), density (kg/m³), concentration (expressed in pharmacy as mass per volume). The SI framework matters to pharmacy less for its formalities than for its *discipline*: every unit must trace to a defined base, which is why combining quantities requires combining their units (the dimensional reasoning of the fundamentals lesson) and why "kg/m³" is an honest description of what density is.

One peculiarity is worth knowing because it looks like an error and is not: the kilogram is the *only* base unit whose name already contains a prefix — the gram is the prefix-anchored quantity and the kilogram (not the gram) is the base. In practice you convert g ↔ mg ↔ µg exactly as the metric lesson taught; the peculiarity changes no arithmetic, only the historical explanation.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- SI = the formal metric standard: 7 base units (m, kg, s, A, K, mol, cd) + derived units.
- Derived units combine bases (density kg/m³) — units combine the way quantities do.
- The kilogram is the base unit despite carrying a prefix — a peculiarity, not an arithmetic change.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (reading a derived unit, illustrative).**

**Given:** a liquid's density is declared 1.2 g/mL. **Express** it in SI base-style units (kg/m³).

1. Convert the numerator: 1.2 g = 0.0012 kg.
2. Convert the denominator: 1 mL = 1 cm³ = 10⁻⁶ m³, so per mL → per m³ multiplies by 10⁶.
3. Density: 0.0012 kg ÷ 10⁻⁶ m³ = 1,200 kg/m³.

**Check:** g/mL × 1,000 = kg/m³ (the standard bridge) — 1.2 × 1,000 = 1,200 ✓. Illustrative teaching value (the density concept itself belongs to pct-8).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `SI gives the profession a shared, unambiguous unit language — the reason a monogram in one country and a label in another mean the same thing. The working habit it installs: when combining quantities (mass into volume, drug into solution), write the combined unit too; the units should always describe the quantity honestly.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the SI base quantity and unit for: amount of substance; thermodynamic temperature; mass.
2. Which SI base unit's name contains a prefix, and does that change how you convert g → mg? Explain.
3. Conceptual: concentration expressed in mg/mL is a derived unit. What two base-kind quantities does it combine, and why is that combination honest?
4. Using the g/mL → kg/m³ bridge (×1,000), convert (illustratively) 0.95 g/mL to kg/m³.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- SI: 7 base units + derived units; pharmacy works daily with m, kg, s, mol, K.
- Derived units combine bases exactly as the quantities combine.
- kg-with-prefix is a peculiarity of definition, not of arithmetic.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Common Pharmaceutical Units (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Common Pharmaceutical Units',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pharmacy's working subset of the metric system is small and worth knowing exactly. **Mass:** the **kilogram (kg)** for bulk quantities, the **gram (g)** for formulation amounts, the **milligram (mg)** for most drug doses, the **microgram (µg, sometimes marked mcg)** for potent drugs, and the **nanogram (ng)** for the most potent assays. **Volume:** the **litre (L)** for bulk liquids, the **millilitre (mL)** for doses and dispensed volumes, the **microlitre (µL)** for analytical work. **Length:** the **millimetre (mm)** and **centimetre (cm)** for apparatus and particle dimensions. **Amount of substance:** the **mole (mol)** and its practical subdivision the **millimole (mmol)** for electrolytes and molar concentrations (full treatment pct-9-8/14). **Activity:** the **unit (U)** and **international unit (IU)** for biologicals (pct-11).

Two practices carry the safety weight. First, **µg/mcg**: the symbol µg is standard, but handwriting can turn "µg" into "mg" — the reason error-prone-abbreviation guidance recommends writing **mcg** or the full word on prescriptions; the habit is to *read* any tiny dose figure with the prefix consciously confirmed. Second, **case discipline**: mg ≠ Mg (megagram!) ≠ MG; the letter case is part of the unit, and lower/upper-case swaps are magnitude errors. Units are written with a space between number and symbol by convention (250 mg), and never pluralised with an "s" in symbols (mg, not mgs).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mass: kg → g → mg → µg → ng, each step ÷10³. Volume: L → mL → µL. Length: m → cm → mm.
- mcg/µg: read tiny-dose prefixes consciously; handwriting µ→m is a known error source.
- Case matters (mg ≠ Mg); symbols take a space, never a plural "s".`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (selecting the sensible unit, illustrative).**

**Given:** three quantities to express in the conventional pharmacy unit: 0.000075 g of a potent drug; 0.35 L of a syrup; 2,500,000 µg of a bulk powder.

1. 0.000075 g → ×10⁶ → **75 µg** (µg is the conventional slot for this magnitude — mg would read 0.075, inviting decimal errors on a potent drug).
2. 0.35 L → ×10³ → **350 mL** (dispensed volumes live in mL).
3. 2,500,000 µg → ÷10³ → 2,500 mg → ÷10³ → **2.5 g** (bulk amounts live in g).

**Reasonableness:** each answer sits in the slot pharmacy actually uses — the unit choice is part of the communication, not decoration.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `These are the units on every label you will dispense and every prescription you will check. Fluency here is not academic: most unit-magnitude incidents trace to a prefix or case slip within exactly this small set, which is why the reading habits (conscious prefixes, case discipline) are drilled from the first day of practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Express (illustratively) 0.0004 g in mg and in µg, and state which unit a potent-drug label would conventionally carry.
2. Why do safety guidelines recommend "mcg" or the full word on prescriptions instead of µg? What specific confusion does it prevent?
3. Error-detection: a label draft reads "250 MG of paracetamol". What is wrong, and what two errors could a reader plausibly make?
4. Conceptual: why is 75 µg preferred over 0.075 mg for a potent drug on a working label, when both are numerically equal?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- The daily set: kg/g/mg/µg/ng; L/mL/µL; m/cm/mm; mol/mmol; U/IU.
- Read prefixes consciously on potent doses; write mcg where handwriting risks µ→m.
- Case is part of the unit; symbols: space after the number, no plural s.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Mass, Volume and Length (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Mass, Volume and Length',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `One distinction the working vocabulary needs: **mass** (the quantity of matter; what a balance compares) versus **weight** (the gravitational force on it). Pharmacy colloquially "weighs" everything, and the numbers are treated as mass; the distinction matters conceptually (a balance reading is gravity-independent in principle) but changes no pharmaceutical arithmetic. This lesson uses **mass**.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The three everyday quantities and their working scales:

- **Mass:** kilogram (kg) → gram (g) → milligram (mg) → microgram (µg). One step = ÷10³; the whole ladder spans a billion-fold, which is why prefix discipline is mass's core skill.
- **Volume:** litre (L) → millilitre (mL) → microlitre (µL). The same ÷10³ steps. One useful fixed relationship: the litre was defined so that **1 mL of water has a mass of about 1 g** (at its densest, 4 °C — the "about" is because density varies slightly with temperature; the full density treatment belongs to pct-8). This water anchor is why mL and g feel interchangeable in dilute pharmacy work — and why they must *not* be silently treated as equal for concentrated or non-water materials.
- **Length:** metre (m) → centimetre (cm, ÷10²) → millimetre (mm, ÷10³). Length matters less in dosing than in apparatus dimensions and particle sizes, but the prefix grammar is identical — cm is ÷100, not ÷1,000, a step-size difference from mass units that must be read deliberately.

Conversion is always "decode the prefix, move the decimal": 1.2 kg = 1,200 g; 350 mL = 0.35 L; 0.02 m = 2 cm = 20 mm. The direction rule from pct-5-1 applies throughout: converting to a **smaller** unit yields a **bigger** number.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mass: kg→g→mg→µg, ÷10³ per step; volume: L→mL→µL, ÷10³; length: m→cm (÷10²)→mm (÷10³).
- Water anchor: 1 mL water ≈ 1 g (at 4 °C) — a near-identity for dilute work, not a universal equality.
- Smaller unit → bigger number; read each prefix's step size (cm ≠ mm).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (three-quantity conversion drill, illustrative).**

**Convert:** 1.2 kg to g; 350 mL to L; 0.02 m to mm.

1. 1.2 kg × 10³ = **1,200 g** (kilo decoded).
2. 350 mL ÷ 10³ = **0.35 L** (milli decoded, direction: smaller→bigger unit gives smaller number here? No — going mL→L is to a *bigger* unit, so the number shrinks ✓).
3. 0.02 m → cm: ×10² = 2 cm; → mm: ×10³ = **20 mm**. Chain check: 2 cm × 10 = 20 mm ✓ (cm→mm is one ÷10 step).

**Reasonableness:** each result moves the way the direction rule demands; the cm/mm chain confirms the step sizes differ from the mass ladder. Illustrative teaching values.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Mass and volume are the quantities of every dispensing transaction (the pct-6 lessons cover the *measuring* side — balances, glassware, technique); length appears in apparatus and particle specifications. The water anchor (1 mL ≈ 1 g) is the quiet bridge to the density lessons ahead — useful intuition, explicitly an approximation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert (illustratively) 0.85 g to mg, 45 mL to L, and 0.15 m to cm, stating the direction rule each time.
2. The water anchor says 1 mL water ≈ 1 g. Why is this an approximation rather than a definition to calculate with? (Two words: density, temperature — explain both.)
3. Error-detection: a colleague treats 1 cm as ÷1,000 of a metre "like milli". Give the correct cm value of 0.02 m and name the step-size confusion.
4. Conceptual: mass vs weight — why does the distinction not change any pharmacy arithmetic, yet still matter conceptually?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Ladders: kg→g→mg→µg and L→mL→µL (÷10³ each); m→cm (÷10²)→mm (÷10³).
- 1 mL water ≈ 1 g is a near-identity (4 °C anchor), not an equality for all liquids.
- Direction rule everywhere: smaller unit, bigger number.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Units of Time (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Units of Time',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Time in pharmacy runs on the SI **second (s)** with the accepted non-decimal units **minute (min, 60 s)**, **hour (h, 60 min = 3,600 s)**, and **day (d, 24 h)** — related by *definitions*, not powers of ten. That is the structural point: time conversions are **stated-factor conversions**, the counterpart to the metric decimal shifts, which is why mixing the two habits (shifting decimals for hours) is a signature error.

Pharmacy meets time in **frequencies and durations**: "every 6 hours" (q6h) means 24 ÷ 6 = 4 administrations per day; "twice daily" means 2; a 7-day course at 3 doses daily means 21 administrations; an infusion over 8 hours must enter rate arithmetic as 480 minutes or 8 h — whichever unit the rate formula wants, converted *before* the formula (the pct-12-7 drip-rate arithmetic is exactly this). The discipline: **resolve the time unit to the one the calculation demands first**, then run the arithmetic. A rate in mL/h fed a per-minute formula, or a q6h frequency entered as "6", are the classic failures — both are unit-frame errors, caught by the same habit as every other unit check: name the frame, convert once, visibly.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- min = 60 s; h = 60 min; day = 24 h — stated factors, not decimal shifts.
- q6h → 24 ÷ 6 = 4 administrations/day: frequency words convert to counts before dosing arithmetic.
- Resolve the time frame (h vs min) to the formula's demand before calculating.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{administrations/day} = \\frac{24 \\text{ h}}{\\text{interval (h)}} \\qquad \\text{time (min)} = \\text{time (h)} \\times 60
$$

Both are definitional conversions; neither involves a power of ten.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (frequency and duration, illustrative).**

**Convert:** a q6h schedule to administrations per day; 8 h to minutes; a 3-day course at 4 daily doses to total administrations.

1. q6h: 24 ÷ 6 = **4 per day**.
2. 8 h × 60 = **480 min**.
3. 3 days × 4/day = **12 administrations**.

**Reasonableness:** 4 doses 6 h apart genuinely tile the day (0, 6, 12, 18 h ✓); 480 min is the duration the pct-12-7 drip example used, confirming the frame. Illustrative teaching values.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Frequency interpretation is a daily dispensing act — the label's "four times daily", the prescriber's "q6h", and the interval arithmetic behind them must agree. The habit this lesson drills (convert the time frame once, visibly, before any rate or count arithmetic) is the time-domain form of the unit discipline running through the whole topic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert (illustratively) q8h to administrations per day, and a 72-h infusion duration to days.
2. A course is "3 times daily for 10 days". Total administrations — and which two stated factors did the reasoning use?
3. Error-detection: a colleague enters "6" as the number of doses for a q6h schedule. What went wrong, and what tiling check catches it?
4. Conceptual: why are time conversions *not* power-of-ten shifts, and what habit replaces the decimal-shift reflex?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Time factors are definitional: 60/60/24 — never shift decimals.
- Frequency words and q-hours resolve to counts via 24 ÷ interval.
- Match the time frame to the formula before arithmetic.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Temperature Scales (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Temperature Scales',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Three temperature scales matter pharmaceutically. **Celsius (°C)** — the everyday pharmacy scale: room temperature, refrigeration (2–8 °C), freezing (0 °C), boiling (100 °C) — the anchors stated as definitions of water's behaviour at standard pressure. **Kelvin (K)** — the SI base unit: the same degree size as Celsius but zero-shifted to absolute zero (the floor of thermal energy): **K = °C + 273.15** (a definitional offset, exact). **Fahrenheit (°F)** — the scale patients quote: **°F = 1.8 × °C + 32** and back **°C = (°F − 32) ÷ 1.8** (both definitional; ÷1.8 is preferred over a rounded 0.556 multiplier to avoid fake precision).

The structural insight that prevents errors: Celsius↔Kelvin is a pure **offset** (add/subtract — degree sizes identical), while Celsius↔Fahrenheit is an **offset *and* a scale change** (the 1.8 factor resizes the degree). A conversion that forgets the 32, or applies 1.8 without it, produces the classic nonsense results — which is why every temperature conversion closes with an **anchor check**: 0 °C = 273.15 K = 32 °F; 100 °C = 310.15 K + … = 373.15 K = 212 °F; body temperature 37 °C = 310.15 K = 98.6 °F. If your converted value contradicts an anchor, the formula's order slipped.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- K = °C + 273.15 (pure offset, exact); °F = 1.8·°C + 32 and °C = (°F − 32)/1.8 (offset + scale).
- Anchor checks: 0 °C = 273.15 K = 32 °F; 37 °C = 310.15 K = 98.6 °F.
- Never divide by a rounded 1.8 substitute; ÷1.8 exactly.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
K = °C + 273.15 \\qquad °F = 1.8 \\times °C + 32 \\qquad °C = \\frac{°F - 32}{1.8}
$$

All three are definitional; the anchor pair (0 °C, 100 °C) verifies any use of them.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (storage and body temperatures, illustrative).**

**Convert:** a "store below 25 °C" label to Fahrenheit; body temperature 98.6 °F to Celsius; 25 °C to kelvin.

1. °F: 1.8 × 25 + 32 = 45 + 32 = **77 °F**. Anchor-style check: 25 °C is between 0 and 100, so between 32 and 212 — 77 ✓.
2. °C: (98.6 − 32) ÷ 1.8 = 66.6 ÷ 1.8 = **37 °C**. ✓ (the body anchor, recovered).
3. K: 25 + 273.15 = **298.15 K**.

**Reasonableness:** each result sits where the anchors say it must — the offset-only K conversion moved by exactly 273.15; the two-way °F/°C pair reproduced a known anchor.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Storage statements ("below 25 °C", "2–8 °C refrigerated"), patient counselling in Fahrenheit, and any thermodynamic formulation work (kelvin) all meet in this lesson. The anchor-check habit is the practical deliverable: a converted temperature that fails an anchor is wrong before it is acted on.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert (illustratively) a 2–8 °C refrigerator range to Fahrenheit, checking both endpoints against an anchor.
2. Convert 41 °F to Celsius — and state which anchor pair brackets your answer.
3. Error-detection: a colleague computes 98.6 °F → 67 °C "because (98.6 − 32) ÷ 0.99". Diagnose both faults (arithmetic and the divisor) and give the correct value.
4. Conceptual: why is °C → K addition-only while °C → °F needs a multiplier? Answer in terms of degree size and zero points.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- K = °C + 273.15 (offset only); °F = 1.8·°C + 32 (offset + rescale); reverse via ÷1.8.
- Anchors: 0/100 °C ↔ 32/212 °F ↔ 273.15/373.15 K; 37 °C = 98.6 °F.
- Verify every conversion against an anchor before use.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Intersystem Conversions (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-7',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Intersystem Conversions',
    tier: 'C',
    verifyFlags: [
      'Household/apothecary equivalences taught here (tsp 5 mL, tbsp 15 mL, fl oz 30 mL, 1 kg = 2.2 lb, 1 grain ≈ 65 mg, 1 oz avoirdupois ≈ 28.4 g) are conventional teaching approximations: exact definitions are 1 tsp = 4.93 mL (US), 1 fl oz = 29.57 mL, 1 lb = 453.59 g, 1 grain = 64.8 mg. Formal/pharmacopoeial work must quote the exact standard; the rounded values are for education and everyday counselling.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Intersystem conversion** means moving between *different measurement systems* — metric to/from the older **apothecary** system (grains, drams, minims) and the household measures patients actually use (teaspoon, tablespoon, cup, pound). The prerequisite is the pct-5-1/5-4 prefix fluency; this lesson adds the *stated factors* that bridge systems — each factor being a conventional equivalence (flagged: rounded teaching values vs exact standards), never a decimal shift.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The working bridge set (conventional teaching values, flagged):

- **Household volume:** 1 teaspoonful (tsp) = **5 mL**; 1 tablespoonful (tbsp) = **15 mL** (3 tsp); 1 fluid ounce (fl oz) ≈ **30 mL** (2 tbsp); 1 cup ≈ **240 mL** (8 fl oz).
- **Body weight:** **1 kg = 2.2 lb**; going the other way, lb ÷ 2.2 = kg.
- **Apothecary mass:** **1 grain (gr) ≈ 65 mg** — the reason "5 gr" aspirin tablets and "325 mg" are the same historical quantity: 5 × 65 = 325.
- **Avoirdupois mass:** 1 ounce (oz) ≈ 28.4 g; 16 oz = 1 lb.

The method is the **unit-factor chain** (dimensional analysis): write the factor as a fraction with the unwanted unit on top so it cancels, e.g. $65 \\text{ kg} \\times \\dfrac{2.2 \\text{ lb}}{1 \\text{ kg}} = 143 \\text{ lb}$ — the kg cancels, lb survives, and the surviving unit *is* the answer's unit. The tier-C discipline this lesson adds: **direction and precision**. Direction: each factor runs both ways (×2.2 or ÷2.2); the unit cancellation *tells* you which, if you write the factor as a fraction rather than remembering a direction. Precision: teaching factors are rounded (2.2, 65 mg, 30 mL) — sound for counselling and coursework, but formal work quotes the exact standard (the flag records the exact values), and results should carry no more precision than the factor justifies (143 lb from ×2.2, not 143.0182).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Bridges (flagged teaching values): 5 mL/tsp · 15 mL/tbsp · 30 mL/fl oz · 240 mL/cup · 2.2 lb/kg · 65 mg/gr · 28.4 g/oz.
- Unit-factor method: write the factor as a fraction; the unwanted unit cancels; the survivor is the answer.
- Direction comes from the cancellation, not memory; precision respects the rounded factor.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
Q_{\\text{target}} = Q_{\\text{given}} \\times F
$$

with $F$ written as a fraction whose denominator cancels the given unit (e.g. $\\dfrac{2.2\\text{ lb}}{1\\text{ kg}}$, $\\dfrac{5\\text{ mL}}{1\\text{ tsp}}$, $\\dfrac{65\\text{ mg}}{1\\text{ gr}}$). Chains multiply factors so all intermediate units cancel; the final surviving unit must match the question's demand.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — body weight both ways (illustrative).**

**Convert:** 65 kg to lb; 150 lb to kg.

1. 65 kg × (2.2 lb / 1 kg) = **143 lb** (kg cancels ✓).
2. 150 lb × (1 kg / 2.2 lb) = 150 ÷ 2.2 = **68.2 kg** (lb cancels ✓; precision: 68.18… rounded sensibly to 68.2, matching the factor's two significant figures).
3. Reverse check: 68.2 × 2.2 = 150.0 lb ✓.

**Example 2 — household volume chain (illustrative).**

**Given:** a dose of 2.5 tsp. **Express** in mL and as a fraction of a fluid ounce.

1. 2.5 tsp × (5 mL / 1 tsp) = **12.5 mL**.
2. 12.5 mL × (1 fl oz / 30 mL) = **0.42 fl oz** (≈ 0.4).

**Example 3 — the grain bridge (illustrative).**

5 gr × (65 mg / 1 gr) = **325 mg** — the historical aspirin equivalence, recovered exactly with the teaching factor.

**Reasonableness throughout:** cancellation verifies direction; magnitudes sit where everyday sense puts them (an adult near 150 lb ≈ 68 kg; a spoonful ≈ a dozen mL). All values illustrative; factors flagged as teaching conventions.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Intersystem conversion is the counselling interface of measurement: patients take teaspoons, quote pounds, and read grains on old prescriptions, while the profession works metric. The pharmacist converts between the worlds constantly — dose instructions into household measures, chart weights into kilograms — and the unit-factor habit with its cancellation check is the defensible way to do it in the open.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert (illustratively) 55 kg to lb and 180 lb to kg, showing the unit-factor fraction in each and a reverse check.
2. A dose is 1.5 tbsp. Express it in mL and in tsp — and state which factor did not need the metric system at all.
3. (Illustrative) An old prescription reads "gr 10". Convert to mg — and name the exact-standard value the teaching factor (65 mg) approximates.
4. Error-detection: a colleague converts 70 kg to "154,000 lb" by multiplying by 2.2 then by 1,000. Which false step inserted the power of ten, and how does writing the factor as a fraction prevent it?
5. Conceptual: why does the unit-factor method make conversion *direction* impossible to get wrong, while a memorised "×2.2 or ÷2.2" rule is not?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Bridge set (flagged): 5 mL/tsp · 15 mL/tbsp · 30 mL/fl oz · 2.2 lb/kg · 65 mg/gr · 28.4 g/oz.
- Unit-factor fractions: cancel the unwanted unit; the survivor is the answer; direction follows cancellation.
- Teaching factors are rounded — formal work quotes the exact standard (4.93 mL, 453.59 g/lb, 64.8 mg/gr).`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Common Measurement Equivalents (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-8',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Common Measurement Equivalents',
    tier: 'B',
    verifyFlags: [
      'Household equivalents (tsp 5 mL, tbsp 15 mL, fl oz 30 mL, cup 240 mL) are the same conventional teaching approximations flagged on pct-5-7; exact standards are 4.93 mL / 14.79 mL / 29.57 mL / 236.6 mL. Metric ladder equivalents (1 g = 1,000 mg; 1 L = 1,000 mL; etc.) are exact definitions.',
    ],
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A small set of equivalences does most of pharmacy's converting, and owning them cold (with their powers of ten understood, not just recited) is the lesson's goal. **The metric ladders — exact by definition:** 1 kg = 1,000 g; 1 g = 1,000 mg; 1 mg = 1,000 µg; 1 µg = 1,000 ng; 1 L = 1,000 mL; 1 mL = 1,000 µL; 1 cm = 10 mm. **The household set — conventional approximations (flagged):** 1 tsp = 5 mL; 1 tbsp = 15 mL = 3 tsp; 1 fl oz ≈ 30 mL; 1 cup ≈ 240 mL. **Cross-quantity anchors (approximations):** 1 mL water ≈ 1 g (the pct-5-4 anchor); 1 kg = 2.2 lb.

The lesson's working skill is **chaining** equivalents to reach targets the single lines do not state: µg → g needs two ladder steps (÷1,000, ÷1,000); tsp → fl oz runs through mL (tsp × 5 → mL → ÷30). Chaining is also the **verification** method: any equivalent can be re-derived from shorter ones, so a doubtful factor can be audited on the spot — 1 tbsp = 15 mL because 3 tsp × 5 mL; 1 kg = 1,000,000 mg because 1,000 × 1,000. Distinguishing the two kinds remains essential: the metric lines are definitions (exact, no flag needed), the household lines are conventions (rounded, flagged) — memorising them *as one undifferentiated list* is precisely the error this group exists to prevent.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Exact ladders: 1 kg = 10³ g = 10⁶ mg = 10⁹ µg; 1 L = 10³ mL = 10⁶ µL; 1 cm = 10 mm.
- Household (flagged): tsp 5 mL · tbsp 15 mL · fl oz 30 mL · cup 240 mL.
- Chain short equivalents to build long ones — and to audit any factor on demand.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (chained conversions, illustrative).**

**Convert:** 0.25 g to µg; 2.5 tsp to mL; 750 µL to mL.

1. 0.25 g → mg: ×10³ = 250 mg → µg: ×10³ = **250,000 µg** (two ladder steps; the pct-5-1 example reproduced).
2. 2.5 tsp × 5 mL/tsp = **12.5 mL** (household factor, flagged).
3. 750 µL ÷ 10³ = **0.75 mL** (ladder, downward).

**Chain-audit demonstration:** confirm 1 fl oz ≈ 30 mL from shorter factors: 1 fl oz = 2 tbsp = 2 × 15 = 30 mL ✓ — the factor derives from its own family. Illustrative values.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `These equivalents are the reflex layer of practice: the dispensed volume, the counselling spoon, the chart weight. The professional standard is knowing them *with their kind attached* — which are definitions you may compute with freely, and which are rounded conventions to hedge in counselling and flag in formal documents.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert (illustratively) 3.4 kg to mg by chaining two ladder steps — and audit the result from 3.4 × 10⁶ directly.
2. (Illustrative) A dose is 2 tbsp. Express in mL and in tsp, and state which of your factors is definitional and which is a convention.
3. Error-detection: a colleague asserts "1 tsp = 5 mL, therefore 1 tsp = 5,000 µL is only approximate". Diagnose: which part is exact, which conventional, and why?
4. Conceptual: why can the household set be *audited* (fl oz from tbsp) but never *derived* from the metric ladder alone?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Own the exact ladders (10³ chains) and the flagged household set (5/15/30/240 mL).
- Chain equivalents for unlisted targets and to audit any factor.
- Kind matters: definitions compute; conventions hedge.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 9 — Atomic Weights and Molecular Weights (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-5-9',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'International Systems of Measurement — Atomic Weights and Molecular Weights',
    tier: 'B',
    verifyFlags: [
      'Standard atomic weights used here (H 1.008, C 12.011, O 15.999, Na 22.990, Cl 35.45) are IUPAC convention values; formal work should quote the current IUPAC table for the exact isotope composition in use.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Atoms are too small to weigh usefully one at a time, so chemistry weighs them **relatively**: the **relative atomic mass (atomic weight, Aᵣ)** of an element is the mass of its atoms compared with a standard — by international convention, the carbon-12 atom assigned exactly 12. Because it is a *ratio of masses*, **Aᵣ is dimensionless** — "12.011" for carbon is a pure number, not grams. The same construction applied to a molecule sums the atoms' contributions into the **relative molecular mass (molecular weight, Mᵣ)**.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Computing **Mᵣ** is the lesson's working skill: read the molecular formula, multiply each element's Aᵣ by its atom count, sum. Water, H₂O: 2(1.008) + 15.999 = **18.015**. Sodium chloride, NaCl: 22.990 + 35.45 = **58.44**. Glucose, C₆H₁₂O₆: 6(12.011) + 12(1.008) + 6(15.999) = 72.066 + 12.096 + 95.994 = **180.156 (≈ 180.16)** — consistent with the ≈180 working value pct-9-8 used for glucose. The values stay dimensionless — and the *pharmaceutical* meaning arrives through the molar bridge: an amount of **Mᵣ grams** of the substance contains one mole of its molecules. This is why Mᵣ is the conversion key between the mass world (g, mg) and the amount-of-substance world (mol, mmol) — the same structural role potency played in pct-11.

Two disciplines complete the lesson. First, **precision honesty**: Aᵣ values are convention constants (flagged — IUPAC tables); quoted Mᵣ results carry as many decimals as the inputs justify (58.44 from five-figure inputs, not 58.44000). Second, **scope honesty**: the full molar machinery — moles, molar concentration, mmol in electrolytes — is taught in its own right in pct-9-8 and pct-14; this lesson builds and verifies the *key* (Mᵣ) and names the door it opens, without duplicating those lessons.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Aᵣ/Mᵣ are relative to carbon-12 (exactly 12) and dimensionless — ratios, not masses.
- Mᵣ = Σ(Aᵣ × atom count); Mᵣ grams of a substance ≡ one mole of it — the mass ↔ mole key.
- Precision: quote Mᵣ to the inputs' justification; Aᵣ values are IUPAC conventions (flagged).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (Mᵣ computations, illustrative teaching values).**

**Compute:** Mᵣ of H₂O; of NaCl; of glucose C₆H₁₂O₆.

1. H₂O: 2(1.008) + 15.999 = 2.016 + 15.999 = **18.015** (≈ 18.02).
2. NaCl: 22.990 + 35.45 = **58.44**.
3. C₆H₁₂O₆: 6(12.011) = 72.066; 12(1.008) = 12.096; 6(15.999) = 95.994; sum = **180.156** (72.066 + 12.096 + 95.994), ≈ 180.16.

**Bridge demonstration (counted forward to the mole lesson):** 58.44 g of NaCl is one mole; 5.844 g is 0.1 mol; 58.44 mg is one **millimole**. The three statements are one proportion — the key in action. Full concentration arithmetic follows in pct-9-8.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Molecular weights appear on every electrolyte label calculation (mmol dosing), every molar-concentration problem, and every amount-of-substance declaration in monographs. The lesson's deliverable — a correctly computed, honestly rounded Mᵣ, understood as a dimensionless convention — is the entry ticket to those quantitative lessons.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute Mᵣ (illustratively) for KCl (K 39.098, Cl 35.45) and for H₂SO₄ (H 1.008, S 32.06, O 15.999) — answers 74.548 and 98.072 respectively (check: 2.016 + 32.06 + 63.996).
2. Why is Mᵣ dimensionless, and what construction gives it meaning in grams anyway? (One sentence: the carbon-12 ratio; the Mᵣ-gram mole bridge.)
3. (Illustrative) How many grams is 0.25 mol of NaCl (Mᵣ 58.44)? Verify by proportion: 0.25 × 58.44.
4. Conceptual: why should a quoted Mᵣ of 58.44000 raise suspicion about precision honesty?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Aᵣ/Mᵣ: relative to C-12 = 12; dimensionless by construction.
- Mᵣ = Σ Aᵣ × count; Mᵣ g ≡ 1 mol; Mᵣ mg ≡ 1 mmol — the mass ↔ mole key.
- Precision to the inputs' worth; Aᵣ values are IUPAC conventions (flagged); moles continue in pct-9-8/14.`,
      },
    ],
  },
];
