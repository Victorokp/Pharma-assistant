import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-28: Pharmaceutical Packaging and
 * Labelling.
 *
 * Batch 31: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–27
 * top-level topic convention) plus its eleven children pct-28-1…28-11
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-28 has no surviving Phase-1 tier record; every child
 * is conceptual (packaging science and labelling practice — no
 * calculation children), so the whole block is Tier B under the
 * established convention. Convention-derived, flagged pending
 * confirmation.
 *
 * Scope discipline: THIS topic owns container/closure science and the
 * formal labelling canon. The dispensing-side duties that consume it
 * are pct-26-7/27-12/27-13's bench canon (cross-referenced, not
 * re-taught); stability/dating science is pct-43's (28-10 owns the
 * label-facing expiry vs beyond-use distinction); dosage-form storage
 * behaviour is pct-2's; specific regulatory wording (statutory label
 * formats, pharmacopoeial container standards) is referenced as
 * framework canon, never quoted or invented.
 */
export const pct201PackagingLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-28',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'topic',
    title: 'Pharmaceutical Packaging and Labelling',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Packaging and labelling are the medicine's **interface with the world**: the container that protects the product from manufacture to administration, and the label that carries its identity and instructions to everyone who handles it. A perfectly formulated medicine in the wrong container degrades; a correct medicine with a wrong label is dispensed wrongly.\\n\\n**The two halves of the topic.** *Packaging* (28-1…28-5): why we package, the primary/secondary/tertiary layers, container types and materials, the container–closure system as an integrated unit, and the factors that drive selection. *Labelling* (28-6…28-11): the label as information carrier, the mandatory information set, auxiliary labels, storage statements, the expiry vs beyond-use distinction, and packaging's patient-safety role.\\n\\n**Why pharmacists study it.** The pharmacist selects containers at the bench (27-12), writes labels (27-13), translates storage rules to patients (27-17), and answers for presentation (26-7) — every one of those steps draws on this topic's science.\\n\\n**Standing discipline**: standard terms and conventional values (storage temperatures, label categories) are taught as conventions; specific statutory formats and pharmacopoeial standards are framework canon — referenced, never quoted or invented.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Packaging protects and identifies; labelling instructs — the medicine's interface with the world.\\n- Two halves: packaging science (28-1…28-5) and labelling practice (28-6…28-11).\\n- The bench steps (27-12/27-13) and presentation duty (26-7) consume this science.\\n- Conventional terms/values taught as conventions; statutory wording referenced, never invented.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the two halves of the topic and the lessons in each.\\n2. Which four bench/professional steps draw on this topic?\\n3. What degrades first: a correct formulation in a wrong container, or vice versa — and why is the question ill-posed?\\n4. What is the standing discipline about statutory label formats?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Container protects, label instructs. Selection is science (protection, compatibility, patient), labelling is canon (mandatory set, aux labels, storage, dating) — and the bench consumes both.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-28', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-28-1',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Purpose of Pharmaceutical Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Packaging exists for four purposes, in a deliberate order.\\n\\n**(1) Containment** — the obvious but foundational job: the product is held in a defined quantity, without leakage, from filling to administration. Every other purpose presupposes it.\\n\\n**(2) Protection** — the product is defended against its enemies: *physical* (shock, abrasion, pressure — a tablet is friable, a ampoule is glass), *chemical* (oxygen, moisture, light — the stability enemies of pct-43's canon), and *biological* (microbial contamination — the sterility barrier for pct-15's parenteral forms). Protection is product-specific: the container is chosen against the product's known vulnerabilities, not generically.\\n\\n**(3) Identification and information** — the pack carries the label (28-6's canon): what the product is, its strength, its batch, its expiry. Without identification, containment and protection protect an unknown — useless at the bench and dangerous at the bedside.\\n\\n**(4) Convenience and compliance** — packaging that helps the patient use the medicine correctly: unit-dose blisters that make the dose countable, child-resistant closures that slow small hands (28-11), measuring devices matched to the product.\\n\\n**The pharmacist's framing**: at the bench, packaging choice is a safety decision (26-7's presentation duty) — the purposes are the checklist that makes the choice defensible.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four purposes in order: containment → protection (physical/chemical/biological) → identification → convenience/compliance.\\n- Protection is product-specific: chosen against known vulnerabilities (pct-43's enemies).\\n- Without identification, protection protects an unknown.\\n- Bench packaging choice is a safety decision — the purposes are the defensibility checklist.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four purposes in order and one concrete failure for each.\\n2. Name the three classes of threat packaging protects against, with a pct-canon link for each.\\n3. Why is identification listed as a purpose rather than assumed?\\n4. How does packaging serve compliance, concretely?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Hold it, guard it, name it, make it usable. Four purposes, one checklist — the bench choice must be able to answer to all four.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-2',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Primary and Secondary Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Packaging is layered, and each layer has a different job.\\n\\n**Primary packaging** contacts the product directly: the blister film around a tablet, the glass vial, the plastic bottle, the ointment tube, the ampoule. Its requirements are the strictest because contact means **interaction is possible** — leaching (container components migrating into the product), sorption (product components binding to the container), permeation (moisture or oxygen crossing the wall). Primary packaging is therefore part of the product's stability story (pct-43's canon) — a product tested in one container is not automatically valid in another.\\n\\n**Secondary packaging** is the outer layer that does not touch the product: the carton, the printed foil wallet, the patient information leaflet's home. Its jobs are identification, information, physical protection of the primary pack, and presentation — and it is where the patient reads.\\n\\n**Tertiary packaging** (named for completeness) is the transport layer — shipper cartons — whose job survives to the loading dock, not the pharmacy.\\n\\n**Why the distinction matters at the bench**: the pharmacist dispenses in or with primary packaging (27-12's decant decisions) but the *information* duties (leaflets, expiry display, batch traceability) often live on the secondary pack — discard the carton and some of the label canon leaves with it, which is why 'keep the outer carton' is common professional advice.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Primary contacts the product: strictest requirements — leaching, sorption, permeation are the interaction classes.\\n- Primary packaging is part of the stability story (pct-43); validity is container-specific.\\n- Secondary: identification, information, physical protection, patient reading.\\n- Tertiary = transport.\\n- Bench link: decant decisions are primary-pack decisions; the carton carries information duties.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define primary/secondary/tertiary with one example each.\\n2. Name the three product–container interaction classes and their directions.\\n3. Why is stability validity container-specific?\\n4. What professional advice follows from information living on the secondary pack?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Primary touches and therefore interacts; secondary informs and protects; tertiary ships. The closer the contact, the stricter the science.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-3',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Types of Containers',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Containers are made from three material families, each with a protection profile.\\n\\n**Glass** — chemically inert, impermeable to gases and moisture, transparent, rigid. Its costs: weight, fragility, and (for the wrong glass grade) alkali leaching — which is why pharmacopoeias grade glass by chemical resistance (the grading system is pharmacopoeial canon, referenced): the most resistant borosilicate grades for sensitive/injectable products, treated or soda-lime grades for less demanding ones. *Forms*: ampoules (single-dose, sealed, opened by breaking — pct-15's sterility canon), vials (multi-dose possible, closed with a stopper — see 28-4), bottles for liquids and tablets.\\n\\n**Plastics** — light, unbreakable, cheap, mouldable into patient-friendly shapes. Their costs: permeability (moisture/oxygen cross most plastics — the reason moisture-sensitive tablets live in blisters or glass), leaching/sorption (plasticisers, additives), and stress-cracking with some products. Common pharmaceutical plastics (polyethylene, polypropylene, PVC, PET) each carry a profile; selection is a matching exercise (28-5).\\n\\n**Metal** — collapsible tubes (semi-solids: ointments, creams) and pressurised canisters (aerosols/inhalers). Excellent light/moisture barrier; corrosion and interaction with the product are the selection watch-points.\\n\\n**Container categories by use**: single-dose vs multi-dose (sterility implications, pct-15), light-resistant (amber) vs clear, airtight vs wide-mouth — the category follows the product's need.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three families: glass (inert/impermeable/fragile — pharmacopoeial grades by resistance), plastics (light/cheap but permeable/leachable), metal (tubes, canisters — barrier excellent, corrosion the watch-point).\\n- Amber = light protection; single- vs multi-dose carries sterility duties (pct-15).\\n- Selection is a matching exercise — material profile against product vulnerability (28-5).\\n- Glass grading is pharmacopoeial canon — referenced, not memorised.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give two strengths and two costs for each material family.\\n2. Why do moisture-sensitive tablets avoid most plastics, and where do they live instead?\\n3. Distinguish ampoule from vial and name the sterility implication of each (pct-15 canon).\\n4. What does 'amber' buy, and for which products is it non-negotiable?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Glass guards, plastic pleases, metal mobilises. Match the material to the enemy: moisture, light, oxygen, or breakage.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-4',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Container–Closure Systems',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **container–closure system** is the container plus everything that seals it, treated as one integrated unit: bottle + cap + liner, vial + stopper + crimp seal, tube + folded end + cap. The integration is the point — a container is only as protective as its weakest seal.\\n\\n**The closure's jobs**: seal against contamination and moisture/oxygen ingress, allow access when needed (pour, puncture, spray), and reseal or stay sealed as the product's use demands. **Components** commonly include the cap (threaded, snap, crimp), the liner or gasket (the actual sealing face — often the critical polymer), and for punctured systems the elastomeric stopper that self-seals after needle withdrawal (pct-15's multi-dose canon).\\n\\n**System-level properties** are tested, not assumed: **integrity** (the seal survives handling and storage), **compatibility** (closure components do not leach into or sorb the product — the same interaction classes as 28-2, now with the closure as the suspect), **functionality** (opens, closes, dispenses, reseals as designed for the product's life), and **tamper evidence** (a visible break/seal that reveals prior opening — a safety feature for the supply chain).\\n\\n**Child-resistant closures** are a closure-system specialisation: a two-action mechanism that is hard for young children but openable by adults including older adults with reduced dexterity — the design tension is real (28-11's patient-safety canon).\\n\\n**The bench link**: a loose cap discovered at final check (27-14) is a container–closure failure — the supply does not leave the bench.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Container–closure system = container + cap + liner/gasket/stopper, judged as one unit.\\n- A container is only as protective as its weakest seal.\\n- System properties: integrity, compatibility (leach/sorb — closure is the suspect), functionality, tamper evidence.\\n- CR closures balance child resistance against adult dexterity (28-11).\\n- A loose cap at final check is a system failure — the supply stops (27-14).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the container–closure system and name three component types.\\n2. Why is the liner often the critical component?\\n3. Name the four system-level properties and one failure each.\\n4. What is the design tension in child-resistant closures?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Judge the seal, not the bottle: integrity, compatibility, function, tamper evidence — one weak liner undoes the best glass.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-5',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Factors Affecting Container Selection',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Container selection is a **multi-factor match** — the product's needs, the patient's realities, and the supply chain's demands, resolved into one defensible choice.\\n\\n**Product factors.** *Protection needs*: the product's known sensitivities (moisture, oxygen, light — pct-43's stability profile) dictate the barrier class. *Compatibility*: leaching/sorption/permeation against the candidate material (28-2's classes). *Physical form*: tablets flow, liquids pour, semi-solids extrude, injectables must stay sterile — the form narrows the container categories immediately (pct-2's canon). *Sterility and multi-dose use* (pct-15's canon) demand puncturable self-sealing systems.\\n\\n**Patient factors.** *Dexterity and age*: child-resistant closures where indicated, easy-open where the framework's exceptions apply (older patients — the CR/dexterity tension of 28-4). *Administration aid*: measuring devices matched to liquids; unit-dose formats where counting matters. *Portability and course length*: a 7-day course and a 6-month therapy make different pack-size decisions (pct-25-3's arithmetic echoes here).\\n\\n**Supply-chain factors.** Transport robustness (tertiary protection), shelf-space and stacking, cost per unit (pct-25-1's canon) — weighed AFTER protection and compatibility, never before.\\n\\n**The resolution rule**: product protection and compatibility are **non-negotiable**; patient and supply factors choose WITHIN the candidates that protect. A cheaper container that fails the product is not a container.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three factor groups: product (protection, compatibility, form, sterility), patient (dexterity, aids, portability), supply chain (robustness, cost).\\n- Form narrows categories first (pct-2); sterility/multi-dose demands puncture-seal systems (pct-15).\\n- Resolution rule: protection + compatibility non-negotiable; everything else chooses within.\\n- A cheaper container that fails the product is not a container.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the three factor groups with two factors each.\\n2. Which two factors are non-negotiable, and what rule orders the rest?\\n3. How do pct-2, pct-15, and pct-43 each constrain this choice?\\n4. Give a patient-factor conflict (CR vs dexterity) and how frameworks typically resolve it (referenced, not adjudicated).`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Protect first, then fit the patient, then count the cost — in that order. Compatibility failures have no price that makes them right.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-6',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Labels',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **label** is the packaged information layer — text (and symbols) affixed to the pack that identifies the product and instructs its use. The label is read by three audiences with different needs: the **dispenser** (identity, strength, batch, expiry), the **patient** (what it is, how to take it, what to watch for), and the **system** (traceability, recall, legal particulars).\\n\\n**The two label worlds.** *The manufacturer's label* (28-7's mandatory set) travels with the product from factory to pharmacy. *The dispensed label* (27-13's bench canon) is written by the pharmacist for this patient — its content set overlaps the manufacturer's but its directions are THIS order decoded. The two must never contradict: a dispensed label that conflicts with the manufacturer's storage statement is an error to resolve, not a style difference.\\n\\n**Label quality properties**: legibility (readable at a glance, in poor light, by tired eyes), completeness (the mandatory set present), accuracy (every element traces to source — the 26-7/27-13 rule), and durability (survives the product's storage life — smudge-proof, moisture-resistant where needed).\\n\\n**Layout as safety**: the critical information (drug name, strength) is visually dominant; warnings are positioned to be seen, not hidden in fine print. A technically complete label that hides its warnings is a defective label.\\n\\n**The leaflet relationship**: the label points to, and summarises, the fuller patient information leaflet — the label instructs the immediate act; the leaflet carries the full story.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three audiences: dispenser, patient, system (traceability/legal).\\n- Two label worlds: manufacturer's (28-7 set) vs dispensed (27-13 canon) — never contradicting.\\n- Quality properties: legibility, completeness, accuracy, durability.\\n- Layout is safety: critical info dominant, warnings seen — a hidden warning is a defect.\\n- Label instructs the act; leaflet carries the story.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three label audiences and one need of each.\\n2. Distinguish the two label worlds and state their non-contradiction rule.\\n3. Why is layout a safety property rather than a design preference?\\n4. What is the label-to-leaflet division of labour?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The label speaks to three readers at once — complete, legible, accurate, durable, with the dangerous parts impossible to miss.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-7',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Mandatory Label Information',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **mandatory information set** is the collection of particulars a pharmaceutical label must carry before the product may move — the formal canon behind the bench checklist (27-5's order particulars; 27-13's dispensed-label set).\\n\\n**The set, functionally grouped.** *Identity*: product/proprietary name, active ingredient(s) with strength per unit, pharmaceutical form, quantity (units or net weight/volume). *Use*: indications (or route of administration where indications live on the leaflet), dose/directions, route. *Safety*: warnings and contraindications (or the leaflet pointer), storage statements (28-9), 'keep out of reach of children' class statements. *Traceability and legality*: batch/lot number, manufacturing/expiry date, manufacturer/marketer identity, registration/licence particulars per the framework.\\n\\n**The framework dependency**: the EXACT list, wording, and layout are statutory/regulatory canon — jurisdiction-specific and versioned. What this topic owns is the **functional anatomy**: every mandatory item answers a named question from one of the three audiences (28-6), and a missing item is a question the supply chain can no longer answer.\\n\\n**Why batch + expiry are the traceability pair**: the recall instrument (27-15's public-health canon) is built on batch identity; the safety instrument is expiry. Both must survive to the pack the patient holds.\\n\\n**Bench discipline**: when the secondary carton is discarded, the batch/expiry pair must already be on the dispensed container or leaflet — the traceability pair travels with the patient's pack.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mandatory set, grouped: identity (name/actives/strength/form/quantity), use (directions/route), safety (warnings/storage/keep-away), traceability (batch/expiry/manufacturer/registration).\\n- Exact wording/layout is statutory canon — referenced, never adjudicated here.\\n- Every mandatory item answers a named question from a named audience.\\n- Batch + expiry = the traceability/safety pair; they travel with the patient's pack.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Group the mandatory set into its four functional groups with two items each.\\n2. Why is the exact list framework canon rather than this topic's canon?\\n3. Which pair is the recall instrument built on, and which the safety instrument?\\n4. What must the pharmacist ensure before discarding a carton?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Identity, use, safety, traceability — every item answers a question someone will ask. Batch and expiry ride with the pack the patient takes home.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-8',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Auxiliary Labels',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Auxiliary labels** are the small warning stickers added to the dispensed pack — the carrier for the warnings the main label cannot fit or cannot emphasise.\\n\\n**The common categories.** *Storage*: 'Refrigerate, do not freeze', 'Protect from light', 'Shake well before use' (the last is administration-adjacent). *Administration*: 'Take with food', 'May cause drowsiness — do not drive', 'Do not take with antacids/dairy' (product-specific interactions), 'Swallow whole, do not crush' (form-integrity warnings for modified-release forms, pct-2's canon). *Hazard and handling*: 'Flammable', 'Avoid contact with eyes'. *Disposal and course*: 'Complete the course', 'Return unused medicine to the pharmacy'.\\n\\n**The selection discipline** (26-7's rule, canon here): aux labels are **chosen** because they apply to THIS product and THIS patient — an aux label applied reflexively to every pack trains the patient to read none, and the warning that matters is then invisible. The chosen set is the minimum sufficient set: every sticker on the pack earns its place.\\n\\n**Placement and survival**: aux labels go where the patient will meet them (on the closure face or directly beside the directions), and they must survive the storage conditions they themselves demand (a refrigerated pack's aux label must survive condensation).\\n\\n**The bench link**: aux-label selection is part of 27-13's labelling step, checked at 27-14's final check — an omitted aux label is a final-check failure.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Categories: storage, administration (incl. form-integrity warnings — MR forms, pct-2), hazard/handling, disposal/course.\\n- Chosen for this product/patient, never reflexive — the reflexive sticker trains no-reading.\\n- Minimum sufficient set; every sticker earns its place.\\n- Placement where the patient meets them; they survive their own storage demands.\\n- Selection is 27-13's step; omission is a 27-14 failure.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the aux-label categories with one concrete example each.\\n2. What is the selection discipline and what failure does it prevent?\\n3. Why must an aux label survive its own storage demand — give the example.\\n4. Where in the bench sequence is an omitted aux label caught?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Small stickers, chosen sparingly, placed to be seen — each one earns its place or it trains the patient to ignore them all.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-9',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Storage Statements',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Storage statements** are the label's standardised instructions for keeping the product stable — the conventional phrases that compress pct-43's stability requirements into words the supply chain and patient can act on.\\n\\n**The conventional vocabulary** (taught as conventions; exact limits are product-specific from the manufacturer): *'Store below 25 °C / 30 °C'* — the common room-temperature ceilings; *'Store in a refrigerator (2 °C to 8 °C), do not freeze'* — the cold chain for insulins, vaccines, reconstituted suspensions; *'Do not store above 25 °C'* variants; *'Protect from light'* — amber container or outer carton; *'Protect from moisture'* — tight container, no bathroom storage; *'Keep container tightly closed'*.\\n\\n**What each statement means physically** (the translation habit): refrigeration is about reaction kinetics (pct-43's temperature canon — lower T, slower degradation); light protection is about photolabile actives; moisture exclusion is about hydrolysis and physical degradation (effervescence, caking). The statement is the summary; the mechanism is why it is non-negotiable.\\n\\n**The two translation duties.** *Down* to the patient (27-17's canon): '2–8 °C' becomes 'fridge door shelf, not the freezer, not the glovebox'. *Up* to the bench (27-9's canon): the storage statement is a product-integrity criterion — a product stored wrong on the shelf is inspected and queried, not dispensed on the label's optimism.\\n\\n**Excursion honesty**: storage statements describe required conditions, not guarantees against abuse; products with known excursions are assessed (pct-43's canon) before supply.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Conventional vocabulary: below 25/30 °C, refrigerator 2–8 °C do-not-freeze, protect from light/moisture, tightly closed.\\n- Exact limits are product-specific manufacturer canon.\\n- Mechanisms: temperature → kinetics (pct-43); light → photolability; moisture → hydrolysis/physical change.\\n- Two translations: down to the patient's home (27-17), up to the bench's integrity check (27-9).\\n- Excursions are assessed, not assumed away.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the conventional phrase for each: room ceiling, cold chain, light, moisture.\\n2. Why is refrigeration non-negotiable, mechanistically (pct-43 canon)?\\n3. Give the two translation duties and their pct-canon homes.\\n4. What is the professional response to a known storage excursion?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Standard phrases, physical reasons, two translations. The label's temperature is the product's lifeline — say it plainly and check the shelf.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-10',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Beyond-Use and Expiry Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Two dates govern a medicine's usable life, and they are not the same date.\\n\\n**Expiry date** — the manufacturer's commitment: the product, **sealed and stored as directed**, remains within specification until this date (pct-43's stability canon). It is set from stability data and applies to the intact, untouched product.\\n\\n**Beyond-use date (BUD)** — the pharmacist's or compounding canon's shorter limit that begins when the product's **original closure of certainty is broken**: opened multi-dose containers, reconstituted powders, compounded preparations (pct-19's canon), unit-decanted liquids. The BUD is assigned from the applicable framework conventions (pharmacopoeial and compounding standards — referenced, never invented here), the product's properties, and storage reality; it is **always no later than expiry**.\\n\\n**Why opening shortens life**: the sealed product's protection is removed — microbial access (multi-dose containers, pct-15's canon), moisture/oxygen ingress, light exposure, and for reconstituted products the dissolved state itself (reconstitution converts a stable solid into a less stable liquid — many reconstituted suspensions carry days-not-months refrigerated limits; the exact limit is product-specific manufacturer canon).\\n\\n**The bench discipline** (27-9/27-13's canon): the BUD is written on the dispensed label **with its date**, not just its rule; opened shelf stock is dated on opening; and a product whose BUD has passed is removed from stock regardless of appearance.\\n\\n**The exam distinction**: expiry belongs to the sealed product; BUD belongs to the opened or prepared one. Confusing them over-dates opened stock — the classic error.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Expiry: manufacturer's date for the SEALED, correctly stored product (pct-43).\\n- BUD: shorter limit from first opening/reconstitution/compounding; assigned per framework conventions; never later than expiry.\\n- Opening shortens life: microbial access, ingress, light, dissolved-state instability.\\n- BUD is written WITH its date (27-13); opened stock is dated on opening; expired-BUD stock is removed regardless of appearance.\\n- Exam distinction: sealed → expiry; opened/prepared → BUD.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define both dates and state which one is always the shorter.\\n2. Name four reasons opening shortens usable life.\\n3. Why does reconstitution shorten life so dramatically for suspensions?\\n4. What three bench disciplines keep BUD honest?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sealed = expiry; opened = BUD, always shorter, always dated on the label. The day the seal breaks, the clock restarts at a faster speed.`,
      },
    ],
  },
  {
    nodeId: 'pct-28-11',
    courseId: 'pct-201',
    topicId: 'pct-28',
    nodeType: 'subtopic',
    title: 'Packaging and Patient Safety',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Packaging is a **patient-safety system**, not just product protection — the layer where container design prevents poisoning, dosing errors, and medication mix-ups.\\n\\n**Child-resistant closures**: the two-action mechanism (push-and-turn, squeeze-and-turn) that young children cannot reliably defeat — with the standing tension that older adults and patients with dexterity limitations must still open them (28-4/28-5's design conflict; frameworks define exemptions, referenced not adjudicated). CR packaging is why 'keep out of reach of children' remains necessary even with it — no closure is childproof, only child-resistant.\\n\\n**Unit-dose and blister formats**: the dose becomes **countable and visible** — the patient can see what was taken (an adherence and overdose-prevention instrument), children cannot easily swallow a blistered tablet, and the dispenser's count is verifiable (27-7's quantity reconciliation).\\n\\n**Tamper evidence**: seals and break-rings that reveal prior opening — protection against deliberate contamination in the supply chain (a regulatory expectation for oral products, framework canon referenced).\\n\\n**LASA separation by packaging**: look-alike/sound-alike products (26-9's error class) are separated not only by shelf position but by **different pack presentations** where systems allow — the container as an error-prevention device.\\n\\n**The honest limits**: packaging aids adherence but does not replace understanding (27-16's counselling); CR closures add seconds of difficulty that some patients cannot afford — the pharmacist's judgement (28-5's factors) tailors the pack to the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- CR closures: two-action, child-RESISTANT not childproof; dexterity tension resolved by framework exemptions.\\n- Unit-dose/blister: countable, visible doses — adherence, overdose prevention, verifiable counts.\\n- Tamper evidence: reveals prior opening — supply-chain protection (framework canon).\\n- LASA separation extends to pack presentation — the container as error-prevention.\\n- Packaging aids but never replaces counselling (27-16); the pack is tailored to the patient (28-5).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain 'child-resistant, not childproof' and the design tension it carries.\\n2. Name three safety functions of unit-dose/blister formats.\\n3. What does tamper evidence protect against, and for which product class is it expected (framework canon)?\\n4. How does packaging join the LASA defence, and which lesson owns the error class?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Containers that slow children, show doses, reveal tampering, and separate look-alikes — packaging is the safety system you can hold. Still counsel: no pack replaces understanding.`,
      },
    ],
  },
];
