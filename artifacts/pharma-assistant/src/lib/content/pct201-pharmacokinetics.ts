import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-24: Bioavailability and Pharmacokinetic
 * Calculations.
 *
 * Batch 27: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–23
 * top-level topic convention) plus its twelve children pct-24-1…24-12
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-24 has no surviving Phase-1 tier record; the topic and
 * the conceptual children (24-1 Basic Parameters, 24-2 Bioavailability,
 * 24-12 Interpretation) are Tier B, while the calculation children —
 * Absolute Bioavailability (24-3), Relative Bioavailability (24-4),
 * Elimination Rate (24-5), Half-Life (24-6), Clearance (24-7), Volume
 * of Distribution (24-8), Loading Dose (24-9), Maintenance Dose
 * (24-10), Basic Pharmacokinetic Equations (24-11) — are Tier C,
 * matching the calculation-lesson convention (pct-5-7; pct-9…23
 * blocks). Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the introductory pharmacokinetic
 * arithmetic — one-compartment thinking, F (absolute/relative), k,
 * t½, clearance, Vd, loading/maintenance dosing. First-order decay
 * mathematics was established in pct-23 (physical decay) with the
 * pct-43 kinetics parallel; here the SAME mathematics serves drug
 * elimination — cross-referenced as one exponential family, not
 * re-taught. Clinical individualisation machinery (dose by weight/
 * BSA/renal function) is pct-12's canon and is referenced only.
 * All worked values are stated illustrative values; no population-PK
 * claims or therapeutic ranges are asserted as universal constants.
 */
