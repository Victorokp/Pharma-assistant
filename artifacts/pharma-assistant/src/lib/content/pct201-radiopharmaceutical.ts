import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-23: Radiopharmaceutical Calculations.
 *
 * Batch 26: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–22
 * top-level topic convention) plus its nine children pct-23-1…23-9
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-23 has no surviving Phase-1 tier record; the topic and
 * the conceptual/contextual children (23-1 Introduction, 23-2
 * Radioactivity Units, 23-4 Radioactive Decay, 23-9 Safety
 * Considerations) are Tier B, while the calculation children —
 * Activity Calculations (23-3), Half-Life (23-5), Decay Calculations
 * (23-6), Activity at Different Times (23-7), Basic Radiopharmaceutical
 * Dose Calculations (23-8) — are Tier C, matching the
 * calculation-lesson convention (pct-5-7; pct-9…22 blocks).
 * Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the introductory radioactivity
 * arithmetic — units and conversions, the decay law, half-life
 * machinery, time-of-measurement adjustments, and activity-to-volume
 * dose computations. Radiation biology, radiopharmacy practice
 * (generation/kit technology), and regulatory dose limits are later-
 * course canon and appear only qualitatively; ALARA and time/distance/
 * shielding are stated as concepts, never with invented numerical
 * limits. Nuclide half-lives used are stated reference values
 * (Tc-99m 6.0 h, I-131 8.0 days, F-18 110 min — rounded teaching
 * values, flagged as such); 1 Ci = 3.7 × 10¹⁰ Bq is exact by
 * definition. The first-order exponential is explicitly linked to the
 * pct-43 stability-kinetics mathematics as a parallel, not re-taught.
 */
