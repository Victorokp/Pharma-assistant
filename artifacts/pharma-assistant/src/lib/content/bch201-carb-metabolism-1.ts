import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 2: Carbohydrate Metabolism Part 1.
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; overview/pathway subtopics A; descriptive subtopics B.
 */

export const bch201CarbMetabolism1Lessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'carbohydrate-metabolism-topic',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'topic',
    title: 'Carbohydrate Metabolism',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Carbohydrate metabolism is the network of pathways that manages the body's glucose economy: obtaining glucose from the diet, splitting it for energy (**glycolysis**), storing it (**glycogenesis**), releasing stored glucose (**glycogenolysis**), manufacturing new glucose (**gluconeogenesis**), producing NADPH and ribose (**pentose phosphate pathway**), and keeping blood glucose within safe limits through hormonal control.

The logic of the whole topic rests on one molecule: **glucose-6-phosphate**. Every route in this topic either begins at it, ends at it, or passes through it. If you track glucose-6-phosphate's options — glycolysis, glycogen storage, pentose phosphates, or dephosphorylation back to free glucose in the liver — you hold the map of the entire topic.

This session introduces each pathway at the level needed for a 200L pharmacy student: substrates, products, enzymes, regulation, and physiological significance. Later subtopics expand each in turn.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Five major routes: glycolysis, glycogenesis, glycogenolysis, gluconeogenesis, pentose phosphate pathway — plus hormonal regulation of blood glucose.
- Glucose-6-phosphate is the junction molecule of all carbohydrate routes.
- Brain depends on glucose; red cells depend on glycolysis; liver buffers blood glucose for both.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The most prescribed drug classes in the world act here: insulin and sulfonylureas lower blood glucose by exploiting the hormonal regulation subtopics; metformin restrains hepatic gluconeogenesis. Understanding these pathways is understanding diabetes therapy at its foundation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the five major routes of carbohydrate metabolism and give a one-line role for each.
2. Why is glucose-6-phosphate called the junction molecule of this topic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Carbohydrate metabolism = glucose supply (diet, gluconeogenesis), utilisation (glycolysis), storage (glycogen), disposal (PPP), and control (hormones).
- Every pathway connects through glucose-6-phosphate.`,
      },
    ],
  },

  // ─────────────── SUBTOPICS ───────────────
  {
    nodeId: 'glycolysis',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Glycolysis',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Glycolysis** (the Embden–Meyerhof pathway) is the cytosolic sequence of ten enzyme-catalysed reactions that splits one molecule of **glucose** (6 carbons) into two molecules of **pyruvate** (3 carbons each), capturing a small amount of energy directly.

Its overall reaction under aerobic conditions:

$$\\text{Glucose} + 2\\,\\text{NAD}^+ + 2\\,\\text{ADP} + 2\\,\\text{P}_i \\rightarrow 2\\,\\text{Pyruvate} + 2\\,\\text{NADH} + 2\\,\\text{H}^+ + 2\\,\\text{ATP} + 2\\,\\text{H}_2\\text{O}$$

Three ideas organise the pathway:

**1. Investment then payoff.** The first five reactions cost **2 ATP** (priming steps); the last five regenerate **4 ATP**, for a **net gain of 2 ATP** per glucose.

**2. Two phases, one logic.** In the preparatory phase glucose is phosphorylated, rearranged, and split into two three-carbon sugars (glyceraldehyde-3-phosphate and dihydroxyacetone phosphate, which are interconvertible). In the payoff phase each triose is oxidised and converted to pyruvate — and because the split produces two identical trioses, every payoff reaction happens twice per glucose.

**3. Oxygen-independence.** No step of glycolysis requires molecular oxygen. When oxygen is scarce, pyruvate is reduced to lactate to regenerate NAD⁺ so glycolysis can continue — the only ATP source for red blood cells and the emergency ATP source for exercising muscle.

Glycolysis is the central pathway of carbohydrate metabolism: nearly every other route — glycogen storage, gluconeogenesis, the pentose phosphate pathway, pyruvate's multiple fates — connects to it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Location: cytosol. Net result per glucose: 2 pyruvate + 2 ATP + 2 NADH.
- Investment phase: 2 ATP spent; payoff phase: 4 ATP made.
- Rate-limiting, committed enzyme: phosphofructokinase-1 (PFK-1).
- Works without oxygen; anaerobically ends in lactate instead of pyruvate.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Rapidly dividing cancer cells and some tumour cells rely heavily on glycolysis even in oxygen (the Warburg effect) — a target for anticancer drug research. Fluoride tubes are used for blood glucose samples because fluoride inhibits enolase in red cells, stopping them from consuming the glucose before the laboratory measures it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Write the net reaction of aerobic glycolysis and account for each ATP (invested vs produced).
2. Why must NAD⁺ be regenerated for glycolysis to continue, and how is this achieved anaerobically?
3. Red blood cells rely solely on glycolysis. Which structural fact about them explains this?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Glycolysis: cytosol, 10 steps, glucose → 2 pyruvate, net 2 ATP + 2 NADH.
- Investment (5 steps, −2 ATP) then payoff (5 steps ×2, +4 ATP).
- PFK-1 is the committed, rate-limiting step; oxygen is never required.`,
      },
    ],
  },

  {
    nodeId: 'major-steps-of-glycolysis',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Glycolysis — Major Steps',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The ten reactions divide into a preparatory phase (steps 1–5) and a payoff phase (steps 6–10).

**Preparatory phase** (glucose → glyceraldehyde-3-phosphate; costs 2 ATP):

1. **Hexokinase** (most tissues) / **glucokinase** (liver, pancreas): glucose + ATP → glucose-6-phosphate. Irreversible; traps glucose inside the cell (phosphates cannot cross membranes).
2. **Phosphoglucose isomerase**: glucose-6-phosphate ↔ fructose-6-phosphate (aldose → ketose).
3. **Phosphofructokinase-1 (PFK-1)**: fructose-6-phosphate + ATP → fructose-1,6-bisphosphate. **Irreversible and committed** — once fructose-1,6-bisphosphate is formed, the molecule must continue through glycolysis. This is the rate-limiting step.
4. **Aldolase**: fructose-1,6-bisphosphate → glyceraldehyde-3-phosphate (G3P) + dihydroxyacetone phosphate (DHAP).
5. **Triose phosphate isomerase**: DHAP ↔ G3P — so both halves of glucose continue as G3P.

**Payoff phase** (each G3P → pyruvate; happens twice per glucose):

6. **Glyceraldehyde-3-phosphate dehydrogenase**: G3P + Pᵢ + NAD⁺ → 1,3-bisphosphoglycerate + NADH. The oxidation step that captures electrons.
7. **Phosphoglycerate kinase**: 1,3-BPG + ADP → 3-phosphoglycerate + ATP. First ATP made — **substrate-level phosphorylation**.
8. **Phosphoglycerate mutase**: 3-PG → 2-phosphoglycerate.
9. **Enolase**: 2-PG → phosphoenolpyruvate (PEP); dehydration creates a high-energy enol phosphate.
10. **Pyruvate kinase**: PEP + ADP → pyruvate + ATP. Irreversible; second substrate-level phosphorylation.

Four enzymes are **irreversible** (hexokinase/glucokinase, PFK-1, pyruvate kinase, and glyceraldehyde-3-phosphate dehydrogenase is reversible but physiologically driven forward); the first, third, and last are the classic regulatory control points that gluconeogenesis must bypass.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Preparatory: hexokinase → phosphoglucose isomerase → PFK-1 → aldolase → triose phosphate isomerase (−2 ATP).
- Payoff: G3P dehydrogenase (NADH) → phosphoglycerate kinase (ATP) → mutase → enolase → pyruvate kinase (ATP), ×2.
- Substrate-level phosphorylation: phosphoglycerate kinase and pyruvate kinase steps.
- Irreversible trio that gluconeogenesis must bypass: hexokinase/glucokinase, PFK-1, pyruvate kinase.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Which single reaction commits a sugar molecule to glycolysis, and why is it called "committed"?
2. Name the two steps of substrate-level phosphorylation and their immediate phosphate donors.
3. Why does step 5 (triose phosphate isomerase) matter for the ATP count?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Steps 1–5: phosphorylate, rearrange, split (2 ATP in; PFK-1 is the gate).
- Steps 6–10: oxidise and pay off (NADH at step 6; ATP at steps 7 and 10), twice per glucose.
- Remember the irreversible enzymes: glucokinase/hexokinase, PFK-1, pyruvate kinase.`,
      },
    ],
  },

  {
    nodeId: 'regulation-of-glycolysis',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Glycolysis — Regulation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Glycolysis is controlled mainly at its three irreversible steps, so that flux responds to the cell's energy state and the body's hormonal signal.

**PFK-1 — the primary control point.** It is allosterically inhibited by **ATP** (energy abundant) and **citrate** (TCA cycle saturated), and activated by **AMP** and **fructose-2,6-bisphosphate (F-2,6-BP)**. F-2,6-BP is the powerful hormonal link: made from fructose-6-phosphate by **PFK-2**, whose activity is switched by phosphorylation. **Insulin** (fed state) dephosphorylates PFK-2 → F-2,6-BP rises → PFK-1 active → glycolysis runs. **Glucagon** (fasting) phosphorylates PFK-2 → F-2,6-BP falls → PFK-1 idle → gluconeogenesis wins instead.

**Pyruvate kinase — feed-forward and hormonal control.** Activated by **fructose-1,6-bisphosphate** (feed-forward activation: an early product accelerates the last step) and inhibited by **ATP** and **alanine** (an amino acid abundant when protein, not sugar, should be the fuel signal). In the liver, glucagon-driven phosphorylation inactivates it.

**Hexokinase vs glucokinase — tissue logic.** Hexokinase (most tissues) is inhibited by its own product, glucose-6-phosphate, so cells stop importing glucose when they have enough. Hepatic **glucokinase** is not inhibited by G6P and has a high $K_m$ for glucose — the liver only takes up glucose meaningfully when blood glucose is high (fed state), then stores it.

**Substrate-level control.** Oxygen availability acts indirectly: when NAD⁺ cannot be regenerated (anaerobic conditions), glycolysis slows regardless of hormone levels.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Control points: PFK-1 (main), pyruvate kinase, hexokinase/glucokinase.
- PFK-1: inhibited by ATP and citrate; activated by AMP and F-2,6-BP.
- F-2,6-BP is the insulin/glucagon switch: insulin ↑ it (glycolysis on), glucagon ↓ it (off).
- Pyruvate kinase: feed-forward activated by F-1,6-BP; inhibited by ATP, alanine; liver form inactivated by glucagon phosphorylation.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This regulation explains drug and disease observations: sulfonylureas raise insulin, which via F-2,6-BP shifts the liver from glucose production to glucose use — part of why injected insulin lowers blood glucose. Alcoholic hypoglycaemia arises because high NADH (from ethanol oxidation) stalls pyruvate conversion, starving gluconeogenesis.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Predict glycolytic flux in a liver cell given high ATP, high citrate, and high glucagon. Justify each effector.
2. Why is fructose-2,6-bisphosphate called a "hormonal link" rather than simply an allosteric activator?
3. Why can the liver afford a glucokinase with a high Km while brain hexokinase has a low Km?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Three control points, all at irreversible steps; PFK-1 dominates.
- Energy signal (ATP/AMP/citrate) + hormonal signal (insulin ↔ glucagon via F-2,6-BP).
- Feed-forward (F-1,6-BP → pyruvate kinase) and product inhibition (G6P → hexokinase) fine-tune flux.`,
      },
    ],
  },

  {
    nodeId: 'fate-of-pyruvate',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Fate of Pyruvate',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pyruvate is glycolysis's exit molecule — and one of the great junctions of metabolism. What happens to it depends on oxygen availability and the tissue's needs. Four fates matter most:

**1. Reduction to lactate (anaerobic).** **Lactate dehydrogenase** reduces pyruvate to lactate, oxidising NADH back to NAD⁺:

$$\\text{Pyruvate} + \\text{NADH} + \\text{H}^+ \\leftrightarrow \\text{Lactate} + \\text{NAD}^+$$

This is not "waste": it regenerates the NAD⁺ that glycolysis needs, letting red cells and hard-working muscle keep making ATP without oxygen. Lactate then travels to the liver, which reoxidises it to pyruvate and resynthesises glucose (**Cori cycle**).

**2. Oxidative decarboxylation to acetyl-CoA (aerobic).** The **pyruvate dehydrogenase complex** in the mitochondrial matrix converts pyruvate to acetyl-CoA — the entry ticket to the citric acid cycle. Treated in the next subtopic.

**3. Carboxylation to oxaloacetate (gluconeogenesis and anaplerosis).** **Pyruvate carboxylase** (biotin-dependent, ATP-consuming, mitochondrial) adds a carbon:

$$\\text{Pyruvate} + \\text{CO}_2 + \\text{ATP} \\rightarrow \\text{Oxaloacetate} + \\text{ADP} + \\text{P}_i$$

Oxaloacetate either enters gluconeogenesis or tops up the citric acid cycle.

**4. Transamination to alanine.** Pyruvate accepts an amino group from glutamate (**ALT/alanine aminotransferase**), forming alanine — the route by which muscle exports nitrogen to the liver (**glucose–alanine cycle**).

The branching logic is worth memorising: no oxygen → lactate; energy demand + oxygen → acetyl-CoA; fasting → oxaloacetate → glucose; surplus nitrogen → alanine.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four fates: lactate (LDH, regenerates NAD⁺), acetyl-CoA (PDH, aerobic), oxaloacetate (pyruvate carboxylase, gluconeogenesis/anaplerosis), alanine (transamination, nitrogen transport).
- Lactate is recycled by the liver via the Cori cycle.
- Pyruvate carboxylase is biotin-dependent and activated by acetyl-CoA.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Lactic acidosis is a serious adverse effect of metformin overdosage and of tissue hypoxia (shock): lactate accumulates faster than the liver can clear it. Alanine aminotransferase (ALT) is a standard liver-function blood test — elevated when hepatocytes release their transamination machinery.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does anaerobic glycolysis require pyruvate → lactate, in terms of NAD⁺?
2. Name the enzyme and cofactor for pyruvate → oxaloacetate, and state two possible uses of the product.
3. How does pyruvate → alanine connect muscle metabolism to liver nitrogen disposal?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Pyruvate's four fates: lactate, acetyl-CoA, oxaloacetate, alanine.
- Choice depends on oxygen, energy demand, feeding state, and nitrogen load.
- Each fate feeds a different topic: Cori cycle, TCA cycle, gluconeogenesis, glucose–alanine cycle.`,
      },
    ],
  },

  {
    nodeId: 'pyruvate-oxidation',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Fate of Pyruvate — Pyruvate Oxidation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Under aerobic conditions pyruvate enters the mitochondrial matrix and is oxidatively decarboxylated to **acetyl-CoA** by the **pyruvate dehydrogenase (PDH) complex** — a large multi-enzyme assembly of three enzyme activities and five coenzymes.

$$\\text{Pyruvate} + \\text{CoA} + \\text{NAD}^+ \\rightarrow \\text{Acetyl-CoA} + \\text{CO}_2 + \\text{NADH}$$

This is a committed, **irreversible** step — there is no enzyme in mammals that converts acetyl-CoA back to pyruvate. That single irreversibility has a major consequence: fat (as acetyl-CoA) can never be turned back into glucose.

**The five coenzymes** (classic exam list), each derived from a vitamin:
- **TPP** (thiamine pyrophosphate, vitamin B₁) — decarboxylates pyruvate;
- **Lipoic acid** — swings the acetyl group between active sites, collecting electrons;
- **CoA** (pantothenic acid, B₅) — accepts the acetyl group;
- **FAD** (riboflavin, B₂) — reoxidises reduced lipoamide;
- **NAD⁺** (niacin, B₃) — final electron acceptor, leaving as NADH.

**Regulation.** PDH is inhibited by its products (**NADH, acetyl-CoA**) and by **ATP**, and activated by **ADP and pyruvate**. Most powerfully, it is switched by covalent phosphorylation: a dedicated **PDH kinase phosphorylates and inactivates** it (stimulated by NADH/acetyl-CoA/ATP), while **PDH phosphatase reactivates** it (stimulated by insulin, Ca²⁺, and ADP). Insulin therefore promotes carbohydrate oxidation after a meal; a high-fat state switches fuel choice toward fat.

Thiamine (B₁) deficiency clinically stalls this complex — the basis of the cardiovascular and neurological features of beriberi, and of Wernicke–Korsakoff syndrome in alcoholism.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Location: mitochondrial matrix. Irreversible, committed bridge from glycolysis to the TCA cycle.
- Products per pyruvate: 1 acetyl-CoA + 1 CO₂ + 1 NADH.
- Five coenzymes: TPP (B₁), lipoate, CoA (B₅), FAD (B₂), NAD⁺ (B₃).
- Product inhibition (NADH, acetyl-CoA) + PDH kinase/phosphatase switch; insulin activates, high-energy state inhibits.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Arsenite and mercury poison the lipoamide arm of the complex — classical enzyme-toxicology examples. Thiamine replacement in alcohol-dependent patients is standard practice precisely because PDH (and α-ketoglutarate dehydrogenase) are thiamine-dependent; giving glucose intravenously without thiamine in a deficient patient can precipitate acute decompensation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five coenzymes of PDH with their vitamins, and match each to its role.
2. Why does the irreversibility of pyruvate oxidation make fat-to-glucose conversion impossible?
3. Two effects of insulin on PDH — name them and explain the fed-state logic.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Pyruvate oxidation: PDH complex, matrix, pyruvate → acetyl-CoA + CO₂ + NADH.
- Five coenzymes from five vitamins; lipoamide is the swinging arm.
- Controlled by products, energy charge, and an insulin-sensitive phosphorylation switch.`,
      },
    ],
  },

  {
    nodeId: 'citric-acid-cycle-relationship',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Fate of Pyruvate — Relationship with the Citric Acid Cycle',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The acetyl-CoA produced from pyruvate oxidation does not simply "burn" — it is handed to the **citric acid (TCA, Krebs) cycle**, the mitochondrial hub that oxidises the two acetyl carbons fully to CO₂ while trapping energy as NADH and FADH₂.

**The connection in sequence.** Acetyl-CoA condenses with **oxaloacetate** to form citrate (**citrate synthase**, irreversible). Through the cycle's eight steps the two acetyl carbons are released as CO₂, and oxaloacetate is regenerated — so the cycle is **catalytic** in oxaloacetate but **consumptive** in acetyl groups. Per acetyl group: **3 NADH, 1 FADH₂, 1 GTP, 2 CO₂**.

**Why the relationship matters for carbohydrate metabolism:**

1. **Energy accounting.** The NADH and FADH₂ feed the electron transport chain; each pyruvate that goes through PDH and one turn of the cycle ultimately yields ~12.5 ATP by oxidative phosphorylation — the overwhelming share of carbohydrate energy.
2. **Cycle dependence on carbohydrate.** The cycle only turns if oxaloacetate is available, and in fasting its principal replenisher (anaplerosis) is **pyruvate carboxylase** converting pyruvate → oxaloacetate. Without carbohydrate flux, oxaloacetate is drained into gluconeogenesis, the cycle slows, and acetyl-CoA is diverted to **ketone bodies** instead.
3. **Amphibolism.** Cycle intermediates are also biosynthetic precursors: citrate for fatty-acid synthesis (exported to the cytosol), α-ketoglutarate and oxaloacetate for amino acids, succinyl-CoA for haem. Carbohydrate metabolism therefore also supplies building blocks, not just fuel.

The deeper treatment of the cycle itself belongs to a dedicated topic later in this course — here the essential point is that glycolysis's pyruvate and the cycle are connected by a one-way, regulated, vitamin-dependent bridge.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pyruvate → acetyl-CoA (PDH) → TCA cycle; per acetyl group: 3 NADH + FADH₂ + GTP + 2 CO₂.
- Oxaloacetate is catalytic: cycle flux depends on anaplerotic pyruvate carboxylase.
- Fasting drains oxaloacetate to gluconeogenesis → cycle slows → ketogenesis begins.
- Cycle intermediates double as biosynthetic precursors (amphibolic).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Account for the ATP yield that one pyruvate ultimately produces through PDH + TCA + oxidative phosphorylation.
2. Why does prolonged fasting lead to ketone production, using oxaloacetate in your explanation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- The bridge: PDH makes acetyl-CoA; the TCA cycle burns it.
- Cycle speed depends on oxaloacetate supply — itself a product of pyruvate carboxylation.
- The relationship is metabolic bookkeeping: fuel oxidation and biosynthesis from one hub.`,
      },
    ],
  },

  {
    nodeId: 'gluconeogenesis-carb',
    courseId: 'bch-201',
    topicId: 'carbohydrate-metabolism-topic',
    nodeType: 'subtopic',
    title: 'Gluconeogenesis',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Gluconeogenesis** is the synthesis of **new glucose from non-carbohydrate precursors** — lactate, glycerol, and glucogenic amino acids. It is essential: the brain needs roughly 120 g of glucose per day, and liver glycogen stores last only 12–18 hours of fasting. After that, blood glucose depends on gluconeogenesis.

**Location and organs.** Predominantly the **liver**; the kidney cortex contributes significantly during prolonged fasting. Muscle cannot export glucose (it lacks glucose-6-phosphatase).

**The pathway in essence.** Gluconeogenesis is not simple reverse glycolysis. Seven of glycolysis's reactions are freely reversible and run backwards; but the three **irreversible** glycolytic steps are bypassed by four specialised, energetically expensive enzymes:

1. **Pyruvate carboxylase** (mitochondrial, biotin, ATP): pyruvate → oxaloacetate. Activated by acetyl-CoA.
2. **PEP carboxykinase (PEPCK)**: oxaloacetate → phosphoenolpyruvate, releasing CO₂ (GTP-dependent). Together, steps 1–2 bypass pyruvate kinase.
3. **Fructose-1,6-bisphosphatase**: fructose-1,6-bisphosphate → fructose-6-phosphate (bypasses PFK-1). The main regulatory site.
4. **Glucose-6-phosphatase**: glucose-6-phosphate → glucose (bypasses hexokinase). Present in liver and kidney — which is exactly why only those organs can export glucose.

**Energy cost.** 2 pyruvate → 1 glucose costs **6 high-energy phosphates** (4 ATP + 2 GTP) plus 2 NADH — gluconeogenesis is deliberately expensive because keeping blood glucose alive is a survival priority.

**Substrate routes.** Lactate (from muscle and red cells — Cori cycle) is oxidised to pyruvate first. Glycerol (from adipose lipolysis) enters as dihydroxyacetone phosphate. Glucogenic amino acids enter at pyruvate, oxaloacetate, or TCA intermediates. Fatty acids **cannot** yield net glucose (acetyl-CoA cannot become pyruvate in animals) — but their oxidation supplies the ATP and NADH that drive gluconeogenesis, and their β-oxidation indirectly feeds the pathway.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Definition: new glucose from non-carbohydrate precursors (lactate, glycerol, glucogenic amino acids).
- Organ: liver chiefly, kidney in prolonged fasting; muscle cannot export glucose (no glucose-6-phosphatase).
- Four bypass enzymes replace three irreversible glycolytic steps; overall cost 6 ~P + 2 NADH per glucose.
- Key regulatory step: fructose-1,6-bisphosphatase; inhibited by F-2,6-BP and AMP.
- Acetyl-CoA activates pyruvate carboxylase but yields no net glucose.`,
      },
      {
        kind: 'FORMULAS',
        body: `Overall for two pyruvates:

$$2\\,\\text{Pyruvate} + 4\\,\\text{ATP} + 2\\,\\text{GTP} + 2\\,\\text{NADH} + 6\\,\\text{H}_2\\text{O} \\rightarrow \\text{Glucose} + 4\\,\\text{ADP} + 2\\,\\text{GDP} + 2\\,\\text{NAD}^+ + 6\\,\\text{P}_i$$

Worked example — Cori cycle bookkeeping: muscle exports lactate; the liver pays 6 high-energy phosphates to rebuild one glucose; the muscle then re-oxidises that glucose anaerobically to lactate, netting 2 ATP. The liver's ATP (from fatty-acid oxidation) effectively buys the muscle's anaerobic ATP — a classic exam calculation.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Metformin's major glucose-lowering action is inhibition of hepatic gluconeogenesis (via AMPK activation and mitochondrial effects). Alcohol causes fasting hypoglycaemia because ethanol oxidation raises NADH, blocking lactate → pyruvate — the first step of the gluconeogenic use of lactate.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four gluconeogenic bypass enzymes and the glycolytic enzyme each replaces.
2. Why can fatty acids not yield net glucose, yet fasting gluconeogenesis depends on fat oxidation?
3. A patient's liver glycogen is depleted after 18 hours fasting. What maintains the brain's glucose, and from which substrates?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Gluconeogenesis = glucose synthesis from lactate, glycerol, amino acids; liver + kidney.
- Reverse the reversible steps; bypass the three irreversible ones with four enzymes.
- Expensive (6 ~P + 2 NADH per glucose) but life-critical in fasting.`,
      },
    ],
  },
];
