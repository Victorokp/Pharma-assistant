import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 2 pilot (calculation stress test): ONE lesson, attached to the locked
 * curriculum node pct-8-2 (Tier C in the Phase-1 map — quantitative/procedural,
 * worked example required). Node ID, title, and parent mirror curriculum.ts
 * exactly; nothing here creates, renames, or reorders curriculum nodes.
 */
export const pct201SpecificGravityLessons: Lesson[] = [
  {
    nodeId: 'pct-8-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Density, Specific Gravity and Related Calculations — Specific Gravity',
    tier: 'C',
    verifyFlags: [
      'Glycerin SG 1.25 is used as an illustrative standard textbook value; for formal assessments quote the pharmacopeial/lecturer value at the stated temperature.',
    ],
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Before starting, make sure you are comfortable with:

- mass measured on a balance (grams, g) versus volume measured in a vessel (millilitres, mL);
- density as a general idea — how much matter is packed into a given space;
- water as the reference liquid, with a density of about 1.0 g/mL at room temperature;
- ratio and proportion, since specific gravity is defined as a ratio.

Specific gravity compares a substance with water, so a clear picture of both the substance's mass–volume behaviour and water's role as the standard is essential.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Density is the mass per unit volume of a substance:

$$
\\rho = \\frac{m}{V}
$$

where $m$ is mass (g) and $V$ is volume (mL). Pharmacy usually expresses density in g/mL (numerically identical to g/cm³).

Specific gravity (SG) compares the density of a substance with the density of water at the same temperature:

$$
\\text{SG} = \\frac{\\rho_{substance}}{\\rho_{water}}
$$

Because SG is a ratio of two densities, the units cancel and SG is dimensionless — a pure number. Since water's density is approximately 1.0 g/mL at room temperature, the SG of a liquid is numerically very close to its density expressed in g/mL. They are nevertheless different kinds of quantity: density carries units, SG does not. Saying a liquid has density 1.25 g/mL and saying it has SG 1.25 are related but not identical statements.

Three practical consequences follow. First, interpretation: a liquid with SG above 1 is denser than water and sinks in it; SG below 1 means it floats (fixed oils, for example, generally float on water). Second, temperature: liquids expand when warmed, so both densities change; SG specifications therefore always state the temperature (often written as 25°C/25°C, meaning substance and water both at 25°C). Third, use: because SG is numerically the density in g/mL, it acts as the bridge between weight and volume — a liquid's mass in grams equals its volume in mL multiplied by its SG (valid whenever water is taken as 1.0 g/mL).

Measuring SG experimentally (specific gravity bottle, hydrometer) belongs to the Pharmaceutical Measurement group; here the focus is using SG in calculations.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Specific gravity is the ratio of a substance's density to water's density, at the same temperature.
- SG is dimensionless; density carries units (g/mL in pharmacy).
- Water is approximately 1.0 g/mL, so SG is numerically close to density in g/mL — but the two are conceptually different.
- SG above 1: denser than water, sinks; SG below 1: floats; SG exactly 1: equal.
- SG changes with temperature — a specification must state it (e.g. 25°C/25°C).
- Practical bridge: mass (g) = volume (mL) × SG; volume (mL) = mass (g) ÷ SG.
- The bridge works because the liquid's density equals SG × 1.0 g/mL.`,
      },
      {
        kind: 'FORMULAS',
        body: `Density (define first — SG is built from it):

$$
\\rho = \\frac{m}{V}
$$

ρ = density (g/mL), m = mass (g), V = volume (mL).

Specific gravity (both densities at the same stated temperature):

$$
\\text{SG} = \\frac{\\rho_{substance}}{\\rho_{water}}
$$

Weight–volume bridge for liquids (uses ρ_water ≈ 1.0 g/mL):

$$
m = V \\times \\text{SG} \\qquad V = \\frac{m}{\\text{SG}}
$$

m in grams, V in mL. Derivation: the liquid's density is ρ = SG × ρ_water ≈ SG × 1.0 g/mL, so ρ = m/V gives both forms. For exacting work, use the true density at the working temperature rather than the approximation.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** glycerin with SG ≈ 1.25 (standard textbook value at room temperature).

**(a) Required:** the volume occupied by 50 g of glycerin.

1. Convert SG to density: ρ = SG × ρ_water = 1.25 × 1.0 g/mL = 1.25 g/mL.
2. Formula: V = m/ρ (rearranged from ρ = m/V).
3. Substitute with units: V = 50 g ÷ 1.25 g/mL.
4. Calculate: 50 ÷ 1.25 = 40.
5. Check units: g ÷ (g/mL) = mL. ✓

**Answer:** V = 40 mL.

**(b) Required:** the mass of 250 mL of the same glycerin.

1. Formula: m = V × ρ.
2. Substitute with units: m = 250 mL × 1.25 g/mL.
3. Calculate: 250 × 1.25 = 312.5; units mL × g/mL = g. ✓

**Answer:** m = 312.5 g.

**Interpretation:** the same SG serves in both directions — weight to volume and volume to weight — which is why SG is the workhorse conversion in liquid compounding. The inputs here are exact, so the answers are exact; with measured data, round to the least precise input.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `SG appears constantly in pharmaceutics:

- Compounding: when a formula states an amount in grams but a viscous liquid (such as glycerin) is more accurately handled by weight on a balance, SG converts the weighed amount to the volume it occupies in the final product — and the reverse.
- Manufacturing: liquid products are handled by weight on production scales; SG converts batch weights into bottle fill volumes and capacity checks.
- Quality control: SG is a quick identity and screening test — a syrup or alcohol that has been diluted or adulterated drifts from its expected SG.
- Concentration conversions: moving between % w/w and % w/v (see Expressions of Concentration) requires the density/SG of the preparation.

Accurate SG use depends on good measurement practice — balances, thermometers, and volumetric glassware — covered in the Pharmaceutical Measurement group.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A liquid has SG 0.95. Will 100 mL of it weigh more or less than 100 g, and what is its approximate mass?
2. A solution's density is 1.18 g/mL. Is its specific gravity also 1.18? Explain the difference between the two statements.
3. 25 g of a liquid occupies 20 mL. Calculate its density and its specific gravity.
4. Why must temperature be stated in a pharmacopeial SG specification, and what could go wrong in a calculation if it were ignored?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- SG = density of substance ÷ density of water, at the same temperature — a dimensionless ratio.
- Density carries units (g/mL); SG does not.
- Water ≈ 1.0 g/mL, so SG ≈ density in g/mL numerically.
- SG above 1 sinks in water; SG below 1 floats.
- Temperature must be stated (e.g. 25°C/25°C).
- Bridge: mass (g) = volume (mL) × SG; volume = mass ÷ SG.
- The bridge works because liquid density = SG × 1.0 g/mL.
- Uses: compounding conversions, manufacturing fill weights, QC screening, % w/w ↔ % w/v conversion.`,
      },
    ],
  },
];
