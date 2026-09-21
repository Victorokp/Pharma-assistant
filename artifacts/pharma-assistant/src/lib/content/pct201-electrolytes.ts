import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-14: Electrolyte Calculations.
 *
 * Batch 17: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13 top-level
 * topic convention) plus its seven children pct-14-1…14-7 (plain
 * unprefixed names). Node IDs and titles mirror curriculum.ts exactly;
 * nothing here creates or renames nodes.
 *
 * Tier note: pct-14 has no surviving Phase-1 tier record; the topic and
 * conceptual children are Tier B (pct-1/2/3/7/13 convention, flagged
 * pending confirmation), while the calculation children — Milliequivalents
 * (14-2), Millimoles (14-3), Relationship mEq/mmol (14-4), Electrolyte
 * Concentration Calculations (14-6) — are Tier C, matching the
 * calculation-lesson convention (pct-5-7; pct-9/10/13 blocks).
 *
 * Scope discipline: electrolyte arithmetic is THIS topic's canon.
 * Isotonicity/E-values stay with pct-13; dose/concentration machinery
 * with pct-9/pct-10; clinical electrolyte management and IV fluid
 * prescribing with pct-15 (cross-referenced, not re-taught). Molecular/
 * ionic weights are read as atomic-weight data (pct-5-9 canon), not
 * re-derived.
 */
