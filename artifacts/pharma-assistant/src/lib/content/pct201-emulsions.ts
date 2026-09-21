import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-39: Emulsions.
 *
 * Batch 42: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–38
 * top-level topic convention) plus its ten children pct-39-1…39-10
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-39 has no surviving Phase-1 tier record; the
 * quantitative child — 39-5 HLB Concept (Griffin-scale numbers and
 * blend arithmetic) — is Tier C under the established
 * calculation-lesson convention; the topic and remaining children are
 * Tier B. Convention-derived, flagged pending confirmation.
 *
 * Scope discipline (reviewer-fixed boundaries): THIS topic owns
 * emulsion science/formulation, and the HLB SYSTEM is canonically
 * HERE (39-5) — pct-31-6's deferral is honoured. PCT owns emulsion
 * formulation/science; PHM 201 owns microbial spoilage, microbiology
 * and antimicrobial-preservation/sterility implications (39-7 keeps
 * the instability physics, defers the organisms). pct-30-6's
 * preservative-partitioning concept is REFERENCED, not duplicated.
 * Creaming APPLIES Stokes' law with explicit pct-38-3 attribution —
 * the equation's canonical home is not duplicated. Surfactant classes
 * are pct-31-6's (consumed); rheology pct-32's (consumed); packaging
 * pct-28's (applied). HLB numbers are classic Griffin-scale figures,
 * attributed; required-HLB values stated as typical published figures.
 */
