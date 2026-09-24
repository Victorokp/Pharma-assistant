import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 8: Amino Acid Metabolism.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; overview/clinical-orientation subtopics A; descriptive B.
 */

export const bch201AminoAcidMetabolismLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'amino-acid-metabolism',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'topic',
    title: 'Amino Acid Metabolism',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Amino acid metabolism is the managing of amino acids once they are in the body's pool: how they are built (**biosynthesis**), how they are broken down (**catabolism/degradation**), how their nitrogen is recycled between molecules (**pathways of nitrogen transfer**), and how their skeletons and nitrogen feed other chemistry (**precursor roles**).

The topic rests on one organising insight: amino acids are handled as **two separable parts**. The **amino group (nitrogen half)** flows through a fixed set of carrier reactions — transamination onto glutamate/aspartate, oxidative deamination to ammonia, and disposal via the urea cycle. The **carbon skeleton (fuel half)** flows into central metabolism at the doors already mapped (pyruvate, acetyl-CoA, α-ketoglutarate, succinyl-CoA, oxaloacetate). Because the halves separate, one reaction set handles *all* twenty amino acids' nitrogen, and each skeleton simply follows carbon chemistry.

From this hub, amino acids reach outward: **neurotransmitters** (glutamate/GABA, dopamine from tyrosine, serotonin from tryptophan, glycine), **hormones** (adrenaline/thyroxine from tyrosine; melatonin from tryptophan), **nucleotides** (glycine/aspartate/glutamine into purines and pyrimidines), **haem** (glycine + succinyl-CoA), **glutathione** (glutamate + cysteine + glycine), **creatine** (arginine + glycine + methionine), and **SAM**, the universal methyl donor.

