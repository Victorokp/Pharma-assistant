import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 15: Nucleotides and Nucleic Acids (11).
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; molecular-framework subtopics A; descriptive B.
 */

export const bch201NucleotidesLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'nucleotides-and-nucleic-acids',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'topic',
    title: 'Nucleotides and Nucleic Acids',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Nucleotides** are nitrogenous-base + pentose-sugar + phosphate molecules; strung together they form the **nucleic acids** (DNA, RNA) — the information macromolecules — while free nucleotides run the cell's energy economy (ATP), signalling (cAMP), and cofactor chemistry (NAD⁺, FAD, CoA). This closing topic ties the whole course together: the genetic material stores the recipes, and the intermediary metabolism you have learned executes them.

**The layered architecture:**

1. **Nucleoside** = base + sugar (no phosphate) — adenosine, guanosine, cytidine, uridine, thymidine.
2. **Nucleotide** = nucleoside + one or more phosphates (AMP, ADP, ATP; dATP in DNA contexts).
3. **Polynucleotide** = nucleotides joined by **phosphodiester bonds** (5′→3′), giving each strand an inherent direction.
4. **DNA** stores information: a **double helix** of two antiparallel strands held by **A=T and G≡C base pairing** — Chargaff's rules ($A = T$, $G = C$) fall straight out of the pairing geometry.
5. **RNA** executes: mRNA (message), tRNA (translator/adapter), rRNA (ribosomal machinery) — plus regulatory species — usually single-stranded but folded into structured domains.

**The central dogma — information flow:**

$$\\text{DNA} \\xrightarrow{\\text{replication}} \\text{DNA} \\xrightarrow{\\text{transcription}} \\text{RNA} \\xrightarrow{\\text{translation}} \\text{Protein}$$

**Why the pharmacy curriculum ends here:** nearly every antibiotic strategy targets nucleic-acid machinery (fluoroquinolones → DNA gyrase; rifampicin → RNA polymerase; aminoglycosides/tetracyclines → translation), antivirals and anticancer agents are mostly **nucleoside/nucleotide analogues** (acyclovir, zidovudine, 5-fluorouracil, 6-mercaptopurine), and gout is purine-catabolism overload treated with a xanthine-oxidase inhibitor. Understanding the normal chemistry is what makes those mechanisms legible.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Nucleoside = base + sugar; nucleotide = + phosphate(s); DNA/RNA = phosphodiester-linked chains.
- Bases: A/G (purines), C/T/U (pyrimidines); DNA uses T, RNA uses U.
- DNA: double helix, antiparallel strands, A=T / G≡C pairing (Chargaff).
- RNA: single-stranded executor — mRNA, tRNA, rRNA (+ regulatory RNAs).
- Central dogma: replication → transcription → translation.
- Free nucleotides: ATP (energy), cAMP (signal), NAD⁺/FAD/CoA (cofactors).
- Drug hooks: nucleoside analogues, gyrase/RNAP antibiotics, allopurinol.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Nucleoside analogues (acyclovir, tenofovir, 5-FU), antimicrobial targets (gyrase, RNAP, ribosome), and allopurinol's xanthine-oxidase inhibition all assume fluency with nucleotide chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish a nucleoside from a nucleotide and name the three components of a nucleotide.
2. State the base-pairing rules and Chargaff's equality for a DNA sample.
3. Name the three steps of the central dogma and where each happens in a eukaryotic cell.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Nucleotides = information monomers AND energy/cofactor chemistry.
- DNA stores (double helix, T); RNA executes (single strand, U).
- Replication copies, transcription transcribes, translation translates.
- Clinical pharmacology reuses this chemistry everywhere.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'structure-of-nucleotides',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Structure of Nucleotides',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every nucleotide shares a **three-part architecture**:

**1. Nitrogenous base** (the information letter):
- **Purines** — two fused rings: **adenine (A)**, **guanine (G)** (also hypoxanthine/xanthine, the catabolic intermediates).
- **Pyrimidines** — one ring: **cytosine (C)** in both nucleic acids; **thymine (T)** mainly in DNA; **uracil (U)** mainly in RNA.
- Bases are **aromatic, planar, and weakly basic** (the nitrogens); they absorb UV at ~260 nm — the basis of nucleic-acid quantification.

**2. Pentose sugar** (the backbone link):
- **β-D-ribofuranose (ribose)** in RNA; **2′-deoxyribose** in DNA (−OH replaced by −H at C-2′).
- Carbons are numbered **1′–5′** (primes distinguish sugar atoms from base atoms); the base attaches at **C-1′** via an **N-glycosidic bond**; the "deoxy" difference is why DNA is chemically more stable.

