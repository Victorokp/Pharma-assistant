import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-16: Pharmaceutical Nutrition Calculations.
 *
 * Batch 19: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14/15
 * top-level topic convention) plus its seven children pct-16-1…16-7
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-16 has no surviving Phase-1 tier record; the topic and
 * conceptual children are Tier B (established conceptual-topic
 * convention, flagged pending confirmation), while the calculation
 * children — Parenteral Nutrition (16-4), Nutritional Requirements
 * (16-5), Nutrition-Related Calculations (16-7) — are Tier C, matching
 * the calculation-lesson convention (pct-5-7; pct-9/10/13/14/15 blocks).
 *
 * Scope discipline: nutrition arithmetic is THIS topic's canon.
 * Electrolyte units stay with pct-14; infusion rate/duration machinery
 * with pct-15; tonicity with pct-13; osmolarity *principles* with
 * pct-13/pct-5-9 — those are cross-referenced, not re-taught. Clinical
 * dietetics practice and patient-specific meal planning belong to
 * clinical training, not here. Anthropometric, energy-equivalent and
 * protein-equivalent conventions are flagged as source-dependent
 * wherever they are used.
 */
export const pct201NutritionLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-16',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'topic',
    title: 'Pharmaceutical Nutrition Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Nutrition is where pharmacy's arithmetic meets the whole patient: what they take in, what they need, and what their body is doing with it. This topic builds the quantities that make nutritional support computable — **how we measure nutritional status**, **how we assess it**, the two delivery routes (**enteral** and **parenteral**), the requirement frameworks, the label arithmetic on packaged food, and the working calculations that tie everything together.\\n\\n**Why pharmacists own this.** Enteral feeds interact with drugs (administration times, tube interactions); parenteral nutrition is a compounded admixture — the pharmacy department's product, with electrolytes (pct-14), infusion rates (pct-15) and tonicity (pct-13) all in one bag. The arithmetic of this topic is the grammar of those products.\\n\\n**The thread throughout**: intake is measured in **energy** (kcal), **protein** (g), and **volume** (mL); requirements are estimated per **kilogram of body weight**; labels convert between houses of units. Where conventions differ between sources (equivalents per gram of macronutrient, anthropometric cutoffs), the lesson flags the convention rather than inventing authority.\\n\\nThe seven lessons: **nutritional status**, **basic nutritional assessment**, **enteral nutrition**, **parenteral nutrition**, **nutritional requirements**, **food nutrition labels**, and **nutrition-related calculations**.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Nutrition arithmetic runs on energy (kcal), protein (g), and volume (mL), scaled per kilogram.\\n- Enteral = via the gut (tubes/feeds); parenteral = intravenous — a pharmacy-compounded admixture.\\n- PN bags combine pct-14 electrolytes, pct-15 rates, and pct-13 tonicity in one product.\\n- Convention-dependent values (energy equivalents, anthropometric cutoffs) are flagged, not universalised.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three quantity families nutrition arithmetic runs on.\\n2. Distinguish enteral and parenteral nutrition in one sentence.\\n3. Why is a PN bag a pharmacy product in a way an oral supplement is not?\\n4. How does this topic treat values that differ between reference sources?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Status → assessment → the two delivery routes → requirements → labels → calculations. kcal, g, mL, per kg. PN is the compounded one — electrolytes, rates, tonicity all live there.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-16', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-16-1',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Nutritional Status',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Body mass index (BMI)** is the screening quantity that starts every nutritional conversation:\\n\\n$$\\n\\text{BMI} = \\frac{\\text{weight (kg)}}{\\text{height (m)}^2}\\n$$\\n\\nThe kg/m² unit is worth pausing on: weight scales with volume roughly, height² with area — BMI normalises weight for build. Worked anchor: 70 kg, 1.75 m → 70/3.0625 = **22.9 kg/m²** (mid-normal).\\n\\n**The WHO screening bands** (convention-dependent — flagged): underweight < 18.5; normal 18.5–24.9; overweight 25–29.9; obese ≥ 30, with obesity subdivided further by class. These are **screening cutoffs for populations**, not diagnoses of individuals — athletic patients with high lean mass can cross cutoffs without excess fat.\\n\\n**Why BMI is a starting point, not an endpoint**: it says nothing about composition (fat vs muscle vs fluid). Oedema inflates weight without feeding anyone; a low BMI with normal lab values can reflect a small frame, not deficiency. Hence the assessment ladder of the next lesson.\\n\\n**Unintentional weight change** is often more informative than any single BMI number: a defined percentage loss over a defined period (commonly >5% in 30 days or >10% in 180 days — convention-dependent thresholds) signals nutritional risk regardless of starting BMI.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Nutritional status** is the state of the body's nutrient reserves and flux: adequate, deficient (undernutrition), or excessive (overnutrition), including the mixed states of disease. The working definitions:\\n\\n- **Undernutrition** spans acute deficiency (wasting) and chronic (stunting in children); in hospital practice the operative form is **malnutrition driven by disease** — increased needs plus decreased intake.\\n- **Overnutrition** ranges from overweight to obesity, with its own clinical consequences.\\n- **Status is dynamic**: reserves deplete over weeks of poor intake; surgery, infection or trauma raise demand sharply.\\n\\n**Why status drives pharmacy arithmetic.** Every requirement estimate in this topic (16-5) is calibrated to a status category: an undernourished patient's energy targets, protein targets and refeeding caution all differ. Status is the **input**; requirements are the **computation**; the feed or PN order is the **output**.\\n\\n**Refeeding risk preview** (flagged, not fully treated): severely depleted patients refeeding rapidly can shift electrolytes dangerously — the caution is named here because it is the reason undernutrition changes the *arithmetic* of support, not just its size.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- BMI = kg/m²; WHO bands are population screening cutoffs, not individual diagnoses.\\n- Status is dynamic: disease-driven malnutrition = raised needs + poor intake.\\n- Status category calibrates every requirement estimate downstream.\\n- Refeeding risk makes undernutrition an arithmetic caution, not only a size question.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists screening a medication profile for a patient with BMI 16.5 think ahead: high metabolic demands, possible electrolyte shifts, drugs that need feed-holding windows — status shapes the pharmaceutical care plan before any feed bag exists.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute the BMI of 55 kg at 1.60 m, and name its band.\\n2. Why can a muscular athlete be misclassified by BMI alone?\\n3. What makes disease-driven malnutrition different from simple starvation arithmetic?\\n4. Why is unintentional weight-loss percentage a stronger risk signal than a single BMI?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Status = reserves + flux: under/adequate/over. BMI = kg/m² with WHO screening bands (convention-dependent); % weight loss adds risk signal. Status calibrates requirements; refeeding risk is the named caution.`,
      },
    ],
  },
  {
    nodeId: 'pct-16-2',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Basic Nutritional Assessment',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Assessment** turns "how is the patient?" into numbers a plan can use. The basic toolkit has five compartments:\\n\\n1. **Anthropometric**: weight, height, BMI; weight-change percentage over stated intervals; where available, skinfold or circumference measures (source-dependent techniques — flagged).\\n2. **Dietary**: what is actually being taken in — appetite history, typical intake, dietetic records. The gap between intake and requirement is the arithmetic core of 16-5.\\n3. **Biochemical**: serum proteins (albumin historically; prealbumin's shorter half-life reflects more recent change — both affected by inflammation, not just nutrition — a genuine interpretation limit, flagged), electrolytes, glucose.\\n4. **Clinical/physical**: muscle wasting, subcutaneous fat loss, oedema, functional capacity.\\n5. **Medication view (the pharmacist's lane)**: drugs that alter appetite, absorption, or nutrient metabolism; drugs needing feed-holding schedules.\\n\\n**The synthesis habit**: no single number diagnoses; assessment is a **pattern read across compartments**. The output that feeds this topic's calculations is a statement of **deficit and risk**: intake deficit (kcal, g protein per day), risk flags (refeeding, obesity, fluid overload), and route constraints (gut working? tube feasible? veins usable?).\\n\\n**Output → input discipline**: 16-5's requirement estimates *consume* this assessment. A sloppy assessment produces confident-looking but worthless arithmetic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Assessment = anthropometric + dietary + biochemical + clinical + medication view.\\n- Serum proteins are inflammation-sensitive — interpret, don't over-trust.\\n- The synthesis output is deficit (kcal/g/day) + risk flags + route constraints.\\n- Requirement calculations consume the assessment — garbage in, garbage out.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A pharmacist reading an assessment flags: KCl-holding windows for tube feeds, sodium loads in PN for an oedematous patient, drug–nutrient timing (levothyroxine vs feeds). The assessment's risk flags are the pharmacist's working context.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the five assessment compartments and one datum each contributes.\\n2. Why is albumin a flawed stand-alone nutrition marker?\\n3. What three-part output does assessment hand to the requirement step?\\n4. Which compartment is the pharmacist's distinctive contribution?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Five compartments → pattern read → deficit + risks + route constraints. Proteins are inflammation-sensitive; medication effects are the pharmacy lane; assessment feeds requirements directly.`,
      },
    ],
  },
  {
    nodeId: 'pct-16-3',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Enteral Nutrition',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Enteral nutrition (EN)** delivers nutrients into the gastrointestinal tract — oral supplements when the patient can swallow, **tube feeding** when they cannot. The governing principle: **if the gut works, use it** — EN maintains gut integrity, is physiologically safer, and is cheaper than the intravenous route.\\n\\n**The products.** Commercial formulas state on the label: **energy density (kcal/mL — typically 1.0, 1.5, or 2.0 kcal/mL, convention-dependent ranges)**, **protein (g per 1000 mL or per litre)**, sodium/potassium content, and osmolality (mOsm/kg — the pct-13/pct-5-9 concept reappearing; high-osmolality boluses draw water into the gut and cause intolerance).\\n\\n**Administration frames** — each with its arithmetic:\\n- **Continuous** (over 12–24 h, via pump in mL/h — pct-15 machinery).\\n- **Bolus** (a named volume over 15–60 min, several times daily).\\n- **Cyclic** (continuous but time-limited, often overnight).\\n\\n**The feed–drug interaction set** (the pharmacy lane): drug adsorption or tube blockage (crushed tablets), and **feed-holding windows** — some drugs (e.g. phenytoin, levothyroxine) require the feed stopped before and after dosing; the schedule arithmetic of hold-time × feed-rate determines how much nutrition must be made up elsewhere.\\n\\n**Volume versus energy discipline**: a patient ordered 1500 kcal/day on a 1.0 kcal/mL formula needs 1500 mL — which may exceed their fluid tolerance; a 1.5 kcal/mL formula delivers it in 1000 mL. Energy target, fluid limit and volume tolerance negotiate in the same sentence.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- If the gut works, use it: EN preserves gut integrity and is the safer default.\\n- Formula labels: kcal/mL, protein per litre, electrolytes, osmolality (mOsm/kg).\\n- Frames: continuous (mL/h), bolus, cyclic — each with its own arithmetic.\\n- Feed–drug interactions: hold windows make up time × rate arithmetic; osmolality drives intolerance.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A phenytoin dose at 08:00 with continuous feed at 80 mL/h and a 2-hour hold either side: the feed loses 320 mL of scheduled volume — the pharmacist recomputes the make-up plan. That is enteral arithmetic as daily practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the principle that selects EN over PN, and its rationale.\\n2. A 1.5 kcal/mL formula must deliver 1800 kcal/day — volume per day? At 12 h continuous, what rate?\\n3. Why does osmolality matter for bolus feeding?\\n4. Name two drug–feed interaction mechanisms and one classic drug pair needing hold windows.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `EN = gut route; label speaks kcal/mL, g/L, mOsm/kg. Frames: continuous/bolus/cyclic. Volume = kcal ÷ density; rate = volume ÷ hours. Hold windows and tube interactions are the pharmacy lane.`,
      },
    ],
  },
  {
    nodeId: 'pct-16-4',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Parenteral Nutrition',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Parenteral nutrition (PN)** is intravenous feeding — reserved for patients whose gut cannot work, is inaccessible, or whose needs EN cannot meet. It is a **pharmacy-compounded admixture**, and every pct-14/pct-15/pct-13 topic converges here.\\n\\n**The macronutrient sources**, each with its energy convention (source-dependent — flagged; values shown are the common pharmaceutical convention):\\n\\n- **Dextrose (glucose) monohydrate**: 3.4 kcal/g — its mono­hydrate molecular weight (198.2) is *why* the convention differs from carbohydrate's 4 kcal/g metabolic label.\\n- **Amino acids**: 4.0 kcal/g (protein-equivalent nitrogen source).\\n- **Lipid emulsions**: ~2.0 kcal/mL as administered (20% emulsion = 2.0 kcal/mL, 10% = 1.1 kcal/mL — emulsion-specific, flagged).\\n\\n**Why these are conventions, not laws**: 3.4 vs 4.0 for carbohydrate is the difference between the *hydrated salt weighed into the bag* and the *metabolic energy of glucose itself*; tables disagree, and the bag arithmetic must use the value matching what is actually weighed.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**The PN bag's parts**: dextrose + amino acids + lipid emulsion + electrolytes (pct-14 units) + vitamins/trace elements, in a final volume, at a final osmolarity, run at a rate (pct-15 machinery).\\n\\n**Central vs peripheral (the osmolarity gate)**: peripheral veins tolerate roughly ≤ 900 mOsm/L (convention-dependent ceiling — flagged); concentrated dextrose quickly exceeds it, so **concentrated PN requires a central line**. Osmolarity is estimated from the components (see 16-7's arithmetic; the *principle* is pct-13/pct-5-9's particle counting).\\n\\n**Composing a bag** — the working chain:\\n1. Energy target (kcal/day, from 16-5) split across the three sources.\\n2. Protein set separately first (g/day), its kcal counted, remainder split dextrose:lipid.\\n3. Convert kcal → grams (÷ convention value) → volume (dextrose solutions as % w/v; lipid as mL of emulsion).\\n4. Electrolytes in mEq (pct-14), each capped by stability and compatibility limits.\\n5. Sum the volume; check the rate fits the administration window (pct-15).\\n\\n**Stability/compatibility boundary** (deferred): two-in-one vs three-in-one admixtures, calcium–phosphate ceilings and beyond-use dating are compounding/stability science — pct-15-9's compatibility frame and pct-43's stability canon. Here the numbers are composed; the licence to combine them belongs to those topics.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Energy contribution** (convention values, flagged)\\n\\n$$\\n\\text{kcal} = g_{\\text{dextrose}} \\times 3.4 + g_{\\text{amino acid}} \\times 4.0 + \\text{mL}_{\\text{lipid 20\\%}} \\times 2.0\\n$$\\n\\n**Dextrose grams from a % w/v volume**\\n\\n$$\\ng_{\\text{dextrose monohydrate}} = \\frac{\\text{\\% w/v} \\times V\\,(\\text{mL})}{100}\\n$$\\n\\n**Rate to deliver the bag**\\n\\n$$\\n\\text{mL/h} = \\frac{V_{\\text{final}}}{\\text{hours}}\\n$$\\n\\nUnits: g × kcal/g = kcal; mL × kcal/mL = kcal; % w/v × mL/100 = g — every term closes dimensionally.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — energy split.** Target 1800 kcal/day; protein set at 90 g (360 kcal from AA); lipid 20% at 250 mL (500 kcal); remainder dextrose = 1800 − 360 − 500 = **940 kcal → 940/3.4 = 276 g dextrose monohydrate**.\\n\\n**Example 2 — volume from % w/v.** Deliver those 276 g as 50% w/v dextrose: 276 × 100/50 = **552 mL** of 50% dextrose.\\n\\n**Example 3 — final volume and rate.** Bag: 552 mL dextrose + 400 mL AA 10% + 250 mL lipid + 200 mL additives ≈ 1400 mL (convention: sum volumes; displacement ignored — stated). Over 20 h: 1400/20 = **70 mL/h**.\\n\\n**Example 4 — protein from amino-acid solution.** 400 mL of 10% AA delivers 40 g protein. At 100 kg that is 40/100 = 0.4 g/kg/day; typical targets run 0.8–1.5 g/kg/day (convention-dependent), so this bag is a *starter* rate, exactly how PN is initiated.\\n\\n**Checks.** kcal arithmetic re-sums to the target; grams ÷ conventions return the kcal; rate × hours returns the volume; every convention named where used.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The PN worksheet is exactly Example 1–3 in sequence: protein first, kcal split, volumes computed, rate derived, then electrolytes (mEq) and the stability review. Pharmacists verify each line before the bag is released.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does dextrose contribute 3.4 kcal/g in bag arithmetic rather than 4?\\n2. A PN order needs 240 g dextrose monohydrate as 70% w/v — volume?\\n3. Why does concentrated PN require central access, and which quantity gates the decision?\\n4. In Example 1, recompute the dextrose grams if lipid drops to 100 mL — what kcal shift results?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `PN = dextrose 3.4 + AA 4.0 + lipid 2.0 kcal/mL (20%) — conventions named. Protein first, split the rest, % w/v → volume, sum volumes, rate = V/h. Osmolarity gates central vs peripheral; stability rules deferred.`,
      },
    ],
  },
  {
    nodeId: 'pct-16-5',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Nutritional Requirements',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Requirement** = what the patient needs per day, in kcal and grams. It is *estimated* from body weight with **per-kg conventions** — the values below are common pharmaceutical conventions and are **source-dependent** (flagged): different guidelines quote different ranges, and patient factors shift them.\\n\\n**Energy**: roughly **25–30 kcal/kg/day** for stable adults; higher in hypermetabolic states, lower in obesity (where dosing on actual weight overfeeds — adjusted-weight conventions exist and are flagged as institutional choices).\\n\\n**Protein**: roughly **0.8–1.5 g/kg/day** depending on stress level (0.8 low-stress; 1.2–1.5 hypermetabolic; renal/hepatic disease modifies further — clinical territory, flagged).\\n\\n**Fluid**: roughly **30–35 mL/kg/day** in stable adults (also computed as 25–30 mL per kcal — a useful cross-check pair).\\n\\n**Worked anchor**: 70 kg stable adult → energy ≈ 1750–2100 kcal/day; protein ≈ 56–105 g/day; fluid ≈ 2100–2450 mL/day. The ranges are wide because the *patient* narrows them.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**From convention to patient** — the estimation discipline:\\n\\n1. **Pick the per-kg convention** for the patient's state (stable vs hypermetabolic; actual vs adjusted weight — the choice documented).\\n2. **Compute the range**, then let the assessment (16-2) choose the point within it: undernourished → the lower energy end initially (refeeding caution), hypermetabolic → the upper.\\n3. **Protein is set first and defended** — it is the healing nutrient; energy is then split across dextrose/lipid (16-4's chain).\\n4. **Fluid arithmetic cross-checks the bag**: the final PN volume must fit the fluid target alongside other IV drugs; if 1400 mL of PN meets a 2100 mL target, 700 mL remains for lines and flushes — a real constraint, not a footnote.\\n\\n**Cross-check pair**: energy-based fluid (25–30 mL per kcal) vs weight-based (30–35 mL/kg) should agree within their ranges for the same patient; a wide disagreement flags an estimation error before any bag is written.\\n\\n**Honest limits**: these are population-derived starting estimates, not measured metabolism (indirect calorimetry where available overrides conventions — noted, not treated).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Energy requirement (range form)**\\n\\n$$\\n\\text{kcal/day} = W\\,(\\text{kg}) \\times (25 \\text{ to } 30)\\n$$\\n\\n**Protein**\\n\\n$$\\n\\text{g/day} = W \\times (0.8 \\text{ to } 1.5)\\n$$\\n\\n**Fluid, two routes**\\n\\n$$\\n\\text{mL/day} = W \\times (30 \\text{ to } 35)\\n$$\\n\\n$$\\n\\text{mL/day} = \\text{kcal/day} \\times (25 \\text{ to } 30)/1000 \\; \\text{(i.e. 25–30 mL per kcal)}\\n$$\\n\\nAll conventions — the patient's state selects the point in the range.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — stable adult.** 70 kg: energy 70 × 25–30 = **1750–2100 kcal/day**; protein 70 × 0.8–1.0 = **56–70 g/day** (low-stress point); fluid 70 × 30–35 = **2100–2450 mL/day**.\\n\\n**Example 2 — hypermetabolic point.** Same patient, major surgery: protein → 70 × 1.2–1.5 = **84–105 g/day**; energy toward the upper range.\\n\\n**Example 3 — cross-check pair.** At 1800 kcal the energy-based fluid convention gives ≈ 1 mL fluid per kcal → **≈ 1800 mL/day**, which sits *below* the weight-based 2100–2450 mL range — the two conventions disagree for this patient. The disagreement itself is the lesson: cross-checks exist to be reconciled, and the clinical fluid balance (other IV drugs, cardiac/renal fluid limits) decides the working number.\\n\\n**Example 4 — fluid-limited patient.** 2100 mL fluid cap: at 1.1 kcal/mL feed density, maximum energy by EN volume alone = 2310 kcal — the cap fits; at 1.0 kcal/mL it would not (2100 kcal max). Density negotiation in one line.\\n\\n**Checks.** Every range arithmetic re-done; cross-checks compared; the *chosen* point and its reason stated.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Requirement estimation is the first line of every PN worksheet and every EN rate chart; the pharmacist's role is defending the protein line and the fluid cap while negotiating density — Example 4 is a daily ward negotiation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the three per-kg conventions and their working ranges.\\n2. 85 kg stable adult — energy, protein and fluid ranges?\\n3. Why is protein set first and defended?\\n4. The two fluid conventions disagree for a patient — what does that disagreement tell you to do next?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Requirements: 25–30 kcal/kg, 0.8–1.5 g/kg protein, 30–35 mL/kg fluid (conventions, ranges). Protein first; energy split; fluid cap cross-checks the bag; ≈1 mL per kcal is the EN density anchor.`,
      },
    ],
  },
  {
    nodeId: 'pct-16-6',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Food Nutrition Labels',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Nutrition labels** declare energy and nutrient content per serving. The pharmacy-relevant skill is converting between the label's bases — **per serving**, **per 100 g**, **per 100 mL** — because prescriptions and diet plans rarely speak the serving the pack printed.\\n\\n**Energy conversion conventions** (source-dependent — flagged; values shown are the common European/Australian convention): carbohydrate 17 kJ/g (≈4.1 kcal/g); protein 17 kJ/g; fat 37 kJ/g; alcohol 29 kJ/g; with 1 kcal = 4.184 kJ. Labels in different markets print kcal, kJ, or both — the pharmacist converts rather than assumes.\\n\\n**Carbohydrate sub-lines**: "of which sugars" is a subset, not an addition — a recurring misreading. **Fat sub-lines** behave the same way ("of which saturates").\\n\\n**The serving trap**: a pack of 500 mL declaring 200 mL servings has 2.5 servings — "90 kcal per serving" is 225 kcal per bottle. Serving arithmetic (pack ÷ serving size) comes before any comparison.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Label arithmetic in pharmacy practice** — three working moves:\\n\\n1. **Base conversion**: a formula "1.5 kcal/mL, 60 g protein/L" queried for a 1500 mL daily volume → 2250 kcal and 90 g protein. Every EN supplement and oral nutritional product is read this way.\\n2. **Per-100 vs per-pack**: liquid supplements declare per 100 mL; the order speaks per day; the conversion is ×volume/100.\\n3. **kJ ↔ kcal**: a label at 630 kJ per 100 mL = 630/4.184 = **150.6 ≈ 150 kcal/100 mL** = 1.5 kcal/mL — the same product in two market languages.\\n\\n**What labels do not say**: bioavailability, interaction potential, sodium load in context (a "healthy" sign can hide a fluid-restricted patient's sodium problem). The pharmacist reads labels *for the patient in front of them*, not in the abstract.\\n\\n**Disclaimer discipline**: label conventions vary by jurisdiction ( rounding rules, fibre definitions, added-sugar lines); comparisons across markets need the conversion table, not intuition.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Oral nutritional supplements on prescription are label arithmetic: "two bottles t.d.s. of the 1.5 kcal/mL, 18 g protein/250 mL product" → 2250 kcal and 324 g protein — checked against the requirement estimate before dispensing.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 250 kJ per 100 mL to kcal per 100 mL.\\n2. A 1 L pack has 4 servings of 250 mL at 100 kcal each — kcal per pack?\\n3. Why is "of which sugars" not added to total carbohydrate?\\n4. Two bottles t.d.s. of a 1.5 kcal/mL, 250 mL product — daily kcal?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Labels: convert bases (serving/100 g/100 mL) before comparing; kJ ÷ 4.184 = kcal; sub-lines are subsets; servings per pack = pack ÷ serving. Read for the patient, not the pack.`,
      },
    ],
  },
  {
    nodeId: 'pct-16-7',
    courseId: 'pct-201',
    topicId: 'pct-16',
    nodeType: 'subtopic',
    title: 'Nutrition-Related Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `The synthesis lesson: every earlier piece in one calculation set. Prerequisites: requirement ranges (16-5), energy conventions (16-4), label bases (16-6), rate machinery (pct-15), electrolyte units (pct-14).\\n\\n**The calculation families**:\\n\\n1. **EN rate**: kcal target ÷ formula density = volume/day; ÷ hours = mL/h.\\n2. **PN composition**: protein first (g), then kcal split, then volumes from % w/v and lipid mL.\\n3. **Osmolarity estimation (peripheral-feeding gate)**: sum each component's mOsm contribution per final litre. The working convention: **each g of dextrose monohydrate contributes ≈ 5.0 mOsm** — from its particle count (1 g/198.2 g/mol ≈ 5.04 mmol particles per gram; the pct-13 counting logic; conventions vary 5.0–5.2, flagged); amino acids ≈ 1 mOsm/g (source-dependent, flagged); electrolytes as their mmol values (particles per ion pair counted by pct-14's ladder); lipid emulsions ≈ 260–340 mOsm/L as administered (product-specific — flagged).\\n4. **Protein–energy cross-check**: kcal from protein as a *percentage* of total kcal — the quality check on the split.\\n5. **Feed-hold make-up** (from 16-3): hold hours × rate = missed volume; make-up plan stated.\\n\\n**Osmolarity estimate honesty**: this is a *screening estimate* — the bag's label osmolarity (if measured) wins; peripheral ceiling conventions ≈ 900 mOsm/L are source-dependent (flagged).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `This lesson assembles the whole topic into the working calculation set. **Five families cover practice**: (1) EN rate from kcal, density and hours; (2) PN composition — protein first, energy split, volumes from conventions; (3) osmolarity screening, the gate that decides central vs peripheral access; (4) the protein–energy share, a quality check on any regimen; (5) feed-hold make-up arithmetic when drugs interrupt EN.\n\n**Estimate honesty runs through all five**: the osmolarity figure is a screening estimate from convention mOsm-per-gram values — a measured label value wins; the energy conventions (3.4/4.0/2.0) are named where used; the protein-share band is conventional, not law. The pharmacist's protection is the **inverse run**: every computed answer is back-calculated to its input before it is acted on.\n\nEach family below carries its formula, units, a worked example with checks, and the convention flags.`,
      },
      {
        kind: 'FORMULAS',
        body: `**EN rate**\\n\\n$$\\n\\text{mL/h} = \\frac{\\text{kcal/day}}{\\text{kcal/mL} \\times \\text{hours}}\\n$$\\n\\n**Osmolarity estimate (screening)**\\n\\n$$\\n\\text{mOsm/L} \\approx \\frac{g_{\\text{dext}} \\times 5.0 + g_{\\text{AA}} \\times 1 + \\text{mEq/L}_{\\text{electrolytes}} + V_{\\text{lipid}} \\times \\text{lipid mOsm/mL}}{V_{\\text{final}}\\,(\\text{L})}\\n$$\\n\\n(convention values 5.0 and 1.0 — source-dependent, flagged)\\n\\n**Protein kcal share**\\n\\n$$\\n\\% = \\frac{g_{\\text{protein}} \\times 4.0}{\\text{total kcal}} \\times 100\\n$$\\n\\n**Hold make-up**\\n\\n$$\\nV_{\\text{missed}} = \\text{rate} \\times \\text{hold hours}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — EN rate.** 1800 kcal/day on a 1.2 kcal/mL formula over 20 h continuous: 1800/1.2 = 1500 mL; 1500/20 = **75 mL/h**.\\n\\n**Example 2 — protein share.** 90 g protein in a 1800 kcal regimen: 90 × 4 = 360 kcal → 360/1800 = **20% of energy from protein** — within typical 15–25% patterns (convention-dependent, flagged).\\n\\n**Example 3 — osmolarity screening.** Final volume 1.4 L containing 276 g dextrose (5.0 mOsm/g → 1380), 40 g AA (1.0 → 40), electrolytes ≈ 150 mOsm total, 250 mL lipid 20% (≈ 0.3 mOsm/mL → 75): sum ≈ 1645 mOsm ÷ 1.4 L = **≈ 1175 mOsm/L → central line required** (well above the ≈900 convention ceiling).\\n\\n**Example 4 — hold make-up.** 80 mL/h continuous feed, 2 h hold before + 1 h after a drug: missed volume = 80 × 3 = **240 mL**; at 1.2 kcal/mL that is 288 kcal to reschedule — the make-up plan is stated, not guessed.\\n\\n**Checks.** Each family's inverse run: rate × hours × density = kcal ✓; kcal share re-sums; osmolarity estimate compared with the ceiling *as an estimate*; hold arithmetic back-computes the missed kcal.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ward query: "can this PN run peripherally?" — Example 3's screening arithmetic answers before the compounding sheet is touched. The same arithmetic defends the feed schedule when pharmacy schedules drug doses into it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 2000 kcal/day on a 1.5 kcal/mL formula over 16 h — mL/h?\\n2. Why is dextrose's mOsm-per-gram estimate ≈5.0, and why is it an estimate?\\n3. An osmolarity screening lands at 940 mOsm/L — what decision follows, and with what caveat?\\n4. A 4-hour feed hold at 90 mL/h with 1.5 kcal/mL formula — missed volume and kcal?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Families: EN rate (kcal ÷ density ÷ h), PN composition, osmolarity screening (dextrose ≈5.0 mOsm/g, AA ≈1, electrolytes as mOsm, lipid product-specific), protein share %, hold make-up. Estimates flagged; measured values win.`,
      },
    ],
  },
];
