import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-34: Powders and Granules.
 *
 * Batch 37: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–33
 * top-level topic convention) plus its nine children pct-34-1…34-9
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-34 has no surviving Phase-1 tier record; the block is
 * technique/formulation-driven with no calculation children, so all
 * ten lessons are Tier B under the established conceptual-lesson
 * convention. Convention-derived, flagged pending confirmation.
 *
 * CANONICAL-HOME DECISION (geometric dilution): per reviewer
 * instruction, 34-5 teaches the physical compounding technique and
 * defers the full calculation/compounding-calculation canon to
 * pct-19-6 (authored Batch 12-era). This resolves the previously
 * pending pct-19-6 ↔ pct-34-5 crossover: pct-19-6 keeps calculation
 * canon; 34-5 keeps the physical technique, referencing without
 * re-teaching.
 *
 * Scope discipline: THIS topic owns powder/granule formulation,
 * preparation, handling, and practical compounding technique. Deep
 * particle science (size distributions, surface area, density
 * definitions, Carr/Hausner) is pct-33's canon — consumed, never
 * re-derived; 34-3 teaches technique with size DATA consequences, not
 * measurement science; 34-6 consumes pct-33-7/33-8 verdicts. Excipient
 * general canon is pct-3's (34-2's bulking/diluent roles apply it);
 * sterility/sterile powders are PHM 201's canon (named, bounded);
 * tableting downstream is pct-35's. All worked values stated
 * illustrative, independently verified.
 */
