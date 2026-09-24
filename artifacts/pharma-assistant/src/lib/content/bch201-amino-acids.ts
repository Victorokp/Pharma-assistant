import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 7: Amino Acids.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; introduction/essential-fats-style overview subtopics A;
 * classification detail subtopics B.
 */

export const bch201AminoAcidsLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'topic',
    title: 'Amino Acids',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Amino acids are the monomers of protein and, simultaneously, working molecules in their own right: neurotransmitters (glutamate, glycine, GABA), precursors of hormones and nucleotides, fuels, and nitrogen carriers. Understanding *structure first* makes every later topic — protein synthesis, enzyme catalysis, drug design — legible.

Every standard amino acid shares one backbone: a central **α-carbon** bonded to (1) an **amino group** (–NH₂, protonated to –NH₃⁺ at physiological pH), (2) a **carboxyl group** (–COOH, deprotonated to –COO⁻), (3) a **hydrogen**, and (4) a variable **side chain (R group)**. It is the R group — hydrophobic, polar, charged, aromatic, sulfur-containing — that gives each amino acid its identity and each protein its folding behaviour.

There are **20 standard amino acids** encoded by DNA. Nine are **essential** in the adult human diet (histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine) because our synthetic pathways cannot build their carbon skeletons; the remainder can be synthesised from common intermediates. Two more are **conditionally essential** (arginine in growth/preterm infants; glutamine in critical illness) — synthesis capacity exists but cannot always meet demand.

Amino acids are also **zwitterions** at pH 7 (positive and negative charges simultaneously) and **ampholytes** (they can buffer both acids and bases); each has a characteristic **isoelectric point (pI)** — the pH at which it carries no net charge. Solubility, crystallisation, and electrophoresis behaviour all follow from acid–base chemistry of the α-amino and α-carboxyl groups plus any ionisable side chains.

