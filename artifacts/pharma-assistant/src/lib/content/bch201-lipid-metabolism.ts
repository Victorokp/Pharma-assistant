import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 5: Lipid/Fat Metabolism.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; pathway overview subtopics (Beta-Oxidation, Ketone Bodies,
 * Cholesterol, Lipoproteins) A; descriptive/mechanistic subtopics B.
 */

export const bch201LipidMetabolismLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'lipid-metabolism-topic',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'topic',
    title: 'Lipid/Fat Metabolism',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Lipid metabolism manages the body's most energy-dense fuel. One gram of fat yields about 9 kcal — more than twice carbohydrate or protein — and it is stored dry, without water, making triglyceride in adipose tissue the ideal long-term energy reserve: a 70 kg adult carries roughly 10–15 kg of fat, enough for weeks of fasting, compared with <1 day of glycogen.

The topic follows fat through four movements. **Arrival**: dietary fat is emulsified by bile, digested by pancreatic lipase, and shipped as chylomicrons. **Storage**: adipose tissue re-esterifies fatty acids into triglyceride; insulin drives this in the fed state. **Mobilisation**: in fasting, adrenaline/glucagon activate lipolysis, releasing fatty acids and glycerol into blood. **Use**: tissues oxidise fatty acids by **beta-oxidation** to acetyl-CoA (the liver also makes **ketone bodies** when acetyl-CoA floods in), while glycerol feeds gluconeogenesis.

Fat has other destinies besides fuel: fatty acids build membrane phospholipids, eicosanoids (prostaglandins), and — from acetyl-CoA — **cholesterol**, the parent of bile acids, vitamin D, and steroid hormones. Because lipids are not water-soluble, the blood needs **lipoproteins** to carry them; their handling (chylomicrons, VLDL, LDL, HDL) is both the physiology of lipid transport and the pharmacology of statins and fibrates.

Clinically this topic explains ketosis (fasting, ketogenic diets, diabetic ketoacidosis), fatty liver (excess delivery or impaired export), and hyperlipidaemia — the metabolic backdrop of cardiovascular disease.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fat = 9 kcal/g, stored anhydrous in adipose; weeks of reserve vs <1 day of glycogen.
- Cycle: dietary fat → chylomicrons → storage; fasting → lipolysis → β-oxidation.
- Insulin drives storage; adrenaline/glucagon drive mobilisation.
- β-oxidation: fatty acid → acetyl-CoA; liver overflow → ketone bodies.
- Glycerol → gluconeogenesis; acetyl-CoA → cholesterol → bile acids, steroid hormones.
- Lipoproteins transport insoluble lipids; LDL/HDL balance underlies atherosclerosis risk.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Statins block HMG-CoA reductase (the committed cholesterol-synthesis step); fibrates activate lipoprotein lipase via PPAR-α; orlistat blocks pancreatic lipase; niacin suppresses lipolysis. Each drug acts on a step taught in this topic — and each side effect (myopathy with statins, GI steatorrhoea with orlistat) is the blocked pathway made visible.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is fat a superior long-term energy store compared with glycogen?
2. Trace dietary triglyceride from the intestinal lumen to adipose storage.
3. What happens to fatty acids and glycerol released during fasting?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Fat: dense, dry, long-term fuel; adipose is the reservoir.
- Fed: store (insulin). Fasting: mobilise (glucagon/adrenaline) → β-oxidation → acetyl-CoA → ketones (liver).
- Glycerol → glucose; acetyl-CoA → cholesterol → bile acids/hormones.
- Lipoproteins carry lipids; LDL/HDL define cardiovascular risk and statin practice.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'digestion-and-absorption-of-lipids',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Digestion and Absorption of Lipids',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Dietary fat is mostly **triglyceride**, plus cholesterol, phospholipids, and fat-soluble vitamins — all insoluble in water. Their digestion and absorption is therefore a problem of *emulsification* first, *hydrolysis* second, and *packaging* third.

**Mouth and stomach** contribute little: lingual lipase starts tag-end hydrolysis (significant in infants, whose milk-fat globules it handles), and gastric churning forms a coarse emulsion.

**Small intestine — the main event.** Bile salts from the gallbladder emulsify fat droplets into micelles, increasing surface area enormously. **Pancreatic lipase**, held at the droplet surface by **colipase**, hydrolyses triglyceride at positions 1 and 3 → **2-monoacylglycerol + 2 free fatty acids**. **Phospholipase A2** removes a fatty acid from phospholipids; **cholesterol esterase** frees cholesterol and retinyl esters.

**Absorption** occurs at the enterocyte brush border: micelles ferry the products (monoacylglycerol, fatty acids, cholesterol) to the membrane, which they cross by diffusion. Inside the cell, two roads diverge. **Short- and medium-chain fatty acids** (≤ C12) pass straight into the portal vein bound to albumin — this is the route used by medium-chain triglyceride (MCT) preparations in malabsorption. **Long-chain fatty acids** are re-esterified into triglyceride, combined with cholesterol, phospholipid, and **apolipoprotein B-48**, and packaged into **chylomicrons**, which enter lymphatic lacteals (bypassing the portal vein) and reach blood via the thoracic duct.

Blood handling: chylomicrons deliver triglyceride to adipose and muscle through **lipoprotein lipase (LPL)**, activated by apolipoprotein C-II on the chylomicron surface. Remnants are taken up by the liver — completing the journey.

Bile's role explains clinical observations: obstruction or ileal disease (no bile salts) → fat malabsorption → **steatorrhoea** (bulky, pale, floating stools) and loss of fat-soluble vitamins A, D, E, K.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Bile salts emulsify; pancreatic lipase (+ colipase) splits TAG → 2-MAG + 2 FFA.
- Phospholipase A2 and cholesterol esterase handle phospholipids and cholesteryl esters.
- Micelles deliver products to enterocytes; absorption is passive diffusion.
- Short/medium-chain FA → portal blood on albumin; long-chain FA → chylomicrons → lymph.
- Chylomicrons carry apoB-48 and apoC-II (activates lipoprotein lipase).
- Bile deficiency → steatorrhoea + fat-soluble vitamin deficiency.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Orlistat inhibits pancreatic lipase — undigested triglyceride passes in stool (its side effects *are* the blocked pathway). Bile-salt sequestrants (cholestyramine) interrupt enterohepatic recycling to lower cholesterol but can worsen fat/vitamin malabsorption. Fat-soluble vitamins and some drugs (griseofulvin, certain HIV protease inhibitors) need dietary fat for absorption — pharmacists advise taking them with meals.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the roles of bile salts, pancreatic lipase, and colipase in fat digestion.
2. Contrast the absorptive routes of short/medium-chain and long-chain fatty acids.
3. A patient with obstructive jaundice develops bleeding tendency — which vitamin deficiency and mechanism?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Emulsify (bile) → hydrolyse (lipase → MAG + FFA) → micellar delivery → enterocyte.
- Short chains: portal blood. Long chains: re-esterified → chylomicrons → lymph.
- LPL in capillaries delivers TAG to tissues; remnants go to liver.
- No bile → steatorrhoea and vitamins A/D/E/K loss.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'fatty-acid-activation',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Fatty Acid Activation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Fatty acids released by lipolysis cannot be burned until they are **activated** — converted into a form the oxidative machinery recognises and can transport. Activation is the attachment of the fatty acid to **coenzyme A**, forming a **fatty acyl-CoA thioester**.

