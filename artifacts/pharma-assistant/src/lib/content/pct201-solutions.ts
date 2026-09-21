import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-37: Pharmaceutical Solutions.
 *
 * Batch 40: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–36
 * top-level topic convention) plus its nine children pct-37-1…37-9
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-37 has no surviving Phase-1 tier record; the block is
 * formulation-conceptual with no calculation children (dilution
 * arithmetic is pct-22's canon; tonicity math pct-13's), so all ten
 * lessons are Tier B under the established conceptual-lesson
 * convention. Attributed pharmacopeial/typical figures appear with
 * explicit sourcing language; no invented conventions.
 * Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns oral liquid formulation and the
 * solution classes. pct-29 keeps solubility/dissolution science (37-6/
 * 37-7 consume); pct-31-6 keeps micelle/CMC/solubilisation science
 * (37-7 applies); pct-29-7 keeps ionisation/H-H (consumed for
 * pH-solubility and preservative-unionisation arguments); pct-22 keeps
 * dilution arithmetic (referenced); pct-21 keeps extraction (named);
 * PHM 201 owns sterilisation and spoilage MICROBIOLOGY (37-8 keeps the
 * chemical-preservation response); PCY 201 owns regulatory
 * interpretation; pct-28 packaging canon applied (37-9); pct-32
 * viscosity consumed (37-2).
 */
