import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-38: Suspensions.
 *
 * Batch 41: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–37
 * top-level topic convention) plus its nine children pct-38-1…38-9
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-38 has no surviving Phase-1 tier record; the
 * quantitative children — 38-3 Sedimentation (Stokes' law, the
 * CANONICAL home of the equation) and 38-4 Flocculated/Deflocculated
 * Systems (sedimentation volume F and degree of flocculation β) — are
 * Tier C under the established calculation-lesson convention; the
 * topic and remaining children are Tier B. Convention-derived, flagged
 * pending confirmation.
 *
 * Scope discipline: THIS topic owns disperse-solid formulation.
 * Stokes' law lives HERE canonically (pct-32 referenced the name
 * without the equation — respected); particle-property SCIENCE is
 * pct-33's (consumed as verdicts in 38-2); viscosity SCIENCE is
 * pct-32's (consumed in 38-5 — no Newton's-law re-teaching); wetting/
 * contact-angle SCIENCE is pct-31-3/31-4's (consumed — but wetting-
 * agent SELECTION is canonically HERE per reviewer instruction);
 * surfactant classes pct-31-6; preservative chemistry pct-37-8
 * (referenced); general stability science pct-43 (38-8 keeps
 * suspension-specific behaviour); levigation technique pct-34-3
 * (referenced in 38-7); packaging canon pct-28 (applied). All worked
 * values stated illustrative, independently verified.
 */
