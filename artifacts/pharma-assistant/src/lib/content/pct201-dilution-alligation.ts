import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-17: Dilution, Stock Solutions and
 * Alligation.
 *
 * Batch 20: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14/15/16
 * top-level topic convention) plus its eight children pct-17-1…17-8
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-17 has no surviving Phase-1 tier record; the topic and
 * conceptual children are Tier B (established conceptual-topic
 * convention, flagged pending confirmation), while the calculation
 * children — Dilution Calculations (17-2), Dilution of Concentrated
 * Preparations (17-3), Alligation Medial (17-6), Alligation Alternate
 * (17-7) — are Tier C, matching the calculation-lesson convention
 * (pct-5-7; pct-9/10/13/14/15/16 blocks).
 *
 * Scope discipline: dilution/stock/alligation arithmetic is THIS topic's
 * canon. Concentration *expressions* (% w/v, ratio, ppm) are pct-9's
 * canon and are used, not re-taught; injectable-scale dilution and
 * reconstitution (with displacement) are pct-15-8's canon and are
 * cross-referenced; geometric dilution (trituration of powders) is the
 * pct-19-6 ↔ pct-34-5 canonical crossover and is deliberately NOT
 * treated here — this topic owns dilution of liquids/strengths, not
 * powder blending. Volume-in-volume vs weight-in-weight handling is
 * flagged where conventions matter (alcohol USP dilutions).
 */