export const pct201PharmacokineticsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-24',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'topic',
    title: 'Bioavailability and Pharmacokinetic Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Pharmacokinetics is what the body does to the drug, described quantitatively: how much of a dose reaches the bloodstream (**bioavailability**), how fast the body removes it (**elimination rate**, **half-life**, **clearance**), how widely it spreads (**volume of distribution**), and how those numbers translate into **loading and maintenance doses**. This topic builds that arithmetic at the 200L level.\\n\\n**The one-compartment picture.** All introductory PK arithmetic treats the body as one uniform tank: drug enters, distributes through a volume (Vd), and drains at a rate proportional to the amount present (first order). The model is a deliberate simplification — but every quantity in this topic is defined by it, and its definitional identities are the machinery of every lesson that follows.\\n\\n**The four numbers that carry the topic.** (1) **F** — fraction of dose reaching systemic circulation (0 ≤ F ≤ 1); (2) **k** — first-order elimination constant (per unit time); (3) **Cl** — clearance, the volume of plasma cleared of drug per unit time; (4) **Vd** — the apparent volume the dose spreads into. Every worked identity in 24-3…24-11 is built from these four.\\n\\n**Mathematical continuity**: the exponential is the same first-order family established for physical decay (pct-23) and chemical stability (pct-43) — a constant *fraction* removed per unit time, half-life as the natural clock. Only the interpretation is new; the algebra is not.\\n\\n**Standing discipline**: units and time bases stated for every parameter; back-checks close every computation; illustrative values flagged as stated, never presented as drug-specific clinical constants.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- PK quantifies ADME; this topic owns the introductory arithmetic.\\n- Four parameters carry everything: F, k, Cl, Vd (one-compartment thinking).\\n- Elimination is first-order — the same exponential family as pct-23/pct-43.\\n- Loading dose fills the volume; maintenance dose replaces elimination.\\n- Units, time bases, back-checks, and stated-value discipline throughout.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define ADME and state what each of F, k, Cl, and Vd quantifies.\\n2. What does one-compartment thinking assume, and why is the simplification useful?\\n3. Which two earlier topics share the first-order exponential, and in what roles?\\n4. State the standing units/back-check discipline.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Four numbers — F, k, Cl, Vd — one tank model, one exponential. Fill the tank with a loading dose, keep it filled with maintenance; state units, back-check everything.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-24', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-24-1',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Basic Pharmacokinetic Parameters',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **parameter** is a number that summarises behaviour — and pharmacokinetics describes a drug's journey with a small set of them, each tied to one phase of **ADME** (Absorption, Distribution, Metabolism, Excretion).\\n\\n**The parameter set.** *Absorption*: rate (how fast the dose enters) and extent — **F**, the bioavailable fraction. *Distribution*: **Vd**, the apparent volume into which the dose dilutes. *Elimination* (metabolism + excretion): **k**, the first-order constant; **t½** its half-life expression; **Cl**, the clearance. Each parameter answers one question the prescriber cares about: how much gets in (F), where it goes (Vd), how fast it leaves (k, t½, Cl).\\n\\n**Parameters vs measurements.** A **plasma concentration** is a measurement; parameters are *derived* from measurements — k from the decline of concentrations over time, Cl from dose ÷ AUC. The distinction matters because calculations consume parameters and produce predictions; the predictions are then checked against fresh measurements (24-12's canon).\\n\\n**Why the pharmacist starts here.** Dose sizes, dosing intervals, salt/moiety basis (pct-22), and infusion arithmetic (pct-15) all end in these parameters; this lesson fixes their names, units, and the one-line meaning of each before any identity is built on them.\\n\\n**Boundary**: population *values* of parameters for specific drugs are drug-data canon (references/monographs), never assumed in this topic — examples use stated illustrative values.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- ADME organises the parameters: F (extent in), Vd (spread), k/t½/Cl (removal).\\n- Each parameter answers one clinical question about the drug's journey.\\n- Concentrations are measurements; parameters are derived from them.\\n- Calculations consume parameters to produce predictions; measurements verify.\\n- Drug-specific parameter values are stated data, never assumed here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Map each parameter to its ADME phase and its units.\\n2. What distinguishes a measurement from a parameter, and which drives which?\\n3. Which earlier topics' arithmetic feeds into these parameters?\\n4. Why are drug-specific values not assumed in this topic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `F gets it in, Vd spreads it, k/t½/Cl remove it. Measurements make parameters; parameters make predictions; the cycle closes with verification.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-2',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Bioavailability',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Bioavailability (F)** is the fraction of an administered dose that reaches systemic circulation **unchanged** — the foundation of every dose actually delivered. IV dosing places the entire dose in the bloodstream: by definition **F(IV) = 1**; every other route fights absorption barriers, first-pass metabolism, and incomplete release, so F < 1.\\n\\n**What reduces F.** (1) *Incomplete absorption* — poor solubility, transit too fast, degradation in the gut. (2) *First-pass metabolism* — absorbed drug travelling via portal blood through the liver may be metabolised before reaching circulation. (3) *Incomplete release* — the dosage form fails to deliver its contents (pct-2's disintegration/dissolution stage). The three losses compound: the fraction absorbed times the fraction escaping first pass.\\n\\n**How F is measured** (conceptual at 200L): compare the **AUC** (area under the concentration–time curve) of the route in question with a reference — the quantitative machinery is 24-3/24-4's canon; this lesson fixes the meaning: AUC is the body's total exposure, and F is exposure relative to dose placed straight in the bloodstream.\\n\\n**Why F matters practically.** Route changes change F (a switch from IV to oral multiplies the effective exposure by F); formulation changes can change F within a route (the basis of bioequivalence, 24-4); and dose discussions are meaningless across routes without it — "the same 100 mg" is a different exposure orally (F 0.5) than intravenously.\\n\\n**Units discipline**: F is a fraction (0–1) or a percentage (0–100%); state which convention is in use before computing.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- F = fraction of dose reaching circulation unchanged; F(IV) = 1 by definition.\\n- Three compounding losses: absorption, first-pass metabolism, incomplete release.\\n- AUC = total exposure; F is an exposure ratio against a reference route.\\n- Route switches and formulation switches both change F.\\n- Fraction vs percentage — state the convention before computing.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define bioavailability and explain why F(IV) = 1 by definition.\\n2. Name the three F-reducing losses and how they compound.\\n3. What does AUC represent, and what role does it play in F?\\n4. Why is "the same 100 mg" route-dependent?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `F = what arrives unchanged; IV is 1 by definition; absorption, first pass, and release each take their cut. Exposure is AUC-based; routes are not interchangeable without F.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-3',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Absolute Bioavailability',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Absolute bioavailability** quantifies a non-IV route against the IV reference: how much of the oral (or other) dose actually arrives. The identity:\\n\\n$$\\nF = \\frac{AUC_{\\text{oral}}}{AUC_{\\text{IV}}} \\times \\frac{Dose_{\\text{IV}}}{Dose_{\\text{oral}}}\\n$$\\n\\n**Why the dose ratio appears.** If both routes received identical doses, the AUC ratio alone would give F; comparing unequal doses requires scaling — the AUCs must be compared *per unit dose* (dose-normalised exposure). The identity is dose-normalisation in one line.\\n\\n**Sanity envelope**: 0 ≤ F ≤ 1; a computed F outside that envelope signals an arithmetic or data error, never a real drug.\\n\\n**Worked route**: doses and AUCs are stated; compute the two ratios; multiply; interpret as a percentage of the oral dose arrived. The back-check reverses: F × Dose(oral) ÷ Dose(IV) must reproduce the AUC ratio — the identity closes.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Absolute bioavailability**\\n\\n$$\\nF = \\frac{AUC_{\\text{oral}}}{AUC_{\\text{IV}}} \\times \\frac{Dose_{\\text{IV}}}{Dose_{\\text{oral}}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1.** Stated: AUC(oral) = 24 mg·h/L, AUC(IV) = 25 mg·h/L, Dose(oral) = 480 mg, Dose(IV) = 240 mg.\\n\\nF = (24/25) × (240/480) = 0.96 × 0.5 = **0.48** (48%). Interpretation: less than half the oral dose reaches circulation unchanged. Sanity: inside 0–1 ✓. Back-check: 0.48 × 480 ÷ 240 = 0.96 = AUC ratio ✓.\\n\\n**Example 2 — dose-normalised comparison.** Oral 200 mg gives AUC 20; IV 100 mg gives AUC 25. F = (20/25) × (100/200) = 0.8 × 0.5 = **0.40**. The dose scaling is what keeps the comparison honest when doses differ.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute F for AUC(oral) 18, AUC(IV) 20, Dose(oral) 600 mg, Dose(IV) 300 mg (0.45).\\n2. Why does the dose ratio appear in the identity?\\n3. What does a computed F of 1.2 indicate, and why?\\n4. State the back-check identity that closes every F computation.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `F = AUC ratio × dose ratio; 0 ≤ F ≤ 1; interpret as percent arrived. Dose-normalise first, back-check last.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-4',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Relative Bioavailability',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Relative bioavailability** compares a test formulation against another **non-IV** reference — tablet vs oral solution, generic vs innovator — the quantitative basis of **bioequivalence** testing.\\n\\n$$\\nF_{\\text{rel}} = \\frac{AUC_{\\text{test}}}{AUC_{\\text{ref}}} \\times \\frac{Dose_{\\text{ref}}}{Dose_{\\text{test}}}\\n$$\\n\\n**Reading the identity**: dose-normalised exposure of test over reference. If doses are equal, F(rel) is simply the AUC ratio: 1.0 means identical exposure; 0.9 means 90% of the reference's exposure; 1.1 means 10% more.\\n\\n**Bioequivalence context** (conceptual at 200L): two products are bioequivalent when F(rel) and peak exposure (Cmax) fall inside a pre-specified acceptance interval around 1.0 — the acceptance bounds are **regulatory constants** (referenced, never invented here); the calculation concept is the ratio arithmetic this lesson owns.\\n\\n**Why formulation can change F(rel)** links directly to pct-2/29: release (disintegration/dissolution), solubility, and particle properties all shape how completely the dose becomes available for absorption. A solution reference has no release step — hence its use as the "ceiling" reference in relative studies.\\n\\n**Boundary with 24-3**: absolute F asks "vs the bloodstream itself (IV)"; relative F asks "vs another pharmacy product". Same arithmetic family, different reference; both are exposure ratios with dose normalisation.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Relative bioavailability**\\n\\n$$\\nF_{\\text{rel}} = \\frac{AUC_{\\text{test}}}{AUC_{\\text{ref}}} \\times \\frac{Dose_{\\text{ref}}}{Dose_{\\text{test}}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — equal doses.** Generic tablet AUC 23 vs reference 25 at the same dose: F(rel) = 23/25 = **0.92** — 92% of reference exposure.\\n\\n**Example 2 — unequal doses.** Test 500 mg AUC 30; ref 250 mg AUC 16: F(rel) = (30/16) × (250/500) = 1.875 × 0.5 = **0.94** (0.9375 exactly).\\n\\n**Example 3 — above 1 is possible.** Test 100 mg AUC 22; ref 100 mg AUC 20: F(rel) = **1.10** — the test delivers 10% more exposure per dose (legitimate for a non-IV comparison; the absolute-F envelope 0–1 does not apply here).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute F(rel): test AUC 21 vs ref 24, equal doses (0.875).\\n2. Test 400 mg AUC 25; ref 200 mg AUC 15 — F(rel)? (0.833.)\\n3. Why can F(rel) exceed 1 while absolute F cannot?\\n4. What are the two exposure measures in bioequivalence, and whose bounds are the acceptance interval?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `F(rel) = dose-normalised AUC of test vs reference product; 1.0 = equivalent, bounds are regulatory. vs IV = absolute; vs product = relative; same arithmetic, different reference.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-5',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Elimination Rate',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Elimination rate** is how fast the body removes drug. For most drugs the removal is **first-order**: the amount eliminated per unit time is proportional to the amount present — more drug in, faster removal; as levels fall, removal slows. The proportionality constant is **k** (per unit time).\\n\\n**The first-order identity** (concentration form):\\n\\n$$\\nC = C_0 e^{-kt}\\n$$\\n\\n**The half-life bridge**: t½ = 0.693/k — the same clock conversion pct-23-5 taught for physical decay; the algebra is identical, the process (metabolism + excretion vs nuclear transformation) is not.\\n\\n**Reading k's units.** k in h⁻¹ means "a fraction of what *remains* is eliminated per hour" — 0.0693 h⁻¹ removes about 6.93% of the remaining amount per hour (not of the original dose — the classic misreading).\\n\\n**Zero-order contrast** (conceptual): a few processes remove a **constant amount** per unit time regardless of amount present; the exponential machinery does not apply, and the 200L rule is simply to recognise which regime a stated problem describes.\\n\\n**Check habit**: after computing k from two concentrations, reconstruct C₀ from C and k — the exponential must close.`,
      },
      {
        kind: 'FORMULAS',
        body: `**First-order decline**\\n\\n$$\\nC = C_0 e^{-kt}\\n$$\\n\\n**k from two concentrations**\\n\\n$$\\nk = \\frac{\\ln(C_1/C_2)}{\\Delta t}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — k from two points.** C₀ = 12 mg/L at time 0; C = 6 mg/L at 10 h. First-order: C/C₀ = e^(−kt) → 0.5 = e^(−10k) → k = 0.693/10 = **0.0693 h⁻¹** (one half-life took exactly 10 h — a consistency gift).\\n\\n**Example 2 — concentration at a time.** With k = 0.0693 h⁻¹, C at 5 h = 12 × e^(−0.0693 × 5) = 12 × e^(−0.3465) = 12 × 0.7071 = **8.49 mg/L**.\\n\\n**Example 3 — fraction-remaining reading.** After 20 h (2 half-lives): 12 × (1/2)² = **3 mg/L** — the "6.93% of remaining per hour" compounding exactly.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. C₀ = 16 mg/L, C = 4 mg/L at 12 h — k? (0.1155 h⁻¹.)\\n2. Why does 0.0693 h⁻¹ not mean "6.93% of the original dose per hour"?\\n3. Which two earlier topics used the same exponential, and how does this use differ?\\n4. What distinguishes zero-order removal, and what happens to the exponential machinery there?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `k = fraction of remaining removed per time; C = C₀e^(−kt); t½ = 0.693/k. Same clock as decay, same algebra; the process is biology, not physics.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-6',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Half-Life',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **elimination half-life** (t½) is the time for plasma concentration to fall to half — the clinical clock of elimination, and the parameter most quoted at the bench.\\n\\n$$\\nt_{1/2} = \\frac{0.693}{k}\\n$$\\n\\n**Counting half-lives** (pct-23-5's method, re-used): after n = Δt/t½ half-lives, concentration = C₀ × (1/2)ⁿ. Five half-lives leave 1/32 ≈ 3% of what was present — the source of the "**five half-lives ≈ washout**" convention (a convention, stated as such).\\n\\n**Steady state and the same clock**: with repeated dosing, accumulating levels approach a plateau; the time to practical steady state is governed by t½ (the conventional "~5 half-lives to steady state" — again a convention, stated). The plateau value itself is 24-10's canon.\\n\\n**What changes t½**: k changes — disease, age, and drug interactions alter elimination (the parameter changes; the algebra never does). Clinical adjustment arithmetic for organ impairment is pct-12-4's canon; here the take-away is that t½ is a *derived* number, only as good as the k it came from.\\n\\n**Check habit**: every t½ claim is checked by halving: C₀/2 must fall at t½, C₀/4 at 2t½ — the table test.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Half-life**\\n\\n$$\\nt_{1/2} = \\frac{0.693}{k}, \\qquad \\frac{C}{C_0} = \\left(\\frac{1}{2}\\right)^{\\Delta t/t_{1/2}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — t½ from k.** k = 0.0693 h⁻¹: t½ = 0.693/0.0693 = **10 h**.\\n\\n**Example 2 — concentration table.** C₀ = 40 mg/L, t½ = 10 h: 5 h → 28.3; 10 h → 20; 20 h → 10; 30 h → 5 mg/L (each row ×(1/2)^(Δt/10); 40 × 0.7071 = 28.3 at the half-half-life).\\n\\n**Example 3 — washout.** Time to 1/32 of C₀: n = 5 → 5 × 10 h = **50 h** (the "≈97% gone" convention at work).\\n\\n**Example 4 — steady state timing.** Dosing every 12 h reaches practical steady state in ≈ 5 × 10 = **50 h** — dosing frequency does not shorten the climb; t½ does.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. t½ for k = 0.1155 h⁻¹? (6 h.)\\n2. C₀ = 8 mg/L, t½ = 6 h: concentration at 18 h? (1 mg/L, n = 3.)\\n3. Why does more frequent dosing not reach steady state sooner?\\n4. What is the table test for a t½ claim?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `t½ = 0.693/k; count halvings; five half-lives ≈ washout and ≈ steady state (conventions, stated). The clock comes from k — and k comes from data.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-7',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Clearance',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Clearance (Cl)** is the volume of plasma cleared of drug per unit time — the body's removal plumbing expressed as a flow (L/h). It is the most clinically consequential parameter: maintenance dosing exists to balance it.\\n\\n**The defining relationship**: rate of removal = Cl × C (amount/time = L/h × mg/L — dimensionally exact). This is the parameter behind "the body removes X mg per hour at concentration C".\\n\\n**The central PK identity**:\\n\\n$$\\nCl = k \\times Vd\\n$$\\n\\n(k per h × Vd in L = L/h) — the identity that links the removal fraction (k) to the removal flow (Cl) through the spread (Vd). It is checked dimensionally every time.\\n\\n**Why Cl drives dosing**: at steady state, rate in = rate out; rate in = F × dose per time; so **dose rate = Cl × target concentration / F** — the skeleton of 24-10's maintenance-dose arithmetic.\\n\\n**Where clearance comes from**: hepatic metabolism + renal excretion (and other routes); total Cl is their sum. Organ-function adjustments (pct-12-4 canon) change Cl, and everything downstream — t½, maintenance dose — moves with it through the identities above.\\n\\n**Check habit**: any Cl value is tested with Cl = k × Vd using stated companions; a mismatch means one of the three numbers is on the wrong time base.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Removal rate**\\n\\n$$\\n\\text{rate} = Cl \\times C\\n$$\\n\\n**Central identity**\\n\\n$$\\nCl = k \\times Vd\\n$$\\n\\n**Steady-state balance**\\n\\n$$\\n\\text{dose rate} = \\frac{Cl \\times C_{\\text{target}}}{F}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — Cl from k and Vd.** k = 0.0693 h⁻¹, Vd = 50 L: Cl = 0.0693 × 50 = **3.47 L/h**. Dimensional check: h⁻¹ × L = L/h ✓.\\n\\n**Example 2 — removal rate.** At C = 10 mg/L with Cl = 3.47 L/h: rate = 3.47 × 10 = **34.7 mg/h** removed.\\n\\n**Example 3 — dose rate.** Target C = 10 mg/L, F = 0.5, Cl = 3.47 L/h: dose rate = 3.47 × 10/0.5 = **69.4 mg/h** → as a q12h regimen: 69.4 × 12 = **833 mg q12h** (illustrative rounding, stated).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Cl for k = 0.1155 h⁻¹ and Vd = 35 L? (4.04 L/h.)\\n2. Removal rate at C = 8 mg/L with Cl = 4.04 L/h? (32.3 mg/h.)\\n3. Why is Cl = k × Vd dimensionally exact, and what does a mismatch indicate?\\n4. What balances what at steady state, and which parameter is the balance target?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Cl is plumbing: rate = Cl × C; Cl = k × Vd; dose rate = Cl × target/F. The steady state is a balance — maintenance dosing is its arithmetic.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-8',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Volume of Distribution',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Volume of distribution (Vd)** is the apparent volume into which the body's drug dose appears to dilute — a **proportionality constant**, not a real anatomical space:\\n\\n$$\\nVd = \\frac{\\text{Amount in body}}{C}\\n$$\\n\\n**"Apparent" is the point.** A drug that leaves the plasma for tissues shows a *low* plasma concentration per amount dosed, so the arithmetic reports a **large** Vd (which can exceed body weight in litres — e.g. a stated illustrative Vd of 200 L for a 70 kg patient). A drug held in plasma shows high concentrations and a small Vd. Vd reflects **distribution behaviour**, not a physical compartment.\\n\\n**The load-dose connection**: to place a target concentration in the tank immediately, fill the tank: **LD = (Vd × C target)/F** — 24-9's canon, built directly on Vd.\\n\\n**Units and realism discipline**: Vd in L (or L/kg — state which); L/kg values multiply by the patient's weight for a patient-specific Vd. Illustrative values flagged as stated.\\n\\n**Check habit**: Vd × C must reconstruct the amount in body; if it does not, the concentration was not a representative (post-distribution) value — a classic introductory error of using absorption-phase peak concentrations in a Vd computation.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Definition**\\n\\n$$\\nVd = \\frac{\\text{Amount in body}}{C}, \\qquad \\text{Amount} = Vd \\times C\\n$$\\n\\n**L/kg form**\\n\\n$$\\nVd_{\\text{patient}} = Vd_{\\text{per kg}} \\times \\text{weight (kg)}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — Vd from data.** 250 mg IV; post-distribution C = 5 mg/L: Vd = 250/5 = **50 L**.\\n\\n**Example 2 — L/kg form.** Stated Vd = 0.7 L/kg, patient 70 kg: Vd = **49 L**.\\n\\n**Example 3 — concentration from amount.** 250 mg in a 50 L tank: C = 250/50 = **5 mg/L** — the identity run backwards; also the logic behind the loading-dose lesson.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 500 mg IV, post-distribution C = 10 mg/L — Vd? (50 L.)\\n2. Vd 1.0 L/kg at 60 kg — Vd in litres? (60 L.)\\n3. Why can Vd exceed body weight, and what does that reveal?\\n4. Which concentration may be used in a Vd computation, and why not the absorption-phase peak?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Vd = amount ÷ C — apparent, not anatomical. Tissue-leaving drugs look huge; plasma-held drugs look small. It is the tank the loading dose fills.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-9',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Loading Dose',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `When therapy cannot wait for the maintenance regimen to climb to therapeutic levels, a **loading dose** fills the tank at once:\\n\\n$$\\nLD = \\frac{Vd \\times C_{\\text{target}}}{F}\\n$$\\n\\n**Why Vd appears**: LD places Vd × C(target) amount of drug in the body to produce C(target) — the tank volume times the target depth; F scales it up if the route loses a fraction. (For IV, F = 1.)\\n\\n**What LD does and does not do.** It reaches the target **quickly** — it does not *maintain* it; elimination immediately begins draining the tank, which is why maintenance dosing follows (24-10). The plateau requires balance, not a one-time fill.\\n\\n**Why loading doses are chosen deliberately**: large fills can transiently exceed safe concentrations in sensitive patients (a safety consideration flagged as clinical canon, not arithmetic here); the decision to load is prescriber-owned.\\n\\n**Check habit**: LD × F ÷ Vd must reproduce C(target); and the LD/MD preview: when t½ is long relative to the dosing interval, the loading dose is roughly twice the maintenance dose per interval (a stated approximation, not an identity).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Loading dose**\\n\\n$$\\nLD = \\frac{Vd \\times C_{\\text{target}}}{F}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — IV loading.** Vd = 50 L, target C = 5 mg/L: LD = 50 × 5 = **250 mg IV**. Check: 250/50 = 5 mg/L ✓.\\n\\n**Example 2 — oral loading with F.** Same target, oral route F = 0.5: LD = 250/0.5 = **500 mg** — the F-compensation that keeps the *arrived-amount* arithmetic honest (pct-22's basis discipline applies to F-compensated doses too).\\n\\n**Example 3 — patient-specific Vd.** Vd 0.7 L/kg, 60 kg patient, target 5 mg/L: Vd = 42 L → LD = 42 × 5 = **210 mg** (illustrative).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. LD for Vd 40 L, target 6 mg/L IV? (240 mg.)\\n2. Oral, F = 0.8, Vd 40 L, target 6 mg/L — LD? (300 mg.)\\n3. Why does the oral LD exceed the IV LD by exactly 1/F?\\n4. What does a loading dose not accomplish, and what follows it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Fill the tank: LD = Vd × target / F. Quick, not sustained; oral pays 1/F; maintenance follows because elimination never pauses.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-10',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Maintenance Dose',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **maintenance dose** replaces what elimination removes each interval — the steady-state balance made into a prescription:\\n\\n$$\\n\\text{Maintenance dose} = \\frac{Cl \\times C_{\\text{target}} \\times \\tau}{F}\\n$$\\n\\n(τ = dosing interval in the same time unit as Cl.)\\n\\n**Why the interval appears**: Cl × C(target) is the removal *rate* (mg/h); multiplying by τ converts rate to amount-per-interval. Dosing q24h replaces a full day's elimination; q12h replaces half a day's, twice as often.\\n\\n**Steady state picture**: at plateau, the amount eliminated per interval equals the dose absorbed per interval (F × MD); levels oscillate around the target — the oscillation size is governed by t½ relative to τ (24-6's canon).\\n\\n**The two halves of a regimen.** LD (24-9) starts at the plateau; MD keeps it there; the classic pairing is LD then MD every τ. The LD/MD relationship inherits the parameters: MD per interval = Cl × C × τ/F, LD = Vd × C/F — both scale with the same target concentration.\\n\\n**Check habit**: MD/τ × F must equal Cl × C(target) (the balance restored); and recompute t½ relative to τ to sanity the expected oscillation.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Maintenance dose**\\n\\n$$\\nMD = \\frac{Cl \\times C_{\\text{target}} \\times \\tau}{F}\\n$$\\n\\n**Balance check**\\n\\n$$\\n\\frac{MD}{\\tau} \\times F = Cl \\times C_{\\text{target}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — MD from the balance.** Cl = 3.47 L/h, C(target) = 5 mg/L, F = 0.5, τ = 12 h: MD = (3.47 × 5 × 12)/0.5 = **416 mg q12h** (illustrative; round to a sensible unit strength — stated).\\n\\n**Example 2 — the balance check.** MD/τ × F = (416/12) × 0.5 = 17.3 mg/h absorbed vs removal Cl × C = 3.47 × 5 = 17.35 mg/h ✓ — the balance closes (rounding-consistent).\\n\\n**Example 3 — interval change.** Same drug, τ = 24 h: MD = 3.47 × 5 × 24/0.5 = **833 mg q24h** — same daily amount, delivered less often; the interval trade is oscillation size, not daily total.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. MD for Cl 4.04 L/h, target 8 mg/L, F = 1, τ = 12 h (388 mg).\\n2. Why does τ multiply in the identity, dimensionally?\\n3. Same daily total, q12h vs q24h — what differs at plateau?\\n4. State the balance check that closes every MD computation.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `MD = Cl × C × τ / F — replace what τ hours of elimination removes. The plateau is a balance; the interval sets the swing, not the total.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-11',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Basic Pharmacokinetic Equations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A worked consolidation: the topic's identities as one connected kit, run as a **case from data to regimen**. The point of the lesson is the *chain* — each identity feeds the next, and every link carries a check.\\n\\n**The chain.** (1) Two concentrations → k = ln(C₁/C₂)/Δt. (2) t½ = 0.693/k. (3) Dose ÷ C₀ → Vd. (4) Cl = k × Vd. (5) LD = Vd × C(target)/F. (6) MD = Cl × C(target) × τ/F. (7) Verify: MD/τ × F = Cl × C(target).\\n\\n**Unit discipline across the chain**: one time unit end-to-end (hours here); concentrations post-distribution; F on the route used; illustrative values stated.\\n\\n**Where each identity came from**: k/t½ — 24-5/24-6; Vd — 24-8; Cl — 24-7; LD/MD — 24-9/24-10; the consolidation adds nothing new except the connections — which is the skill both the exam and the bench test.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Case (all values stated, illustrative).** IV drug: 250 mg dose → C₀ = 5 mg/L; 12 h later C = 2.5 mg/L; target plateau 5 mg/L; oral form F = 0.5; τ = 12 h.\\n\\n1. k = ln(5/2.5)/12 = 0.693/12 = **0.0578 h⁻¹**.\\n2. t½ = 0.693/0.0578 = **12 h**.\\n3. Vd = 250/5 = **50 L**.\\n4. Cl = 0.0578 × 50 = **2.89 L/h**.\\n5. LD (IV) = 50 × 5 = **250 mg**.\\n6. MD = 2.89 × 5 × 12/0.5 = **347 → 350 mg q12h** (stated rounding).\\n7. Balance check: (350/12) × 0.5 = 14.6 mg/h vs Cl × C = 2.89 × 5 = 14.45 mg/h ✓ (rounding-consistent).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. In the case, why does k = 0.0578 h⁻¹ follow from one half-life in 12 h?\\n2. Recompute the MD for τ = 24 h (694 mg).\\n3. Which step's error would the balance check (step 7) catch first?\\n4. Why is the chain run in one time unit end-to-end?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Data → k → t½ → Vd → Cl → LD → MD → balance check. One clock, one tank, one chain — the identities are the same four parameters wearing six formulas.`,
      },
    ],
  },
  {
    nodeId: 'pct-24-12',
    courseId: 'pct-201',
    topicId: 'pct-24',
    nodeType: 'subtopic',
    title: 'Interpretation of Pharmacokinetic Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Numbers only matter when interpreted — this closing lesson turns the kit into professional judgement, with the arithmetic always anchored to what it predicts.\\n\\n**Reading a parameter set.** A drug with large Vd leaves the plasma for tissues (loading doses look big); a long t½ allows infrequent dosing but lengthens washout and the steady-state climb; high Cl demands larger or more frequent maintenance doses. Each parameter is a sentence about the drug's behaviour, and the sentences compose.\\n\\n**Predictions vs reality.** PK calculations predict; patients verify. The prediction cycle: parameters (from references or data) → predicted concentrations → measured concentration at a stated time → adjust. A measured value that disagrees with prediction is a *finding* (non-compliance, interaction, organ function, wrong model) — investigated, never averaged away (the pct-18-5 contradiction habit, carried into the clinical world).\\n\\n**The basis habit carried forward**: every concentration has a time, every dose a route and F, every strength a basis (pct-22); the interpretation lesson is where the whole topic's "state your bases" discipline becomes clinical communication.\\n\\n**Boundaries**: therapeutic ranges, individualisation for organ impairment, and TDM service design are clinical-practice canon (pct-12 cross-referenced); this lesson owns *reading the arithmetic*, not rewriting it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Large Vd → tissue distribution, big-looking loading doses; long t½ → infrequent dosing, slow washout; high Cl → bigger/more frequent maintenance.\\n- The cycle: parameters → prediction → measurement at a stated time → adjustment.\\n- A measurement that disagrees with prediction is a finding — investigated, never averaged.\\n- Every concentration carries a time; every dose a route and F; every strength a basis.\\n- Therapeutic ranges and renal adjustment are pct-12/clinical canon.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does a large Vd, long t½, and high Cl each predict about a drug's dosing?\\n2. What does a measured concentration that disagrees with prediction trigger, and why is averaging forbidden?\\n3. Which "state your bases" habits converge in interpretation?\\n4. Which canon owns therapeutic ranges and renal adjustment?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Parameters are sentences; predictions meet measurements; disagreements are findings. State bases, check balances, investigate contradictions — arithmetic becomes judgement.`,
      },
    ],
  },
];