Clinically the topic explains nitrogen balance (met earlier), ammonia handling, the inborn errors that interrupt specific flows (PKU, alkaptonuria, MSUD, urea-cycle defects), and the drug interactions that target these flows (levodopa, carbidopa, methotrexate's folate antagonism). It is the chemistry that connects dinner to neurotransmitter, muscle to urea, and folate to DNA synthesis.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Amino acids split into N-half (transamination → deamination → urea) and C-half (skeleton → central metabolism).
- Nitrogen carriers: glutamate (collector), glutamine (transport), alanine (muscle shuttle), aspartate (urea donor).
- Biosynthesis: 11 non-essential amino acids from central intermediates.
- Precursor exports: neurotransmitters, hormones, haem, nucleotides, glutathione, creatine, SAM.
- Clinical anchors: PKU, MSUD, urea-cycle defects, levodopa, folate antagonists.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Levodopa therapy is amino-acid metabolism hijacked on purpose; carbidopa protects it from peripheral decarboxylation; high-protein meals compete for its absorption. Methotrexate kills cells by starving thymidylate synthesis — a folate-mediated amino-acid-derived step. Understanding this topic is understanding half of clinical pharmacology's targets.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain the "two separable parts" logic of amino acid metabolism.
2. Name four nitrogen-carrier molecules and each one's shuttle role.
3. List five non-protein products made from amino acids.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- N-half → urea; C-half → fuel/precursors.
- Glutamate/glutamine/alanine/aspartate are the nitrogen buses.
- Biosynthesis covers 11 AAs; essentials come from diet.
- Exports: neurotransmitters, hormones, nucleotides, haem, glutathione, SAM.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acid-catabolism',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Catabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Catabolism** is the controlled dismantling of amino acids — releasing their nitrogen for excretion and their carbon for energy or conversion. It accelerates in three states: **excess dietary protein** (surplus amino acids cannot be stored — they are burned), **fasting** (muscle protein is degraded to feed gluconeogenesis), and **catabolic illness** (trauma, sepsis, burns — cortisol and cytokines drive protein breakdown).

**The two-step standard route:**

1. **Remove the nitrogen:** transamination (onto α-ketoglutarate → glutamate, or oxaloacetate → aspartate) followed by oxidative deamination of glutamate (GDH) releases NH₄⁺. Exception routes: lysine, threonine deaminate directly; proline/hydroxyproline oxidise in two steps; histidine releases its ring nitrogen via histidase (deficiency → histidinaemia, usually benign).
2. **Dispose of nitrogen:** urea cycle (liver) → urea → urine.
3. **Process the skeleton:** the α-keto acid feeds the TCA/central metabolism doors — burned for ATP, converted to glucose (glucogenic) or ketones (ketogenic), or used for synthesis.

**Special catabolic routes worth knowing:**

- **Branched-chain amino acids** are stripped of nitrogen in *muscle* (transaminated) but their skeletons are oxidised there too (BCKDH complex, structurally like PDH; deficiency → MSUD).
- **Phenylalanine → tyrosine** (PAH, BH₄) opens the only route; blocked in PKU.
- **Methionine** runs the **trans-sulfuration/methylation cycle**: SAM → SAH → homocysteine → (CBS, B6) cystathionine → cysteine, or remethylated to methionine (B12/folate). Homocysteine accumulation (B6/B12/folate deficiency, CBS defects) is a cardiovascular and thrombosis risk marker.
- **Tryptophan** splits: serotonin route (~1%) and **kynurenine/NAD route** (~95%).
- **Threonine/lysine** deaminate directly (no transamination).

**Quantitative sense:** an adult on 100 g protein/day disposes of ~16 g nitrogen (≈100 g urea) daily; the urea cycle's capacity is normally far above need but can be overwhelmed in illness or deficient in inherited defects.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Catabolism accelerates: protein excess, fasting, catabolic illness.
- Standard route: transamination → GDH deamination → urea cycle.
- Exceptions: Lys/Thr direct deamination; His via histidase; Pro/Hyp two-step oxidation.
- BCAAs catabolised largely in muscle (BCKDH; MSUD when deficient).
- Methionine cycle: SAM → homocysteine → cysteine (B6) or remethylation (B12/folate).
- Protein catabolism yields urea proportional to protein load (~16 g N per 100 g protein).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Homocysteine-lowering therapy (B6/B12/folate) is catabolic-route chemistry in a prescription. Valproate competes with fatty-acid/amino-acid catabolism (carnitine drain); corticosteroid catabolism raises urea; allopurinol touches purine catabolism downstream.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three physiological states that accelerate amino-acid catabolism.
2. Which amino acids bypass transamination, and how is each handled?
3. Outline the methionine → homocysteine → cysteine route with its three B-vitamin cofactors.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Catabolism = strip N (→ urea) + process skeleton (→ fuel).
- Standard: transamination + GDH; special routes for Lys/Thr/His/Pro.
- BCAAs burn in muscle; methionine cycles through SAM/homocysteine.
- 100 g protein → ~16 g nitrogen → ~100 g urea daily.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acid-biosynthesis',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Biosynthesis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Humans synthesise the **eleven non-essential amino acids** by short routes from central-metabolism intermediates — a striking contrast with plants/microbes, which build all twenty (including the shikimate-route aromatics we cannot). Learning these routes is learning why each amino acid is non-essential.

**Transamination-furnished amino acids** (the simplest "synthesis" — add an amino group to a pre-existing keto acid):

- **Alanine** ← pyruvate (ALT).
- **Glutamate** ← α-ketoglutarate (GDH, uses NH₄⁺/NADPH).
- **Aspartate** ← oxaloacetate (AST).
- Glutamate then donates nitrogen onward for the rest.

**Glutamate-family derivatives:**

- **Glutamine** ← glutamate + NH₄⁺ (glutamine synthetase, ATP) — ammonia detox/storage.
- **Proline** ← glutamate (reduction to glutamate-5-semialdehyde → cyclise to Δ¹-pyrroline-5-carboxylate → reduce to proline).
- **Arginine** — partially made via the urea cycle (arginine is regenerated from argininosuccinate), but adult hepatic capacity is consumed by urea production; the **intestinal–renal axis** (citrulline from gut → arginine in kidney) supplies extra; essential in growth/sepsis.
- **Ornithine/citrulline** — urea-cycle intermediates, not protein-incorporated.

**3-Phosphoglycerate family:**

- **Serine** ← 3-PG (oxidation → 3-phosphohydroxypyruvate; transamination → 3-phosphoserine; phosphatase → serine).
- **Glycine** ← serine (serine hydroxymethyltransferase, **PLP + THF** — the one-carbon handle).
- **Cysteine** ← serine + homocysteine (trans-sulfuration: cystathionine synthase B6, cystathionase B6); essential when methionine is limiting.

**Essential-derived non-essentials:**

- **Tyrosine** ← phenylalanine (PAH + BH₄) — the only non-essential made *from* an essential; becomes essential in PKU.
- Asparagine ← aspartate (asparagine synthetase, ATP + glutamine-N).

**Why the essentials cannot be made:** their skeletons need pathways humans never had — shikimate (aromatics), branched-chain carbon assembly (Val/Leu/Ile), sulfur insertion into specific frameworks (Met), or unique routes (Lys, Thr, Trp, His). Evolution dropped redundant pathways when diet reliably supplied the product — the molecular basis of nutritional essentiality.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Transamination makes Ala, Glu, Asp directly from pyruvate/α-KG/OAA.
- Gln (GS, ATP), Pro, Arg, His-family from glutamate.
- Ser from 3-PG; Gly from Ser (PLP+THF); Cys from Ser + homocysteine (B6).
- Tyr from Phe (PAH/BH₄) — conditionally essential in PKU.
- Essentials unmakeable: no shikimate/BCAA-skeleton/sulfur-insertion routes.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Arginine/citrulline supplements target the gut–kidney NO-production axis; serine/glycine metabolism is a cancer-metabolism drug area (SHMT inhibitors); tyrosine supplementation in PKU formulas is biosynthesis failure patched by diet.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the four transamination-synthesised amino acids with their keto-acid precursors.
2. Trace serine → glycine → cysteine, naming cofactors.
3. Why does PKU make tyrosine nutritionally essential?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 11 non-essentials: short routes from central intermediates.
- Glutamate is the synthesis hub as much as the catabolic collector.
- Ser/Gly/Cys share the 3-PG family; one-carbon THF chemistry links them.
- Essentiality = missing skeleton-building pathways.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'amino-acid-pathways',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Pathways',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Beyond catabolism and biosynthesis, amino acids participate in dedicated **pathways of nitrogen transfer and carbon exchange** — the internal plumbing that moves –NH₂ groups and one-carbon units between molecules. This lesson orients the three principal plumbing systems; the next lessons detail the two named pathways.

**1. The transamination network.** Dozens of aminotransferases shuttle amino groups between amino acids and keto acids, all through the central pair **glutamate/α-ketoglutarate**. PLP is the universal coenzyme. The network means nitrogen is *fungible*: the amino group of a dietary leucine can end up on glutamate, become ammonia, be built into glutamine, or appear as a urea nitrogen — all in minutes.

**2. The glutamate pathway** (detailed next lesson): glutamate as the nitrogen hub — GDH (free NH₄⁺ ⇄ glutamate), glutamine synthetase/glutaminase (transport/storage), and the transamination collection system. It is the "bank account" into which amino nitrogen is deposited and from which urea, glutamine, and biosynthetic nitrogen are drawn.

**3. The aspartate pathway** (lesson after next): aspartate as the second nitrogen donor — for the urea cycle's argininosuccinate step, for purine rings (N1), and for pyrimidine synthesis (the whole ring), plus oxaloacetate exchange with the TCA cycle.

**The one-carbon thread (THF).** Serine and glycine donate single-carbon units to tetrahydrofolate; THF-carbons methylate homocysteine → methionine → SAM → methylations of DNA, histones, neurotransmitters; the dUMP → TMP step of DNA synthesis consumes THF-carbons (5-FU and methotrexate act here). Amino-acid metabolism literally supplies the carbon atoms for epigenetics and DNA.

**Reading the map:** whenever an exam question says "where does the nitrogen go?", answer through the network: donor amino acid → (transaminase, PLP) → glutamate → (GDH) → NH₄⁺ → (urea cycle) or (GS) → glutamine. Whenever it says "where does a one-carbon unit go?" — serine/glycine → THF → SAM/TMP/purine C2/C8.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Nitrogen is fungible via the PLP transamination network centred on glutamate/α-KG.
- Glutamate pathway = nitrogen bank (GDH, GS/glutaminase).
- Aspartate pathway = second-N donor (urea, purines, pyrimidines).
- THF one-carbon units from Ser/Gly feed methylation (SAM) and DNA synthesis (TMP).
- Antifolate drugs (methotrexate) and 5-FU block the one-carbon thread.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Folate/B12/B6 supplementation decisions, methotrexate rescue (leucovorin), SAM supplements, and levodopa/carbidopa design all sit on this plumbing. Counselling vegetarians on B12 (methylation cycle) is the same chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is nitrogen described as "fungible" in amino-acid metabolism?
2. Which amino acids donate one-carbon units, and to what carrier?
3. Name the two aspartate destinations in nitrogen metabolism.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Transamination network: N moves freely via glutamate.
- Glutamate = bank; aspartate = second donor; THF = carbon courier.
- One-carbon chemistry links amino acids to DNA and methylation.
- Drugs block these threads (MTX, 5-FU).`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'glutamate-pathway',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Pathways — Glutamate Pathway',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **glutamate pathway** is the nitrogen economy's central clearing house. Four reactions do the work:

**1. Collection (transamination onto α-KG):** amino groups from nearly every amino acid arrive here.
$$\\text{AA} + \\alpha\\text{-KG} \\xrightarrow{\\text{aminotransferase (PLP)}} \\alpha\\text{-keto acid} + \\text{glutamate}$$

**2. Release (oxidative deamination):** GDH frees NH₄⁺ when urea synthesis needs it; the reaction is bidirectional, also *absorbing* ammonia into glutamate when ammonia is high (a detox mode using NADPH).

**3. Transport (glutamine synthetase):** 
$$\\text{Glutamate} + \\text{NH}_4^+ + \\text{ATP} \\rightarrow \\text{glutamine} + \\text{ADP} + \\text{P}_i$$
Glutamine is the non-toxic blood carrier of nitrogen (muscle → liver/kidney). The reverse (glutaminase) releases ammonia where needed — kidney for urine buffering, intestine/enterocytes for their own metabolism.

**4. Redistribution (glutamate's biosynthetic exports):** glutamate donates nitrogen to make glutamine, proline, arginine-family intermediates, purine N9/N3, carbamoyl phosphate (indirectly via glutamine's amide → CPS-II), GABA (decarboxylation), and glutathione (Glu–Cys–Gly tripeptide).

**Why this design is elegant:**

- **Toxicity control:** free ammonia never travels; it rides as glutamine (or alanine).
- **Economy:** one carrier (glutamate) + one coenzyme (PLP) + one enzyme family (aminotransferases) handles twenty amino acids.
- **Energy coupling:** GDH's direction follows NAD(P)⁺/NADPH and ATP/ADP state — nitrogen disposal is synchronised with energy status.
- **Tissue specialisation:** muscle exports nitrogen as alanine + glutamine (~80% of released N); liver imports and processes to urea; kidney hydrolyses glutamine to buffer acid (NH₄⁺ into urine) — acidosis increases renal glutaminase, a direct metabolic response to pH.

**Clinical notes:** hepatic encephalopathy's brain glutamine/osmotic swelling (ammonia trapped as glutamine); valproate's hyperammonaemia (carnitine/GDH effects); monosodium glutamate metabolism (glutamate is abundant endogenously — dietary MSG sensitivity is more perception than chemistry).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four reactions: transamination collection, GDH release, GS transport/glutaminase release, biosynthetic exports.
- Glutamine = non-toxic N carrier (muscle → liver/kidney); alanine = muscle C+N carrier.
- Kidney glutaminase responds to acidosis (NH₄⁺ buffers urine).
- Exports: Gln, Pro, Arg-family, purines, GABA, glutathione.
- Ammonia never travels free — always as glutamine/alanine.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Lactulose works by *reducing* the ammonia that glutamine synthetase must trap (colon trapping NH₄⁺); renal-tubular-acidosis physiology is glutaminase chemistry; glutamine-enriched enteral formulas target the pathway's transport role in gut integrity.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the GS and glutaminase reactions and their tissue purposes.
2. Why is it safer to transport nitrogen as glutamine/alanine than as free ammonia?
3. How does metabolic acidosis change renal glutamine handling?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glutamate pathway: collect → release → transport → export nitrogen.
- GS/glutaminase = the ammonia taxi and its return trip.
- Kidney uses glutamine to fight acidosis; liver to build urea.
- One hub, one coenzyme, twenty amino acids served.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'aspartate-pathway',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Pathways — Aspartate Pathway',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **aspartate pathway** moves nitrogen and carbon through **aspartate** — the amino acid whose skeleton *is* oxaloacetate and whose amino group is the body's preferred "second nitrogen" donor.

**Generating aspartate:** oxaloacetate transaminates with glutamate (AST):
$$\\text{Oxaloacetate} + \\text{glutamate} \\rightleftharpoons \\text{aspartate} + \\alpha\\text{-ketoglutarate}$$
So aspartate is glutamate's nitrogen wearing a four-carbon TCA coat — and its availability depends on TCA turnover.

**Destinations of aspartate's nitrogen:**

1. **Urea cycle (second N):** argininosuccinate synthetase condenses citrulline + aspartate (ATP); the lyase releases fumarate — nitrogen into urea, carbon back to the TCA cycle. The **malate–aspartate shuttle** is the membrane logistics partner: aspartate crosses the inner mitochondrial membrane in exchange for glutamate, letting nitrogen and reducing equivalents move in opposite directions.
2. **Purine synthesis (N1):** aspartate's amino group becomes purine position N1 (via adenylosuccinate in AMP synthesis — the IMP → AMP step is a mini-urea-cycle-style condensation).
3. **Pyrimidine synthesis (whole ring):** carbamoyl aspartate (aspartate + carbamoyl phosphate) cyclises to dihydroorotate — every pyrimidine's C4-C5-C6-N1 skeleton is aspartate's.

**Destinations of aspartate's carbon (via oxaloacetate):** gluconeogenesis (OAA → PEP), TCA oxidation, transamination back to glutamate. Asparagine synthetase adds a variant: aspartate + glutamine-N → asparagine (essential for glycoproteins; leukaemia cells lack the synthetase — hence asparaginase therapy).

**Regulatory note:** because aspartate supply depends on oxaloacetate, anything draining OAA (gluconeogenesis in fasting) throttles the aspartate-dependent syntheses — one reason prolonged fasting suppresses urea-cycle flux per unit nitrogen and shifts the body toward glutamine-based nitrogen movement.

**Clinical anchors:** the De Ritis ratio (AST/ALT) reads the two transaminases' balance in liver injury; asparaginase's thrombosis/pancreatitis risks; allopurinol's downstream footprint in purine salvage; pyrimidine analogues (5-FU → FdUMP) blocking the thymidylate synthase step that aspartate-derived rings feed into.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Aspartate = OAA + nitrogen (AST transamination).
- Second-N donor: urea (argininosuccinate step, fumarate returns), purine N1, whole pyrimidine ring.
- Malate–aspartate shuttle couples N transfer with NADH movement.
- Asparagine synthetase: Asp + Gln-N → Asn (leukaemia auxotrophy → asparaginase).
- OAA drain (fasting) throttles aspartate-dependent syntheses.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Asparaginase (ALL), 5-FU (pyrimidine route), allopurinol (purine salvage), and leucovorin rescue all act on or downstream of aspartate chemistry. AST/ALT interpretation is daily clinical pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the reaction generating aspartate and name the enzyme.
2. Name three destinations of aspartate's nitrogen and one of its carbon.
3. How does the malate–aspartate shuttle relate nitrogen transfer to NADH transport?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Aspartate: the second-nitrogen courier with a TCA skeleton.
- Urea N2, purine N1, pyrimidine ring all draw from it.
- Shuttle ties N movement to energy transfer.
- OAA availability governs the whole pathway.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'amino-acid-degradation',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Degradation',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Degradation** is the irreversible phase of amino-acid catabolism: the nitrogen is removed and the carbon skeleton is committed to oxidation or conversion. This lesson organises the whole landscape; the two following lessons zoom into its standard halves.

**The canonical two phases:**

- **Phase 1 — nitrogen removal** (transamination and/or oxidative deamination; exceptions Lys/Thr/Pro/His as met earlier). Nitrogen exits as NH₄⁺ → urea.
- **Phase 2 — skeleton oxidation/conversion** (carbon skeleton → central metabolism).

**A 20-amino-acid decision map (which door, which family):**

| Amino acid(s) | Door |
|---|---|
| Ala, Ser, Cys, Gly, Thr (part) | Pyruvate |
| Glu, Gln, His, Pro, Arg | α-Ketoglutarate |
| Val, Met, (Ile), odd-chain FA | Succinyl-CoA |
| Asp, Asn | Oxaloacetate |
| Phe, Tyr (glucogenic half) | Fumarate |
| Leu, Lys, (Ile, Phe, Tyr, Trp ketone half) | Acetyl-CoA / acetoacetate |

**Regulatory highlights:**

- **BCKDH complex** (Val/Leu/Ile): PDH-like, five cofactors, phosphorylation-inactivated; deficiency = MSUD.
- **PAH** (Phe → Tyr): BH₄-dependent; deficiency = PKU.
- **Histidase** (His): deficiency = histidinaemia.
- **Cystathionine synthase** (homocysteine → cystathionine): B6; deficiency = homocystinuria.

**Clinical reasoning frame:** when a degradation enzyme fails, the *upstream substrate* accumulates (Phe in PKU; homocysteine in homocystinuria; BCKAs in MSUD) and the *downstream product* becomes essential (tyrosine in PKU; cysteine in homocystinuria). Diagnosis names the block by metabolite; treatment restricts the substrate and supplies the product.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Degradation = N removal (→urea) + skeleton commitment (→fuel/precursors).
- Doors: pyruvate, α-KG, succinyl-CoA, OAA, fumarate, acetyl-CoA.
- Regulated complexes: BCKDH (MSUD), PDH-analogues; PAH (PKU); CBS (homocystinuria).
- Block → substrate accumulates, product becomes essential.
- 20 AAs map onto 6 doors — the table is the mnemonic.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Formula design for IEMs (MSUD BCAA-restricted, PKU Phe-free) is this map applied clinically. Homocysteine-lowering (B6/B12/folate) and sapropterin/BH₄ are pharmacologic supports of failed degradation steps.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Reproduce the six-door table for the 20 amino acids.
2. What are the five cofactors of BCKDH, and which disease follows its deficiency?
3. State the general "block → accumulate/product-essential" rule with two examples.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Two phases: strip N, burn/convert C.
- Six doors route all skeletons.
- Famous blocks: MSUD (BCKDH), PKU (PAH), homocystinuria (CBS).
- Therapy = restrict substrate, supply product.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'features-of-transamination',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Degradation — Features of Transamination',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Transamination's features — the properties examiners test and clinicians use:

**1. Reversibility.** The same enzymes run synthesis and degradation; direction follows mass action (substrate/product concentrations). This is why transamination serves both amino-acid *biosynthesis* and *degradation* with one enzyme set.

**2. No net nitrogen loss.** Transamination only *moves* amino groups; ammonia appears only after oxidative deamination. A pathway map showing "transamination → urea" is compressed: the urea N arrives via glutamate dehydrogenase and aspartate, not via the transaminase itself.

**3. PLP is the universal coenzyme.** Pyridoxal phosphate (vitamin B6) accepts and re-donates the amino group through a Schiff-base (aldimine) intermediate — pyridoxal ⇄ pyridoxamine cycling. B6 deficiency therefore degrades *all* transamination at once: elevated homocysteine, impaired neurotransmitter synthesis (GABA, serotonin), and dermatologic/neurologic signs of the coenzyme's other roles.

**4. Specificity pairs.** Each aminotransferase serves a small substrate set; the two diagnostic stars:
- **ALT (alanine aminotransferase):** alanine ⇄ pyruvate — liver-specific.
- **AST (aspartate aminotransferase):** aspartate ⇄ oxaloacetate — liver, heart, muscle, RBC.
Pattern use: ALT ≫ AST → viral/drug hepatitis; AST ≫ ALT (2:1+) → alcoholic liver disease; both high with muscle symptoms → myopathy/rhabdomyolysis.

**5. The glutamate funnel.** Nearly every transamination lands nitrogen on glutamate — α-ketoglutarate is the "receiving end" — before GDH frees it. Exceptions that never transaminate: **lysine, threonine, proline, hydroxyproline** (classic exam list).

**6. Equilibrium and thermodynamics.** Standard free energy near zero — neither direction is "favoured"; flux is set by relative substrate availability and product removal (e.g. GDH siphoning glutamate pulls the network forward).

**7. Tissue distribution.** Transaminases are cytosolic *and* mitochondrial (isoenzymes); muscle's cytosolic ALT feeds the glucose–alanine cycle; mitochondrial AST participates in the malate–aspartate shuttle.

**8. Diagnostic liberation.** Transaminases are released with cell death — they are *intracellular* enzymes, so plasma levels index damage, not hepatic function (a cirrhotic liver can have "normal" transaminases when hepatocyte mass is gone).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Reversible; no net N loss; PLP (B6) coenzyme via Schiff base.
- ALT = liver-specific; AST = liver/heart/muscle/RBC; patterns diagnose injury type.
- Non-transaminating AAs: Lys, Thr, Pro, Hyp.
- Equilibrium reactions — flux follows product removal.
- Elevated plasma transaminases = cell damage, not function loss.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Isoniazid's B6 antagonism (→ peripheral neuropathy; pyridoxine co-prescription), statin myopathy's AST rise (misread as liver injury), and isoniazid/valproate hepatotoxicity monitoring all rest on transaminase interpretation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain why transamination alone never produces ammonia.
2. Which amino acids do not transaminate, and how is each degraded instead?
3. Interpret: ALT 420 U/L, AST 180 U/L vs ALT 60, AST 260 in two different patients.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Transamination: reversible, PLP-dependent, N-transport only.
- Glutamate/α-KG is the funnel; 4 AAs bypass it.
- ALT vs AST patterns localise injury.
- Plasma levels = damage marker, not function test.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'oxidation-of-carbon-skeletons',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acid Degradation — Oxidation of Carbon Skeletons',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Once deaminated, each skeleton (an α-keto acid) is oxidised or converted along central metabolism. This lesson follows the skeletons' energies and fates quantitatively.

**Oxidation routes by door:**

- **Pyruvate-door skeletons** (Ala, Ser, Cys, Gly): pyruvate → acetyl-CoA (PDH) → TCA: full oxidation (~10 ATP per acetyl-CoA beyond the door) or OAA → gluconeogenesis.
- **α-KG-door skeletons** (Glu, Gln, His, Pro, Arg): α-KG → succinyl-CoA (α-KGDH) → OAA: 1 NADH + 1 GTP + 1 FADH₂ ≈ 6.5–7 ATP en route, then OAA is either oxidised (malate → OAA yields 1 more NADH) or drawn off to glucose.
- **Succinyl-CoA-door skeletons** (Val, Met, Thr, Ile's glucogenic half): succinyl-CoA → OAA: 1 GTP + 1 FADH₂ + 1 NADH ≈ 6.5–7 ATP, then OAA options as above.
- **OAA-door skeletons** (Asp, Asn): OAA → malate/fumarate cycles or PEP → gluconeogenesis.
- **Acetyl-CoA-door skeletons** (Leu, Lys, ketone halves): burn only — 2 acetyl-CoA from leucine ≈ 20 ATP via TCA, or → acetoacetate → ketone export.

**Energetic note:** amino acids as fuel ≈ 4 kcal/g (between carbohydrate and fat) — protein's caloric value in nutrition labels is exactly this skeleton oxidation.

**Fate under hormonal states:**

- **Fed:** skeletons → direct oxidation or lipogenic conversion (acetyl-CoA → fatty acids).
- **Fasting:** glucogenic skeletons → gluconeogenesis (liver); ketogenic skeletons → ketogenesis; muscle exports glutamine/alanine skeletons as glucose precursors.
- **Uncontrolled diabetes:** similar to fasting plus accelerated proteolysis — nitrogen waste rises (urea ↑), skeletons flood gluconeogenesis (hyperglycaemia worsens despite glycosuria).

**Special skeleton exports:** glycine's skeleton builds haem/purines/creatine rather than burning; glutamate's GABA shunt (α-KG → glutamate → GABA → succinic semialdehyde → succinate) is a neural TCA bypass; vigabatrin (antiepileptic) blocks GABA transaminase there.

**Waste product:** the nitrogen handled separately as urea — skeletons themselves are carbon-neutral, ending as CO₂ + H₂O (or glucose/ketones).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Skeleton oxidation feeds the same TCA/ETC economy as carbohydrate/fat (~4 kcal/g).
- Door-dependent yields: α-KG/succinyl-CoA doors ≈ 6.5–7 ATP before OAA; acetyl-CoA doors ≈ 10 ATP each.
- Leucine burns as ketone/fat only; glucogenic skeletons can raise glucose.
- GABA shunt: neural TCA bypass through glutamate/GABA.
- Fed = oxidation/lipogenesis; fasting = gluconeogenesis/ketogenesis.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Vigabatrin's GABA-transaminase inhibition is skeleton-pathway pharmacology; ketogenic-diet drug monitoring (valproate levels, carnitine) leans on these routes; protein-energy calculations in TPN use the 4 kcal/g skeleton value.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Calculate approximate ATP from one glutamate oxidised fully via the TCA cycle (state assumptions).
2. Why can leucine's skeleton yield no glucose?
3. Describe the GABA shunt as a TCA bypass.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Skeletons enter central metabolism at their door; yields differ by door.
- Protein ≈ 4 kcal/g from skeleton oxidation.
- Hormonal state chooses: burn, glucose, or ketones.
- Some skeletons serve synthesis (haem, purines) rather than fuel.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'amino-acids-as-precursors',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acids as Precursors',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Amino acids are not only fuel and protein monomers — they are the **feedstock of a whole secondary economy**: signalling molecules, pigments, cofactors, and structural specialities. This orientation maps the precursor families; the next three lessons detail neurotransmitters, hormones, and nucleotides.

**The precursor map:**

- **Glycine:** haem (with succinyl-CoA), purine ring (C4/C5/N7), creatine (with arginine), glutathione (with Glu/Cys), bile-acid conjugation (glycocholic acid), collagen's every-third residue.
- **Glutamate:** GABA (decarboxylation, PLP), glutathione (γ-Glu-Cys-Gly), folate polyglutamation, N-acetylglutamate (urea-cycle activator).
- **Arginine:** nitric oxide (NOS), creatine (with glycine), urea, agmatine, polyamines (via ornithine → putrescine → spermidine/spermine).
- **Methionine:** SAM — the universal methyl donor (DNA/histone/neurotransmitter methylations; creatine synthesis; phosphatidylcholine).
- **Tyrosine:** catecholamines (dopa → dopamine → noradrenaline → adrenaline), melanin, thyroid hormones (T3/T4), DOPA.
- **Tryptophan:** serotonin, melatonin, niacin (NAD/NADP via kynurenine), indoles.
- **Histidine:** histamine (decarboxylation), dipeptides (carnosine/anserine), one-carbon units via FIGLU.
- **Cysteine:** glutathione, taurine (bile-acid conjugation, retina), H₂S signalling, CoA's cysteamine arm.
- **Serine:** sphingosine backbone, phosphatidylserine, one-carbon THF donation.
- **Aspartate:** pyrimidine ring, purine N1, urea N2, asparagine.
- **Glutamine:** purine N3/N9, carbamoyl phosphate (CPS-II), amino-sugars, nitrogen shuttle.

**Dosage-sensitive roles:** these pathways run on *small* fluxes — neurotransmitter synthesis uses a fraction of a gram of tyrosine daily, so deficiency shows first in the *specialised* product (melanin, serotonin) before protein synthesis suffers.

**Drug leverage:** the pathways are druggable at every node — carbidopa (DOPA decarboxylase inhibitor), allopurinol (purine oxidation), finasteride (dihydrotestosterone from downstream cholesterol, but regulated by androgen receptor driven by androgens whose synthesis touches amino-acid-derived SAM methylations), H1 antihistamines (histamine receptor), sumatriptan (serotonin receptor), L-DOPA (tyrosine pathway replacement therapy).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Glycine: haem, purines, creatine, GSH, bile conjugation.
- Tyr: catecholamines, melanin, thyroid hormones; Trp: serotonin, melatonin, NAD.
- Arg: NO, creatine, polyamines; Met: SAM methylation.
- His: histamine; Cys: GSH, taurine; Gln: purines/carbamoyl-P.
- Specialised pathways run on tiny fluxes — deficiency shows in products first.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Antihistamines, antiserotonergics, L-DOPA/carbidopa, methylation-supporting B vitamins, allopurinol, and NOS-adjacent arginine/citrulline supplements all act on precursor chemistry — one of pharmacology's richest territories.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List three products derived from glycine and three from tyrosine.
2. Why is SAM called the universal methyl donor, and from which amino acid is it built?
3. Which amino acids feed purine and pyrimidine rings respectively?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Amino acids build the signalling/structural economy: neurotransmitters, hormones, haem, nucleotides, GSH, creatine, SAM.
- Small fluxes, big consequences — products fail before protein does.
- Nearly every psychoactive/cardiovascular drug touches a precursor pathway.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acids-as-precursors-of-neurotransmitters',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acids as Precursors — Neurotransmitters',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The brain's chemistry is built on amino acids — some *are* neurotransmitters, others convert into them in one or two steps.

**Amino acids that are themselves neurotransmitters:**

- **Glutamate** — the main *excitatory* transmitter; over-excitation ("excitotoxicity") in stroke/ischaemia is glutamate-mediated; drugs modulate release/receptors (memantine in Alzheimer's).
- **GABA** — the main *inhibitory* transmitter (glutamate decarboxylated by GAD, PLP-dependent). Benzodiazepines/barbiturates potentiate GABA-A; vigabatrin blocks GABA-transaminase; B6 deficiency drops GAD → neonatal seizures responsive to pyridoxine.
- **Glycine** — inhibitory transmitter in spinal cord/brainstem; strychnine blocks its receptor (tetanic convulsions); also NMDA-receptor co-agonist.
- **Aspartate** — excitatory (NMDA) transmitter.

**Amino-acid-derived neurotransmitters:**

- **Catecholamines (from tyrosine):** tyrosine → L-DOPA (tyrosine hydroxylase, BH₄ — rate-limiting) → dopamine (DOPA decarboxylase, PLP) → noradrenaline (dopamine β-hydroxylase) → adrenaline (PNMT, cortisol-dependent in adrenal medulla). Parkinson's disease = nigrostriatal dopamine loss → **levodopa + carbidopa** (carbidopa cannot cross the blood–brain barrier, so it blocks peripheral decarboxylation only — protecting the drug for the brain).
- **Serotonin (from tryptophan):** tryptophan hydroxylase (BH₄) → 5-HTP → serotonin (decarboxylase). SSRIs block reuptake; tryptophan depletion lowers mood — diet-sensitive synthesis.
- **Melatonin:** serotonin → N-acetylserotonin → melatonin (pineal, circadian signal).
- **Histamine (from histidine):** histidine decarboxylase; H1 (allergy), H2 (gastric acid — cimetidine/famotidine territory); mast-cell mediator.

**Why precursor supply matters:** the *enzymes* are saturated near their Km, so transmitter synthesis tracks amino-acid availability — tyrosine/tryptophan loads modestly raise catecholamine/serotonin production (basis of "protein/crash" subjective effects and of competitive absorption with other large neutral amino acids).

**Clinical tie-ins:** L-DOPA's competition with dietary amino acids at the intestinal transporter and blood–brain barrier (take on empty stomach); BH₄ deficiency mimicking both PKU and transmitter deficiency; pyridoxine-dependent seizures (GAD cofactor).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Transmitter amino acids: Glu (excitatory), GABA (inhibitory, via GAD/PLP), glycine (inhibitory, strychnine site), aspartate.
- Catecholamines: Tyr → L-DOPA (TH/BH₄) → dopamine → NA → adrenaline.
- Levodopa + carbidopa: peripheral decarboxylase block, central replacement.
- Serotonin/melatonin from Trp; histamine from His.
- Synthesis tracks precursor supply (enzymes near Km).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Parkinson's polypharmacy (levodopa/carbidopa/MAO-B inhibitors), antidepressants (SSRIs), antihistamines (H1/H2), benzodiazepines (GABA-A), memantine (glutamate), and pyridoxine-dependent neonatal seizure treatment all live on this map.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the catecholamine synthesis sequence with enzymes/cofactors.
2. Why does carbidopa enhance levodopa therapy without acting in the brain?
3. Which vitamin deficiency causes neonatal GABA-related seizures, and what is the treatment?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glutamate/GABA/glycine are transmitters directly; Tyr/Trp/His convert.
- TH (BH₄) is catecholamine synthesis's rate-limiting step.
- L-DOPA + carbidopa = transporter-protected dopamine replacement.
- B6 is the cofactor thread through decarboxylations.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acids-as-precursors-of-hormones',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acids as Precursors — Hormones',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Beyond transmitters, amino acids seed the **hormone** families — both the peptide hormones (amino acids are their monomers) and the small-molecule hormones derived from specific residues.

**Tyrosine-derived hormones:**

- **Adrenaline/noradrenaline** (adrenal medulla; catecholamine arm of the stress response — heart rate, bronchodilation, glycogenolysis). Adrenaline synthesis's final step (PNMT) is cortisol-dependent — explaining why adrenal medullary output rises with ACTH/cortisol states.
- **Thyroid hormones T3/T4:** thyroglobulin's tyrosine residues are **iodinated** (MIT/DIT) and coupled by thyroid peroxidase; T4 = two DITs, T3 = MIT + DIT. Antithyroid drugs (**carbimazole/methimazole, PTU**) block TPO; **PTU** additionally blocks peripheral T4→T3 conversion. Iodine deficiency → goitre (TSH-driven hypertrophy); Wolff–Chaikoff effect protects from iodine overload.

**Tryptophan-derived hormone:**

- **Melatonin** (pineal; circadian rhythm): serotonin → N-acetylserotonin → melatonin; light suppresses; exogenous melatonin is a chronobiotic drug/supplement.

**Peptide hormones (built from amino-acid monomers, relevant examples):**

- **Insulin** (β-cells, 51 residues, A/B chains joined by disulphides — Cys chemistry).
- **Glucagon** (29 residues).
- **ADH/vasopressin, oxytocin** (9 residues each, disulphide-bridged; desmopressin is a modified analogue).
- **PTH, ACTH, growth hormone** and the whole peptide class — synthesised as prepro-hormones, cleaved, packaged.

**Regulatory chemistry:** peptide hormones need their disulphides (Cys), amidation (glycine-donated amide via PAM enzyme), and glycosylation to mature — post-translational chemistry is the quality control of endocrine output.

**Why pharmacists care:**

- Formulation/biologic handling (insulin analogues, peptide stability).
- Drug action on synthesis steps (antithyroid drugs; octreotide as somatostatin analogue; carbidopa's catecholamine-precursor logic).
- Toxicology of excess (catecholamine excess in phaeochromocytoma — α/β blockade strategy).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Tyr-derived: adrenaline/NA (PNMT needs cortisol), T3/T4 (TPO iodination of thyroglobulin tyrosines).
- Antithyroid drugs: carbimazole/PTU block TPO; PTU also blocks T4→T3.
- Trp-derived: melatonin (circadian).
- Peptide hormones: insulin, glucagon, ADH, oxytocin, PTH — disulphide/amidation chemistry.
- Analogues (desmopressin, octreotide) exploit peptide chemistry.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Antithyroid dosing/monitoring, iodine supplementation policy, melatonin chronotherapy, insulin analogue storage, and phaeochromocytoma blockade all sit on precursor-hormone chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace thyroxine synthesis from tyrosine and iodide, naming the enzyme antithyroid drugs block.
2. Why does PNMT's cortisol dependence make physiological sense?
3. Name two peptide hormones and one post-translational feature each.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Tyrosine → catecholamines and thyroid hormones; tryptophan → melatonin.
- TPO iodination is the antithyroid drug target.
- Peptide hormones are amino-acid polymers with disulphide/amide finishing.
- Hormone pharmacology = chemistry of these residues.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acids-as-precursors-of-nucleotides',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Amino Acids as Precursors — Nucleotides',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every DNA/RNA base is assembled from amino-acid atoms. Mapping *which amino acid donates which atom* is the classic exam question — and the pharmacology of antimetabolites becomes obvious once the map is known.

**Purine ring construction (IMP — inosine monophosphate — the parent):**

| Ring atom | Donor |
|---|---|
| N1 | Aspartate |
| C2, C8 | N¹⁰-formyl-THF (one-carbon from Ser/Gly) |
| N3, N9 | Glutamine (amide N) |
| C4, C5, N7 | Glycine (whole molecule) |
| C6 | CO₂ |

The ring is built **on ribose-5-phosphate** (from HMP pathway) — PRPP is the starting platform; glutamine donates the first N (GPAT enzyme — azaserine's target historically).

**Pyrimidine ring construction (UMP — the parent):**

| Ring atom | Donor |
|---|---|
| N1, C4, C5, C6 | Aspartate (whole skeleton) |
| N3 | Glutamine (via carbamoyl phosphate, CPS-II — cytosolic) |
| C2 | CO₂ (via carbamoyl phosphate) |

Pyrimidines build the ring *first*, then attach PRPP — opposite order to purines.

**Beyond ring atoms:**

- **Ribose-5-P** from the pentose phosphate pathway supplies the sugar-phosphate backbone.
- **Folate** (THF one-carbon units from serine/glycine) supplies C2/C8 of purines and — critically — the **dUMP → TMP** methylation (thymidylate synthase) for DNA.
- **SAM** methylates RNA caps and bases.

**Antimetabolite pharmacology (the payoff):**

- **Methotrexate** — inhibits dihydrofolate reductase → THF shortage → purine C2/C8 and TMP synthesis fail (leucovorin rescue is THF replacement).
- **5-Fluorouracil** → FdUMP covalently traps thymidylate synthase (pyrimidine route).
- **6-Mercaptopurine/Azathioprine** — purine analogues blocking IMP conversion (HGPRT-incorporated; TPMT polymorphism guides dosing).
- **Hydroxyurea** — blocks ribonucleotide reductase (NDP → dNDP).

**Clinical chemistry:** **gout** sits on purine degradation (xanthine oxidase → uric acid; allopurinol blocks it); Lesch–Ny syndrome (HGPRT deficiency) recycles purines badly → uric acid overproduction + neurological disease; **PRPP synthetase overactivity** similarly drives gout.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Purines: N1 Asp, C2/C8 THF-formyl, N3/N9 Gln, C4-C5-N7 Gly, C6 CO₂; built on PRPP.
- Pyrimidines: aspartate skeleton + carbamoyl-P (Gln-N, CO₂); ring first, PRPP later.
- THF (Ser/Gly one-carbon) feeds purine C2/C8 + dTMP synthesis.
- Antimetabolites: MTX (DHFR), 5-FU (TS), 6-MP (IMP route), hydroxyurea (RNR).
- Purine degradation → uric acid; allopurinol blocks xanthine oxidase.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Chemotherapy (MTX/5-FU/6-MP), immunosuppression (azathioprine), gout therapy (allopurinol/febuxostat), and TPMT pharmacogenetics are all amino-acid-to-nucleotide chemistry weaponised or corrected by drugs.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Reproduce the purine ring-atom donor table.
2. Contrast purine vs pyrimidine assembly order relative to PRPP.
3. Explain methotrexate's downstream effects using the atom-donor map.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Purines: Asp + Gly + Gln + THF + CO₂ on PRPP.
- Pyrimidines: aspartate + carbamoyl-P ring, then PRPP.
- Folate thread explains MTX; purine route explains 6-MP and gout drugs.
- Know the donor table — it unlocks antimetabolite logic.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'keto-acid-utilization',
    courseId: 'bch-201',
    topicId: 'amino-acid-metabolism',
    nodeType: 'subtopic',
    title: 'Keto Acid Utilization',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **α-keto acids** released by transamination are not inert leftovers — they are the amino acid's carbon skeleton *in its next life*. This lesson consolidates their uses and the regulatory logic of how they are consumed.

**Four utilisation routes:**

**1. Oxidation for energy.** Skeletons entering as α-KG, succinyl-CoA, OAA, or pyruvate proceed through the TCA cycle; acetyl-CoA entries burn through TCA too. Energy value ≈ 4 kcal/g — protein's caloric contribution.

**2. Gluconeogenesis.** Glucogenic skeletons become pyruvate/OAA and climb to glucose (liver/kidney). During fasting this is the dominant route for alanine/glutamine-derived skeletons — the glucose–alanine cycle in action.

**3. Ketogenesis/lipogenesis.** Ketogenic skeletons (leucine) and surplus glucogenic skeletons (via pyruvate → acetyl-CoA) become ketone bodies or fatty acids. The route chosen depends on insulin/glucagon state and energy balance.

**4. Re-amination (recycling).** Because transamination is reversible, keto acids can *reclaim* amino groups when nitrogen is plentiful — skeletons cycle between amino and keto forms as demand shifts (the nitrogen "revolving door").

**Specific keto acids with starring roles:**

- **Pyruvate** — the busiest: PDH (energy), carboxylase (OAA/glucose), LDH (lactate), transamination (alanine).
- **α-Ketoglutarate** — nitrogen hub + TCA + hydroxylation cofactor economy (α-KG–dependent dioxygenases: **prolyl hydroxylases** (HIF/collagen — vitamin C), **PHD enzymes** in oxygen sensing, epigenetic demethylases (TET, JmjC) — α-KG analogues like **2-hydroxyglutarate** (oncometabolite in IDH-mutant gliomas) block them).
- **Oxaloacetate** — gluconeogenic hinge; PEPCK commits it to PEP.
- **Branched-chain keto acids (BCKAs)** — accumulate in MSUD; leucine's BCKA (α-ketoisocaproate) itself inhibits brain glutamate handling — part of MSUD's neurotoxicity.
- **Phenylpyruvate** — accumulates in PKU (the "phenylketone" of the urine).

**Regulatory logic:** keto-acid fate follows (1) hormonal state (insulin → lipogenesis/glycogen; glucagon → gluconeogenesis), (2) tissue (liver gluconeogenic, muscle oxidative), (3) energy charge (AMPK pushes oxidation), (4) available nitrogen (high N → re-amination; low N → oxidation).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Keto acids: oxidise (~4 kcal/g), make glucose (glucogenic), make ketones/fat, or re-aminate.
- Pyruvate = busiest junction (PDH/carboxylase/LDH/ALT).
- α-KG powers dioxygenases (HIF, collagen, epigenetics); 2-HG oncometabolite blocks them.
- BCKAs accumulate in MSUD; phenylpyruvate in PKU.
- Fate follows hormones, tissue, energy charge, nitrogen availability.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `IDH inhibitors (glioma therapy) target the 2-HG/α-KG dioxygenase axis; vitamin C's role in collagen prolyl hydroxylase is α-KG chemistry; MSUD management monitors BCKA levels, not just amino acids.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four utilisation routes of α-keto acids.
2. Name three enzymes that process pyruvate and their products.
3. What is 2-hydroxyglutarate and why is it pharmacologically relevant?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Keto acids are skeletons-in-waiting: burn, gluconeogenese, ketogenese, or recycle N.
- Pyruvate and α-KG are the busiest hubs.
- Special keto acids mark disease (BCKAs/MSUD, phenylpyruvate/PKU).
- α-KG-dioxygenase chemistry is an emerging drug frontier.`,
      },
    ],
  },
];