export const pct201EmulsionsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-39',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'topic',
    title: 'Emulsions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An **emulsion** puts one liquid INSIDE another: droplets of oil dispersed in water, or water in oil — two liquids that refuse to mix, persuaded into coexistence by an **emulsifying agent**. The form turns insoluble oils into pourable liquids, delivers lipophilic drugs, and builds the creams pharmacy spreads.\\n\\n**The map.** (1) **Definition and classification** — the form and its family (39-1). (2) **O/W** — the water-outside class (39-2). (3) **W/O** — the oil-outside class (39-3). (4) **Emulsifying agents** — the persuasion tools (39-4). (5) **HLB concept** — the selection arithmetic (39-5, Tier C). (6) **Preparation** — the classical methods and the machines (39-6). (7) **Stability** — the instability family (39-7). (8) **Creaming** — the reversible rise (39-8). (9) **Cracking and coalescence** — the irreversible death (39-9). (10) **Packaging and storage** — the bottle contract (39-10).\\n\\n**Boundaries policed.** Surfactant classes and micelle science are pct-31-6's (consumed); the HLB SYSTEM lands here canonically (39-5); Stokes' law is pct-38-3's (applied with attribution in 39-8); preservative PARTITIONING is pct-30-6's concept (referenced); microbial spoilage and sterilisation are PHM 201's (39-7 defers); rheology is pct-32's (consumed); packaging canon is pct-28's (applied).\\n\\n**Standing discipline**: HLB figures are classic Griffin-scale values, attributed; required-HLB values stated as typical published figures; worked values illustrative and verified.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Emulsion = droplets of one liquid dispersed in another + emulsifier — two immiscibles persuaded.\\n- Map: definition → O/W → W/O → agents → HLB (39-5, Tier C) → preparation → stability → creaming → cracking → packaging.\\n- HLB system canonical here; Stokes applied-with-attribution (pct-38-3); partitioning referenced (pct-30-6).\\n- PHM 201 owns spoilage/microbiology; PCT owns the science.\\n- Attributed figures only.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the form and name the map's stations.\\n2. Which canon owns HLB, Stokes, and preservative partitioning respectively?\\n3. Where does PHM 201's boundary run in this block?\\n4. Why is an emulsifier always the third ingredient?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Oil and water part by nature; the emulsifier plays matchmaker, HLB picks the match, and stability keeps the marriage. This block is droplet engineering.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-39', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-39-1',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Definition and Classification',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Definition**: an emulsion is a two-phase disperse system — droplets of one liquid (the **internal/dispersed phase**) distributed through another (the **external/continuous phase**) — stabilised by an emulsifying agent at the interface.\\n\\n**The immiscibility premise** (the A-level bridge): oil and water do not mix because water's hydrogen-bond network excludes the nonpolar oil molecules; forcing droplets creates enormous interface (the pct-31-1 surface-energy canon consumed) — the system THERMODYNAMICALLY hates the droplets and would coalesce back to two layers. The emulsifier's films make the droplets KINETICALLY stable — this is the same thermodynamic-vs-kinetic purchase pct-38-1 made for suspensions.\\n\\n**The classification axes**:\\n\\n*Simple by phase order*: **O/W** (oil droplets in water — 39-2) and **W/O** (water droplets in oil — 39-3).\\n\\n*Multiple emulsions* (named): **W/O/W** (water droplets inside oil droplets inside water) and **O/W/O** — drug-reservoir designs (the delivery-platform interest, bounded).\\n\\n*Microemulsions* (named-and-bounded): thermodynamically stable, nanoscale-droplet systems needing high surfactant/cosurfactant loads — a distinct technology; named, not developed.\\n\\n*By use*: oral (castor-oil-class emulsions), topical (creams — 40-2 consumes this block), parenteral (the strict sterility/particle boundaries named, PHM 201/pct-42's canon), radiographic contrast vehicles (historical, named).\\n\\n**Identification tests** (the classic bench battery — named with their logic): **dilution test** (the emulsion dilutes freely with ITS external phase — water dilutes O/W to nothing, beads off W/O), **conductivity** (water continuous conducts; oil continuous does not), **dye tests** (an oil-soluble dye colours W/O uniformly; a water-soluble dye colours O/W), **fluorescence** under UV for oily externals (named).\\n\\n**The spine**: every emulsion question begins "which phase is outside?" — the answer drives feel, wash-off, drug release, and stability.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two phases: internal droplets + external continuous phase + interfacial emulsifier film.\\n- Immiscibility creates interface the system hates — emulsifiers buy kinetic stability (pct-38-1's purchase repeated).\\n- Classes: O/W, W/O; multiples W/O/W, O/W/O named; microemulsions named-and-bounded.\\n- ID tests: dilution, conductivity, dye, fluorescence — each asks "which phase is outside?".\\n- Uses: oral, topical (creams), parenteral (sterility boundaries named).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define internal/external phase and state the stability purchase.\\n2. Why do oil and water refuse to mix — the pct-31 canon?\\n3. Describe the dilution and conductivity tests end-to-end.\\n4. What are multiple and microemulsions, and why are the latter bounded here?\\n5. Which later block consumes emulsion science for creams?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Droplets inside, phase outside, film in between: name the outside and you have named the emulsion. Two immiscibles, one matchmaker, kinetic peace.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-2',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Oil-in-Water Emulsions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**O/W** — oil droplets dispersed in a continuous WATER phase. The water is what the patient and the world touch first.\\n\\n**The property chain** (each follows from "water outside"):\\n\\n*Feel* — cooling, non-greasy, spreadable (water evaporates off the skin — the topical logic).\\n\\n*Washability* — water-washable from skin and clothing (the water-continuous argument).\\n\\n*Drug release* — lipophilic drugs sit in the droplets and must PARTITION out (pct-30-3's partition canon applied); water-soluble drugs in the continuous phase release readily.\\n\\n*Palatability* — oils masked by the aqueous phase (the oral logic: bitter/oily drugs hidden in droplets).\\n\\n*Conductivity/dilution* — conducts, dilutes with water (39-1's tests, O/W verdicts).\\n\\n**Where O/W is chosen**: oral emulsions of disagreeable oils (castor-oil-class); washable topical creams (the vanishing-cream tradition); most modern dermatologic vehicles; and the internal-phase option for oil-soluble vitamins (the A/D/E presentation — 36-2's softgel canon is the capsule cousin of this logic).\\n\\n**The formulation anatomy**: internal oil (the drug's home if lipophilic) + continuous water + **hydrophilic emulsifier** (the high-HLB agent — 39-4/39-5's selection; the O/W choice follows Bancroft's rule — 39-4's lesson) + preservative for the WATER phase (the exposed phase — the pct-37-8 echo, with the partition honesty that some preservative hides in the oil droplets — pct-30-6's concept referenced) + sweetener/flavour for orals (pct-3 applied).\\n\\n**The stability watch-points** (39-7/39-8 develop): creaming is DOWNWARD-invisible here? No — OIL droplets are lighter: they RISE (creaming up) — 39-8's directionality lesson; microbial attack targets the water phase (PHM 201's boundary).\\n\\n**The habit**: when the brief says "washable, non-greasy, cooling, oral-palatable" — the answer is O/W, and the emulsifier must be the hydrophilic kind.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- O/W: water outside — cooling, non-greasy, water-washable, conducts, dilutes with water.\\n- Release: lipophilic drugs partition from droplets (pct-30-3 applied); hydrophilic drugs free in water.\\n- Uses: oral masking of oils, washable creams, vitamin presentations.\\n- Needs hydrophilic (high-HLB) emulsifier (Bancroft — 39-4); preservative for the water phase (pct-30-6 partition honesty).\\n- Oil droplets RISE: O/W creams up (39-8's direction).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive four O/W properties from "water outside".\\n2. Trace a lipophilic drug's release path — which partition canon?\\n3. Why must the preservative budget account for droplet-hiding — whose concept?\\n4. Which emulsifier class fits, and what rule says so?\\n5. Which direction does O/W cream, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Water outside means cool, clean, and rinseable — the friendly face of emulsions. Put the oil in droplets, pick a hydrophilic referee, and remember the oil will float.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-3',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Water-in-Oil Emulsions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**W/O** — water droplets dispersed in a continuous OIL phase. The oil touches the world first — the emollient face of emulsions.\\n\\n**The property chain** (each follows from "oil outside"):\\n\\n*Feel* — greasy, occlusive, EMOLLIENT (the oil film traps moisture against the skin — the emollient therapy logic).\\n\\n*NOT water-washable* — cleansing needs soap/solvent (the clothing-and-linen caution).\\n\\n*Waterproofing* — stays on through washing/swimming (the protection logic for barrier preparations).\\n\\n*No conductivity; dilutes only with oil* (39-1's tests, W/O verdicts).\\n\\n*Drug release* — water-soluble drugs must cross out of their droplets (partition-limited, pct-30-3 applied); lipophilic drugs in the continuous phase release readily.\\n\\n**Where W/O is chosen**: emollient/cold-cream-class topicals (the dry-skin therapy), barrier preparations (nappy-rash-class protection — the waterproof argument), and as the INTERMEDIATE for W/O/W multiple designs (named).\\n\\n**The formulation anatomy**: internal water + continuous oil + **lipophilic emulsifier** (the low-HLB agent — the W/O choice again follows Bancroft's rule; 39-4/39-5) + limited preservative duty (the internal water is less exposed — but not exempt: the PHM 201 boundary and the water-activity honesty) + the oil-phase choices (mineral/vegetable oils per 37-6's boundary note — oils live canonically in emulsions and semisolids).\\n\\n**The stability watch-points**: W/O creams DOWN? No — the internal water droplets are HEAVIER than the oil: they SEDIMENT downward (the creaming direction inverted — 39-8's symmetry lesson); W/O systems are also more viscosity-protected inherently (oil continuous phase is usually thick — the pct-32 echo) but more sensitive to... heat and freezing cycles break them readily (39-9's preview).\\n\\n**The habit**: when the brief says "emollient, occlusive, waterproof, long-contact" — W/O, lipophilic referee, and the cleansing caution on the label.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- W/O: oil outside — greasy, occlusive, emollient, waterproof, non-washable, non-conducting.\\n- Release: water-soluble drugs partition out of droplets (pct-30-3 applied).\\n- Uses: emollients, barriers, W/O/W intermediates.\\n- Needs lipophilic (low-HLB) emulsifier (Bancroft — 39-4); internal water still needs preservation honesty.\\n- Water droplets are heavier: W/O sediments DOWNWARD (39-8's inverted direction).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Derive four W/O properties from "oil outside".\\n2. Why is the cleansing caution real — the washability argument?\\n3. Trace a water-soluble drug's release path.\\n4. Which emulsifier class fits and why?\\n5. Compare creaming direction in O/W vs W/O.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Oil outside means emollient, waterproof, and stubborn in the wash — the protective face of emulsions. The droplets sink, the film stays, and soap does the cleanup.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-4',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Emulsifying Agents',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Emulsifying agents** are the third ingredient that makes the form possible — molecules or particles that park AT the oil–water interface and lower the cost of the droplets' existence. The surfactant CLASSES are pct-31-6's canon (consumed); this lesson owns their EMULSIFYING behaviour.\\n\\n**The amphiphile at work** (the science consumed in one line): an amphiphile has a water-loving head and oil-loving tail; at the interface it orients — head in water, tail in oil — building a FILM around each droplet that (a) cuts interfacial tension (pct-31-2's canon) and (b) forms a physical/electrostatic barrier to coalescence.\\n\\n**The three film mechanisms** (the classic classification):\\n\\n*Monomolecular films* — surfactants as a single oriented molecular layer (the main modern mechanism; the ionic/non-ionic classes from pct-31-6 supply the members).\\n\\n*Multimolecular films* — hydrophilic colloids (acacia, tragacanth-class) forming thick,coherent sheaths around droplets: weak surfactants but strong mechanical barriers (the natural-gum tradition; their microbial-load honesty from 38-5 echoes).\\n\\n*Solid-particle films* — finely divided solids (bentonite/magnesium-aluminium-silicate class, colloidal silica) that wedge at the interface as particulate armour (the Pickering-emulsion principle, named).\\n\\n**Bancroft's rule** (the selection compass): **the phase in which the emulsifier is MORE soluble becomes the external phase.** Water-loving (hydrophilic, high-HLB) agents → O/W; oil-loving (lipophilic, low-HLB) agents → W/O. The rule is why 39-2 chose hydrophilic referees and 39-3 lipophilic ones — and it hands selection to 39-5's HLB arithmetic.\\n\\n**The mixed-film honesty**: real formulations often pair agents (a hydrophilic + lipophilic duo forms a tighter interfacial complex — the mixed-film strengthening idea named; the pair's balance is exactly what HLB blending computes in 39-5).\\n\\n**Selection criteria** (the checklist): phase target (Bancroft), toxicity/taste (oral vs topical), pH/electrolyte tolerance (ionic classes' sensitivities — pct-31-6 consumed), compatibility with preservatives (37-8's enemies echo), and cost.\\n\\n**Boundary honoured**: WHAT amphiphiles are — pct-31-6's; HOW they emulsify and WHICH to pick — this lesson, with 39-5's arithmetic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Amphiphiles orient at the interface: head in water, tail in oil — tension cut + barrier built.\\n- Three film mechanisms: monomolecular (surfactants), multimolecular (hydrophilic colloids/gums), solid-particle (Pickering, named).\\n- Bancroft's rule: emulsifier's favourite phase becomes the EXTERNAL phase — the selection compass.\\n- Mixed films strengthen: hydrophilic + lipophilic pairs (the balance 39-5 computes).\\n- Selection: phase, safety/taste, tolerance, preservative compatibility, cost.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the oriented film and its two protective jobs.\\n2. Contrast the three film mechanisms with one member each.\\n3. State Bancroft's rule and use it to re-derive 39-2/39-3's choices.\\n4. Why pair two emulsifiers, and which lesson computes the pair?\\n5. Name three selection criteria beyond phase preference.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Stand at the interface, head to water, tail to oil, and shield the droplet: monolayers, gum sheaths, or particle armour. Whichever phase the agent loves becomes the outside — Bancroft said so.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-5',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'HLB Concept',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **Hydrophile–Lipophile Balance (HLB)** is the selection arithmetic this block canonises (the pct-31-6 deferral honoured): a number that measures HOW hydrophilic an emulsifier is, so that "which referee?" becomes a calculation.\\n\\n**The Griffin scale** (the classic attribution): HLB runs 1–20 for non-ionic emulsifiers — **low HLB = oil-loving (W/O makers), high HLB = water-loving (O/W makers)**. Classic scale values, stated as the standard Griffin-scale figures: Span-class (sorbitan esters) low — Span 80 ≈ 4.3, Span 20 ≈ 8.6; Tween-class (polysorbates) high — Tween 80 ≈ 15.0, Tween 20 ≈ 16.7; ionic classics extend beyond — sodium oleate ≈ 18, sodium lauryl sulfate ≈ 40 (the scale's logical extension, attributed). The working bands (stated as the classic teaching bands): **3–6 → W/O emulsifiers; 8–18 → O/W emulsifiers** (detergent-class 13–15, solubiliser-class 15–18 named at the top).\\n\\n**Required HLB**: every OIL has its own demanded balance — the RHL value — published per oil (stated as typical published values; e.g. mineral-oil-class oils sit near 10–12 for O/W). Blending oils? The RHL is (approximately) the mass-weighted average of the components' RHLs — the same blend arithmetic, one level up.\\n\\n**The blend arithmetic** (this lesson's Tier C core — the weight-fraction rule):\\n\\n$$\\nHLB_{blend} = f_A \\cdot HLB_A + f_B \\cdot HLB_B\\n$$\\n\\nwith f the WEIGHT fractions (f_A + f_B = 1). Solving for the pair that hits a required HLB: f_A = (RHL − HLB_B)/(HLB_A − HLB_B).\\n\\n**The honest limits** (what makes HLB a compass, not gospel): HLB ignores the oil's chemistry beyond RHL, temperature, and the phase-volume situation; Bancroft's rule and trial remain the final judges — HLB NARROWS the search, it does not close it.\\n\\n**Boundary honoured**: the HLB SYSTEM is canonical HERE (39-5); pct-31-6 keeps amphiphile science; the batteries guard that no HLB numbers appeared before this lesson.`,
      },
      {
        kind: 'FORMULAS',
        body: `**HLB blend (weight fractions)**\\n\\n$$\\nHLB_{blend} = f_A \\cdot HLB_A + f_B \\cdot HLB_B, \\qquad f_A + f_B = 1\\n$$\\n\\n**Solve for the fraction of the high-HLB agent**\\n\\n$$\\nf_A = \\frac{RHL - HLB_B}{HLB_A - HLB_B}\\n$$\\n\\n**Working bands (Griffin, attributed)**\\n\\n$$\\n3\\text{–}6\\ \\text{W/O}, \\qquad 8\\text{–}18\\ \\text{O/W}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the classic pair.** Target: an O/W emulsion of an oil with RHL ≈ 10.0. Agents: Tween 80 (HLB ≈ 15.0) and Span 80 (HLB ≈ 4.3). Fraction of Tween 80:\\n\\n$$\\nf = \\frac{10.0 - 4.3}{15.0 - 4.3} = \\frac{5.7}{10.7} \\approx 0.533\\n$$\\n\\n→ **≈ 53.3% Tween 80 + 46.7% Span 80** by weight. Check: 0.533 × 15.0 + 0.467 × 4.3 ≈ 8.00 + 2.01 = **10.01 ≈ 10.0** ✓\\n\\n**Example 2 — read the recipe.** A formula says "Tween 80 5 g, Span 80 4.4 g": blend HLB = (5 × 15.0 + 4.4 × 4.3)/9.4 = (75 + 18.9)/9.4 ≈ **9.99 ≈ 10** — the pair was designed for an RHL-10 oil.\\n\\n**Example 3 — the bands.** HLB 4.3 agent → W/O band (3–6); HLB 16.7 → O/W (8–18, solubiliser-class top).\\n\\n**Example 4 — check key.** RHL 12 with the same pair: f = (12 − 4.3)/10.7 ≈ **0.72** → ≈72% Tween 80 — higher-RHL oils demand more hydrophile.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define HLB and state the scale direction.\\n2. Give the two working bands and one classic value each.\\n3. Tween 20 (16.7) + Span 20 (8.6) to RHL 11 — fraction of Tween 20? ((11−8.6)/8.1 ≈ 0.296.)\\n4. Why is HLB a compass not gospel — two honest limits?\\n5. What is RHL, and how does it blend for oil mixtures?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `One number per referee, one required number per oil: HLB turns match-making into arithmetic. Weight-fraction blends land on target — then trial has the last word.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-6',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Emulsion Preparation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Emulsion preparation is energy + order: build the primary emulsion right, then dilute and refine.\\n\\n**The classical compounding methods** (the craft canon — ratios stated as the classical conventions):\\n\\n*Dry gum (continental) method* — the acacia classic: mix gum with the OIL (4 parts oil : 1 part gum) dry, add the WATER (2 parts) ALL AT ONCE and triturate vigorously — the primary emulsion forms with a crackling click; dilute gradually thereafter. The all-at-once water is the method's signature (the interface is created at once, before the gum can hydrate unevenly).\\n\\n*Wet gum (English) method* — gum mucilage first, oil added IN SMALL PORTIONS with vigorous trituration between additions (the gradual route to the same primary emulsion).\\n\\n*Bottle method* — for volatile/less viscous oils: 2 parts oil : 2 parts water : 1 part gum shaken in a bottle (the stored-energy route, named).\\n\\n**The primary-emulsion discipline**: whatever the method, the FIRST emulsion must be thick, white, and crackling — a failed primary never recovers on dilution (the discipline every method shares).\\n\\n**The equipment ladder** (named-and-bounded): mortar and pestle (the craft) → mechanical blenders/stirrers → **homogenisers** (forcing the coarse emulsion through narrow gaps — droplet-size refinement) → **colloid mills** (the mill family from 34-3's list, emulsion register) → ultrasonicators (named). The energy input makes SMALLER droplets — the 39-8 stability dividend priced by machine.\\n\\n**Order-of-assembly honesty**: dissolve water-phase actives in water, oil-phase in oil, THEN emulsify — the two-phase discipline from 37-3 (shock-precipitation prevention applies); add the preservative LAST where the formulation allows (the 37-8 enemies echo).\\n\\n**The finished-emulsion QC echo** (named, bounded): droplet-size feel/appearance, phase-separation check, pH where relevant — the plant's report card before 39-7's shelf-time begins.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dry gum (continental): 4 oil : 1 gum dry, + 2 water ALL AT ONCE — the crackling primary.\\n- Wet gum (English): mucilage first, oil in small portions; bottle method 2:2:1 for volatile oils.\\n- A failed primary never recovers: thick/white/crackling before any dilution.\\n- Equipment ladder: mortar → blender → homogeniser → colloid mill → ultrasonicator (energy = smaller droplets).\\n- Assemble per-phase first (37-3 discipline); preservative last where allowed.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give the dry-gum ratios and the signature move.\\n2. Contrast wet-gum and bottle methods.\\n3. Why must the primary emulsion succeed before dilution?\\n4. How do homogenisers improve the product — the stability dividend?\\n5. Which 37-3 discipline carries over, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Four to one to two, water all at once, triturate to the click: build the primary right and the rest is dilution. Energy buys droplets; droplets buy stability.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-7',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Stability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Emulsion stability is a family tree of failures — the map this lesson draws; 39-8 and 39-9 develop the two headline branches.\\n\\n**The family** (ordered by reversibility):\\n\\n*Flocculation* — droplets CLUSTER but keep their films (the emulsion cousin of 38-4's flocculation): reversible; a precursor state.\\n\\n*Creaming* — droplets RISE (O/W) or SEDIMENT (W/O) under gravity but remain separate: **reversible** by shaking (39-8).\\n\\n*Coalescence* — films rupture, droplets FUSE: **irreversible** (39-9's territory).\\n\\n*Cracking* — the complete, irreversible separation into two layers (coalescence's endgame — 39-9).\\n\\n*Phase inversion* — O/W flips to W/O (often via temperature swings or phase-volume/HLB shifts — the named trigger list).\\n\\n*Ostwald ripening* (named) — small droplets shrink, large grow (the 38-8 echo at droplet scale).\\n\\n**The destabilising pressures** (each named with its mechanism): gravitational (creaming — Stokes applied, 39-8), interfacial-film failure (coalescence — film strength is everything), thermal (heat thins films and vehicles; FREEZING ruptures droplets — the ice-crystal honesty), chemical (pH drift ionises/ionises-away ionic emulsifiers; alcohol/electrolyte additions — the classic formulation insults), and biological — **PHM 201's boundary**: microbial spoilage, enzyme attack, and the sterilisation implications are PHM 201's canon; THIS block's duty is the formulation response: the preservative system and its **partition honesty** — preservative partitioning into the oil phase is pct-30-6's referenced concept (preservative hiding in droplets is preservative not defending the water).\\n\\n**The defence summary** (the design toolkit this block owns): strong appropriate films (39-4/39-5), small uniform droplets (39-6's energy), viscosity support (pct-32 consumed), density matching (39-8), temperature-steady storage (39-10), and the preserved-water-phase discipline.\\n\\n**The QC frame** (named, bounded): creaming/phase-separation observation over time, droplet-size tracking, re-dispersibility on shake — the shelf report card.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Family: flocculation → creaming (reversible) → coalescence/cracking (irreversible); plus inversion and ripening named.\\n- Pressures: gravity, film failure, heat/freezing, chemistry (pH/alcohol/electrolytes), biology.\\n- PHM 201 owns spoilage/microbiology/sterility; PCT owns the formulation response.\\n- Preservative partitioning into droplets: pct-30-6's concept referenced.\\n- Defences: films, droplet size, viscosity, density, temperature, preservation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Order the failure family by reversibility with one mechanism each.\\n2. Which branch does 39-8 develop, which 39-9?\\n3. Name three chemical insults and their targets.\\n4. Draw the PHM 201 boundary and state the partition honesty's canon.\\n5. List the five design defences and their lessons.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Droplets cluster, rise, and — if the film fails — fuse forever: stability is film strength plus patience. Keep the water defended, the temperature steady, and the shake reversible.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-8',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Creaming',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Creaming** is the reversible migration of droplets under gravity — UPWARD for O/W (oil droplets are lighter than water), DOWNWARD for W/O (water droplets are heavier than oil). The name survives from milk: cream rises.\\n\\n**The physics** (applied with attribution): this is Stokes' law — **pct-38-3's canonical equation** — applied to droplets instead of solid particles: creaming velocity scales with the SQUARE of droplet diameter, INVERSELY with viscosity, and DIRECTLY with the density difference; only the SIGN flips for rising droplets. No new equation — the suspension block's law, borrowed home.\\n\\n**The arithmetic in one illustration** (stated, verified, pct-38-3's law applied): a 2 µm oil droplet, density difference ≈ 100 kg/m³, in a thin 1 mPa·s vehicle creams at roughly **19 mm/day**; the same droplet in a 0.1 Pa·s vehicle (×100 viscosity) creams at ≈ **0.19 mm/day** — the viscosity lever's hundredfold, the reason emulsions lean on their continuous-phase thickness.\\n\\n**Why creaming matters even though it is reversible**: the creamed layer is a CONCENTRATED zone (dose uniformity dies — the first pours are thin, the last are rich); flocculation accelerates within it (proximity → coalescence risk — the gateway to 39-9); and the patient experience ("it's gone off") destroys confidence even when a shake restores it.\\n\\n**The defences** (each priced against the borrowed law):\\n\\n*Reduce droplet size* — the d² lever (39-6's energy input; homogenisers).\\n\\n*Increase continuous-phase viscosity* — the η lever (pct-32's canon consumed; gums/viscosity agents — the 38-5 logic applied).\\n\\n*Reduce the density difference* — density matching of the oil phase toward the water (the subtle tool from 38-3's lesson, applied).\\n\\n*Uniform droplet size* — broad distributions cream unevenly and flocculate fast (pct-33-2's echo).\\n\\n*Prevent flocculation* — adequate emulsifier films (39-4).\\n\\n**The boundary honoured**: the equation is stated ONCE in this course (38-3); creaming borrows its verdicts — with attribution, never re-teaching.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Creaming = reversible droplet migration: UP in O/W, DOWN in W/O (density decides direction).\\n- Physics: Stokes' law applied (pct-38-3 canon) — v ∝ d², ∝ 1/η, ∝ Δρ.\\n- Illustration (verified): 2 µm, Δρ 100, 1 mPa·s → ≈19 mm/day; ×100 η → ≈0.19 mm/day.\\n- Harm: dose non-uniformity, flocculation gateway, patient confidence.\\n- Defences: smaller droplets, thicker phase, density matching, uniform size, good films.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State creaming's direction in both classes and the density logic.\\n2. Which lesson owns the equation, and how is it used here?\\n3. Verify the viscosity lever: ×100 η does what to the illustration's rate?\\n4. Why is a "reversible" failure still a failure — three reasons?\\n5. Name the five defences and the lever each pulls.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Light droplets rise, heavy ones sink — the milk story with arithmetic. Thicken the phase and shrink the droplets, and the cream never sees daylight.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-9',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Cracking and Coalescence',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Coalescence** is droplets fusing; **cracking** is the emulsion's complete, irreversible collapse into two layers. Creaming scatters the droplets — cracking ends them.\\n\\n**The mechanism** (the film's failure): two droplets touch (flocculation/creaming brings them close); the interfacial film must then HOLD them apart — if the film is too thin, too weak, displaced, or dissolved, the walls rupture and the droplets merge. Every merge reduces interface (the system's thermodynamic reward — pct-31-1's canon); enough merges and the dispersed phase pools into a continuous layer: cracked.\\n\\n**The killer list** (each named with its mechanism — the diagnostic map):\\n\\n*Wrong/insufficient emulsifier* — films that never held (39-4/39-5 failures).\\n\\n*Temperature abuse* — heat fluidises and can invert phases; FREEZING forms ice crystals that spear droplets and concentrate solutes at interfaces (the W/O sensitivity from 39-3 developed).\\n\\n*Chemical attack on the film* — pH drift ionises or protonates ionic emulsifiers out of effectiveness; electrolytes compress double layers (the ionic-class sensitivities from pct-31-6); alcohol dissolves films.\\n\\n*Microbial/enzymatic attack* — PHM 201's canon (the organisms and enzymes); the formulation response remains the preserved-water-phase discipline.\\n\\n*Phase-volume shock* — adding the wrong phase (water into a strained W/O, oil overload past the emulsifier's capacity — the "phase-volume ratio" honesty named).\\n\\n**Cracked is final**: no shake restores it (the 39-8 contrast is the exam's favourite line); the product is a manufacturing loss and, in the dispensary, a return-to-pharmacy event.\\n\\n**The defences** (the design summary): right agent at right HLB balance (39-5), mixed films where possible (39-4), energy for small uniform droplets (39-6 — fewer violent contacts), viscosity support (pct-32 consumed), temperature-steady storage and "do not freeze" labelling (39-10), preserved water phase, and formulation-space honesty (don't overload the internal phase).\\n\\n**The diagnostic habit**: creamed but re-disperses on a gentle shake → 39-8's reversible world; separated into layers that NEVER re-mix → 39-9's verdict.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Coalescence = film rupture + fusion; cracking = the endgame (two clean layers).\\n- Mechanism: contact → film must hold → rupture → merge; interface falls, the system thanks you.\\n- Killers: wrong agent, heat/freeze cycles, pH/electrolyte/alcohol attack, microbes (PHM 201), phase-volume shock.\\n- Cracked is final — the 39-8 contrast.\\n- Defences: HLB-correct films, small uniform droplets, viscosity, steady temperature, preservation, volume honesty.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Walk the film-rupture mechanism end-to-end.\\n2. Why does freezing crack emulsions — two mechanisms?\\n3. Name three chemical film-attacks and the class each targets.\\n4. State the creaming/cracking diagnostic test.\\n5. Which defences trace to which lessons?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Creaming is a crowd problem; cracking is a funeral: the film failed and the phases went home. Freeze it, over-dilute it, or starve the film — and no shake will call it back.`,
      },
    ],
  },
  {
    nodeId: 'pct-39-10',
    courseId: 'pct-201',
    topicId: 'pct-39',
    nodeType: 'subtopic',
    title: 'Packaging and Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Emulsion packaging applies the pct-28 canon to a product whose worst enemies are TEMPERATURE and TIME — the label and the shelf do half the stability work.\\n\\n**The container**: **wide-mouth amber bottles** for pourable emulsions (dosing access + light protection — the pct-43-6 echo), **jars/tubes** for creams (the topical interface — 40-9's canon continues), **tight closures** (evaporation concentrates the external phase and shifts HLB balances — the dose-drift honesty), **child-resistant closures** where required (pct-28 canon).\\n\\n**The temperature contract** (the storage brief): **cool and steady — and DO NOT FREEZE** (the 39-9 killer list made a label line: freezing is a cracking event); heat accelerates creaming, thinning, and film fatigue (pct-43-5's echo); temperature CYCLES are worse than steady warmth (the expansion/contraction honesty).\\n\\n**The label duties** (pct-28-6/7 applied, emulsion accents): identity/strength, batch + expiry (the traceability pair), **"SHAKE WELL BEFORE USE"** for pourable emulsions (the 39-8 reversibility contract — the creamed layer must return to dose), the storage statement ("store in a cool place; do not freeze" — pct-28-9's translation duty applied), and **"for external use only"** where topical (the route-safety line).\\n\\n**The counselling loop** (the dispensing craft): demonstrate the shake (gentle inversion — VIOLENT shaking whips air and can stress films), teach the storage trio (cool, steady, never frozen), supply the measuring device for orals (37-1's canon), and warn the topical patient about staining/clothing (the W/O washability honesty from 39-3, patient-facing).\\n\\n**The transport honesty**: vibration is gentle shear (flocculation feeds), heat is the killer, freezing in a courier van is a cracking event — the last-mile duty repeats from 38-9 with emulsion accents.\\n\\n**The synthesis** (the block's close): the bottle carries 39-4's films, 39-5's balance, 39-8's shake contract, and 39-9's do-not-freeze warning — packaging is the emulsion's stability plan made visible.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Container: wide-mouth amber (pourables), jars/tubes (creams), tight + CRC closures.\\n- Temperature contract: cool, steady, DO NOT FREEZE — cycles worse than steady warmth.\\n- Label: SHAKE WELL + cool storage + do-not-freeze + external-use where topical.\\n- Counselling: gentle inversion (violent shaking whips air), device for orals, W/O staining caution.\\n- Transport: vibration feeds flocculation; a frozen courier van is a cracking event.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is headspace-and-tightness a balance for emulsions?\\n2. Recite the label trio and the lesson each line protects.\\n3. Why does the counselling say GENTLE inversion?\\n4. Which 39-3 honesty reaches the patient through counselling?\\n5. State the synthesis: which four lessons meet at the bottle?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Amber bottle, cool shelf, gentle shake: the emulsion's survival kit fits on a label. Freeze it and you have bought a broken promise — shake gently and it keeps every one.`,
      },
    ],
  },
];
