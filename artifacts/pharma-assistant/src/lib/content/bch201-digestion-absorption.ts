import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 12: Digestion (4) + Absorption (7).
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic bases C; descriptive subtopics B.
 * NOTE: subtopic titles here intentionally preserve the curriculum's
 * lowercase forms for 'protein digestion' and 'Mechanisms of absorption'.
 */

export const bch201DigestionAbsorptionLessons: Lesson[] = [
  // ═══════════════ DIGESTION ═══════════════

  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'digestion',
    courseId: 'bch-201',
    topicId: 'digestion',
    nodeType: 'topic',
    title: 'Digestion',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Digestion** is the enzymatic disassembly of food's macromolecules — proteins, carbohydrates, fats, nucleic acids — into absorbable monomers. The design logic: big molecules cannot cross the intestinal epithelium, so the gut runs a **sequential hydrolysis programme** orchestrated along the tube, each compartment contributing specific enzymes at specific pH optima.

**The organ itinerary:**

- **Mouth** — salivary α-amylase starts starch (pH ~7); lingual lipase begins fat (relevant in infants); mastication raises surface area.
- **Stomach** — HCl (pH 1–2) denatures protein, activates pepsinogen → **pepsin**, kills microbes; no significant fat/carb digestion; chyme results.
- **Small intestine (the main event)** — pancreatic juice (bicarbonate neutralises acid; amylase, lipase + colipase, proteases, nucleases) plus bile (emulsification) and brush-border enzymes (disaccharidases, peptidases) complete hydrolysis to monomers.
- **Large intestine** — residual water/electrolytes; **gut microbiota ferment** undigested carbohydrate into short-chain fatty acids (butyrate — colonocyte fuel), vitamins K/B.

**Proteolytic protection:** the gut digests itself daily unless enzymes are secreted as **inactive zymogens** (pepsinogen, trypsinogen, chymotrypsinogen, procarboxypeptidases) — trypsin's activation of the cascade is the master switch (and acute pancreatitis is that switch flipped prematurely inside the pancreas).

**Clinical anchors:** lactase deficiency (lactose intolerance — brush-border enzyme, not a disease of digestion's grand machinery); pancreatic insufficiency (cystic fibrosis, chronic pancreatitis — steatorrhoea, creatorrhoea; pancreatic-enzyme replacement therapy); coeliac disease (villous atrophy → malabsorption of everything); bile obstruction (fat maldigestion — earlier lesson).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sequential hydrolysis: mouth (amylase) → stomach (pepsin at pH 1–2) → small intestine (pancreatic + brush-border enzymes).
- Pancreas supplies the heavy hitters: amylase, lipase+colipase, proteases, nucleases; bile emulsifies fat.
- Enzymes secreted as zymogens; trypsin activates the protease cascade.
- Microbiota ferment fibre → SCFAs (butyrate) + vitamins K/B.
- Clinical: lactase deficiency, pancreatic insufficiency (CF), coeliac, biliary obstruction.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Pancreatic-enzyme replacement (lipase/protease/amylase capsules), lactase supplements, PPI interactions with pH-dependent enzyme products, and antidiarrhoeal/oral-rehydration counselling are digestion-adjacent pharmacy practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Map the enzymes of each digestive compartment and their substrates.
2. Why are proteases secreted as zymogens, and what is the master activator?
3. Name three diseases causing fat maldigestion with mechanism.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Digestion = tube-organised hydrolysis; pH choreography.
- Stomach: acid + pepsin. Pancreas: the enzyme arsenal. Brush border: the finishers.
- Zymogens protect; trypsin commands.
- Bile emulsifies; microbiota ferment the leftovers.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'protein-digestion',
    courseId: 'bch-201',
    topicId: 'digestion',
    nodeType: 'subtopic',
    title: 'Protein digestion',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Dietary protein (50–100 g/day) plus endogenous protein (enzymes, mucin, shed cells — another 50–70 g) is dismantled by a **cascade of endopeptidases and exopeptidases** working at different pH and sequence specificities.

**Stomach — the acidic opener:**
- **Pepsinogen** (chief cells) → autocatalytically/acid-activated to **pepsin** at pH < 5 (optimum ~1.8–2).
- Pepsin is an **endopeptidase** preferring aromatic (Phe/Tyr/Trp) and Leu amino-terminal bonds; products: smaller polypeptides.
- Acid simultaneously denatures proteins (unfolds them for enzyme access) and kills microbes.

**Small intestine — the cascade completes:**

*Pancreatic endopeptidases (secreted as zymogens):*
- **Trypsinogen** → activated by **enterokinase (enteropeptidase)** on the duodenal brush border → **trypsin** (cleaves after Lys/Arg). Trypsin then activates chymotrypsinogen, proelastase, procarboxypeptidases, and even more trypsinogen (**autoactivation**) — and trypsin inhibitor (PSTI, and α1-antitrypsin in plasma) guards against premature activity.
- **Chymotrypsin** — cleaves after Phe/Tyr/Trp.
- **Elastase** — cleaves after small neutral residues.

*Pancreatic exopeptidases:*
- **Carboxypeptidase A/B** — trim from the C-terminus (A: hydrophobic residues; B: Lys/Arg).

*Brush-border aminopeptidases* — trim from the N-terminus; **dipeptidases** finish dipeptides to single amino acids.

**The product spectrum:** ~70% as free amino acids; ~30% as **di-/tripeptides** — which are themselves absorbed efficiently (PepT1 transporter — next topic) and hydrolysed intracellularly. Neonates additionally absorb small amounts of intact protein (IgG from colostrum via endocytosis).

**Clinical anchors:**
- **Acute pancreatitis** — premature intrapancreatic trypsin activation autodigests the gland.
- **Cystic fibrosis** — blocked pancreatic ducts → enzyme insufficiency → steatorrhoea/protein loss → PERT (pancreatic enzyme replacement therapy).
- **Achlorhydria/PPI overuse** — reduced pepsin activation slightly impairs protein digestion (usually compensated).
- **Antitrypsin deficiency** — unopposed neutrophil elastase (lung emphysema — same chemistry, different venue).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Stomach: HCl denatures + pepsin (aromatic-specific endopeptidase) at pH ~2.
- Enterokinase activates trypsinogen → trypsin — the cascade master (activates all others).
- Endopeptidases (trypsin/chymotrypsin/elastase) + exopeptidases (carboxypeptidases, aminopeptidases) + dipeptidases → amino acids + di/tripeptides.
- Products: ~70% free AA, ~30% di/tripeptides (PepT1 uptake).
- Clinical: pancreatitis (premature activation), CF (deficiency → PERT), α1-antitrypsin guard.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `PERT dosing with meals (lipase units per gram of fat), enteric-coated enzyme capsules + acid suppression, and pancreatitis-drug triggers (valproate, GLP-1 agonists) are protein-digestion pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace protein from stomach to free amino acids naming each enzyme class.
2. Why is enterokinase's activation of trypsin the cascade's master step?
3. Why do di/tripeptides matter for nutrition despite being intermediates?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Pepsin opens; pancreatic endo/exopeptidases main-course; brush border finishes.
- Trypsin commands the cascade (enterokinase lights it).
- Di/tripeptides are first-class absorbed citizens.
- Zymogen discipline prevents self-digestion.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'carbohydrate-digestion',
    courseId: 'bch-201',
    topicId: 'digestion',
    nodeType: 'subtopic',
    title: 'Carbohydrate Digestion',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Dietary carbohydrate is mostly **starch** (amylose + amylopectin), plus sucrose, lactose, and fibre. Humans hydrolyse starch and the common disaccharides but cannot digest fibre — which the microbiota ferment instead.

**Mouth:** **salivary α-amylase** hydrolyses α-1,4 bonds internally → dextrins/maltose/maltotriose (pH ~7; activity ends as stomach acid inactivates it).

**Small intestine — pancreatic α-amylase:** completes luminal starch digestion to the same products plus α-limit dextrins (the α-1,6 branch points survive — amylase cannot cut them).

**Brush border (the finishers — membrane-bound disaccharidases):**
- **α-dextrinase (isomaltase)** — cleaves α-1,6 branch points.
- **Glucoamylase (maltase)** — successive α-1,4 cleavage → glucose.
- **Sucrase** — sucrose → glucose + fructose (paired with isomaltase as the SI complex).
- **Lactase** — lactose → glucose + galactose (the only β-glycosidase; declines after weaning in most humans).

**Final products:** free **glucose, galactose, fructose** — absorbed (next topic) via SGLT1/GLUT5/GLUT2.

**Lactose intolerance — the classic brush-border lesson:** lactase-persistence (Northern European pastoral populations) vs post-weaning decline (majority of the world). Undigested lactose osmotically draws water (diarrhoea) and ferments in the colon (H₂, organic acids — cramps, flatulence). Management: lactose-reduced dairy, lactase enzyme supplements with meals, or calcium/vitamin-D substitution planning — direct pharmacist counselling territory.

**Fibre (undigested by human enzymes):** soluble fibre (pectin, gums) slows absorption/glycaemia; insoluble fibre (cellulose) adds bulk; **microbiota fermentation → short-chain fatty acids** (acetate, propionate, butyrate — colonocyte energy, slight caloric contribution ~2 kcal/g, and the metabolic basis of prebiotics).

**Clinical anchors:** sucrose-isomaltase deficiency (rare — sucrose/starch intolerance in infants); pancreatic insufficiency's carbohydrate component; coeliac's brush-border flattening (generalised malabsorption); α-glucosidase inhibitors (**acarbose**) deliberately delay digestion for diabetes control — the enzyme map turned into pharmacology.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Salivary → pancreatic α-amylase: α-1,4 cuts → dextrins/maltose.
- Brush border: isomaltase (α-1,6), glucoamylase, sucrase, lactase (β-only, declines post-weaning).
- End products: glucose, galactose, fructose.
- Lactose intolerance: osmotic diarrhoea + fermentation; supplements/lactose-free diets.
- Fibre resists → microbiota → SCFAs (butyrate); acarbose blocks α-glucosidases.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Lactase supplements, acarbose counselling (flatulence, take with first bite), prebiotic/probiotic claims evaluation, and infant formula choices (lactose vs lactose-free) are carbohydrate-digestion pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which bond does each brush-border enzyme cleave?
2. Why does lactose intolerance cause watery diarrhoea and flatulence?
3. How does acarbose exploit this digestion map therapeutically?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Amylase opens starch; four brush-border enzymes finish.
- Lactase is the fragile outlier (β-linkage, post-weaning decline).
- Fibre goes to the microbiota; SCFAs repay the colon.
- Acarbose = digestion slowed on purpose.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'lipid-digestion',
    courseId: 'bch-201',
    topicId: 'digestion',
    nodeType: 'subtopic',
    title: 'Lipid Digestion',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Lipid digestion is a **surface chemistry problem**: fat and water do not mix, so enzymes can only work where fat meets water — hence the emulsification-first design.

**Stomach:** lingual lipase (mouth, active in infants' milk-fat digestion) and gastric lipase contribute modestly (~10–20% of TAG hydrolysis); churning forms coarse droplets.

**Small intestine — the engineering:**

1. **Bile salts** (from gallbladder, conjugated with glycine/taurine) **emulsify** large droplets into 1 μm droplets — multiplying surface area ~1000×.
2. **Pancreatic lipase** (+ its obligatory **colipase** anchor, which bridges lipase to the bile-salt-covered droplet) hydrolyses TAG at the 1/3 positions → **2-monoacylglycerol + 2 free fatty acids**.
3. **Phospholipase A₂** (activated by trypsin) removes a fatty acid from phospholipids → lysophospholipid + FFA.
4. **Cholesterol esterase** frees cholesterol (and retinyl esters → retinol).
5. Products reassemble into **mixed micelles** (bile-shell, lipid core) — the delivery vehicles ferrying products to the enterocyte brush border.

**Efficiency checks:** lipase is water-soluble acting on water-insoluble substrate — colipase is the molecular handshake solving it; bile's recycling (enterohepatic circulation, ileal reabsorption) means a finite pool cycles 6–10× per meal.

**Clinical anchors:**
- **Bile deficiency** (obstruction, ileal disease/resection, cholestyramine therapy): fat reaches the colon undigested → **steatorrhoea** + fat-soluble-vitamin (A/D/E/K) deficiency.
- **Pancreatic insufficiency** (CF, chronic pancreatitis): lipase shortage — same phenotype; PERT supplies lipase with meals (dose by fat content; enteric-coated microspheres resist stomach acid).
- **Orlistat** — a deliberate lipase inhibitor (~⅓ of dietary fat excreted undigested; steatorrhoea is the "side effect" of mechanism).
- **Zollinger–Ellison/acid overproduction** — pancreatic lipase is acid-sensitive; excess acid inactivates it → maldigestion despite intact enzymes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Emulsify (bile salts) → hydrolyse (lipase+colipase → 2-MAG + 2 FFA; PLA₂; cholesterol esterase) → micellar ferry to brush border.
- Colipase anchors lipase to bile-salt-covered droplets.
- Mixed micelles deliver; enterohepatic circulation recycles bile 6–10×/meal.
- Bile or lipase deficiency → steatorrhoea + vitamins A/D/E/K loss.
- Orlistat = therapeutic lipase block; acid excess inactivates lipase.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `PERT dosing, orlistat counselling (fat-soluble-vitamin supplementation timing), cholestyramine spacing (binds other drugs!), and fat-soluble-vitamin interactions are lipid-digestion pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is emulsification essential before lipolysis?
2. What is colipase's role?
3. List three causes of steatorrhoea with their mechanism.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Surface area first (bile), hydrolysis second (lipase+colipase), micelles deliver.
- Bile recycles; obstruction starves the process.
- Orlistat weaponises the block; PERT replaces the enzyme.`,
      },
    ],
  },

  // ═══════════════ ABSORPTION ═══════════════

  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'absorption',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'topic',
    title: 'Absorption',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Absorption** moves digested monomers, water, and electrolytes **across the intestinal epithelium** into blood (or lymph). The small intestine is engineered for it: villi/microvilli multiply surface area ~600× (≈200 m²), transit time is tuned (3–5 h), and each nutrient has a dedicated transporter programme.

**The epithelial route:** brush border (microvilli) → enterocyte cytosol (processing — e.g. chylomicron assembly) → **basolateral exit** → capillaries of the villus → portal vein → liver. The exception: long-chain lipids bypass the portal vein via **lacteals/lymph** (chylomicrons too large for capillary fenestrations).

**Transport modes employed:** passive diffusion (water, small lipids), facilitated diffusion (GLUT2), secondary active transport (SGLT1, amino-acid symporters — Na⁺-powered), endocytosis (neonatal IgG; some peptides). Water follows osmotically (~9 L/day secreted+ingested; ~150 mL lost in stool — the arithmetic diarrhoea reverses).

**Clinical anchors:** coeliac (villous atrophy), Crohn's (ileal disease — B12/bile-salt loss), short-bowel syndrome (length-limited absorption; GLP-2 analogue teduglutide improves adaptation), and the **oral rehydration solution (ORS)** principle — SGLT1 keeps working in cholera because Na⁺-glucose cotransport survives the toxin; glucose+Na⁺ pull water along (osmotic follow-through) — one of medicine's greatest transport-based therapies.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Surface amplification: villi + microvilli ≈ 200 m²; 3–5 h transit.
- Route: brush border → enterocyte → basolateral exit → portal vein (most) or lymph (long-chain lipids).
- Modes: passive, facilitated (GLUT2), secondary active (SGLT1, AA symporters), endocytosis.
- Water follows osmotic gradients; ORS exploits SGLT1's cholera-proof cotransport.
- Clinical: coeliac, Crohn's (ileal B12/bile), short bowel (teduglutide).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `ORS formulation, malabsorption drug-dosing adjustments, B12 injections in ileal disease, and fat-soluble-vitamin replacement are absorption-territory pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace glucose, amino acid, and long-chain lipid from lumen to systemic circulation.
2. Why do chylomicrons travel via lymph rather than portal blood?
3. Explain ORS physiology using SGLT1.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- 200 m² of surface, 3–5 hours of time, transporters for every nutrient.
- Portal for water-soluble monomers; lymph for chylomicrons.
- ORS = transport physiology at its most life-saving.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'mechanisms-of-absorption',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'subtopic',
    title: 'Mechanisms of absorption',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The epithelium's toolkit for crossing: four mechanisms, each with its physics and its nutrient/drug users.

**1. Passive/transcellular diffusion** — through the lipid membrane; gradient-driven; Fick's-law governed (lipophilicity, size, ionisation). Users: water, small lipids, most oral drugs' initial crossing. **Paracellular diffusion** — through tight junctions (water, small ions; leaky in jejunum, tighter ileum/colon).

**2. Facilitated diffusion** — protein carriers down-gradient (saturable): **GLUT2** basolateral glucose exit (and apical recruitment at high luminal glucose — the "mass-action overflow" route), **GLUT5** apical fructose entry.

**3. Secondary active transport (Na⁺-powered)** — the intestine's speciality:
- **SGLT1** (apical): 2 Na⁺ + 1 glucose/galactose in — cholera-proof (ORS logic).
- **Na⁺-amino-acid symporters** (several specificity classes: neutral/basic/acidic/iminoglycine) apically.
- **Na⁺-bile-salt cotransporter (ASBT)** apically in ileum (enterohepatic recycling).
- **Na⁺/H⁺ exchanger (NHE3)** — pH/volume regulation.
- Energy source: the Na⁺ gradient maintained by basolateral **Na⁺/K⁺-ATPase** — every apical symporter is a hidden ATP story.

**4. Endocytosis/transcytosis** — neonatal FcRn-mediated IgG (colostrum), M-cell sampling at Peyer's patches (antigen surveillance; oral-vaccine design), some nanoparticle routes.

**Water/electrolytes:** follows osmosis from Na⁺/glucose cotransport (absorptive) vs Cl⁻ secretion (cholera toxin's CFTR-activating secretory diarrhoea — the therapy is absorptive cotransport, not antisecretory!).

**Segment specialisation:** duodenum/jejunum — iron/calcium/most nutrients; **ileum** — B12-IF (cubilin receptors), bile salts (ASBT); colon — SCFAs (MCT/SMCT), water/electrolytes.

**Pharmacy hooks:** drug absorption integrates these same mechanisms (diffusion + efflux P-gp + metabolism CYP3A in enterocytes — the "absorption barrier trio"); grapefruit juice (CYP3A inhibition) and P-gp interactions are enterocyte pharmacology.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four mechanisms: transcellular/paracellular diffusion, facilitated (GLUT2/5), secondary active (SGLT1, AA symporters, ASBT, NHE3), endocytosis/transcytosis.
- Na⁺/K⁺-ATPase powers every apical symporter via the Na⁺ gradient.
- Segment map: duodenum Fe/Ca; ileum B12-IF + bile salts; colon SCFA/water.
- Cholera = secretory (CFTR); ORS = absorptive cotransport rescue.
- Drug absorption barrier trio: diffusion + CYP3A + P-gp.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Grapefruit–CYP3A interactions, P-gp substrates/inhibitors, ORS composition, and B12 replacement in ileal disease are mechanism-based pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Classify fructose, galactose, and bile-salt absorption by mechanism.
2. Why does cholera cause secretory diarrhoea, and why does ORS still work?
3. Name the ileum's two signature absorption duties.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Diffuse, facilitate, cotransport, or vesicle — four crossing styles.
- Na⁺ gradient is the intestine's currency.
- Segments specialise; ileum owns B12 and bile salts.
- The enterocyte is also a drug-metabolism barrier (CYP3A/P-gp).`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'absorption-of-carbohydrates',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'subtopic',
    title: 'Absorption of Carbohydrates',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Three monosaccharides arrive at the brush border — glucose, galactose, fructose — and each takes its own road.

**Glucose & galactose (active, Na⁺-coupled):**
- **Apical entry: SGLT1** — 2 Na⁺ + 1 monosaccharide per cycle; secondary active; saturable; galactose shares the same transporter (milk sugar's road).
- **Basolateral exit: GLUT2** — facilitated diffusion down the sugar's new gradient; GLUT2 also appears apically at high luminal glucose (post-meal overflow).
- The Na⁺ that entered is expelled by the **basolateral Na⁺/K⁺-ATPase**, keeping the gradient charged — the energy chain in one picture.
- **Clinical:** glucose–galactose malabsorption (SGLT1 mutation — treat with fructose-based carbohydrates!); ORS (glucose+Na⁺ deliberately loaded).

**Fructose (passive, facilitated):**
- **Apical entry: GLUT5** — fructose-specific facilitated diffusion; **no Na⁺, no ATP** — slower, gradient-limited.
- **Basolateral exit: GLUT2** (shares with glucose).
- **Clinical:** fructose malabsorption (GLUT5 capacity limited → large fructose loads osmotic/fermentative symptoms — "fructose intolerance" of the malabsorption type, distinct from hereditary fructose intolerance/ALDOB deficiency which is a *metabolic* block); high-fructose-corn-syrup relevance.

**Post-absorption traffic:** portal vein → liver. Hepatic handling: glucose (~⅓ stored as glycogen, ⅓ oxidised, ⅓ converted to fat/lactate — the Randle/Salvador rules of flux); galactose → glucose (Leloir pathway: GalK, GalPUT — **galactosaemia** is GalPUT deficiency); fructose → fructose-1-P (fructokinase) → aldolase B cleavage (**hereditary fructose intolerance** = aldolase B deficiency — hypoglycaemia/vomiting on fructose; avoid fructose/sucrose/sorbitol).

**Glycaemic considerations:** SGLT1's active route makes glucose/galactose fast/rate-limiting-by-transport; fructose's passive route is slower/lower glycaemic impact but hepatic-load-heavy — nutrition counselling's carbohydrate nuance.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Glucose/galactose: SGLT1 apical (2 Na⁺ cotransport) → GLUT2 basolateral; Na⁺/K⁺-ATPase recharges.
- Fructose: GLUT5 apical (facilitated) → GLUT2 exit; no energy, capacity-limited.
- Portal delivery: liver stores/oxidises/converts; galactose via Leloir (GalPUT — galactosaemia); fructose via fructokinase/aldolase B (HFI).
- SGLT1 mutation → glucose-galactose malabsorption (fructose-based feeding rescues).
- ORS and SGLT2i are the pathway's pharma icons.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Galactosaemia formulas (lactose-free), HFI's fructose/sorbitol avoidance list, SGLT2 inhibitors, and ORS composition are carbohydrate-absorption pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast SGLT1 and GLUT5 routes in mechanism and capacity.
2. Why must galactosaemia infants avoid lactose?
3. What distinguishes fructose malabsorption from hereditary fructose intolerance?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Active (SGLT1) for glucose/galactose; passive (GLUT5) for fructose.
- Liver converts galactose→glucose; fructose loads hepatically.
- Genetic blocks map onto each route.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'absorption-of-amino-acids-peptides',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'subtopic',
    title: 'Absorption of Amino Acids/Peptides',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Protein's absorbed forms are free amino acids (~70%) and di-/tripeptides (~30%) — two parallel systems, both Na⁺-flavoured.

**Free amino acids — the symporter families (apical, Na⁺-coupled mostly):**

| Specificity class | Transporter | Notes |
|---|---|---|
| Neutral | B⁰AT1 (with EAAT-style partners) | most AAs; cystinuria's rBAT/b0,+ partners handle Cys/neutral basics |
| Basic + cystine | b⁰,+AT/rBAT | **cystinuria** defect → kidney stones (dibasic + cystine) |
| Acidic | EAAT3 (EAAC1) | Glu/Asp; Na⁺ + H⁺ dependent |
| Imino/glycine | PAT1/IMINO | proline/hydroxyproline |
| β-amino acids | TauT | taurine/β-alanine |

- **Basolateral exit:** exchange transporters (LAT2/4F2hc — antiport keeping gradients) + Na⁺-independent uniporters; **Hartnup disorder** (neutral-AA transporter defect) → pellagra-like tryptophan loss (niacin supplementation rescues).
- **Special cases:** glutamine is the enterocyte's own fuel (oxidised locally, ~30% of absorbed Gln never reaches portal blood as Gln); arginine/citrulline gut-kidney axis for NO.

**Di-/tripeptides — the PepT1 system:**
- **PepT1 (SLC15A1)** — apical **H⁺-coupled** cotransporter; extraordinarily broad substrate range (any di-/tri-peptide — 400+ combinations, all stereoselective); driven by the apical **Na⁺/H⁺ exchanger's** proton gradient.
- Intracellular **cytosolic peptidases** finish to free amino acids before basolateral exit.
- **Pharmaceutical consequence:** PepT1's promiscuity is exploited — **valacyclovir** (aciclovir's L-valyl ester) and some ACE inhibitors/β-lactams ride PepT1 for enhanced oral absorption — prodrug design on a nutrient transporter.
- Neonatal protein absorption additionally uses minimal intact-protein endocytosis (IgG transfer — species-unique persistence varies).

**Whole-body significance:** nitrogen balance depends on this efficiency; ileostomy/short-bowel patients lose protein-N; Burns/sepsis patients need formula design (glutamine-enriched, BCAA-tilted) built on this transport map.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- AA classes each have symporters (neutral/basic+ cystine/acidic/imino); cystinuria = b⁰,+AT/rBAT; Hartnup = neutral AA (Trp → pellagra-like).
- PepT1: H⁺-coupled di/tripeptide cotransport, huge substrate breadth; cytosolic peptidases finish.
- Valacyclovir/β-lactams/ACE-i exploit PepT1 (prodrug logic).
- Glutamine partly fuels the enterocyte itself.
- Basolateral exit via exchange/uniporters to portal blood.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Valacyclovir's design, cystinuria stone counselling (hydration/alkalinisation), Hartnup's niacin supplementation, and enteral formulas are AA-absorption pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four amino-acid symporter classes and one disease each (where one exists).
2. How does PepT1 achieve both broad specificity and energy coupling?
3. Why does valacyclovir absorb better than aciclovir?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- AAs ride class-specific Na⁺ symporters; peptides ride promiscuous PepT1.
- Transporter genetics = cystinuria/Hartnup.
- Prodrug design borrows PepT1.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'absorption-of-lipids',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'subtopic',
    title: 'Absorption of Lipids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Lipid absorption is the **packaging story**: micelles deliver, enterocytes re-synthesise, chylomicrons export — the only major nutrient whose absorbed form travels by **lymph** first.

**Micellar delivery:** mixed micelles (bile-salt shell; 2-MAG/FFA/cholesterol/lysophospholipid cores) ferry products through the unstirred water layer to the brush border; lipids diffuse across the apical membrane (passive + some facilitated protein components: CD36, FATP4).

**Inside the enterocyte — the re-synthesis line (smooth ER):**
1. Fatty acids → acyl-CoA (fatty acyl-CoA synthetase).
2. **TAG re-assembly** via the monoacylglycerol pathway (2-MAG + acyl-CoA → TAG) — the dominant intestinal route.
3. Cholesterol re-esterified (ACAT); phospholipids head the surface.
4. Apolipoprotein **B-48** synthesised (intestine-specific truncation via RNA editing of APOB mRNA).
5. Assembly → **chylomicrons** (TAG/cholesteryl-ester core; phospholipid/unesterified-cholesterol/apoB-48 surface; apoA-I added) in the Golgi.
6. Exocytosis → **lacteals** (lymphatics) → thoracic duct → subclavian vein — bypassing the portal vein (too large for capillary fenestrations; also why first-pass metabolism is skipped for chylomicron cargo).

**Chain-length fork:** short/medium-chain FAs (≤ C12 — dairy/MCT products) skip the whole assembly: directly albumin-bound → **portal vein** → liver. The basis of **MCT oil therapy** in chylomicron-assembly failure (**abetalipoproteinaemia**, chylomicron-retention disease) and fat malabsorption states.

**Bile-salt economy:** bile salts are *not* absorbed with lipids — they remain in the lumen, travel to the ileum, and reabsorb via ASBT (enterohepatic circulation; ~95% recycled). Cholestyramine binds them (forcing hepatic synthesis from cholesterol — lipid-lowering); ileal resection depletes the pool (bile-salt diarrhoea).

**Blood clearance:** LPL (adipose/muscle capillaries; apoC-II activated) strips TAG → chylomicron remnants → liver (apoE/LRP). Fat-soluble vitamins ride along (A/D/E/K — deficiency risk in any block).

**Clinical anchors:** abetalipoproteinaemia (MTTP defect — no chylomicrons; acanthocytes, fat-soluble-vitamin loss; MCT rescue), pancreatic/bile deficiency states (previous lessons), and orlistat upstream.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Micelles deliver → enterocyte re-synthesises TAG (MAG pathway) + cholesteryl esters → apoB-48 chylomicrons → lymph (lacteals) → blood.
- Short/medium-chain FAs: albumin → portal vein directly (MCT therapy logic).
- Bile salts recycled at the ileum (ASBT); cholestyramine blocks; resection depletes.
- LPL clears chylomicron TAG; remnants → liver.
- Fat-soluble vitamins ride chylomicrons — deficiency follows any block.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `MCT oil prescriptions, cholestyramine drug-spacing, abetalipoproteinaemia's vitamin E/A regimes, and fat-soluble-vitamin timing with fat-containing meals are lipid-absorption pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Trace dietary TAG from micelle to systemic blood, naming each station.
2. Why do medium-chain triglycerides bypass the lymph?
3. How does cholestyramine lower LDL via this pathway?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Deliver (micelle) → rebuild (TAG/B-48) → ship (chylomicron/lymph).
- Chain length decides route: long = lymph, medium = portal.
- Bile salts recycle; the pool is sacred.
- Chylomicrons carry vitamins as well as fat.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'basic-mechanisms-of-intestinal-absorption',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'subtopic',
    title: 'Basic Mechanisms of Intestinal Absorption',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A consolidating view of the **generic transport mechanisms** the intestine employs — the "physics layer" beneath nutrient-specific routes, plus the control systems that pace them.

**The four basic mechanisms (revisited as a system):**

1. **Diffusion (transcellular/paracellular):** gradient-driven; lipophilicity/size/ionisation decide; tight junctions admit water/small ions (leaky jejunum → tighter ileum).
2. **Carrier-mediated facilitated diffusion:** GLUT2/GLUT5-style; saturable, stereospecific, no ATP.
3. **Active transport (primary + secondary):** Na⁺/K⁺-ATPase is the battery; every Na⁺-symporter (SGLT1, AA classes, ASBT, NHE3) draws on it; primary ATPases also run locally (Ca²⁺-ATPase for calcium exit; H⁺/K⁺ for pH homeostasis).
4. **Vesicular transport:** endocytosis (neonatal IgG, M-cell sampling) and basolateral exocytosis (chylomicron export!, lipoprotein assembly shipment).

**Regulatory overlays:**

- **Enteric nervous system + hormones:** CCK (gallbladder/enzyme release; slows gastric emptying), secretin (bicarbonate), **GLP-1/GLP-2** (incretin axis: GLP-1 slows emptying/insulinotropism — the DPP-4/GLP-1 drug class; GLP-2 grows mucosa — teduglutide for short bowel).
- **Blood flow:** villus countercurrent oxygen exchange (villus-tip hypoxia susceptibility in low-flow states — ischaemic bowel's crypt-villus gradient).
- **Circadian/feeding rhythms:** transporter expression oscillates (SGLT1 induction by luminal sugar).
- **Adaptation:** resection/feeding changes transporter/villus architecture (GLP-2-driven; the basis of intestinal-rehabilitation programmes).

**Barrier functions (absorption's gatekeepers):** mucus layer, unstirred water layer, **CYP3A4 metabolic shielding** (enterocyte oxidase), **P-gp efflux** (pumps xenobiotics back), tight-junction regulation (zonulin signalling; coeliac's permeability changes). Drug absorption = diffusion vs this triple gate.

**Water/electrolyte summary:** net ~9 L handled/day; absorption is Na⁺-glucose-coupled (small bowel) and electroneutral Na⁺-H⁺/Cl⁻-HCO₃⁻ exchange (colon); secretion is Cl⁻-driven (CFTR; cholera's hijack). ORS works because the Na⁺-glucose machinery survives all toxins.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four mechanisms: diffusion (cell/paracellular), facilitated (GLUT), active (Na⁺-battery; ATPases), vesicular (IgG, chylomicron export).
- Hormonal pacing: CCK/secretin/GLP-1 (emptying/insulin)/GLP-2 (mucosal growth — teduglutide).
- Barrier trio: mucus/unstirred layer + CYP3A + P-gp gate drug absorption.
- Water follows Na⁺-glucose (small bowel) / electroneutral exchange (colon); secretion via CFTR.
- Adaptation (GLP-2) remakes absorptive capacity after resection.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `GLP-1/DPP-4 therapy, teduglutide, grapefruit/CYP3A and P-gp interactions, and ORS design are mechanism-layer pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four mechanisms with one nutrient and one drug example each.
2. Why is the Na⁺/K⁺-ATPase called the intestine's battery?
3. What are the enterocyte's three drug-barrier systems?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Physics: diffuse/facilitate/pump/vesicle; control: hormones/flow/rhythms.
- Na⁺ gradient is central; CYP3A+P-gp are the drug gates.
- GLP-2 grows gut; GLP-1 slows it — both drug classes.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'protein-transport',
    courseId: 'bch-201',
    topicId: 'absorption',
    nodeType: 'subtopic',
    title: 'Protein Transport',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `"Protein transport" reads two ways: (1) how absorbed nitrogen reaches the body's protein economy, and (2) how intact proteins occasionally cross the gut — both covered here.

**Route 1 — post-absorptive nitrogen traffic:**

- Portal delivery: absorbed amino acids reach the liver first — the liver extracts a large share (especially glutamate/aspartate/glutamine — partly burned, partly converted to urea precursors), and distributes the rest systemically.
- **Plasma pools:** free amino acids (~2 mmol/L total) exchange with the intracellular pool (muscle holds ~80% of free AA); transport into cells uses the same specificity-classed carriers (Na⁺-dependent and exchange systems — LAT1/4F2hc carrying large neutral AAs including **levodopa and many drugs**!).
- **Distribution logic:** muscle exports alanine/glutamine (the nitrogen shuttles); liver imports for urea/gluconeogenesis; kidney takes glutamine for acid buffering — the inter-organ nitrogen economy taught earlier, here with its transport plumbing.
- **Blood–brain barrier:** large neutral amino-acid transporter (LAT1) gates Trp/Tyr/Leu and drugs (levodopa/carbidopa competition; tryptophan's serotonin-link nutritional psychology).

**Route 2 — intact-protein crossing (special cases):**

- **Neonatal FcRn-mediated IgG transfer** (rodents/ungulates prominent; humans acquire most IgG *in utero* via placental FcRn) — colostral IgG aids via local mucosal action.
- **M-cell transcytosis** at Peyer's patches — antigen sampling (oral vaccines, e.g. oral polio/Sabin logic; some pathogens hijack: *Salmonella, Yersinia*).
- **Pathological leakage:** increased permeability (coeliac, Crohn's, burns, neonatal immaturity) admits food antigens — the hypothesised substrate of food allergy sensitisation.
- **Enzyme/peptide drugs do NOT absorb intact** — insulin, growth hormone, GLP-1 agonists must be injected (or engineered: semaglutide's oral formulation uses absorption enhancer SNAC against the barrier — a modern exception proving the rule).

**Clinical anchors:** cystinuria/Hartnup (transporter genetics), lysinuric protein intolerance (cationic-AA transport — protein aversion, pulmonary complications), levodopa-protein meal competition (dosing advice: take on empty stomach; protein-redistribution diets in advanced Parkinson's).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Portal-first: liver extracts Glu/Asp/Gln share; muscle holds ~80% of free-AA pool.
- Inter-organ shuttles: alanine/glutamine out of muscle; glutamine to kidney/immune.
- LAT1 (large-neutral) gates BBB passage — levodopa/drug competition.
- Intact-protein crossing: neonatal FcRn (species-variable), M-cell transcytosis, pathological permeability.
- Peptide drugs don't absorb; semaglutide-oral (SNAC) is the engineered exception.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Levodopa/protein-meal timing, oral-peptide formulation science, and amino-aciduria disorder management are protein-transport pharmacy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the liver see absorbed amino acids first, and what does it do with them?
2. How does LAT1 create a levodopa–protein interaction?
3. Name two special routes by which intact protein crosses the gut.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Nitrogen: portal → liver → inter-organ shuttles; BBB gates via LAT1.
- Intact proteins: neonatal IgG, M-cells, or pathology — not a normal route.
- Peptide drugs inject; oral semaglutide engineers an exception.`,
      },
    ],
  },
];
