import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 10: Membranes & Cell Structure — Part 1.
 * Covers: topic base + Cell Structure, Techniques (NMR, X-ray, EM incl.
 * TEM/SEM), Biological Membranes — through 'biological-membranes'.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 */

export const bch201Membranes1Lessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'membranes-and-cell-structure',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'topic',
    title: 'Membranes and Cell Structure',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every living cell is a **compartmented chemical factory**: membranes draw the boundaries that let incompatible chemistries run in parallel (lysosomal pH 4.8 beside cytosolic pH 7.2; mitochondrial proton gradients beside ATP-consuming cytosol). This topic studies the **architecture** — how membranes are built, how cells are organised, and how biochemistry *sees* that organisation.

Three storylines run through it. **Structure:** the fluid-mosaic membrane — a lipid bilayer studded with proteins, flexible, asymmetric, self-sealing — and the organelles it divides (nucleus, ER, Golgi, mitochondria, lysosomes). **Method:** how we know any of this — the microscopy (light → electron → fluorescent) and structural techniques (X-ray, NMR) that turned cell biology from speculation into measurement. **Transport:** the traffic across membranes — passive and active mechanisms, vesicles (endocytosis/exocytosis) — the part most pharmacologically alive, because **every drug must cross at least one membrane** to work.

For a pharmacy student, this topic is the geography of drug action: absorption (crossing intestinal epithelium), distribution (crossing capillary walls, blood–brain barrier), cellular entry (diffusion vs transporters), organelle targeting (lysosomotropic drugs), and excretion (renal tubular transporters). Metformin's transporters, proton-pump inhibitors' acid trapping, and liposomal formulations all speak the membrane vocabulary taught here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Membranes compartmentalise incompatible chemistry; organelles are specialised reaction chambers.
- Fluid-mosaic model: lipid bilayer + proteins, dynamic and asymmetric.
- Techniques: light/fluorescence microscopy, electron microscopy (TEM/SEM), X-ray, NMR.
- Transport: passive (diffusion/facilitated), active (ATP-driven), vesicular (endo/exocytosis).
- Drug action = membrane crossing at every step: absorption → distribution → cell entry → exit.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Membrane permeability predicts oral absorption (Lipinski rules); P-glycoprotein efflux causes multidrug resistance; proton-pump inhibitors exploit gastric parietal-cell membranes; liposomes and nanoparticles are engineered membranes delivering drugs.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is compartmentalisation essential for cellular chemistry?
2. Sketch the fluid-mosaic model and name its two principal components.
3. Trace the membranes a single oral drug dose must cross from tablet to action site.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Membranes build compartments; compartments enable chemistry.
- Bilayer + proteins = fluid mosaic.
- We see cells by microscopy and molecules by X-ray/NMR.
- Transport across membranes is pharmacology's daily bread.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'cell-structure',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Cell Structure',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A guided tour of the eukaryotic cell, organelle by organelle, each with its biochemical speciality and clinical/drug relevance.

**Nucleus** — double-membraned (nuclear envelope with pore complexes); houses DNA/chromatin; site of transcription. Nuclear pores control macromolecular traffic (some antivirals/chemotherapeutics act on nucleo-cytoplasmic transport). 

**Nucleolus** — within the nucleus; ribosomal RNA synthesis/assembly.

**Mitochondria** — double membrane; inner membrane folded into **cristae**; the bioenergetic machine (TCA, ETC, oxidative phosphorylation, fatty-acid oxidation, haem/urea-cycle starting steps). maternally inherited DNA (mtDNA — maternal transmission of mitochondrial diseases). Target of many drugs/toxins (biguanides, cyanide, CO, valproate hepatotoxicity).

**Endoplasmic reticulum** — 
- **Rough ER (RER):** ribosome-studded; synthesis/folding of secreted and membrane proteins; chaperone quality control (BiP, calnexin); ER stress responses.
- **Smooth ER (SER):** lipid/steroid synthesis; **drug metabolism** — the liver's cytochrome P450 enzymes live here (the molecular heart of pharmacokinetics).

