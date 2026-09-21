import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-29: Solubility and Dissolution.
 *
 * Batch 32: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–28
 * top-level topic convention) plus its ten children pct-29-1…29-10
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-29 has no surviving Phase-1 tier record; the
 * quantitative children — 29-7 pKa (Henderson–Hasselbalch) and 29-9
 * Dissolution Rate (Noyes–Whitney) — are Tier C under the established
 * calculation-lesson convention; the topic and remaining conceptual
 * children are Tier B. Convention-derived, flagged pending
 * confirmation.
 *
 * Scope discipline: THIS topic owns solubility (equilibrium) and
 * dissolution (rate) science. Concentration expressions are pct-9's
 * canon; buffer/pH preparation is pct-13's; bioavailability
 * consequences are pct-24's; polymorph STABILITY is pct-43's (here
 * polymorphs appear as a dissolution/solubility factor); dosage-form
 * consequences are pct-2's; and DIFFUSION canon (the diffusion
 * coefficient D of Noyes–Whitney) is pct-30's — the next topic — so D
 * is defined only minimally here and cross-referenced. Pharmacopoeial
 * solubility-descriptor tables are referenced as pharmacopoeial canon,
 * not reproduced as invented values.
 */
export const pct201SolubilityLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-29',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'topic',
    title: 'Solubility and Dissolution',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Before a drug can be absorbed it must be **dissolved** — molecules, not lumps, cross biological membranes. This topic builds the two quantities that govern that step: **solubility** (how much CAN dissolve — an equilibrium) and **dissolution rate** (how FAST it dissolves — a process).\\n\\n**The distinction that organises everything.** Solubility is a destination: the concentration at which dissolved drug and undissolved drug coexist in equilibrium. Dissolution is the journey: the speed of getting there. A medicine can fail either way — too little dissolves (solubility-limited), or it dissolves too slowly to be absorbed in time (rate-limited). Lessons 29-1/29-2 fix the two concepts; 29-3…29-8 walk the factors (temperature, particle size, pH, pKa, salt formation); 29-9 quantifies the rate; 29-10 collects the pharmaceutical consequences.\\n\\n**Where this sits in the course**: it is the physicochemical engine behind pct-2's form choices (why suspensions exist), pct-24's bioavailability (dissolution feeds absorption), and pct-15's formulation work — and it hands its diffusion machinery to pct-30, the next topic.\\n\\n**Standing discipline**: pharmacopoeial solubility-descriptor tables and exact product solubilities are reference canon — conventions and stated values, never invented; all worked numbers are stated illustrative values, verified.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dissolution precedes absorption: molecules cross membranes, lumps do not.\\n- Solubility = equilibrium (how much can dissolve); dissolution rate = process (how fast).\\n- Failure modes: solubility-limited vs rate-limited absorption.\\n- The engine behind pct-2/pct-15 formulation and pct-24 bioavailability; hands D to pct-30.\\n- Descriptors and product values are reference canon — stated, never invented.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define solubility and dissolution rate, and state the equilibrium/process distinction.\\n2. Give the two distinct ways dissolution can limit a medicine.\\n3. Which earlier and next topics does this one serve and feed?\\n4. What is the standing discipline on pharmacopoeial descriptors?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dissolve first, absorb second. How much can dissolve is solubility; how fast is dissolution — two questions, two failure modes, one topic.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-29', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-29-1',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Solubility',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Solubility** is the equilibrium concentration of a solute in a solvent at a stated temperature — the concentration of a **saturated** solution, where dissolved and undissolved solute coexist in dynamic balance (dissolving and crystallising proceed at equal rates; the net concentration is constant).\\n\\n**The saturated-solution picture.** Add sugar to water, stir: it dissolves; keep adding: eventually no more goes in — the solution is saturated, and solid sits at the bottom without the concentration rising. That ceiling is the solubility. It is a property of the **pair** (solute + solvent) at a **temperature** — all three must be stated for the number to mean anything.\\n\\n**Expressions** (pct-9's canon supplies the concentration forms): mass per volume (mg/mL — the pharmaceutical workhorse), parts per parts, percentage w/v. Pharmacopoeias also classify with **descriptors** — 'very soluble', 'freely soluble', 'sparingly soluble', 'practically insoluble' — each descriptor defined as a ratio range (the table is pharmacopoeial canon, referenced, not reproduced as invented values).\\n\\n**Intrinsic solubility** is the solubility of the **unionised** form — the baseline that pH effects (29-6/29-7) modify. It is the number formulators start from before ionisation enters.\\n\\n**The pharmacist's habit**: every solubility statement carries solute, solvent, temperature, and expression — an unlabelled 'soluble' is not an answer.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Solubility = saturated-solution concentration; dynamic equilibrium at the ceiling.\\n- A property of solute + solvent + temperature — all three stated.\\n- Expressed in pct-9's forms; pharmacopoeial descriptors are ratio-range conventions (referenced).\\n- Intrinsic solubility = unionised baseline; pH effects modify it.\\n- 'Soluble' without its attachments is not an answer.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define solubility via the saturated solution and the dynamic equilibrium.\\n2. What three attachments does a solubility number require?\\n3. What is intrinsic solubility, and which lessons modify it?\\n4. What does 'sparingly soluble' mean in principle, and whose canon defines the exact range?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The ceiling concentration at equilibrium — solute, solvent, temperature, expression. Below the ceiling dissolves, at the ceiling it waits.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-2',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Solubility Versus Dissolution',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The two headline concepts are systematically confused; this lesson separates them permanently.\\n\\n**Solubility is a position; dissolution is a speed.** Solubility answers 'how much can EVER be in solution at equilibrium'. Dissolution rate answers 'how fast is it GETTING there'. The first is thermodynamics; the second is kinetics (the pct-43 family of rate questions).\\n\\n**The four-way matrix.** High solubility + fast dissolution: the easy case (many salts, small particles). High solubility + slow dissolution: possible with very large particles or dense crystals — the amount is fine but the timing fails. Low solubility + fast dissolution: dissolves quickly to its LOW ceiling — the amount fails even though the speed looked good. Low + slow: the hard formulation case (29-8/29-9's remedies).\\n\\n**Why the rate usually dominates absorption** for poorly soluble drugs: absorption happens from solution; the gut both absorbs and transits — a drug that dissolves too slowly passes its absorption windows before dissolving, however much COULD have dissolved. This is why a drug's absorption can be **dissolution-rate-limited** even when the total solubility would suffice.\\n\\n**The measurement distinction**: solubility is measured at equilibrium (excess solid, time, analyse); dissolution rate is measured as concentration-vs-time (the dissolution test — the Noyes–Whitney frame of 29-9).\\n\\n**Formulation consequence** (pct-2/pct-15's canon): solubility problems invite salt/pH/cosolvent strategies (29-6…29-8); rate problems invite particle-size and surface-area strategies (29-5/29-9). Different problems, different tools.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Solubility = equilibrium position (thermodynamics); dissolution rate = speed (kinetics).\\n- Four-way matrix: amount can fail, timing can fail, both, or neither.\\n- Absorption is from solution — a slow dissolver misses its transit windows: rate-limited absorption.\\n- Solubility problems → salt/pH/cosolvent tools; rate problems → surface-area tools.\\n- Equilibrium vs concentration-time measurement.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the position/speed distinction and the two measurement approaches.\\n2. Build the four-way matrix and name the remedy family for each failing cell.\\n3. Why can rate-limited absorption occur even when solubility 'would suffice'?\\n4. Which topic family does dissolution kinetics belong to, and which lesson quantifies it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `How much vs how fast. Absorption rides the fast one; formulation picks the tool by which one fails.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-3',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Factors Affecting Solubility',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Solubility is not one dial but several — this lesson is the map; the following lessons walk the quantifiable factors.\\n\\n**(1) Nature of solute and solvent — 'like dissolves like'.** Polar solutes dissolve in polar solvents (ion–dipole and hydrogen-bond interactions); non-polar in non-polar (dispersion forces). Water dissolves ions and hydrogen-bonders; oils dissolve lipophiles. This is the deepest factor: it sets the intrinsic solubility everything else modifies.\\n\\n**(2) Temperature** (29-4): usually increases solubility of solids in liquids; the direction is set by the dissolution enthalpy.\\n\\n**(3) pH and ionisation** (29-6/29-7): for weak electrolytes, the ionised form is far more water-soluble — pH moves solubility by orders of magnitude.\\n\\n**(4) Particle size** (29-5): affects dissolution RATE, essentially not equilibrium solubility — the distinction 29-2 built, applied.\\n\\n**(5) Solid-state form**: polymorphs (different crystal packings) and hydrates/solvates dissolve at different rates and slightly different solubilities; metastable forms often dissolve faster — a double-edged sword, since they may convert to the stable form in storage (pct-43's stability canon owns the conversion risk).\\n\\n**(6) Additives**: cosolvents (ethanol/propylene glycol mixtures for lipophilic drugs), surfactants (micellar solubilisation — pct-31's surface-activity canon), complexation (cyclodextrin hosts), common ions (the salting-out of a salt's own ion).\\n\\n**The map discipline**: each factor is a lever with a canon — none is universal, and the formulator's skill is matching lever to problem (29-2's matrix).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 'Like dissolves like' sets the intrinsic baseline.\\n- Temperature (29-4), pH/ionisation (29-6/29-7), particle size (29-5 — rate not equilibrium), solid form (polymorphs/hydrates), additives (cosolvent, surfactant, complexant, common ion).\\n- Metastable forms dissolve faster but may convert in storage (pct-43 owns the risk).\\n- Surfactant solubilisation is pct-31's canon; the formulator matches lever to problem.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the like-dissolves-like principle with an ion–dipole example.\\n2. Which factor is commonly MIS-attributed to equilibrium solubility, and what does it really move?\\n3. Why are metastable polymorphs double-edged, and whose canon owns the edge?\\n4. Name the additive families and the pct-topic each belongs to.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Six levers: nature, temperature, pH, size, solid form, additives. The map first — then the lessons that quantify the big ones.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-4',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Temperature',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Temperature usually moves solid-in-liquid solubility upward — and the 'usually' is the lesson.\\n\\n**The direction rule.** Dissolution has an enthalpy: most solid dissolutions are **endothermic** (energy absorbed breaking the crystal lattice), so adding heat favours dissolving — solubility **rises** with temperature (the Le Chatelier logic pct-43's equilibrium family uses). A minority are **exothermic** (hydration energy dominates), and for those solubility **falls** with temperature. The direction is therefore a **measured property of the pair**, not a law to assume.\\n\\n**Practical consequences.** *Hot filtering/hot concentration*: a solution saturated hot holds less when cool — crystals drop out on cooling (the basis of recrystallisation; and the reason some syrups go cloudy in the fridge). *Refrigeration surprises*: a product formulated clear at room temperature may crystallise when stored cold — the label's storage statement (pct-28-9's canon) accounts for this; the patient who reports 'crystals in the fridge bottle' is reporting physics, and the response is the framework's (often do-not-refrigerate). *Warm-to-dissolve*: warming helps dissolve a nearly-saturated preparation — followed by cooling back into a supersaturated state that may recrystallise.\\n\\n**Supersaturation**: a solution holding MORE than its equilibrium solubility — thermodynamically unstable, waiting for a seed to crystallise. It explains why some preparations are clear until disturbed.\\n\\n**The exam habit**: state the direction as a property of the pair ('for this solute, solubility increases with temperature'), never as a universal.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Most solid-in-liquid dissolutions are endothermic → solubility rises with T (Le Chatelier); the minority fall.\\n- Direction is a measured property of the pair, not a universal law.\\n- Cooling a hot-saturated solution crystallises the excess; fridge cloudiness is the same physics.\\n- Supersaturation = more than equilibrium held in suspension of fate — seeded, it crystallises.\\n- State direction per pair, never universally.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain the endothermic rule and its Le Chatelier logic, then the exception.\\n2. Why might a syrup crystallise in a refrigerator, and which canon governs the storage response?\\n3. What is supersaturation and what wakes it?\\n4. What is the exam habit this lesson installs?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Heat usually helps — until it doesn't. The direction belongs to the pair; supersaturated solutions are accidents waiting for a seed.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-5',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Particle Size',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Particle size is the most quoted solubility factor — and the most mis-quoted, because it acts on **rate**, not on the equilibrium ceiling.\\n\\n**What smaller particles do.** Grinding the same mass into finer particles multiplies its **surface area in contact with solvent** — and dissolution proceeds at the surface (29-9's Noyes–Whitney rate is proportional to area A). Finer powder → more surface → faster dissolution → faster onset of the dissolved state. This is why micronised drugs dissolve and absorb faster, and why particle-size reduction is the rate-problem remedy of 29-2's matrix.\\n\\n**What smaller particles do NOT do** (the misconception): they do not raise the equilibrium solubility of ordinary pharmaceutical powders. The saturated concentration is the same for coarse and fine — the fine powder simply REACHES it sooner. Equilibrium solubility is set by the interactions of 29-3(1), not by how the solid is divided.\\n\\n**The nanoscale exception, named and bounded**: at very small sizes (tens of nanometres), the increased surface energy (the Ostwald–Freundlich effect) does raise apparent solubility — a genuine effect used by nanocrystal formulations, but beyond-200L depth: named here so the boundary of the 200L rule is visible.\\n\\n**Bench echoes**: suspensions are formulated from controlled particle sizes (pct-2's form canon) — small enough to dissolve predictably and dose uniformly, large enough to avoid the caking that ultra-fine powders produce; and the 'shake the bottle' aux label (pct-28-8's canon) exists because particles settle by size.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Smaller particles → more surface area → faster dissolution RATE (Noyes–Whitney's A, 29-9).\\n- Equilibrium solubility is NOT raised by ordinary size reduction — the misconception this lesson kills.\\n- Nanoscale exception: surface energy (Ostwald–Freundlich) raises apparent solubility — named, bounded as beyond-200L.\\n- Suspension design balances uniform dosing vs caking; 'shake the bottle' is particle-size physics (pct-28-8).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Through which variable of 29-9's equation does particle size act?\\n2. State the misconception and the correct statement about saturated concentration.\\n3. Name the nanoscale exception and its boundary status.\\n4. Why do suspensions avoid ultra-fine powders, and which label warning follows from settling?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Size buys speed, not ceiling. Surface area is the rate lever — the equilibrium is set elsewhere, except at scales pharmacy barely touches.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-6',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'pH',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `For **weak electrolytes** — the majority of drugs — pH is the most powerful solubility lever in ordinary use, because it moves the drug between two forms with very different solubilities.\\n\\n**The two-form picture.** A weak acid exists as HA (unionised) + A⁻ (ionised); a weak base as B (unionised) + BH⁺ (ionised). The unionised form is neutral, lipophilic, and sparingly water-soluble; the ionised form is charged, strongly hydrated, and far more water-soluble — often by orders of magnitude. **pH decides which form dominates** (the ionisation arithmetic is 29-7's canon).\\n\\n**The direction rules.** *Weak acids*: high pH (basic) pushes HA → A⁻ — ionised, water-soluble; low pH (acidic, e.g. the stomach) keeps HA — poorly soluble, better absorbed. *Weak bases*: low pH pushes B → BH⁺ — soluble in the stomach; high pH (intestine) returns the unionised base. The practical chain: solubility in the gut lumen, absorption of the unionised fraction, and formulation pH choices all hang on this.\\n\\n**The solubility–absorption tension** this creates (the qualitative story 29-7 quantifies): the ionised form dissolves freely but absorbs poorly; the unionised form absorbs well but dissolves poorly. A molecule that is fully ionised everywhere dissolves everywhere but crosses little; the therapeutically useful drugs sit at pKa values where both are possible.\\n\\n**Buffer preparation** (making a solution HOLD its pH) is pct-13's canon — cross-referenced, not re-taught; this lesson owns the solubility consequence of pH.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Weak electrolytes toggle unionised (lipophilic, poorly soluble) ↔ ionised (hydrated, freely soluble).\\n- pH picks the form: weak acids ionise at high pH; weak bases at low pH.\\n- Stomach: acids unionised, bases ionised — the reverse in the intestine.\\n- The tension: ionised dissolves, unionised absorbs — pKa position (29-7) decides how both are possible.\\n- Buffer preparation is pct-13's canon.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw the two-form equilibria for a weak acid and a weak base.\\n2. State the direction rules and the stomach/intestine contrast.\\n3. Explain the solubility–absorption tension in one sentence each for the two forms.\\n4. Which pct-topic owns buffer preparation, and what does this lesson own?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `pH flips the switch between dissolvable-but-stuck and absorbable-but-scarce. Acids love base, bases love acid — and pKa sets where the switch sits.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-7',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'pKa',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**pKa** is the pH at which a weak electrolyte is **half ionised** — the fixed property of the molecule that lets 29-6's switch be calculated.\\n\\n**The Henderson–Hasselbalch identities** (the same equation pct-13-7's buffer canon uses, now pointed at ionisation):\\n\\n$$\\n\\text{weak acid: } \\text{\\% ionised} = \\frac{100}{1 + 10^{pK_a - pH}}, \\qquad \\text{weak base: } \\text{\\% ionised} = \\frac{100}{1 + 10^{pH - pK_a}}\\n$$\\n\\n**Reading the identities.** For the acid, when pH = pKa the exponent is 0 and the fraction is exactly 100/(1+1) = **50%** — the definition. Moving pH one unit ABOVE pKa multiplies the ionised fraction by ~10 (100 → 91 → 99 → 99.9): each pH unit is roughly a tenfold swing in the ionised/unionised ratio. The base identity mirrors it.\\n\\n**Worked consequences** (all values stated, verified): the examples below run aspirin-like (pKa 3.5) and base-like (pKa 9.0) profiles through stomach and intestinal pH values.\\n\\n**The formulation chain**: pKa (fixed) + ambient pH (variable) → ionised fraction → water solubility of that fraction (29-6) → the dissolution and absorption story (29-2). pKa is the molecule's dial-position; pH is the hand on the dial.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Henderson–Hasselbalch, ionisation form**\\n\\n$$\\n\\text{\\% ionised (acid)} = \\frac{100}{1 + 10^{pK_a - pH}}, \\qquad \\text{\\% ionised (base)} = \\frac{100}{1 + 10^{pH - pK_a}}\\n$$\\n\\n**Anchor**\\n\\n$$\\npH = pK_a \\Rightarrow 50\\% \\text{ ionised}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — weak acid (pKa 3.5) in the stomach (pH 1.5).** 100/(1 + 10^(3.5−1.5)) = 100/(1 + 100) = **0.99%** ionised → almost entirely unionised: poorly soluble, well-positioned to absorb.\\n\\n**Example 2 — same acid at intestinal pH 6.5.** 100/(1 + 10^(3.5−6.5)) = 100/(1 + 0.001) = **99.9%** ionised → freely soluble, poorly positioned to absorb. The same molecule, three pH units apart, flips almost completely — the 29-6 tension made numeric.\\n\\n**Example 3 — weak base (pKa 9.0) at pH 9.0.** 100/(1 + 10^(9.0−9.0)) = 100/2 = **50%** — the definition anchor.\\n\\n**Example 4 — the tenfold habit.** Acid pKa 3.5 at pH 4.5: 100/(1 + 10^(−1)) = 100/1.1 = **90.9%** — one unit past pKa, roughly ten-to-one ionised.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Weak acid pKa 4.0 at pH 6.0 — % ionised? (100/101 ≈ 99.0%.)\\n2. Weak base pKa 8.0 at pH 6.0 — % ionised? (100/(1+0.01) ≈ 99.0%.)\\n3. Why does pH = pKa give exactly 50%, from the identity?\\n4. Which pct-topic shares the HH equation, and what does each point it at?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `pKa is the half-ionised point; each pH unit swings the ratio tenfold. Acids ionise upward, bases downward — and pH 6.5 turns an aspirin-like acid 99.9% water-friendly.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-8',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Salt Formation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Salt formation** is the formulator's structural answer to a solubility problem: convert the sparingly soluble weak acid or base into its **ionic salt**, whose ionised crystal dissolves freely.\\n\\n**The chemistry, practically.** Weak acids are paired with strongly basic counter-ions — the ubiquitous **sodium and potassium salts** (aspirin → sodium acetylsalicylate-type salts; many NSAIDs); weak bases with strongly acidic ones — the ubiquitous **hydrochlorides** (and sulphates, mesylates as the framework's pharmaceutics present them). The salt dissociates completely in water: the drug ion plus a spectator ion — and the ionised drug, per 29-6, is the highly water-soluble form.\\n\\n**What happens at physiological pH** (the honest complication): in the gut, the salt solution meets an environment that pushes the equilibrium back toward the unionised form (29-6/29-7's rules) — for acids at low pH the unionised form can even **precipitate out** of a salt solution (the common textbook chain behind 'salt of a weak acid may reprecipitate in the stomach'). The salt still wins: it delivers the drug DISSOLVED fast, and the fine precipitate that forms has huge surface area (29-5's rate lever) — the net effect is faster dissolution than the free acid's own slow attempt.\\n\\n**Choice considerations**: salt selection changes dissolution speed, stability, and hygroscopicity — the form choice is a formulation decision (pct-2's canon), tested for stability (pct-43's) and potency on a per-salt basis (pct-22's moiety discipline: 500 mg of the SODIUM salt is not 500 mg of the moiety).\\n\\n**When salts are not the answer**: neutral molecules (no ionisable group) need the other levers — cosolvents, particle size (29-5), complexants (29-3(6)).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Salts convert the drug to its ionised form: Na/K salts for weak acids, hydrochlorides for weak bases.\\n- The salt dissolves fast; physiological pH may push some drug back to unionised and precipitate it — as fine, fast-dissolving particles (29-5's lever).\\n- Salt choice touches stability, hygroscopicity, form (pct-2/pct-43); potency is per-salt (pct-22).\\n- Neutral molecules need other levers — salts are for weak electrolytes.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the standard counter-ion families for weak acids and weak bases.\\n2. Explain the reprecipitation chain and why the salt still wins on dissolution.\\n3. Why is potency stated per-salt, and which pct-topic owns that discipline?\\n4. What is the remedy family for a neutral, insoluble molecule?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Borrow a charge, borrow solubility: sodium for acids, HCl for bases. The stomach may give some back — as powder so fine it dissolves anyway.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-9',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Dissolution Rate',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Dissolution rate** — how fast solid becomes solution — is quantified by the **Noyes–Whitney equation**:\\n\\n$$\\n\\frac{dC}{dt} = \\frac{D \\cdot A}{h} \\cdot (C_s - C)\\n$$\\n\\n**The terms, with units discipline.** dC/dt: dissolution rate (mass/time, e.g. mg/min). **A**: surface area of undissolved solid exposed to solvent (cm²) — 29-5's lever. **D**: the diffusion coefficient of the dissolved molecules through the boundary layer (cm²/s) — a property of molecule and medium; its deeper canon belongs to **pct-30** (the next topic's diffusion law), so it is carried here only as a term. **h**: the thickness of the unstirred boundary layer around the particle (cm) — thinner with vigorous stirring. **Cs**: saturation (equilibrium) solubility — 29-1's ceiling. **C**: the bulk concentration at time t. **(Cs − C)**: the **driving force** — dissolution is fast when the solution is far from saturated, and stops (dC/dt = 0) at saturation.\\n\\n**Sink conditions**: keeping C negligible versus Cs (large volumes, drug absorbed as it dissolves) keeps the driving force near-maximal — the standard state of dissolution testing and of the gut for soluble-enough drugs.\\n\\n**The levers, mapped to terms**: A — particle size/surface area (29-5); D and h — temperature and agitation (warmer, faster-stirred media dissolve faster); Cs — solubility strategy (29-6…29-8). Every remedy of 29-2's matrix lands on one term.\\n\\n**Reading rates as data**: a dissolution PROFILE (concentration vs time) is measured, not derived — the equation explains the shape; the assay provides it.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Noyes–Whitney**\\n\\n$$\\n\\frac{dC}{dt} = \\frac{D \\cdot A}{h} \\cdot (C_s - C)\\n$$\\n\\n**Saturation stops dissolution**\\n\\n$$\\nC \\to C_s \\;\\Rightarrow\\; \\frac{dC}{dt} \\to 0\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — the driving force.** Stated: Cs = 10 mg/mL. At C = 2: driving force = 10 − 2 = **8 mg/mL**; at C = 9: **1 mg/mL**. Same solid, same conditions → the early dissolution runs **8× faster** than near the end (rate ∝ Cs − C, all else fixed).\\n\\n**Example 2 — surface area.** Micronising multiplies A tenfold with all else fixed → dC/dt is **10× larger** — the 29-5 lever expressed in the equation.\\n\\n**Example 3 — agitation.** Stirring halves the boundary layer h (2h → h): rate doubles — same equation, different term; the practical lever behind 'shake well' and stirred dissolution tests.\\n\\n**Example 4 — approaching saturation.** As C climbs 0 → 5 → 9 against Cs = 10, the rate falls 10 → 5 → 1 (proportional halves and tenths) — dissolution self-slows as it approaches the ceiling.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name every term of Noyes–Whitney with units, and each term's remedy lever.\\n2. Cs = 20, C = 4 — driving force, and the rate ratio vs C = 16? (16 mg/mL; 4×.)\\n3. Why does dissolution self-slow, and what state stops it?\\n4. Whose canon owns D's deeper treatment, and why is it only carried here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Rate = D·A/h × (Cs − C). Surface area, diffusion, stirring, solubility — four terms, four levers, and the driving force fades as saturation arrives.`,
      },
    ],
  },
  {
    nodeId: 'pct-29-10',
    courseId: 'pct-201',
    topicId: 'pct-29',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Importance',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing lesson collects where solubility and dissolution decide pharmacy practice.\\n\\n**Bioavailability** (pct-24's canon): dissolution is the first gate of oral absorption — a drug that dissolves slowly or poorly delivers a smaller effective fraction, F. The whole preceding topic is the physical chemistry behind that one parameter.\\n\\n**Form selection and formulation** (pct-2's canon): salts vs free forms (29-8), particle-size specs for suspensions and tablets (29-5/29-9), cosolvent and complexant systems for insoluble actives (29-3), and the solution-vs-suspension decision itself — a suspension exists BECAUSE the drug is deliberately not fully dissolved (often for stability or taste-masking), and its label demands 'shake well' (pct-28-8's canon).\\n\\n**Dissolution testing**: the regulatory dissolution test is the quality instrument that ties a batch's physical performance to its clinical promise — rate profiles (29-9) become specifications; the exact acceptance criteria are framework canon, referenced.\\n\\n**The absorption classification named and bounded**: the biopharmaceutics scheme that grades drugs by solubility and permeability (the BCS) is reference canon for later study — named here to mark the boundary: this topic owns the physics; the classification system and its regulatory use are beyond-200L.\\n\\n**Clinical echoes**: food effects on dissolution (fat dissolves lipophiles; pH shifts with meals), the taste-masking trade (insoluble salts taste less — because they dissolve less), and the pharmacist's translation duty — explaining to patients WHY 'shake well', 'take with food', or 'crush not' (modified-release, pct-2's canon) are solubility-and-rate instructions in disguise.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dissolution is the first gate of oral bioavailability — the physics behind pct-24's F.\\n- Form decisions: salt choice, particle-size specs, cosolvents, solution-vs-suspension (shake-well physics).\\n- Dissolution testing turns rate profiles into quality specifications (criteria = framework canon).\\n- BCS named as beyond-200L reference canon.\\n- Patient instructions (shake well, with food) are solubility/rate rules in disguise.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace the chain from Noyes–Whitney terms to pct-24's F.\\n2. Why does a suspension exist, and what does it demand on its label?\\n3. What does dissolution testing instrument, and whose canon are its criteria?\\n4. Give two patient-facing instructions that are solubility/rate physics in disguise.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Everything in this topic ends at the patient: dissolution gates absorption, specs guard the batch, and the label's humble instructions are physical chemistry wearing plain clothes.`,
      },
    ],
  },
];