export const pct201RadiopharmaceuticalLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-23',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'topic',
    title: 'Radiopharmaceutical Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A radiopharmaceutical pairs a radioactive nuclide with a pharmaceutical carrier, and its "strength" is **radioactivity** — a quantity that no storage condition can hold constant, because the nuclide decays by physics on its own schedule. This makes the topic's arithmetic unique in pharmacy: every activity figure is a statement about *both an amount and a time*, and the discipline that organises everything is **stating the timestamp** — calibration time, measurement time, administration time.\\\\n\\\\n**The route map**: 23-1 sets the context (what radiopharmaceuticals are, why their calculations differ); 23-2 fixes the units (becquerel, curie, and their scales); 23-3 computes activity from atoms and back; 23-4 builds the decay concept; 23-5 develops half-life as the working clock; 23-6 runs the decay law forward (activity after time); 23-7 adjusts activities between real timestamps (the pharmacist's daily task); 23-8 converts prescribed activity into volumes to draw; 23-9 closes with safety context.\\\\n\\\\n**Two mathematical facts carry the topic.** First, decay is **first-order**: a constant *fraction* decays per unit time, so the mathematics is the same exponential family as pct-43's stability kinetics — recognise the parallel, not a new mathematics. Second, **half-life** converts the exponential into countable steps: each half-life multiplies activity by exactly 1/2, so most practical arithmetic is halving tables.\\\\n\\\\n**Standing discipline**: no activity number is used without its time; no half-life is used without its stated (reference) value; and every decay adjustment is checked by a reverse step (halve-then-double recovers the original).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Radiopharmaceutical strength is radioactivity — amount and time in one number.\\\\n- Decay is first-order: constant fraction per unit time (same exponential family as pct-43 kinetics).\\\\n- Half-life turns the exponential into halving steps: each t\\u200b½ multiplies activity by 1/2.\\\\n- Units: becquerel (decays/s) and curie (3.7 × 10¹⁰ Bq, exact).\\\\n- Every activity carries a timestamp: calibration, measurement, administration.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is a radiopharmaceutical's strength inseparable from time?\\\\n2. Which earlier topic's kinetics shares the decay mathematics, and what is the shared structure?\\\\n3. State the standing timestamp discipline and the reverse-step check.\\\\n4. What distinguishes the becquerel from the curie?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Activity = amount + time. First-order decay, half-life steps, two unit systems, timestamps everywhere. The physics sets the schedule; the pharmacist does the arithmetic.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-23', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-23-1',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Introduction to Radiopharmaceutical Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Radiopharmaceuticals** are pharmaceutical preparations containing a radioactive nuclide, used almost entirely for **diagnosis** (imaging, functional tests) and sometimes therapy — the radionuclide's emissions are detected from outside the body, so the "dose" is an **activity** (decays per second), not a mass.\\\\n\\\\n**What makes their calculations different.** (1) *Strength decays on a fixed physical schedule*: from the moment of preparation, every hour removes a defined fraction of activity — the pharmacist's role is to compute what remains at the moment of use. (2) *The quantity is invisible*: activity is measured by detectors, not balances; the arithmetic converts between counts, units, volumes, and times. (3) *Time-stamps are structural*: a preparation is "calibrated" at a stated reference time, and every later use is an adjustment from that timestamp.\\\\n\\\\n**The working questions** the topic answers: how strong is it now (23-6/23-7); how strong will it be at the administration time (23-7); how much volume carries the prescribed activity (23-8); how is activity related to the number of atoms present (23-3)?\\\\n\\\\n**Boundaries.** How radionuclides are produced and how kits are prepared belong to radiopharmacy practice (later courses); radiation biology and dose limits are safety course canon (23-9 keeps context qualitative). This topic owns the arithmetic.\\\\n\\\\n**The 200L orientation**: radiopharmaceutical calculations are the cleanest possible demonstration that pharmaceutical "strength" is a *convention carried on a label* — here the convention includes a clock.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Radionuclide + pharmaceutical carrier; dose is activity, not mass.\\\\n- Strength decays on a fixed physical schedule from preparation onward.\\\\n- Activity is detector-measured; arithmetic links counts, units, volumes, times.\\\\n- Calibration time is the anchor; every later use adjusts from it.\\\\n- Production technology and radiation biology are later-course canon; this topic owns the arithmetic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define a radiopharmaceutical and state what quantity serves as its "dose".\\\\n2. Name the three structural differences from ordinary pharmaceutical calculations.\\\\n3. List the working questions the topic answers and the lessons that own them.\\\\n4. What does this topic illustrate about strength as a label convention?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Radioactive drugs dose by activity; the clock is part of the strength. Anchor at calibration, adjust to use — the arithmetic is the practice.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-2',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Radioactivity Units',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Two unit systems express activity, and the pharmacist converts between them routinely because prescriptions may arrive in either.\\\\n\\\\n**The becquerel (Bq)** is the SI unit: 1 Bq = **one nuclear decay per second** (pct-5's SI canon in action). Working scales are kBq, MBq, GBq — clinical activities sit in the MBq–GBq band, so the plain becquerel is a laboratory-scale unit.\\\\n\\\\n**The curie (Ci)** is the historical unit, retained in practice: 1 Ci = **3.7 × 10¹⁰ decays per second, exactly** (a definition, originally tied to the activity of one gram of radium-226). Working scales are mCi and µCi; 1 mCi = 37 MBq is the bridge most used at the bench.\\\\n\\\\n**The two-way bridge** (worth knowing cold):\\\\n\\\\n- mCi → MBq: **× 37** (10 mCi = 370 MBq; 20 mCi = 740 MBq).\\\\n- MBq → mCi: **÷ 37** (740 MBq = 20 mCi; 1 GBq = 1000/37 = 27.0 mCi).\\\\n\\\\n**Which unit on which document** is convention, not physics — the arithmetic is identical; the discipline is recording the unit with the number (an activity without a unit is as meaningless as one without a time).\\\\n\\\\n**Distinguish from dose measures**: units describing radiation *absorbed* by people or organs (gray, sievert) belong to radiation-safety canon — they are not activity units and never interconvert with Bq/Ci by arithmetic alone.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Bq = one decay per second (SI); clinical scale MBq–GBq.\\\\n- Ci = 3.7 × 10¹⁰ Bq exactly (historical, retained); scale mCi/µCi.\\\\n- Bridge: 1 mCi = 37 MBq; mCi → MBq ×37, MBq → mCi ÷37.\\\\n- Record the unit with every activity figure.\\\\n- Gray/sievert are absorbed/effective dose units — a different world, never arithmetically swapped.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the becquerel and state why MBq/GBq are the practical clinical scales.\\\\n2. Convert 25 mCi to MBq and 1110 MBq to mCi (925 MBq; 30 mCi).\\\\n3. Why is 1 Ci = 3.7 × 10¹⁰ Bq called exact?\\\\n4. Why can gray never be converted to becquerels?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Two systems, one bridge: 1 mCi = 37 MBq. Multiply by 37 one way, divide the other; never confuse activity units with dose-to-person units.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-3',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Activity Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Activity is not an abstraction — it counts atoms transforming per second, so it can be computed from the **number of radioactive atoms** present, and reversed to find how many atoms (and hence what vanishingly small mass) an activity represents.\\\\n\\\\n**The decay constant** λ (per unit time) is the transformation probability per atom per unit time. Activity is the product:\\\\n\\\\n$$\\\\nA = \\\\lambda N\\\\n$$\\\\n\\\\nwith N the number of radioactive atoms. Units discipline: λ in s⁻¹ gives A in Bq; keep times consistent (half-lives in hours need λ per hour).\\\\n\\\\n**Reverse: atoms and mass from activity.** N = A/λ; mass follows through the mole (pct-5-9/22-2 canon): mol = N/N\\u200bA, mass = mol × M. The famous illustration: 37 MBq (1 mCi) of Tc-99m (t\\u200b½ 6.0 h, stated) corresponds to about **1.9 × 10⁻¹⁰ g** of the nuclide — clinical activities involve almost no matter, which is why radiopharmaceutical "doses" are not weighable quantities.\\\\n\\\\n**Specific activity** (activity per unit mass) follows the same route: for a carrier-free nuclide, SA = λN\\u200bA/M. For carrier-free Tc-99m it is about **5.3 × 10⁶ Ci/g** — an enormous number that expresses how little mass carries clinical activity. Real preparations are diluted by carriers and are quoted at lower specific activities; the concept, not the constant, is the 200L take-away.\\\\n\\\\n**Check habit**: after computing N from A, recompute A from N — the identity must close exactly (it is the same multiplication run backwards).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- λ = transformation probability per atom per unit time; A = λN.\\\\n- Reverse: N = A/λ; mass = (N/N\\u200bA) × M — almost no mass carries clinical activity.\\\\n- 37 MBq of Tc-99m ≈ 1.9 × 10⁻¹⁰ g (stated half-life, standard arithmetic).\\\\n- Carrier-free specific activity SA = λN\\u200bA/M; real preparations are lower (carrier).\\\\n- Check by running the identity backwards — A → N → A must close.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Activity from atoms**\\\\n\\\\n$$\\\\nA = \\\\lambda N\\\\n$$\\\\n\\\\n**Mass from activity**\\\\n\\\\n$$\\\\nN = \\\\frac{A}{\\\\lambda}, \\\\qquad m = \\\\frac{N}{N_A} \\\\times M\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — atoms from activity.** 37 MBq of Tc-99m (t\\u200b½ 6.0 h = 21 600 s, stated). λ = 0.693/21 600 = 3.21 × 10⁻⁵ s⁻¹. N = 3.7 × 10⁷ ÷ 3.21 × 10⁻⁵ = **1.15 × 10¹² atoms**.\\\\n\\\\n**Example 2 — the mass illustration.** moles = 1.15 × 10¹² ÷ 6.022 × 10²³ = 1.91 × 10⁻¹² mol; mass = 1.91 × 10⁻¹² × 99 g/mol = **1.9 × 10⁻¹⁰ g** — a billionth of a milligram carries a full clinical mCi.\\\\n\\\\n**Example 3 — λ from a stated half-life.** A nuclide with t\\u200b½ = 8.0 days: λ = 0.693/8.0 = **0.0866 day⁻¹** — units chosen to match the working time unit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute N for 37 kBq of a nuclide with λ = 1.0 × 10⁻⁶ s⁻¹ (3.7 × 10¹⁰ atoms).\\\\n2. Why is the 1.9 × 10⁻¹⁰ g result pedagogically important?\\\\n3. What does "carrier-free" mean for specific activity, and why do real preparations differ?\\\\n4. State the closing check for any A ↔ N computation.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A = λN counts transformations; reverse it for atoms, then moles, then micrograms-of-nothing. Specific activity says the same thing per gram — enormous for pure nuclides.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-4',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Radioactive Decay',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Radioactive decay** is the spontaneous transformation of unstable nuclei — each atom transforms independently, at a random moment, with a fixed probability per unit time. Two properties of that process drive every calculation in the topic.\\\\n\\\\n**Randomness with a constant average.** Which atom transforms when is unpredictable; but with enormous numbers of atoms (23-3: ~10¹² atoms behind a clinical activity), the *average* behaviour is exactly predictable — a constant **fraction** of the atoms transforms per unit time. That constant fraction is the decay constant λ of 23-3.\\\\n\\\\n**First-order behaviour.** Because the number transforming per unit time is proportional to the number *present*, activity falls **exponentially**: steep at first, ever shallower, never quite reaching zero. The same first-order shape governs pct-43's chemical kinetics (shelf-life loss, hydrolysis) — the mathematics transfers; only the interpretation changes. This is why "half-life" (23-5), not "life-span", is the natural clock: an exponential has no fixed finish line, but a fixed *halving* time.\\\\n\\\\n**What decay means practically.** No storage practice pauses it; dilution does not slow it (per-gram activity changes, total activity does not); and the only lever on activity is time itself — waited time removes a known fraction, which is exactly the adjustment arithmetic of 23-6/23-7.\\\\n\\\\n**The conceptual take-away** for 200L: decay turns "strength management" into "calendar management" — the pharmacist's lever is when, not how.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Individual transformations are random; ensemble behaviour is exactly first-order.\\\\n- Rate is proportional to atoms present → exponential fall (same family as pct-43 kinetics).\\\\n- Half-life, not life-span, is the natural clock of an exponential.\\\\n- Storage and dilution do not alter the schedule; time is the only lever.\\\\n- Strength management becomes calendar management.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. How can random individual events yield exactly predictable average decay?\\\\n2. What makes decay first-order, and which other topic shares that shape?\\\\n3. Why does dilution not slow decay, and what does it change instead?\\\\n4. Why is "half-life" a better clock for an exponential than "time until gone"?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Random atoms, lawful average: constant fraction per time, exponential fall. Dilution changes concentration, not the clock. The lever is when, not how.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-5',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Half-Life',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **half-life** (t\\u200b½) is the time for half the radioactive atoms present to transform — equivalently, the time for activity to fall to half its value. It is the single most used number in radiopharmaceutical work because it converts the exponential law into countable steps.\\\\n\\\\n**The two-way relation with λ.** Half-life and decay constant carry the same information:\\\\n\\\\n$$\\\\nt_{1/2} = \\\\frac{0.693}{\\\\lambda}, \\\\qquad \\\\lambda = \\\\frac{0.693}{t_{1/2}}\\\\n$$\\\\n\\\\n(0.693 is ln 2 — the constant that makes "half" the right fraction per step.) λ in what time unit, t\\u200b½ in the same unit — the consistency discipline of 23-3 applies.\\\\n\\\\n**Half-lives as a clock.** After n half-lives, activity = A₀ × (1/2)ⁿ: one t\\u200b½ halves, two quarters, three eighths. Working backwards, the number of half-lives to reach a target fraction f is n = log₂(1/f) — to fall to one-tenth takes log₂ 10 = **3.32 half-lives**.\\\\n\\\\n**Reference values, stated**: Tc-99m t\\u200b½ ≈ 6.0 h; I-131 ≈ 8.0 days; F-18 ≈ 110 min — rounded teaching values used throughout this topic (real work uses the precise published value for the product at hand, flagged as data discipline, not a new calculation).\\\\n\\\\n**Biological half-life is a different quantity** (how fast the body clears a substance) — mentioned to prevent the classic conflation; this topic's arithmetic is entirely physical half-life.\\\\n\\\\n**Check habit**: every n = Δt/t\\u200b½ computation is checked by asking whether the resulting (1/2)ⁿ is directionally sensible (longer wait → smaller factor).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- t\\u200b½ = time for activity to halve; the working clock of the exponential.\\\\n- t\\u200b½ = 0.693/λ and λ = 0.693/t\\u200b½ — same time unit both sides.\\\\n- n half-lives → factor (1/2)ⁿ; to reach fraction f takes log₂(1/f) half-lives (1/10 → 3.32).\\\\n- Stated teaching values: Tc-99m 6.0 h, I-131 8.0 d, F-18 110 min.\\\\n- Biological half-life is a different concept — never conflated here.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Half-life ↔ decay constant**\\\\n\\\\n$$\\\\nt_{1/2} = \\\\frac{0.693}{\\\\lambda} \\\\qquad\\\\Leftrightarrow\\\\qquad \\\\lambda = \\\\frac{0.693}{t_{1/2}}\\\\n$$\\\\n\\\\n**Half-life counting**\\\\n\\\\n$$\\\\n\\\\frac{A}{A_0} = \\\\left(\\\\frac{1}{2}\\\\right)^n, \\\\qquad n = \\\\frac{\\\\Delta t}{t_{1/2}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — λ from t\\u200b½.** Tc-99m, t\\u200b½ = 6.0 h: λ = 0.693/6.0 = **0.1155 h⁻¹** (0.693/21 600 s = 3.21 × 10⁻⁵ s⁻¹ — same fact, two units).\\\\n\\\\n**Example 2 — t\\u200b½ from λ.** A nuclide with λ = 0.0115 h⁻¹: t\\u200b½ = 0.693/0.0115 = **60.3 h**.\\\\n\\\\n**Example 3 — counting half-lives.** How long until a Tc-99m preparation falls to 10% of its calibration activity? n = log₂ 10 = 3.32 → Δt = 3.32 × 6.0 h = **19.9 h** (≈ one working day — why Tc-99m is prepared daily).\\\\n\\\\n**Example 4 — direction check.** I-131 (8.0 days) after 24 days: n = 24/8 = 3 → (1/2)³ = 1/8 — a small factor after a long wait ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Compute λ for I-131 (t\\u200b½ 8.0 days) in day⁻¹ (0.0866).\\\\n2. Find t\\u200b½ for λ = 0.0115 h⁻¹ (60.3 h).\\\\n3. How many half-lives to reach 25% of A₀, and how many hours for Tc-99m? (2; 12 h.)\\\\n4. Why are teaching half-lives rounded, and what replaces them in real work?\\\\n5. Distinguish physical from biological half-life in one sentence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `λ and t\\u200b½ are the same clock in two units (0.693 links them); count half-lives as halvings; 1/10 takes 3.32 t\\u200b½. Stated values, consistent units, direction checks.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-6',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Decay Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The forward problem: **activity after a stated time**. Two equivalent forms cover every case.\\\\n\\\\n**The exponential form** (any elapsed time):\\\\n\\\\n$$\\\\nA = A_0 e^{-\\\\lambda t}\\\\n$$\\\\n\\\\n**The half-life form** (counted steps, friendlier at the bench):\\\\n\\\\n$$\\\\nA = A_0 \\\\left(\\\\frac{1}{2}\\\\right)^{t/t_{1/2}}\\\\n$$\\\\n\\\\nBoth state the same physics; the half-life form divides the wait into whole or fractional halvings and is the form the worked examples privilege. Fractional n (e.g. n = 0.5 for a half-half-life wait) is legitimate: (1/2)⁰·⁵ ≈ 0.707 — the exponential form or a calculator's power function handles it; the point is that *nothing about the method changes* between whole and fractional steps.\\\\n\\\\n**Worked pattern.** (1) Note A₀ and its timestamp. (2) Convert the wait into n = Δt/t\\u200b½. (3) Apply (1/2)ⁿ. (4) Direction check: longer wait → smaller factor; factor > 1 signals an inverted subtraction of times.\\\\n\\\\n**Basis note**: the law applies equally to activity and to atom count (both fall together — 23-4's proportionality). Concentration of a solution decays by the same factor; the arithmetic never distinguishes them.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A = A₀e^(−λt) ≡ A₀(1/2)^(t/t½) — one law, two forms.\\\\n- n = Δt/t\\u200b½ may be fractional: (1/2)⁰·⁵ ≈ 0.707.\\\\n- Direction check: longer wait → smaller factor; factor > 1 means inverted times.\\\\n- Activity, atom count, and concentration all decay by the same factor.\\\\n- Always state A₀'s timestamp in the answer.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Decay law, both forms**\\\\n\\\\n$$\\\\nA = A_0 e^{-\\\\lambda t} = A_0 \\\\left(\\\\frac{1}{2}\\\\right)^{t/t_{1/2}}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — whole half-lives.** 37 MBq of Tc-99m at calibration: after 6 h → 18.5 MBq; after 12 h → 9.25 MBq; after 18 h → 4.63 MBq (each step ×1/2).\\\\n\\\\n**Example 2 — fractional half-life.** The same preparation after 3.0 h (n = 0.5): A = 37 × 0.7071 = **26.2 MBq**. Cross-check via the exponential form: e^(−0.1155 × 3) = e^(−0.3465) = 0.7072 ✓.\\\\n\\\\n**Example 3 — days scale.** 3700 MBq (100 mCi) of I-131 (t\\u200b½ 8.0 d) after 24 days: n = 3 → 3700/8 = **462.5 MBq** (12.5 mCi). Direction check ✓ (factor 0.125 after 3 half-lives).\\\\n\\\\n**Example 4 — short scale.** F-18 (110 min) after 220 min: n = 2 → one quarter of A₀; a 37 GBq dose-preparation would sit at 9.25 GBq — scheduling arithmetic in one step.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 740 MBq of Tc-99m after 12 h? (185 MBq.)\\\\n2. Show that Example 2's two forms agree to three significant figures.\\\\n3. A preparation falls to 1/16 of A₀ — how many half-lives passed? (4.)\\\\n4. What does a computed decay factor of 2.0 indicate about the time subtraction?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Count the halvings, apply (1/2)ⁿ, state the timestamp. Fractional steps allowed, direction always checked — and one law, two forms, same physics.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-7',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Activity at Different Times',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The pharmacist's daily adjustment: a preparation is calibrated at one timestamp and used at another, and the **concentration on the label of the moment** must be computed before volumes can be drawn (23-8). 23-6 computed "activity after t"; this lesson organises the same arithmetic around **working tables and timestamp chains**.\\\\n\\\\n**The interval table.** For a Tc-99m preparation (t\\u200b½ 6.0 h) calibrated at 06:00 with A₀ = 3700 MBq (100 mCi) in 10 mL (370 MBq/mL):\\\\n\\\\n| Time | Elapsed | Factor | Activity | Concentration |\\\\n|---|---|---|---|---|\\\\n| 06:00 | 0 h | 1 | 3700 MBq | 370 MBq/mL |\\\\n| 12:00 | 6 h | 1/2 | 1850 MBq | 185 MBq/mL |\\\\n| 18:00 | 12 h | 1/4 | 925 MBq | 92.5 MBq/mL |\\\\n| 00:00 | 18 h | 1/8 | 462.5 MBq | 46.25 MBq/mL |\\\\n\\\\n(Pipe rows read as plain lines in this rendering — the columns are: time, elapsed, factor, activity, concentration.)\\\\n\\\\n**Timestamp chains.** Multi-step problems decompose: calibration → first use → second use is two successive decay computations, each anchored on the previous timestamp. The reverse step checks each link (halve-then-double recovers the prior value).\\\\n\\\\n**Concentration decays identically** (23-6 basis note): the table's concentration column is just activity ÷ volume — and it is *this* column that 23-8's volume arithmetic consumes. A preparation's "label strength" is therefore a function of the clock, which is why dispensed-radiopharmaceutical labels state both activity and calibration time.\\\\n\\\\n**Documentation discipline**: every adjusted figure on the worksheet records (A₀, its time), (Δt), (n), (factor), (result, its time) — a chain any colleague can re-walk.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Calibration → use is one decay computation; the concentration column is what volumes need.\\\\n- Interval tables turn the shift into readable halvings.\\\\n- Multi-use problems are chains of anchored steps; each link checks by reverse doubling.\\\\n- Labels state activity AND calibration time — strength is a function of the clock.\\\\n- Worksheet entries record the full chain (A₀, Δt, n, factor, result).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The 06:00-calibrated 370 MBq/mL preparation drawn at 12:00 is a 185 MBq/mL preparation — same bottle, same volume, half the strength. The pharmacist who "reads the label" without computing the interval dispenses a double dose; the table is the habit that prevents it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. From the table, what is the concentration at 18:00 and how does it follow? (92.5 MBq/mL = 925/10.)\\\\n2. A 06:00 calibration read 5550 MBq; what is the activity at 12:00 next day (24 h later)? (346.9 MBq, n = 4.)\\\\n3. Why does the concentration column fall by the same factor as activity?\\\\n4. What four recorded items make a decay adjustment auditable?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Anchor at calibration, count the interval, halve per step, and read the concentration column before drawing anything. Timestamps on every line; reverse-doubling checks every link.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-8',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Basic Radiopharmaceutical Dose Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The prescription names an **activity to administer** (e.g. 740 MBq / 20 mCi of Tc-99m); the pharmacist draws the **volume** that carries that activity *at the administration time*. The core identity is pct-10-3's volume arithmetic with a decaying numerator and denominator:\\\\n\\\\n$$\\\\nV = \\\\frac{A_{\\\\text{prescribed}}}{C_{\\\\text{at administration time}}}\\\\n$$\\\\n\\\\n**The two-step pattern.** (1) *Adjust the concentration*: decay the calibration concentration to the administration timestamp (23-7's table). (2) *Divide*: prescribed activity ÷ adjusted concentration. Both numerator and denominator decay by the same factor, but the **volume** changes — drawing earlier means drawing less volume for the same activity; drawing later means more volume.\\\\n\\\\n**Worked pattern**: calibrate (A₀, volume) → concentration at calibration → decay to use-time → V = A/C → round to the syringe's readable precision (0.1 mL), stated.\\\\n\\\\n**The residual view** (same arithmetic, backwards): how much activity remains in the stock vial after drawing V? Remaining = C × (V\\u200bstock − V) — the running inventory of a decaying vial, useful across a shift and checked by the same reverse-doubling.\\\\n\\\\n**Boundary**: which activity is *prescribed* for which study is nuclear-medicine practice (later canon) — this lesson takes the prescribed activity as given and owns only the arithmetic to deliver it.\\\\n\\\\n**Check habit**: multiply the drawn volume by the adjusted concentration — must recover the prescribed activity exactly (before rounding); and sanity the volume against the vial's remaining volume.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- V = A_prescribed ÷ concentration at administration time — activity divided by a decaying denominator.\\\\n- Earlier draw → smaller volume for the same activity; later draw → larger.\\\\n- Pattern: decay the concentration, divide, round to readable precision, state the time.\\\\n- Residual inventory: remaining activity = C × (vial volume − drawn volume).\\\\n- Check: V × C must recover the prescription (pre-rounding).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Volume to draw**\\\\n\\\\n$$\\\\nV = \\\\frac{A_{\\\\text{prescribed}}}{C_0 \\\\times (1/2)^{\\\\Delta t/t_{1/2}}}\\\\n$$\\\\n\\\\n**Residual activity after drawing**\\\\n\\\\n$$\\\\nA_{\\\\text{remaining}} = C \\\\times (V_{\\\\text{stock}} - V)\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — same-timestamp draw.** Prescription: 740 MBq (20 mCi) of Tc-99m at 06:00; preparation calibrated 06:00 at 370 MBq/mL. V = 740/370 = **2.0 mL**. Check: 2.0 × 370 = 740 ✓.\\\\n\\\\n**Example 2 — decayed draw.** Same prescription at 12:00: concentration = 185 MBq/mL (23-7 table) → V = 740/185 = **4.0 mL** — twice the volume for the same activity, exactly as the halving predicts. Check: 4.0 × 185 = 740 ✓.\\\\n\\\\n**Example 3 — full chain.** Calibration 06:00: 1850 MBq in 5 mL (370 MBq/mL). Draw 555 MBq (15 mCi) at 12:00: concentration 185 MBq/mL → V = 555/185 = **3.0 mL**. Residual: activity = 3700 − ... compute: 1850 − 555 = 1295 MBq; volume 2.0 mL; implied concentration 1295/2 = 647.5 MBq/mL — *impossible* against the decay table (185 at 12:00), so the correct residual statement is by the formula: C × (V\\u200bstock − V) = 185 × 2.0 = **370 MBq remaining**. The activity-inventory route (1850 − 555 = 1295 MBq) and the volume route disagree because the drawn syringe's activity also decays after drawing — the formula's answer (370 MBq *at 12:00 in the vial*) is the one that matches the vial's own decay line; the discrepancy is the teaching point: residual inventories are computed per-timestamp, never mixed.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Draw 1110 MBq (30 mCi) from 222 MBq/mL at the calibration time (5.0 mL).\\\\n2. Same draw three hours later (Tc-99m): concentration 157 MBq/mL — what volume? (7.1 mL.)\\\\n3. Why does a later draw need a larger volume for the same activity?\\\\n4. In Example 3, why did the two residual views disagree, and which rule resolves it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Decay the concentration to the draw time, divide the prescription by it, round, state the time. Residuals live on one timestamp at a time — never mix clocks in an inventory.`,
      },
    ],
  },
  {
    nodeId: 'pct-23-9',
    courseId: 'pct-201',
    topicId: 'pct-23',
    nodeType: 'subtopic',
    title: 'Safety Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Radiopharmaceutical work adds radiation safety to pharmaceutical safety. At 200L the arithmetic of this topic meets four qualitative safety structures (dose limits and radiation biology are later-course canon — no numbers are invented here).\\\\n\\\\n**ALARA.** All exposures are kept **A**s **L**ow **A**s **R**easonably **A**chievable — a working principle, not a threshold: every activity handled is justified, minimised, and timed. The decay arithmetic itself is an ALARA tool: computing the smallest activity that answers the clinical question, and the latest draw time that still delivers it.\\\\n\\\\n**Time, distance, shielding.** The three exposure levers: *time* (shorter handling — decay makes waiting a genuine safety step, the one place where doing nothing is a protective procedure); *distance* (exposure falls steeply with separation — handled by tools and layout, not by calculation here); *shielding* (appropriate materials between source and handler — selection is radiopharmacy practice canon). The topic's contribution is the time lever's arithmetic: 23-6/23-7 quantify exactly what waiting buys.\\\\n\\\\n**Contamination control and labelling.** Radiopharmaceutical labels state activity, volume, AND calibration time — the timestamp discipline of this topic is also a safety control, because a mis-timed activity is a dosing error. Spills and decontamination procedures are practice canon; the calculation contribution is knowing what activity is where at what time (the residual inventory of 23-8).\\\\n\\\\n**Decay-in-storage.** Short-lived waste is often managed by storing it until decay reduces the activity to release criteria set by regulation — the same (1/2)ⁿ arithmetic answering a waste-management question; the criteria themselves are regulatory canon, never assumed here.\\\\n\\\\n**The 200L through-line**: the decay clock this topic computes is the same clock that makes the work safe — every timestamp stated is both a dosing accuracy and a safety statement.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- ALARA: minimise, justify, and time every activity — the arithmetic is an ALARA tool.\\\\n- Exposure levers: time, distance, shielding; this topic quantifies the time lever.\\\\n- Labels state activity + volume + calibration time — timestamp discipline is a safety control.\\\\n- Decay-in-storage applies (1/2)ⁿ to waste management; release criteria are regulatory canon.\\\\n- No dose-limit numbers are assumed at this level — later-course canon.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does ALARA stand for, and how does decay arithmetic serve it?\\\\n2. Why is waiting a genuinely protective step in radiopharmacy, unlike in ordinary pharmacy?\\\\n3. Which three things must a radiopharmaceutical label state, and why is the third a safety item?\\\\n4. How does the (1/2)ⁿ arithmetic answer a waste-storage question, and where do the release criteria come from?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same decay clock, safety purpose: ALARA, time–distance–shielding, timestamped labels, decay-in-storage. The arithmetic that doses patients also protects the pharmacist — no invented limits needed.`,
      },
    ],
  },
];
