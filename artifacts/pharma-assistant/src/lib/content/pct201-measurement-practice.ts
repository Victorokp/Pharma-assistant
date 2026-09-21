import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 11: completes the locked pct-6 group block ("Pharmaceutical
 * Measurement") and with it the entire pct-4 mega-topic: the Tier D
 * orientation lesson plus all eight children (pct-6-1…6-8, Tier B). Node IDs,
 * titles (exact group-prefix convention), and the parent topic (pct-4) mirror
 * curriculum.ts exactly; nothing here creates, renames, or reorders nodes.
 *
 * Scope discipline: pct-5 taught the unit SYSTEMS; pct-6 teaches the
 * measurement PRACTICE — instruments, technique, error. Numerical conventions
 * (the ≥20%-of-capacity rule, Class III sensitivity 6 mg, MWQ at ≤5% error)
 * are flagged. Detailed dose/concentration arithmetic stays with pct-9/10/12.
 */
export const pct201MeasurementPracticeLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // GROUP ORIENTATION (Tier D — overview only; children are the units)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A perfect calculation executed on a careless measurement is still a wrong result. Where pct-5 built the language of units, this group teaches the *craft* of producing trustworthy numbers: the ladder runs **measuring mass** → **measuring volume** → **measuring temperature** → the conceptual pair **accuracy and precision** → the instruments themselves (**pharmaceutical balances**, **measuring devices**) → the reading skill (**meniscus and liquid measurement**) → closing with **sources of measurement error** — the habit of auditing your own technique.

One idea organises the group: every measurement has three parts — the **instrument** (with its limit), the **technique** (the correct use), and the **error budget** (how wrong it may plausibly be). Professional measurement is choosing an instrument whose limit suits the task, applying the right technique, and knowing the error you are accepting.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Measurement = instrument + technique + error budget; all three are chosen, not inherited.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the eight child lessons are the study units, in ladder order.
- Central skill: match the instrument to the task, use it correctly, and know your error.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Measuring Mass (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Measuring Mass',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Measuring mass means comparing an unknown amount of material against a calibrated standard on a **balance**. The practice skills sit in three layers. **Setup:** the balance rests on a level, vibration-free surface, is zeroed (tared) before use, and is shielded from draughts — air movement is a real force on a sensitive pan. **Weighing:** the material never meets the pan directly — it goes on weighing paper, a watch glass, or a container; the paper's or container's own mass is removed either by taring first or by subtracting a recorded mass. Material is added gradually toward the target, approaching from below rather than dumping and removing. **Closing:** the reading is taken with the pan at rest, the material and paper cleared, and the balance re-zeroed for the next user.

The quantity-thinking layer: mass measurement inherits the error budget of the instrument (the balances lesson quantifies it), so the pharmacist's judgement is *matching instrument to amount* — weighing 150 mg of a potent drug on a balance that cannot reliably hold 100 mg is an instrument-choice failure before any technique question arises. And the hygiene layer: spatulas are cleaned between materials, papers are never reused across substances, and nothing returns to its original container — the contamination rules that protect both the product and the next measurement.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Level, tared, draught-free setup; material always on paper/glass, never the bare pan.
- Tare (or subtract) the container mass; approach the target gradually from below.
- Instrument choice must fit the amount — the error budget is set by the balance, not hope.
- Clean spatula between materials; nothing returns to its original container.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every compounded preparation begins here: actives and excipients are weighed quantities. The technique rules above are the dispensary's daily discipline — and the reason a colleague reviewing your work asks not "what number did you get?" but "on what balance, and how?"`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is the material never placed directly on the balance pan — give two distinct reasons.
2. A tare is set with weighing paper in place. What mass does the display now read, and why does this beat recording-and-subtracting the paper mass?
3. Conceptual: the target is 150 mg and the available balance's reliable range starts at 100 mg. Why is proceeding still an instrument-choice problem rather than a technique problem?
4. Practice-sequence: order these correctly — add material gradually; zero the balance; take the reading at rest; place weighing paper. Justify the order.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Setup (level, tare, no draughts) → weigh on paper with gradual addition → read at rest, clean, re-zero.
- Match the instrument's error budget to the amount before any technique begins.
- Contamination rules protect product and measurement alike.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Measuring Volume (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Measuring Volume',
    tier: 'B',
    verifyFlags: [
      'The "measure no less than 20% of the graduate\'s maximum capacity" selection rule is a standard teaching convention for choosing conical graduates; it is a practice guideline, not a physical law, and different institutions may state it slightly differently.',
    ],
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Volume measurement uses calibrated glassware — **conical graduates** (the everyday dispensary workhorse), **cylindrical graduates** (finer graduations), **pipettes** and **syringes** (small, precise volumes). Two skills dominate. **Choosing the instrument:** a graduate reads most reliably in its upper range, so the working rule is to measure no less than about **20% of the graduate's capacity** (flagged convention) — 8 mL in a 10 mL graduate is fine practice, 8 mL in a 100 mL graduate is not, because a large graduate's reading-error floor (set by its coarser graduations) is a far larger *fraction* of 8 mL than a small graduate's. When one vessel cannot cover the volume within the rule, a closer-sized graduate — or a combination of steps — is chosen instead.

**Reading the volume:** the vessel stands on the bench (not held in the air), the eye comes level with the liquid surface, and the reading is taken at the **bottom of the meniscus** for aqueous liquids (the meniscus lesson details this). **Technique:** pour slowly down a stirring rod or the vessel wall to avoid splashing and bubbles, set the vessel down before reading, and never judge a liquid level at arm's length or through a frosted wall. Viscous liquids add their own demand — time to drain — which the error lesson returns to.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Instrument choice: measure ≥ ~20% of a graduate's capacity (flagged) — reading error shrinks as a fraction of the volume.
- Read at eye level, vessel on the bench, at the meniscus bottom; pour slowly against a surface.
- Close-sized graduates (or steps) beat one oversized vessel.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (instrument selection by the 20% rule, illustrative).**

**Given:** 8 mL to measure; available graduates 10 mL, 25 mL, 100 mL.

1. 10 mL graduate: 8 ÷ 10 = 80% of capacity → **within the rule** ✓ (8 mL is 80%).
2. 25 mL graduate: 8 ÷ 25 = 32% → also acceptable ✓ (a fine-graduated 25 mL graduate is a good choice).
3. 100 mL graduate: 8 ÷ 100 = 8% → **violates the rule** ✗ — reject.

**Why the percentages decide it (illustrative model):** a graduate's reading uncertainty scales with its capacity — say ±2% of capacity for each vessel. The 10 mL graduate: ±0.2 mL → 0.2 ÷ 8 × 100 = **2.5%** of the delivered volume. The 100 mL graduate: ±2 mL → 2 ÷ 8 × 100 = **25%** of the delivered volume — ten times worse. The rule is fractional-error management. (Model and values illustrative; the 20% threshold itself flagged.)`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Dispensed volumes — syrups, suspensions, oral solutions — are measured volumes, and the 20% habit is why dispensaries stock graduates in many sizes. The selection arithmetic above is a two-second judgement at the bench that protects the accuracy of everything dispensed that day.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative) 15 mL against a 25 mL graduate — does the choice satisfy the 20% rule? Show the percentage.
2. (Illustrative) 12 mL is wanted but only 50 mL and 10 mL graduates are on the shelf. The 50 mL graduate gives 12 ÷ 50 = 24% — within the rule ✓. Why is the 10 mL graduate rejected for a *completely different* reason?
3. Conceptual: why does measuring in a vessel's upper range reduce the *fractional* error even though a larger vessel's graduations are coarser?
4. Error-detection: a colleague reads a graduate while holding it up to eye level in mid-air. Name the two technique faults.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Choose the vessel so the volume is ≥ ~20% of capacity (flagged); fine graduates for small volumes.
- Bench, eye level, meniscus bottom, slow pour.
- Instrument selection is fractional-error management.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Measuring Temperature (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Measuring Temperature',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `The scales themselves (°C, K, °F and their exact conversions) were built in pct-5-6 — this lesson is about *measuring* temperature correctly with instruments, not converting between scales.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Pharmaceutical temperature measurement runs on **liquid-in-glass thermometers**, **digital probes**, and fixed monitoring in refrigerators and storage areas. The practice points: the sensing tip must be fully in (or surrounded by) whatever is being measured — a thermometer reading a liquid while its bulb sits half in air reports a mixture, not the liquid; **sufficient contact time** must elapse before reading, because the instrument needs to reach thermal equilibrium with its subject (the display settling on a digital probe, the column steadying in glass); and the reading is taken **at eye level** with the scale, the same parallax discipline as any graduated instrument.

In storage practice — refrigerators, freezers, "below 25 °C" rooms — the measurement is continuous rather than momentary: thermometers or loggers are placed where the product sits (not in the door's warm edge), and readings are checked on the schedule the product's storage demands. The conceptual frame: a temperature reading is only as good as its **representativeness** — the instrument must be measuring the thing the decision is about (the product's environment), in its steady state, not a transient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Full immersion of the sensing tip; wait for equilibrium (steady reading) before trusting it.
- Read at eye level — parallax rules apply to thermometer scales too.
- Storage monitoring is continuous and location matters: measure where the product lives.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Cold-chain products (2–8 °C) and "store below 25 °C" labels make temperature measurement a daily professional duty: a refrigerator's logger placed badly can show compliance while the shelf itself runs warm. The lesson's discipline — representative, equilibrated, eye-level measurement — is what makes those readings defensible.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A probe reads a vaccine refrigerator at 3 °C but sits against the door shelf. What measurement-quality problem is possible, and what placement fixes it?
2. Why must the reading wait for a *steady* value? State what the instrument is doing during the wait.
3. Conceptual: connect to pct-5-6 — a thermometer reads 77 °F. Before converting, what anchor tells you instantly this is room-temperature territory?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Immerse fully, wait for equilibrium, read at eye level.
- Storage temperature is measured where the product sits, continuously.
- A reading is a claim about a steady state — make it representative.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Accuracy and Precision (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Accuracy and Precision',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The pair is deliberately distinguished. **Accuracy** is closeness to the *true* value; **precision** is closeness of *repeated measurements to each other*. The textbook image: four darts on a board — tightly clustered off-centre is precise but inaccurate; scattered around the bullseye is neither; tightly clustered on the bullseye is both. For a balance: reading 0.498 g, 0.497 g, 0.499 g for a true 0.500 g weight is precise (spread 2 mg, 0.497–0.499) but slightly inaccurate (about 2 mg low, consistently).

That "consistently" is the diagnostic key. **Systematic error** (the same direction every time — an un-zeroed balance, a mis-calibrated thermometer, reading the meniscus from above) destroys accuracy while leaving precision untouched. **Random error** (unpredictable scatter — vibration, judgement flickers) destroys precision. The practical consequence is the professional response table: a *precise but inaccurate* process has a **fixable bias** (find the systematic fault: re-zero, re-calibrate, fix the reading height); an *imprecise* process needs technique or environment improvement, and its results can only be improved statistically by averaging. And the pharmaceutical stakes: a precise-but-biased balance will confidently deliver a wrong strength batch after batch — the most dangerous failure mode, because every check of consistency passes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Accuracy = closeness to truth; precision = closeness of repeats; independent qualities.
- Systematic error → poor accuracy, good precision → find and remove the bias.
- Random error → poor precision → improve technique/environment (averaging only dilutes it).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (diagnosing the error type, illustrative).**

A balance is checked with a true 1.000 g standard five times: 1.020, 1.021, 1.019, 1.020, 1.020 g.

1. Precision: the range is 2 mg (1.019–1.021) — excellent.
2. Accuracy: every reading is ~+20 mg — a consistent, one-directional offset.
3. Diagnosis: **systematic error** — the instrument or its setup is biased (e.g. a +0.020 g tare residue). The response is a fix, not a frown: re-zero/clean, then re-verify against the standard.

**Contrast:** readings of 0.985, 1.015, 1.000, 0.995, 1.005 g scatter ±15 mg around the truth — random error; the response is technique and environment, and an average would help describe but not fix it.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Calibration programmes, balance verification with check-weights, and duplicate measurements in QC are all institutional answers to this lesson: verify accuracy against known standards routinely, and treat any consistent offset as a defect to repair — never as noise.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the distinction in one sentence each, then classify: five meniscus readings taken from above a graduate — precise or accurate problem?
2. (Illustrative) A thermometer reads 24.9, 25.0, 24.9, 25.1 °C against a true 25.0 °C room. Compute the mean, state the sign and size of the mean-offset, and judge whether so small an offset is meaningful.
3. Error-type reasoning: a colleague's balance gives consistent results that are all 2% high. Why is "but at least it's consistent" exactly the wrong comfort here?
4. Conceptual: why can averaging many readings reduce random error but not systematic error?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Accuracy vs precision — truth vs repeatability; diagnose which failed before acting.
- Consistent offset = systematic bias = fix the instrument/setup.
- Scatter = random = improve technique; averaging describes, it does not repair.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Pharmaceutical Balances (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Pharmaceutical Balances',
    tier: 'B',
    verifyFlags: [
      'The Class III prescription balance sensitivity (6 mg) and the minimum weighable quantity convention (MWQ = sensitivity × 100/allowable-error%; at ≤5% error: 20 × sensitivity) are standard pharmacy-education conventions; local pharmacopoeia/institutional standards govern real practice.',
    ],
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The balances of pharmacy practice: the traditional **Class III prescription balance** (the two-pan balance with graduated weights and rider, historically standard for dispensing), modern **electronic top-pan balances** (milligram readability for compounding), and **analytical balances** (0.1 mg class, for analytical work under draught shields). What matters computationally is each balance's **sensitivity** — the smallest change it can reliably register. The Class III prescription balance's conventionally stated sensitivity is **6 mg** (flagged): below about six milligrams, its readings stop being trustworthy.

Sensitivity feeds the working calculation: the **minimum weighable quantity (MWQ)** — the smallest amount that can be weighed within an acceptable percentage error. The convention: $\\text{MWQ} = \\text{sensitivity} \\times \\dfrac{100}{\\text{allowable error \\%}}$, so at the commonly taught ≤5% error standard: MWQ = 6 mg × 20 = **120 mg** (flagged convention). The logic is worth seeing rather than memorising: a 6 mg uncertainty is 5% of 120 mg — weighing less than that means the uncertainty consumes a larger share of the answer than the standard allows. When a required amount falls below the MWQ, the professional response is not "weigh carefully" — it is the **aliquot** strategy (dilute the drug with a known excess of an inert base, then weigh a larger portion carrying the needed fraction), whose full arithmetic belongs to the compounding calculations topic (pct-19); the balance lesson supplies the *trigger*.

Care and use close the lesson: level and zero before every session, check-weights to verify, pans protected by paper, and the balance never moved while loaded.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Balance classes: prescription (Class III, sensitivity 6 mg flagged) → top-pan (mg) → analytical (0.1 mg).
- MWQ (flagged convention) = sensitivity × 100/allowable %; at ≤5%: 20 × 6 mg = 120 mg.
- Below the MWQ → aliquot strategy (arithmetic lives in pct-19), never "weigh carefully".`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{MWQ} = \\text{sensitivity} \\times \\frac{100}{\\text{allowable error (\\%)}} \\qquad \\text{percent error} = \\frac{\\text{sensitivity}}{\\text{quantity weighed}} \\times 100
$$

Both are conventions (flagged), with the two forms being rearrangements of one another.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — MWQ at the 5% standard (illustrative, flagged convention).**

1. MWQ = 6 mg × (100 ÷ 5) = 6 × 20 = **120 mg**.
2. Sense-check: 6 ÷ 120 × 100 = 5% ✓ — the uncertainty is exactly the allowed share.

**Example 2 — the percent-error direction (illustrative).**

Weighing 300 mg on the same balance: 6 ÷ 300 × 100 = **2%** potential error — inside the standard. Weighing 60 mg: 6 ÷ 60 × 100 = **10%** — outside it; the amount must be increased (aliquot) or a finer balance used.

**Interpretation:** the percentage falls as the quantity rises — the error budget is a *fractional* statement, which is the same insight as the graduate's 20% rule in pct-6-2.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The balance choice is the first professional decision of every compounding task, and the MWQ calculation is the documented justification for it. Check-weight verification and the aliquot trigger are the two habits that keep the dispensary's mass measurements defensible.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. (Illustrative, flagged conventions) Compute the MWQ at ≤5% error for a balance of sensitivity 10 mg — then state what percent error weighing 250 mg on it carries.
2. (Illustrative) A 90 mg quantity is required on the 6 mg Class III balance. Is it within the 5% standard? Show the percentage, then name the professional response.
3. Conceptual: why is the aliquot strategy a *measurement* solution and not a change to the formula being compounded?
4. Conceptual: connect pct-6-4 — a balance that reads consistently 5 mg high has what error type, and does the MWQ calculation fix it, detect it, or neither?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Sensitivity defines the balance's floor (Class III: 6 mg, flagged); MWQ = sensitivity × 100/error% (≤5% → 120 mg).
- Percent error = sensitivity ÷ quantity × 100 — fractional thinking again.
- Below the MWQ → aliquot (pct-19) or a finer balance; verify with check-weights.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Measuring Devices (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Measuring Devices',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Beyond balances, the dispensary's measuring devices each carry a designed purpose and a sensible range. **Graduates** (conical, cylindrical) — general volumes, chosen by the 20% rule. **Pipettes** — fixed or graduated, for small precise volumes, delivering by gravity with the tip touched off. **Syringes** (without needle for oral use) — small volumes with fine control, the modern choice for paediatric doses. **Volumetric flasks** — one precise mark, for making up to a volume (the "made up to" language of concentration work). **Beakers and flasks with approximate marks** — mixing and holding vessels, *not* measuring instruments; their graduations are decorative by the standards of this lesson.

The selection logic is a chain: the **required precision** of the task first (a dose to the nearest 0.5 mL demands finer than a mixer-rinse volume), then the **volume band** (device range), then the **material** (corrosives, light-sensitive liquids, viscous syrups each steer the choice). Two universal reading disciplines close it: read graduated devices at eye level at the meniscus (next lesson), and respect each device's **calibration temperature** — glassware is calibrated at a stated temperature (commonly 20 °C), and using it far above or below shifts the volume slightly, one of the error sources the final lesson collects.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Match device to task: precision requirement → volume band → material.
- Approximate-mark vessels (beakers) are not measuring instruments.
- Eye level + meniscus + calibration temperature — the universal reading rules.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The daily dispensing question "what will you measure this with?" is answered by this chain in seconds — and answered wrongly, it quietly caps the accuracy of everything downstream, no matter how good the calculation was.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Order the chain for choosing a device for (illustratively) a 2.5 mL paediatric dose requiring 0.1 mL precision — and name the device type that fits.
2. Why is a beaker's graduation mark not trusted for a measured volume, while a volumetric flask's single mark is?
3. Conceptual: a volumetric flask is calibrated at 20 °C. What changes if it is filled with liquid at 40 °C — and which lesson collects this as an error source?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Device selection: precision → range → material; approximate-mark vessels never measure.
- Universal rules: eye level, meniscus, calibration temperature.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Meniscus and Liquid Measurement (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-7',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Meniscus and Liquid Measurement',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `The **meniscus** is the curved surface a liquid forms in a tube, created by the tug-of-war between the liquid's internal cohesion and its adhesion to the glass. Water and aqueous solutions **wet** glass — adhesion wins — so the liquid climbs the walls slightly and the meniscus is **concave** (a U-shape). Mercury does the opposite (cohesion wins): convex, domed upward. Pharmacy liquids are overwhelmingly the concave case.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The rule is exact and non-negotiable: for a concave meniscus, read the **bottom of the curve**, with the eye **level** with it and the vessel standing on the bench. Three failure modes account for nearly all meniscus errors. **Parallax** — reading from above, the line of sight through the glass marks a *higher* graduation than the true level (a systematic error, in the pct-6-4 sense — consistent and repeatable, which makes it quietly dangerous); reading from below errs low. **Held-vessel reading** — a vessel in the hand sways and tilts; the level must be read with the vessel at rest. **Wrong surface** — reading the top edge of the curve (or the walls' climbing film) instead of the lowest point of the centre.

Technique completes it: pour down a rod or wall to avoid bubbles (a bubble at the surface fakes a reading), let foam settle, and for opaque liquids where the meniscus cannot be seen, read the top edge deliberately and consistently — an explicit convention shift, not a silent one. The connection to run through: the meniscus is the *reading* half of liquid measurement; the 20% rule is the *choosing* half; together they are the technique layer of the volume lesson.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Concave meniscus (aqueous): read the bottom of the curve — eye level, vessel at rest.
- Parallax (from above) is a systematic error: consistent, repeatable, quietly wrong.
- No bubbles or foam at the reading surface; opaque liquids: top-edge read, stated as a convention.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every dispensed liquid volume passes this test: the pharmacist crouching to eye level with a graduate is applying the lesson. Paired with the systematic-error diagnosis from pct-6-4, it also explains *why* a whole team reading high in the same way still needs correcting — consistency is not accuracy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is the meniscus concave for aqueous liquids? One sentence: which force wins and what it does.
2. A colleague consistently reads from above and obtains volumes ~3% high every time. Classify the error (pct-6-4 terms) and state why repeated checking of consistency would never reveal it.
3. Error-detection: a reading is taken of the top edge of a concave meniscus through a frosted flask held in the air. Name all three faults.
4. Conceptual: why is "read the bottom" the rule for water but a *stated convention* (not a law) for opaque liquids?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Bottom of the concave meniscus, eye level, vessel at rest — the whole rule.
- Parallax is systematic: consistent bias needs a technique fix, not a shrug.
- Clean surface: no bubbles, no foam; opaque liquids by stated convention.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Sources of Measurement Error (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-6-8',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Measurement — Sources of Measurement Error',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing lesson collects the error catalogue and gives it a structure. **Instrument-limit errors** — every device has a sensitivity floor (the 6 mg balance, the coarse graduate); using it below its floor manufactures error (the MWQ and 20% lessons quantified this). **Technique errors** — parallax, un-zeroed tares, bare-pan weighing, held-vessel readings, reading the wrong meniscus surface: all systematic, all fixable by the technique lessons. **Environmental errors** — draughts on a balance pan, vibration, temperature (glassware calibrated at 20 °C used hot or cold; thermometers not at equilibrium), static charge on fine powders. **Material errors** — viscosity and drainage time (a viscous syrup keeps flowing after the pour, so an immediate reading undershoots), bubbles and foam, wet or contaminated vessels changing effective masses and volumes, hygroscopic powders gaining mass from the air.

The organisational insight: sort every error into **systematic** (consistent bias — fix the cause: calibrate, re-zero, correct technique) versus **random** (scatter — reduce by better control and averaging), the pct-6-4 dichotomy applied across the whole craft. And the professional habit that binds the group: before trusting any measured quantity, run the **audit** — which instrument, what limit, which technique, what environment, what material quirks — because a number with an audited error budget is usable, and a number without one is just a number.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four sources: instrument limits, technique, environment, material — each with its own counter-move.
- Sort errors systematic vs random: fix biases, control scatter.
- The audit habit: instrument, limit, technique, environment, material — before trusting a number.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Error auditing is the quiet difference between a technician and a professional: when a result is questioned, the professional can name the measurement chain and its budget. This lesson is the checklist for that conversation — and the final piece that completes the pct-4 calculation foundation.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Sort into systematic vs random, with the counter-move for each: draught on the pan; reading from above; vibration; hygroscopic powder left uncovered.
2. A viscous syrup is read immediately after pouring. Which source, which direction does the error run (high or low), and what is the fix?
3. Conceptual: why do instrument-limit errors behave like the 20% and MWQ rules — a fraction, not a fixed amount? State it in one sentence.
4. Synthesis: name the three parts of a measurement (the pct-6 orientation's framing) and one error source that threatens each.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Instrument limits, technique, environment, material — know each source's counter-move.
- Systematic → fix the cause; random → control and average.
- Audit before trusting: this closes the pct-6 group and the pct-4 foundation.`,
      },
    ],
  },
];
