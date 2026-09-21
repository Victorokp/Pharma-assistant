import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-33: Micromeritics and Particle Properties.
 *
 * Batch 36: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–32
 * top-level topic convention) plus its nine children pct-33-1…33-9
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-33 has no surviving Phase-1 tier record; the
 * quantitative children — 33-1 Particle Size (diameters/equivalence),
 * 33-2 Particle-Size Distribution (log-normal data reduction), 33-4
 * Surface Area, 33-5 Porosity, 33-6 Density (bulk/tap/packing
 * arithmetic), and 33-8 Angle of Repose (the tan θ classification) —
 * are Tier C under the established calculation-lesson convention;
 * the topic and remaining conceptual children are Tier B.
 * Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic is the canonical home of deep particle
 * science. pct-29-5 keeps dissolution-rate framing (rate-not-
 * equilibrium — referenced, never re-derived); pct-34 keeps bench
 * technique (33-7/33-8 hand 33's flow DATA to 34-6's handling canon);
 * pct-35-5's size-reduction process canon and pct-35-3's excipient
 * theory are named-not-duplicated; true-density measurement overlaps
 * pct-33-6's volume-displacement canon (same principle, denser
 * presentation there). All worked values are stated illustrative
 * values, independently verified.
 */
export const pct201MicromeriticsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-33',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'topic',
    title: 'Micromeritics and Particle Properties',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Micromeritics** is the science of small particles: their size, size spread, shape, surface, and how those properties govern powder and particle behaviour. For pharmacy it is not an abstract exercise — a tablet's dissolution speed, a suspension's sedimentation, a powder's ability to flow and mix, even a dose's uniformity, all trace back to particle properties measured here.\\n\\n**The map.** (1) **Size** — a single number struggle: which diameter? (33-1). (2) **Distribution** — real powders are populations, not points (33-2). (3) **Shape** — the geometry that frustrates every simple measurement (33-3). (4) **Surface area** — where the solid meets the solvent (33-4). (5) **Porosity** — the hidden space inside a bed (33-5). (6) **Density** — three (or four) densities for one material (33-6). (7) **Flow** — the bulk behaviour that decides whether a machine can even handle the powder (33-7). (8) **Angle of repose** — flow's simple bedside test (33-8). (9) **Significance** — the wiring diagram to dissolution, formulation, and the factory (33-9).\\n\\n**Two disciplines the topic carries.** First, the pct-29-5 boundary: dissolution RATE grows with surface area — that link is *used* here but canonised there; this topic owns the measurement, not the dissolution theory. Second, the pct-34 boundary: particle science *informs* powder handling, but the compounding technique (spatulation, trituration, geometric dilution) is pct-34's canon.\\n\\n**Standing discipline**: worked values are stated illustrative values, independently verified.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Micromeritics = particle size, distribution, shape, surface, and their consequences.\\n- Map: size → distribution → shape → surface area → porosity → density → flow → angle of repose → significance.\\n- Dissolution-rate canon is pct-29-5's (surface-area link used, not re-derived).\\n- Bench technique (mixing, geometric dilution) is pct-34's.\\n- Worked values stated and verified.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define micromeritics and name three product properties it governs.\\n2. Recite the map and the lesson owning each region.\\n3. What does pct-29-5 canonise, and what does this topic borrow?\\n4. Which later topic owns the compounding technique, and where does this topic hand over flow data?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Small particles, large consequences: a micrometre of size can decide whether a medicine dissolves, settles, flows, or fails. This topic is the measuring stick the rest of pharmacy uses.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-33', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-33-1',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Particle Size',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Particle size** sounds like one number; in reality a particle has no single size. Real particles are irregular, so "size" must be *defined* by the method of measurement — each technique reports a different **equivalent diameter**: the diameter of a sphere that would behave like the real particle in that measurement.\\n\\n**The main diameters** (the vocabulary 200L requires):\\n\\n*Projected (Martin's/Feret's) diameter* — from a microscope image: the chord or caliper length of the 2-D silhouette.\\n\\n*Volume (equivalent-sphere) diameter* — the diameter of the sphere with the same volume as the particle (Coulter-principle territory).\\n\\n*Stokes' (sedimentation) diameter* — the diameter of the sphere that settles at the same rate (pct-38-3's law supplying the physics).\\n\\n*Surface diameter* — sphere with the same surface area.\\n\\n**The units and scales**: particles are measured in micrometres (µm; 1 µm = 10⁻⁶ m = 0.001 mm). Pharmaceutical powders commonly span **1–1000 µm**; "micronised" means pulled down to a few micrometres. The worked arithmetic converts units and computes equivalent-sphere diameters from stated volumes — the one calculation family where a 200L student genuinely needs the sphere's volume formula (the A-level prerequisite, stated in FOUNDATION terms).\\n\\n**The worked arithmetic** (this lesson's Tier C core): sphere-volume diameter from a stated volume; µm↔mm conversions; reading a stated size into pharmaceutical consequences (smaller → larger surface area → faster dissolution, the pct-29-5 link; smaller → slower settling, the pct-38-3 link).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Equivalent-sphere volume diameter**\\n\\n$$\\nV = \\frac{\\pi}{6}\\,d^3 \\quad\\Longrightarrow\\quad d = \\left(\\frac{6V}{\\pi}\\right)^{1/3}\\n$$\\n\\n**Unit ladder**\\n\\n$$\\n1\\ \\text{mm} = 1000\\ \\mu\\text{m}, \\qquad 1\\ \\mu\\text{m} = 10^{-6}\\ \\text{m}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — diameter from volume.** Stated: particle volume V = 4.19 × 10⁻¹⁶ m³. d = (6V/π)^{1/3} = (6 × 4.19e−16/3.14159)^{1/3} = (8.0e−16)^{1/3} ≈ **9.28 µm** (9.28e−6 m). Check: (9.28e−6)³ × π/6 ≈ 4.19e−16 m³ ✓.\\n\\n**Example 2 — the cube-root reflex.** Doubling d multiplies V by 2³ = 8; halving d divides V by 8. A 10 µm particle has 8× the volume of a 5 µm one.\\n\\n**Example 3 — conversions.** 0.05 mm = **50 µm**; 250 nm = **0.25 µm**; 1.2 mm = **1200 µm**.\\n\\n**Example 4 — consequences ladder.** A powder milled from 100 µm to 10 µm particles: surface area per gram rises ~10× (same mass, tenfold more particles each one-tenth as wide — see 33-4's arithmetic), dissolution speeds up (pct-29-5), settling slows (pct-38-3).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does a particle have no single size — define equivalent diameter in one sentence.\\n2. V = 3.35e−16 m³ — d? ((6×3.35e−16/π)^{1/3} ≈ 8.62 µm.)\\n3. Convert: 0.02 mm; 500 nm; 2.5 mm. (20 µm; 0.5 µm; 2500 µm.)\\n4. A particle's volume grows by 27× — by what factor did d grow? (×3.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Ask a particle its size and it answers with the instrument's name: projected, volume, Stokes, surface. One sphere formula, one unit ladder — and every consequence downstream.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-2',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Particle-Size Distribution',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Real powders are not one size but a **population**: a **particle-size distribution (PSD)** reports what fraction of particles (by number, or by mass/weight) falls in each size band. The distribution is the meaningful description; any single "average" is a summary of it.\\n\\n**Reading the distribution**: a **frequency curve** (or histogram) plots how many particles per size band; a **cumulative plot** plots the fraction finer than a given size — the two carry the same information. Pharmaceutical convention quotes **D10, D50, D90**: the sizes below which 10%, 50%, and 90% of the distribution lies. **D50 is the median**, not the mean.\\n\\n**Log-normality**: particle-size data from milling and precipitation typically plot as a straight line on log-probability axes — the **log-normal** distribution. Its two summary parameters are the **geometric mean** (the D50 of the log-normal line) and the **geometric standard deviation** (a spread measure: the ratio of the size at 84.13% to the size at 50% — one log standard deviation up the line).\\n\\n**The worked arithmetic** (this lesson's Tier C core): compute a geometric mean from a small data set (the A-level prerequisite — logs — is used explicitly); read D-values off a stated cumulative table; compute the geometric SD from stated D50/D84.13 values; interpolate a stated band's midpoint.\\n\\n**Why distribution beats average** (the consequence): two powders with identical D50 can behave completely differently if one is narrow and one is broad — packing, flow (33-7), and content uniformity all depend on the spread, which is why D10/D90 and a stated span matter.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Geometric mean** (n particles, sizes dᵢ)\\n\\n$$\\n\\bar{d}_g = \\left( \\prod_{i=1}^{n} d_i \\right)^{1/n} = \\text{antilog}\\left( \\frac{\\sum \\log d_i}{n} \\right)\\n$$\\n\\n**Geometric standard deviation (log-normal)**\\n\\n$$\\n\\sigma_g = \\frac{d_{84.13\\%}}{d_{50\\%}}\\n$$\\n\\n**Cumulative reading**\\n\\n$$\\nD_{10} < D_{50} < D_{90}, \\qquad D_{50} = \\text{median}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — geometric mean.** Stated sizes (µm): 4, 9, 16. log values: 0.602, 0.954, 1.204; sum = 2.760; mean log = 0.920; **d̄g = antilog 0.920 ≈ 8.3 µm** — note it sits above the arithmetic mean (9.67? no: arithmetic mean = 29/3 = 9.67; 8.3 < 9.67 ✓, geometric ≤ arithmetic always).\\n\\n**Example 2 — reading D-values.** Stated cumulative (undersize) table: 5 µm→10%, 8 µm→50%, 12 µm→90%. Then **D10 = 5 µm, D50 = 8 µm, D90 = 12 µm** — no interpolation needed when the table lands exactly.\\n\\n**Example 3 — geometric SD.** Same table: σg = D84.13/D50. Interpolating slightly above 12 µm gives 12.5 µm (stated); σg = 12.5/8 ≈ **1.56**. Dimensionless, and >1 always.\\n\\n**Example 4 — span.** Span = (D90 − D10)/D50 = (12 − 5)/8 = **0.875** — a narrow-distribution marker (<1 is narrow by common lab convention, stated as convention).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is D50 the median, not the mean?\\n2. Sizes 1, 4, 16 µm — geometric mean? (log sum 0 + 0.602 + 1.204 = 1.806; mean 0.602; antilog = 4.0 µm.)\\n3. D50 = 10 µm, D84.13 = 18 µm — σg? (1.8.)\\n4. Two powders share D50 but not span — which behaviours differ, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The distribution is the powder's biography; D10/D50/D90 its milestones. Logs turn populations into straight lines — geometric mean, geometric SD, and a span that tells narrow from broad.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-3',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Particle Shape',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Particle shape** is the property that breaks the sphere assumption: real crystals are needles, plates, cubes, or irregular fragments, and shape changes both how particles pack and how they measure.\\n\\n**The shape vocabulary**: *spherical* (ideal), *cubical*, *irregular* (angular fragments), *acicular* (needle-like), *platy* (flake/plate-like), *dendritic* (branched).\\n\\n**Shape factors** (named and bounded — the 200L scope is recognition, not derivation): the **sphericity** (how close to a sphere, 0–1, sphere = 1), and the **shape coefficient** used to convert measured dimensions into surface/volume estimates — instrument-canon territory, named here so the vocabulary is met.\\n\\n**Why shape matters** (the consequences this lesson owns):\\n\\n*Packing*: spheres pack most efficiently; needles and plates pack loosely with voids — bulk density and porosity (33-5/33-6) inherit the shape directly.\\n\\n*Flow* (33-7): smooth rounded particles roll past each other; angular or fibrous particles interlock and bridge — flowability falls as shape departs from round.\\n\\n*Measurement bias*: the SAME particle reports different diameters under different techniques (33-1's lesson made concrete) — a needle is "long" to microscopy, "small" to a volume method.\\n\\n*Surface area*: at equal volume, shape away from sphere always increases surface area — the dissolution link (pct-29-5) sharpens.\\n\\n**The habit to build**: when a powder misbehaves (won't flow, packs oddly, dissolves oddly), shape is one of the first suspects — the qualitative diagnostic this topic hands to formulation.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Shape classes: spherical, cubical, irregular, acicular (needles), platy (plates), dendritic.\\n- Sphericity: 0–1 scale, sphere = 1; shape coefficients named, derivation bounded.\\n- Round packs dense and flows well; needles/plates pack loose, interlock, and bridge.\\n- Same particle, different diameters per technique — microscopy vs volume methods disagree on needles.\\n- Non-spherical shape raises surface area at equal volume — the pct-29-5 link sharpens.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name four shape classes with one pharmaceutical consequence each.\\n2. Why do microscopy and volume methods disagree about a needle?\\n3. Which two later lessons inherit shape's effects, and how?\\n4. Why does shape away from sphere increase surface area at fixed volume?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Spheres are the polite exception; pharmacy gets needles, plates, and fragments. Shape taxes packing, flow, and measurement — suspect it when powders misbehave.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-4',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Surface Area',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Surface area** is the total interface a powder presents to its surroundings — the stage on which dissolution, adsorption (pct-31-5), and surface reactions happen. Because only the surface touches the solvent, surface area per gram (**specific surface area**) is the pharmaceutically decisive quantity.\\n\\n**The cube-root intuition, made quantitative**: subdividing a cube keeps total VOLUME constant but multiplies SURFACE. A 1 cm cube has 6 cm² of surface; cut it into 1 mm cubes → 1000 cubes × 6 mm² = 60 cm² (×10); cut to 100 µm → ×100; the pattern is linear in the division factor (the worked arithmetic below).\\n\\n**How it is measured** (named and bounded): gas adsorption methods (the BET principle, named) and permeametry (air flow through a packed bed, the Kozeny–Carman principle, named) — instrument canon; the 200L skill is knowing WHICH quantity they report.\\n\\n**The worked arithmetic** (this lesson's Tier C core): the cube-subdivision ladder; sphere-bundle surface for a stated size at fixed mass; the consequences ladder (surface → dissolution rate, pct-29-5; surface → adsorption capacity, pct-31-5; surface → wetting demand, pct-31-3).\\n\\n**The trap this lesson also teaches**: micronising to boost dissolution has costs — finer powders flow worse (33-7), aggregate more strongly (van der Waals), and may be harder to wet (pct-31-3). Surface area is a benefit with a price, not a free lunch.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Cube subdivision (side reduced ×n, surface grows ×n)**\\n\\n$$\\nS_{new} = n \\times S_{old} \\quad (\\text{total volume constant})\\n$$\\n\\n**Sphere bundle** (N spheres of diameter d, total volume V₀)\\n\\n$$\\nN = \\frac{V_0}{\\frac{\\pi}{6} d^3}, \\qquad S = N \\pi d^2 = \\frac{6 V_0}{d}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the ladder.** 1 cm cube → 1 mm cubes: side /10 → 10³ = 1000 cubes; surface each = 6 × (0.1 cm)² = 0.06 cm²; total = 1000 × 0.06 = **60 cm²** = 10 × original 6 cm². To 100 µm cubes: /100 → 10⁶ cubes × 6e−6 cm² = **600 cm²** = ×100. Linear in the division factor ✓.\\n\\n**Example 2 — sphere bundle.** V₀ = 1 cm³ of spheres all d = 10 µm: N = 1/(π/6 × (1e−3 cm)³) ≈ 1.91e9 spheres; S = N × π × (1e−3)² ≈ 6e3 cm² = **0.6 m² per gram-equivalent** — gram-scale area from grain-scale matter (stated rounding; the S = 6V₀/d shortcut agrees: 6×1/1e−3 = 6000 cm² ✓).\\n\\n**Example 3 — the trade-off read.** Micronising 50 µm → 5 µm (÷10): specific surface ×10 → dissolution faster (pct-29-5); but flowability drops (33-7) and aggregation risk rises — the price column of the benefit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is specific surface area the pharmaceutically decisive form?\\n2. A cube's side is divided by 20 — total surface multiplies by? (×20.)\\n3. V₀ = 2 cm³, d = 20 µm — S? (6×2/2e−3 cm = 6000 cm² = 0.6 m².)\\n4. Name three costs of micronising beyond the dissolution benefit.\\n5. Which named techniques measure surface area, and which quantity do they report?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same volume, more edges: divide the grain tenfold and the surface answers tenfold. The stage where solids meet solvent — bought with flow and wetting costs.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-5',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Porosity',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A powder bed is powder + **voids**. **Porosity** is the fraction of the bed's bulk volume that is void space — the hidden volume that determines how much liquid a bed can soak up, how tightly particles pack, and how fluids percolate through.\\n\\n**The two volumes** (the prerequisite distinction): **true volume** — the volume of the solid material itself (what a density bottle measures, 33-6's canon); **bulk volume** — the volume the bed occupies including voids (what a measuring cylinder reads).\\n\\n**The definition and the complement**:\\n\\n$$\\n\\varepsilon = \\frac{V_{bulk} - V_{true}}{V_{bulk}} = 1 - \\frac{V_{true}}{V_{bulk}}\\n$$\\n\\nPorosity is a dimensionless fraction (often quoted as %); its complement (1 − ε) is the **packing fraction** — the fraction that is actually solid.\\n\\n**Intraparticle vs interparticle**: voids exist BETWEEN particles (bed porosity) and INSIDE porous particles (pores — the granule canon pct-34-7 consumes). Both count toward total pore volume; the bed-level arithmetic here uses bulk vs true.\\n\\n**The worked arithmetic** (this lesson's Tier C core): ε from stated volumes; bulk volume needed to hit a target porosity; the ±packing observation (tapped beds lower ε — the 33-6 bridge).\\n\\n**Consequences**: high porosity → loose beds, weak flow resistance, fast liquid uptake; low porosity → dense beds, hard compaction? actually the reverse for tablets — denser beds compact to harder tablets (the pct-35 bridge, named). Porosity is the meeting point of shape (33-3), size spread (33-2), and handling history.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Porosity**\\n\\n$$\\n\\varepsilon = \\frac{V_{bulk} - V_{true}}{V_{bulk}} \\times 100\\%\\n$$\\n\\n**Packing fraction (complement)**\\n\\n$$\\n\\text{packing fraction} = 1 - \\varepsilon\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — ε from volumes.** Stated: 50 g of powder occupies V(bulk) = 62 mL; true volume (displacement) V(true) = 37 mL. ε = (62 − 37)/62 = 25/62 ≈ **0.403 = 40.3%**. Packing fraction = 59.7%.\\n\\n**Example 2 — target porosity.** Same powder, target ε = 30%: V(bulk) = V(true)/(1 − 0.30) = 37/0.70 ≈ **52.9 mL** — the bed must be compacted from 62 mL.\\n\\n**Example 3 — tapping closes voids.** After tapping, bulk volume 52.9 → 48 mL: ε = (48 − 37)/48 ≈ **22.9%** — voids fell 17.4 points; the bridge to 33-6's tapped density.\\n\\n**Example 4 — density crossover.** ε also = 1 − ρ(bulk)/ρ(true): 1 − (50/62)/(50/37) = 1 − 37/62 = 40.3% ✓ — the same physics written in densities.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish true volume from bulk volume — which instrument reads which?\\n2. V(bulk) = 80 mL, V(true) = 44 mL — ε? ((80−44)/80 = 45%.)\\n3. Target ε = 25% with V(true) = 44 mL — required V(bulk)? (44/0.75 ≈ 58.7 mL.)\\n4. Why does tapping lower porosity, and which 33-6 quantity records it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A powder bed is mostly air you cannot see: ε = voids over bulk, packing fraction its solid complement. Tapping the cylinder is porosity's pause button.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-6',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Density',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Powders have **several densities at once** — not from sloppiness, but because "volume" itself is ambiguous for a bed of particles. The definitions all divide the SAME mass by different volumes:\\n\\n**True density** (ρt): mass ÷ true volume — solid material only, no voids, no pores. Measured by liquid/gas displacement (the density bottle/helium pycnometer, named).\\n\\n**Bulk density** (ρb): mass ÷ bulk volume — the loose-poured bed, voids included. The simplest: pour into a cylinder, read the volume.\\n\\n**Tapped density** (ρtap): mass ÷ volume after standardised tapping — the settled bed.\\n\\n**Granule/particle density** (ρg, when relevant): solid + internal pores, excluding interparticle voids — named for completeness.\\n\\n**Ordering**: ρt ≥ ρg ≥ ρtap ≥ ρb (pores cost the granule, voids cost the bed).\\n\\n**The Carr index and Hausner ratio** (the flow-proxy pair — the quantitative core of this lesson and the bridge to 33-7's flow canon):\\n\\n$$\\nCI = \\frac{\\rho_{tap} - \\rho_b}{\\rho_{tap}} \\times 100\\%, \\qquad HR = \\frac{\\rho_{tap}}{\\rho_b}\\n$$\\n\\nBoth compress "how much did tapping compact it?" into one number: a bed that compacts a lot was loose, cohesive, and likely flows poorly. Standard interpretation classes (stated as tabulated convention): **CI ≤ 15% excellent, 16–20 good, 21–25 fair, 26–35 poor, >35 very poor**; **HR 1.0–1.11 excellent … >1.6 very poor** — mirrors of each other since HR ≈ 1/(1 − CI/100).\\n\\n**The worked arithmetic** (this lesson's Tier C core): all three densities from stated mass/volumes; CI and HR; the identity check; class assignment from the table.`,
      },
      {
        kind: 'FORMULAS',
        body: `**The density family**\\n\\n$$\\n\\rho_t = \\frac{m}{V_{true}}, \\quad \\rho_b = \\frac{m}{V_{bulk}}, \\quad \\rho_{tap} = \\frac{m}{V_{tapped}}\\n$$\\n\\n**Carr index and Hausner ratio**\\n\\n$$\\nCI = \\frac{\\rho_{tap} - \\rho_b}{\\rho_{tap}} \\times 100\\%, \\qquad HR = \\frac{\\rho_{tap}}{\\rho_b}\\n$$\\n\\n**Ordering and identity**\\n\\n$$\\n\\rho_t \\ge \\rho_g \\ge \\rho_{tap} \\ge \\rho_b, \\qquad HR = \\frac{1}{1 - CI/100}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the family.** Stated: m = 60 g; V(bulk) = 50 mL; V(tapped) = 42 mL; V(true) = 40 mL. ρb = 60/50 = **1.20 g/mL**; ρtap = 60/42 ≈ **1.429 g/mL**; ρt = 60/40 = **1.50 g/mL**. Ordering holds ✓ (1.50 ≥ 1.429 ≥ 1.20).\\n\\n**Example 2 — flow proxies.** CI = (1.429 − 1.20)/1.429 × 100 = 0.229/1.429 × 100 ≈ **16.0%** → "good" (16–20). HR = 1.429/1.20 ≈ **1.19** → "good" band per the mirrored table. Identity check: 1/(1 − 0.16) = 1/0.84 ≈ 1.19 ✓.\\n\\n**Example 3 — class boundary.** Another powder: ρb = 0.80, ρtap = 1.20 g/mL. CI = 0.40/1.20 = **33.3%** → "poor" (26–35); HR = 1.50 → poor band ✓. Such a powder needs granulation or glidant help (the pct-34 handover).\\n\\n**Example 4 — porosity bridge.** Same data as Ex1: ε = 1 − ρb/ρt = 1 − 1.20/1.50 = **20%** — the 33-5 identity in action.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can a powder not have one density — what does each volume exclude?\\n2. m = 45 g, V(bulk) = 36 mL, V(tapped) = 30 mL — ρb, ρtap, CI, HR, and the class. (1.25; 1.5; 16.7%; 1.2; good.)\\n3. Which two boundaries separate "excellent" from "very poor" on each scale? (CI 15/35+; HR ~1.11/1.6+.)\\n4. Prove the identity HR = 1/(1 − CI/100) from the definitions.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `One mass, three volumes, three densities — and the gap between poured and tapped betrays the powder's cohesion. Carr and Hausner compress it to a number; the table speaks.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-7',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Powder Flow',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Powder flow** is the bulk-solid behaviour this topic owns (the disambiguation from Batch 35's liquid-flow discipline made explicit): how freely granular material moves, from free-flowing sand to solid cake. Whether a powder can be filled, fed, mixed, or tableted at all is a flow question first.\\n\\n**The forces in play** (the A-level bridge): **cohesion** — particle-to-particle attraction (van der Waals, moisture bridges, electrostatics — the pct-31 surface lessons' cousins) which grows devastatingly effective as particles shrink (surface area 33-4 scales it); **friction** and **mechanical interlocking** — shape (33-3) and roughness gating movement.\\n\\n**What makes a powder flow well**: larger particles (gravity outvotes cohesion), round smooth shapes, low moisture, narrow-ish distributions that pack without bridging, glidants (the pct-3 excipient canon, named). **What ruins it**: fine micronised powders (33-4's cost column), angular needles (33-3), humidity (liquid bridges), and broad distributions whose fines jam the voids.\\n\\n**How flow is measured** (named, with 33-8 as the bedside test): direct shear cells and avalanche/flow-through-orifice methods — instrument canon; the **Carr index and Hausner ratio from 33-6** as the standard proxies; **angle of repose (33-8)** as the quick screen.\\n\\n**The arithmetic this lesson carries** (Tier C core): the flow-rate calculation family — mass per time through a stated orifice — and the cohesion-vs-gravity scaling argument computed concretely (why halving size multiplies cohesion-to-weight).\\n\\n**Consequences map**: poor flow → weight variation in tablets/capsules (pct-35/36, named), segregation in mixes (pct-34-4's canon), arching in hoppers (named). The remediation canon is pct-34's technique.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Flow rate through an orifice** (stated-condition mass flow)\\n\\n$$\\n\\text{flow rate} = \\frac{m}{t} \\quad (\\text{g/s})\\n$$\\n\\n**Cohesion-to-weight scaling** (sphere of diameter d)\\n\\n$$\\n\\frac{\\text{cohesion}}{\\text{weight}} \\propto \\frac{d^2}{d^3} = \\frac{1}{d}\\n$$\\n\\n**Proxies** (from 33-6)\\n\\n$$\\nCI, \\ HR, \\ \\theta_r\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — orifice flow rate.** Stated: 150 g discharged in 25 s. Flow rate = 150/25 = **6.0 g/s**. A second powder takes 60 s: 2.5 g/s — less than half; the number IS the flowability verdict.\\n\\n**Example 2 — the 1/d scaling.** Halve particle size: cohesion/weight doubles (0.5 µm powder behaves ~10× "stickier" per unit mass than a 5 µm one by this scaling — stated as the trend, not a constant).\\n\\n**Example 3 — proxy synthesis.** Powder A: CI 12% (excellent), θr 28° (free-flowing, 33-8's table) — flows; Powder B: CI 33% (poor), θr 48° (very poor) — will bridge in the hopper; the verdicts agree, as they should.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three force families gating powder flow.\\n2. 220 g in 44 s — flow rate? (5.0 g/s.)\\n3. Why does cohesion outvote gravity as size shrinks — the scaling in one line?\\n4. Powder A: CI 12%, θr 28°; Powder B: CI 33%, θr 48° — verdicts, and do they agree?\\n5. Which downstream defects does poor flow cause, and whose canon owns the fixes?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Cohesion votes per surface, gravity votes per volume — small powders vote cohesion. Orifice seconds, Carr numbers, and repose angles all testify; when they agree, believe them.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-8',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Angle of Repose',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pour a powder into a heap: it stops spreading at a characteristic slope. The **angle of repose** (θr) is the angle of that free-standing heap to the horizontal — flowability's simplest bedside test, and the quantitative child this block treats as such.\\n\\n**The physics in one line**: at the repose angle, the downslope pull of gravity on a surface grain exactly balances the friction+cohesion holding it — the heap is on the verge of sliding. Stickier powders hold steeper heaps.\\n\\n**Measuring it** (named, bounded): the fixed-funnel method (pour through a funnel, measure the cone), the fixed-bed/tilting methods — instrument canon; the 200L skill is the arithmetic and the classification table.\\n\\n**The classification table** (tabulated convention, stated as such — the standard pharmacopeial-style bands):\\n\\n| θr | Flow behaviour |\\n|---|---|\\n| 25–30° | Excellent (very free flow) |\\n| 31–35° | Good |\\n| 36–40° | Fair (passable) |\\n| 41–45° | Passable but cohesion evident / poor-ish |\\n| 46–55° | Poor |\\n| >55° | Very poor (cohesive, likely to bridge) |\\n\\n**The arithmetic** (this lesson's Tier C core): from a stated heap height and radius, **tan θr = h/r** — solve θr, classify against the table, and run the reverse (predict heap geometry from a stated θr).\\n\\n**The honest limits** (what makes it a screen, not a verdict): the angle depends on HOW the heap was formed (pour height, moisture pickup mid-test) and consolidates only the surface grain's story — it ignores consolidated bulk behaviour that shear cells catch; hence its role as the quick first look, with Carr/HR (33-6) and orifice rate (33-7) confirming.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Angle of repose from heap geometry**\\n\\n$$\\n\\tan\\theta_r = \\frac{h}{r} \\quad\\Longrightarrow\\quad \\theta_r = \\arctan\\left(\\frac{h}{r}\\right)\\n$$\\n\\n**Reverse (predicted heap geometry)**\\n\\n$$\\nh = r \\tan\\theta_r\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — classify a heap.** Stated: cone height h = 3.0 cm, radius r = 4.5 cm. tan θr = 3.0/4.5 = 0.667 → θr = arctan(0.667) ≈ **33.7°** → **Good** (31–35°).\\n\\n**Example 2 — a sticky powder.** h = 6.0 cm, r = 4.0 cm: tan θr = 1.50 → θr ≈ **56.3°** → **Very poor** (>55°) — expect bridging; granulation territory (pct-34's handover).\\n\\n**Example 3 — reverse.** A powder with θr = 30° poured onto a 6 cm radius: heap height = 6 × tan 30° = 6 × 0.577 ≈ **3.5 cm**.\\n\\n**Example 4 — sanity cross-check.** Ex1's powder later gives CI ≈ 18% (33-6, "good") — the two screens agree; the habit of pairing them is the lesson.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the angle of repose physically (what balance holds the heap?).\\n2. h = 5.0 cm, r = 5.0 cm — θr and class? (45°; passable/poor-ish band.)\\n3. θr = 40°, r = 8 cm — predicted heap height? (8 × 0.839 ≈ 6.7 cm.)\\n4. Why is the angle a screen rather than a verdict — two honest limits?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The heap stops where friction and gravity tie: tan θr = h/r, and the table turns degrees into a flow verdict. A first look — pair it with Carr before you trust it.`,
      },
    ],
  },
  {
    nodeId: 'pct-33-9',
    courseId: 'pct-201',
    topicId: 'pct-33',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Significance',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing map: what the whole block is FOR — the wiring from particle properties to products.\\n\\n**Dissolution and bioavailability**: smaller size and greater surface area speed dissolution (pct-29-5's canon) — the reason poorly soluble drugs are micronised, and the Noyes–Whitney family's (pct-29-9) surface-area term in action.\\n\\n**Suspensions**: particle size sets sedimentation speed (Stokes, pct-38-3) and is the lever behind flocculation choices (pct-38-4) and vehicle viscosity (pct-38-5).\\n\\n**Tablets and capsules**: flow (33-7) decides whether a die fills uniformly → weight/content uniformity (pct-35/36, named); porosity and density (33-5/33-6) decide compaction behaviour (pct-35's canon); size-reduction and mixing practice are pct-34-3/34-4's technique.\\n\\n**Mixing and segregation**: broad distributions and density mismatches segregate — content uniformity risk in every divided powder (pct-34-4's canon, fed by 33-2's spread data).\\n\\n**Surface phenomena**: adsorption capacity (pct-31-5), wetting demand (pct-31-3), and solubilisation interplay (pct-31-6) all price themselves against the surface area computed here.\\n\\n**The design habit this topic installs**: measure the particle properties FIRST (size, distribution, shape, surface, density, flow), then predict the product's behaviour — not trial-and-error. The block's numbers are small (unit ladders, ratios, one sphere formula, one tangent) but the consequences are industrial.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dissolution/bioavailability: surface area is the lever (pct-29-5/29-9 canon).\\n- Suspensions: size sets Stokes sedimentation; flocculation/viscosity consume it (pct-38-3/4/5).\\n- Tablets/capsules: flow → uniformity; porosity/density → compaction (pct-35/36).\\n- Mixing: distribution spread and density mismatch drive segregation (pct-34-4).\\n- Design habit: measure properties, then predict behaviour — the block's whole point.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace one property → consequence path for four product classes.\\n2. Why does micronising help dissolution but threaten tableting?\\n3. Which two 33-lessons feed segregation risk, and whose canon owns the fix?\\n4. State the design habit and where each measurement of this block feeds it.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Size, spread, shape, surface, voids, density, flow — seven measurements, every product's fate. Micromeritics is pharmacy's smallest science with its largest reach.`,
      },
    ],
  },
];
