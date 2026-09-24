import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 3: Carbohydrate Metabolism Part 2.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 */

export const bch201CarbMetabolism2Lessons: Lesson[] = [
  {
    nodeId: 'regulation-of-gluconeogenesis',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Gluconeogenesis — Regulation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Gluconeogenesis must run when glucose is scarce — and must **not** run simultaneously with glycolysis at full speed in the same cell, or ATP would be squandered in a futile cycle. Its regulation mirrors and opposes glycolysis control.

**1. Fructose-1,6-bisphosphatase — the principal switch.** Inhibited by **AMP** (energy low → break down, don't synthesise glucose) and by **fructose-2,6-bisphosphate**. Because glucagon lowers F-2,6-BP, one hormonal signal simultaneously (a) releases PFK-1 from inhibition and (b) removes the brake on fructose-1,6-bisphosphatase — favouring gluconeogenesis in fasting. Insulin does the exact opposite in the fed state.

**2. Pyruvate carboxylase — substrate gatekeeping.** Activated by **acetyl-CoA**. Logic: plentiful acetyl-CoA signals abundant fatty-acid oxidation, i.e. the fasting/fat-burning state in which glucose synthesis is needed; the acetyl-CoA also supplies the ATP through β-oxidation.

**3. Hormonal and transcriptional control (longer term).** **Glucagon** and **cortisol** raise PEPCK and fructose-1,6-bisphosphatase expression (hours scale); **insulin** suppresses them. Cortisol's gluconeogenic drive explains the hyperglycaemia of stress and Cushing's syndrome.

**4. Substrate availability.** Flux is limited by what arrives: lactate from muscle and red cells, glycerol from adipose lipolysis, amino acids from protein breakdown. In prolonged fasting, adipose lipolysis (driven by low insulin) is therefore the hidden governor of gluconeogenesis.

**5. Reciprocal avoidance of futile cycling.** Each glycolytic/gluconeogenic pair is regulated in opposite directions by the same signals (F-2,6-BP, AMP, insulin/glucagon) — the cell's answer to the thermodynamic waste of running both directions at once.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Main regulatory enzyme: fructose-1,6-bisphosphatase (inhibited by AMP and F-2,6-BP).
- Pyruvate carboxylase is activated by acetyl-CoA (fat-burning state favours glucose synthesis).
- Glucagon + cortisol induce gluconeogenic enzymes; insulin represses them.
- Reciprocal regulation with glycolysis prevents futile cycling.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin acts here: by activating AMPK (raising the AMP signal) it inhibits fructose-1,6-bisphosphatase-driven flux and lowers hepatic glucose output. Understanding F-2,6-BP explains why a single drug or hormone can redirect the whole liver's carbohydrate economy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain how one molecule — fructose-2,6-bisphosphate — coordinates glycolysis and gluconeogenesis in opposite directions.
2. Why is acetyl-CoA activation of pyruvate carboxylase metabolically sensible during fasting?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Gluconeogenesis is switched on by fasting hormones, AMP-free energy state, and acetyl-CoA; off by insulin and feeding.
- F-1,6-bisphosphatase is the master control; substrate supply sets the ceiling.`,
      },
    ],
  },

  {
    nodeId: 'glycogenesis',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Glycogenesis',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Glycogenesis** is the synthesis of **glycogen** — a branched polymer of glucose residues joined by α-1,4 glycosidic bonds with α-1,6 branches every 8–12 residues. The body's two glycogen depots differ in purpose: **liver** (~100 g) exports glucose to the blood for other organs; **muscle** (~400 g) keeps its glycogen for its own contraction (muscle lacks glucose-6-phosphatase and cannot release glucose into blood).

**The pathway (from glucose-6-phosphate):**

1. **Phosphoglucomutase**: glucose-6-phosphate ↔ glucose-1-phosphate.
2. **UDP-glucose pyrophosphorylase**: glucose-1-phosphate + UTP → **UDP-glucose** + PPᵢ. UDP-glucose is the activated donor; hydrolysis of the PPᵢ drives the reaction forward.
3. **Glycogen synthase**: adds glucose from UDP-glucose to the non-reducing end of an existing chain, making α-1,4 bonds. It can only **elongate** an existing chain of at least ~4 residues.
4. **Glycogenin** — the primer problem solved: a self-glucosylating protein that attaches the first glucose residues to itself (tyrosine side-chain), creating the short primer glycogen synthase requires.
5. **Branching enzyme (amylo-α(1,4)→α(1,6)-transglycosylase)**: cuts a terminal segment of ~7 residues from an α-1,4 chain and reattaches it internally as an **α-1,6 branch**. Branching increases solubility and — crucially — multiplies the number of non-reducing ends, so glycogen can be mobilised or extended at many points simultaneously.

**Regulation.** Glycogen synthase is the control point: active when **dephosphorylated** (insulin, fed state) and inactive when phosphorylated (glucagon/adrenaline, fasting). Insulin also stimulates glycogen synthase via GSK3 inhibition. **Glucose-6-phosphate** allosterically activates synthase, and **ATP** availability matters since UTP is spent.

Energy cost: incorporation of one glucose costs **2 high-energy phosphates** (UTP, regenerated from ATP; PPᵢ hydrolysis counts as the second).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Glycogen = α-1,4 chains + α-1,6 branches every 8–12 residues; liver stores for blood glucose, muscle for itself.
- Activated donor: UDP-glucose; primer protein: glycogenin; elongator: glycogen synthase; brancher: branching enzyme.
- Cost: 2 ~P per glucose stored.
- Glycogen synthase: active dephosphorylated (insulin), inactive phosphorylated (glucagon/adrenaline).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Glycogen storage diseases (e.g. von Gierke disease, a glucose-6-phosphatase deficiency) cause fasting hypoglycaemia and hepatomegaly — a direct clinical consequence of the pathway's architecture. Epinephrine injections simultaneously trigger glycogenolysis in muscle and liver, part of the fight-or-flight fuel mobilisation pharmacology exploits.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is UDP-glucose used instead of glucose-1-phosphate directly?
2. What problem does glycogenin solve, and what problem does branching solve?
3. Contrast liver and muscle glycogen in purpose and in ability to raise blood glucose.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glycogenesis: G6P → G1P → UDP-glucose → glycogen (synthase + glycogenin + branching enzyme).
- Fed-state, insulin-driven; 2 ~P per glucose.
- Liver glycogen serves the blood; muscle glycogen serves the muscle.`,
      },
    ],
  },

  {
    nodeId: 'glycogenolysis',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Glycogenolysis',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Glycogenolysis** is the mobilisation of stored glycogen back into usable glucose units. It is not the exact reverse of glycogenesis — it uses different enzymes and releases glucose-1-phosphate (not free glucose) from most residues.

**The pathway:**

1. **Glycogen phosphorylase** — the key enzyme: cleaves α-1,4 bonds from the non-reducing ends by **phosphorolysis** (adding inorganic phosphate rather than water):

$$\\text{Glycogen}_{(n)} + \\text{P}_i \\rightarrow \\text{Glycogen}_{(n-1)} + \\text{Glucose-1-phosphate}$$

The product, glucose-1-phosphate, converts to glucose-6-phosphate (phosphoglucomutase) and enters glycolysis directly — **no ATP was spent importing it**. Muscle profits immediately; its glucose-6-phosphate goes to its own glycolysis.

2. **Debranching enzyme** — two activities in one protein: a **transferase** that moves a short three-residue stub from an α-1,6 branch to a nearby linear end, and an **α-1,6-glucosidase** that hydrolyses the exposed branch point, releasing **one free glucose** per branch. This is why glycogen breakdown yields ~90% glucose-1-phosphate and ~10% free glucose.

3. In the **liver**, glucose-6-phosphatase converts glucose-6-phosphate → free glucose, exported to blood. Muscle has no glucose-6-phosphatase, so its glycogen can never raise blood glucose.

**Physiological roles.** Liver glycogenolysis defends **blood glucose** between meals and overnight (stores last ~12–18 h). Muscle glycogenolysis fuels **contraction** — and its strongest trigger is not a hormone but Ca²⁺ released during contraction itself, plus AMP.

Pyruvate's fate: the "no ATP spent" fact is often examined — phosphorylytic cleavage preserves the phosphate bond energy instead of wasting it as heat.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Key enzyme: glycogen phosphorylase — phosphorolysis of α-1,4 bonds → glucose-1-phosphate.
- Debranching enzyme = transferase + α-1,6-glucosidase; one free glucose per branch (~10% of yield).
- Liver: G6P → glucose (glucose-6-phosphatase) → blood. Muscle: G6P → own glycolysis only.
- Muscle phosphorylase is activated by Ca²⁺ and AMP; liver's by glucagon; both by adrenaline.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Glucagon injection is the emergency treatment for severe hypoglycaemia — it works by triggering hepatic glycogenolysis (and is useless in glycogen-depleted states). Caffeine's ergogenic effect partly reflects AMP-driven muscle phosphorylase activation during exercise.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish phosphorolysis from hydrolysis, and give the metabolic advantage of the former.
2. Why does glycogenolysis release some free glucose, and roughly in what proportion?
3. Why can a sprinter's muscle glycogen never correct someone else's hypoglycaemia?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glycogenolysis: phosphorylase (α-1,4 → G1P) + debranching enzyme (α-1,6 → free glucose).
- G1P → G6P → glycolysis (muscle) or free glucose (liver).
- Hormonal (glucagon/adrenaline) in liver; metabolic (Ca²⁺/AMP) in muscle.`,
      },
    ],
  },

  {
    nodeId: 'regulation-of-glycogen-metabolism',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Glycogenolysis — Regulation of Glycogen Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Glycogen synthesis and breakdown are controlled **reciprocally**: when one pathway is on, the other is off. The mechanism is covalent phosphorylation of the two key enzymes, driven by hormones and intracellular signals.

**The phosphorylation switch.** **Glycogen phosphorylase** is active when **phosphorylated** (phosphorylase *a*); **glycogen synthase** is active when **dephosphorylated** (synthase *a*). One enzyme — **protein kinase A (PKA)** — phosphorylates both in the appropriate directions.

**Hormonal cascades.**
- **Glucagon** (liver) and **adrenaline** (liver and muscle) bind GPCRs → activate adenylate cyclase → cAMP rises → **PKA active** → phosphorylase kinase active → phosphorylase *a* (glycogenolysis ON) and synthase *b* (glycogenesis OFF). A single adrenaline molecule can mobilise millions of glucose units — a classic signal-amplification cascade.
- **Insulin** (fed state) activates protein **phosphatase-1**, which strips phosphates from both enzymes: phosphorylase *b* (glycogenolysis OFF) and synthase *a* (glycogenesis ON).

**Allosteric fine-tuning (faster than hormones).**
- **Muscle**: **AMP** activates phosphorylase *b* directly (energy crisis → break glycogen now); **Ca²⁺** (released each contraction) activates phosphorylase kinase via its calmodulin subunit — tying glycogen breakdown to contraction itself. **Glucose-6-phosphate** activates synthase.
- **Liver**: **glucose** itself is an allosteric signal — it binds phosphorylase *a* and inactivates it. Elegant logic: the liver switches off glycogenolysis precisely when its product is no longer needed.

**Tissue specificity** is built into isoenzymes: liver phosphorylase is tuned to glucagon and blood-glucose needs; muscle phosphorylase to Ca²⁺/AMP and local energy demand. The same phosphorylation chemistry, different sensors.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Reciprocal control: phosphorylase active when phosphorylated; synthase active when dephosphorylated; PKA and phosphatase-1 flip both.
- Glucagon/adrenaline → cAMP → PKA → glycogenolysis on; insulin → phosphatase-1 → glycogenesis on.
- Muscle allostery: AMP + Ca²⁺; liver allostery: glucose itself.
- Amplification: one hormone molecule → many glucose units released.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain why insulin and glucagon have exactly opposite effects on both glycogen enzymes with one mechanism.
2. Why does liver — but not muscle — phosphorylase respond allosterically to glucose?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One switch (phosphorylation), two directions (PKA on, phosphatase-1 off), two tissues with different sensors.
- Hormones set the programme; AMP/Ca²⁺/glucose provide the fine adjustments.`,
      },
    ],
  },

  {
    nodeId: 'pentose-phosphate-pathway',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Pentose Phosphate Pathway',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **pentose phosphate pathway (PPP)** — also called the hexose monophosphate shunt — branches from **glucose-6-phosphate** and produces two things glycolysis cannot make: **NADPH** and **ribose-5-phosphate**. It produces no ATP.

**Two phases.**

*Oxidative phase (irreversible):* glucose-6-phosphate → 6-phosphogluconate → **ribulose-5-phosphate + CO₂**, with **2 NADPH generated per glucose-6-phosphate**. First enzyme: **glucose-6-phosphate dehydrogenase (G6PD)** — the rate-limiting, regulated step (NADP⁺ activates; NADPH inhibits).

*Non-oxidative phase (reversible):* a sequence of sugar reshuffling (transketolase and transaldolase, with thiamine pyrophosphate as transketolase cofactor) interconverts pentose phosphates with **glyceraldehyde-3-phosphate and fructose-6-phosphate**. This reversibility lets the cell tailor its output: need only NADPH? Route everything back to glycolysis. Need only ribose? Reverse the non-oxidative phase from glycolytic intermediates. Need both? Full flux.

**Why NADPH is not NADH.** NADH powers ATP production by donating electrons to the electron transport chain; **NADPH powers biosynthesis and antioxidant defence**. Separate carriers allow the cell to run reductive synthesis and oxidative energy capture independently — a recurring theme in metabolism.

**Antioxidant defence in red cells.** NADPH keeps **glutathione** reduced, and reduced glutathione destroys hydrogen peroxide. Red cells constantly generate peroxide (they carry oxygen) and have **no mitochondria** — so the PPP is their *only* NADPH source. This is why G6PD deficiency matters clinically.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Branch point: glucose-6-phosphate. Products: NADPH + ribose-5-phosphate; no ATP.
- Oxidative phase: G6PD rate-limiting; 2 NADPH per G6P; irreversible.
- Non-oxidative phase: transketolase (TPP-dependent) + transaldolase; reversible.
- NADPH = reductive biosynthesis + glutathione antioxidant system; NADH = ATP production.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `G6PD deficiency (X-linked, hundreds of millions of people) renders red cells vulnerable to oxidative stress. Oxidising drugs — primaquine, dapsone, sulfonamides, nitrofurantoin — and fava beans trigger **haemolysis** in G6PD-deficient patients. Checking G6PD status before prescribing oxidising drugs is routine pharmacy practice in endemic regions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the PPP produce no ATP, and why is that not a design flaw?
2. How can a cell needing many nucleotides but little NADPH still obtain ribose-5-phosphate?
3. Explain, stepwise, why a G6PD-deficient patient haemolyses after taking primaquine.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- PPP = glucose-6-phosphate → NADPH + ribose-5-P; oxidative (G6PD) + reversible non-oxidative phases.
- NADPH is for building and defending, not for ATP.
- Red cells live or die by their PPP — the G6PD-deficiency drug list is a pharmacy classic.`,
      },
    ],
  },

  {
    nodeId: 'major-functions-of-the-pentose-phosphate-pathway',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Pentose Phosphate Pathway — Major Functions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The PPP serves five major functions across the body — knowing which tissue needs which function explains the pathway's distribution.

**1. Reductive biosynthesis.** NADPH supplies electrons for fatty-acid synthesis (adipose, liver, lactating breast), cholesterol synthesis (liver), and steroid-hormone synthesis (adrenal cortex, gonads). These tissues run the PPP at high rates — steroid-secreting glands are among the richest sources of G6PD.

**2. Antioxidant defence.** NADPH keeps glutathione reduced; reduced glutathione removes peroxide and repairs oxidised protein sulphydryl groups. Vital in red cells, lens and cornea of the eye, and phagocytic white cells (where a separate NADPH oxidase uses NADPH to generate the respiratory burst that kills bacteria — its congenital failure is **chronic granulomatous disease**).

**3. Ribose-5-phosphate for nucleotide synthesis.** All cells synthesising DNA/RNA (dividing cells, bone marrow) need ribose; the PPP is its direct source.

**4. Cytochrome P450 support.** Hepatic drug metabolism requires NADPH for the mixed-function oxidase system. The liver's PPP therefore underpins the pharmacy profession itself — drug clearance is NADPH-dependent.

**5. Metabolic flexibility.** Through the reversible non-oxidative phase, the pathway connects pentose metabolism to glycolysis, allowing excess dietary pentoses to be recycled into glycolytic intermediates and letting the cell trade NADPH production against ribose production as needed.

**Tissue summary:** liver (all functions), adipose and lactating mammary gland (fatty-acid synthesis), adrenal cortex/testes/ovary (steroids), red cells and lens (antioxidant only), dividing marrow (ribose).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Five functions: reductive biosynthesis, antioxidant defence, ribose supply, P450 drug metabolism, metabolic flexibility.
- NADPH-rich tissues: liver, adipose, lactating gland, steroid glands.
- Phagocyte NADPH oxidase needs NADPH for the respiratory burst.
- Antioxidant-only tissues: red cells, lens, cornea (no mitochondria).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Match each tissue to its dominant PPP function: adrenal cortex, red cell, bone marrow, liver.
2. Why does the lens of the eye depend so heavily on the PPP?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- PPP output (NADPH + ribose) maps onto the body's needs: make fat, make steroids, make DNA, survive oxygen, clear drugs.
- Tissue distribution of the pathway follows tissue function.`,
      },
    ],
  },

  {
    nodeId: 'blood-glucose-regulation',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Blood Glucose Regulation',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Blood glucose is defended within a narrow range — roughly **4.0–6.0 mmol/L fasting** in healthy adults — because both extremes damage tissue: low glucose starves the brain (hypoglycaemia can cause coma within minutes), while chronic high glucose glycosylates proteins (the vascular damage of diabetes). Regulation is a balance of **sources** and **sinks**, controlled hormonally.

**Sources of blood glucose:**
- Dietary glucose absorbed from the intestine (transient, hours after a meal);
- Hepatic **glycogenolysis** (minutes scale; also renal in prolonged fasting);
- **Gluconeogenesis** (hours scale; liver and kidney) from lactate, glycerol, and amino acids.

**Sinks:**
- Brain and obligatory glucose users (red cells, renal medulla) — ~constant demand;
- Muscle and adipose tissue uptake (insulin-dependent);
- Storage as glycogen; conversion to fat when surplus persists.

**The hormonal axis.** **Insulin** is the only major hypoglycaemic hormone: released when glucose rises after a meal, it drives uptake (GLUT4 into muscle/fat), glycolysis, glycogenesis, and fat storage. The counter-regulatory hormones raise glucose: **glucagon** (glycogenolysis + gluconeogenesis), **adrenaline** (rapid glycogenolysis + lipolysis, the acute stress response), **cortisol** (gluconeogenic enzyme induction), and **growth hormone** (reduced tissue uptake, prolonged support).

**The fed–fast logic.** After a meal: insulin dominates → glucose stored. Fasting: insulin falls, glucagon rises → liver releases glucose from glycogen, then synthesises it. Prolonged fasting: the brain gradually adapts to ketone bodies, sparing protein.

**Clinical anchors.** Fasting glucose ≥ 7.0 mmol/L (126 mg/dL) or HbA1c ≥ 6.5% defines diabetes (WHO criteria); glucose below ~2.5 mmol/L threatens consciousness. The renal threshold (~9–10 mmol/L) explains glycosuria in uncontrolled diabetes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Normal fasting range ≈ 4.0–6.0 mmol/L; brain demand ~120 g glucose/day.
- Sources: diet, hepatic glycogenolysis, gluconeogenesis. Sinks: brain, insulin-dependent tissues, storage, lipogenesis.
- Insulin: the only glucose-lowering hormone. Counter-regulatory: glucagon, adrenaline, cortisol, growth hormone.
- Diabetes diagnosis: fasting ≥ 7.0 mmol/L or HbA1c ≥ 6.5% (WHO).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every antidiabetic drug class maps onto this section: insulin replacement, sulfonylureas (increase insulin secretion), metformin (reduce hepatic output), SGLT2 inhibitors (create a urinary sink), and DPP-4/GLP-1 agents (amplify the incretin half of the axis). Corticosteroid therapy predictably raises glucose via the cortisol arm.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the sources and sinks of blood glucose in the fasting state, naming the organ(s) responsible.
2. Why does the body maintain multiple counter-regulatory hormones rather than one?
3. A patient on prednisolone develops hyperglycaemia. Which regulatory arm is disturbed?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Blood glucose = tightly defended fuel level; brain is the non-negotiable customer.
- Insulin stores; glucagon/adrenaline/cortisol/GH mobilise.
- The fed–fast switch is the central concept of this whole topic.`,
      },
    ],
  },

  {
    nodeId: 'basic-hormonal-regulation-of-glucose-metabolism',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Blood Glucose Regulation — Basic Hormonal Regulation of Glucose Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Hormones control glucose metabolism by switching enzymes on and off — mostly through phosphorylation cascades. This subtopic organises the major hormones by what they do to glucose.

**Insulin (β-cells of pancreatic islets).** Secreted when blood glucose rises (and potentiated by the incretins GLP-1/GIP after oral glucose). Actions, by tissue:
- *Liver*: glycolysis ↑, glycogenesis ↑, gluconeogenesis ↓, glycogenolysis ↓ (via dephosphorylation of the key enzymes);
- *Muscle*: GLUT4 transporters move to the membrane → glucose uptake ↑; glycogen synthesis ↑;
- *Adipose*: lipoprotein lipase ↑, fatty-acid synthesis ↑, lipolysis ↓.
Net effect: glucose leaves the blood and is used or stored.

**Glucagon (α-cells).** Secreted when glucose falls. Liver-directed: glycogenolysis ↑, gluconeogenesis ↑, ketogenesis ↑. (Muscle lacks glucagon receptors — its response to fasting is adrenaline-mediated.) Net effect: glucose enters the blood.

**Adrenaline (adrenal medulla).** The emergency hormone: potent hepatic and muscle glycogenolysis, lipolysis, and glucagon support. Acts within seconds — the fight-or-flight glucose spike.

**Cortisol (adrenal cortex).** Slower but sustained: induces gluconeogenic enzymes (PEPCK), promotes protein breakdown (amino-acid substrate), and reduces tissue glucose uptake. Chronic elevation → hyperglycaemia ("steroid diabetes").

**Growth hormone.** Reduces muscle glucose uptake and supports gluconeogenesis during prolonged fasting.

**Integration.** Insulin:glucagon ratio is the master dial — high after meals (storage programme), low in fasting (mobilisation programme). Each hormone acts mainly by **covalent enzyme modification**, which is why hormonal effects on glucose metabolism appear within minutes and reverse cleanly.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Insulin (β-cells): uptake (GLUT4), glycolysis, glycogenesis, lipogenesis; suppresses gluconeogenesis.
- Glucagon (α-cells): hepatic glycogenolysis, gluconeogenesis, ketogenesis; muscle unresponsive.
- Adrenaline: seconds-scale glycogenolysis + lipolysis. Cortisol: enzyme induction, gluconeogenesis.
- The insulin:glucagon ratio is the overall switch of the fed–fast programme.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Insulin preparations are classified by their kinetics (rapid-, short-, intermediate-, long-acting) — pharmacokinetics engineered to mimic the physiological profile this section describes. β-blockers blunt adrenaline's counter-regulatory response, which is why they can mask hypoglycaemia warning symptoms in treated diabetics.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does glucagon raise blood glucose from the liver but not from muscle, despite muscle's larger glycogen store?
2. Contrast the speed and mechanism of adrenaline versus cortisol on glucose.
3. What single ratio summarises the body's fed-versus-fasting programme?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Five hormones, two programmes: insulin stores; glucagon + adrenaline + cortisol + GH mobilise.
- Mechanism: enzyme phosphorylation cascades, tuned per tissue.
- The insulin:glucagon ratio is the dial; drug therapy manipulates parts of the same dial.`,
      },
    ],
  },
];