export const pct201PowdersGranulesLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-34',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'topic',
    title: 'Powders and Granules',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Powders are the oldest dosage form and still the busiest workshop: the divided powder (chartula), the bulk laxative, the effervescent draught — and the dry intermediate behind every tablet and capsule. **Powders and granules** is the pharmacy of particulate solids: how they are classified, prepared, mixed, made to flow, and packed.\\n\\n**The map.** (1) **Classification** — bulk vs divided, the legal-practical split (34-1). (2) **Pharmaceutical powders** — the dosage form itself and its excipient roles (34-2). (3) **Size reduction** — comminution as bench technique (34-3). (4) **Mixing** — the noble art and its failure modes (34-4). (5) **Geometric dilution** — the potents-dilution ritual (34-5; calculation canon pct-19-6's). (6) **Powder flow** — handling behaviour, consuming pct-33's measurements (34-6). (7) **Granules** — the dosage form and intermediate (34-7). (8) **Granulation** — wet and dry routes (34-8). (9) **Packaging and storage** — the partition papers and wide-mouth jars (34-9).\\n\\n**Two boundaries the topic polices.** Particle MEASUREMENT science (distributions, surface area, density definitions, Carr/Hausner, repose tables) is pct-33's canon — this topic consumes its verdicts and teaches HANDLING. Sterile powders for injection are PHM 201/PCY territory (named in 34-2, not developed).\\n\\n**Standing discipline**: worked values stated illustrative, independently verified; equipment procedures named-and-bounded.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Powders = bulk or divided; the oldest solid dosage form and the tableting intermediate.\\n- Map: classification → pharmaceutical powders → size reduction → mixing → geometric dilution → flow → granules → granulation → packaging.\\n- Measurement science is pct-33's; this topic owns technique and handling.\\n- Geometric-dilution calculation canon is pct-19-6's (34-5 = physical technique).\\n- Sterile powders named-and-deferred (PHM 201/PCY canon).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Recite the map and the lesson owning each station.\\n2. Which pct-33 lessons does 34-6 consume, and which science does it NOT re-derive?\\n3. Where does geometric-dilution calculation canon live, and what does 34-5 teach?\\n4. Which dosage forms is this topic the dry intermediate for?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `From spatula to die: powders are prepared, mixed, flowed, granulated, and packed. The science lives in pct-33; the craft lives here.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-34', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-34-1',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Classification of Powders',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The first classification is by USE — **bulk powders** vs **divided powders** — and it is really a safety boundary:\\n\\n**Bulk powders**: supplied as a multi-dose mass; the patient (or caregiver) measures each dose. Suited to **potent-safe** drugs — antacids, laxatives, dusting powders, dentifrices — where dose imprecision is harmless. The dose accuracy lives in the patient's spoon.\\n\\n**Divided powders (chartulae)**: each dose wrapped separately (the classic folded paper) — dose accuracy lives in the pharmacist's balance. Suited to more potent actives, and to blend-sensitive formulas.\\n\\n**The pharmacopeial size classification** (the second axis — stated as convention): the compendial grades describe particle coarseness by sieve passage — **No. 80/No. 100/Nodules-language varies; the 200L anchor is coarse/moderate/fine/very fine** described by the sieve through which ALL (or nearly all) the powder passes. The vocabulary feeds 34-3's technique and pct-33-2's distribution thinking.\\n\\n**Special classes** (named for the map): **effervescent powders** (acid+carbonate pairs releasing CO₂ in water — the granule form in 34-7), **dusting powders** (topical, must be free-flowing and non-irritant), **insufflations** (blown into body cavities), **snuffs** (nasal), **dentifrices** (the abrasive class).\\n\\n**The safety logic to carry**: the bulk/divided choice is a RISK decision before it is a convenience decision — the more potent the drug, the more the dose must be controlled by the pharmacist, not the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Bulk = patient-measured multi-dose (safe-potency drugs); divided = pharmacist-measured single doses (chartulae).\\n- The bulk/divided choice is a dose-safety decision first.\\n- Compendial size grades described by sieve passage (coarse → very fine) — convention vocabulary.\\n- Special classes: effervescent, dusting, insufflations, snuffs, dentifrices.\\n- Potency up → dose control moves from patient to pharmacist.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast bulk and divided powders on dose control, not just packaging.\\n2. Why are antacids comfortable as bulk powders but potent actives not?\\n3. What does a compendial "fine" grade actually assert about sieves?\\n4. Name three special classes and their defining use.\\n5. Which later lesson turns the effervescent idea into granules?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Who measures the dose decides the class: patient's spoon (bulk) or pharmacist's balance (divided). Sieve grades size the vocabulary; speciality classes size the uses.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-2',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Powders',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **powder dosage form** proper: what it offers, what it needs, and the formulation anatomy of a dispensed powder.\\n\\n**Advantages**: chemical stability (dry = hydrolysis-starved; the pct-43 logic applied), flexible dosing (especially paediatric/nutritional), rapid dispersion and absorption once wetted (surface area, pct-33-4's canon, already built in), convenient for bulky doses (antacids by the gram).\\n\\n**Disadvantages**: dose precision depends on the patient for bulk forms; taste is unmasked (no capsule shell, no syrup jacket); not for volatile, hygroscopic, or irritant drugs; unpleasant for the nauseated patient.\\n\\n**Formulation anatomy** (applying the pct-3 excipient canon to THIS form):\\n\\n*Active* — the drug, typically a minor mass fraction. *Diluent/bulking agent* — lactose is the classic carrier: makes a weighable, pourable, storable mass of a tiny potent dose; alternatives (starch, sucrose) chosen for solubility/taste/compatibility. *Gladants/glidants* where flow demands (the pct-33-7 remediation, pct-3's canon) — *flavourants/colourants* where patient acceptability demands.\\n\\n**The potent-dose problem** (the anatomical reason 34-5 exists): 1 mg of drug in a 100 mg powder is a 1:100 dilution the pharmacist must achieve UNIFORMLY — mixing quality is the dosage form's whole quality (34-4/34-5).\\n\\n**Hygroscopic and volatile honesty**: hygroscopic drugs cake and dose-drift (34-9's packaging responds); volatile drugs (the classic menthol/camphor problem) require separate enclosure or special handling.\\n\\n**Sterile boundary**: powders for parenteral reconstitution (the vial the nurse dilutes) share the FORM but not the topic — sterility assurance is PHM 201/PCY canon; named, not developed.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Advantages: stability (dry), flexible dosing, built-in surface area, bulky doses OK.\\n- Disadvantages: patient-measured dose (bulk), taste unmasked, no for volatile/hygroscopic/irritant.\\n- Anatomy: active + lactose-class diluent (+ glidant/flavour) — pct-3 canon applied.\\n- The potent-dose problem: uniform micro-dilution is the form's whole quality (34-4/34-5).\\n- Parenteral reconstitution powders: same form, PHM 201/PCY sterility canon — deferred.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give two advantages and two disadvantages rooted in physical chemistry, not habit.\\n2. Why is lactose the classic diluent — three properties?\\n3. State the potent-dose problem in one sentence each for 34-4 and 34-5.\\n4. Which drug classes disqualify the powder form, and why?\\n5. Where does sterility assurance for reconstitution powders canonically live?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A powder is a dosage form of air and edges: stable, flexible, bitter, and unforgiving of bad mixing. Lactose carries the dose; the pharmacist carries the responsibility.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-3',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Particle-Size Reduction',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Size reduction (comminution)** is the bench and factory art of making particles smaller — with the WHY supplied by pct-33's science (surface area ladder, dissolution consequences) and the HOW belonging here.\\n\\n**Why reduce** (the consumed canon, one line each): faster dissolution (pct-29-5/29-9's surface term), uniform mixing (fines blend better than gravel — 34-4), uniform dose (content uniformity), better feel (grit-free ointments, palatable powders).\\n\\n**The bench methods** (the compounding vocabulary):\\n\\n*Trituration* — grinding in a mortar with the pestle; the pharmacist's everyday reduction and mixing act (the word doubles for mixing — context decides).\\n\\n*Levigating* — reducing a powder with a WETTING liquid into a smooth paste (the levigating agent, e.g. glycerin/tragacanth mucilage); the route into smooth mixtures and suspensions (pct-38's preparation canon).\\n\\n*Pulverisation by intervention* — dissolving the difficult solid in a volatile solvent (e.g. camphor in alcohol) and triturating with an inert diluent; the solvent evaporates leaving fine particles — the "intervention" of the name.\\n\\n**The mill families** (factory, named-and-bounded): cutter, hammer, roller, and ball mills — each with its particle-size register; the 200L skill is knowing which class of product each delivers, not machine engineering.\\n\\n**The costs** (the honest column): heat (volatile/thermolabile hazards), oxidation of fresh surfaces, dust hazard, and — the pct-33-7 echo — finer powders flow WORSE; reduction is a trade, not a win.\\n\\n**The rule this lesson installs**: reduce to the SMALLEST size the formulation actually needs — no finer.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Why reduce: dissolution ↑ (pct-29-5), mixing ↑, dose uniformity ↑, texture ↑.\\n- Bench: trituration (dry), levigation (wet paste), pulverisation by intervention (volatile solvent).\\n- Mills: cutter/hammer/roller/ball — named families, bounded scope.\\n- Costs: heat, oxidation, dust, and worse flow (pct-33-7 echo).\\n- The rule: reduce only as fine as the formulation needs.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace the four WHY-reductions to their pct-33/pct-29 canon.\\n2. Distinguish trituration, levigation, and pulverisation by intervention — one line each.\\n3. Which mill family suits fibrous material, and which delivers the finest register (stated as class knowledge)?\\n4. Name three costs of over-reduction.\\n5. State the size rule and the failure it prevents.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Triturate dry, levigate wet, intervene with solvent: three bench routes to smaller. The science was pct-33's; the mortar is yours — and finer is not automatically better.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-4',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Mixing',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Mixing powders** is the deliberate achievement of randomness — every dose-carrying spoonful, wrap, or capsule carrying the same composition. Its failures are the dosage form's failures: content uniformity, and with it safety.\\n\\n**The mechanisms** (named, ordered by intensity): **diffusion** (particles randomly hopping across fresh surfaces — gentle), **convection** (whole masses transferred — strong), **shear** (layers forced past each other — breaks lumps). Bench trituration is shear+diffusion in a mortar; tumbling mixers ride diffusion; planetary mixers force convection+shear.\\n\\n**The enemy: segregation (un-mixing)** — the pct-33-9 warning made operational. The three drivers: **size** differences (fines sift downward through the bed — the percolation problem), **density** mismatches (heavy particles sink in a moving bed), **shape/roughness** (smooth balls roll away from rough grains). Segregation feeds on HANDLING: vibration in transport, pouring, pouring again.\\n\\n**The countermeasures** (technique canon): reduce size differences before mixing (34-3's rule); mix at the closest practical ratio (geometric dilution's logic — 34-5); avoid over-mixing (a reached mixture can un-mix under continued handling); minimal handling after mixing; ordered mixing (coating fines onto carrier particles — named as the industrial answer to potent-drug homogeneity).\\n\\n**The scale-up honesty**: mortar randomness does not certify factory randomness — sampling and assays (pct-35's QC vocabulary) judge the industrial mix; the bench skill is the HABIT of uniformity thinking.\\n\\n**The potent-dose anchor**: for a 1-in-1000 potent powder, "well mixed" is not a feeling — it is a uniformity claim, and the technique (34-5) plus ordered mixing are its only warranty.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mixing = achieving randomness; failure = content-uniformity failure = safety failure.\\n- Mechanisms: diffusion (gentle), convection (strong), shear (lump-breaking).\\n- Segregation drivers: size (percolation), density, shape — fed by vibration and re-pouring.\\n- Countermeasures: size-match first, closest-ratio mixing (34-5), no over-mixing, minimal handling, ordered mixing named.\\n- Potent doses: uniformity is a claim, not a feeling — technique is the warranty.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the three mixing mechanisms and place the mortar among them.\\n2. Explain percolation segregation — which property drives it, which handling feeds it?\\n3. Why can over-mixing make a mixture WORSE?\\n4. What is ordered mixing, and which products need it?\\n5. Connect size reduction (34-3) to mixing quality in one sentence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Diffusion hops, convection hauls, shear splits: make randomness, then stop touching it. Segregation is the mixer's ghost — size, density, and shape are its fingerprints.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-5',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Geometric Dilution',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Geometric dilution** is the compounding ritual for mixing a SMALL amount of potent drug with a LARGE amount of diluent so that the potent particles end up spread uniformly — not pooled. It is this block's technique lesson; the CALCULATION canon (working out the dilution ratios and quantities) is pct-19-6's, referenced here and not re-taught.\\n\\n**The problem it solves** (the potent-dose problem from 34-2/34-4): dump 100 mg of drug onto 10 g of diluent and stir, and the drug stays roughly where it landed — a hot spot, not a mixture. Dilution must proceed by EQUAL-PARTNER steps, each roughly 1:1, so every stage is a mixable ratio.\\n\\n**The technique** (the physical canon of this lesson):\\n\\n1. Triturate the potent drug with an approximately EQUAL bulk of diluent in the mortar (the first 1:1).\\n2. Add diluent again equal to the mixture's current bulk; triturate.\\n3. Repeat — each addition doubles the mass — until all diluent is incorporated.\\n\\nEach step is a near-1:1 mix (the mixable ratio), and doubling steps mean the drug's concentration halves smoothly to its final 1:N — the "geometric" of the name. Doubling from the first pair: 1:1 → 1:3 → 1:7 → 1:15 → 1:31 → … → 1:N (each step, new diluent = current total, so total mass doubles).\\n\\n**The craft details**: clean mortar and pestle; the diluent reserved for the mortar's first "seasoning" where adsorption losses matter (the pct-3 canon's lactose habit); trituration until the stage's colour/texture is uniform before the next addition — the pharmacist's sensory uniformity check.\\n\\n**Where the arithmetic lives**: HOW MUCH diluent each step takes, and the final ratio arithmetic — pct-19-6's lesson; this lesson supplies the hands.\\n\\n**Boundary honoured**: this is the canonical TECHNIQUE home; pct-19-6 remains the canonical CALCULATION home. The pending crossover is hereby resolved as technique-here, calculation-there.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Geometric dilution = stepwise ~1:1 doubling dilution of a potent drug into diluent.\\n- Solves the hot-spot problem: every stage must be a mixable ratio.\\n- Technique: equal-bulk first trituration → double the mass each addition → uniform colour/texture between stages.\\n- Concentration path: 1:1 → 1:3 → 1:7 → 1:15 … each step halves the drug fraction.\\n- Calculation canon (ratios/quantities) is pct-19-6's — referenced, not re-taught.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does single-shot dumping fail — what is a hot spot?\\n2. Why must each stage be ~1:1?\\n3. Trace the mass-doubling: after the first pair and two doublings, what ratio results?\\n4. Where does the calculation canon live, and what does this lesson own?\\n5. What sensory check certifies each stage before the next addition?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Halve the concentration by doubling the mass: equal partners at every step until the potent becomes uniform. The hands are this lesson's; the arithmetic is pct-19-6's.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-6',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Powder Flow',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This lesson is the HANDLING face of the flow science pct-33-7 established — the measurement canon (Carr, Hausner, orifice rates) lives there; what lives here is what the compounder and the process DO about the verdict.\\n\\n**The verdicts consumed** (one line each, canon pct-33-7, pct-33-8, pct-33-6): the repose angle's class (pct-33-8's table), the Carr/Hausner class (pct-33-6), the cohesion-vs-gravity scaling (pct-33-7). A "poor/very poor" powder is this lesson's patient.\\n\\n**Why flow matters at the bench and the machine** (the consequences map): *uniform die/tablet fill* (weight uniformity — pct-35/36's canon); *uniform capsule fill* (same); *hopper feeding without bridging/arching* (the named failure: a cohesive arch holds the hopper empty above a full outlet); *mixing quality* (a non-flowing powder cannot even distribute — 34-4's dependency).\\n\\n**The remediation toolkit** (technique canon):\\n\\n*Glidants* — the pct-3 excipient class (colloidal silica the classic): added in small fractions to coat particles and cut interparticle friction; the powder's lubricant of last resort.\\n\\n*Granulation* — agglomerate fines into larger, free-flowing granules (34-7/34-8): the single most effective answer, because it attacks SIZE (the cohesion-to-weight scaling) directly.\\n\\n*Shape/humidity control* — process changes: reduce angularity where possible, control moisture pickup (liquid bridges), store sealed.\\n\\n*Handling discipline* — avoid vibration and re-pouring (segregation feeds), design gentle transfers.\\n\\n**The honest cost column again**: glidants and granulation both consume formulation real estate and processing time — flow is bought, not free; the pct-33-4 trade-off (finer = better dissolution but worse flow) is the recurring tension this toolkit arbitrates.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Measurement canon is pct-33-6/7/8's; this lesson owns the remediation.\\n- Consequences: die/capsule fill uniformity, hopper bridging, mixing dependency.\\n- Toolkit: glidants (pct-3 class), granulation (the size attack), humidity/shape control, gentle handling.\\n- Bridging/arching: a cohesive arch can hold a hopper empty above a full outlet.\\n- Flow is bought: every remedy costs formulation or process — the 33-4 trade arbitrated here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which three pct-33 lessons supply this lesson's verdicts?\\n2. Describe bridging — why is it dangerous even with product in the hopper?\\n3. How does granulation attack poor flow at its physical root?\\n4. What does a glidant do at the particle level, and which canon names it?\\n5. State the 33-4 trade-off this lesson arbitrates.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `pct-33 measures; this lesson fixes: glidants to coat, granulation to grow, dryness and gentleness to preserve. Poor flow is a diagnosis — this is the prescription pad.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-7',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Granules',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Granules** are agglomerated powder particles — many fine particles bound into a larger, freer-flowing unit. They are simultaneously a DOSAGE FORM (the effervescent granule, the bulk oral granule) and the dry INTERMEDIATE of tableting (pct-35's feed material).\\n\\n**Why granulate** (the benefits ladder):\\n\\n*Flow* — the headline benefit: granules defeat the cohesion-to-weight scaling (pct-33-7's lesson) by growing the particle — the 34-6 toolkit's most powerful move.\\n\\n*Uniformity* — larger units blend and feed more reproducibly (less percolation segregation, 34-4's enemy).\\n\\n*Compression* — granules feed and compact into tablets predictably (pct-35's canon begins here).\\n\\n*Dust* — less airborne dust (safety and loss control).\\n\\n*Density/handling* — bulk density rises (33-6's vocabulary), packages smaller.\\n\\n**The dosage form face**: **effervescent granules** — the acid+carbonate pair (34-1's class) granulated dry (34-8's route) to keep water OUT; dosed by stirring into water where the CO₂ release both flavours and masks taste. **Bulk oral granules** (antacids, laxatives) — the spoonable class.\\n\\n**The granule properties this block tracks** (the vocabulary): granule size and distribution (pct-33-2's canon on a new particle class), **friability** (the tendency to crumble back to dust — the quality gate), moisture content (the granule's stability variable and 34-9's packaging concern), and flow (34-6's verdict re-run).\\n\\n**The honest trade**: granulation adds water or heat or both (34-8's routes) — moisture-sensitive drugs pay; the decision to granulate is a formulation decision, not a habit.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Granules = agglomerated fines: dosage form AND tableting intermediate.\\n- Benefits: flow (the scaling defeat), uniformity, compression behaviour, less dust, higher bulk density.\\n- Effervescent granules: acid+carbonate, dry-granulated to exclude water; taste masked by CO₂.\\n- Tracked properties: size distribution, friability, moisture, flow.\\n- Cost: water/heat exposure — a formulation decision, not a habit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four benefit families and the pct-33 lesson each leans on.\\n2. Why must effervescent granules be DRY-granulated?\\n3. What is friability, and why is it a quality gate?\\n4. Which pct-35 canon begins with granule behaviour, and why?\\n5. State two costs that make granulation a decision rather than a habit.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Fines become freer-flowing units: granules feed tablets, fill spoons, and fizz in glasses. Growth is the cure — moisture is the price.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-8',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Granulation Principles',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Granulation** is the art of building granules — and the principles reduce to two routes and one shared anatomy.\\n\\n**Wet granulation** (the classic route):\\n\\n1. Blend the drug with diluent/excipients (34-4's mixing).\\n2. Add the **binder solution** (the pct-3 binder canon: starch paste, PVP solutions — the glue of the process) while mixing — massing to a wet mass.\\n3. **Screen/sieve the wet mass** (through a coarse sieve) to form wet granules.\\n4. **Dry** (tray or fluid-bed drying) to the target moisture.\\n5. **Size the dried granules** (pass through the correct sieve — the sizing step; 34-3's vocabulary on a granule scale).\\n\\n**Dry granulation** (the moisture-free route): compact the powder mixture into large sheets or slugs (**slugging**, or roller compaction), then mill and size to granules. No binder solution, no drying — the route for **moisture- or heat-labile drugs** (aspirin-class hydrolysis honesty, pct-43's logic) and for effervescent pairs (34-7's requirement).\\n\\n**The shared anatomy** (what every route must deliver): uniform drug distribution THROUGHOUT each granule (the 34-5 discipline at particle scale), a controlled binder level (too little → friable crumbs; too much → hard, slow-dissolving rocks — the dissolution trade, pct-29's canon), correct final moisture (the stability variable), and a size distribution the downstream step can feed (pct-33-2's canon re-applied).\\n\\n**Route selection logic** (the principle behind the two routes): default wet for ordinary actives; dry when water or heat is the enemy — effervescence, hydrolysis-prone drugs, or heat-labile actives decide the route, not preference.\\n\\n**Equipment named-and-bounded**: planetary/low-shear mixers, fluid-bed dryer-granulators (the combined modern route), roller compactors — class knowledge, not machine engineering.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Wet route: blend → binder solution massing → wet screening → dry → size.\\n- Dry route: slugging/roller compaction → mill → size — no water, no drying.\\n- Dry route for moisture/heat-labile actives and effervescent pairs; wet is the default.\\n- Shared anatomy: uniform drug through each granule, controlled binder level, correct moisture, feedable size distribution.\\n- Binder trade: too little → friable; too much → hard, slow-dissolving (pct-29 trade).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the wet route's five stages in order.\\n2. Why is dry granulation mandatory for effervescent pairs and hydrolysis-prone drugs?\\n3. What goes wrong at too-low and too-high binder levels?\\n4. Which two pct-33/pct-34 disciplines continue inside the granule?\\n5. Name the combined modern equipment route and what it merges.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Wet builds with binder and water then dries; dry squeezes sheets and mills them. Every route ships the same contract: uniform, correctly bound, correctly moist, feedable granules.`,
      },
    ],
  },
  {
    nodeId: 'pct-34-9',
    courseId: 'pct-201',
    topicId: 'pct-34',
    nodeType: 'subtopic',
    title: 'Packaging and Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Powders and granules live or die by their packaging: the enemies are **moisture** (caking, hydrolysis, dose-drift), **light** (photolysis), **air** (oxidation), and **contamination** — and the packaging system is the defence (the pct-28 packaging canon applied to THIS form).\\n\\n**Divided powders — the folded-paper tradition** (the craft canon): each dose in its own wrapper, classically **double-wrapped** — an inner waxed/glassine paper (moisture barrier, the powder's own contact surface) and an outer paper or card (mechanical protection, the label carrier). The rule the craft teaches: powders that attack paper (volatile drugs like menthol/camphor, iodine-class staining actives) go in **glassine or waxed enclosures**, or better, small glass/plastic vials — the paper is not a universal container.\\n\\n**Bulk powders and granules** — the **wide-mouth jar** (the form's natural container: spoon access without spillage), tight closure, moisture barrier adequate to the contents' hygroscopicity; desiccant where justified.\\n\\n**Effervescent granules** — the special case: sealed against humidity (moisture triggers the acid–carbonate reaction on the shelf), airtight containers, often with the storage instruction to keep tightly closed and dry — the pct-28 storage-statement vocabulary in action.\\n\\n**The label duties** (pct-28-6/28-7 canon applied): contents, quantity, directions for reconstitution/constitution where relevant, storage statements, and for divided powders "the contents of one paper" dosing language.\\n\\n**Storage statements** (the translation duty from pct-28-9): "protect from moisture" is a mechanism instruction (hygroscopic contents); "store in a dry place" its institutional wording — the pharmacist both reads and teaches these.\\n\\n**The patient-teaching duty**: bulk granules need the "stir into water and drink at once" instruction; effervescent the "fully dissolved before drinking" rule; divided powders the one-paper-one-dose discipline — packaging, labelling, and counselling close the loop this topic opened.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Enemies: moisture (caking/hydrolysis/dose-drift), light, air, contamination — packaging is the defence (pct-28 canon applied).\\n- Divided: double-wrap (inner waxed/glassine moisture barrier + outer mechanical/label paper).\\n- Paper-attackers (volatiles, iodine-class) → glassine/waxed or vials, never plain paper.\\n- Bulk/granules: wide-mouth jar, tight closure, desiccant where justified; effervescents sealed against humidity.\\n- Label/storage duties and patient teaching close the dispense loop (pct-28-6/7/9 canon).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four enemies and the packaging response to each.\\n2. What does each layer of the double wrap do?\\n3. Why do menthol and camphor defeat plain paper wraps?\\n4. Why is humidity lethal to effervescent granules ON the shelf?\\n5. Give the patient-teaching line for each: bulk granules, effervescent, divided papers.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Wax inside, card outside, jar for bulk, seal for fizz: powders are packaged against water above all. The label says it; the pharmacist teaches it.`,
      },
    ],
  },
];
