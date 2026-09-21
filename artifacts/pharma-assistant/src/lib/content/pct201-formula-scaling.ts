import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-18: Reducing and Enlarging Formulas.
 *
 * Batch 21: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14/15/16/17
 * top-level topic convention) plus its seven children pct-18-1…18-7
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-18 has no surviving Phase-1 tier record; the topic and
 * the conceptual/application children (18-1 Master Formulas, 18-5
 * Ratio-Based Formula Adjustment, 18-7 Practical Compounding
 * Applications) are Tier B, while the calculation children — Scaling
 * Formulas (18-2), Reducing Quantities (18-3), Enlarging Quantities
 * (18-4), Batch-Size Calculations (18-6) — are Tier C, matching the
 * calculation-lesson convention (pct-5-7; pct-9/10/13/14/15/16/17
 * blocks). Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the single-factor scaling of a
 * master formula's ingredient quantities (the R = desired/reference
 * machinery) and batch sizing by unit count. Changing *strength* by
 * dilution/blending is pct-17's canon and is cross-referenced, not
 * re-taught; compounding-bench ingredient arithmetic (from prescription
 * strengths) is pct-19's canon. Overage allowances are flagged as
 * SOP-dependent conventions — no invented institutional numbers.
 */
export const pct201FormulaScalingLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-18',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'topic',
    title: 'Reducing and Enlarging Formulas',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A formula is a set of **proportions**. A master formula might be written for a convenient trial batch — 100 mL, 250 g, 10 capsules — but the prescription in front of you asks for 60 mL, the ward wants 5 L, production wants 10 000 tablets. The ingredient quantities must change together, in exact proportion, or the preparation is no longer the one the formula describes.\\\\n\\\\n**One idea does all the work.** Choose any one quantity whose desired value you know; the ratio\\\\n\\\\n$$\\\\nR = \\\\frac{\\\\text{desired quantity}}{\\\\text{formula quantity}}\\\\n$$\\\\n\\\\nis the **scaling factor**, and multiplying *every* ingredient quantity by R reproduces the formula at the new size. Proportions inside the product are invariant under scaling — that is the whole content of this topic. R < 1 reduces, R > 1 enlarges, and R is a pure number only when the two quantities carry the same units.\\\\n\\\\n**The route map**: 18-1 defines the master formula (the thing being scaled); 18-2 carries out scaling generally; 18-3 and 18-4 specialise to reducing and enlarging; 18-5 reframes the factor as explicit ratio reasoning (including the consistency check that catches most scaling errors); 18-6 sizes batches from unit counts; 18-7 collects the practical constraints that decide a sensible target size.\\\\n\\\\nScope lines: changing **strength** (dilution, blending, alligation) is pct-17's canon and is not repeated here — scaling changes *how much* product, never *how strong* it is; prescription-to-quantity arithmetic on the compounding bench belongs to pct-19.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A formula is a set of proportions; scaling must preserve those proportions exactly.\\\\n- One factor R = desired quantity / formula quantity, applied to every ingredient.\\\\n- R < 1 reduces; R > 1 enlarges; R is dimensionless only when units match first.\\\\n- Scaling changes batch size, never the strength of the product.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why must one single factor be used for all ingredients rather than a different factor for each?\\\\n2. What preliminary step guarantees that R is a valid dimensionless number?\\\\n3. A formula is scaled correctly. What two things are unchanged afterwards, and what one thing has changed?\\\\n4. Which neighbouring topic owns changing strength, and why is that not part of scaling?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Scaling = one factor R, applied to every quantity. Proportions are invariant; size changes, strength does not. Get the units equal first, then divide once and multiply everywhere.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-18', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-18-1',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Master Formulas',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **master formula** is the authoritative written formula for a preparation: the complete list of ingredients with their quantities and units, the size of batch those quantities produce, and the method of preparation. It is the "recipe of record" from which every working copy is scaled.\\\\n\\\\n**What a master formula must state** to be usable: (1) each ingredient by its full name; (2) the quantity of each, with units; (3) the total batch size the quantities yield (100 mL, 250 g, 10 capsules); (4) the order and conditions of mixing; (5) the container it is dispensed in. Without the batch size, the quantities are meaningless proportions without an anchor.\\\\n\\\\n**Master formula vs working/batch record**: the master formula is the stable source document; a working formula (batch record) is a scaled copy for one production run, showing the quantities actually weighed for that batch. Every batch record should be traceable to a master formula through the scaling factor used.\\\\n\\\\n**Why compounding depends on it**: individualisation (paediatric doses, dermatology strengths) starts by taking a master formula and adjusting size or strength deliberately — pct-18 does the size part, pct-17/pct-19 the strength and bench parts. A preparation made "roughly by eye" from memory cannot be reproduced, checked, or improved; the master formula is what makes the arithmetic of the next lessons possible.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A master formula states ingredients, quantities with units, the batch size, the method, and the container.\\\\n- Quantities without a stated batch size are unanchored proportions.\\\\n- The master formula is the source of record; the batch record is a scaled working copy for one run.\\\\n- Reproducibility, checking, and improvement all depend on the master formula existing in writing.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `When a prescriber asks for "the paediatric strength of the ward mixture", the defensible answer comes from the master formula: scale it down, record the factor used, and the next pharmacist can audit exactly what you did — rather than reconstructing it from memory.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five pieces of information a master formula must carry.\\\\n2. Why are ingredient quantities meaningless without the batch size?\\\\n3. Distinguish a master formula from a batch record.\\\\n4. Which two later skills start from a master formula?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Master formula = full ingredient list + quantities + units + batch size + method + container. It anchors every scaled copy; batch records are its traceable working children.`,
      },
    ],
  },
  {
    nodeId: 'pct-18-2',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Scaling Formulas',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Scaling a formula is a three-step discipline: **choose an anchor**, **compute one factor**, **apply it everywhere**.\\\\n\\\\n**1. Choose the anchor.** You need one ingredient (or the batch total) whose desired and formula quantities are both known. Usually this is the batch total: "the formula makes 200 mL, I need 1.5 L".\\\\n\\\\n**2. Make the units equal, then divide once.** R = desired quantity ÷ formula quantity is valid only after both values are in the same unit — mL against mL, g against g. Skipping this is the single most common scaling error.\\\\n\\\\n**3. Multiply every quantity by R** — active ingredients, preservatives, colourings, flavourings, and the vehicle/base amount. The proportion between any two ingredients in the finished product is unchanged: if the master formula had 2% of a preservative, the scaled batch still has 2%. Scaling changes size, never composition.\\\\n\\\\n**Check habit**: pick one other ingredient and divide its new quantity by R — you must recover its old value exactly. That one inverse multiplication catches most arithmetic slips before they reach the bench.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- R = desired quantity ÷ formula quantity, computed after units are equalised.\\\\n- R is dimensionless; every ingredient quantity is multiplied by the same R.\\\\n- Percent composition and ingredient-to-ingredient proportions are invariant under scaling.\\\\n- Verify by dividing one scaled quantity by R to recover the original.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Scaling factor**\\\\n\\\\n$$\\\\nR = \\\\frac{Q_{\\\\text{desired}}}{Q_{\\\\text{formula}}}\\\\n$$\\\\n\\\\n**Scaled quantity of each ingredient**\\\\n\\\\n$$\\\\nQ_i^{\\\\text{new}} = R \\\\times Q_i^{\\\\text{old}}\\\\n$$\\\\n\\\\n**Consistency check** (recover the original from any scaled ingredient)\\\\n\\\\n$$\\\\nQ_i^{\\\\text{old}} = \\\\frac{Q_i^{\\\\text{new}}}{R}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — enlarge a mixture.** A master formula for 200 mL of a mixture contains: drug A 4 g, preservative 0.5 g, colouring 1.2 g, vehicle qs 200 mL. Prepare 1.5 L.\\\\n\\\\nEqualise units: 1.5 L = 1500 mL. Factor: R = 1500/200 = **7.5**.\\\\n\\\\n- Drug A: 4 × 7.5 = **30 g**\\\\n- Preservative: 0.5 × 7.5 = **3.75 g**\\\\n- Colouring: 1.2 × 7.5 = **9 g**\\\\n- Vehicle: qs to 1500 mL\\\\n\\\\nCheck: 9 ÷ 7.5 = 1.2 ✓ (colouring recovers its original); proportion test: 30/1500 = 4/200 = 2% w/v drug ✓.\\\\n\\\\n**Example 2 — enlarge capsules.** Master formula: 10 capsules contain drug B 2.5 g total. Prepare 60 capsules.\\\\n\\\\nR = 60/10 = **6**; drug B = 2.5 × 6 = **15 g**. Per-capsule check: 15 g/60 = 250 mg per capsule = 2.5 g/10 ✓ — the strength per unit is invariant, as it must be.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A formula for 250 g contains 5 g of drug X. Compute the quantities for a 1.2 kg batch (answer: R = 4.8; 24 g of X).\\\\n2. Why must units be equalised before computing R? Give a concrete error it prevents.\\\\n3. After scaling, is the percentage of preservative changed? Justify using proportion invariance.\\\\n4. Describe the one-step inverse check and what it protects against.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Equalise units → R = desired/formula → multiply every quantity by R → verify one inverse. Size scales; composition and per-unit strength do not.`,
      },
    ],
  },
  {
    nodeId: 'pct-18-3',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Reducing Quantities',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Reducing a formula is scaling with **R < 1** — the everyday case at the dispensing bench, where a master formula written for a teaching-laboratory or ward batch must be cut down to one patient's supply. The mechanics are identical to 18-2; the new content is the **practical floor**: as quantities shrink, they eventually fall below what the balance and the measuring devices can handle accurately.\\\\n\\\\n**The floor problem.** Balances have a minimum accurate weighing (pct-6-5 canon): below roughly 100 mg on a standard dispensatory balance, weighing error grows to an unacceptable fraction of the amount. When a reduced quantity lands below the floor, the standard remedies are the **aliquot method** (weigh a convenient multiple, dilute measurably, use a measured fraction) or **geometric dilution** for incorporating potent small amounts into a bulk (pct-19-6). This lesson flags the floor and names the remedies; their full treatment belongs to those canonical nodes.\\\\n\\\\n**Verification is not optional at small scale**: the relative impact of an arithmetic slip is *larger* on a reduced batch — a 0.1 g error matters ten times more inside 60 g than inside 600 g. The inverse check (divide any reduced quantity by R, recover the original) costs seconds and prevents the classic under-dose accident.\\\\n\\\\nA related trap: reduction applies to **every** ingredient, including preservatives and colourings — the most commonly forgotten lines are the visually "small" ones.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Reduction = scaling with R < 1; mechanics identical to general scaling.\\\\n- Balances have a minimum accurate weighing; below it, use aliquot or geometric-dilution remedies.\\\\n- Relative error grows as the batch shrinks — verification matters more, not less.\\\\n- Every ingredient reduces, including preservatives, colourings, and flavourings.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Reduction factor** (same identity, R < 1)\\\\n\\\\n$$\\\\nR = \\\\frac{Q_{\\\\text{desired}}}{Q_{\\\\text{formula}}} < 1, \\\\qquad Q_i^{\\\\text{new}} = R \\\\times Q_i^{\\\\text{old}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Reduce a mixture from 250 mL to 60 mL.** Master formula (250 mL): sodium chloride 9 g, citric acid 5 g, syrup 62.5 mL, flavouring 0.5 mL, water qs 250 mL.\\\\n\\\\nFactor: R = 60/250 = **0.24**.\\\\n\\\\n- Sodium chloride: 9 × 0.24 = **2.16 g**\\\\n- Citric acid: 5 × 0.24 = **1.2 g**\\\\n- Syrup: 62.5 × 0.24 = **15 mL**\\\\n- Flavouring: 0.5 × 0.24 = **0.12 mL** (120 µL — measurable on a 1 mL syringe)\\\\n- Water: qs to 60 mL\\\\n\\\\nInverse check on a different line: syrup 15 ÷ 0.24 = **62.5** ✓ (divide each new value by R to recover its original). Proportion test: 2.16/60 = 3.6% w/v = 9/250 ✓.\\\\n\\\\n**Floor illustration**: had the flavouring reduction landed at 0.012 mL (12 µL), measuring it directly would be unreliable. The aliquot route keeps accuracy inside the device's comfort zone: prepare **ten times** the required amount — 0.12 mL, comfortably measurable — dilute it in a small volume of vehicle, and use one-tenth of that dilution where the formula asks for the flavouring. The measured fraction transfers the precision of the large measurement to the small one.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Reduce a formula from 500 mL to 100 mL: what is R, and what happens to a 6 g ingredient? (R = 0.2; 1.2 g.)\\\\n2. Why does an arithmetic slip matter more in a reduced batch than an enlarged one?\\\\n3. Name the two standard remedies when a reduced quantity falls below the balance floor, and name the canonical nodes that own them.\\\\n4. Which ingredient class is most often forgotten in reduction?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `R < 1 shrinks every quantity in proportion; check by dividing a new value by R. Below the weighable floor, switch strategy — aliquot or geometric dilution — never "a pinch".`,
      },
    ],
  },
  {
    nodeId: 'pct-18-4',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Enlarging Quantities',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Enlarging a formula is scaling with **R > 1** — ward stocks, batch production, and any preparation needed in quantity. The arithmetic is again the single factor; the new considerations are **equipment capacity** and **process change**.\\\\n\\\\n**Equipment capacity.** A formula enlarged tenfold may no longer fit the balance range, the beaker, the mixer, or the mortar. A mortar-and-pestle trituration that worked for 50 g fails mechanically at 500 g not because the chemistry changed but because the geometry did — the practical answer is dividing the batch into equal sub-batches (each scaled identically), which keeps proportions intact.\\\\n\\\\n**Process change.** Some operations do not scale linearly: heat transfer during melting, cooling time of a poured mass, mixing time in a larger vessel. At 200L the rule to carry is: **scale the quantities, re-examine the process** — a master formula's method statements are written for its own batch size, and an enlarged run may legitimately need longer mixing or divided melting without any change to the ingredient proportions.\\\\n\\\\n**Anchoring the enlargement** uses exactly the same discipline as 18-2: one known target quantity (usually the total), units equalised, one factor, every ingredient multiplied, one inverse check. The worked example below keeps everything on the balance scale (weights), where capacity questions are easiest to see.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Enlargement = scaling with R > 1; same single-factor discipline.\\\\n- Equipment capacity limits practical batch size; dividing into equal sub-batches preserves proportions.\\\\n- Quantities scale linearly; process steps (heating, mixing, cooling) may need re-examination.\\\\n- The master formula's method text belongs to its own batch size — scale the numbers, re-check the method.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Enlargement factor** (same identity, R > 1)\\\\n\\\\n$$\\\\nR = \\\\frac{Q_{\\\\text{desired}}}{Q_{\\\\text{formula}}} > 1, \\\\qquad Q_i^{\\\\text{new}} = R \\\\times Q_i^{\\\\text{old}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Enlarge an ointment from 50 g to 500 g.** Master formula (50 g): salicylic acid 0.5 g, wool fat 5 g, white soft paraffin 44.5 g.\\\\n\\\\nFactor: R = 500/50 = **10**.\\\\n\\\\n- Salicylic acid: 0.5 × 10 = **5 g**\\\\n- Wool fat: 5 × 10 = **50 g**\\\\n- White soft paraffin: 44.5 × 10 = **445 g**\\\\n\\\\nMass check: 5 + 50 + 445 = **500 g** exactly ✓ — the scaled quantities must sum to the target batch size when the original ones summed to the original total. Proportion test: 5/500 = 0.5/50 = 1% w/w salicylic acid ✓.\\\\n\\\\n**Capacity decision**: 445 g of paraffin needs a water-bath capable of melting it in one vessel; if the largest beaker holds 250 g of molten base comfortably, run two equal sub-batches (R = 5 each, twice) — the proportions inside each sub-batch are identical to the master formula.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Enlarge a 100 g formula to 1.5 kg: what is R and what happens to a 2 g ingredient? (R = 15; 30 g.)\\\\n2. Why may the method text of a master formula need re-examination after enlargement even though the quantities scale exactly?\\\\n3. How does dividing a batch into equal sub-batches preserve the formula's proportions?\\\\n4. What must the scaled quantities sum to if the originals summed to the original total?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `R > 1 multiplies every quantity; the mass check sums to the target. Scale the numbers, re-examine the process, split the batch if equipment says so.`,
      },
    ],
  },
  {
    nodeId: 'pct-18-5',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Ratio-Based Formula Adjustment',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `18-2/3/4 computed the factor by division. This lesson reframes the same operation as explicit **ratio reasoning** — the way practising compounders actually talk about it — and adds the two habits that make scaling safe when numbers get awkward.\\\\n\\\\n**Factors as ratios.** "Make half a batch" is R = 1/2; "make it 3:4" is R = 3/4; "one and a half times the batch" is R = 3/2. Expressing the change as a ratio *before* dividing keeps the operation visible and units honest: the ratio compares like with like (volume to volume, mass to mass, units to units). A fractional R is often *safer* than its decimal form for the mental arithmetic that follows (3/4 of 62.5 mL is 62.5 × 3/4 = 46.875 mL — computed as 62.5 × 3 = 187.5, ÷ 4).\\\\n\\\\n**The two-anchor consistency check.** When *two* quantities are known on the target side (e.g. the prescription asks for 60 mL *and* specifies the drug amount), compute R from each anchor. The two must agree; if they do not, the prescription is internally inconsistent — no factor can satisfy it, and the correct action is to stop and clarify, not to average. This is the single most useful error-catcher in the whole topic: it converts silent errors into visible contradictions.\\\\n\\\\n**Proportion pairs.** The underlying skill is the classical proportion: if 250 mL contains 9 g of sodium chloride, what does 60 mL contain? Setting up the pair (9 g / 250 mL = x / 60 mL) and solving for x is the same arithmetic as R = 60/250 applied to 9 g — recognising the equivalence means you can enter a scaling problem from whichever end is numerically cleaner.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A scaling change can be stated as a ratio (1/2, 3/4, 3/2) instead of a decimal factor.\\\\n- Fractions often compute more safely by hand than decimals.\\\\n- Two known anchor quantities must yield the same R — disagreement means an inconsistent prescription, not an average to take.\\\\n- Proportion pairs (a/b = x/c) and the R factor are the same arithmetic from two directions.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A prescription for "60 mL of the ward mixture, containing 2.16 g of the salt" carries two anchors against a 250 mL / 9 g master formula: R₁ = 60/250 = 0.24 and R₂ = 2.16/9 = 0.24. They agree — proceed with confidence. If the prescription had asked for 2.0 g, R₂ = 0.222… ≠ 0.24: stop and query, because the strength would otherwise drift silently.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Express "make two-thirds of the batch" as R and apply it to a 45 g ingredient (R = 2/3; 30 g).\\\\n2. Compute 3/4 of 62.5 mL using fraction arithmetic.\\\\n3. Two anchors give R = 0.24 and R = 0.222. What is the correct professional action, and why is averaging wrong?\\\\n4. Show that the proportion-pair setup and the R factor give the same answer for 9 g in 250 mL → 60 mL.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Say the change as a ratio; prefer fractions for hand work; insist that every known anchor yields the same R — disagreement means query, not average. Proportion pairs and R are one arithmetic.`,
      },
    ],
  },
  {
    nodeId: 'pct-18-6',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Batch-Size Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Batch sizing answers a different question from 18-2: not "how do the quantities scale?" but "**how big should the batch be?**" — computed from the number of units to be produced.\\\\n\\\\n**Forward: units → amount.** Total drug = units × drug per unit (units equalised: capsules in mg → convert to g at the end). A formula for 500 capsules at 250 mg each requires 125 g of drug.\\\\n\\\\n**Reverse: amount → units.** Divide the available amount by the per-unit amount: 1 kg of drug at 250 mg per capsule supports 1 000 000 mg ÷ 250 mg = 4000 capsules. Reverse calculations are the procurement question ("how many patients does this bulk serve?") and the yield question ("how many finished units should this batch produce?").\\\\n\\\\n**Overage/wastage allowances.** Real production rarely recovers 100% of material — capsules stick in hoppers, tablets chip, some of a batch is used for in-process checks. Many SOPs therefore specify an **allowance** (a percentage overage) on top of the theoretical amount. The convention to carry at 200L: **the allowance is whatever the local procedure states — never invent one**. Compute the theoretical amount first, then apply the stated percentage as an explicit second step, labelled as such in the worksheet.\\\\n\\\\n**Yield discipline**: expected units = theoretical units × expected yield fraction; a batch planned without a yield expectation cannot be audited against its outcome.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Forward: total drug = units × drug per unit (equalise units before summing).\\\\n- Reverse: units supported = available amount ÷ per-unit amount.\\\\n- Overage allowances are SOP-stated conventions — compute theoretical first, apply the stated % second.\\\\n- Expected yield turns a plan into an auditable target.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Forward sizing**\\\\n\\\\n$$\\\\nM_{\\\\text{total}} = N \\\\times m_{\\\\text{per unit}}\\\\n$$\\\\n\\\\n**Reverse sizing**\\\\n\\\\n$$\\\\nN = \\\\frac{M_{\\\\text{available}}}{m_{\\\\text{per unit}}}\\\\n$$\\\\n\\\\n**With a stated overage** (only when the SOP specifies one)\\\\n\\\\n$$\\\\nM_{\\\\text{with overage}} = M_{\\\\text{total}} \\\\times \\\\left(1 + \\\\frac{p}{100}\\\\right)\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — forward.** Plan 500 capsules at 250 mg of drug each.\\\\n\\\\nM = 500 × 250 mg = 125 000 mg = **125 g** (theoretical).\\\\nIf the SOP specifies a 2% overage: M = 125 × 1.02 = **127.5 g** — recorded as "theoretical 125 g + 2% allowance = 127.5 g", never silently.\\\\n\\\\n**Example 2 — reverse.** A bulk container holds 1 kg of drug; capsules take 250 mg each.\\\\n\\\\nN = 1 000 000 mg ÷ 250 mg = **4000 capsules**.\\\\n\\\\n**Example 3 — yield.** The 500-capsule batch historically runs at 97% yield: expected output = 500 × 0.97 = **485 capsules**; a patient course of 3 × 21 capsules (63) is safely inside it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the theoretical drug requirement for 1200 tablets at 500 mg each (600 g).\\\\n2. How many 2 mg doses can be prepared from 5 g of drug? (2500.)\\\\n3. Why must an overage percentage come from the SOP rather than the compounder's judgement?\\\\n4. A batch of 800 units yields 784. What is the yield fraction, and why record it? (0.98.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Units × per-unit = amount; amount ÷ per-unit = units. Theoretical first, stated overage second, expected yield recorded — allowances are declared, never invented.`,
      },
    ],
  },
  {
    nodeId: 'pct-18-7',
    courseId: 'pct-201',
    topicId: 'pct-18',
    nodeType: 'subtopic',
    title: 'Practical Compounding Applications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Choosing a target batch size is a professional judgement that the arithmetic serves — not the reverse. Before computing R, the compounder decides *what size is sensible*, and that decision is governed by constraints the preceding lessons supply.\\\\n\\\\n**The constraint checklist.** (1) **Measuring floor**: every reduced quantity must stay above the balance's minimum accurate weighing and the devices' readable volumes — if not, plan the aliquot/geometric-dilution route before starting (pct-6-5, pct-19-6 canon). (2) **Equipment capacity**: enlarged batches must fit balance range, vessels, and mixer; else split into equal sub-batches (18-4). (3) **Shelf life**: a batch larger than the patient will use within its shelf life is waste and a stability risk — short-dated preparations argue for smaller batches (stability science is pct-43's canon; here it acts as a size constraint). (4) **Therapy duration and quantity rules**: the prescribed quantity and duration fix a floor on the batch (pct-7-6 canon). (5) **Cost and waste**: over-making expensive or single-patient items is poor practice even when stable.\\\\n\\\\n**The pre-scale worksheet habit.** Write, before any multiplication: target size and units; the anchor used; R; the list of ingredients to be scaled; which quantities will be qs (not scaled — computed last). Then scale, verify one inverse, and label the batch with its size and date. The worksheet is what turns a correct answer into an auditable one.\\\\n\\\\n**When the numbers argue back**: if the sensible batch size violates a constraint (e.g. the reduced flavouring is below the floor), the professional response is to change strategy — aliquot, sub-batching, or a different presentation — not to round the ingredient "approximately".`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Batch size is chosen first (constraints), computed second (R) — not the reverse.\\\\n- Five constraints: measuring floor, equipment capacity, shelf life, prescribed quantity/duration, cost and waste.\\\\n- Quantities that will be qs are listed in the worksheet but computed last.\\\\n- A constraint violation changes the strategy, never the accuracy ("approximately" is not a remedy).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Make 200 mL" for a mixture whose shelf life is 14 days, for a course needing 60 mL: the constraint argument says make 60 mL (the prescribed quantity), not 200 mL — a fresh, properly labelled 60 mL batch beats a stale surplus, and the reduction arithmetic (R = 0.24-style) makes the small batch as exact as the large one.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five batch-size constraints and name the canonical node behind each where given.\\\\n2. Why are qs items listed in the worksheet but not scaled?\\\\n3. A reduced flavouring lands below the measuring floor. What are the professional options?\\\\n4. Why does shelf life argue against "make plenty while you are at it"?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Decide the size from constraints; let R do the arithmetic. Worksheet first, scale, verify inverse, label — and when a constraint bites, change strategy, not accuracy.`,
      },
    ],
  },
];
