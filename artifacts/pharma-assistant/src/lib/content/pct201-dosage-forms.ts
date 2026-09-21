import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-2: Pharmaceutical Dosage Forms.
 *
 * Batch 13: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/pct-10 top-level topic
 * convention) plus its eight children pct-2-1…2-8 (Tier B, plain names).
 * Node IDs and titles mirror curriculum.ts exactly; nothing here creates or
 * renames nodes.
 *
 * Scope discipline: this block CLASSIFIES dosage forms and reads them from
 * the outside (what each class is, when it is chosen, its trade-offs). How a
 * given class is engineered internally belongs to the later PCT technology
 * topics and is only pointed to, not taught. Excipient detail stays with
 * pct-3; measurement practice stays with pct-6.
 */
export const pct201DosageFormsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'topic',
    title: 'Pharmaceutical Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **dosage form** is the physical presentation in which a drug is delivered to the patient — the tablet, capsule, syrup, cream, injection, patch. pct-1 established the chain: drug → dosage form → route. This topic opens the middle link: what the presentations *are*, how they are classified, and what each is good and bad at.\n\nWhy classification matters: form follows function. A form class is a bundle of properties — physical state, route capability, onset speed, stability, dose flexibility, patient acceptability — and knowing the class tells you most of those properties before you read the label. The eight lessons run: **classification** (the naming logic itself) → the four physical-state families **solid, liquid, semisolid, sterile** → the engineered **modified-release** family → the comparative judgement (**advantages and disadvantages**) → and the closing bridge to prescribing reality (**routes of administration and dosage-form selection**).\n\nOne thread to carry through: every classification below is built on *design intent*, not appearance alone — a tablet and a lozenge are both solids, but their intents (swallowing vs slow local dissolution) put them in different practical worlds. Keep asking "what is this form FOR?" and the taxonomy organises itself.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A dosage form is the physical presentation delivering the drug — the product the patient uses.\n- Each form class is a bundle of properties: state, route, onset, stability, flexibility, acceptability.\n- Classification follows design intent, not just physical appearance.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define dosage form and state its position in the drug → form → route chain.\n2. Conceptual: name two properties a form class bundles beyond its physical state, and show how they follow from the state.\n3. Map check: list the eight lessons of this topic and say in one line what the sequence builds.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Dosage form = the delivery presentation; this topic is its map.\n- Form classes are property bundles driven by design intent.\n- Eight lessons: classify, then four state families, then modified release, then the trade-off and selection view.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Classification of Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-1',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Classification of Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Classification means sorting the whole world of dosage forms by a rule. The rules are layered, and each layer answers a different question.\n\n**By physical state** (the primary axis): **solids** (tablets, capsules, powders), **liquids** (solutions, suspensions, emulsions, syrups, injections), **semisolids** (ointments, creams, gels, pastes) — and gases/aerosols as the outer edge. **By route**: oral, topical, parenteral (injectable), rectal, inhalational, ophthalmic, otic. **By design intent**: immediate release vs **modified release**, single-dose vs multiple-dose, unit dose vs bulk. The layers combine: an oral modified-release solid tablet is located on all three axes at once.\n\nWhy the layering matters: the physical state predicts *handling* (how it is made, packed, stored), the route predicts *delivery* (where it acts, what sterility or tonicity it needs), and the design intent predicts *behaviour in time* (how fast the drug appears). A student who can place any product on all three axes can predict most of its practical behaviour before ever seeing its patient information leaflet — that placement skill is what this topic trains.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Primary axis: physical state — solid, liquid, semisolid (gas at the edge).\n- Second axis: route — oral, topical, parenteral, rectal, inhalational, ophthalmic.\n- Third axis: design intent — immediate vs modified release, unit vs bulk dosing.\n- Full placement uses all three axes: state → route → intent.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Shelf arrangement, storage rules, and dispensing language all assume this taxonomy — "orals", "topicals", "injectables" are physical-state/route buckets, and every product query starts by placing the item on the map.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three classification axes and place "oral modified-release tablet" on each.\n2. Conceptual: a syrup and an injection are both liquids. Which axis separates them, and what practical property difference does that axis carry?\n3. Conceptual: why is design intent a deeper axis than appearance? Give one pair of same-state forms whose intents differ (e.g. swallow-tablet vs lozenge).`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Three axes: state, route, intent — place a product on all three.\n- State → handling; route → delivery; intent → behaviour in time.\n- Placement predicts practical behaviour; that is the skill the topic builds.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Solid Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-2',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Solid Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Solids are the world's most dispensed form family, built on one advantage: a dry drug is a stable drug. **Tablets** — the compressed unit dose, made by compressing powder granules; variants are named by intent: **film-coated** (taste/acid/swallow), **enteric-coated** (acid-labile drugs delayed past the stomach), **chewable** and **dispersible** (no-swallow settings), **sublingual/buccal** (absorption through oral mucosa, bypassing the gut). **Capsules** — powder, pellets, or liquid sealed in a gelatin (or vegetarian) shell; hard and soft variants, the shell dissolving to release the fill. **Powders and granules** — bulk or sachet presentations, reconstituted or mixed before use. **Suppositories** — solid at room temperature, melting/softening at body temperature for rectal (or vaginal/urethral) delivery.\n\nThe shared property logic: solids pack the **best stability** and the most **accurate unit dosing** (each unit individually measured at manufacture) into the smallest, lightest package — which is why manufacturers press nearly everything into solid form when the drug permits. The shared limitation: the drug must **dissolve before it can absorb**, so a poorly soluble drug may be a poor solid candidate; and swallowing ability excludes pure tablets for many patients (the variant list above is the industry's answer).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dry = stable: solids lead on shelf-life, dose accuracy per unit, and portability.\n- Tablet variants encode intent: film coat (taste/acid/swallow), enteric (acid-labile), chewable/dispersible, sublingual.\n- Capsules = shell + fill (powder/pellets/liquid); suppositories melt at body temperature.\n- Limit: dissolution precedes absorption — poor solubility makes poor solids.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Counselling is variant-aware: an enteric-coated tablet must not be crushed (the coat IS the design), sublingual forms are not swallowed, and dispersibles go into water first — each instruction comes straight from the variant's design intent.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why do solids lead on stability and unit-dose accuracy? State the physical reason for each.\n2. Conceptual: an acid-labile drug needs oral delivery. Name the solid variant that solves this and explain exactly what the coat does.\n3. Counselling-logic: a patient cannot swallow tablets. Name three solid-family answers with different intents and what each demands of the patient.\n4. Conceptual: why is a poorly soluble drug a weak candidate for any solid oral form? (Dissolution → absorption.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Solid family: tablets (many intents), capsules, powders/granules, suppositories.\n- Strengths: stability, per-unit dose accuracy, portability.\n- Limit: dissolution before absorption; swallowing excludes some patients.\n- Variant names are design intents — read them as instructions.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Liquid Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-3',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Liquid Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Liquids trade shelf-life for flexibility: the drug is already (or about to be) dissolved or dispersed, so absorption needs no dissolution step. **Monophasic** systems are one uniform phase: **solutions** (drug fully dissolved in water or another vehicle — syrups are sweetened aqueous solutions, elixirs hydroalcoholic ones), plus **syrups** and **elixirs** as the flavoured/preserved members. **Biphasic** systems are two phases that separate without help: **suspensions** (solid dispersed in liquid — "shake well before use") and **emulsions** (liquid dispersed in liquid, oil-in-water or water-in-oil — the milky look).\n\nThe design consequences follow the structure. Liquids allow **dose flexibility** (5 mL or 7.5 mL — the dose can be tuned to the patient), are the **paediatric and swallowing-impaired** defaults, and give **faster onset** than solids. The costs: chemical stability in water is poor (hydrolysis, microbial growth — hence preservatives and short after-opening shelf-life), suspensions and emulsions are **physically unstable** (settling, creaming, cracking — hence "shake well" and expiry discipline), bulk liquids are heavy to carry, and **dose measurement** transfers from the factory to the spoon/syringe — accuracy now depends on the measuring device and the person using it (pct-6's craft). Reconstitutables (dry powder + water at dispensing) are the industry's stability compromise: dry storage, wet use.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Monophasic (solutions, syrups, elixirs) = one phase; biphasic (suspensions, emulsions) = two phases that separate.\n- Liquids give flexible dosing, faster onset, and paediatric/swallowing access.\n- Costs: aqueous instability, preservative need, physical separation (shake well), measurement moves to the user.\n- Reconstitutables: stored dry for stability, made up to volume at dispensing.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every "shake well", "discard 14 days after opening", and reconstitution instruction on a label is liquid-physics and liquid-chemistry management — the pharmacist's daily liquid literacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Classify: solution, suspension, emulsion, syrup — monophasic or biphasic, and what does each structure imply about separation?\n2. Conceptual: why does a suspension carry a "shake well" label while a solution does not? Say what the two phases are.\n3. Conceptual: why are paediatric doses usually liquids? Name two structural reasons (flexibility; swallowing).\n4. Conceptual: what problem does reconstitution-at-dispensing solve, and what work does it move to the pharmacy?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One phase vs two: solutions/syrups/elixirs never separate; suspensions/emulsions must be redispersed.\n- Flexibility + onset + access; paid for in stability, preservation, and user-side measurement.\n- Shake well, discard dates, and reconstitution are the family's management rules.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Semisolid Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-4',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Semisolid Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Semisolids live between liquid and solid: they hold their shape at rest, flow under shear. The family is defined by its **base** — the vehicle that carries the drug and sets the product's character. **Ointments** — greasy, usually oleaginous bases: strongly occlusive (they seal moisture in), excellent for dry, scaly lesions, poor washability. **Creams** — oil-in-water emulsion bases: lighter, spreadable, washable, the everyday dermatological compromise. **Gels** — aqueous bases gelled with a thickener: clean, non-greasy, easily washed off, good on mucous membranes and hairy sites. **Pastes** — ointments loaded with a high proportion of powder: stiff, very protective, used where a barrier must stay put.\n\nThe property logic — the part to carry forward: **base choice controls both delivery and feel**. The base decides how much drug reaches the skin (partitioning from a greasy base into skin differs from that from a watery gel), how the site feels (occlusive vs cooling), how easily it washes off, and where it can be used (mucous membranes and weeping lesions generally want aqueous systems; dry lesions want the occlusive greases). And the therapeutic frame: semisolids are overwhelmingly **local/topical** players — the site is the skin or mucous membrane itself, so the form competes on residence, texture, and washability rather than on systemic absorption speed.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Semisolid = holds shape at rest, flows under shear; defined by its base.\n- Ointment (greasy, occlusive) vs cream (o/w, washable) vs gel (aqueous, clean) vs paste (powder-loaded barrier).\n- The base controls delivery, feel, washability, and site suitability.\n- Family is local/topical by design — site competes on residence and texture.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Ointment or cream?" is a base-selection question the pharmacist answers daily: dry scaly plaque → occlusive ointment; weeping or hairy site → washable aqueous gel; routine eczema → cream. The base IS the counselling answer.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Match base to property: which of ointment/cream/gel/paste is most occlusive, most washable, most protective-barrier, and why.\n2. Conceptual: why does base choice affect drug delivery, not just feel? (Partitioning from base into skin.)\n3. Selection: a weeping lesion and a dry scaly lesion — which base family suits each, and what happens if you swap them?\n4. Conceptual: why are semisolids judged on residence and texture rather than onset speed?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- The base defines the product: grease ↔ water ↔ gel ↔ paste.\n- Base → delivery + feel + washability + site fit; one choice, four effects.\n- Local therapy by design: residence and texture are the competitive axes.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Sterile Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-5',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Sterile Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Sterility means the absence of viable microorganisms. It is required wherever a form bypasses the body's outer barriers — skin and gut lining — because the barriers are the defence the product would be violating.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The sterile family is defined by that requirement, not by physical state (most are liquids, but the defining property is the barrier-bypass). **Parenterals** — injections: intravenous (directly into the vein — instant systemic access), intramuscular (into muscle — depot and fast-but-not-instant absorption), subcutaneous (under the skin — slower, the insulin zone), intradermal (into skin layers — the tuberculin test). **Ophthalmics** — eye drops and ointments: sterile, and additionally gentle (pH/tonicity controlled — the isotonicity concept detailed in pct-13). **Irrigation fluids and dialysates** — large-volume sterile solutions contacting exposed tissue.\n\nThe requirement list follows directly: **sterility** itself, **pyrogen-freeness** (fever-causing bacterial debris must also be absent — sterile but pyrogenic is not acceptable), **particulate control** (nothing visible may float in a vein-bound liquid), and for injectables **tonicity/pH discipline** so blood and tissue are not damaged. Packaging carries the same logic: single-dose ampoules vs multi-dose vials (with preservative and repeated-puncture risk), and the after-opening clock that multi-dose containers start the moment they are breached. The professional consequence is the gravest in this topic: breaches of sterile technique are not quality drift, they are direct infection routes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sterile family = defined by barrier-bypass: IV, IM, SC, ID injections; ophthalmics; irrigation/dialysis fluids.\n- Requirements: sterility, pyrogen-freeness, particulate control, tonicity/pH discipline.\n- Ampoule = single dose; multi-dose vial = preservative + after-opening clock.\n- Technique breaches are infection routes — the highest-stakes handling in the topic.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every IV bag check, vial puncture, and eye-drop expiry query is sterile-family management. The pharmacist's job is to keep the product's sterility promise intact from manufacturer to administration.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is the family defined by barrier-bypass rather than physical state? Which requirement drops away for a topical ointment and why?\n2. Distinguish the four injection routes by depth and onset logic (IV instant → ID intradermal).\n3. Conceptual: a vial is sterile. Why is "sterile but pyrogenic" still a failure, and what does that imply about manufacturing?\n4. Conceptual: what changes the moment a multi-dose vial is first punctured, and how does the design respond?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Barrier-bypass defines the family; sterility, pyrogens, particles, tonicity are the requirements.\n- Routes: IV → IM → SC → ID, from instant to intradermal.\n- Packaging enforces the rules: single-dose vs multi-dose with its after-opening clock.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Modified-Release Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-6',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Modified-Release Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Conventional (immediate-release) forms dump their drug for dissolution as soon as they arrive. **Modified-release (MR)** forms engineer *when and where* release happens. Two directions of modification: **delayed release** — nothing happens until a trigger; the classic is the **enteric coat** (hold release through the acid stomach, release in the intestine — for acid-labile drugs or to avoid gastric irritation). **Extended release (ER/CR/SR)** — release stretched over hours: matrix tablets (drug embedded in a slowly eroding or diffusing skeleton), coated pellets (different pellet populations dissolve at different times, packed in one capsule), osmotic systems (water pulled in through a semi-permeable shell pushes drug out through a laser-drilled port at a controlled rate).\n\nThe payoffs: fewer administrations per day (adherence is the clinical win), flatter drug-level curves (fewer peaks and troughs — steadier effect, less peak-linked toxicity), and site-targeted release. The costs and the hard safety rule: MR products carry **more drug per unit** released over time, so **they must never be chewed, crushed, or split** — destroying the release mechanism dumps the whole payload at once (**dose dumping**). Some shells leave an inert ghost tablet in the stool (the shell passed; the drug is gone) — counselling must say so or patients think the drug failed. And MR economics: these are engineering-heavy products, typically more expensive, and many are not substitutable with ordinary-release equivalents.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two modification directions: delayed (enteric — stomach-triggered hold) and extended (matrix, coated pellets, osmotic pump).\n- Wins: fewer daily doses, flatter level curves, site-targeted release.\n- Rule: never crush/chew/split MR — payload dump is a real overdose mechanism.\n- Ghost shells are normal; counsel patients before they conclude failure.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Do not crush" lists, the ghost-tablet warning, and substitution checks on MR prescriptions are this lesson at the bench — the release design is a safety feature, and the pharmacist is its guardian.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish delayed-release from extended-release by what is being modified and give the classic example of each.\n2. Conceptual: why does crushing an MR tablet risk overdose even though the total drug amount is unchanged? (Rate, not amount, is the design variable.)\n3. Counselling: a patient reports "the tablet came out whole in my stool". What is the likely product design, and what must the pharmacist say?\n4. Conceptual: name the adherence and pharmacokinetic payoffs of ER, and the engineering cost that explains the price premium.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- MR = engineering the release timeline: delay it (enteric) or stretch it (matrix/pellets/osmotic).\n- Fewer doses, flatter curves — but never crush, and explain ghost shells.\n- The design variable is release RATE; destroying the mechanism destroys the dose control.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Advantages and Disadvantages of Major Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-7',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Advantages and Disadvantages of Major Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This lesson is the comparative judgement the earlier lessons set up — the same property viewed as an advantage or a disadvantage depending on need. **Tablets/solids:** best stability, cheapest per dose, accurate units — but slow onset (dissolution first), swallowing barrier, and inflexible dosing (no half a tablet by design). **Liquids:** flexible dosing, fast onset, easy swallowing — but stability burden (preservatives, after-opening clocks), measurement error moves to the user, and bulk. **Semisolids:** site-targeted local action with adjustable texture — but dosing is the least exact in pharmacy (a "fingertip unit"), and base choice can misfire on the wrong site. **Sterile injectables:** total bioavailability and speed — the ceiling of control — but the highest requirement stack (sterility, pyrogens, technique) and the sharpest failure mode (infection). **Modified release:** adherence and steadiness — but dump risk if broken, and cost.\n\nThe judgement habit: no form wins globally. The professional question is always "for this drug, this patient, this situation, which bundle of trade-offs fits?" — a form is chosen *against* requirements, and the same form can be the perfect answer and the wrong answer in two neighbouring cases.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Every advantage is a disadvantage somewhere else: stability ↔ slow onset; flexibility ↔ instability; speed ↔ sterility burden.\n- Solids: stable/cheap/accurate; liquids: flexible/fast; semisolids: local; injectables: total control; MR: adherence.\n- Selection is always against requirements — never in the abstract.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Substitution decisions, form-change requests ("can I get tablets instead?"), and paediatric conversions all run this table — the pharmacist weighs the trade-off bundles rather than memorising a ranking.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. For each of tablets and liquids, name two advantages and two disadvantages, and identify which patient situations flip the balance.\n2. Conceptual: why is "injectables are the most effective form" an incomplete statement? What requirement stack and failure mode does the advantage import?\n3. Conceptual: the same drug exists as a tablet and a syrup. List the trade-offs that decide which suits a patient who cannot swallow.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Compare by property bundles, not winners: every strength imports a weakness.\n- Solids stable/flexible-fast/site-local/sterile-controlled/MR-steady — and each pays.\n- The form is chosen against this patient's requirements; that judgement is the lesson.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Routes of Administration and Dosage-Form Selection (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-2-8',
    courseId: 'pct-201',
    topicId: 'pct-2',
    nodeType: 'subtopic',
    title: 'Routes of Administration and Dosage-Form Selection',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **route** is the pathway the dosage form travels: **oral** (the default — convenient, safe, but first-pass metabolism and slower onset), **topical** (skin/mucosa — local intent), **parenteral** (injection routes — instant, total control, sterile discipline), **rectal** (bypasses partial first-pass; useful in vomiting or for children), **inhalational** (huge absorptive surface, local lung action or rapid systemic), **ophthalmic/otic** (local, with sterile rules), **sublingual/buccal** (rich blood supply, bypasses first-pass). Route and form are linked but not identical: one route hosts many forms (oral: tablets, capsules, syrups, suspensions), and one form can serve several routes with different formulation classes (a solution concept exists as an oral syrup, an eye drop, and an injection — three different products).\n\nSelection runs the constraint chain built across this topic: the **drug's properties** (stability, solubility, first-pass sensitivity) set what is possible; the **therapeutic need** (onset speed, site, duration) narrows the route; **patient factors** (swallowing, consciousness, age, vomiting) confirm or veto; **practical factors** (sterility capability, adherence, cost) finalise. The closing insight of the whole topic: route and form are where pharmacology meets the real world — a perfect drug delivered by an ill-chosen route is a failed medicine, and the pharmacist is the professional who reads and repairs that fit.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Route = the pathway; one route hosts many forms; one form concept can exist in several route-specific products.\n- Oral = convenient but first-passed; parenteral = total control, sterile burden; rectal = first-pass bypass in vomiting/children.\n- Selection chain: drug properties → therapeutic need → patient factors → practical finalisation.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Prescription reading is route+form literacy: "amoxicillin 250 mg/5 mL oral suspension" states route (oral), form (suspension), and the handling consequences (shake well, after-opening clock) in one line — the whole topic compressed into a label.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name four routes and one characteristic trade-off of each (convenience vs speed vs sterility burden).\n2. Conceptual: why is sublingual delivery useful for a first-pass-heavy drug? What does the route bypass?\n3. Selection-logic: an unconscious vomiting patient needs an antiemetic — walk the selection chain and name the surviving route family.\n4. Conceptual: why is "a solution is a solution" false across routes? Contrast oral syrup vs sterile injectable solution as products.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Route and form are linked but distinct; labels encode both plus their handling rules.\n- Each route pays its own price: first-pass, sterility, technique, adherence.\n- Selection = drug → need → patient → practical; this closes the pct-2 map.`,
      },
    ],
  },
];
