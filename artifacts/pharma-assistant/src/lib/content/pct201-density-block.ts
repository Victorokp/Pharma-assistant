import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 3: completes the locked pct-8 group block ("Density, Specific Gravity
 * and Related Calculations"): the Tier D orientation lesson plus the five
 * Tier C children not yet authored. pct-8-2 (Specific Gravity) already exists
 * in pct201-specific-gravity.ts and is intentionally NOT duplicated here.
 *
 * Node IDs, titles, and the parent topic (pct-4) mirror curriculum.ts exactly;
 * nothing here creates, renames, or reorders curriculum nodes.
 */
export const pct201DensityBlockLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // GROUP ORIENTATION (Tier D — overview only; children are the units)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-8',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This block teaches you to move confidently between **how much space a liquid takes** and **how much it weighs** — the conversion pharmacists perform every time a formula is compounded, a fill volume is checked, or a dilution is prepared.

The six lessons build one ladder. First, **Density** defines the core concept: mass per unit volume. Next, **Relationship Between Mass and Volume** turns that definition into a working proportionality, so you can read a data table or a graph and extract the density. Then **Density Calculations** drills the procedural skill — rearranging, substituting, converting units, checking dimensions. The block then mirrors itself: **Specific Gravity** re-expresses density as a comparison against water, which is how pharmacopoeias actually report liquids, and **Specific-Gravity Calculations** drills that procedure, including measuring SG by weighing equal volumes. Finally, **Pharmaceutical Applications** integrates everything into realistic compounding, manufacturing, and quality-control situations.

Work through the ladder in order: the calculation lessons assume the concept lessons, and the applications lesson assumes them all. Use this orientation to keep the map in view — the detailed teaching, formulas, and worked examples live in the child lessons.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Density = mass ÷ volume (g/mL); specific gravity compares that density with water's.
- The mass–volume bridge (m = V × SG) is the block's central working tool.
- Concept first (two lessons), procedure second (two lessons), application last.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the six child lessons are the real study units, in ladder order: Density → Mass–Volume Relationship → Density Calculations → Specific Gravity → Specific-Gravity Calculations → Pharmaceutical Applications.
- Everything in this block serves one skill: converting between weight and volume accurately, with units that check.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Density (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-8-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations — Density',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `You need three prerequisites before density itself:

- measuring **mass** on a balance, in grams (g);
- measuring **volume** in a vessel, in millilitres (mL);
- reading a simple ratio — density is one quantity divided by another.

Nothing more exotic is required; density is deliberately the first quantitative idea in this block because everything else is built on it.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Density answers the question: *for a given amount of space, how much matter is present?* Formally:

$$
\\rho = \\frac{m}{V}
$$

where $m$ is the mass (g) and $V$ is the volume (mL). In pharmacy, density is quoted in **g/mL** (numerically the same as g/cm³). A small, dense object and a large, light object can have equal masses — density captures the difference by dividing out the size.

Two reference points anchor your intuition. Water has a density of about $1.0$ g/mL at room temperature — by historical design, the gram was defined so that 1 mL of water weighs approximately 1 g. Liquids *less* dense than water (most fixed oils, alcohol) sit below 1; liquids *more* dense sit above — glycerin is noticeably denser than water, and mercury is far denser still (about $13.6$ g/mL, which is why it is used in barometers).

Density is an **intensive property**: it does not depend on how much of the substance you have. 10 mL of a syrup and 1 L of the same syrup share the same density, even though their masses differ a thousandfold. That is exactly what makes density useful for identification: it is a fingerprint of the material, not of the sample size.

Temperature matters. Liquids expand on warming — the same mass occupies more volume — so density falls as temperature rises. Any careful density statement therefore carries a temperature. In later lessons this becomes the reason specific-gravity specifications always state one.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Density: mass per unit volume, $\\rho = m/V$; pharmacy units g/mL.
- Water ≈ 1.0 g/mL at room temperature — the anchor of the scale.
- Liquids denser than water: SG-side > 1 (glycerin, mercury ≈ 13.6 g/mL); less dense: < 1 (fixed oils, alcohol).
- Density is intensive — independent of sample size.
- Density decreases as temperature increases (liquids expand); state the temperature.`,
      },
      {
        kind: 'FORMULAS',
        body: `Defining equation:

$$
\\rho = \\frac{m}{V}
$$

ρ = density (g/mL), m = mass (g), V = volume (mL).

Rearranged forms you will use constantly:

$$
m = \\rho V \\qquad V = \\frac{m}{\\rho}
$$

Dimensional check: (g/mL) × mL = g ✓; g ÷ (g/mL) = mL ✓. Any calculation whose units do not resolve this way is wrong — no matter how tidy the arithmetic.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — finding density.**

**Given:** 24 g of a liquid occupies 30 mL. **Find:** the density.

1. Formula: $\\rho = m/V$.
2. Substitute with units: $\\rho = 24 \\text{ g} / 30 \\text{ mL}$.
3. Calculate: 24 ÷ 30 = 0.8.
4. Units: g ÷ mL = g/mL. ✓

**Answer:** ρ = 0.8 g/mL. **Interpretation:** the liquid is less dense than water — it would float. A number above 1 would have signalled the opposite.

**Example 2 — finding mass.**

**Given:** 60 mL of a liquid with density 0.9 g/mL. **Find:** its mass.

1. Formula: $m = \\rho V$.
2. Substitute with units: $m = 0.9 \\text{ g/mL} \\times 60 \\text{ mL}$.
3. Calculate: 0.9 × 60 = 54; units g/mL × mL = g. ✓

**Answer:** m = 54 g. **Interpretation:** notice the mL cancels — the unit check confirms the correct arrangement of the formula.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Density is the quantity behind countless quiet pharmacy decisions: how much a bottle of syrup actually weighs when shipped, whether an oil will layer on top of an aqueous mixture (immiscible liquids separate by density), and how a balance reading in grams relates to a formula written in millilitres. It is also the first checkpoint of product identity — an unexpected density tells you immediately that a liquid is not what its label claims. The calculation fluency built here is exercised in every later topic of this block.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 45 mL of a liquid weighs 36 g. Calculate its density, and state whether it would float or sink in water.
2. Without computing anything: two samples of the same syrup have volumes 5 mL and 500 mL. How do their densities compare, and why?
3. A student computes a density and reports "0.9 mL/g". What has gone wrong, and what error in the formula arrangement would produce it?
4. Why does a density specification without a stated temperature leave the value ambiguous?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- ρ = m/V, in g/mL — mass divided by volume.
- Water ≈ 1.0 g/mL anchors the scale; oils float (< 1), glycerin and mercury sink (> 1).
- Rearrangements: m = ρV and V = m/ρ — always confirm units cancel correctly.
- Density is intensive: sample size does not change it.
- Higher temperature → lower density; always state the temperature.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Relationship Between Mass and Volume (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-8-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations — Relationship Between Mass and Volume',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This lesson formalizes what the density lesson used implicitly. You need:

- the density definition $\\rho = m/V$ from the previous lesson;
- the idea of **direct proportion** — two quantities that increase in step, in constant ratio;
- plotting and reading a straight-line graph (slope and intercept).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `For a fixed substance at a fixed temperature, density is constant — so mass and volume are **directly proportional**:

$$
m = \\rho V
$$

Compare this with the general straight-line equation $y = mx$: mass plays the role of $y$, volume plays $x$, and the density $\\rho$ is the **slope**. Doubling the volume doubles the mass; halving the volume halves it. The ratio $m/V$ is the same at every point — that is precisely what "directly proportional" means, and it is why density can serve as an identity test regardless of sample size.

Reading it as a graph: plotting measured masses against volumes gives a straight line through the origin, and its slope *is* the density. This is not a coincidence to memorize — it is the definition of density re-expressed geometrically. A line that misses the origin or fails to be straight signals experimental error (or a substance that changed with temperature mid-measurement).

The proportionality also fixes how conversions flow: volume → mass is multiplication by the constant $\\rho$; mass → volume is division by it. Every "bridge" calculation in this block — including the specific-gravity bridge introduced later — is this single proportionality wearing different notation. When you re-derive a formula instead of recalling it, this relationship is what you are re-deriving.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- At fixed temperature, m and V are directly proportional: m = ρV.
- On a graph of m against V, the slope equals the density; the line passes through the origin.
- Volume → mass: multiply by ρ. Mass → volume: divide by ρ.
- A non-origin or curved line indicates experimental error or a changing condition.`,
      },
      {
        kind: 'FORMULAS',
        body: `Proportionality form (compare $y = mx$):

$$
m = \\rho V
$$

Slope form from measured data:

$$
\\rho = \\frac{\\Delta m}{\\Delta V} = \\frac{m_2 - m_1}{V_2 - V_1}
$$

Δm in g, ΔV in mL → slope in g/mL. Using two data points (rather than one) averages out reading error — the standard practice when characterizing a liquid experimentally.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a liquid is measured twice — 10 mL weighs 12.5 g; 20 mL weighs 25 g. **Find:** the density from the data, and the mass of 16 mL.

1. Formula (slope): $\\rho = \\Delta m / \\Delta V$.
2. Substitute with units: $\\rho = (25 - 12.5) \\text{ g} / (20 - 10) \\text{ mL}$.
3. Calculate: $\\rho = 12.5 \\text{ g} / 10 \\text{ mL} = 1.25 \\text{ g/mL}$.
4. Cross-check with each point alone: 12.5/10 = 1.25 ✓ and 25/20 = 1.25 ✓ — the data are internally consistent (the ratio is constant).
5. Required mass: $m = \\rho V = 1.25 \\text{ g/mL} \\times 16 \\text{ mL}$.
6. Calculate: 1.25 × 16 = 20; units g/mL × mL = g. ✓

**Answer:** ρ = 1.25 g/mL; m = 20 g. **Interpretation:** the constant ratio across independent measurements is the experimental signature of direct proportionality — and the practical method for verifying that a measured density is trustworthy.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This relationship is why pharmaceutical production can be run **by weight** even though formulas are often written **by volume**: a tank filled to 40 L of a liquid whose density is known contains a computable mass, and a batch weighed on a load cell occupies a computable volume. Graph reading matters too — calibration curves and dilution charts in quality control are read exactly this way, slope first. When a later lesson converts between % w/w and % w/v, it will be this proportionality doing the work.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A plot of mass against volume for a liquid gives a straight line of slope 0.95 g/mL. What physical quantity does the slope represent?
2. The same liquid is measured at volumes 8 mL and 24 mL. Predict the ratio of the two masses, and justify it from proportionality.
3. A student plots m against V and gets a straight line that does not pass through the origin. Give one plausible experimental cause.
4. 15 mL of a liquid weighs 18 g. Using the proportionality, state the mass of 40 mL — then verify with the formula.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- m = ρV is direct proportionality: the mass–volume graph is a straight line through the origin.
- Slope of that line = density (g/mL); two-point slope Δm/ΔV averages out error.
- Constant ratio m/V across measurements = data consistency check.
- Volume→mass multiplies by ρ; mass→volume divides — the block's universal bridge.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Density Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-8-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations — Density Calculations',
    tier: 'C',
    verifyFlags: [
      'Syrup density 1.3 g/mL is an illustrative round textbook value; formal/pharmacopeial work must quote the specified value and temperature for the actual preparation.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This is the procedural lesson for density. Bring with you:

- $\\rho = m/V$ and both rearrangements ($m = \\rho V$, $V = m/\\rho$);
- the metric ladder for mass (1 kg = 1,000 g) and volume (1 L = 1,000 mL);
- the discipline of writing units at every step and cancelling them explicitly.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `A density calculation is a small pipeline, and the professional habit is to run every problem through the same five stages: **identify the given quantities with units → select the formula → substitute with units shown → compute → check that the units resolve to the target unit**. The unit check is not decoration; it is the error-catching mechanism. If the target is grams and your units resolve to g²/mL, the formula was arranged wrongly — no amount of arithmetic care will save it.

Two complications make this lesson more than simple substitution. First, **unit conversion**: data may arrive in kg, L, or cm³, while the formula works in g and mL. Convert *before* substituting — 0.5 L becomes 500 mL, 1.2 kg becomes 1,200 g — because mixing units inside the substitution step is the single most common source of wrong answers. Second, **choosing the arrangement**: rather than memorizing three formulas, derive the one you need from the definition on the spot. If the unknown is mass, multiply both sides of $\\rho = m/V$ by V; if the unknown is volume, solve for V. Students who re-derive rarely mis-arrange; students who recall often do.

Finally, keep **significant figures** honest: the answer carries no more significant figures than the least precise input, and an intermediate result should be kept unrounded until the end. With exact classroom numbers this rarely bites; with measured data it always does.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pipeline: given → formula → substitute (with units) → compute → unit check.
- Convert to g and mL *before* substituting (1 kg = 1,000 g; 1 L = 1,000 mL).
- Re-derive the needed rearrangement from ρ = m/V instead of recalling it.
- Answer takes the significant figures of the least precise input; round only at the end.`,
      },
      {
        kind: 'FORMULAS',
        body: `Core definition and rearrangements:

$$
\\rho = \\frac{m}{V} \\qquad m = \\rho V \\qquad V = \\frac{m}{\\rho}
$$

Unit conversions used in this lesson:

$$
1 \\text{ kg} = 1{,}000 \\text{ g} \\qquad 1 \\text{ L} = 1{,}000 \\text{ mL}
$$

All densities in g/mL; masses in g; volumes in mL, unless the problem states otherwise and the units are kept consistent throughout.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a bottle holds 0.5 L of a syrup with density 1.3 g/mL. **Find:** the mass of the syrup in kg.

1. Convert first: V = 0.5 L × 1,000 mL/L = 500 mL.
2. Formula: $m = \\rho V$.
3. Substitute with units: $m = 1.3 \\text{ g/mL} \\times 500 \\text{ mL}$.
4. Calculate: 1.3 × 500 = 650; units g/mL × mL = g. ✓
5. Convert the answer: 650 g ÷ 1,000 g/kg = 0.65 kg.

**Answer:** m = 0.65 kg. **Interpretation:** conversions at both ends (L → mL in, g → kg out) were kept outside the formula itself, so the substitution ran in clean, consistent units. Compare this with the error mode of substituting "0.5" directly against g/mL — the units would not have resolved, exposing the mistake immediately.

**Quick drill — find the volume:** 260 g of the same syrup occupies $V = m/\\rho = 260 \\text{ g} ÷ 1.3 \\text{ g/mL} = 200$ mL. ✓ (g ÷ (g/mL) = mL.)`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Batch records, fill-line checks, and compounding worksheets all run this pipeline constantly: a formula written in grams must be metered by volume, or a filled volume must be verified by weight. The unit-check habit you build here is the same one that later protects dispensing calculations, dilution calculations, and dose conversions — errors in those settings are caught exactly this way, by watching whether the units resolve to the target.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 1.2 kg of a liquid has volume 800 mL. Calculate the density in g/mL, converting units first.
2. A liquid of density 1.1 g/mL is needed to fill a 150 mL bottle. What mass is required, in grams?
3. A student computes V = ρ × m for a "find the volume" problem. Show, using units, why this must be wrong.
4. Why should unit conversions be completed before substitution rather than during it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Run every problem through: given → formula → substitute → compute → unit check.
- Convert kg→g and L→mL before substituting; keep units consistent throughout.
- Derive rearrangements from ρ = m/V rather than memorizing them.
- Round only at the end, to the least precise input's significant figures.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Specific-Gravity Calculations (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-8-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations — Specific-Gravity Calculations',
    tier: 'C',
    verifyFlags: [
      'Glycerin SG 1.25 is an illustrative standard textbook value (consistent with the Specific Gravity lesson); formal/pharmacopeial work must quote the specified value and temperature.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This lesson is the procedural mirror of Density Calculations, so it assumes:

- the specific-gravity definition, $\\text{SG} = \\rho_{substance}/\\rho_{water}$, and its dimensionless character;
- the mass–volume bridge $m = V \\times \\text{SG}$ for liquids and its rearrangements;
- the density pipeline habit (given → formula → substitute → compute → unit check).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Specific-gravity calculations come in two directions. The **definitional direction** computes SG itself: divide the substance's density by water's, at the same temperature. Because water is ≈ 1.0 g/mL, a liquid's SG is numerically its density in g/mL — but the two remain distinct statements, and a well-set-out answer keeps them distinct: density carries units, SG does not.

The **experimental direction** determines SG by weighing. Since equal volumes are being compared, volume cancels entirely:

$$
\\text{SG} = \\frac{m_{substance}}{m_{water}}
$$

where both masses are of **equal volumes** at the same temperature. This is the principle of the specific-gravity bottle (pycnometer): fill it with the liquid, weigh; fill it with water, weigh; take the ratio. No volume measurement is needed at all — the bottle guarantees equal volumes. That is why the weighing method is more accurate than reading a volume off a cylinder.

The **application direction** uses SG as the bridge between weight and volume, in both directions:

$$
m = V \\times \\text{SG} \\qquad V = \\frac{m}{\\text{SG}}
$$

For liquids this is the density bridge of the previous lessons with SG standing in numerically for ρ. Dimensional honesty: $V \\times \\text{SG}$ resolves to mL × (a pure number) — the grams enter because SG silently carries the 1.0 g/mL of water. In careful work you may write the full chain, $m = V \\times \\text{SG} \\times 1.0 \\text{ g/mL}$, to keep the dimensions visible. Temperature conditions apply to every direction: substance and water must be compared at the same stated temperature.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- SG = ρ_substance/ρ_water (same temperature) — dimensionless.
- Weighing method: SG = m_substance/m_water for **equal volumes** — the pycnometer principle; volume never needs measuring.
- Bridge: m = V × SG and V = m/SG (liquids, water ≈ 1.0 g/mL).
- Density has units (g/mL); SG does not — keep the statements distinct in your working.`,
      },
      {
        kind: 'FORMULAS',
        body: `Definition and weighing method:

$$
\\text{SG} = \\frac{\\rho_{substance}}{\\rho_{water}} = \\frac{m_{substance}}{m_{water}} \\quad \\text{(equal volumes, same temperature)}
$$

Weight–volume bridge (liquids):

$$
m = V \\times \\text{SG} \\qquad V = \\frac{m}{\\text{SG}}
$$

With the dimensional chain made explicit:

$$
m = V \\times \\text{SG} \\times 1.0 \\text{ g/mL}
$$

m in g, V in mL; the final factor is water's density, which is what converts the pure number SG into a usable density.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — SG by weighing (pycnometer principle).**

**Given:** a vessel holds 50 mL of a liquid, which weighs 60 g; filled with water instead, the same 50 mL of water weighs 50 g. **Find:** the liquid's SG.

1. Formula: $\\text{SG} = m_{substance}/m_{water}$ (equal volumes).
2. Substitute with units: 60 g ÷ 50 g.
3. Calculate: 60/50 = 1.2; units g ÷ g cancel — dimensionless. ✓

**Answer:** SG = 1.2. **Interpretation:** the liquid is 1.2 times as dense as water; its density is therefore 1.2 g/mL. Note that no volume figure was used in the division — the "50 mL" only guarantees the volumes were equal.

**Example 2 — applying the bridge.**

**Given:** the same liquid (SG 1.2). **Find:** the volume occupied by 90 g.

1. Formula: $V = m/\\text{SG}$.
2. Substitute with units: $V = 90 \\text{ g} ÷ 1.2$ (i.e. ÷ 1.2 g/mL via the water factor).
3. Calculate: 90 ÷ 1.2 = 75.

**Answer:** V = 75 mL. **Interpretation:** heavier-than-water liquid means the volume is *less* than the mass number would suggest for water — 90 g of water would occupy 90 mL, but this liquid packs into 75 mL.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The weighing method is exactly how pharmaceutical laboratories determine SG for quality control — a clean, accurate measurement needing only a balance, which is the most reliable instrument in the lab. The bridge calculations run whenever a viscous liquid such as glycerin is handled by weight for accuracy but must occupy a known volume in the finished product. Both directions appear in batch records: volume from weight at compounding, weight from volume at filling.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A 25 mL sample of a liquid weighs 27.5 g; 25 mL of water weighs 25 g. Calculate the SG, and explain why the volume value never entered the division.
2. A liquid has SG 0.8. What volume is occupied by 40 g of it?
3. Distinguish carefully: "density 1.2 g/mL" versus "SG 1.2". Which carries units, and what does each statement claim?
4. In the weighing method, why must the substance and the water be at the same temperature?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Definitional SG: ρ_substance/ρ_water — dimensionless; weighing SG: m_substance/m_water for equal volumes (pycnometer principle).
- Bridge: m = V × SG, V = m/SG — the water factor (1.0 g/mL) is what gives the bridge its units.
- Density carries units; SG does not — keep the distinction in written working.
- Same temperature for substance and water, always.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Pharmaceutical Applications (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-8-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations — Pharmaceutical Applications',
    tier: 'C',
    verifyFlags: [
      'Glycerin SG 1.25 is an illustrative standard textbook value (consistent with the Specific Gravity lesson); formal/pharmacopeial work must quote the specified value and temperature.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This lesson integrates the block. Bring all of it:

- density $\\rho = m/V$ and the two rearrangements;
- specific gravity and the weighing method (SG = m_substance/m_water, equal volumes);
- the weight–volume bridge m = V × SG, V = m/SG, with unit checks at every step.`
      },
      {
        kind: 'UNDERSTAND',
        body: `Applications test whether the block's tools work *together* under realistic conditions. Four situations dominate pharmacy practice.

**Compounding by weight.** Viscous liquids — glycerin, syrups — are weighed on a balance far more accurately than they can be measured in a cylinder. The bridge converts the weighed mass into the volume it will occupy in the finished product. When a formula lists a liquid in grams but the container is sized in millilitres, only SG connects the two.

**Fill volumes in manufacturing.** Production runs the reverse: bulk liquid is handled by weight on load cells, but the pack is specified by volume. A batch of computed mass fills a computable number of bottles — and SG is the conversion, applied bottle by bottle or across the whole batch.

**Quality control screening.** Because density is an intensive, temperature-sensitive fingerprint, a measured SG outside the expected window signals dilution, substitution, or decomposition before any chemical test is run. It is the cheapest identity check available, which is why monographs list it for liquids.

**Concentration-expression conversion.** Moving between % w/w (mass per mass) and % w/v (mass per volume) requires the density/SG of the preparation — the bridge again, wearing a different label. That conversion is developed fully in the Expressions of Concentration group; here, recognise it as a member of this family.

The professional pattern across all four: identify which quantity is known (mass or volume), which is wanted, and convert with the bridge — checking units at every step.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Compounding weighs viscous liquids for accuracy; SG converts the weighed mass to occupied volume.
- Manufacturing runs mass ↔ volume conversions at batch scale via SG.
- SG is an intensive fingerprint → cheap QC identity/dilution screen.
- % w/w ↔ % w/v conversion (Expressions of Concentration) is an SG application — same bridge.`,
      },
      {
        kind: 'FORMULAS',
        body: `The block's working set, now in combined use:

$$
\\rho = \\frac{m}{V} \\qquad \\text{SG} = \\frac{\\rho_{substance}}{\\rho_{water}} \\qquad m = V \\times \\text{SG} \\qquad V = \\frac{m}{\\text{SG}}
$$

m in g, V in mL, ρ in g/mL, SG dimensionless (water ≈ 1.0 g/mL). Select by asking: which of mass or volume is known, and which is wanted? The bridge supplies the missing one.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Scenario — compounding check.**

**Given:** a mixture formula includes 100 g of glycerin (SG ≈ 1.25, illustrative textbook value). The mixing vessel is a 100 mL measure and the other ingredients already occupy about 40 mL. **Find:** the volume the glycerin will occupy, and whether it fits.

1. Formula: $V = m/\\text{SG}$.
2. Substitute with units: $V = 100 \\text{ g} ÷ 1.25$ (via the water factor, g/mL).
3. Calculate: 100 ÷ 1.25 = 80.

**Answer:** V = 80 mL. **Interpretation:** glycerin contributes 80 mL of volume; with 40 mL already occupied, the mixture needs about 120 mL — more than the 100 mL vessel holds, so the check has exposed the problem *before* compounding, not after (use a larger vessel or revisit the formula). (Numbers are exact here: 100/1.25 = 80; 80 + 40 = 120.)

**Scenario — QC screen.** A monograph liquid is expected near SG 0.9. A batch measures 0.94 — outside the accepted window. Before any chemical assay, the screen already says: something changed. **Interpretation:** an intensive property drifting means composition changed; the cheap measurement did its job as a tripwire.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This lesson *is* the pharmacy connection — it is where the block's mathematics meets practice. The same SG values recur across a pharmacist's work: compounding worksheets, manufacturing batch records, QC monographs, and concentration conversions all lean on one number measured one way. Mastering the bridge here means every later topic that mentions density or SG — dilutions, percentage strengths, isotonicity — starts from a tool you already own.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A formula needs 60 g of a syrup-like liquid with SG 1.3 (illustrative). What volume will it occupy?
2. Explain, in process terms, why weighing a viscous liquid is more accurate than measuring its volume — and what quantity connects the two.
3. A liquid expected to have SG 0.9 measures 1.02. What does this suggest, and why is density the right property to catch it?
4. Why does converting a strength from % w/w to % w/v require the preparation's density?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One bridge, four uses: compounding (weight→volume), manufacturing (volume↔weight at scale), QC screening (intensive fingerprint), concentration conversion (% w/w ↔ % w/v).
- Weigh viscous liquids, compute their volume: V = m/SG.
- Drift in measured SG = composition changed — the cheapest identity check in the lab.
- Every application reduces to: which of mass/volume is known, which is wanted, convert, check units.`,
      },
    ],
  },
];