export const pct201ElectrolytesLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-14',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'topic',
    title: 'Electrolyte Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Body fluids are salt solutions, and every clinical conversation about them — IV fluids, rehydration, maintenance therapy — runs on electrolyte arithmetic. This topic builds the quantities that make that arithmetic possible.\\n\\n**Why a special unit?** Mass (mg) tells you how much material, but the body responds to **charge and particle count**, not mass. One gram of sodium chloride and one gram of potassium chloride carry different amounts of charge, so pharmacy uses the **milliequivalent (mEq)** — the unit that counts ionic charge — and the **millimole (mmol)** — the unit that counts chemical entities. Converting between mass, moles and equivalents is the entire skill of this topic, and it rests on two ideas from A-level chemistry: the **mole** (a count of entities, 6.022 × 10²³) and **ionic charge**.\\n\\n**The build.** First, what **electrolytes** are and why they dissociate. Then the two counting units — **mEq** and **mmol** — each defined from first principles. Then the bridge between them, the **mEq/mmol relationship**, which is where ionic valence enters. The data tools — **molecular and ionic weights** — come next, and everything combines in **electrolyte concentration calculations**. The topic closes with the **pharmaceutical applications** where these units appear daily.\\n\\nThe thread throughout: mass → moles → charge, one conversion at a time, units carried explicitly.\\n\\nWhere the clinical decisions live (which fluid, how fast) belongs to pct-15 and clinical practice — cross-referenced, not re-taught here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The body responds to ionic charge and particle count, not mass — hence mEq and mmol.\\n- mEq counts ionic charge; mmol counts chemical entities; both convert to/from mass via molecular or ionic weight.\\n- Valence is the bridge: mEq = mmol × valence.\\n- Electrolyte concentration calculations combine these units in the forms used on infusion labels and prescriptions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is mass alone an inadequate description of an electrolyte dose?\\n2. Distinguish mEq and mmol in one sentence each.\\n3. What is the role of valence in converting between the two units?\\n4. Name two dosage-form contexts where mEq appears on the label.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Mass ↔ mmol (via molecular weight) ↔ mEq (× valence). The topic's ladder: electrolytes → mEq → mmol → the bridge → weights → concentrations → applications.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-14', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-14-1',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Electrolytes',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Ions** are atoms or molecules that have gained or lost electrons and so carry a charge: **cations** positive (Na⁺, K⁺, Ca²⁺, Mg²⁺), **anions** negative (Cl⁻, HCO₃⁻, HPO₄²⁻). The **valence** of an ion is the magnitude of that charge: Na⁺ has valence 1, Ca²⁺ has valence 2.\\n\\nWhen an ionic solid dissolves, it **dissociates** into its ions. Sodium chloride in water splits into Na⁺ and Cl⁻; calcium chloride splits into Ca²⁺ and two Cl⁻. This was established in pct-13's isotonicity work (the dissociation factor) — here it matters for a different reason: **each ion carries charge**, and the charges balance. One Ca²⁺ balances two Cl⁻ exactly.\\n\\n**Electrolytes** are substances whose solutions conduct electricity *because* they contain mobile ions. Body fluids are electrolyte solutions; the physiological cations/anions above are "the electrolytes" of clinical conversation.\\n\\nThe chemistry prerequisite in one line: charge is quantised and conserved — every positive charge in a solution is balanced by a negative charge, and the counting unit for that balance is the topic's next subject.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Electrolytes matter to pharmacy through three properties, all traceable to their ions:\\n\\n1. **Charge.** The ion's valence drives the physiological role (nerve conduction, cardiac rhythm, osmotic balance) and is the reason the milliequivalent exists.\\n2. **Osmotic contribution.** Dissociation multiplies particles — the pct-13 link — which is why electrolyte solutions are potent osmotic agents per gram.\\n3. **Reactivity.** Ions interact: Ca²⁺ and phosphate precipitate; some cations chelate. Compatibility thinking begins here.\\n\\n**The everyday cations and anions** of pharmaceutical practice: Na⁺, K⁺, Ca²⁺, Mg²⁺ against Cl⁻, HCO₃⁻, acetate, phosphate. Salt forms matter: potassium may be ordered as chloride, acetate, or bicarbonate salts — different counter-ions, different mass per equivalent, a point the calculation lessons make quantitative.\\n\\n**Why mEq arose.** Because Na⁺ and Ca²⁺ differ in valence, equal *masses* of their salts deliver different amounts of charge, and equal *moles* deliver different amounts of charge. Only an **equivalent-based** unit makes sodium and calcium commensurable — comparing like with like. That unit is the next lesson.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ions: cations positive (Na⁺, K⁺, Ca²⁺, Mg²⁺), anions negative (Cl⁻, HCO₃⁻, phosphate, acetate).\\n- Valence = ionic charge magnitude; drives the need for an equivalent-based unit.\\n- Dissociation multiplies particles (pct-13 link) and frees charge to carry current.\\n- Salt form changes mass per equivalent — the counter-ion is part of the arithmetic.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A "20 mEq potassium chloride" tablet, "potassium acetate for infusion", "calcium gluconate 10%" — every electrolyte product line is written in units that presuppose this lesson: ion identity, valence, salt form.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define electrolyte and explain the role of dissociation.\\n2. Why do equal masses of NaCl and CaCl₂ deliver unequal amounts of charge?\\n3. What does valence mean, and why does it make milliequivalents necessary?\\n4. Potassium can be ordered as the chloride or the acetate salt — why does the counter-ion change the arithmetic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Electrolytes dissociate into mobile ions; valence is the charge magnitude. Charge, osmotic contribution and reactivity are the pharmacy-relevant properties. Equal masses ≠ equal charge — hence equivalents.`,
      },
    ],
  },
  {
    nodeId: 'pct-14-2',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Milliequivalents (mEq)',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**The equivalent, from charge conservation.** An **equivalent (Eq)** of an ion is the amount of that ion that carries one mole of positive (or negative) charge. A **milliequivalent (mEq)** is 1/1000 of an equivalent.\\n\\nBuild it from chemistry: one mole of Na⁺ carries one mole of charge (valence 1) → 1 Eq. One mole of Ca²⁺ carries two moles of charge (valence 2) → 2 Eq. So:\\n\\n**Eq = moles × valence**, and dividing by 1000: **mmol × valence = mEq**. This single identity is the whole lesson; everything else is atomic-mass bookkeeping.\\n\\n**Equivalent weight.** The mass of one equivalent of an ion is its atomic (ionic) weight divided by valence — the **equivalent weight**. For a salt, the ionic weight of the ion of interest is what matters (14-5 formalises the weight tables).\\n\\n**Practical anchors** (ionic weights: Na 23.0, K 39.1, Cl 35.5, Ca 40.1, HCO₃ 61.0, all g/mol):\\n\\n- 1 mEq Na⁺ = 23.0 mg\\n- 1 mEq K⁺ = 39.1 mg\\n- 1 mEq Cl⁻ = 35.5 mg\\n- 1 mEq Ca²⁺ = 40.1/2 = 20.0 mg\\n- 1 mEq HCO₃⁻ = 61.0 mg\\n\\nDivide by valence for multivalent ions — that is the pattern.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The **milliequivalent** answers "how much ionic charge". Two conversions exhaust its arithmetic: **mmol → mEq** multiplies by the ion's valence (charge count = ion count × charge per ion), and **mg ↔ mEq** runs through the ion's **equivalent weight** — its ionic weight divided by valence.\n\n**Reading an mEq quantity is a three-part statement**: the number, the ion, the valence. "20 mEq K⁺" = 20 millimoles of charge carried by potassium; for monovalent K⁺ that is 20 mmol of K⁺, mass 20 × 39.1 = 782 mg.\n\n**Why pharmacy doses ions in mEq rather than mass**: therapeutic effect tracks charge (nerve conduction, osmotic balance), and mEq makes different ions commensurable — 1 mEq Na⁺ and 1 mEq K⁺ carry equal charge despite unequal mass. The formula section carries the units; the worked examples demonstrate the reverse-check that catches the classic valence errors.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Core identity**\\n\\n$$\\n\\text{mEq} = \\text{mmol} \\times \\text{valence}\\n$$\\n\\n**Mass ↔ mEq (ion of ionic weight W, valence v)**\\n\\n$$\\n\\text{mEq} = \\frac{\\text{mg}}{W/v} \\qquad \\Longleftrightarrow \\qquad \\text{mg} = \\text{mEq} \\times \\frac{W}{v}\\n$$\\n\\n**mEq per gram of a salt (mass m of salt, molar mass M, one ionised unit of the ion of interest per formula, valence v)**\\n\\n$$\\n\\text{mEq/g} = \\frac{1000 \\times v}{M}\\n$$\\n\\nUnits: mg and g/mol cancel to dimensionless counts; v is dimensionless. Always name the **ion** the mEq refers to — an mEq of Na⁺ and an mEq of K⁺ have different masses.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — mg → mEq.** How many mEq of Na⁺ are in 0.9 g NaCl?\\nNaCl molar mass = 58.44 g/mol → 0.9/58.44 = 0.01540 mol = 15.40 mmol.\\nmEq = 15.40 × 1 = **15.4 mEq Na⁺** (and 15.4 mEq Cl⁻).\\n\\n**Example 2 — mEq → mg, multivalent.** An order reads "20 mEq K⁺". As potassium chloride (M = 74.55):\\nmg = 20 × 74.55/1 = **1491 mg ≈ 1.49 g** KCl.\\n\\n**Example 3 — calcium, valence 2.** 10 mEq Ca²⁺ as calcium chloride (M = 111.0, one Ca²⁺ per formula unit):\\nmg = 10 × 111.0/2 = **555 mg** CaCl₂.\\n\\n**Example 4 — mEq per gram.** Potassium chloride: 1000 × 1/74.55 = **13.4 mEq K⁺/g**.\\n\\n**Checks on every answer.** (a) Reverse-convert: 1491 mg/74.55 = 20.0 mmol × 1 = 20 mEq ✓. (b) Magnitude: 1 mEq of a monovalent ion is tens of mg — 23–62 mg — so 20 mEq ≈ 1–3 g of a monovalent salt is the right ballpark. (c) The valence division appears exactly once per multivalent ion — twice is the classic error.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Electrolyte labels speak mEq: "potassium chloride 20 mEq tablets", "sodium bicarbonate 50 mEq in 50 mL". The compounding or checking pharmacist converts label mEq to a weighable mass with exactly these formulas.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the milliequivalent from charge conservation.\\n2. How many mEq of Na⁺ are in 5.85 g NaCl?\\n3. How many mg of CaCl₂ (M = 111.0) deliver 15 mEq of Ca²⁺?\\n4. Why must the ion be named when an mEq quantity is quoted?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `mEq = mmol × valence; mg = mEq × (ionic weight/valence). Monovalent anchors: Na⁺ 23 mg, K⁺ 39 mg, Cl⁻ 35.5 mg per mEq; divide by 2 for Ca²⁺ (20 mg). Reverse-convert as the check.`,
      },
    ],
  },
  {
    nodeId: 'pct-14-3',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Millimoles (mmol)',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**The mole, briefly.** A mole is 6.022 × 10²³ entities; the **molar mass** of a substance in g/mol gives the mass of one mole. This is A-level chemistry's central unit, reused here without re-derivation.\\n\\nA **millimole (mmol)** is 1/1000 mol. In pharmaceutical arithmetic the mmol is the convenient size — serum sodium of 140 mmol/L, dextrose loads of a few hundred mmol — because gram-scale masses map to millimole-scale counts at pharmacy's usual volumes.\\n\\n**Mass ↔ mmol** is the conversion of the entire topic's backbone:\\n\\n$$\\n\\text{mmol} = \\frac{\\text{mg}}{\\text{molecular weight}}\\n$$\\n\\nFor a **compound**, the molecular weight sums the atomic weights of all atoms in the formula (data discipline: pct-5-9 owns atomic weights; use the table). For a **dissociated ion**, the mmol of ion equals the mmol of formula units that produced it (one NaCl gives one Na⁺ + one Cl⁻; one CaCl₂ gives one Ca²⁺ + two Cl⁻).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The **millimole** is the pharmacy-sized mole: 1/1000 mol, counted against the molecular (or ionic) weight. It is the unit of modern laboratory reports (serum K⁺ 4.0 mmol/L) and of European pharmacopoeial labelling, while US product labels prefer the mEq — the working pharmacist translates constantly, and lesson 14-4 supplies the bridge.\n\n**Mass ↔ mmol is the backbone conversion of electrolyte arithmetic**: mg ÷ M → mmol, and mmol × M → mg, with M the molecular weight of the exact substance in hand (hydrate included — 14-5's discipline). For dissociated salts, ion counts follow the formula's subscripts: 1 mmol CaCl₂ yields 1 mmol Ca²⁺ and 2 mmol Cl⁻.\n\n**Where mmol beats mass**: comparing solutions per litre (mmol/L), reading lab panels, and counting particles for osmolar work (pct-13's canon). The worked examples below include the reverse-convert and the per-gram anchors that make estimation second nature.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Mass ↔ mmol**\\n\\n$$\\n\\text{mmol} = \\frac{\\text{mass (mg)}}{M} \\qquad \\Longleftrightarrow \\qquad \\text{mass (mg)} = \\text{mmol} \\times M\\n$$\\n\\nM = molecular (or ionic) weight in g/mol.\\n\\n**mmol per gram of substance**\\n\\n$$\\n\\text{mmol/g} = \\frac{1000}{M}\\n$$\\n\\n**Ion stoichiometry**: mmol of ion = mmol of formula unit × (number of that ion per formula unit).\\n\\n**Osmolar reminder (pct-13 link)**: particles-per-litre = Σ over species of (mmol/L × particles per unit dissociated), the counting logic behind the dissociation factor i.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — mg → mmol, compound.** 5% w/v dextrose (anhydrous M = 180.2): 5 g/100 mL = 50 g/L → 50,000/180.2 = **277 mmol/L** of dextrose molecules.\\n\\n**Example 2 — mmol → mg.** Order: 40 mmol K⁺ as KCl (M = 74.55): 40 × 74.55 = **2982 mg ≈ 2.98 g**.\\n\\n**Example 3 — ion stoichiometry.** 0.45 g CaCl₂ (M = 111.0): 450/111.0 = 4.05 mmol of formula units → **4.05 mmol Ca²⁺ and 8.10 mmol Cl⁻**.\\n\\n**Example 4 — mmol/g anchor.** NaCl: 1000/58.44 = **17.1 mmol/g** — a one-glance estimate tool.\\n\\n**Checks.** Reverse-convert every result; keep mg (not g) against M (g/mol) so the units cancel to mmol; ion counts must respect the formula's subscripts.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Modern lab reports and much of Europe's pharmacopoeial tradition speak **mmol** (serum K⁺ 4.0 mmol/L), while US product labels speak **mEq** — the working pharmacist translates between them constantly, and 14-4's bridge formula is the translation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 2 g of NaCl to mmol of formula units.\\n2. 0.9% w/v NaCl — what is its mmol/L concentration of Na⁺?\\n3. Why does 1 mmol of CaCl₂ yield 2 mmol of chloride?\\n4. What is the mmol-per-gram estimate for KCl, and why is such an anchor useful?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `mmol = mg/M; mg = mmol × M; mmol/g = 1000/M. Ion mmol = formula-unit mmol × subscript. Dextrose 5% ≈ 277 mmol/L; NaCl 17.1 mmol/g. Reverse-convert as the check.`,
      },
    ],
  },
  {
    nodeId: 'pct-14-4',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Relationship Between mEq and mmol',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Two units are now on the table: **mmol** counts entities; **mEq** counts charge. Their bridge is the identity introduced in 14-2:\\n\\n$$\\n\\text{mEq} = \\text{mmol} \\times \\text{valence}\\n$$\\n\\nFor **monovalent** ions (valence 1) the numbers coincide — 10 mmol of Na⁺ *is* 10 mEq of Na⁺. This coincidence is the source of many medication errors in practice: students who learned only sodium arithmetic assume mEq = mmol always. **For multivalent ions they diverge exactly in proportion to valence**: 10 mmol Ca²⁺ = 20 mEq Ca²⁺.\\n\\nThe ladder is therefore: **mass → mmol (÷M) → mEq (× v)** — and the reverse ladder for dosing. Every error class in electrolyte arithmetic is one skipped or doubled step on this ladder.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Working the bridge in both directions.**\\n\\n- Lab value in mmol → order written in mEq (e.g. K⁺ correction protocols): multiply by valence (1 for K⁺ — identical; 2 for Mg²⁺ — doubled).\\n- Product in mEq → concentration needed in mmol/L: divide by valence.\\n- Mixed panels: serum reports mmol/L; some products report mEq/L — for monovalent physiological ions the numbers agree, for calcium/magnesium they do not.\\n\\n**Why valence is the only difference.** Charge is per-ion property × count; moles are count. The ratio mEq/mmol *is* the valence — no empirical constant, no salt-form dependence. **Salt form changes the mass↔unit steps (via M), never the mEq↔mmol step (via v).**\\n\\n**Error anatomy** (the lesson's safety payload): (1) treating mEq = mmol for Ca²⁺/Mg²⁺ — 2-fold dose error; (2) using the salt's molar mass where the ion's was needed — mg-per-mEq errors; (3) forgetting the formula's subscript stoichiometry. Each is caught by the same habit: **write the ladder, name the ion, carry the valence.**`,
      },
      {
        kind: 'FORMULAS',
        body: `**The bridge (both directions)**\\n\\n$$\\n\\text{mEq} = \\text{mmol} \\times v \\qquad \\text{mmol} = \\frac{\\text{mEq}}{v}\\n$$\\n\\n**Full ladder (mass ↔ units)**\\n\\n$$\\n\\text{mg} \\;\\xrightarrow{\\div M}\\; \\text{mmol} \\;\\xrightarrow{\\times v}\\; \\text{mEq}\\n$$\\n\\n**Units per litre versions**: mEq/L = mmol/L × v for a given ion.\\n\\n**Quick ions**: Na⁺, K⁺, Cl⁻, HCO₃⁻ — v = 1 (mEq = mmol); Ca²⁺, Mg²⁺ — v = 2 (mEq = 2 × mmol).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — K⁺ (v = 1).** Serum 3.0 mmol/L; order "add 40 mEq K⁺ per litre". 40 mEq = 40 mmol = 40 × 74.55 = **2982 mg KCl/L**.\\n\\n**Example 2 — Mg²⁺ (v = 2).** Magnesium sulfate heptahydrate M = 246.5; an order reads 20 mEq Mg²⁺.\\nmmol = 20/2 = 10 mmol → 10 × 246.5 = **2465 mg** of the salt.\\n\\n**Example 3 — the classic error, and its catch.** 10 mmol Ca²⁺ is how many mEq? v = 2 → **20 mEq**. A student answering 10 mEq under-doses calcium by 50%; the check "mEq = mmol × v, v = 2" catches it.\\n\\n**Example 4 — two-unit report.** A panel lists Ca²⁺ 2.5 mmol/L. In mEq/L: 2.5 × 2 = **5.0 mEq/L**.\\n\\n**Consistency check on every problem**: the three quantities mg, mmol, mEq are linked by exactly two conversions; verify both (mg→mmol→mEq and back).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the mEq–mmol relationship and why valence is its only ingredient.\\n2. 25 mEq Mg²⁺ = how many mmol?\\n3. A calcium order was computed as 10 mmol = 10 mEq. What error occurred and what is the correct figure?\\n4. Why does switching from KCl to potassium acetate change the mass but not the mEq↔mmol step?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `mEq = mmol × v; v = 1 for the monovalent quartet (Na, K, Cl, HCO₃), 2 for Ca²⁺/Mg²⁺. Ladder: mg ÷M→ mmol ×v→ mEq. Salt form moves M, never v. Name the ion, carry the valence.`,
      },
    ],
  },
  {
    nodeId: 'pct-14-5',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Molecular and Ionic Weights',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Atomic weights** are the measured masses of the elements, relative to carbon-12 — introduced in pct-5-9; the table is data, not something to re-derive. **Ionic weights** are the atomic (or group) weights of ions — a Na⁺ ion weighs essentially the same as a Na atom (electrons are negligible at this precision), so the same table serves both.\\n\\n**Molecular weight** is the sum over the formula: NaCl = 23.0 + 35.5 = 58.5 (58.44 with full-precision values); KCl = 39.1 + 35.5 = 74.6; CaCl₂ = 40.1 + 2(35.5) = 111.0; NaHCO₃ = 23.0 + 1.0 + 61.0... careful: HCO₃ = 1.0 + 12.0 + 3(16.0) = 61.0, so NaHCO₃ = 23.0 + 61.0 = **84.0**. **Hydrates** add their water: magnesium sulfate heptahydrate MgSO₄·7H₂O = 120.4 + 7(18.0) = **246.5**.\\n\\nTwo disciplines keep this lesson honest. First, **sum every atom** — including waters of hydration. Second, **know which entity you need**: the salt's M for weighing the salt; the ion's W/v for converting to the ion's mEq. These are different numbers doing different jobs, and confusing them is the second classic electrolyte error (14-4's error anatomy).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Choosing the right weight** — the decision that runs every electrolyte calculation:\\n\\n1. Weighing a salt: use the **salt's molecular weight** (including hydrate water).\\n2. Converting to the ion's mEq: use the **ion's ionic weight and valence** — or equivalently the salt's M with the formula's stoichiometry (mEq of ion per gram of salt = 1000 × v × n/M, n = ions per formula unit).\\n3. Reading a label that quotes "mEq of ion": the ion's W/v anchor (23 mg Na⁺, 39 mg K⁺, 20 mg Ca²⁺ per mEq) skips the salt entirely.\\n\\n**Hydrate traps in practice.** Magnesium sulfate is sold as the **heptahydrate** (M 246.5); using the anhydrous M 120.4 doubles the dose. Calcium chloride dihydrate CaCl₂·2H₂O (M 147.0) versus anhydrous (111.0) — a 32% difference. The pharmacopoeial name of the material in stock dictates the M used.\\n\\n**Precision discipline.** Atomic-weight tables carry 3–4 significant figures; computed masses are reported to matching precision, and reverse-checks are done with the same table so rounding cancels.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Molecular weight = sum of atomic weights over the formula, hydrate waters included.\\n- Ionic weight ≈ atomic weight of the ion's element/group.\\n- Salt M (weighing) and ion W/v (mEq) are different tools for different steps.\\n- Hydrates change M materially (MgSO₄·7H₂O 246.5 vs 120.4; CaCl₂·2H₂O 147.0 vs 111.0) — know the form in stock.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Stock-room reality: "magnesium sulfate injection" is the heptahydrate; "calcium chloride injection" the dihydrate in some markets, anhydrous in others. The label's molecular-weight footnote is not decoration — it is the arithmetic's input.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the molecular weight of KCl and of NaHCO₃ from atomic weights.\\n2. Why does the heptahydrate trap exist, and what is its dose-consequence factor?\\n3. Which weight do you use to (a) weigh a salt, (b) convert an ion's mEq to mass?\\n4. Why is an ion's ionic weight essentially its atomic weight?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `M = Σ atomic weights (+ hydrate water); ion W/v anchors: Na⁺ 23, K⁺ 39, Ca²⁺ 20 mg/mEq. Salt M for weighing; ion W/v for mEq. Hydrate identity doubles or shrinks doses — check the stock form.`,
      },
    ],
  },
  {
    nodeId: 'pct-14-6',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Electrolyte Concentration Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This lesson assembles the ladder into the concentration forms used on infusion labels and prescriptions: **mEq/L**, **mmol/L**, **% w/v**, and mg/mL, with the conversions between them. Prerequisites: the mg↔mmol↔mEq ladder (14-2/14-3/14-4), weights (14-5), and percent-strength handling (pct-9).\\n\\n**The standard conversions** (monovalent ion, salt with one ionised unit per formula):\\n\\n- From % w/v to mEq/L: (g/100 mL × 10) × 1000 × v/M — the ×10 converts %/100 mL to g/L, the ×1000/M converts g to mmol.\\n- From mEq/L to mg/mL: mEq/L × (W/v) ÷ 1000.\\n\\n**Anchors worth memorising** — 0.9% NaCl: 154 mmol/L Na⁺ and 154 mmol/L Cl⁻ (9 g/L ÷ 58.44 = 0.154 mol/L); equivalently 154 mEq/L of each ion. This single worked anchor verifies the whole conversion family.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Working the concentration family.** Every member expresses the same solution differently; conversions never invent information, they re-express it:\\n\\n- **% w/v → mEq/L**: strength → g/L → mmol/L (÷M) → mEq/L (×v).\\n- **mEq/L → mmol/L**: ÷v.\\n- **mg/mL ↔ % w/v**: 1% = 10 mg/mL (the ×10/×0.1 flip).\\n- **Total vs per-ion**: a salt's solution carries each ion at its stoichiometric share; 0.9% NaCl is 154 mEq/L Na⁺ *and* 154 mEq/L Cl⁻ — not 308 combined.\\n\\n**Multi-ion solutions** are summed per species: a fluid containing Na⁺ 154, K⁺ 4, Ca²⁺ 2.5 mmol/L has total cation mmol/L = 160.5 but **total charge** 154 + 4 + 2×2.5 = 163 mEq/L, balanced by the anions. Total particle (osmolar) counting belongs to pct-13's canon and is only referenced here.\\n\\n**Sanity anchors**: physiological serum ≈ Na⁺ 140, K⁺ 4, Cl⁻ 103, HCO₃⁻ 25 mmol/L; infusion fluids live near these numbers, so an electrolyte concentration answer far from the serum scale (10× or 1/10×) should trigger a re-check.`,
      },
      {
        kind: 'FORMULAS',
        body: `**% w/v → mEq/L** (salt M, ion valence v, n ions per formula unit)\\n\\n$$\\n\\text{mEq/L} = \\frac{\\% \\times 10 \\times 1000 \\times v \\times n}{M}\\n$$\\n\\n**mEq/L → mg/mL**\\n\\n$$\\n\\text{mg/mL} = \\text{mEq/L} \\times \\frac{W/v}{1000}\\n$$\\n\\n**mg/mL ↔ %**: 1% w/v = 10 mg/mL.\\n\\n**Anchor identity**: 0.9% NaCl → (0.9 × 10 × 1000 × 1 × 1)/58.44 = 154 mEq/L per ion ✓.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the 0.9% anchor, derived.** 0.9 g/100 mL = 9 g/L; 9000/58.44 = 154.0 mmol/L; × v = 1 → **154 mEq/L Na⁺** (and Cl⁻).\\n\\n**Example 2 — KCl concentration.** How many mEq/L of K⁺ in 1.5% w/v KCl?\\n1.5 × 10 × 1000/74.55 = 15,000/74.55 = **201 mEq/L** K⁺ (and Cl⁻).\\n\\n**Example 3 — reverse.** An order: fluid containing 40 mEq K⁺/L as KCl. mg/L = 40 × 74.55 = 2982 → **2.98 g/L ≈ 0.30% w/v**.\\n\\n**Example 4 — multivalent.** 10% w/v calcium chloride dihydrate (M 147.0, v = 2, n = 1):\\n100 g/L ÷ 147.0 g/mol = 0.680 mol/L = 680 mmol/L Ca²⁺; × v = 2 → **1360 mEq/L Ca²⁺**. Every 1 mL contains 0.680 mmol = 1.36 mEq Ca²⁺. Magnitude check: a 10% divalent salt is enormous on the mEq scale — these products are concentrated stock for dilution, which is exactly why the number looks extreme.\\n\\n**Consistency check** on every conversion: re-derive by the second route (ladder vs anchor formula) — they must agree.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Infusion labels quote both languages: "sodium chloride 0.9% (154 mmol/L)" — the anchor example. Additive orders ("KCl 20 mmol per litre") arrive in mmol or mEq; the compounding pharmacist converts to a weighable mass with these formulas.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive the mEq/L of each ion in 0.45% w/v NaCl.\\n2. Convert 2 mEq/mL of Ca²⁺ (as the dihydrate) to mg/mL of salt.\\n3. Why is 0.9% NaCl 154 mEq/L Na⁺ rather than 308?\\n4. A computed infusion concentration is 1500 mEq/L K⁺. What does the serum-scale sanity anchor tell you?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Concentration family: % → g/L → mmol/L (÷M) → mEq/L (×v). 0.9% NaCl = 154 mEq/L per ion (the anchor). mg/mL = mEq/L × W/v ÷ 1000. Per-ion, never summed across ions; serum-scale sanity anchor catches blunders.`,
      },
    ],
  },
  {
    nodeId: 'pct-14-7',
    courseId: 'pct-201',
    topicId: 'pct-14',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Applications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where the units live in practice:\\n\\n**1. Labelling.** Electrolyte products state ion content in mEq (US) or mmol (pharmacopoeial Europe): KCl tablets "20 mEq", NaHCO₃ ampoules "50 mEq in 50 mL" (= 1 mEq/mL), oral rehydration salts in mmol/L of each ion. Reading a label = running the ladder backwards to know what you are weighing.\\n\\n**2. IV fluid composition and additives.** Large-volume fluids are specified per-ion (0.9% NaCl = 154 mEq/L Na⁺/Cl⁻; Ringer's adds K⁺ 4, Ca²⁺ 2.5 mmol/L). Additive orders — "KCl 20 mmol per litre" — convert to grams via 14-6's formulas. **Dose-checking the additive against the concentration is the safety step**: adding 40 mmol KCl to a 500 mL bag gives 80 mmol/L — a concentration, not a per-hour dose, and rate rules belong to pct-15's infusion lessons (cross-referenced).\\n\\n**3. Oral/electrolyte replacement products.** ORS and oral supplements publish ion contents in mmol; comparing products or checking against a replacement protocol is the mmol↔mEq bridge in daily use.\\n\\n**4. Buffer/tonicity intersections.** Sodium bicarbonate's 1 mEq/mL convention connects directly to pct-13's buffering arithmetic; the same solution serves both conversations.\\n\\n**5. Clinical crossover boundary.** Individualised electrolyte therapy (deficit estimation, maintenance rates, correction limits) is clinical practice — the arithmetic units are now yours, but the dosing rules are pct-15+ canon. This lesson's scope ends at: convert, compose, label, check concentrations.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Labels: mEq (US) or mmol (Europe) — the ladder translates.\\n- IV fluids are specified per-ion; additives convert mmol/mEq → grams for compounding.\\n- Additive = concentration per bag (e.g. 40 mmol into 500 mL → 80 mmol/L); dose-rate rules are pct-15 canon.\\n- Same ion content may serve tonicity and buffer conversations — the units are shared.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A ward order reads: "NaCl 0.9% 1000 mL + KCl 20 mmol + MgSO₄ 10 mmol". The pharmacist: 20 mmol KCl = 1.49 g; 10 mmol Mg²⁺ as heptahydrate = 2.47 g — two ladder runs each, and the bag is compounded.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A label reads "NaHCO₃ 8.4% — 1 mEq/mL". Verify that claim with the ladder.\\n2. 20 mmol KCl is added to a 500 mL bag. What concentration results, and what further information does a prescriber need before it runs?\\n3. Why can one electrolyte solution serve both a tonicity conversation and a buffer conversation?\\n4. Where does this topic's scope end, and whose canon are the dosing rules?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Applications: label reading, IV composition and additives (mmol→g), ORS comparison, buffer/tonicity intersections. Additive arithmetic gives concentrations; rate/dose rules wait for pct-15.`,
      },
    ],
  },
];
