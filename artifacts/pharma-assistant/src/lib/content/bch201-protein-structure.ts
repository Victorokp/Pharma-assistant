import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 9: Protein Structure and Function.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; overview/relationship/clinical subtopics A; descriptive B.
 */

export const bch201ProteinStructureLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'protein-structure-and-function',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'topic',
    title: 'Protein Structure and Function',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Proteins are the working machinery of biology: enzymes, transporters, antibodies, receptors, structural scaffolds, motors, hormones. Every one of those functions arises from **shape** — and shape arises from a linear message. This topic follows that chain of logic: sequence → folding → structure → function, and what happens when any link breaks.

The central dogma of protein chemistry is that **sequence determines structure determines function**. A polypeptide emerges from the ribosome as a flexible chain; within milliseconds to minutes it folds into a low-energy three-dimensional shape driven by its own side chains' interactions with water and each other (the hydrophobic effect in the lead role). Four structural levels organise the description:

- **Primary** — the amino-acid sequence (covalent peptide bonds).
- **Secondary** — local regular patterns (α-helix, β-sheet, turns) stabilised by backbone hydrogen bonds.
- **Tertiary** — the whole-chain 3D arrangement (side-chain interactions: hydrophobic cores, salt bridges, disulphides).
- **Quaternary** — assembly of multiple chains (haemoglobin's α₂β₂, antibody heavy/light pairs).

Function follows shape: an enzyme's active site exists because specific residues are brought into precise geometry; haemoglobin binds oxygen cooperatively because its quaternary structure shifts; antibodies recognise shape-complementary epitopes. Small changes in sequence can reshape structure and rewrite function — sickle-cell haemoglobin's single Glu→Val substitution creates polymerising fibres; a single Phe deletion in CFTR destroys a chloride channel.

The topic closes with **denaturation/renaturation**, the **forces** that hold structure together, and the **functional consequences** of structural change — the molecular vocabulary behind protein drugs, biologics storage, and inherited protein diseases.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sequence → structure → function is the organising chain.
- Four levels: primary (sequence), secondary (helices/sheets), tertiary (whole chain), quaternary (multi-chain).
- Hydrophobic effect drives folding; backbone H-bonds build secondary patterns.
- Active sites and binding sites are geometry created by folding.
- Single-residue changes can rewrite function (sickle Hb, CFTR ΔF508).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Biologics (insulin, mAbs, enzymes) are structure-preserving challenges: cold chains, lyophilisation, and formulation excipients exist to hold tertiary/quaternary structure. Pharmacogenomics of protein-target drugs and diseases of misfolding (prions, amyloidoses, CF) all sit here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the sequence-structure-function chain and give one example of a single-residue disease.
2. Name the four structural levels with one stabilising force each.
3. Why do biologic drugs require cold-chain storage?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Proteins: sequence folds into shape; shape creates function.
- Four structural levels from peptide bond to multi-chain assembly.
- Folding is chemistry (hydrophobic cores, H-bonds, disulphides).
- Broken structure = broken function = disease or spoilage.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'protein-structure-and-function-overview',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Protein Structure and Function',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An orientation map of the protein world — classes of function first, then the structural principles they share.

**Functional classes of proteins:**

- **Enzymes** — catalysis (hexokinase, acetylcholinesterase): active sites, specificity, regulation (allosteric/covalent).
- **Transport** — haemoglobin (O₂), albumin (fatty acids/drugs/bilirubin), transferrin (Fe), lipoproteins (lipids), GLUT channels (glucose).
- **Structural** — collagen (triple helix, strength), keratin (coiled coils, skin/hair), elastin, tubulin.
- **Contractile/motor** — actin–myosin, kinesin/dynein.
- **Defence** — immunoglobulins, complement, clotting factors, interferons.
- **Regulatory** — hormones (insulin, GH), receptors (RTKs, GPCRs), transcription factors.
- **Storage/nutrient** — ferritin, casein, ovalbumin.
- **Toxins/defence-effectors** — snake venom enzymes, bacterial toxins.

**Shared structural principles:**

1. **Modular architecture:** proteins combine recurring folds (Rossmann folds for nucleotide binding, EF-hands for Ca²⁺, immunoglobulin domains) — evolution reuses working parts.
2. **Globular vs fibrous:** globular proteins fold compactly with hydrophobic cores and functional surfaces (enzymes, transporters); fibrous proteins extend as repetitive strands providing tensile strength (collagen/keratin) — different geometries for different jobs.
3. **Dynamic, not rigid:** proteins breathe — conformational changes underlie allostery, gating, and motor action; "structure" is a statistical ensemble.
4. **Ligand specificity** comes from shape + chemistry complementarity (H-bonds, ionic pairs, hydrophobic packing) — the design language of drug discovery.
5. **Concentration and turnover:** each protein's cellular amount reflects synthesis/degradation balance (turnover lesson earlier).

**Reading a protein's job from its structure:** membrane-spanning hydrophobic stretches → receptor/channel; surface basic patch → DNA/RNA binding; glycine-rich hinge → flexibility; disulphide-rich exterior → secreted stability. These heuristics let pharmacists and clinicians reason about new proteins (drug targets, allergens, biomarkers) from sequence alone.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Functional classes: enzymes, transport, structural, motor, defence, regulatory, storage.
- Globular (soluble, dynamic) vs fibrous (repetitive, tensile).
- Modular folds recur (Rossmann, EF-hand, Ig domains).
- Specificity = shape + chemical complementarity — drug design's grammar.
- Sequence heuristics predict topology and function.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Albumin binding predicts drug distribution; Ig-domain antibodies are the largest biologic class; GPCR/RTK structure drives target-based drug discovery; collagen/keratin chemistry underlies dermatologic and surgical materials.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name six functional classes of proteins with an example each.
2. Contrast globular and fibrous proteins in structure and job.
3. What structural clues suggest a protein is a membrane receptor?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Proteins span eight functional families.
- Shape classes: globular workhorses vs fibrous cables.
- Recurring folds + chemical complementarity = function.
- Sequence tells topology; topology suggests the job.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'primary-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Primary Structure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Primary structure** is the covalent backbone: the linear **sequence of amino acids** joined by **peptide bonds**, read from the **N-terminus** to the **C-terminus**, plus any **disulphide bonds** between cysteines ( insulin's A–B chains are covalently linked this way — part of primary structure by convention).

