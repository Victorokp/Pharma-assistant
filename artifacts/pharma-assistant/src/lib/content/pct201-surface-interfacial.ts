import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-31: Surface and Interfacial Phenomena.
 *
 * Batch 34: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–30
 * top-level topic convention) plus its seven children pct-31-1…31-7
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-31 has no surviving Phase-1 tier record; the
 * quantitative children — 31-1 Surface Tension (γ units, work of
 * surface creation) and 31-2 Interfacial Tension (spreading
 * coefficient) — are Tier C under the established calculation-lesson
 * convention; the topic and remaining conceptual children are Tier B.
 * Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic is the canonical home of surface/interfacial
 * tension, surfactant behaviour (including micelle/CMC canon, which
 * pct-29-3 forward-referenced), wetting/contact-angle science
 * (consumed later by pct-38-6's suspension wetting agents), and
 * adsorption at the 200L level. The HLB SYSTEM belongs to pct-39-5
 * (surfactant classification is touched here only as behaviour, not
 * as the numbered system); emulsion canon is pct-39's; deep
 * rheology of surface films is pct-32's; colloidal-system detail
 * beyond 200L is named and bounded. All numeric values in examples
 * are stated illustrative values, independently verified; standard
 * reference liquids used in the worked examples (water, etc.) carry
 * their commonly tabulated approximate values, flagged as such.
 */
export const pct201SurfaceInterfacialLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-31',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'topic',
    title: 'Surface and Interfacial Phenomena',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where a liquid meets air — or a liquid meets a liquid it cannot mix with — the molecules at that boundary live a different life from the molecules inside: pulled sideways and inward by their neighbours, with no like neighbours beyond the boundary to pull them back. The result is the whole family of **surface and interfacial phenomena**: surfaces that behave like stretched films, drops that bead, liquids that will not mix, and molecules that migrate to boundaries to calm them.\\n\\n**The topic's map.** (1) **Tension itself** — surface tension (liquid–air) and interfacial tension (liquid–liquid), what they are and what they cost (31-1, 31-2). (2) **Wetting** — how a liquid spreads over or recoils from a solid, quantified by the contact angle (31-3, 31-4). (3) **Adsorption** — molecules accumulating at surfaces and interfaces, the phenomenon that makes surfactants work (31-5). (4) **Surfactants** — the amphiphilic molecules that lower tension, form micelles, and solubilise (31-6) — the canon pct-29-3 promised when it listed surfactant solubilisation as a solubility lever. (5) **Applications** (31-7): emulsions, suspensions, detergency, and the dosage forms of the course's back half.\\n\\n**Why the course needs it here**: the next blocks — rheology (pct-32), suspensions (pct-38), emulsions (pct-39), semisolids (pct-40) — all stand on this foundation, and pct-29's solubility levers already borrowed its vocabulary.\\n\\n**Standing discipline**: tabulated tension values (water ≈ 72 mN/m at room temperature and similar reference figures) are quoted as commonly tabulated approximate values, flagged as such; all worked numbers are stated illustrative values, independently verified.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Boundary molecules are asymmetrically pulled — the origin of every phenomenon in this topic.\\n- Map: tension (31-1/31-2) → wetting + contact angle (31-3/31-4) → adsorption (31-5) → surfactants incl. micelles (31-6) → applications (31-7).\\n- Micelle/CMC canon lands HERE; pct-29-3's solubilisation lever points to this lesson.\\n- HLB SYSTEM is pct-39-5's canon; emulsions pct-39's; rheology pct-32's.\\n- Tabulated tension values are approximate reference figures, flagged.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why are boundary molecules energetically different from bulk molecules?\\n2. Name the topic's five map regions and the lesson that owns each.\\n3. Which earlier lesson forward-referenced this topic's solubilisation canon?\\n4. Which three back-half topics stand on this foundation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Boundaries are expensive, so molecules migrate to cheapen them: tension prices the surface, wetting reads the angle, adsorption stocks the boundary, surfactants run the whole business.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-31', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-31-1',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Surface Tension',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A molecule in the bulk of a liquid is pulled equally in all directions by its neighbours; a molecule **at the surface** lacks like neighbours above and feels a net inward pull. The surface therefore behaves as if under constant tension — contracting to the smallest area possible (why drops are round, why some insects stand on water).\\n\\n**Definition and units.** Surface tension **γ** is the force acting per unit length of surface edge — and equivalently the **work required to create unit new surface**:\\n\\n$$\\n\\gamma = \\frac{F}{l} = \\frac{W}{\\Delta A}\\n$$\\n\\n**Units discipline**: SI units are **N/m**; the pharmaceutical literature uses the equal unit **mN/m** (numerically identical to the older dyn/cm — a 1:1 renaming). Water at room temperature is commonly tabulated at ≈ 72 mN/m (approximate reference figure, flagged); liquids with lower cohesion (organics) sit lower.\\n\\n**Temperature dependence**: heating weakens cohesive forces, so γ **falls** with rising temperature and approaches zero near the liquid's critical point — the same temperature-lever habit as pct-29-4, now acting on the surface rather than the bulk.\\n\\n**The work calculation** (the Tier C arithmetic this lesson owns): creating new surface area ΔA costs W = γ × ΔA — a genuinely computable quantity, worked below.\\n\\n**Curvature consequence** (named, bounded): a curved surface carries an extra pressure difference across it (the Young–Laplace relation) — the physics behind small drops' behaviour; the relation itself is beyond-200L depth, named here so the boundary is visible.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Surface tension, both readings**\\n\\n$$\\n\\gamma = \\frac{F}{l} = \\frac{W}{\\Delta A}\\n$$\\n\\n**Work to create surface**\\n\\n$$\\nW = \\gamma \\times \\Delta A\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — work from area.** Creating 0.05 m² of new water surface at γ ≈ 0.072 N/m (72 mN/m, tabulated): W = 0.072 × 0.05 = **0.0036 J** (3.6 mJ). Units check: N/m × m² = N·m = J ✓.\\n\\n**Example 2 — force from length.** A film edge of length 0.10 m pulled by the film's tension: F = γ × l = 0.072 × 0.10 = **0.0072 N** (7.2 mN) — per surface; a soap film has TWO surfaces and pulls double (the classic film-count trap, made explicit).\\n\\n**Example 3 — unit renaming.** 46 mN/m = **46 dyn/cm** (1:1) = 0.046 N/m — the three notations of one number.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State both definitions of γ and the unit pairs that match them.\\n2. W to create 0.02 m² of water surface at 72 mN/m? (1.44 mJ.)\\n3. Why does a two-sided film pull twice a one-sided edge?\\n4. Which direction does γ move with temperature, and what Lever-family logic says so?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `γ is force per length and work per area — one number, two meanings, three notations (N/m, mN/m, dyn/cm). Drops are round because surfaces shrink; heating lets them relax.`,
      },
    ],
  },
  {
    nodeId: 'pct-31-2',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Interfacial Tension',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where two **immiscible** liquids meet — oil against water — the boundary molecules of each phase are pulled by unlike neighbours on the far side. The resulting **interfacial tension** (γ(int)) is usually LOWER than either liquid's surface tension against air, because the unlike-liquid attraction partially cancels each phase's inward pull. Water against a typical hydrocarbon is commonly tabulated near 50 mN/m (approximate reference figure) — well below water's ≈72 against air.\\n\\n**The spreading coefficient** — the Tier C arithmetic this lesson owns — decides whether an oil dropped onto water will spread into a film or bead up:\\n\\n$$\\nS = \\gamma_{\\text{water(air)}} - \\bigl(\\gamma_{\\text{oil(air)}} + \\gamma_{\\text{oil-water}}\\bigr)\\n$$\\n\\n**Reading it**: spreading replaces water's surface with oil's surface plus an oil–water interface; S > 0 means the exchange is energetically downhill — the oil spreads spontaneously; S < 0 means it beads.\\n\\n**Worked chain below** uses stated illustrative values; the reference figures are flagged as tabulated approximations.\\n\\n**Pharmacy connections** (the reason this matters before the emulsion block): (1) *emulsions* (pct-39's canon) — immiscible pairs have positive interfacial tension, which is precisely why they need emulsifying agents (31-6's surfactants) to drop γ(int) and let droplets form; (2) *spreading on tissues* — an oil film spreading on a mucosal or skin surface obeys the same coefficient logic (the application stays qualitative; biological surfaces are complex systems, referenced not quantified); (3) *medicated oils and baths* — spreading versus beading decides film formation.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Spreading coefficient (oil on water)**\\n\\n$$\\nS = \\gamma_{w/a} - (\\gamma_{o/a} + \\gamma_{o/w})\\n$$\\n\\n**Sign convention**\\n\\n$$\\nS > 0 \\Rightarrow \\text{spreads}, \\qquad S < 0 \\Rightarrow \\text{beads}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — a spreading case.** Stated (illustrative): γ(water/air) = 72, γ(oil/air) = 28, γ(oil/water) = 40 mN/m. S = 72 − (28 + 40) = 72 − 68 = **+4 mN/m** → the oil spreads spontaneously into a film.\\n\\n**Example 2 — a beading case.** γ(oil/air) = 30, γ(oil/water) = 48: S = 72 − 78 = **−6 mN/m** → beading; the interfacial cost outweighs the surface replaced.\\n\\n**Example 3 — the interfacial ceiling.** γ(oil/air) = 25, γ(oil/water) = 50: S = 72 − 75 = −3 → beads. Note the pattern: whenever γ(oil/water) alone approaches γ(water/air), spreading is doomed — which is why emulsion-making must LOWER γ(oil/water) (31-6's surfactants, pct-39's agents).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is γ(interfacial) usually lower than either surface tension?\\n2. S with γw/a 72, γo/a 26, γo/w 44? (+2 — spreads.)\\n3. Why does a large γ(oil/water) doom spreading even with a low γ(oil/air)?\\n4. Which future topic consumes this coefficient, and how?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Interfaces cost less than surfaces — unlike neighbours cancel part of the pull. The spreading coefficient books the deal: replace water's surface with oil's surface plus an interface, and the sign says spread or bead.`,
      },
    ],
  },
  {
    nodeId: 'pct-31-3',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Wetting',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Wetting** is the displacement of one fluid (usually air) from a solid surface by another (usually a liquid) — the liquid making contact with the solid and spreading across it. It is a three-phase affair (solid, liquid, air/second-liquid), and its degree is a spectrum, not a yes/no.\\n\\n**The spectrum.** *Complete wetting*: the liquid spreads into a thin film (water on clean glass). *Partial wetting*: a finite drop with a measurable contact angle sits on the surface (water on many plastics). *No wetting*: the liquid beads and rolls (water on lotus leaves, mercury on glass). Where a given liquid–solid pair sits is set by the balance of three tensions — solid–liquid, solid–vapour, liquid–vapour — formalised by the contact angle (31-4) and, at its deepest, by Young's equation (named here; its algebraic rearrangements are beyond-200L).\\n\\n**Why pharmacy cares** (the applications this lesson owns; the formulation detail lives in later blocks):\\n\\n**(1) Suspensions** (pct-38's canon): a hydrophobic powder resists wetting by water — particles clump and float rather than disperse. Wetting agents (surfactants, 31-6) or wetting solvents (glycerol/ethanol pre-mixes) are added to make water accept the powder. The pct-38-6 lesson will own the agent selection; this topic owns the science.\\n\\n**(2) Tablet manufacture** (pct-35's canon): granulation liquids must wet the powder mass uniformly, or granules form unevenly.\\n\\n**(3) Dissolution** (pct-29's canon): a poorly wetted tablet presents less effective surface to the medium — wetting is the unrecognised first step of dissolution (the Noyes–Whitney area A is only as big as the wetted area).\\n\\n**(4) Eye drops and skin films** (qualitative): spreading across the corneal film or skin base obeys the same three-tension balance.\\n\\n**The surfactant effect, previewed**: adding surfactant lowers the liquid's γ and adsorbs at the solid–liquid interface — both push the pair toward wetting (the mechanism 31-4's angle readings will quantify).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Wetting = air displaced from a solid by a liquid; a spectrum from film to bead.\\n- Three tensions (S–L, S–V, L–V) set the outcome; Young's equation named, rearrangements bounded.\\n- Suspension hydrophobic powders, tablet granulation, and dissolution area all consume this science.\\n- The Noyes–Whitney A is only as large as the WETTED area — wetting precedes dissolution.\\n- Surfactants push toward wetting: lower γ + adsorb at S–L.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define wetting and draw its three-point spectrum.\\n2. Name the three tensions in the balance.\\n3. Why is wetting the first step of dissolution, mechanically?\\n4. Which future lesson owns wetting-agent SELECTION, and what does this topic own?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Before a liquid can dissolve or carry a powder, it must first agree to touch it. Wetting is that agreement — priced in three tensions, read in an angle, fixed with a surfactant.`,
      },
    ],
  },
  {
    nodeId: 'pct-31-4',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Contact Angle',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **contact angle θ** is wetting's measurement: the angle, measured THROUGH the liquid, between the solid surface and the liquid–vapour edge where the drop meets the solid.\\n\\n**The reading scale.** θ = 0° → complete wetting (spreading film); 0° < θ < 90° → partial wetting (the liquid wets, moderately); θ > 90° → poor wetting (the liquid prefers itself); θ → 180° → essentially no wetting (the beading limit).\\n\\n**Reading θ as a balance of pulls** (the qualitative Young picture): the drop's edge is a tug-of-war between the solid–vapour tension pulling the edge outward (to let liquid advance) and the combination of liquid–vapour tension and solid–liquid tension pulling inward. The angle settles where the tug-of-war balances — no number-crunching needed at 200L, but the MECHANISM is exactly why surfactants (lowering the liquid–vapour pull) push θ downward.\\n\\n**Practical readings.** *Hydrophilic vs hydrophobic surfaces*: water θ < 90° on clean glass (hydrophilic); θ > 90° on waxy/fluoropolymer surfaces (hydrophobic). *Powder wettability*: the same liquid gives different θ on different powders — the quantitative basis for wetting-agent choice in pct-38-6. *Tablet disintegration* (pct-35 named): media penetrate poorly into θ > 90° compacts.\\n\\n**Measurement named, bounded**: goniometer (optical angle reading) and Washburn (capillary-rise) methods exist; their procedures are instrument canon, referenced not developed.\\n\\n**The modification habit**: to improve wetting, either change the SURFACE (clean it, roughen it — roughness amplifies the existing tendency, the Wenzel idea named and bounded) or change the LIQUID (surfactant, mixed solvents — the formulation lever).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- θ measured through the liquid at the S/L/V junction; the wetting spectrum in one number.\\n- 0° = film; < 90° = wetting; > 90° = poor; → 180° = beading.\\n- Mechanism: three-tension tug-of-war — surfactants lower L–V pull and drive θ down.\\n- Applications: powder wettability (pct-38-6's basis), disintegration (pct-35), hydrophilicity reading.\\n- Modify the surface or modify the liquid — those are the only two levers.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define θ and state the through-the-liquid convention.\\n2. Read the scale: what does θ = 85° vs θ = 110° predict for a suspension powder?\\n3. Why do surfactants always push θ downward, mechanically?\\n4. Name the two modification levers and the bounded idea about roughness.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `One angle tells the whole affair: small is friendly, large is aloof. Lower the liquid's tension and the drop leans in — the angle is the tug-of-war's verdict.`,
      },
    ],
  },
  {
    nodeId: 'pct-31-5',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Adsorption',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Adsorption** is the accumulation of molecules at an interface — a surface excess relative to the bulk. It is the general phenomenon of which surfactant behaviour (31-6) is the star case, and it is distinct from **absorption** (uptake INTO a bulk phase) — the spelling pair that examiners love and dispensers must not confuse.\\n\\n**Why molecules adsorb**: interfaces carry free energy (31-1/31-2's canon); any molecule that settles at an interface and lowers that energy is thermodynamically welcomed. Amphiphiles (31-6's subjects) do this dramatically; even simple solutes adsorb to small degrees.\\n\\n**The two binding regimes** (the classification this lesson owns):\\n\\n*Physical adsorption (physisorption)*: weak forces (van der Waals), low heat of adsorption, **reversible and multi-layer-capable**, non-specific.\\n\\n*Chemical adsorption (chemisorption)*: true chemical bonding, much larger energies, essentially **irreversible, single-layer** (a monolayer can only bond once), highly specific to the pair.\\n\\nThe distinction matters for formulation: physisorbed coatings can be displaced (a stability risk); chemisorbed ones are permanent (a processing reality).\\n\\n**Adsorbents in pharmacy** — the working examples: activated charcoal (its enormous internal surface adsorbs poisons in overdose — the emergency-medicine application), antacids and kaolin (adsorbing toxins or, inconveniently, OTHER DRUGS — the adsorption-based drug interaction: co-administered adsorbent can strip a medicine from the gut), and packaging materials (pct-28's sorption interaction class, now explained).\\n\\n**Isotherms named and bounded**: the Langmuir and Freundlich models describe how adsorbed amount rises with concentration (monolayer saturation in Langmuir's case); their equations are beyond-200L — named here so the shape of the science is visible without its algebra.\\n\\n**The surfactant preview**: surfactants adsorb at interfaces with their tails out of water and heads in — the orientation that cuts interfacial tension; full treatment next lesson.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Adsorption = surface excess; absorption = uptake into bulk — never confuse the pair.\\n- Physisorption: weak, reversible, multilayer; chemisorption: strong, specific, monolayer, ~irreversible.\\n- Activated charcoal = overdose adsorbent; kaolin/antacids = interaction risk (strip co-drugs).\\n- Packaging sorption (pct-28-2's class) is adsorption in action.\\n- Langmuir/Freundlich named; their algebra bounded beyond-200L.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish adsorption from absorption with one example each.\\n2. Contrast the two binding regimes in three properties each.\\n3. Why can an antacid dose invalidate a co-administered drug, and what is the interaction mechanism?\\n4. Which pct-28 interaction class is explained by this lesson?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Interfaces want company, and molecules that lower their price get to stay: weakly and in stacks (physisorption) or firmly and once (chemisorption). Charcoal saves lives by it; kaolin steals drugs by it.`,
      },
    ],
  },
  {
    nodeId: 'pct-31-6',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Surfactants',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **surfactant** (surface-active agent) is an **amphiphilic** molecule: one part loves water (**hydrophilic head** — ionic or strongly polar), one part loves oil (**lipophilic tail** — a hydrocarbon chain). Caught between two loves, surfactant molecules do something remarkable: they migrate to interfaces and orient themselves — head in water, tail out — and in doing so **lower surface and interfacial tension** (the cost of the boundary drops because the boundary is now occupied by molecules that belong there).\\n\\n**The classification** (by head-group charge — the working scheme; the numbered HLB SYSTEM is pct-39-5's canon):\\n\\n*Anionic* (head negative in water): the classic soaps and many detergents (sodium laury sulphate-type agents). *Cationic* (head positive): quaternary ammonium agents — many carry antimicrobial activity (a property whose microbiological canon is PHM 201's). *Non-ionic* (no charge): polysorbate-type and polyoxyethylene agents — the gentlest, the most common emulsion workhorses (pct-39-4's selection canon). *Amphoteric/zwitterionic* (charge depends on pH): lecithin-type.\\n\\n**Micelles — the self-assembly** (the canon pct-29-3 pointed to): above a threshold concentration, dissolved surfactant stops accumulating at surfaces (they are saturated) and instead aggregates IN solution — tails inward, sheltering from water; heads outward, facing it. The aggregate is a **micelle**; the threshold is the **critical micelle concentration (CMC)**. Below the CMC, added surfactant mostly lowers surface tension; above it, surface tension is essentially flat and new surfactant makes NEW MICELLES.\\n\\n**Solubilisation**: the micelle's oily interior can host lipophilic drug molecules — dissolving the otherwise-insoluble inside a dispersed shell. This is the mechanism behind pct-29-3's surfactant lever, and the reason polysorbate-type agents appear in real formulations of hydrophobic actives.\\n\\n**Detergency** (the everyday application): the surfactant wets the soiled surface, adsorbs at soil–water and fabric–water interfaces, and micelles carry the lifted soil away — wetting (31-3), adsorption (31-5), and micelles working in one process.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Amphiphile = hydrophilic head + lipophilic tail; interfaces are where it belongs.\\n- Classes by head charge: anionic, cationic (± antimicrobial — PHM 201 canon), non-ionic, amphoteric.\\n- CMC: below it, γ falls; above it, γ flattens and micelles form — the diagnostic break.\\n- Solubilisation = lipophilic drug hosted in the micelle core (pct-29-3's lever explained).\\n- HLB SYSTEM and emulsifier selection are pct-39-5/pct-39-4 canon.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw the amphiphile and its two preferred neighbourhoods.\\n2. What changes in the surface-tension curve at the CMC, and why?\\n3. Explain solubilisation in one sentence, and name the earlier lesson that borrowed it.\\n4. List the four head-charge classes with one agent example each — and name whose canon the HLB numbers are.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Two loves, one molecule: it moves to the border to serve both, cheapens the border on the way, and past the CMC builds microscopic shelters that smuggle oil through water. That is a surfactant.`,
      },
    ],
  },
  {
    nodeId: 'pct-31-7',
    courseId: 'pct-201',
    topicId: 'pct-31',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Applications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing map: where the topic's science is consumed across pharmacy — the connective lesson for the course's back half.\\n\\n**Emulsions** (pct-39's canon, principled here): an oil–water pair with positive γ(o/w) resists dispersing (31-2's arithmetic); surfactants lower γ(int) and form protective interfacial films, letting droplets exist. Emulsifier selection and the HLB system belong to pct-39-4/39-5 — this topic supplied the physics those lessons will formalise.\\n\\n**Suspensions** (pct-38's canon): hydrophobic powders need wetting agents to disperse (31-3/31-4's θ logic); flocculation control adds adsorption considerations (31-5) — agent selection is pct-38-6's lesson.\\n\\n**Solubilisation in real formulations**: polysorbate-type non-ionics hosting hydrophobic actives (31-6's micelles) — the formulation expression of pct-29-3's lever; concentration choices respect the CMC logic.\\n\\n**Detergency and cleansing** (31-6's process): the pharmacy-relevant case is equipment and surface cleaning — wetting, adsorbing, micellar lift-off.\\n\\n**Adsorption therapy and interactions** (31-5's canon): activated charcoal in overdose; adsorbent–drug interactions to counsel around.\\n\\n**Spreading and film formation** (31-2's coefficient): topical films, bath oils, medicated sprays — spread or bead, priced by S.\\n\\n**Surface activity as a double-edged sword** (the honest caveats): surfactants can irritate biological barriers (the tolerability trade), can bind to and inactivate preservatives or drug (a stability/efficacy risk — pct-43's future canon), and can foam inconveniently (the processing nuisance) — application requires judgement, not just enthusiasm.\\n\\n**The forward chain**: every remaining dosage-form block (pct-35…pct-43) touches this topic somewhere — wetting granules, disintegrating compacts, dispersing powders, emulsifying oils, gelling bases, sterilising solutions. This is why pct-31 sits here, before all of them.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Emulsions: γ(int) must fall — physics here, agent selection pct-39-4/39-5.\\n- Suspensions: θ logic for wetting agents; selection pct-38-6.\\n- Micellar solubilisation: the formulation expression of pct-29-3's lever; respect the CMC.\\n- Adsorption: therapy (charcoal) and interactions (kaolin/antacid stripping).\\n- Caveats: irritation, drug/preservative binding, foaming — surfactants need judgement.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Connect each of 31-1…31-6's sciences to one application in this lesson.\\n2. Which two later lessons own agent SELECTION, and why did the physics have to come first?\\n3. Name the three honest caveats of surface-active formulation.\\n4. Why does pct-31 sit before the entire dosage-form back half of the course?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Tension, wetting, adsorption, micelles — four instruments, one orchestra: emulsions, suspensions, solubilised actives, cleansed surfaces, rescued overdoses. The back half of pharmaceutics plays on these strings.`,
      },
    ],
  },
];
