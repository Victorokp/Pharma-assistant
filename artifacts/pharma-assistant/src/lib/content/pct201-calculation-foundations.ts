import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-4 children: Fundamentals of
 * Pharmaceutical Calculations (remedial foundation block).
 *
 * FINAL REMEDIAL BATCH: the eight previously deferred children
 * pct-4-1…4-8 of the pct-4 topic (authored as the topic lesson in
 * Batch 9). These are REMEDIAL TIER A foundation lessons — filling
 * genuine prerequisite gaps (arithmetic, fractions, ratios, sig figs,
 * rounding, estimation, error-avoidance) for students who lack basic
 * calculation foundations. They are NOT advanced pharmaceutical-
 * calculation lessons; the real calculation canon lives in pct-5…pct-13
 * (topics pct-5/pct-6/pct-7/pct-10/pct-11/pct-12/pct-13 etc.), which
 * these lessons prepare for and reference.
 *
 * Tier A per reviewer instruction (the remedial-foundation register):
 * Tier A lessons carry CHECK QUESTIONS (validator rule) plus the
 * mandatory UNDERSTAND/QUICK RECAP. All arithmetic is elementary,
 * independently verified, and every worked number is stated
 * illustrative.
 */
export const pct201CalculationFoundationsLessons: Lesson[] = [
  {
    nodeId: 'pct-4-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Importance of Pharmaceutical Calculations',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Why does a pharmacy course spend weeks on arithmetic you have done since primary school? Because in pharmacy, a calculation error is not a lost mark — it is a **patient harm**. A factor-of-10 slip that earned a red X in school becomes a tenfold overdose on a ward.\\n\\n**What calculations decide** (the honest tour): the dose a child receives (pct-10's canon ahead), the tablets dispensed from a bulk stock, the dilution of a concentrate (pct-22's), the rate of an infusion (pct-15's), the base in a mould (pct-41's displacement value), the HLB blend of an emulsifier pair (pct-39's). Every block this course teaches leans on the arithmetic this topic polishes.\\n\\n**What this topic is and is not**: it IS the foundation layer — arithmetic fluency, fractions, ratios, significant figures, rounding, estimation, and error-avoidance habits (the eight lessons of this block). It is NOT the pharmaceutical canon itself; each lesson points forward to where the real calculation lives.\\n\\n**The professional habit this block installs**: **calculate → check → then act** — the estimation reflex (does the answer LOOK sane?), the unit reflex (what UNITS does the answer carry?), and the re-derivation habit (a second method agreeing with the first). Errors in pharmacy are rarely arithmetic failures; they are CHECKING failures.\\n\\n**The spine**: the math is elementary; the stakes are not — fluency plus checking is the professional minimum.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A calculation error in pharmacy is patient harm, not a lost mark.\\n- Calculations decide doses, dispensed quantities, dilutions, rates, mould fills, blends.\\n- This block = foundation layer; the pharmaceutical canon lives in pct-5…pct-13 and beyond.\\n- The habit: calculate → check → act (estimation + units + re-derivation).\\n- Errors are checking failures more often than arithmetic failures.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is "just arithmetic" a professional matter — the stakes argument?\\n2. Name four pharmaceutical decisions that rest on calculations.\\n3. State the calculate-check-act habit and its three reflexes.\\n4. Which later topic owns dose calculations? Infusion rates?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The maths is primary school; the consequences are intensive care. Fluency plus a checking reflex — that is the whole foundation this block builds.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Basic Arithmetic',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The four operations, fluently and HONESTLY — with the habits that keep them accurate at pharmaceutical scale.\\n\\n**Addition/subtraction of decimals — the alignment rule**: line up the DECIMAL POINTS (not the right edges): 12.5 + 0.375 = 12.875; misalignment is the classic slide-rule-era ghost that still haunts receipts.\\n\\n**Multiplication — the decimal-count rule**: the product carries as many decimal places as the factors combined: 0.25 × 0.4 = 0.100 = 0.1 (2 + 1 places).\\n\\n**Division — the sensible-shift**: shift the decimal point in BOTH divisor and dividend equally: 7.5 ÷ 0.05 = 750 ÷ 5 = 150.\\n\\n**Order of operations** (the agreement the world made): brackets → indices → multiplication/division (left to right) → addition/subtraction (left to right). 2 + 3 × 4 = 14, not 20 — the calculator agrees, the exam agrees, the ward must agree.\\n\\n**The pharmaceutical-scale habits** (why this matters beyond school):\\n\\n*Units ride along* — every number in pharmacy carries units, and units multiply/divide like numbers: mg/mL × mL/h gives mg/h (the cancellation discipline that pct-15's rates run on).\\n\\n*The sanity anchor* — 0.5 × 100 must be about half of 100; if the calculator says 500, a decimal slipped.\\n\\n*The re-derivation habit* — a second route agreeing with the first (addition checked by subtraction, division checked by multiplication back).\\n\\n**Worked micro-examples** (all elementary, verified): 3.75 + 2.4 = 6.15; 0.125 × 8 = 1; 4.2 ÷ 0.7 = 6; (10 − 4) ÷ 2 = 3.\\n\\n**The spine**: the operations are old friends — the professional upgrade is units, alignment, and a checking reflex on every line.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the alignment rule and the decimal-count rule.\\n2. Compute: 6.25 + 3.8; 0.5 × 0.12; 9.6 ÷ 0.08. (10.05; 0.06; 120.)\\n3. Why do units ride along, and what does mg/mL × mL/h give?\\n4. Order the operations in 12 ÷ 4 + 2 × 3. (3 + 6 = 9.)\\n5. What is the re-derivation habit?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Line up the points, count the decimals, shift both when dividing, brackets first — and let units ride along. Old friends, professional habits.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Fractions, Decimals and Percentages',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Three notations for one idea — **parts of a whole** — and pharmaceutical practice uses all three interchangeably.\\n\\n**The conversions** (the fluency core): a fraction to a decimal divides: 1/4 = 0.25; a decimal to a percentage multiplies by 100: 0.25 = 25%; a percentage to a fraction divides by 100: 25% = 25/100 = 1/4. The triangle is closed — every route reaches every other.\\n\\n**Percentages in pharmacy carry UNITS** (the w/v, w/w, v/v vocabulary — the pct-8 concentration canon ahead): "5% w/v glucose" means 5 g per 100 mL (weight per volume); "70% v/v alcohol" means 70 mL per 100 mL; "1% w/w" means 1 g per 100 g. The percentage is a promise about units — the canon of pct-8 will formalise it; the arithmetic here powers it.\\n\\n**The percentage operations** (the working set): *find X% of N* — multiply: 5% of 250 mL = 12.5 mL; *N is what % of M* — divide and scale: 12.5/250 = 5%; *percentage change* — (new − old)/old × 100: 250 → 200 is −20%.\\n\\n**Fraction arithmetic fluency**: common denominators for add/subtract (1/2 + 1/3 = 3/6 + 2/6 = 5/6); multiply across (2/3 × 3/4 = 6/12 = 1/2); divide by flipping (1/2 ÷ 1/4 = 1/2 × 4 = 2).\\n\\n**Worked micro-examples** (verified): 3/8 = 0.375 = 37.5%; 40% of 75 = 30; 7/20 = 0.35 = 35%; increase 80 by 15% → 80 × 1.15 = 92.\\n\\n**The spine**: fraction, decimal, percent — one meaning, three costumes; and in pharmacy every percent wears a unit (w/v, w/w, v/v).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 5/8 to a decimal and a percentage. (0.625; 62.5%.)\\n2. What does 10% w/v mean in g per mL? (10 g per 100 mL = 0.1 g/mL.)\\n3. Compute: 12% of 350; 45 is what % of 180? (42; 25%.)\\n4. Add 1/4 + 2/5. (5/20 + 8/20 = 13/20 = 0.65.)\\n5. A price rises from 80 to 92 — the percentage change? (+15%.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `One idea, three costumes: divide to decimals, ×100 to percent, and in pharmacy every percent wears w/v, w/w, or v/v. Fluency here powers every concentration ahead.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Ratios and Proportions',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Proportion** is the workhorse of pharmaceutical calculation: two ratios held equal, one unknown — solved by cross-multiplication.\\n\\n**The anatomy**: a ratio a : b compares two quantities; a proportion states a : b = c : d ("a is to b as c is to d"). The solving rule: cross-multiply and divide — if a/b = c/x, then x = b·c/a.\\n\\n**The classic pharmaceutical pattern** (the strength-scaling argument every later block uses): a product contains 5 mg of drug per mL; how much drug in 8 mL?\\n\\n$$\\n\\frac{5\\ \\text{mg}}{1\\ \\text{mL}} = \\frac{x\\ \\text{mg}}{8\\ \\text{mL}} \\Rightarrow x = 40\\ \\text{mg}\\n$$\\n\\nThe UNITS stay in place through the cross-multiplication — the proportion is honest about what each number means (the unit-discipline habit from 4-2, formalised).\\n\\n**Direct vs inverse proportion** (the distinction that prevents the classic error): *direct* — more of one, more of the other (volume up → drug mass up: 5 mg/mL forever). *Inverse* — more of one, LESS of the other (speed up the flow → fewer minutes to run the bag: the pct-15-6 register). Inverse problems multiply across, not down: 20 mL/h for 6 h = 30 mL/h for 4 h (120 mL either way — the constant product is the signature).\\n\\n**Worked micro-examples** (verified): 1:1000 means 1 g per 1000 mL (the pct-7 ratio-strength echo); tablets: 250 mg tablets for a 1 g dose → 1 g/0.25 g = 4 tablets (the pct-10 register); 15 mg/kg for 24 kg = 360 mg (the weight-based pattern).\\n\\n**The spine**: set the proportion with units in place, cross-multiply, and ask DIRECT or INVERSE before you solve — the whole of pharmaceutical scaling in one habit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the cross-multiplication rule with units in place.\\n2. 2 mg per 5 mL — drug in 17.5 mL? (7 mg.)\\n3. Tablets: 0.5 g dose from 125 mg tablets — how many? (4.)\\n4. Direct or inverse: fill time vs flow rate — and the constant signature? (Inverse; product constant.)\\n5. 12 mg/kg for 30 kg — the dose? (360 mg.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Two ratios, held equal, one unknown: set it with units, cross-multiply, and know direct from inverse. Every dose, dilution, and rate you will ever compute is this move wearing a coat.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Significant Figures',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Significant figures** are a number's honest digits — how much the MEASUREMENT (and the answer) actually knows. Pharmacy precision is not "every digit the calculator shows"; it is the digits the data can support.\\n\\n**The counting rules** (the conventions): *non-zero digits count* (1, 2, 3…); *zeros between non-zeros count* (105 → 3 s.f.); *leading zeros never count* (0.012 → 2 s.f.); *trailing zeros count only after a decimal point* (1.50 → 3 s.f.; 150 is ambiguous by eye — 1.5 × 10² states it cleanly).\\n\\n**Why it matters** (the pharmaceutical honesty): a balance reads 0.150 g (3 s.f.); claiming 0.1500 g (4 s.f.) invents a digit the balance never gave you. Conversely, rounding a paediatric dose too early can BE a clinical error (pct-10's canon will teach the dose-precision rules; this lesson teaches the digit discipline).\\n\\n**The operation rules** (the conventions): *multiplication/division* — the answer carries the FEWEST significant figures of the inputs: 4.2 × 3.14 ≈ 13 (2 s.f., from 4.2); *addition/subtraction* — the answer rounds to the fewest DECIMAL PLACES: 12.5 + 0.375 = 12.875 → 12.9 (1 decimal place, from 12.5).\\n\\n**Worked micro-examples** (verified): 0.00450 → 3 s.f.; 2.50 × 1.2 = 3.0 (2 s.f.); 100.0 + 0.25 = 100.3 (1 d.p.); 7.5 ÷ 2.5 = 3 (exact — both 2 s.f., answer exact by the data).\\n\\n**The spine**: significant figures are honesty in digits — count them by convention, round by operation rule, and never let a calculator's tail invent precision.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Count the s.f.: 0.0205; 105.0; 1500 (ambiguous — say why). (3; 4; ambiguous.)\\n2. Compute with correct s.f.: 6.25 × 1.4. (8.8 — 2 s.f.)\\n3. Compute with correct d.p.: 3.75 + 2.2. (5.95 → 6.0 — 1 d.p.)\\n4. Why does 1.50 g ≠ 1.5 g on a 3-decimal balance?\\n5. Which rule guards against invented precision — count or convention?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Zeros between digits count, leading zeros never, trailing zeros only past the point: multiply for fewest s.f., add for fewest places. The digits you keep are the digits you can defend.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Rounding',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Rounding** converts honest calculation output into usable, statable values — with rules that keep the process fair, repeatable, and clinically sensible.\\n\\n**The standard rule (round-half-up)** (the stated convention): look at the digit AFTER the place you are keeping: below 5 → drop; 5 or above → round up. 4.246 → 4.25 (2 d.p.) → 4.2 (1 d.p.); 4.25 → 4.3 at 1 d.p. (the half-up convention — stated as the standard classroom rule; other conventions exist, named as conventions).\\n\\n**Round ONCE, at the END** (the professional rule that prevents drift): carry full precision through the working and round only the final answer — rounding at every step accumulates error (0.4444 × 9 = 4.0 exactly; rounding 0.44 first gives 3.96 → 4.0 here, but multi-step problems drift worse — the habit is the point).\\n\\n**Pharmaceutical rounding has CLINICAL overrides** (the honesty that makes pharmacy rounding special):\\n\\n*Doses round to ADMINISTRABLE units* — a 4.3-tablet answer is not a dose: 4 tablets under-doses, 5 over-doses; the professional question is which is safe (pct-10's dose-rounding canon decides; this lesson names the fork).\\n\\n*Safety-critical values round in the SAFE direction* — minimum quantities up, maximum doses down (the conservative principle named; the specifics are pct-10/pct-12's canon).\\n\\n*Drop-count/drop-register rounding uses the device's granularity* (37-5's drop honesty echoed).\\n\\n**Worked micro-examples** (verified): 7.865 → 7.87 (2 d.p.); 125.5 → 126 (units); 0.0625 → 0.06 (2 d.p.); 3.48 tablets → the 4-vs-3 professional fork (named, not resolved here).\\n\\n**The spine**: round once, at the end, by the half-up convention — then ask the pharmacy question the calculator cannot: is this the SAFE direction?`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the round-half-up rule and its status as convention.\\n2. Round: 2.845 (2 d.p.); 99.6 (units); 0.0124 (2 s.f.). (2.85; 100; 0.012.)\\n3. Why round only at the end — the drift argument?\\n4. What is the safe-direction principle, and which canon owns the specifics?\\n5. A calculation gives 3.5 tablets — why is the answer not a number?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Half-up, once, at the end — then the pharmacy override: round where the safety lives, not where the calculator stops. Math rounds to digits; pharmacy rounds to safe.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-7',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Estimation and Checking Calculations',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Estimation** is the professional's early-warning system: a fast, rough answer that catches the wrong one before it ships. In pharmacy, estimation is not a luxury — it is the step between "the calculator said" and "the patient gets".\\n\\n**The estimation toolkit**:\\n\\n*Round-friendly numbers* — compute with the nearest easy values: 4.87 × 21.3 ≈ 5 × 20 = 100 (the real answer 103.7 is nearby; a calculator answer of 1037 or 10.4 is exposed instantly).\\n\\n*Powers of ten* — track the magnitude: 0.006 × 400 ≈ 6 × 4 = 24, at 10⁻³ scale → 2.4 (the exponent discipline keeps decimals honest).\\n\\n*Bounds sense* — a percentage of a number stays inside the number's scale (12% of 350 is "a bit over a tenth of 350" — 42 ✓; 420 would be impossible).\\n\\n*Unit-logic* — mg/mL × mL must give mg (the units ride along — 4-2's habit); a "mg/h" answer from mL-only inputs is a red flag before any arithmetic.\\n\\n**The checking toolkit** (the second look):\\n\\n*Re-derivation* — a SECOND method agreeing (addition ↔ subtraction; multiplication ↔ division-back; proportion ↔ unit-rate).\\n\\n*Reverse substitution* — push the answer back through the question: if 8 mL holds 40 mg at 5 mg/mL, does 40/5 give 8 mL? ✓\\n\\n*The sanity questions* — is the magnitude plausible? Are the units right? Is the direction right (did the dose go UP when it should have)?\\n\\n**Worked micro-example** (verified): "3.2 × 0.48" — estimate 3 × 0.5 = 1.5; calculator says 1.536 ✓. Calculator says 15.36? The decimal slip is caught in one second.\\n\\n**The spine**: estimate first, calculate second, check third — the three-step reflex that turns arithmetic into professional practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the three-step reflex (estimate → calculate → check).\\n2. Estimate 6.1 × 19.8, then compute. (≈120; 120.78.)\\n3. Reverse-substitute: is 45 mL the answer for 9 mg at 0.5 mg/mL? (45 × 0.5 = 22.5 mg ≠ 9 — no.)\\n4. Name the three sanity questions.\\n5. Why do units make an early red flag?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A rough answer in three seconds buys the right answer in three minutes: round-friendly, magnitude-tracked, unit-logged — then a second method to seal it. The check IS the calculation.`,
      },
    ],
  },
  {
    nodeId: 'pct-4-8',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Common Calculation Errors',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **error catalogue** — the ways pharmaceutical calculations actually fail, named so they can be caught. Most are not arithmetic failures; they are habit failures with arithmetic consequences.\\n\\n**The classic ten** (each named with its catch):\\n\\n1. **Decimal-point misplacement** (×10, ×100 slips) — the killer error; catch: magnitude estimation (4-7) and unit-sense.\\n\\n2. **Unit confusion** — mg vs mcg (the ×1000 gap!), g vs mg, mL vs units; catch: WRITE the units, convert BEFORE arithmetic.\\n\\n3. **Percentage-strength misreading** — 1% w/v is 1 g per 100 mL, not per L; catch: state the units every time (4-3's promise).\\n\\n4. **Ratio-strength inversion** — 1:1000 means 1 g per 1000 mL (a WEAK solution, not strong); catch: spell the ratio out in words first.\\n\\n5. **Rounding too early** — intermediate rounding drifts the answer; catch: round once at the end (4-6).\\n\\n6. **Inverted proportions** — dividing where you should multiply; catch: the sanity direction question (did the bigger patient get the SMALLER dose?).\\n\\n7. **Wrong-piece selection** — using the wrong strength from a look-alike label (the 250 vs 25 mg/mL trap); catch: read twice, circle the strength.\\n\\n8. **Calculator trust** — transcribing the wrong entry or a stale display; catch: estimate-first (4-7) and re-enter.\\n\\n9. **Formula misapplication** — the right formula on the wrong question; catch: state what is asked, in words, before computing.\\n\\n10. **Skipping the final check** — the meta-error that lets all others through; catch: the calculate-check-act habit (4-1).\\n\\n**The mg/mcg honesty** (worth its own line): the microgram/ milligram gap is exactly ×1000 — the most lethal single slip in pharmacy arithmetic; the professional habit is writing "mcg" and converting at the start, never mid-stream.\\n\\n**The spine**: every error has a catch, and every catch is a habit — estimate, write units, convert early, round once, check twice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name five of the classic errors with their catches.\\n2. How many micrograms in 0.25 mg — and why is this the lethal slip? (250 mcg; the ×1000 gap.)\\n3. What does 1:1000 mean in g per mL? (1 g per 1000 mL = 1 mg/mL.)\\n4. Why is "the calculator said" never a defence?\\n5. Which error is the meta-error, and what is its catch?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Decimal slips, unit confusions, early rounding, blind calculator trust: the killers are named. Estimate first, write units, convert early, round once, check twice — the habits are the antidotes.`,
      },
    ],
  },
];
