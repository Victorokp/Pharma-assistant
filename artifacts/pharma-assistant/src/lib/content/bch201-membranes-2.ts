import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 11: Membranes & Cell Structure — Part 2.
 * Covers: membrane-lipids → exocytosis (Biological Membranes details +
 * Membrane Transport block).
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 */

export const bch201Membranes2Lessons: Lesson[] = [
  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'membrane-lipids',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Biological Membranes — Membrane Lipids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Membrane lipids are **amphipathic** — a hydrophilic head + hydrophobic tail(s) — and that single design feature makes bilayers assemble spontaneously. Three families build animal membranes; each has pharmacy-relevant chemistry.

**1. Phosphoglycerides** (glycerol backbone):
- Core: glycerol + 2 fatty-acyl chains + phosphate; the phosphate is esterified to a **head alcohol** that names the lipid:
  - **Phosphatidylcholine (PC/lecithin)** — choline head; major outer-leaflet lipid; lung surfactant's key component (DPPC — neonatal RDS, surfactant therapy).
  - **Phosphatidylethanolamine (PE/cephalin)** — ethanolamine head; inner leaflet.
  - **Phosphatidylserine (PS)** — serine head, net **negative**; inner leaflet — appears outside in apoptosis (macro-phage "eat-me" signal) and in activated platelets (clotting surface!).
  - **Phosphatidylinositol (PI)** — inositol head; signalling hub (PIP₂ cleaved by phospholipase C → IP₃ + DAG; PIP₃ in PI3K pathways — lithium's inositol-depletion story lives here).
- **Tail chemistry matters:** saturated tails pack straight (stiff); **cis-unsaturated tails kink** (fluid); tail length tunes thickness.

**2. Sphingolipids** (sphingosine backbone):
- **Sphingomyelin (SM)** — phosphocholine head; abundant in myelin/outer leaflet; raft organiser.
- **Glycosphingolipids** — cerebrosides (single sugar; myelin) and **gangliosides** (sialic-acid-bearing; GM1 = cholera toxin receptor; ABO blood-group antigens are glycolipid/carrier chemistry).
- Catabolic failure → **sphingolipidoses**: Gaucher (glucocerebrosidase — ERT available), Fabry (α-galactosidase A), Tay–Sachs (hexosaminidase A), Niemann–Pick (sphingomyelinase).

**3. Cholesterol** — planar ring inserts between phospholipids: rigidifies fluid bilayers, fluidises ordered ones (a thermostat); ~1:1 with phospholipids in plasma membrane; **rafts** = SM/cholesterol microdomains organising signalling proteins; myelin is cholesterol-rich.

**Asymmetry and maintenance:** flippases/floppases (ATP-dependent) + scramblase (Ca²⁺-triggered) maintain or collapse leaflet asymmetry — platelet activation scrambles PS outward (coagulation), apoptosis scrambles it permanently.

**Pharmacy hooks:** surfactant replacement (DPPC), PS-based clotting surfaces, PI signalling drug targets (lithium, PIs), sphingolipidosis enzyme therapies, liposome formulations (PC/cholesterol/PEG-lipid — the mRNA-vaccine recipe).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Amphipathic design → spontaneous bilayers (hydrophobic effect).
- Phosphoglycerides: PC (outer/surfactant), PE, PS (inner/clot/apoptosis flag), PI (signalling: PIP₂→IP₃+DAG).
- Sphingolipids: SM (myelin/rafts), glycosphingolipids (GM1, ABO); catabolic blocks = sphingolipidoses (Gaucher/Fabry/Tay–Sachs/NP).
- Cholesterol: bidirectional fluidity buffer; raft organiser.
- Asymmetry maintained by flippases/floppases; scramblase flips PS on demand.
- Liposome recipe = PC + cholesterol (+ PEG-lipid).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Surfactant therapy, enzyme replacement (Gaucher/Fabry), lithium's PIP₂ story, and mRNA-LNP design are membrane-lipid pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four phosphoglyceride heads and one functional signature of each.
2. Why does PS appearing on the outer leaflet matter for clotting and apoptosis?
3. How does cholesterol act as a fluidity thermostat?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Three lipid families; heads decide identity, tails decide fluidity.
- PS-out: eat-me/clot signal; PI: signalling hub.
- Sphingolipid storage = enzyme-therapy territory.
- Cholesterol + SM build rafts; liposomes borrow the chemistry.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'membrane-proteins',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Biological Membranes — Membrane Proteins',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Membrane proteins are the bilayer's machinery — receptors, channels, transporters, pumps, enzymes, anchors — and **roughly half of all modern drug targets** live in this class.

**Classes by association:**

1. **Integral (transmembrane) proteins** — firmly embedded, spanning the bilayer:
   - **α-helical multi-pass** (the dominant eukaryotic style): 7-pass GPCRs (β-adrenergic, opioid, histamine receptors), transporters (SERT, NET, GLUTs), pumps (Na⁺/K⁺-ATPase), channels (Nav, Kv, CFTR).
   - **β-barrel** (Gram-negative outer membranes, mitochondria): porins, Tom/Tim machinery.
   - Extraction requires **detergents** (SDS, Triton X-100, digitonin) — hydrophobic transmembrane surfaces need a substitute bilayer.
2. **Peripheral proteins** — bind membrane surfaces electrostatically/hydrophobically; detachable by salt/pH: spectrin/ankyrin cytoskeletal scaffolds, cytochrome c, some kinases.
3. **Lipid-anchored proteins** — covalently tethered: **GPI anchors** (outer leaflet — alkaline phosphatase, prion protein), **prenylated** (Ras — farnesyl; statins' mevalonate link), **myristoylated/palmitoylated** (Src kinases).

**Topology and biochemistry:**

- **Transmembrane segments** = 18–25 hydrophobic residues (helix) — hydropathy plots predict them from sequence.
- **Lipid-facing vs aqueous-facing residues** follow the bilayer's chemistry; charged residues cluster at interfaces (+ inside — "positive-inside rule").
- **Glycosylation on the extracellular side** (glycocalyx) — cell identity, adhesion, receptor regulation.
- **Mobility:** many diffuse laterally (FRAP measurements); rafts/cytoskeleton corral some into domains.

**Functional families with drug anchors:**

- **Receptors** (GPCR superfamily — ~35% of marketed drugs), RTKs (imatinib's class).
- **Channels** (local anaesthetics block Naᵥ; benzodiazepines modulate GABA-A chloride channel).
- **Transporters** (SSRIs block SERT; metformin uses OCTs; P-gp efflux drives multidrug resistance).
- **Pumps** (ouabain/digoxin inhibits Na⁺/K⁺-ATPase; PPIs block the gastric H⁺/K⁺-ATPase).
- **Membrane enzymes** (CYPs in SER; ACE on endothelial membranes — captopril).

**Experimental handling:** detergents + purification; reconstitution into liposomes for study; cryo-EM/soap-free nanodiscs now dominate structural work.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Integral (α-helix multi-pass / β-barrel), peripheral, lipid-anchored classes.
- TM helices = 18–25 hydrophobic residues; hydropathy predicts topology.
- Detergents required to extract integral proteins.
- Drug anchors: GPCRs, channels (Naᵥ/local anaesthetics), transporters (SERT/SSRI), pumps (PPI, digoxin), ACE.
- Glycocalyx = extracellular glycosylation layer.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Half of modern drugs target membrane proteins: PPIs, SSRIs, local anaesthetics, cardiac glycosides, ACE inhibitors, GPCR ligands — this lesson is the receptor/pharmacokinetics map.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish integral, peripheral, and lipid-anchored membrane proteins by extraction behaviour.
2. Why are transmembrane helices hydrophobic, and how does one predict them?
3. Name one drug for each: channel, transporter, pump, membrane enzyme.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Three attachment styles; detergents free the integral class.
- Hydropathy reads topology from sequence.
- Receptors/channels/transporters/pumps = the drug-target quartet.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'membrane-transport',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Membrane Transport',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The bilayer's hydrophobic core makes it a **selective barrier**: lipophilic molecules slip through, ions and sugars cannot. **Membrane transport** is the protein machinery that manages this traffic — the molecular basis of absorption, distribution, secretion, and most drug movement.

**Classification framework (memorise the axes):**

- **Passive (no ATP; down-gradient):**
  - *Simple diffusion* — through the lipid itself (O₂, CO₂, steroid hormones, anaesthetics; most oral drugs' absorption step).
  - *Facilitated diffusion* — protein-mediated down-gradient (GLUT glucose transporters; aquaporins).
- **Active (up-gradient; energy-requiring):**
  - *Primary* — ATP hydrolysed directly (Na⁺/K⁺-ATPase, gastric H⁺/K⁺-ATPase, V-ATPase).
  - *Secondary* — gradient built by primary ATPase drives a second solute (SGLT1 uses Na⁺ gradient; NCX; amino-acid symporters).
- **Vesicular (bulk):** endocytosis (in) and exocytosis (out) — next lessons.

**Key gradients and their keeper — the Na⁺/K⁺-ATPase:** 3 Na⁺ out / 2 K⁺ in per ATP; maintains Na⁺/K⁺ gradients that power secondary transport, cell volume, and the neuronal action potential. **Digoxin/ouabain** inhibit it (positive inotropy via Na⁺-Ca²⁺ exchange arithmetic) — a transport lesson turned into cardiology.

**Transporter families:**

- **Channels** — pores, gated (voltage/ligand/mechanical), extremely fast (10⁶–10⁸ ions/s): Naᵥ/Kᵥ/Caᵥ, GABA-A, nicotinic.
- **Carriers/transporters** — conformational cycles, slower (10²–10⁴/s), saturable kinetics (Michalis-like **Tm**): SLC family (GLUT, SGLT, OCT, OAT, SERT/NET/DAT).
- **ABC pumps** — ATP-driven efflux (P-gp/MDR1, MRP, BCRP): multidrug resistance in cancer; drug–drug interactions (P-gp inhibition by verapamil/clarithromycin).

**Pharmacokinetic synthesis:** absorption (P-gp in gut wall limits some drugs), BBB entry (tight junctions + efflux pumps), renal secretion (OAT/OCT in proximal tubule — probenecid blocks penicillin excretion), hepatic uptake/bile export (MRP2). One lesson, half of pharmacokinetics.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Passive: simple diffusion (lipophilic) + facilitated (GLUT, aquaporins).
- Active: primary (Na⁺/K⁺-ATPase, H⁺/K⁺-ATPase) + secondary (SGLT, NCX).
- Na⁺/K⁺-ATPase: 3 Na⁺ out/2 K⁺ in/ATP; gradient keeper; digoxin target.
- Channels fast/gated; carriers saturable (Tm); ABC pumps = ATP efflux (P-gp/MDR).
- PK hooks: gut P-gp, BBB efflux, renal OAT/OCT (probenecid).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `PPIs, digoxin, SSRIs, SGLT2 inhibitors, local anaesthetics, probenecid, and P-gp interactions all act on transport machinery — this lesson is pharmacokinetics' molecular core.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Classify: GLUT4, SGLT2, Na⁺/K⁺-ATPase, P-gp, O₂ diffusion.
2. Why does digoxin raise intracellular Ca²⁺?
3. How does probenecid increase penicillin duration?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Down-gradient free vs protein-facilitated; up-gradient needs ATP directly or via borrowed gradients.
- Na⁺/K⁺-ATPase is the gradient battery.
- Channels fast, carriers saturable, ABC pumps efflux.
- Every PK pathway is a transport lesson.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'passive-transport',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Membrane Transport — Passive Transport',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Passive transport** moves solutes **down** their electrochemical gradient — the cell spends no ATP; the gradient itself is the fuel.

**Simple diffusion (through the lipid):**

- **Fick's law** quantifies it: rate ∝ (area × permeability × concentration gradient); permeability P depends on **lipid solubility (partition coefficient), molecular size, and ionisation**.
- **Uncharged, lipophilic, small** = fast (O₂, CO₂, N₂, steroid hormones, ethanol, most CNS-active drugs).
- **Ionisation is the gatekeeper** (Henderson–Hasselbalch): weak acids cross best when un-ionised (low pH for acids; high pH for bases). The stomach absorbs weak acids (aspirin) well; the intestine (pH ~6–7.5) absorbs weak bases; **aspirin's ion trapping** — absorbed un-ionised in the acidic stomach, deprotonates in the neutral cytosol and cannot leave back — a transport-pharmacology classic.
- Water crosses surprisingly fast via both lipid-phase diffusion and aquaporins.

**Facilitated diffusion (protein-mediated, still down-gradient):**

- **Carriers:** conformational cycle shuttles solute; **saturable** (Tm kinetics), stereospecific, inhibitable (cytochalasin B on GLUTs). **GLUT family:** GLUT1 (basal/BBB/RBC), GLUT2 (liver/β-cell sensor — low affinity, mass action), **GLUT4 (insulin-responsive — adipose/muscle; the diabetes lesson's molecular actor)**.
- **Channels:** pores for ions/water; gated (voltage/ligand/mechano); 10⁶–10⁸ ions/s — 10³–10⁵× faster than carriers. **Aquaporins** for water (ADH-regulated AQP2 in the kidney collecting duct — vasopressin's molecular target).

**Osmosis** — water's passive transport across semipermeable membranes toward higher solute concentration: **tonicity** (isotonic 0.9% NaCl / 5% dextrose for IV fluids — a pharmacy calculation staple), hyponatraemia/hypernatraemia pathophysiology.

**Clinical anchors:** gas exchange (O₂/CO₂ diffusion), aspirin/weak-acid absorption, glucose uptake in insulin action, ADH/aquaporin water handling, and IV-fluid tonicity choices.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Passive = down electrochemical gradient; no ATP.
- Simple diffusion follows Fick's law: size + lipophilicity + ionisation decide rate.
- Henderson–Hasselbalch governs weak acid/base crossing; ion trapping in compartments.
- Facilitated: carriers (GLUT1/2/4 — saturable, Tm) and channels (fast, gated; aquaporins).
- Osmosis/tonicity: 0.9% NaCl, 5% glucose as clinical isotonic fluids.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Aspirin absorption, IV-fluid tonicity, ADH/aquaporin drugs (desmopressin/vaptans), and insulin/GLUT4 in diabetes care are passive-transport pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write Fick's law and name its three molecular determinants.
2. Why is aspirin absorbed well in the stomach but "trapped" in the cell?
3. Contrast carrier-mediated and channel-mediated passive transport in speed and kinetics.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Downhill, free: diffusion (lipid) or facilitated (protein).
- Ionisation decides weak electrolytes' crossing.
- GLUT/insulin and aquaporin/ADH are the star systems.
- Tonicity is osmosis applied to IV fluids.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'facilitated-diffusion',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Membrane Transport — Facilitated Diffusion',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Facilitated diffusion** = protein-assisted movement **down** the gradient: the protein supplies speed, specificity, and regulation that plain lipid diffusion cannot — without spending ATP.

**Two protein styles:**

**1. Carrier (uniporter) proteins:**

- Mechanism: solute binds one face → conformational switch → release on the other face (the "ping-pong" cycle).
- **Kinetics:** saturable — rate rises with concentration then plateaus at **Tm** (transport maximum); classic Michaelis-like curve with Km (affinity). Contrast simple diffusion's straight line.
- **Specificity:** stereospecific (D-glucose over L-glucose), competitive inhibition possible.
- **Clinical competition example:** glucose and galactose compete for intestinal GLUT-like basolateral exit; **phlorizin** historically blocks GLUT/SGLT (phlorizin → modern SGLT2 inhibitors' lineage).

**2. Channel proteins (ion/water pores):**

- Mechanism: aqueous pore, selectivity filter, gate (voltage/ligand/mechanical).
- **Speed:** 10⁶–10⁸ ions/s (carriers: 10²–10⁴/s) — 10³–10⁵× faster.
- **Aquaporins** for water: AQP1 (proximal tubule/descending limb), **AQP2 (collecting duct — ADH/V2-receptor → cAMP → AQP2 insertion; vaptans block V2 in hyponatraemia)**; mercury-sensitive cysteines historically identified function.

**The GLUT glucose family (the pharmacology-rich case):**

| Isoform | Location | Property |
|---|---|---|
| GLUT1 | RBC, BBB, basal | low Km — housekeeping |
| GLUT2 | liver, β-cell, intestine | high Km — mass-action sensor (insulin release logic) |
| GLUT3 | neurons | lowest Km — brain priority |
| **GLUT4** | muscle/adipose | **insulin-recruited** — diabetes's molecular lever |

**Insulin's action:** receptor → PI3K/Akt → GLUT4 vesicles fuse with membrane → glucose influx (facilitated diffusion, insulin-regulated) — the *transport* story under metformin/thiazolidinedione therapy and exercise physiology.

**Nucleoside transporters (ENT/CNT)** carry antivirals/antiretrovirals into cells — a facilitated-diffusion drug-delivery lesson; **OCT/OAT family** straddles passive-facilitated and exchange modes in kidney/liver drug handling.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Facilitated diffusion: down-gradient, protein-assisted, no ATP.
- Carriers: saturable (Tm), stereospecific, competitively inhibited (GLUTs).
- Channels: gated pores, 10³–10⁵× faster than carriers; aquaporins for water (AQP2/ADH).
- GLUT isoforms: 1 (basal/BBB), 2 (sensor), 3 (neuron), **4 (insulin-recruited — diabetes lever)**.
- ENT/CNT deliver nucleoside drugs; OCT/OAT handle renal drug transport.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `SGLT2 inhibitors' lineage, insulin/GLUT4, vaptans, and nucleoside-antiviral uptake are facilitated-diffusion pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw the kinetic contrast between simple and facilitated diffusion (rate vs concentration).
2. Why is GLUT2's high Km logical for β-cells?
3. How does insulin raise glucose entry without spending ATP?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Downhill with a protein helper: carriers saturate, channels flash.
- GLUT4 is insulin's transport lever; AQP2 is ADH's.
- Specificity and saturation distinguish it from simple diffusion.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'active-transport',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Membrane Transport — Active Transport',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Active transport** moves solutes **against** their gradient — work requiring energy, spent either directly as ATP (primary) or as a borrowed ion gradient (secondary).

**Primary active transport (ATPases):**

- **Na⁺/K⁺-ATPase (the sodium pump):** 3 Na⁺ out / 2 K⁺ in per ATP; electrogenic (net −1 charge/cycle → membrane potential contributor); maintains all animal-cell gradients — ~20–30% of resting-cell ATP budget. **Digoxin/ouabain inhibit** → Na⁺ rises → Na⁺-Ca²⁺ exchanger slows → Ca²⁺ accumulates → stronger contraction (positive inotropy) — the classic cardiology chain.
- **Ca²⁺-ATPase (SERCA, PMCA):** keeps cytosolic Ca²⁺ ~10⁻⁷ M (10⁴× below extracellular) — thapsigargin (lab tool) blocks SERCA; muscle-relaxant physiology.
- **H⁺/K⁺-ATPase (gastric parietal cell):** pumps H⁺ into the lumen (pH ~1) — **proton-pump inhibitors** (omeprazole's class) covalently block it; acid's Kd story.
- **V-ATPase:** acidifies lysosomes/endosomes/osteoclast lacunae; lysosomotropic drug trapping builds on it.
- **ABC transporter superfamily:** ATP-Binding Cassette pumps — **P-glycoprotein (MDR1/ABCB1)** effluxes lipophilic cationic drugs (chemotherapy resistance; gut/BBB/tubule expression), MRP2 (bile export), CFTR is an ABC-family *channel* (the famous outlier).

**Secondary active transport (gradient borrowing):**

- **Symport (co-transport):** SGLT1 (gut: 2 Na⁺ + glucose/galactose — oral-rehydration-solution logic), **SGLT2 (kidney: glucose reabsorption — the blockbuster inhibitor class)**, Na⁺-amino-acid symporters, Na⁺-I⁻ symporter (NIS — thyroid iodide uptake; radioiodine therapy's entry route).
- **Antiport (counter-transport):** Na⁺-Ca²⁺ exchanger (NCX), Na⁺-H⁺ exchanger (NHE — acid-base and volume regulation; amiloride blocks).
- **The gradient's source:** every secondary transporter is powered by Na⁺/K⁺-ATPase's prior work — an energy accounting chain (ATP → Na⁺ gradient → glucose/iodide/Ca²⁺ movement).

**Kinetics/features:** saturable (Tm), specific, competitive inhibition possible, temperature-sensitive (enzyme-like), and inhibited by metabolic poisons (cyanide halts ATP → all active transport fails — transport vs diffusion's diagnostic difference).

**Clinical anchors:** PPIs, digoxin, SGLT2 inhibitors, ORS (SGLT1 + Na⁺ cotransport keeps absorption working in cholera!), radioiodine/NIS in hyperthyroidism/cancer.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Primary: ATP directly — Na⁺/K⁺-ATPase (digoxin), SERCA, gastric H⁺/K⁺-ATPase (PPIs), V-ATPase, ABC pumps (P-gp/MDR).
- Secondary: symport (SGLT1/2, NIS) + antiport (NCX, NHE) powered by Na⁺ gradients.
- Energy chain: ATP → Na⁺/K⁺-ATPase → Na⁺ gradient → secondary work.
- Features: saturable, specific, metabolic-poison sensitive.
- Clinical: PPIs, digoxin, SGLT2i, ORS, radioiodine therapy.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `PPIs, SGLT2 inhibitors, digoxin monitoring, ORS physiology, and radioiodine uptake are active-transport pharmacology at its clearest.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define primary vs secondary active transport with one example each.
2. Explain digoxin's mechanism from Na⁺/K⁺-ATPase to inotropy.
3. Why does oral rehydration solution work even in cholera (SGLT1 logic)?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Against the gradient: ATP directly (primary) or borrowed gradients (secondary).
- The sodium pump is the battery; PPIs/P-gp/SGLT2 are the drug stars.
- Saturable, specific, poison-sensitive — the transport signature.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'endocytosis',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Membrane Transport — Endocytosis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Endocytosis** is bulk uptake: the membrane invaginates and pinches off vesicles carrying extracellular material inward. Four routes serve different cargoes.

**1. Phagocytosis ("cell eating")** — receptor-driven ingestion of particles (bacteria, debris); professional phagocytes (macrophages, neutrophils, dendritic cells); actin-driven pseudopods; phagosomes fuse with lysosomes → killing/digestion (oxidative burst — NADPH oxidase, MPO). Opsonins (IgG, C3b) accelerate recognition.

**2. Pinocytosis ("cell drinking")** — non-specific uptake of extracellular fluid/solutes into small vesicles; constitutive in most cells.

**3. Receptor-mediated endocytosis (clathrin-dependent)** — the specificity workhorse:
- Ligand binds cell-surface receptor → clathrin-coated pit → **dynamin** pinches the vesicle → uncoating → early endosome (pH drops) → **ligand dissociates** → receptors recycle; ligand goes to lysosome or transcytosis.
- **Textbook cargoes:** LDL (LDL-receptor defects → **familial hypercholesterolaemia**; statins up-regulate hepatic LDL-R — the receptor lesson made clinical), transferrin/iron, insulin, EGF, vitamin B12-intrinsic factor (ileal cubilin), IgG (neonatal FcRn).
- **Clinical/pharma:** drug conjugates (antibody–drug conjugates exploit receptor-mediated uptake); nanoparticles' design mimics it.

**4. Caveolin-mediated (caveolae) and macropinocytosis** — cholesterol-rich flask pits (signalosome trafficking); macropinocytosis = actin-driven "big gulps" (antigen sampling, some cancer cells' nutrient strategy).

**Destination sorting:** early endosome (pH ~6.5) → late endosome (pH ~5.5) → lysosome (pH ~4.8); or **transcytosis** across the cell (maternal IgG to foetus; IgA to gut lumen; some oral drugs' paracellular-adjacent routes).

**Why it matters to pharmacy:**
- **Drug delivery:** nanoparticles/liposomes enter largely via endocytosis; escape from endosomes (proton-sponge lipids) is a design challenge (mRNA-LNP success).
- **Toxicity/clearance:** PSN (peptide) drugs and some toxins hijack routes; macrophage uptake shortens liposome half-life (PEGylation evades).
- **Genetic disease:** FH's LDL-R defects; receptor recycling disorders.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four routes: phagocytosis (particles, macrophages, oxidative burst), pinocytosis (fluid), receptor-mediated clathrin (specific cargoes), caveolae/macropinocytosis.
- RME steps: receptor → clathrin pit → dynamin → endosome acidification → ligand/receptor sorting → recycle/lysosome/transcytosis.
- Classic RME cargoes: LDL (FH; statins), transferrin, B12-IF, IgG/FcRn.
- Drug delivery: LNPs/nanoparticles enter endocytically; endosomal escape is the design bottleneck.
- Phagocyte killing uses NADPH oxidase + MPO.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Statin/FH logic, ADC and LNP design, PEGylated-liposome pharmacokinetics, and FcRn-based IgG recycling (neonatal therapy) are endocytosis-applied pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the steps of receptor-mediated endocytosis from binding to sorting.
2. How does familial hypercholesterolaemia relate to endocytosis?
3. Why must mRNA-LNPs achieve endosomal escape?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Endocytosis: eat (phago), drink (pino), select (RME), or gulp (macropinocytosis).
- Clathrin/dynamin mechanics; acidification sorts fate.
- LDL-R and FH are the clinical icon; LNPs are the pharma star.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'exocytosis',
    courseId: 'bch-201',
    topicId: 'membranes-and-cell-structure',
    nodeType: 'subtopic',
    title: 'Membrane Transport — Exocytosis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Exocytosis** is the outward mirror: vesicles fuse with the plasma membrane and release their contents — secretion's final step for hormones, neurotransmitters, enzymes, and membrane components themselves.

**Two modes:**

- **Constitutive:** continuous default secretion (plasma proteins, extracellular-matrix components, membrane lipids/proteins reach the surface) — no storage, no signal needed.
- **Regulated:** cargo stored in secretory granules until a signal triggers fusion — insulin granules (glucose/Ca²⁺), neurotransmitter vesicles (Ca²⁺-driven at nerve terminals), histamine granules (mast-cell degranulation — antihistamine/allergy territory), pancreatic acinar enzymes (CCK/ACh).

**The fusion machinery (SNARE hypothesis):**

- **v-SNAREs** on the vesicle (**VAMP/synaptobrevin**) pair with **t-SNAREs** on the target membrane (**syntaxin + SNAP-25**) → four-helix bundle zips membranes together.
- **Synaptotagmin** is the Ca²⁺ sensor — Ca²⁺ binding triggers fast fusion (the 100 μs speed of neurotransmitter release needs it).
- **NSF/α-SNAP** disassemble SNAREs after fusion (ATP-driven reset).

**Clostridial neurotoxins as molecular scalpels:** **tetanus toxin** and **botulinum toxins (A–G)** cleave specific SNARE proteins (Botox-A cleaves SNAP-25; tetanus cleaves VAMP) → vesicle fusion fails → paralysis (spasticity from tetanus; flaccid/therapeutic relaxation from Botox) — pharmacology literally aimed at the fusion machine.

**Trafficking context (the secretory highway):** ER (synthesis) → Golgi (modification/sorting) → **constitutive or regulated vesicles** → surface. Sorting signals: mannose-6-phosphate (lysosomal enzymes — its failure creates I-cell disease), KDEL (ER retention), granule-aggregation signals.

**Membrane return/recycling:** exocytosis adds membrane; endocytosis retrieves it — the vesicle cycle balances cell surface area (nerve terminals recycle synaptic vesicles within seconds — SV2 is the target of levetiracetam, an antiepileptic acting on vesicle cycling!).

**Pharmacy anchors:** Botox therapeutics/cosmetics, levetiracetam's SV2A binding, insulin secretion physiology (sulfonylureas close K-ATP → depolarise → Ca²⁺ → exocytosis — the cascade this lesson's machinery executes), mast-cell degranulation and antihistamine/anti-IgE (omalizumab) logic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Constitutive (default) vs regulated (stored granule + signal) exocytosis.
- SNAREs: v-SNARE (VAMP) + t-SNAREs (syntaxin/SNAP-25); synaptotagmin = Ca²⁺ sensor; NSF resets.
- Clostridial toxins cleave SNAREs (Botox: SNAP-25; tetanus: VAMP).
- Sorting signals: M6P (lysosomal enzymes; I-cell disease), KDEL (ER).
- Exo–endo balance recycles surface/vesicles; SV2A = levetiracetam target; sulfonylureas end in Ca²⁺-triggered insulin exocytosis.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Botulinum therapy, levetiracetam, sulfonylurea insulin secretion, and omalizumab/antihistamine logic all sit on exocytosis machinery.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast constitutive and regulated secretion with one example each.
2. How do botulinum toxins paralyse release at the molecular level?
3. Trace the sulfonylurea→insulin-release chain ending in exocytosis.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Exocytosis: SNARE zip + Ca²⁺ trigger releases stored cargo.
- Toxins cut SNAREs; drugs modulate the same machine.
- The secretory highway (ER→Golgi→vesicle) ends here.
- Insulin, histamine, and neurotransmitters are its pharmacological stars.`,
      },
    ],
  },
];