$$\\text{Fatty acid} + \\text{CoA-SH} + \\text{ATP} \\xrightarrow{\\text{acyl-CoA synthetase (thiokinase)}} \\text{Fatty acyl-CoA} + \\text{AMP} + \\text{PP}_i$$

Note the cost carefully: ATP is split to **AMP + PPᵢ** — *two* high-energy phosphate bonds are spent (PPᵢ hydrolysis drives the reaction forward). Activation therefore costs the equivalent of **2 ATP**, a sum every β-oxidation tally must include.

The reaction occurs on the **outer mitochondrial membrane** (and peroxisomes for very-long-chain fatty acids). But the β-oxidation enzymes live inside the **mitochondrial matrix**, and fatty acyl-CoA cannot cross the inner membrane. The solution is the **carnitine shuttle**:

1. **Carnitine acyltransferase I (CAT-I / CPT-1)** on the outer membrane swaps CoA for **carnitine** → acyl-carnitine. This is the **rate-limiting, committed step** of fatty acid oxidation.
2. A **translocase** carries acyl-carnitine across the inner membrane in exchange for free carnitine.
3. **Carnitine acyltransferase II (CAT-II)** on the matrix side regenerates fatty acyl-CoA and returns carnitine.

**Regulation is elegant:** **malonyl-CoA** — the first committed intermediate of fatty acid *synthesis* — potently inhibits CAT-I. When the cell is building fat, oxidation is simultaneously switched off. Insulin (fed state) raises malonyl-CoA; glucagon/adrenaline (fasting) lower it and unleash the shuttle.