**3. Phosphate group(s)** (the energy/backbone element):
- Esterified to the **5′-OH** → nucleoside **monophosphate / diphosphate / triphosphate** (AMP → ADP → ATP).
- The **phosphoanhydride bonds** between phosphates store usable energy (ATP); in polymers, one phosphate remains as the **phosphodiester linkage**.

**Assembly line:** base + sugar → **nucleoside** (N-glycosidic bond); nucleoside + phosphate → **nucleotide** (kinases; ATP usually donates the phosphate). Remember the direction of naming: adenosine → AMP → ADP → ATP; deoxy forms (dAMP, dATP) use 2′-deoxyribose.

**Nomenclature shortcuts:** "uridine" (nucleoside) vs "UMP" (nucleotide); thymidine is really deoxythymidine (T is nearly always in DNA); the paired-letter notation (A, G, C, T, U) refers to the base — and loosely to the whole nucleotide when spelling sequences.

**Pharmacy connection:** many drugs are **fake nucleosides** — acyclovir (a guanosine analogue), zidovudine (a thymidine analogue with 3′-azido group), 5-fluorouracil (a uracil analogue). They must be phosphorylated inside cells to become active nucleotide analogues — the exact three-part structure is the drug-targeting handle.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Purines (A, G) = double ring; pyrimidines (C, T, U) = single ring.
- Sugar: ribose (RNA) vs 2′-deoxyribose (DNA); base joins at C-1′ (N-glycosidic).
- Phosphates attach at 5′: MP → DP → TP; phosphoanhydride = energy.
- Nucleoside = base+sugar; nucleotide = +phosphate.
- UV absorbance ~260 nm; bases planar/aromatic.
- Analogue drugs (acyclovir, AZT, 5-FU) hijack this exact structure.`,
      },
      {
        kind: 'FORMULAS',
        body: `- Nucleoside formation: $\\text{Base} + \\text{sugar} \\rightarrow \\text{nucleoside}$ (N-glycosidic at C-1′).