export const pct201DilutionAlligationLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-17',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'topic',
    title: 'Dilution, Stock Solutions and Alligation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pharmacy rarely uses drugs at their manufactured strength. Concentrated stocks are diluted to working strengths; ready-made products are blended to intermediate ones; prescriptions call for strengths the market never sold. This topic is the arithmetic of **changing strength without changing the amount of drug** — and its opposite-number skill, **combining strengths to hit a target**.\\n\\n**The two master ideas.** First, **conservation**: dilution moves concentration and volume in opposite directions while the drug mass is fixed (C₁V₁ = C₂V₂). Second, **mass balance**: when two strengths are mixed, the final amount of drug equals the sum of the amounts contributed — the idea alligation organises into a fast layout.\\n\\n**Stock solutions** are the concentrated reservoirs (10% potassium permanganate, flavouring concentrates, disinfectant concentrates) from which working strengths are made; **dilution calculations** and **strength adjustment** are the daily applications; **alligation medial and alternate** are the two classical layouts for mixing problems; and **pharmaceutical applications** collects where each is used on a real bench.\\n\\nScope lines worth stating: concentration *expressions* belong to pct-9; injectable reconstitution with vial displacement belongs to pct-15-8; and powder-mixing *geometric dilution* is a separate canonical node (pct-19) — none are re-taught here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dilution conserves drug mass: concentration and volume trade off inversely (C₁V₁ = C₂V₂).\\n- Stock solutions are concentrated reservoirs for making working strengths.\\n- Mixing problems are mass balance: final drug = sum of contributions.\\n- Alligation medial finds a resulting strength; alligation alternate finds the proportions to hit a target.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State what dilution conserves and how C and V move.\\n2. What question does alligation medial answer, and what question does alligation alternate answer?\\n3. Why are stock solutions economic and accuracy assets in a dispensary?\\n4. Name two topics whose dilution material is deliberately not re-taught here.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Change strength = conserve drug (C₁V₁ = C₂V₂). Hit a target by mixing = mass balance, organised by alligation. Stocks feed the bench; the layout does the arithmetic.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-17', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-17-1',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Stock Solutions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **stock solution** is a concentrated, stably prepared solution from which weaker "working" solutions are made on demand. Dispensaries keep stocks because weighing tiny amounts of a drug for a single weak preparation is both inaccurate and wasteful — diluting from a stock transfers the *precision* of one good weighing into many accurate preparations.\\n\\n**Classic pharmacy stocks**: 10% w/v potassium permanganate (working strengths 1:1000, 1:4000, 0.1% — paediatric baths), 100 mM buffer concentrates, flavouring and colouring concentrates, disinfectant concentrates (e.g. 10% chlorhexidine, diluted per label).\\n\\n**The stock arithmetic** is the dilution identity applied with the stock as C₁:\\n\\n$$\\nV_{\\text{stock}} = \\frac{C_{\\text{target}} \\times V_{\\text{target}}}{C_{\\text{stock}}}\\n$$\\n\\nthen "dissolve/qs to volume" — the solvent added is the difference, not added independently.\\n\\n**Labelling discipline**: a stock label must state strength, diluent, date, and the dilutions for which it is suitable. A stock of *unstated* strength is a hazard, not an asset — the whole system's accuracy flows from the one number on that bottle.\\n\\n**Stability boundary (deferred)**: how long a stock keeps is stability science (pct-43 canon); this lesson treats the assigned shelf life as a given.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Stocks concentrate the accuracy of one weighing into many preparations.\\n- V_stock = (C_target × V_target)/C_stock; solvent qs to the target volume.\\n- Classic stocks: KMnO₄ 10%, chlorhexidine 10%, flavour/colour concentrates.\\n- A stock label without a strength is a hazard; the system runs on that number.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Prepare 500 mL of 1:4000 potassium permanganate from the 10% stock" — a daily paediatric/dermatology request solved in one line: V = (0.025% × 500)/10 = 1.25 mL, qs to 500 mL.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does a stock improve accuracy rather than merely save time?\\n2. Compute the stock volume for 1 L of 0.1% w/v from a 10% stock.\\n3. Why is the diluent "qs to volume" rather than a separately computed amount?\\n4. What four things must a stock label state?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Stocks = concentrated reservoirs; V_stock = C_target·V_target/C_stock, qs to volume. One precise weighing serves many accurate dilutions; the label's strength is the system's foundation.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-2',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Dilution Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `The workhorse identity, from **conservation of mass** — dilution adds solvent, never removes drug:\\n\\n$$\\nC_1 V_1 = C_2 V_2\\n$$\\n\\n**Unit discipline**: any consistent pair works (%, mg/mL, g/L, ratio converted to % first) — both sides of each product must be the *same kind*. A ratio strength (1:1000) is converted to % (0.1%) before entering the identity.\\n\\n**The two question shapes**:\\n- "What volume of the stronger product gives the target?" → V₁ = C₂V₂/C₁.\\n- "What will the strength be if I dilute to this volume?" → C₂ = C₁V₁/V₂.\\n\\n**Dilution factor** shorthand: F = C₁/C₂ = V₂/V₁ — the multiplier on volume equals the divisor on strength; a 1-in-5 dilution quintuples volume and divides strength by 5.\\n\\n**Direction check** (the built-in safety net): dilution must *lower* C and *raise* V. Computed values moving the other way mean the setup is inverted.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Every dilution question is the master identity read from a different angle. **Two question shapes cover practice**: "what volume of the strong product do I take?" (V₁ = C₂V₂/C₁) and "what strength will result?" (C₂ = C₁V₁/V₂). The **dilution factor** F = C₁/C₂ = V₂/V₁ is the same identity compressed into a single multiplier — a 1-in-F dilution multiplies volume and divides strength by F, and chained dilutions multiply their factors.\n\n**Two habits make the arithmetic safe**: convert ratio strengths (1:1000 → 0.1%) *before* entering the identity, and direction-check the answer — dilution must lower strength and raise volume, so any result moving the other way signals an inverted setup.\n\nThe worked examples close every problem with a reverse run: the drug mass computed out must equal the drug mass weighed in.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Master identity**\\n\\n$$\\nC_1 V_1 = C_2 V_2\\n$$\\n\\n**Volume of stock/stronger product**\\n\\n$$\\nV_1 = \\frac{C_2\\,V_2}{C_1}\\n$$\\n\\n**Resulting strength**\\n\\n$$\\nC_2 = \\frac{C_1\\,V_1}{V_2}\\n$$\\n\\n**Dilution factor**\\n\\n$$\\nF = \\frac{C_1}{C_2} = \\frac{V_2}{V_1}\\n$$\\n\\n**Diluent to add**\\n\\n$$\\nV_{\\text{add}} = V_2 - V_1\\n$$\\n\\nUnits: identical expressions on each side of every product; ratio strengths converted to % first.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — volume of stock.** 10% stock → 500 mL of 0.1%: V₁ = (0.1 × 500)/10 = **5 mL**, qs 500 mL.\\n\\n**Example 2 — ratio strength first.** From a 1:1000 solution prepare 250 mL at 1:4000: convert (0.1% → 0.025%); V₁ = (0.025 × 250)/0.1 = **62.5 mL**, qs 250 mL.\\n\\n**Example 3 — resulting strength.** 20 mL of 25% diluted to 200 mL: C₂ = (25 × 20)/200 = **2.5%**.\\n\\n**Example 4 — dilution factor chain.** 1 mL of concentrate diluted to 10 mL (F = 10), then 5 mL of that to 100 mL (F = 20): overall F = 10 × 20 = **200**; a 50% concentrate ends at 50/200 = **0.25%**.\\n\\n**Checks on every answer.** Direction (C down, V up ✓); reverse-run the identity; factors multiply across chained dilutions; the drug mass in (C₁V₁) equals the drug mass out (C₂V₂) in consistent units.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Extemporaneous labelling reads "dilute 5 mL of stock to 500 mL" — Example 1 exactly. The dilution-factor shorthand is how nurses' charts express the same arithmetic ("1 in 8 dilution").`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive V₁ from the master identity and state its unit logic.\\n2. 15 mL of 40% diluted to 600 mL — resulting strength?\\n3. Prepare 800 mL of 1:5000 from a 1:500 stock — volume needed?\\n4. Two chained dilutions of F = 4 then F = 10 give what overall factor, and what strength results from a 20% concentrate?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `C₁V₁ = C₂V₂; V₁ = C₂V₂/C₁; C₂ = C₁V₁/V₂; F = C₁/C₂ = V₂/V₁; add V₂ − V₁. Convert ratios first; direction-check; factors multiply along chains.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-3',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Dilution of Concentrated Preparations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This lesson handles concentrated *products* — spirits, concentrated acids, official concentrates — where the dilution conventions matter as much as the arithmetic:\\n\\n1. **Alcohol and spirits (v/v territory)**: dilutions are **volume-in-volume**, and volumes are **not strictly additive** (ethanol–water contraction). Pharmacopoeial practice (convention-dependent, flagged): for official dilutions the calculation treats volumes as additive *within the stated tolerance*, or qs-to-volume procedures absorb the contraction; for precise work, weight-based dilution avoids the issue entirely.\\n2. **Acids**: always **acid into water**, never water into acid — the dilution is exothermic; the arithmetic (e.g. concentrated HCl ≈ 36% w/w, density ≈ 1.18 g/mL) must convert w/w ↔ v/v via density when the label and the target speak different bases (pct-9 conversion canon).\\n3. **Official diluted products**: pharmacopoeias define fixed dilutions (e.g. concentrated peppermint spirit → peppermint water at stated ratios) — the convention overrides recomputation, and the pharmacist verifies rather than re-derives.\\n\\n**Safety frame**: concentrated preparations add *chemical* hazard to arithmetic hazard — PPE, order of mixing, and labelled dilution class all travel with the calculation.\\n\\nThe worked examples below deliberately pair an arithmetic check with a convention note — the professional skill is knowing when the number is negotiable and the convention is not.`,
      },
      {
        kind: 'FORMULAS',
        body: `**w/w ↔ v/v via density**\\n\\n$$\\n\\text{v/v \\%} = \\text{w/w \\%} \\times \\frac{\\rho_{\\text{solution}}}{\\rho_{\\text{solute}}}\\n$$\\n\\n**Mass of solute from w/w**\\n\\n$$\\nm = \\text{w/w \\%} \\times \\text{mass of preparation}\\n$$\\n\\n**General dilution** (unchanged identity)\\n\\n$$\\nC_1 V_1 = C_2 V_2\\n$$\\n\\nConventions, not formulas: acid-into-water; official dilution ratios override recomputation; contraction handled by qs procedure (flagged).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — spirits dilution.** Concentrated peppermint spirit (80% v/v, official convention) → peppermint spirit 10%: to make 100 mL at 10%: V₁ = (10 × 100)/80 = **12.5 mL**, qs 100 mL with ethanol–water of the official strength.\\n\\n**Example 2 — w/w → v/v.** A concentrate is 70% w/w ethanol, ρ = 0.9 g/mL (illustrative); ethanol ρ = 0.79: v/v % = 70 × 0.9/0.79 ≈ **79.7% v/v** — the conversion the dilution arithmetic then uses.\\n\\n**Example 3 — acid handling (arithmetic + convention).** Small-scale illustration: 5 mL of concentrated HCl (36% w/w, ρ 1.18) contains 5 × 1.18 × 0.36 = **2.124 g** HCl; diluting to 100 mL gives 21.24 mg/mL (≈ 2.1% w/v) — added **acid into water**, then qs.\\n\\n**Example 4 — official dilution discipline.** A monograph directs "dilute 10 mL to 100 mL" for a standard: the pharmacist executes 10 → 100 exactly; recomputing a "cleverer" ratio is out of scope — official conventions are the authority.\\n\\n**Checks.** Mass before = mass after in every case; density conversions re-run in reverse; convention flags stated where v/v contraction or official ratios apply.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Dispensary shelves hold exactly these concentrated products; the "DILUTED BEFORE USE" label is the safety net whose arithmetic this lesson guarantees — and acid handling is a first-week practical skill the calculation must respect.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why do ethanol dilutions need a convention note that sugar-water dilutions do not?\\n2. Convert 40% w/w of a solute (ρ_solute 1.2, solution ρ 1.0) to v/v.\\n3. Why is acid always added to water?\\n4. What is the professional rule when a monograph fixes a dilution ratio?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Concentrated products: v/v conventions (contraction — qs absorbs it, flagged), density bridges w/w↔v/v, acid into water, official ratios override recomputation. Arithmetic + convention travel together.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-4',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Altering Product Strength',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Altering product strength** is dilution's practical umbrella: taking a marketed or prepared product and delivering it at a different strength. Three scenarios cover practice:\\n\\n1. **Diluting down** (stronger → weaker): the master identity; the diluent must be *pharmaceutically compatible* (same vehicle family — diluting an alcoholic elixir with water can precipitate the drug; flagged as a formulation decision, pct-2/pct-3 canon).\\n2. **Concentrating up** (weaker → stronger): evaporation or adding drug/solute — mass balance again, but now solute is *added*: final mass = initial solute + added solute at the new volume.\\n3. **Blending two lots**: neither dilution nor pure addition — the alligation territory of 17-6/17-7, previewed here.\\n\\n**Concentration-up identity** (solute addition):\\n\\n$$\\nC_f = \\frac{C_i V_i + m_{\\text{added}}}{V_f}\\n$$\\n\\n**Documentation discipline**: an altered product is a *new* preparation — new strength, new beyond-use context, new label. The arithmetic is the easy half; the pharmaceutical judgment (vehicle compatibility, solubility at the new strength, stability at the changed concentration) is the licensed half, deferred to its canonical topics.\\n\\n**Paediatric adaptation note**: strength alteration is how adult products become child-safe doses — and why the double-check culture of pct-15-10 applies with full force here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three scenarios: dilute down (identity), concentrate up (add solute), blend two lots (alligation).\\n- Diluent compatibility is a formulation decision — vehicle mismatch can precipitate drugs.\\n- Concentrating up: C_f = (C_iV_i + m_added)/V_f.\\n- An altered product is a new preparation: strength, label, dating all reset.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Prepare 25 mg/5 mL from the 50 mg/5 mL product" — halving strength by 1:1 dilution with the *stated compatible diluent*, relabelled with the new strength and date. The arithmetic is one line; the judgment is the vehicle.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three strength-alteration scenarios and the tool each uses.\\n2. 100 mL of 8% w/v is concentrated to 100 mL at 10% — how much solute must be added?\\n3. Why can diluting an elixir with water be wrong even when the arithmetic is right?\\n4. What must be reset on the label when a product's strength is altered?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dilute down: C₁V₁ = C₂V₂ with a compatible diluent. Concentrate up: add solute, C_f = (C_iV_i + m)/V_f. Blend: alligation. New strength = new product, new label.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-5',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Strength Adjustment',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Strength adjustment** is the planning verb: given *where the strength is* and *where it must be*, choose the operation and size it. This lesson is the decision layer over 17-2/17-4's tools:\\n\\n1. **Quantify the gap**: target strength vs current strength — as a ratio. Halving needs F = 2 (dilute 1:1); a 40% → 25% adjustment needs F = 40/25 = 1.6.\\n2. **Choose the operation**: down → dilution with a compatible diluent (17-2); up → solute addition (17-4); two available strengths → blend (alligation, 17-6/17-7).\\n3. **Size it**: V₂ = F·V₁ for dilutions; m = C_target·V_f − C_current·V_i for small top-ups, with V_f the final volume *after* the addition.\\n4. **Verify**: reverse-run; direction-check; label.\\n\\n**The solvent-displacement honesty**: adding solid solute raises volume by more than zero (displacement) — small-scale top-ups usually take V_f as stated and absorb displacement within tolerance (convention-dependent — flagged); large-scale work measures.\\n\\n**Quality gate**: an adjustment that needs a diluent the product lacks, or a strength outside the drug's solubility, is *not* adjustable — the arithmetic answering "impossible" is a correct answer, and knowing when to say it is the skill.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Adjustment = gap ratio → operation choice → sizing → verification.\\n- F = C_current/C_target for dilutions; m_added = C_target·V_f − C_current·V_i for top-ups.\\n- Displacement on solid addition is convention-handled at small scale (flagged).\\n- "Not adjustable" (no compatible diluent; beyond solubility) is a legitimate, correct outcome.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A ward asks to run 40 mg in 50 mL from 200 mg/100 mL stock: concentrations are 2 mg/mL and 0.8 mg/mL, so F = 2/0.8 = 2.5 → stock volume = 50/2.5 = **20 mL stock + 30 mL compatible diluent**; verify: 20 mL × 2 mg/mL = 40 mg in 50 mL = 0.8 mg/mL ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the four-step adjustment workflow.\\n2. 60% → 30%: what dilution factor and mixing ratio?\\n3. 100 mL of 5% must become 100 mL of 6% — solute to add (ignore displacement, stated convention)?\\n4. Give two conditions that make an adjustment impossible, and why arithmetic alone cannot fix them.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Gap → F = C_i/C_t → dilute (V₂ = F·V₁) or top-up (m = C_t·V_f − C_i·V_i) or blend. Displacement convention-flagged; "impossible" is a valid answer; verify by reverse run.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-6',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Alligation Medial',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Alligation medial** answers: *what strength results when known amounts of known strengths are combined?* It is mass balance laid out as arithmetic:\\n\\n$$\\nC_f = \\frac{\\sum (m_i \\times C_i)}{\\sum m_i}\\n$$\\n\\n— a weighted average of the strengths, weighted by the quantities mixed. The "alligation" layout is the classical three-column arrangement (strengths, quantities, products) that bookkeeps the same sum.\\n\\n**The sanity property** every medial answer must satisfy: **the result lies between the two input strengths** — never above the stronger, never below the weaker. An answer outside that interval is a setup error, full stop.\\n\\n**Units**: quantities in any consistent unit (g, mL, kg); strengths in any consistent expression (%) — but *both* mixed quantities must share one unit and *both* strengths one expression. Ratio strengths convert to % first (pct-9 canon).\\n\\n**Where medial beats the general identity**: three or more components — summing mᵢCᵢ across a table is cleaner than chained pairwise C₁V₁ = C₂V₂ steps.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Alligation medial is the **record-keeping direction** of mass balance: the amounts and strengths are known, and the question is what the blend became. The identity is a **quantity-weighted average** — each component drags the result toward its own strength in proportion to how much of it is present.\n\n**The sanity property does real work**: the blended strength must lie strictly between the lowest and highest input strengths. An answer outside that interval is not a rounding problem — it is a setup error (wrong units, a missed component, a strength expressed inconsistently).\n\n**When medial is the right tool**: after pooling lots, after a jar was compounded from two strengths, or any time a blend of three or more components must be documented — summing the layout beats chained pairwise dilution identities.\n\nZero-strength rows (water, ointment base) are legitimate inputs and simply pull the average down.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Alligation medial (weighted average)**\\n\\n$$\\nC_f = \\frac{m_1 C_1 + m_2 C_2 + \\cdots + m_n C_n}{m_1 + m_2 + \\cdots + m_n}\\n$$\\n\\n**Layout form**\\n\\n| strength | quantity | strength × quantity |\\n|---|---|---|\\n| C₁ | m₁ | m₁C₁ |\\n| C₂ | m₂ | m₂C₂ |\\n| — | Σm | ΣmC → ÷Σm = C_f |\\n\\n**Sanity property**\\n\\n$$\\nC_{\\min} < C_f < C_{\\max}\\n$$\\n\\nZero-strength components (water) are legitimate rows (C = 0).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — two lots.** Mix 400 g of 10% ointment with 100 g of 25% ointment:\\nΣ(mC) = 400 × 10 + 100 × 25 = 4000 + 2500 = 6500; Σm = 500 → C_f = 6500/500 = **13%**. Sanity: between 10 and 25 ✓.\\n\\n**Example 2 — with water as a row.** 60 mL of 8% + 40 mL of water (0%):\\nΣ(mC) = 480 + 0 = 480; Σm = 100 → **4.8%**.\\n\\n**Example 3 — three components.** 200 mL at 5%, 300 mL at 15%, 100 mL at 25%:\\nΣ(mC) = 1000 + 4500 + 2500 = 8000; Σm = 600 → C_f = **13.33%**.\\n\\n**Example 4 — reverse sense.** If 50 g at 20% is mixed with 50 g of unknown X% to give 15%, then (50 × 20 + 50 × X)/100 = 15 → X = **10%** — medial run backwards.\\n\\n**Checks.** Result strictly inside the input interval; Σm re-adds; reverse-run (C_f × Σm) returns Σ(mC).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ointment lot blending, syrup pooling, and "what did the mixed jar become?" documentation — medial is the answer-and-record tool after a blend has happened.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the medial identity in words and in symbols.\\n2. 300 g of 5% + 200 g of 12% → what strength?\\n3. Why is a medial result *outside* the input range always wrong?\\n4. 150 mL at 20% + 350 mL of water gives what strength?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Medial: C_f = Σ(mC)/Σm — a quantity-weighted average. Water is a 0% row; three-plus components are where it shines; the answer must sit between the inputs.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-7',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Alligation Alternate',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Alligation alternate** answers the reverse question: *in what proportions must strengths be mixed to hit a target?* The classical layout:\\n\\n1. Write the two (or more) available strengths in a column; the **target** in the middle.\\n2. **Cross-difference diagonally**: subtract the target from each strength and write the difference at the *opposite* end — |C_high − C_target| pairs with the **low** component; |C_target − C_low| pairs with the **high** component.\\n3. The differences are the **proportional parts** (share units, e.g. parts by volume/weight).\\n4. Scale parts → actual quantities for the required total.\\n\\n**Why cross-differencing works**: it *is* mass balance in disguise — pairing the high strength's excess over target against the low strength's deficit makes the weighted average land exactly on target. The layout is a solver; the physics is 17-6's medial identity.\\n\\n**Ordering discipline**: the target must lie **between** the two strengths — alternate cannot create a strength outside what you own. Water/diluent enters as a 0% component, giving it a part equal to the target itself.\\n\\n**Parts → quantities**: total parts P; fraction per component = parts/P; quantity = fraction × total required.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Alligation alternate is the **planning direction**: the target strength is known and the proportions must be found. The cross-difference layout is mass balance in disguise — pairing each high strength's excess over the target against the low strength's deficit forces the weighted average to land exactly on target.\n\n**The operating rules**: the target must lie strictly between the two available strengths (a blend cannot exceed its strongest input); a diluent enters as a 0% component whose part equals the target itself; the parts are proportional units, scaled to the required total at the end.\n\n**The verification loop is the safety**: every alternate plan is checked by running alligation medial on the computed quantities — if medial does not return the target, the parts were mis-set. For **three or more components**, the reliable method is sequential two-component alternate (build an intermediate, then blend or dilute it), rather than improvised multi-pair layouts.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Proportional parts (two components)**\\n\\n$$\\n\\text{parts}_{\\text{high}} = C_{\\text{target}} - C_{\\text{low}}\\n$$\\n\\n$$\\n\\text{parts}_{\\text{low}} = C_{\\text{high}} - C_{\\text{target}}\\n$$\\n\\n**Scaling to a required total Q**\\n\\n$$\\nq_i = \\frac{\\text{parts}_i}{\\sum \\text{parts}} \\times Q\\n$$\\n\\n**Verification is medial**: mixing the computed quantities must return C_target via C_f = Σ(mC)/Σm.\\n\\nZero-strength rows (diluent) follow the same rule.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the classic.** From 20% and 5% stock solutions, make 500 mL at 12%:\\nHigh (20%): parts = 12 − 5 = 7. Low (5%): parts = 20 − 12 = 8. Total 15 parts.\\nHigh: 7/15 × 500 = **233.3 mL**; Low: 8/15 × 500 = **266.7 mL**.\\n**Verify (medial)**: (233.3 × 20 + 266.7 × 5)/500 = (4666 + 1333.5)/500 = 5999.5/500 = 12.0 ✓.\\n\\n**Example 2 — with diluent (0%).** From a 30% concentrate make 300 mL at 6%:\\nHigh: 6 − 0 = 6 parts; Low: 30 − 6 = 24 parts; total 30.\\nConcentrate: 6/30 × 300 = **60 mL**; water: **240 mL** — check: (60 × 30)/300 = 6% ✓.\\n\\n**Example 3 — ointments.** Blend 25% and 10% to 500 g at 15%:\\nHigh: 15 − 10 = 5; Low: 25 − 15 = 10; total 15 → 25% lot: **166.7 g**; 10% lot: **333.3 g**. Verify: (166.7 × 25 + 333.3 × 10)/500 = (4167.5 + 3333)/500 = **15.0** ✓.\\n\\n**Example 4 — three components (sequential method).** Target 10% from 20%, 8% and water. The reliable route is sequential two-component alternate. **Step 1** — make a 12% intermediate from 20% and 8%: high 20% gets 12 − 8 = 4 parts; low 8% gets 20 − 12 = 8 parts → 1 part 20% : 2 parts 8% (check by medial: (1 × 20 + 2 × 8)/3 = 12 ✓). **Step 2** — dilute 12% to 10% with water: 12% gets 10 − 0 = 10 parts; water gets 12 − 10 = 2 parts → 5 : 1. **Chain for 220 mL of 10%**: need 220 × 5/6 = 183.3 mL of the 12% intermediate + 36.7 mL water; the intermediate splits 183.3/3 = **61.1 mL of 20% + 122.2 mL of 8%**. **Medial verification of the whole blend**: (61.1 × 20 + 122.2 × 8 + 0)/220 = (1222 + 977.6)/220 = **≈ 10%** ✓.\\n\\n**Checks.** Medial verification of the final mix; parts re-add to the total; the target strictly between inputs.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Use the 20% and 5% stocks to make 500 mL of 12%" — Example 1 is the bench phrasing; the parts layout goes straight onto the compounding sheet with the medial verification underneath.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State what alternate answers that medial does not.\\n2. From 50% and 10% stocks, what parts make 25%? Quantities for 400 mL?\\n3. Why must the target lie between the two available strengths?\\n4. Verify Example 1 by medial — show the arithmetic.\\n5. Why is the sequential two-component method preferred for three-component problems?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Alternate: cross-difference around the target → parts → scale to Q. Diluent is a 0% row. Verify with medial. Three components: go sequential two-component pairs — the reliable general method.`,
      },
    ],
  },
  {
    nodeId: 'pct-17-8',
    courseId: 'pct-201',
    topicId: 'pct-17',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Applications of Alligation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where the layouts earn their keep:\\n\\n1. **Ointment/cream lot blending** (17-6 Ex1, 17-7 Ex3): pooling partial tubes to a prescribed strength — medial records, alternate plans.\\n2. **Stock-to-working dilutions with two available stocks**: alternate chooses the cheapest blend hitting the target (e.g. 20% + 5% → 12%); the *cost* angle is a genuine selection criterion — alligation answers the strength question; procurement answers which stocks to own.\\n3. **Dilution with water as a 0% component** (17-7 Ex2): the most common special case — concentrates to working solutions.\\n4. **Solid mixtures**: parts by weight for powders/granules — the layout is unit-agnostic. **Boundary note**: *how* powders are physically blended (trituration order, geometric dilution) is a different canonical topic (pct-19) — alligation computes *how much*; blending technique lives elsewhere.\\n5. **Alcoholic preparations**: v/v parts with the contraction convention flagged (17-3's note travels with it).\\n\\n**Choice discipline**: one unknown → the dilution identity; "what resulted" → medial; "what proportions" → alternate; three-plus components → sequential alternate; anything with *adding pure drug* → the solute-addition identity of 17-4, not alligation (alligation blends existing strengths; it cannot exceed the strongest input).\\n\\n**The professional close**: every alligation plan is verified by medial before compounding — plan (alternate) → check (medial) → prepare → label. The pair is a closed loop, and the loop is the safety.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Medial records what a blend became; alternate plans what proportions to use.\\n- Water is the 0% component — the commonest alternate case.\\n- Alligation blends existing strengths only: it can never exceed the strongest input.\\n- Pure-drug addition is 17-4's identity; powder blending technique is pct-19's canon.\\n- Loop: alternate → medial verification → prepare → label.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A requisition for "2% salicylic acid ointment, 250 g, from 10% and 1% lots": alternate — high 10% gets 2 − 1 = 1 part; low 1% gets 10 − 2 = 8 parts; total 9 → 27.8 g of 10% + 222.2 g of 1%; medial check: (27.8 × 10 + 222.2 × 1)/250 = 500.2/250 = **2.0** ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Match each scenario to its tool: record a pool; plan a blend; add pure drug.\\n2. From 15% and 3% lots, plan 200 g at 5% — parts and quantities?\\n3. Why can alligation never deliver a strength above the strongest input?\\n4. What closes the safety loop on every alligation plan?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Applications: lot blending, two-stock targets, water-as-0%, solids by weight (technique elsewhere), v/v with flagged conventions. One unknown → identity; proportions → alternate; record → medial; verify always.`,
      },
    ],
  },
];
