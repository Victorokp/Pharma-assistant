import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 1: Introduction to Biochemistry + Metabolism.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Tier map: topic base lessons C/B; overview/clinical-orientation subtopics A;
 * descriptive subtopics B.
 */

export const bch201MetabolismLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'introduction-to-biochemistry',
    courseId: 'bch-201',
    topicId: 'introduction-to-biochemistry',
    nodeType: 'topic',
    title: 'Introduction to Biochemistry',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Biochemistry** is the study of the chemical processes and substances that occur within living organisms. It asks three connected questions: what molecules make up a cell (**structure**), what reactions they undergo (**metabolism**), and how these reactions are controlled (**regulation**) — because health is what happens when all three work correctly, and disease is what happens when any of them fail.

The subject rests on familiar general-chemistry ideas: atoms and covalent bonds, polarity, acids and bases, and energy changes in reactions. What distinguishes a living system is that its reactions are organised: thousands of reactions run simultaneously, each catalysed by an **enzyme**, connected into **pathways** in which the product of one reaction becomes the substrate of the next. The four great families of biomolecules — **carbohydrates, lipids, proteins, and nucleic acids** — supply both the building blocks and the fuel for these pathways.

This course follows the logic of the discipline: enzymes first (the machinery), then metabolism and its major pathways, then the molecules themselves (amino acids, proteins, membranes), and finally how the whole system is studied and measured clinically.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Biochemistry = the chemistry of living systems: structure, metabolism, regulation.
- Cellular reactions are enzyme-catalysed and organised into pathways.
- Four major biomolecule families: carbohydrates, lipids, proteins, nucleic acids.
- Normal function = correct molecules, correct reactions, correct control; disease = failure in one of these.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Nearly every drug acts on a biochemical process: it blocks an enzyme, mimics a metabolite, or corrects a regulatory fault. A pharmacist who understands metabolism can explain, for example, why a missed meal matters for a diabetic patient on insulin, or why allopurinol reduces uric acid. Biochemistry is the "why" behind pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. In your own words, what three questions does biochemistry ask about a cell?
2. What is a metabolic pathway, and why does enzyme catalysis make such organisation possible?
3. Name the four major families of biomolecules and one role of each.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Biochemistry studies the molecules and reactions of living cells.
- Reactions are enzyme-driven and organised into regulated pathways.
- Carbohydrates, lipids, proteins, and nucleic acids are the central molecules.
- The course logic: enzymes → metabolism → molecular structure → clinical measurement.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A) ───────────────
  {
    nodeId: 'importance-of-biochemistry-to-health-sciences',
    courseId: 'bch-201',
    topicId: 'introduction-to-biochemistry',
    nodeType: 'subtopic',
    title: 'Importance of Biochemistry to Health Sciences',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Biochemistry underpins every health discipline in four practical ways.

**1. Understanding normal function.** Physiology works because biochemistry works: muscle contraction depends on ATP, nerve signalling on ion gradients and neurotransmitter synthesis, immunity on protein recognition.

**2. Explaining disease.** Most diseases are biochemical faults: diabetes is disordered glucose regulation, gout is uric acid accumulation from purine breakdown, phenylketonuria is a single defective enzyme. Knowing the mechanism points to rational treatment.

**3. Diagnosis and monitoring.** Clinical laboratories measure biochemical quantities — blood glucose, urea, electrolytes, cholesterol, enzymes released by damaged tissue. Every "normal range" on a laboratory report is a statement about biochemistry.

**4. Therapy and drug action.** Drugs are designed against biochemical targets, and nutrition, intravenous fluids, and drug metabolism are all applied biochemistry. For pharmacy specifically, the subject explains dose, interaction, and adverse-effect logic at the molecular level.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Biochemistry explains normal function, disease mechanisms, diagnosis, and therapy.
- Laboratory "normal ranges" are biochemical statements.
- Drugs act on biochemical targets — enzymes, receptors, transporters, nucleic acids.
- Pharmacists apply biochemistry daily: lab interpretation, nutrition, interactions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A patient's report shows raised serum glucose. Using the four roles above, name one diagnostic and one therapeutic implication.
2. Why is biochemistry called the foundation subject for pharmacology? Give one concrete example.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Four contributions: normal function, disease explanation, diagnosis, therapy.
- Pharmacy sits on biochemistry: drug targets, lab data, nutrition, interactions.`,
      },
    ],
  },

  // ─────────────── TOPIC (Tier B) ───────────────
  {
    nodeId: 'metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'topic',
    title: 'Metabolism — Introduction to the Study of Intermediary Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Metabolism** is the sum of all enzyme-catalysed reactions in a living organism. The term **intermediary metabolism** narrows the focus to the reactions of small molecules — the intermediates that link the digestion of food to the final disposal of waste. It is conventionally divided into **catabolism** (breakdown, releasing energy) and **anabolism** (synthesis, consuming energy), which this topic introduces along with the major areas of metabolism, the common intermediates that connect different pathways, and the ways metabolism is regulated.

A helpful mental model is a city's road network: food molecules enter from digestion (import), catabolic routes converge toward energy production (the city's power stations), anabolic routes radiate outward to build cell material (construction sites), and regulatory traffic lights (hormones, enzyme control) keep the flow balanced. The remaining subtopics of this topic walk through that map in order.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Metabolism = all enzyme-catalysed reactions; intermediary metabolism = the small-molecule core.
- Two great divisions: catabolism (degrades, releases energy) and anabolism (builds, consumes energy).
- Pathways interconnect through shared intermediates; regulation keeps them balanced.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish metabolism from intermediary metabolism.
2. In one sentence each, define catabolism and anabolism, including their relationship to energy.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Metabolism = the whole reaction network; intermediary = the small-molecule part.
- Catabolism releases energy; anabolism uses it; regulation coordinates both.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A) ───────────────
  {
    nodeId: 'metabolism-overview',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Metabolism',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Metabolism** is the highly integrated network of enzyme-catalysed chemical reactions through which a cell acquires energy, transforms nutrients, eliminates waste, and builds its own structures. Three features define it.

**Integration.** Pathways are not isolated chains; they interlock. The carbon of glucose can end up in fat, the nitrogen of protein can end up in urea, and the same molecule — acetyl-CoA, as you will meet repeatedly — sits at the junction of carbohydrate, lipid, and amino-acid routes.

**Direction and purpose.** Every reaction serves either energy capture (catabolism) or biosynthesis and maintenance (anabolism), and the cell's energy currency **ATP** couples the two: catabolism generates ATP, anabolism spends it.

**Control.** Metabolism responds to the body's state — feeding, fasting, exercise, illness — through enzyme regulation and hormones. Without control, pathways would run wastefully in opposing directions at once.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Metabolism = integrated, enzyme-catalysed reaction network.
- ATP is the coupling currency between energy-releasing and energy-consuming routes.
- Metabolism is state-dependent: fed, fasting, exercising, and ill bodies metabolise differently.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can one molecule (such as acetyl-CoA) connect several different pathways?
2. Explain, using ATP, why catabolism and anabolism must be coordinated rather than run independently.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Metabolism: integrated network, ATP-coupled, state-responsive.
- Shared intermediates are the junctions of the network; regulation is the traffic control.`,
      },
    ],
  },

  // ─────────────── SUBTOPICS (Tier B) ───────────────
  {
    nodeId: 'catabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Metabolism — Catabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Catabolism** is the set of degradative pathways that break larger molecules into smaller ones, releasing free energy that the cell captures mainly as ATP and as reduced electron carriers (**NADH**, **FADH₂**).

Catabolism proceeds in **three stages**:

1. **Digestion** — large polymers (starch, proteins, triglycerides) are hydrolysed to their building blocks (monosaccharides, amino acids, fatty acids and glycerol) outside or at the edge of cells. No ATP is produced here.
2. **Conversion to central intermediates** — the building blocks are converted into a small set of common molecules, above all **acetyl-CoA**. Small amounts of ATP and NADH are generated (e.g. glycolysis).
3. **Terminal oxidation** — acetyl-CoA is oxidised in the **citric acid cycle**, and the captured electrons from NADH/FADH₂ are passed down the **electron transport chain** to oxygen, driving large-scale ATP synthesis (oxidative phosphorylation).

Because catabolism is convergent — many different food molecules funnel into the same central reactions — it is efficient: one terminal oxidative machinery serves carbohydrates, fats, and proteins alike.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Catabolism: degrades complex molecules → simpler ones, releasing energy captured as ATP, NADH, FADH₂.
- Three stages: digestion (no ATP) → central intermediates (acetyl-CoA) → citric acid cycle + electron transport chain.
- Convergent design: all major fuels feed one terminal oxidative system.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does digestion itself yield no ATP, and where does most ATP actually get made?
2. What is the central intermediate to which carbohydrate, fat, and protein catabolism all converge?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Catabolism = oxidative degradation, energy-yielding, three-stage, convergent on acetyl-CoA.
- Final ATP harvest happens in the electron transport chain using captured electrons.`,
      },
    ],
  },

  {
    nodeId: 'anabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Metabolism — Anabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Anabolism** is the set of biosynthetic pathways that construct complex molecules from simpler precursors, consuming energy — usually as ATP or the reduced carrier **NADPH** — and often using reducing power to build ordered structures.

Typical anabolic routes include: **protein synthesis** from amino acids, **glycogen synthesis (glycogenesis)** from glucose, **fatty-acid synthesis** from acetyl-CoA, and **gluconeogenesis**, the synthesis of glucose from non-carbohydrate precursors.

Anabolism is the mirror of catabolism in purpose but **not** simply its reversal: biosynthetic routes use different enzymes, often run in different cellular compartments (fatty-acid synthesis in the cytosol vs β-oxidation in mitochondria), and use different electron carriers (NADPH rather than NADH). These separate pathways are what make independent regulation possible — the cell can be building fat and breaking down glycogen at the same time without wasteful futile cycling.

Anabolism dominates in the **fed state** (nutrients abundant, insulin high) and during growth, tissue repair, and pregnancy.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Anabolism: builds complex molecules from simple precursors; consumes ATP and NADPH.
- Examples: protein synthesis, glycogenesis, fatty-acid synthesis, gluconeogenesis.
- Anabolic routes are not reverse catabolism — separate enzymes, compartments, and carriers (NADPH).
- Separate pathways allow independent control and prevent futile cycles.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the cell use NADPH, not NADH, for biosynthesis?
2. Give two structural differences between a synthetic pathway and the degradative pathway handling the same molecule.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Anabolism = energy-consuming biosynthesis; favoured in the fed state.
- Not a simple reversal: distinct enzymes, compartments, and reducing power (NADPH).`,
      },
    ],
  },

  {
    nodeId: 'functions-of-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Metabolism — Functions of Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Metabolism serves four functions for the organism:

1. **Energy acquisition and conversion.** Chemical energy in food is converted into usable cellular energy — ATP for immediate work, and storage molecules (glycogen, fat) for later demand.
2. **Synthesis of biomolecules.** Everything the cell is made of — proteins, nucleic acids, membranes, glycogen — is assembled from nutrient precursors by anabolic pathways.
3. **Degradation and recycling.** Damaged or surplus molecules are broken down; their components re-enter metabolism (amino acids from worn-out proteins are a prime example).
4. **Excretion of waste.** Metabolism disposes of what the body cannot keep — nitrogen from amino acids becomes **urea**, and the carbon skeletons leave as CO₂ and water.

These functions operate simultaneously and are matched to circumstances: after a meal the emphasis is synthesis and storage; during fasting it is mobilisation and controlled degradation; in sepsis or trauma both fuel demand and waste production rise sharply.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four functions: energy conversion, biosynthesis, recycling, waste excretion.
- ATP = immediate energy currency; glycogen and fat = storage forms.
- Nitrogen waste leaves as urea; carbon as CO₂ and H₂O.
- The dominant function shifts with physiological state (fed vs fasting vs illness).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Match each function to a concrete example: (a) storing energy after a large meal; (b) removing nitrogen from the body.
2. Why must recycling and biosynthesis both be continuous processes in a healthy adult?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Metabolism: energises, builds, recycles, and disposes.
- Which function dominates depends on the body's current state.`,
      },
    ],
  },

  {
    nodeId: 'intermediary-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Intermediary or Intermediate Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Intermediary (intermediate) metabolism** is the portion of metabolism dealing with the small-molecule intermediates — molecules of roughly 50 carbon atoms or fewer that are formed, transformed, and consumed inside cells. It excludes digestion (which occurs outside cells) and excludes the synthesis of very large polymers, focusing instead on the reactions that convert one small molecule into another.

The concept matters because these intermediates form a **common currency system**: a limited set of molecules (glucose-6-phosphate, pyruvate, acetyl-CoA, oxaloacetate, α-ketoglutarate, and a handful of others) participate in many pathways at once. Their concentrations are kept within narrow limits, and flux through any pathway is signalled by changes in these shared pools.

Studying intermediary metabolism therefore means studying: (1) the individual pathways, (2) the intersections where they share intermediates, and (3) the regulation that allocates each intermediate among competing routes. The remaining lessons of this topic follow exactly that structure.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Intermediary metabolism = reactions of small intracellular intermediates (not digestion, not polymers).
- A small set of shared intermediates (pyruvate, acetyl-CoA, oxaloacetate…) links many pathways.
- Intermediates are kept in narrow concentration ranges; flux changes, not pool size, carry the signal.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is digestion not part of intermediary metabolism, even though it supplies its raw materials?
2. Name two central intermediates and one pathway each feeds.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Intermediary metabolism: the small-molecule reaction web inside cells.
- Shared intermediates are the currency; regulation sets the exchange rates.`,
      },
    ],
  },

  {
    nodeId: 'major-areas-of-intermediary-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Major Areas of Intermediary Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Intermediary metabolism is organised into three great areas, one per fuel class, plus the integrative cycle that connects them:

**Carbohydrate metabolism** — the fate of glucose and other sugars: glycolysis, glycogenesis and glycogenolysis, gluconeogenesis, the pentose phosphate pathway, and blood-glucose regulation. Carbohydrate is the body's preferred short-term fuel, and blood glucose is its tightly defended currency.

**Protein (amino-acid) metabolism** — the turnover of body protein, the transamination and deamination reactions that strip nitrogen from amino acids, urea synthesis, and the use of carbon skeletons for energy or glucose. Proteins also carry out virtually all catalytic and structural work, so their metabolism is continuous and tightly balanced.

**Lipid (fat) metabolism** — digestion and transport of fat, fatty-acid activation and β-oxidation, ketone-body formation, cholesterol and lipoproteins, and fat storage and mobilisation. Fat is the body's major long-term energy store.

The **citric acid (TCA) cycle** sits beneath all three: each area ultimately delivers acetyl-CoA or cycle intermediates into it for terminal oxidation. The upcoming topics treat each area in turn.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three fuel-specific areas: carbohydrate, protein/amino-acid, lipid metabolism — plus the TCA cycle as the common terminal oxidiser.
- Carbohydrate = short-term fuel and blood glucose; fat = long-term storage; protein = structure/function + nitrogen handling.
- All areas converge on acetyl-CoA and the citric acid cycle.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which area dominates during a 12-hour fast, and why?
2. What single junction molecule connects all three areas to the TCA cycle?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Carbohydrate, protein, lipid: three areas, one common terminal cycle.
- Each area has its own topic later in this course.`,
      },
    ],
  },

  {
    nodeId: 'carbohydrate-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Major Areas — Carbohydrate Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Carbohydrate metabolism handles the body's glucose economy. Its major routes:

- **Glycolysis** — cytosolic breakdown of one glucose into two pyruvate, yielding a small net ATP and NADH; the only pathway that can generate ATP without oxygen.
- **Glycogenesis / glycogenolysis** — storage of glucose as glycogen (mainly liver and muscle) and its release again when needed.
- **Gluconeogenesis** — synthesis of new glucose from non-carbohydrate precursors (lactate, glycerol, amino acids), essential during fasting.
- **Pentose phosphate pathway** — generates NADPH for biosynthesis and antioxidant defence, plus ribose for nucleotides.
- **Blood-glucose regulation** — hormonal control (insulin lowers, glucagon raises) keeping glucose within safe limits.

Tissue division of labour matters: the **brain** depends almost entirely on glucose in normal conditions; **red blood cells** can only use glycolysis (no mitochondria); the **liver** buffers blood glucose for everyone else; **muscle** uses its glycogen only for itself. These roles recur throughout the carbohydrate topic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Five routes: glycolysis, glycogenesis/glycogenolysis, gluconeogenesis, pentose phosphate pathway, glucose regulation.
- Glycolysis is the oxygen-independent ATP source; RBCs depend on it exclusively.
- Liver manages blood glucose; muscle keeps its glycogen for local use; brain is glucose-dependent.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can red blood cells not oxidise fat or run the citric acid cycle?
2. A patient has not eaten for 14 hours. Which two carbohydrate routes maintain the blood glucose, and in which organ?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Carbohydrate metabolism = glucose supply, storage, synthesis, and control.
- Tissue specialisation (brain, RBC, liver, muscle) is the recurring theme.`,
      },
    ],
  },

  {
    nodeId: 'protein-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Major Areas — Protein Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Protein metabolism covers the life cycle of amino acids in the body.

**Input.** Dietary protein is digested to amino acids and absorbed; body proteins are also continuously broken down, releasing their amino acids into the **amino-acid pool** — a shared intracellular and extracellular inventory used for resynthesis or degradation.

**Use.** Amino acids are preferentially used for **protein synthesis** and other nitrogen-containing molecules (haem, neurotransmitters, nucleotides). Unlike carbohydrate and fat, the body does not store protein as a fuel reserve — muscle protein functions as a structural/functional tissue first and an emergency amino-acid source second.

**Nitrogen disposal.** Because excess amino acids cannot be stored, their **amino groups** are removed by transamination and oxidative deamination, converted to ammonia, detoxified in the liver as **urea**, and excreted by the kidneys. The carbon skeletons enter central metabolism — some yield glucose (glucogenic), some yield ketone bodies or acetyl-CoA (ketogenic).

This area links directly to the protein-metabolism topic later in the course, where each step is treated in detail.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Amino-acid pool = dietary + recycled amino acids; used for synthesis first, energy second.
- No dedicated protein store — muscle is borrowed in catabolic states.
- Nitrogen → ammonia → urea (liver) → urine (kidneys); carbon skeletons feed central metabolism.
- Glucogenic vs ketogenic fates depend on the skeleton's entry point.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why must the body excrete nitrogen rather than oxidise it like carbon?
2. What does it mean, metabolically, that "the body has no protein store"?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Protein metabolism = pool → synthesis or degradation → nitrogen out as urea.
- Carbon skeletons join carbohydrate/lipid routes; nitrogen leaves as urea.`,
      },
    ],
  },

  {
    nodeId: 'lipid-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Major Areas — Fat Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Lipid metabolism manages the body's most energy-dense fuel and its membrane building blocks.

**Transport and uptake.** Because fat is water-insoluble, it travels in blood packaged as **lipoproteins** (chylomicrons carrying dietary fat; VLDL, LDL, HDL handling endogenous lipid traffic). Digestion and absorption of fat is a specialised process requiring bile salts and micelles.

**Storage and mobilisation.** Surplus fuel is stored as **triacylglycerol** in adipose tissue — roughly nine kilocalories per gram, anhydrous and compact. When energy is needed, lipolysis releases **fatty acids and glycerol** into the circulation.

**Oxidation.** Fatty acids are activated, shuttled into mitochondria by the **carnitine shuttle**, and oxidised by **β-oxidation**, which cleaves two-carbon units at a time to yield acetyl-CoA, NADH, and FADH₂ — a highly efficient ATP source for heart, resting muscle, and most tissues during fasting.

**Special products.** The liver converts excess acetyl-CoA into **ketone bodies** during prolonged fasting; **cholesterol** serves membranes, bile acids, and steroid-hormone synthesis. The lipid topic covers each of these in sequence.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fat = ~9 kcal/g; stored anhydrous in adipose triacylglycerol — the major energy reserve.
- Water-insoluble: blood transport requires lipoproteins; digestion requires bile.
- β-oxidation cleaves 2-carbon units → acetyl-CoA + NADH + FADH₂ (mitochondrial).
- Liver exports ketone bodies in fasting; cholesterol feeds membranes, bile acids, steroids.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can fatty acids not simply diffuse through blood plasma to their target tissues?
2. Heart muscle prefers fatty acids at rest. In energy terms, what makes fat oxidation so efficient?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Fat metabolism: package (lipoproteins) → store (adipose) → mobilise → β-oxidise.
- Ketone bodies and cholesterol are the liver's specialist outputs.`,
      },
    ],
  },

  {
    nodeId: 'major-intermediates',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Major Metabolic Intermediates',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Six molecules form the junctions of intermediary metabolism; recognising them turns dozens of separate pathways into one connected map.

**Glucose-6-phosphate** — gateway of glucose: entry point to glycolysis, glycogen synthesis, and the pentose phosphate pathway; product of glycogenolysis and gluconeogenesis.

**Pyruvate** — the end of glycolysis in the cytosol; can be reduced to **lactate** (anaerobic), transaminated to **alanine**, carboxylated to **oxaloacetate** (gluconeogenesis), or oxidatively decarboxylated to acetyl-CoA.

**Acetyl-CoA** — the two-carbon crossroads: from carbohydrate (pyruvate oxidation), fat (β-oxidation), and ketogenic amino acids; feeds the citric acid cycle, fatty-acid and cholesterol synthesis, and ketone-body formation.

**Oxaloacetate** — TCA-cycle intermediate that also starts gluconeogenesis and replenishes the cycle (**anaplerosis**, from pyruvate).

**α-Ketoglutarate and succinyl-CoA** — TCA intermediates that receive carbon skeletons from many amino acids.

**ATP and NADPH** — not carbon molecules, but the universal energy and reducing-power currencies that link all routes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Six junctions: glucose-6-phosphate, pyruvate, acetyl-CoA, oxaloacetate, α-ketoglutarate/succinyl-CoA, plus ATP/NADPH.
- Pyruvate's four fates: lactate, alanine, oxaloacetate, acetyl-CoA.
- Acetyl-CoA has no gluconeogenic route to net glucose — a recurring exam fact.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List pyruvate's four metabolic fates and one condition favouring each.
2. Why can fatty acids yield energy but not net new glucose, in terms of acetyl-CoA?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Learn the junction molecules, and every pathway becomes a route on one map.
- Acetyl-CoA: the great crossroads — energy, synthesis, ketones; never net glucose.`,
      },
    ],
  },

  {
    nodeId: 'tricarboxylic-acid-cycle',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'The Tricarboxylic Acid Cycle (TCA Cycle)',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **tricarboxylic acid (TCA) cycle** — also called the citric acid or Krebs cycle — is the mitochondrial hub where acetyl-CoA is oxidised completely to CO₂, capturing energy as NADH, FADH₂, and one GTP.

**Entry and the eight steps (skeleton).** Acetyl-CoA (2C) condenses with **oxaloacetate** (4C) → **citrate** (6C). Two successive decarboxylations strip off the two carbons as CO₂, with reductions of NAD⁺ at each: citrate → isocitrate → **α-ketoglutarate** (5C) → **succinyl-CoA** (4C). Succinyl-CoA → succinate generates the cycle's **GTP** (substrate-level phosphorylation). Succinate → fumarate reduces **FAD** to FADH₂; fumarate → malate; malate → **oxaloacetate** reduces NAD⁺ again and closes the cycle.

**Per acetyl-CoA:** 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂. The NADH and FADH₂ then deliver their electrons to the electron transport chain, where the bulk of ATP is made. Because oxaloacetate is regenerated, the cycle runs catalytically — it burns acetyl carbons but must be **replenished** (anaplerosis, chiefly pyruvate carboxylase making oxaloacetate) to keep turning.

The cycle is **amphibolic**: it oxidises fuels (catabolic) *and* supplies intermediates for gluconeogenesis, amino-acid synthesis, and haem synthesis (anabolic).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Location: mitochondrial matrix. Acetyl-CoA + oxaloacetate → citrate; 8 steps regenerate oxaloacetate.
- Per acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂.
- Irreversible citrate synthase step; regulation via NADH/NAD⁺ and ADP/ATP ratio.
- Anaplerosis (pyruvate → oxaloacetate) keeps the cycle stocked.
- Amphibolic: oxidises fuels and donates intermediates to biosynthesis.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Where do the cycle's two CO₂ molecules come from — the incoming acetyl carbons or the oxaloacetate? (Think carefully about one full turn.)
2. Why does a cell lacking oxaloacetate stop oxidising fat even though acetyl-CoA is plentiful?
3. Name the one substrate-level phosphorylation of the cycle and its product.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- TCA = mitochondrial acetyl-CoA oxidiser: 3 NADH + FADH₂ + GTP per turn.
- Oxaloacetate is catalytic and must be replenished (anaplerosis).
- Amphibolic hub connecting all three fuel areas to electron transport.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A) ───────────────
  {
    nodeId: 'regulation-of-metabolism',
    courseId: 'bch-201',
    topicId: 'metabolism',
    nodeType: 'subtopic',
    title: 'Regulation of Metabolism',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Metabolic flux is controlled at three levels, from fast to slow.

**1. Substrate availability (seconds).** A pathway cannot run faster than its substrate supply — glucose entry, oxygen delivery, and mobilised fatty acids set upper limits immediately.

**2. Enzyme-level control (seconds to minutes).** Allosteric effectors sense the cell's energy state: **ATP and NADH inhibit** energy-producing flux; **ADP and AMP stimulate** it. Rate-limiting enzymes of committed steps are the usual targets (e.g. phosphofructokinase-1 in glycolysis). Covalent modification — chiefly phosphorylation cascades triggered by hormones — switches whole pathways on or off at once.

**3. Hormonal coordination (minutes to hours).** **Insulin** signals the fed state: uptake, glycolysis, glycogenesis, fatty-acid synthesis. **Glucagon** (and adrenaline) signal fasting: glycogenolysis, gluconeogenesis, lipolysis, ketogenesis. Slower still, gene expression adjusts the *amounts* of enzymes over hours to days.

The organising principle: opposing pathways (glycolysis/gluconeogenesis, glycogenesis/glycogenolysis, lipolysis/fatty-acid synthesis) are regulated **reciprocally** so both never run flat out at once — preventing wasteful futile cycling.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three levels: substrate availability → enzyme control (allosteric + phosphorylation) → hormones → gene expression.
- Energy sensors: ATP/NADH inhibit catabolism; ADP/AMP stimulate it.
- Insulin = fed state; glucagon/adrenaline = fasting state.
- Opposing pathways are regulated reciprocally to avoid futile cycles.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. An exercising muscle has high AMP and Ca²⁺. Predict the direction of glycogen metabolism and name the control mechanism involved.
2. Why must glycolysis and gluconeogenesis never be maximally active in the same cell at the same time?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Regulation: fast (substrate), faster-smart (enzymes), systemic (hormones), slow (genes).
- Reciprocal control of opposing pathways is the design principle to remember.`,
      },
    ],
  },
];
