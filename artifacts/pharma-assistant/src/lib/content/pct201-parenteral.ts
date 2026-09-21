import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-15: Intravenous and Parenteral
 * Calculations.
 *
 * Batch 18: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14 top-level
 * topic convention) plus its ten children pct-15-1…15-10 (plain
 * unprefixed names). Node IDs and titles mirror curriculum.ts exactly;
 * nothing here creates or renames nodes.
 *
 * Tier note: pct-15 has no surviving Phase-1 tier record; the topic and
 * conceptual children are Tier B (pct-1/2/3/7/13/14 convention, flagged
 * pending confirmation), while the calculation children — Infusion
 * Calculations (15-2), Rate of Flow (15-3), Drops per Minute (15-4),
 * mL/hour (15-5), Infusion Duration (15-6) — are Tier C, matching the
 * calculation-lesson convention (pct-5-7; pct-9/10/13/14 blocks).
 *
 * Scope discipline: infusion arithmetic is THIS topic's canon.
 * Electrolyte unit arithmetic stays with pct-14; tonicity/E-values with
 * pct-13; dose-from-concentration machinery with pct-10; sterility and
 * aseptic technique are pct-2-5's canon. Clinical titration and
 * individualised dosing rules are pct-12's canon and are cross-referenced,
 * not re-taught. Drop-factor sets are convention/source-dependent and are
 * flagged as such in-text.
 */
