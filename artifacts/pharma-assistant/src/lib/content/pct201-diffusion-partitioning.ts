import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-30: Diffusion, Partitioning and Drug
 * Distribution.
 *
 * Batch 33: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–29
 * top-level topic convention) plus its seven children pct-30-1…30-7
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-30 has no surviving Phase-1 tier record; the
 * quantitative children — 30-2 Fick's Law Concept, 30-3 Partition
 * Coefficient, 30-4 Distribution Coefficient — are Tier C under the
 * established calculation-lesson convention; the topic and remaining
 * conceptual children are Tier B. Convention-derived, flagged pending
 * confirmation.
 *
 * Scope discipline: THIS topic is the canonical home of diffusion and
 * partitioning science — pct-29-9 carried D only as a Noyes–Whitney
 * term and hands it here; the HH ionisation identities are pct-29-7's
 * canon (30-4 consumes them, pointing back); bioavailability/absorption
 * outcomes are pct-24's (30-7 connects the chain, does not re-teach
 * PK); surfactant/micellar behaviour is pct-31's (next topic — not
 * touched here); membrane physiology stays qualitative (no membrane
 * constants invented). All worked values are stated illustrative
 * values, independently verified.
 */
export const pct201DiffusionPartitioningLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-30',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'topic',
    title: 'Diffusion, Partitioning and Drug Distribution',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A dissolved drug molecule still has two barriers between it and its action: it must **move** (diffusion) and it must **choose where to be** (partitioning between water and the lipid worlds of membranes and fat). This topic builds both, quantitatively at 200L depth.\\n\\n**The three ideas.** (1) **Diffusion** — net molecular movement down a concentration gradient, quantified by Fick's law (30-1/30-2). (2) **Partitioning** — how a drug divides itself between two immiscible phases at equilibrium, quantified by the partition coefficient P and its logarithm (30-3) — the standard measure of **lipophilicity** (30-5). (3) **Distribution in the real, ionising world** — at any actual pH the drug is a mixture of forms, and the effective ratio is the distribution coefficient (30-4): partitioning corrected for ionisation.\\n\\n**Why pharmacy needs this** (30-6/30-7): dissolution hands the drug to solution (pct-29's ending is this topic's beginning); diffusion across membranes and partitioning into them decide absorption and distribution (pct-24's F and Vd live downstream); emulsion preservative efficacy and extraction analysis are direct bench applications.\\n\\n**Standing discipline**: membrane thicknesses, D values, and P values in examples are stated illustrative values; membrane biology stays qualitative (transporters and carrier systems are named as beyond-200L canon, not assumed).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Diffusion = net movement down the gradient (Fick's law); partitioning = equilibrium division between phases (P, log P).\\n- Distribution coefficient = partitioning corrected for ionisation at the actual pH.\\n- pct-29's D term finds its home here; HH identities are pct-29-7's, consumed not re-taught.\\n- Downstream: pct-24's F and Vd; applications in emulsions and analysis (30-6).\\n- All membrane/P/D values in examples are stated illustrative values.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three core ideas and the quantity that anchors each.\\n2. How does this topic connect pct-29's output to pct-24's parameters?\\n3. What is the standing discipline about membrane constants and transporters?\\n4. Which lesson consumes pct-29-7's identities, and how?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Move down the gradient, split between the phases, correct for the charge. Diffusion gets the drug there; partitioning decides where 'there' is.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-30', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-30-1',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: 'Diffusion',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Diffusion** is the net movement of molecules from regions of higher concentration to regions of lower concentration — the macroscopic result of random molecular motion. No energy is spent by the drug or the body on the movement itself: it is **passive**, driven by statistics (more molecules on the high side randomly wander across than return).\\n\\n**The gradient is the driver.** Diffusion rate depends on how steep the concentration difference is — and diffusion **stops** at equilibrium, when concentrations equalise and the random crossings balance. The concentration gradient is therefore both the driving force and the clock's winding.\\n\\n**What controls the speed.** (1) *Molecule size and shape* — smaller diffuses faster. (2) *Medium viscosity* — thicker medium, slower molecules. (3) *Temperature* — heat speeds molecular motion (the same lever pct-29-4 used for solubility). (4) *The medium itself* — diffusion through water differs from diffusion through a lipid membrane or a gel (the pharmaceutical relevance of gels and ointment bases: drug must diffuse out of the base to reach the skin — pct-40's future canon, named not developed).\\n\\n**The coefficient D** bundles the molecule/medium/temperature factors into one number — the **diffusion coefficient** — that the next lesson's law uses. D is a property of the molecule–medium pair at a temperature, stated per example, never assumed universal.\\n\\n**Pharmacy's diffusion landscapes**: drug leaving a tablet through stagnant layers (pct-29-9's boundary layer h was one), drug crossing the gut wall, drug diffusing through a gel base, preservative diffusing into a microbial cell — one phenomenon, many stages.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Diffusion = net flow high → low, from random motion; passive, stops at equilibrium.\\n- Speed factors: molecule size, viscosity, temperature, medium — bundled into D.\\n- D is a molecule–medium pair property at a temperature — stated, never universal.\\n- One phenomenon, many landscapes: boundary layers, gut wall, gel bases (pct-40 named).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is diffusion passive, and what statistics produce net movement?\\n2. What happens to diffusion at equilibrium, and why?\\n3. Name four factors that set D, and the lever family each belongs to.\\n4. Give three pharmacy landscapes where diffusion is the rate step.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Random walks make net flow — down the gradient, never up, until the concentrations meet. D prices the journey: molecule, medium, temperature.`,
      },
    ],
  },
  {
    nodeId: 'pct-30-2',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: "Fick's Law Concept",
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Fick's first law** turns diffusion's description into an equation: the rate of diffusion is proportional to the area and to the concentration gradient, with D as the proportionality constant.\\n\\n$$\\n\\frac{dM}{dt} = \\frac{D \\cdot A}{h} \\cdot \\Delta C\\n$$\\n\\n**The terms.** dM/dt: amount diffusing per time (e.g. mg/s). **D**: diffusion coefficient (cm²/s) — 30-1's bundle. **A**: area available for diffusion (cm²). **h**: the thickness of the barrier or boundary layer (cm). **ΔC**: the concentration difference across it (mg/cm³) — the driving force.\\n\\n**The family resemblance is the point.** This is the same shape as pct-29-9's Noyes–Whitney equation — D·A/h × (driving force). Dissolution was diffusion through the boundary layer; membrane absorption is diffusion through the barrier. One mathematics, two landscapes — which is why pct-29-9 could carry D as a term and hand it here.\\n\\n**The levers, mapped**: A — more area, faster (surface-area logic again); h — thinner barrier, faster (stirring, membrane properties); ΔC — steeper gradient, faster, fading as it equilibrates (the sink-condition logic of pct-29-9: the body's blood flow keeps ΔC steep by carrying drug away); D — the molecule/medium pair.\\n\\n**Worked scale**: the example below shows the magnitudes a 200L problem uses — all values stated.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Fick's first law (barrier form)**\\n\\n$$\\n\\frac{dM}{dt} = \\frac{D \\cdot A}{h} \\cdot \\Delta C\\n$$\\n\\n**Same family as Noyes–Whitney**\\n\\n$$\\n\\frac{dC}{dt} = \\frac{D \\cdot A}{h} \\cdot (C_s - C)\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the base case.** Stated: D = 1×10⁻⁶ cm²/s, A = 1 cm², h = 0.01 cm, ΔC = 1 mg/cm³.\\n\\ndM/dt = (10⁻⁶ × 1 / 0.01) × 1 = 10⁻⁴ mg/s. Per hour: 10⁻⁴ × 3600 = **0.36 mg/h**.\\n\\n**Example 2 — doubling the area.** Same barrier, A = 2 cm²: rate doubles → **0.72 mg/h**.\\n\\n**Example 3 — thinning the barrier.** Same drug, h halved to 0.005 cm: rate doubles → 0.72 mg/h. Any single factor multiplies linearly; combined changes multiply (A × 2 AND h ÷ 2 → **1.44 mg/h**, 4× the base).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name every term of the barrier-form equation with its unit.\\n2. D = 10⁻⁶, A = 2 cm², h = 0.005 cm, ΔC = 1 mg/cm³ — rate in mg/s and mg/h? (4×10⁻⁴ mg/s = 1.44 mg/h.)\\n3. What makes this equation the same family as Noyes–Whitney, and what differs?\\n4. How does blood flow act on ΔC, and which pct-29-9 concept does it echo?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Rate = D·A/h × ΔC. Area widens, barriers thin, gradients drive, D prices the molecule — and dissolution was the same law wearing a different barrier.`,
      },
    ],
  },
  {
    nodeId: 'pct-30-3',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: 'Partition Coefficient',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Partitioning** is what happens when a solute that dissolves in BOTH of two immiscible liquids is shaken with them: it divides itself between the phases until its **chemical potential is equal** — a thermodynamic equilibrium, no energy spent. The **partition coefficient P** records the division:\\n\\n$$\\nP = \\frac{C_{\\text{organic}}}{C_{\\text{aqueous}}}\\n$$\\n\\n**The convention stack.** The standard organic phase is **n-octanol** (a reasonable stand-in for membrane lipid); the standard aqueous phase is water (or buffer at a stated pH — but for the coefficient to describe the MOLECULE rather than the medium's pH, the measurement convention uses the **unionised** species; ionisation corrections are 30-4's business). P is a ratio of two concentrations in the same units, so it is **dimensionless** — and because P spans many orders of magnitude, the standard descriptor is its logarithm: **log P**.\\n\\n$$\\n\\log P = \\log_{10}\\!\\left(\\frac{C_{\\text{organic}}}{C_{\\text{aqueous}}}\\right)\\n$$\\n\\n**Reading the scale**: log P > 0 → lipophilic (P = 1000 → log P = 3); log P < 0 → hydrophilic (P = 0.01 → log P = −2); log P = 0 → equal love (P = 1). Each log unit is a tenfold change in P.\\n\\n**The reverse check** closes every partition problem: the two phase amounts must sum to the total — matter does not vanish into octanol.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Partition coefficient**\\n\\n$$\\nP = \\frac{C_{\\text{organic}}}{C_{\\text{aqueous}}}, \\qquad \\log P = \\log_{10}\\!\\left(\\frac{C_{\\text{organic}}}{C_{\\text{aqueous}}}\\right)\\n$$\\n\\n**Mass balance**\\n\\n$$\\nm_{\\text{organic}} + m_{\\text{aqueous}} = m_{\\text{total}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — P from data.** 100 mg distributed at equilibrium between 10 mL octanol and 10 mL water: octanol holds 90 mg (9 mg/mL), water holds 10 mg (1 mg/mL). P = 9/1 = **9**; log P = log₁₀(9) = **0.95**. Mass balance: 90 + 10 = 100 ✓.\\n\\n**Example 2 — reading log P backwards.** A drug with log P = 3 (P = 1000), 100 mg total, 10 mL + 10 mL: the phase ratio must be 1000:1 → octanol 99.9 mg, water 0.1 mg (99.9/0.1 = 999 ≈ 1000 at these volumes — mass balance 100 ✓). Practically all the drug sits in the octanol.\\n\\n**Example 3 — uneven volumes.** P = 10, total 110 mg, 10 mL octanol + 10 mL water: equal volumes → 10:1 split → **100 mg octanol, 10 mg water** (C: 10 vs 1 mg/mL → P = 10 ✓; balance 110 ✓).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define P, state its units, and explain why log P is the working descriptor.\\n2. 50 mg in octanol vs 5 mg in water (equal volumes) — P and log P? (10; 1.0.)\\n3. A drug with log P = −2 — which phase wins, and roughly by how much?\\n4. Why must the unionised species be the measurement convention, and whose lesson corrects for pH?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `P prices the love affair between drug and lipid: C(octanol)/C(water), dimensionless, quoted as log P. Each unit is tenfold — and the masses must always sum back.`,
      },
    ],
  },
  {
    nodeId: 'pct-30-4',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: 'Distribution Coefficient',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Real body fluids have a pH, and at any pH a weak electrolyte is a **mixture** of unionised and ionised forms (pct-29-6/29-7's canon). Only the unionised form partitions happily into lipid; the ionised form is stuck in water. The **distribution coefficient D** is the ratio actually observed at a stated pH — partitioning **corrected for ionisation**: the pH-dependent reality that P (the unionised ideal) only underlies.\\n\\n**The identities** (the HH algebra of pct-29-7, consumed):\\n\\n$$\\n\\text{weak acid: } D = \\frac{P}{1 + 10^{pH - pK_a}}, \\qquad \\text{weak base: } D = \\frac{P}{1 + 10^{pK_a - pH}}\\n$$\\n\\n**Reading them.** Far below its pKa, a weak acid is unionised and D ≈ P (full lipophilicity available); as pH climbs past pKa the denominator grows tenfold per unit and D collapses. Weak bases mirror it. At pH = pKa, D = P/2 for both.\\n\\n**The pH-partition hypothesis** (the concept this lesson feeds forward): only the unionised fraction crosses membranes readily, so absorption should favour the side of the gut where the drug is most unionised — weak acids from the stomach, weak bases from the intestine. Taught as the useful first approximation it is; the modern caveats (transporters, the gut's own pH gradients, paracellular leakiness for tiny hydrophiles) are named as beyond-200L canon.\\n\\n**D vs P discipline**: quote D **with its pH** — a distribution coefficient without its pH is as meaningless as a solubility without its temperature (pct-29-1's habit).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Distribution coefficient**\\n\\n$$\\nD_{\\text{acid}} = \\frac{P}{1 + 10^{pH - pK_a}}, \\qquad D_{\\text{base}} = \\frac{P}{1 + 10^{pK_a - pH}}\\n$$\\n\\n**Anchor**\\n\\n$$\\npH = pK_a \\;\\Rightarrow\\; D = \\frac{P}{2}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — weak acid (pKa 4.0, P = 100) at pH 4.0.** D = 100/(1 + 10⁰) = 100/2 = **50** — the anchor: half the partitioning power remains.\\n\\n**Example 2 — the same acid at blood pH 7.4.** D = 100/(1 + 10^(3.4)) = 100/(1 + 2512) = 100/2513 = **0.04** (0.0398) — at physiological pH the acid is mostly ionised and its effective lipophilicity has collapsed ~2500-fold from P.\\n\\n**Example 3 — weak base (pKa 9.0, P = 100) at pH 7.4.** D = 100/(1 + 10^(1.6)) = 100/(1 + 39.8) = **2.45** — the base keeps more of its partitioning power at blood pH; the acid–base contrast is the pH-partition story in two numbers.\\n\\n**Example 4 — the P-recovery limit.** Same acid at pH 1.4 (stomach): D = 100/(1 + 10^(−2.6)) = 100/(1.0025) = **99.75 ≈ P** — far below pKa, D converges to P.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does D depend on pH while P does not?\\n2. Weak base pKa 8.0, P = 100, pH 6.0 — D? (100/(1+100) ≈ 0.99.)\\n3. Why is 'D = 40' an incomplete statement, and what must accompany it?\\n4. State the pH-partition hypothesis and the caveat class that bounds it.\\n5. At pH = pKa, what fraction of P survives — for both families?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `D is P wearing pH's consequences: acids fade as pH rises past pKa, bases as it falls; at pH = pKa exactly half survives. Quote D with its pH or not at all.`,
      },
    ],
  },
  {
    nodeId: 'pct-30-5',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: 'Lipophilicity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Lipophilicity** is the tendency of a drug to dissolve in lipid-like environments — measured operationally by log P (30-3's canon) and modulated by pH through D (30-4's canon). It is one of the most consequential single descriptors in pharmacy, because it pulls simultaneously in several directions.\\n\\n**What high lipophilicity buys.** Membrane crossing (diffusion into and through lipid barriers — 30-2's law with a lipid medium); formulation reachability via cosolvents (pct-29-3's lever); potency potential (receptors live in lipid-rich environments).\\n\\n**What high lipophilicity costs.** Poor aqueous solubility (the pct-29 problem — lipophilicity and solubility pull against each other); binding to plasma proteins (drug carried but buffered — pct-24's distribution picture); **sequestration in fat** — very lipophilic drugs accumulate in adipose tissue and leak out slowly, stretching elimination half-lives (pct-24-6's t½ becomes a lipophilicity story).\\n\\n**What low lipophilicity buys and costs.** Good solubility, easy formulation, renal friendliness — but membranes reject it: a drug too hydrophilic (very low D) cannot diffuse across and needs the beyond-200L routes (transporters, paracellular — named, bounded).\\n\\n**The balancing act** is the lesson: the useful drugs sit in a window where solubility and membrane-permeation are BOTH workable — which is why 29-8's salt strategies and the ionisation position (pKa relative to physiological pH) dominate real drug design. **Lipophilicity is not good or bad; it is a budget to be balanced.**`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Lipophilicity measured by log P, modulated by pH through D.\\n- Buys: membrane crossing, cosolvent reachability, potency potential.\\n- Costs: poor solubility, protein binding, fat sequestration stretching t½ (pct-24 echo).\\n- Too hydrophilic: membranes refuse it — transporter routes named as beyond-200L.\\n- Not good/bad — a budget: the window where solubility AND permeation both work is the target.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State what log P measures and what D adds.\\n2. List three purchases and three costs of high lipophilicity.\\n3. How does fat sequestration stretch t½, and which pct-24 lesson owns the clock?\\n4. Why is 'lipophilic = good for absorption' an incomplete rule?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Lipophilicity is a budget: membranes want it, water doesn't, fat keeps it. The balanced middle — steered by pKa and pH — is where usable drugs live.`,
      },
    ],
  },
  {
    nodeId: 'pct-30-6',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Significance',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where diffusion and partitioning decide real pharmaceutical outcomes — the application lesson.\\n\\n**Preservative efficacy in emulsions.** An emulsion is two phases (the pct-39 block's subject, named here for context); a preservative dissolved in the AQUEOUS phase protects the aqueous phase — but a lipophilic preservative **partitions into the oil**, and the water left behind is under-preserved. The 30-4 arithmetic is the safety calculation: D tells the formulator how much of the added preservative is actually on duty where microbes grow. (Emulsion canon itself is pct-39's — the partitioning input is this topic's.)\\n\\n**Extraction and analysis.** Analytical separations (and the classic 'extract the drug into an organic layer' manipulations) are partition-coefficient applications: pH is chosen so the analyte is unionised (D maximal) and rides into the organic phase — or ionised (D minimal) and stays in water. The same arithmetic, pointed by the analyst.\\n\\n**Formulation strategy.** log P informs: cosolvent vs salt vs particle-size strategies (pct-29's lever families); base selection for topical products (drug must partition out of the base into skin — pct-40's future canon); prodrug design (masking a polar group to raise log P is named as beyond-200L design canon).\\n\\n**Membrane events.** The whole absorption chain (30-7) and distribution picture (pct-24's Vd) are diffusion-plus-partitioning outcomes — this topic is the machinery room behind two earlier topics' parameters.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Emulsion preservatives partition into oil; D decides how much preservative is on duty in the water (pct-39's subject, this topic's input).\\n- Extraction: pH sets the ionised/unionised split, D sets the phase — analysis is HH + partitioning.\\n- log P steers formulation strategy: cosolvent/salt/size levers, topical bases, prodrugs (named, beyond-200L).\\n- pct-24's F and Vd are this machinery's downstream products.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can a correctly-dosed preservative still under-preserve an emulsion?\\n2. How does an analyst use pH to steer a drug between phases?\\n3. Name the three pct-29 lever families log P helps choose between.\\n4. Which two pct-24 parameters are the downstream products of this topic's machinery?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Partitioning picks where the preservative works, where the analyte rides, and which formulation lever to pull — the machinery room behind absorption and distribution.`,
      },
    ],
  },
  {
    nodeId: 'pct-30-7',
    courseId: 'pct-201',
    topicId: 'pct-30',
    nodeType: 'subtopic',
    title: 'Relationship to Drug Absorption',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing chain: this topic's machinery assembled with pct-29's into the absorption story that pct-24 parameterised.\\n\\n**The full chain, stage by stage.** (1) **Dissolution** (pct-29-9): the solid becomes solution — Noyes–Whitney, whose D term was this topic's advance notice. (2) **Ionisation position** (pct-29-7 + 30-4): at the lumen's pH the drug takes its unionised/ionised split. (3) **Membrane diffusion** (30-2): the unionised fraction crosses the gut wall down Fick's gradient. (4) **Sink maintenance**: blood flow carries absorbed drug away, keeping ΔC steep — the same sink logic pct-29-9 used. (5) **Downstream**: the delivered fraction is pct-24's F; the spread is Vd.\\n\\n**The pH-partition prediction** (30-4's hypothesis applied): weak acids absorb better from the stomach (unionised there), weak bases from the intestine. The honest correction: the **large intestinal surface area** and the stomach's short residence mean the intestine usually wins in total absorbed amount EVEN for acids — surface area and transit time are part of the gradient's arithmetic. The 200L position: the hypothesis predicts the *favourable side*; the *total absorbed amount* adds area and time.\\n\\n**The named caveats** (beyond-200L, flagged): carrier-mediated transport (some hydrophiles ride transporters, defying the hypothesis), paracellular passage for very small molecules, first-pass metabolism between wall and systemic blood (pct-24-2's first-pass canon).\\n\\n**The exam synthesis**: given pKa, pH, log P, and D, the student can now EXPLAIN — not just compute — why a salt dissolves fast yet the unionised form crosses, and where in the gut each happens.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Chain: dissolution → ionisation split → membrane diffusion → sink removal → F and Vd downstream.\\n- pH-partition predicts the favourable side; total amount adds surface area and transit time.\\n- Caveats named: transporters, paracellular route, first-pass (pct-24-2 canon).\\n- The synthesis skill: explain salt-fast-dissolve/unionised-crosses with pKa, pH, D, and P.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Assemble the five-stage chain and name the lesson that owns each stage.\\n2. Why can an acid favour the stomach yet still absorb mostly in the intestine?\\n3. Name the three flagged caveats and the pct-canon each belongs to.\\n4. Explain the salt paradox: fast-dissolving salt, unionised molecule crossing.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dissolve, un-ionise, diffuse, be swept away — and the fraction that makes it is F. The pH-partition map points the favourable side; area and time decide the total.`,
      },
    ],
  },
];
