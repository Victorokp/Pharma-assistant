import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-43: Pharmaceutical Stability.
 *
 * Batch 46: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–42
 * top-level topic convention) plus its eleven children pct-43-1…43-11
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-43 has no surviving Phase-1 tier record; the
 * quantitative child — 43-10 Basic Shelf-Life Concepts (the t90/
 * first-order shelf-life arithmetic) — is Tier C under the
 * established calculation-lesson convention; the topic and remaining
 * children are Tier B. Convention-derived, flagged pending
 * confirmation.
 *
 * Scope discipline (reviewer-fixed): THIS topic owns stability
 * SCIENCE, degradation, kinetics, shelf-life/BUD concepts, and
 * quantitative stability calculations. PCY 201 owns QA/regulatory/
 * stability-programme interpretation (protocols, ICH-class programmes,
 * submissions — named-and-deferred). First-order exponential algebra
 * consumed from pct-23/24's canon (the k ↔ t½ family — referenced);
 * suspension-specific behaviour pct-38-8's (referenced); emulsion
 * instability pct-39-7's (referenced); packaging canon pct-28
 * (applied in 43-11). Worked values stated illustrative, independently
 * verified.
 */
export const pct201StabilityLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-43',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'topic',
    title: 'Pharmaceutical Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every product this course built — solution, tablet, cream, injection — begins to die the moment it is made. **Pharmaceutical stability** is the science of how fast, why, and what to do about it: the last course-block that explains every earlier formulation choice that existed "for stability's sake".\\n\\n**The stability family** (the block's spine): **physical** (the product's structure — 43-1), **chemical** (the drug's molecules — 43-2), **microbiological** (the preservative war — 43-3). The **factors** that drive all three (43-4): temperature (43-5), light (43-6), moisture (43-7), oxidation (43-8), hydrolysis (43-9). Then the applications: **shelf-life concepts** (43-10, Tier C — the t90 arithmetic) and **stability-related packaging** (43-11 — the defences built into the bottle).\\n\\n**Boundaries policed (reviewer-fixed).** PCY 201 owns QA/regulatory/stability-PROGRAMME interpretation (protocols, storage-condition classes as regulatory objects, submissions — named-and-deferred); PCT owns the science and the calculations. First-order exponential algebra is pct-23's (dilution kinetics) and pct-24's (pharmacokinetics) family (the k ↔ t½ canon — referenced); suspension-specific stability is pct-38-8's (referenced); emulsion instability pct-39-7's (referenced); packaging canon pct-28 (applied).\\n\\n**Standing discipline**: worked values stated illustrative, independently verified; kinetic statements at 200L register (first-order explicit, others named).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Stability = physical + chemical + microbiological, driven by temperature/light/moisture/oxygen/hydrolysis.\\n- Map: physical → chemical → microbial → factors → T → light → moisture → oxidation → hydrolysis → shelf-life (43-10, Tier C) → packaging.\\n- PCY 201 owns programme/regulatory interpretation; PCT owns science + calculations.\\n- First-order algebra consumed from pct-23/24's k ↔ t½ family.\\n- Every earlier "for stability's sake" choice pays off here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three stability families and one failure example each.\\n2. Recite the map and the lesson owning each station.\\n3. State the PCY 201 boundary precisely.\\n4. Which earlier blocks' stability echoes return here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Products are born dying: temperature, light, water, and oxygen are the assassins; formulation and packaging are the bodyguards. This block names the killers and prices the defence.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-43', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-43-1',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Physical Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Physical stability** is the product's STRUCTURE surviving storage: the drug and excipients unchanged chemically, but the system falling apart — settling, separating, crystallising, polymorph-shifting.\\n\\n**The failure catalogue** (each echoing its formulation block — the course's physics returns):\\n\\n*Suspensions*: caking, Ostwald ripening, flocculation drift — **pct-38-8's lessons** (referenced).\\n\\n*Emulsions/creams*: creaming, coalescence/cracking, phase inversion — **pct-39-7/8/9's lessons** (referenced); freezing as a cracking event (39-10's echo).\\n\\n*Semisolids*: syneresis (gels weeping), phase separation — **40-10's honesty** (referenced).\\n\\n*Solids/tablets*: polymorphic transformation (the crystal-form change that alters dissolution/solubility — the pct-29 canon referenced; cocoa butter's melt-form honesty from 41-3 the classic), moisture-mediated changes (caking, efflorescence/hygroscopic cycling — 43-7's domain), crystallisation from supersaturated solutions.\\n\\n*Solutions*: precipitation on cooling/evaporation (the solubility-window crossing — pct-29's canon), volatile-loss concentration drift.\\n\\n**Why physical failure matters even with the drug intact**: dose non-uniformity (a caked suspension doses wrong), release changes (a transformed polymorph dissolves differently — the bioavailability risk), and the patient-confidence collapse (the "it's gone off" effect).\\n\\n**The defence frame** (the block's synthesis preview): formulation defences (flocculation design, particle control) + packaging defences (43-11) + storage discipline (43-4's factors).\\n\\n**The spine**: physical stability is the architecture question — the molecules survive, the building still falls; check the structure, not just the chemistry.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Physical = structure survives, not molecules: settling, separating, crystallising, transforming.\\n- Suspensions → pct-38-8; emulsions → pct-39-7/8/9; semisolids → 40-10 (referenced).\\n- Polymorphic transformation alters dissolution/bioavailability (pct-29 referenced).\\n- Physical failure harms dosing, release, and confidence even with drug intact.\\n- Defences: formulation + packaging (43-11) + storage discipline.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define physical stability and contrast it with chemical stability.\\n2. Name the signature physical failure of four dosage classes with their canon lessons.\\n3. Why does a polymorph change matter pharmacologically?\\n4. State the three-part defence frame.\\n5. Why is "the drug is fine" not a stability verdict?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The molecules live but the building falls: cakes, cracks, weeps, and transforms. Physical stability is architecture — inspect the structure, not only the chemistry.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-2',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Chemical Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Chemical stability** is the drug's MOLECULES surviving: every active molecule that degrades is potency lost — and sometimes a harmful impurity born. This lesson maps the chemistry; 43-8/43-9 develop the two headline reactions.\\n\\n**What degradation means**: the active loses content (assay falls), gains impurities (degradation products — the toxicity question named), or changes physical form (the 43-1 bridge). The pharmacopoeial frame: shelf-life is defined against stated assay/impurity limits (stated as compendial-class limits — never invented numbers).\\n\\n**The reaction families** (named with their drug-class hooks): **hydrolysis** (esters/amides — the 43-9 lesson), **oxidation** (phenols/unsaturates — 43-8), **photolysis** (light-cleaved bonds — 43-6), **racemisation** (the optical-honesty: a chiral drug degrading to its mirror form — potency questions named), **epimerisation/polymerisation/decarboxylation** (the named families, bounded).\\n\\n**The kinetics frame** (the 200L register): degradation usually follows **first-order or zero-order** kinetics — first-order meaning the fraction lost per unit time is constant (the pct-23/24 k ↔ t½ exponential family consumed — referenced); the ORDER determines how shelf-life arithmetic works (43-10's lesson).\\n\\n**The pH dependence** (the formulator's master variable): ionisable drugs degrade differently as pH shifts (the ionisation canon pct-29-7 consumed) — the pH-of-maximum-stability concept named (the buffer system's real job — pct-13's canon referenced).\\n\\n**The solid-state honesty**: degradation in solids follows different rules (surface moisture films driving the same chemistries — 43-7's bridge).\\n\\n**The spine**: chemistry is the clock — hydrolysis and oxidation are the hands; the formulator's levers are pH, solvent, and the packaging to come.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Chemical degradation = potency lost + impurities born (stated compendial limits frame shelf-life).\\n- Families: hydrolysis (esters/amides), oxidation, photolysis, racemisation, others named.\\n- Kinetics: first-order (fraction-lost constant) or zero-order — the pct-23/24 exponential family consumed.\\n- pH of maximum stability: the buffer system's real job (pct-29-7/13 consumed).\\n- Solid-state degradation rides surface moisture films (43-7's bridge).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name four degradation families with a drug-class hook each.\\n2. Distinguish first- and zero-order loss in one sentence.\\n3. Why is "pH of maximum stability" a buffer's job — which canons?\\n4. What does racemisation threaten?\\n5. How does moisture reach a dry tablet's chemistry?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Water splits esters, air grabs electrons, light cuts bonds: chemistry is the clock on the bottle. Choose the pH that slows it and the package that hides it.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-3',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Microbiological Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Microbiological stability** is the product winning its war with microbes over time: no growth, no spoilage, no hazard — from manufacture to expiry. The ORGANISM science is PHM 201's canon (named-and-deferred); this lesson owns the STABILITY frame.\\n\\n**What microbial failure looks like**: visible growth (moulds on syrups — the 37-2 surface-growth echo), gas production (the bulging honesty), odour/colour change, preservative failure (the system overwhelmed), and the invisible hazard class (pathogen survival — the contamination-event register).\\n\\n**The defence ladder** (the formulation frame):\\n\\n*Water-activity control* — the sucrose/self-preserving logic (37-2's canon referenced): bind the water and the microbes starve.\\n\\n*Preservative systems* — the 37-8 checklist (consumed): effective, broad, compatible, pH-armed.\\n\\n*pH/ionic environment* — acids armed by pH (the ionisation echo).\\n\\n*Sterility where required* — the pct-42 boundary (the sterile forms' different war).\\n\\n*Packaging defence* — closures, single-use formats (43-11's echo).\\n\\n**The after-opening decay** (the dispensing reality): the product's microbiological clock RESTARTS at first opening — the preserved multi-dose product carries an in-use BUD (pct-43-10's echo; the 37-9 counselling canon applied).\\n\\n**The preservative-fatigue honesty**: preservatives adsorb (pct-31-5's echo), partition (pct-30-6's echo), and complex (37-7's tax) — the system's real strength is less than its label; the formulation margin is the defence.\\n\\n**The challenge-test mention** (named-and-bounded): the formal efficacy testing is professional/PCY-201-register canon — named so the student knows the proof exists.\\n\\n**The spine**: microbiological stability is a war of margins — water bound, preservative armed, package sealed, clock dated.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Failure looks like: growth, gas, odour, preservative overwhelm, invisible pathogens.\\n- Defence ladder: water-activity control (37-2) → preservatives (37-8) → pH arming → sterility (pct-42) → packaging (43-11).\\n- After-opening clock restarts — in-use BUD (pct-43-10 echo; 37-9 counselling).\\n- Preservative fatigue: adsorption/partition/complexation eat the margin.\\n- Challenge testing named-and-bounded (PCY-201 register).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List four visible microbial failures and one invisible class.\\n2. Build the defence ladder with its canon echoes.\\n3. Why does opening restart the clock — what is an in-use BUD?\\n4. Name the three preservative-fatigue mechanisms and their canons.\\n5. What is named-and-bounded to PCY 201's register here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sugar-water is a battlefield: bind the water, arm the preservative, seal the bottle, date the clock. Opening is D-Day for the moulds — the in-use date is the truce.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-4',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Factors Affecting Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Five **factors** drive every stability failure — this lesson is the overview map; 43-5…43-9 develop each.\\n\\n**Temperature** (43-5): the rate accelerator — reactions roughly DOUBLE per 10 °C rise as the rule-of-thumb (the classic Q10 ≈ 2 convention, stated as rule-of-thumb, refined in 43-10's register); cold has its own honesty (freezing breaks emulsions — 39-9's echo).\\n\\n**Light** (43-6): photochemical reactions — photolabile drugs need amber/opaque defence.\\n\\n**Moisture** (43-7): the universal solvent and hydrolysis partner — liquid forms swim in it; solid forms fight its humidity (the packaging war).\\n\\n**Oxidation** (43-8): atmospheric oxygen's slow grab — trace-metal catalysis and peroxide impurities named as accelerators.\\n\\n**Hydrolysis** (43-9): water's chemistry — esters/amides split.\\n\\n**The hidden sixth — TIME** (the integrate-everything honesty): all factors act over time; stability is the product's ability to survive ALL of them for the labelled duration.\\n\\n**The interaction honesty**: factors multiply, not add — warm AND humid is worse than either alone (the synergy named); a factor-controlled product fails faster when another factor breaks loose.\\n\\n**The formulation levers** (the map this course built): pH control (pct-13), solvent selection (37-6), preservatives (37-8), antioxidants (named), particle size trade-offs (pct-33), water-activity control (37-2) — each lever answers one factor; packaging (43-11) answers what formulation cannot.\\n\\n**The spine**: temperature, light, water, oxygen, and water's chemistry are the five horsemen — formulation slows each, packaging bars the door, and time keeps score.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Five factors: temperature (rate ≈ doubles per 10 °C — rule-of-thumb), light, moisture, oxidation, hydrolysis; plus TIME as the scorekeeper.\\n- Cold honesty: freezing breaks emulsions/cracks structures (39-9 echo).\\n- Factors SYNERGISE: warm + humid worse than either.\\n- Formulation levers: pH (pct-13), solvents (37-6), preservatives (37-8), antioxidants, size (pct-33), water activity (37-2).\\n- Packaging (43-11) answers what formulation cannot.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the five factors with one mechanism each.\\n2. State the doubling rule-of-thumb and its status as convention.\\n3. Why is cold not automatically safe?\\n4. Give one synergy example and its consequence.\\n5. Match three formulation levers to their factors.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Heat doubles the clock, light cuts, water dissolves, oxygen steals, hydrolysis splits — and time tallies it all. Slows by formula, bars by package.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-5',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Temperature',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Temperature** is the master accelerator — every degradation pathway speeds up as heat rises, which is why "store in a cool place" is chemistry, not comfort.\\n\\n**The Arrhenius idea, 200L register** (named-and-bounded): reaction rates rise EXPONENTIALLY with temperature (the Arrhenius equation named; its algebra beyond 200L — the rule-of-thumb carries the teaching): **rate roughly doubles per 10 °C rise** (the Q10 ≈ 2 convention — stated as rule-of-thumb, NOT a constant; some reactions quadruple, some barely move — the honesty of the approximation).\\n\\n**The consequences ladder** (each with its echo): shelf-life shrinks steeply with storage abuse (43-10's arithmetic prices it); emulsions crack and invert (39-9); suspensions ripen (38-8); semisolids soften/sweat (40-10); volatiles evaporate (34-2's class honesty); refrigerated products condense (41-7's unwrapping honesty).\\n\\n**The cold side** (the honesty column): freezing is a physical event (ice crystals spear emulsions — 39-9's mechanism; the "do not freeze" label line's reason); some solutes precipitate on chilling (the solubility-window crossing — pct-29 echo); insulin-class products have their own cold rules (the named-class caution).\\n\\n**The storage-statement translation** (pct-28-9's duty applied): "store below 30 °C" / "cool place" / "do not freeze" / "refrigerate" are mechanism instructions — the pharmacist teaches them with the WHY.\\n\\n**The counselling register**: the hot-car honesty (a parked car is an oven — the trip plan), the kitchen-shelf honesty (above the stove is the worst shelf), and the fridge-door honesty (the warmest fridge zone — the placement tip).\\n\\n**The spine**: heat is the whole clock's speed dial — control temperature and you slow every assassin at once.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Rates rise exponentially with T (Arrhenius named; algebra bounded).\\n- Q10 ≈ 2: rate roughly doubles per 10 °C — rule-of-thumb, not a constant.\\n- Hot side: shelf-life shrinks; emulsions crack; volatiles flee.\\n- Cold side: freezing is physical destruction; chilling precipitates some solutes.\\n- Statements are mechanisms: below-30/cool/do-not-freeze/refrigerate — taught with the WHY.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the doubling convention and its honest status.\\n2. Why is freezing a physical event, not a preservation win?\\n3. Translate three storage statements into mechanisms.\\n4. Give the three counselling honesties (car, kitchen, fridge door).\\n5. Why does temperature control slow ALL assassins at once?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Every ten degrees doubles the damage — roughly. Cool is chemistry; freezing is vandalism; the label's temperatures are mechanisms, not suggestions.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-6',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Light',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Light** is energy delivered without contact: photochemical degradation — bonds cleaved, radicals born — in drugs that absorb the relevant wavelengths.\\n\\n**The mechanism** (the A-level bridge): a molecule absorbs a photon, reaches an excited state, and either reacts directly (bond cleavage — the photolysis pathway) or passes the energy on (sensitised reactions — the named class). The action spectrum honesty: what matters is WHICH wavelengths the product absorbs (UV-class typically the damaging band) — the "photo" is specific, not mystical.\\n\\n**The consequences**: potency loss (the photolabile drug's assay falls), colour/odour changes (the visible warnings), peroxide formation in some classes (the oxidation bridge to 43-8), and the packaging-critical cases (some drugs are so photolabile that light exposure during MANUFACTURE/dispensing matters — the amber-everywhere register).\\n\\n**The defences** (the ladder): **amber glass** (the classic — blocks the damaging band; the pct-28-3 material canon applied), **opaque/foil secondary packaging** (the carton IS the light barrier — the "keep in outer carton" label line's reason), **opaque primary packs** for the most sensitive (the plastic-bottle opacity honesty), and **handling discipline** (dispense in the carton; counsel the windowsill error — the sunny-bathroom-shelf honesty).\\n\\n**The label translation**: "protect from light" = keep in the secondary pack/amber container — a mechanism instruction (pct-28-9's duty).\\n\\n**The counselling duties**: keep in the carton, out of direct sunlight, and never decant a photolabile product into a clear container (the transfer crime).\\n\\n**The spine**: light is chemistry at a distance — amber and cardboard are the shield, and the windowsill is the enemy.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Photochemistry: photon in → excited state → cleavage or sensitised reaction (wavelength-specific).\\n- Consequences: potency loss, colour/odour change, peroxides (43-8 bridge).\\n- Defences: amber glass → opaque cartons → opaque primaries → handling discipline.\\n- "Protect from light" = the carton/amber mechanism (pct-28-9 duty).\\n- Counselling: carton on, sun off, never decant to clear glass.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Sketch the photolysis mechanism and the sensitised branch.\\n2. Why is the damage wavelength-specific?\\n3. Order the defence ladder and name its canon.\\n4. What does the carton actually do?\\n5. Name the three counselling duties.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sunlight is a scalpel for some molecules: amber glass filters, the carton shields, and the windowsill kills. Photolabile means the box is part of the medicine.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-7',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Moisture',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Moisture** is the universal accomplice: liquid forms swim in water (its chemistry dealt with in formulation), but SOLID forms — tablets, capsules, powders — fight an invisible war with atmospheric humidity, and moisture usually wins the unguarded pack.\\n\\n**The solid-form mechanisms** (each named): **surface adsorption** — a water film forms on particles (the chemistry stage for 43-2's solid-state degradation — hydrolysis needs the film); **hygroscopic uptake** — some excipients/drugs pull water vapour strongly (the deliquescence honesty: dissolve-in-their-own-water extremes named); **caking** — adsorbed moisture bridges powder particles (the pct-34-9 packaging echo); **tablet consequences** — softening, disintegration changes, coating blemishes (35-10's echo); **capsule consequences** — the gelatin double bind (36-1's canon referenced: dry cracks, wet softens).\\n\\n**The efflorescence/hygroscopic pairing** (the named vocabulary): some solids LOSE their crystal water to dry air (efflorescence — the powdering honesty), others GAIN (hygroscopic/deliquescent — the caking honesty); both are physical-stability failures (43-1's register).\\n\\n**The defences** (the ladder): **barrier packaging** — blister ladders (35-10's PVC→PVDC→foil hierarchy applied) and tight closures; **desiccants** (silica-class — the sachet's job and its honest limits: a saturated sachet is a placebo); **unit-dose packaging** (the moisture exposure budget spent once); **formulation water control** (dried granules at the right moisture — 34-8's endpoint echo).\\n\\n**The counselling duties**: keep the lid TIGHT (the daily crime), never store in bathrooms (the humidity capital of the home), keep desiccant IN the bottle (the "why is there a sachet" teaching), and never move tablets to unvented pillboxes for moisture-sensitive classes.\\n\\n**The spine**: water in the air is a slow flood — barrier, desiccant, tight lid, dry room: the war is won at the closure.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Solid forms fight humidity: adsorption films → hydrolysis stage; caking; gelatin's double bind (36-1 referenced).\\n- Vocabulary: hygroscopic/deliquescent (gain) vs efflorescent (lose) — both are failures.\\n- Defences: barrier ladders (35-10 applied), desiccants (with saturated-sachet honesty), unit-dose, formulation moisture control (34-8 echo).\\n- Counselling: tight lid, no bathrooms, keep the sachet, vented pillbox caution.\\n- The war is won at the closure.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace the adsorption-film mechanism to chemical degradation.\\n2. Define efflorescence vs deliquescence with one consequence each.\\n3. Rank blister barriers and name who needs the top.\\n4. What is the saturated-desiccant honesty?\\n5. Give the four counselling duties.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Humidity floods solids invisibly: films feed hydrolysis, cakes form, capsules crack or stick. Tight lids, dry rooms, faithful desiccants — moisture loses at a good closure.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-8',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Oxidation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Oxidation** is electron theft — atmospheric oxygen (and its reactive friends) slowly converting vulnerable drug molecules into changed, often inactive or noxious ones. The slow spoilage of oils, the rancid smell, the darkened product: the oxidative family.\\n\\n**The mechanism** (the A-level bridge, bounded): oxygen's ground state is reactive enough for slow chemistry; **autoxidation** is the classic chain — initiation (a radical forms, often catalysed by LIGHT (43-6's bridge), heat, or TRACE METALS), propagation (radical + oxygen → peroxides → more radicals — the chain's self-feeding nature named), termination (radicals meet — the minority event). The peroxide intermediate honesty: peroxides are themselves damaging (the assay/impurity consequence).\\n\\n**The vulnerable classes** (named by class): oils/fats (rancidity — the oleaginous-base and fish-liver-oil honesty), phenols/catechol-class drugs, unsaturated/vitamin classes (A/D/E register), aldehyde-class drugs.\\n\\n**The trace-metal accelerators** (the named honesty): copper/iron traces catalyse initiation — hence **chelating agents** (EDTA-class — the named countermeasure) in oxidation-prone formulations.\\n\\n**The defences ladder**: **antioxidants** — the sacrificial chemistry (ascorbic-acid/tocopherol/BHT-class named: the antioxidant oxidises FIRST); **chelators** (EDTA-class for the metal catalysts); **oxygen minimisation** — nitrogen-flush filling, minimal headspace (39-6's echo), full containers; **light exclusion** (43-6's co-defence); **cool storage** (43-5's co-defence).\\n\\n**The detection frame** (named, bounded): peroxide values/odour/colour as the practical tells.\\n\\n**The spine**: oxygen is patient but relentless — sacrifice an antioxidant, jail the metals, flush the air, dim the light, keep it cool: five defences, one electron.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Autoxidation chain: initiation (light/heat/trace metals) → propagation (peroxides feed radicals) → termination (rare).\\n- Vulnerable: oils (rancidity), phenols, vitamins A/D/E class, aldehydes.\\n- Trace metals catalyse — chelators (EDTA-class) jail them.\\n- Defences: sacrificial antioxidants + chelators + nitrogen-flush/headspace minimisation + light exclusion + cool.\\n- Peroxides are themselves damaging — the intermediate honesty.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Walk the autoxidation chain naming each step's accelerators.\\n2. Why are peroxides a double problem?\\n3. Name the sacrificial defence and two named antioxidant classes.\\n4. What do chelators jail, and which class are they?\\n5. Assemble the five-defence ladder with its echoes (43-5/43-6/39-6).`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Oxygen steals electrons through a self-feeding chain: light and metals start it, peroxides spread it. Sacrifice the antioxidant, jail the metal, flush the air — the rancid smell is the confession.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-9',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Hydrolysis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Hydrolysis** is water's chemistry: the water molecule splits a bond — esters and amides above all — and the drug becomes two smaller pieces, usually without activity. For liquid medicines it is the number-one chemical threat.\\n\\n**The mechanism** (the A-level bridge): water attacks the carbonyl carbon of an ester/amide; acid or base catalyses it (the specific-acid/specific-base catalysis naming) — which is why pH is the master lever (the pH-of-maximum-stability concept from 43-2, operationalised here); neutral pH is often the calm middle.\\n\\n**The vulnerable classes** (named by class): **esters** (aspirin-class — the classic: ester hydrolysis to salicylate/acetic acid, the vinegar-smell honesty; local-anaesthetic ester class), **amides** (more resistant but real — the β-lactam class named: the antibiotic ring that water opens), **lactones/lactams** (the ring versions).\\n\\n**Where the water is** (the exposure map): solutions (fully exposed — the reconstituted antibiotic's short BUD is THIS chemistry — pct-43-10's echo), emulsions (the aqueous phase's threat — the pct-30-6 partition echo: some drugs hide in oil from the water), SOLIDS (the surface-moisture-film honesty from 43-7 — even dry tablets hydrolyse on their adsorbed water).\\n\\n**The defences ladder**: **formulation** — the stable pH (pct-13's buffer canon), the water-free vehicle (anhydrous bases/oily vehicles — 40-5's families referenced), the DRY intermediate (the reconstitution design: store dry, add water LAST — the two-life design from 38-1/42-2 referenced), solid-state control (43-7's defences); **packaging** — moisture barriers (43-11); **storage** — cool (43-5's co-defence).\\n\\n**The reconstitution counselling** (the dispensing register): use cool water where stated, respect the in-use BUD, refrigerate the reconstituted bottle — the hydrolysis clock made patient-facing.\\n\\n**The spine**: water is the solvent and the saboteur — keep it out, neutralise its attack, or schedule its arrival (reconstitution).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Hydrolysis splits esters/amides; acid/base catalysed — pH is the master lever.\\n- Vulnerable: esters (aspirin-class vinegar honesty), amides (β-lactam class named), lactones.\\n- Exposure: solutions fully; emulsions partially (partition echo); solids via adsorbed films (43-7).\\n- Defences: stable pH (pct-13), anhydrous vehicles (40-5), dry-until-use design (38-1/42-2), barriers, cool.\\n- Reconstitution = scheduled hydrolysis: BUD + refrigeration counselling.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the water-attack mechanism and the catalysis names.\\n2. Why is pH the master lever — which concept?\\n3. Name the vulnerable classes with their signature honesty.\\n4. How does even a dry tablet hydrolyse?\\n5. Explain reconstitution as "scheduled hydrolysis" and its two counselling lines.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Water snaps esters and amides: acid hurries it, base hurries it, pH 5-ish sighs. Keep drugs dry, buffered, or add the water only when the patient is ready.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-10',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Basic Shelf-Life Concepts',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Shelf-life** is where stability becomes a date: the labelled duration over which the product stays within specification — and the arithmetic this lesson owns (the Tier C core) prices it for first-order degradation.\\n\\n**The vocabulary** (the concepts): **shelf life** — the unopened-product duration to specification; **expiry date** — its calendar expression; **BUD (beyond-use date)** — the after-opening/reconstitution/compounding clock (the shorter, more honest date — the 37-9/41-7 echoes applied); **in-use time** — the multi-dose container's post-first-puncture window (42-8's echo).\\n\\n**The t90 concept**: for first-order degradation, shelf-life is conventionally the time to 90% of labelled potency remaining (**t90**) — the stated convention: a 10% loss is the classical compendial-class threshold (stated as the classical convention).\\n\\n**The first-order arithmetic** (consuming the pct-23/24 exponential family — referenced, not re-derived): fraction remaining f = e^(−kt). Setting f = 0.90:\\n\\n$$\\nt_{90} = \\frac{-\\ln(0.90)}{k} = \\frac{0.105}{k}\\n$$\\n\\n**The worked arithmetic** (this lesson's core): k from stated data → t90; the reverse (required k for a target shelf life); the temperature-stress estimate via the doubling rule-of-thumb (43-5's convention).\\n\\n**The honest limits** (what makes the arithmetic a teaching tool): real shelf-lives come from VALIDATED stability PROGRAMMES (multiple lots, multiple conditions, assay + impurity data — the PCY 201 boundary: programme design/interpretation is theirs); the rule-of-thumb temperature estimate is an estimate; t90 assumes first-order and potency-only (impurity limits can bind earlier).\\n\\n**The spine**: k is the speed of dying, t90 is the date on the label — and the label's honesty is backed by programmes, not just algebra.`,
      },
      {
        kind: 'FORMULAS',
        body: `**First-order remaining fraction** (pct-23/24 family)\\n\\n$$\\nf = e^{-kt}\\n$$\\n\\n**Shelf life to 90% potency (t90)**\\n\\n$$\\nt_{90} = \\frac{0.105}{k}\\n$$\\n\\n**Reverse (maximum k for a target shelf life)**\\n\\n$$\\nk_{max} = \\frac{0.105}{t_{90}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — t90 from k.** Stated: a first-order drug degrades with k = 1.44e−4 day⁻¹. t90 = 0.105/1.44e−4 ≈ **729 days ≈ 2.0 years**.\\n\\n**Example 2 — the reverse.** The label needs 2 years (730 days): k(max) = 0.105/730 ≈ **1.44e−4 day⁻¹** — the formulation must deliver this rate or better.\\n\\n**Example 3 — the temperature stress (rule-of-thumb).** A product with 2-year shelf life at 25 °C stored at ~35 °C (rate ≈ ×2 by the Q10 ≈ 2 convention): effective k doubles → t90 ≈ 729/2 ≈ **≈ 1 year** — a year of shelf life spent by a hot shelf. Stated as the rule-of-thumb estimate, not a guarantee.\\n\\n**Example 4 — BUD register.** A reconstituted antibiotic holds 7 days refrigerated (stated BUD): its k over that week is far higher than the dry powder's — the two-life design (38-1/43-9 echoes) priced: the dry product's "expiry" measures the sealed powder; the BUD measures the wet clock.\\n\\n**Example 5 — check key.** k = 0.021 day⁻¹: t90 = 0.105/0.021 = **5 days** — matches a stated 5-day BUD register.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish shelf life, expiry, BUD, and in-use time.\\n2. Why 90% — the convention's status?\\n3. k = 7.2e−5 day⁻¹ — t90 in days and years? (≈1458 d ≈ 4.0 y.)\\n4. Target shelf life 3 years — maximum k? (0.105/1095 ≈ 9.6e−5 d⁻¹.)\\n5. Why is the hot-shelf estimate an estimate, and who owns the real programme?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Fraction remaining falls as e^(−kt); the label date is where it crosses 0.90: t90 = 0.105/k. Heat doubles the dying; programmes — not algebra alone — make the date honest.`,
      },
    ],
  },
  {
    nodeId: 'pct-43-11',
    courseId: 'pct-201',
    topicId: 'pct-43',
    nodeType: 'subtopic',
    title: 'Stability-Related Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Stability-related packaging** is the block's synthesis: the container chosen because of what would otherwise kill the product — the pct-28 packaging canon applied at stability register (the whole course's defences meet the bottle).\\n\\n**Barrier selection by enemy** (the mapping discipline):\\n\\n*Moisture* → barrier ladders: blister PVC → PVDC-coated → foil-foil (35-10's hierarchy applied); tight screw closures; desiccants (43-7's defence with its saturated-sachet honesty).\\n\\n*Light* → amber glass, opaque plastics, foil blisters, THE CARTON (43-6's ladder applied).\\n\\n*Oxygen* → minimal headspace, nitrogen-flush designs (43-8's echo), barrier films; the pump/spray formats that limit air exchange (40-9's echo).\\n\\n*Temperature* → the pack cannot cool, but it can SURVIVE: foil laminates for the freezer-risk classes, the do-not-freeze contract on the label (43-5's honesty).\\n\\n**Material honesties** (the pct-28-3 canon applied): glass inert-but-fragile; plastics sorptive/leachable-capable (the compatibility test named); stoppers' extractables — the sterile register from 42-8.\\n\\n**The child-resistance/senior-use trade** (pct-28's canon: the CRC mechanism and its opening-force honesty).\\n\\n**The label as packaging** (the final duty): storage statements as mechanisms (pct-28-9's translation discipline), expiry/BUD dates (43-10's registers), the "keep in outer carton" line for photolabile classes, the discard-after-opening lines — the label is the stability plan the patient can read.\\n\\n**The counselling synthesis** (the course's closing habit): teach the WHY of every storage line — cool because chemistry doubles, carton because light cuts, tight because humidity floods, dated because the clock is real.\\n\\n**The spine**: packaging is formulation's last argument — every barrier on this page exists because a factor on a previous page never sleeps.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Map barriers to enemies: moisture (blister ladder/desiccants), light (amber/carton), oxygen (flush/headspace/pumps), temperature (survive + label contract).\\n- Material honesties: glass fragile, plastics sorptive, stoppers extractable (42-8 echo).\\n- CRC trade named (pct-28 canon).\\n- The label is the stability plan: storage mechanisms + expiry/BUD registers + carton/discard lines.\\n- Counselling: teach the WHY of every storage line.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Map each of the four factors to its packaging defences.\\n2. Rank blister barriers and name the top's buyer.\\n3. What can packaging NOT do for temperature, and what does it do instead?\\n4. Assemble the label's stability lines with their lessons.\\n5. State the closing counselling habit of the course.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The bottle is the last formulation argument: foil against water, amber against light, flush against air, and a label that explains all of it. Teach the why — the patient keeps the stability.`,
      },
    ],
  },
];