export const pct201ParenteralLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-15',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'topic',
    title: 'Intravenous and Parenteral Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Parenteral** administration bypasses the gastrointestinal tract — injection, infusion, and the devices that deliver them. The arithmetic of this topic answers four questions a pharmacist must be able to compute, check, or explain: **what is in the bag** (IV solution composition), **how much and how long** (infusion calculations), **how fast** (rate of flow — drops per minute and mL/hour), and **what happens when you mix or dilute** (admixtures and injectable dilution), all under **compatibility** and **precaution** disciplines.\\n\\nA recurring theme: the same rate has **two languages**. Devices speak **mL/hour**; gravity sets speak **drops per minute**; the bridge between them is the **drop factor** of the giving set. And a recurring safety habit: every computed rate or dose is checked for **reasonableness against the clinical scale** before it is trusted — a "wrong by ten" rate kills more surely than an arithmetic slip.\\n\\nThe ten lessons: **IV solutions**, **infusion calculations**, **rate of flow**, **drops per minute**, **mL/hour**, **infusion duration**, **parenteral admixtures**, **dilution of injectable preparations**, **basic compatibility considerations**, and **basic precautions in parenteral calculations**. Clinical titration and individualised dosing belong to pct-12; electrolyte arithmetic to pct-14 — cross-referenced, not re-taught.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Parenteral = bypassing the GI tract; the pharmacist owns the arithmetic of the bag, the line, and the rate.\\n- Two rate languages: mL/hour (devices) and drops/minute (gravity); the drop factor bridges them.\\n- Every rate is sanity-checked against the clinical scale before use.\\n- Admixture and dilution steps are concentration arithmetic (pct-9/10 machinery) under sterility and compatibility rules.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does "parenteral" mean, and which dosage-form family does it name?\\n2. Name the two rate units and the factor that converts between them.\\n3. Why is a reasonableness check part of every rate calculation?\\n4. Which earlier topics supply the concentration and electrolyte machinery this topic uses?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Parenteral arithmetic = bag composition + infusion quantity/duration + rate (mL/h ↔ drops/min via drop factor) + admixture/dilution, under compatibility and precaution habits. Clinical titration is pct-12's canon.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-15', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-15-1',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'IV Solutions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An **IV solution** is a sterile, pyrogen-free aqueous preparation for intravenous administration. Reading its label fluently is the entry skill: every bag states its strength in **% w/v** and, usually, its **electrolyte content in mmol/L or mEq/L** — both languages were built in pct-9 and pct-14.\\n\\n**The standard fluids** (contents derived, not just memorised):\\n\\n- **0.9% w/v sodium chloride** ("normal saline"): 9 g/L ÷ 58.44 = 154 mmol/L Na⁺ and 154 mmol/L Cl⁻ (154 mEq/L each).\\n- **5% w/v dextrose** (anhydrous M 180.2): 50 g/L ÷ 180.2 = 277 mmol/L dextrose — isotonic as a solution (pct-13 logic), providing water and ~170 kcal/L.\\n- **0.45% sodium chloride** ("half-normal"): 77 mmol/L of each ion — deliberately hypotonic.\\n- **Ringer's lactate**: Na⁺ 130, Cl⁻ 109, lactate 28, K⁺ 4, Ca²⁺ 2.7 mmol/L (approximate, source-dependent — flagged); the lactate is metabolised to bicarbonate.\\n\\n**Why these strengths?** Tonicity (pct-13 canon): plasma runs ≈ 275–295 mmol/kg in osmolality terms, and the routine fluids are formulated to sit near it.\\n\\n**Osmolality on the label** (mOsm/kg) is the colligative count of particles — the pct-13 link. LVPs (large-volume parenterals) carry the water and electrolytes; SVPs (small-volume) usually carry the drug to be added.\\n\\nThis lesson reads and verifies composition. What gets *added* to bags, and how fast they run, is the rest of the topic's work.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- IV bags state % w/v and electrolyte content — both conversions are known machinery.\\n- 0.9% NaCl = 154 mmol/L per ion; 5% dextrose = 277 mmol/L; 0.45% NaCl = 77 mmol/L per ion.\\n- Routine fluids are formulated near plasma tonicity (pct-13 canon); osmolality is the label's particle count.\\n- LVP = carrier fluid; SVP = the drug vial usually added to it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive the Na⁺ and Cl⁻ content of 0.9% NaCl in mmol/L.\\n2. Why is 5% dextrose isotonic on administration yet provides no electrolytes?\\n3. What does the mOsm/kg figure on a bag represent, and which topic's theory explains it?\\n4. Distinguish LVP and SVP in one sentence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `IV fluids read through % w/v → g/L → mmol/L (÷M) and the tonicity frame. Anchors: 0.9% NaCl 154/154; 5% dextrose 277 mmol/L; Ringer's lactate approximate per-ion values. LVP carries, SVP drugs.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-2',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Infusion Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `An **infusion order** names three of four quantities; the pharmacist computes the fourth. The quantities: **total volume** (V, mL), **total mass** (m, mg or g — the drug amount), **concentration** (C = m/V), and **dose** (mass per unit time, or per kg per unit time). The identities are pct-9/pct-10 machinery reused at infusion scale:\\n\\n$$\\nC = \\frac{m}{V} \\qquad m = C \\times V\\n$$\\n\\n**Dose rates** come in two frames: **mass per time** (mg/hour = mg/min × 60) and **mass per weight per time** (µg/kg/min — the critical-care frame). The conversion chain is fixed:\\n\\n$$\\n\\text{mg/h} = \\frac{\\mu\\text{g/kg/min} \\times \\text{weight (kg)} \\times 60}{1000}\\n$$\\n\\n**Prerequisite habits** (earlier canon): percent and ratio strength (pct-9), dose-from-concentration (pct-10), unit discipline throughout. Nothing new — new scales.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Infusion calculations** connect what is in the bag with what the patient receives per unit time. The master identities are concentration (C = m/V) and rate (mL/h = dose/C) — nothing conceptually new, but the scales and the two dose-rate frames (mg/h and µg/kg/min) are where precision now matters clinically.\n\n**The two frames meet in one chain**: a weight-based order (µg/kg/min) converts to mg/h by multiplying weight and minutes and dividing micrograms — three factors, each a classic error site. The worked examples write the chain out explicitly and reverse-run it as the check, which is the habit that makes pump verification safe.\n\n**Scope line**: this lesson computes quantity, concentration and rate. The drops-per-minute translation is 15-3/15-4's work; duration is 15-6's.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Concentration of an admixture**\\n\\n$$\\nC = \\frac{\\text{mass added (mg)}}{\\text{final volume (mL)}}\\n$$\\n\\n**Rate from dose**\\n\\n$$\\n\\text{mL/h} = \\frac{\\text{dose (mg/h)}}{C \\; (\\text{mg/mL})}\\n$$\\n\\n**Dose from rate**\\n\\n$$\\n\\text{mg/h} = \\text{mL/h} \\times C\\n$$\\n\\n**Weight-based chain**\\n\\n$$\\n\\text{mg/h} = \\frac{\\mu\\text{g/kg/min} \\times W \\times 60}{1000}\\n$$\\n\\nUnits: µg→mg (÷1000), per min→per h (×60). Check dimensionally every time: (µg/kg/min × kg) = µg/min; ÷1000 → mg/min; ×60 → mg/h.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — concentration.** 500 mg of a drug is added to a 500 mL bag (volume taken as unchanged): C = 500/500 = **1 mg/mL**.\\n\\n**Example 2 — rate for a fixed dose.** Order: 250 mg/h; bag at 1 mg/mL → rate = 250/1 = **250 mL/h**.\\n\\n**Example 3 — weight-based.** 70 kg patient, order 2 µg/kg/min, bag at 1 mg/mL:\\nµg/min = 2 × 70 = 140 → mg/min = 0.14 → mg/h = 8.4 → rate = 8.4/1 = **8.4 mL/h**.\\n\\n**Example 4 — reverse.** At 8.4 mL/h of a 1 mg/mL infusion, dose = 8.4 × 1 = 8.4 mg/h = 140 µg/min = **2 µg/kg/min** for 70 kg ✓ (the chain closes).\\n\\n**Checks on every answer.** (a) Dimensional chain written out, no skipped factors of 60 or 1000. (b) Reasonableness: maintenance-scale rates are tens of mL/h; single-digit mL/h signals a concentrated drug or a µg-scale dose. (c) Reverse-run the chain; the numbers must return to the order.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists verify exactly this chain when checking pump programs: order (µg/kg/min) → mg/h → mL/h against the bag concentration. Most "tenfold pump errors" are a skipped ÷1000 or ×60 in this chain.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the two dose-rate frames and the conversion chain between them.\\n2. 400 mg in a 200 mL bag — concentration? What rate delivers 60 mg/h?\\n3. A 60 kg patient needs 3 µg/kg/min from a 2 mg/mL bag — compute the rate in mL/h.\\n4. Why does a single-digit mL/h rate deserve a second look before you trust it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `C = m/V; rate = dose/C; mg/h = (µg/kg/min × W × 60)/1000. Two conversion factors — 60 (min→h) and 1000 (µg→mg) — cause most errors; write the chain, reverse-run it.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-3',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Rate of Flow',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Rate of flow** is the speed at which the infusion runs, expressed per unit time. Two languages coexist:\\n\\n- **mL/hour** — the pump's language; an electronically set rate.\\n- **drops per minute** — the gravity set's language; counted at the drip chamber.\\n\\nThe bridge is the **drop factor** (also called the giving-set factor): the number of drops that make up 1 mL **for that specific set**, printed on its packaging. **Macrodrip** sets are typically 10, 15, or 20 drops/mL (convention/source-dependent — flagged); **microdrip (burette) sets are 60 drops/mL by design** — one drop per second = exactly 1 mL/h, the property that makes microdrip sets the paediatric and slow-infusion standard.\\n\\nBecause drop factor is a *per-device* property, the same order converts to different drops/min on different sets — the calculation must always name the set.\\n\\n**Direction discipline**: order → mL/h (infusion arithmetic) → drops/min (set arithmetic) is the working direction; the reverse is the check.\\n\\n**Reasonableness anchors**: adult maintenance ≈ 83 mL/h (2 L/day); pump precision makes mL/h the clinical standard wherever a pump exists, with gravity sets reserved for settings without them.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Flow rate (volume/time)**\\n\\n$$\\n\\text{mL/h} = \\frac{\\text{volume (mL)}}{\\text{time (h)}}\\n$$\\n\\n**Drops per minute**\\n\\n$$\\n\\text{drops/min} = \\frac{\\text{mL/h} \\times \\text{drop factor (drops/mL)}}{60}\\n$$\\n\\n**Inverse (from counted drops/min)**\\n\\n$$\\n\\text{mL/h} = \\frac{\\text{drops/min} \\times 60}{\\text{drop factor}}\\n$$\\n\\nUnits: (mL/h × drops/mL) = drops/h; ÷60 → drops/min. The 60 is hours→minutes; dropping it is the classic tenfold-to-sixtyfold error family.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — 1 L over 8 h.** Rate = 1000/8 = **125 mL/h**.\\nDrops/min on a 20 drops/mL set: 125 × 20/60 = 41.67 → **42 drops/min** (round to a settable whole drop; note the rounding in the chart).\\n\\n**Example 2 — microdrip identity.** 60 drops/mL set at 50 mL/h: 50 × 60/60 = **50 drops/min** — numerically equal to the mL/h rate. For microdrip sets, drops/min = mL/h always.\\n\\n**Example 3 — reverse.** Counted 25 drops/min on a 15 drops/mL set: 25 × 60/15 = **100 mL/h**.\\n\\n**Example 4 — the 60-slip.** Order 83 mL/h on a 20 drops/mL set: 83 × 20/60 = 27.7 → **28 drops/min**. Forgetting ÷60 gives 1660 — absurd on its face (a drip chamber delivers at most ~1–3 drops/s), which is why the magnitude check catches it.\\n\\n**Checks.** Reverse-convert; confirm the drop factor named is the set in use; round only at the final step and say so.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Where no pump exists, the nurse counts drops in the chamber against a watch; the pharmacist's rate chart (order → mL/h → drops/min per set type) is the reference both professionals trust.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define drop factor and explain why it is set-specific.\\n2. Why is drops/min numerically equal to mL/h on a microdrip set?\\n3. 600 mL over 6 h on a 15 drops/mL set — drops/min?\\n4. What is wrong with a computed 1660 drops/min, and which check catches it fastest?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `mL/h = V/t; drops/min = mL/h × DF/60; mL/h = drops/min × 60/DF. Microdrip (60) → drops/min = mL/h. Name the set, round last, magnitude-check every answer.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-4',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Drops per Minute',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This lesson lives at the drip chamber: converting orders into **countable drops per minute** and reading counted drops back into rates. The formula family is 15-3's; what is new is the **practice discipline** of counting and the **drop-factor table** habit.\\n\\n**The standard set factors** (convention/source-dependent — always read the set's packaging): macrodrip 10 (blood sets), 15 (common general set), or 20 drops/mL; microdrip 60 drops/mL.\\n\\n**Counting discipline.** Drops/min are set by counting for a timed interval (15 s × 4, or 30 s × 2) — a counted rate is a measurement with error, so the *checking* question is always "is it within a drop or two of the computed value?", not exact equality.\\n\\n**Mental shortcuts** (each is the formula with the 60 pre-divided):\\n\\n- 20 drops/mL: drops/min = mL/h ÷ 3\\n- 15 drops/mL: drops/min = mL/h ÷ 4\\n- 10 drops/mL: drops/min = mL/h ÷ 6\\n- 60 drops/mL: drops/min = mL/h\\n\\nDerivation check for the first: mL/h × 20/60 = mL/h/3 ✓ — the shortcuts are the formula, not a replacement for it.\\n\\n**Paediatric habit**: small volumes and slow rates → microdrip, where the drops/min = mL/h identity makes slow infusions settable and verifiable by eye.`,
      },
      {
        kind: 'FORMULAS',
        body: `**The conversion family**\\n\\n$$\\n\\text{drops/min} = \\frac{\\text{mL/h} \\times \\text{DF}}{60}\\n$$\\n\\n**Shortcut forms** (DF pre-divided by 60):\\n\\n| DF (drops/mL) | drops/min |\\n|---|---|\\n| 20 | mL/h ÷ 3 |\\n| 15 | mL/h ÷ 4 |\\n| 10 | mL/h ÷ 6 |\\n| 60 | mL/h |\\n\\n**Reverse**: mL/h = drops/min × 60/DF.\\n\\nEvery shortcut is algebraically the master formula — spot-derive one to re-derive all.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — shortcut consistency.** 120 mL/h: 20-set → 120/3 = **40 drops/min**; master formula 120 × 20/60 = 40 ✓.\\n\\n**Example 2 — 15-set.** 100 mL/h → 100/4 = **25 drops/min**; master formula 100 × 15/60 = 25 ✓.\\n\\n**Example 3 — microdrip paediatric.** 12 mL/h on a 60-set → **12 drops/min** (one drop every 5 s).\\n\\n**Example 4 — from the chamber.** Nurse counts 8 drops in 15 s → 32 drops/min; on a 20-set: mL/h = 32 × 60/20 = **96 mL/h** — compare with the charted 100 and re-count if outside tolerance.\\n\\n**Checks.** Shortcut vs master formula must agree; counted-vs-computed tolerance is ± a couple of drops (counting error), not exactness.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Rate charts pinned to dispensing benches list exactly this table; the pharmacist answering "how many drops for this order?" uses the shortcut and confirms with the master formula.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive the ÷3 shortcut for a 20-set from the master formula.\\n2. 75 mL/h on a 15-set — drops/min?\\n3. A count gives 20 drops/min on a 60-set. Rate in mL/h — and what makes this set convenient?\\n4. Why is a counted rate compared within tolerance rather than exactly?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `drops/min = mL/h × DF/60; shortcuts ÷3 (20), ÷4 (15), ÷6 (10), identity (60). Count 15 s × 4; tolerance ± a drop or two; reverse-convert to check.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-5',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'mL/hour',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**mL/hour** is the infusion pump's native unit and the clinical standard wherever a pump exists. Every order eventually becomes an mL/h number, so this lesson consolidates the routes into it:\\n\\n1. **From volume and time**: mL/h = V/t — the definition.\\n2. **From dose and concentration**: mL/h = dose(mg/h)/C(mg/mL) — 15-2's identity at the pump.\\n3. **From drops/min and the set**: mL/h = drops/min × 60/DF — the gravity-to-pump translation.\\n\\n**Pump-programming reality.** A pump is programmed with a rate (mL/h) and often a volume-to-be-infused (VTBI); it then computes its own completion time. The pharmacist's check is that the programmed rate × running time reproduces the ordered volume — the same V/t identity, run forward.\\n\\n**Precision and rounding.** Pumps accept mL/h to a decimal (0.1 mL/h typically); program the computed value rather than pre-rounding to whole units, then let the pump's precision work — but *say* the rounding rule you used.\\n\\n**Reasonableness anchors**: adult maintenance ~80–125 mL/h; bolus/fluid-resuscitation orders run higher; paediatric and potent-drug infusions often single-digit. Out-of-range answers trigger a re-derivation before any programming.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Three routes to mL/h**\\n\\n$$\\n\\text{mL/h} = \\frac{V}{t}\\n$$\\n\\n$$\\n\\text{mL/h} = \\frac{\\text{dose (mg/h)}}{C \\; (\\text{mg/mL})}\\n$$\\n\\n$$\\n\\text{mL/h} = \\frac{\\text{drops/min} \\times 60}{\\text{DF}}\\n$$\\n\\n**Completion identity (the pump's own check)**\\n\\n$$\\nV = \\text{mL/h} \\times t\\n$$\\n\\nUnits: V in mL, t in hours, C in mg/mL, dose in mg/h — mixed minutes must be converted before use.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — definition route.** 750 mL over 6 h: 750/6 = **125 mL/h**.\\n\\n**Example 2 — dose route.** Order 4 mg/h; bag 2 mg/50 mL (= 0.04 mg/mL): 4/0.04 = **100 mL/h**.\\n\\n**Example 3 — gravity route.** 42 drops/min on a 20-set: 42 × 60/20 = **126 mL/h**.\\n\\n**Example 4 — pump check.** Programmed 83 mL/h, VTBI 1000 mL → expected run time 1000/83 = 12.05 h ≈ 12 h 3 min; if the chart says "over 12 h", the program agrees.\\n\\n**Checks.** Route-swap verification (definition vs dose route must agree when both apply); anchors scale (125 ≈ maintenance-ish, 5 deserves scrutiny); VTBI identity run forward.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The most common real query: "what rate do I program?" The pharmacist converts dose → mL/h via the bag concentration and states the VTBI — two numbers, both checked against the order's time frame.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the three independent routes to mL/h.\\n2. 1 L over 6 h 40 min — program rate? (Hint: 6 h 40 min = 6.667 h.)\\n3. A drug bag is 250 mg in 250 mL; the order is 5 mg/h — program rate?\\n4. What pump-entry pair (rate, VTBI) reproduces "500 mL over 4 h"?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `mL/h = V/t = dose/C = drops/min × 60/DF. Pumps: program computed value, verify with VTBI × rate identity. Anchors: maintenance 80–125; single digits = potent drugs.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-6',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Infusion Duration',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Infusion duration** is the inverse problem: given volume and rate, how long does the bag run? It matters for scheduling (next bag preparation, infusion-cycle timing) and for stability windows (many admixtures carry maximum hang times).\\n\\n**Core identity**\\n\\n$$\\nt = \\frac{V}{\\text{mL/h}}\\n$$\\n\\nwith t in hours; convert to h:min by multiplying the fractional hour by 60. **Time management discipline**: hours and minutes are base-60 — 0.5 h = 30 min, but 0.15 h = 9 min, not 15; the conversion is always ×60 on the fraction.\\n\\n**Duration from a counted drip rate**: V ÷ (drops/min × 60/DF) — the two-step route via mL/h.\\n\\n**The completion-time habit**: duration computed from the *programmed* rate answers "when does it finish?"; duration from the *ordered* rate answers "when should it finish?" — comparing the two is the drift check.\\n\\n**Stability crossover (flagged, deferred)**: maximum hang times and beyond-use dating are stability science — pct-43's canon. This lesson treats the label's stated window as a given number to check against, not a property to derive.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Duration**\\n\\n$$\\nt = \\frac{V}{\\text{rate}}\\n$$\\n\\n**Fractional hour → minutes**\\n\\n$$\\n\\text{min} = (t - \\lfloor t \\rfloor) \\times 60\\n$$\\n\\n**Via drops/min**\\n\\n$$\\nt = \\frac{V}{(\\text{drops/min} \\times 60/\\text{DF})}\\n$$\\n\\nUnits: V in mL, rate in mL/h, t in hours. All conversions after the division.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — direct.** 1000 mL at 125 mL/h: 1000/125 = **8 h** — exactly.\\n\\n**Example 2 — fractional.** 500 mL at 60 mL/h: 500/60 = 8.333 h = 8 h + 0.333 × 60 = **8 h 20 min**.\\n\\n**Example 3 — small bag.** 100 mL at 83 mL/h: 100/83 = 1.205 h ≈ **1 h 12 min**.\\n\\n**Example 4 — from the chamber.** 250 mL remaining, counted 25 drops/min on a 15-set: rate = 25 × 60/15 = 100 mL/h → 250/100 = **2.5 h = 2 h 30 min**.\\n\\n**Checks.** Re-derive rate from V and t (the inverse identity must close); convert fractional hours carefully (0.333 h ≈ 20 min ✓); the answer's magnitude must fit the clinical story (a 1 L bag finishing in 20 min or in 3 days both warrant questions).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ward rhythm runs on duration arithmetic: "the 8-hourly bag finishes at 14:20 — hang the next at 14:00 to overlap flush time". The pharmacist's duration answers feed the nursing schedule.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A 500 mL bag runs at 40 mL/h — duration in h:min?\\n2. Why is 0.15 h equal to 9 minutes and not 15?\\n3. 150 mL remains; counted 30 drops/min on a 20-set. Time to completion?\\n4. What is the difference between duration from the programmed rate and from the ordered rate?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `t = V/rate; fractional hour × 60 = minutes (0.15 h = 9 min!). Via drops: rate first, then divide. Inverse-identity check closes every problem; compare programmed vs ordered durations for drift.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-7',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Parenteral Admixtures',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An **admixture** is the compounded mixture of a drug (usually from an SVP vial or ampoule) into an IV carrier bag. The arithmetic is pct-9/pct-10 concentration machinery; the new discipline is that every admixture has **three documented numbers**: drug mass, final volume, resulting concentration.\\n\\n**Final volume honesty.** Adding 10 mL of drug solution to a 100 mL bag gives **110 mL** final volume — unless the procedure says the bag's overfill or the vial's displacement is taken as unchanged (practice varies by protocol — flagged as convention). The concentration you report must match the volume convention you used.\\n\\n**The C = m/V chain at admixture scale**: dose per bag → mg/mL → dose per hour via rate, the exact chain of 15-2.\\n\\n**Units on the order.** Additive orders arrive as mass ("add 1 g"), as concentration ("make 40 mmol/L" — pct-14 arithmetic), or as dose rate ("run at 2 mg/h" — pct-10 machinery); the pharmacist converts to a weighable/drawable quantity and documents all three numbers.\\n\\n**Aseptic boundary (deferred)**: *how* to mix aseptically is sterile-compounding technique — pct-2-5's canon and practical training. This topic owns the numbers; the technique courses own the hands.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Admixture discipline: drug mass + final volume + resulting concentration, all three documented.\\n- Final volume = bag + additive (unless protocol says unchanged — convention, flagged).\\n- Additive orders arrive as mass, concentration, or dose rate — each converts by known machinery.\\n- Aseptic technique is pct-2-5/practical canon; here the numbers are the work.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The classic ward order — "add 1 g to 100 mL, run over 1 h" — is checked as: C = 1000/110 = 9.09 mg/mL (or 10 with unchanged-volume convention), rate 100 mL/h → 909–1000 mg/h; both numbers reported with their convention stated.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three documented numbers of every admixture.\\n2. 2 g added to a 250 mL bag — concentration under (a) final-volume-inclusive and (b) unchanged-volume convention?\\n3. Why must the volume convention be stated with the concentration?\\n4. Where does aseptic technique belong canonically, and what does this topic own?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Admixtures: C = m/V with the volume convention stated; orders in mass/concentration/dose-rate all reduce to the same chain; aseptic hands elsewhere, numbers here.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-8',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Dilution of Injectable Preparations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Concentrated injectables — powders for reconstitution and concentrated solutions — must be diluted to usable strengths. The governing law is **conservation of mass**: dilution changes volume and concentration, never the amount of drug:\\n\\n$$\\nC_1 V_1 = C_2 V_2\\n$$\\n\\n(the pct-9 dilution canon — used here at injection scale; units may be any consistent pair).\\n\\n**Reconstitution** adds a diluent volume to a powder: the resulting concentration is (drug mass)/(final volume), where final volume = diluent added + the powder's reconstitution displacement (stated on the vial — a source-dependent number, flagged).\\n\\n**Second-dilution** problems chain the same identity: vial → intermediate → final.\\n\\n**Direction check** every time: dilution lowers concentration and raises volume; if your numbers move the other way, the setup is inverted.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Dilution of injectables** is conservation of mass at injection scale: the drug amount is fixed, so concentration and volume trade off inversely (C₁V₁ = C₂V₂). Three problem shapes cover the practice: **simple dilution** of a stock solution, **reconstitution** of a powder (where the vial's stated displacement joins the arithmetic), and **chained dilutions** (vial → intermediate → bag), each solved by the same identity applied once per step.\n\n**The direction check** is the built-in safety net: dilution must lower concentration and raise volume — any computed pair moving the other way signals an inverted setup. **Displacement is vial-specific data**, stated by the manufacturer; assuming it away changes the final concentration materially in small-volume reconstitutions.\n\nConcentration units (mg/mL, % w/v, g/L) may be mixed across the two sides only if converted first — consistency within each equation is the discipline.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Dilution identity**\\n\\n$$\\nC_1 V_1 = C_2 V_2\\n$$\\n\\n**Diluent to add**\\n\\n$$\\nV_{\\text{add}} = V_2 - V_1\\n$$\\n\\n**Reconstitution**\\n\\n$$\\nC_{\\text{final}} = \\frac{\\text{drug mass}}{V_{\\text{diluent}} + V_{\\text{displacement}}}\\n$$\\n\\nUnits: any consistent pair (mg/mL, g/L, %) — consistency is the discipline; nothing else is new.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — simple dilution.** Dilute 10 mL of a 20% w/v solution to 5%: C₁V₁ = C₂V₂ → 20 × 10 = 5 × V₂ → V₂ = 40 mL → add 30 mL diluent.\\n\\n**Example 2 — reconstitution with displacement.** A 1 g vial displaces 0.8 mL (vial data); reconstitute with 9.2 mL → final volume 10.0 mL → **100 mg/mL**.\\n\\n**Example 3 — second dilution.** Take 2 mL of Example 2's 100 mg/mL into a 100 mL bag: mass = 200 mg; C = 200/100 = **2 mg/mL** (unchanged-volume convention stated).\\n\\n**Example 4 — reverse.** How much of a 50 mg/mL stock makes 250 mL at 2.5 mg/mL? C₁V₁ = C₂V₂ → 50 × V₁ = 2.5 × 250 → V₁ = 12.5 mL, then dilute to 250 mL.\\n\\n**Checks.** Direction (C down, V up ✓); reverse-run C₁V₁ = C₂V₂; displacement used exactly once (from vial data, not guessed).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Reconstitute with 9.2 mL" instructions exist precisely because of the displacement number — a pharmacist who can compute C_final from first principles can also catch a mislabelled vial.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the dilution identity and what it conserves.\\n2. 5 mL of 40 mg/mL stock is diluted to 200 mg total in a 50 mL bag — verify the concentration.\\n3. A 500 mg vial displaces 0.5 mL; reconstituted with 4.5 mL — final concentration?\\n4. Why must the displacement number come from the vial rather than be assumed?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `C₁V₁ = C₂V₂ conserves drug; diluent = V₂ − V₁; reconstitution divides by diluent + stated displacement; chain second dilutions stepwise; direction check always.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-9',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Basic Compatibility Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Compatibility** asks whether drugs, diluents, containers and devices can share a line, a bag, or a syringe without harm. Basic categories, each with its failure mechanism:\\n\\n1. **Physical incompatibility**: visible change — precipitation (e.g. calcium with phosphate — concentration-dependent), turbidity, phase separation, colour change. The pct-13/pct-14 chemistry (ion pairing, solubility vs pH) predicts many cases.\\n2. **Chemical incompatibility**: the drug degrades — often invisible. pH-catalysed hydrolysis and oxidation are the classic families (stability kinetics are pct-43's canon; here, the label's do-not-mix and use-promptly statements encode the conclusions).\\n3. **Therapeutic incompatibility**: pharmacological antagonism — a prescriber-level decision, named here for completeness.\\n\\n**Practical disciplines**: one-drug-per-line where feasible; known-y drain before and after a compatible-but-not-combined drug (the line-flush habit); never assume two clear solutions are compatible (invisible degradation); consult the compatibility reference rather than memory — but know the classic calcium–phosphate concentration lesson as the archetype of "both fine alone, not together at this concentration".\\n\\n**The calculation angle**: precipitation risk is concentration arithmetic — the same C = m/V chain decides whether a mixture exceeds the solubility threshold. The pharmacist computes the *worst-case* concentration at the mixing point (Y-site contact is concentrated, the bag is dilute).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Physical = visible (precipitate, turbidity); chemical = invisible (degradation); therapeutic = prescriber territory.\\n- Calcium–phosphate: concentration-dependent precipitation — the archetype.\\n- Clear solutions are not automatically compatible; references beat memory.\\n- Line-flush/y-site habits reduce contact risk; worst-case concentration is computed at the mixing point.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `TPN compounding lives on this lesson: calcium and phosphate salts are added in a strict order with concentration ceilings checked arithmetically — the compatibility rule is enforced by the calculation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish physical, chemical and therapeutic incompatibility with one example each.\\n2. Why is the calcium–phosphate rule concentration-dependent?\\n3. Why does "both solutions are clear" prove nothing?\\n4. Which calculation decides worst-case mixing concentration, and where in the line is it highest?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Compatibility: visible vs invisible vs therapeutic; Ca–PO₄ is concentration arithmetic; compute worst-case at the mixing point; flush habits and references do the daily work.`,
      },
    ],
  },
  {
    nodeId: 'pct-15-10',
    courseId: 'pct-201',
    topicId: 'pct-15',
    nodeType: 'subtopic',
    title: 'Basic Precautions in Parenteral Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This closing lesson collects the **verification habits** that turn every earlier calculation into a safe practice:\\n\\n1. **Independent double-check** of high-risk computations (rates, concentrations, electrolyte additives) — a second person, a second method, or both.\\n2. **Unit discipline as a safety device**: write the unit on every number; a rate without units is not an answer. The 60 and 1000 factors of this topic are exactly where unlabelled numbers go wrong.\\n3. **Reasonableness anchoring**: every rate against the clinical scale (maintenance 80–125 mL/h; potent drugs single digits), every concentration against the bag's realistic range, every duration against the order's stated schedule.\\n4. **Prefix vigilance**: µg vs mg, units vs mL, kg vs lb (pct-10's error catalogue reappears at infusion scale); trailing zeros and leading zeros in written orders (pct-7's conventions) apply to every additive order.\\n5. **Program-vs-order reconciliation**: what the pump says must be re-derived from what the order says — never transcribed on trust.\\n6. **Label the prepared product** with all three admixture numbers (mass, final volume, concentration) plus rate and duration when applicable.\\n\\n**Error-culture note**: the goal is not blame-free arithmetic but *interception* — each habit above is a net in a series of nets, and the pharmacist is the last net before the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Double-check high-risk numbers independently; second person or second method.\\n- Units on every number; 60 and 1000 are this topic's classic failure points.\\n- Anchor to the clinical scale: maintenance 80–125 mL/h, potent drugs single-digit mL/h.\\n- Reconcile pump program against the order; label mass, final volume, concentration, rate, duration.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Institutional policies formalise these habits (independent double-checks, smart-pump libraries, standard concentrations). The arithmetic you own here is what those systems check — a pharmacist who cannot re-derive the number cannot guard it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name four verification habits from this lesson and the error each intercepts.\\n2. Why are 60 and 1000 the classic failure factors of infusion arithmetic?\\n3. What does "program-vs-order reconciliation" mean in practice?\\n4. Why is a rate without units not an answer?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Precautions: double-check, units always, clinical-scale anchors, prefix vigilance, pump reconciliation, complete labels. The pharmacist is the last net — re-derive, never transcribe on trust.`,
      },
    ],
  },
];
