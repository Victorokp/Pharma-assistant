import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-21: Calculations Involving Plant
 * Extracts.
 *
 * Batch 24: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14/15/16/17/
 * 18/19/20 top-level topic convention) plus its seven children
 * pct-21-1…21-7 (plain unprefixed names). Node IDs and titles mirror
 * curriculum.ts exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-21 has no surviving Phase-1 tier record; the topic and
 * the contextual children (21-1 Plant-Extract Terminology, 21-7
 * Pharmaceutical Applications) are Tier B, while the calculation
 * children — Extract Concentration (21-2), Drug–Extract Ratios (21-3),
 * Calculating Quantities of Plant Material (21-4), Extract Dilution
 * (21-5), Standardisation-Related Calculations (21-6) — are Tier C,
 * matching the calculation-lesson convention (pct-5-7; pct-9…20
 * blocks). Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns extract arithmetic — concentrations,
 * drug:extract ratios, plant-material requirements, extract dilution,
 * and marker-standardisation calculations. The general concentration
 * expressions (%, ratio strength, ppm) are pct-9's canon (used, not
 * re-taught); dilution identity is pct-17's; extraction *technology*
 * (percolation, maceration plant) is taught in the pharmacognosy course
 * (PCG 201 canon) and is only referenced; botanical identity and
 * phytochemistry belong to pharmacognosy. The 4:1 = "4 parts plant →
 * 1 part extract" convention is defined explicitly in 21-3 before any
 * calculation uses it. Native-extract ratios vs marker-standardised
 * extracts are distinguished throughout; no pharmacopoeial monograph
 * numbers are quoted (marking the practice of verifying against the
 * applicable monograph instead).
 */