export const pct201SolutionsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-37',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'topic',
    title: 'Pharmaceutical Solutions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **solution** is the simplest dosage form chemically and the hardest formulation problem physically: one phase, drug dissolved molecularly — no particles to suspend, no globules to stabilise. The reward: uniform doses by the spoonful and drug ready for absorption the moment it is swallowed. The price: the drug must STAY dissolved (and stable and preserved) for the shelf life.\\n\\n**The map.** (1) **Oral solutions** — the general form (37-1). (2) **Syrups** — the sucrose classics (37-2). (3) **Elixirs** — the hydroalcoholic answers (37-3). (4) **Linctuses** — the viscous cough vehicles (37-4). (5) **Oral drops** — the paediatric concentrates (37-5). (6) **Solvent selection** — the vehicle decision (37-6). (7) **Solubilisation** — when the drug refuses to dissolve (37-7). (8) **Preservation** — the aqueous duty of care (37-8). (9) **Preparation and packaging** — the bench and the bottle (37-9).\\n\\n**Boundaries policed.** Solubility SCIENCE is pct-29's (consumed); micellar solubilisation science is pct-31-6's (applied); ionisation/pH arithmetic is pct-29-7's (consumed); dilution ARITHMETIC is pct-22's (referenced); extraction is pct-21's (named); sterilisation and spoilage microbiology are PHM 201's (37-8 keeps the formulation response); regulatory interpretation is PCY 201's; packaging canon is pct-28's (applied).\\n\\n**Standing discipline**: pharmacopeial or typical values appear with explicit sourcing language; nothing invented; worked procedures named-and-bounded.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Solution = one phase, drug molecularly dispersed — dose uniformity is automatic; the fight is keeping it.\\n- Map: oral → syrups → elixirs → linctuses → drops → solvents → solubilisation → preservation → preparation/packaging.\\n- pct-29/31-6/29-7 consumed; pct-22 referenced; pct-21 named; PHM 201 owns microbiology.\\n- The formulation tension: dissolved vs stable vs preserved vs palatable.\\n- Sourced figures only — no invented conventions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is dose uniformity "automatic" in solutions — the molecular argument?\\n2. Recite the map and the lesson owning each vehicle class.\\n3. Which canons are consumed vs applied vs deferred in this block?\\n4. State the four-way formulation tension of the solution form.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `One phase, no fights — until the shelf gets involved: solutions trade particle science for solubility, stability, and preservation wars. This block is the peace treaty.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-37', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-37-1',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Oral Solutions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Oral solutions** are aqueous (or hydroalcoholic) single-phase preparations dosed by mouth — the general form this block's other lessons specialise.\\n\\n**The advantages** (each mechanistic): *dose uniformity* (one phase cannot segregate — the molecular argument); *rapid absorption onset* (drug already dissolved — pct-30's absorption chain starts at the finish line); *flexible dosing* (mL measurable to the paediatric/geriatric need); *ease of swallowing* (the dysphagia answer); *taste engineering* (sweeteners/flavours dissolved WITH the drug — 37-2/37-3's refinements).\\n\\n**The disadvantages** (the honest column): *chemical stability suffers in water* (hydrolysis/oxidation proceed — pct-43's canon the reason many drugs cannot be solutions); *microbial growth support* (aqueous = broth — 37-8's duty); *bulk and transport weight*; *dose-measurement error* (the household spoon problem — counselling duty); *taste unmasked for bitter drugs that cannot be sweetened away*.\\n\\n**The formulation anatomy** (the roles this block fills): active (dissolved) + solvent system (37-6) + solubilisers where needed (37-7) + preservatives (37-8) + sweetener/flavour/colour (palatability team, pct-3 canon applied) + buffers/antioxidants where stability demands (pct-13's buffer canon named for the pH-control tool).\\n\\n**Dosing discipline**: the 5 mL spoon, oral syringe, or marked dropper — the professional answer to the household-spoon error; the counselling canon (measure, don't assume).\\n\\n**The standing question this form asks** (the pedagogical spine): CAN the drug stay dissolved AND stable AND preserved? If yes — no form is simpler. If no — the solid forms (35/36) or disperse forms (38/39) wait.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Advantages: uniformity, fast onset (dissolved), flexible mL dosing, swallowability, taste engineering.\\n- Disadvantages: water-driven instability, microbial support, bulk, measuring error, taste limits.\\n- Anatomy: active + solvent (37-6) + solubiliser (37-7) + preservative (37-8) + palatability + stabilisers.\\n- Oral syringe/5 mL spoon: the professional answer to household-spoon error.\\n- The form's question: can the drug stay dissolved, stable, preserved?`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give three advantages and three disadvantages, each with mechanism.\\n2. Why does "already dissolved" speed absorption — which canon supplies the chain?\\n3. Assign each anatomy role its lesson in this block.\\n4. What is the household-spoon problem and the professional answer?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The spoonful that cannot vary: solutions win on uniformity and speed, lose to water and microbes. Measure with the syringe — the kitchen spoon is not a dose.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-2',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Syrups',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **syrup** is a concentrated aqueous sucrose solution — with or without drug and flavouring. Sucrose at near-saturation does three jobs at once: sweetens (palatability), thickens (viscosity — the pct-32 canon consumed: Newtonian-friendly, pours clean), and **self-preserves** (the water-activity argument: sucrose binds water, lowering the free water microbes need — the classic teaching that properly concentrated syrups resist microbial growth, with the pharmacopeial figure attributed: BP Syrup at 66.7% w/w sucrose; USP Syrup at 85% w/v — sourced figures, not invented).\\n\\n**Medicated and non-medicated**: the diluent vehicles (the "simple syrup" base for extemporaneous work) and the finished medicated syrups share the same science.\\n\\n**The sucrose honesty — inversion**: sucrose in aqueous acid (acidic drugs, acidic preservatives) hydrolyses to invert sugar (dextrose + fructose). Consequences: colour darkening (the Maillard-family browning named), and the inversion product is MORE hygroscopic and MORE fermentable than sucrose — the stability watch-point (pct-43's echo; the non-sucrose sweeteners — sorbitol, glycerol, artificial sweeteners — named as the inversion-proof alternatives for diabetic/low-calorie formulations).\\n\\n**Preservation nuance** (the duty 37-8 develops): high sucrose self-preserves, but SYRUP SURFACES and containers' necks (where condensation dilutes locally) remain vulnerable — the "surface growth" honesty; dilution below the self-preserving concentration surrenders the shield.\\n\\n**Preparation routes** (named, 37-9 operationalises): solution with heat (fast; heat-labile caution), agitation without heat (slow; clean), and percolation (the classic compendial method — named).\\n\\n**Why syrups dominated paediatrics**: sweetness masks bitterness (the palatability hierarchy — sucrose still the benchmark), viscosity soothes (the linctus principle at lower register — 37-4's cousin).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Syrup = concentrated aqueous sucrose; sweetness + viscosity + self-preservation in one excipient.\\n- Attributed figures: BP Syrup 66.7% w/w; USP Syrup 85% w/v — water-activity argument, not invention.\\n- Inversion: acid hydrolyses sucrose → invert sugar → browning + more hygroscopic/fermentable.\\n- Surface/dilution vulnerability: the self-preserving shield has holes.\\n- Routes: heat, no-heat agitation, percolation (named; 37-9 operationalises).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name sucrose's three jobs and the mechanism of each.\\n2. State the two attributed syrup figures with their compendia.\\n3. What is inversion, its two consequences, and the modern alternative sweeteners?\\n4. Why can syrup still spoil at the surface or neck?\\n5. Name the three preparation routes and the caution for one.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sugar that sweetens, thickens, and guards its own bottle — until acid splits it or a diluted neck invites the moulds. Invert sugar is the price; water activity the shield.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-3',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Elixirs',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An **elixir** is a sweetened **hydroalcoholic** solution — water + ethanol working together as the solvent system. Where the syrup is water-only, the elixir's alcohol answers the drugs water cannot hold.\\n\\n**Why hydroalcoholic** (the solubility logic — pct-29's polarity canon consumed): ethanol lowers the medium's polarity toward the drug's window; water keeps sweetness and swallowability. The blend is TUNABLE — more alcohol holds more alcohol-soluble drug; the cosolvency principle applied (37-6's lesson). Typical alcohol content sits in the low-to-mid tens of percent (stated as the typical range cited in standard references — elixirs vary; the label is the authority).\\n\\n**Alcohol's second job — preservation**: ethanol is antimicrobial (the membrane/ protein-denaturation mechanism named); a properly formulated elixir is largely self-preserving — 37-8's lighter duty than for aqueous syrups.\\n\\n**Elixir vs syrup** (the comparison the exam loves): elixirs are LESS sweet and LESS viscous (pours thinner — pct-32 echo), BETTER solvents for alcohol-soluble drugs, MORE stable for hydrolysis-prone drugs (less free water), and carry the ALCOHOL CAUTIONS: paediatric/avoid where possible, driver/interaction warnings (disulfiram-class, sedatives), diabetic considerations (alcohol calories), and religious/cultural acceptability — the counselling duties named.\\n\\n**The formulation anatomy**: drug + water/ethanol blend + sweetener (sucrose/sorbitol — often lighter than syrup) + flavour + often a small polyol (glycerol/propylene glycol) as co-solvent and smoothness agent — the pct-3 canon applied to the vehicle itself.\\n\\n**Preparation honesty**: dissolve the ALCOHOL-SOLUBLE components in ethanol first, the water-soluble in water, then combine the phases (aqueous into alcoholic, usually) — the two-phase discipline; the order prevents shock-precipitation (the solubility window crossed too fast — 37-7's hazard previewed).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Elixir = sweetened hydroalcoholic solution; ethanol tunes polarity to the drug (pct-29 consumed).\\n- Alcohol double duty: co-solvent + self-preservative (membrane/denaturation mechanism).\\n- Vs syrup: less sweet/viscous, better solvent, better hydrolysis stability, alcohol cautions.\\n- Alcohol cautions: paediatric, drivers, interactions, calories, cultural acceptability.\\n- Two-phase discipline: dissolve per-solvent first, then combine — order prevents shock precipitation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the water/ethanol blend "tune" solubility — which canon?\\n2. Give the elixir-vs-syrup table from memory (four rows).\\n3. Name four alcohol cautions and their counselling consequence.\\n4. Describe the two-phase preparation discipline and the failure it prevents.\\n5. What second co-solvents often join, and what do they add?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Water sweetens, alcohol dissolves and defends: the elixir is a polarity compromise you can pour. Blend in order, warn about the ethanol, and pour thinner than a syrup.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-4',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Linctuses',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **linctus** is a viscous, syrup-like oral preparation — the cough-medicine vehicle par excellence, designed to be SIPPED, not gulped.\\n\\n**The design logic** (each element answers the cough use-case):\\n\\n*Viscosity* — the high sugar/polyol base clings to the pharyngeal mucosa: a physical demulcent film that soothes the irritated throat (the pct-32 viscosity canon consumed — the linctus is the thick end of the syrup family); the soothed mucosa reduces cough stimulus — vehicle as therapy.\\n\\n*Slow sipping* — the dosing instruction (small, frequent sips) keeps the film present; the vehicle's design and the counselling are one system.\\n\\n*Sweetness* — masks the bitter antitussives (codeine-class, antihistamines — the classic linctus actives named as classes).\\n\\n*Little/no alcohol* — the linctus class typically avoids the elixir's ethanol (paediatric cough use — the caution hierarchy from 37-3 applied).\\n\\n**Linctus vs elixir vs syrup** (the three-way table): the linctus is the MOST viscous and demulcent (sipped, throat-coating), the syrup the sweet standard (swallowed), the elixir the hydroalcoholic solvent answer (swallowed, alcohol present). Same molecular-dispersion principle (all are true solutions — this block's family), different vehicle physics.\\n\\n**Formulation anatomy**: antitussive/antihistamine active + high-sucrose (or polyol) viscous base + flavour + preservative (37-8's duty — viscous does not mean immune; the surface-growth honesty from 37-2 applies).\\n\\n**The counselling duties** (the dispensing loop): sip slowly, don't chase with water immediately (the film's persistence is the therapy), drowsiness warning for the antihistamine/opioid classes (the patient-facing echo).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Linctus = viscous syrup-class vehicle for cough: sipped, not gulped.\\n- Viscosity is therapy: pharyngeal demulcent film soothes the stimulus (pct-32 consumed).\\n- Typically little/no alcohol — paediatric-appropriate (37-3's cautions avoided).\\n- Three-way table: linctus (most viscous, sipped) vs syrup (sweet standard) vs elixir (hydroalcoholic).\\n- Counselling: sip slowly, no immediate water chase, drowsiness warnings.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How is the linctus vehicle itself therapeutic — the mechanism?\\n2. Build the three-way vehicle table (linctus/syrup/elixir).\\n3. Why is the absence of alcohol deliberate in this class?\\n4. Give the three counselling lines and what each protects.\\n5. Why does viscosity not remove the preservation duty?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A linctus is a soothing film you can dose: thick, sweet, alcohol-free, sipped slowly. The coat calms the cough — don't wash it away.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-5',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Oral Drops',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Oral drops** are concentrated solutions (or suspensions) dosed in tiny volumes with a dropper — the paediatric and geriatric small-dose answer where a spoonful is too much volume or too much error.\\n\\n**The design logic**: concentrate the drug (the patient takes drops, not teaspoons — a 15 mL bottle can carry weeks of therapy); dose by DROP COUNT or by the marked dropper/pipette; the caregiver measures, so the FORM minimises the measuring skill demanded.\\n\\n**The drop-volume honesty** (the dimensional truth this lesson must teach): a "drop" is NOT a fixed volume — drop size varies with the liquid's surface tension (pct-31-1's canon live), viscosity (pct-32), the dropper's orifice, and the dropping ANGLE. The traditional arithmetic convention (20 drops = 1 mL for water-class liquids) is a CONVENIENT APPROXIMATION, not a physical law — the labelled dropper (calibrated to the product) is the authority; the counselling duty: use THE dropper supplied, never a substitute.\\n\\n**Formulation anatomy**: concentrated active + vehicle (often water or glycerol/sorbitol blends for palatability at tiny volume) + preservative (the concentrate's small volume does not exempt it — 37-8's duty; some drops are preserved by design, others single-use) + flavour where the volume allows.\\n\\n**Dilution and administration duties**: drops may be given neat or diluted in a little water/juice (the dilution arithmetic is pct-22's canon, referenced); the mixing-and-administering honesty (dilute immediately before dosing — the stability clock of a diluted solution starts then; pct-43's echo).\\n\\n**The comparative frame**: drops vs syrup — same molecular principle, opposite concentration strategy (drops = maximum drug in minimum volume for tiny doses; syrup = pleasant volume for larger doses). The form follows the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Oral drops = concentrates for tiny doses; caregiver measures with the supplied dropper.\\n- Drop size varies with surface tension, viscosity, orifice, angle — "20 drops/mL" is an approximate convention, not physics (pct-31-1/32 live).\\n- The product's own calibrated dropper is the dosing authority.\\n- Preserved by design or single-use; dilute immediately before dosing (pct-22 referenced).\\n- Drops vs syrup: opposite concentration strategies, same solution principle.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why concentrate into drops — the patient and bottle arguments?\\n2. List four variables that change drop size, and state the dosing authority.\\n3. Why is "20 drops = 1 mL" a convention, and which canons make it one?\\n4. Why must a diluted dose be given promptly?\\n5. Contrast drops and syrup on concentration strategy.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Weeks of therapy in a 15 mL bottle: drops trade volume for concentration. A drop is whatever the dropper says it is — use the one in the box.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-6',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Solvent Selection',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **vehicle decision** — the first and largest formulation choice: the solvent system must dissolve the drug (pct-29's science consumed), keep it stable (pct-43's), taste acceptable, be safe at the dose, and pour cleanly.\\n\\n**Water — the default**: non-toxic, non-allergenic, tasteless, dissolves ionics and polars. The quality grades (named-with-attribution): POTABLE water is NOT for formulation; **purified water** is the oral/external standard (the compendial grade named); freshly boiled-and-cooled and stored appropriately for extemporaneous work where grades are constrained. Water's costs: hydrolysis/oxidation arena (pct-43), microbial support (37-8), taste limits for bitter drugs.\\n\\n**The co-solvent team** (each with its profile): **ethanol** (the polarity-tuner and preservative — 37-3's cautions carried), **glycerol** (sweet, viscous, benign, modest solvent power), **propylene glycol** (the workhorse co-solvent — strong solvent power, sugar-free formulations; the caution note: dose-dependent CNS effects at high chronic doses in infants — the paediatric formulation honesty), **sorbitol solution** (sweetener/vehicle hybrid for diabetic/low-sucrose formulas). The cosolvency PRINCIPLE: blend to land in the drug's polarity window — the dielectric/solvency thinking named-and-bounded (the quantitative blend design beyond 200L; pct-29's canon supplies the solubility side).\\n\\n**Aromatic waters** (named): saturated aqueous flavours (peppermint water-class) — traditional vehicles/diluents for palatability.\\n\\n**Oils** (named for the boundary): fixed/essential oils for EXTERNAL and some specialised internal forms — the oral-liquid block stays water/hydroalcoholic; the oil vehicles belong to other forms (39's emulsions, 40's liniments-class).\\n\\n**Tonicity boundary** (named): for ORAL liquids tonicity is a comfort, not a safety imperative — the strict tonicity/pH requirements belong to the sterile/ophthalmic classes (pct-13's canon and pct-42's block own them).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Vehicle must: dissolve, stabilise, taste, be safe, pour — five demands.\\n- Water: purified-water grade for oral/external; potable is not formulation water.\\n- Co-solvents: ethanol (tune + preserve), glycerol (sweet/viscous), propylene glycol (workhorse; infant-dose caution), sorbitol (sugar-free).\\n- Cosolvency principle: blend into the drug's polarity window; blend mathematics bounded.\\n- Aromatic waters named; oils deferred to emulsion/external blocks; oral tonicity is comfort, not safety (pct-13/42 own strict canon).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five vehicle demands.\\n2. Why is potable water not formulation water, and which grade is the standard?\\n3. Profile propylene glycol — power and its one big caution.\\n4. State the cosolvency principle and where its science canon lives.\\n5. Why is oral tonicity a comfort question, and who owns the strict version?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Water first, alcohol to tune, polyols to sweeten and smooth: the vehicle is the formulation's biggest vote. Purified water for the bottle — never the tap.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-7',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Solubilisation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `When the drug refuses the vehicle, the formulator has a toolbox — this lesson applies it to SOLUTION formulation, consuming (never re-teaching) the science canons.\\n\\n**pH adjustment** (the first tool): ionisable drugs dissolve orders of magnitude better as their IONISED salt — the pct-29-7 Henderson–Hasselbalch canon supplies the arithmetic; the formulation act: pick a pH that favours the soluble form WITHOUT wrecking stability or palatability (the three-way pH negotiation — solubility vs stability vs taste; pct-13's buffer canon names the tool that holds the chosen pH).\\n\\n**Co-solvent addition** (the second tool): the 37-6 team — ethanol/propylene glycol/glycerol blend into the polarity window (applied here; 37-6 profiles the members).\\n\\n**Complexation** (the third tool, named-and-bounded): host molecules (cyclodextrin-class) cage the drug, raising apparent solubility — the 1:1 host–guest concept named; industrial register, bounded.\\n\\n**Micellar solubilisation** (the fourth tool): surfactants above their CMC gather hydrophobic drug into micelle cores — the SCIENCE (micelles, CMC, the solubilisation capacity concept) is pct-31-6's canon, established there per pct-29-3's forward reference; THIS lesson adds the formulation cautions: surfactant taste/smell at dose, the pharmacological activity of some surfactant classes, and the **dilution-precipitation hazard** (a micellar solution diluted in the gut can dump its load as precipitate — the bioavailability honesty, pct-30's chain applied).\\n\\n**Hydrotropy** (named): small hydrotrope concentrations (sodium benzoate-class, caffeine-class) raising solubility by cooperative effects — named as the fifth tool, bounded.\\n\\n**The solid-state escape hatches** (named, not developed): particle-size reduction (pct-33's canon) and salt selection (the pct-3/pct-29 boundary) — when vehicle tools run out, the solid forms (35/36) or disperse forms (38) wait.\\n\\n**The master honesty**: solubilised ≠ free — every tool changes what the gut SEES (ion, complex, micelle); the bioavailability question (pct-30's canon) is never closed by solubility alone.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Five tools: pH (pct-29-7 consumed), co-solvents (37-6 applied), complexation (cyclodextrin, bounded), micellar (pct-31-6 canon consumed), hydrotropy (named).\\n- The pH negotiation: solubility vs stability vs taste — buffers (pct-13) hold the choice.\\n- Dilution-precipitation hazard: micellar loads can dump in the gut (pct-30 applied).\\n- Escape hatches: smaller particles (pct-33), salt choice, or change the form.\\n- Solubilised ≠ free: bioavailability stays an open question (pct-30).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the five tools and the canon each consumes.\\n2. Why is pH choice a three-way negotiation?\\n3. Explain the dilution-precipitation hazard end-to-end.\\n4. Which tool does pct-31-6 canonise, and what does THIS lesson add?\\n5. What are the escape hatches when solubilisation fails?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Adjust the pH, tune the polarity, cage the molecule, gather it into micelles, or hydrotrope it: five ways to force a stubborn drug into the bottle — each with a cost the gut may collect.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-8',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Preservation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Aqueous solutions are microbial habitat — preservation is the formulation's duty of care. The DIVISION OF LABOUR is fixed: **PHM 201 owns the microbiology** (organisms, growth, sterilisation science — named, not developed); **this lesson owns the formulation response**: the preservative system.\\n\\n**Why solutions need it** (the exposure logic): water + nutrients (sugars!) + room-temperature shelf + repeated opening (the patient's finger, the air) = contamination support; the self-preserving exceptions (37-2's high sucrose, 37-3's alcohol) lighten but do not remove the duty.\\n\\n**The ideal-preservative criteria** (the selection checklist): effective at LOW concentration, broad-spectrum (bacteria + fungi), compatible (with drug AND excipients), stable over the shelf, non-toxic/non-sensitising orally, taste/odour acceptable, effective across the product's pH. No single agent is ideal — the art is the least-bad fit.\\n\\n**The classic classes** (named with their pH-honesty): **parabens** (methyl/propylparaben — the broad-spectrum workhorses; neutral-ish pH range), **benzoic acid/benzoates** and **sorbic acid/sorbates** (the ACID-dependent pair — effective only as the UNIONISED acid, so they work at acidic pH and fail as pH rises: the pct-29-7 ionisation canon consumed directly), **alcohols** (ethanol's 37-3 role; chlorobutanol-class named), **quaternary ammonium compounds** (benzalkonium-class — named, with their incompatibility honesty: anionic excipients neutralise them).\\n\\n**The interaction honesty** (the preservative's enemies within): **adsorption** (preservatives bind to suspended solids/container walls — the pct-31-5 echo), **complexation** (cyclodextrin-class tools of 37-7 cage preservatives too — the tool's tax), **partitioning into oil phases** (the pct-30-6 canon referenced — preservative lost to droplets is preservative not working), **pH drift** (the acid-dependent classes losing their unionised fraction).\\n\\n**Typical-use figures appear with sourcing language only** (stated as typical levels cited in standard references) — no invented concentrations.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- PHM 201 owns microbiology/sterilisation; this lesson owns the chemical-preservation response.\\n- Exposure logic: water + nutrients + openings — self-preservation lightens, never removes, the duty.\\n- Ideal criteria: potent, broad, compatible, stable, safe, tasty, pH-robust — no agent has all.\\n- Classes: parabens; benzoates/sorbates (unionised-acid pH dependence — pct-29-7 consumed); alcohols; quats (anionic incompatibility).\\n- Enemies within: adsorption (pct-31-5 echo), complexation (37-7's tax), oil partitioning (pct-30-6 referenced), pH drift.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw the PHM 201 / pct-37-8 boundary in one line each.\\n2. Why do benzoates fail as pH rises — which canon supplies the argument?\\n3. Name the four classic classes with one signature property each.\\n4. List the four "enemies within" and the canon each echoes.\\n5. Why does self-preservation lighten but not remove the duty?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sugar-water is a microbial farm: pick the least-bad preservative, mind the pH that keeps acids armed, and remember the excipients will quietly kidnap it.`,
      },
    ],
  },
  {
    nodeId: 'pct-37-9',
    courseId: 'pct-201',
    topicId: 'pct-37',
    nodeType: 'subtopic',
    title: 'Preparation and Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The bench lesson: how solutions are made and kept — extemporaneous and industrial registers, then the bottle.\\n\\n**Extemporaneous methods** (the compounding canon): **simple solution** (dissolve with agitation; gentle heat where allowed — the heat-labile caution), **solution by chemical reaction** (two reactants form the drug in situ — the named classic route for some inorganic preparations), **dilution of concentrates** (tinctures/stocks into final strength — the ARITHMETIC is pct-22's canon, referenced not re-taught), **extraction** (herbal actives from plant matter — pct-21's canon owns the process; named here as the route's boundary).\\n\\n**The bench disciplines**: dissolve salts first (the ionics), add co-solvent phases in the 37-3 order (aqueous into alcoholic — shock-precipitation prevention), filter POLISH (clarify — the lint/filtrate honesty), make to volume with the measured vehicle (the volumetric discipline), then LABEL (pct-28-6's canon applied: "shake"? no — solutions don't shake; the label duties are storage, expiry, measure-with-the-device).\\n\\n**Industrial register** (named-and-bounded): large-scale dissolution vessels with agitation/mixing, in-line filtration, and the filled-and-finished QC echo (35-9's vocabulary applied to liquids: assay, pH, volume).\\n\\n**Packaging** (pct-28 canon applied to liquids): **amber glass/plastic** for photolabile contents (the pct-43-6 echo), **child-resistant closures** (the canon), adequate headspace-or-none (the oxidation honesty — antioxidants in the formula where contents demand, pct-43-8's echo), **the dispensing bottle** as dose device (5 mL graduations; oral syringes supplied where precision matters — 37-1's echo).\\n\\n**Storage and after-opening honesty**: cool/dark/dry-cabinet storage per the label; **after-opening decay is real** (contamination + dilution + evaporation change the product — the BUD concept pct-43-10's canon referenced; the counselling: respect the after-opening window, never return poured-out doses, keep the cap closed).\\n\\n**The lesson's spine**: a solution is a promise that the bottle must keep — preparation builds it, packaging guards it, the label explains it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Extemporaneous routes: simple solution, chemical reaction, dilution (pct-22 referenced), extraction (pct-21 boundary).\\n- Bench order: salts first, co-solvents in order, polish-filter, make to volume, label.\\n- Industrial: dissolution vessels, in-line filtration, liquid QC (assay/pH/volume).\\n- Packaging: amber for light, CRC closures, antioxidants where contents demand (pct-43 echoes).\\n- After-opening decay is real — BUD canon (pct-43-10) referenced; counselling closes the loop.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four extemporaneous routes and the canon each references.\\n2. Why add aqueous into alcoholic, and what failure does order prevent?\\n3. Give the five bench disciplines in order.\\n4. Which three pct-43 echoes appear in packaging, and where is each canon?\\n5. State three after-opening counselling rules.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dissolve, polish, make to volume, protect from light and fingers: the bottle keeps the promise the bench made. Amber glass, tight cap, honest expiry.`,
      },
    ],
  },
];