**Clinical note:** primary carnitine deficiency or CAT-I defects impair fat oxidation → hypoketotic hypoglycaemia and muscle weakness on fasting. Secondary carnitine loss occurs in haemodialysis and with valproate therapy (valproyl-CoA depletes carnitine pools — one mechanism of valproate hepatotoxicity and hyperammonaemia).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Activation: FA + CoA + ATP → acyl-CoA + AMP + PPᵢ = cost of 2 ATP equivalents.
- Enzyme: acyl-CoA synthetase (thiokinase), outer mitochondrial membrane.
- Carnitine shuttle (CAT-I → translocase → CAT-II) crosses the inner membrane.
- CAT-I is rate-limiting and inhibited by malonyl-CoA (synthesis ↔ oxidation switch).
- Carnitine deficiency → hypoketotic hypoglycaemia; valproate depletes carnitine.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Valproate toxicity counselling includes carnitine depletion — L-carnitine is given in acute overdose. Etomoxir (experimental CAT-I inhibitor) illustrates the shuttle's importance: blocking it stops fat oxidation entirely. Malonyl-CoA's dual role also explains why fatty-acid synthesis inhibitors raise oxidation — a concept exploited in metabolic drug research.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the activation reaction and explain why it costs two high-energy phosphates.
2. Describe the three components of the carnitine shuttle and their locations.
3. Why does malonyl-CoA inhibition of CAT-I make metabolic sense in the fed state?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Acyl-CoA synthetase activates FA at 2-ATP cost (ATP → AMP + PPᵢ).
- Carnitine shuttle ferries acyl groups into the matrix; CAT-I is the gate.
- Malonyl-CoA = fed-state brake on oxidation.
- Carnitine depletion (valproate, dialysis) impairs fat burning.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — pathway core) ───────────────
  {
    nodeId: 'beta-oxidation',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Beta-Oxidation',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Beta-oxidation** is the mitochondrial spiral that repeatedly cleaves two-carbon units from a fatty acyl-CoA, converting fat into **acetyl-CoA** for the TCA cycle. It is called "beta" because the β-carbon (carbon 3) is oxidised before the C2–C3 bond is cut.

Each **pass** of the spiral uses four reactions and removes one acetyl-CoA:

1. **Oxidation** by acyl-CoA dehydrogenase (FAD cofactor) → trans-Δ²-enoyl-CoA + **FADH₂**.
2. **Hydration** by enoyl-CoA hydratase → L-β-hydroxyacyl-CoA.
3. **Oxidation** by β-hydroxyacyl-CoA dehydrogenase (NAD⁺) → β-ketoacyl-CoA + **NADH**.
4. **Thiolysis** by β-ketothiolase — CoA-SH cleaves the β-keto bond → **acetyl-CoA** + a fatty acyl-CoA shortened by two carbons.

The shortened acyl-CoA re-enters at step 1; the spiral turns until the whole chain is consumed. An **even-chain, saturated C16 fatty acid (palmitate)** needs 7 passes → 8 acetyl-CoA, 7 FADH₂, 7 NADH.

**ATP yield (palmitate):**

$$8\\ \\text{acetyl-CoA} \\times 10\\ \\text{ATP} = 80\\ \\text{ATP (via TCA + ETC)}$$
$$7\\ \\text{FADH}_2 \\times 1.5 + 7\\ \\text{NADH} \\times 2.5 = 10.5 + 17.5 = 28\\ \\text{ATP}$$
$$\\text{Gross} = 108;\\ \\text{minus 2 ATP for activation} = \\mathbf{106\\ ATP}$$

**Odd-chain fatty acids** yield one **propionyl-CoA** at the end, which (via propionyl-CoA carboxylase, biotin; methylmalonyl-CoA mutase, vitamin B12) becomes **succinyl-CoA** — the only fatty-acid carbon that can become glucose. **Unsaturated fatty acids** need auxiliary enzymes (enoyl-CoA isomerase; 2,4-dienoyl-CoA reductase with NADPH) to handle double bonds, costing slightly lower yields.

**Very-long-chain fatty acids** are shortened in **peroxisomes** (which generate H₂O₂ instead of ATP) before finishing in mitochondria; defects here cause X-linked adrenoleukodystrophy.

**Clinical note:** inherited defects of acyl-CoA dehydrogenases cause fasting intolerance. **Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency** — the commonest — presents in infancy with hypoketotic hypoglycaemia after fasting; newborn screening and avoiding prolonged fasting prevent catastrophe.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Spiral of 4 reactions: oxidation (FAD) → hydration → oxidation (NAD⁺) → thiolysis.
- Each pass: 1 acetyl-CoA + 1 FADH₂ + 1 NADH; chain shortens by 2 C.
- Palmitate (C16): 7 passes → 8 acetyl-CoA; net 106 ATP.
- Odd chains → propionyl-CoA → succinyl-CoA (B12-dependent; only glucogenic FA carbon).
- Unsaturated FA need isomerase/reductase; VLCFA start in peroxisomes.
- MCAD deficiency: hypoketotic hypoglycaemia on fasting.`,
      },
      {
        kind: 'FORMULAS',
        body: `- General yield for an even, saturated chain of n carbons:
  passes = $\\frac{n}{2} - 1$; acetyl-CoA = $\\frac{n}{2}$; FADH₂ = NADH = $\\frac{n}{2} - 1$.
- Palmitate (n=16): passes 7, acetyl-CoA 8 → $8(10) + 7(1.5) + 7(2.5) - 2 = \\mathbf{106}$ ATP.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `MCAD deficiency is managed by avoiding prolonged fasting (e.g. around surgery — anaesthetic teams need to know) and prompt carbohydrate during illness. Fibrates and thiazolidinediones up-regulate fat oxidation genes (PPAR-α/γ). Valproate competes in β-oxidation, explaining its carnitine drain and hepatotoxicity risk.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four reactions of one β-oxidation pass with their cofactors and products.
2. Calculate the net ATP from palmitate oxidation (show the tally).
3. Why does an odd-chain fatty acid contribute to gluconeogenesis while palmitate cannot?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- β-oxidation: 4-step spiral → acetyl-CoA + FADH₂ + NADH per pass.
- Palmitate: 8 acetyl-CoA, 106 net ATP.
- Odd chains give propionyl-CoA → succinyl-CoA (glucogenic, needs biotin + B12).
- Peroxisomes pre-trim VLCFA; MCAD deficiency = fasting hypoglycaemia.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'regulation-of-beta-oxidation',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Beta-Oxidation — Regulation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Fat oxidation is regulated mainly by **whether fatty acids arrive at the mitochondrion at all** — the switch sits at the start of the pathway, not in the spiral itself.

**1. Hormonal control of lipolysis (the supply valve).** In fasting, **adrenaline and glucagon** activate **hormone-sensitive lipase (HSL)** in adipose tissue via cAMP-dependent phosphorylation, raising circulating free fatty acids — the substrate supply for β-oxidation. **Insulin** (fed state) dephosphorylates HSL, suppressing lipolysis, and simultaneously promotes re-esterification — fat is stored, not burned.

**2. The malonyl-CoA/CAT-I gate (the tissue switch).** As taught in Fatty Acid Activation, **malonyl-CoA inhibits CAT-I**. Fed: insulin raises malonyl-CoA → fatty acids cannot enter mitochondria → oxidation off, synthesis on. Fasting: glucagon lowers malonyl-CoA → the gate opens. This single reciprocal control prevents a futile cycle of simultaneous synthesis and oxidation.

**3. Substrate and energy-state effects.** High NADH/NAD⁺ (well-fed mitochondrion) slows the dehydrogenase steps; abundant ATP lowers demand. Exercise simultaneously lowers malonyl-CoA (AMP-activated protein kinase, AMPK, phosphorylates acetyl-CoA carboxylase, dropping malonyl-CoA) and raises NAD demand — oxidation rises to match workload.

**4. Long-term (transcriptional) control.** Fasting and fibrate drugs activate **PPAR-α**, a nuclear receptor that induces the whole oxidative enzyme set (acyl-CoA dehydrogenases, CAT-I, thiolases). Trained athletes and fasted individuals oxidise fat more briskly because enzyme *amounts* are higher.

**5. Tissue specialisation.** Liver oxidises fat to fuel other organs and make ketones (it does not oxidise ketones itself). Muscle oxidises fat for its own ATP. Brain does not oxidise long-chain fatty acids (they cross the blood–brain barrier poorly and are albumin-bound) — it uses glucose and, in prolonged fasting, ketone bodies.

**Clinical picture:** when supply outruns the gate — untreated diabetes (insulin absent, lipolysis unchecked), prolonged starvation, alcohol — hepatic acetyl-CoA floods past the TCA cycle's capacity into **ketogenesis**, the subject of the next lessons.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- HSL (adipose) is controlled by glucagon/adrenaline (on) vs insulin (off) — sets substrate supply.
- CAT-I gate: malonyl-CoA inhibits; fed = synthesis on/oxidation off, fasting = reverse.
- AMPK during exercise lowers malonyl-CoA → fat oxidation rises with workload.
- PPAR-α induces oxidative enzymes long-term (fasting, fibrates).
- Brain oxidises no long-chain FA; liver makes ketones, muscle burns them.
- Unchecked lipolysis (diabetes, alcohol, starvation) → hepatic ketogenesis.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Fibrates are PPAR-α agonists — the transcriptional arm of oxidation regulation turned into therapy. Nicotinic acid (niacin) blocks HSL, dropping free fatty acids and VLDL production; flushing and metabolic effects trace directly to this lipolysis switch. Stimulants (adrenaline, theophylline) transiently raise lipolysis.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the two principal control points of β-oxidation and their signals.
2. How does AMPK shift muscle metabolism during exercise?
3. Why does untreated diabetes flood the liver with fatty acids?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Supply valve: HSL (glucagon/adrenaline vs insulin).
- Tissue gate: CAT-I vs malonyl-CoA; AMPK opens it in exercise.
- PPAR-α up-regulates the machinery; fibrates exploit it.
- Overflow at the gate → ketogenesis.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'fatty-acid-synthesis',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Fatty Acid Synthesis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Fatty acid synthesis is the opposite direction of β-oxidation, run in a different compartment with different enzymes and electron carriers — an arrangement that lets the two pathways be regulated independently. It happens mainly in **cytosol of liver** (for export) and **adipose** (for storage), plus lactating breast (for milk fat).

**1. Building the carbon source.** Excess carbohydrate floods the mitochondrion with acetyl-CoA (from pyruvate oxidation). Acetyl-CoA cannot cross the inner membrane, so it leaves as **citrate** (citrate shuttle) and is split again by **ATP-citrate lyase** → acetyl-CoA + oxaloacetate in the cytosol. This step is up-regulated in the fed state.

**2. The committed step.** **Acetyl-CoA carboxylase (ACC)** — with **biotin** and CO₂, driven by ATP — carboxylates acetyl-CoA to **malonyl-CoA**. This is the rate-limiting step: activated by **citrate** and by dephosphorylation (insulin), inhibited by **palmitoyl-CoA** (product feedback) and by phosphorylation via AMPK (energy stress, glucagon). Malonyl-CoA does double duty as the brake on CAT-I (fat oxidation off while synthesis on).

**3. The synthesis spiral.** **Fatty acid synthase (FAS)** — one large dimeric complex carrying an **acyl-carrier protein (ACP)** with phosphopantetheine arms — adds two carbons at a time:

- Acetyl group primes the complex (starter).
- Malonyl group is added; **decarboxylation** drives a condensation → β-ketoacyl (4-C).
- Then reduction (NADPH) → dehydration → reduction (NADPH) → saturated acyl chain, two carbons longer.

Each cycle consumes **2 NADPH** and releases CO₂ (the CO₂ added by ACC is the one released — a catalytic handle, not carbon retained). After seven cycles the chain is **palmitate (C16)**, released by a thioesterase. Longer or unsaturated chains need separate elongases/desaturases (humans cannot insert double bonds beyond Δ9 — hence **linoleic and α-linolenic acids are essential fatty acids**).

**Energy accounting:** palmitate synthesis from 8 acetyl-CoA costs 7 ATP (ACC) + 14 NADPH — a large investment, which is why synthesis runs only with abundant energy and insulin.

**Regulation summary:** fed (insulin, citrate, high ATP) → ACC active, malonyl-CoA up, FAS induced; fasting (glucagon, AMPK) → ACC phosphorylated/inactive, malonyl-CoA down, synthesis off, oxidation on.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Site: cytosol (liver, adipose, lactating breast); carbon via citrate shuttle.
- Committed/rate-limiting step: ACC → malonyl-CoA (biotin, ATP).
- ACC on: citrate, insulin (dephosphorylation). ACC off: palmitoyl-CoA, AMPK phosphorylation.
- FAS complex + ACP: condense → reduce (NADPH) → dehydrate → reduce; 2 NADPH/cycle.
- Product: palmitate (C16) after 7 cycles; essential FA cannot be self-made (Δ9 limit).
- Malonyl-CoA simultaneously inhibits CAT-I — synthesis and oxidation never both on.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin's activation of AMPK lowers malonyl-CoA — shifting the liver from fat synthesis toward oxidation, part of its metabolic benefit. FAS is over-expressed in several cancers and is a research drug target. Essential-fatty-acid deficiency (dry scaly skin, poor wound healing) appears when prolonged parenteral nutrition lacks linoleate — a pharmacist-relevant dispensing check.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How does acetyl-CoA reach the cytosol, and what enzyme releases it there?
2. Give the activators and inhibitors of acetyl-CoA carboxylase.
3. Why does the synthesis spiral need NADPH while β-oxidation generates NADH/FADH₂?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Cytosol route: citrate out → ATP-citrate lyase → acetyl-CoA.
- ACC → malonyl-CoA is the gate; insulin/citrate on, AMPK/palmitoyl-CoA off.
- FAS builds palmitate with NADPH; malonyl decarboxylation drives condensation.
- Essential FAs (linoleic, α-linolenic) must come from diet.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'ketone-bodies',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Ketone Bodies',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Ketone bodies** are water-soluble fuels the liver makes from acetyl-CoA when fat oxidation outruns the TCA cycle's capacity. Three compounds: **acetoacetate**, **β-hydroxybutyrate** (technically not a ketone but always counted with them), and **acetone** (spontaneously decarboxylated acetoacetate, exhaled — the fruity breath of ketosis).

**Why they exist.** During fasting, fatty acids flow to the liver, β-oxidation floods the matrix with acetyl-CoA, and oxaloacetate is diverted to gluconeogenesis — the TCA cycle stalls at citrate synthase's step. Acetyl-CoA must go somewhere: the liver packages it into ketone bodies and ships them to blood. **Brain and muscle** reconvert them to acetyl-CoA and burn them. In prolonged starvation the brain may draw half or more of its energy from ketones — the adaptation that spares protein from being burned for glucose.

**Who makes and uses them:** only the **liver** makes ketones (it has **ketothiolase/HMG-CoA synthase**); the liver *cannot* use them (no thiophorase/SCOT enzyme). Muscle, brain, kidney, and heart oxidise them freely.

**Levels:** fed ≈ negligible; overnight fast ≈ 0.1 mmol/L; 3–7 days' fast ≈ 2–5 mmol/L (mild physiological ketosis); untreated type 1 diabetes ≫ 20 mmol/L (**ketoacidosis**). Physiological ketosis is *nutritive* — ketones supply fuel while insulin stays low enough that glucose control holds. **Diabetic ketoacidosis** is pathological — no insulin at all, so glucose climbs while ketones spike; blood pH falls as β-hydroxybutyrate and acetoacetate dissociate.

**Clinical distinction to master:** fasting ketosis (low glucose, low insulin, mild ketones, pH normal) vs DKA (hyperglycaemia, ketonaemia, acidosis, dehydration, Kussmaul breathing, fruity breath). Management of DKA is fluid + insulin + potassium — biochemistry reversed pharmacologically. **Alcoholic ketoacidosis** is the third variant: low glucose, acidosis, history of alcohol binge.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ketone bodies: acetoacetate, β-hydroxybutyrate, acetone (exhaled).
- Made only in liver mitochondria from acetyl-CoA when TCA is saturated.
- Liver cannot use them (lacks SCOT); brain/muscle/kidney/heart consume them.
- Starvation ketosis is adaptive (brain fuel, protein sparing); DKA is pathological.
- Severity scale: fed ~0 → overnight fast 0.1 → days fast 2–5 → DKA >20 mmol/L.
- Acetoacetate/β-OHB are acids: dissociation causes the acidosis of DKA.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Urine dipsticks (nitroprusside) detect acetoacetate only — β-hydroxybutyrate dominates in DKA, so dipstick underestimates severity; serum β-OHB assays are preferred. SGLT2 inhibitors (empagliflozin etc.) raise ketone levels and can trigger euglycaemic DKA — pharmacists counsel on symptoms. Ketogenic diets and breath-acetone monitors are consumer applications of this chemistry.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does the liver divert acetyl-CoA into ketone bodies during fasting?
2. Why can the liver not consume its own ketone bodies?
3. Contrast fasting ketosis and diabetic ketoacidosis in glucose, insulin, ketone level, and pH.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Ketones = soluble fat fuel made in liver, used by brain/muscle, sparing protein.
- Fasting: adaptive ketosis. Untreated T1DM: DKA — hyperglycaemia + acidosis.
- Acetone gives the fruity breath; β-OHB dominates the serum test.
- SGLT2i and alcohol also shift ketone chemistry.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'ketogenesis',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Ketone Bodies — Ketogenesis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Ketogenesis** — the synthetic route from acetyl-CoA to ketone bodies — runs in liver **mitochondria** in three enzyme steps:

**1.** Two acetyl-CoA condense via **thiolase** → **acetoacetyl-CoA** (+ CoA-SH). This is the reverse of the last β-oxidation step.

**2.** Acetoacetyl-CoA + a third acetyl-CoA condense via **HMG-CoA synthase** → **β-hydroxy-β-methylglutaryl-CoA (HMG-CoA)**. This is the **committed, rate-limiting step** of ketogenesis — and the fork in the road: the same HMG-CoA in the *cytosol* feeds cholesterol synthesis, but mitochondrial HMG-CoA heads to ketones.

**3.** **HMG-CoA lyase** splits HMG-CoA → **acetoacetate** + acetyl-CoA.

From acetoacetate, two endings: spontaneous (non-enzymatic) decarboxylation → **acetone** (exhaled), or NADH-dependent reduction by **β-hydroxybutyrate dehydrogenase** → **β-hydroxybutyrate** (the major blood ketone; high NADH from active β-oxidation pushes this direction).

**Regulation** mirrors the fed/fasted state:

- **Supply:** glucagon/adrenaline-driven lipolysis delivers fatty acids; CAT-I (relieved of malonyl-CoA inhibition) ships them into mitochondria.
- **Demand for oxaloacetate:** gluconeogenesis consumes oxaloacetate (from pyruvate carboxylase), depleting the TCA cycle's capacity to condense acetyl-CoA — overflow routes to ketones.
- **Hormonal induction:** glucagon induces HMG-CoA synthase transcriptionally over hours; insulin suppresses it.
- **Insulin is the master brake:** with insulin present (fed state), lipolysis stops, malonyl-CoA rises, and ketogenesis shuts down. In type 1 diabetes, zero insulin = the brake is off — hence the extreme ketonaemia.

**Utilisation (in extrahepatic tissues):** β-hydroxybutyrate is re-oxidised to acetoacetate (generating NADH); **SCOT (succinyl-CoA:3-ketoacid CoA-transferase)** activates acetoacetate to acetoacetyl-CoA using succinyl-CoA; thiolase splits it into 2 acetyl-CoA → TCA cycle. Acetoacetate's spontaneous loss to acetone wastes a little fuel — pure biochemical by-product.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pathway (liver mitochondria): 2 acetyl-CoA → acetoacetyl-CoA (thiolase) → HMG-CoA (HMG-CoA synthase, rate-limiting) → acetoacetate (HMG-CoA lyase).
- Acetoacetate → acetone (spontaneous, exhaled) or → β-hydroxybutyrate (NADH-dependent).
- Mitochondrial HMG-CoA = ketones; cytosolic HMG-CoA = cholesterol.
- Glucagon induces HMG-CoA synthase; insulin suppresses it.
- Utilisation needs SCOT — absent in liver, present in brain/muscle/kidney.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ketone-measurement timing matters clinically: β-OHB assays reflect severity better than urine acetoacetate dipsticks, and during DKA treatment β-OHB falls while acetoacetate may transiently rise (a "rebound" dipstick positivity that is *not* deterioration). HMG-CoA reductase (statins) is the cytosolic cousin of this pathway — the same HMG-CoA intermediate, a different enzyme.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the three enzymatic steps of ketogenesis with the rate-limiting enzyme.
2. How does one HMG-CoA intermediate serve two different synthetic destinies?
3. Why do serum β-hydroxybutyrate levels exceed acetoacetate during active β-oxidation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Ketogenesis: 3 steps to acetoacetate; HMG-CoA synthase is the switch.
- NADH balance tips acetoacetate → β-OHB; acetone is the waste gas.
- Liver makes, cannot use; SCOT-dependent tissues use.
- Insulin off = ketogenesis on.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'ketone-body-utilization',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Ketone Bodies — Ketone Body Utilization',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Ketone bodies are only useful if tissues can burn them. **Utilisation** (ketolysis) occurs in mitochondria of **brain, skeletal and cardiac muscle, kidney cortex** — never in liver, which lacks **SCOT (succinyl-CoA:3-ketoacid CoA-transferase)** and so cannot re-activate acetoacetate. This one-enzyme asymmetry guarantees the liver exports fuel it cannot itself consume, keeping ketones available for other organs.

**The utilisation route:**

1. **β-hydroxybutyrate → acetoacetate** by β-hydroxybutyrate dehydrogenase, *generating NADH* (the mirror of the hepatic reduction step).
2. **Acetoacetate + succinyl-CoA → acetoacetyl-CoA + succinate** by **SCOT**. Note the cost: one succinyl-CoA (a TCA intermediate that could have yielded 1 GTP) is spent — the "activation fee" of ketone use.
3. **Acetoacetyl-CoA + CoA-SH → 2 acetyl-CoA** by thiolase.
4. Acetyl-CoA enters the **TCA cycle**: each acetyl-CoA yields 10 ATP.

**Net yield:** β-hydroxybutyrate → 2 acetyl-CoA + 1 NADH ≈ **21–22 ATP**; acetoacetate ≈ 19–20 ATP (no NADH bonus). Both comfortably beat glucose-per-carbon yields and are burned cleanly without needing insulin.

**Physiological significance:**

- **Brain adaptation:** after 2–3 days of fasting, brain ketone uptake rises steeply; by 3–6 weeks ketones cover roughly two-thirds of brain energy, cutting its glucose demand and thereby sparing muscle protein that would otherwise feed gluconeogenesis. This is the single most important survival adaptation of starvation.
- **Muscle preference:** heart and slow-twitch muscle burn ketones efficiently; during ketosis muscle actually *prefers* them, leaving glucose for the brain and obligate glycolytic tissues (red cells — which still need glucose, having no mitochondria).
- **Renal handling:** ketones are filtered and reabsorbed; when plasma levels exceed the reabsorptive threshold, they spill into urine (**ketonuria**) and drag sodium/potassium and water with them — a major driver of DKA dehydration.

**Clinical note:** in untreated type 1 diabetes, ketogenesis accelerates beyond any tissue's oxidative capacity, and the acids accumulate — utilisation cannot keep up with production, and acidosis ensues. Ketone use is also insulin-*independent*, which is why well-controlled type 1 diabetics on low insulin still burn some ketones without acidosis — the problem is magnitude, not presence.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ketolysis: β-OHB → acetoacetate (+NADH) → acetoacetyl-CoA (SCOT, costs succinyl-CoA) → 2 acetyl-CoA → TCA.
- Liver lacks SCOT — makes ketones but cannot burn them.
- Yields: β-OHB ≈ 21 ATP; acetoacetate ≈ 19 ATP.
- Brain covers ~⅔ of its energy with ketones in prolonged fasting — protein sparing.
- Ketonuria above renal threshold contributes to DKA fluid/electrolyte loss.
- DKA = production outruns utilisation; ketone use itself is insulin-independent.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `IV fluids in DKA replace the osmotic losses ketonuria causes. Exogenous ketone esters (sports/medical products) exploit the pathway directly — they need no insulin. In neonatal SCOT deficiency (rare), even physiological ketosis is lethal — the enzyme's importance made visible.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can the liver not utilise ketone bodies, and what enzyme is missing?
2. Calculate the approximate ATP yield of β-hydroxybutyrate oxidation in muscle.
3. How does brain ketone adaptation spare muscle protein during starvation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Utilisation: SCOT activates acetoacetate; thiolase yields 2 acetyl-CoA.
- Liver = producer only; brain/muscle/kidney = burners.
- Ketones ≈ 19–22 ATP each; insulin not needed to use them.
- Brain's ketone shift is the protein-sparing keystone of starvation survival.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'cholesterol',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Cholesterol',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Cholesterol** is a 27-carbon steroid alcohol — four fused rings, one hydroxyl head, one hydrocarbon tail. That amphipathic shape lets it slot into membranes, where it does its first job: **modulating fluidity**. It stiffens membranes at high temperature and prevents them crystallising at low temperature — a biological thermostat. Myelin sheaths are among the most cholesterol-rich membranes in the body.

Its second role is as the **parent molecule** of a whole hormone-vitamin-bile family:

- **Bile acids** (cholic, chenodeoxycholic) — the largest daily use of cholesterol; emulsify fat and, via their excretion, are the body's main route of *cholesterol loss*.
- **Steroid hormones** — cortisol, aldosterone, oestrogens, androgens (adrenal cortex, gonads, placenta).
- **Vitamin D₃** — made in skin from 7-dehydrocholesterol by UV light.

**Sources and balance.** The body contains ~100–150 g cholesterol; roughly **⅔ is endogenous** (liver and intestine synthesise most) and ⅓ comes from diet (eggs, meat, dairy). Daily intake and synthesis trade off: more dietary cholesterol down-regulates synthesis (though imperfectly — some individuals absorb/synthesise more briskly, one root of hypercholesterolaemia).

**Transport:** cholesterol travels in **lipoproteins** — LDL delivers it to tissues ("bad" when excessive and oxidised in artery walls), HDL retrieves it back to the liver ("good" reverse transport). The next lessons cover this in detail.

**Excretion:** the body cannot break the steroid ring; the only exits are **bile** (as bile acids and sloughed cholesterol) and conversion to coprostanol by gut bacteria. Cholestyramine's mechanism — binding bile acids in the gut — works precisely because interrupting reabsorption forces the liver to convert more cholesterol to fresh bile acids.

**Atherosclerosis in one paragraph:** excess LDL particles infiltrate artery intima, are oxidised, and trigger macrophage foam-cell formation — the plaque. Elevated plasma LDL-C is the dominant modifiable risk factor for ischaemic heart disease and stroke; lowering it (statins, ezetimibe, PCSK9 antibodies) reduces events proportionally.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Steroid alcohol: membrane fluidity regulator + parent of bile acids, steroid hormones, vitamin D.
- Sources: ⅔ endogenous synthesis (liver/intestine), ⅓ diet.
- No catabolic ring-breaking: exits only via bile (acids/cholesterol).
- LDL delivers to tissues; HDL returns it (reverse transport).
- Oxidised LDL in artery walls → foam cells → atherosclerotic plaque.
- Myelin is cholesterol-rich; brain holds ~25% of body cholesterol.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every lipid-lowering drug maps onto this lesson: statins (block synthesis), ezetimibe (block dietary absorption at NPC1L1), bile-acid sequestrants (force conversion to bile acids), PCSK9 inhibitors (raise LDL-receptor recycling). Counselling about "good vs bad cholesterol" is really a lesson in lipoprotein direction of transport.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain cholesterol's dual role in membranes and as a synthetic precursor.
2. Why must all body cholesterol ultimately leave via bile?
3. Describe how LDL contributes to atherosclerotic plaque formation.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Cholesterol: membrane thermostat; source of bile acids, steroid hormones, vitamin D.
- Made mostly in the liver; exported/returned by lipoproteins.
- Only exit = bile; sequestrants exploit this.
- Oxidised LDL in arteries = the seed of atherosclerosis.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'cholesterol-synthesis',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Cholesterol — Cholesterol Synthesis',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Cholesterol synthesis builds a 27-carbon molecule entirely from **acetyl-CoA** — a four-stage construction that runs in the **cytosol of liver** (the main site), intestine, and adrenal cortex.

**Stage 1 — mevalonate (the committed, regulated step).**
$$2\\ \\text{acetyl-CoA} \\rightarrow \\text{acetoacetyl-CoA} \\xrightarrow{+\\ \\text{acetyl-CoA}} \\text{HMG-CoA}$$
Then **HMG-CoA reductase** — the famous target of statins — reduces HMG-CoA to **mevalonate** using 2 NADPH. This ER-membrane enzyme is the pathway's master switch.

**Stage 2 — isoprenoid units.** Mevalonate is phosphorylated (3 ATP) and decarboxylated to **isopentenyl pyrophosphate (IPP)**, the 5-carbon building block; some isomerises to dimethylallyl PP.

**Stage 3 — squalene.** Three IPP units join head-to-tail → **farnesyl pyrophosphate (C15)**; two farnesyl-PPs join tail-to-tail → **squalene (C30)**.

**Stage 4 — ring closure.** Squalene monooxygenase (needs O₂ and NADPH) oxidises squalene; cyclase folds it into the four-ring **lanosterol**; ~19 further steps trim methyls and shift bonds → **cholesterol (C27)**.

**Regulation of HMG-CoA reductase** operates on four levels, all pointed at the cell's cholesterol status:

1. **Transcription:** low cholesterol releases **SREBP-2** from the ER; it enters the nucleus and induces the reductase gene (plus LDL-receptor gene). High cholesterol keeps SREBP tethered and silent.
2. **Degradation:** high cholesterol (via insulin-induced gene, INSIG) triggers ubiquitination and destruction of the reductase.
3. **Phosphorylation:** glucagon/AMPK phosphorylate and inactivate it (fasting slows synthesis); insulin dephosphorylates and activates (fed state builds membranes/VLDL).
4. **Drug inhibition:** **statins** are mevalonate-chain analogues competing at the active site — the most-prescribed enzyme inhibitors in medicine.

**Beyond cholesterol:** the mevalonate pathway also yields **dolichol** (protein glycosylation), **ubiquinone (CoQ₁₀)** (electron transport), **farnesyl/geranylgeranyl groups** (protein prenylation for signalling proteins). Statin side effects (myalgia) may partly reflect CoQ₁₀ and prenylation shortfalls.

**Clinical endpoint:** inhibiting the reductase *also* induces hepatic **LDL receptors** (via SREBP-2 co-activation), pulling LDL from blood — the full explanation of statins' potency.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Site: cytosol (liver main); all 27 carbons from acetyl-CoA.
- Route: acetyl-CoA → HMG-CoA → mevalonate (HMG-CoA reductase, NADPH) → IPP (C5) → farnesyl-PP (C15) → squalene (C30) → lanosterol → cholesterol.
- HMG-CoA reductase: committed step; regulated by SREBP-2 transcription, INSIG degradation, AMPK phosphorylation, statins.
- Side products: CoQ₁₀, dolichol, prenyl groups.
- Statin mechanism: competitive inhibition + LDL-receptor up-regulation.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Statin counselling draws directly on this pathway: myalgia (CoQ/prenylation theory), timing-independent dosing (atorvastatin/rosuvastatin long half-life vs simvastatin's), and interaction with CYP3A4 (simvastatin). Ezetimibe + statin = blocking both input routes (absorption + synthesis); PCSK9 antibodies add the receptor-recycling route.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Outline the four stages of cholesterol synthesis from acetyl-CoA.
2. Describe the four regulatory mechanisms acting on HMG-CoA reductase.
3. Why do statins lower plasma LDL beyond simply blocking synthesis?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Acetyl-CoA → mevalonate (reductase = statin target) → IPP → squalene → cholesterol.
- Reductase controlled transcriptionally (SREBP-2), proteolytically, and hormonally.
- Mevalonate pathway also feeds CoQ₁₀ and prenylated proteins.
- Statins: enzyme block + receptor up-regulation.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'cholesterol-transport',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Cholesterol — Cholesterol Transport',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Cholesterol and triglyceride are insoluble; blood transport requires **lipoprotein particles** — a triglyceride/cholesteryl-ester core wrapped in a phospholipid, free-cholesterol, and **apolipoprotein** shell. Each apolipoprotein is both structural scaffold and signalling molecule (enzyme activators, receptor ligands).

**The itinerary of cholesterol:**

**1. Dietary delivery — chylomicrons.** Intestinal cells package absorbed lipid with **apoB-48**. Lipoprotein lipase (LPL, activated by apoC-II) strips triglyceride for tissues; the cholesterol-rich **remnant** is cleared by hepatic receptors (apoE).

**2. Endogenous export — VLDL.** The liver packages its own triglyceride/cholesterol with **apoB-100**. LPL again removes triglyceride → particle shrinks to **IDL**; hepatic lipase removes the rest → **LDL** — the principal *cholesterol-delivery* particle.

**3. Delivery — LDL.** Tissues take up LDL through **LDL receptors** recognising apoB-100 (receptor-mediated endocytosis, clathrin pits, lysosomal release). Liver takes ~70%; feedback regulates receptor number. Defective receptors (**familial hypercholesterolaemia**) → LDL skyrockets, premature heart disease in youth. Oxidised LDL taken up by macrophage *scavenger* receptors (not feedback-regulated) forms the **foam cells** of atheroma.

**4. Return — HDL (reverse transport).** Liver/intestine secrete nascent **apoA-I discs**; they collect cholesterol from peripheral cells via **ABCA1** transporters (defect in Tangier disease), esterify it with **LCAT**, mature into spheres, and hand cholesteryl ester to the liver via **SR-B1** or transfer it to LDL/VLDL via **CETP**. HDL also carries **apoC-II and apoE** *to* chylomicrons/VLDL and retards LDL oxidation (paraoxonase).

**Numbers to anchor:** LDL carries ~60–70% of plasma cholesterol (the atherogenic burden); HDL carries ~20–30% (the protective flux). Guidelines treat **LDL-C as the primary target**; HDL-C is supportive context, and drugs simply raising HDL without improving flux have failed in trials.

**Clinical chemistry:** fasting lipid profile reports total cholesterol, LDL-C, HDL-C, triglycerides. LDL-C can be estimated by the Friedewald formula when triglycerides are not grossly elevated: $\\text{LDL} = \\text{TC} - \\text{HDL} - \\frac{\\text{TG}}{2.2}$ (mmol/L).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Lipoprotein = lipid core + phospholipid/cholesterol shell + apolipoproteins (signals).
- Chylomicrons (apoB-48) carry dietary fat; remnants (apoE) return to liver.
- VLDL (apoB-100) → IDL → LDL: liver's triglyceride/cholesterol export line.
- LDL delivers cholesterol via LDL-receptor (apoB-100); oxidised LDL → macrophage foam cells.
- HDL (apoA-I, LCAT, ABCA1, SR-B1) runs reverse transport to the liver.
- CETP swaps HDL-cholesterol into VLDL/LDL; LDL-C is the primary clinical target.`,
      },
      {
        kind: 'FORMULAS',
        body: `- Friedewald estimate (mmol/L): $\\text{LDL-C} = \\text{TC} - \\text{HDL-C} - \\dfrac{\\text{TG}}{2.2}$

**Worked example.** TC 6.2, HDL 1.1, TG 1.8 mmol/L:
$\\text{LDL} = 6.2 - 1.1 - 0.82 = 4.28$ mmol/L — elevated; therapy discussion warranted.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Statin/ezetimibe/PCSK9 therapy all raise LDL-receptor activity — the delivery-door lesson applied. CETP inhibitors (failed class) show that a "high HDL number" without better flux is not enough. Familial hypercholesterolaemia counselling and homozygote treatment ( LDL apheresis, evinacumab) are receptor biology turned clinical.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four main lipoprotein classes and each one's principal cargo and apolipoprotein.
2. Contrast the LDL-receptor and macrophage scavenger-receptor routes and their atherosclerotic consequences.
3. Describe reverse cholesterol transport, naming apoA-I, ABCA1, LCAT, and SR-B1.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Chylomicron → VLDL → IDL → LDL delivers; HDL retrieves.
- ApoB-48 gut, apoB-100 liver; apoC-II fuels LPL; apoE docks remnants.
- Oxidised LDL in artery walls is the atheroma seed.
- LDL-C is the treatment target; HDL flux (not just number) protects.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'lipoproteins',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Lipoproteins',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **lipoprotein** is a self-organised shuttle: hydrophobic cargo (triglyceride, cholesteryl esters) in the core, amphipathic shell (phospholipid, free cholesterol) outside, and one or more **apolipoproteins** as both identity tag and functional handle. Understanding the *metabolism* of each class turns a confusing acronym list into a single connected story.

**The four metabolic classes:**

| Particle | Origin | Main cargo | Key apoproteins | Role |
|---|---|---|---|---|
| **Chylomicron** | intestine | dietary TG | B-48, C-II, E | ship dietary fat |
| **VLDL** | liver | endogenous TG | B-100, C-II, E | export hepatic fat |
| **LDL** | from VLDL | cholesterol | B-100 | deliver cholesterol |
| **HDL** | liver/intestine | cholesterol (return) | A-I | reverse transport |

**The two engines.** (1) **Lipoprotein lipase (LPL)** — capillary endothelial enzyme of adipose/muscle, activated by apoC-II, hydrolyses core triglyceride of chylomicrons/VLDL; insulin induces it in adipose, muscle builds it for exercise. Defects (or apoC-II defects) cause **familial chylomicronaemia** — TG ≫ 10 mmol/L, eruptive xanthomas, pancreatitis risk. (2) **Hepatic lipase** — finishes the job, converting IDL → LDL.

**Remnant clearance:** liver receptors (LDL-R and LRP) recognise apoE on chylomicron remnants and IDL. ApoE4 variant is associated with higher LDL and Alzheimer's risk — one protein, two diseases.

**Secondary hyperlipidaemias** a pharmacist meets constantly: **diabetes** (insulin deficiency/resistance → LPL sluggish, VLDL high), **hypothyroidism** (LDL-receptor down → LDL high), **alcohol** (VLDL synthesis up), **oral oestrogens, thiazides, beta-blockers, corticosteroids, protease inhibitors** (mixed patterns), **renal disease** (nephrotic loss → hepatic overproduction). Correcting the driver often corrects the lipid numbers.

**Primary (genetic) patterns:** familial hypercholesterolaemia (LDL-R/apoB/PCSK9 — high LDL, tendon xanthomas, premature CAD); familial combined hyperlipidaemia (VLDL ± LDL); dysbetalipoproteinaemia (apoE2/E2 — remnant accumulation, palmar xanthomas).

**Treatment logic** flows from the map: reduce input (diet, ezetimibe), reduce synthesis (statins), accelerate clearance (more LDL receptors — statins/PCSK9 Abs), reduce VLDL secretion (fenofibrate/oil-poor diet), swap particles (niacin historically), or physically remove (LDL apheresis).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four classes: chylomicron (diet TG), VLDL (liver TG), LDL (cholesterol delivery), HDL (return).
- LPL (apoC-II activated) strips TG in capillaries; hepatic lipase finishes IDL → LDL.
- Liver clears remnants via apoE (LDL-R/LRP).
- Secondary hyperlipidaemia: diabetes, hypothyroidism, alcohol, renal, drugs.
- Familial hypercholesterolaemia: LDL-R/apoB/PCSK9 defects; xanthomas, early CAD.
- Therapy targets: input, synthesis, clearance, VLDL secretion.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Drug–lipid interactions are pharmacy bread-and-butter: thiazides/oestrogens raising TG, beta-blockers lowering HDL, protease inhibitors causing dyslipidaemia, isotretinoin raising TG. Knowing *which* particle each drug perturbs turns a lab report into a management plan — and pancreatitis-level triglyceridaemia (>10 mmol/L) is a red-flag pharmacists must escalate.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe the structure of a lipoprotein and the dual role of apolipoproteins.
2. Which enzyme and apolipoprotein pair clears triglyceride from chylomicrons and VLDL?
3. A patient on oestrogen therapy shows raised triglycerides. Explain the likely mechanism.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Lipoproteins = fat shuttles with apoprotein ID tags.
- LPL (C-II) + hepatic lipase remould particles; liver is the hub.
- LDL delivers, HDL retrieves; remnants return via apoE.
- Drugs and diseases move the numbers; the particle map explains them.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'basic-lipid-storage-and-mobilization',
    courseId: 'bch-201',
    topicId: 'lipid-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Basic Lipid Storage and Mobilization',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Storage.** Adipose tissue is the body's fat warehouse. After a meal, LPL releases fatty acids from chylomicron/VLDL triglyceride into adipose capillaries; adipocytes take them up, re-esterify them with **glycerol-3-phosphate** (made from glucose via glycolysis — note: adipocytes cannot re-use glycerol from lipolysis, since they lack glycerol kinase) and store triglyceride in a single large lipid droplet. **Insulin** drives the whole sequence: it induces LPL, pushes glucose uptake (GLUT4), and supplies the glycerol backbone — fat storage is an insulin-dependent act. Brown adipose, by contrast, burns fat for heat via **uncoupling protein 1 (UCP1)** — thermogenesis rather than storage.

**Mobilisation.** In fasting, exercise, or stress, **glucagon and adrenaline** (and cortisol permissively) activate **hormone-sensitive lipase (HSL)** in adipocytes through cAMP-dependent phosphorylation; **ATGL** initiates the first hydrolysis. Triglyceride is cleaved stepwise → free fatty acids + glycerol released into blood. Fatty acids travel bound to **albumin** (up to ~10 per molecule) to tissues; glycerol goes to the liver for **gluconeogenesis** (the only gluconeogenic part of fat).

**Coordination and control:**

- **Insulin** suppresses HSL (dephosphorylation), lowers cAMP, and simultaneously promotes storage — the fed brake and accelerator in one hormone.
- **Catecholamines/glucagon** raise cAMP → PKA → HSL-phosphate — the fasting accelerator. Growth hormone and cortisol support lipolysis permissively.
- **Feedback:** high plasma fatty acids are themselves taken up and re-esterified (a futile-cycle damper), and adenosine/PGI₂ locally damp lipolysis.

**Whole-body picture:** the same triglyceride molecule may be stored in adipose, mobilised within hours, burned in muscle, and — if intake resumes — replaced from dietary fat. The **triglyceride–fatty acid cycle** runs constantly; insulin decides which way the net flux points. In uncontrolled diabetes, absence of insulin tips it fully toward mobilisation → fatty liver, ketosis, hypertriglyceridaemia.

**Clinical notes:** fat mass is not inert — adipose is an **endocrine organ** secreting leptin (satiety), adiponectin (insulin sensitiser), and inflammatory cytokines; obesity is a metabolic, not merely volumetric, state. Marked wasting (cachexia, anorexia nervosa, severe PCM — the subject of a later topic) exhausts the reserve this lesson describes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Storage: LPL-released FA + glycerol-3-P (from glucose) → TAG in adipocytes; insulin-driven.
- Adipocytes lack glycerol kinase — need glucose for the backbone.
- Mobilisation: ATGL + HSL (cAMP/PKA-phosphorylated by glucagon/adrenaline) → FFA + glycerol.
- FFA travel on albumin; glycerol → hepatic gluconeogenesis.
- Insulin = storage hormone; catecholamines/glucagon = mobilising hormones.
- Adipose is endocrine: leptin, adiponectin, cytokines.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Beta-blockers blunt catecholamine-driven lipolysis (and can nudge lipids); systemic corticosteroids promote central fat redistribution; nicotinic acid's anti-lipolytic action is the historical template for lowering VLDL. Diabetes counselling about hyperglycaemia-with-hyperlipidaemia rests on insulin's double control of storage and mobilisation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why must adipocytes take up glucose to store fatty acids as triglyceride?
2. Trace the hormonal cascade from adrenaline to HSL activation.
3. What are the separate destinations of mobilised fatty acids and glycerol?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Store (insulin, LPL, glycerol-3-P) ↔ mobilise (HSL, cAMP, glucagon/adrenaline).
- FFA on albumin to tissues; glycerol to glucose in liver.
- Adipose is a live endocrine organ, not dead weight.
- Insulin decides the net direction of the TAG–FA cycle.`,
      },
    ],
  },
];
