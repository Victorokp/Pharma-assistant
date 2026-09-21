import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-19: Pharmaceutical Compounding
 * Calculations.
 *
 * Batch 22: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14/15/16/17/18
 * top-level topic convention) plus its eight children pct-19-1…19-8
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-19 has no surviving Phase-1 tier record; the topic and
 * the conceptual/procedural children (19-1 Contemporary Compounding,
 * 19-6 Geometric Dilution, 19-8 Problem Solving) are Tier B, while the
 * calculation children — Ingredient Quantities (19-2), Dose and
 * Concentration Adjustment (19-3), Dilution and Concentration (19-4),
 * Displacement Calculations (19-5), Quantity-Sufficient Calculations
 * (19-7) — are Tier C, matching the calculation-lesson convention
 * (pct-5-7; pct-9/10/13/14/15/16/17/18 blocks). Convention-derived,
 * flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the compounding-bench arithmetic —
 * from prescribed product to ingredient amounts. Master-formula scaling
 * is pct-18's canon (cross-referenced); dilution *arithmetic of liquid
 * strengths* and alligation is pct-17's; injectable reconstitution with
 * vial displacement is pct-15-8's; suppository mould displacement is
 * pct-41-4's; powder-mixing geometric dilution has a sibling node at
 * pct-34-5 (canonical-home decision deliberately left pending with the
 * reviewer — this lesson teaches the technique in its compounding
 * context and cross-references the sibling). Tonicity (pct-13) and
 * stability (pct-43) are referenced as constraints, not re-taught.
 * All displacement values used in examples are explicitly stated
 * illustrative values, never presented as universal constants.
 */
