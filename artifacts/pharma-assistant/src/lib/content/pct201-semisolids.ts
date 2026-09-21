import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-40: Semisolid Dosage Forms.
 *
 * Batch 43: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–39
 * top-level topic convention) plus its ten children pct-40-1…40-10
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-40 has no surviving Phase-1 tier record; the block is
 * formulation/technology-driven with no calculation children, so all
 * eleven lessons are Tier B under the established conceptual-lesson
 * convention. Convention-derived, flagged pending confirmation.
 *
 * Scope discipline (reviewer-fixed boundaries): THIS topic owns
 * ointments/creams/gels/pastes and their bases. Rheology PHYSICS is
 * pct-32's canon (consumed — no flow-law re-teaching); emulsion
 * science (O/W, W/O, HLB) is pct-39's (consumed — 40-2 applies);
 * diffusion/partition concepts reference pct-30 (30-3 partition,
 * 30-1/30-2 diffusion/Fick) without re-deriving; gels' polymer
 * science leans on pct-32-7's thixotropy canon (consumed); excipient
 * canon pct-3 (applied); preservation duty pct-37-8's echo; packaging
 * canon pct-28 (applied). No invented specifications.
 */
export const pct201SemisolidsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-40',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'topic',
    title: 'Semisolid Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Semisolids** are the dosage forms that hold their shape and still flow: ointments, creams, gels, pastes — spread on skin and mucosa, staying where put, releasing drug as the patient goes about the day. Their defining problem is a tug-of-war: firm enough to stay, soft enough to spread, and engineered to RELEASE the drug rather than trap it.\\n\\n**The map.** (1) **Ointments** — the greasy originals (40-1). (2) **Creams** — the emulsion compromise (40-2). (3) **Gels** — the polymer networks (40-3). (4) **Pastes** — the high-solids barriers (40-4). (5) **Ointment bases** — the four-family taxonomy (40-5). (6) **Selection of bases** — the matching discipline (40-6). (7) **Preparation methods** — fusion, incorporation, the machinery (40-7). (8) **Drug incorporation** — the release question (40-8). (9) **Packaging** — tubes, jars, the canon applied (40-9). (10) **Storage** — temperature and separation honesty (40-10).\\n\\n**Boundaries policed.** Rheology PHYSICS is pct-32's (consumed: yield values, shear-thinning, thixotropy — the vocabulary, never re-taught); emulsion science is pct-39's (consumed: O/W, W/O, Bancroft, HLB applied in 40-2); diffusion/partition concepts reference pct-30 (30-1/30-2 Fick diffusion, 30-3 partition) — the release framing connects without re-deriving; excipient canon pct-3 (applied); preservation duty echoes pct-37-8; packaging canon pct-28 (applied).\\n\\n**Standing discipline**: no invented specifications; worked procedures named-and-bounded.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Semisolid = holds shape + spreads: the stay-vs-spread tug-of-war, with release as the referee.\\n- Map: ointments → creams → gels → pastes → bases → selection → preparation → incorporation → packaging → storage.\\n- pct-32 physics consumed; pct-39 emulsion science consumed; pct-30 release concepts referenced.\\n- pct-3 applied; preservation echoes 37-8; packaging pct-28.\\n- No invented specs.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the semisolid tug-of-war and its referee.\\n2. Recite the map and the lesson owning each station.\\n3. Which canons are consumed vs referenced in this block?\\n4. What makes release the decisive question for this class?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Firm enough to stay, soft enough to spread, generous enough to let the drug leave: semisolid design in one sentence — the block is the how.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-40', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-40-1',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Ointments',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Ointments** are greasy semisolids — drug in an oily/fatty vehicle, applied to skin or mucosa. The original semisolid: occlusive, emollient, long-contact.\\n\\n**The property chain** (from "oily vehicle"): *occlusion* — the film seals water in (the emollient therapy from 39-3's W/O logic, now without water); *long residence* — not washable, sweat-resistant (the contact-time advantage); *protective* — a physical barrier over damaged skin; *drug delivery to/through skin* — the lipophilic route (the release question is 40-8's).\\n\\n**Where ointments are chosen**: dry, scaly, cracked lesions (the emollient need); protective/barrier applications (nappy-area, hands); long-act local therapy (steroid-class vehicles — the potency-vehicle interplay named); mucosal/membrane applications (ophthalmic ointments — the sterility boundary named, pct-42's block owns requirements).\\n\\n**Where they are NOT**: weeping/oozing lesions (the ointment seals exudate in — the classic contraindication logic); hairy areas (application nightmare); when cosmetics/washability rule (the patient-acceptance honesty).\\n\\n**Official-ish vocabulary** (named): **medicated vs non-medicated (vehicle) ointments**; the "ointment base" concept (40-5's taxonomy); the compendial "ome" suffix tradition (named).\\n\\n**The classification anchor**: ointment CHARACTER is the base's character — a petrolatum ointment occludes, an absorption-base ointment can take up water, a water-soluble ointment washes off (the preview of 40-5/40-6 — the base decides).\\n\\n**The honest costs**: greasiness/staining (the patient-acceptance tax), no cooling effect (vs creams — 40-2's comparison), dosing imprecision ("fingertip-unit" counselling canon named as the practical measure).\\n\\n**The lesson's spine**: the ointment is its base — choose the base and you have chosen the product (40-5/40-6's discipline follows).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ointment = greasy semisolid: occlusive, emollient, long-residence, protective.\\n- For: dry/cracked lesions, barriers, long-act local therapy; NOT for weeping lesions or hairy sites.\\n- Character = base's character (40-5/40-6 preview).\\n- Mucosal/ophthalmic ointments cross the sterility boundary (named; pct-42 owns requirements).\\n- Costs: grease/stain, no cooling, imprecise dose (fingertip-unit canon named).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive three ointment properties from the oily vehicle.\\n2. Why are ointments wrong for weeping lesions — the mechanism?\\n3. Name two mucosal uses and the boundary they cross.\\n4. What is the fingertip-unit convention for, and what does it NOT fix?\\n5. Why does 40-5 follow this lesson logically?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Grease that stays and shields: the ointment trades cosmetics for contact time. Dry skin loves it, weeping skin hates it, and the base is the boss.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-2',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Creams',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Creams** are emulsion semisolids — the pct-39 emulsion science (O/W, W/O, Bancroft, HLB) applied at spreadable consistency. Two families, two behaviours:\\n\\n**O/W creams (the "vanishing" tradition)**: water continuous — *cooling* (water evaporates off, the evaporative effect ointments lack), *non-greasy, washable* (39-2's property chain at cream register), *cosmetically preferred* (the modern dermatologic default), *water-phase preservative duty* (37-8's echo — the exposed phase) — and the W/O-brief in reverse. Good for weeping/oozing lesions (the water EVAPORATES — the drying direction ointments get backwards), hairy areas, large areas.\\n\\n**W/O creams (the "cold cream" tradition)**: oil continuous — *emollient/occlusive* (39-3's chain at cream register), *waterproof, not washable* (the cleansing caution), chosen for dry lesions and barrier work where some elegance is still wanted over an ointment.\\n\\n**The selection logic** (the discipline this lesson teaches): match the cream to the lesion and the patient — weeping → O/W (dry it); dry → W/O or ointment (grease it); cosmetic compliance → O/W; waterproof barrier → W/O. The 40-6 base-selection discipline generalises.\\n\\n**The emulsion instability echo** (39-7/39-8/39-9 consumed): creams can cream, crack, and invert — temperature steadiness and the do-not-freeze contract apply verbatim (40-10's brief).\\n\\n**The formulation anatomy**: internal phase + external phase + emulsifier system (Bancroft/HLB logic consumed from 39-4/39-5) + preservative for the water phase + the pct-3 thickeners/gels where body is wanted (the rheology-modifying team — pct-32's vocabulary consumed).\\n\\n**The comparison table** (the exam spine): ointment = greasy, occlusive, no water, most potent-vehicle interplay; O/W cream = cooling, washable, drying; W/O cream = emollient, waterproof; pick by lesion + patient + site.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Cream = emulsion semisolid; pct-39 science applied.\\n- O/W: cooling, non-greasy, washable, drying — for weeping lesions, hair, large areas, cosmetics.\\n- W/O: emollient, waterproof, occlusive — for dry lesions and barriers.\\n- Selection: weeping → O/W; dry → W/O/ointment; compliance → O/W; barrier → W/O.\\n- Instabilities echo 39-7–39-9; preservation duty for the water phase (37-8 echo).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Build the cream comparison from "which phase is outside".\\n2. Why do O/W creams DRY weeping lesions — the evaporative mechanism?\\n3. Why does the W/O family escape water-phase preservation duty only partly?\\n4. Which 39-lessons echo as cream instabilities?\\n5. State the four-way selection rule.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Creams are emulsions you can spread: water-outside cools and dries, oil-outside softens and shields. Match the phase to the lesion and the patient says yes.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-3',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Gels',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Gels** are semisolids whose structure is a LIQUID trapped in a polymer network — no droplets, no fat: just a three-dimensional mesh holding water (or another solvent) so firmly the whole behaves like a soft solid.\\n\\n**The network science** (the pct-32-7 thixotropy canon consumed — the gel IS a thixotropic network): polymer chains crosslinked physically (hydrogen bonds, entanglements, ion bridges) form the mesh; shearing breaks it (the gel liquefies and spreads), and it rebuilds on standing (the body returns). The pct-32 vocabulary — yield value, shear-thinning, thixotropy — is the gel's native language, consumed not re-taught.\\n\\n**The gel classes**: **hydrogels** (water-based: carbomer-class pH-activated, cellulose derivatives, natural gums — the 38-5 agent classes in gel register) and **organogels** (named: non-aqueous liquids gelled by plastics/oleaginous organisers — bounded).\\n\\n**The property chain** (from "water in a mesh"): *clean, non-greasy feel* (the cosmetic winner — no oil to stain); *washable*; *cooling on application* (water evaporation + the aqueous vehicle); *good drug availability for soluble drugs* (the drug dissolved in the gel's water — the pct-30 diffusion path is short); *the drying benefit* for weeping lesions (like O/W creams).\\n\\n**The costs**: *poor for hydrophobic drugs* (the mesh's water is a hostile home — solubilisation tools from 37-7 borrowed or the drug stays out); *preservative duty* (a full water phase — 37-8's echo); *sensitivities* — pH (carbomer activation), electrolytes (the mesh collapses — the ionic honesty), and *syneresis* (the mesh squeezing out its water on standing — the gel-specific instability, named).\\n\\n**Where gels are chosen**: dermatologic elegance (acne-class therapy — the grease-free requirement), mucosal/ophthalmic vehicles (the residence-time bonus of a gel at pct-42's boundary), and oral/parenteral gel designs (named).\\n\\n**The spine**: gels trade fat for water — clean feel and easy release for hydrophobic-drug and preservation headaches.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Gel = liquid trapped in a polymer mesh; pct-32-7 thixotropy consumed as the native science.\\n- Classes: hydrogels (carbomer/cellulose/gums) and organogels (named, bounded).\\n- Chain: clean/washable/cooling, short diffusion path for soluble drugs.\\n- Costs: hydrophobic-drug hostility, full preservative duty, pH/electrolyte sensitivity, syneresis.\\n- Uses: grease-free dermatology, mucosal residence, ophthalmic (pct-42 boundary).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the mesh and the shear-rebuild cycle in pct-32 language.\\n2. Why are gels wrong for hydrophobic drugs — and which block supplies the fixes?\\n3. What is syneresis and what does it signal?\\n4. Why do electrolytes threaten some gels?\\n5. Give the gel's three signature properties and their source.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A gel is water with a skeleton: clean, cool, and generous to soluble drugs — moody about pH, salt, and time. Shear it to spread it; it rebuilds its nerve.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-4',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Pastes',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Pastes** are ointments loaded with POWDER — typically 20–50% solids (stated as the classical range, cited in standard references): a semisolid turned stiff, absorbent, and porous.\\n\\n**The property chain** (from "powder-loaded"): *stiffness* — the powder skeleton raises consistency sharply (the pct-32 yield-value vocabulary consumed); *absorbency* — the powder soaks up exudate/secretions (the ointment contraindication fixed — pastes CAN go on moist, oozing sites); *porosity* — sweat/serum can pass through the film (the skin-can-breathe argument); *less occlusion* than the parent ointment (the powder interrupts the grease film); *staying power* — the stiff paste does not migrate (the focal-lesion discipline).\\n\\n**Where pastes are chosen**: chronic, localised lesions needing long contact and absorption (the classic: zinc-paste-class dressings, Lassar's paste named as the traditional example); protective/barrier work around focal lesions (the finger-painting application technique — named as the craft); bite/sting preparations with soothing powders.\\n\\n**The costs** (the honest column): *hard to apply/spread* (the stiffness is the point — but the patient pays); *unattractive* (the visible chalky film); *difficult removal* (soap and patience); *not for hairy or large areas* (the application honesty).\\n\\n**Formulation anatomy**: base (40-5's families — usually oleaginous or absorption types for the powder's sake) + the powder team (starch/zinc oxide-class — the pct-3 dusting-powder canon at paste register) + drug. The powder loading is the design variable: more powder = stiffer, more absorbent, harder to spread.\\n\\n**Preparation echo**: incorporation by geometric-dilution-style spatulation into the base (pct-34-5's technique referenced; 40-7's methods follow).\\n\\n**The spine**: a paste is an ointment with a spine of powder — stiffer, hungrier, and honest about where it will stay.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Paste = ointment + 20–50% powder (classical range, cited) — stiff, absorbent, porous, low-occlusive.\\n- For: chronic focal lesions, exudate management, barrier/focal protection.\\n- Costs: spreading effort, appearance, removal difficulty, site limits.\\n- Anatomy: base (40-5) + powders (zinc oxide/starch class) + drug; loading is the design variable.\\n- Incorporation echoes pct-34-5 technique; 40-7 follows.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive three paste properties from powder loading.\\n2. Why can a paste go where an ointment cannot — the absorbency argument?\\n3. Name the classical solids range with its sourcing language.\\n4. State the design variable and its three-way effect.\\n5. Which technique lesson does incorporation echo?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Ointment with a chalky spine: pastes absorb what ointments would seal in. Stiff, visible, loyal — the right answer for the right stubborn lesion.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-5',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Ointment Bases',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **base** is the ointment's character — the four-family taxonomy (the classic USP-style classification, named as such) is this block's vocabulary spine.\\n\\n**Class I — Oleaginous bases**: hydrocarbon oils/waxes (petrolatum/yellow ointment/paraffin-class): *occlusive, greasy, anhydrous* — they will not absorb water ("hydrocarbon: neither absorb nor release water" is the honest test phrase), chemically inert, long-stable (the pct-43 echo), emollient therapy. The barrier character from 40-1.\\n\\n**Class II — Absorption bases**: oleaginous bases PLUS an emulsifier (anhydrous lanolin/wool-alcohol-class): *anhydrous but water-ABSORBING* — they can take up aqueous solutions to form W/O emulsions in situ (the "absorb water but can't wash out" honesty); the vehicle for drugs delivered as aqueous solutions into an oily world.\\n\\n**Class III — Water-removable (emulsion) bases**: O/W emulsions at base register — *water-washable, non-greasy, coolable*; the cosmetic workhorses; preservative duty full (37-8's echo); drug-release friendly (the aqueous external phase).\\n\\n**Class IV — Water-soluble bases**: polyethylene-glycol (PEG) class — *water-soluble, greaseless, washable completely*; no occlusion at all; the clean vehicle (its drying honesty for weeping lesions noted; drug-solubility demands are real — the PEG-family solubility window).\\n\\n**The comparison spine** (the exam table): occlusion (I > II > III > IV), washability (IV > III > I/II), water capacity (III > II > I/IV in nature), stability-to-microbes (anhydrous I/II safer — the water-phase argument).\\n\\n**The base's consequences** (the wiring): the base decides feel (40-1/40-2), release (40-8 — the partition argument), preservation load (37-8 echo), and packaging patience (40-9/40-10) — the taxonomy is the block's hub, and 40-6 is its selection manual.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four families: oleaginous (hydrocarbon), absorption (anhydrous + emulsifier), water-removable (O/W), water-soluble (PEG).\\n- Occlusion ladder I > II > III > IV; washability IV > III > I/II.\\n- Absorption bases: take up water to W/O in situ — cannot wash out.\\n- Anhydrous classes carry lighter microbial duty (the water argument).\\n- The base decides feel, release, preservation, and packaging — the block's hub.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Recite the four families with one signature member and one signature property.\\n2. Why can an absorption base take up water but not be washed out?\\n3. Which class owns complete washability and zero occlusion?\\n4. Build the occlusion and washability ladders.\\n5. Why does the base decide the preservation duty?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Grease that repels water, grease that swallows it, emulsion grease that washes, and greaseless PEG that dissolves: four families, four characters — the ointment is its base.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-6',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Selection of Bases',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Base selection** is the matching discipline: the drug's needs, the skin's state, and the patient's life vote together.\\n\\n**Criterion one — the drug's release** (the 40-8 preview, the pct-30-3 partition canon consumed): drug solubility vs base polarity — lipophilic drugs sit happily in oleaginous bases but may release poorly; hydrophilic drugs need the aqueous phase of emulsion/water-soluble bases. The partition argument: drug partitions between base and skin — the base that holds the drug TOO well releases it poorly (the "release-holding balance").\\n\\n**Criterion two — the skin/lesion state**: dry/scaly → oleaginous/absorption (occlusion wanted); weeping/oozing → O/W cream/gel/water-soluble (drying wanted); intact-skin prophylaxis → per cosmetic need; mucosa → the sterile boundary (pct-42 named).\\n\\n**Criterion three — the patient/site**: face/hairy/large areas → washable, elegant (III/IV/gel); hands/chronic focal → long-residence OK (I/II/paste); working-patient honesty (grease on clothing — the compliance vote); occlusion caution on inflamed skin (the heat-trap honesty).\\n\\n**Criterion four — stability/compatibility**: drug-in-base chemical fit (the pct-43 echo — water bases invite hydrolysis; anhydrous bases shelter); preservative demand by class; viscosity/rheology targets (pct-32 vocabulary consumed).\\n\\n**The substitution honesty**: patients who must switch bases (supply, cost, tolerance) change the drug's release behaviour — the counselling duty (monitor for effect changes; the same drug in a different base is a different delivery decision).\\n\\n**The worked selection logic** (the lesson's discipline): state the drug's polarity → state the lesion's moisture → state the site/patient constraints → read the 40-5 table → choose, and SAY the choice's consequences aloud (the pharmacist's articulation habit).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four criteria: drug release (partition), lesion moisture, patient/site, stability/compatibility.\\n- Release-holding balance: the base that holds too well releases too poorly (pct-30-3 consumed).\\n- Dry → occlude (I/II); weeping → dry (III/IV/gel); face/hair → washable; chronic focal → residence.\\n- Water bases invite hydrolysis; anhydrous shelter (pct-43 echo).\\n- Base substitution changes release — counsel and monitor.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four selection criteria and the lesson each consumes.\\n2. Explain the release-holding balance in partition language.\\n3. Match three lesion states to base families.\\n4. Why does base substitution matter clinically?\\n5. State the articulation habit this lesson installs.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Drug votes polarity, skin votes moisture, patient votes washability: base selection is the vote count. Say the consequences aloud — same drug, different base, different therapy.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-7',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Preparation Methods',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Semisolid preparation is heat or shear: melt the base, or work the drug in — the two bench routes, then the machines.\\n\\n**Fusion method** (the melt route): melt the highest-melting base components first, add downward to the lowest-melting (the ordered-melting discipline — never scorch), stir gently while cooling (the congeal point discipline: stir until set to keep components distributed — the segregation-avoidance echo of 34-4), incorporate heat-tolerant drugs/powders into the melt. For waxy/oleaginous bases and powdered actives. The heat-labile honesty: thermolabile drugs NEVER take this route (the 40-8 caution).\\n\\n**Incorporation method** (the shear route — room temperature): geometric-dilution-style trituration of drug into base on the ointment slab/tile (pct-34-5's technique referenced — equal-bulk logic for potents), using the **levigating** discipline (pct-34-3's technique referenced): a little levigating agent (mineral-oil-class for oleaginous bases, glycerol for aqueous) makes a smooth paste first, so the final product is grit-free (the "no particle the finger can feel" standard, named as craft practice). For thermolabile drugs, liquid/low-dose potents, small-scale work.\\n\\n**The machines** (named-and-bounded): ointment mills (the roller family — 34-3's list at semisolid register) for fineness; planetary mixers for bulk; homogenisers for creams/emulsion-bases (39-6's ladder echo).\\n\\n**Cream/emulsion-base assembly** (the pct-39 discipline consumed): dissolve phases separately (aqueous vs oleaginous), heat both modestly, combine at similar temperature with stirring-while-cooling (the emulsion-forming window — bounded), preservative last where allowed (37-8 echo).\\n\\n**The QC echo** (named): appearance/feel, fineness (the slab test), content uniformity for potents (the 35-9 vocabulary applied), weight fill — the report card before 40-8's release question and 40-9's bottle.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fusion: melt high→low, stir-to-set, heat-tolerant drugs only.\\n- Incorporation: levigate to paste first (pct-34-3), geometric logic for potents (pct-34-5); grit-free standard.\\n- Machines: ointment mills, planetary mixers, homogenisers (named-and-bounded).\\n- Cream assembly: per-phase dissolution, modest heat, combine-and-cool, preservative last.\\n- QC echo: appearance, fineness, uniformity, fill (35-9 vocabulary applied).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast fusion and incorporation on heat and drug classes.\\n2. Why melt high-to-low and stir-to-set — two disciplines?\\n3. What is the levigating agent's job and the grit-free standard?\\n4. Which pct-34 techniques echo here, and what does each contribute?\\n5. List the cream-assembly steps and the preservative timing.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Melt it or mash it: fusion for waxes and stable powders, incorporation for the delicate — always levigate first. Stir until set, feel for grit, and label the truth.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-8',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Drug Incorporation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Drug incorporation** is the release question: a semisolid must give up its drug to the skin — the base that dissolved it so well can starve it out of ever leaving. The diffusion/partition CONCEPTS are pct-30's canon (referenced, not re-derived); this lesson applies them.\\n\\n**The release path** (the concept chain consumed): drug in the base → diffuses through the base matrix (pct-30-1's Diffusion and pct-30-2's Fick's Law Concept — referenced) → reaches the base–skin interface → PARTITIONS into the skin (pct-30-3's Partition Coefficient — referenced) → the skin's own diffusion takes over. The base's viscosity, the drug's loading, and the partition balance set the pace.\\n\\n**The incorporation techniques** (linking 40-7's routes to drug classes): solids incorporated by levigation/fineness (smaller particles dissolve faster into the base — pct-33-4's ladder echo); liquids absorbed into powders first or emulsified in; thermolabile drugs room-temperature only; potent drugs geometric-dilution discipline (pct-34-5).\\n\\n**The vehicle-drug-skin triangle** (the selection logic formalised from 40-6): a lipophilic drug in a water-soluble base may leap out gladly (good release); the same drug in petrolatum may never leave (partition hostage — the release-holding balance made visual). Conversely a hydrophilic drug in an oleaginous base has no vehicle to travel in. The triangle's rule: SOME affinity for the vehicle (to dissolve) + MORE affinity for the membrane (to leave) — the Goldilocks partition.\\n\\n**The enhancer honesty** (named-and-bounded): penetration enhancers (the class named) trade skin-barrier integrity for flux — a real pharmacological decision, bounded here.\\n\\n**The QC frame** (named): in-vitro release tests and diffusion-cell studies are the instrument canon (named-and-bounded); the 200L skill is the CONCEPT — release is designed, not hoped for.\\n\\n**The spine**: dissolve the drug, then design its EXIT — the base is a delivery vehicle, not a vault.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Release path: diffuse in base → interface → partition into skin (pct-30-1/2/3 referenced).\\n- Techniques map to drug classes: levigate solids, absorb liquids, RT for thermolabile, geometric for potents.\\n- The triangle: some vehicle affinity + more membrane affinity — the Goldilocks partition.\\n- Enhancers named-and-bounded (barrier trade).\\n- Release tests named-and-bounded; the concept is the 200L skill.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Walk the release path naming each pct-30 concept.\\n2. Why can a "perfect" solvent base starve the skin — the hostage case?\\n3. State the Goldilocks partition rule.\\n4. Match four drug classes to incorporation techniques.\\n5. What do enhancers trade, and why is the decision bounded here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The base is a vehicle, not a vault: diffuse, arrive, partition, deliver. Hold the drug just tightly enough — then let the skin win the tug-of-war.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-9',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Semisolid packaging applies the pct-28 canon to products that are touched, squeezed, and shared — contamination control is the brief.\\n\\n**The containers**: **collapsible tubes** (metal and laminate/plastic — the dose-clean standard: the contents never touch the cap's world; the "do not share" logic built into the form), **jars** (the finger-dip honesty — contamination exposure with every use; acceptable for home-use classes, honest counsel for lesions), **single-use sachets** (the sterile-class/precision answer — named), **pumps** for pumpable creams (the air-limiting elegance).\\n\\n**Material honesty**: metal tubes (the classic — moisture-proof, but can interact with some contents; the lacquered-tube answer named), plastic/laminate tubes (lighter, squeezable, better for some actives but barrier-honest about oxygen/moisture — the pct-28-3 material canon applied), jar glass (inert, wide access, contamination trade).\\n\\n**The sterility boundary** (named): ophthalmic/sterile semisolids carry their own container-and-sterility requirements — pct-42's block owns them (named, not developed).\\n\\n**The label duties** (pct-28-6/7 applied): identity/strength, batch + expiry, **"for external use only"** (the route-safety line — the semisolid's most important four words), storage statement (40-10's brief), and the counselling hooks: wash hands before/after, use the applicator/not the finger where supplied, do not share (the contamination logic made patient-facing).\\n\\n**The dispersion-duty honesty** (the 38-9 echo where it applies): some cream/paste designs settle or separate slightly — the "shake/stir" instruction appears where honest (rare for semisolids; the honesty itself is the lesson).\\n\\n**The spine**: the tube is the semisolid's best packaging idea — dose-clean, portable, self-protecting; the jar is its honest compromise.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Containers: tubes (dose-clean standard), jars (finger-dip honesty), sachets (sterile/precision), pumps (air-limiting).\\n- Materials: metal (moisture-proof, interaction-honest), laminate (barrier-honest), glass jars (inert, exposed).\\n- Sterile/ophthalmic semisolids: pct-42's boundary named.\\n- Label: FOR EXTERNAL USE ONLY + storage + wash/share counselling hooks.\\n- Tubes keep contents away from the cap's world — the contamination logic built in.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast tube and jar on contamination logic.\\n2. Name two material honesties of tubes.\\n3. Which four words anchor the semisolid label, and why?\\n4. Where does the sterile-semisolid boundary run?\\n5. Give the three counselling hooks and their mechanisms.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Tubes are self-defending, jars are honest compromises, sachets are precision: semisolid packaging is contamination control you can squeeze. External use only — and wash your hands.`,
      },
    ],
  },
  {
    nodeId: 'pct-40-10',
    courseId: 'pct-201',
    topicId: 'pct-40',
    nodeType: 'subtopic',
    title: 'Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Semisolid storage is temperature discipline and phase honesty — the enemies are heat, cold, light, time, and the fingers that use the product.\\n\\n**Temperature steadiness** (the brief): **cool, steady, DO NOT FREEZE** (the pct-43-5 echo; freezing breaks emulsion creams — 39-9's killer list applies verbatim — and can crack oleaginous structure); heat softens, separates, and speeds hydrolysis/oxidation in the water-containing classes (the pct-43-4 echo); temperature CYCLES drive syneresis in gels and sweat-in-tube honesty (the cycle is worse than the steady warmth — the 39-10 echo).\\n\\n**Phase-stability honesty by class**: creams can cream/crack/invert (39-7–39-9 consumed); gels synerese (40-3's named instability — water weeping from the mesh; mild syneresis with re-mixing is the honest counsel, severe is a reject); oleaginous classes are the storage champions (anhydrous, inert — the pct-43 echo) but rancidify where natural oils are used (the oxidation honesty — pct-43-8's echo).\\n\\n**Light protection**: amber/opaque containers for photolabile contents (pct-28's canon; the pct-43-6 echo).\\n\\n**The after-opening decay** (the 37-9 echo applied): preserved water-containing classes decay after opening (contamination + evaporation + concentration drift); the BUD discipline (pct-43-10's canon referenced) and the counselling: respect the window, cap tightly, never return expelled product, discard on schedule.\\n\\n**The storage statements** (pct-28-9's translation duty applied): "store in a cool place" = the institutional wording; "do not freeze" = the emulsion-protection mechanism; "protect from light" = the photolabile mechanism — the pharmacist reads, translates, teaches.\\n\\n**The spine**: semisolids forgive more than emulsions in bottles but less than tablets on shelves — cool, steady, capped, and dated.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Temperature: cool, steady, DO NOT FREEZE — cycles worse than steady warmth.\\n- Class honesty: creams crack/invert; gels synerese; oleaginous champs rancidify (natural oils).\\n- Light: amber/opaque for photolabile (pct-28 + pct-43-6 echo).\\n- After-opening decay: BUD discipline (pct-43-10 referenced); cap tightly, never return, discard on time.\\n- Statements translated: cool place / do not freeze / protect from light = mechanisms.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why do temperature cycles beat steady warmth as enemies?\\n2. Match each class to its signature storage failure.\\n3. Translate the three storage statements into mechanisms.\\n4. State the four after-opening counselling rules.\\n5. Which 39-lessons echo in cream storage?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Cool and steady, capped and dated: creams hate frost, gels hate drought, greases forget time. The label's three lines are three mechanisms — teach them.`,
      },
    ],
  },
];