- Nucleotide formation: $\\text{Nucleoside} + \\text{ATP} \\xrightarrow{\\text{kinase}} \\text{nucleoside-5′-monophosphate} + \\text{ADP}$.
- ATP as currency: $\\text{ATP} + \\text{H}_2\\text{O} \\rightarrow \\text{ADP} + \\text{P}_i$, $\\Delta G^{\\circ\\prime} \\approx -30.5\\ \\text{kJ/mol}$.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw/name the parts of ATP: which base, which sugar, how many phosphates?
2. Why does 2′-deoxyribose make DNA more stable than RNA?
3. Classify: uracil, uridine, UMP — base, nucleoside, or nucleotide?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Base + sugar = nucleoside; + phosphate = nucleotide.
- Purines two-ringed, pyrimidines one-ringed; T for DNA, U for RNA.
- 5′ phosphates build ATP-style energy and chain backbones.
- Nucleoside analogues are pharmacy's oldest nucleic-acid drugs.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A) ───────────────
  {
    nodeId: 'dna-structure',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'DNA Structure',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `DNA is a **double helix** of two polynucleotide strands — Watson–Crick's 1953 model, built on Chargaff's base ratios and Franklin's X-ray data. Its features explain both inheritance and replication:

**The helix rules:**
- **Backbone:** sugar–phosphate chains joined by **5′→3′ phosphodiester bonds**; each strand has a **5′ end** (free phosphate) and a **3′ end** (free OH).
- **Antiparallel:** the two strands run in opposite directions — one 5′→3′ upward, the partner 3′→5′.
- **Base pairing on the inside:** **A pairs with T (2 hydrogen bonds)**; **G pairs with C (3 hydrogen bonds)**. A purine always pairs with a pyrimidine, keeping the helix width constant (~2 nm).
- **Chargaff's rules:** in any double-stranded DNA, $[A] = [T]$ and $[G] = [C]$, so $A+G = C+T$. A DNA sample with 30% A is 30% T, 20% G, 20% C.
- **Major/minor grooves:** the winding leaves two grooves — the major groove is where regulatory proteins (transcription factors) read sequences without unzipping.
- **Complementarity:** each strand is a template for the other — the property replication exploits.

**Genome packaging:** human DNA per cell is ~2 m long, fitted into a ~6-μm nucleus. Histone octamers wrap ~147 bp of DNA into **nucleosomes** ("beads on a string"), coiling further into chromatin; **heterochromatin** is packed/silent, **euchromatin** open/expressed. Compaction is regulation — you can't transcribe what you can't reach.

**Stability and denaturation:** hydrogen bonding plus **base stacking** (hydrophobic interaction of planar rings) hold the duplex; heat (or high pH) separates strands — "melting" at the **Tm**, which rises with G≡C content (3 H-bonds). Lowering temperature lets complementary strands re-anneal — the chemistry behind PCR and hybridisation assays.

**Pharmacy connection:** fluoroquinolones (ciprofloxacin) poison bacterial **DNA gyrase/topoisomerase IV** (unwinding machinery); anthracyclines intercalate between base pairs; cisplatin cross-links adjacent guanines — each drug class is an attack on a structural feature of the helix.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two antiparallel strands; 5′→3′ phosphodiester backbone; bases inside.
- A=T (2 H-bonds), G≡C (3 H-bonds); purine–pyrimidine keeps width constant.
- Chargaff: [A]=[T], [G]=[C]; GC% raises Tm.
- Nucleosome: ~147 bp around histone octamer → chromatin; hetero- vs euchromatin.
- Denaturation is strand separation; re-annealing enables PCR/hybridisation.
- Gyrase inhibitors, intercalators, and cross-linkers attack helix features.`,
      },
      {
        kind: 'FORMULAS',
        body: `- Chargaff: $[A] = [T]$, $[G] = [C]$; therefore $\\%G = \\%C = \\tfrac{100 - (\\%A + \\%T)}{2}$.
- Worked example: if $\\%A = 30$, then $\\%T = 30$ and $\\%G = \\%C = 20$.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A dsDNA sample contains 15% cytosine. What are the percentages of G, A, and T?
2. Which base pair is stronger and why — and how does this affect melting temperature?
3. Explain how nucleosome packaging regulates gene expression.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Antiparallel duplex, bases inside, backbone outside.
- A=T weak, G≡C strong; Chargaff follows geometry.
- Chromatin compaction is gene control.
- Denature/anneal cycles power modern molecular diagnostics.
- Many antimicrobials/antineoplastics target helix mechanics.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A) ───────────────
  {
    nodeId: 'rna-structure',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'RNA Structure',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `RNA is DNA's working partner: usually **single-stranded**, built from **ribose** nucleotides with **uracil** instead of thymine. Single-strandedness is not simplicity — RNA folds back on itself into precise 3-D structures that do chemical work.

**Structural features:**
- **Ribose backbone** with the 2′-OH group: RNA is **less chemically stable** than DNA (alkali hydrolyses the phosphodiester chain via 2′-OH attack) — fitting for a transient messenger.
- **Uracil** pairs with adenine; intramolecular **G≡C, A=U** pairing creates **stem–loop (hairpin)** structures — the basis of tRNA's cloverleaf and many regulatory switches.
- Usually exists as a **single chain**; some viruses (influenza, HIV) keep their genomes in RNA.

**The functional RNA classes:**
- **mRNA (messenger):** carries the gene's code from nucleus to ribosome; eukaryotic mRNA is processed with a **5′ cap**, a **poly-A tail**, and spliced-out introns. Short-lived by design — protein output can be regulated quickly.
- **tRNA (transfer):** the adapter molecule — ~75–90 nt folded into a cloverleaf/L-shape; carries a specific amino acid at its 3′ end and reads the codon with its **anticodon** loop.
- **rRNA (ribosomal):** the ribosome's structural and catalytic heart (the peptidyl transferase reaction is **ribozyme** RNA); the 70S/80S S-values classify ribosomes — and rRNA differences are the modern tree-of-life ruler.
- **Small RNAs:** snRNA (splicing), miRNA/siRNA (gene silencing) — regulation layers beyond the classic dogma.

**RNA vs DNA at a glance:** sugar (ribose vs deoxyribose); base (U vs T); strands (usually one vs two); longevity (transient vs archival); location (nucleus+cytoplasm vs nucleus/mitochondria); function (execute vs store).

**Pharmacy connection:** RNA is now a **drug platform** — mRNA vaccines (SARS-CoV-2), siRNA therapeutics (patisiran), antisense oligonucleotides; conversely many antibiotics (aminoglycosides, tetracyclines, macrolides, chloramphenicol) bind **bacterial rRNA/tRNA sites**, exploiting ribosome differences between bacteria and humans.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- RNA: ribose + uracil; usually single-stranded; folds into hairpins/stems.
- 2′-OH makes RNA alkaline-labile and chemically less durable.
- mRNA = message (cap + poly-A + spliced); tRNA = adapter (anticodon + amino acid); rRNA = ribosomal machinery (catalytic!).
- Small RNAs regulate (snRNA, miRNA, siRNA).
- mRNA vaccines and siRNA drugs are modern RNA pharmacology.
- Antibiotics target bacterial ribosomal RNA sites.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give two chemical reasons RNA is less stable than DNA and say why this suits its role.
2. Describe tRNA's two functional ends and the structure that positions them.
3. Name three antibiotic classes that bind ribosomal RNA targets.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- RNA = single-stranded, ribose, uracil, folds into working shapes.
- mRNA copies; tRNA translates; rRNA builds — plus small RNAs regulate.
- Instability is a feature: fast response, controlled turnover.
- RNA is both drug target (ribosomes) and drug platform (vaccines, siRNA).`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'dna-vs-rna',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'DNA vs RNA',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A side-by-side comparison consolidates the two nucleic acids — and the differences are exactly the sort of detail exams (and drug design) love:

**Sugar:** DNA uses **2′-deoxyribose**; RNA uses **ribose** (2′-OH present). The missing OH makes DNA **alkali-resistant** and durable; RNA's 2′-OH enables self-cleavage — transient by chemistry, not just by design.

**Bases:** both use A, G, C. DNA uses **thymine (5-methyluracil)**; RNA uses **uracil**. The methyl mark on T helps DNA repair systems distinguish genuine DNA from invading nucleic acids and misincorporated nucleotides.

**Structure:** DNA is a **double helix** (two antiparallel complementary strands); RNA is usually **single-stranded** but folds into structured hairpins and can pair locally (A=U, G≡C) — and some RNAs adopt catalytic (ribozyme) or viral double-stranded forms.

**Length/genome:** DNA holds the cell's archive — very long molecules (human chromosome DNA up to centimetres). RNA copies are shorter: mRNA minutes-to-hours, tRNA/rRNA stable but modest.

**Location (eukaryotes):** DNA in nucleus + mitochondria; RNA made in the nucleus but works mainly in the cytoplasm (ribosomes).

**Function:** DNA = information storage (replication passes it on). RNA = information transfer and execution (mRNA message, tRNA adapter, rRNA machine, plus regulatory small RNAs).

**Sensitivity:** UV at 260 nm reads both; alkali destroys RNA selectively — a classic lab trick for isolating DNA.

**Clinical echoes:** retroviruses (HIV) reverse this flow with **reverse transcriptase** (RNA→DNA) — the enzyme class targeted by NRTIs (zidovudine, tenofovir, lamivudine). Rifampicin blocks bacterial **RNA polymerase**; fluoroquinolones block DNA replication machinery. Knowing which polymerases exist in which organisms tells you which drugs can be selective.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sugar: deoxyribose (DNA) vs ribose (RNA) → alkali stability difference.
- Base: T (DNA) vs U (RNA); both share A/G/C.
- Structure: double helix vs single strand with folding.
- DNA archives (long, nuclear); RNA executes (shorter, cytoplasmic).
- Reverse transcriptase (HIV) is the RNA→DNA exception — NRTI target.
- Rifampicin (RNAP), fluoroquinolones (gyrase) exploit polymer differences.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List four chemical/structural differences between DNA and RNA.
2. Why is RNA selectively destroyed by alkali while DNA is not?
3. Which drug class targets the RNA→DNA step of HIV, and what is the enzyme?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Deoxy vs ribo, T vs U, duplex vs folded strand.
- DNA stores; RNA performs.
- The exceptions (retroviruses) are therapeutic goldmines.
- Selective toxicity begins with these molecular differences.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'nucleotide-functions',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Nucleotide Functions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Nucleotides are far more than DNA letters — they are metabolic multitaskers:

**1. Information monomers:** dATP, dGTP, dCTP, dTTP polymerise into DNA; ATP, GTP, CTP, UTP into RNA. Every replication/transcription event consumes activated triphosphates and releases **PPᵢ** — polymerisation is chemically downhill because pyrophosphatase hydrolyses PPᵢ.

**2. Energy currency and transfer:**
- **ATP** — the universal currency (membrane pumps, biosynthesis, motion).
- **GTP** — drives protein synthesis, signal transduction (G-proteins), and microtubules.
- Other triphosphates (UTP for glycogen synthesis, CTP for phospholipid synthesis) donate activated groups in specific pathways.

**3. Signal transduction:**
- **cAMP** (adenylyl cyclase product of ATP) — the classic second messenger of GPCR cascades (β-adrenergic agonists, glucagon); **cGMP** mediates nitric-oxide vasodilation — **sildenafil** prolongs its signal by inhibiting PDE-5.
- GTP-binding switches (G-proteins, Ras) time cellular decisions.

**4. Cofactors and carrier groups:** many famous cofactors are **nucleotide derivatives** — NAD⁺/NADP⁺ (adenine-containing), FAD/FM, **CoA** (ADP + pantothenate + thiol), S-adenosylmethionine (methyl donor), UDP-glucose (glycogen precursor), and FAD-dependent oxidases. Vitamin-derived pieces ride on nucleotide scaffolds — which is why B-vitamin deficiencies hit so many pathways at once.

**5. Physiological regulators:** adenosine (a nucleoside) modulates vessel tone, cardiac rhythm (adenosine as an antiarrhythmic drug!), and sleep pressure; dATP excess signals energy status to metabolic enzymes.

**6. Activated intermediates:** S-adenosylmethionine methylation (epigenetics, catecholamine synthesis), UDP-glucuronic acid (bilirubin conjugation — the basis of jaundice physiology and of glucuronidation in drug metabolism).

**Pharmacy synthesis:** read any drug label with nucleotide eyes — ATPase poisons (digoxin), PDE inhibitors (sildenafil, milrinone), antiviral nucleoside analogues, methotrexate's folate-nucleotide synthesis blockade, and adenosine itself — the chemistry keeps reappearing.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Monomers for DNA/RNA (triphosphates; PPᵢ released and hydrolysed).
- ATP currency; GTP for translation/signalling; UTP/CTP pathway-specific.
- cAMP/cGMP second messengers (β-agonists; NO; PDE-5 inhibitors).
- Cofactors are nucleotides: NAD⁺, FAD, CoA, SAM, UDP-glucose.
- Adenosine is a drug (antiarrhythmic) and a physiological modulator.
- UDP-glucuronate links nucleotides to bilirubin/drug conjugation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name four distinct functions of nucleotides besides forming DNA/RNA.
2. How does sildenafil's mechanism involve a cyclic nucleotide?
3. Which nucleotide-derived molecule conjugates bilirubin, and what deficiency state results when conjugation fails?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Nucleotides: letters, currency, messengers, cofactors, carriers.
- ATP spends; GTP signals; cyclic nucleotides broadcast.
- B-vitamin cofactors ride nucleotide scaffolds.
- Adenosine receptors, PDEs, and nucleoside analogues are daily pharmacy.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'overview-of-dna-replication',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Overview of DNA Replication',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Replication copies the genome before every cell division — **semiconservative**: each daughter duplex keeps one parental strand plus one new strand (the Meselson–Stahl verdict).

**Logic before machinery:** because strands are antiparallel but all polymerases synthesise only 5′→3′, the fork must copy one strand continuously and the other backwards in pieces:

- **Leading strand:** follows the fork; one long continuous piece.
- **Lagging strand:** made as short **Okazaki fragments** (each started by its own primer), later stitched together.
- **Semi-discontinuous** is the precise term; antiparallel geometry forces it.

**The enzyme cast (prokaryotic names for clarity):**
1. **Initiation:** initiator proteins open the AT-rich origin; **helicase** unwinds; **SSB** keeps strands apart; **topoisomerase/gyrase** relieves supercoiling ahead of the fork (the fluoroquinolone target!).
2. **Priming:** **primase** lays a short RNA primer (polymerases cannot start from nothing).
3. **Elongation:** **DNA polymerase III** adds dNTPs complementary to the template in the 5′→3′ direction, proofreading with its 3′→5′ exonuclease (≈1 error per 10⁹+ bases after repair).
4. **Replacement & ligation:** **DNA polymerase I** swaps RNA primers for DNA; **DNA ligase** seals the nicks (phosphodiester formation; uses ATP/NAD⁺).
5. **Termination:** forks meet; decatenation by topoisomerase separates daughter circles.

**Fidelity stack:** base-pairing geometry → polymerase proofreading → mismatch repair. Three screens keep the mutation rate low enough to survive and low enough to evolve.

**Eukaryotic differences:** many origins per chromosome (S-phase timing), several polymerases (Pol α priming, δ lagging, ε leading), telomeres/tales of **telomerase** at chromosome ends, and nucleosome reassembly behind the fork.

**Pharmacy connection:** gyrase = fluoroquinolone target; polymerase chain termination = nucleoside analogues (AZT lacks a 3′-OH — chain terminator); acyclovir's triphosphate selectively traps **viral** polymerase. Replication is the most exploited target in antiviral/antibacterial/anticancer pharmacology.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Semiconservative; fork has leading (continuous) + lagging (Okazaki) strands.
- Order: helicase → SSB → topoisomerase → primase → Pol III → Pol I → ligase.
- All synthesis is 5′→3′; geometry forces semi-discontinuity.
- Fidelity: pairing + proofreading (3′→5′ exo) + mismatch repair.
- Fluoroquinolones hit gyrase; chain terminators hit polymerases.
- Eukaryotes: many origins, telomerase, nucleosome rebuild.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why must lagging-strand synthesis be discontinuous?
2. Arrange in order: helicase, ligase, primase, DNA polymerase — with one function each.
3. How does zidovudine terminate DNA chains, structurally?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One parental strand preserved per daughter duplex.
- Unwind → prime → extend → proofread → swap primers → seal.
- Semi-discontinuous because strands run opposite.
- Replication enzymes are prime antibiotic/antiviral targets.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'overview-of-transcription',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Overview of Transcription',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Transcription copies one gene's DNA sequence into RNA — selective (only needed genes), whereas replication is total. Only **one DNA strand** of a gene serves as template (**asymmetric transcription**); the resulting RNA matches the **coding strand** (with U for T).

**The cast:**
- **RNA polymerase** — prokaryotes: one core enzyme (+σ factor for promoters). Eukaryotes: Pol II for mRNA (with Pol I/III for rRNA/tRNA); needs **general transcription factors**.
- **Promoter** — the upstream "start here" box (prokaryotic −10/−35 Pribnow/TATAAT & TTGACA; eukaryotic TATA via TBP/TFIID).
- **Template strand** — read 3′→5′ so RNA grows 5′→3′.

**Three stages:**
1. **Initiation:** σ-factor/promoter binding → open complex → first phosphodiester bonds (RNA uses **ATP/GTP/CTP/UTP**; no primer needed — unlike DNA pol).
2. **Elongation:** σ drops off; the enzyme moves ~30–80 nt/s, unwinding a transcription bubble and rewinding behind; growing chain 5′→3′.
3. **Termination:** prokaryotes — Rho-independent hairpin+poly-U or Rho-dependent chase; eukaryotes — polyadenylation signal → cleavage → **poly-A tail**.

**Eukaryotic processing (the maturation of pre-mRNA):**
- **5′ capping** (7-methylguanosine) — stability + ribosome docking.
- **Splicing** — introns removed, exons ligated by the spliceosome (snRNAs); alternative splicing multiplies one gene's protein products.
- **3′ polyadenylation** — the poly-A tail.
Only the finished mRNA exits the nucleus — a quality gate prokaryotes lack.

**Regulation = the drug/virus battleground:** bacterial operons (lac/trp) tune transcription to nutrition; eukaryotic enhancers/transcription factors integrate hormones and signals. **Rifampicin** binds bacterial RNA pol's β-subunit (blocks initiation — red secretions warning!); **α-amanitin** (death-cap mushroom) poisons eukaryotic Pol II; dactinomycin intercalates DNA to jam the enzyme. Selectivity again comes from polymer differences.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Selective copy: gene → RNA; template strand read 3′→5′, RNA made 5′→3′.
- RNA pol needs no primer; σ finds promoters (bacteria); TFs in eukaryotes.
- Stages: initiation (promoter) → elongation (bubble) → termination (hairpin/Rho; poly-A).
- Pre-mRNA maturation: 5′ cap, splicing (alternative!), poly-A tail.
- Rifampicin (bacterial RNAP), α-amanitin (Pol II) are classic poisons.
- One gene → many proteins via alternative splicing.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which DNA strand matches the final mRNA sequence (U substituted for T)?
2. List the three mRNA-processing steps and one purpose of each.
3. Explain rifampicin's molecular target and one counselling point tied to it.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Transcription = on-demand copying with promoter logic.
- No primer; UTP instead of TTP; bubble follows the enzyme.
- Eukaryotes process before shipping mRNA out.
- Antibiotics and toxins exploit polymer differences.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'overview-of-translation',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Overview of Translation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Translation converts the mRNA nucleotide language into the amino-acid language of proteins — where the nucleic-acid and amino-acid topics of this course finally meet.

**The genetic code:** triplets (**codons**) read non-overlapping, comma-less, from a fixed start. $4^3 = 64$ codons for 20 amino acids → **degenerate** (most amino acids have several codons), **unambiguous** (each codon = one amino acid), nearly **universal**, with 3 **stop codons** (UAA, UAG, UGA) and **AUG** as start (Met).

**The adapter:** **tRNA** pairs its **anticodon** to the codon and carries the matching amino acid charged by **aminoacyl-tRNA synthetases** (one per amino acid — the accuracy checkpoint; GTP spent for proofreading). Wobble pairing explains degeneracy at codon position 3.

**The machine:** the **ribosome** (70S bacterial = 50S+30S; 80S eukaryotic = 60S+40S) has A (aminoacyl), P (peptidyl), E (exit) sites; rRNA is the **peptidyl transferase** — an RNA enzyme.

**Three stages:**
1. **Initiation:** small subunit + initiator Met-tRNA find the start codon (Shine–Dalgarno in bacteria; 5′ cap scanning in eukaryotes); large subunit locks on (GTP).
2. **Elongation cycle:** codon recognition (A site) → **peptide bond** forms (P→A transfer) → **translocation** (A→P→E; GTP/EF-Tu/EF-G). Repeat per codon (~2–20 aa/s; eukaryotes slower).
3. **Termination:** release factor recognises a stop codon; the completed polypeptide + last tRNA leave; ribosome recycles.

**Post-translational processing:** folding (chaperones), disulfides, glycosylation/phosphorylation, proteolytic activation (insulin, digestive zymogens, clotting cascades) — the "finished" protein is often born inactive on purpose.

**The antibiotic showcase — ribosome selectivity:**
- **Aminoglycosides** (30S) — miscoding; **tetracyclines** (30S) — block aa-tRNA entry.
- **Chloramphenicol** (50S) — blocks peptidyl transferase; **macrolides** (50S) — block exit tunnel; **linezolid** (50S) — initiation complex.
- Distinguish prokaryote 70S from eukaryote 80S ribosomes — the molecular basis of selectivity (and of mitochondrial side effects, since mitochondria are 70S-like!).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Codon = 3 bases; 64 codons, degenerate + unambiguous; AUG start; 3 stops.
- tRNA anticodon ↔ codon; aminoacyl-tRNA synthetase charges (accuracy gate).
- Ribosome sites A/P/E; peptidyl transferase is rRNA.
- Initiation → elongation (enter, bond, shift) → termination (release factor).
- Post-translational mods activate/specialise proteins.
- Antibiotic classes map onto 30S/50S functions; mitochondria are 70S-like.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is the code called degenerate yet unambiguous?
2. Name the ribosomal sites and the reaction that occurs between P and A sites.
3. Match: tetracycline, macrolide, aminoglycoside → their ribosomal mechanism.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Triplets → amino acids via tRNA adapters on rRNA machines.
- Start AUG; stop UAA/UAG/UGA; elongation is enter-bond-shift.
- Folding/processing complete the job.
- Half of classical antibiotics are translation inhibitors — selectivity via ribosome architecture.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'purine-metabolism',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Purine Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Purines (adenine, guanine) are built and recycled through two routes — and their disposal pathway is where gout lives.

**De novo synthesis (build from scratch):**
- **Location/substrates:** cytosol; the committed start is PRPP (activated ribose-5-P from the pentose phosphate pathway) + glutamine → **PRA**, catalysed by **amidophosphoribosyltransferase**.
- **Atom sources:** glycine, glutamine (two N), aspartate (N), CO₂, and two one-carbon **N¹⁰-formyl-THF** donations — folate's fingerprints are all over purines.
- **Assembly:** the ring is built **on the ribose phosphate** stepwise (~11 steps) → **IMP** (inosine monophosphate) → branch point → **AMP** (via adenylosuccinate, GTP-consuming) or **GMP** (via XMP, ATP-consuming).
- **Regulation:** end-product inhibition — AMP/GMP/IMP feedback on the committed step; balanced GTP/ATP cross-demand. **PRPP synthetase** overactivity → gout in children (rare but classic exam case).

**Salvage pathway (recycle bases, cheap and fast):**
- **HGPRT/APRT** transfer ribose-phosphate from PRPP onto free bases: hypoxanthine → IMP, guanine → GMP, adenine → AMP.
- **Lesch–Nyhan syndrome** (HGPRT deficiency, X-linked): salvage lost → PRPP/uric acid surge + dystonia, self-mutilation, gout — salvage matters.

**Catabolism (the gout highway):**
$$\\text{AMP/adenine} \\rightarrow \\text{hypoxanthine} \\xrightarrow{\\text{xanthine oxidase}} \\text{xanthine} \\xrightarrow{\\text{xanthine oxidase}} \\text{uric acid}$$
$$\\text{GMP/GMP-derived guanine} \\rightarrow \\text{xanthine} \\rightarrow \\text{uric acid}$$
- **Uric acid** is the human (and higher-ape/Dalmatian) endpoint — poorly soluble; primates lost uricase. Excreted renally (~2/3) and intestinally.
- **Hyperuricaemia → gout:** monosodium urate crystals in joints (negative birefringent needles); risk rises with purine-rich diets, alcohol, diuretics, CKD, tumour lysis.

**Pharmacology is purine pharmacology:**
- **Allopurinol** — xanthine-oxidase **suicide inhibitor** (→ alloxanthine); lowers urate; caution with 6-MP/azathioprine (they are also XO substrates — dose must fall!). Febuxostat: non-purine XO inhibitor.
- **6-mercaptopurine/azathioprine** — purine analogues; TPMT genotypes dictate toxicity.
- **Uricosurics** (probenecid, lesinurad) block renal URAT1 reabsorption; **rasburicase** (recombinant uricase) for tumour-lysis prophylaxis.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- De novo: PRPP + glutamine committed step → IMP → AMP/GMP; folate donates 1-C units.
- Salvage: HGPRT/APRT recycle bases; Lesch–Nyhan = HGPRT deficiency.
- Catabolism: hypoxanthine → xanthine → uric acid via xanthine oxidase.
- Uric acid insoluble; humans lack uricase → gout risk.
- Allopurinol blocks XO (and interacts with 6-MP!); rasburicase for TLS.
- AMP synthesis costs GTP; GMP synthesis costs ATP (cross-check!).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace uric acid's formation from hypoxanthine and name the enzyme at both steps.
2. Why does HGPRT deficiency cause both gout and neurological symptoms?
3. Why must 6-mercaptopurine doses fall when allopurinol is co-prescribed?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Build on PRPP, salvage through HGPRT, dispose via xanthine oxidase.
- Folate-dependent, feedback-regulated, IMP-centred.
- Gout = insoluble endpoint + risk factors (alcohol, diuretics, CKD).
- XO inhibition, uricosurics, and enzyme replacement manage the traffic.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'pyrimidine-metabolism',
    courseId: 'bch-201',
    topicId: 'nucleotides-and-nucleic-acids',
    nodeType: 'subtopic',
    title: 'Pyrimidine Metabolism',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pyrimidines (C, U, T) run a cleaner, shorter metabolism than purines — assembled **off the ribose**, regulated simply, and catabolised to soluble products.

**De novo synthesis:**
- **The committed step:** carbamoyl phosphate + aspartate → **carbamoyl aspartate**, by **aspartate transcarbamoylase (ATCase)** in bacteria; in mammals the trifunctional **CAD protein** (carbamoyl phosphate synthetase II + aspartate transcarbamoylase + dihydroorotase) does it — CPS-II is the regulated enzyme.
- **Substrates:** glutamine-N + CO₂ (carbamoyl phosphate, cytosolic — distinct from the mitochondrial CPS-I of the urea cycle!) + aspartate.
- **Assembly:** ring built first from those two amino-acid donors (no folate needed — contrast purines), then ribose-P attached by orotate phosphoribosyltransferase → **OMP** → **UMP** → CTP (amination using glutamine) and dTMP.
- **Regulation:** UMP inhibits CPS-II; **PRPP activates**; in bacteria ATCase is inhibited by CTP/activated by ATP (the textbook allosteric case).

**Making dTMP — the thymidylate step (drug-central):**
$$\\text{dUMP} \\xrightarrow{\\text{thymidylate synthase},\\ N^5,N^{10}\\text{-methylene-THF}} \\text{dTMP}$$
- **5-Fluorouracil** → FdUMP traps a covalent TS–folate complex (thymineless death).
- **Methotrexate** starves THF regeneration (DHFR inhibition) — dTMP synthesis collapses.
- **Trimethoprim** does the same to bacteria (selectivity via DHFR affinity).

**Catabolism — soluble, not crystalline:**
- CMP/UMP/CTMP → bases → **dihydrouracil/dihydrothymine** (DHFR reductive route) → β-alanine (from U/C) and **β-aminoisobutyrate** (from T) → TCA-cycle entry/malonyl-CoA.
- Because products are water-soluble, **no gout-equivalent disease** exists for pyrimidines — a favourite contrast question.

**Clinical links:**
- **Orotic aciduria** (UMPS deficiency) — megaloblastic anaemia *not* responsive to B12/folate + orotate crystals; treated with **uridine**.
- Hereditary **OPRT/OMP decarboxylase** blocks sit in the pathway above.
- Drug synergy: 5-FU + leucovorin (folate "boost") potentiates TS poisoning — colorectal cancer standard.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Committed: carbamoyl-P + aspartate (CAD/CPS-II in mammals); UMP feedback; PRPP activates.
- Ring first, ribose later; NO folate needed for the ring (vs purines).
- dTMP step: thymidylate synthase + CH₂-THF — 5-FU, MTX, trimethoprim all attack it.
- Catabolism → β-alanine/β-aminoisobutyrate — soluble, no gout analogue.
- Orotic aciduria: UMPS deficiency; uridine therapy; B12/folate-unresponsive anaemia.
- CPS-II (cytosolic) ≠ CPS-I (mitochondrial, urea cycle).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast purine vs pyrimidine ring assembly (order, folate dependence).
2. Explain how 5-FU, methotrexate, and trimethoprim each converge on dTMP supply.
3. Why is there no "pyrimidine gout"?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Aspartate + carbamoyl-P build the ring; ribose attached late.
- UMP is the hub; CTP and dTMP the exits.
- Thymidylate synthesis is chemotherapy's bullseye.
- Water-soluble catabolism keeps pyrimidines gout-free.`,
      },
    ],
  },
];