export const pct201CompoundingLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-19',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'topic',
    title: 'Pharmaceutical Compounding Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Compounding is the preparation of a medicine for an individual patient, from ingredients, at the moment it is needed — as distinct from manufacturing, which makes standard products in bulk for many unnamed patients. Its calculations are the bench arithmetic that turns a prescription into a set of weighings and measures: how much of each ingredient, at what strength, in what final quantity.\\\\n\\\\n**Why compounding persists.** A prescriber may need a strength the market never made, a form a child can swallow, a version free of an allergen, or a quantity for exactly one course. In each case the pharmacist is the one who computes, prepares, and stands behind the product — which is why calculation accuracy here is a professional duty, not a school exercise.\\\\n\\\\n**The route map**: 19-1 sets the contemporary context and the pharmacist's responsibility; 19-2 converts the prescribed product (strength × quantity, or dose × duration) into ingredient amounts; 19-3 adjusts dose and concentration to the prescriber's intent; 19-4 handles bench dilution and concentration of the preparation itself; 19-5 accounts for the volume solids occupy (displacement); 19-6 teaches geometric dilution for incorporating potent small amounts uniformly; 19-7 covers quantity-sufficient (qs) finishing; 19-8 assembles the tools into full bench problems.\\\\n\\\\n**Scope lines**: scaling a written master formula is pct-18; changing liquid strengths and alligation blends is pct-17; reconstituting injections is pct-15-8; suppository moulds are pct-41-4. Tonicity and stability appear here only as constraints that bound what a compounder may prepare.\\\\n\\\\nA working rule that organises everything: **every step is a mass or volume balance, and every finished number is checked against a second, independent route** — the habit the whole topic rehearses.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Compounding prepares individualised medicines from ingredients; its arithmetic converts prescription → ingredient quantities.\\\\n- Reasons it persists: non-standard strengths, paediatric forms, allergen-free needs, exact course quantities.\\\\n- Displacement, geometric dilution, and qs finishing are the classic bench techniques.\\\\n- Every computed amount deserves a second, independent route of verification.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish compounding from manufacturing in one sentence each.\\\\n2. Name four patient needs that keep compounding in practice.\\\\n3. Which neighbouring topics own master-formula scaling, liquid-strength dilution, and injectable reconstitution?\\\\n4. State the organising working rule of the topic.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Compounding = prescription-to-bench arithmetic for one patient. Quantities from strength × quantity, adjustments to dose, dilution, displacement, geometric dilution, qs — all mass/volume balances, all double-checked.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-19', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-19-1',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Calculations in Contemporary Compounding',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Contemporary compounding is non-sterile preparation of medicines for individual patients within a pharmacy — and its character today is defined by the fact that it is the **exception**, not the routine. Most medicines arrive ready-made; compounding is reserved for needs the market does not serve.\\\\n\\\\n**Typical contemporary drivers**: a strength between two commercial ones (e.g. between 1% and 2.5% creams); a liquid where only tablets exist (swallowing difficulty, feeding tubes); removal of a problem excipient (dye, preservative, lactose) for an allergic or intolerant patient; veterinary prescriptions across species and sizes; a discontinued product still clinically needed; exact small quantities that would otherwise waste a full pack.\\\\n\\\\n**Why calculations sit at the centre**: a compounded product has no factory QA behind it — the compounder's own arithmetic, technique, and records ARE the quality system. Each quantity must be derived from the prescription by a traceable route, because the product cannot be judged by comparing it with a licensed reference. This raises the professional bar: the calculation is not supporting the preparation; in a real sense it **is** the preparation's specification.\\\\n\\\\n**Documentation discipline**: contemporary practice pairs every calculation with a written record — formula used (or master formula referenced, pct-18-1), factor or route for each quantity, lot/identity of ingredients, and the finished label. Beyond-use dating, packaging, and labelling rules interact with compounding (pct-28 canon) but are treated there; this topic owns the arithmetic.\\\\n\\\\n**The professional standard** to carry forward: no step "by eye", no quantity without a stated route, no finished label without the arithmetic that produced it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Contemporary compounding is the individualised exception in a ready-made world.\\\\n- Drivers: non-standard strengths, alternative forms, allergen exclusion, veterinary needs, discontinued products, exact quantities.\\\\n- With no factory QA, the compounder's arithmetic and records are the quality system.\\\\n- Every quantity needs a traceable calculation route; every label traces to it.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A prescriber writes for a dye-free version of a syrup a child has reacted to. The commercial product is unsuitable; the compounded one will be built from single ingredients — and the label will show exactly what went in, in what amount, computed by which route. That traceability is what makes the product defensible.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List four contemporary drivers for compounding.\\\\n2. Why does the absence of factory QA raise the bar on calculations?\\\\n3. What must a compounding calculation record contain to be traceable?\\\\n4. Which topic owns beyond-use dating and packaging context?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Compounding today = targeted, individualised, documented. No factory QA behind it — the arithmetic and the record are the quality system.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-2',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Ingredient Quantities',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The first bench conversion: the prescription states a **product** (strength × quantity, e.g. "1% w/w cream, 30 g"), and the worksheet needs **ingredient amounts** (grams of each component). Two routes cover nearly every case.\\\\n\\\\n**Route 1 — from strength.** Amount of active = strength × product quantity, in consistent units: for % w/w, decimal fraction × total mass; for mg/mL, mg per mL × total mL. The inactive ingredients come from the formula being used (pct-18-1): each at its formula proportion, the base/vehicle as the qs remainder.\\\\n\\\\n**Route 2 — from the dose regimen.** When the prescription is written as a dose (often per kilogram), the chain is: dose per administration × number of administrations = total drug; total drug ÷ concentration = total volume; the quantity is then rounded to a sensible dispensing size **with the rounding stated**, never hidden.\\\\n\\\\n**The professional difference from pct-18**: scaling multiplies an existing formula by a factor; this lesson *derives* quantities from the prescribed product specification, where the strength is a design target and the ingredient list is assembled to meet it. Both skills coexist: a compounded job may start at Route 1 and then scale the chosen formula to the prescribed size.\\\\n\\\\n**Check habit**: after Route 1, divide the active's amount back by the product quantity — you must recover the prescribed strength exactly; after Route 2, divide total drug by daily dose — you must recover an integer (or near-integer) number of days.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Route 1: active amount = strength × product quantity (units matched first).\\\\n- Inactive ingredients come from the formula; base/vehicle is the qs remainder.\\\\n- Route 2: dose × administrations = total drug; ÷ concentration = total volume; rounding stated, never hidden.\\\\n- This derives quantities from a specification; pct-18 scales an existing formula — both skills combine.`,
      },
      {
        kind: 'FORMULAS',
        body: `**From strength**\\\\n\\\\n$$\\\\nm_{\\\\text{active}} = C_{\\\\text{prescribed}} \\\\times Q_{\\\\text{product}}\\\\n$$\\\\n\\\\n**From regimen** (concentration $c$ in mg/mL)\\\\n\\\\n$$\\\\nm_{\\\\text{total}} = D_{\\\\text{per dose}} \\\\times N_{\\\\text{doses}}, \\\\qquad V_{\\\\text{total}} = \\\\frac{m_{\\\\text{total}}}{c}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — from strength (Route 1).** Prepare 30 g of 1% w/w hydrocortisone cream.\\\\n\\\\nm = 0.01 × 30 g = **0.3 g** hydrocortisone; cream base qs to 30 g (**29.7 g** of base + any formula excipients). Check: 0.3 g ÷ 30 g = 1% ✓.\\\\n\\\\n**Example 2 — from strength (liquid).** 120 mL of a 5 mg/mL suspension: m = 5 mg/mL × 120 mL = **600 mg** (0.6 g) of drug, vehicle qs to 120 mL.\\\\n\\\\n**Example 3 — from regimen (Route 2).** 15 kg child, 10 mg/kg/day in three divided doses (q8h) for 7 days; to be supplied at 25 mg/5 mL.\\\\n\\\\nDaily dose = 10 × 15 = 150 mg → per dose (q8h) = **50 mg**. Course total = 150 × 7 = **1050 mg**. Volume = 1050 ÷ 25 × 5 = **210 mL**. Day check: 1050 ÷ 150 = 7 days exactly ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the drug amount for 45 g of a 2.5% w/w ointment (1.125 g).\\\\n2. A prescription needs 8 mg/mL in 100 mL. What mass of drug is required? (0.8 g.)\\\\n3. For a 20 kg child at 6 mg/kg/day q6h for 5 days, find the per-dose amount and course total (30 mg per dose; 600 mg).\\\\n4. Why must any rounding of the dispensed quantity be stated on the worksheet?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Strength × quantity = active mass; dose × doses = course mass; ÷ concentration = volume. Base/vehicle qs. Every answer re-divides back to the prescription.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-3',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Dose and Concentration Adjustment',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Compounding exists precisely to **match the product to the dose** — the reverse of pct-10, where the dose is computed from available products. Here the prescribed dose is fixed and the preparation is engineered around it.\\\\n\\\\n**Designing concentration from the dose.** If a patient needs 4 mg per dose and the practical dose volume is 2 mL, the product concentration is 4 mg ÷ 2 mL = 2 mg/mL — the concentration is a *choice* that makes the measured volume convenient and safe (large enough to measure accurately, small enough to swallow or inject sensibly). Paediatric liquids commonly sit in the 5–50 mg per 5 mL band for exactly this reason; the value chosen is stated in the prescription or agreed with the prescriber, never assumed.\\\\n\\\\n**Adjusting an existing strength.** Turning a 10 mg/mL stock into a prescribed 2.5 mg/mL is dilution arithmetic (C₁V₁ = C₂V₂, pct-17 canon) — but the *decision* of target strength belongs here, and it must be explicit.\\\\n\\\\n**The "half-strength" trap.** Verbal instructions like "half-strength" are ambiguous: half the concentration? half the dose volume? Both? The compounding standard is to convert the verbal instruction into an explicit numeric specification (e.g. "from 10 mg/mL make 5 mg/mL, dose volume unchanged") and confirm it — ambiguity in a compounded instruction is a dispensing error in waiting.\\\\n\\\\n**Duration closes the loop.** A designed concentration only works if the quantity covers the regimen: doses required × dose volume must fit inside the dispensed volume with a small working margin — checked before preparation begins, not after.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Here the dose is fixed and the product is engineered around it (reverse of pct-10).\\\\n- Concentration is a design choice: dose ÷ chosen dose volume; stated, never assumed.\\\\n- Strength changes use C₁V₁ = C₂V₂ (pct-17); the target-strength decision lives here.\\\\n- "Half-strength" must be converted to an explicit numeric spec before compounding.\\\\n- Doses × dose volume must fit the dispensed quantity — checked before preparation.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Design concentration from dose**\\\\n\\\\n$$\\\\nc = \\\\frac{D_{\\\\text{per dose}}}{V_{\\\\text{dose}}}\\\\n$$\\\\n\\\\n**Dilution to target** (pct-17 identity)\\\\n\\\\n$$\\\\nC_1V_1 = C_2V_2\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — design.** 4 mg per dose, dose volume set at 2 mL: c = 4 ÷ 2 = **2 mg/mL**. Regimen q6h for 7 days: 4 doses/day × 7 = 28 doses → drug = 28 × 4 = **112 mg**, volume = 28 × 2 = **56 mL** — prepare 60 mL (stated margin), label 2 mg/mL with dose 2 mL.\\\\n\\\\n**Example 2 — adjust.** Prescriber wants 60 mL at 2.5 mg/mL; stock on hand is 10 mg/mL. V_stock = C₂V₂ ÷ C₁ = 2.5 × 60 ÷ 10 = **15 mL** of stock, qs to 60 mL. Check: 15 × 10 = 150 mg; 150 ÷ 60 = 2.5 mg/mL ✓.\\\\n\\\\n**Example 3 — the trap.** "Give half-strength of the 10 mg/mL suspension." Ambiguous. Explicit conversions: (a) 5 mg/mL, same 5 mL dose volume → half dose; (b) 10 mg/mL, 2.5 mL dose → half dose; (c) 5 mg/mL with doubled volume → same dose. Only the prescriber can choose — query, then record the agreed spec on the worksheet.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A patient needs 6 mg per dose at 3 mL volume. What concentration? (2 mg/mL.)\\\\n2. From a 20 mg/mL stock, how much is needed for 80 mL at 5 mg/mL? (20 mL stock, qs 80 mL.)\\\\n3. Give two different explicit meanings of "half-strength" and why the ambiguity matters.\\\\n4. Why must doses × dose volume be checked against the dispensed quantity before compounding starts?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dose fixed → design the product: c = dose ÷ dose volume; adjust stocks by C₁V₁ = C₂V₂; convert "half-strength" to numbers; verify the quantity covers the regimen first.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-4',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Dilution and Concentration',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `At the compounding bench, dilution and concentration reach beyond pct-17's liquids-and-strengths canon into **semisolids and solids** — but the physics is the single invariant: the amount of drug is fixed; the vehicle/base amount is what changes.\\\\n\\\\n**Diluting a semisolid (mass basis).** Ointments and creams dilute by weight: a 2% w/w ointment contains 0.2 g of drug per 10 g; diluting to 0.5% w/w needs total mass = 0.2 ÷ 0.005 = 40 g, so 30 g of base is levigated in. Work on **mass**, because semisolid strengths are w/w and volumes are ill-defined in gels and pastes. The technique uses a levigating agent and geometric proportions — for potent actives, geometric dilution (19-6) governs the blending.\\\\n\\\\n**Diluting solids.** Triturating a potent powder with lactose to a target % w/w is the same mass balance: drug mass fixed, total mass chosen to give the percentage. (Powder-technique context: pct-34; liquid stocks: pct-17; injections: pct-15-8.)\\\\n\\\\n**Concentrating.** The inverse operation: drive off vehicle (evaporation) and the fixed drug amount sits in a smaller total. From 200 mL of 5% w/v (10 g of drug) to 25% w/v: final volume = 10 ÷ 0.25 = 40 mL. Concentration has practical limits — heat sensitivity, saturation, and the fact that **concentrating cannot create uniformity** that mixing failed to deliver.\\\\n\\\\n**Every case, one check**: multiply the final strength by the final total — you must recover the fixed drug amount exactly.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- One invariant: drug mass fixed; vehicle/base amount changes.\\\\n- Semisolids dilute on mass (w/w); volumes are ill-defined in gels/pastes.\\\\n- Potent-actives blending follows geometric dilution (19-6).\\\\n- Concentrating removes vehicle: final total = drug ÷ target strength.\\\\n- Check: final strength × final total must reproduce the fixed drug amount.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Fixed-mass balance** (works for all four quadrants)\\\\n\\\\n$$\\\\nm = C_1 M_1 = C_2 M_2\\\\n$$\\\\n\\\\n(mass or volume basis for $M$; % w/w or w/v for $C$, expressed as a decimal fraction)`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — semisolid dilution.** 10 g of 2% w/w ointment to be diluted to 0.5% w/w.\\\\n\\\\nDrug = 0.02 × 10 = 0.2 g (fixed). Final total = 0.2 ÷ 0.005 = **40 g**; base added = 40 − 10 = **30 g**. Check: 0.2/40 = 0.5% ✓.\\\\n\\\\n**Example 2 — solid trituration.** 100 mg of a potent drug to be diluted to 1% w/w.\\\\n\\\\nTotal = 0.1 g ÷ 0.01 = **10 g**; lactose = 10 − 0.1 = **9.9 g**. (For uniform blending, build it by geometric dilution — 19-6.)\\\\n\\\\n**Example 3 — concentration.** 200 mL of 5% w/v solution evaporated to 25% w/v.\\\\n\\\\nDrug = 0.05 × 200 = 10 g (fixed). Final volume = 10 ÷ 0.25 = **40 mL** — i.e. 160 mL of water removed. Check: 0.25 × 40 = 10 g ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Dilute 20 g of 5% w/w cream to 1% w/w: base added? (80 g.)\\\\n2. To make 2% w/w from 250 mg of drug, what total mass is needed? (12.5 g.)\\\\n3. Concentrate 500 mL of 4% w/v to 20% w/v: final volume? (100 mL.)\\\\n4. Why must semisolid dilution be computed on mass rather than volume?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `m = C₁M₁ = C₂M₂ everywhere: ointments, powders, solutions. Dilute by adding vehicle, concentrate by removing it; verify by multiplying final strength × final total.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-5',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Displacement Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Dissolved or suspended solids occupy space: add 10 g of a drug to water and the final volume is *more* than the water you started with — the solid has **displaced** some volume. Compounding arithmetic must account for this whenever a target volume is involved, or the finished product misses its mark.\\\\n\\\\n**The displacement value** of a solid is the volume (mL) that one gram of it occupies in the finished preparation. It is determined for each substance (from its apparent density in the vehicle) and **stated in monographs or SOPs** — this lesson always uses a stated illustrative value, because displacement is a property of the specific solid–vehicle pair, not a universal constant.\\\\n\\\\n**The two working moves.** (1) *Predict*: final volume = vehicle volume + (mass × displacement value). (2) *Plan backwards*: to hit a target volume, vehicle volume = target − (mass × displacement value). The laboratory habit behind both: **dissolve first, qs after** — never trust a volume measured before the solids are in.\\\\n\\\\n**Where displacement appears elsewhere** (each owns its variant — recognised, not re-taught here): suppository moulds (pct-41-4, where the drug displaces base in the mould cavity) and injectable reconstitution (pct-15-8, the vial's final volume exceeds the diluent volume). The general arithmetic is this lesson's canon.\\\\n\\\\n**Small-scale warning**: at 100 mL scale a 7 mL displacement is 7% — significant. At 1 L it is 0.7% — often inside acceptable tolerance. Displacement errors scale *relatively* with batch size, which is why paediatric volumes demand the most care.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Solids occupy volume in the finished preparation; the target volume must account for it.\\\\n- Displacement value = mL occupied per gram; specific to the solid–vehicle pair and stated in monographs/SOPs.\\\\n- Predict: V_final = V_vehicle + m·d. Plan backwards: V_vehicle = V_target − m·d.\\\\n- Dissolve first, qs after — never trust pre-dissolution volumes.\\\\n- Displacement matters relatively more in small batches (7 mL in 100 mL is 7%).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Displacement value** $d$ (mL/g, stated)\\\\n\\\\n$$\\\\nV_{\\\\text{final}} = V_{\\\\text{vehicle}} + m \\\\times d\\\\n$$\\\\n\\\\n**Vehicle to measure for a target volume**\\\\n\\\\n$$\\\\nV_{\\\\text{vehicle}} = V_{\\\\text{target}} - m \\\\times d\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — predict.** A drug has displacement value 0.7 mL/g (stated). Dissolving 10 g in 90 mL of vehicle: V_final = 90 + 10 × 0.7 = **97 mL**.\\\\n\\\\n**Example 2 — plan backwards.** Prepare 100 mL of a 10% w/v solution of that same drug.\\\\n\\\\nMass = 0.10 g/mL × 100 mL = 10 g. Vehicle to measure = 100 − 10 × 0.7 = **93 mL**; dissolve the 10 g in it (final ≈ 100 mL), then qs to exactly 100 mL. Check: 93 + 7 = 100 ✓.\\\\n\\\\n**Example 3 — scale sensitivity.** The same 7 mL overshoot inside 1 L of product is 0.7% — usually within tolerance; inside 100 mL it is 7% — a genuine specification miss. Conclusion: displacement planning is mandatory at dispensing scale, advisable at bulk scale.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define displacement value and state why it cannot be assumed universal.\\\\n2. A solid (d = 0.5 mL/g) at 6 g in 95 mL: final volume? (98 mL.)\\\\n3. For 50 mL of 20% w/v with d = 0.8 mL/g, what vehicle volume is measured? (42 mL.)\\\\n4. Which two canonical nodes own the suppository-mould and injectable variants of displacement?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `d mL/g converts mass to occupied volume: V_final = V_vehicle + m·d; to plan, V_vehicle = V_target − m·d. Dissolve first, qs after; care scales up as batch size scales down.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-6',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Geometric Dilution',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Weighing 100 mg of a potent drug into a 10 g mixture gives a 1% product — but stirring 100 mg into 9.9 g of base in one step produces pockets of concentration, not a uniform blend. **Geometric dilution** is the technique that makes the blend uniform: the drug is triturated with successive, *approximately equal bulks* of diluent, so that at every step the added amount is comparable to what is already in the mortar and each pass halves the drug's local concentration.\\\\n\\\\n**The procedure**: (1) place the potent drug in the mortar with approximately an equal bulk of diluent; triturate until uniform; (2) add diluent approximately equal to the mixture now in the mortar; triturate; (3) repeat until the diluent is exhausted, adding the last portion(s) so the total mass lands exactly on the calculated figure (19-4). Each doubling halves the concentration gradient — uniformity is bought in steps, not in one heroic stir.\\\\n\\\\n**Why "approximately equal" matters**: adding all the diluent at once defeats the geometry (a 1:99 step cannot homogenise); many tiny steps waste time. Equal-bulk doubling is the efficient middle — each step is as uniform as the last because the proportions stay comparable.\\\\n\\\\n**Canonical note**: this node teaches the technique in its compounding-calculations context (incorporating a potent amount into a bulk). The powders topic has a sibling node (pct-34-5) covering the same technique in powder-mixing context; the canonical-home question between them is a recorded, pending decision with the reviewer — treat this lesson and that sibling as two views of one technique until resolved.\\\\n\\\\n**Relation to aliquots**: geometric dilution solves *uniformity*; the aliquot method (pct-6 canon) solves *weighability* below the balance floor. A potent-compounding job may need both.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- One-step incorporation of a potent drug leaves concentration pockets; geometric dilution buys uniformity in steps.\\\\n- Procedure: triturate with an approximately equal bulk, then repeatedly add diluent equal to the current mixture.\\\\n- Each doubling halves the local concentration; "approximately equal" is the efficient uniform scheme.\\\\n- Sibling node pct-34-5 covers the same technique in powder context; canonical-home decision pending.\\\\n- Geometric dilution solves uniformity; aliquots solve weighability — different problems.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Plan (from 19-4 Example 2):** dilute 100 mg of potent drug with 9.9 g (9900 mg) of lactose to a 1% w/w, 10 g blend.\\\\n\\\\n| Step | Add (mg) | Mixture total (mg) |\\\\n|---|---|---|\\\\n| start | drug 100 | 100 |\\\\n| 1 | 100 diluent | 200 |\\\\n| 2 | 200 diluent | 400 |\\\\n| 3 | 400 diluent | 800 |\\\\n| 4 | 800 diluent | 1600 |\\\\n| 5 | 1600 diluent | 3200 |\\\\n| 6 | 3200 diluent | 6400 |\\\\n| 7 | 3600 diluent (remainder) | 10 000 |\\\\n\\\\nDiluent accounting: 100 + 200 + 400 + 800 + 1600 + 3200 + 3600 = 9900 mg ✓; final total 10 000 mg = 10 g ✓. Every addition is smaller than the mixture already in the mortar — that is the uniformity guarantee, held right through the final step (3600 < 6400). Drug concentration after each step: 50%, 25%, 12.5%, 6.25%, 3.1%, 1.6%, 1% — halving each time until the target.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The same logic protects every potent-in-small-amount job on a real bench: hormones, cytotoxics handling (in appropriate facilities), paediatric anticonvulsant powders. The uniform blend is not cosmetic — a pocketed mixture can deliver a double dose in one spoon and a sub-therapeutic one in the next.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does one-step incorporation fail for potent drugs?\\\\n2. State the geometric-dilution rule for how much diluent to add at each step.\\\\n3. In the worked table, why is the final addition (3600 mg) still safe for uniformity?\\\\n4. Distinguish the problems solved by geometric dilution and by the aliquot method.\\\\n5. Which sibling node covers this technique in the powders context?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Equal-bulk doubling: drug + equal diluent, then diluent equal to the growing mixture, until exhausted — uniformity in halving steps. Last portion lands the exact total. Aliquots fix weighing; geometry fixes blending.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-7',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Quantity-Sufficient Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Quantity sufficient — qs** is the instruction to add enough of the final component (usually vehicle or base) to reach exactly the prescribed total. It looks like the laziest item on the worksheet and is in fact the finishing calculation that makes every other number correct.\\\\n\\\\n**The qs identity** (one for each basis):\\\\n\\\\n- Mass basis (semisolids, powders): qs mass = target mass − (sum of all weighed masses).\\\\n- Volume basis (liquids, after dissolution): qs volume = target volume − (sum of all measured volumes), where solids are counted through their displacement values (19-5), not ignored.\\\\n\\\\n**Why qs comes last**: every earlier component carries its own uncertainty (aliquot fractions, displacement estimates, evaporation during mixing). Measuring the vehicle first and expecting the later components to fit is backwards — the vehicle/base is the cheap, abundant, easily measured component, so it absorbs the difference by design.\\\\n\\\\n**Practical discipline**: (1) list every component with its measured amount as you go — the qs line is computed from the *actual recorded* amounts, not the planned ones; (2) convert between mass and volume with density when the bases differ (pct-8 canon); (3) state the qs line on the worksheet ("qs to 60 mL with purified water, added 39.2 mL") so the finished record explains the total.\\\\n\\\\n**The audit habit**: sum all recorded amounts including the qs line — the total must equal the prescribed quantity exactly. That single addition is the worksheet's closing check.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- qs = add enough of the final (cheap, measurable) component to reach the prescribed total.\\\\n- Mass basis: target − Σ weighed masses. Volume basis: target − Σ measured volumes (solids via displacement).\\\\n- qs is computed from recorded actuals, last in the sequence, by design.\\\\n- Density (pct-8) converts between mass and volume bases when needed.\\\\n- Closing audit: recorded amounts + qs must sum to the prescribed total exactly.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Volume basis** (liquids)\\\\n\\\\n$$\\\\nV_{\\\\text{qs}} = V_{\\\\text{target}} - \\\\sum V_{\\\\text{components}}\\\\n$$\\\\n\\\\n**Mass basis** (semisolids/powders)\\\\n\\\\n$$\\\\nm_{\\\\text{qs}} = m_{\\\\text{target}} - \\\\sum m_{\\\\text{components}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — volume.** Prepare 60 mL of mixture: syrup 15 mL, flavouring 5 mL, colouring 0.8 mL (recorded actuals), drug dissolved in a portion of vehicle.\\\\n\\\\nV_qs = 60 − (15 + 5 + 0.8) = **39.2 mL** vehicle. Audit: 15 + 5 + 0.8 + 39.2 = 60 ✓.\\\\n\\\\n**Example 2 — mass.** 30 g of cream: hydrocortisone 0.3 g, wool alcohol 1.5 g (recorded).\\\\n\\\\nm_qs = 30 − (0.3 + 1.5) = **28.2 g** base. Audit: 0.3 + 1.5 + 28.2 = 30 ✓.\\\\n\\\\n**Example 3 — displacement-aware qs.** 100 mL of 10% w/v, d = 0.7 mL/g (19-5): measure 93 mL vehicle, dissolve 10 g drug, then qs to exactly 100 mL — the qs line absorbs whatever the real displacement differs from the stated estimate.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the qs volume for 120 mL containing 40 mL syrup, 10 mL flavouring, 0.5 mL colouring. (69.5 mL.)\\\\n2. For a 50 g ointment with 0.25 g drug and 2 g wool fat recorded, what is the qs base mass? (47.75 g.)\\\\n3. Why must qs be computed from recorded actuals rather than planned amounts?\\\\n4. What is the worksheet's closing audit, and what total does it must produce?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `qs = target − everything actually in the vessel; solids count by displacement; vehicle goes in last because it is the component you can measure best. Close the worksheet by summing to the prescribed total.`,
      },
    ],
  },
  {
    nodeId: 'pct-19-8',
    courseId: 'pct-201',
    topicId: 'pct-19',
    nodeType: 'subtopic',
    title: 'Compounding Problem Solving',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Real bench problems chain the tools unpredictably — and the professional skill is less about formulas than about **sequencing and contradiction-spotting**. A disciplined order works on nearly every compounded job:\\\\n\\\\n1. **Read the prescription into specifications**: strength, form, quantity, regimen (dose, frequency, duration). Any two of quantity/regimen/strength that disagree are a *contradiction to resolve*, not numbers to average (the two-anchor habit from pct-18-5).\\\\n2. **Derive the ingredient list** (19-2): active amount(s) from strength × quantity, excipients from the formula, base/vehicle pending as qs.\\\\n3. **Engineer convenience** (19-3): check dose volume, adjust concentration if the prescription's intent needs it.\\\\n4. **Plan the technique** (19-4/19-6): dilution factors, geometric-dilution steps for potent actives, aliquots where weighing demands them.\\\\n5. **Account for displacement** (19-5) and **finish with qs from actuals** (19-7).\\\\n6. **Audit**: strengths re-divide to the prescription; totals sum to the prescribed quantity; the regimen fits inside the quantity.\\\\n\\\\n**Contradictions are findings, not obstacles.** A worked case below shows a prescription whose stated quantity *cannot* cover its stated regimen at its stated strength — the arithmetically correct response is to surface the conflict with explicit numbers and resolve it with the prescriber, never to fudge a volume silently.\\\\n\\\\n**Documentation closes the loop**: the finished worksheet (specifications → amounts → technique notes → qs → audit) is the product's quality record, as 19-1 established.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sequence: specifications → ingredients → convenience → technique → displacement/qs → audit.\\\\n- Inconsistent prescriptions surface as contradictions; resolve with the prescriber, never average silently.\\\\n- The audit triple: strengths re-divide, totals sum, regimen fits quantity.\\\\n- The worksheet is the product's quality record.\\\\n- Every 200L bench problem is a chain of tools from 19-2 through 19-7 — recognising which is a reading skill.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Problem.** "Prepare 150 mL of a 4 mg/mL oral suspension for a 12 kg child: 8 mg/kg/day in four divided doses (q6h) for 7 days."\\\\n\\\\n**Specifications.** 12 kg × 8 mg/kg/day = 96 mg/day → q6h: 4 doses → **24 mg per dose** → at 4 mg/mL: **6 mL per dose**. Regimen: 4 × 7 = 28 doses → drug = 96 × 7 = **672 mg**.\\\\n\\\\n**Contradiction.** Volume required at 4 mg/mL = 672 ÷ 4 = **168 mL**, but the prescription says 150 mL. The three specifications (strength 4 mg/mL, quantity 150 mL, regimen as written) cannot all hold — the two-anchor check fails (150/168 ≠ 1).\\\\n\\\\n**Resolutions (prescriber's choice, each explicit):** (a) keep 4 mg/mL and increase quantity to at least 168 mL; (b) keep 150 mL and raise concentration to 672 ÷ 150 = 4.48 mg/mL — dose volume becomes 24 ÷ 4.48 ≈ 5.36 mL, measurable but awkward; (c) re-derive the regimen if the prescriber intended different dosing. What is *not* acceptable: quietly dispensing 150 mL at 4 mg/mL and letting the last day run short.\\\\n\\\\n**Second illustration — a clean job.** "25 g of 0.5% w/w ointment, dye-free": active = 0.005 × 25 = **0.125 g**; base built from single ingredients per formula (dye omitted by design), qs = 25 − 0.125 − (recorded excipients). Audit: 0.125/25 = 0.5% ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the six-step problem-solving sequence.\\\\n2. In the contradiction case, show the arithmetic that proves 150 mL at 4 mg/mL cannot cover the regimen.\\\\n3. Give the three explicit resolutions and the one unacceptable "fix".\\\\n4. What does the closing audit of a compounding worksheet verify?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Read → derive → engineer → plan technique → displacement/qs → audit. Contradictions between strength, quantity, and regimen are findings: surface them with numbers and let the prescriber choose — never average, never run short silently.`,
      },
    ],
  },
];
