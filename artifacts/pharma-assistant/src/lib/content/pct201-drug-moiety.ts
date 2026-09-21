import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-22: Active Drug Moiety Calculations.
 *
 * Batch 25: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–21
 * top-level topic convention) plus its six children pct-22-1…22-6
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-22 has no surviving Phase-1 tier record; the topic and
 * the conceptual children (22-1 Active Drug Moiety, 22-2 Molecular Mass
 * and Molecular Structure, 22-3 Salt Versus Active Moiety, 22-6
 * Pharmaceutical Calculation Applications) are Tier B, while the
 * calculation children — Equivalent Amounts of Active Drug (22-4),
 * Converting Salt Strength to Active Moiety (22-5) — are Tier C,
 * matching the calculation-lesson convention (pct-5-7; pct-9…21
 * blocks). Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the salt/hydrate/ester → active-
 * moiety conversion arithmetic and the equivalency concept. Molecular
 * and atomic weights as data (and the mole concept) are pct-5-9's
 * canon; hydrate arithmetic on the mEq scale (MgSO₄·7H₂O) is pct-14-5's
 * canon — recognised as the same hydrate trap, cross-referenced, not
 * re-taught; potency/units-of-activity distinctions are pct-11's.
 * Molecular masses used in examples are stated reference values
 * (IUPAC-standard atomic weights based); no invented drug data.
 */