**Golgi apparatus** — stacked cisternae; modifies ER proteins (glycosylation completion, phosphorylation — mannose-6-P tags for lysosomal enzymes), sorts and ships in vesicles.

**Lysosomes** — acidic (pH ~4.8, V-ATPase proton pump) degradative compartments; hydrolases (proteases, nucleases, lipases, glycosidases). **Lysosomal storage diseases** (Gaucher's, Fabry's — enzyme replacement therapy territory). "Lysosomotropic" weak bases (chloroquine, amiodarone, hydroxychloroquine) accumulate here — a pharmacokinetic signature explaining some drug toxicities.

**Peroxisomes** — VLCFA oxidation, plasmalogen synthesis, catalase (H₂O₂ disposal); Zellweger spectrum = peroxisome biogenesis failure.

**Cytoskeleton** — microfilaments (actin — muscle/motility), microtubules (tubulin — mitotic spindle, axonal transport; colchicine/vinca/taxane drug targets), intermediate filaments (structural resilience).

**Plasma membrane** — the interface: receptors, transporters, channels, adhesion molecules; endocytosis/exocytosis docking.

**Clinical synthesis:** each organelle is a drug-action compartment — CYPs (SER), mtDNA/ETC (mitochondrial toxins), lysosomal trapping (amiodarone), spindle poisons (microtubules), nuclear transport (antivirals). Biochemistry's organelle map is pharmacokinetics' target map.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Nucleus: transcription; pores control traffic.
- Mitochondria: TCA/ETC/FA oxidation; mtDNA maternal; toxin/drug target.
- RER: protein synthesis/folding; SER: lipids + CYP drug metabolism.
- Golgi: glycosylation/sorting; lysosomes: pH 4.8 hydrolases; storage diseases; weak-base trapping.
- Peroxisomes: VLCFA/catalase; cytoskeleton: actin/tubulin (drug targets); plasma membrane: receptors/transport.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `CYP450 (SER) drug interactions, lysosomotropic accumulation (amiodarone/chloroquine), enzyme replacement for storage diseases, spindle poisons, and mitochondrial toxicities all map onto organelles.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Match each organelle to one biochemical speciality.
2. Why does smooth ER matter most to pharmacokinetics?
3. What makes weak bases accumulate in lysosomes?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Organelles = chemistry chambers with drug relevance.
- SER/CYP = metabolism; mitochondria = energy/toxins; lysosomes = pH trapping.
- Cytoskeleton is a drug-target family.
- The cell map is the drug-action map.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'techniques-used-in-biochemistry-and-medicine',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Techniques Used in Biochemistry and Medicine',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `How biochemistry *knows* — an orientation to the measurement toolbox, with the physics kept practical.

**Microscopy family** (structure in situ):
- **Light microscopy** — 200 nm resolution limit; stained histology, cell counting.
- **Fluorescence/confocal** — labelled antibodies/proteins (immunofluorescence); GFP fusions track living molecules.
- **Electron microscopy** — electron wavelength beats light: **TEM** (through-sections, ultrastructure) and **SEM** (surfaces) — detailed in the next two lessons.

**Separation family** (purifying molecules):
- **Centrifugation** — differential (organelle fractions: nuclei → mitochondria → microsomes/SER → cytosol) and density-gradient (isopycnic).
- **Chromatography** — size-exclusion, ion-exchange, affinity (tags/antibodies), HPLC; the purification backbone of protein drugs.
- **Electrophoresis** — PAGE (SDS-PAGE: mass-based protein separation; native PAGE: charge/shape), agarose (nucleic acids), isoelectric focusing.

**Molecular-analysis family:**
- **Spectrophotometry** — Beer–Lambert absorbance; enzyme kinetics (NADH at 340 nm), DNA/protein quantification.
- **Mass spectrometry** — proteomics, metabolomics, newborn screening (acylcarnitines!), toxicology confirmation.
- **PCR/qPCR/sequencing** — DNA amplification and reading; pharmacogenomics (TPMT, CYP variants).
- **ELISA/immunoassays** — antibody-based quantification (hormones, drug levels).