Classification — by **nutritional status** (essential/non-essential), by **R-group properties** (charged/uncharged, hydrophobic/hydrophilic, polar/nonpolar), and by **metabolic fate** (glucogenic/ketogenic) — is this topic's scaffolding; each scheme answers a different practical question: "Must it come from food?", "Will it bury in a protein core or face water?", and "Can it make glucose?".`,
      },
      {
        kind: 'KEY FACTS',
        body: `- General structure: α-carbon + amino + carboxyl + H + R group; zwitterionic at pH 7.
- 20 standard amino acids; 9 essential (mnemonic: PVT TIM HaLL); conditionally essential: arginine, glutamine.
- R group determines behaviour: hydrophobic cores, polar surfaces, active-site chemistry.
- Ampholytes buffer both directions; pI = net-zero-charge pH.
- Metabolic classes: glucogenic (most), ketogenic (leucine, lysine), mixed (5 others).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug design reads amino-acid chemistry: protonated amines and deprotonated carboxylates dominate drug–target interactions; tetracyclines chelate via phenolic/enolic groups; peptide drugs (insulin) are digested because proteases recognise amino-acid backbones — hence injectable. Sickle-cell disease is a single amino-acid substitution (Glu→Val) — one hydrophobic change reshaping red-cell physiology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw/describe the general α-amino acid structure and explain why it is a zwitterion at pH 7.
2. List the nine essential amino acids.
3. Name the three classification schemes for amino acids and the practical question each answers.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Same backbone, different R groups → 20 standard amino acids.
- 9 essential; arginine/glutamine conditionally essential.
- R-group chemistry drives protein folding and drug interactions.
- Three classification lenses: nutritional, R-group, metabolic.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'introduction-to-amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'Introduction to Amino Acids',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This orientation lesson sets the working vocabulary before the classifications that follow.

**Structure recap.** At pH 7 every free amino acid exists as a **zwitterion**: α-COO⁻ (negative), α-NH₃⁺ (positive). Only the R group may add charge — lysine/arginine/histidine carry extra positive; aspartate/glutamate extra negative; cysteine and tyrosine are weakly (de)protonatable; the rest are neutral.

**Stereoisomerism.** The α-carbon is chiral in all standard amino acids **except glycine** (its R is simply H). Natural proteins use the **L-configuration** (same relative arrangement as L-glyceraldehyde). D-amino acids occur in bacterial cell walls and some peptide antibiotics — a selectivity boundary that drugs (D-cycloserine, D-valine analogues) occasionally exploit.

**Peptide bonding.** The carboxyl of one amino acid condenses with the amino of the next, releasing water and forming the **peptide (amide) bond** — planar, rigid, and partial-double-bonded. Short chains are **peptides** (glutathione = 3 residues; oxytocin = 9), long chains are **proteins**. Because the backbone is constant, all the diversity of protein behaviour lives in the side chains and their order — the **primary sequence** written N-terminal → C-terminal.

**Titration behaviour.** Amino acids titrate in two (or three) steps: deprotonation of COOH (pK ≈ 2), deprotonation of NH₃⁺ (pK ≈ 9–10), plus a side-chain step where applicable. The **isoelectric point (pI)** sits between the pK values bracketing the neutral form: for glycine, pI = (2 + 9.6)/2 ≈ 5.8. At its pI an amino acid is least soluble and does not migrate in an electric field — the basis of electrophoretic separations and some crystallisation assays.

**Why all this matters downstream:** protein active sites are built from these same groups — histidine's imidazole pKa ≈ 6.5 makes it the ideal acid/base catalyst at physiological pH; cysteine's thiol forms disulphides; serine's –OH does nucleophilic catalysis. Amino-acid chemistry is enzyme chemistry.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Zwitterions at pH 7; only R groups add net charge.
- Chiral α-C except glycine; proteins use L-isomers.
- Peptide bond: planar amide linking CO–NH; sequence written N → C.
- Titration: two (or three) buffering steps; pI = pH of zero net charge.
- Side chains supply catalytic chemistry: His (pKa ~6.5), Cys, Ser.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Stereochemistry is pharmacology's gatekeeper: L-DOPA (not D) treats Parkinson's because the transporter/enzymes are stereoselective; thalidomide's tragedy taught the industry about racemisation. Peptide drugs face oral-digestion barriers rooted in backbone chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is glycine the only standard amino acid without an L/D pair?
2. Explain what pI means and why proteins are least soluble at it.
3. Give two examples of side chains with catalytic roles and their pH behaviour.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Zwitterion backbone; L-stereochemistry (except glycine); planar peptide bonds.
- pI governs solubility and migration.
- His/Cys/Ser side chains power enzyme catalysis.
- These basics underlie every protein and peptide drug.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'classification-of-amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'Classification of Amino Acids',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `No single classification suits every purpose, so biochemistry uses three complementary schemes. This lesson previews all three; the following lessons detail each.

**Scheme 1 — Nutritional (what must come from diet?).**
- **Essential (9):** histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine — carbon skeletons cannot be synthesised by humans.
- **Non-essential (11):** synthesised from central-metabolism intermediates (alanine from pyruvate; glutamate from α-KG; aspartate from OAA; serine/glycine from 3-phosphoglycerate; etc.).
- **Conditionally essential:** arginine (growth, sepsis), glutamine (critical illness), tyrosine (when phenylalanine hydroxylase is deficient — PKU makes tyrosine essential), cysteine (when methionine intake is low).

**Scheme 2 — R-group properties (how does the side chain behave in water?).**
- **Nonpolar/hydrophobic:** glycine, alanine, valine, leucine, isoleucine, proline, phenylalanine, methionine, tryptophan.
- **Polar uncharged:** serine, threonine, cysteine, tyrosine, asparagine, glutamine.
- **Positively charged (basic):** lysine, arginine, histidine.
- **Negatively charged (acidic):** aspartate, glutamate.
This scheme predicts structure: hydrophobics bury; polar/charged face solvent; proline kinks; cysteine pairs into disulphides.

**Scheme 3 — Metabolic fate (can the carbon skeleton make glucose?).**
- **Glucogenic:** skeletons → pyruvate or TCA intermediates (most amino acids).
- **Ketogenic:** → acetyl-CoA/acetoacetate (leucine; lysine also classed ketogenic).
- **Mixed:** isoleucine, phenylalanine, tyrosine, tryptophan, threonine.

**Why the multiplicity?** A dietitian uses scheme 1 (protein quality), a structural biologist scheme 2 (folding), a metabolic physician scheme 3 (diet design in organic acidaemias). Fluency in all three is the goal — and they interlock: essential amino acids tend to be ones whose skeletons are hard to build (branched chains, aromatics); hydrophobic side chains belong mostly to essential ones (we never evolved to make them because diet supplied them).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Nutritional: 9 essential, 11 non-essential, arginine/glutamine/tyrosine/cysteine conditionally essential.
- R-group: nonpolar, polar uncharged, basic (+), acidic (−).
- Metabolic: glucogenic (most), ketogenic (Leu, Lys), mixed (Ile, Phe, Tyr, Trp, Thr).
- Different schemes answer diet, folding, and metabolic-diet-design questions.
- Hydrophobic side chains usually belong to essential amino acids.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `TPN (total parenteral nutrition) formulas are built on scheme 1 (balanced essentials), protein binding of drugs on scheme 2 (albumin's hydrophobic pockets), and PKU diet design on scheme 3 (Phe restriction, Tyr supplementation). One chemistry, three professional uses.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the nine essential amino acids and explain why they are essential.
2. Which two amino acids are purely ketogenic, and which five are mixed?
3. Give an example where each classification scheme changes a practical decision.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Three lenses: diet (essential), side chain (folding), metabolism (glucose).
- Essential: 9; conditional: Arg, Gln, Tyr, Cys.
- Leu/Lys ketogenic; 5 mixed; rest glucogenic.
- Schemes interlock — fluency across all three is the goal.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'classification-based-on-nutritional-status',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'Classification of Amino Acids — Based on Nutritional Status',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Essential amino acids** are those the body cannot synthesise (or cannot make fast enough) — their carbon skeletons have no human anabolic route, so they must be supplied preformed by diet. The nine:

**Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Valine** — mnemonic *PVT TIM HaLL* (Private Tim Hall).

**Why they are essential:** their skeletons require either dedicated synthetic pathways humans lost (aromatics from shikimate pathway in plants/microbes), rare chemistries (branched-chain carbon frameworks), or sulfur insertion (methionine). Humans *can* make the non-essential eleven from glycolytic/TCA intermediates plus a nitrogen source.

**Conditionally essential amino acids:**

- **Arginine** — synthesised in the urea cycle, but growth, pregnancy, sepsis, and burn recovery outpace supply; also the NO-synthase substrate.
- **Glutamine** — abundant in muscle, but critical illness (sepsis, burns, major surgery) drains plasma glutamine faster than muscle can release; immune cells and enterocytes depend on it.
- **Tyrosine** — normally made from phenylalanine; when **phenylalanine hydroxylase** is absent (PKU), tyrosine becomes dietary-essential.
- **Cysteine** — normally made from methionine + serine; becomes essential when methionine is limiting or in prematurity.

**Protein quality in nutrition:** a protein's value depends on its essential-amino-acid profile. **Complete proteins** (egg, milk, meat, soy) supply all nine in human proportions; **limiting amino acids** define incomplete ones (lysine limits cereals; methionine limits legumes) — the biochemical basis of **food combining** (rice + beans = complementary profiles). **Chemical score** and **PDCAAS** quantify quality.

**Clinical application:** kwashiorkor (protein deficiency with adequate calories) shows hypoalbuminaemia and oedema — the body's protein pool cannot be maintained without essentials even when calories suffice. Enteral/parenteral feeds must include all nine essentials; a single missing essential amino acid stalls protein synthesis (ribosomes cannot skip).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 9 essential: PVT TIM HaLL; no human synthetic route for their skeletons.
- Conditional: Arg (growth/sepsis), Gln (critical illness), Tyr (PKU), Cys (low Met).
- Non-essential 11: built from glycolysis/TCA intermediates + nitrogen.
- Protein quality = essential profile; lysine limits cereals, methionine limits legumes.
- Missing even one essential halts ribosomal protein synthesis.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `TPN/enteral formulations are pharmacist-checked for essential completeness; PKU formulas substitute tyrosine; glutamine-enriched feeds target mucosal healing. Counselling vegetarian patients on complementary proteins applies lysine/methionine limitation in practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Recite the nine essential amino acids (mnemonic allowed).
2. Explain why tyrosine becomes essential in phenylketonuria.
3. What is a limiting amino acid, and which one limits cereal proteins?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Essentials (9) must come preformed; PVT TIM HaLL.
- Conditional essentials appear under stress/disease.
- Quality = essential profile; combining foods complements limiting amino acids.
- One missing essential stalls all protein synthesis.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'classification-based-on-r-group-properties',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'Classification of Amino Acids — Based on R-Group Properties',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The side chain (R group) is the amino acid's personality. Sorting the twenty by R-group behaviour predicts protein architecture and function — this lesson maps the four families; the next lessons zoom into each.

**1. Nonpolar (hydrophobic):** glycine, alanine, valine, leucine, isoleucine, proline, phenylalanine, methionine, tryptophan.
*Behaviour:* avoid water, cluster inside folded proteins (**hydrophobic core**), drive folding. Special cases — glycine (tiny, flexible), proline (cyclic, kinks helices), phenylalanine/tryptophan (aromatic, absorb UV 280 nm), methionine (sulfur, starts every protein).

**2. Polar uncharged:** serine, threonine, tyrosine, cysteine, asparagine, glutamine.
*Behaviour:* hydrogen-bond with water and each other; line active sites and surfaces. Special cases — serine/threonine carry –OH (phosphorylation handles); tyrosine's phenol (also phosphorylatable, UV-absorbing); cysteine's thiol (forms **disulphide bridges** and metal-binding); asparagine/glutamine are amide versions of the acidic pair.

**3. Positively charged (basic) at pH 7:** lysine (ε-amino), arginine (guanidinium — strongest), histidine (imidazole — pKa ≈ 6.5, often neutral at pH 7 but protonatable near it).
*Behaviour:* bind negatively charged ligands/DNA; histidine's near-neutral pKa makes it the classic **catalytic proton shuttle** in enzymes.

**4. Negatively charged (acidic) at pH 7:** aspartate, glutamate (deprotonated carboxylates).
*Behaviour:* chelate metals, form salt bridges with basics, participate in proton transfers; aspartate proteases (renin, HIV protease) and metalloproteases rely on them.

**Why this classification matters most in structure:** the sequence's hydrophobics pull the chain into a globule; polar/charged groups decorate the surface; a few precise side chains form the active site. **Membrane proteins invert the pattern** (hydrophobic outside, in lipid). Mutations that swap a hydrophobic for a charged residue are often devastating (sickle-cell: Glu→Val; cystic fibrosis: Phe508 deletion).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four families: nonpolar, polar uncharged, basic (+), acidic (−).
- Hydrophobics bury (folding driver); polar/charged face solvent.
- Proline kinks; glycine flexes; Cys pairs into disulphides.
- His (pKa 6.5) = catalytic shuttle; Lys/Arg bind anions/DNA; Asp/Glu chelate metals.
- Aromatics (Phe, Trp, Tyr) absorb UV 280 nm — protein quantification trick.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug–protein interactions exploit R-group chemistry: basic drug amines salt-bridge to Asp/Glu pockets; warfarin sits in albumin's hydrophobic site; kinase inhibitors bind Ser/Thr/Tyr phosphorylation machinery. Membrane receptors expose hydrophobic faces to lipid — lipophilic drugs thread into them.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four R-group families and three members of each.
2. Why is histidine uniquely useful in enzyme active sites?
3. How does a single Glu→Val substitution cause sickle-cell disease?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- R groups sort into 4 families; behaviour follows charge/polarity.
- Hydrophobic cores, polar surfaces, charged active sites.
- Proline/glycine shape; cysteine links; histidine catalyses.
- One wrong R group can rewrite a protein's fate.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'charged-and-uncharged-amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'R-Group Properties — Charged and Uncharged Amino Acids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `At physiological pH, five amino acids carry a *net side-chain* charge in addition to their backbone zwitterion: **lysine, arginine, histidine** (positive) and **aspartate, glutamate** (negative). The other fifteen have **uncharged side chains** (even if polar, e.g. serine). This lesson explains the acid–base logic that makes the split.

**The charged five — pKa logic:**

- **Lysine** ε-NH₃⁺ pKa ≈ 10.5 → stays protonated (+) at pH 7.
- **Arginine** guanidinium pKa ≈ 12.5 → essentially always (+); the strongest cation in proteins.
- **Histidine** imidazole pKa ≈ 6.0–6.5 → ~10% protonated at pH 7, but *easily flipped either way* near neutral pH — the biological proton wire.
- **Aspartate/Glutamate** β/γ-COOH pKa ≈ 3.9–4.2 → fully deprotonated (−) at pH 7.

**Roles of charged residues:**

1. **Salt bridges** — Lys/Arg ↔ Asp/Glu ionic pairs stabilise tertiary structure and interfaces.
2. **Active-site chemistry** — Asp/Glu act as general acids/bases (aspartyl proteases); His shuttles protons in serine proteases and haemoglobin's Bohr effect.
3. **Metal binding** — Zn²⁺ enzymes (carbonic anhydrase, carboxypeptidase) coordinate via His/Asp/Glu.
4. **DNA interaction** — Arg/Lys-rich domains (histones!) wrap the polyanionic backbone; protamines, polylysine tracts.
5. **pH-responsive proteins** — haemoglobin's charged residues change protonation with pH (Bohr effect); channel selectivity filters use ring of charges.

**The uncharged fifteen** still differ in *polarity*: serine/threonine/tyrosine (–OH), cysteine (–SH), asparagine/glutamine (amide) hydrogen-bond but carry no net charge; glycine/alanine/valine/leucine/isoleucine/proline/phenylalanine/methionine/tryptophan are nonpolar. (Next lessons split these formally.)

**pH in practice:** protein solubility is lowest at its **pI** (equal positive/negative charges — crystallisation and precipitation exploit this); electrophoresis separates by net charge (isoelectric focusing); enzyme activity bell-curves reflect protonation states of key residues. Plasma proteins buffer blood partly through these same groups.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Charged at pH 7: Lys/Arg/His (+), Asp/Glu (−); pKa logic determines each.
- Histidine pKa ≈ 6.5: catalytic proton shuttle near neutrality.
- Salt bridges, metal chelation, DNA binding, Bohr effect = charged-residue roles.
- Uncharged ≠ nonpolar: Ser/Thr/Cys/Asn/Gln are polar but neutral.
- pI: zero net charge → least solubility (precipitation, IEF).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug solubility engineering mirrors amino-acid logic: weak acids/bases are formulated to control ionisation (Henderson–Hasselbalch). Heparin (polyanion) binds Lys/Arg-rich proteins; protamine (Arg-rich) reverses heparin — pure charge complementarity. Buffering by plasma proteins uses these titratable groups.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five charged amino acids with their side-chain pKa values.
2. Why is histidine special for catalysis compared with lysine?
3. What is a salt bridge and how does it stabilise protein structure?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 5 charged (Lys/Arg/His/Asp/Glu); 15 uncharged.
- pKa decides state; His flips near neutral pH.
- Charged residues make bridges, bind metals/DNA, sense pH.
- pI chemistry explains precipitation and electrophoresis.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'hydrophobic-and-hydrophilic-amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'R-Group Properties — Hydrophobic and Hydrophilic Amino Acids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Hydrophobic** = water-fearing; **hydrophilic** = water-loving. This is the classification that most directly drives protein folding.

**Hydrophobic amino acids** (glycine, alanine, valine, leucine, isoleucine, proline, phenylalanine, methionine, tryptophan) have side chains of only C/H (± sulfur/aromatic ring) that cannot hydrogen-bond with water. In aqueous solution, water molecules around them become *ordered* (entropically unfavourable), so proteins bury these residues into an **oil-drop core** — the **hydrophobic effect** is the dominant folding force. Membrane-spanning segments invert the rule: their hydrophobic side chains face the lipid bilayer — which is why every transmembrane helix is a stretch of ~20 hydrophobic residues.

**Hydrophilic amino acids** (serine, threonine, cysteine, tyrosine, asparagine, glutamine, lysine, arginine, histidine, aspartate, glutamate) carry –OH, –SH, amide, or charged groups that hydrogen-bond or ionise in water. They populate protein surfaces, active sites, and aqueous channels.

**Consequences to master:**

1. **Folding and stability:** mutations replacing hydrophobic with charged residues destabilise cores (many inherited enzyme deficiencies) — conversely, charged→hydrophobic surface mutations can cause aggregation (sickle-cell Val patch; amyloidogenesis).
2. **Membrane topology:** hydropathy plots predict transmembrane helices — the first step in identifying receptor/channel sequences from raw sequence data.
3. **Drug distribution:** albumin's hydrophobic pockets bind lipophilic drugs; hydrophilic drugs stay in plasma/extracellular water.
4. **Protein purification:** hydrophobic-interaction and reversed-phase chromatography exploit this split; salting-out follows the same logic.
5. **Detergents/chaotropes:** SDS denatures by wrapping hydrophobic tails around hydrophobic cores — the chemistry of SDS-PAGE.

**Boundary cases:** tyrosine and tryptophan are aromatic yet partly polar (phenol/indole NH hydrogen-bond); they often sit at membrane interfaces; both absorb UV 280 nm (protein assays). Glycine is hydrophobic by chemistry but tiny — its real job is flexibility (tight turns).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Hydrophobic 9: gly, ala, val, leu, ile, pro, phe, met, trp — bury in cores/inside membranes.
- Hydrophilic 11: all with –OH/–SH/amide/charged groups — surfaces and active sites.
- Hydrophobic effect = chief folding force; water entropy drives it.
- Transmembrane helices ≈ 20 hydrophobic residues; hydropathy plots predict them.
- Hydrophobic↔hydrophilic mutations drive disease (sickle cell, enzyme instabilities).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Lipophilic drugs ride albumin's hydrophobic sites; detergents solubilise membranes for receptor assays; amphipathic bile salts and lung surfactant are biological applications of the same hydrophobic/hydrophilic logic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the hydrophobic effect and explain why it drives folding.
2. How can you predict a transmembrane helix from an amino-acid sequence?
3. Give two pharmaceutical applications of hydrophobic/hydrophilic partitioning.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Hydrophobics hide from water → cores and membrane spans.
- Hydrophilics face water → surfaces, sites, channels.
- Folding, topology prediction, drug binding, chromatography all follow this split.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'hydrophobic-amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'R-Group Properties — Hydrophobic Amino Acids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A closer walk through the **nine hydrophobic residues** — each has a signature role beyond "avoids water".

- **Glycine (Gly, G)** — R = H; the smallest. Conformational freedom (φ/ψ angles unhindered) makes it the hinge of tight turns and flexible loops; collagen's every-third Gly fills the triple helix's narrow core (Gly→any-other mutations cause **osteogenesis imperfecta**).
- **Alanine (Ala, A)** — the minimal hydrophobic methyl; the "default" residue; alanine-scanning mutagenesis uses it to test which residues matter.
- **Valine (Val, V), Leucine (Leu, L), Isoleucine (Ile, I)** — the **branched-chain trio** (BCAAs); β-branched side chains stiffen helices; all three are *essential* and catabolised in muscle by BCKDH (defect → MSUD). Valine is glucogenic, isoleucine mixed, leucine ketogenic. Leucine additionally signals mTOR — the feed trigger of protein synthesis (why leucine is prized in sports nutrition).
- **Proline (Pro, P)** — side chain *cyclises back onto the amine*; no NH for helix hydrogen-bonding; imposes kinks. Breaks helices, defines turns; collagen's (Gly-Pro-HydroxyPro)n repeat; proline isomerisation (peptidyl-prolyl isomerase) can be a rate-limiting folding step.
- **Phenylalanine (Phe, F)** — pure aromatic ring; strongly hydrophobic; essential precursor of tyrosine → catecholamines/melanin/thyroid hormones; PKU is its inborn-error.
- **Methionine (Met, M)** — thioether; *always the first residue* of every nascent protein (AUG start codon); its sulfur oxidises to sulfoxide (methionine sulfoxide reductase repairs); S-adenosylmethionine (SAM) is the cell's methyl donor — one-carbon metabolism's currency.
- **Tryptophan (Trp, W)** — largest side chain (indole); precursor of **serotonin, melatonin, niacin (NAD)**; rarest standard residue but contributes most to UV280 absorption; kynurenine pathway products modulate immunity.

**Clinical anchors:** BCAA formulas help hepatic encephalopathy (aromatics/BCAA imbalance in plasma); maple-syrup urine disease blocks all three BCAAs; tryptophan depletion is an immune-regulation strategy (IDO enzyme) exploited by tumours.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Gly = flexibility/hinges; Ala = minimal spacer.
- BCAAs (Val/Leu/Ile): essential, muscle-catabolised, BCKDH; Val glucogenic, Ile mixed, Leu ketogenic + mTOR signal.
- Pro: cyclic imino acid; kinks; collagen repeat.
- Phe → Tyr → catecholamines/melanin; PKU = PAH block.
- Met: start residue; SAM methyl donor; Trp → serotonin/melatonin/NAD.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Leucine-rich nutrition in sarcopaedia, BCAA therapy in liver disease, methionine restriction in some cancer diets, and 5-HTP/tryptophan supplements (serotonin pathway) are all this lesson applied. Osteogenesis imperfecta's Gly substitutions show single-residue consequences.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does proline disrupt α-helices?
2. Distinguish the metabolic fates of valine, leucine, and isoleucine.
3. Name two specialised products derived from methionine and tryptophan.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Nine hydrophobics; each has a signature: Gly hinge, Pro kink, Met start/SAM, Trp serotonin/NAD.
- BCAAs: muscle fuels with distinct fates.
- Phe's block = PKU; Trp's depletion = immune tactic.
- Hydrophobic ≠ boring — each is biochemically loud.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'polar-and-nonpolar-amino-acids',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'R-Group Properties — Polar and Nonpolar Amino Acids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Polarity** asks one question: does the side chain interact electrostatically with water? Nonpolar chains (pure C/H) cannot; polar chains (O/N/S with accessible lone pairs or ionisable H) can. This lesson consolidates the two camps and their consequences — the practical end of the R-group story.

**Nonpolar (9):** Gly, Ala, Val, Leu, Ile, Pro, Phe, Met, Trp. *(Detailed individually in the Hydrophobic Amino Acids lesson.)*

**Polar uncharged (6):**
- **Serine (Ser, S)** — primary –OH; nucleophile of **serine proteases** (chymotrypsin, trypsin); phosphorylation site (Ser/Thr/Tyr kinases).
- **Threonine (Thr, T)** — secondary –OH; phosphorylation site; essential amino acid.
- **Tyrosine (Tyr, Y)** — phenol –OH; phosphorylation site of **receptor tyrosine kinases** (the largest drug-target family: insulin receptor, EGFR); precursor of catecholamines, melanin, thyroid hormone.
- **Cysteine (Cys, C)** — thiol –SH; forms **disulphide bonds** (extracellular protein stability — insulin's chains); metal coordination (zinc fingers); pKa ≈ 8.3 makes it catalytic in cysteine proteases.
- **Asparagine (Asn, N)** — amide of Asp; **N-glycosylation sites** (Asn-X-Ser/Thr sequons) — the attachment point of most protein sugars.
- **Glutamine (Gln, Q)** — amide of Glu; nitrogen shuttle (blood glutamine); fuel for enterocytes/immune cells; conditionally essential.

**Polar charged (5):** Asp, Glu, Lys, Arg, His (detailed in Charged/Uncharged lesson).

**Why the polar/nonpolar split matters:**

1. **Protein architecture** — nonpolar cores, polar shells: any membrane protein must invert this or use amphipathic helices (porins, channels).
2. **Post-translational regulation** — phosphorylation flips a polar –OH into a bulky *charged* group, rewiring interactions; nearly all cellular signalling runs through Ser/Thr/Tyr.
3. **Extracellular stability** — disulphides (Cys) and glycosylation (Asn) stabilise secreted proteins: insulin, antibodies, enzymes of the gut.
4. **Solubility engineering** — recombinant drugs often add polar tags (e.g. PEGylation, Fc fusion) to extend half-life; peptide drugs are D-amino-acid/N-methyl-modified to resist proteases.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Polar uncharged 6: Ser, Thr, Tyr, Cys, Asn, Gln.
- Ser/Thr/Tyr = phosphorylation alphabet; Tyr = RTK drug-target family.
- Cys → disulphides + zinc fingers; catalytic in cysteine proteases.
- Asn = N-glycosylation anchor (Asn-X-S/T); Gln = nitrogen shuttle/fuel.
- Nonpolar cores + polar surfaces = the fold; membranes invert it.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Kinase inhibitors (imatinib, erlotinib) target Tyr phosphorylation machinery; serine-protease inhibitors (warfarin-blocking the vitamin-K cycle aside) and ACE inhibitors exploit catalytic-site chemistry; biologics (insulin, mAbs) rely on disulphides and glycosylation for shelf stability — pharmacy manufacturing is R-group chemistry at scale.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the six polar uncharged amino acids and one signature role of each.
2. Why does phosphorylation of Ser/Thr/Tyr so powerfully change protein behaviour?
3. Which residue anchors N-linked glycosylation and in what sequence context?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 9 nonpolar vs 6 polar uncharged vs 5 charged — polarity sorts behaviour.
- Phosphorylation, disulphides, glycosylation run on the polar six.
- Structure (cores/surfaces) and signalling (OH switches) follow polarity.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'other-amino-acid-classifications',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'Other Amino Acid Classifications',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Beyond nutrition and R-group schemes, several specialised classifications appear in textbooks and clinical practice.

**1. By metabolic family / biosynthetic origin** (how their skeletons are made or degraded):
- **Pyruvate family:** alanine, valine, leucine.
- **3-Phosphoglycerate family:** serine, glycine, cysteine.
- **α-Ketoglutarate family:** glutamate, glutamine, proline, arginine, histidine.
- **Oxaloacetate family:** aspartate, asparagine, methionine, threonine, lysine (in plants/microbes).
- **Phosphoenolpyruvate + erythrose-4-P (shikimate) family:** phenylalanine, tyrosine, tryptophan — why humans cannot make them (no shikimate pathway).
- **Ribose-5-P (histidine's solo route):** built from PRPP + ATP.

**2. Glucogenic/ketogenic/mixed** — covered already; the clinical diet-design lens (PKU, MSUD, organic acidaemias).

**3. By degradation site:** most amino acids are catabolised in **liver**; the **branched-chain amino acids** are oxidised mainly in **muscle** (muscle lacks the first BCKDH-tissue specificity? no — muscle has high BCKDH activity and liver relatively little) — the reason BCAAs are exercise fuels and why plasma BCAA patterns shift in liver disease.

**4. Glucogenic vs glucogenic-only limitation:** some amino acids are also **"both-N-and-C donors"** for special synthesis: glycine (haem, purines, creatine, glutathione), glutamate (GABA, glutathione), aspartate (pyrimidines, urea N), arginine (NO, creatine, urea), methionine (SAM methylations).

**5. Non-standard amino acids** worth knowing:
- **Hydroxyproline/hydroxylysine** — collagen post-translational products (vitamin C–dependent hydroxylases; scurvy = failed hydroxylation).
- **γ-Carboxyglutamate (Gla)** — clotting-factor residue made by vitamin-K–dependent carboxylation (warfarin's target).
- **Selenocysteine** — the 21st amino acid (antioxidant enzymes).
- **Ornithine/citrulline** — urea-cycle intermediates (not in proteins).
- **D-amino acids** — bacterial walls, some antibiotics.

**6. Sweet/umami taste residues:** monosodium glutamate (umami), glycine (sweet) — trivia with food-industry relevance.

**7. Sulfur-containing (Cys, Met) vs aromatic (Phe, Tyr, Trp) vs imino (Pro):** functional-group microclasses that exam questions love.

These schemes are not competing — they are different zoom levels on the same 20 molecules, and professional fluency means choosing the right zoom for the question asked.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Biosynthetic families: pyruvate (Ala/Val/Leu), 3-PG (Ser/Gly/Cys), α-KG (Glu/Gln/Pro/Arg/His), OAA (Asp/Asn/Met/Thr/Lys), shikimate aromatics (Phe/Tyr/Trp — absent in humans).
- BCAAs degrade mainly in muscle, not liver.
- Specialist N/C donors: Gly (haem/purine/creatine), Glu (GABA/GSH), Asp (pyrimidines), Arg (NO/creatine).
- Non-standard: hydroxyproline/lysine (vit C), Gla (vit K), selenocysteine, D-amino acids.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Warfarin blocks γ-carboxylation (Gla chemistry); vitamin C deficiency unmoors collagen's hydroxyproline; methionine/SAM chemistry hosts methyl-transfer drug effects (e.g. levodopa COMT inhibitors touch catecholamine methylation). Non-standard residues are drug-action landmarks.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which amino-acid family explains why humans cannot synthesise aromatic amino acids?
2. Name three non-standard amino acids and the vitamin each depends on.
3. Which amino acids are degraded primarily in muscle, and why does that matter in liver disease?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Six biosynthetic families; shikimate explains essentiality of aromatics.
- Special-donor residues (Gly/Glu/Asp/Arg/Met) build haem, GABA, purines, NO, SAM.
- Non-standard residues carry vitamin signatures (C, K, B12/sele).
- Multiple classifications = zoom levels; pick per question.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'classification-based-on-energy-production',
    courseId: 'bch-201',
    topicId: 'amino-acids',
    nodeType: 'subtopic',
    title: 'Classification Based on Energy Production',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The metabolic classification asks: **after the amino group is removed, what can the carbon skeleton become?** The answer sorts all twenty into glucogenic, ketogenic, or both — and it decides which amino acids can defend blood glucose, which feed ketones, and how diets are designed in metabolic disease.

**Glucogenic (most amino acids):** skeletons become **pyruvate** or **TCA intermediates** — both feed gluconeogenesis. Examples: alanine → pyruvate; glutamate → α-KG; aspartate → OAA; valine/methionine → succinyl-CoA; glycine/serine → pyruvate. In fasting, these are the amino acids whose muscle export (as alanine/glutamine) sustains blood glucose.

**Ketogenic (leucine only, strictly):** leucine's catabolism yields **acetyl-CoA and acetoacetate** — neither can yield net glucose (the PDH step is irreversible; TCA carbons from acetyl-CoA are lost as CO₂ within the turn). Leucine instead feeds **ketogenesis** or fat synthesis. Lysine is classed ketogenic in most schemes (its final intermediate, acetoacetyl-CoA, cannot net-generate glucose).

**Mixed (five):** isoleucine, phenylalanine, tyrosine, tryptophan, threonine — each yields one glucogenic fragment + one ketogenic fragment (e.g. Phe/Tyr → fumarate + acetoacetate; Ile → succinyl-CoA + acetyl-CoA).

**Energy yields (per molecule, approximate):** a 20-carbon amino-acid skeleton can yield substantial ATP via TCA/ETC — but protein's real metabolic role is *structure and regulation*, not storage; excess protein calories are either oxidised, converted to glucose (glucogenic), or to fat (via acetyl-CoA).

**Clinical uses of the classification:**

1. **Fasting physiology:** glucogenic amino acids defend glucose; leucine cannot — the reason "protein sparing" still needs glucose sources.
2. **Ketogenic diets** (epilepsy therapy, some obesity regimens): designed high-fat, adequate-protein — because excess glucogenic amino acids would raise glucose and suppress ketogenesis.
3. **Inborn errors:** in MSUD, leucine is the neurotoxic driver; diet restricts BCAAs but must supply enough valine/isoleucine (glucogenic needs) and titrate leucine.
4. **Diabetes/starvation:** both push amino-acid-derived gluconeogenesis; glucogenic skeletons (alanine especially) are the glucose bridge.
5. **Parenteral nutrition:** amino-acid solutions rich in BCAAs are marketed for stressed/hypercatabolic patients (leucine's mTOR signalling + oxidation without glucose load).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Glucogenic: skeleton → pyruvate/TCA intermediates → glucose (most AAs).
- Ketogenic: Leu (strictly), Lys (usually classed so) → acetyl-CoA/acetoacetate; no net glucose.
- Mixed (5): Ile, Phe, Tyr, Trp, Thr.
- Fasting: alanine/glutamine exports sustain gluconeogenesis.
- Keto diets must limit glucogenic AAs; BCAA formulas exploit Leu signalling.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Diet-pharmacy intersections: ketogenic-diet drug interactions (some antiepileptics' metabolism shifts), TPN BCAA formulas, and sick-day glucose support in FAOD/MSUD. Knowing which amino acids can raise glucose tells you which feed components matter in hypoglycaemia management.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define glucogenic and ketogenic amino acids by skeleton destination.
2. Why can leucine never contribute net carbon to glucose?
3. How does this classification shape ketogenic-diet design?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Skeletons choose: glucose (most), ketones (Leu/Lys), both (5).
- PDH irreversibility is why acetyl-CoA cannot make glucose.
- Fasting gluconeogenesis leans on glucogenic AAs.
- Diet design (keto, MSUD, TPN) applies this classification directly.`,
      },
    ],
  },
];