export const pct201SuspensionsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-38',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'topic',
    title: 'Suspensions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **suspension** is what you formulate when the drug refuses to dissolve: solid particles dispersed in a liquid — insoluble, unstable-in-solution, or bad-tasting drugs get a liquid form anyway. The formulation problem inverts: the solution fight was keeping drug dissolved; the suspension fight is keeping particles DISPERSED and REDISPERSIBLE while they inevitably settle.\\n\\n**The map.** (1) **Definition and classification** — the form's family tree (38-1). (2) **Particle-size considerations** — the pct-33 verdicts applied (38-2). (3) **Sedimentation** — Stokes' law's canonical home (38-3, Tier C). (4) **Flocculated vs deflocculated** — the two settling philosophies (38-4, Tier C). (5) **Suspending agents** — the viscosity tool (38-5). (6) **Wetting agents** — the surface tool (38-6). (7) **Preparation** — the bench and the plant (38-7). (8) **Stability** — the suspension-specific enemies (38-8). (9) **Packaging and labelling** — the SHAKE WELL contract (38-9).\\n\\n**Boundaries policed.** Particle science is pct-33's (consumed); flow/viscosity science is pct-32's (consumed — no law re-taught); wetting/contact-angle science is pct-31's (consumed; agent selection lives here); preservative chemistry is pct-37-8's (referenced); general stability science is pct-43's (38-8 keeps suspension behaviour); levigation is pct-34-3's (referenced).\\n\\n**Standing discipline**: worked values stated illustrative, independently verified; no invented specifications.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Suspension = insoluble solid dispersed in liquid — for drugs that cannot be solutions.\\n- Map: definition → size → sedimentation (38-3, Stokes home) → flocculation (38-4) → suspending agents → wetting agents → preparation → stability → packaging.\\n- The inverted fight: disperse + redispersible, not dissolved.\\n- pct-33/32/31 consumed; wetting-agent selection canonical HERE; preservative chemistry pct-37-8's.\\n- SHAKE WELL is the form's contract with the patient.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why invert the formulation fight for insoluble drugs — solution vs suspension logic?\\n2. Recite the map and the lesson owning each station.\\n3. Which canons are consumed here, and which selection is canonical to this block?\\n4. Why does 38-3 own Stokes' law rather than pct-32?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The drug will not dissolve — so suspend it, settle it gently, and make every pour the same after one good shake. This is dispersion engineering.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-38', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-38-1',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Definition and Classification',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Definition**: a suspension is a coarse dispersion — insoluble solid particles (typically micrometre-scale, the pct-33-1 vocabulary consumed) distributed throughout a liquid medium, two phases by nature.\\n\\n**Why choose the form** (the formulation reasons): the drug is **insoluble** at dose (the solubilisation toolbox of 37-7 exhausted or unsuitable); **unstable in solution** (hydrolysis proceeds dissolved — the dry particle is the stabiliser, pct-43's logic applied); **tastes bad dissolved but not suspended** (dissolved bitter molecules hit all taste buds; particles bind partially and can be coated/flavoured — the paediatric logic); **dose volume** (antacids by the gram cannot dissolve in a spoonful); **controlled release** (slow-dissolving particles extend action — the dissolution-limited design, pct-29's canon applied).\\n\\n**Classification axes** (the family tree):\\n\\n*By route/state*: **oral suspensions** (antibiotics, antacids — the classic), **topical/lotions** (external, evaporative cooling + deposition), **injections** (depot suspensions — the sterility boundary named, PHM 201's canon for the sterilisation), **ophthalmic drops** (sterile — pct-42's block owns requirements), **dry powders for reconstitution** (the antibiotic-dry-syrup pattern: stored dry for stability, reconstituted by the pharmacist — the two-shelf-life design, pct-43-10's BUD echo).\\n\\n*By flocculation state*: **flocculated** vs **deflocculated** — the settling philosophies (38-4's lesson).\\n\\n**The physical truth the class lives with** (the pedagogical spine): suspensions are THERMODYNAMICALLY unstable (particles settle; surface energy drives growth) — formulation buys KINETIC stability: slow the settling, keep the cake soft, make the shake restore everything. Every lesson here is one clause of that purchase.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Coarse dispersion: insoluble solids in liquid — two phases, micrometre particles (pct-33 vocabulary).\\n- Why: insolubility, solution-instability, taste, dose volume, release control.\\n- Routes: oral, topical/lotions, injections (sterility boundary named), ophthalmic (pct-42), dry-for-reconstitution.\\n- Flocculated vs deflocculated: the two settling philosophies (38-4).\\n- Thermodynamic instability is a fact; formulation buys kinetic stability.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give three reasons a drug becomes a suspension instead of a solution.\\n2. Why does suspension sometimes IMPROVE taste — the mechanism?\\n3. Name the five route classes and the boundary each crosses.\\n4. Why is the dry-for-reconstitution pattern a stability design — two shelf lives?\\n5. State the thermodynamic-vs-kinetic distinction in one sentence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Insoluble is not unformulatable: suspend, settle slowly, shake to restore. Solutions promise permanence; suspensions promise recovery.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-2',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Particle-Size Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Particle size is the suspension's master variable — the pct-33 science consumed here as formulation verdicts.\\n\\n**Smaller settles slower** (the d² verdict, quantified properly in 38-3): the Stokes argument says sedimentation rate scales with the diameter SQUARED — halving size quarters the settling rate. The 38-3 lesson computes it; this lesson uses it.\\n\\n**But smaller is not free** (the trade ladder): *dissolution/bioavailability* rises (pct-33-4's ladder — the GOOD direction for poorly soluble drugs); *cohesion rises faster than gravity* (pct-33-7's scaling — ultrafines cake hard); *surface area demands wetting and preservative* (38-6/37-8's echoes); *electrostatic/steric complexity grows* (the colloid science boundary named). The formulator's target: the SMALLEST size that settles acceptably without caking — typically micrometre-scale (stated as the common register), achieved by controlled milling (pct-34-3's technique referenced).\\n\\n**The distribution matters too** (pct-33-2's canon consumed): a NARROW distribution settles uniformly (a clean boundary — pretty but cake-prone); a BROAD distribution packs denser (fines fill coarse voids — the packing argument pct-33-5's echo) — but broad distributions SEGREGATE in manufacture (34-4's enemy). The compromise: controlled, not wild, spread.\\n\\n**Crystal growth — size is not static** (the 38-8 preview): small particles dissolve preferentially and redeposit on large ones (the Ostwald-ripening mechanism named) — the distribution DRIFTS coarse on storage; the fix is narrow distributions + stabilised solubility (38-8's lesson).\\n\\n**The dose-uniformity link**: dose per spoonful = concentration × volume, but particles must stay distributed for that to hold — size + viscosity + flocculation design are the uniformity triad (the 38-3/38-5/38-4 lessons wired together).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Settling ∝ d²: halve size, quarter the rate (38-3 computes; 38-2 uses).\\n- Smaller's prices: cohesion (caking), surface demands, colloid complexity.\\n- Target: smallest size that settles acceptably without caking (µm register; pct-34-3 referenced).\\n- Distribution: narrow = uniform boundary + cake risk; broad = dense packing + segregation.\\n- Ostwald ripening: distributions drift coarse — 38-8's fix.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the d² verdict and which lesson quantifies it.\\n2. Give three prices of going too fine.\\n3. Argue narrow vs broad distribution — one advantage and one risk each.\\n4. Describe Ostwald ripening's mechanism and direction of drift.\\n5. Name the uniformity triad and its three lessons.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Small particles float longer and dose truer — until they cake. Choose the smallest size the cake will forgive, and keep the spread controlled.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-3',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Sedimentation',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Sedimentation** is the suspension's clock: how fast particles fall. The canonical equation — **Stokes' law** — lives HERE (pct-32 named it and handed it home; the lesson of record is this one).\\n\\n**The prerequisite picture** (the A-level bridge): a particle falling through a viscous liquid is a tug-of-war — **gravity** (weight minus buoyancy, set by the DENSITY DIFFERENCE) pulls down; **drag** (friction through the viscous medium) pulls back. At small particle sizes the fall quickly reaches terminal velocity — the balance point — and Stokes' law prices it.\\n\\n**The law** (for small spheres, dilute systems — the stated assumptions):\\n\\n$$\\nv = \\frac{d^2\\,(\\rho_s - \\rho_f)\\,g}{18\\,\\eta}\\n$$\\n\\n*Variables and units*: v = terminal velocity (m/s); d = particle diameter (m); ρs − ρf = density difference, solid minus fluid (kg/m³); g = gravitational acceleration (9.81 m/s²); η = dynamic viscosity (Pa·s). Dimensional check: m²·kg/m³·m/s² / Pa·s = (kg/(m·s²)) / (kg/(m·s)) = m/s ✓.\\n\\n**Reading the levers** (the formulation consequences):\\n\\n*Diameter SQUARED* — the dominant lever: halve d, quarter v; the 38-2 verdict made arithmetic.\\n\\n*Density difference* — reduce ρs − ρf and the fall slows: the formulator's subtle tool (density-adjusting the vehicle with heavy co-solvents/sugars named as the technique class).\\n\\n*Viscosity* — DOUBLE η, HALVE v: the suspending-agent lever (38-5's tool priced).\\n\\n**The worked arithmetic** (this lesson's Tier C core): a full Stokes computation; the d² and η scalings; a shelf-time estimate.\\n\\n**The honest limits** (named): real suspensions are CONCENTRATED (particles hinder each other — the equation overpredicts v), particles are not spheres (shape factors — pct-33-3's echo), and Brownian motion jumbles the smallest particles. Stokes prices the IDEAL; formulation uses it as a compass, not a ruler.\\n\\n**Boundary honoured**: the equation is taught ONCE in this course — here; pct-32 and pct-33 reference it by name.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Stokes' law (terminal velocity of a small sphere)**\\n\\n$$\\nv = \\frac{d^2\\,(\\rho_s - \\rho_f)\\,g}{18\\,\\eta}\\n$$\\n\\n**Scalings**\\n\\n$$\\nv \\propto d^2, \\qquad v \\propto \\frac{1}{\\eta}, \\qquad v \\propto (\\rho_s - \\rho_f)\\n$$\\n\\n**Shelf-time estimate** (height h to clear)\\n\\n$$\\nt = \\frac{h}{v}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the full computation.** Stated: d = 5 µm (5e−6 m), ρs = 1500, ρf = 1000 kg/m³ (Δρ = 500), η = 0.1 Pa·s.\\n\\n$$\\nv = \\frac{(5\\times10^{-6})^2 \\times 500 \\times 9.81}{18 \\times 0.1} = \\frac{1.226\\times10^{-7}}{1.8} \\approx 6.8\\times10^{-8}\\ \\text{m/s}\\n$$\\n\\nPer day: 6.81e−8 × 86400 ≈ **5.9 mm/day** — a 10-cm suspension column clears in ≈ 17 days at this viscosity. (Stated as the ideal-law estimate; real systems settle slower — hindered settling.)\\n\\n**Example 2 — the d² lever.** Same system, d = 25 µm: v ×(25/5)² = ×25 → **≈ 1.7e−6 m/s ≈ 147 mm/day** — the 25 µm particle crosses the bottle in a day; size control is everything.\\n\\n**Example 3 — the viscosity lever.** Double η to 0.2 Pa·s: v halves → **≈ 2.9 mm/day** for the 5 µm particle — the 38-5 suspending-agent purchase priced.\\n\\n**Example 4 — check question key.** d = 2 µm, Δρ = 500, η = 0.1: v = (4e−12 × 500 × 9.81)/1.8 ≈ **1.1e−8 m/s ≈ 0.94 mm/day** — near-a-month for 10 cm: why fine particles + moderate viscosity work.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State Stokes' law with every variable's unit, and verify the dimensions.\\n2. d = 10 µm, Δρ = 500, η = 0.1 Pa·s — v, and its rate vs the 5 µm case? (4×: ≈ 23.6 mm/day.)\\n3. Why is the equation an over-estimate in real bottles — two honest limits?\\n4. Which lever is dominant, and what does halving it do?\\n5. How can the vehicle itself slow sedimentation without viscosity — the subtle tool?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Gravity drags, drag resists: v = d²Δρg/18η. Size squared is the master lever, viscosity the purchasable one — and the law is a compass, not a stopwatch.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-4',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Flocculated and Deflocculated Systems',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Particles WILL settle (38-3's law is not negotiable). The design choice is HOW they settle: **deflocculated** (particles settle separately, individually) or **flocculated** (particles gather into loose clusters — flocs — and settle as flocks). The two philosophies trade speed against redispersibility.\\n\\n**Deflocculated**: each particle falls alone (Stokes' d per particle — slow), packs TIGHTLY as it lands (fine particles wedging into voids — the packing argument), and over time **cakes**: the individual particles bond into a hard, REDISPERSIBLE-NO-MORE mass. Settling is slow; the endgame is a rock.\\n\\n**Flocculated**: particles form loose, open clusters held by weak bridges (electrostatic/steric — the DLVO vocabulary named-and-bounded); flocs fall FAST (large effective diameter — the d² penalty paid deliberately) but land as a **porous, high-volume sediment** that does not cake: a shake restores it completely.\\n\\n**The controlled-flocculation design** (the classic resolution): accept fast settling to a HIGH-volume, soft, redispersible sediment — often steered with flocculating agents (electrolytes compressing the double layer — named; viscosity maintained separately by 38-5's agents, since flocculation itself does not raise viscosity).\\n\\n**The metrics** (this lesson's Tier C core — the quantitative vocabulary):\\n\\n$$\\nF = \\frac{V_u}{V_0}, \\qquad \\beta = \\frac{F}{F_\\infty}\\n$$\\n\\n*F* (sedimentation volume) = final sediment height over initial height: F = 1 means NO visible settling (the flocculated ideal); *F∞* = the DEFLOCCULATED system's final volume (its packed-down endgame); *β* (degree of flocculation) = F/F∞ — β = 1 means the flocculated system settled no worse than deflocculated; **β > 1** quantifies the flocculation benefit.\\n\\n**The worked arithmetic**: F and β from stated heights; the comparison verdict.\\n\\n**The choice discipline**: most acceptable formulations are CONTROLLED-FLOCCULATED + viscosity-supported — fast to a soft cake that the shake erases, with the pour behaviour bought from 38-5.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Sedimentation volume**\\n\\n$$\\nF = \\frac{V_u}{V_0}\\n$$\\n\\n**Degree of flocculation**\\n\\n$$\\n\\beta = \\frac{F}{F_\\infty}\\n$$\\n\\n**Reading them**: F → 1 is the ideal (no visible settling); β > 1 quantifies the flocculation advantage over the deflocculated endgame.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — F.** Stated: initial height V₀ = 10 cm; flocculated system settles to V(u) = 7 cm. **F = 7/10 = 0.70** — the sediment occupies 70% of the original volume: high, soft, redispersible.\\n\\n**Example 2 — F∞ and β.** The same powder DEFLOCCULATED packs to 2 cm of the original 10 cm: **F∞ = 0.20**. Degree of flocculation: **β = F/F∞ = 0.70/0.20 = 3.5** — the flocculated system's sediment is 3.5× the deflocculated volume: it "settles worse" and re-disperses better — the deliberate trade.\\n\\n**Example 3 — the ideal reading.** A well-flocculated product shows V(u) = 9.8 cm of 10 cm: **F = 0.98** — nearly no visible settling; if its F∞ were 0.25, β = 3.92.\\n\\n**Example 4 — the verdict key.** F = 0.15 after one week with a hard plug that resists shaking: deflocculated endgame — the cake crime; the fix direction is controlled flocculation (38-4) + viscosity support (38-5).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast the two settling philosophies on speed, sediment, and redispersibility.\\n2. Define F, F∞, and β, and state what β > 1 certifies.\\n3. V₀ = 12 cm, V(u) = 9 cm, deflocculated V(u) = 3 cm — F, F∞, β? (0.75; 0.25; 3.0.)\\n4. Why does flocculation RAISE settling speed — the d² argument?\\n5. What is the classic combined design, and which two lessons supply its halves?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Settle fast into a soft, tall, forgiving bed: flocculation pays Stokes' speed tax and buys the shake-back. F = 1 is the dream; β > 1 is the proof.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-5',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Suspending Agents',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Suspending agents** are the viscosity purchase — hydrocolloids and clays that thicken the vehicle so Stokes' η-lever (38-3's law) works in the formulator's favour.\\n\\n**The mechanism** (the pct-32 science consumed): raise the vehicle's viscosity and sedimentation slows proportionally (v ∝ 1/η). The IDEAL agent is the shear-thinning/thixotropic kind — pct-32-5/32-7's property: **thick on the shelf** (low shear, particles held) and **thin on the pour** (high shear, doses cleanly). The agent's job description in one line: hold the particles, release the spoon.\\n\\n**The agent classes** (named with their selection notes):\\n\\n*Cellulose derivatives* — CMC (carboxymethylcellulose), methylcellulose, HPMC: the workhorses; hydration discipline matters (lump-avoidance — the dispersion technique of 38-7); CMC's ionic sensitivity named.\\n\\n*Natural gums* — acacia, tragacanth, xanthan: xanthan the modern favourite (pseudoplastic, pH/ionic tolerant — the robust choice); natural gums carry microbial-load honesty (the source material — preservative demand rises, 37-8's echo).\\n\\n*Clays* — bentonite/magnesium aluminium silicate class: thixotropic network builders; pH/ion sensitivities named.\\n\\n*Synthetic polymers* — carbomer-class (gel register, pH-activated — named).\\n\\n**Selection criteria** (the checklist): target viscosity (enough to slow settling, not enough to kill pouring — the 38-3 arithmetic prices the trade), pH compatibility with the drug, ionic tolerance, hydration behaviour, microbial burden, dose-feel (mouth-feel honesty).\\n\\n**The honest costs**: too much viscosity = pouring/dosing errors and mouth-feel complaints (the 38-3 lever over-pulled); hydration mistakes = lumpy products; some agents interact with the drug or preservatives (the 37-8 enemies-within echo).\\n\\n**The combined design** (the block's spine): flocculation (38-4) chooses the sediment; viscosity (this lesson) chooses the pace — together they buy the F → 1 dream.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mechanism: v ∝ 1/η — thicken the vehicle, slow the fall (38-3's lever priced).\\n- Ideal agent: shear-thinning/thixotropic — thick on shelf, thin on pour (pct-32-5/7 consumed).\\n- Classes: celluloses (CMC/MC/HPMC), gums (xanthan robust; natural gums' microbial honesty), clays (bentonite), synthetics (carbomer named).\\n- Selection: viscosity target, pH/ionic fit, hydration, microbial burden, mouth-feel.\\n- Over-thickening = dosing errors — the lever has a maximum sensible pull.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the mechanism and the ideal rheology for a suspending agent.\\n2. Why is xanthan the robust modern choice — three tolerances?\\n3. What is the hydration discipline and its failure?\\n4. Name two agent-class honest costs.\\n5. How do 38-4 and 38-5 divide the design?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Borrow viscosity from cellulose, gum, or clay: hold the particles on the shelf, release them at the spoon. Over-thicken and the patient pays in spoonfuls.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-6',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Wetting Agents',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Before particles can be suspended, they must be **wetted** — and hydrophobic powders fight water. The wetting/contact-angle SCIENCE is pct-31-3/31-4's canon (consumed); **wetting-agent SELECTION for suspensions is canonically THIS lesson's** (the reviewer-fixed home).\\n\\n**The problem** (the science consumed in one line): a hydrophobic powder presents a HIGH contact angle — the vehicle beads off, the powder floats in clumps (the "fish-eyes" image), air entombs the particles. Wetting means driving the contact angle DOWN so the liquid spreads over every particle and displaces the air.\\n\\n**The tool classes** (the selection canon):\\n\\n*Surfactants* (the classic wetting agents): adsorb at the particle–liquid interface, cut surface tension and the contact angle (pct-31-6's classes consumed; the NON-IONIC class — polysorbates etc. — is the usual suspension choice: pH-robust, low reactivity with the drug, and gentle on the preservative system — the selection reasoning this lesson owns). Concentrations: BELOW the CMC is sufficient for WETTING (monolayer adsorption at the interface — the CMC is the solubilisation threshold, pct-31-6's canon applied correctly: wetting needs surface coverage, not micelles).\\n\\n*Hydrophilic solvents* (the non-surfactant route): glycerol/propylene glycol/ethanol pre-mixed with the powder lower the interfacial tension without a surfactant — the classic extemporaneous wetting paste (38-7's technique linked).\\n\\n**The levigation link**: the bench technique for wetting IS levigation (pct-34-3's canon referenced) — the wetting agent/solvent + mortar + shear make the smooth paste that starts every well-made suspension.\\n\\n**The selection trade-offs** (what this lesson arbitrates): surfactant class vs drug/vehicle/preservative compatibility (the 37-8 enemies-within echo — some surfactants complex or inactivate preservatives); taste/foaming honesty (ionic surfactants foam and taste — the paediatric penalty); the over-dose honesty (excess surfactant = micelles + irritation + foam — more is not better).\\n\\n**The boundary honoured**: pct-31 owns surface science; this lesson owns the FORMULATION choice — which tool, how much, and what it costs.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Wetting = drive the contact angle down; displace entrapped air (pct-31-3/4 consumed).\\n- Tool classes: surfactants (non-ionic usually chosen — pH-robust, gentle) + hydrophilic solvents (the paste route).\\n- Wetting needs BELOW-CMC coverage: monolayer at the interface, not micelles (pct-31-6 applied).\\n- Levigation (pct-34-3) is the wetting technique — paste before dilution.\\n- Trades: preservative compatibility, foam/taste (ionic penalty), over-dose honesty.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the wetting goal in contact-angle language, and which canon owns the science.\\n2. Why is BELOW-CMC correct for wetting — what is the CMC for, then?\\n3. Why do formulators usually pick non-ionics here — three reasons?\\n4. Describe the solvent-paste route and its technique link.\\n5. Name the three selection trade-offs this lesson arbitrates.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Get the liquid onto every particle before you dilute anything: a non-ionic trace or a glycerol paste kills the fish-eyes. Wetting is surface coverage — not bubble bath.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-7',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Preparation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Suspension preparation is ORDER: wet first, dilute gradually, hydrate properly, deaerate gently — each stage prevents a named failure.\\n\\n**The bench sequence** (the compounding canon):\\n\\n1. **Wet the powder** — levigate with the wetting agent/solvent paste (38-6's tools, pct-34-3's technique): smooth, lump-free, air-free paste.\\n\\n2. **Dissolve the soluble adjuncts** — preservatives, colourants, soluble drugs where formulated (the aqueous phase prepared separately).\\n\\n3. **Add vehicle IN PORTIONS** — the paste thins stage by stage (each addition fully incorporated before the next — the shock-prevention discipline; dumping the whole vehicle re-creates the clumps the paste eliminated).\\n\\n4. **Add the suspending agent properly hydrated** — the hydration discipline (disperse the powder INTO the liquid with high shear, or pre-slurry in the non-solvent — the lump-avoidance craft; the 38-5 class notes carried).\\n\\n5. **Make to volume, deaerate gently** (entrapped air is a dosing error and an oxidation partner — pct-43-8's echo), then **label SHAKE WELL** (38-9's contract).\\n\\n**The industrial register** (named-and-bounded): high-shear dispersers, colloid mills (the fine-register mill family from 34-3's list), homogenisers, and controlled-flocculation steps built into the process — the same order, mechanised.\\n\\n**The dry-for-reconstitution route** (the pattern from 38-1): granulate/dry the suspension as a powder (pct-34-8's principles referenced), package dry, reconstitute at dispensing — the two-life design (dry stable for shipping; reconstituted with its short BUD — pct-43-10's canon referenced; the counselling: shake, store per label, discard on time).\\n\\n**The order-failures catalogue** (why sequence matters): wetting skipped → floating clumps; vehicle dumped → fish-eyes return; agent added dry onto water → permanent lumps; shaken violently after making → foam that misleads doses. Each failure names its stage.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sequence: wet (paste) → soluble adjuncts → vehicle in portions → hydrated agent → to volume, deaerate, label.\\n- Each addition fully incorporated — shock-prevention discipline.\\n- Agent hydration: disperse INTO liquid or pre-slurry — never dry-onto-water.\\n- Industrial: high-shear dispersers, colloid mills, homogenisers (named-and-bounded).\\n- Dry-for-reconstitution: two-life design (pct-34-8 referenced; BUD pct-43-10).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five stages and the failure each prevents.\\n2. Why must the vehicle be added in portions — the failure language?\\n3. State the two correct hydration techniques and the wrong one.\\n4. Why deaerate, and which two reasons?\\n5. Explain the two-life design of reconstitution products.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Paste, then thin it bit by bit, hydrate the gum right, deaerate, and tell the patient to shake. Suspensions are made in order — the order IS the product.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-8',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Suspension stability is the block's enemies list — the general stability science is pct-43's (referenced); THIS lesson owns the suspension-specific behaviours.\\n\\n**Caking** (enemy one — the form's cardinal sin): the deflocculated endgame (38-4's rock). Defences: controlled flocculation (38-4), viscosity support (38-5), and the packaging habit of storage upright/inverted rotation named as practice (the sediment's contact time managed).\\n\\n**Crystal growth / Ostwald ripening** (enemy two): small particles dissolve preferentially and redeposit on large ones (38-2's preview, developed): the distribution drifts coarse, the big crystals grow, texture and dose uniformity degrade. Defences: narrow initial distribution (pct-33-2 consumed), solubility flatness (polymorph/solvate consistency — the form discipline named; the pct-29 canon referenced), temperature steadiness (solubility swings drive the ripening cycles — the pct-43-5 echo).\\n\\n**Polymorphic transformation** (enemy three, named): a metastable polymorph converts on storage (solubility/shelf-life consequences — the pct-29/pct-43 boundary named).\\n\\n**Flocculation-state drift** (enemy four): the electrolyte/agent balance shifts (ionic contamination, agent degradation) — the flocs coalesce toward cake or the system deflocculates; the QC re-check habit.\\n\\n**Chemical/microbial stability** (the shared enemies, boundaries honoured): chemical degradation proceeds per pct-43's canon (hydrolysis/oxidation — the solution-pathway caution: the DISSOLVED fraction degrades faster, another reason suspension > solution for labile drugs); microbial growth is the 37-8 preservation duty (the preservative enemies-within echo: adsorption onto the very particles being preserved — pct-31-5's echo applied).\\n\\n**The QC frame** (named, bounded): sedimentation volume re-measured over time (F tracking — 38-4's metric as stability indicator), redispersibility tests, particle-size checks — the suspension's report card.\\n\\n**The design summary** (the block's synthesis): size controlled (38-2), settling priced (38-3), flocculation chosen (38-4), viscosity bought (38-5), wetting secured (38-6) — stability is the five lessons holding together on a shelf.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Caking: the deflocculated endgame — flocculation + viscosity + storage habits defend.\\n- Ostwald ripening: small dissolve, large grow — narrow distribution + solubility flatness + temperature steadiness defend.\\n- Polymorphic conversion named (pct-29/pct-43 boundary); flocculation drift = QC re-checks.\\n- Dissolved-fraction degrades faster — suspension beats solution for labile drugs (pct-43 referenced).\\n- F-tracking is the stability indicator (38-4's metric reused).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four suspension-specific enemies and one defence each.\\n2. Explain ripening end-to-end: mechanism, direction, three defences.\\n3. Why is the dissolved fraction a degradation liability?\\n4. What does F-tracking show, and which lesson defined F?\\n5. State the five-lesson synthesis of suspension design.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Cakes, ripens, transforms, drifts: a suspension ages on four fronts. Flocculate it, thicken it, keep it cool and narrow — then measure F and trust the shake.`,
      },
    ],
  },
  {
    nodeId: 'pct-38-9',
    courseId: 'pct-201',
    topicId: 'pct-38',
    nodeType: 'subtopic',
    title: 'Packaging and Labelling',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Suspension packaging applies the pct-28 canon to the form that must be RE-MIXED before every dose — the label is part of the dosage form.\\n\\n**The container**: **wide-mouth amber bottles** (the class standard: room for the dose, protection from light — pct-43-6's echo), **tight closures** (evaporation changes concentration — the dose-drift honesty), **adequate headspace** for the shake (the physical need: a full bottle cannot mix), **child-resistant closures** where required (pct-28's canon).\\n\\n**The label duties** (pct-28-6/7 applied, suspension accents): identity/strength PER 5 mL (the dose-basis discipline), batch + expiry (the traceability pair), and the SUSPENSION TRIO of instructions: **"SHAKE WELL BEFORE USE"** (the form's contract — the flocculated sediment must be re-dispersed or the first doses are supernatant and the last are rock), **storage statement** (cool/dry; per-product specifics — the pct-28-9 translation duty), and **"discard after …"** for reconstituted products (the BUD echo — pct-43-10 referenced; the after-opening decay honesty from 37-9 applied).\\n\\n**The counselling loop** (the dispensing craft): demonstrate the shake (a lazy swirl is not re-dispersion — the F = 1 promise kept by the patient's wrist), supply the measuring device (the 37-1 oral-syringe canon), explain the shake-store-discard trio, and for reconstituted products the water-quantity discipline (the pct-22 arithmetic referenced at reconstitution) and the label-reading duty.\\n\\n**The transport honesty**: vibration is shear (the pct-32 echo) and heat accelerates everything (pct-43's echo) — barrier packaging and cool, steady transport protect the design; the pharmacist's last-mile duty repeats.\\n\\n**The synthesis** (the block's close): the bottle carries the formulation's promises — SHAKE WELL is 38-4's flocculation, the storage line is 38-8's defences, the discard date is the two-life design — packaging is where the physics meets the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Container: wide-mouth amber, tight closure, shake headspace, CRC where required.\\n- Label trio: SHAKE WELL BEFORE USE + storage statement + discard-after (BUD echo).\\n- Strength stated PER 5 mL — the dose-basis discipline.\\n- Counselling: demonstrate the shake, supply the device, teach the trio.\\n- Transport: vibration is shear, heat accelerates — the last mile protects the design.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the bottle need headspace — the physical argument?\\n2. Recite the suspension label trio and the lesson each line protects.\\n3. Why must strength be stated per 5 mL?\\n4. What does a lazy swirl risk, in 38-4 language?\\n5. Name the two transport enemies and their canon echoes.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Amber bottle, room to shake, and three lines of instructions: SHAKE WELL, keep cool, discard on time. The label is the dosage form's last active ingredient.`,
      },
    ],
  },
];