export const pct201PlantExtractsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-21',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'topic',
    title: 'Calculations Involving Plant Extracts',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Plant extracts are concentrated preparations in which **plant material** has been transformed into **extract** — and nearly every professional question about them is a proportion question: how much plant went into this extract, how much extract equals a stated amount of plant, what strength results from diluting a tincture, and how much active the label's claim implies. This topic builds that arithmetic on top of the concentration toolkit from pct-9/17.\\\\n\\\\n**Why the arithmetic is special.** For a pure drug, strength names the substance itself. For an extract, strength names a *relationship*: either the **native-extract ratio** (how much plant produced how much extract — a process property) or the **marker content** (how much of one named constituent the extract carries — a chemical property). The two are related but not interchangeable, and confusing them is the characteristic extract error. A 4:1 extract is not "four times as strong"; it is "four parts of plant were used per part of extract" — a statement about process, carrying no guarantee about any chemical's concentration.\\\\n\\\\n**The route map**: 21-1 fixes the vocabulary (extracts, tinctures, fluidextracts, native vs standardised); 21-2 handles extract concentrations as strength expressions; 21-3 defines and applies the drug–extract ratio; 21-4 runs the ratio in reverse — plant material required for a given extract; 21-5 dilutes extracts and tinctures to target strengths; 21-6 works the marker-standardisation calculations; 21-7 collects the pharmaceutical applications.\\\\n\\\\n**Standing discipline**: state which convention (ratio or marker) any number belongs to before computing with it, and label the basis of every strength — the habit that prevents the cross-convention errors this topic exists to prevent.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Extract strength is a relationship: native ratio (process) or marker content (chemistry).\\\\n- 4:1 means 4 parts plant per 1 part extract — process statement, not potency multiplier.\\\\n- Vocabulary: tinctures, fluidextracts, native vs standardised extracts.\\\\n- Concentration and dilution machinery comes from pct-9/17 — applied here to extract labels.\\\\n- Every number is labelled by convention before use; mixing conventions is the classic error.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is an extract's "strength" a relationship rather than a substance amount?\\\\n2. What does 4:1 actually assert, and what does it NOT assert?\\\\n3. Distinguish native-extract ratio from marker standardisation.\\\\n4. Which two earlier topics own the concentration and dilution machinery applied here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Extract arithmetic = proportions between plant and extract, labelled by convention: ratio says process, marker says chemistry. Keep pct-9/17 tools sharp; never let the two conventions blur.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-21', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-21-1',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Plant-Extract Terminology',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Extract arithmetic fails without precise vocabulary, because each term names a different concentration basis.\\\\n\\\\n**Core terms.** An **extract** is a concentrated preparation of a plant's soluble constituents, obtained by extracting plant material with a suitable solvent and removing part or all of it. A **fluidextract** is a liquid extract prepared so that each millilitre represents approximately one gram of drug — the strongest common liquid convention. A **tincture** is a weaker alcoholic preparation, conventionally expressed as a ratio such as 1:10 or 1:5 (parts of drug to parts of tincture by the applicable convention). **Native (quantified) extracts** are described by their drug–extract ratio alone; **standardised extracts** are additionally adjusted to a stated content of a named **marker** constituent.\\\\n\\\\n**Marker vs active.** A **marker** is a named constituent used to quantify the extract — chosen because it is measurable and characteristic; it may or may not be the therapeutically active constituent. Statements like "standardised to 2% hypericin" pin one chemical number onto the extract; the native ratio alone does not.\\\\n\\\\n**Why vocabulary matters arithmetically.** "1:10" in tincture language, "4:1" in native-extract language, and "5% w/w standardised extract" are three different conventions that look superficially alike. Each calculation in this topic first asks: *which convention is this label using?* — because the same digits mean different quantities in each.\\\\n\\\\n**Where the terms come from**: extraction technology (maceration, percolation, solvent choice) belongs to the pharmacognosy course (PCG 201 canon); here the processes are taken as given and only their *proportional consequences* are computed.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Extract = plant's soluble constituents, concentrated; solvent and process assumed from pharmacognosy.\\\\n- Fluidextract: strongest liquid convention (1 mL ≈ 1 g of drug); tinctures: weaker ratios (1:5, 1:10).\\\\n- Native extracts carry a ratio; standardised extracts add a named marker content.\\\\n- A marker is measurable and characteristic — not necessarily the active constituent.\\\\n- Identical digits (1:10 vs 4:1 vs 5%) mean different things in different conventions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define extract, fluidextract, and tincture in one line each.\\\\n2. What distinguishes a standardised extract from a native extract?\\\\n3. Why is a marker not necessarily the active constituent?\\\\n4. Give an example of identical digits carrying different meanings across conventions.\\\\n5. Which course owns extraction technology, and what does this topic compute instead?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Terms fix the basis: fluidextract ≈ 1 mL per g, tinctures by ratio, native by process ratio, standardised by marker. Name the convention before computing; leave the technology to pharmacognosy.`,
      },
    ],
  },
  {
    nodeId: 'pct-21-2',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Extract Concentration',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Extract labels state strength in the pct-9 expressions — % w/w, % w/v, ratio strength, mg per mL — applied to extract preparations. The calculation skill is *reading the basis* and converting between expressions without losing the "extract" qualifier.\\\\n\\\\n**Standard conversions** (pct-9 canon, now applied): a 10% w/w extract paste carries 10 g of extract per 100 g of paste; a 5% w/v tincture-of-extract solution carries 5 g per 100 mL. Ratio strength interconverts with percentage by the identity from pct-9-5: "1 in 20" = 5% w/v.\\\\n\\\\n**The extract-specific step**: when the concentration is stated per extract (mg of extract per mL), converting to **plant-material equivalent** requires the drug–extract ratio (21-3) — a second factor. This lesson stops at concentrations *of extract*; the plant-equivalent bridge is 21-3/21-4's canon.\\\\n\\\\n**Working discipline**: (1) name the basis (w/w or w/v, per extract or per plant equivalent); (2) convert only between expressions of the *same* basis; (3) carry units through — "10% w/w of extract" and "10% w/w of plant equivalent" differ by exactly the ratio factor, and mixing them produces order-of-magnitude errors.\\\\n\\\\n**Check habit**: after any conversion, re-state the result in words ("50 mg of extract per mL of finished liquid") and test it against the label's original statement for plausibility before using it downstream.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Extract strengths use pct-9 expressions: % w/w, % w/v, ratio strength, mg/mL.\\\\n- "1 in 20" = 5% w/v (pct-9-5 identity) — same arithmetic, extract labels.\\\\n- Converting concentration-of-extract to plant-equivalent needs the ratio factor (21-3/21-4 canon).\\\\n- Convert only between expressions of the same basis; carry the extract qualifier through.\\\\n- Re-state conversions in words and check against the label before downstream use.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Ratio ↔ percentage** (pct-9-5 identity)\\\\n\\\\n$$\\\\nx\\\\% \\\\;\\\\leftrightarrow\\\\; 1 \\\\text{ in } \\\\frac{100}{x}, \\\\qquad 1 \\\\text{ in } n \\\\;\\\\leftrightarrow\\\\; \\\\frac{100}{n}\\\\%\\\\n$$\\\\n\\\\n**Mass of extract in a preparation** (w/v basis)\\\\n\\\\n$$\\\\nm_{\\\\text{extract}} = \\\\frac{p}{100} \\\\times V\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — percentage to mass.** 150 mL of a preparation containing 5% w/v of a dry extract: m = 5/100 × 150 = **7.5 g** of extract.\\\\n\\\\n**Example 2 — ratio strength to percentage.** A preparation described as "1 in 25" (w/v, extract): 100/25 = **4% w/v**. Cross-check: 4 g per 100 mL ✓.\\\\n\\\\n**Example 3 — basis discipline.** A syrup contains 10% w/w of a 4:1 extract (so 4% w/w of plant equivalent). Per 200 g of syrup: extract = 0.10 × 200 = **20 g**; plant equivalent = 20 × 4 = 80 g. The two numbers differ by exactly the ratio factor — the explicit, labelled difference between the bases.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the extract mass in 80 mL of a 12% w/v solution (9.6 g).\\\\n2. Convert "1 in 50" to percentage (2% w/v).\\\\n3. A cream contains 5% w/w of a 10:1 extract: how much plant equivalent is in 50 g? (25 g — 2.5 g extract × 10.)\\\\n4. Why must conversions never cross the extract/plant-equivalent basis without the ratio factor?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same pct-9 conversions, extract labels: % ↔ ratio (1 in n = 100/n %), p% w/v × V = extract mass. Name the basis; never cross extract ↔ plant-equivalent without the ratio.`,
      },
    ],
  },
  {
    nodeId: 'pct-21-3',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Drug–Extract Ratios',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **drug–extract ratio** (DER) states how many parts of plant material (drug) produced one part of extract. The convention this topic uses throughout — defined once, here — is:\\\\n\\\\n$$\\\\n\\\\text{DER} = \\\\text{drug}:\\\\text{extract} = \\\\text{parts plant material} : \\\\text{parts extract}\\\\n$$\\\\n\\\\nso a **4:1** extract means **4 parts of plant yielded 1 part of extract** (4 g of plant → 1 g of native extract); a **1:10** tincture means 1 part of drug is represented in 10 parts of tincture. Note the direction convention differs between native extracts (plant first) and traditional tincture labelling (drug first in "1 in 10" language) — the arithmetic below always restates the convention explicitly before computing, which is the discipline that prevents the classic reversal error.\\\\n\\\\n**What the ratio is and is not.** It records a **process yield**, not a potency: a 4:1 extract is "four units of plant concentrated into one", carrying no direct claim about any chemical. Two 4:1 extracts from different batches of the same plant can carry different marker contents.\\\\n\\\\n**The two working moves.** (1) *Extract from plant*: extract = plant ÷ first number (plant × second/first). (2) *Plant from extract*: plant = extract × first number. Both are the same proportion read in opposite directions, and both are checked by restating: "50 g of a 4:1 extract represents 200 g of plant" — if the words say something absurd, the arithmetic is wrong.\\\\n\\\\n**Plant-equivalent labelling** (increasingly common) uses this arithmetic to state "each 500 mg tablet = 2 g of dried plant" — the consumer-facing consequence of the DER.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- DER = plant parts : extract parts (4:1 = 4 g plant → 1 g extract, as defined here).\\\\n- Native-extract labelling and tincture "1 in n" language point in different directions — restate the convention before computing.\\\\n- The ratio is process yield, not potency; marker content is a separate chemical claim.\\\\n- Extract from plant = plant × (extract parts/plant parts); plant from extract = extract × plant parts.\\\\n- Check by restating in words; plant-equivalent labels are DER arithmetic in consumer form.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Extract from plant** (DER $a{:}b$)\\\\n\\\\n$$\\\\nm_{\\\\text{extract}} = m_{\\\\text{plant}} \\\\times \\\\frac{b}{a}\\\\n$$\\\\n\\\\n**Plant from extract**\\\\n\\\\n$$\\\\nm_{\\\\text{plant}} = m_{\\\\text{extract}} \\\\times \\\\frac{a}{b}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — extract from plant.** 500 g of plant yields, at 5:1, m = 500 × (1/5) = **100 g** of native extract. Restate: "five parts plant per part extract — 500 g in, 100 g out" ✓.\\\\n\\\\n**Example 2 — plant from extract.** A capsule holds 250 mg of a 4:1 extract: plant equivalent = 250 mg × 4 = **1 g (1000 mg) of plant** per capsule. This is exactly the plant-equivalent labelling computation.\\\\n\\\\n**Example 3 — direction trap.** A tincture labelled "1:10" (1 part drug represented in 10 parts tincture): 5 mL of tincture represents 5 × (1/10) g of drug = **0.5 g**. Reversing the convention would give 50 g — visibly absurd, which is why the word-level restatement is part of the method, not an ornament.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 300 g of plant at 6:1 yields how much extract? (50 g.)\\\\n2. A 10:1 extract at 120 mg per tablet represents how much plant? (1.2 g.)\\\\n3. How much plant does 2 mL of a "1:5" tincture represent (using 1 g per mL)? (0.4 g.)\\\\n4. Why is a 4:1 extract not "four times as strong" as the plant?\\\\n5. What word-level habit prevents the ratio-direction error?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `DER a:b: plant × b/a = extract; extract × a/b = plant. Ratio = yield, not potency. Restate the convention in words before every move — reversal errors must look absurd on the page.`,
      },
    ],
  },
  {
    nodeId: 'pct-21-4',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Calculating Quantities of Plant Material',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Running the DER in reverse from a **production target**: how much plant material must be processed to obtain a stated amount of extract — the procurement and batch-planning calculation.\\\\n\\\\n**Base case**: plant = extract × plant parts. For 2 kg of a 5:1 extract: 2 × 5 = **10 kg** of plant. The same arithmetic scales to course-sized questions (one tablet's plant equivalent) and to batch scale (a 40 000-tablet run).\\\\n\\\\n**Through concentration first.** When the target is stated as a concentration of extract in a finished preparation (21-2's canon), the chain is: finished preparation → extract mass (via % or ratio strength) → plant mass (via DER). Two factors, applied in order, each labelled with its basis.\\\\n\\\\n**Loss allowances** (flagged as conventions): real extraction loses material — incomplete recovery, solvent retention, processing waste. Batch plans may carry a stated process-yield factor from the manufacturer's own data; as with overage in pct-18-6, **the allowance is whatever the documented process states — never invented**. The theoretical calculation comes first, the stated allowance second, labelled as such.\\\\n\\\\n**Moisture basis** (flagged): plant material may be quoted on a dried basis; "as-is" wet plant with a stated moisture content differs by the moisture factor. At 200L, the rule is to note which basis a weight uses and convert only with a stated factor — dry-basis arithmetic with wet-basis numbers silently inflates the plant requirement.\\\\n\\\\n**Check habit**: the answer must round in the *expected direction* — the plant mass is always larger than the extract mass for a concentrated extract (a:b with a > 1). An answer where plant < extract signals a reversed ratio.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Plant required = extract target × plant parts (DER a:b).\\\\n- Concentration targets chain: preparation → extract mass → plant mass (two labelled factors).\\\\n- Process-yield and moisture allowances are documented conventions — theoretical first, stated allowance second.\\\\n- Note the dry/wet basis of every plant weight; convert only with stated factors.\\\\n- Direction check: for a > 1, plant mass must exceed extract mass — plant < extract means a reversed ratio.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Plant required** (DER $a{:}b$)\\\\n\\\\n$$\\\\nm_{\\\\text{plant}} = m_{\\\\text{extract, target}} \\\\times \\\\frac{a}{b}\\\\n$$\\\\n\\\\n**Chained** (finished preparation, % w/v of extract)\\\\n\\\\n$$\\\\nm_{\\\\text{extract}} = \\\\frac{p}{100}V, \\\\qquad m_{\\\\text{plant}} = m_{\\\\text{extract}} \\\\times \\\\frac{a}{b}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — direct.** Batch of 2 kg of a 5:1 extract: plant = 2 kg × 5 = **10 kg** (theoretical). If the documented process yield is 95%, requirement = 10 ÷ 0.95 = **10.53 kg** — recorded as "theoretical 10 kg + stated yield factor".\\\\n\\\\n**Example 2 — chained.** Prepare 5 L of a preparation containing 8% w/v of a 4:1 extract.\\\\n\\\\nExtract: 8/100 × 5000 mL = **400 g**. Plant: 400 × 4 = **1600 g = 1.6 kg**. Restate: "5 L at 8% holds 400 g of extract; each gram stands for 4 g of plant" ✓.\\\\n\\\\n**Example 3 — tablet run.** A run of 20 000 tablets, each containing 150 mg of a 10:1 extract: extract = 20 000 × 150 mg = 3 kg; plant equivalent = 3 × 10 = **30 kg** (theoretical). Each tablet's label line: "150 mg extract ≡ 1.5 g plant".`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Plant needed for 750 g of a 6:1 extract? (4.5 kg.)\\\\n2. 2.5 L at 6% w/v of a 5:1 extract: extract mass and plant mass (150 g; 750 g).\\\\n3. Why must the plant answer for a concentrated extract always exceed the extract answer?\\\\n4. What is wrong with using an assumed 90% yield from memory?\\\\n5. Why does wet-basis plant weight used in dry-basis arithmetic inflate the requirement?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Target extract × plant parts = plant to process; chain through concentration with both bases labelled; allowances come from documents, not memory; the direction check (plant > extract) catches reversals.`,
      },
    ],
  },
  {
    nodeId: 'pct-21-5',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Extract Dilution',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Strong extracts are diluted to usable strengths — tinctures from fluidextracts, finished liquids from concentrated extracts — using the pct-17 dilution identity, applied to the extract basis. The extract-specific content is **which quantity the identity applies to**.\\\\n\\\\n**The invariant.** Diluting a liquid extract does not change the plant constituents present; it changes their concentration. Work with the **mass of extract (or of drug represented)** as the invariant: C₁V₁ = C₂V₂ applies where C is the concentration *of extract (or drug-represented)*, not of marker — unless the marker basis is the one stated.\\\\n\\\\n**Diluting a tincture by ratio.** Diluting a "1:10" tincture 1:5 (one part tincture + four parts diluent, total five) yields a "1:50" preparation: the drug-represented mass is unchanged while the volume multiplies by five. Check: 5 mL of the original represents 0.5 g of drug; after dilution to 25 mL, 0.5 g in 25 mL = 1 g in 50 mL = 1:50 ✓.\\\\n\\\\n**Diluting a % w/v extract.** From a 10% w/v extract solution to 2% w/v: C₁V₁ = C₂V₂ → V₁ = C₂V₂/C₁ = 2 × V₂/10 — one fifth of the final volume, diluted to volume.\\\\n\\\\n**Sensible diluent language**: the diluent must be compatible (the pct-17 canon governs miscibility/vehicles; here it is assumed given). **Marker note**: if an extract is *standardised*, dilution reduces marker concentration by the same factor — the marker arithmetic rides on the same invariant.\\\\n\\\\n**Label discipline**: state the diluted preparation's basis after dilution (new ratio or new %), because "diluted" without a number is not a specification.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The dilution invariant is the mass of extract (or drug represented); concentration changes, mass does not.\\\\n- C₁V₁ = C₂V₂ applies on the stated basis — extract mass or marker, whichever the label uses.\\\\n- Ratio dilution: "1:10" tincture diluted 1:5 becomes "1:50" (volume ×5, drug represented fixed).\\\\n- Diluent compatibility and vehicle choice follow pct-17 canon.\\\\n- Always state the new basis after dilution — "diluted" alone is not a specification.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Dilution identity on the stated basis**\\\\n\\\\n$$\\\\nC_1V_1 = C_2V_2\\\\n$$\\\\n\\\\n**Ratio-dilution rule** (dilute a $1{:}n$ tincture $1{:}k$)\\\\n\\\\n$$\\\\n\\\\text{new ratio} = 1{:}nk\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — ratio dilution.** 1:10 tincture diluted 1:5 (1 part + 4 parts diluent): new ratio 1:(10 × 5) = **1:50**. Check: 5 mL represents 0.5 g; 0.5 g/25 mL = 1 g/50 mL ✓.\\\\n\\\\n**Example 2 — percentage dilution.** 10% w/v extract solution diluted to 2% w/v: V₁ = (2 × V₂)/10 = V₂/5. For 200 mL final: take **40 mL**, dilute to 200 mL. Check: 4 g of extract in both ✓ (40 × 0.10 = 4; 0.02 × 200 = 4).\\\\n\\\\n**Example 3 — marker arithmetic.** An extract solution standardised at 4 mg/mL marker, diluted 1:4 (one part + three parts): new marker concentration = 4 ÷ 4 = **1 mg/mL** — the marker rides the same identity; the standardisation claim must be restated for the diluted product, not inherited.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Dilute a 1:5 tincture 1:10 — new ratio? (1:50.)\\\\n2. How much of a 25% w/v extract solution is needed for 500 mL of 5% w/v? (100 mL, qs 500.)\\\\n3. Show the invariant check for question 2. (125 g of extract on both sides.)\\\\n4. Why must a standardised extract's marker claim be restated after dilution?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dilute on the stated basis: mass invariant, C₁V₁ = C₂V₂; ratio dilutions multiply the second number. Restate the new ratio/%/marker on the label — the dilution is not done until its basis is stated.`,
      },
    ],
  },
  {
    nodeId: 'pct-21-6',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Standardisation-Related Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **standardised** extract carries a stated content of a named marker (e.g. "2% w/w marker"). The calculations: how much marker a dose or batch carries, how much extract delivers a required marker amount, and how standardisation adjusts a batch. **The monograph's own numbers govern any real product; this lesson uses stated illustrative values only.**\\\\n\\\\n**Marker in a dose.** marker = fraction × extract mass. A 500 mg dose of a 2% w/w extract carries 0.02 × 500 = **10 mg** of marker.\\\\n\\\\n**Extract for a marker target.** Reverse: extract = marker ÷ fraction. To deliver 25 mg of marker from a 2% w/w extract: 25 ÷ 0.02 = **1250 mg** of extract.\\\\n\\\\n**Batch standardisation (blending)**. Where a batch tests below the target, it may be adjusted by blending with a stronger lot — the alligation layout from pct-17-7 is the standard tool, applied on the marker basis. Two lots at 1.5% and 3.0% blended to 2.0%: the alternate layout gives parts 1.0 : 0.5 = 2 : 1 (low lot : high lot); every 3 kg of blend uses 2 kg of the 1.5% lot + 1 kg of the 3.0% lot. Verification: (2 × 1.5 + 1 × 3.0)/3 = 6.0/3 = **2.0%** ✓.\\\\n\\\\n**Two conventions, kept apart.** The marker % and the DER are different bases (21-1): a 4:1 extract standardised at 2% marker states both a process ratio and a chemical content; converting *marker per dose* to *plant-equivalent per dose* requires both factors in sequence, each labelled — e.g. 500 mg of that extract = 10 mg marker = 2 g plant equivalent.\\\\n\\\\n**Verification note**: standardised products are verified by assay; the calculation sets expectations that the assay confirms. Where a monograph exists, its specification defines the target — never assumed here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Marker in dose = fraction × extract mass; reverse: extract = marker ÷ fraction.\\\\n- Batch adjustment by blending uses alligation alternate on the marker basis (pct-17-7 tool).\\\\n- DER and marker % are different bases; both may appear on one label — convert in sequence, labelled.\\\\n- Standardisation sets expectations; assay verifies; monograph numbers govern real products.\\\\n- All illustrative values in this lesson are stated, never quoted as monograph figures.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Marker in a dose**\\\\n\\\\n$$\\\\nm_{\\\\text{marker}} = f \\\\times m_{\\\\text{extract}}\\\\n$$\\\\n\\\\n**Extract for a marker target**\\\\n\\\\n$$\\\\nm_{\\\\text{extract}} = \\\\frac{m_{\\\\text{marker}}}{f}\\\\n$$\\\\n\\\\n($f$ = marker fraction, e.g. 0.02 for 2% w/w)`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — marker per dose.** 500 mg of a 2% w/w extract: 0.02 × 500 = **10 mg marker**.\\\\n\\\\n**Example 2 — extract for target.** Deliver 25 mg of marker from a 2.5% w/w extract: 25 ÷ 0.025 = **1000 mg** of extract.\\\\n\\\\n**Example 3 — plant-equivalent chain.** 500 mg of a 4:1 extract standardised at 2%: marker = 10 mg; plant equivalent = 500 × 4 = **2 g**. The label can truthfully state both "10 mg marker" and "≡ 2 g plant" — two bases, one dose.\\\\n\\\\n**Example 4 — batch blend.** Lots at 1.5% and 3.0% to a 2.0% blend (alligation alternate): parts 1.0 : 0.5 = 2 : 1 → for 9 kg of blend: **6 kg of the 1.5% lot + 3 kg of the 3.0% lot**. Verify: (6 × 1.5 + 3 × 3.0)/9 = (9 + 9)/9 = 2.0% ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Marker in 800 mg of a 1.5% w/w extract? (12 mg.)\\\\n2. Extract needed to deliver 15 mg of marker at 2% w/w? (750 mg.)\\\\n3. Blend lots at 1.0% and 4.0% to 2.5%: parts of each? (1.5 : 1.5 = 1 : 1.)\\\\n4. Why are DER and marker % never interchangeable on a label?\\\\n5. What role does assay play relative to these calculations?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `marker = f × extract; extract = marker ÷ f; blend by alligation on the marker basis; keep DER and marker % as separate labelled bases; the assay, not the worksheet, has the final word.`,
      },
    ],
  },
  {
    nodeId: 'pct-21-7',
    courseId: 'pct-201',
    topicId: 'pct-21',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Applications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The extract arithmetic lands in four recurring professional situations.\\\\n\\\\n**1. Reading and writing extract labels.** A complete label states the basis: native ratio (4:1), or marker content (2% w/w), or both, plus the form (dry extract, soft extract, tincture). Dose translation (21-3/21-6) turns any of these into plant-equivalent or marker-per-dose statements for the patient conversation — with both bases kept distinct.\\\\n\\\\n**2. Compounding with extracts.** Incorporating a dry extract into a cream or capsule uses pct-18/19 machinery — with the extract's concentration basis carried through, and the same potency/units caution as pct-11: an extract dose is stated by convention (ratio/marker), not by pure-mass identity, so substitution between extracts of different ratios requires recalculating, never volume-for-volume or mass-for-mass swapping.\\\\n\\\\n**3. Formulation context.** Tinctures and fluidextracts bring ethanol with them (pct-37 canon owns oral-liquid formulation; here we note only that solvent content is part of the specification and its arithmetic — % v/v ethanol — follows pct-9-4). Extract dilutions for paediatric use change dose volume and excipient load; the dilution arithmetic is 21-5's canon.\\\\n\\\\n**4. Quality and stability flags.** Extracts are subject to the same stability thinking as pct-43 (light, oxidation, moisture) — used here as context that a stated basis must remain valid over shelf life; the stability science itself is pct-43's canon. Standardisation exists partly because botanical variation makes unstated-basis products unverifiable.\\\\n\\\\n**The professional through-line**: every extract number the pharmacist touches — on a bulk container, a formula, a prescription, or a patient's question — gets its basis named first. That single habit organises the whole topic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Labels state basis: ratio, marker, or both, plus form; dose translation uses both bases distinctly.\\\\n- Compounding with extracts follows pct-18/19 with the concentration basis carried through.\\\\n- Extract substitution requires recalculation — mass-for-mass swapping is never valid.\\\\n- Ethanol content and vehicle arithmetic follow pct-9-4/pct-37 canon.\\\\n- Stability context is pct-43's; standardisation exists because botanical variation must be quantified.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A patient asks whether a 4:1 capsule at 250 mg is "the same as" their previous 10:1 capsule at 100 mg. The basis-naming habit answers it: 250 × 4 = 1 g plant equivalent vs 100 × 10 = 1 g — these two ARE equivalent; the arithmetic, not the packaging, decides.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What three things must an extract label state to have a complete basis?\\\\n2. Why is mass-for-mass substitution between extracts invalid?\\\\n3. Which earlier topics own compounding arithmetic, ethanol-content arithmetic, and stability context?\\\\n4. Verify: are 250 mg of a 4:1 and 100 mg of a 10:1 extract plant-equivalent? Show the arithmetic.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Name the basis before the number: ratio or marker, form included. Dose translation, compounding, substitution, and shelf-life claims all inherit the same habit — and the arithmetic, not the packaging, decides equivalence.`,
      },
    ],
  },
];
