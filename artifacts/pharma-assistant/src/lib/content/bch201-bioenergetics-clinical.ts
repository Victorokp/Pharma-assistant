import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 14: Bioenergetics (7) + Clinical
 * Biochemistry (6).
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic bases C; pathway-core/clinical subtopics A; descriptive B.
 */

export const bch201BioenergeticsClinicalLessons: Lesson[] = [
  // ═══════════════ BIOENERGETICS ═══════════════

  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'bioenergetics',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'topic',
    title: 'Bioenergetics',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Bioenergetics** is the quantitative study of energy transactions in living systems — how cells earn, store, spend, and lose energy, and how the thermodynamics of Gibbs free energy (ΔG) governs which reactions can run. It is the bookkeeping layer beneath every pathway this course has taught.

**The thermodynamic spine:**

- **ΔG (Gibbs free energy)** decides spontaneity *in actual conditions*: ΔG < 0 proceeds, ΔG > 0 needs input, ΔG = 0 equilibrium.
- **ΔG°′ (standard, pH 7, 1 M)** allows comparison: $\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln\\frac{[\\text{products}]}{[\\text{substrates}]}$ — real concentrations bend standard values (a 10× substrate excess buys −5.7 kJ/mol at 25 °C).
- **Coupling:** thermodynamically unfavourable steps are driven by pairing with favourable ones — usually through **ATP** (hydrolysis ≈ −30.5 kJ/mol standard, −50 to −60 kJ/mol in cells) or through membrane gradients (the proton-motive force).

**The energy economy's three departments:**

1. **Currency — ATP** (and GTP; phosphagens like creatine phosphate): rapid-transfer small change.
2. **Reserve — high-energy stores:** creatine phosphate (muscle seconds), glycogen (hours), fat (weeks).
3. **Machinery — electron transport & oxidative phosphorylation:** the mitochondrial assembly converting reduced carriers (NADH/FADH₂) into the proton gradient that ATP synthase cashes.

**Redox logic:** oxidation-reduction reactions move electrons from donors to acceptors; **NAD⁺/FAD** are the cellular electron brokers; their journey down the ETC's increasingly avid carriers releases the energy that pumping protons banks.

**Why this topic matters to pharmacy:** every drug that poisons energy metabolism (cyanide, CO, oligomycin-like natural products), every energetic explanation (digoxin's ATPase target, metformin's AMPK link, valproate's β-oxidation drain), and every energetic disease (mitochondrial DNA disorders) is bioenergetics applied.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- ΔG decides real spontaneity; ΔG°′ standardises comparisons; concentrations bend outcomes.
- ATP hydrolysis ≈ −30.5 kJ/mol (standard); −50/−60 in cells — coupling currency.
- Departments: currency (ATP), reserves (Cr-P/glycogen/fat), machinery (ETC/oxphos).
- NAD⁺/FAD broker electrons; ETC converts redox energy → proton gradient → ATP.
- Energy poisons (CN⁻/CO) and energetics-diseases (mtDNA) are clinical hooks.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin/AMPK, digoxin/Na⁺-K⁺-ATPase, cyanide antidotes (nitrites + thiosulfate), and mitochondrial-toxicity drug counselling all stand on this topic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish ΔG and ΔG°′ and explain why both matter.
2. How does ATP coupling make an unfavourable reaction proceed?
3. Name the three "departments" of the energy economy with examples.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Bioenergetics = energy bookkeeping via ΔG and coupling.
- ATP is currency; Cr-P/glycogen/fat are reserves; oxphos is the plant.
- Redox flow powers the gradient; the gradient powers ATP.
- Poisons and diseases of this system are pharmacy-relevant.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'atp',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'subtopic',
    title: 'ATP',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Adenosine triphosphate (ATP)** — adenine + ribose + three phosphoryls — is the cell's universal energy currency: not the largest energy store (fat wins), but the fastest, most universal transferable unit.

**Why ATP's bonds are "high-energy":** the term is shorthand — the phosphoanhydride bonds are not mystically strong; **hydrolysis is strongly favourable** because:
1. **Charge repulsion relief** — four negative charges crowd the triphosphate; separation eases them.
2. **Resonance stabilisation** — the products (ADP, Pᵢ) delocalise electrons better than the parent.
3. **Ionisation/solvation** — products hydrate and ionise favourably.
4. **Concentration:** cellular [ATP]/[ADP][Pᵢ] sits far above equilibrium — mass action adds ~20 kJ/mol beyond standard (−30.5 → −50/−60 kJ/mol real).

**The ATP cycle:** ATP is *turned over*, not stored — a 70 kg adult recycles 40–70 kg/day (sedentary) and ~400 g/min in sprinting. Cellular ATP pool ≈ 50 g — seconds of demand; regeneration must be continuous.

**Regeneration routes:**
1. **Substrate-level phosphorylation** — direct phosphoryl transfer (glycolysis's PGK/pyruvate kinase steps; TCA's succinyl-CoA synthetase; creatine kinase reserve).
2. **Oxidative phosphorylation** — the ETC/gradient route (~90% of aerobic ATP).
3. **Photophosphorylation** (plants — not us).

**Spending categories:** biosynthesis (anabolism), transport (pumps — Na⁺/K⁺-ATPase alone ~20–30% of resting ATP), motility (myosin), signalling (kinases), thermogenesis (uncoupling — UCP1/UCP2-mediated futile cycling), and **information** (DNA replication/repair — fidelity costs energy).

**Energy-charge logic:** cells guard the ATP/(ATP+ADP) ratio (energy charge ~0.85–0.95); AMP (via **adenylate kinase: 2 ADP ⇌ ATP + AMP**) amplifies low-energy signals — the reason **AMPK** is the master fuel-sensor and metformin's indirect target.

**Beyond energy:** ATP is also a **neurotransmitter/signalling molecule** (purinergic receptors) and RNA building block (ATP → cAMP second messenger via adenylate cyclase).

**Clinical anchors:** creatine-phosphate reserve in muscle; ATP-depletion pathologies (ischaemia — pumps fail, Ca²⁺ floods, cell dies); mitochondrial diseases' ATP shortfall; cyanide's ATP-supply decapitation.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- ATP = adenine + ribose + triphosphate; hydrolysis favourable via charge repulsion, resonance, solvation, mass action.
- Standard −30.5 kJ/mol; cellular −50/−60 — mass-action bonus.
- Turnover: 40–70 kg/day adult; pool ~50 g — continuous regeneration mandatory.
- Regeneration: substrate-level (direct transfer), oxidative (gradient), photophosphorylation.
- Energy charge + adenylate kinase/AMP = fuel sensing (AMPK; metformin link).
- Also: purinergic signalling, cAMP source; ischaemia = ATP-deprivation pathology.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin's AMPK activation, digoxin's ATPase target, ischaemia-reperfusion pharmacology, and creatine supplementation all engage ATP biochemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give four reasons ATP hydrolysis is strongly favourable.
2. Why is the cellular ATP pool tiny yet demand enormous?
3. How does adenylate kinase amplify energy-stress signalling?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- ATP = universal currency: fast, universal, tiny pool, huge turnover.
- Hydrolysis economics: repulsion + resonance + solvation + mass action.
- Substrate-level vs oxidative regeneration.
- Energy charge via AMP/AMPK is the control room.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'high-energy-compounds',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'subtopic',
    title: 'High-energy Compounds',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**High-energy compounds** hydrolyse with ΔG°′ ≤ about −25 kJ/mol — a chemical club whose members share transferable phosphoryl or electron-rich groups. Knowing the club's roster explains metabolic "money flows".

**The families:**

**1. Phosphoanhydrides (pyrophosphate bonds):**
- **ATP** (−30.5 kJ/mol per anhydride; ADP's remaining one similar), **GTP** (TCA's succinyl-CoA step; translation), UTP/CTP (glycogen/lipid/polysaccharide synthesis — regenerated by **nucleoside diphosphate kinase: NDP + ATP ⇌ NTP + ADP**).

**2. Acyl phosphates (mixed anhydride with carboxyl):**
- **1,3-Bisphosphoglycerate** (−49 kJ/mol — glycolysis's first ATP-yielding step; its hydrolysis outbids ATP, so PGK runs backward-compatible energetically).
- **Acetyl phosphate** (bacteria).

**3. Enol phosphates:**
- **Phosphoenolpyruvate (PEP)** — the richest common phosphoryl donor (**−61.9 kJ/mol**): pyruvate kinase's step "pulls" glycolysis irreversibly downhill; enol→keto tautomerisation after phosphoryl transfer adds the punch.

**4. Phosphoguanidines (the phosphagen reserve):**
- **Creatine phosphate** (−43 kJ/mol) — muscle's instant buffer: **creatine kinase (CK)** shuttles: Cr + ATP ⇌ Cr-P + ADP; at rest ATP charges Cr-P; at burst onset Cr-P recharges ATP within seconds. CK isoenzymes (CK-MM muscle, CK-MB heart, CK-BB brain) are clinical damage markers.
- **Arginine phosphate** (invertebrates).

**5. Thioesters (Sulfur instead of oxygen):**
- **Acetyl-CoA, succinyl-CoA** (−31 to −33 kJ/mol): resonance differs between O-esters and S-esters, making thioesters "energy-rich"; the energy of oxidative decarboxylation is banked here (PDH/α-KGDH outputs) — the reason citrate synthase's hydrolysis of citroyl-CoA drives condensation forward, and why CoA is metabolism's handle.

**6. Others:** S-adenosylmethionine (methyl transfer), **PRPP** (ribose-phosphate transfer in nucleotide synthesis), UDP-glucose (glycosyl transfer), dUTP/dNTPs (DNA synthesis).

**Not high-energy (the contrast set):** glucose-6-phosphate (−13.8), AMP (ester), glycerol-3-P — phosphoryl *ethers/esters* without the relief/stabilisation logic; they mark and trap metabolites but do not donate phosphoryl.

**Clinical/exam anchors:** PEP > 1,3-BPG > ATP ordering; creatine-phosphate exhaustion in ischaemia (CK rise = damage); nucleoside-diphosphate kinase unifying NTPs; thioester logic explaining CoA's ubiquity.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Club threshold ≈ ΔG°′ ≤ −25 kJ/mol.
- Families: anhydrides (ATP/GTP), acyl-P (1,3-BPG), enol-P (**PEP −61.9**, richest), phosphagens (Cr-P −43; CK isoenzymes), thioesters (acetyl-/succinyl-CoA), activated carriers (SAM, PRPP, UDP-glucose).
- Low-energy contrast: G6P, AMP, glycerol-3-P — markers, not donors.
- NDK interconverts NTPs from ATP.
- PEP > 1,3-BPG > Cr-P > ATP ordering is the classic exam ladder.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Creatine supplementation (phosphagen store), CK-MB/troponin diagnostics, and nucleotide-analogue prodrugs (which must be phosphorylated to active triphosphates — e.g. aciclovir/tenofovir) ride this chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Rank PEP, 1,3-BPG, creatine-P, and ATP by phosphoryl-transfer potential.
2. Why are thioesters energy-rich while ordinary esters are not?
3. How does creatine phosphate buffer muscle ATP during a sprint?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Five families of high-energy compounds; PEP tops the ladder.
- Thioesters bank redox energy via CoA.
- Phosphagens buffer; NDK spreads ATP's wealth to other NTPs.
- G6P and friends are low-energy markers.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'oxidation-reduction-reactions',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'subtopic',
    title: 'Oxidation-Reduction Reactions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Oxidation-reduction (redox) reactions** transfer electrons — the deepest currency beneath ATP's phosphate economy. Oxidation = electron loss; reduction = electron gain; donors and acceptors always pair.

**Accounting rules:**
- **OIL RIG** — Oxidation Is Loss, Reduction Is Gain (of electrons).
- Biological shorthand: oxidation often = removing **H** (dehydrogenation) or adding **O**; reduction = adding **H** (hydrogenation).
- **Carbon's oxidation states** track energy: alkane (most reduced, energy-rich) → alcohol → aldehyde → carboxyl → CO₂ (fully oxidised). Burning fat/carbohydrate = stepwise carbon oxidation; the released electrons do the useful work.

**The cellular electron brokers:**

- **NAD⁺/NADH** (nicotinamide, vitamin B3): soluble, catabolism's carrier; collects hydride (H⁻ = 2e⁻ + H⁺) from substrates (dehydrogenases); NAD⁺/NADH ratio high (~700/1 cytosol) — oxidising milieu for catabolism.
- **NADP⁺/NADPH:** same nicotinamide chemistry, extra phosphate; **reductive biosynthesis's carrier** (fatty acid/cholesterol synthesis, glutathione reduction); NADPH/NADP⁺ high (reducing milieu); sources: HMP shunt, malic enzyme.
- **FAD/FADH₂** (riboflavin): tightly enzyme-bound; handles 1e⁻ or 2e⁻ chemistry (succinate dehydrogenase, acyl-CoA dehydrogenase, ETC Complex II).

**Redox potential (E₀′) — the voltage scale:**
- Standard reduction potentials rank electron avidity; the **electron tower** climbs from NAD⁺/NADH (−0.32 V) through ubiquinone, cytochromes, to **O₂/H₂O (+0.82 V)** — the most avid acceptor.
- ΔE relates to ΔG: $\\Delta G^{\\circ\\prime} = -nF\\Delta E^{\\circ\\prime}$ (n = electrons; F = Faraday). NADH → O₂ (ΔE ≈ +1.14 V) yields ~−220 kJ per 2e⁻ pair — enough for ~2.5 ATP after gradient losses.

**Enzyme classes:** oxidases (O₂ as acceptor → H₂O₂, e.g. oxidases/catalase partnership), dehydrogenases (NAD⁺/FAD), hydroperoxidases (catalase, peroxidase), oxygenases (mixed-function — CYP monooxygenases: O₂ split, one atom into substrate, one to water).

**Clinical/pharmacy anchors:** methaemoglobinaemia (Fe³⁺ — oxidised haemoglobin can't carry O₂; methylene blue reduction rescue), G6PD deficiency's NADPH shortfall (oxidant stress → haemolysis — the primaquine/dapsone/fava list), antioxidant systems (GSH/glutathione reductase/NADPH chain), cyanide/CO blocking the final redox hand-off.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Redox = electron transfer; OIL RIG; carbon oxidation states track fuel energy.
- NAD⁺/H (catabolism, oxidising pool), NADPH (biosynthesis/antioxidants, reducing pool), FAD (enzyme-bound, 1e/2e flexible).
- Electron tower: NADH (−0.32 V) → carriers → O₂ (+0.82 V); ΔG = −nFΔE.
- NADH→O₂ ≈ −220 kJ/2e⁻ → ~2.5 ATP via gradient economy.
- Clinical: metHb/methylene blue, G6PD/NADPH oxidant list, GSH antioxidant chain, CN⁻/CO at Complex IV.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `G6PD oxidant-avoidance lists, methylene-blue therapy, CYP monooxygenase pharmacology, and antioxidant supplement claims evaluation are redox pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast NADH and NADPH roles with their ratio directions.
2. Calculate ΔG°′ for NADH → O₂ (n=2, ΔE = 1.14 V, F ≈ 96.5 kJ/V·mol).
3. Why does G6PD deficiency cause haemolysis on oxidant drugs?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Redox is the base currency; NAD/NADP/FAD are the brokers.
- The electron tower ends at O₂; ΔE prices each drop.
- Cells run oxidising catabolism and reducing biosynthesis in parallel pools.
- Antioxidant systems and oxidant-drug hazards are redox applied.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'electron-transport-chain',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'subtopic',
    title: 'Electron Transport Chain',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **electron transport chain (ETC)** — four protein complexes plus two shuttles in the inner mitochondrial membrane — moves NADH/FADH₂ electrons down the potential gradient to O₂, and uses the released energy to **pump H⁺ out** into the intermembrane space, building the gradient that ATP synthase will cash.

**The cast (in order):**

- **Complex I (NADH:ubiquinone oxidoreductase):** NADH → FMN → Fe-S clusters → **ubiquinone (CoQ)**; pumps **4 H⁺** out. (NADH enters from matrix; cytosolic NADH arrives via shuttles — malate-aspartate or glycerol-3-P.)
- **Complex II (succinate dehydrogenase):** succinate → FAD → Fe-S → CoQ; **no pumping** (FADH₂'s lower energy enters downstream) — why FADH₂ yields only ~1.5 ATP.
- **Coenzyme Q (ubiquinone):** lipid-soluble mobile carrier, collects from I/II/other flavoproteins, ferries 2e⁻ to Complex III.
- **Complex III (cytochrome bc₁):** Q-cycle; pumps **4 H⁺**; passes electrons via cytochrome c (mobile peripheral protein).
- **Complex IV (cytochrome c oxidase):** cytochrome c → CuA/heme a → a₃-CuB; reduces **O₂ → H₂O**; pumps **2 H⁺** (+ chemical protons consumed); the chain's avid end.

**Pump tally:** NADH route = 4 + 4 + 2 = **10 H⁺ pumped**; FADH₂ route = **6 H⁺**.

**ATP arithmetic:** ATP synthase needs ~4 H⁺ per ATP (3 rotation + 1 Pi/ADP transport); thus **NADH ≈ 2.5 ATP, FADH₂ ≈ 1.5 ATP** (the modern P/O ratios — older textbook "3 and 2" were overestimates).

**Inhibitors (the poison map):**
- **Complex I:** rotenone, barbiturates (amytal), metformin (mild).
- **Complex III:** antimycin A, myxothiazol.
- **Complex IV:** **cyanide, CO, H₂S, azide** — block O₂ reduction; the chain jams fully reduced, pumping stops, gradient collapses.
- **ATP synthase:** oligomycin.
- **Uncouplers:** 2,4-dinitrophenol, thermogenin (UCP1) — H⁺ leak without ATP; energy → heat (respiration runs wild, ATP stalls).

**Consequences of blockage:** electron carriers fully reduced, O₂ consumption falls, **gradient dissipates**, ATP synthesis stops, glycolysis accelerates anaerobically (lactate rises) — the shared signature of cyanide poisoning and ischaemia.

**Shuttles (cytosolic NADH entry):** malate–aspartate (liver/heart — yields NADH-equivalent, 2.5 ATP) vs glycerol-3-phosphate (muscle/brain — feeds FAD-linked CoQ, 1.5 ATP).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- I (NADH→CoQ, 4H⁺), II (succinate→CoQ, no pump), III (Q-cycle, 4H⁺), IV (O₂→H₂O, 2H⁺); CoQ + cytochrome c mobile.
- Pumps: NADH = 10 H⁺, FADH₂ = 6 H⁺ → 2.5 / 1.5 ATP respectively.
- Inhibitors: rotenone (I), antimycin (III), **CN⁻/CO/H₂S (IV)**, oligomycin (synthase), DNP/UCP (uncouplers).
- Blockage signature: reduced carriers, gradient collapse, ATP stop, lactate ↑.
- Cytosolic NADH shuttles: malate–aspartate (2.5) vs glycerol-3-P (1.5).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Cyanide antidotes (nitrite-induced metHb + thiosulfate → thiocyanate), CO poisoning (O₂/HBO), metformin's mild Complex-I effect, and uncoupler toxicology (DNP misuse) are ETC pharmacology.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the complexes with their substrates/products and proton-pump counts.
2. Why does FADH₂ yield less ATP than NADH?
3. How do cyanide and DNP differ in their disruption signature?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Four complexes + two shuttles; electrons fall, protons climb.
- 10 vs 6 protons price NADH vs FADH₂ (2.5/1.5 ATP).
- Poisons map onto complexes; uncouplers leak the gradient.
- Shuttles set cytosolic NADH's ATP value.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'oxidative-phosphorylation',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'subtopic',
    title: 'Oxidative Phosphorylation',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Oxidative phosphorylation (OxPhos)** couples the ETC's redox energy to ATP synthesis through the **chemiosmotic mechanism** (Peter Mitchell, Nobel 1978): electron transport pumps protons across the inner mitochondrial membrane, and the resulting **proton-motive force** drives ATP synthase.

**The two coupled machines:**

1. **The pump (ETC):** redox energy → electrochemical H⁺ gradient (ΔpH + Δψ ≈ −200 mV total proton-motive force; matrix becomes negative/alkaline).
2. **The turbine (ATP synthase/Complex V — F₀F₁):** H⁺ re-entry through F₀ rotates the c-ring/γ-shaft (**rotational catalysis** — Boyer/Walker Nobel 1997); each 120° turn releases one ATP from F₁'s catalytic sites; ~3 ATP per full rotation (~9–10 H⁺ including transport overhead — hence the ~4 H⁺/ATP working figure).

**Stoichiometry (modern values):**
- NADH (10 H⁺ pumped) → ~2.5 ATP; FADH₂ (6 H⁺) → ~1.5 ATP.
- Glucose full oxidation: glycolysis (2 ATP + 2 NADH) + pyruvate dehydrogenation (2 NADH) + TCA (6 NADH + 2 FADH₂ + 2 GTP) → **≈ 30–32 ATP** (malate-aspartate shuttle vs G3P shuttle explains the range).

**Regulation — demand-led:**
- **Respiratory control:** O₂ consumption tracks **ADP availability** — no ADP, no synthase activity, proton gradient backs up, pumping slows (the gradient self-regulates flux).
- **Energy charge** (ATP/ADP/AMP) integrates the whole economy; Ca²⁺ stimulates matrix dehydrogenases (demand signal).

**Coupling efficiency and its failures:**

- **Tightly coupled** (normal): transport and phosphorylation locked — poisons that halt one halt both.
- **Uncoupled:** proton leak (DNP, UCP1) → respiration races (no ADP brake!), heat replaces ATP — UCP1 is physiological (BAT thermogenesis); DNP is dangerous weight-loss toxicology.
- **Partial uncoupling** (thyroid hormone effects) raises BMR.

**Mitochondrial genetics/disease:** mtDNA (maternal, ~37 genes, ETC subunits + tRNAs) mutates fast (near O₂ radicals); **heteroplasmy** thresholds produce late-onset myopathy/encephalopathy patterns (MELAS, MERRF, Leber's optic neuropathy); tissues with highest ATP demand (nerve, muscle, heart) suffer first.

**Pharmacological anchors:** PPIs exploit a different ATPase; oligomycin-like natural products; **metformin's mild Complex-I inhibition** (raises AMP → AMPK); ischaemia-reperfusion (gradient collapse/ROS); brown-fat physiology (UCP1) and neonatal thermogenesis.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Chemiosmosis: ETC pumps H⁺ → proton-motive force → ATP synthase turbine.
- ATP synthase: F₀ (H⁺ channel/rotor) + F₁ (catalytic head); rotational catalysis; ~4 H⁺/ATP.
- Yields: NADH 2.5, FADH₂ 1.5; glucose ≈ 30–32 ATP total.
- Respiratory control: ADP availability paces respiration (gradient self-regulates).
- Uncouplers (DNP/UCP1) leak H⁺ → heat, wild respiration, low ATP.
- mtDNA: maternal, heteroplasmy-threshold diseases (MELAS/MERRF/LHON).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin/Complex-I/AMPK, DNP toxicology, mtDNA-disease drug caution (valproate/aminoglycoside contraindications), and ischaemia pharmacology are OxPhos-applied pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain chemiosmosis in three sentences.
2. Why does ADP availability control O₂ consumption in well-coupled mitochondria?
3. Why do mtDNA diseases show maternal inheritance and tissue-specific thresholds?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Redox → gradient → rotation → ATP: the coupled machines.
- 2.5/1.5 ATP per carrier pair; glucose ≈ 30–32.
- Demand (ADP) paces supply; uncouplers burn without charging.
- mtDNA adds genetics to the energy story.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'mitochondrial-energy-production',
    courseId: 'bch-201',
    topicId: 'bioenergetics',
    nodeType: 'subtopic',
    title: 'Mitochondrial Energy Production',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A consolidating walk through the mitochondrion as **the cell's power plant** — anatomy, fuel intake, output, integration, and failure modes.

**Anatomy for function:**
- **Outer membrane:** porin-permeable to small molecules (metabolite access).
- **Intermembrane space:** the H⁺ reservoir (proton-motive force's positive side); cytochrome c lives here (its release = apoptosis trigger).
- **Inner membrane:** impermeable (gradient integrity!), holds Complexes I–V, carriers (ANT — ATP/ADP translocase; Pi carrier), **cristae folds** amplifying surface.
- **Matrix:** TCA cycle, β-oxidation, pyruvate dehydrogenase, mtDNA/ribosomes, urea-cycle's first steps.

**Fuel intake logistics:**
- **Pyruvate:** via MPC transporter → PDH (matrix) → acetyl-CoA.
- **Fatty acids:** carnitine shuttle → β-oxidation spiral (matrix).
- **Ketone bodies:** monocarboxylate transporter → SCOT/thiolase → acetyl-CoA.
- **Cytosolic NADH:** malate–aspartate or glycerol-3-P shuttles (reducing equivalents enter as carriers).

**The production line (integrated):** acetyl-CoA → TCA (NADH/FADH₂) → ETC pumping → gradient → ATP synthase → matrix ATP → **ANT exchanges ATP-out/ADP-in** (electrogenic — the membrane potential also powers it) → cytosolic ATP pool.

**Output capacity/efficiency:** glucose ≈ 30–32 ATP; palmitate ≈ 106; the mitochondrion supplies ~90% of resting-body ATP. Thermogenic mode (UCP1) converts the same flux to heat in infants/cold-adapted BAT.

**Integration with whole-body states:**
- **Fed:** insulin shifts mitochondria to storage-linked flux (citrate export, lipogenesis).
- **Fasting:** fat/ketone economy; hepatic mitochondria export ketones for brain.
- **Exercise:** ADP/Ca²⁺ signals ramp flux; training raises mitochondrial density.

**Failure modes (clinical signatures):**
- **Ischaemia:** O₂ starvation → gradient collapse → ATP death → Ca²⁺ overload → reperfusion ROS.
- **Inherited defects:** mtDNA/nDNA ETC defects — lactic acidosis, myopathy, encephalopathy (MELAS etc.).
- **Drug/toxin:** CN⁻/CO (IV), valproate (β-oxidation/carnitine), aminoglycosides (mtDNA ribosome — ototoxicity susceptibility), NRTI mtDNA polymerase-γ toxicity (lipoatrophy/lactic acidosis), alcohol (mitochondrial injury — alcoholic liver disease).
- **Ageing:** mtDNA mutation accrual/ROS theory of ageing.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Compartments: OMM (porins), IMS (H⁺ reservoir; cytochrome c), IMM (complexes/carriers; impermeable), matrix (TCA/β-ox/mtDNA).
- Fuel entries: pyruvate (MPC→PDH), FA (carnitine), ketones (MCT), cytosolic NADH (shuttles).
- Output: ANT exports ATP; ~90% of body ATP; glucose 30–32 / palmitate 106.
- States: fed (storage flux), fasting (ketone export), exercise (density/signals).
- Failures: ischaemia, mtDNA disease, drug toxins (valproate, NRTIs, aminoglycosides), ageing.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Mitochondrial-toxicity counselling (NRTIs, valproate, aminoglycosides), ischaemia/reperfusion therapy, and metabolic-disease drug design target this power plant.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Assign TCA, β-oxidation, and ATP synthase to their mitochondrial compartments.
2. Why must the inner membrane be impermeable to protons?
3. Name three drugs/toxins with mitochondrial mechanisms of harm.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- The mitochondrion: fuel in, redox through, gradient across, ATP out.
- ANT and shuttles are the logistics layer.
- Failure = ischaemia, genes, or drugs — with predictable signatures.`,
      },
    ],
  },

  // ═══════════════ CLINICAL BIOCHEMISTRY ═══════════════

  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'clinical-biochemistry',
    courseId: 'bch-201',
    topicId: 'clinical-biochemistry',
    nodeType: 'topic',
    title: 'Clinical Biochemistry',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Clinical biochemistry** translates the course's chemistry into **laboratory medicine**: measuring metabolites, enzymes, and markers in body fluids to screen, diagnose, monitor, and prognose. This closing topic trains the reading habit — what does each number mean, what perturbs it, and what should the clinician (and pharmacist) do next.

**The interpretive frame for every analyte:**

1. **What is it?** (the molecule's biochemical identity and turnover).
2. **Where does it come from/go?** (production organ, excretion route).
3. **What moves its level?** (organ function, intake, cellular damage, hormonal state, drugs).
4. **What are the decision thresholds?** (reference range vs action limit — e.g. glucose 3.9–7.8 mmol/L vs the 4 mmol/L hypoglycaemia rule).

**Reading habits that separate competent from careless:**
- **Pattern over point:** one analyte rarely diagnoses; clusters do (ALT+AST+ALP+bilirubin tell a liver story; urea+creatinine+electrolytes a renal one).
- **Pre-analytical awareness:** haemolysis (↑K⁺, AST, LDH), stasis, biotin (immunoassay interference), timing (glucose fasting vs random), drugs as confounders.
- **Dynamic interpretation:** trends beat single values (creatinine trajectory in AKI; HbA1c trend).

**The four test panels this topic details:**
- **Blood glucose** — diabetes/hypoglycaemia interpretation (fasting/OGTT/HbA1c).
- **Lipid profile** — cardiovascular risk (TC/LDL/HDL/TG + non-HDL).
- **Liver panel** — injury vs function (transaminases/ALP/GGT/bilirubin/albumin).
- **Renal panel** — filtration/tubular function (urea/creatinine/eGFR/electrolytes).

**Pharmacy's clinical-biochemistry duties:** therapeutic drug monitoring, interaction-induced lab changes (statins/ALT, diuretics/K⁺, valproate/NH₃), adherence assessment (HbA1c as adherence proxy), and interpretation-literate counselling.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Clinical biochemistry = lab medicine: screen/diagnose/monitor via metabolites, enzymes, markers.
- Interpretive frame: identity → production/excretion → perturbers → thresholds.
- Pattern-over-point; pre-analytical confounders (haemolysis, biotin); trends over singles.
- Core panels: glucose, lipids, liver, renal.
- Pharmacy: TDM, interaction-lab changes, adherence proxies, counselling literacy.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every monitoring protocol (statin LFTs, diuretic U&Es, metformin eGFR, statin/TDM panels) is clinical biochemistry in practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the four-question interpretive frame for any analyte.
2. Why do patterns outperform single values?
3. Give three drug–laboratory interactions a pharmacist must anticipate.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Labs are chemistry made clinical.
- Read patterns, know confounders, watch trends.
- Four panels ahead: glucose, lipids, liver, kidney.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'biochemical-markers-and-their-clinical-significance',
    courseId: 'bch-201',
    topicId: 'clinical-biochemistry',
    nodeType: 'subtopic',
    title: 'Biochemical Markers and their Clinical Significance',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **biomarker** is an objectively measurable characteristic that indicates normal or pathological process or response to therapy. This lesson organises the marker families and what makes each clinically meaningful.

**Marker selection criteria (the "good marker" test):** sensitive (catches disease), specific (spares the healthy), organ-defined (localises), timely (rises/falls on useful timescales), and actionable (changes decisions).

**Families with signature examples:**

**1. Tissue-damage (leakage) enzymes:**
- **ALT/AST** — hepatocyte injury (ALT liver-specific; AST/ALT > 2 alcoholic).
- **CK-MB, troponin I/T** — myocardial necrosis (troponin's specificity/sensitivity made it the MI standard; kinetics: rise 3–6 h, peak 24 h, troponin lingers ~10 days).
- **CK-MM** — muscle/rhabdomyolysis; **CK-BB** brain.
- **ALP/GGT** — cholestasis/bone (GGT defines the source; bone-specific ALP in Paget's).
- **Amylase/lipase** — pancreatic injury (lipase more specific).

**2. Functional/organ-performance markers:**
- **Creatinine/eGFR, urea** — kidney filtration.
- **Albumin, PT/INR** — hepatic synthetic function.
- **HbA1c** — 3-month glycaemic memory; **TSH/fT4** — thyroid axis.

**3. Inflammation/acute-phase:**
- **CRP/ESR** — inflammation quantification (CRP's kinetics guide infection-vs-flare decisions); procalcitonin (bacterial sepsis).

**4. Cardiac-stress markers:** BNP/NT-proBNP (ventricular stretch — heart failure severity).

**5. Tumour markers (screening-limited, monitoring-strong):** PSA, CA-125, CEA, AFP, β-hCG.

**6. Nutritional markers:** ferritin/transferrin saturation (iron), 25-OH-vitamin D, B12/folate/MMA/homocysteine, prealbumin.

**7. Therapeutic/counselling markers:** HbA1c (adherence proxy), LDL-C (statin goal), INR (warfarin), trough levels (TDM — vancomycin/aminoglycosides).

**Kinetics as interpretation:** every marker has rise-peak-clear timing (troponin vs CK-MB vs LDH historically staged MI); persistence guides re-testing intervals.

**Pitfalls:** assay interference (biotin in troponin/TSH immunoassays!), haemolysis (K⁺/AST/LDH), macro-enzymes, reference-range vs decision-limit divergence (troponin's sex-specific cut-offs).

**Pharmacist duties:** anticipate drug-marker effects (statin→ALT/CK; diuretic→K⁺/Na⁺; valproate→NH₃; rifampicin→LFTs), time sampling around dosing (TDM troughs), and counsel on interference (biotin supplements before labs!).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Good marker: sensitive/specific/organ-defined/timely/actionable.
- Leakage enzymes: ALT/AST, troponin/CK-MB, CK-MM, ALP/GGT, amylase/lipase.
- Function markers: creatinine/eGFR, albumin/INR, HbA1c, TSH/fT4.
- Inflammation: CRP/procalcitonin; cardiac stretch: BNP/NT-proBNP.
- Kinetics (rise/peak/clear) drive timing of tests; pitfalls: biotin, haemolysis, macros.
- Pharmacy: drug-induced marker shifts + TDM timing + interference counselling.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Troponin/CK monitoring on statins, biotin-interference alerts, trough-level scheduling, and BNP-guided HF therapy are marker-applied pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the five criteria of a clinically useful marker.
2. Contrast troponin and CK-MB kinetics after MI.
3. Name three drugs that shift specific lab markers predictably.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Markers classify by source: damage, function, inflammation, tumour, nutrition, therapy.
- Kinetics time the draw; interference fools the assay.
- Pharmacists read markers through drug lenses.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'basic-interpretation-of-blood-glucose',
    courseId: 'bch-201',
    topicId: 'clinical-biochemistry',
    nodeType: 'subtopic',
    title: 'Basic Interpretation of Blood Glucose',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Blood glucose is the most frequently measured analyte in medicine — and the one whose interpretation spans biochemistry's insulin/glucagon story.

**Reference ranges (plasma venous):**
- **Fasting:** 3.9–5.5 mmol/L (70–100 mg/dL); **impaired fasting glucose** 5.6–6.9; **diabetes ≥ 7.0** (on two occasions).
- **2-h post-75 g OGTT:** < 7.8 normal; 7.8–11.0 impaired glucose tolerance; **≥ 11.1 diabetes**.
- **HbA1c:** < 5.7% normal; 5.7–6.4% pre-diabetes; **≥ 6.5% diabetes**; target usually < 7% (individualised).
- **Hypoglycaemia:** < 3.9 mmol/L (treatment threshold); < 3.0 severe.

**Hyperglycaemia interpretation (the diabetes ladder):**
- **Type 1:** autoimmune β-cell loss — young, lean, ketosis-prone, insulin-absolute.
- **Type 2:** insulin resistance + progressive secretory failure — metabolic syndrome, age-onset (now youth too).
- **Secondary:** steroids, Cushing's, acromegaly, pancreatogenic (type 3c), anti-psychotics.
- **Stress hyperglycaemia:** acute illness catecholamines/cortisol — interpret context.
- **Diagnosis tools:** fasting, OGTT, HbA1c (glycation memory — unreliable in haemoglobinopathy/anaemia/CKD), **autoantibodies/C-peptide** for type classification.

**Hypoglycaemia interpretation (Whipple's triad):** symptoms + low glucose + relief on correction. Causes ladder: **drugs first** (insulin/sulfonylureas — pharmacy's territory), critical illness, adrenal/pituitary failure, alcohol (NADH blocks gluconeogenesis), insulinoma (rare; endogenous hyperinsulinaemia workup: insulin/C-peptide/proinsulin/sulfonylurea screen), post-bariatric/nesidioblastosis.

**Pharmacological/patient factors in interpretation:**
- **Timing relative to meals/insulin** (fasting vs post-prandial vs random definitions).
- **Sample source:** arterial/capillary > venous post-meal; POC meters' variance; plasma vs whole-blood offsets.
- **Drugs shifting readings:** steroids, diuretics (thiazides), beta-blockers (mask adrenergic warning symptoms!), quinine/fluoroquinolones (dysglycaemia).

**Monitoring repertoire:** SMBG patterns, CGM (time-in-range), HbA1c (quarterly in treatment change), ketone testing (DKA risk; SGLT2i euglycaemic DKA counselling), GDM screening (24–28 wk OGTT).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fasting: 3.9–5.5 normal; ≥ 7.0 diabetes; OGTT 2-h ≥ 11.1; HbA1c ≥ 6.5%.
- Hypoglycaemia < 3.9 (treat); < 3.0 severe; Whipple's triad for diagnosis.
- Hyperglycaemia ladder: T1 (autoimmune/ketotic), T2 (resistance), secondary (steroids/Cushing), stress.
- Hypoglycaemia causes: drugs first (insulin/SU), alcohol, endocrine, insulinoma (C-peptide logic).
- Confounders: sample source/timing, HbA1c pitfalls (anaemia/CKD/Hb variants), beta-blocker masking.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Sulfonylurea hypoglycaemia counselling, steroid-glucose warnings, beta-blocker symptom masking, SGLT2i euglycaemic-DKA alerts, and HbA1c-adherence interpretation are glucose-panel pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the diagnostic thresholds (fasting, OGTT, HbA1c).
2. Why does C-peptide distinguish insulinoma from exogenous-insulin abuse?
3. How do beta-blockers complicate hypoglycaemia recognition?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glucose reading = context (timing/source) + thresholds + drug lens.
- Diabetes types differ biochemically; HbA1c is the memory test.
- Hypoglycaemia is drug-first thinking; Whipple frames it.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'basic-interpretation-of-lipid-profile',
    courseId: 'bch-201',
    topicId: 'clinical-biochemistry',
    nodeType: 'subtopic',
    title: 'Basic Interpretation of Lipid Profile',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **lipid profile** — total cholesterol (TC), LDL-C, HDL-C, triglycerides (TG) — translates lipoprotein metabolism into cardiovascular-risk arithmetic.

**Typical reference anchors (fasting preferred for TG):**
- **TC:** < 5.2 mmol/L desirable (risk scales continuously — no sharp line).
- **LDL-C:** < 3.0 general; **< 1.8 (or ≥ 50% reduction) for high-risk/secondary prevention**; < 1.4 extreme-risk (recent ACS with other factors, per ESC).
- **HDL-C:** > 1.0 (M) / > 1.2 (F) mmol/L protective-context marker.
- **TG:** < 1.7 desirable; **> 10 mmol/L pancreatitis risk** (urgent intervention); 2–10 hypertriglyceridaemia workup.
- **Non-HDL-C** (TC − HDL) captures atherogenic remnant burden — useful with non-fasting samples.

**Interpretive logic:**
- **LDL is the primary target** (causality proven; lower-longer-better); reports may give calculated LDL (Friedewald: TC − HDL − TG/2.2, invalid if TG > 4.5) or direct assay.
- **HDL is protective context** (flux matters more than number — CETP-inhibitor trials taught humility).
- **TG reflects VLDL/chylomicrons:** driven by obesity/alcohol/diabetes/renal/drugs (oestrogens, thiazides, steroids, protease inhibitors, isotretinoin); severe TG = pancreatitis + correct causes first.
- **Secondary causes to exclude before "primary" labels:** hypothyroidism (↑LDL), diabetes/insulin resistance (↑TG), nephrotic syndrome (↑ both), liver cholestasis, drugs.

**Risk integration:** scores (Framingham/SCORE2/QRISK) fold lipids with age/BP/smoking/diabetes — the lipid numbers are inputs, not verdicts; **Lp(a)** measured once lifetime for inherited risk.

**Treatment thresholds/action anchors:** lifestyle first (diet/TC-pattern, exercise, alcohol moderation); **statins by risk category** (ezetimibe/bempedoic acid add-ons; PCSK9 inhibitors for familial/extreme risk); TG management: fibrate/omega-3 for high-risk pancreatitis prevention + glycaemic/alcohol correction.

**Pharmacy practice points:** fasting vs non-fasting sampling (non-fasting fine except TG ≥ 4.5 investigation), statin adherence/monitoring (LFT baseline, CK if myalgia), drug-interaction checklists (CYP3A with simvastatin; fibrate–statin myopathy caution), and the ischaemic-risk framing of "good/bad cholesterol" counselling.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Panel: TC/LDL/HDL/TG (+ non-HDL, Lp(a) once lifetime).
- LDL = primary target (high-risk < 1.8; extreme < 1.4 mmol/L); HDL context; TG > 10 = pancreatitis alert.
- Friedewald LDL invalid with TG > 4.5; non-HDL useful non-fasting.
- Secondary causes: hypothyroid (LDL), diabetes/renal/alcohol/drugs (TG).
- Therapy: risk-score-first; statin → ezetimibe → PCSK9; TG: fibrate/omega-3 + cause correction.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Statin interaction screening, fibrate-statin caution, non-fasting interpretation guidance, and pancreatitis-risk TG escalation are lipid-panel pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Calculate LDL by Friedewald for TC 6.0, HDL 1.2, TG 2.0 mmol/L.
2. Which secondary causes raise LDL vs TG?
3. What TG level demands urgent action and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- LDL drives risk; TG flags pancreatitis; HDL frames context.
- Exclude secondary causes before labelling.
- Risk scores integrate; therapy steps are protocolised.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'basic-interpretation-of-liver-related-biochemical-tests',
    courseId: 'bch-201',
    topicId: 'clinical-biochemistry',
    nodeType: 'subtopic',
    title: 'Basic Interpretation of Liver-related Biochemical Tests',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The "liver function tests" (LFTs) actually mix **injury markers** and **function markers** — reading them as a pattern is the skill.

**The panel:**
- **ALT (alanine aminotransferase)** — hepatocyte cytosolic enzyme; the most liver-specific *injury* marker.
- **AST (aspartate aminotransferase)** — liver + heart/muscle/RBC; **AST:ALT ratio** — > 2 suggests alcohol-related; > 1 in cirrhosis (De Ritis).
- **ALP (alkaline phosphatase)** — biliary/cholestatic enzyme (also bone/placenta; GGT disambiguates).
- **GGT (γ-glutamyl transferase)** — biliary + alcohol/enzyme-induction marker (anticonvulsants raise it).
- **Bilirubin (total/conjugated)** — haemoglobin catabolism pigment: **unconjugated ↑** (haemolysis, Gilbert's — harmless UGT1A1 variant) vs **conjugated ↑** (hepatocellular injury, cholestasis — "direct" fraction).
- **Albumin, PT/INR** — *synthetic function* (long half-life albumin = chronic; quick PT = acute severity).
- **Urea (low side)** — end-stage synthesis loss marker.

**Pattern recognition (the clinical ladder):**
1. **Hepatocellular injury:** ALT/AST ≫ ALP — viral/drug hepatitis, ischaemia, NASH; ALT thousands = acute viral/drug/toxic (paracetamol!); AST≫ALT + macrocytosis + GGT↑ = alcohol story.
2. **Cholestatic:** ALP/GGT ≫ ALT + conjugated bilirubin — obstruction (stones/stricture/cancer) or intrahepatic cholestasis (drugs — co-amoxiclav, steroids, anabolic steroids; PBC/PSC).
3. **Isolated hyperbilirubinaemia:** unconjugated — haemolysis/Gilbert's (check blood film/reticulocytes); conjugated — Dubin–Johnson/Rotor (rare).
4. **Synthetic failure:** albumin ↓ + INR ↑ ± bilirubin ↑ — cirrhosis decompensation/acute failure (CTP/MELD scores fold these).
5. **Infiltrative:** ALP/GGT modest ↑ with otherwise quiet panel — metastases/granulomas/amyloid.

**Drug-liver interplay (pharmacist core):**
- **DILI patterns:** hepatocellular (paracetamol, isoniazid, statin-rare), cholestatic (co-amoxiclav, chlorpromazine), mixed; **Hy's law** (ALT > 3× ULN + bilirubin > 2×) signals serious DILI.
- **Paracetamol:** dose-dependent centrilobular necrosis; NAC antidote timeline (acetylcysteine refills glutathione).
- **Monitoring duties:** baseline LFTs for statins/isoniazid/methotrexate/azathioprine; alcohol counselling via GGT context; enzyme-induction flags (GGT).

**Confounds:** muscle injury (AST/CK rise — check CK), haemolysis (AST/bilirubin), pregnancy (ALP placental), bone disease (ALP — GGT normal).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Injury: ALT (specific), AST (ratio > 2 alcohol); Cholestasis: ALP+GGT + conjugated bilirubin.
- Bilirubin split: unconjugated (haemolysis/Gilbert) vs conjugated (hepatic/obstructive).
- Function: albumin (chronic) + PT/INR (acute).
- Patterns: hepatocellular / cholestatic / isolated bilirubin / synthetic failure / infiltrative.
- DILI: paracetamol (NAC!), Hy's law, monitoring lists; confounds: muscle/haemolysis/pregnancy/bone.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Statin/isoniazid/methotrexate LFT monitoring, paracetamol overdose NAC timelines, co-amoxiclav cholestatic counselling, and alcohol-GGT conversations are LFT pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Classify: ALT 850, ALP 120, INR 1.1 vs ALP 520, GGT 460, ALT 70 (with bilirubin patterns).
2. Why does PT/INR reflect acute synthetic function better than albumin?
3. State Hy's law and its significance.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- LFTs = injury (ALT/AST/ALP/GGT) + pigment (bilirubin split) + function (albumin/INR).
- Patterns diagnose; ratios point to alcohol/cholestasis.
- Drug-liver chemistry is the pharmacist's daily reading.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'basic-interpretation-of-renal-related-biochemical-tests',
    courseId: 'bch-201',
    topicId: 'clinical-biochemistry',
    nodeType: 'subtopic',
    title: 'Basic Interpretation of Renal-related Biochemical Tests',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Renal biochemistry reads **filtration, tubular function, electrolyte handling, and acid–base balance** — the panel every pharmacist scans before dosing renally-cleared drugs.

**The filtration markers:**
- **Creatinine** — muscle-creatinine turnover, freely filtered; **rise = falling GFR** (but lags ~24–48 h in AKI; influenced by muscle mass/age/sex/race — a muscular young man's "normal" is a frail elder's "poor").
- **Urea** — filtered + partially reabsorbed; rises with GFR fall *and* with catabolism/dehydration/GI bleeding/high-protein (interpretable only with creatinine context).
- **eGFR (CKD-EPI)** — creatinine-normalised GFR estimate: staging CKD — G1 ≥ 90 (with kidney-damage markers), G2 60–89, **G3a 45–59, G3b 30–44, G4 15–29, G5 < 15 (kidney failure)**; drug-dosing thresholds map onto stages (e.g. metformin caution < 45, avoid < 30; NOAC/digoxin/DOAC renally adjusted).
- **Cystatin C** — muscle-independent alternative eGFR marker.

**Electrolytes (the U&E backbone):**
- **Na⁺ (135–145):** hypo- (SIADH, diuretics, polydipsia; severe < 120 — seizure risk, slow correction to avoid osmotic demyelination) / hyper- (dehydration, diabetes insipidus).
- **K⁺ (3.5–5.0):** the pharmacist's钾 vigilance — ACEi/ARB/spironolactone/K-sparing + CKD = hyperkalaemia ladder (peaked T waves → pacing risk; management: calcium stabilise → insulin/dextrose shift → salbutamol → binders/dialysis); hypokalaemia (diuretics, vomiting, amphotericin — digoxin toxicity risk!).
- **Cl⁻/HCO₃⁻:** acid–base reading (HCO₃ low = metabolic acidosis — CKD/lactic/ketoacidosis; high = vomiting/diuretics).
- **Ca²⁺/PO₄³⁻/Mg²⁺:** CKD-MBD (PO₄ ↑, Ca ↓, PTH ↑) and refeeding context.

**Urine readouts:**
- **ACR/PCR (albumin/protein-creatinine ratio)** — kidney-damage marker: ACR ≥ 3 mg/mmol microalbuminuria (diabetic nephropathy's early flag; ACEi/ARB/SGLT2i indication).
- **Sediment/casts, osmolality, sodium (FENa)** — AKI pre-renal vs intrinsic discrimination.
- **Dipstick haematuria/proteinuria** — glomerular screening.

**AKI recognition:** creatinine rise ≥ 26 μmol/L/48 h or 1.5× baseline or urine < 0.5 mL/kg/h × 6 h (KDIGO); pharmacy duties: **nephrotoxin triage (NSAIDs, aminoglycosides, contrast, vancomycin), dose/interval adjustment, sick-day rules (SGLT2i/ACEi/diuretic pauses — "SADMANS" style lists)**.

**Pharmacy synthesis:** every renal panel scan asks — dose adjust? stop/reduce nephrotoxins? electrolyte-danger drug interactions? acid–base shifts affecting free drug fractions?`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Creatinine/eGFR stage CKD (G3a 45–59 → G5 < 15); dosing thresholds map to stages.
- Urea rises with GFR fall AND catabolism/dehydration/bleed — read with creatinine.
- K⁺ vigilance: ACEi/ARB/MRA + CKD hyperkalaemia; diuretics/vomiting hypokalaemia (digoxin risk).
- Na⁺: slow correction (osmotic demyelination); HCO₃ reads acid–base.
- ACR ≥ 3 mg/mmol = early nephropathy (ACEi/SGLT2i logic); KDIGO AKI criteria; sick-day lists.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Renal dose adjustment tables, hyperkalaemia-drug reviews, NSAID/contrast triage, and SADMANS sick-day counselling are renal-biochemistry pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Stage CKD by eGFR and name two drug classes needing adjustment at G3.
2. Why can a normal creatinine mask early AKI?
3. List four drugs/triggers in a hyperkalaemia review.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Filtration (creatinine/eGFR) + electrolytes + urine damage markers = the renal story.
- Trends and confounders (muscle) rule interpretation.
- Pharmacy's scan: dose, stop, interact, correct.`,
      },
    ],
  },
];