**The peptide bond itself:**

- Formed by condensation (–COOH + –NH₂ → –CO–NH– + H₂O) at the ribosome, energy-supplied by ATP-equivalents.
- **Partial double-bond character** (resonance) makes it rigid and **planar**; the C=O and N–H are trans across it.
- Backbone rotation happens only at the α-carbon's two adjacent bonds (φ/ψ angles) — the freedom that later permits helices/sheets.
- Polar: C=O and N–H groups hydrogen-bond — the currency of secondary structure.

**Sequence → identity:** a 100-residue protein has 20¹⁰⁰ possible sequences — biological information stored in order. Even one substitution matters (sickle Hb Glu6→Val). The **genetic code** specifies sequence: mRNA codons → tRNA → amino acids; start methionine, stop codons, post-translational removal.

**Sequence conservation:** residues essential for function evolve slowly (active sites, folding cores); variable residues tolerate change. Aligning sequences across species reveals functional regions — the basis of bioinformatics-driven drug discovery.

**Determining sequence:** Edman degradation historically; now mass spectrometry and DNA sequencing (protein inferred from gene). Clinical translation: haemoglobin electrophoresis identifies sequence variants (HbS, HbC); biologics' biosimilars must match primary sequence (and more).

**Why primary structure rules everything:** the sequence contains *all* the information for folding (Anfinsen's principle — ribonuclease refolds correctly after denaturation when disulphides re-form correctly). Higher structures are consequences, not additional blueprints — a claim with one famous exception (prions, where misfolding propagates despite normal sequence).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Primary structure = AA sequence (N→C) + disulphide bonds.
- Peptide bond: rigid, planar, partial double bond; backbone H-bond capable.
- Rotation only at φ/ψ (α-C bonds) — enables secondary patterns.
- Sequence information: 20ⁿ possibilities; single substitutions cause disease.
- Anfinsen: sequence contains all folding information (prions excepted).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Hb electrophoresis diagnoses sequence variants; insulin analogue design (lispro/aspart/glargine) edits sequence to tune absorption; biosimilar regulation demands primary-structure equivalence. Peptide sequencing underpins biologics QC.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is the peptide bond planar, and what rotates instead?
2. State Anfinsen's principle and its exception.
3. How does primary sequence relate to the genetic code?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Primary = sequence + disulphides; N→C reading.
- Planar peptide bonds; φ/ψ freedom drives folding options.
- One residue can rewrite physiology (HbS).
- Sequence is the complete folding blueprint.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'secondary-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Secondary Structure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Secondary structure** is the local, regular folding of the backbone into repeating patterns — stabilised overwhelmingly by **backbone hydrogen bonds** (C=O···H–N), independent of side-chain identity.

**The α-helix:**

- Right-handed coil, **3.6 residues per turn**, 5.4 Å rise per turn; H-bonds run from residue *n*'s C=O to residue *n+4*'s N–H — a local, in-line bonding ladder.
- Side chains project outward — surfaces interact with solvent or pack into cores.
- Preferences: alanine/leucine/glutamate favour helices; **proline breaks them** (no N–H donor, ring constrains φ); glycine destabilises (too flexible); consecutive bulky/charged residues clash.
- Helical wheels: amphipathic helices (hydrophobic one side, polar the other) drape membranes and bind DNA (leucine zippers).

**The β-sheet:**

- Extended strands (~2 Å/residue) align side-by-side; H-bonds form **between strands** (not along them).
- **Parallel** (N→C same direction) or **antiparallel** (alternating — stronger, linear H-bonds); pleated geometry from backbone zigzag.
- Side chains alternate above/below the plane — hydrophobic faces can stack into cores; **β-barrels** (porins, Green fluorescent protein) and **β-sandwiches** (antibody Ig domains) are common folds.
- Aromatic/aliphatic residues favour strands; proline can fit edge strands.

**Turns and loops:**

- **β-turns** (4 residues, often Gly at +3, Pro at +2) reverse direction; **loops** are less regular but functional — binding sites, catalytic residues, disulphide anchors live here more often than in regular patterns.
- Turns sit on protein surfaces (solvent-exposed); glycine/proline dominate.

**Supersecondary motifs:** helix-turn-helix, coiled coils (keratin), β-α-β (Rossmann), Greek keys — recurring combinations that build domains.

**Measurement:** circular dichroism (CD) spectroscopy quantifies helix/sheet content; X-ray/NMR reveal them in 3D; hydropathy/secondary-structure prediction algorithms (Chou–Fasman historically, modern ML) estimate from sequence.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Secondary = local regular backbone patterns; backbone H-bonds dominate.
- α-helix: 3.6₁₃, H-bond n→n+4; Pro breaks, Ala/Leu favour.
- β-sheet: inter-strand H-bonds; parallel vs antiparallel; barrels/Ig sandwiches.
- Turns/loops: Gly/Pro-rich, surface-exposed, functionally dense.
- CD spectroscopy quantifies secondary content.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Transmembrane helices (GPCRs) are drug-target architecture; β-sheet stacking is amyloid disease chemistry (Alzheimer's Aβ, prions); collagen's polyproline-II triple helix is a structural special case (vitamin C–dependent).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does proline disrupt α-helices but glycine destabilises them differently?
2. Contrast parallel and antiparallel β-sheets.
3. Which residues dominate turns and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Helix: local n→n+4 bonds; sheet: inter-strand bonds; turns: direction changes.
- Side chains decorate outward/inward per pattern.
- Proline/glycine are the pattern-breakers.
- Motifs stack into domains; domains build proteins.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'examples-of-secondary-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Secondary Structure — Examples',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Concrete proteins illustrate how secondary structure serves function:

**α-helix examples:**

- **Haemoglobin/myoglobin:** ~75% α-helical; helices cradle the **haem pocket**; the F-helix hosts the proximal histidine coordinating iron — oxygen binding tilts F-helix in Hb → allosteric quaternary shift.
- **Keratin:** coiled coils — two α-helices supercoil; hydrophobic residues line the seam (heptad repeat); disulphides between coils set hair/skin hardness (permanent waves reduce/oxidise them).
- **Transmembrane helices (GPCRs, channels):** 20+ hydrophobic residues span the bilayer; rhodopsin's 7-helix bundle is the classic GPCR — retinal sits mid-bundle; **rhodopsin-family receptors are the largest drug-target class** (β-blockers, antihistamines, opioids all act here).
- **Leucine zipper transcription factors:** amphipathic helices dimerise along hydrophobic seams to grip DNA.

**β-sheet examples:**

- **Immunoglobulin domains:** β-sandwiches — antibody specificity built on loop diversity grafted onto stable sheets; the fold that powers all monoclonal drugs.
- **Porins:** β-barrels span outer membranes (Gram-negative bacteria) — hydrophobic outside, water-filled pore inside; antibiotic permeability runs through them.
- **Amyloid fibrils:** cross-β stacking — Aβ (Alzheimer's), prion protein, islet amyloid polypeptide (type 2 diabetes); sheets stack into rigid fibrils resistant to proteases — misfolded β-structure as pathology.
- **Enzyme scaffolds:** lactate dehydrogenase, triosephosphate isomerase (TIM barrel α/β) mix strands and helices into catalytic cores.

**Turn/loop examples:**

- **Antibody CDR loops:** hypervariable loops (turns/irregular) contact antigen — the "6 loops of specificity" on β-sandwich scaffolds.
- **Serine protease activation loops:** trypsin/chymotrypsin loops reposition after zymogen cleavage.
- **Zinc fingers:** β-turn + helix, Zn²⁺-clamped, reading DNA.

**The pattern:** helices build bundles/cores and span membranes; sheets build rigid scaffolds and sticky surfaces; loops supply chemistry and specificity. Function follows from which structural currency a protein spends.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Hb/Mb: helical haem pockets; F-helix allosterics.
- Keratin: coiled coils + disulphides (hair chemistry).
- GPCRs: 7-helix bundles — biggest drug-target family.
- Antibodies: β-sandwich + CDR loops; porins: β-barrels.
- Amyloids: cross-β stacking = misfolding disease.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `β-blockers/opioids/antihistamines hit helical GPCRs; mAbs are β-sandwich drugs; perm waves and disulphide chemistry; amyloid-targeting therapies (lecanemab) attack cross-β aggregates.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How do keratin's coiled coils use heptad repeats and disulphides?
2. Why do GPCRs suit transmembrane signalling?
3. What is the cross-β structure and which diseases involve it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Helices: pockets, bundles, membrane spans.
- Sheets: scaffolds, barrels, amyloid risk.
- Loops: specificity and catalysis.
- Each structure type maps onto drug families.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'tertiary-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Tertiary Structure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Tertiary structure** is the complete three-dimensional arrangement of one polypeptide chain — where side chains finally meet their partners and the active site is born.

**Folding logic:**

1. **Hydrophobic collapse** initiates: nonpolar side chains cluster away from water; the "oil drop" core forms while polar/charged residues stay solvent-facing.
2. **Secondary elements nucleate** locally, then pack against each other into **domains** (100–250 residues; independent folding units with function — binding, catalysis).
3. **Side-chain interactions** lock the fold (see Forces lesson): hydrophobic packing, H-bonds, salt bridges, disulphides, van der Waals.
4. **Chaperones assist** in vivo (see Folding lesson) — the final state is thermodynamically stable, but the path is guarded against kinetic traps.

**Consequences of tertiary packing:**

- **Active sites** are crevices where distant-in-sequence residues converge — serine proteases' catalytic triad (His57, Asp102, Ser195 in chymotrypsin numbering) spans the sequence but neighbours in space.
- **Allosteric sites** sit far from active sites; ligand binding shifts the whole fold (haemoglobin, kinases).
- **Surface topology** determines solubility, membrane insertion, and interaction partners; post-translational modifications (glycosylation, phosphorylation) decorate it.

**Domains and motifs:** large proteins are domain mosaics (kinases: ATP-binding lobe + substrate lobe + regulatory domains); domain swapping/duplication drives evolution and fusion-protein drugs (Fc-fusions).

**Methods:** X-ray crystallography, cryo-EM, NMR give atomic structures; AlphaFold now predicts them from sequence — accelerating drug discovery. CD/fluorescence track unfolding; size-exclusion/ultracentrifugation gauge compactness.

**Clinical anchor:** tertiary-structure defects — misfolding (CFTR ΔF508 retained in ER), unstable folds (some G6PD variants), domain-domain communication failures (oncogenic kinases stuck "on") — plus the *drug-design* logic that pockets in tertiary structure are what small-molecule drugs bind.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Tertiary = full 3D fold of one chain; hydrophobic collapse → domain packing.
- Active sites converge distant residues in space (chymotrypsin triad).
- Allostery: remote sites shift the entire fold.
- Domains are folding/function modules; proteins are domain mosaics.
- Methods: X-ray, cryo-EM, NMR, AlphaFold; CD tracks unfolding.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug pockets live in tertiary structure; CFTR correctors (elexacaftor) rescue misfolded folds; kinase inhibitors stabilise inactive conformations; biologics' stability is tertiary-structure maintenance.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe hydrophobic collapse and what follows it.
2. How does the chymotrypsin catalytic triad illustrate tertiary vs primary distance?
3. What is a domain, and why does it matter for drug design?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Tertiary: the whole-chain fold where function crystallises.
- Cores bury, surfaces face, pockets form, allostery wires remote control.
- Domains are reusable modules.
- Every drug pocket is a tertiary-structure feature.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'examples-of-tertiary-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Tertiary Structure — Examples',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Landmark tertiary structures that anchor the concepts:

**Myoglobin** — single 153-residue chain, ~8 helices wrapped into a compact globule; haem nested in a hydrophobic pocket; **His F8 coordinates iron; His E7 guards the O₂ site** (lowering CO affinity — the classic protective geometry). Function: O₂ storage in muscle (hyperbolic binding — no cooperativity, single chain).

**Serum albumin** — 585 residues, heart-shaped, three domains; **hydrophobic pockets** bind fatty acids, bilirubin, warfarin, NSAIDs — the pharmacokinetic workhorse: hypoalbuminaemia raises free-drug fractions; binding displacement interactions (warfarin + sulfonamides) are textbook tertiary-structure pharmacology.

**Chymotrypsin** — two-domain β-barrel fold; catalytic **triad (Ser195–His57–Asp102)** assembled from distant sequence positions; specificity pocket binds aromatic residues; zymogen activation remakes the substrate channel — allosteric-grade control through tertiary rearrangement.

**Immunoglobulin G** — four chains (2 heavy, 2 light) but each *domain's* tertiary fold (Ig β-sandwich) is a tertiary lesson: disulphide-stapled, hypervariable loops displayed — Nature's modular binding machine and the scaffold of all mAbs.

**Insulin** — 51 residues, A/B chains, three disulphides; tertiary geometry positions the receptor-binding surface; the proinsulin C-peptide is cleaved away — post-translational finishing creating the pharmacologically active fold.

**Kinases (e.g. PKA, ABL)** — bilobal fold: N-lobe binds ATP (glycine-rich loop), C-lobe binds substrate; activation loops and αC-helix move between active/inactive states — **the conformational switch that imatinib exploits** (stabilising inactive ABL in CML therapy).

**Haemoglobin (quaternary preview)** — each chain's tertiary fold is myoglobin-like, but O₂ binding tilts the F-helix → interfaces shift → T→R transition: tertiary events drive quaternary allostery.

**Collagen (fibrous special case)** — left-handed polyproline-II chains wound into a right-handed superhelix; Gly every third position fits the core; hydroxyproline (vit C) stabilises; the tropocollagen triple helix then assembles into fibrils — a tertiary/quaternary hybrid teaching vitamin C's biochemistry.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Myoglobin: helical haem pocket; His E7/F8 chemistry.
- Albumin: hydrophobic pockets = drug-binding workhorse.
- Chymotrypsin: triad from distant residues; specificity pocket.
- IgG domains: β-sandwich + loops (mAb scaffold).
- Insulin disulphides; kinase bilobal switch (imatinib); collagen triple helix (vit C).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Warfarin/albumin displacement, imatinib's inactive-conformation binding, insulin analogue engineering, and mAb design are all tertiary-structure applications.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is myoglobin's binding curve hyperbolic but haemoglobin's sigmoid?
2. Which albumin properties make it the main plasma drug carrier?
3. How does imatinib use kinase tertiary structure?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Landmark folds: Mb pocket, albumin pockets, chymotrypsin triad, Ig sandwich, insulin disulphides, kinase switch, collagen helix.
- Each links structure to a drug or physiological story.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'quaternary-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Quaternary Structure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Quaternary structure** is the assembly of multiple polypeptide chains (**subunits/protomers**) into one functional complex — held together by the same non-covalent forces as tertiary structure, plus occasional interchain disulphides (antibodies).

**Vocabulary:**

- **Dimer** (2 subunits), **trimer**, **tetramer** (4); **homomer** (identical chains) vs **heteromer** (different chains).
- **Protomer** = the repeating functional unit; **symmetry** organises most assemblies (C₂ dimers, D₂ tetramers, helical assemblies like actin filaments).
- **Isoenzymes** can be quaternary combinations: lactate dehydrogenase's five tetramers (H₄, H₃M₁…M₄) differ by tissue — diagnostic isoenzyme patterns (LDH flip in haemolysis vs myocardial infarction); creatine kinase's CK-MM/MB/BB similarly.

**Why assemble?**

1. **Cooperativity** — subunits communicate: haemoglobin's α₂β₂ switches from T (low-affinity) to R (high-affinity) as O₂ binds; sigmoid kinetics and the Bohr effect live in the interfaces.
2. **Allosteric regulation** — effectors bind one subunit, shift all (aspartate transcarbamoylase's classic T/R switch).
3. **Stability/quality control** — assembly buries hydrophobic surfaces, resists denaturation; chaperonins (GroEL) are quaternary machines.
4. **Functional complexity from parts** — ion channels (tetrameric pores), proteasome (28+ subunits), ribosome (proteins + RNA), F₁F₀-ATP synthase.
5. **Error correction** — misassembled complexes are degraded; assembly is a quality checkpoint.

**Interfaces:** hydrophobic cores + salt-bridge networks + H-bond lattices; interface mutations dissociate complexes (some haemoglobin variants, collagen IV defects in Alport syndrome).

**Clinical anchors:**

- **Haemoglobin:** α-globin vs β-globin gene clusters; α-thalassaemia/β-thalassaemia are *subunit imbalance* diseases — excess unmatched chains precipitate and destroy RBC precursors; HbS polymerises via a hydrophobic β6 patch surfaced by quaternary geometry.
- **Antibodies:** heavy/light pairing with interchain disulphides; class switching changes quaternary "tails" (IgM pentamer vs IgG monomer) with different avidity/effectors.
- **Drug targets:** GPCR dimers, ligand-gated channels (nicotinic receptor pentamer — anaesthetics/curare), tubulin (colchicine/vinca/taxanes all perturb microtubule quaternary assembly).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Quaternary = multi-subunit assembly; homo/hetero, dimer→larger, symmetry-organised.
- Benefits: cooperativity (Hb T/R), allostery, stability, complexity, QC.
- Isoenzymes = subunit combinations (LDH, CK diagnostics).
- Thalassaemia = subunit imbalance; HbS = interface-surfaced polymerisation.
- Drug targets: channels, tubulin, ribosome, proteasome.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Colchicine/vincristine/paclitaxel modulate tubulin assembly; neuromuscular blockers act on pentameric channels; HbF induction (hydroxyurea in sickle cell) reprograms quaternary composition.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define protomer, homomer, heteromer with examples.
2. Explain how Hb's quaternary shift creates sigmoid kinetics.
3. Why is β-thalassaemia called a subunit-imbalance disease?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Multi-chain assemblies: cooperativity, allostery, stability.
- Interfaces are druggable and disease-bearing.
- Isoenzymes read tissues through subunit recipes.
- Hb is the master teaching example.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'protein-structure-function-relationship',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Protein Structure–Function Relationship',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This integrative lesson applies the full structural hierarchy to explain how real proteins really work — and how their failures become disease.

**Case 1 — Haemoglobin: hierarchy in action.**
*Primary:* His F8/E7 and β6 position matter (HbS). *Secondary:* helices cradle haem. *Tertiary:* O₂ binding straightens the F-helix, moving iron. *Quaternary:* the α₂β₂ interfaces shift T→R; 2,3-BPG and pH tune the shift (Bohr effect). *Function:* sigmoid loading in lungs (R), unloading in tissue (T + BPG + CO₂ + H⁺). *Disease:* one residue (β6 Glu→Val) surfaces a hydrophobic patch → deoxy-polymerisation → sickling → vaso-occlusion. *Drug:* hydroxyurea raises HbF (γ-chains lack the patch), voxelotor stabilises R-state.

**Case 2 — Serine proteases: a catalytic machine.**
Chymotrypsin's triad: Asp102 orients/polarises His57; His57 (pKa-perfect) abstracts Ser195's proton; Ser195-O⁻ attacks the peptide carbonyl; oxyanion hole stabilises the tetrahedral intermediate; histidine then donates the proton to the leaving amine; water hydrolyses the acyl-enzyme. Specificity pocket (Asp189 in trypsin binds Lys/Arg; hydrophobic pocket in chymotrypsin) reads the residue before the scissile bond. Zymogen activation (trypsinogen → trypsin) remodels the pocket — amplification cascades (clotting) use this switch.

**Case 3 — Antibodies: modularity as strategy.**
Ig domains (β-sandwiches, tertiary) assemble H₂L₂ (quaternary) with disulphides; CDR loops (secondary irregularities) create antigen pockets; class-switching swaps effector tails without touching the binding site. Monoclonal drugs industrialise this design.

**Case 4 — CFTR: a folding/gating channel.**
ABC-transporter fold: two membrane-spanning domains + two nucleotide-binding domains; ATP binding/dimerisation gates the chloride pore; PKA phosphorylation regulates. ΔF508 (phenylalanine in NBD1) misfolds → ER retention → no surface channel → cystic fibrosis. Modern correctors (elexacaftor/tezacaftor/ivacaftor) fix folding and gating — tertiary-structure pharmacology par excellence.

**The general lesson:** every protein is a layered machine — sequence encodes, local patterns build, tertiary packing creates pockets, quaternary interfaces add control. Disease and drugs both operate by editing one layer at a time: substitutions (genetic), phosphorylation (regulatory), ligands (therapeutic), misfolding (pathological).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Hb: all four structural levels + allostery + single-residue disease + HbF therapy.
- Serine proteases: triad geometry, oxyanion hole, specificity pockets, zymogen switches.
- Antibodies: domains → H₂L₂ → CDR loops → class switching (mAb logic).
- CFTR: ABC fold, ATP gating; ΔF508 misfolding; corrector/potentiator drugs.
- Layers: sequence → motifs → fold → assembly; drugs/disease edit layers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Voxelotor, hydroxyurea, elexacaftor/tezacaftor/ivacaftor, warfarin-heparin anticoagulation (protease cascade), and mAb therapeutics are structure-function pharmacology in current practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace the T→R transition from O₂ binding to quaternary shift.
2. How does the catalytic triad use His57's pKa?
3. Why does ΔF508 keep CFTR out of the membrane, and how do correctors help?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Structure-function: Hb, proteases, antibodies, CFTR teach the layers.
- Single residues, pockets, interfaces, and folding each carry clinical weight.
- Drugs edit structure layer by layer.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'amino-acid-peptide-bonds',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Amino Acid Peptide Bonds',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A focused lesson on the peptide bond — the covalent link every protein is built from.

**Formation and hydrolysis:**
- **Formation:** condensation between one amino acid's α-COOH and the next's α-NH₂, releasing water. In vivo the ribosome catalyses it using activated aminoacyl-tRNA esters (energy spent in tRNA charging, not at the bond step).
- **Hydrolysis:** proteases reverse it — serine proteases (chymotrypsin, trypsin, elastase), aspartyl proteases (pepsin, renin, HIV protease), metalloproteases (ACE — captopril's target), cysteine proteases (caspases, cathepsins). Classes differ by catalytic strategy but all deliver water to the amide carbonyl.

**Physical chemistry:**
- **Planar and rigid:** resonance (~40% double-bond character) locks C–O and C–N into one plane; the α-carbons sit *trans* across it.
- **Rotation:** only φ (N–Cα) and ψ (Cα–C=O) rotate — Ramachandran plots map allowed combinations; helices/sheets occupy characteristic regions.
- **Polarity:** C=O acceptor and N–H donor — but the amide *nitrogen* itself does not ionise (pKa ≈ −0.5; no charge at physiological pH). Backbone neutrality means protein charge comes from termini + side chains.
- **Length:** ~1.33 Å C–N (shorter than single, longer than double bond).

**Sequence consequences:**

- **Directionality:** N-terminus → C-terminus; chains have polarity (proteases recognise context).
- **Backbone H-bonding:** every residue contributes one donor and one acceptor — the budget secondary structure spends.
- **Proline's exception:** its backbone N is a *secondary amine* (ring) — no N–H donor, φ restricted → helix breaker, turn specialist.
- **Glycine's exception:** two H's on Cα → conformational freedom → hinge residues.

**Cleavage specificity as tools/drugs:**
- Trypsin cleaves after Lys/Arg; chymotrypsin after Phe/Tyr/Trp; CNBr (chemical) after Met — sequence-analysis classics.
- **ACE inhibitors** (captopril, enalapril) mimic a dipeptide transition state; **HIV protease inhibitors** occupy an aspartyl-protease active site; **oral peptide drugs** fail because proteases digest backbones — hence insulin's injection, and D-amino-acid/N-methyl strategies for stabilised peptides.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Peptide bond: planar, partial double bond, trans α-carbons; φ/ψ rotate.
- Backbone gives one H-bond donor + acceptor per residue; N does not ionise.
- Pro: no N–H donor (helix break); Gly: flexibility (hinge).
- Protease classes: serine/aspartyl/metallo/cysteine — drug targets (ACE, HIV PR).
- Sequence tools: trypsin/chymotrypsin/CNBr cleavage specificities.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `ACE inhibitors, HIV protease inhibitors, oral-peptide instability, prodrug esterification (enalapril → enalaprilat) — all peptide-bond pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is the peptide bond planar and what angles rotate instead?
2. Why does proline lack an N–H hydrogen-bond donor?
3. Name the four protease classes and one drug acting on each class (where one exists).`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One bond type, enormous consequences: rigidity → folding; polarity → H-bonds; specificity → protease drugs.
- Backbone neutrality; charge lives on side chains/termini.
- Pro/Gly are the two structural exceptions.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'protein-folding',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Protein Folding',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Folding** converts a nascent chain into the native structure — fast (ms–min), accurate, and directed by the sequence itself, but *assisted* in the crowded cell.

**The thermodynamic view (Anfinsen):** native state = global free-energy minimum; folding is downhill. Ribonuclease unfolded + reduced refolds correctly when conditions restore — sequence contains the information.

**The kinetic reality (Levinthal):** random search through all conformations would take longer than the universe's age; real folding follows **funnelled pathways** — local elements nucleate (helices/turns in ms), hydrophobic collapse compacts, domains dock, minor rearrangements finish. Intermediates can trap; **chaperones** police the route.

**Molecular chaperones:**

- **Hsp70 (DnaK)** — binds exposed hydrophobic stretches on nascent chains; ATP-driven release cycles prevent premature aggregation.
- **Hsp60/GroEL (chaperonins)** — barrel-shaped cages; a single chain enters, folds protected from neighbours, ATP-driven cycles eject it folded.
- **Hsp90** — maturation of signalling proteins (steroid receptors, kinases — many oncology targets are Hsp90 clients; inhibitors like geldanamycin derivatives exploit dependence).
- **Protein disulphide isomerase (PDI)** and **peptidyl-prolyl isomerase** accelerate slow chemical steps (S–S shuffling; X–Pro isomerisation).

**Folding compartments:** cytosol (most), ER (secreted/membrane proteins — chaperones BiP, calnexin; quality control degrades misfolded chains via ERAD → proteasome), mitochondria (import + fold).

**Misfolding outcomes:**

1. **Degradation:** ERAD/proteasome removes defective chains (CFTR ΔF508's default fate).
2. **Aggregation:** exposed hydrophobics self-associate — **amyloid fibrils** (cross-β): Alzheimer's Aβ, prion PrPᢈ, IAPP in type-2 diabetes, transthyretin amyloidoses; **large aggregates** in α1-antitrypsin deficiency (liver) and sickle polymers.
3. **Prion propagation:** misfolded PrPᢈ templated-converts native PrPᢏ — infectious protein (Kuru, vCJD, scrapie); structure-only information transfer.

**Pharmacological leverage:** correctors (CFTR), stabilisers (TTR: tafamidis), Hsp90 inhibitors (oncology), proteostasis-targeting (PROTACs deliberately flag proteins for degradation), and the storage/lyophilisation science of biologics (preventing aggregation in the vial).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Anfinsen: sequence encodes the native fold (thermodynamic truth).
- Levinthal: pathways not random search; funnels + nucleation.
- Chaperones: Hsp70 (hold), GroEL (cage), Hsp90 (clients), PDI/PPIase (chemistry).
- ER QC: BiP/calnexin; ERAD → proteasome for misfolded chains.
- Misfolding → aggregation/amyloid/prion; drug strategies: correctors, stabilisers, degraders.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Cystic fibrosis correctors, tafamidis, Hsp90 inhibitors, PROTAC degraders, and biologic cold-chain/lyophilisation all manage folding chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Reconcile Anfinsen's principle with Levinthal's paradox.
2. Name three chaperone systems and their mechanisms.
3. How do prions transmit "information" without nucleic acid?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Folding is sequence-directed but chaperone-assisted.
- QC systems degrade misfolds; failures aggregate or propagate.
- Amyloid/prion/TTR = misfolding disease families.
- Correctors/stabilisers/degraders are folding pharmacology.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'denaturation',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Denaturation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Denaturation** is the loss of native higher-order structure (secondary/tertiary/quaternary) *without* breaking the primary sequence — the peptide bonds remain; the fold does not. Function is lost because shape was function.

**Denaturing agents and their mechanisms:**

- **Heat:** vibrational energy overwhelms weak interactions; typically cooperative, mid-point = **melting temperature (Tm)**. (Cooking egg white: ovalbumin sets — irreversible because new interchain contacts aggregate.)
- **pH extremes:** protonation/deprotonation breaks salt bridges and H-bonds; net charge rises → repulsion expands the chain (curdling milk with acid).
- **Detergents (SDS):** hydrophobic tails coat the chain, converting it to a uniform rod (SDS-PAGE's chemistry); anionic coating also erases native charge.
- **Chaotropes (urea, guanidinium-HCl):** compete for H-bonds and solvate all surfaces — the classical unfolding solvents.
- **Reducing agents (β-mercaptoethanol, DTT):** cleave disulphides (used with urea in Anfinsen's experiment).
- **Alcohols/organic solvents:** disrupt water structure; disinfectant action (70% ethanol) is protein denaturation at microbial surfaces.
- **Heavy metals (Hg²⁺, Ag⁺, Pb²⁺):** bind thiols/carboxylates, cross-linking and poisoning active-site cysteines; antidote chelators (BAL, DMSA) exploit the same chemistry.
- **Mechanical shear/foaming:** interfaces denature (whipping cream/egg white).

**Reversibility is conditional:** small single-chain proteins can refold after mild denaturation (renaturation — next lesson); large/multimeric/secreted proteins usually aggregate irreversibly. Aggregation = exposure of hydrophobic cores + interchain sticking.

**Clinical/pharmaceutical significance:**

- **Biologic drug stability:** insulin denatures at heat/freezing extremes and at air–water interfaces (do not shake vials — foam = denatured insulin); mAbs aggregate on freeze–thaw; cold chains, surfactants (polysorbate), and lyophilisation are anti-denaturation engineering.
- **Sterilisation/disinfection:** autoclaving, alcohol, and heavy-metal antiseptics (silver nitrate eye drops historically) are deliberate denaturation.
- **Toxicology:** heavy-metal poisoning (thiol enzymes), snake venoms (proteolytic enzymes), alkaline/acid ingestion (tissue protein coagulation).
- **Diagnostics:** heat-denaturation tests (Hb variants), protein precipitation assays.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Denaturation: higher-order structure lost; primary sequence intact; function lost.
- Agents: heat, pH, SDS, urea/GuHCl, reducing agents, alcohols, heavy metals, shear.
- Tm = unfolding mid-point; cooperativity typical.
- Reversibility depends on chain size/complexity; aggregation is the common failure.
- Biologics: no shaking/freezing/heating; excipients and lyophilisation protect.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Insulin handling counselling ("never shake, never freeze"), alcohol-based antisepsis, heavy-metal antidotes, and mAb cold-chain logistics are denaturation chemistry in daily practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast denaturation and hydrolysis.
2. How does SDS denature proteins, and what analytical method exploits it?
3. Why must insulin vials not be shaken?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Denaturation unrolls the fold, not the chain.
- Each agent breaks a specific weak-force class.
- Aggregation is the usual irreversible end.
- Disinfection and biologic storage are applied denaturation control.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'renaturation',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Renaturation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Renaturation** (refolding) is the recovery of native structure *after* denaturation — proof that the sequence alone can re-encode the fold, under the right conditions.

**The classic experiment (Anfinsen, 1950s — Nobel 1972):** bovine ribonuclease A denatured in 8 M urea + β-mercaptoethanol (fold lost, four disulphides reduced). Remove the reductant, dialyse out urea → enzymatic activity returns to ~100%; disulphides re-form in the *correct* pairings (1 of 105 possible combinations) — because the sequence guides the fold that brings the right cysteines together.

**Conditions for successful renaturation:**

1. **Dilution** — low protein concentration prevents interchain aggregation while intrachain folding proceeds.
2. **Gradual removal** of denaturant (dialysis/dilution) — abrupt swings trap intermediates.
3. **Oxidising system** for disulphides (air oxidation; redox buffers like GSH/GSSG; PDI catalyses shuffling).
4. **Temperature/pH near-physiological.**
5. **Additives** that stabilise intermediates (arginine to suppress aggregation; glycerol; chaperones in vivo).

**Limits of renaturation:**

- **Multimeric proteins** need subunits to find each other correctly (haemoglobin's chains reassemble only with proper stoichiometry).
- **Proteins needing cofactors** (enzymes with Zn²⁺, FAD) require them present.
- **Proteins requiring processing** (pro-insulin cleavage, glycosylation) cannot refold to the mature form from denatured mature protein alone — ER processing built the shape.
- **Kinetic traps:** large proteins often fall into aggregates faster than they fold — the reason bacteria often produce inclusion bodies for recombinant human proteins, and why industrial renaturation is an art (biologics manufacturing!).

**In vivo vs in vitro:** cells use chaperones to achieve what the lab needs dilution for — folding assistance is a kinetic aid, not a thermodynamic override.

**Applications:** recombinant protein production (refolding from inclusion bodies), amyloid reversal research, biologic formulation recovery studies, and the conceptual foundation for structure prediction (AlphaFold learns the sequence→structure map renaturation proves).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Renaturation: native structure/function restored after denaturation — sequence encodes the fold.
- Anfinsen/RNase: correct 1-of-105 disulphide pairing on refolding.
- Needs: dilution, gradual denaturant removal, redox system, right T/pH, anti-aggregation additives.
- Limits: multimers, cofactors, processing requirements, kinetic traps.
- Industrial: inclusion-body refolding = renaturation at scale.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Biosimilar/manufacturing refolding steps, biologic excursion studies (is the product still folded?), and stabiliser excipients (arginine, polysorbate) apply renaturation science.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What did Anfinsen's RNase experiment prove and how?
2. Why does dilution help renaturation?
3. Give three reasons a protein might fail to renature in vitro.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Renaturation = sequence-proven refolding under controlled conditions.
- Anfinsen's 1/105 disulphide fidelity is the classic proof.
- Chaperones are nature's dilution/chaperone-free shortcut.
- Manufacturing and formulation live on these principles.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'forces-stabilizing-protein-structure',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Forces Stabilizing Protein Structure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Five interaction classes hold a folded protein together — knowing each one's strength, distance, and environmental sensitivity explains denaturation, mutation effects, and drug binding.

**1. Hydrophobic effect (the dominant organiser).**
Nonpolar side chains cluster, releasing ordered water — an *entropic* gain, not an attraction. Drives core formation, membrane insertion, ligand pockets. Sensitive to temperature (cooked eggs) and organic solvents; strengthened by salts ("salting out").

**2. Hydrogen bonds.**
Donor (N–H, O–H) to acceptor (C=O, –OH, ring N): 2–10 kcal/mol each; individually weak, collectively decisive. Backbone H-bonds build helices/sheets; side-chain H-bonds set specificity (enzyme-substrate, drug-receptor). Water competes — H-bonds matter most buried (low dielectric).

**3. Ionic interactions / salt bridges.**
Asp/Glu ↔ Lys/Arg pairs: 1–5 kcal/mol in water, *stronger* buried (low dielectric). Stabilise interfaces and active sites; broken by pH extremes (denaturation) and high salt. Also create electrostatic steering (diffusion-guided association).

**4. Van der Waals forces.**
Universal, very weak (0.1–1 kcal/mol per contact) but enormous in number when surfaces pack precisely — the reason "shape complementarity" matters (lock-and-key is really vdW complementarity). Responsible for steric clashes being so disruptive (one bad contact wastes many good ones).

**5. Disulphide bonds (covalent — the outlier).**
Cys–Cys oxidation (ER, PDI-assisted): 50–60 kcal/mol; locks extracellular proteins (insulin, antibodies, RNase), stabilises against thermal/pH stress. Reduced in cytosol (thioredoxin/glutathione systems). Not a folding *driver* — a folding *clamp*.

**Bonus ordering forces:**

- **Metal coordination:** Zn²⁺ fingers, Fe–S clusters — coordination chemistry as structure.
- **π-stacking/cation-π:** aromatics with cations (lysine–phenylalanine pairs) — subtle but real in binding sites.

**Quantitative framing:** a 150-residue protein's folding free energy is only ~5–15 kcal/mol net — the margin between a working fold and chaos is *tiny*, built from thousands of individually weak interactions. This fragility-with-robustness explains: mutation sensitivity (one disrupted salt bridge can matter), temperature optima, pH optima, and why drugs that wedge into a pocket (vdW + H-bonds) can hold a conformation shut (imatinib).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Hydrophobic effect (entropy), H-bonds, salt bridges, vdW, disulphides — the five.
- Net folding ΔG tiny (~5–15 kcal/mol) from thousands of weak contacts.
- Buried interactions dominate (water competes outside).
- Disulphides clamp; metals coordinate; π/cation-π decorate.
- Explains mutation sensitivity, pH/temperature optima, drug binding.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug binding = designed combination of H-bonds + vdW + ionic contacts; formulaton pH tuning exploits charge; reducing excipients and oxidation control protect biologics' disulphides.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Rank the five forces by individual strength and explain why the weakest matters so much.
2. Why is the hydrophobic effect entropic?
3. Why are disulphides called clamps rather than drivers of folding?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Weak forces, huge numbers, tiny net margin — the folding economy.
- Water competition decides which bonds count.
- Covalent clamps and metals add permanence.
- Drugs and mutations both trade in the same currency.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'functional-consequences-of-structural-changes',
    courseId: 'bch-201',
    topicId: 'protein-structure-and-function',
    nodeType: 'subtopic',
    title: 'Functional Consequences of Structural Changes',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Structural change — from one residue to whole-chain disorder — rewrites function. This closing lesson systematises the consequences, with named diseases for each pattern.

**1. Point mutations:**

- **Substitution at catalytic/binding residues:** loss of activity (many G6PD variants).
- **Hydrophobic→charged (or reverse) swaps:** destabilised cores or novel sticky patches — **sickle Hb (Glu6Val)** polymerises; **protein C/Factor V Leiden (Arg506Gln)** resists APC cleavage → thrombophilia.
- **Cysteine gain/loss:** mis-paired disulphides (some cataract crystallins).
- **Glycine/proline substitutions in rigid scaffolds:** **osteogenesis imperfecta** (Gly→bulky in collagen), Ehlers–Danlos variants.

**2. Indels/frameshifts:** truncations (nonsense → degraded transcripts) or extended misfolds (CFTR ΔF508 — three-base deletion, misfolding + gating defect); **Duchenne muscular dystrophy** frameshifts.

**3. Allosteric-site changes:** 2,3-BPG binding pocket variants shift O₂ curves (Hb Kempsey — high-affinity, tissue hypoxia despite normal P50 physiology).

**4. Post-translational failures:** γ-carboxylation blocked (warfarin effect/vitamin K deficiency — clotting factors can't bind Ca²⁺/phospholipid); phosphorylation-site loss (some dwarfism syndromes); hydroxyproline deficit (scurvy).

**5. Aggregation-prone changes:** expanded polyglutamine tracts (Huntington's CAG repeats), β-sheet-promoting mutations in TTR (familial amyloidosis), PrP point mutations (familial CJD).

**6. Assembly failures:** subunit-imbalance precipitation (**thalassaemias**), interface mutations (collagen IV → **Alport syndrome**), chaperone-floored folding (CFTR).

**7. Gain-of-toxic-function:** misfolded proteins acquire new behaviour — prion templating, Aβ oligomer toxicity, mutant SOD1 aggregation (ALS).

**Therapeutic logic per pattern:**

- Correct the fold: CFTR correctors, tafamidis (TTR stabiliser).
- Replace the protein: enzyme replacement (Gaucher's, ADA-SCID), insulin, factor VIII.
- Bypass function: hydroxyurea's HbF; chelation in metal overload.
- Block toxicity: amyloid antibodies (lecanemab), antisense/RNAi (TTR — patisiran), polymerisation blockers (voxelotor).
- Manage exposure: diet (PKU), avoid triggers (G6PD oxidants list — primaquine, dapsone, fava beans: a pharmacist's classic checklist).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Point mutations: active-site loss, sticky patches (HbS), scaffold Gly/Pro failures (OI).
- Indels: misfolding/truncation (CFTR ΔF508, DMD).
- PTM failures: warfarin/vit-K γ-carboxylation, scurvy hydroxylation.
- Aggregation diseases: polyQ (Huntington), TTR, PrP.
- Therapy maps to mechanism: correct, replace, bypass, block, manage.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `G6PD oxidant-avoidance lists, factor VIII replacement, CFTR modulator combinations, antisense oligonucleotides (patisiran), and amyloid antibodies are structure-change pharmacology now in guidelines.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain how Glu6Val changes haemoglobin's function via surface chemistry.
2. Why does warfarin create a post-translational structural defect?
3. Match: tafamidis, patisiran, voxelotor, enzyme replacement — to their structural-strategy classes.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Structural changes act at every scale: residue → PTM → assembly → aggregation.
- Each pattern has a disease family and a therapy family.
- Pharmacists' lists (G6PD oxidants) are structural contraindications.`,
      },
    ],
  },
];
