import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-32: Rheology and Viscosity.
 *
 * Batch 35: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–31
 * top-level topic convention) plus its eight children pct-32-1…32-8
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-32 has no surviving Phase-1 tier record; the
 * quantitative children — 32-1 Viscosity (coefficient/units), 32-2
 * Newtonian Flow (Newton's law of viscous flow), and 32-4 Plastic
 * Flow (Bingham yield value) — are Tier C under the established
 * calculation-lesson convention; the topic and remaining conceptual
 * children are Tier B. Convention-derived, flagged pending
 * confirmation.
 *
 * Scope discipline: THIS topic is the canonical home of flow and
 * deformation science. Viscosity DATA usage (suspending agents) is
 * pct-38-5's; Stokes' sedimentation law is pct-38-3's (only named
 * here); emulsion consistency application is pct-39's; semisolid
 * consistency consumption is pct-40's; pour-on veterinary products
 * are pct-20's (only referenced); powder flow is a DIFFERENT flow
 * (bulk solids — pct-33-7/34-6's canon, guarded against by an
 * explicit disambiguation); viscometer operating procedures are
 * instrument canon (named, bounded). All worked values are stated
 * illustrative values, independently verified.
 */
export const pct201RheologyLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-32',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'topic',
    title: 'Rheology and Viscosity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pour water and pour honey: both flow, but nothing about the two experiences is the same. **Rheology** is the science of flow and deformation — how materials respond when forced to move — and **viscosity** is its central quantity: a fluid's resistance to flow.\\n\\n**Why pharmacy needs it.** Nearly every liquid medicine is engineered to flow: syrups must pour, injections must pass needles, suspensions must pour easily yet hold particles suspended (pct-38's tension), emulsions and creams must spread yet stay in place (pct-39/40's tension). Rheology is the vocabulary in which those design choices are made.\\n\\n**The map.** (1) **Viscosity** — the property, its coefficient and units (32-1). (2) **Newtonian flow** — the simple, ideal case where viscosity is a constant (32-2). (3) **Non-Newtonian flow** — everything else, where viscosity changes with how hard you push (32-3): the three named behaviours — **plastic** (32-4), **pseudoplastic** (32-5), **dilatant** (32-6) — plus **thixotropy**, the time-dependent bonus property (32-7). (4) **Applications** (32-8).\\n\\n**A discipline the topic carries throughout**: "flow" here means CONTINUOUS LIQUID flow. The other pharmaceutical "flow" — powders tumbling as bulk solids (pct-33-7/34-6's canon) — shares the word but not the science; the disambiguation is made explicit in 32-1 and guarded in the applications.\\n\\n**Standing discipline**: worked values are stated illustrative values, independently verified; viscometer procedures are instrument canon, named and bounded.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Rheology = flow and deformation; viscosity = resistance to flow — the central quantity.\\n- Map: viscosity (32-1) → Newtonian (32-2) → non-Newtonian (32-3): plastic/pseudoplastic/dilatant (32-4/5/6) + thixotropy (32-7) → applications (32-8).\\n- Liquid flow here ≠ powder flow (pct-33-7/34-6) — same word, different science.\\n- Suspension/emulsion/semisolid formulation choices are downstream consumers (pct-38/39/40).\\n- Worked values stated and verified; viscometer procedures bounded.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define rheology and viscosity in one sentence each.\\n2. Name the map regions and the lesson owning each flow type.\\n3. Which two later topics' design tensions consume this science?\\n4. What other pharmaceutical "flow" must this topic NOT be confused with?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Water and honey both obey gravity — viscosity is what makes them different stories. One ideal fluid, three rebels, one memory trick: that is rheology.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-32', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-32-1',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Viscosity',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Viscosity** expresses how strongly a fluid resists flowing — how much it fights being sheared (having its layers slid past one another). The physical picture: a fluid between two plates, the top plate dragged sideways. The fluid's layers move at graded speeds — fastest at the moving plate, stationary at the fixed one — and the fluid's internal friction is what the plates feel.\\n\\n**The quantities.** *Shear stress* (F/A): the force per area applied — units Pa. *Shear rate* (dv/dh, often written γ̇ or D): how fast adjacent layers slide relative to their separation — units s⁻¹. The **viscosity coefficient η** ties them together (the formal definition is 32-2's law):\\n\\n$$\\n\\eta = \\frac{\\text{shear stress}}{\\text{shear rate}} = \\frac{F/A}{dv/dh}\\n$$\\n\\n**Units discipline**: SI unit **Pa·s** (pascal-second); the common pharmaceutical unit is the equal-sized **mPa·s** (1 Pa·s = 1000 mPa·s), and water at room temperature sits near 1 mPa·s — the convenient anchor. The older CGS unit **poise** (P) survives in pharmacy literature: 1 Pa·s = 10 P; the centipoise (cP) equals the mPa·s numerically (1 cP = 1 mPa·s).\\n\\n**Kinematic viscosity** (ν = η/ρ, units m²/s or the older stokes) divides by density — relevant when flow is gravity-driven (an application named here, developed in instrument canon).\\n\\n**What changes viscosity**: temperature (heating thins liquids — the reverse of gases; the lever pct-31-1 used on surface tension works oppositely here), dissolved solids (sugars thicken syrups — the syrup canon pct-37-2 consumes), and the fluid's own structure (32-3's story).\\n\\n**The worked arithmetic** (this lesson's Tier C core) computes η from a stated shear experiment; 32-2 then rebuilds it from the law's other direction.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Viscosity coefficient**\\n\\n$$\\n\\eta = \\frac{F/A}{dv/dh}\\n$$\\n\\n**Unit conversions**\\n\\n$$\\n1\\ \\text{Pa·s} = 1000\\ \\text{mPa·s} = 10\\ \\text{P}, \\qquad 1\\ \\text{cP} = 1\\ \\text{mPa·s}\\n$$\\n\\n**Kinematic viscosity**\\n\\n$$\\n\\nu = \\frac{\\eta}{\\rho}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — η from a shear experiment.** Stated: plate area A = 0.01 m², force F = 0.5 N, plate gap h = 0.001 m, plate speed v = 0.1 m/s. Shear stress = F/A = 0.5/0.01 = 50 Pa; shear rate = v/h = 0.1/0.001 = 100 s⁻¹. η = 50/100 = **0.5 Pa·s = 500 mPa·s** — a fluid 500× thicker than water. Dimensional check: Pa ÷ s⁻¹ = Pa·s ✓.\\n\\n**Example 2 — unit fluency.** 0.5 Pa·s = **5 poise** = **500 cP** = **500 mPa·s** — four notations of one viscosity.\\n\\n**Example 3 — kinematic viscosity.** Same fluid, density 1.2 g/cm³ (= 1200 kg/m³): ν = 0.5/1200 = **4.17 × 10⁻⁴ m²/s** (stated rounding).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define shear stress and shear rate with units.\\n2. A = 0.02 m², F = 0.6 N, h = 0.002 m, v = 0.2 m/s — η? (30/100 = 0.3 Pa·s.)\\n3. Convert 2.5 Pa·s into poise and cP. (25 P; 2500 cP.)\\n4. Why does heating thin a liquid but thicken a gas, qualitatively?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Stress over rate — η prices the fight between fluid layers. Pa·s, mPa·s, poise, cP: one quantity, four dialects; water near 1 mPa·s is the anchor.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-2',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Newtonian Flow',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Newtonian flow** is the ideal case: viscosity that does not change no matter how hard you shear the fluid. Newton's law of viscous flow states it as a proportionality:\\n\\n$$\\n\\text{shear stress} = \\eta \\times \\text{shear rate}\\n$$\\n\\n**The signature**: shear stress is directly proportional to shear rate, and the proportionality constant — η — is THE viscosity: a single number fully characterises the fluid. Double the push, double the speed of flow; the ratio never moves.\\n\\n**The rheogram** (flow curve) makes it visual: stress on the y-axis against shear rate on the x-axis gives a **straight line through the origin** whose slope is η. A steeper line is a thicker fluid; all Newtonian fluids differ only in slope.\\n\\n**Which fluids qualify**: water, simple syrups, dilute sugar solutions, organic solvents, very dilute polymer solutions, glycerol — the small, unstructured molecules and near-ideal solutions. **Which do not**: anything with structure (long entangled polymers, dispersed particles, micellar networks) — those are 32-3's rebels, and most real pharmaceutical dispersions are among them.\\n\\n**Why the ideal matters**: (1) it is the *reference* against which non-Newtonian behaviour is defined and measured; (2) single-point viscometry is legitimate only for Newtonians — the one-number shortcut that fails for every rebel; (3) some real products (simple syrup canon, pct-37-2) are close enough to Newtonian for single-point QC.\\n\\n**The worked arithmetic** runs the law forward (stress from rate) and backward (rate from stress), and reads a rheogram's slope.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Newton's law of viscous flow**\\n\\n$$\\n\\frac{F}{A} = \\eta \\, \\frac{dv}{dh}\\n$$\\n\\n**Rheogram reading**\\n\\n$$\\n\\eta = \\text{slope of stress vs shear rate}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — forward.** Glycerol-like fluid, η = 1.4 Pa·s, sheared at 200 s⁻¹: stress = 1.4 × 200 = **280 Pa**.\\n\\n**Example 2 — backward.** Same fluid under 70 Pa: rate = 70/1.4 = **50 s⁻¹** — the law runs both directions for Newtonians.\\n\\n**Example 3 — rheogram slope.** A Newtonian's flow curve passes (0, 0) and (100 s⁻¹, 30 Pa): η = 30/100 = **0.3 Pa·s**. Doubling the rate to 200 s⁻¹ must give 60 Pa — the signature check.\\n\\n**Example 4 — the proportionality test.** A fluid gives 20 Pa at 50 s⁻¹ but 60 Pa at 100 s⁻¹: stress did NOT double when rate doubled (ratio 1.2 vs 2.4 Pa·s per step) → **not Newtonian**; a single η cannot describe it (32-3's territory).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the law and describe the Newtonian rheogram.\\n2. η = 0.8 Pa·s at 150 s⁻¹ — stress? (120 Pa.)\\n3. Stress 45 Pa gives rate 90 s⁻¹ — η, and what does the through-origin line imply?\\n4. What single observation brands a fluid non-Newtonian?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `One push, one response, forever: stress = η × rate, a straight line through the origin. The slope is the fluid's whole biography — until a rebel breaks the line.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-3',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Non-Newtonian Flow',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Most pharmaceutically interesting liquids are **non-Newtonian**: their viscosity changes with the shear applied — because they have STRUCTURE (entangled polymer chains, dispersed particles touching, networks) that shear disrupts or compacts. For these fluids there is no single η; viscosity depends on shear rate (and sometimes on history).\\n\\n**The rheogram signatures** (the recognition skill this lesson builds; each behaviour has its own lesson):\\n\\n*Plastic (Bingham)*: the curve does NOT pass through the origin — flow begins only above a **yield value**; below it, the material behaves as an elastic solid.\\n\\n*Pseudoplastic*: the curve passes through the origin but bends toward the rate axis — **viscosity falls as shear rises** (shear-thinning).\\n\\n*Dilatant*: the curve bends toward the stress axis — **viscosity RISES as shear rises** (shear-thickening).\\n\\n*Thixotropic*: the up-curve and down-curve of a shear cycle do not coincide — a **hysteresis loop**; viscosity depends on shear HISTORY (32-7).\\n\\n**Why structure causes this** (the A-level bridge): long polymer chains entangled at rest untangle and align under shear (less resistance → pseudoplastic); dispersed particles form weak cages that shear must first break (plastic) or that jam tighter under shear (dilatant); networks rebuild slowly after shear (thixotropy).\\n\\n**Consequences for pharmacy.** *Measurement*: apparent viscosity (stress ÷ rate at ONE point) is meaningless as a single number — full flow curves are needed; single-point viscometry misleads. *Pouring vs standing*: a shear-thinning suspension pours easily (high shear at the bottle neck) yet stands thick on the shelf (low shear) — the property suspending-agent design exploits (pct-38-5's canon). *Processing*: pumping, mixing, and filling all shear products differently than pouring does — the same product is a different viscosity in each.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Structure (polymers, particles, networks) makes viscosity shear-dependent — no single η.\\n- Four signatures: plastic (yield point), pseudoplastic (shear-thinning), dilatant (shear-thickening), thixotropic (hysteresis).\\n- Apparent viscosity at one point is NOT the fluid's viscosity — full curves required.\\n- Shear-thinning = pour easily, stand thick — the suspension design property (pct-38-5).\\n- The product's viscosity differs at pouring, pumping, and standing.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does structure create shear-dependent viscosity — one mechanism per behaviour?\\n2. Sketch the four rheogram signatures from memory.\\n3. Why is single-point viscometry legitimate only for Newtonians?\\n4. Explain the pour-easily/stand-thick trick with the correct behaviour name.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Structure meets shear: cages break (plastic), chains align (pseudoplastic), grains jam (dilatant), networks forget slowly (thixotropic). No single number survives them all.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-4',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Plastic Flow',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Plastic (Bingham) flow** describes materials that refuse to flow until pushed hard enough. Below a threshold stress — the **yield value** (f₀) — the material responds like an elastic solid (deforms, does not flow); above it, it flows, often with Newtonian simplicity.\\n\\n**The Bingham equation** (the idealised form the 200L arithmetic uses):\\n\\n$$\\n\\text{shear stress} = f_0 + \\eta_{\\text{pl}} \\times \\text{shear rate}\\n$$\\n\\n**The rheogram**: a line that intercepts the stress axis at f₀ (the yield value) — never through the origin. Its slope above yield is the **plastic viscosity** η(pl).\\n\\n**The structural story**: dispersed particles at rest form a weak connected network (through flocculation or chain contact); shear must first BREAK the network (that is the yield cost) before layers can slide.\\n\\n**The worked arithmetic** (this lesson's Tier C core): stress at a given rate from f₀ and η(pl); rate from stress; yield value read from a rheogram's intercept.\\n\\n**Pharmaceutical examples and consequences**: flocculated suspensions and some creams/gels show plastic behaviour — the yield value is what keeps a suspension's flocs from collapsing under their own weight at rest (the pct-38-4 connection, named); but a yield value too high makes the product hard to pour and hard to redisperse. The design tension is pct-38's canon; this lesson owns the science.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Bingham equation**\\n\\n$$\\n\\tau = f_0 + \\eta_{\\text{pl}} \\, \\dot{\\gamma}\\n$$\\n\\n**Derived quantities**\\n\\n$$\\n\\dot{\\gamma} = \\frac{\\tau - f_0}{\\eta_{\\text{pl}}}, \\qquad \\eta_{\\text{app}} = \\frac{\\tau}{\\dot{\\gamma}} = \\eta_{\\text{pl}} + \\frac{f_0}{\\dot{\\gamma}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — stress at rate.** Stated: f₀ = 20 Pa, η(pl) = 0.3 Pa·s. At rate 100 s⁻¹: τ = 20 + 0.3 × 100 = **50 Pa**.\\n\\n**Example 2 — below yield.** Same material at τ = 10 Pa < f₀: **no flow** — the elastic-solid regime; the equation is not applicable below yield, and saying so is the point.\\n\\n**Example 3 — rate from stress.** At τ = 80 Pa: rate = (80 − 20)/0.3 = **200 s⁻¹**.\\n\\n**Example 4 — apparent viscosity falls.** η(app) at 100 s⁻¹ = 50/100 = 0.5 Pa·s; at 400 s⁻¹: τ = 20 + 120 = 140 Pa → η(app) = 140/400 = **0.35 Pa·s** — apparent viscosity drops as shear rises (the f₀ share shrinks), which is why plastic materials look shear-thinning even though η(pl) is constant.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the Bingham equation and name both constants.\\n2. f₀ = 15 Pa, η(pl) = 0.5 Pa·s — stress at 200 s⁻¹, and is the fluid flowing at 10 Pa? (115 Pa; no.)\\n3. τ = 65 Pa with f₀ = 20, η(pl) = 0.3 — rate? (150 s⁻¹.)\\n4. Why does apparent viscosity fall with rate even when plastic viscosity is constant?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Break the cage first, then slide: τ = f₀ + η(pl)·γ̇. Below yield nothing flows; above it, the intercept's shrinking share makes the fluid look thinner than it is.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-5',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Pseudoplastic Flow',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Pseudoplastic (shear-thinning) flow**: viscosity DECREASES as shear rate increases — the fluid flows more easily the harder you push. The rheogram passes through the origin (flow starts at any stress, unlike plastic) but bends concave toward the rate axis; there is no yield value and no single η.\\n\\n**The structural story**: long polymer chains (or irregular particles) are entangled at rest, resisting flow. Shear untangles and aligns them along the flow direction — streamlined, they slide past each other with less resistance. Stop shearing and the chains drift back toward entanglement (immediately, in the ideal case — no time memory; that is 32-7's property).\\n\\n**Describing the curve** (named and bounded): no linear law fits the whole curve, so pharmacy uses **apparent viscosity** at stated shear rates (always reported with its rate) and empirical models — the power law and its exponents are named as beyond-200L algebra.\\n\\n**Why pseudoplasticity is the formulation virtue** (the property the later blocks exploit):\\n\\n*Pouring*: high shear at the bottle neck → low viscosity → the product pours and doses easily. *Standing*: low shear on the shelf → high viscosity → particles resist settling (pct-38-5's suspending-agent logic) and semisolids hold their shape (pct-40's consistency). *Spreading*: high shear under the hand/finger → creams spread with little effort (pct-40's canon). *Swallowing*: sheared by the tongue and palate, a thick spoonful thins as it flows.\\n\\n**The honest cost**: the same low viscosity under shear means a pseudoplastic suspension also settles FASTER while being shaken or transported (vibration is shear) — packaging and labelling mitigations are pct-38-9's canon.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Shear-thinning: η falls as shear rises; through-origin curve, no yield value.\\n- Mechanism: entangled chains align under shear — streamlined, less resistance.\\n- Apparent viscosity always reported WITH its shear rate; power-law algebra bounded.\\n- The formulation virtue: pours thin, stands thick, spreads easily — pct-38-5/40 consume it.\\n- Cost: vibration is shear — settling accelerates in transit (pct-38-9 mitigations).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast pseudoplastic and plastic rheograms (two differences).\\n2. Why do aligned chains resist less — the mechanism in one sentence?\\n3. Name four moments in a product's life where pseudoplasticity helps.\\n4. What is the honest cost of shear-thinning in transport, and whose canon is the mitigation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The harder you push, the easier it flows: entangled chains straighten out and cooperate. Pour thin, stand thick — the pharmaceutically favourite rebel.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-6',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Dilatant Flow',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Dilatant (shear-thickening) flow**: viscosity INCREASES as shear rate increases — the harder you push, the more the material resists. The rheogram bends concave toward the stress axis (through the origin). It is the rarest of the three non-Newtonian behaviours in pharmacy — and the most important to RECOGNISE, because it punishes exactly the processing assumptions Newtonian thinking makes.\\n\\n**The structural story**: concentrated suspensions of deflocculated (free, unaggregated) particles at high solids content. At rest the particles pack closely with just enough liquid to lubricate them; under shear the particles rearrange into a **worse packing** (the "dilatancy" of the name — the system visibly dilates/expands as particles push apart), leaving dry spots where liquid was: the mixture seizes. Push harder, seize harder.\\n\\n**The processing consequences** (why recognition matters):\\n\\n*Mixing*: a dilatant mass that flows slowly under gentle stirring can **seize solid** under a high-speed mixer — the classic hazard when wet-granulating or milling concentrated pastes (pct-34's wet-mass handling, named; the process canon is pct-35-5's). *Pumping*: high-shear pumps can stall on dilatant slurries. *The countermeasure*: process gently — low shear, more liquid, or change the formulation (deflocculation state is pct-38-4's canon).\\n\\n**Everyday anchors** (the A-level bridge): cornstarch-and-water (the kitchen demonstration — it solidifies under a hard poke), wet sand at the beach (firm underfoot when run over fast, soft when standing).\\n\\n**The exam habit**: dilatant = the opposite of pseudoplastic on every axis — curve direction, mechanism (jam vs align), and practical advice (avoid high shear vs exploit it).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Shear-thickening: η rises with shear; curve bends toward the stress axis.\\n- Mechanism: packed particles dilate under shear — liquid lubrication fails, the mass seizes.\\n- Rare but hazardous: high-speed mixing/pumping can seize a dilatant paste.\\n- Countermeasures: gentle processing, more liquid, or flocculation-state changes (pct-38-4).\\n- Anchors: cornstarch slurry, wet sand — solidify under fast force, relax under slow.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the curve direction and define the mechanism of dilatancy.\\n2. Why can a high-speed mixer turn a flowing paste solid?\\n3. Name the three countermeasures and the pct-topic owning the deflocculation lever.\\n4. Give the everyday anchor and say what it demonstrates.\\n5. Contrast dilatant and pseudoplastic on curve, mechanism, and processing advice.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Push it and it hardens: particles dilate, the liquid runs dry, the mass seizes. The rebel you recognise to protect your mixer — gentleness is the countermeasure.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-7',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Thixotropy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Thixotropy** is time-dependent shear-thinning: viscosity that falls while shear CONTINUES and recovers slowly — over seconds to hours — when the shear stops. The fluid remembers being sheared, for a while.\\n\\n**The rheogram signature**: a shear cycle (rate swept up, then down) traces two curves that do not coincide — a **hysteresis loop** whose area measures the structure broken and not yet rebuilt. Gels that liquefy on shaking and set again on standing are the classic thixotropic systems.\\n\\n**The structural story**: a three-dimensional network (particles connected by weak bonds, or polymer junctions) is broken down by sustained shear into disconnected fragments — but unlike ideal pseudoplastic alignment, the rebuild is SLOW: bonds must find each other again.\\n\\n**Why pharmacy values it** (the property that makes thixotropy a feature, not a nuisance):\\n\\n*Suspensions*: a thixotropic vehicle is fluid while shaken (easy pour, easy dose) and stiffens on the shelf — slowing sedimentation and holding particles distributed (the pct-38-5 design option, named). *Semisolids*: a thixotropic gel spreads under the finger (shear) then regains body on the skin (pct-40's consistency canon). *Injection depots*: thixotropic formulations stay liquid in the syringe and gel at the injection site (named as an application class).\\n\\n**The honest complications**: recovery time varies widely (a product may still be thin hours after shaking — the patient experience and re-shake instructions are pct-38-9's labelling canon); thixotropy makes QC harder (results depend on shear history — rest times must be standardised, an instrument-canon point); and antithixotropy (rheopecty — viscosity rising with sustained shear) exists, named for completeness and rare.\\n\\n**The exam distinction**: pseudoplastic = shear-thinning WITHOUT memory (recover instantly); thixotropic = shear-thinning WITH memory (recover slowly). Both thin; only one remembers.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Time-dependent shear-thinning: breaks under sustained shear, recovers slowly — the hysteresis loop is the signature.\\n- Mechanism: network broken into fragments; bonds refind each other slowly.\\n- Uses: shake-liquid/set-stiff suspensions (pct-38-5 option), spreading gels (pct-40), depot injections.\\n- Complications: variable recovery times (labelling canon pct-38-9), history-dependent QC, rheopecty named.\\n- The distinction: pseudoplastic forgets instantly; thixotropic remembers — both thin, one remembers.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define thixotropy and name the rheogram signature.\\n2. Distinguish thixotropic from pseudoplastic — the one-word difference.\\n3. Name three product classes that exploit the property.\\n4. Why must QC rest times be standardised for thixotropic products?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Shake it liquid, wait and it sets: a network broken slowly rebuilds. The loop in the rheogram is the memory — pharmacy's favourite forget-me-not.`,
      },
    ],
  },
  {
    nodeId: 'pct-32-8',
    courseId: 'pct-201',
    topicId: 'pct-32',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Applications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing map: where the flow science is consumed — the connective lesson for the formulation blocks ahead.\\n\\n**Suspensions** (pct-38's canon, principled here): settling is a flow problem — Stokes' law (pct-38-3's lesson) sets sedimentation speed with η in the denominator, so vehicle viscosity directly controls shelf stability; pseudoplastic/thixotropic vehicles pour thin and stand thick (32-5/32-7); flocculated networks give plastic behaviour with yield values (32-4). Agent SELECTION is pct-38-5's lesson; the physics is here.\\n\\n**Emulsions** (pct-39's canon): emulsion consistency is rheology — droplet concentration and continuous-phase viscosity set pourability; plastic/thixotropic behaviour keeps creams and lotions where applied. Selection canon is pct-39-4's; the flow science is here.\\n\\n**Semisolids** (pct-40's canon): ointments, creams, and gels ARE their rheology — yield values, shear-thinning spreadability, thixotropic body. Base selection (pct-40-5/40-6) consumes this topic's vocabulary wholesale.\\n\\n**Solutions and syrups** (pct-37's canon): sugar loading moves viscosity — the Newtonian end of the spectrum, where single-point QC is legitimate (32-2's scope).\\n\\n**Veterinary pour-ons** (pct-20's canon, referenced): spreading on the animal depends on viscosity and surface tension together — this topic's η with pct-31's γ.\\n\\n**Disambiguation guard** (the discipline the topic carries): powder flow (pct-33-7/34-6's canon) is bulk-solid behaviour — angle of repose, not viscosity; sharing neither equations nor vocabulary. If the material is a powder, the rheology lesson does not apply.\\n\\n**Processing** (the hidden consumer): mixing, pumping, filling, and shearing all act on product viscosity — dilatant hazards (32-6) and thixotropic rest-times (32-7) are real production constraints.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Suspensions: Stokes' denominator is η (pct-38-3); shear-thinning/thixotropic vehicles pour-and-protect (pct-38-5).\\n- Emulsions/semisolids: consistency IS rheology — selection canon pct-39-4/pct-40-5/6.\\n- Syrups: the Newtonian end — single-point QC legitimate (32-2 scope).\\n- Pour-ons: η + γ together (pct-20 referenced).\\n- Powder flow ≠ liquid flow — pct-33-7/34-6 own the bulk-solid canon.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Connect each of 32-2…32-7's behaviours to one application here.\\n2. Why does η appear in Stokes' law's denominator, and whose lesson owns the law?\\n3. Which lessons own agent/base selection, and what does this topic supply them?\\n4. State the powder-flow disambiguation and name its canon.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Pouring, settling, spreading, mixing — every liquid medicine's life is a rheology exam. The rebels provide the tricks; the later blocks spend them.`,
      },
    ],
  },
];
