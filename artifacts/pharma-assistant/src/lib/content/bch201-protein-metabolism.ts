import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 4: Protein Metabolism.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; clinical-orientation subtopics (Nitrogen Balance, Ammonia
 * Metabolism) A; descriptive subtopics B.
 */

export const bch201ProteinMetabolismLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'protein-metabolism-topic',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'topic',
    title: 'Protein Metabolism',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Protein metabolism is the sum of all processes that handle dietary and body protein: breaking proteins down to amino acids, using amino acids to build the body's own proteins, and disposing of the **nitrogen** that amino acids carry. Unlike fat and carbohydrate stores, the body has no dedicated "protein depot" — every protein is in use, so the amino acid pool is constantly renewed by **turnover**: proteins are continuously synthesised and continuously degraded.

The topic follows one molecule through its journey. Dietary protein is digested to amino acids, absorbed into a common **amino acid pool**, and then faces three fates: (1) synthesis of new body protein, (2) conversion to other nitrogenous molecules (purines, creatine, haem, neurotransmitters), or (3) loss of its amino group via **transamination** and **oxidative deamination**, after which the nitrogen is detoxified to **urea** in the liver and excreted by the kidney, while the carbon skeleton enters central metabolism.

Because nitrogen must be balanced — intake matching output for a healthy adult — this topic also introduces **nitrogen balance**, the clinical yardstick that tells you whether a patient is growing, maintaining, or losing body protein. Everything in this session exists to answer one question: how does the body use protein and safely get rid of its nitrogen?`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Body protein is in dynamic equilibrium: synthesis and degradation run continuously (turnover).
- The amino acid pool is fed by diet, synthesis, and protein degradation; it is drained by synthesis, conversion, and catabolism.
- Nitrogen disposal: transamination → oxidative deamination → urea cycle (liver) → urine.
- The carbon skeleton of amino acids feeds the TCA cycle or gluconeogenesis/ketogenesis.
- Nitrogen balance measures net protein status: positive (growth/pregnancy), zero (healthy adult), negative (illness, starvation, injury).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Protein metabolism explains several drug behaviours: levodopa competes with large neutral amino acids for intestinal absorption (high-protein meals reduce its effect), and methotrexate exploits the folate-dependent one-carbon reactions of amino acid metabolism. In patients with liver failure, the failing urea cycle makes nitrogen-containing drugs and high-protein diets hazardous — knowledge a pharmacist uses when advising on nutrition and dosing.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the body need a continuous supply of dietary protein even when it is not growing?
2. Trace the path of the amino group of a dietary amino acid from the intestine to urinary excretion.
3. What does "negative nitrogen balance" mean, and name two situations that cause it.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Protein metabolism = digestion → amino acid pool → synthesis or nitrogen disposal.
- Transamination + oxidative deamination release nitrogen as ammonia.
- The liver converts ammonia to urea; the kidney excretes it.
- Nitrogen balance is the clinical measure of whole-body protein status.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'protein-turnover',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Protein Turnover',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Protein turnover** is the simultaneous, continuous cycle of protein degradation and protein synthesis in every living cell. In a healthy adult the two processes are equal: about 300–400 g of body protein is broken down and resynthesised each day, yet the total protein mass stays constant. Only the difference between the two rates — driven by diet and disease — changes body protein.

Turnover is not wasteful. It serves three purposes. First, **quality control**: damaged, misfolded, or obsolete proteins are removed before they accumulate (the proteasome digests ubiquitin-tagged proteins; lysosomes digest material taken into the cell). Second, **regulation**: an enzyme's amount can be changed rapidly by speeding its degradation — a control point hormones exploit. Third, **adaptation**: enzyme patterns shift when diet or environment changes, e.g. intestinal enzymes adjust to a change from a high-protein to a low-protein diet.

The rate of turnover differs enormously between proteins. Structural proteins such as collagen last months; many metabolic enzymes last days; regulatory proteins such as some transcription factors survive minutes. In the fasting state, degradation temporarily outpaces synthesis so amino acids are released for gluconeogenesis — the body effectively cannibalises dispensable protein to keep blood glucose up.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Turnover = continuous degradation + synthesis; in adults the two rates are equal.
- ~300–400 g body protein recycled daily despite zero net change.
- Main disposal systems: ubiquitin–proteasome pathway and lysosomal (autophagy) digestion.
- Half-lives vary from minutes (regulatory proteins) to months (collagen).
- In fasting, degradation exceeds synthesis to supply amino acids for gluconeogenesis.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The proteasome is itself a drug target: bortezomib, used in multiple myeloma, blocks proteasomal degradation so abnormal proteins accumulate and kill the cancer cell. Corticosteroids, by contrast, accelerate muscle protein breakdown — the molecular basis of steroid-induced muscle wasting that pharmacists counsel patients about.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define protein turnover and state why it continues in a non-growing adult.
2. Give two reasons why protein degradation is beneficial rather than wasteful.
3. Why does protein turnover rate differ between collagen and a metabolic enzyme?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Turnover = balanced degradation + synthesis (~300–400 g/day in adults).
- Purposes: quality control, metabolic regulation, adaptation.
- Systems: ubiquitin–proteasome and lysosomes.
- Rate differs per protein; fasting tips the balance toward degradation.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acid-pool',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Amino Acid Pool',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **amino acid pool** is the small, mobile collection of free amino acids distributed in body fluids — roughly 100 g in an adult, only about 1% of total body protein, yet it supplies every synthetic and catabolic demand. Think of it as a reservoir: level steady, contents flowing through constantly.

**Inflows** are three: (1) **dietary protein** digested and absorbed in the intestine; (2) **synthesis of non-essential amino acids** from carbon skeletons and a nitrogen source; (3) **breakdown of body protein** during normal turnover. **Outflows** are four: (1) synthesis of **body proteins**; (2) synthesis of **non-protein nitrogenous compounds** (purines, pyrimidines, haem, creatine, neurotransmitters, glutathione); (3) **catabolism** — loss of the amino group followed by oxidation of the carbon skeleton; (4) small losses converted to **urea and other excreted nitrogen**.

In a healthy adult all inflows equal all outflows — the pool is in **dynamic equilibrium**. This is why individual amino acids barely differ in plasma level from day to day. Note two practical consequences: the pool does *not* distinguish the origin of an amino acid (dietary and recycled molecules are chemically identical), and **essential amino acids** can enter the pool only from the diet — their absence quickly drains the pool and halts protein synthesis, whatever the total calorie intake.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pool size ~100 g free amino acids in an adult (~1% of body protein), turnover continuous.
- Inflows: diet, de novo synthesis (non-essential), body protein breakdown.
- Outflows: body protein synthesis, non-protein nitrogen compounds, catabolism, excretion.
- Dynamic equilibrium: inflow = outflow in a healthy adult.
- Essential amino acids must come from the diet — synthesis cannot refill the pool.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Parenteral nutrition formulas are designed around the pool concept: they supply a balanced mix including all nine essential amino acids because the pool cannot synthesise them. Amino acid–related inborn errors (e.g. phenylketonuria) are managed by limiting the amino acid that cannot be cleared — proof that controlling pool inflow treats pool disease.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the three inflows and four outflows of the amino acid pool.
2. Why do dietary amino acids and amino acids released from body protein have identical metabolic fate?
3. A patient eats adequate calories but lacks one essential amino acid. What happens to body protein synthesis, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Amino acid pool: ~100 g, steady level, rapid flow-through.
- 3 in (diet, synthesis, degradation) ↔ 4 out (protein, N-compounds, catabolism, excretion).
- Essential amino acids enter only from diet; pool balance depends on them.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'protein-synthesis-overview',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Protein Synthesis — Overview',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Protein synthesis (translation) converts the information in **mRNA** into a chain of amino acids. The recipe lives in DNA, is transcribed into messenger RNA, and is read by the **ribosome** three bases at a time; each **codon** specifies one amino acid through **transfer RNA** molecules charged with their matching amino acid by **aminoacyl-tRNA synthetases**.

The process runs in three stages. **Initiation**: the small ribosomal subunit assembles on mRNA at the start codon (AUG) with the initiator methionyl-tRNA, then the large subunit joins. **Elongation**: the ribosome matches each successive codon with the correct charged tRNA and forms a **peptide bond** between amino acids; the chain grows from its N-terminus to its C-terminus at a rate of several amino acids per second. **Termination**: a **stop codon** (UAA, UAG, or UGA) has no tRNA; a release factor instead frees the completed polypeptide.

Elongation is energy-hungry: each peptide bond consumes the equivalent of ~4 high-energy phosphate bonds (tRNA charging with ATP, plus two GTP per elongation cycle), which is why active protein synthesis is a major metabolic expense. After release, the new chain is **folded** (often with chaperone proteins) and may be chemically modified — disulphide bridges formed, sugars attached, signal sequences removed — before it becomes a functional protein.

Three practical requirements follow: all **essential amino acids** must be present at the moment of synthesis (one missing amino acid stalls the ribosome), sufficient **energy** (ATP/GTP) must be available, and the correct **genetic message** must be intact. Any failure of these three shows up as impaired protein synthesis — the biochemical core of malnutrition, and of antibiotics such as tetracycline and chloramphenicol that selectively block bacterial ribosomes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Flow: DNA → transcription → mRNA → translation on ribosomes.
- Codon (3 bases on mRNA) → amino acid via tRNA; start AUG, stops UAA/UAG/UGA.
- Stages: initiation → elongation (peptide bonds, N→C direction) → termination.
- Cost: ~4 ATP-equivalents per peptide bond (tRNA charging + GTPs).
- Requirements: all amino acids (esp. essential), energy, intact message.
- Post-translational modification completes function: folding, disulphides, glycosylation.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Many antibiotics exploit the differences between bacterial and human ribosomes: tetracyclines block tRNA binding to the bacterial ribosome, aminoglycosides cause mistranslation, chloramphenicol blocks peptide-bond formation, macrolides block ribosome movement. Selective toxicity — attacking protein synthesis only in the microbe — is a foundational principle of antimicrobial pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the roles of mRNA, tRNA, and the ribosome in translation.
2. Name the three stages of protein synthesis and what happens in each.
3. Why does a deficiency of a single essential amino acid reduce synthesis of body proteins overall?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Translation reads mRNA codons via tRNA on the ribosome; AUG starts, stop codons end.
- Initiation → elongation → termination; peptide bonds form N→C.
- Energy-expensive (~4 ATP equivalents per bond); needs all amino acids present.
- Antibiotics selectivity targets bacterial ribosomes.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'nitrogen-balance',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Nitrogen Balance',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Nitrogen balance** is the clinical and nutritional measure of whole-body protein status. Protein is the only major nutrient carrying nitrogen (≈16% by weight), so tracking nitrogen in and out tracks protein metabolism directly.

$$\\text{Nitrogen balance} = \\text{N}_2 \\text{ intake} - \\text{N}_2 \\text{ output}$$

Intake is dietary protein nitrogen (protein (g) ÷ 6.25 gives nitrogen (g)). Output is mainly urinary urea, with smaller losses in faeces, skin, sweat, and hair. Three states matter clinically.

**Zero (equilibrium) balance**: intake = output. The healthy, non-growing adult maintains body protein mass — synthesis matches degradation.

**Positive balance**: intake > output. Nitrogen is retained as new body protein: growth in children and adolescents, pregnancy, recovery from illness, muscle building with training, or action of anabolic hormones (insulin, growth hormone, testosterone).

**Negative balance**: output > intake. The body is *losing* protein: inadequate dietary protein, **starvation or fasting**, severe illness, major surgery, burns, trauma, uncontrolled diabetes, or hyperthyroidism. Prolonged negative balance causes wasting, impaired wound healing, and weakened immunity — a key concern in hospitalised patients.

Nitrogen balance has limits: it says nothing about *where* protein is being lost (muscle vs plasma proteins), measurements need accurate urine collection over days, and illness changes the output side. Even so, it remains the standard tool for judging protein requirements in nutrition therapy.`,
      },
      {
        kind: 'FORMULAS',
        body: `- Nitrogen intake from protein: $\\text{N}_2\\ (\\text{g}) = \\dfrac{\\text{protein (g)}}{6.25}$ (protein is ~16% nitrogen).
- Balance: $\\text{balance} = \\text{N}_2\\ \\text{intake} - (\\text{urinary N}_2 + \\text{other losses})$.

**Worked example.** A patient eats 80 g protein/day and excretes 10 g nitrogen in urine plus 2 g in other losses.
- Nitrogen intake: $80 \\div 6.25 = 12.8$ g/day.
- Nitrogen output: $10 + 2 = 12$ g/day.
- Balance: $12.8 - 12 = +0.8$ g/day → **slightly positive**, appropriate for recovery.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Balance = N intake − N output; protein ÷ 6.25 = nitrogen grams.
- Zero balance: healthy adult. Positive: growth, pregnancy, recovery, anabolic hormones.
- Negative: starvation, trauma, burns, sepsis, uncontrolled diabetes, hyperthyroidism.
- Urinary urea is the main output measured; faecal/skin losses are smaller.
- Persistent negative balance → wasting, poor healing, immune impairment.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists interpret nitrogen balance when recommending nutrition support: post-operative patients in negative balance need increased protein (orally, enterally, or parenterally). Anabolic steroids and growth hormone create positive balance but with significant risks — counselling hinges on the same balance concept.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define nitrogen balance and state the equation used.
2. Classify each as positive, zero, or negative balance: a growing child; an adult on adequate protein; a patient with 40% burns.
3. A patient takes 60 g protein/day and loses 12 g N/day. Calculate the balance and interpret it.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- N balance = intake − output; protein/6.25 converts to nitrogen.
- Positive = retaining protein; negative = losing protein.
- Negative balance states: starvation, trauma, burns, sepsis, uncontrolled diabetes.
- Clinical tool for nutrition support decisions.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'transamination',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Transamination',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Transamination** is the first step of amino acid catabolism for most amino acids: the transfer of an amino group from an amino acid to an α-keto acid. No nitrogen is yet excreted — it is simply moved onto a carrier that can deliver it to the urea cycle.

The general reaction:

$$\\text{Amino acid}_1 + \\alpha\\text{-keto acid}_2 \\rightleftharpoons \\alpha\\text{-keto acid}_1 + \\text{Amino acid}_2$$

The classic example uses **glutamate** as the nitrogen hub:

- **Alanine + α-ketoglutarate ⇌ pyruvate + glutamate** (alanine aminotransferase, ALT)
- **Aspartate + α-ketoglutarate ⇌ oxaloacetate + glutamate** (aspartate aminotransferase, AST)

Both enzymes use the coenzyme **pyridoxal phosphate (PLP)**, derived from vitamin B6. PLP accepts the amino group from the amino acid (forming pyridoxamine phosphate) and then hands it to the α-keto acid — a shuttle mechanism that also explains why B6 deficiency disturbs amino acid metabolism broadly.

Two enzymes dominate clinical chemistry. **ALT** is more specific to the liver; **AST** occurs in liver, heart, skeletal muscle, and red cells. When cells are damaged, these enzymes leak into plasma: elevated ALT/AST is the standard signal of hepatocyte injury (hepatitis, drug toxicity, ischaemia). This is why transamination, an apparently abstract reaction, is one of the most requested blood tests in medicine.

Most amino acids can transaminate, but **lysine, threonine, proline, and hydroxyproline** are notable exceptions. The products — glutamate and aspartate — feed nitrogen directly into the urea cycle, which is why these two amino acids sit at the centre of nitrogen disposal.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Transamination: amino group transferred from amino acid to α-keto acid; reversible.
- Coenzyme: pyridoxal phosphate (vitamin B6).
- Central players: ALT (alanine ⇌ pyruvate) and AST (aspartate ⇌ oxaloacetate).
- Glutamate is the nitrogen collector; α-ketoglutarate the acceptor.
- Exceptions that do not transaminate: lysine, threonine, proline, hydroxyproline.
- Plasma ALT/AST elevation = cell damage (especially liver).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every hepatotoxic drug — paracetamol overdose, isoniazid, statins causing muscle injury — announces itself through rising transaminases. Pharmacists monitoring patients on these drugs interpret ALT/AST patterns: ALT-predominant rises point to liver, AST-predominant rises can reflect muscle damage instead. Vitamin B6 (pyridoxine) is given with isoniazid partly to protect PLP-dependent reactions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the general transamination reaction and name its coenzyme.
2. Why are ALT and AST called "aminotransferases", and what does an elevated plasma level usually indicate?
3. Which two amino acids serve as the main nitrogen collectors for the urea cycle, and through which reactions?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Transamination moves –NH₂ onto α-keto acids (PLP-dependent, reversible).
- ALT/AST are the diagnostic aminotransferases of liver and muscle injury.
- Glutamate becomes the collection point of amino nitrogen.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'oxidative-deamination',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Oxidative Deamination',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Transamination only *moves* nitrogen; **oxidative deamination** actually *releases* it as free **ammonia (NH₃/NH₄⁺)**. The main enzyme is **glutamate dehydrogenase (GDH)** in the mitochondrial matrix, acting on glutamate — the amino acid that transamination loads with nitrogen from all the others.

$$\\text{Glutamate} + \\text{NAD(P)}^+ + \\text{H}_2\\text{O} \\rightarrow \\alpha\\text{-ketoglutarate} + \\text{NH}_4^+ + \\text{NAD(P)H} + \\text{H}^+$$

The reaction is reversible — it runs toward glutamate synthesis when ammonia is plentiful and energy is high, and toward ammonia release when nitrogen must be disposed of. The α-ketoglutarate released re-enters the TCA cycle, so glutamate serves as a revolving door between amino acid nitrogen and central carbon metabolism.

GDH is special: it can use either NAD⁺ or NADP⁺, and it is allosterically regulated — **ADP and GDP activate** it (energy demand → free amino acids for fuel), while **GTP and ATP inhibit** it (energy sufficiency → don't burn amino acids). This couples nitrogen disposal to the cell's energy state.

A second route matters for specific amino acids: **L-amino acid oxidases** and **D-amino acid oxidases** (liver and kidney, FAD-linked) deaminate amino acids directly, with lower capacity. In the kidney, glutaminase deamidates glutamine to release ammonia used to buffer urine acid — a renal, not hepatic, deamination with a completely different purpose (acid–base control, reviewed in the Ammonia Metabolism lesson).

Combining transamination with oxidative deamination gives the body a clean two-step: nitrogen is gathered from dozens of amino acids onto glutamate, then freed from glutamate alone as ammonia for urea synthesis.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Oxidative deamination releases NH₄⁺ from glutamate via glutamate dehydrogenase (GDH).
- Products: α-ketoglutarate (→ TCA cycle) + NH₄⁺ + NAD(P)H.
- GDH uses NAD⁺ or NADP⁺; activated by ADP/GDP, inhibited by ATP/GTP.
- Reversible: also synthesises glutamate when ammonia is available.
- Two-step logic: transamination (collect N on glutamate) → deamination (release NH₄⁺).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Because GDH links nitrogen disposal to energy status, states of high ATP (e.g. after a large carbohydrate meal) favour amino acid *storage* over burning, while fasting favours deamination and gluconeogenesis. Drugs that shift metabolism — like glucocorticoids in high dose — effectively push this balance toward nitrogen loss, one reason long-term steroid therapy wastes muscle.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast transamination and oxidative deamination in terms of what happens to the amino group.
2. Write the GDH reaction and name its cofactors and allosteric regulators.
3. Why is it efficient that nearly all amino nitrogen funnels through glutamate before deamination?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Oxidative deamination = glutamate → α-ketoglutarate + NH₄⁺ (GDH, NAD(P)⁺).
- Regulated by energy charge: ADP/GDP on, ATP/GTP off.
- Transamination gathers N onto glutamate; GDH releases it as ammonia for the urea cycle.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'ammonia-metabolism',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Ammonia Metabolism',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Ammonia is produced continuously — from oxidative deamination, from the intestine (bacterial urease splits urea back to NH₃, plus glutaminase in enterocytes), from kidney and muscle — yet blood ammonia stays very low (roughly 10–50 μmol/L) because it is **toxic**: free ammonia raises intracellular pH, depletes α-ketoglutarate (glutamate synthesis traps NH₃), and impairs the TCA cycle. The brain, which cannot replace TCA intermediates easily, is the first organ to fail — hence the confusion and coma of **hyperammonaemia**.

Three systems keep ammonia safe.

**1. The urea cycle (liver)** — the dominant disposal route, converting 2 nitrogen (one from free NH₃, one from aspartate) plus CO₂ into **urea**, which is non-toxic, water-soluble, and excreted in urine. The liver is the only organ with the complete cycle; this is why liver failure raises blood ammonia.

**2. The glutamine synthetase trap** — in muscle, brain, and liver cytosol:

$$\\text{Glutamate} + \\text{NH}_4^+ + \\text{ATP} \\xrightarrow{\\text{glutamine synthetase}} \\text{glutamine} + \\text{ADP} + \\text{P}_i$$

Glutamine is the **non-toxic transport form** of ammonia in blood. It carries nitrogen to the kidney (for acid buffering via glutaminase) and to the liver/intestine for processing.

**3. The glucose–alanine cycle (muscle–liver)** — muscle transaminates pyruvate to **alanine**, which travels to the liver, donates its nitrogen (→ urea), and its pyruvate carbon becomes glucose that returns to muscle. Nitrogen and carbon travel in opposite directions, converting muscle waste into hepatic urea + circulating fuel.

**Clinical core:** when the liver's urea cycle fails (cirrhosis, fulminant hepatitis, inherited enzyme defects), ammonia accumulates → **hepatic encephalopathy** (flapping tremor, confusion, coma). Management is biochemical: reduce ammonia production and increase its escape — lactulose (acidifies colon, trapping NH₄⁺ and expelling it), low-protein or branched-chain-enriched feeding, and rifaximin (reduces ammonia-producing gut bacteria).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ammonia is toxic (brain most sensitive); blood levels kept very low.
- Main disposal: liver urea cycle → urea → urine.
- Glutamine synthetase: glutamate + NH₄⁺ + ATP → glutamine (non-toxic transport).
- Glucose–alanine cycle: muscle N → liver for urea; carbon → glucose.
- Hyperammonaemia causes hepatic encephalopathy; managed by lactulose, diet, rifaximin.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Lactulose and rifaximin are standard hepatic encephalopathy therapy — pure biochemistry turned into pharmacology. Valproate can cause hyperammonaemia even with normal liver enzymes; pharmacists flag unexplained drowsiness on valproate. Barbiturates and other sedatives act synergistically with ammonia's brain effects, so dosing is cautious in liver disease.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is ammonia dangerous, and why does the brain suffer first in hyperammonaemia?
2. Describe two non-urea-cycle systems that handle ammonia (sources, destinations, purpose).
3. A cirrhotic patient becomes confused. Give two mechanisms by which lactulose lowers blood ammonia.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Ammonia is toxic; the liver urea cycle is the principal detox route.
- Glutamine is the safe blood carrier; alanine shuttles muscle N to the liver.
- Liver failure → hyperammonaemia → encephalopathy.
- Treatment is biochemistry: trap or reduce ammonia (lactulose, diet, rifaximin).`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'urea-cycle-protein',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Ammonia Metabolism — Urea Cycle',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **urea cycle** (Krebs–Henseleit cycle) runs in hepatocytes — the first two steps in the mitochondrial matrix, the last three in the cytosol. It converts one free ammonia, one amino nitrogen from aspartate, and one CO₂ into urea, at a cost of 3 ATP (4 high-energy phosphate bonds). Five enzymes, five steps:

**1. Carbamoyl phosphate synthetase I (CPS-I)** — mitochondrial; combines NH₄⁺, CO₂, and 2 ATP → **carbamoyl phosphate**. The committed, rate-limiting step; activated by **N-acetylglutamate (NAG)**, whose own synthesis depends on glutamate and acetyl-CoA availability — so the cycle is only switched on when amino acid breakdown is feeding it.

**2. Ornithine transcarbamoylase (OTC)** — transfers the carbamoyl group to **ornithine** → **citrulline**, which leaves the mitochondrion.

**3. Argininosuccinate synthetase** — condenses citrulline with **aspartate** (the second nitrogen!) using ATP → **argininosuccinate**.

**4. Argininosuccinate lyase** — splits argininosuccinate → **arginine** + **fumarate**. The fumarate enters the TCA cycle — the cycle is linked to energy metabolism ("Krebs bi-cycle").

**5. Arginase** — hydrolyses arginine → **urea** + **ornithine**. Ornithine returns to the mitochondrion to restart the cycle — the catalytic carrier, like oxaloacetate in the TCA cycle.

**Net reaction:**

$$\\text{NH}_4^+ + \\text{Asp-N} + \\text{CO}_2 + 3\\text{ATP} \\rightarrow \\text{Urea} + \\text{Fumarate} + 2\\text{ADP} + \\text{AMP} + 2\\text{P}_i + \\text{PP}_i$$

Regulation is long-term as well as immediate: a high-protein diet induces all five enzymes; starvation (accelerated breakdown) does the same. Urea then diffuses to blood and is excreted by the kidney — the single largest solute in urine.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Location: first 2 steps mitochondrial, last 3 cytosolic — liver only.
- 5 enzymes in order: CPS-I → OTC → argininosuccinate synthetase → lyase → arginase.
- Nitrogens: NH₄⁺ (CPS-I) + aspartate (step 3) → urea's 2 N.
- Cost: 3 ATP (4 high-energy bonds) per urea.
- Rate-limiting: CPS-I, activated by N-acetylglutamate.
- Fumarate exits to TCA cycle; ornithine is the regenerated carrier.
- High-protein diet and starvation both up-regulate the cycle.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ammonia scavengers treat urea-cycle defects by *bypassing* the blocked step: sodium phenylbutyrate conjugates with glutamine (exits as phenylacetylglutamine) and sodium benzoate conjugates with glycine (exits as hippurate) — each drug carries out one nitrogen. Arginine supplementation keeps the cycle's carrier stocked. Pharmacists must recognise these as metabolic drugs, not vitamins.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five steps of the urea cycle with their substrates, products, and cellular compartments.
2. Which molecules supply the two nitrogen atoms of urea?
3. Explain the role of N-acetylglutamate and why the cycle's regulation makes metabolic sense.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Urea cycle: NH₄⁺ + aspartate + CO₂ + 3 ATP → urea (liver only).
- CPS-I + NAG is the gatekeeper; ornithine regenerates each turn.
- Fumarate links the cycle to the TCA cycle.
- Drug bypasses (benzoate, phenylbutyrate) export nitrogen when the cycle is defective.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'regulation-significance-of-the-urea-cycle',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Ammonia Metabolism — Regulation and Significance of the Urea Cycle',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Regulation** operates at three timescales.

*Short-term (substrate + allosteric):* flux follows ammonia and glutamate supply — no substrate, no urea. The decisive allosteric control is **N-acetylglutamate (NAG)**, synthesised in mitochondria from glutamate + acetyl-CoA by NAG synthase, itself activated by **arginine**. Logic: arginine abundance signals an active cycle (arginine is the cycle's own intermediate), while glutamate abundance signals available nitrogen. CPS-I — the committed step — runs only when NAG is present.

*Medium-term (dietary):* protein intake sets enzyme amounts. A high-protein meal induces all five enzymes within days; returning to a low-protein diet reduces them. Starvation produces the same induction as high protein — because muscle breakdown floods the liver with nitrogen, the cycle must scale up to dispose of it.

*Long-term (disease/development):* the neonatal liver activates the cycle fully within days of birth; premature infants may lag, a cause of transient hyperammonaemia. Inherited defects of any one enzyme (most commonly OTC, X-linked) produce hyperammonaemia with intellectual disability, vomiting, and coma — the **urea cycle disorders** (detailed in the Disorders topic).

**Significance** extends beyond detoxification.

1. **Nitrogen disposal** — the cycle is the only route that converts toxic ammonia into a non-toxic excretory product; without it, protein cannot be eaten safely.
2. **Blood urea as clinical index** — plasma urea (or "BUN") reflects the cycle's output: raised in kidney failure (excretion fails), high-protein catabolism, or GI bleeding (blood protein digested → nitrogen load); lowered in advanced liver failure (cycle capacity lost) or low-protein malnutrition.
3. **Link to energy metabolism** — fumarate from step 4 enters the TCA cycle, and aspartate's oxaloacetate predecessor ties amino nitrogen disposal to gluconeogenesis.
4. **Arginine chemistry hub** — arginine, an intermediate, is also the substrate for **nitric oxide synthase** (→ NO, a vasodilating signalling molecule) and creatine synthesis; the cycle feeds these pathways.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- NAG (from glutamate + acetyl-CoA; boosted by arginine) activates CPS-I — the master switch.
- High protein intake and starvation both induce cycle enzymes.
- Neonates may have immature cycles → transient hyperammonaemia.
- Plasma urea reflects cycle output: ↑ in renal failure, catabolism, GI bleeding; ↓ in liver failure.
- Fumarate connects the cycle to the TCA cycle; arginine links it to NO and creatine synthesis.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Interpreting urea and ammonia results is daily pharmacy practice: a raised urea with normal creatinine suggests catabolism or GI bleeding; a raised ammonia with normal urea suggests liver failure. Valproate-induced hyperammonaemia, and the ammonia-scavenging drugs benzoate/phenylbutyrate, are cycle biochemistry applied to therapy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How does N-acetylglutamate regulate the cycle, and why is its logic sensible?
2. Give two dietary/disease states that induce cycle enzymes and explain why.
3. Why can plasma urea be raised in kidney failure but lowered in liver failure?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- NAG gates CPS-I; substrate supply and diet set flux; enzymes induced by protein load.
- Cycle output = blood urea — a window on liver, kidney, and catabolic state.
- Fumarate and arginine tie the cycle to energy metabolism and signalling chemistry.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'fate-of-amino-acid-carbon-skeletons',
    courseId: 'bch-201',
    topicId: 'protein-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Fate of Amino Acid Carbon Skeletons',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Once the amino group is removed by transamination, the remaining **carbon skeleton** (an α-keto acid) becomes ordinary metabolic fuel or building material. Its fate depends on where it enters central metabolism.

**Glucogenic amino acids** have skeletons converted to **pyruvate** or **TCA-cycle intermediates** (oxaloacetate, α-ketoglutarate, succinyl-CoA, fumarate). Because these can feed gluconeogenesis, they can raise blood glucose: alanine → pyruvate; glutamate → α-ketoglutarate; aspartate → oxaloacetate; valine, methionine → succinyl-CoA, to name a few. **Most amino acids are glucogenic.**

**Ketogenic amino acids** have skeletons converted to **acetyl-CoA or acetoacetyl-CoA**, which cannot make glucose (the pyruvate dehydrogenase step is irreversible) but can form **ketone bodies** or fatty acids. **Leucine** is purely ketogenic. **Lysine** is also classed as ketogenic in standard schemes.

**Mixed (both)**: isoleucine, phenylalanine, tyrosine, tryptophan, and threonine yield one gluogenic and one ketogenic fragment — e.g. phenylalanine → fumarate (glucogenic) + acetoacetate (ketogenic).

In the fed state, carbon skeletons are burned for energy or stored (as fat via acetyl-CoA, or glycogen via gluconeogenic precursors). In fasting, muscle exports alanine and glutamine made from skeletons of degraded protein; the liver uses them for gluconeogenesis — the **glucose–alanine cycle** and the glutamine drain keeping blood glucose alive during starvation. In uncontrolled diabetes or prolonged fasting, ketogenic skeletons fuel ketone-body production.

One clinical footnote: skeletons of some amino acids are also used for **specialised synthesis** rather than fuel — glycine for haem and purines, glutamate for GABA, tyrosine for catecholamines and melanin — so "carbon skeleton" does not always mean "calories".`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Carbon skeleton = α-keto acid remaining after deamination.
- Glucogenic: → pyruvate or TCA intermediates → glucose (most amino acids).
- Ketogenic: → acetyl-CoA/acetoacetate → ketones or fat (leucine purely; lysine too).
- Mixed (glucogenic + ketogenic): isoleucine, phenylalanine, tyrosine, tryptophan, threonine.
- Fasting: alanine/glutamine from muscle feed hepatic gluconeogenesis.
- Ketogenic fragments cannot raise blood glucose (PDH step irreversible).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `In diabetic ketoacidosis and starvation ketosis, both carbohydrate absence and ketogenic amino acid skeletons push ketone production — the pharmacist's urinalysis/serum ketone reading reflects amino acid and lipid metabolism together. Diet design for phenylketonuria works by removing phenylalanine (whose skeleton plus the unconverted amino group is toxic) while supplying tyrosine, the product the patient cannot make.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define glucogenic and ketogenic amino acids and state where each type of skeleton enters metabolism.
2. Classify leucine, alanine, aspartate, and phenylalanine.
3. Why can no amino acid maintain blood glucose if it is purely ketogenic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Skeletons go to pyruvate/TCA (glucogenic) or acetyl-CoA (ketogenic).
- Leucine (and lysine) ketogenic; most amino acids glucogenic; five are mixed.
- Fasting: alanine + glutamine from muscle sustain gluconeogenesis.
- Skeletons also build specialised molecules, not just fuel.`,
      },
    ],
  },
];