export const pct201DrugMoietyLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-22',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'topic',
    title: 'Active Drug Moiety Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pharmaceutical products rarely contain the drug molecule alone. Most drugs are dispensed as **salts, hydrates, or esters** — forms chosen for solubility, stability, or manufacturability — and each of those forms adds mass that is **not** the drug doing the therapeutic work. The **active drug moiety** is the therapeutically active molecule itself, stripped of its counter-ion, water of crystallisation, or ester group; this topic builds the arithmetic that moves between "what the product weighs" and "what the drug weighs".\\\\n\\\\n**Why the distinction changes numbers.** A tablet labelled "5 mg amlodipine besylate" contains 5 mg of the *salt* — the amlodipine portion alone is about 3.6 mg, because the besylate counter-ion makes up the rest. Whether a label states salt or moiety is a convention; whether the pharmacist can convert between them is a competence. Therapeutic comparisons, bioequivalence discussions, and formulary decisions all quietly depend on which basis a number uses.\\\\n\\\\n**The route map**: 22-1 defines the moiety and the vocabulary of counter-ions, hydrates, and esters; 22-2 grounds the molecular-mass arithmetic the conversions need; 22-3 contrasts salt and moiety labelling conventions; 22-4 computes equivalent amounts (how much salt carries a given moiety amount); 22-5 converts stated strengths between the bases; 22-6 collects the pharmaceutical applications.\\\\n\\\\n**Standing discipline**: every conversion runs on the **molecular-mass ratio** — M(moiety)/M(salt) — so every example states its molecular masses explicitly, and every result is checked by converting back before it is used. The same discipline that pct-14-5 taught for hydrates on the mEq scale runs the whole topic here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Products contain salts/hydrates/esters; the active moiety is the therapeutic molecule alone.\\\\n- Conversion factor = M(moiety) ÷ M(salt) — always stated, never assumed.\\\\n- Label conventions differ: some state salt strength, some moiety strength.\\\\n- Hydrate mass is part of the product but not of the moiety (same trap as pct-14-5, generalised).\\\\n- Every conversion is verified by converting back.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the active drug moiety and name three product forms that add non-moiety mass.\\\\n2. What does "5 mg amlodipine besylate" overstate relative to the moiety basis?\\\\n3. Which earlier topics own the mole/atomic-weight data and the mEq-scale hydrate arithmetic?\\\\n4. State the standing conversion and verification discipline.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Salt strength ≠ moiety strength; the factor is a molecular-mass ratio, stated and back-checked. The pharmacist is the one who knows which basis a number is on.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-22', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-22-1',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'subtopic',
    title: 'Active Drug Moiety',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **active drug moiety** is the specific molecular structure responsible for the pharmacological effect — the molecule itself, without any attached portion that exists for pharmaceutical rather than therapeutic reasons.\\\\n\\\\n**What gets added to make a usable product.** (1) **Counter-ions** form salts: sodium, potassium, hydrochloride, besylate, maleate, succinate. The ion improves solubility or crystallinity; it is not part of the active molecule. (2) **Water of crystallisation** forms hydrates: lattice water is incorporated into crystals (the pct-14-5 example MgSO₄·7H₂O is the archetype) and adds mass without changing the therapeutic species. (3) **Ester or prodrug linkages** mask an active molecule for absorption or stability reasons (e.g. ester prodrugs), and the body must cleave the added group before the moiety is free — an extra pharmacological step the pharmacist should recognise when comparing strengths.\\\\n\\\\n**Why the concept matters at 200L.** Every quantitative statement about a drug — a dose, a strength, a comparison — is made on *some* basis: the product form or the moiety. Confusions here are not cosmetic: two products whose labels read the same number can deliver different moiety amounts if one is a salt and the other the free form.\\\\n\\\\n**Boundary with related concepts.** For biologicals, activity may be expressed in **units of activity** rather than mass (pct-11 canon) — the moiety concept applies to molecules with a definable molecular mass; this topic's arithmetic belongs to that chemical world.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Moiety = the therapeutic molecule; product form adds counter-ion, lattice water, or ester group.\\\\n- Salts: solubility/crystallinity reasons; hydrates: lattice water; esters: masked actives needing cleavage.\\\\n- Identical label numbers on different bases deliver different moiety amounts.\\\\n- Unit-of-activity drugs (pct-11) sit outside mass-based moiety arithmetic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three common non-moiety additions and the pharmaceutical reason for each.\\\\n2. Why can two same-numbered labels deliver different active amounts?\\\\n3. What is the extra pharmacological step for an ester prodrug?\\\\n4. Which drug class is quantified in activity units instead, and which topic owns that?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Moiety = what works; salt/hydrate/ester = what ships. Labels are bases; the pharmacist converts. Biological units are another world.`,
      },
    ],
  },
  {
    nodeId: 'pct-22-2',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'subtopic',
    title: 'Molecular Mass and Molecular Structure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The conversions of this topic are ratios of **molecular masses** — so this lesson fixes what a molecular mass is, where its value comes from, and how structure enters the arithmetic.\\\\n\\\\n**Molecular mass** (relative molecular mass, M\\u200br) is the mass of one molecule relative to 1/12 of a carbon-12 atom — dimensionless, but used numerically in g/mol as **molar mass**. It is computed from the molecular formula by summing standard atomic weights (pct-5-9 canon): water H₂O = 2(1.008) + 16.00 = 18.02; the convention throughout pharmacy is 2–4 significant figures.\\\\n\\\\n**Structure enters through the formula.** A salt's formula shows *every* atom present — moiety plus counter-ion plus water: for a generic hydrochloride, base B + HCl gives B·HCl, whose molar mass is M(B) + 36.46. A monohydrate adds 18.02; a dihydrate 36.03. Reading the formula correctly is the whole skill: the factor for any conversion is legible in it.\\\\n\\\\n**Molecular structure, qualitatively**, explains *which* additions exist: ionisable groups bind counter-ions; crystal packing traps water; reactive groups accept ester linkages. At 200L the practical requirement is narrower: read the stated formula, sum stated atomic masses, and recognise what each addition contributes to the mass.\\\\n\\\\n**Data discipline**: molecular masses used in calculations are **reference values** — taken from a stated source (pharmacopoeia, supplier certificate, literature) and carried with their rounding. Recomputing M\\u200br from first principles is chemistry's job; using stated values consistently is pharmacy's.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- M\\u200br is relative to carbon-12; used numerically as g/mol; 2–4 significant figures in pharmacy.\\\\n- Molecular mass = Σ standard atomic weights (pct-5-9 canon).\\\\n- Salt/hydrate formulas show every atom: B·HCl adds 36.46; ·H₂O adds 18.02.\\\\n- Structure explains which additions occur; calculation reads the stated formula.\\\\n- Molecular masses are stated reference values carried with their rounding.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Molar mass from formula**\\\\n\\\\n$$\\\\nM = \\\\sum (\\\\text{atomic weight} \\\\times \\\\text{count})\\\\n$$\\\\n\\\\n**Additions** (per stated formula)\\\\n\\\\n$$\\\\nM_{\\\\text{HCl salt}} = M_{\\\\text{base}} + 36.46, \\\\qquad M_{\\\\text{monohydrate}} = M_{\\\\text{anhydrous}} + 18.02\\\\n$$`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the molar mass of glucose C₆H₁₂O₆ from stated atomic weights (C 12.01, H 1.008, O 16.00). (180.16 g/mol.)\\\\n2. What mass does a dihydrate add over the anhydrous form? (36.03.)\\\\n3. Which earlier topic owns atomic weights, and what discipline governs the values used here?\\\\n4. Explain, structurally, why a hydrochloride salt is heavier than its free base.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `M\\u200br from the formula: sum atomic weights; salts add counter-ion mass, hydrates add water. Structure explains, arithmetic sums, stated values govern.`,
      },
    ],
  },
  {
    nodeId: 'pct-22-3',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'subtopic',
    title: 'Salt Versus Active Moiety',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Two labelling conventions coexist, and knowing which one a number uses is the first step of every calculation.\\\\n\\\\n**Salt basis**: the strength names the whole salt as dispensed ("amlodipine besylate 5 mg"). The number overstates the moiety because the counter-ion is counted. **Moiety basis**: the strength names the active molecule alone ("amlodipine 5 mg") — which corresponds to *more* mass of the salt in the tablet. Both are legitimate; mixing them silently is not.\\\\n\\\\n**Why both exist.** Salt basis names what was weighed in manufacture and appears naturally on product labels; moiety basis is the therapeutic basis — the basis on which doses are clinically compared, references express equivalences, and a salt switch (besylate → maleate) remains meaningful. Regulatory conventions differ by drug and jurisdiction, which is precisely why the pharmacist, not the label, must track the basis.\\\\n\\\\n**The equivalence statement done properly** names both bases and the factor: "6.95 mg amlodipine besylate ≡ 5.0 mg amlodipine (free base)". A bare "5 mg ≡ 5 mg" is meaningless without the bases — a statement that looks like an equivalence but is not.\\\\n\\\\n**The 200L habit**: when a number arrives, ask (1) which basis? (2) which factor connects the bases? (3) has the factor been applied in the right direction? The three questions are the whole discipline; 22-4 and 22-5 execute them.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Salt basis names the dispensed form; moiety basis names the active molecule alone.\\\\n- Salt-basis numbers overstate the moiety; moiety-basis numbers understate the product mass.\\\\n- Salt basis = manufacturing/naming convenience; moiety basis = therapeutic comparison.\\\\n- Proper equivalence statements name both bases: "6.95 mg besylate ≡ 5.0 mg base".\\\\n- Track basis → factor → direction on every number that arrives.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A formulary swap replaces one manufacturer's amlodipine salt with another's. The comparison that protects the patient asks: same moiety dose? The labels both read "5 mg" — but the defensible check converts both to the moiety basis and confirms, rather than trusting two numbers that happen to match.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State what each basis counts, and which one overstates the active.\\\\n2. Why is the moiety basis the natural one for therapeutic comparison?\\\\n3. Write a complete equivalence statement and explain what an incomplete one hides.\\\\n4. What three questions discipline every incoming strength?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Two bases, one factor, one direction check. "5 mg" means nothing until you ask: 5 mg of what?`,
      },
    ],
  },
  {
    nodeId: 'pct-22-4',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'subtopic',
    title: 'Equivalent Amounts of Active Drug',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Equivalence arithmetic**: given an amount on one basis, find the amount on the other that carries the *same* moiety. The conversion factor is the molecular-mass ratio, applied in the correct direction.\\\\n\\\\n**The two directions.** (1) *Salt → moiety*: multiply by M(moiety)/M(salt) — a factor below 1, because the counter-ion/water mass is removed. (2) *Moiety → salt*: multiply by M(salt)/M(moiety) — the reciprocal, above 1. Direction discipline: name the bases of both the given and the wanted amount before touching the factor; the factor's numerator and denominator must "cancel" the given basis and produce the wanted one.\\\\n\\\\n**Reference values, stated**: amlodipine free base 407.9, amlodipine besylate 567.1; lisinopril 405.5, lisinopril dihydrate 441.5 (g/mol; standard reference values). Worked examples below use these stated masses and no others.\\\\n\\\\n**Verification habit**: convert the answer back by the reciprocal factor — you must recover the given amount exactly. A one-line reciprocal check catches the most common error class in this topic (inverted factor).\\\\n\\\\n**Where this connects**: the same multiply-by-ratio logic appeared in pct-14-5 for hydrates on the mEq scale — this lesson is the generalised form; hydrate and salt factors may both apply to one compound (a hydrochloride dihydrate carries *two* additions, and the factors chain).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Salt → moiety: × M(moiety)/M(salt) (< 1). Moiety → salt: × M(salt)/M(moiety) (> 1).\\\\n- Name both bases before applying any factor; let units cancel on paper.\\\\n- Reference values used in examples are stated, never assumed.\\\\n- Verify by the reciprocal conversion — exact recovery of the given amount.\\\\n- Multiple additions chain: a hydrochloride dihydrate applies salt and hydrate factors in sequence.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Salt → moiety**\\\\n\\\\n$$\\\\nm_{\\\\text{moiety}} = m_{\\\\text{salt}} \\\\times \\\\frac{M_{\\\\text{moiety}}}{M_{\\\\text{salt}}}\\\\n$$\\\\n\\\\n**Moiety → salt** (reciprocal factor)\\\\n\\\\n$$\\\\nm_{\\\\text{salt}} = m_{\\\\text{moiety}} \\\\times \\\\frac{M_{\\\\text{salt}}}{M_{\\\\text{moiety}}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — amlodipine.** 5 mg of amlodipine besylate → moiety: factor = 407.9/567.1 = **0.719**. Moiety = 5 × 0.719 = **3.6 mg** (3.60 mg to 3 s.f.). Back-check: 3.6 × 567.1/407.9 = 3.6 × 1.391 = 5.01 ≈ 5 mg ✓ (rounding-consistent).\\\\n\\\\n**Example 2 — reverse direction.** A reference states "amlodipine 5 mg (moiety)": salt equivalent = 5 × 567.1/407.9 = 5 × 1.391 = **6.95 mg** of besylate. This is the completed equivalence statement of 22-3.\\\\n\\\\n**Example 3 — hydrate factor.** 10 mg of lisinopril dihydrate → lisinopril: factor = 405.5/441.5 = **0.918**. Moiety = 10 × 0.918 = **9.2 mg**. Back-check: 9.2 × 441.5/405.5 = 9.2 × 1.089 = 10.0 ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 5 mg of amlodipine besylate to the moiety basis (3.6 mg).\\\\n2. How much lisinopril dihydrate delivers 10 mg of lisinopril moiety? (10 × 441.5/405.5 = 10.9 mg.)\\\\n3. Why must the factor's direction be checked by unit-cancellation rather than memorised?\\\\n4. A hydrochloride monohydrate: which two factors chain, and in what order does the arithmetic run?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Two directions, one ratio: moiety = salt × M\\u200b(moiety)/M\\u200b(salt); back-check by the reciprocal. Name the bases, cancel the units, chain factors when additions stack.`,
      },
    ],
  },
  {
    nodeId: 'pct-22-5',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'subtopic',
    title: 'Converting Salt Strength to Active Moiety',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `22-4 converted *amounts*; this lesson converts **strengths** — the % w/w, mg/mL, or mg-per-unit figures on labels and formulas — which the same factor handles once the basis difference is recognised.\\\\n\\\\n**The strength conversion.** A salt-basis strength C_salt converts to the moiety basis by the same ratio: C_moiety = C_salt × M(moiety)/M(salt). A solution containing 10 mg/mL of a salt whose factor is 0.80 contains **8 mg/mL of moiety**; a 2% w/w salt cream is a 1.6% w/w moiety cream. The factor applies to any strength expression because strength is amount per unit — the "per unit" is identical on both bases.\\\\n\\\\n**Direction traps.** (1) *Inversion*: 10 mg/mL salt is 8 mg/mL moiety, not 12.5 (that would be the reverse conversion's result). (2) *Double application*: applying both a salt factor and a hydrate factor where the stated M\\u200b(salt) already includes the hydrate — the molecular mass used must match the form the strength names. (3) *Basis drift mid-calculation*: converting the strength but not the amount it multiplies — all quantities in one computation must sit on one basis.\\\\n\\\\n**Dose-volume chains.** For liquids, the practical chain is: stated salt strength → moiety strength → dose volume = dose (moiety) ÷ moiety strength. Each link is labelled; the final check re-derives the moiety dose from the original label figure in one line.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- C_moiety = C_salt × M(moiety)/M(salt) — same factor as amounts, applied to strengths.\\\\n- The "per unit" (per mL, per g, per tablet) is identical on both bases.\\\\n- Traps: inverted factor; double-applying a hydrate already inside the stated M\\u200b; mixing bases mid-calculation.\\\\n- Liquid chains: salt strength → moiety strength → dose volume, each link labelled.\\\\n- One-line final check re-derives the dose from the original label figure.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Strength conversion**\\\\n\\\\n$$\\\\nC_{\\\\text{moiety}} = C_{\\\\text{salt}} \\\\times \\\\frac{M_{\\\\text{moiety}}}{M_{\\\\text{salt}}}\\\\n$$\\\\n\\\\n**Dose volume chain** (moiety basis)\\\\n\\\\n$$\\\\nV_{\\\\text{dose}} = \\\\frac{D_{\\\\text{moiety}}}{C_{\\\\text{moiety}}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — solution strength.** An oral solution contains 10 mg/mL of a hydrochloride salt; M(base) = 250, M(salt) = 286.5 (stated reference values). Factor = 250/286.5 = **0.873**. Moiety strength = 10 × 0.873 = **8.73 mg/mL**. Back-check: 8.73 × 286.5/250 = 8.73 × 1.146 = 10.0 ✓.\\\\n\\\\n**Example 2 — dose volume.** The prescription orders 20 mg of the *base* daily. Volume = 20 ÷ 8.73 = **2.29 mL** (round to 2.3 mL, stated). One-line check: 2.29 mL × 10 mg/mL salt = 22.9 mg salt × 0.873 = 20.0 mg base ✓.\\\\n\\\\n**Example 3 — percentage strength.** A 2.5% w/w ointment of the same salt: moiety strength = 2.5 × 0.873 = **2.2% w/w**. In 60 g of ointment: salt 1.5 g → moiety 1.5 × 0.873 = **1.31 g**.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert a 4 mg/mL salt strength (factor 0.719) to the moiety basis. (2.9 mg/mL.)\\\\n2. What volume delivers 15 mg of moiety at that converted strength? (5.2 mL.)\\\\n3. Why is using M\\u200b including hydrate water a *different* conversion than chaining salt and hydrate factors?\\\\n4. Show the one-line final check for Example 2.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same factor, new target: strengths convert like amounts; keep every quantity on one basis; end every chain with a one-line check against the original label.`,
      },
    ],
  },
  {
    nodeId: 'pct-22-6',
    courseId: 'pct-201',
    topicId: 'pct-22',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Calculation Applications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where the moiety arithmetic earns its keep.\\\\n\\\\n**1. Prescription and product screening.** A prescription written on one basis against a product labelled on the other is a silent factor-of-1.39 (for the amlodipine case) — the screening habit from pct-7 now includes asking both basis questions before dispensing. Generics swapping salt forms (besylate ↔ maleate) make this a live check, not a theoretical one.\\\\n\\\\n**2. Compounding from salts.** Building a moiety-dosed preparation from a salt ingredient (pct-19 bench, pct-18 scaling): the ingredient quantity is computed on the salt basis, then converted — e.g. to deliver 0.125 g of a base whose salt factor is 0.873, weigh 0.125 × 1/0.873 = **0.143 g** of salt. The worksheet records both bases and the factor.\\\\n\\\\n**3. Clinical comparisons and references.** Dose comparisons across products, bioequivalence discussions, and literature dose ranges are conventionally moiety-basis statements; product labels may be salt-basis. The pharmacist translates before comparing — never compares numbers of unknown basis.\\\\n\\\\n**4. Hydrate and salt switches in manufacture/formulation.** Replacing an anhydrous form with a hydrate (or vice versa) in a formula changes the weighed quantity by the hydrate factor — the pct-14-5 trap generalised to formulation work; every substitution triggers a recalculation, never a mass-for-mass swap.\\\\n\\\\n**Boundary reminder**: where activity is biological rather than molecular (pct-11 canon), units of activity replace these mass conversions; and where a label already states moiety basis, the arithmetic is simply skipped — knowing *when not to convert* is part of the competence.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Screening now includes: which basis is the prescription on, which the product?\\\\n- Compounding from salts: compute salt mass = moiety target × M(salt)/M(moiety); record both bases.\\\\n- Clinical/literature comparisons are moiety-basis; translate before comparing.\\\\n- Form switches (hydrate ↔ anhydrous, salt ↔ salt) always trigger recalculation.\\\\n- Knowing when conversion is unnecessary is part of the skill.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Two strength-switching product lines arrive with identical "10 mg" labels — one salt-basis, one moiety-basis. Dispensed uncritically, they differ by ~14% in delivered active. The basis question, asked in seconds at screening, is the difference between an equivalent switch and a dosing error.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does the basis question add to the pct-7 screening pass?\\\\n2. Compute the salt mass to deliver 0.125 g of base at factor 0.873 (0.143 g).\\\\n3. Why are literature dose ranges treated as moiety-basis by default?\\\\n4. What must accompany any hydrate substitution in a formula?\\\\n5. When is no conversion needed, and why is that still a decision?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Basis questions at screening, factor-recorded conversions at the bench, moiety-basis comparisons in the clinic — and the wisdom to skip the arithmetic when the basis already matches.`,
      },
    ],
  },
];