**Structural family** (atomic resolution):
- **X-ray crystallography** and **NMR spectroscopy** — detailed in their own lessons; cryo-EM now bridging to near-atomic on native complexes.

**Clinical synthesis:** every lab report a pharmacist reads — LFTs (spectrophotometric enzyme assays), HbA1c (chromatography), electrophoresis patterns (serum proteins, Hb variants), therapeutic drug monitoring (immunoassay/MS), newborn screens (MS/MS) — is one of these techniques applied. Understanding the method clarifies what the number means (and its interferences: biotin in immunoassays! haemolysis in AST/LDH).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Microscopy: light (200 nm), fluorescence/confocal, electron (TEM/SEM).
- Separations: differential centrifugation (organelles), chromatography, electrophoresis.
- Analysis: spectrophotometry (Beer–Lambert), MS (omics, newborn screen), PCR/sequencing, ELISA.
- Structure: X-ray, NMR, cryo-EM.
- Every clinical lab result maps to one of these methods.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `TDM assays, biotin interference in troponin immunoassays, haemolysis affecting AST/LDH, HbA1c chromatography, and pharmacogenomic sequencing are pharmacy-relevant technique literacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Order the organelles obtained by differential centrifugation.
2. Why does SDS-PAGE separate by mass rather than charge?
3. Name one clinical test each for spectrophotometry, chromatography, and immunoassay.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Four families: see (microscopy), separate (centrifuge/chromatography/electrophoresis), measure (spectro/MS/PCR/ELISA), resolve structure (X-ray/NMR/EM).
- Lab literacy = method literacy.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'nuclear-magnetic-resonance-spectroscopy',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Techniques — Nuclear Magnetic Resonance (NMR) Spectroscopy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**NMR spectroscopy** reads the magnetic behaviour of atomic nuclei (¹H, ¹³C, ³¹P, ¹⁹F) in a strong magnetic field — reporting on chemical environment, dynamics, and (in biomolecular NMR) three-dimensional structure *in solution*.

**Physical principle.** Spin-½ nuclei behave like tiny magnets. In a strong external field (B₀) they align with or against it; radiofrequency pulses flip them; as they relax back, they emit signals whose **chemical shift** (δ, ppm) depends on their electronic surroundings. Neighbouring nuclei split signals (J-coupling); **NOE** (nuclear Overhauser effect) contacts report proton pairs within ~5 Å — the distance constraints from which protein structures are computed.

**What NMR gives biochemistry:**

1. **Structure in solution** — no crystals needed; ideal for small proteins (<~30–50 kDa), folded domains, and *dynamic* states.
2. **Dynamics** — relaxation and exchange measurements reveal motion: loops opening, allostery propagating, disordered regions flexing.
3. **Ligand binding/drug discovery** — chemical-shift perturbation maps binding sites; "SAR-by-NMR" builds fragment-based leads; watch a drug bind in real time.
4. **Metabolite identification** — ¹H-NMR of biofluids (metabolomics: urine/plasma profiles).
5. **Clinical imaging sibling — MRI:** the same physics (water ¹H) turned into whole-body imaging; magnetic-resonance spectroscopy (MRS) measures metabolites in vivo (brain choline/creatine/NAA peaks).

**Strengths vs X-ray:** solution state (near-physiological), dynamics visible, no crystal artefacts; **limits:** size ceiling, needs concentrated isotopically labelled (¹³C/¹¹⁵N) protein, longer acquisition.

**Pharmaceutical relevance:** fragment screening, kinase conformational states, protein-drug binding constants, and biologics' higher-order-structure quality control all use NMR. MRI's pharmacological tie: gadolinium contrast safety (renal function screening!) is daily pharmacy practice.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- NMR: nuclear spins in B₀; RF pulses; chemical shifts report environment.
- NOE distance constraints (<5 Å) → solution structures of small proteins.
- Reveals dynamics + binding (shift perturbation; SAR-by-NMR).
- ¹H-NMR metabolomics; MRS = in-vivo metabolite spectra.
- MRI = clinical NMR imaging (gadolinium contrast — renal caution).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Fragment-based drug discovery, biologics HOS QC, and gadolinium-contrast renal screening are NMR-family practice points.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does chemical shift measure?
2. How do NOE contacts constrain protein structure?
3. Contrast NMR and X-ray strengths for protein structure.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- NMR = structure + dynamics in solution.
- Shifts identify environments; NOEs give distances.
- Drug binding is directly observable.
- MRI/MRS carry the physics into the clinic.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'x-ray-crystallography',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Techniques — X-Ray Crystallography',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**X-ray crystallography** is the workhorse of atomic-resolution structure: crystallise the molecule, diffract X-rays off the ordered lattice, and compute the electron-density map from the diffraction pattern.

**Workflow:**
1. **Purify and crystallise** the protein (the hard step — screening pH/salts/precipitants; membrane proteins hardest).
2. **Collect diffraction:** X-rays (synchrotron bright beams) scatter off electrons; ordered crystals reinforce scattering into sharp **reflections** (spots).
3. **Solve phase problem** (molecular replacement with homologues; heavy-atom derivatives; anomalous methods).
4. **Build/refine the model** into electron density; report at **resolution** (Å): 1.5 Å = excellent atomic detail; 3 Å = rough trace.

**Landmark contributions:**
- **DNA double helix** (Franklin/Gosling's photo 51 → Watson–Crick).
- **Myoglobin/haemoglobin** (Kendrew/Perutz — first protein folds; allostery's anatomy).
- **Penicillin, vitamin B12** (Dorothy Hodgkin) — drug molecules.
- Modern drug discovery: **kinase-inhibitor complexes (imatinib/ABL), HIV protease inhibitors (structure-based design), renin, β-lactamases, GPCR–ligand complexes** — the atom-level target maps of pharmacology.

**Strengths:** atomic precision; works on huge complexes (ribosome — Nobel 2009); drug–target geometry at bond length accuracy.
**Limits:** needs crystals (some proteins won't), crystal lattice freezes one conformation (dynamics hidden), radiation/communication artefacts, and cryo-EM/NMR increasingly complement it.

**Pharmaceutical practice:** structure-based drug design, fragment co-crystallography, biologics characterisation, and resistance-mutation interpretation (watch HIV protease evolve against inhibitors) all consume crystal structures — pharmacists meet them via mechanism-of-action stories and new-molecule approvals.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Workflow: crystallise → diffract → phase problem → electron density → refine.
- Resolution in Å grades detail (1.5 excellent; 3 rough).
- Landmarks: DNA helix, Mb/Hb, B12/penicillin, kinases, HIV PR.
- Strength: atomic precision on big complexes; limit: crystals + frozen states.
- Basis of structure-based drug design.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Imatinib/ABL, HIV PR inhibitors, and β-lactamase complexes are crystallography-born pharmacology stories.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Outline the four steps from protein to atomic model.
2. What is the phase problem?
3. Why might a crystal structure miss a protein's true dynamic behaviour?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Crystals + X-ray diffraction = electron density = atomic model.
- Resolution grades fidelity; phase problem is the key hurdle.
- Drug design's atomic maps come from here.
- Complemented by NMR (dynamics) and cryo-EM (native complexes).`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'electron-microscopy',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Techniques — Electron Microscopy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Electron microscopy (EM)** replaces light with accelerated electrons — wavelengths ~0.005 nm — pushing resolution past light's 200 nm ceiling to reveal membranes, ribosomes, filaments, and now (cryo-EM) near-atomic protein structures.

