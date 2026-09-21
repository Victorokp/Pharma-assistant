import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-3: Pharmaceutical Ingredients and Excipients.
 *
 * Batch 14: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/pct-10 top-level topic
 * convention) plus its thirteen children pct-3-1…3-13 (Tier B, plain names).
 * Node IDs and titles mirror curriculum.ts exactly; nothing here creates or
 * renames nodes.
 *
 * Scope discipline: each lesson has a distinct purpose (family member's
 * function, mechanism/property link, formulation role, selection caution) —
 * never a repeated "definition → uses → examples" cycle. Cross-overs are
 * deferred, not duplicated: biphasic-system physics → pct-2-3 with full
 * emulsion technology in PHM 201; preservation vs sterility → pct-2-5;
 * stability chemistry depth → PCY 201. No numerical dosing or compounding
 * claims are made; the block is conceptual.
 */
export const pct201ExcipientsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'topic',
    title: 'Pharmaceutical Ingredients and Excipients',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every medicine is a cast of two: the **active pharmaceutical ingredient (API)** — the molecule that treats — and the **excipients** — everything else, each deliberately chosen to perform a formulation job. "Inactive ingredient" on a label does not mean "useless"; it means "not pharmacologically active". Excipients carry the API (vehicles, diluents), hold the dosage form together (binders), make it work mechanically (disintegrants, lubricants, glidants), protect it (preservatives, antioxidants), make it usable (sweeteners, flavourings, colourings), and stabilise disperse systems (suspending and emulsifying agents).\n\nThe topic's thirteen lessons run that cast in order: the API itself → the excipient concept → the functional families → the closing synthesis (**functions and selection**). Two threads to carry throughout. First, **every excipient is a decision**: it is added because some property of the API or the form demands it, and it always brings its own properties (reactivity, taste, allergenicity) along with the ones wanted. Second, **the excipient is part of the product's quality**: a formulation is not "the drug plus filler" — it is an engineered system whose every component has a reason a pharmacist should be able to name.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Medicine = API (acts) + excipients (enable): "inactive" means non-pharmacological, not useless.\n- Each excipient family answers a formulation demand — carry, hold, work, protect, please, stabilise.\n- Every addition imports its own properties: benefits and risks travel together.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define API and excipient, and explain precisely what "inactive ingredient" does and does not mean.\n2. Group the six functional jobs (carry, hold, work, protect, please, stabilise) to the excipient families this topic names.\n3. Conceptual: why is "the drug plus filler" a wrong description of a formulation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Two-actor system: API + purposeful excipients; nothing is in a medicine by accident.\n- Families ahead: vehicle, diluent, binder, disintegrant, lubricant/glidant, preservative, antioxidant, sweetener/flavour, colourant, suspending/emulsifying agent — then selection.\n- Every addition is a trade: wanted properties arrive with their own.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Active Pharmaceutical Ingredients (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-1',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Active Pharmaceutical Ingredients',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **API** is the pharmacologically active component — the reason the medicine exists. Formulation design starts from the API's own physicochemical character, because those properties dictate everything downstream. The properties that matter most: **solubility** (a drug that dissolves poorly complicates every liquid form and slows absorption from solids), **stability** (sensitivity to hydrolysis in water, oxidation in air, light, heat — each sensitivity rules out or constrains forms, vehicles, and packaging), **particle behaviour** (size and flow properties affect mixing uniformity and tableting), and **taste/irritancy** (drives masking, coating, or route changes).\n\nTwo structural distinctions frame the lesson. **API vs drug product:** the ingredient is the molecule; the product is that molecule formulated, stabilised, and packaged — the distinction fixed in pct-1 and used everywhere. **Potency drives dose drives form:** a drug needed in milligram quantities suits a tablet; one needed in gram quantities strains tablet size and pushes toward sachets or liquids. (The potency/units vocabulary is systematised in pct-11.) The API lesson is deliberately short on lists and long on the habit: for any drug, ask *what does this molecule demand?* — the answer is the excipient story that follows.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- API = the pharmacologically active molecule; the product is the molecule engineered into a form.\n- Solubility, stability, particle behaviour, taste/irritancy — the four property levers of formulation.\n- Dose size (driven by potency) shapes which dosage forms are physically possible.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Reading a product's formulation starts with the API line: knowing a drug is acid-labile or bitter immediately explains an enteric coat or a flavour system — the API's properties are the "why" behind the label.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish API from drug product with a concrete example.\n2. Name the four property levers and give one formulation consequence of each.\n3. Conceptual: how does a drug's potency (hence dose size) constrain which dosage forms are physically reasonable?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- The API's properties are the design brief for every excipient decision.\n- Solubility, stability, particles, taste — four levers, endless consequences.\n- Ask what the molecule demands; the excipient cast is the answer.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Excipients (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-2',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Excipients',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An **excipient** is any intentionally added component of a dosage form that is not the API — included to perform a formulation function: aid manufacture, protect, support or enhance stability, bioavailability, or patient acceptability, or assist in identification and product elegance. The family taxonomy this topic follows: **vehicles** (carry), **diluents** (bulk), **binders** (cohere), **disintegrants** (break apart), **lubricants and glidants** (flow and release), **preservatives** (antimicrobial defence), **antioxidants** (oxidation defence), **sweeteners/flavourings and colourings** (acceptability and identity), **suspending/emulsifying agents** (disperse-system stability).\n\nThree caution threads belong to the concept itself. **"Inactive" ≠ "inert":** excipients can cause allergy or intolerance (well-known examples include colourants in sensitive patients and sugar substitutes with laxative effects at high intake) and can interact with the API or each other. **Grades matter:** pharmaceutical excipients are produced to pharmacopoeial quality specifications — the same chemical at a non-pharmaceutical grade is not interchangeable. **They are not optional garnish:** excipient choice changes dissolution, stability, and acceptability — i.e., it changes the medicine in every sense except the molecule. (The closing selection lesson, pct-3-13, turns these threads into a method.)`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Excipient = every non-API component, each with a stated formulation function.\n- Nine functional families — from vehicles to suspending/emulsifying agents.\n- "Inactive" ≠ inert: allergy, intolerance, and incompatibility risks are real.\n- Pharmaceutical grade per pharmacopoeial specification — quality is part of the definition.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Patient questions ("what is in this tablet?") and allergy screens run on this lesson: the pharmacist can name each component's job and distinguish a genuine concern from a harmless one — the excipient list is not fine print, it is a functional inventory.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define excipient and list the functional families, grouping each by its job.\n2. Conceptual: why does "inactive ingredient" mislead? Give the three caution threads.\n3. Conceptual: why can two products with the same API still not be interchangeable? (Excipient-dependent dissolution/stability/acceptability.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Excipients: the purposeful cast — nine families, nine jobs.\n- Inactive in pharmacology only: risks and grades travel with the function.\n- Excipient choice changes the medicine; the list is a functional inventory.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Vehicles (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-3',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Vehicles',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `A **vehicle** is the carrier medium — the continuous phase in which the API and other ingredients are dissolved or dispersed. In liquids the vehicle is the bulk of the product; in semisolids the same idea appears as the **base** (pct-2-4).`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Vehicle families follow the phase they carry. **Aqueous vehicles** — purified water above all (the pharmacist's default: cheap, non-toxic, tasteless), with **ethanol–water mixtures** (elixirs) where solubility or preservation demands, and **syrup vehicles** (sucrose solutions) where palatability leads. **Oily vehicles** — fixed oils and the oleaginous semisolid bases — carrying drugs that are water-insoluble or where occlusive delivery is wanted. **Propellant/gas phases** in inhalational systems push the vehicle idea to its outer edge. Vehicle choice sets four things at once: **drug solubility capacity** (the drug must actually dissolve or disperse — solubility is vehicle-specific), **stability environment** (water invites hydrolysis and microbial growth; oils resist one and risk the other — rancidity), **patient acceptability** (taste, texture, after-feel), and **delivery behaviour** (how the product spreads, pours, or carries the API across membranes).\n\nThe selection habit: the vehicle is not the backdrop, it is the environment the API lives in — changing it changes solubility, stability, and acceptability simultaneously, which is why "same drug, different vehicle" is a different product.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Vehicle = the continuous carrier phase; in liquids the product's bulk, in semisolids the base.\n- Aqueous (purified water, hydroalcoholic, syrup) vs oily (fixed oils, oleaginous bases) vs gas/propellant at the edge.\n- Vehicle choice sets solubility capacity, stability environment, acceptability, and delivery behaviour at once.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Store in a cool place" and "shake the emulsion" are vehicle warnings in disguise: aqueous products need microbial care, oily ones need rancidity watch — vehicle chemistry is the reason behind storage labels.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define vehicle and relate it to the semisolid base concept.\n2. Compare aqueous and oily vehicles on two axes: solubility capacity and stability environment.\n3. Conceptual: why is "same drug, different vehicle" a different product? Name the four simultaneous effects of vehicle choice.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- The vehicle is the API's environment: aqueous vs oily vs gas — each with its own chemistry.\n- One choice, four consequences: solubility, stability, acceptability, delivery.\n- Storage labels are vehicle warnings; the medium is part of the medicine.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Diluents (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-4',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Diluents',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **diluent** (filler) is an inert bulking agent that increases the physical size of a formulation — its job exists because of arithmetic: many potent APIs are needed only in tiny amounts per dose, and a tablet the size of a grain of sand cannot be manufactured, handled, or swallowed. The diluent pads the unit dose up to a workable, countable size. In **tablets and capsules** the classic diluents are lactose (the historical standard), starches, and microcrystalline cellulose (a modern, widely used direct-compression filler); sachets and powders use the same logic in bulk. Diluents also appear in **lyophilised injectable vials**, giving the freeze-dried plug its structure so that reconstitution yields the intended volume and concentration.\n\nGood diluent properties follow the job: chemically inert toward the API, pharmacologically inert, cheap, compactable (in tablets the filler is also the compression matrix), taste-neutral, and stable. The caution thread — the same one this topic keeps raising: "inert" is relative to the patient. Lactose-containing products carry a real (if usually small) consideration for patients with lactose intolerance — a matter of dose and degree, and a standard example of why the excipient list is read clinically, not just technically.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Diluent = inert bulk to make tiny API doses a workable unit size.\n- Classic tablet/capsule fillers: lactose, starches, microcrystalline cellulose; also structure freeze-dried injectable plugs.\n- Required properties: inert (chemically + biologically), compactable, cheap, taste-neutral, stable.\n- "Inert" is patient-relative: lactose intolerance is the standard caution example.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A 0.25 mg dose in a normal-sized tablet is mostly diluent by mass — which means for potent drugs, the "other ingredients" line is most of the tablet, and questions about what it contains are questions about diluent choice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why do potent APIs create a bulking need? State the manufacturing and patient-handling reasons.\n2. Name three classic diluents and one property each must have.\n3. Conceptual: what second role does a diluent play in a freeze-dried injectable beyond bulk?\n4. Conceptual: why is lactose intolerance a *pharmacist's* screening consideration, not merely a formulation footnote?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Diluents: arithmetic made physical — bulk up tiny doses to countable units.\n- Lactose/starch/cellulose; compactable, inert, cheap.\n- Bulking also structures freeze-dried vials; "inert" is always patient-relative.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Binders (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-5',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Binders',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Tablets are made by compressing powder — but loose, unmixed-cohesion powder does not compress into a strong, uniform tablet. **Granulation** (building larger, free-flowing granules from the powder mix, typically with a wetting liquid that is then dried off) is the classic route; the binder is the ingredient that makes granulation possible.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `A **binder** is the adhesive of the solid dose: added (most often dissolved or dispersed in the granulation fluid), it forms bridges and films between particles so that, after drying and compression, the tablet holds together through coating, packaging, transport, and the patient's pocket. Classic binders: **starch paste** (the traditional workhorse), **polyvinylpyrrolidone (povidone, PVP)** (a modern, soluble standard), and gums like acacia.\n\nThe design tension is the lesson's core: **too little binder → friable tablets** that crumble before use; **too much binder → hard tablets that will not disintegrate** and release their drug slowly or incompletely. The binder thus sits directly on the form's central axis — mechanical strength vs release behaviour — and its selection is a genuine engineering decision, not a default. Solubility matters too: a water-soluble binder dissolves and vanishes on ingestion, letting the tablet fall apart as designed; strongly hydrophobic choices can persist and slow release.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Binder = the adhesive that lets granulation and compression produce a tablet that survives handling.\n- Classics: starch paste, povidone (PVP), acacia.\n- Design tension: too little → friable; too much → over-hard, slow-to-disintegrate.\n- Solubility matters: soluble binders yield the tablet at ingestion; hydrophobic ones can persist.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `When a tablet cracks in the pack or "passes through" a patient seemingly intact, the binder end of the design is a first suspect — the adhesive is why tablets are robust, and its dosage is why they can fail in either direction.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What problem does a binder solve that compression alone cannot?\n2. Explain the too-little/too-much failure modes in terms of the strength-vs-release axis.\n3. Conceptual: why does binder solubility decide what happens to the tablet at ingestion?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Binder: the granulation adhesive — holds the unit dose together from factory to patient.\n- Balance point: strength (not friable) vs release (not over-hard).\n- Soluble binders vanish on ingestion; hydrophobic ones can linger.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Disintegrants (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-6',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Disintegrants',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The binder's job ends the moment the tablet reaches its release site — and the **disintegrant's** begins: an agent built into the tablet whose function is to break it apart rapidly into granules and powder once exposed to fluid, exposing the maximum surface area for dissolution and absorption. The mechanisms are two and worth naming: **swelling** (the disintegrant imbibes water and expands, physically bursting the tablet apart — classic: starch) and **wicking/porosity** (capillary channels draw fluid into the tablet interior, weakening it from within; modern superdisintegrants such as crosscarmellose-type and crospovidone work this way, fast at low concentrations).\n\nThe choreography with pct-3-5 is the lesson's insight: binder and disintegrant are deliberate opposites — one builds integrity before use, the other destroys it at the moment of use. A tablet's *in vivo* performance depends on both happening on schedule, which is why the disintegrant is often called the release-efficiency ingredient. The disintegrant is also where patient-relevant variants get their speed: orally disintegrating forms are, at bottom, an aggressive disintegrant story.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Disintegrant = the built-in self-destruct: breaks the tablet apart in fluid to expose surface for dissolution.\n- Two mechanisms: swelling (starch) and wicking/porosity (modern superdisintegrants).\n- Binder and disintegrant are engineered opposites: integrity before use, rupture at use.\n- Orally disintegrating forms = the disintegrant pushed to maximum performance.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Counselling on dispersible and orally disintegrating tablets — "let it disperse in water" or "place on the tongue, do not swallow whole" — works only because a disintegrant does the work; the instruction is the mechanism made visible.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the disintegrant's function and explain why surface area is the point.\n2. Contrast swelling and wicking mechanisms with one example agent each.\n3. Conceptual: how can a tablet be strong in the pack and fall apart in water? Name the two ingredients and their timing.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Disintegrant: rupture on cue — swelling or wicking — to feed dissolution.\n- The binder's opposite number: build before use, break at use.\n- Fast-disintegrating patient forms are disintegrant engineering in action.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Lubricants and Glidants (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-7',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Lubricants and Glidants',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Two flow-and-friction agents, two different jobs, routinely confused. The **lubricant** reduces friction during tableting — between the powder and the metal die wall, and on ejection — so the tablet can leave the press cleanly without scratching, sticking, or requiring excessive force; the classic is **magnesium stearate**, used at small proportions. The **glidant** improves **flow of the powder blend itself** — how readily the granules feed from hopper into die, uniformly, dose after dose; classic choices are **talc** and colloidal silica. (A related anti-adherent role keeps powder from sticking to punch faces.) The distinction to keep: glidant = powder flows *into* the die; lubricant = tablet leaves *the* die.\n\nThe caution thread is famous in this family: hydrophobic lubricants like magnesium stearate can form a water-repellent film over the particles if over-used or over-mixed — slowing wetting, disintegration, and dissolution. This is the clearest example in the whole topic of an excipient whose benefit (manufacturing) and risk (release behaviour) trade against each other, and why mixing stages and quantities are process decisions with patient consequences. Geometry of use: lubricant is added late, at the final blend step, precisely to limit that exposure.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Lubricant (magnesium stearate): die-wall friction and clean ejection; glidant (talc, colloidal silica): powder flow into the die.\n- Into-die = glidant; out-of-die = lubricant — the one-line distinction.\n- Hydrophobic over-lubrication: a water-repellent film that slows wetting and release.\n- Countermeasure: add late, use sparingly — process discipline with patient consequences.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Dissolution differences between otherwise similar products can trace back to lubrication practice — one more reason bioequivalence is tested rather than assumed from a matching ingredient list.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define lubricant and glidant and give the one-line spatial distinction between their jobs.\n2. Name the classic agent for each and the friction problem each solves.\n3. Conceptual: how exactly can a lubricant slow drug release, and why is the lubricant added late in the process to limit this?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glidant: in (powder flow); lubricant: out (clean ejection).\n- Magnesium stearate, talc, colloidal silica — small amounts, big process effects.\n- Over-lubrication coats particles hydrophobically: the family's benefit-vs-release trade.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Preservatives (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-8',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Preservatives',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Any aqueous, multi-use product is an open invitation to microbial growth: every opening admits organisms, and water supports them. **Sterility** (pct-2-5) eliminates organisms by manufacture and packaging; **preservation** keeps the count down in products that are neither sterile nor re-sterilised at each use.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `A **preservative** is an excipient added to prevent or inhibit microbial growth in the product during its shelf-life and — crucially — during its **in-use life** after opening. Classic families: **benzoic acid and benzoates** and **sorbic acid** (acid-type preservatives whose activity depends on pH — a genuine formulation constraint: they work best in acidic products), the **parabens** (alkyl esters of p-hydroxybenzoic acid; broad, long-standing use), **benzalkonium chloride** (a cationic quaternary ammonium agent — the preserved eye-drop standard), and alcohol/hydroalcoholic systems (the elixir's preservative benefit alongside its solvent role).\n\nSelection logic follows the product: the preservative must be effective against the relevant organisms, **compatible** with the API and other excipients (some bind to suspending agents or partition into oil droplets, lowering the free effective concentration), appropriate to the **route** (eye and injection preservatives are a tightly constrained short list), and non-irritating at use concentrations. Two boundary statements to file precisely: a preserved product is **not sterile**, and preservation has no role in a **single-dose** unit — the dose is used and discarded before growth matters. (Stability-versus-microbes is chemical stability's sibling; the deep chemistry belongs to PCY 201.)`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Preservative = in-use microbial defence for aqueous multi-use products; preserved ≠ sterile.\n- Families: acid-types (benzoic/sorbic — pH-dependent), parabens, benzalkonium chloride, hydroalcohol.\n- Effectiveness depends on pH, compatibility, route, and free (not bound/partitioned) concentration.\n- Single-dose units need no preservative — use-and-discard replaces it.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The after-opening discard date on syrups and drops is the preservative's job description: it is the period the pharmacist can be confident the in-use protection still holds — and the reason expiry-after-opening is professional guidance, not a suggestion.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish preservation from sterilisation — which products need which, and why?\n2. Why are acid-type preservatives pH-dependent, and what does that imply for formulation?\n3. Conceptual: why can a preservative be "present but ineffective"? (Binding/partitioning lowers the free concentration.)\n4. Conceptual: why does a single-dose ampoule need no preservative while a multi-dose eye-drop bottle does?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Preservatives buy in-use microbial safety for aqueous multi-use products — nothing more.\n- pH, compatibility, route, and free concentration decide real effectiveness.\n- Preserved ≠ sterile; single-dose units skip the category entirely.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 9 — Antioxidants (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-9',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Antioxidants',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Oxidative degradation**: molecules with oxidisable sites (phenols, aldehydes, unsaturated chains — APIs and oily vehicles alike) react with molecular oxygen, typically via free-radical chain reactions, producing degraded, sometimes coloured or off-smelling products. The reaction accelerates with light, heat, and trace metal ions.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `An **antioxidant** protects an oxidisable formulation by sacrificing itself: reducing agents (ascorbic acid, sodium metabisulphite — the classic aqueous injectable choice) that are preferentially oxidised, or chain-breaking agents (BHT/BHA, tocopherols) that intercept the radical chain in oily systems. Two companion strategies complete the defence. **Chelating agents** (edetate/EDTA salts) are not antioxidants in the sacrificial sense — they deactivate the trace metal ions that catalyse oxidation, and are used alongside antioxidants as synergists. And the whole system works inside **packaging and storage discipline**: oxygen-tight containers, light-protective amber glass, cool storage — the antioxidant buys time; the packaging removes the drivers. The amber dropper bottle, the foil blister, and "protect from light" labels are this lesson made physical.\n\nA caution with real clinical reach: sulphite antioxidants (metabisulphites) are recognised triggers for hypersensitivity reactions in susceptible individuals — the standard example that "inactive" ingredients reach patients, and why antioxidant choice is route- and population-sensitive.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Antioxidant = preferential sacrifice: reducing agents (ascorbate, metabisulphite) in aqueous systems; chain-breakers (BHT/BHA, tocopherols) in oily ones.\n- Chelators (EDTA) remove catalytic metal ions — a synergist, not a sacrifice.\n- Antioxidant + packaging (oxygen, light) + cool storage = the whole defence; the ingredient alone is not enough.\n- Sulphites: the standard "inactive but patient-relevant" caution (hypersensitivity).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Rancid-smelling oily preparations or unexpectedly darkened solutions are oxidation in front of you — the pharmacist reads them as storage failures first and formulation failures second.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain "preferential sacrifice" — what does an antioxidant actually do to the oxidation reaction?\n2. Why is EDTA used alongside antioxidants rather than instead of one? What does a chelator remove?\n3. Conceptual: why is the antioxidant not the whole defence? Name the packaging/storage partners.\n4. Conceptual: what makes sulphite antioxidants a population-sensitive choice?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Oxidation is a chain reaction; antioxidants break or pre-empt it by sacrifice.\n- Chelators clear the catalysts; packaging and storage remove the drivers.\n- Amber glass and foil blister are the lesson made physical — and sulphites reach patients.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 10 — Sweeteners and Flavouring Agents (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-10',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Sweeteners and Flavouring Agents',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Palatability excipients exist because **unpalatable medicine is unused medicine** — a child who refuses a bitter suspension three times a day is, in practical terms, not treated. **Sweeteners** come in two broad classes: **nutritive** (sucrose — also the syrup vehicle's preservative-partner — glucose, sorbitol) and **non-nutritive/artificial** (saccharin, aspartame, sucralose and relatives), chosen where sugar load matters (diabetic preparations, dental-caries concern, palatability at scale). **Flavouring agents** are chosen by a simple matching logic: masks and complements the API's own taste profile (bitter → citrus/mint families; salty → butterscotch/vanilla; sour/metallic → fruit blends) and suits the product's colour and age group.\n\nSelection constraints are the real content. Sweetener choice imports consequences: sorbitol is commonly chosen for sugar-free products but has a laxative tendency at higher intakes — a classic dose-dependent excipient effect; aspartame carries a phenylalanine note relevant to phenylketonuric patients. Flavourings and their solvents can interact with other excipients and must survive the product's shelf-life (volatile oils fade — the "still smells fresh?" test). The paediatric frame ties the lesson to practice: this family is where **adherence is formulated**, and it is why the same API appears in differently flavoured products for different markets and ages.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Palatability is adherence engineering: refused medicine is ineffective medicine.\n- Sweeteners: nutritive (sucrose, glucose, sorbitol) vs non-nutritive (saccharin, aspartame, sucralose).\n- Flavour logic: mask/complement the API's taste profile; match colour and age.\n- Every choice imports consequences: sorbitol's laxative tendency, aspartame's phenylalanine, fading volatile flavours.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Sugar-free queries (diabetes, caries-prone patients) and "my child hates the taste" are daily counselling events — the pharmacist's answer rides on exactly the sweetener/flavour trade-offs this lesson maps.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is palatability a formulation *function* rather than a luxury? Frame it clinically.\n2. Compare nutritive and non-nutritive sweeteners and name one selection reason for each class.\n3. Conceptual: why does sorbitol's laxative tendency make it a dose-and-population question, not a yes/no ingredient?\n4. Conceptual: what makes flavour selection a matching exercise rather than a "pick something pleasant" choice?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Sweeten and flavour = formulate adherence, especially for children.\n- Nutritive vs artificial; each imports its own patient considerations.\n- Flavouring is taste-profile matching that must survive the shelf-life.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 11 — Colouring Agents (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-11',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Colouring Agents',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **colouring agent** has three honest functions: **identity** (a colour-coded product line reduces dispensing errors — the pharmacist's safety interest, not vanity), **consistency** (a stable product should look the same batch after batch; colour also compensates the viewer for the API's own unappealing tint), and **patient acceptance** (expectation shapes experience of taste and quality). Colourants divide into **dyes** (water-soluble, used at low concentrations in liquids) and **lakes/pigments** (insoluble colourants adsorbed onto a substrate — used in coatings and solids where water-solubility would migrate or streak). Natural colourants (chlorophylls, caramel, carotenoid-type) exist alongside the synthetic certified families.\n\nThe discipline in this family is restraint and honesty. Colour must not **mislead**: a colour change in a stored product is a stability signal, and masking a product's genuine degradation with added colour is not a formulation function — the added colour must be *stable itself* against light and oxidation (fading colourants are a quality marker). And colourants are allergen/sensitivity territory: they are the classic "inactive ingredient" that some patients must avoid, which is why the label lists them. The lesson's frame: colour is communication and safety, governed by the same cost-benefit logic as every other excipient — minimal dose, stated purpose, patient-relevant risks named.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Colour functions: identity (error reduction), batch consistency, patient acceptance.\n- Dyes (water-soluble, liquids) vs lakes/pigments (insoluble, coatings/solids); natural options exist.\n- The colourant must be self-stable — fading is a quality signal; masking degradation is not a function.\n- Colourants are the classic sensitivity/allergen "inactive" — read the label clinically.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Generic-to-brand colour differences drive real patient questions ("is this the same medicine?") — the pharmacist explains identity by API and product, using the colour lesson to separate perception from pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three honest functions of colouring agents and the safety function hidden in "identity".\n2. Distinguish dyes from lakes and say where each belongs.\n3. Conceptual: why must a colourant be light/oxidation-stable, and why is masking genuine degradation never a function?\n4. Conceptual: a patient reacts to a coloured product — what does this illustrate about "inactive" ingredients?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Colour communicates: identity, consistency, acceptance — with restraint.\n- Dyes for liquids, lakes for coatings; stability of the colour itself is part of quality.\n- Sensitivity territory: colourants are why labels list "inactives" clinically.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 12 — Suspending and Emulsifying Agents (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-12',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Suspending and Emulsifying Agents',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Biphasic systems (pct-2-3): a **suspension** disperses insoluble solid in liquid; an **emulsion** disperses liquid droplets in an incompatible liquid. Both are thermodynamically unstable — gravity settles the solid, coalescence merges the droplets. These agents are the ingredients that make the instability slow and reversible.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `A **suspending agent** works mainly by **viscosity**: thickening the vehicle (natural gums — acacia, tragacanth; cellulose derivatives; hydrated clays) slows sedimentation and, just as importantly, prevents the settled solid from caking into a hard, unre-dispersable mass — the agent is why "shake well" restores a uniform dose. A **surface-active agent** enables the *formation* of fine dispersions at all by lowering interfacial tension; in emulsions the **emulsifying agent** additionally forms a stabilising film around each droplet (its type — with the oil-in-water vs water-in-oil outcome — depends on its own solubility balance) and builds interfacial elasticity/electrostatic repulsion against coalescence. The two roles overlap in practice: some agents do both jobs, and emulsions typically pair a primary emulsifier with a thickener for the continuous phase.\n\nThe formulation consequence: these agents decide whether a biphasic product is **usable** — redispersion on shaking, uniform dosing, acceptable pour. Their limits are the family's honesty: they slow the physics, they do not repeal it, hence the shake-well and use-by disciplines. (The deep disperse-system physics and emulsion technology belong to PHM 201; this lesson supplies the ingredient-level view.)`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Suspending agents: viscosity up, sedimentation slow, cake-prevention — "shake well" works because of them.\n- Emulsifying agents: lower interfacial tension, form droplet films, resist coalescence; type sets o/w vs w/o.\n- Often paired: primary emulsifier + continuous-phase thickener; some agents do both jobs.\n- They slow instability, not repeal it — physics depth belongs to PHM 201.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The counselling instruction "shake well before use" is exactly this lesson: the agent guarantees the *re*-dispersion that makes every spoonful the intended dose — skipping the shake returns a wrong-dose product.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain the two jobs of a suspending agent (slow sedimentation AND prevent caking) and why the second matters for dosing.\n2. What three things does an emulsifying agent do at the droplet interface?\n3. Conceptual: why is "shake well" a dosing instruction, not a convenience note?\n4. Conceptual: these agents make biphasic products possible but not permanent — state what still limits the product's life.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Thickening + film-forming: the two ingredient strategies against biphasic instability.\n- Suspensions need viscosity and cake defence; emulsions need interfacial stabilisers.\n- Agents enable the shake-well contract; PHM 201 holds the deeper physics.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 13 — Functions and Selection of Excipients (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-3-13',
    courseId: 'pct-201',
    topicId: 'pct-3',
    nodeType: 'subtopic',
    title: 'Functions and Selection of Excipients',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The synthesis lesson: from the family list to a selection method. **Function first** — every excipient entry should be answerable as "this is here to do X": carry (vehicle), bulk (diluent), cohere (binder), rupture (disintegrant), flow/release (lubricant/glidant), defend from microbes (preservative), defend from oxygen (antioxidant ± chelator), please (sweetener/flavour/colour), stabilise dispersions (suspending/emulsifying agent). One ingredient may hold several functions; no ingredient should hold none.\n\n**Selection** runs five screens in practice. 1. **Function fit** — does it perform the needed job at a reasonable proportion? 2. **Compatibility** — with the API (catalysis, complexation, pH conflicts) and with the other excipients; incompatibility is silent on the shelf and visible only in performance. 3. **Route and patient fitness** — route-constrained lists for sterile and ophthalmic work; population cautions (lactose, sulphites, aspartame/phenylalanine, sugar load) screened against the likely user. 4. **Quality/grade** — pharmacopoeial specification, consistent supplier quality. 5. **Stability and cost** — the excipient must survive the product's shelf-life and the product's economics. The professional habit this topic closes with: read any formulation — product leaflet, dispensary recipe, or exam question — as a set of answered questions, and be able to say what question each ingredient answers. That habit is the bridge to the form-technology topics ahead.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Every excipient answers a question: carry, bulk, cohere, rupture, flow, defend, please, stabilise — one or several, never none.\n- Selection screens: function fit → compatibility → route/patient fitness → quality grade → stability and cost.\n- Incompatibilities are silent until performance reveals them.\n- Read formulations as answered questions; that is the topic's closing skill.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Formulation-reading is a daily pharmacist act — comparing products, troubleshooting complaints, answering "what's in it and why?". The five-screen method is how that act becomes disciplined instead of intuitive.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the nine functional questions an excipient can answer, and map three families to each of two functions where ingredients overlap.\n2. Walk the five selection screens for (illustratively) choosing a preservative for a paediatric oral suspension — which screens do the most work and why?\n3. Conceptual: why is compatibility called a "silent" property? What eventually reveals it?\n4. Conceptual: two products share an API and an ingredient list yet perform differently — what selection-screen differences could explain this?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Functions are questions; selection is a five-screen method — fit, compatibility, patient, grade, stability/cost.\n- Incompatibilities hide until performance; screens exist to catch them earlier.\n- The topic ends as a reading skill: every ingredient is an answered question.`,
      },
    ],
  },
];
