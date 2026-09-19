import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Topic: Enzymes (Tier C topic block).
 *
 * Authored per the approved Content Generation Standard and the locked
 * Phase-1 tier map. Node IDs, titles, and ordering mirror curriculum.ts
 * exactly; nothing here may create, rename, or reorder curriculum nodes.
 *
 * Tier map (from the Phase-1 study-unit map):
 *  - enzymes                      TOPIC, Tier C  → session base / orientation
 *  - enzyme-kinetics              GROUP, Tier D  → orientation only (children taught separately)
 *  - enzyme-inhibition            GROUP, Tier D  → orientation only (children taught separately)
 *  - all other subtopics          Tier A/B       → full lessons
 */

export const bch201EnzymesLessons: Lesson[] = [
  // ─────────────────────────── TOPIC (Tier C — session base) ───────────────────────────
  {
    nodeId: 'enzymes',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'topic',
    title: 'Enzymes',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Before starting, you should already be comfortable with:

- **Protein structure** (covered later in this course under Protein Structure and Function — a primer here): amino acids joined by peptide bonds, folded into precise three-dimensional shapes; the shape determines function.
- **Energy of reactions**: reactions need an input of energy to get started (activation energy); catalysts lower that barrier.
- **Basic chemical equilibrium**: a reaction can run in both directions; equilibrium is where forward and reverse rates balance.

If any of these feel shaky, revise them first — enzyme behaviour follows directly from protein shape plus thermodynamics.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Enzymes are **biological catalysts**: almost always proteins (with a small but important RNA exception, the ribozymes), produced by living cells, that speed up the rate of a chemical reaction without being consumed or permanently changed by it. Like all catalysts they lower the **activation energy** — the energy barrier that must be overcome before reactants can become products — but they do not change the position of the reaction's equilibrium, only how quickly equilibrium is reached.

What makes enzymes remarkable is **specificity**. Each enzyme acts on a narrow set of reactants, called **substrates**, and converts them to specific products. This happens at the **active site**: a small three-dimensional pocket formed by amino acid residues that may be far apart in the primary sequence but are brought together by protein folding. The substrate binds the active site, the reaction occurs, and the product is released.

This block covers six connected areas: the enzyme concept, the systematic classification of enzymes, specificity, the factors that control reaction rates, enzyme kinetics and inhibition (quantitative, with worked calculations), and finally how cells — and pharmacists — make use of enzyme behaviour.

**Session plan.** Work through the subtopics in the order shown. The most calculation-intensive parts are Michaelis-Menten kinetics and Km/Vmax, so schedule extra time there; inhibition builds directly on them.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Enzymes are biological catalysts — nearly all proteins; a few RNAs (ribozymes) also catalyse.
- They accelerate reactions by lowering activation energy; they never change the equilibrium position or the overall reaction energetics ($\\Delta G$).
- Substrate = the reactant an enzyme acts on; binding occurs at the **active site**.
- Enzymes are not consumed: the same enzyme molecule works repeatedly (catalytic turnover).
- Specificity is a defining property and arises from the precise 3-D fit of substrate and active site.
- The name **enzyme** ("in yeast") reflects their discovery in fermentation studies by Eduard Buchner (1897); James Sumner first crystallised an enzyme (urease) and proved enzymes are proteins.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Enzymes are the molecular targets of a large share of medicines: many drugs work by inhibiting a specific enzyme (for example, angiotensin-converting enzyme (ACE) inhibitors for blood pressure). Enzyme kinetics — taught in this block — is the reasoning framework used to describe how inhibitors change drug behaviour at the molecular level. Enzymes also appear in pharmacy practice as diagnostic markers (serum enzymes released by damaged tissue) and as analytical tools (glucose oxidase strips for blood glucose testing).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A classmate says "an enzyme changes the equilibrium of a reaction so more product forms." Which part is right, which is wrong, and why?
2. Match each scenario to the factor it illustrates: (a) a fever of 41 °C makes enzymes work less well; (b) doubling a diluted serum sample doubles the measured reaction rate; (c) adding more substrate eventually stops increasing the rate.
3. Which two upcoming subtopics carry the quantitative core of this topic, and what constants will they introduce?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Enzyme = biological catalyst, almost always protein; lowers activation energy.
- Does not alter equilibrium — only the rate of reaching it.
- Substrate binds at the active site; enzyme emerges unchanged and reusable.
- Specificity comes from 3-D protein structure.
- Enzyme = target of many drugs; kinetics and inhibition are the quantitative core of this block.`,
      },
    ],
  },

  // ─────────────────────────── SUBTOPICS (Tier A) ───────────────────────────
  {
    nodeId: 'introduction-to-enzymes',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Introduction to Enzymes',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An **enzyme** is a biological catalyst, usually a globular protein, that accelerates a specific biochemical reaction by lowering its activation energy. The molecule the enzyme acts on is the **substrate**; what it becomes is the **product**. The small region where binding and catalysis happen is the **active site**.

Two properties define enzymes together: enormous rate enhancement (commonly $10^{6}$–$10^{12}$ times faster than the uncatalysed reaction) and high **specificity** for particular substrates. An enzyme is recovered unchanged at the end of the reaction, so a small amount of enzyme can process a large amount of substrate — this reusability is described by its **turnover number** (molecules of substrate converted per enzyme molecule per unit time).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Enzyme = biological catalyst; substrate → product at the active site.
- Lower activation energy ($E_a$); do not change $\\Delta G$ or equilibrium.
- Not consumed — recycled molecule after molecule.
- Rate enhancement is enormous, and specificity is high (both are consequences of precise structure).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A cell needs to convert substrate S to product P quickly, but the reaction must not run "uphill" energetically. Does an enzyme help with the energy part, the speed part, or both?
2. Why can a tiny amount of enzyme convert a large amount of substrate?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Catalyst + specificity + reusability = the enzyme definition.
- Active site is where it all happens; the enzyme survives the reaction.`,
      },
    ],
  },

  // ─────────────────────────── SUBTOPICS (Tier B) ───────────────────────────
  {
    nodeId: 'classification-of-enzymes',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Classification of Enzymes',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The International Union of Biochemistry and Molecular Biology (IUBMB) classifies enzymes into **seven major classes** according to the *type of reaction catalysed*, each with an Enzyme Commission (EC) number. Every enzyme receives a four-part code — class, subclass, sub-subclass, serial number — preceded by "EC".

1. **EC 1 — Oxidoreductases**: oxidation–reduction (redox) reactions; transfer of electrons/hydrogen. *Example:* alcohol dehydrogenase.
2. **EC 2 — Transferases**: transfer of a functional group between molecules. *Example:* transaminases (aminotransferases).
3. **EC 3 — Hydrolases**: bond cleavage by the addition of water. *Example:* amylase, lipase.
4. **EC 4 — Lyases**: non-hydrolytic, non-oxidative removal of a group, often creating a double bond (or the reverse addition). *Example:* decarboxylases.
5. **EC 5 — Isomerases**: intramolecular rearrangement — the molecule is converted to its isomer. *Example:* phosphohexose isomerase.
6. **EC 6 — Ligases (synthetases)**: joining two molecules, coupled to the hydrolysis of a high-energy bond (usually ATP). *Example:* DNA ligase, aminoacyl-tRNA synthetase.
7. **EC 7 — Translocases**: movement of ions or molecules across membranes (added in 2018). *Example:* cytochrome c oxidase (pumps protons).

A useful memory aid: **O**xidoreductase, **T**ransferase, **H**ydrolase, **L**yase, **I**somerase, **L**igase, **T**ranslocase — "Oxidise, Transfer, Hydrolyse, Lysis, Isomerise, Link, Transport".`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Seven classes by reaction type: oxidoreductase, transferase, hydrolase, lyase, isomerase, ligase, translocase (EC 1–7).
- EC number = class.subclass.sub-subclass.serial (e.g. alcohol dehydrogenase is EC 1.1.1.1).
- Hydrolases cleave with water; ligases join molecules at the cost of ATP; lyases do neither water-splitting nor redox chemistry.
- Distinguish **synthetase** (ligase, needs ATP) from **synthase** (any enzyme that synthesises, no ATP requirement implied).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Classify the enzyme catalysing:** glucose + ATP → glucose-6-phosphate + ADP

1. What happens? A phosphate group is *transferred* from ATP to glucose.
2. Reaction type = group transfer → **transferase** (EC 2). (Its full name, glucokinase/hexokinase, places it under EC 2.7 — kinases are phosphotransferases.)
3. Contrast: splitting glucose-6-phosphate back to glucose + inorganic phosphate **with water** would be a **hydrolase** reaction — same bond, different reaction type.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Plasma enzyme assays are named and interpreted by class: the hydrolases amylase and lipase point to pancreatic injury; the transferases ALT and AST to hepatocellular damage. Knowing the class tells you instantly what kind of reaction — and therefore what kind of tissue process — a laboratory enzyme result reflects.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the EC class for each: (a) an enzyme that removes CO₂ from a keto acid without water or oxidation; (b) an enzyme that joins an amino acid to its tRNA using ATP; (c) an enzyme that digests dietary triglyceride.
2. Why is "synthase" not automatically the same class as "synthetase"?
3. A colleague calls DNA ligase a hydrolase "because ATP is hydrolysed". What is wrong with that reasoning?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- EC 1–7: oxidoreductase, transferase, hydrolase, lyase, isomerase, ligase, translocase.
- Classified by reaction type, not by substrate or tissue.
- EC code: four numbers after "EC".
- Synthetase = ligase (ATP); synthase = general synthetic enzyme.`,
      },
    ],
  },

  {
    nodeId: 'enzyme-specificity',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Specificity',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Specificity** is the ability of an enzyme to select a particular substrate and catalyse one particular reaction. It exists at three levels:

- **Absolute specificity**: the enzyme acts on one, and only one, substrate. *Example:* urease hydrolyses urea and nothing else.
- **Group (bond) specificity**: the enzyme acts on a particular bond or functional group regardless of the rest of the molecule. *Example:* digestive proteases cleave peptide bonds.
- **Stereochemical (optical) specificity**: the enzyme distinguishes stereoisomers, acting on one configuration only. *Example:* L-amino acid oxidase acts on L-amino acids, not D-.

Two classic models describe how the substrate fits the active site: Fischer's **lock-and-key model** (a rigid, exact fit) and Koshland's **induced-fit model** (the active site moulds around the substrate on binding). Induced fit better explains real behaviour — catalysis often requires the enzyme to change shape.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three levels: absolute, group/bond, stereochemical.
- Urease = absolute; peptide-bond cleavage = group; L-/D- discrimination = stereochemical.
- Lock-and-key: rigid exact fit. Induced fit: active site adjusts to substrate — the accepted refinement.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. An enzyme hydrolyses any ester bond it meets, regardless of the acyl group. Which level of specificity, and why not "absolute"?
2. How does the induced-fit model explain an observation the lock-and-key model cannot — for example, an enzyme that is inactive until its substrate (or a co-substrate) binds?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Specificity = substrate selection + reaction selection; three levels (absolute, group, stereo).
- Fit models: lock-and-key (rigid) vs induced-fit (flexible, favoured).`,
      },
    ],
  },

  {
    nodeId: 'factors-affecting-enzyme-activity',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Factors Affecting Enzyme Activity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Enzyme activity — the rate of the reaction an enzyme catalyses — depends on the environment and on the amounts of reactants present.

**Temperature.** Rate rises with temperature (more kinetic energy, more productive collisions) until the protein begins to lose its precise shape. Each enzyme has an **optimum temperature**; for enzymes of the human body this is near 37 °C. Beyond it, thermal **denaturation** destroys the active site and activity falls steeply and irreversibly.

**pH.** Ionisation states of active-site residues and of the substrate must be correct for binding and catalysis, so each enzyme has an **optimum pH**. Pepsin works around pH 2 (the stomach), while trypsin works around pH 8 (the small intestine). Either side of the optimum, activity drops; extreme pH denatures.

**Substrate concentration.** At fixed enzyme concentration, rate rises with $[S]$ until the enzyme is saturated, after which it plateaus at the **maximum velocity** ($V_{max}$). This saturation behaviour is the subject of the kinetics lessons.

**Enzyme concentration.** With abundant substrate, rate is directly proportional to the amount of enzyme — twice the enzyme, twice the rate.

**Activators and inhibitors.** Some molecules increase activity (e.g. chloride ions activate salivary amylase); others reduce it (see the Enzyme Inhibition group — competitive and non-competitive inhibition are taught in their own lessons).

**Coenzymes and cofactors.** Many enzymes need non-protein helpers: metal ions (**cofactors**, e.g. Zn²⁺, Mg²⁺) or small organic **coenzymes** derived from vitamins (NAD⁺ from niacin; FAD from riboflavin). The protein alone (an **apoenzyme**) is inactive; the active protein + helper complex is the **holoenzyme**.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Temperature: rate ↑ with heat until optimum, then denaturation; human enzymes ≈ 37 °C optimum.
- pH: optimum differs by location — pepsin ≈ 2, trypsin ≈ 8.
- $[S]$: rate ↑ to saturation at $V_{max}$ (fixed enzyme).
- $[E]$: rate ∝ enzyme concentration when substrate is plentiful.
- Inhibitors decrease activity; activators increase it (Cl⁻ for salivary amylase).
- Apoenzyme (protein, inactive) + cofactor/coenzyme = holoenzyme (active); many coenzymes are vitamin derivatives.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Storage and stability follow directly from temperature and pH sensitivity: enzyme-containing preparations (insulin, some vaccines, diagnostic reagents) are refrigerated because heat denatures proteins. Formulators also exploit pH behaviour — enteric coating keeps aspirin tablets intact in the acid stomach to protect both the drug and the gastric mucosa. Heavy-metal poisons inactivate enzymes by attacking protein structure, which is why chelation therapy exists in toxicology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does enzyme activity collapse sharply above the optimum temperature rather than simply levelling off?
2. Pepsin and trypsin both digest protein but have completely different pH optima. What does this tell you about where they operate?
3. A reagent kit lists "apoenzyme + FAD" among its components. What is being assembled, and why does the reaction not work without FAD?
4. On a graph of rate vs substrate concentration, why does the curve flatten at high $[S]$?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Activity is shaped by temperature, pH, $[S]$, $[E]$, activators/inhibitors, cofactors/coenzymes.
- Optimum ≠ maximum possible rate for all enzymes — each enzyme has its own optimum conditions.
- Apoenzyme + coenzyme = holoenzyme; coenzymes come from vitamins.
- Refrigeration, enteric coating, and heavy-metal toxicity are all applied versions of this lesson.`,
      },
    ],
  },

  // ─────────────────────────── GROUP (Tier D — orientation only) ───────────────────────────
  {
    nodeId: 'enzyme-kinetics',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Kinetics',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Enzyme kinetics** is the quantitative study of reaction rates: how fast an enzyme converts substrate to product, and how that rate responds to substrate concentration. It is the measurement framework for everything quantitative in this topic.

This heading organises **two child lessons**:

1. **Enzyme Kinetics — Michaelis-Menten Kinetics**: the rate equation that describes the saturation curve, its assumptions, and how to use it.
2. **Enzyme Kinetics — Km and Vmax**: the two constants the equation produces, what each means, and the linear (Lineweaver-Burk) form used to read them off experimental data.

**How to study this group.** Treat the overview as orientation only, then work through both child lessons in order — the Michaelis-Menten equation is introduced first, and Km/Vmax is its interpretation. Both include worked calculations; have a calculator ready.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Kinetics = rate measurement; answers "how fast, and what changes the rate".
- Two children: Michaelis-Menten (the equation) → Km and Vmax (the constants).
- Everything in competitive/non-competitive inhibition is expressed through these same constants.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the two kinetic child lessons are the real study units.
- Master the Michaelis-Menten equation first, then the constants Km and Vmax.`,
      },
    ],
  },

  {
    nodeId: 'michaelis-menten-kinetics',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Kinetics — Michaelis-Menten Kinetics',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `You need from earlier lessons: the saturation curve of rate vs substrate concentration (Factors Affecting Enzyme Activity), and comfortable algebra for substituting into an equation. No calculus is required at this level.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The **Michaelis-Menten model** describes a simple enzyme mechanism:

$$
E + S \\rightleftharpoons ES \\rightarrow E + P
$$

The enzyme (E) binds substrate (S) reversibly to form an **enzyme–substrate complex (ES)**; ES then breaks down to release product (P) and regenerate free enzyme. Because E cycles between free and bound forms, rate depends on how much ES exists — and that depends on $[S]$.

$$
v = \\frac{V_{max}\\,[S]}{K_m + [S]}
$$

where $v$ = initial reaction velocity, $V_{max}$ = maximum velocity, $K_m$ = Michaelis constant, $[S]$ = substrate concentration.

**Reading the equation.** At low $[S]$ the denominator is dominated by $K_m$, so $v \\propto [S]$ — first-order in substrate (the steep initial part of the curve). At high $[S]$, $[S]$ dominates, $v \\to V_{max}$ — zero-order (saturated enzyme). The curve is a rectangular hyperbola.

**Assumptions.** The model assumes an initial-rate steady state (the **steady-state assumption**: ES forms as fast as it breaks down, so $[ES]$ is roughly constant during measurement) and that product has not accumulated enough to drive the reverse reaction. It applies to a simple single-substrate, no-inhibitor system.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Michaelis–Menten equation**

$$
v = \\frac{V_{max}[S]}{K_m + [S]}
$$

- $v$ — initial velocity, units of rate (e.g. µmol/min)
- $V_{max}$ — maximum velocity at complete saturation (same units as $v$)
- $K_m$ — substrate concentration at half $V_{max}$ (same units as $[S]$, e.g. mM)
- $[S]$ — substrate concentration

**Useful special case:** when $[S] = K_m$, the equation gives $v = V_{max}/2$ — the definition of $K_m$ in action.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** an enzyme with $V_{max} = 100$ µmol/min and $K_m = 2$ mM. **Find** $v$ at $[S] = 2$ mM.

1. Formula: $v = \\dfrac{V_{max}[S]}{K_m + [S]}$
2. Substitute: $v = \\dfrac{100 \\times 2}{2 + 2} = \\dfrac{200}{4}$
3. Answer: $v = 50$ µmol/min
4. **Interpretation:** $[S]$ equals $K_m$, so the enzyme is at exactly half-maximal velocity — as expected by definition. Now try $[S] = 98$ mM: $v = \\dfrac{100 \\times 98}{100} = 98$ µmol/min — approaching but never quite reaching $V_{max}$. The hyperbola asymptotes; it does not cross $V_{max}$.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State what each symbol represents in $v = \\frac{V_{max}[S]}{K_m+[S]}$, with units.
2. Why does the rate stop rising at very high substrate concentration, in terms of the ES complex?
3. An enzyme has $K_m = 4$ mM. What velocity (relative to $V_{max}$) is expected at $[S] = 4$ mM?
4. What is the steady-state assumption, in one sentence?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Mechanism: E + S ⇌ ES → E + P; rate depends on [ES].
- $v = V_{max}[S]/(K_m + [S])$ — hyperbolic; low $[S]$ first-order, high $[S]$ zero-order.
- At $[S] = K_m$, $v = V_{max}/2$.
- Valid for simple single-substrate systems under initial-rate, steady-state conditions.`,
      },
    ],
  },

  {
    nodeId: 'km-and-vmax',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Kinetics — Km and Vmax',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Bring with you: the Michaelis-Menten equation and the saturation curve from the previous lesson. Km and Vmax are the two constants *of* that equation.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**Km (the Michaelis constant)** is the substrate concentration at which velocity is half of $V_{max}$. It has units of concentration (mM, µM) and is a property of the enzyme–substrate pair under fixed conditions. A **low Km** means the enzyme reaches half-speed at very low substrate — high apparent affinity for its substrate; a **high Km** means more substrate is needed — lower apparent affinity. Km reflects the balance of all three rate constants in the model (association, dissociation, and catalysis), so it is best described as an *apparent* affinity constant rather than a pure binding constant.

**Vmax (maximum velocity)** is the rate when every enzyme molecule is working in the ES state — full saturation. It depends on how much enzyme is present, so it changes with enzyme concentration (doubling the enzyme doubles Vmax), whereas Km does not.

**Reading constants from data — the Lineweaver-Burk plot.** Taking reciprocals of the Michaelis-Menten equation gives a straight line ("double-reciprocal"):

$$
\\frac{1}{v} = \\frac{K_m}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}
$$

This is the line $y = mx + c$: slope $= K_m/V_{max}$, y-intercept $= 1/V_{max}$, x-intercept $= -1/K_m$. Plotting $1/v$ against $1/[S]$ lets experimental data reveal both constants — and, as you will see in the inhibition lessons, inhibitor type shows up as a *specific change* to slope and intercepts.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Half-maximal definition**

$$
[S] = K_m \;\Rightarrow\; v = \\tfrac{V_{max}}{2}
$$

**Lineweaver–Burk (double-reciprocal) equation**

$$
\\frac{1}{v} = \\frac{K_m}{V_{max}}\\cdot\\frac{1}{[S]} + \\frac{1}{V_{max}}
$$

- slope $= K_m/V_{max}$
- y-intercept $= 1/V_{max}$ → gives $V_{max}$
- x-intercept $= -1/K_m$ → gives $K_m$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a Lineweaver-Burk line with y-intercept $1/V_{max} = 0.02$ min/µmol and x-intercept $-1/K_m = -0.5$ mM⁻¹. **Find** $V_{max}$ and $K_m$.

1. $V_{max} = 1 / 0.02 = 50$ µmol/min
2. $K_m = 1 / 0.5 = 2$ mM
3. **Interpretation:** the enzyme reaches 25 µmol/min at $[S] = 2$ mM, and can never exceed 50 µmol/min no matter how much substrate is added. A second enzyme with $K_m = 0.2$ mM for the same substrate would be operating at half speed already at 0.2 mM — higher apparent affinity.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug design targets these constants directly. A competitive inhibitor is engineered to mimic the substrate and raise apparent Km while sparing Vmax; the goal of optimisation is a potent inhibitor — a low concentration achieving strong binding — measured in kinetic experiments exactly like these. Laboratory assays for serum enzymes likewise rely on knowing Km to set substrate concentrations that put the assay in its reliable range.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Enzyme A: $K_m$ = 0.1 mM. Enzyme B: $K_m$ = 5 mM, same substrate. Which has the higher apparent affinity, and what does that mean operationally?
2. A preparation is diluted to half its enzyme concentration. What happens to $V_{max}$? To $K_m$?
3. On a Lineweaver-Burk plot, how do you obtain $K_m$ from the x-intercept?
4. Why is Km called an "apparent" affinity constant rather than a true dissociation constant?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Km = [S] giving $v = V_{max}/2$; low Km = high apparent affinity; independent of [E].
- Vmax = saturated rate; proportional to enzyme concentration.
- Lineweaver-Burk: $1/v$ vs $1/[S]$; intercepts give $1/V_{max}$ and $-1/K_m$.
- Inhibitor types are diagnosed by their signature changes to these constants.`,
      },
    ],
  },

  // ─────────────────────────── GROUP (Tier D — orientation only) ───────────────────────────
  {
    nodeId: 'enzyme-inhibition',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Inhibition',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Enzyme inhibition** is the reduction of enzyme activity by molecules that interfere with substrate binding or catalysis. It matters enormously in pharmacy because most enzyme-targeting drugs **are** inhibitors.

This heading organises **two child lessons**, each with its own kinetic signature:

1. **Enzyme Inhibition — Competitive Inhibition**: inhibitor competes with substrate for the active site; apparent Km rises, Vmax is preserved.
2. **Enzyme Inhibition — Non-competitive Inhibition**: inhibitor binds outside the active site; Vmax falls, Km is unchanged.

**How to study this group.** Treat this overview as orientation only. Work through both children after completing the Michaelis-Menten and Km/Vmax lessons — the signatures are stated *in terms of* Km and Vmax, so the constants must come first. When comparing the two types, always ask: "what happens to Km, what happens to Vmax, and can high substrate overcome the inhibitor?"`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Inhibitors reduce activity; reversible inhibition is classified by the kinetic signature.
- Competitive: active-site competition; overcome by high $[S]$; Km↑, Vmax unchanged.
- Non-competitive: binding away from the active site; not overcome by $[S]$; Vmax↓, Km unchanged.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the two child lessons (competitive, non-competitive) are the real study units.
- The exam-relevant core is each type's Km/Vmax signature and whether excess substrate rescues the rate.`,
      },
    ],
  },

  {
    nodeId: 'competitive-inhibition',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Inhibition — Competitive Inhibition',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Required first: the Michaelis-Menten equation, and the meanings of Km and Vmax from the two kinetics lessons. Competitive inhibition is defined entirely by how it modifies those constants.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `In **competitive inhibition** the inhibitor (I) resembles the substrate closely enough to bind the **active site** itself. E and I form a dead-end **EI complex** that cannot proceed to product. Substrate and inhibitor therefore compete for the same site: whichever is more abundant wins more often.

The result: with inhibitor present, it *looks* as if the enzyme's affinity for substrate has dropped — apparent $K_m$ **increases** by the factor $(1 + [I]/K_i)$, where $K_i$ is the inhibitor's dissociation constant for EI. But if substrate concentration is pushed high enough, substrate outcompetes the inhibitor almost completely, and the enzyme still reaches its full $V_{max}$. **Vmax is unchanged; apparent Km rises.**

On a **Lineweaver-Burk plot**, competitive inhibition is unmistakable: all the lines for different inhibitor concentrations **intersect on the y-axis** (same $1/V_{max}$ intercept), with the slope increasing and the x-intercept moving closer to zero.

**Reversibility.** Because binding is non-covalent and competition-based, dilution or substrate excess reverses the effect — the defining practical feature.

A medicinal example: **statins** (e.g. atorvastatin) competitively inhibit HMG-CoA reductase — their structures mimic the substrate's portion of the molecule. This same logic underlies many antivirals and antibacterials (mimicking natural substrates to jam pathogen enzymes).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Competitive inhibition (apparent parameters)**

$$
K_m^{app} = K_m\\left(1 + \\frac{[I]}{K_i}\\right), \\qquad V_{max}^{app} = V_{max}
$$

- $[I]$ — inhibitor concentration
- $K_i$ — inhibitor dissociation constant from EI (smaller = tighter binding = more potent)

Lineweaver–Burk: same y-intercept ($1/V_{max}$), steeper slope, x-intercept shifts toward 0.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** an enzyme with $K_m = 2$ mM. A competitive inhibitor at $[I] = 3$ mM has $K_i = 1$ mM. **Find** the apparent Km.

1. Formula: $K_m^{app} = K_m(1 + [I]/K_i)$
2. Substitute: $K_m^{app} = 2 \\times (1 + 3/1) = 2 \\times 4$
3. Answer: $K_m^{app} = 8$ mM
4. **Interpretation:** four times more substrate is now needed to reach half-maximal velocity, but $V_{max}$ is untouched — with enough substrate the enzyme still runs at full speed. Now note what happens at $[I] = 0$: the factor collapses to 1 and $K_m^{app} = K_m$, as expected.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Competitive inhibition is the single most exploited concept in rational drug design. Statins lower cholesterol synthesis by competing with HMG-CoA at the active site of its reductase; the dose–response logic ("more antagonist needs more agonist to overcome") in receptor pharmacology is the same competition principle met in biochemistry here. Understanding why *high substrate rescues the enzyme* is what distinguishes competitive from non-competitive mechanisms — a standard examination discrimination.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does raising $[S]$ restore velocity under competitive inhibition but not under non-competitive inhibition?
2. An inhibitor raises apparent Km from 2 mM to 10 mM. By what factor is $(1+[I]/K_i)$? If $K_i = 0.5$ mM, what was $[I]$?
3. On a Lineweaver-Burk plot, which feature is *identical* for uninhibited and competitively inhibited enzyme, and why?
4. What structural property must a competitive inhibitor possess, and which drug class relies on it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Inhibitor mimics substrate → competes at the active site → EI dead-end complex.
- $K_m^{app}$ increases; $V_{max}$ unchanged; overcome by high $[S]$.
- Lineweaver-Burk signature: lines intersect on the y-axis.
- Statins at HMG-CoA reductase = the clinical anchor example.`,
      },
    ],
  },

  {
    nodeId: 'non-competitive-inhibition',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Inhibition — Non-competitive Inhibition',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Required first: the Michaelis-Menten equation; Km and Vmax; and the competitive case you have just studied (Km↑, Vmax same). Non-competitive inhibition is its mirror image.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `In **non-competitive inhibition** the inhibitor binds at a site **other than the active site** — an **allosteric site**. It can bind the free enzyme (E) or the enzyme–substrate complex (ES) equally, forming inactive EI or ESI complexes. The active site is still free and substrate still binds normally, but the complex that forms is catalytically crippled: the inhibitor distorts the enzyme's working geometry rather than blocking the door.

The kinetic consequence is the mirror of competitive inhibition. Because substrate binding is unaffected, **apparent Km is unchanged**. But a fraction of enzyme molecules is always disabled no matter how much substrate is present, so the effective enzyme population shrinks: **Vmax decreases** — by $1/(1+[I]/K_i)$. **No amount of extra substrate rescues the rate**, because the problem was never competition for the active site.

On a **Lineweaver-Burk plot**, pure non-competitive inhibition shows lines that **intersect on the x-axis** (same x-intercept $-1/K_m$), with the y-intercept ($1/V_{max}$) rising and slope increasing.

**An academic caution.** "Pure" non-competitive inhibition (I binds E and ES equally) is the textbook model; many real inhibitors distort Km *and* Vmax (**mixed inhibition**). Classical examples used for teaching are heavy-metal poisoning — mercury and lead binding to sulphydryl (–SH) groups away from the active site of many enzymes — and the inhibition of enzymes by non-specific protein denaturants at sub-denaturing levels. In toxicology, chelating agents (e.g. dimercaprol) *reverse* such inhibition by capturing the metal — unlike competitive inhibition, which is reversed by substrate excess.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Pure non-competitive inhibition (apparent parameters)**

$$
V_{max}^{app} = \\frac{V_{max}}{1 + [I]/K_i}, \\qquad K_m^{app} = K_m
$$

Lineweaver–Burk: same x-intercept ($-1/K_m$), steeper slope, y-intercept moves up ($1/V_{max}$ increases).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** $V_{max} = 100$ µmol/min. A non-competitive inhibitor at $[I] = 4$ mM has $K_i = 1$ mM. **Find** the apparent Vmax and the rate at saturating substrate.

1. Formula: $V_{max}^{app} = V_{max}/(1 + [I]/K_i)$
2. Substitute: $V_{max}^{app} = 100/(1 + 4/1) = 100/5$
3. Answer: $V_{max}^{app} = 20$ µmol/min
4. **Interpretation:** at any substrate concentration the achievable rate is capped at 20 µmol/min — fivefold loss of capacity. Km is still 2 mM (from the previous lesson's enzyme), so substrate affinity looks normal; the enzyme population has effectively shrunk to one-fifth. Doubling $[S]$ cannot help — only removing the inhibitor (e.g. chelation) restores function.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Heavy-metal toxicity (lead, mercury) is a pharmacology-relevant application: the metal disables enzymes by binding sulphydryl groups, and treatment with chelators such as dimercaprol or EDTA removes the inhibitor — mechanistically different from every "substrate-competition" drug. The distinction also matters in antifungal and anticancer therapy, where agents attacking enzyme function through structural (allosteric) disruption are designed so that no metabolic surge by the pathogen can overcome them.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Complete the table for each inhibitor type: site of binding, Km, Vmax, overcome by high [S]? (competitive vs pure non-competitive)
2. An experiment shows Km unchanged but Vmax reduced to a third. Which inhibition type, and what is $(1 + [I]/K_i)$?
3. Why does an allosteric inhibitor affect catalysis even though the active site is unoccupied?
4. How is non-competitive inhibition by a heavy metal reversed, and how does that differ from reversing competitive inhibition?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Binds allosteric site (E and/or ES); active site remains accessible.
- Vmax↓ (by $1/(1+[I]/K_i)$); Km unchanged; NOT overcome by substrate.
- Lineweaver-Burk signature: lines intersect on the x-axis.
- Heavy metals + chelation therapy = the classic reversible-application example.`,
      },
    ],
  },

  // ─────────────────────────── SUBTOPICS (Tier A / Tier B) ───────────────────────────
  {
    nodeId: 'enzyme-regulation',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Enzyme Regulation',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Cells control **how active each enzyme is** and **how much of it exists**. The main mechanisms:

- **Allosteric regulation**: an effector binds an allosteric site, switching the enzyme between more- and less-active conformations (activators and inhibitors).
- **Covalent modification**: enzymes are switched on/off by adding or removing chemical groups — classically phosphorylation/dephosphorylation by kinases and phosphatases.
- **Isoenzymes**: different molecular forms of the same enzyme catalysing the same reaction in different tissues (e.g. the CK and LDH isoenzyme sets), allowing tissue-specific control and diagnosis.
- **Enzyme induction and repression**: the cell changes the *amount* of enzyme made (gene-expression level) — slower but longer-lasting than the mechanisms above.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four mechanisms to know: allosteric regulation, covalent modification (phosphorylation), isoenzymes, induction/repression.
- Allosteric and covalent = fast, existing molecules; induction = slow, changes enzyme quantity.
- Isoenzymes = same reaction, different forms/tissues — the basis of several diagnostic tests.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which mechanism changes enzyme activity within seconds *without* changing the amount of enzyme protein — and how?
2. Why is induction a poor emergency-control mechanism for a metabolic pathway?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Activity-level controls (fast): allosteric effectors, covalent modification.
- Quantity-level control (slow): induction/repression.
- Isoenzymes: tissue-specific molecular variants of one catalytic function.`,
      },
    ],
  },

  {
    nodeId: 'clinical-significance-of-enzymes',
    courseId: 'bch-201',
    topicId: 'enzymes',
    nodeType: 'subtopic',
    title: 'Clinical Significance of Enzymes',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Enzymes matter clinically in three ways.

**1. Plasma enzymes as diagnostic markers.** Healthy plasma contains only low, steady enzyme levels. When tissue is damaged, its intracellular enzymes leak into blood, and the *pattern* of elevation points to the injured organ:

- **ALT (alanine aminotransferase)** and **AST (aspartate aminotransferase)** — hepatocellular damage (ALT more liver-specific; AST also rises in cardiac injury).
- **ALP (alkaline phosphatase)** — cholestatic/biliary disease and bone turnover.
- **CK (creatine kinase)** — muscle damage; the CK-MB isoenzyme is a traditional marker of myocardial infarction (today complemented by troponins).
- **Amylase and lipase** — acute pancreatitis.
- **LDH (lactate dehydrogenase)** — general tissue breakdown, a non-specific marker.

Note how the **isoenzyme** concept (previous lesson) underpins specificity: CK has tissue-specific isoenzymes (CK-MM muscle, CK-MB heart, CK-BB brain), which is *why* the pattern is diagnostic.

**2. Inherited enzyme defects.** Many inborn errors of metabolism are enzyme deficiencies — the classic inborn-error example is glucose-6-phosphate dehydrogenase (G6PD) deficiency, in which oxidative drugs and foods (e.g. primaquine, fava beans) can trigger haemolysis. Pharmacogenetics is the systematic study of how such enzyme variation changes drug response.

**3. Enzymes as therapeutic and analytical tools.** Enzymes are used therapeutically (e.g. digestive enzyme supplementation) and in analysis — glucose oxidase-based blood glucose testing and reagent strips are standard pharmacy practice.

**Monitoring and interpretation.** Enzyme assays report activity (e.g. U/L). Interpretation always combines: which enzyme, how high, how fast rising/falling — kinetics you now have the vocabulary for.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Damaged tissue releases intracellular enzymes → plasma pattern indicates the organ.
- ALT/AST → liver; ALP → bile ducts/bone; CK (CK-MB) → heart/muscle; amylase/lipase → pancreas; LDH → non-specific breakdown.
- Isoenzymes give diagnostic specificity (CK-MM/MB/BB).
- G6PD deficiency: inherited enzyme defect with drug-triggered haemolysis — pharmacogenetics in action.
- Enzymes also serve as therapeutic agents and analytical reagents (glucose oxidase).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This lesson is where biochemistry meets the pharmacy counter: interpreting elevated liver enzymes on a patient's laboratory report, recognising that a G6PD-deficient patient must avoid oxidising drugs, and understanding what a glucose strip is actually measuring. Enzyme-based laboratory results are among the most common data a pharmacist is asked to help interpret.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A laboratory report shows sharply raised ALT and ALP. Which organs/processes do the two enzymes point to, and why are they measured *together*?
2. Why is CK-MB more informative after suspected myocardial infarction than total CK alone?
3. A patient with G6PD deficiency is given an oxidising antimalarial. Explain the consequence in enzyme terms.
4. Glucose test strips use an enzyme as the analytical reagent. Which enzyme, and what does its reaction produce that the strip detects?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Leak pattern: which enzyme + how high → which tissue.
- ALT/AST liver, ALP bile/bone, CK-MB heart, amylase/lipase pancreas, LDH non-specific.
- Isoenzymes create the specificity; deficiency states (G6PD) create drug-sensitivity.
- Enzymes = markers, medicines, and measuring tools.`,
      },
    ],
  },
];