**Why electrons:** electromagnetic lenses focus electron beams; images form from scattering/absorption contrast. But electrons require **vacuum** (air scatters them) and specimens must be **thin, dry or vitrified, and stained or low-dose imaged** — the practical constraints that shaped EM's two classical branches (TEM/SEM, next lessons) and its modern cryo-revolution.

**Transmission electron microscopy (TEM)** — electrons *through* ultrathin sections (~50–100 nm) of resin-embedded, heavy-metal-stained tissue; resolves organelles, membranes (dark "railroad track" bilayers), ribosomes, viral particles. (Next lesson.)

**Scanning electron microscopy (SEM)** — electrons *scan* a coated surface; secondary electrons build 3D-looking topographs (cilia, red-cell shapes, biofilms). (Lesson after next.)

**Cryo-electron microscopy (cryo-EM)** — the modern bridge to structures: proteins flash-frozen in vitreous ice (no staining, native hydration), imaged at cryogenic low-dose; thousands of particle images averaged computationally (**single-particle analysis**) to near-atomic maps. Nobel 2017; now resolves GPCRs, ribosomes, channels — often without crystals. **Cryo-electron tomography** extends this into cells.

**Preparative artefacts to remember:** fixation/shrinkage, stain artefacts (negative staining's "bull's-eyes"), dehydration distortion — the reason "see it" still requires interpretation.

**Pharmaceutical relevance:** lipid-nanoparticle (mRNA vaccine) morphology QC, amyloid fibril identification (biopsy EM in amyloidoses), viral vector characterisation for gene therapies, renal-biopsy ultrastructure (podocyte foot processes in nephrotic syndrome; immune-complex deposits in lupus nephritis), ciliary ultrastructure (primary ciliary dyskinesia's missing dynein arms).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- EM: electrons (short wavelength) → nm-scale resolution; vacuum + thin/thoroughly prepared specimens.
- TEM: through-sections, internal ultrastructure; SEM: surface topography.
- Cryo-EM: vitreous-ice native particles, single-particle averaging → near-atomic maps (Nobel 2017).
- Artefacts from fixation/staining/dehydration.
- Clinical/pharma: renal biopsy EM, amyloid identification, LNPs, viral vectors.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `mRNA-LNP characterisation, amyloidosis diagnosis, and gene-therapy QC are EM-applied pharmacy territory.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does EM need a vacuum and thin specimens?
2. Contrast TEM and SEM information content.
3. How does cryo-EM achieve near-atomic resolution without crystals?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Electrons beat light for resolution; preparation is the price.
- TEM inside, SEM surfaces, cryo-EM native structures.
- Renal biopsies, amyloids, LNPs — EM in the clinic and pharmacy.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'transmission-electron-microscopy',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Electron Microscopy — Transmission Electron Microscopy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**TEM** is EM's "light microscope": electrons pass **through** an ultrathin specimen, and the transmitted pattern forms the image — internal ultrastructure at 0.1–2 nm resolution.

**Preparation pipeline:**
1. **Fixation** — glutaraldehyde (cross-links proteins) then osmium tetroxide (fixes/stains lipids — membranes blacken).
2. **Dehydration** — graded alcohols.
3. **Embedding** — epoxy resin; **ultramicrotome** cuts 50–100 nm sections with glass/diamond knives.
4. **Staining** — uranyl acetate/lead citrate (heavy metals scatter electrons → electron-dense regions appear dark).

**What TEM shows:**
- **Unit membranes** — the classic trilaminar "railroad track" (two dark lines, ~7.5 nm apart): direct visual proof of the bilayer.
- **Organelles** — mitochondrial cristae, RER cisternae with ribosomes, Golgi stacks, lysosomes (dark granules), nuclear pores.
- **Macromolecular assemblies** — ribosomes, proteasomes, glycogen particles, collagen fibrils' banding pattern.
- **Pathology** — immune-complex deposits (lupus nephritis), podocyte fusion (minimal-change disease), amyloid fibril tangles, viral particles, storage-disease inclusion bodies (gaucher cells' wrapped membranes).

**Quantitative EM:** immunogold labelling — antibody-linked gold beads localise specific proteins on sections (where exactly is that receptor?).

**Contrast with light microscopy:** resolution (0.2 nm vs 200 nm) but dead/stained/fixed specimens; fluorescence imaging keeps cells alive but at lower resolution — the two are complementary.

**Pharmacy/clinical anchors:** renal biopsy EM is the diagnostic gold standard in nephrotic syndrome classification; ciliary dynein-arm defects (PCD); LNP/mRNA ultrastructure QC; amyloidosis typing before therapy selection.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- TEM: electrons through 50–100 nm sections; internal ultrastructure at nm scale.
- Fix (glutaraldehyde/OsO₄) → dehydrate → embed → ultramicrotome → heavy-metal stain.
- Trilaminar unit membrane = bilayer proof; organelles/ribosomes/viral particles resolved.
- Immunogold labels specific proteins in situ.
- Clinical: renal biopsy, ciliary defects, amyloid, storage inclusions.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Nephrotic-syndrome EM classification guides therapy (steroids vs biopsy-guided regimens); LNP QC supports mRNA medicines.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does osmium tetroxide darken membranes?
2. What does the trilaminar unit-membrane image prove?
3. Name three diagnostic EM findings in renal disease.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- TEM = internal anatomy at nanometre scale.
- Heavy metals make the contrast; sections must be ultrathin.
- Bilayer, cristae, deposits, amyloid — the classics.
- Immunogold adds molecular specificity.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'scanning-electron-microscopy',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Electron Microscopy — Scanning Electron Microscopy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**SEM** trades internal sections for **surfaces**: a focused electron beam scans across a specimen point-by-point; **secondary electrons** emitted from the surface build a topographic image with striking depth of field — the "3D look".

**Preparation:**
1. Fixation (as TEM) → dehydration → **critical-point drying** (prevents surface-tension collapse of delicate structures) or freeze-drying.
2. **Sputter-coating** with gold/palladium (conducts the beam, prevents charging artefacts).
3. Beam raster + detectors: secondary electrons (topography), backscattered electrons (composition contrast — heavier elements brighter).

**Resolution/depth:** ~1–10 nm lateral resolution; enormous depth of field (μm–mm scale) — the signature "depth-of-focus" look.

**What SEM shows:**
- **Cell-surface architecture** — erythrocyte biconcave discs and sickled shapes; platelet activation/spreading; ciliated respiratory epithelium; sperm morphology.
- **Biofilms and microbes** — bacterial biofilm architecture on catheters/implants (infection-pharmacology relevance: why biofilm-associated infections resist antibiotics).
- **Materials/devices** — stent coatings, implant surfaces, tablet/crystal morphology (pharmaceutics: powder morphology, crystal habit), fibre scaffolds.
- **Hair/fibre forensics**, cutaneous micro-relief in dermatology.

**TEM vs SEM in one line:** TEM looks *inside* (sections, internal organelles); SEM looks *at* (surfaces, topology).

**Pharmaceutical relevance:** powder/crystal morphology (dissolution behaviour!), device/implant surfaces, inhaler particle engineering (aerodynamic shape), and biofilm-drug-resistance visualisation — plus quality photography for formulation troubleshooting.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- SEM: beam scans surface; secondary electrons → topographic image.
- Prep: fix → dry (critical point) → gold sputter-coat.
- Depth of field + nm-scale resolution = 3D-looking surfaces.
- Shows cells' surfaces, biofilms, device/powder morphology.
- TEM = inside; SEM = outside.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Powder/crystal habit affects dissolution; inhaler particle design; biofilm resistance visualisation; implant surface engineering — all SEM territory.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What signal builds SEM images and why does it report topography?
2. Why is critical-point drying used?
3. Give two pharmaceutical applications of SEM.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- SEM = surface anatomy in pseudo-3D.
- Sputter-coat to conduct; critical-point dry to preserve.
- Biofilms, powders, devices — surfaces matter to pharmacy.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'biological-membranes',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Biological Membranes',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Biological membranes** are ~7–10 nm-thick lipid-protein sheets that define every cell and organelle. One model (fluid-mosaic), three families of lipids, a protein census, and a set of properties explain most of pharmacology's permeability puzzles.

**The fluid-mosaic model (Singer–Nicolson, 1972):** a two-dimensional **fluid** — lipids diffuse laterally (~μm/s), rotate, flex — carrying a **mosaic** of embedded proteins; asymmetric across the leaflets (outer leaflet: phosphatidylcholine/sphingomyelin — neutral; inner: phosphatidylserine/PE — negative; PS on the outer leaflet flags apoptotic cells for macrophages). **Cholesterol** wedges between phospholipids, buffering fluidity (stiffens hot, prevents crystallising cold) and organising **lipid rafts** — signalling platforms.

**Membrane lipids** (three families):
1. **Phospholipids** — phosphoglycerides (PC, PE, PS, PI) and sphingomyelin; amphipathic: hydrophilic head + two hydrophobic tails → spontaneous bilayers (hydrophobic effect).
2. **Glycolipids** — sugar-decorated, always outer leaflet; blood-group antigens (ABO is glycolipid chemistry!), gangliosides (GM1 — cholera toxin's receptor).
3. **Cholesterol** — ring-rigid fluidity buffer; bile-acid/steroid-hormone parent (met earlier).

**Membrane proteins** (~⅓ of the proteome; ~50% of drug targets):
- **Integral/transmembrane** — span the bilayer (α-helical bundles: GPCRs/transporters; β-barrels: porins); require detergents to extract.
- **Peripheral** — associate with surfaces (spectrin scaffolds, cytochrome c).
- **Lipid-anchored** — covalently tethered (GPI anchors, prenylated Ras).
Functions: transport (channels/transporters/pumps), receptors/signalling, enzymes (CYPs!), adhesion, anchors.

**Properties that matter to pharmacy:**
- **Permeability selectivity:** small nonpolar gases/lipophilic drugs diffuse freely; large/charged molecules need transporters; ions need channels.
- **Fluidity determinants:** tail unsaturation (kinks), chain length, cholesterol, temperature — anaesthetics' lipid theory has roots here.
- **Self-sealing:** hydrophobic effect means punctures reseal — liposome formulation exploits it.
- **Asymmetry + rafts:** signalling geography; drug partitioning varies by domain.

**Clinical anchors:** ABO glycolipids; cholera/GM1; multiple-sclerosis myelin (membrane stacks); sphingolipid storage diseases (Gaucher/Fabry — membrane-lipid catabolism); anaesthetic potency tracks lipid solubility (Meyer–Overton).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 7–10 nm bilayers; fluid-mosaic: lateral lipid diffusion + protein mosaic.
- Leaflet asymmetry (PC/SM out; PS/PE in; PS-out = apoptosis flag).
- Lipid families: phospholipids, glycolipids (ABO, GM1), cholesterol (fluidity buffer/rafts).
- Proteins: integral (helix bundles/β-barrels), peripheral, lipid-anchored — half of drug targets.
- Permeability: nonpolar small molecules pass; ions/charged need proteins.
- Fluidity set by tails/cholesterol/temperature (Meyer–Overton link).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Lipinski permeability, P-gp efflux, liposomal/nanoparticle design, anaesthetic lipid theory, and sphingolipid storage-disease therapies are membrane-applied pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Sketch the fluid-mosaic model and state two types of membrane motion.
2. Which lipid marks apoptosis, and on which leaflet does it appear?
3. Why do small lipophilic drugs cross membranes while charged molecules do not?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Bilayer: fluid lipids, mosaic proteins, asymmetric leaflets.
- Cholesterol tunes; rafts organise signalling.
- Half of drug targets are membrane proteins.
- Permeability rules = absorption rules.`,
      },
    ],
  },
];
