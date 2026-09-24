import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 6: Disorders of Intermediary Metabolism (6)
 * + Citric Acid Cycle (7).
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 */

export const bch201DisordersTcaLessons: Lesson[] = [
  // ═══════════════ DISORDERS OF INTERMEDIARY METABOLISM ═══════════════

  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'disorders-of-intermediary-metabolism',
    courseId: 'bch-201',
    topicId: 'disorders-of-intermediary-metabolism',
    nodeType: 'topic',
    title: 'Disorders of Intermediary Metabolism',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A metabolic disorder arises when one step of an enzymatic pathway fails — usually an **inherited enzyme deficiency** — and the pathway's substrates pile up while its products dwindle. Every inborn error of metabolism (IEM) tells the same two-sided story: **toxic accumulation** before the block and **deficiency** after it. Once you see that pattern, the whole topic becomes predictable.

Most IEMs are **autosomal recessive**: an affected child inherits one defective gene from each carrier parent, so enzyme activity is near zero although each parent is healthy. Presentation varies with the block: neonatal collapse (urea-cycle disorders), developmental delay over months (phenylketonuria), episodic crisis on fasting (fatty-acid oxidation defects), or organ-specific accumulation (glycogen storage diseases).

Three clinical pillars organise the topic. **Screening**: many countries screen newborns (heel-prick tandem mass spectrometry, e.g. for PKU and MCAD deficiency) because treatment started before symptoms prevents irreversible damage. **Diagnosis**: pattern-recognition plus enzyme assay and metabolite profiling. **Management**: four levers — **restrict the precursor** (low phenylalanine diet), **replace the product** (tyrosine supplement in PKU), **detoxify the accumulation** (ammonia scavengers, carnitine), and **bypass/cofactor support** (large-dose vitamin cofactors for variant enzymes).

This topic samples the four disorder families a pharmacist most often meets: **aminoacidopathies** (phenylketonuria, alkaptonuria, albinism), **organic acidurias** (methylmalonic, propionic), **ammonia-detoxification disorders** (urea-cycle defects), and **fatty-acid oxidation disorders** (MCAD deficiency). Each illustrates the accumulation–deficiency logic in a different pathway.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- IEM = inherited enzyme block → substrate accumulation + product deficiency.
- Usually autosomal recessive; carriers healthy, affected children homozygous.
- Presentation ranges from neonatal collapse to gradual developmental delay.
- Management levers: restrict precursor, replace product, detoxify, cofactor support.
- Newborn screening catches treatable disorders before irreversible harm.
- Families: aminoacidopathies, organic acidurias, urea-cycle defects, FA-oxidation defects.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists compound special diets, supply enzyme-replacement and scavenger drugs (sapropterin, nitisinone, sodium benzoate/phenylbutyrate, L-carnitine), and counsel on formulation changes during illness. Many "orphan" metabolic drugs are dispensed lifelong; adherence counselling is a pharmacist's core contribution.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the accumulation–deficiency pattern common to all inborn errors of metabolism.
2. Why are most IEMs autosomal recessive, and what does that mean for family counselling?
3. List the four management levers with one example each.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One blocked enzyme → pile-up + shortage → disease.
- Autosomal recessive inheritance; newborn screening saves brains.
- Treat: restrict, replace, detoxify, support cofactors.
- Four disorder families ahead: amino acids, organic acids, ammonia, fat oxidation.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'aminoacidopathies',
    courseId: 'bch-201',
    topicId: 'disorders-of-intermediary-metabolism',
    nodeType: 'subtopic',
    title: 'Aminoacidopathies',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Aminoacidopathies** are inherited blocks in the metabolism of specific amino acids. The nitrogen may be handled fine — the problem is what the carbon skeleton or its by-products do.

**Phenylketonuria (PKU)** — the classic. **Phenylalanine hydroxylase** (or rarely its **BH₄ cofactor** regeneration) is deficient → dietary phenylalanine cannot become tyrosine. Phe accumulates; transamination shunts it to **phenylpyruvate** ("phenylketone", the urine clue) and further to phenyllactate/phenylacetate. Consequences: untreated, severe intellectual disability, seizures, mousy body odour, fair skin/hair (tyrosine is the melanin precursor the child now lacks). Diagnosis: newborn-screening blood spot (Guthrie). Management: lifelong **low-phenylalanine, high-tyrosine diet** started in the first weeks of life; **sapropterin (BH₄)** helps variant forms; **pegvaliase** (enzyme substitution) for adults. Untreated maternal PKU in pregnancy devastates the foetus — pre-conception diet control is essential.

**Alkaptonuria** — **homogentisate oxidase** deficiency in tyrosine degradation. Homogentisic acid accumulates, polymerises, and stains collagen black (**ochronosis**): dark urine on standing in nappies, black cartilage of ear/nose, spine and joint arthritis in adulthood. Benign in infancy, disabling by middle age; **nitisinone** (blocks an upstream tyrosine-degradation step) reduces homogentisate production.

**Albinism** — tyrosinase deficiency (or related defects) in melanin synthesis: absent/reduced pigment in skin, hair, and eyes; nystagmus, photophobia, poor vision, high skin-cancer risk. Inheritance varies (often autosomal recessive); management is protection — sun avoidance, skin surveillance, optical correction. No systemic metabolic toxicity — the enzyme block simply ends a synthetic line.

**Maple syrup urine disease (MSUD)** — branched-chain α-ketoacid dehydrogenase deficiency: leucine/isoleucine/valine and their ketoacids accumulate; urine smells of maple syrup; neonatal encephalopathy without urgent diet therapy.

**Homocystinuria** — cystathionine β-synthase deficiency: homocysteine accumulates → lens dislocation (downward), marfanoid habitus, venous thrombosis; treated with methionine restriction ± B6 (the enzyme's cofactor).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- PKU: PAH/BH₄ defect → Phe ↑, phenylpyruvate in urine; ID untreated; fair colouring; low-Phe/high-Tyr diet + sapropterin ± pegvaliase.
- Alkaptonuria: homogentisate oxidase block → black urine, ochronosis, arthritis; nitisinone.
- Albinism: tyrosinase block → no melanin; visual + skin issues; no systemic toxicity.
- MSUD: BCKDH block → neonatal encephalopathy, maple-syrup odour.
- Homocystinuria: CBS block → dislocated lenses, thrombosis; B6-responsive variants.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists supply medical formulas (Phe-free protein substitutes), sapropterin, nitisinone, and pegvaliase; counsel pregnant women with PKU on strict pre-conception diet; and flag aspartame (a phenylalanine source) on labels — the "PHENYLKETONURICS: CONTAINS PHENYLALANINE" warning exists for these patients.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does untreated PKU cause both intellectual disability and fair colouring?
2. Contrast the clinical tempo of alkaptonuria and MSUD.
3. Why must aspartame-containing products carry a PKU warning?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Aminoacidopathies: PKU (Phe), alkaptonuria (Tyr degradation), albinism (melanin), MSUD (BCAAs), homocystinuria (methionine).
- Each = one enzyme block → characteristic accumulation.
- Diet + product replacement is the recurring therapy pattern.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'organic-acidurias',
    courseId: 'bch-201',
    topicId: 'disorders-of-intermediary-metabolism',
    nodeType: 'subtopic',
    title: 'Organic Acidurias',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Organic acidurias** are inherited defects in the catabolism of certain amino acids (and odd-chain fatty acids) in which **organic acids** — carboxylic-acid intermediates — accumulate in blood and spill into urine. Unlike aminoacidopathies (the *amino acid* piles up), here the *ketoacid downstream* of the amino acid piles up, and its acidity disturbs whole-body chemistry.

**Methylmalonic acidaemia** — **methylmalonyl-CoA mutase** deficiency (or its cobalamin/B12 cofactor's processing). The mutase converts methylmalonyl-CoA → succinyl-CoA; blocked, methylmalonic acid floods blood/urine. Sources of the substrate: valine, isoleucine, methionine, threonine catabolism plus odd-chain FA. Presents neonatally or in infancy with metabolic acidosis, ketosis, hyperammonaemia (secondary inhibition), and developmental impairment; long-term renal and neurological damage. Management: **protein restriction** (reduce substrate), **B12 in responsive variants** (high-dose hydroxocobalamin), L-carnitine (binds and excretes the accumulating acyl groups), and strict illness protocols.

**Propionic acidaemia** — **propionyl-CoA carboxylase** deficiency (biotin cofactor). Propionate cannot become methylmalonate → propionic acid accumulates: neonatal acidosis, ketosis, hyperammonaemia, feeding refusal; recurrent decompensation with infections/fasting. Management mirrors MMA: restricted precursor amino acids, carnitine, aggressive illness management; biotin helps only rare responsive forms.

**Isovaleric acidaemia** — isovaleryl-CoA dehydrogenase deficiency in leucine catabolism: sweaty-feet odour, neonatal crisis or chronic intermittent form; carnitine conjugation (isovalerylglycine/isovalerylcarnitine excretion) is central to therapy.

**Shared pattern** across the group: the accumulating CoA-esters **trap carnitine** (each acyl group pairs with carnitine for excretion) — hence secondary carnitine deficiency, hence carnitine as a standing prescription. The accumulating acids also **inhibit the urea cycle** secondarily (hence the paradoxical hyperammonaemia in a nitrogen-pathway-adjacent disease) and **suppress bone marrow** (neutropenia during crises).

**Diagnosis** rests on **urinary organic-acid profiling by gas chromatography–mass spectrometry**, with enzyme assay/genetics for confirmation; newborn screening flags many (C3/C5 acylcarnitine elevations on tandem MS).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Organic acidurias: ketoacid intermediates accumulate downstream of amino-acid catabolism blocks.
- Methylmalonic acidaemia: mutase or B12-processing defect; MMA ↑; acidosis + hyperammonaemia.
- Propionic acidaemia: propionyl-CoA carboxylase (biotin) defect; neonatal ketoacidosis.
- Isovaleric acidaemia: leucine pathway; sweaty-feet odour.
- Accumulating acyl-CoAs trap carnitine → secondary carnitine deficiency → L-carnitine therapy.
- Diagnosis: urinary organic-acid GC-MS; newborn screening via acylcarnitines.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Standing therapy is pharmacy-managed: L-carnitine ( binds/excretes toxic acyls), biotin trials, precursor-restricted formulas, and emergency "sick-day" plans (extra calories, avoid fasting, hospital letter). During intercurrent illness, these children decompensate within hours — pharmacist awareness prevents delays.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How do organic acidurias differ from aminoacidopathies in what accumulates?
2. Why do patients with MMA or PA develop secondary carnitine deficiency, and how is it treated?
3. What is the biochemical logic of hyperammonaemia in propionic acidaemia?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Blocked amino-acid catabolism → organic acids flood blood/urine.
- MMA (B12/mutase), PA (biotin enzyme), IVA (leucine).
- Carnitine trap → carnitine therapy; urea-cycle inhibition → ammonia rises.
- GC-MS urine profiling confirms; illness protocols save lives.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'disorders-of-ammonia-detoxification',
    courseId: 'bch-201',
    topicId: 'disorders-of-intermediary-metabolism',
    nodeType: 'subtopic',
    title: 'Disorders of Ammonia Detoxification',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Ammonia must be converted to urea in the liver; any failure of that conversion — inherited or acquired — produces **hyperammonaemia**, and the brain bears the brunt. This lesson covers the inherited side (urea-cycle defects and related transporter defects); acquired hyperammonaemia (liver failure, valproate, organic acidaemias) was met in earlier lessons.

**Urea cycle disorders (UCDs)** — one of the five enzyme steps is deficient; **OTC deficiency** (X-linked) is the commonest, causing affected male infants to collapse with ammonia >300 μmol/L within 24–72 h of first protein feeds: vomiting, lethargy, seizures, coma. **Respiratory alkalosis** is the characteristic early blood-gas clue (ammonia stimulates breathing). Females heterozygous for OTC defects may present later — headache/behaviour change after protein loads. **Citrullinaemia (ASS1), argininosuccinic aciduria (ASL), arginase deficiency (ARG1)** complete the enzyme list; **NAGS deficiency** responds to **carglumic acid** (a synthetic NAG). **Citrin deficiency** (aspartate–glutamate carrier) blocks aspartate export from mitochondria — a transport defect with the same endpoint.

**Clinical signature:** neonatal collapse on protein feeding, or (partial defects) episodic confusion, ataxia, vomiting, and behavioural change after high-protein meals or catabolic stress. Plasma **ammonia with low urea** is the laboratory fingerprint; amino-acid profiling identifies the specific block (citrulline ↑ in ASS1/ASL; argininosuccinate in ASL).

**Management — reduce the load, remove the ammonia, supply the missing traffic:**

1. **Acute crisis:** stop protein, supply calories (glucose/lipid) to reverse catabolism, **ammonia scavengers** — **sodium benzoate** (conjugates glycine → hippurate, carries out 1 N) and **sodium phenylbutyrate/phenylacetate** (conjugates glutamine → phenylacetylglutamine, carries out 2 N); **arginine** keeps cycle intermediates stocked; dialysis if ammonia is extreme.
2. **Chronic:** protein restriction with essential-amino-acid supplementation, scavenger drugs, arginine/citrulline supplements, and prevention of catabolic spikes (illness plans, no prolonged fasting).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- UCDs: block in CPS-I/OTC/ASS1/ASL/ARG1 (+ NAGS, citrin) → hyperammonaemia.
- OTC deficiency X-linked; neonatal collapse + respiratory alkalosis is classic.
- Lab fingerprint: ammonia ↑ with urea low-normal; amino-acid profile localises the block.
- Acute: no protein, calories, benzoate + phenylbutyrate, arginine, dialysis if severe.
- Chronic: protein restriction, scavengers daily, illness plans.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Sodium benzoate and phenylbutyrate are compounding-pharmacy staples with narrow therapeutic margins and poor palatability — formulation innovation (glycerol phenylbutyrate) exists for adherence. Carglumic acid for NAGS deficiency is an emergency enzyme-cofactor drug. Pharmacists also guard against valproate or high-protein supplements in these patients.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does OTC deficiency cause respiratory alkalosis before coma?
2. How do sodium benzoate and phenylbutyrate each remove nitrogen from the body?
3. What is the laboratory pattern that distinguishes a UCD from a liver failure hyperammonaemia?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Urea-cycle blocks → ammonia ↑, urea low, brain toxic.
- OTC (X-linked) commonest; neonatal or protein-triggered episodes.
- Treat: stop protein, feed calories, scavenge N (benzoate/phenylbutyrate), arginine, dialysis.
- Lifetime management = protein control + scavengers + sick-day plans.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'urea-cycle-disorders',
    courseId: 'bch-201',
    topicId: 'disorders-of-intermediary-metabolism',
    nodeType: 'subtopic',
    title: 'Disorders of Ammonia Detoxification — Urea Cycle Disorders',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This lesson walks the five classical **urea cycle disorders (UCDs)** enzyme by enzyme, because the *site* of the block determines the diagnostic metabolite and part of the treatment.

**1. CPS-I deficiency** — no carbamoyl phosphate at all. Citrulline and argininosuccinate both *low*; ammonia very high. Indistinguishable biochemically from NAGS deficiency except by response: **NAGS deficiency responds to carglumic acid** (synthetic N-acetylglutamate), CPS-I does not.

**2. OTC deficiency (X-linked, commonest)** — carbamoyl phosphate cannot join ornithine; it back-logs into the **pyrimidine pathway**, raising **orotic acid** in urine (the distinguishing marker). Males: neonatal catastrophe. Carrier females: protein-load headaches, protein aversion, post-partum decompensation.

**3. Argininosuccinate synthetase deficiency (citrullinaemia type I)** — citrulline accumulates massively (its substrate). Presents neonatally or later with episodic hyperammonaemia.

**4. Argininosuccinate lyase deficiency (argininosuccinic aciduria)** — argininosuccinate builds up; additionally, arginine becomes essential (the block prevents arginine regeneration) and the kidney loses it — **arginine supplementation** is specific therapy. Hepatomegaly and fibrosis are more prominent than in other UCDs.

**5. Arginase deficiency (hyperargininaemia)** — the last step fails: arginine accumulates but ammonia is often *near normal* (the block is after urea formation — some urea still forms). Presentation is insidious: progressive spasticity, developmental regression in childhood. A reminder that not every UCD is a neonatal coma.

**Transport defect — citrin deficiency (SLC25A13):** failure to export aspartate from mitochondria → adult-onset citrullinaemia type II in Japanese patients (citrulline ↑, hyperammonaemia after alcohol/sugar loads) and neonatal intrahepatic cholestasis.

**Long-term outlook** depends on early control; even well-treated patients risk cumulative brain injury from repeated small ammonia spikes. Transition clinics, dietetics, and pharmacy form the chronic-care triangle.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- CPS-I: citrulline low; NAGS deficiency mimics it but responds to carglumic acid.
- OTC: orotic acid ↑ in urine (pyrimidine shunt); X-linked.
- ASS1: citrulline ↑↑. ASL: argininosuccinate ↑ + arginine becomes essential (supplement it).
- ARG1: arginine ↑ with near-normal ammonia; spasticity, late onset.
- Citrin defect: mitochondrial aspartate export failure; type II adult-onset pattern.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Matching drug to block is pharmacology applied: carglumic acid only works for NAGS; arginine only helps ASL (and partially ASS1); benzoate/phenylbutyrate work for *all* blocks by bypassing the cycle. Counselling on protein intake, supplement palatability, and sick-day kits is core pharmacist territory.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which metabolite distinguishes OTC deficiency from CPS-I deficiency, and why?
2. Why do ASL patients need arginine supplementation while OTC patients do not?
3. How can arginase deficiency present with near-normal ammonia?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Each block has a fingerprint: orotate (OTC), citrulline (ASS1), argininosuccinate (ASL), arginine (ARG1).
- NAGS responds to carglumic acid; ASL needs arginine.
- Scavenger drugs bypass every block; ammonia control prevents brain injury.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'fatty-acid-oxidation-disorders',
    courseId: 'bch-201',
    topicId: 'disorders-of-intermediary-metabolism',
    nodeType: 'subtopic',
    title: 'Fatty Acid Oxidation Disorders',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Fatty-acid oxidation disorders (FAODs)** block the spiral that turns fat into acetyl-CoA. The clinical signature is consistent across the family: **hypoketotic hypoglycaemia on fasting** — glucose falls (no gluconeogenic support from fat's glycerol, plus continued glucose consumption) while ketones stay *low* (β-oxidation is the usual ketone source). Add muscle symptoms (cramps, rhabdomyolysis) and/or cardiomyopathy, and the pattern is complete.

**Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency** — the commonest FAOD (≈1:10,000–15,000 births in populations of European descent). One autosomal-recessive enzyme defect in the β-oxidation spiral blocks C8–C10 intermediates from proceeding; **octanoylcarnitine (C8)** accumulates — the newborn-screening marker. Untreated: first fasting illness (typically 6–24 months) → hypoketotic hypoglycaemic seizures, coma, sometimes sudden death. Treated: **avoid prolonged fasting**, extra carbohydrate during illness ("sick-day rules"), cornstarch doses overnight in some; outcomes are excellent — normal life expectancy with vigilance.

**Very-long-chain acyl-CoA dehydrogenase (VLCAD) deficiency** — blocks the first dehydrogenation of C14–C18 chains; muscle-type presents with exercise rhabdomyolysis and myoglobinuria; severe infantile forms add cardiomyopathy. Management: avoid fasting *and* prolonged exercise, medium-chain triglyceride (MCT) oil bypasses the block (MCT enters mitochondria independently and is oxidised normally).

**Carnitine shuttle defects** — **primary carnitine deficiency** (OCTN2 transporter; treatable with **L-carnitine**), **CPT-I deficiency** (hypoketotic hypoglycaemia + hepatomegaly), **CPT-II deficiency** (adult-onset muscle aches after exercise/fasting; severe neonatal forms exist).

**X-linked adrenoleukodystrophy (X-ALD)** — peroxisomal VLCFA shortening fails (ABCD1 transporter); VLCFA accumulate in adrenals and CNS white matter: adrenal insufficiency in boys, rapidly progressive cerebral demyelination in childhood, or adult adrenomyeloneuropathy. Lorenzo's oil (dietary C22:1/C18:1) lowers VLCFA but does not cure; **haematopoietic stem-cell transplant** halts cerebral disease when early — newborn screening now enables that window.

**Principles of management (all FAODs):** frequent feeding, **avoid fasting** (the universal rule), carnitine where deficient, MCT where the block is long-chain, aggressive illness plans, and newborn screening to find them before the first crisis.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- FAOD signature: hypoketotic hypoglycaemia + (±) rhabdomyolysis/cardiomyopathy on fasting.
- MCAD (commonest): C8 octanoylcarnitine on screening; fasting-illness crises; excellent outcome with avoidance of fasting.
- VLCAD: long-chain block; rhabdomyolysis/cardiomyopathy; MCT oil bypasses.
- Carnitine shuttle defects: OCTN2 (treat with carnitine), CPT-I/CPT-II.
- X-ALD: peroxisomal VLCFA accumulation; adrenal + CNS disease; early transplant saves.
- Universal rules: no prolonged fasting, sick-day carbohydrate plans, newborn screening.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pharmacists supply cornstarch regimens, MCT oil, L-carnitine, and emergency sick-day letters; flag prolonged pre-operative fasting orders for known FAOD patients (IV glucose instead); and counsel on valproate avoidance where fat oxidation is already compromised.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why are ketones low in FAOD hypoglycaemia, and why is this diagnostically important?
2. What newborn-screening metabolite identifies MCAD deficiency?
3. How does MCT oil bypass a VLCAD block?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Blocked fat burning → glucose falls, ketones don't rise.
- MCAD = commonest; screening (C8) + fasting avoidance = normal life.
- VLCAD/X-ALD involve long chains; MCT or transplant as applicable.
- The universal prescription: never fast these patients.`,
      },
    ],
  },

  // ═══════════════ CITRIC ACID CYCLE ═══════════════

  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'citric-acid-cycle',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'topic',
    title: 'Citric Acid Cycle (Krebs Cycle)',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **citric acid cycle** (Krebs cycle, TCA cycle) is the metabolic furnace where carbon skeletons from all three nutrients — carbohydrate (as acetyl-CoA), fat (as acetyl-CoA), and protein (as TCA intermediates) — are oxidised to CO₂ while harvesting their electrons for ATP production. It runs in the **mitochondrial matrix** and is the common final yard through which most fuel passes.

**The core reaction:** acetyl-CoA (2 C) condenses with **oxaloacetate** (4 C) → **citrate** (6 C); eight enzymatic steps regenerate oxaloacetate while releasing the two acetyl carbons as CO₂. Per turn:

$$\\text{Acetyl-CoA} + 3\\text{NAD}^+ + \\text{FAD} + \\text{GDP} + \\text{P}_i + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{CO}_2 + 3\\text{NADH} + \\text{FADH}_2 + \\text{GTP} + 3\\text{H}^+ + \\text{CoA}$$

Electron harvest: **3 NADH + 1 FADH₂** → via the electron transport chain ≈ **10 ATP per acetyl-CoA** (2.5 per NADH, 1.5 per FADH₂) plus 1 GTP directly — the cycle itself makes only 1 GTP; its wealth is the reduced carriers.

**Substrate-level phosphorylation** occurs once (succinyl-CoA → succinate, GTP made directly); everything else is **oxidative phosphorylation** downstream.

**Regulation:** three irreversible steps set flux — **citrate synthase** (inhibited by citrate, NADH, succinyl-CoA), **isocitrate dehydrogenase** (the principal control; activated by ADP/Ca²⁺, inhibited by ATP/NADH), and **α-ketoglutarate dehydrogenase** (like PDH: needs TPP, lipoate, FAD, NAD⁺, CoA; inhibited by NADH/succinyl-CoA; activated by Ca²⁺). The logic is simple: high ATP/NADH = fuel abundant, slow down; ADP/Ca²⁺ = demand, speed up.

**Anaplerosis** ("filling up") keeps oxaloacetate stocked: **pyruvate carboxylase** (pyruvate + CO₂ + ATP → oxaloacetate, biotin-dependent) is the key reaction — without it, any drain of intermediates into biosynthesis stalls the cycle.

**Clinical hooks:** fluoroacetate (rodenticide) poisons aconitase as fluorocitrate; arsenic poisons α-ketoglutarate dehydrogenase via lipoate; **von Gierke and other storage issues** secondarily starve the cycle; and whole-topic tie-ins — β-oxidation, ketogenesis, gluconeogenesis — all pivot around this cycle's intermediates.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Matrix cycle: acetyl-CoA + oxaloacetate → citrate → 8 steps → oxaloacetate again.
- Per turn: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP (≈10 ATP total per acetyl-CoA).
- Three irreversible control points: citrate synthase, isocitrate dehydrogenase (main), α-KGDH.
- Signals: ADP/Ca²⁺ accelerate; ATP/NADH brake.
- Anaplerosis (pyruvate carboxylase) replenishes oxaloacetate.
- Poisons: fluoroacetate (aconitase), arsenic (α-KGDH lipoate).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin's mild ETC inhibition raises AMP → AMPK activation — pharmacology exploiting mitochondrial energy sensing. Fluoroacetate rodenticide poisoning is managed by competing acetate; cyanide/CO poison the cycle's downstream ETC. Understanding the cycle is understanding why cells (and patients) fail when mitochondria do.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the net reaction of one turn of the TCA cycle.
2. Which step is the main regulatory point, and what are its activators/inhibitors?
3. Why must the cycle be "anaplerosed" (refilled), and what enzyme does it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- TCA = fuel → CO₂ + NADH/FADH₂ + 1 GTP per acetyl-CoA.
- Iso citrate DH is the throttle; energy charge and Ca²⁺ set flux.
- Oxaloacetate is catalytic — replenished by pyruvate carboxylase.
- Rodenticides, arsenic, and metformin all touch this pathway.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'citric-acid-cycle-overview',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'subtopic',
    title: 'Citric Acid Cycle (Krebs Cycle)',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Walk the eight steps in order — each with enzyme, substrates, products, and cofactors. The cycle runs in the **mitochondrial matrix** (except succinate dehydrogenase, embedded in the inner membrane).

**1. Citrate synthase:** acetyl-CoA + oxaloacetate → **citrate** + CoA-SH. Irreversible; condensation via citroyl-CoA intermediate.

**2. Aconitase:** citrate ⇌ **isocitrate** (via cis-aconitate; dehydration–rehydration moves the OH). Iron–sulphur cluster enzyme; **fluoroacetate** → fluorocitrate blocks it.

**3. Isocitrate dehydrogenase:** isocitrate + NAD⁺ → **α-ketoglutarate** + CO₂ + **NADH**. Irreversible; **the principal rate-limiting step**; activated ADP, Ca²⁺; inhibited ATP, NADH.

**4. α-Ketoglutarate dehydrogenase complex:** α-ketoglutarate + CoA + NAD⁺ → **succinyl-CoA** + CO₂ + NADH. Irreversible; a **multi-enzyme complex** like PDH (TPP, lipoic acid, FAD, NAD⁺, CoA); arsenite poisons its lipoate. Ca²⁺ activates.

**5. Succinyl-CoA synthetase:** succinyl-CoA + GDP + Pᵢ ⇌ **succinate** + **GTP** + CoA. The cycle's one **substrate-level phosphorylation** — ATP made without oxygen participation at this step.

**6. Succinate dehydrogenase (Complex II):** succinate + FAD → **fumarate** + **FADH₂**. The only membrane-bound step; FADH₂ feeds electrons directly into ETC at CoQ.

**7. Fumarase:** fumarate + H₂O ⇌ **malate**.

**8. Malate dehydrogenase:** malate + NAD⁺ ⇌ **oxaloacetate** + **NADH**. Oxaloacetate is regenerated — the cycle's catalytic wheel turns again.

**Energy tally per acetyl-CoA:** 3 NADH (steps 3, 4, 8) + 1 FADH₂ (step 6) + 1 GTP (step 5) + 2 CO₂ (steps 3, 4). Via ETC: 3 × 2.5 + 1.5 + 1 = **10 ATP**.

**Amphibolic nature:** catabolic (oxidises fuels) and anabolic (exports intermediates): citrate → fatty-acid synthesis; α-ketoglutarate ↔ glutamate; oxaloacetate ↔ aspartate/gluconeogenesis; succinyl-CoA → haem. Every export must be replaced (anaplerosis) or the wheel slows.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 8 steps; irreversible at 1, 3, 4; regulated mainly at step 3.
- Step 4 is a PDH-like complex (same 5 cofactors).
- Step 5 = substrate-level phosphorylation (GTP).
- Step 6 (SDH) = Complex II of the ETC; FADH₂ enters at CoQ.
- Per acetyl-CoA: 3 NADH + FADH₂ + GTP + 2 CO₂ ≈ 10 ATP.
- Intermediates feed biosynthesis (amphibolic).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Fluoroacetate (step 2) and arsenic (step 4) are textbook poisonings a pharmacist should recognise. Succinate dehydrogenase inhibitors are a modern class of fungicides/herbicides; succinate accumulation in SDH-mutant tumours links the cycle to cancer metabolism (pseudohypoxia via HIF).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the eight steps with enzymes and products.
2. Which step makes GTP directly, and what is this type of phosphorylation called?
3. Where do the cycle's NADH and FADH₂ electrons go, and what ATP equivalents do they yield?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Citrate → isocitrate → α-KG → succinyl-CoA → succinate → fumarate → malate → OAA.
- Main control: IDH (step 3); poisons hit steps 2 and 4.
- 3 NADH + FADH₂ + GTP + 2 CO₂ per turn; ~10 ATP per acetyl-CoA.
- Intermediates are exported for synthesis — anaplerosis keeps it running.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'entry-of-amino-acid-derived-carbon-skeletons-into-the-tca-cycle',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'subtopic',
    title: 'Entry of Amino Acid-Derived Carbon Skeletons into the TCA Cycle',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Protein-derived carbon enters the TCA cycle at four classic doors. After transamination/deamination, each glucogenic amino acid's skeleton is converted to one of the cycle's intermediates (or to pyruvate, which can then be carboxylated to oxaloacetate).

**Why entry matters:** amino acid skeletons *entering* the cycle at intermediates can either be **oxidised** (completing respiration) or **withdrawn** (as oxaloacetate) for **gluconeogenesis**. A skeleton entering as acetyl-CoA (ketogenic) can only burn — it cannot make glucose, because the two carbons it adds are immediately released as the two CO₂ of that turn (net zero carbon gain for glucose synthesis).

**The four doors (in curriculum order — each expanded in the following lessons):**

1. **Pyruvate** (from alanine, serine, cysteine, glycine, tryptophan) — pyruvate's options: carboxylated to **oxaloacetate** (gluconeogenic), oxidised to acetyl-CoA (energy), or reduced to lactate.
2. **α-Ketoglutarate** (from glutamate, glutamine, histidine, proline, arginine) — the five-carbon door; these are the amino acids of the "glutamate family".
3. **Succinyl-CoA** (from valine, isoleucine, methionine, threonine — plus odd-chain fatty acids via propionyl-CoA) — the propionate route; B12- and biotin-dependent.
4. **Oxaloacetate** (from aspartate, asparagine) — the direct four-carbon door; aspartate transaminates straight to oxaloacetate.

Fumarate is a fifth minor door (from phenylalanine/tyrosine half — the glucogenic half of those mixed amino acids).

**Clinical/pharmaceutical significance:** the urea cycle exports fumarate (a TCA intermediate) — coupling nitrogen disposal to energy metabolism. Glutamine feeding in critical illness exploits the glutamate→α-ketoglutarate door for enterocyte fuel. Valproate toxicity partly arises because it forms valproyl-CoA that competes at the succinyl-CoA door (β-oxidation/carnitine drain). And the entire logic of "glucogenic amino acids" is really the logic of these doors: which entry point allows net glucose synthesis.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four main doors: pyruvate (alanine family), α-KG (glutamate family), succinyl-CoA (propionate/BCAA + odd-chain FA), oxaloacetate (aspartate family).
- Minor door: fumarate (Phe/Tyr glucogenic half).
- Entry at intermediates (not acetyl-CoA) permits net gluconeogenesis.
- Acetyl-CoA entry = energy only; the 2 C leave as 2 CO₂ that turn.
- Urea-cycle fumarate links N disposal to the cycle; valproate competes at succinyl-CoA.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Glutamine/alanine supplementation in catabolic illness feeds these doors. Tryptophan depletion (some cancer therapies) shows how one amino acid's pathway can be pharmacologically throttled. Understanding doors = understanding which amino acids can rescue hypoglycaemia (glucogenic) and which cannot (leucine).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four principal entry doors and the amino acid families using each.
2. Why can an amino acid entering as acetyl-CoA never contribute net carbon to glucose?
3. How does the urea cycle connect to the TCA cycle through a shared intermediate?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Amino skeletons enter at pyruvate, α-KG, succinyl-CoA, OAA (± fumarate).
- Intermediate-door entries can yield glucose; acetyl-CoA entries cannot.
- The cycle is a hub where protein, carb, and fat chemistry meet.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'pyruvate-derived-from-alanine',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'subtopic',
    title: 'Entry into the TCA Cycle — Pyruvate (Derived from Alanine)',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Alanine** is the prototype glucogenic amino acid. Its transamination with α-ketoglutarate (alanine aminotransferase, ALT) yields **pyruvate** directly — the simplest possible carbon hand-off: one transamination step, one central metabolite.

$$\\text{Alanine} + \\alpha\\text{-ketoglutarate} \\rightleftharpoons \\text{pyruvate} + \\text{glutamate}$$

Serine, cysteine, glycine, and tryptophan also converge on pyruvate (via deamination or multi-step routes), but alanine dominates because of its role in the **glucose–alanine cycle** — the muscle–liver nitrogen shuttle met earlier:

1. Muscle breaks protein → amino acids; their nitrogen is transaminated onto pyruvate → **alanine**.
2. Alanine travels in blood to the liver.
3. Liver ALT converts alanine → pyruvate; nitrogen proceeds to urea.
4. Pyruvate is **carboxylated to oxaloacetate** (pyruvate carboxylase, ATP, biotin) and proceeds through gluconeogenesis → glucose.
5. Glucose returns to muscle — closing the cycle. Net: muscle nitrogen disposed as urea; muscle carbon recycled as glucose.

**Pyruvate's three fates** (choice depends on tissue and hormonal state):

- **Carboxylation → oxaloacetate** (pyruvate carboxylase): gluconeogenesis and anaplerosis. Activated by **acetyl-CoA** — the fed-fat-burning signal that says "make glucose".
- **Oxidative decarboxylation → acetyl-CoA** (pyruvate dehydrogenase complex): entry for energy production. Inhibited by acetyl-CoA/NADH/ATP; PDH deficiency causes lactic acidosis (pyruvate backs up → lactate).
- **Reduction → lactate** (lactate dehydrogenase): anaerobic glycolysis; regenerates NAD⁺ for continued glycolysis.

**Clinical notes:** ALT is the liver-specific aminotransferase — alanine's door is the clinical chemistry marker of hepatocyte injury. The glucose–alanine cycle explains why muscle wasting accompanies starvation (muscle exports alanine) and why IV glucose spares muscle protein (no need to cannibalise alanine's source). Lactic acidosis in metformin accumulation or shock reflects pyruvate's reduced-fate overload.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- ALT: alanine + α-KG ⇌ pyruvate + glutamate — the liver's marker enzyme.
- Alanine is muscle's nitrogen carrier (glucose–alanine cycle).
- Pyruvate fates: → OAA (carboxylase, biotin, activated by acetyl-CoA) → glucose; → acetyl-CoA (PDH) → energy; → lactate (LDH) → anaerobic ATP.
- PDH block → lactic acidosis; carboxylase block → fasting hypoglycaemia.
- IV glucose in illness spares muscle from alanine export.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin-associated lactic acidosis, thiamine deficiency (TPP shortfall slows PDH → lactate), and isoniazid's B6 effects all touch pyruvate's chemistry. Nutrition support with alanine-rich formulas exploits the glucose–alanine logic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the alanine transamination reaction and name the enzyme.
2. Describe the five steps of the glucose–alanine cycle and their net effect.
3. What are pyruvate's three fates, and which enzymes/hormones decide between them?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Alanine → pyruvate in one transamination; muscle N rides alanine to liver.
- Pyruvate: OAA (glucose), acetyl-CoA (energy), lactate (anaerobic).
- ALT = clinical chemistry of the alanine door.
- Fasting spares protein only when glucose is supplied.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'alpha-ketoglutarate-derived-from-glutamate',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'subtopic',
    title: 'Entry into the TCA Cycle — α-Ketoglutarate (Derived from Glutamate)',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Glutamate** is the amino-nitrogen hub of the body — and its carbon skeleton, **α-ketoglutarate**, is a TCA-cycle intermediate. Two reactions connect them, running in opposite directions:

$$\\text{Glutamate} + \\text{NAD(P)}^+ + \\text{H}_2\\text{O} \\xrightarrow{\\text{glutamate dehydrogenase}} \\alpha\\text{-ketoglutarate} + \\text{NH}_4^+ + \\text{NAD(P)H}$$

$$\\text{α-ketoglutarate} + \\text{amino acid} \\xrightarrow{\\text{transaminase}} \\text{glutamate} + \\text{keto acid}$$

**The glutamate family** (glutamate, glutamine, histidine, proline, arginine) all funnel nitrogen/carbon here: glutamine deamidates to glutamate (glutaminase); histidine → glutamate via histidase (deficiency → **histidinaemia**, usually benign); proline oxidises to glutamate (P5C intermediate); arginine's ornithine → glutamate semialdehyde → glutamate.

**Physiological significance:**

- **Nitrogen collection point:** every amino acid's nitrogen ultimately appears on glutamate; GDH then frees it for urea. The α-KG/glutamate pair is the metabolic revolving door of nitrogen.
- **Anaplerosis:** glutamate → α-KG *recharges* the TCA cycle — the reason glutamine is the kidney's and enterocyte's preferred fuel, and why glutamine is called "conditionally essential" in critical illness (immune cells and gut burn it; plasma falls in sepsis).
- **Biosynthesis export:** α-KG → glutamate → glutamine, GABA, glutathione, proline, arginine — a synthesis hub as much as an energy door.

**Clinical/pharmaceutical relevance:**

- **Glutamine supplementation** in critical illness/short-bowel: exploits the enterocyte/trooper fuel logic (though large ICU trials temper enthusiasm).
- **Ammonia handling:** glutamine synthetase *traps* ammonia as glutamine; in hepatic encephalopathy the brain swells partly because accumulated glutamine is osmotically active — the molecular rationale for lactulose and ammonia scavengers.
- **GABA and glutamate** are the brain's chief inhibitory/excitatory neurotransmitters — antiepileptic drugs (vigabatrin inhibits GABA transaminase; topiramate enhances GABA) act on this chemistry.
- **GDH allosteric control** (GTP/ADP) ties nitrogen disposal to energy state — the body burns amino acids when energy is needed, conserves them when not.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- GDH: glutamate + NAD(P)⁺ ⇌ α-KG + NH₄⁺ + NAD(P)H (reversible; GTP inhibits, ADP activates).
- Glutamate family: Glu, Gln, His, Pro, Arg all funnel to α-KG.
- α-KG entry = anaplerosis + nitrogen disposal hub.
- Glutamine: ammonia transport form; fuel for gut/kidney/immune cells; osmotic role in brain.
- Downstream products: GABA, glutathione, proline, arginine, purines.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Antiepileptics (GABA axis), lactulose/rifaximin (ammonia–glutamine axis), and critical-illness glutamine supplementation all act at the glutamate–α-KG door. High-protein "kidney diets" reduce α-KG load in uraemia — dietary pharmacy in action.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the GDH reaction and give its allosteric regulators.
2. Which five amino acids form the glutamate family, and how do two of the non-glutamate members reach glutamate?
3. Why is glutamine called conditionally essential in critical illness?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glutamate ⇌ α-KG: the nitrogen hub feeding the cycle.
- Family: Glu, Gln, His, Pro, Arg.
- Anaplerosis, ammonia transport, and neurotransmitter chemistry all pivot here.
- GDH's energy-linked control decides when amino acids burn.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'succinyl-coa-derived-from-amino-acids',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'subtopic',
    title: 'Entry into the TCA Cycle — Succinyl-CoA (Derived from Amino Acids such as Valine and Isoleucine)',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Succinyl-CoA** — the four-carbon TCA intermediate that normally yields the cycle's GTP — is the entry door for the **branched-chain amino acids (BCAAs)** valine, leucine, and isoleucine, for **methionine and threonine**, and for **odd-chain fatty acids**. All arrive via the same final common route: **propionyl-CoA → methylmalonyl-CoA → succinyl-CoA**.

**The propionyl-CoA route (memorise the two cofactors):**

1. **Propionyl-CoA carboxylase** (biotin-dependent, ATP): propionyl-CoA + CO₂ → **D-methylmalonyl-CoA**.
2. **Methylmalonyl-CoA epimerase:** D- → **L-methylmalonyl-CoA**.
3. **Methylmalonyl-CoA mutase** (vitamin **B12**-dependent, adenosylcobalamin): L-methylmalonyl-CoA → **succinyl-CoA** (an intramolecular rearrangement unique in metabolism).

**Where the propionyl-CoA comes from:**

- **Valine** (and methionine, isoleucine, threonine): their catabolism yields propionyl-CoA (isoleucine yields both succinyl-CoA precursor *and* acetyl-CoA — hence glucogenic + ketogenic).
- **Odd-chain fatty acids:** β-oxidation of a C-odd chain ends in propionyl-CoA — the reason odd-chain fats are the only fats that can raise glucose.
- **Cholesterol side-chain oxidation** contributes minor amounts.

**Clinical anchors:**

- **B12 deficiency** slows the mutase: methylmalonic acid (MMA) accumulates → **methylmalonic aciduria**; MMA elevation is the *specific* laboratory marker of cellular B12 deficiency (more sensitive than serum B12) — myelin synthesis also suffers (B12 also drives methionine synthase), causing the neurological signs of B12 deficiency.
- **Methylmalonic acidaemia** (mutase/B12-processing defect) is the inborn-error version — metabolic acidosis, hyperammonaemia, as covered in Disorders.
- **Valine is glucogenic** (→ succinyl-CoA), **leucine purely ketogenic** (→ acetyl-CoA/acetoacetate), **isoleucine both** — the standard classification answer.

**Energetics:** succinyl-CoA entering the cycle proceeds to oxaloacetate, generating 1 GTP + 1 FADH₂ + 1 NADH ≈ **6–7 ATP** before the OAA is available for gluconeogenesis — which is why BCAA-containing feeds are efficient fuels in catabolic states.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Door for Val, Ile, Met, Thr (+ odd-chain FA): all via propionyl-CoA.
- Propionyl-CoA carboxylase (biotin, ATP) → D-MM-CoA → epimerase → L-MM-CoA → **mutase (B12)** → succinyl-CoA.
- B12 deficiency → methylmalonic aciduria; MMA ↑ = sensitive B12-deficiency marker.
- Valine glucogenic; leucine ketogenic; isoleucine both.
- Odd-chain FA are the only glucogenic fats (propionyl-CoA).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `B12 deficiency workups order MMA alongside homocysteine; nitrous oxide abuse inactivates B12 (mutase fails → neurological signs). Methylmalonic acidaemia therapy (protein restriction, carnitine, B12 in responsive forms) was covered in Disorders — this lesson explains *why* those interventions work.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the three-step propionyl-CoA → succinyl-CoA route with cofactors.
2. Which amino acids and other sources feed propionyl-CoA?
3. Why does B12 deficiency raise both methylmalonic acid and homocysteine?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Propionyl-CoA (biotin) → MM-CoA → succinyl-CoA (B12 mutase).
- BCAAs, Met, Thr, odd-chain FA all use this door.
- MMA ↑ = cellular B12 deficiency signature.
- Valine glucogenic, leucine ketogenic, isoleucine mixed.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'oxaloacetate-derived-from-aspartate',
    courseId: 'bch-201',
    topicId: 'citric-acid-cycle',
    nodeType: 'subtopic',
    title: 'Entry into the TCA Cycle — Oxaloacetate (Derived from Aspartate)',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Aspartate** — transaminated directly with α-ketoglutarate (AST) — becomes **oxaloacetate** in one step: the most direct amino-acid entry into the TCA cycle, and the door whose exit leads straight to gluconeogenesis.

$$\\text{Aspartate} + \\alpha\\text{-ketoglutarate} \\rightleftharpoons \\text{oxaloacetate} + \\text{glutamate}$$

Asparagine deamidates first (asparaginase → aspartate), then joins the same door. (Paediatric oncology exploits this: **asparaginase** therapy depletes plasma asparagine so leukaemic lymphoblasts — which cannot make their own asparagine — starve.)

**Why oxaloacetate is special:**

- **Gluconeogenesis hinge:** OAA is the obligatory entry point for glucose synthesis. Amino acids entering *above* OAA (at α-KG, succinyl-CoA) must climb the cycle to OAA; aspartate starts there. In fasting, hepatic OAA is the bottleneck: it is drained to gluconeogenesis, and the TCA cycle's capacity to condense acetyl-CoA falls — the mechanistic reason **fasting shifts acetyl-CoA into ketone bodies**.
- **Catalytic carrier:** like ornithine in the urea cycle, OAA is regenerated each turn — its concentration is tiny (micromolar) but its flux enormous.
- **Malate–aspartate shuttle:** cytosolic NADH (from glycolysis) is ferried into mitochondria as malate (via cytosolic OAA → malate), re-oxidised inside by mitochondrial malate dehydrogenase — delivering the reducing equivalents that make aerobic glycolysis yield its full 2.5-ATP-per-NADH value.
- **Urea-cycle connection:** aspartate donates urea's *second* nitrogen (argininosuccinate synthetase step); fumarate released by the lyase re-enters the TCA cycle — the "Krebs bi-cycle" coupling nitrogen disposal with energy metabolism.
- **Transamination crossroads:** AST (aspartate's enzyme) is the clinical marker of liver *and* cardiac/muscle injury.

**Clinical notes:** pyruvate carboxylase deficiency (OAA synthesis fails) causes lactic acidosis + fasting hypoglycaemia — the anaplerotic door's importance made visible. Oxalate stones and primary hyperoxalaemia sit downstream of this chemistry in glyoxylate metabolism.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- AST: aspartate + α-KG ⇌ OAA + glutamate — one-step entry.
- OAA = gluconeogenesis's obligatory junction; its drain during fasting forces ketogenesis.
- Malate–aspartate shuttle moves cytosolic NADH into mitochondria.
- Aspartate donates urea's second nitrogen; fumarate returns the link.
- Asparaginase therapy exploits asparagine auxotrophy of leukaemias.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Asparaginase (ALL therapy) can cause pancreatitis/thrombosis — a metabolic enzyme used as a drug. AST/ALT ratio (De Ritis) helps classify liver injury. Fasting ketosis logic (OAA drain) underlies SGLT2-inhibitor euglycaemic DKA counselling.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the aspartate transamination reaction and its enzyme.
2. Why does heavy gluconeogenic drain of oxaloacetate promote ketogenesis?
3. Describe the malate–aspartate shuttle's purpose in one sentence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Aspartate → OAA directly; asparagine one step before.
- OAA: gluconeogenic hinge, catalytic carrier, shuttle cargo, urea-N donor.
- Its drain in fasting tilts acetyl-CoA to ketones.
- Asparaginase turns the door into oncologic leverage.`,
      },
    ],
  },
];
