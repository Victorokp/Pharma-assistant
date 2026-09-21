import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-7: Prescription and Medication-Order
 * Interpretation.
 *
 * Batch 15: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/pct-2/pct-3 top-level
 * topic convention) plus its ten children pct-7-1…7-10 (Tier B, plain
 * names). Node IDs and titles mirror curriculum.ts exactly; nothing here
 * creates or renames nodes.
 *
 * Tier note: pct-7 had no surviving Phase-1 tier record; Tier B follows the
 * pct-1/pct-2/pct-3 conceptual-block convention (flagged pending
 * confirmation). Calculation children still include FORMULAS / WORKED
 * EXAMPLE / CHECK QUESTIONS where the material genuinely needs them.
 *
 * Scope discipline: this block teaches READING orders — structure, language,
 * completeness, plausibility. Dose-conversion depth stays with pct-10,
 * clinical individualisation with pct-12, dispensing procedure with the
 * later dispensing topics; those are cross-referenced, not re-taught.
 */
export const pct201PrescriptionInterpretationLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'topic',
    title: 'Prescription and Medication-Order Interpretation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **prescription** is a legal order from a licensed prescriber authorising a medicine for a named patient; a **medication order** is the same idea inside an institutional setting (a hospital ward chart or electronic order). Before any calculation can be trusted, the order itself must be *read* — every element located, every abbreviation decoded, every ambiguity flagged. Interpretation is a reading skill that precedes and protects the calculating skill: most serious dispensing errors begin as misreadings, not as arithmetic failures.\n\nThe workflow this topic trains is a loop: **receive → assess → interpret → clarify → act**. Receive the order; assess it for legality and completeness; interpret each element (drug, strength, form, route, dose, frequency, duration, quantity); clarify anything unclear with the prescriber — never guess; and only then act (calculate, dispense, label). The ten lessons run through the anatomy of an order: its **parts**, the **abbreviations** it is written in, how **drug names and strengths** are expressed, how the **dosage form** line controls measurement, how the **directions for use** are translated into patient language, how **quantity and duration** are linked, what makes a **medication order** distinct from a community prescription, the small set of **prescription calculations** interpretation always needs, how to spot **incomplete or unclear** orders, and the professional habit of **basic screening**.\n\nOne thread to carry throughout: the order is a safety document, and every reading habit you build — attaching units, expanding abbreviations, questioning ambiguity — is a layer of that safety system.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A prescription is a legal order; a medication order is its inpatient counterpart.\n- Interpretation (read → decode → clarify) precedes calculation and protects it.\n- Most dispensing errors start as misreadings, not arithmetic failures.\n- Ambiguity is never guessed — it is clarified with the prescriber and documented.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish a prescription from a medication order, and name the setting each belongs to.\n2. Conceptual: why does interpretation come *before* calculation in the dispensing workflow? Give one example of an error that correct interpretation would prevent.\n3. Map check: list the ten lessons of this topic in order and say in one line what the sequence builds.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Prescription (community) vs medication order (institutional) — same core idea.\n- Workflow: receive → assess → interpret → clarify → act.\n- Reading discipline first; arithmetic second; guessing never.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Parts of a Prescription (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-1',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Parts of a Prescription',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every complete prescription carries the same anatomy, and screening starts by locating each part:\n\n- **Prescriber block** — name, qualification, registration number, address/contact, and the **signature** (plus date). Without a valid signature and date the order is not legally complete.\n- **Patient block** — full name (and age, and weight where dose depends on it — see pct-10). Names and dates catch mix-ups between patients and stale orders.\n- **Superscription** — the symbol ℞, from the Latin *recipe*, "take thou": the instruction from prescriber to pharmacist that this is an order to dispense.\n- **Inscription** — the medicine itself: drug name(s) and **strength(s)**.\n- **Subscription** — the dispensing directions to the pharmacist: how much to dispense or how to prepare it (quantity, sometimes compounding instructions).\n- **Signatura (Sig)** — the patient directions ("sig" from *signa*, "label thou"): dose, route, frequency, duration in translatable form.\n- **Refills** — how many times the order may be repeated without a new prescription.\n\nThe two *scriptions* are the classic exam trap: the **subscription** is written *to the pharmacist* (dispense this much), the **signatura** is written *about the patient* (take this way). A useful memory hook: subscription → supplies; signatura → instructions.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- ℞ (recipe, "take thou") marks the order; inscription = drug + strength; subscription = dispensing directions; Sig = patient directions.\n- Prescriber signature + date make the order legally complete; patient identifiers prevent mix-ups.\n- Refills are repeats authorised in advance.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A pharmacist's first legal check is structural: signature present, date current, patient identified, all four content blocks (inscription, subscription, Sig, refills) present and legible. A structurally incomplete prescription is returned to the prescriber — not interpreted on guesswork (the full completeness checklist is built in pct-7-9).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Match each part to its content: superscription, inscription, subscription, signatura.\n2. Conceptual: what is the difference between the subscription and the signatura, and what memory hook separates them?\n3. Error-detection: a prescription has a drug name, strength and patient name but no date and no signature. State exactly which checks it fails.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Anatomy: prescriber block, patient block, ℞, inscription, subscription, Sig, refills.\n- Subscription → supplies to pharmacist; signatura → instructions for patient.\n- Signature + date = legal completeness; identifiers = patient safety.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Prescription Abbreviations (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-2',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Prescription Abbreviations',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Prescription shorthand is mostly **Latin**, because prescribers have written in it for centuries. You do not need the grammar — you need the standard expansions, expanded at sight and written out in full on the label. Reading an abbreviation is a translation step, and translation is where misreading happens, so each one is learned with its full form *and* its common misread.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The working set, by job:\n\n- **Frequency**: b.i.d. (*bis in die*) — twice daily; t.i.d. (*ter in die*) — three times daily; q.i.d. (*quater in die*) — four times daily; q.d. (*quaque die*) — daily; q.h. — every hour, and interval forms q4h/q6h/q8h — every 4/6/8 hours; p.r.n. (*pro re nata*) — as needed; stat — immediately.\n- **Route**: p.o. (*per os*) — by mouth; i.v. — intravenous; i.m. — intramuscular; s.c. — subcutaneous; p.r. — per rectum; top. — topically.\n- **Timing**: a.c. (*ante cibum*) — before food; p.c. (*post cibum*) — after food; h.s. (*hora somni*) — at bedtime.\n- **Units**: g, mg, mcg (µg), mL, L; U — unit (always written as the word "unit"); IU — international unit.\n\nThe danger zone — abbreviations that look alike or get misread: **q.d. vs q.i.d.** (a four-fold frequency error — many safety bodies prefer writing "daily" in full); **U misread as 0** ("4U" read as 40 units of insulin); **µg/mcg misread as mg** (a 1000-fold error); **trailing zeros** ("5.0 mg" misread as "50 mg" if the point is lost) and **bare decimal points** (".5 mg" misread as "5 mg"). The safety habits follow directly: write "unit", prefer "daily" to q.d., use a leading zero (0.5 mg) and never a trailing one (5 mg), and expand anything ambiguous. Do-not-use abbreviation lists vary by institution and country — the safe habit is the expansion habit, not one specific list.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- b.i.d./t.i.d./q.i.d. = 2/3/4 times daily; q4h = every 4 hours; p.r.n. = as needed; stat = immediately.\n- p.o. by mouth; a.c. before food; p.c. after food; h.s. at bedtime.\n- High-risk pairs: q.d. vs q.i.d.; U vs 0; µg vs mg (1000-fold); 5.0 vs 50; .5 vs 5.\n- Safety habit: expand on the label — "unit", "daily", leading zeros, no trailing zeros.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Task:** translate the sig "1 tab p.o. b.i.d. × 7 days" into patient words, and state the total tablets.\n\n**Decode:** 1 tablet, by mouth, twice daily, for 7 days.\n\n**Patient words:** "Take one tablet by mouth twice a day for seven days."\n\n**Total:** 2 tablets/day × 7 days = 14 tablets. Check by reverse: 14 tablets ÷ 2 per day = 7 days ✓.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The label never carries the abbreviation. "1 tab p.o. b.i.d. p.c." becomes "Take one tablet by mouth twice a day after food" — because patients do not read Latin, and every unexpanded abbreviation on a label is an error handed to the patient.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Expand: t.i.d., p.c., h.s., p.r.n., q6h — and state which one signals a *need*-based (not scheduled) dose.\n2. Conceptual: why is q.d. the riskiest frequency abbreviation on the list, and what is the safe written substitute?\n3. Error-detection: an order reads "Insulin 4U s.c. q.d." — identify the two notation risks and give the safe written forms.\n4. Calculation: "5 mL t.i.d. × 5 days" — total volume? (5 × 3 × 5 = 75 mL ✓.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Latin shorthand: frequency, route, timing, units — expand every one on the label.\n- Danger pairs: q.d./q.i.d., U/0, µg/mg, trailing-zero and bare-point decimals.\n- Safe habits: write "unit", write "daily", leading zero yes, trailing zero no.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Drug Names and Strengths (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-3',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Drug Names and Strengths',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A prescription line names a drug two ways: the **generic (non-proprietary) name** — the international non-proprietary name (INN) such as *amoxicillin* — or a **brand (proprietary) name** owned by a manufacturer. Reading discipline: know which you are holding, because a brand name alone hides the drug class, and substitution rules depend on the generic identity.\n\nThe **strength** is the amount of drug per dose-unit or per volume, and it appears in several notations you must read on sight:\n\n- **Mass per unit**: 250 mg capsules — 250 mg per tablet/capsule.\n- **Mass per volume**: 250 mg/5 mL suspension — 250 mg in every 5 mL.\n- **Percentage**: 1% w/v — mass-per-volume percent (the percentage system itself is pct-9's territory; here you only need to *recognise* the notation).\n- **Ratio strength**: 1:1000 — one part per thousand (again, pct-9 teaches the conversions; here you read it).\n- **Activity units**: 100 units/mL insulin — potency in units, not mass (pct-11 explains why some drugs cannot be measured in mass at all).\n\nTwo reading hazards. First, **strength is not dose**: 250 mg is the strength of the capsule, not necessarily the dose taken — the dose comes from the Sig (pct-7-5). Second, **look-alike/sound-alike (LASA) names**: pairs of drugs whose names differ by a few letters have caused wrong-drug dispensing for as long as prescriptions have existed; the professional defence is the habit of anchoring on the generic name, indication, and strength together — never on a fragment of the name.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Generic (INN) name = the drug's identity; brand name = a manufacturer's property.\n- Strength notations: mg per unit, mg/5 mL, %w/v, 1:1000, units/mL — read each on sight.\n- Strength ≠ dose: the dose comes from the Sig.\n- LASA defence: anchor on generic name + strength + indication together.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `When a prescription reads "Augmentin 625", the reading task is: which generic combination, which strength, which form — because brand families span several strengths and forms, and the prescription line that skips them is incomplete (pct-7-9's checklist).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish generic and brand names, and say which one identifies the drug class.\n2. Reading: "250 mg caps" vs "250 mg/5 mL susp" — same drug, what is different about what the strength describes?\n3. Conceptual: why is a fragment of a drug name ("…cillin") never enough to identify a medicine? Give the three anchors a reader uses instead.\n4. Conceptual: an order says "insulin 100 units/mL". Why is mass (mg) the wrong strength language for this product? (pct-11 preview.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Generic identity vs brand property; anchor on the generic name.\n- Strength notations: per-unit, per-volume, %, ratio, units — read on sight.\n- Strength ≠ dose; LASA pairs are defeated by the three-anchor habit.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Dosage Forms (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-4',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `pct-2 classified the dosage-form world; this lesson reads the form *from the prescription line*, because the form abbreviation on an order controls how the order is dispensed and measured:\n\n- **tab** (tablet), **cap** (capsule) — dispensed by **count**: "28 tabs" means 28 units.\n- **susp** (suspension), **syr** (syrup), **elix** (elixir), **drops** — dispensed by **volume**: "100 mL" means millilitres, and the dose inside the Sig must match the strength's per-5 mL (or per-mL) language.\n- **inj** (injection) — dispensed by count of ampoules/vials **or** volume, depending on the order's phrasing.\n- **crm/ung** (cream/ointment) — by mass or tube count; **supp** (suppository) — by count.\n\nWhy the form line is never decoration: it selects the **measurement type** (count vs volume vs mass) that the quantity calculation must produce, it implies the **route** (suppositories cannot be swallowed), and it flags the **measurement skill** the dispense needs (suspensions must be shaken and poured to the line — pct-6's territory). A prescription saying "amoxicillin 250 mg" without a form is structurally incomplete: 250 mg *of what?* capsules exist, suspensions exist, and the quantity math differs between them.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- tab/cap → dispense by count; susp/syr/elix/drops → by volume; crm/ung → mass or tubes; supp → count.\n- The form line selects the measurement type the quantity answer must have.\n- The form implies the route and the dispensing technique.\n- An inscription without a form is incomplete — "250 mg of what?"`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Dispensing practice follows the form: a suspension is labelled "shake well" and measured with the supplied spoon or syringe; capsules are counted into the vial; suppositories may need refrigeration. Each instruction traces straight back to the form abbreviation on the order.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Sorting: tab, susp, supp, ung, cap, drops — which are dispensed by count, which by volume, which by mass?\n2. Conceptual: why does the form abbreviation control the *unit* of the quantity calculation, not just the packaging?\n3. Error-detection: "amoxicillin 250 mg, dispense 100" — what is structurally missing, and what two different products could the prescriber mean?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Form on the line → measurement type, route, technique.\n- Counts for solids-by-unit, volumes for liquids, mass for semisolids.\n- No form stated = incomplete inscription — clarify, never assume.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Directions for Use (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-5',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Directions for Use',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **signatura** is the prescriber's instruction to the patient, written in shorthand and translated by the pharmacist. A complete sig answers four questions: **how much** (the dose — "1 tablet", "5 mL"), **how** (the route — p.o. becomes "by mouth"), **when/how often** (frequency — t.i.d., q6h, p.r.n., h.s.), and **how long** (duration — "× 7 days", or an open-ended "until finished"). It may also carry modifiers: "with food", "shake well", "avoid alcohol".\n\nTranslating a sig is a discipline, not a paraphrase. The patient words must preserve **every element**: dose unit, route, frequency, duration, and any condition. "1 tab p.o. t.i.d. p.c. × 7 d" becomes "Take one tablet by mouth three times a day after food for seven days" — nothing dropped, nothing invented.\n\nTwo sig situations demand special care. First, **p.r.n. (as needed) directions** need more than "as directed": a safe p.r.n. label states the dose, the *minimum interval* between doses, and usually the **maximum in 24 hours** — otherwise a patient can stack doses dangerously close together. Second, **"take as directed"** is only translatable when the *directions actually exist somewhere* (a taper written on the prescription, a protocol); a bare "as directed" with nothing behind it is an incomplete order — clarify, never guess. Where a dose looks implausible, the estimation habit from pct-4-7 is the first check before the phone call.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- A complete sig states dose, route, frequency, duration (+ modifiers).\n- Translation preserves every element — patient words, no shorthand, nothing invented.\n- Safe p.r.n. labels add minimum interval and a 24-hour maximum.\n- "As directed" with no directions behind it is an incomplete order — clarify.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Counselling closes the loop: the pharmacist says the instruction aloud while handing over the labelled medicine, so the patient's understanding — not the abbreviation — is the final rendering of the sig. Any "why am I taking this?" gap is an indication the prescriber should have supplied.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Translate into patient words: "2 tabs p.o. q.i.d. × 5 days". (Eight tablets a day — "take two tablets by mouth four times a day for five days" ✓.)\n2. Conceptual: why does "1 tsp p.r.n." make an unsafe label? State the two missing elements and the harm each omission enables.\n3. Error-detection: a sig reads "take as directed" with nothing else anywhere on the prescription. What is the professional action, and why is dispensing with a guess wrong?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Sig = dose + route + frequency + duration + modifiers.\n- Translate completely into patient words; invent nothing.\n- p.r.n. needs interval + 24-hour maximum; bare "as directed" is incomplete.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Quantity and Duration (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-6',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Quantity and Duration',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Quantity (what is dispensed), dose (what is taken), frequency (how often), and duration (how long) are four views of one triangle. Given any three, the fourth is fixed:\n\n$$\n\\text{quantity needed} = \\text{dose per administration} \\times \\text{administrations per day} \\times \\text{days}\n$$\n\n$$\n\\text{days of supply} = \\frac{\\text{quantity dispensed}}{\\text{daily use}}\n$$\n\nRefills extend the same logic: total dispensed over the order's life = quantity × (refills + 1) — the +1 because the original fill is not a refill.\n\nThe unit discipline is the same one pct-4 taught: the dose carries its unit (tablet, mL), frequency carries per-day, duration carries days — and the units must cancel to the unit the *dispensing* needs (tablets for counts, mL for liquids). A mismatch between the strength's volume language (per 5 mL) and the sig's volume language (per dose) is exactly where pct-7-8's worked calculations live; here the point is the structure of the triangle itself.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Quantity = dose × administrations/day × days; any third view is derivable from the other two.\n- Days of supply = quantity ÷ daily use.\n- Refills: total = quantity × (refills + 1).\n- Units must cancel to the dispensing unit: tablets, mL, or grams.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Task:** a prescription reads "amoxicillin 250 mg caps, 1 cap t.i.d. × 7 days, dispense quantity with 1 refill". How many capsules per fill, how many days does the fill last, and how many capsules in total if all fills are used?\n\n**Step 1 — per fill:** 1 cap × 3/day × 7 days = **21 capsules**.\n\n**Step 2 — duration:** 21 caps ÷ 3 caps/day = 7 days ✓ (reverse check).\n\n**Step 3 — with refill ×1:** 21 × (1 + 1) = **42 capsules total**.\n\n**Interpretation:** each fill covers exactly the prescribed week; the refill authorises one further identical week.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The triangle drives real stock decisions: a 30 mL bottle labelled "5 mL three times daily" lasts 30 ÷ 15 = 2 days — an obvious mismatch to catch at screening, because a seven-day order needs 105 mL, and rounding a liquid up to the available pack size is a professional judgement to document, not an accident.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A suspension is taken as 10 mL b.i.d. for 14 days. Quantity needed? (10 × 2 × 14 = 280 mL ✓.)\n2. Reverse view: 240 mL dispensed, 10 mL b.i.d. — days of supply? (240 ÷ 20 = 12 days ✓.)\n3. Conceptual: why does "refills: 2" mean three fills in the total-quantity arithmetic, not two?\n4. Error-detection: a sig says "1 tab t.i.d. × 7 days" but only 20 tablets are dispensed. What is the shortfall and which leg of the triangle exposes it? (21 needed — 1 short; dose × frequency × duration.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One triangle, four views: quantity, dose, frequency, duration.\n- Supply = quantity ÷ daily use; total with refills = quantity × (refills + 1).\n- Unit discipline: everything cancels to the dispensing unit.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Medication Orders (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-7',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Medication Orders',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Inside a hospital, the prescription becomes a **medication order**: an entry on the ward chart (paper) or in the electronic record, written by a prescriber for a patient under institutional care. The core elements are the same as a prescription — patient, drug, dose, route, frequency, date/time, prescriber identity — but the setting changes the *form* and the *flow*: orders feed ward stock and unit-dose systems, nurses administer, and pharmacists verify the order against the chart.\n\nOrder **types** matter because they carry different urgency and duration logic:\n\n- **Scheduled (standing) orders** — regular administration at fixed times.\n- **p.r.n. orders** — as needed, and a safe p.r.n. order still states dose, minimum interval, and indication.\n- **Stat orders** — immediately, once.\n- **Single/one-time orders** — one dose at a stated time (e.g. a pre-procedure dose).\n\n**Verbal and telephone orders** are the flow's weak point: the receiving clinician hears the order without seeing it written. Universal practice is **read-back** — repeat the complete order (drug, dose, route, frequency) to the prescriber, obtain confirmation, then document it and have it countersigned as soon as the prescriber is available. The habit generalises: an order you heard is an order you *repeat back* before you act on it.\n\nWhat separates this lesson from pct-7-1's anatomy: a community prescription is a self-contained legal document handed to the patient; a medication order is one entry in a live chart that other professionals act on — so its interpretation includes the *timing* (when written, when changed, when stopped) and the *verification chain* around it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Medication order = the prescription's inpatient form: patient, drug, dose, route, frequency, date/time, prescriber.\n- Types: scheduled, p.r.n. (interval + indication still required), stat, single/one-time.\n- Verbal/telephone orders → read back completely, confirm, document, countersign.\n- Chart context: interpretation includes when the order started, changed, or stopped.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Ward pharmacists verify each new order against the chart before first administration — the same reading discipline as pct-7-10's screening, but with the chart's full context available. A stat order is verified fastest and dispensed first; everything else enters the scheduled cycle.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the core elements every medication order must carry.\n2. Sorting: "give immediately" / "every 6 hours" / "if pain, every 4 h if needed" / "one dose before theatre" — classify each as stat, scheduled, p.r.n., or single.\n3. Conceptual: why does a p.r.n. *order* still need a minimum interval and an indication?\n4. Procedure: a telephone order arrives while the prescriber is off-site. State the full safe sequence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Same elements as a prescription; different setting and flow (chart, ward stock, nurse administration).\n- Order types set urgency and duration logic.\n- Verbal orders: read back, confirm, document, countersign.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 8 — Prescription Calculations (Tier B, calculation child)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-8',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Prescription Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Interpretation feeds three small calculations that happen on almost every prescription: the **dose per administration** when the strength is per-volume, the **quantity to dispense**, and the **days of supply**. The methods are the pct-4 proportion triangle applied to real order language — the new skill is extracting the numbers from the sig and the strength *correctly*.\n\nThe extraction rules that prevent the classic errors:\n\n- Dose in **mL** must meet the strength in matching language: a "5 mL" dose of a **250 mg/5 mL** suspension carries 250 mg (the strength's own denominator matches), while a "10 mL" dose carries twice that (pct-10-2 develops the general dose-from-conversion machinery; here the matching-denominator case carries the prescription work).\n- Quantity answers come out in the **dispensing unit** — capsules, tablets, mL — never in mixed units.\n- Days of supply uses **daily use** = dose × administrations per day.\n\nEverything is checked the pct-4-7 way: estimate first (is the answer's magnitude sane?), then reverse-check (does the quantity back-calculate to the duration?).`,
      },
      {
        kind: 'FORMULAS',
        body: `$$\n\\text{dose (mg)} = \\frac{\\text{strength (mg)}}{\\text{strength volume (mL)}} \\times \\text{dose volume (mL)}\n$$\n\n$$\n\\text{quantity} = \\text{doses per day} \\times \\text{days} \\times \\text{dose per administration}\n$$\n\n$$\n\\text{days of supply} = \\frac{\\text{quantity dispensed}}{\\text{dose} \\times \\text{doses per day}}\n$$\n\nUnits cancel explicitly: $\\frac{\\text{mg}}{\\text{mL}} \\times \\text{mL} = \\text{mg}$ for the first; the second and third produce capsules or mL directly.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Order:** "amoxicillin 125 mg/5 mL susp — 5 mL t.i.d. × 7 days."\n\n**Step 1 — drug per dose.** The strength's denominator (5 mL) matches the dose volume (5 mL), so each dose is **125 mg**. No arithmetic needed — but the *matching check* is the discipline.\n\n**Step 2 — quantity.** 5 mL × 3/day × 7 days = **105 mL**.\n\n**Step 3 — total drug.** 125 mg × 21 doses = 2,625 mg = **2.625 g** in the bottle.\n\n**Reverse check:** 105 mL ÷ (5 mL × 3/day) = 7 days ✓.\n\n**Second order:** "30 mL, 5 mL q.i.d." — days of supply = 30 ÷ (5 × 4) = **1.5 days**. A half-day answer is the screening alarm that the quantity and the sig disagree (pct-7-9's territory).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `These three numbers — dose per administration, quantity, days of supply — are exactly what the label, the stock order, and the insurance claim each need. Computing them once, correctly, at the bench prevents the downstream failures: a short bottle, a mislabelled dose, a "refill due" that isn't.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. "250 mg/5 mL susp — 10 mL b.i.d." — drug per dose and total daily dose? (500 mg/dose; 1,000 mg/day ✓.)\n2. Quantity for "1 tab t.i.d. × 10 days"? (30 tablets ✓.)\n3. Days of supply: 30 mL dispensed, 5 mL q.i.d. (30 ÷ 20 = 1.5 days ✓.)\n4. Error-detection: an order needs 150 mL but reads "dispense 100 mL" (5 mL t.i.d. × 10 days). Shortfall? (50 mL — the quantity leg contradicts the sig ✓.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Three bench calculations: dose per administration, quantity, days of supply.\n- Match dose volume to the strength's own denominator before scaling.\n- Answers in dispensing units; estimate then reverse-check every result.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 9 — Identifying Incomplete or Unclear Prescriptions (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-9',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Identifying Incomplete or Unclear Prescriptions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An order is **incomplete** when a required element is missing, and **unclear** when an element is present but ambiguous. Both stop the process: the order goes back to the prescriber, the conversation is documented, and nothing is dispensed on assumption.\n\nThe completeness checklist (built from pct-7-1's anatomy): prescriber identity and **signature and date**; patient identifiers; drug name (generic where possible); **strength**; **dosage form**; dose with **route**; frequency; duration or quantity; refills where applicable.\n\nThe clarity hazards have standard names:\n\n- **Missing strength or form** — "amoxicillin 250 mg" of what?\n- **Ambiguous frequency** — "twice daily" vs "every 12 hours" can differ (food, sleep); q.d./q.i.d. look-alikes.\n- **Bare "as directed"** with no directions anywhere (pct-7-5).\n- **Decimal notation risks** — the widely taught safety conventions: always a **leading zero** (0.5 mg, never .5 mg) and never a **trailing zero** (5 mg, never 5.0 mg), because lost decimal points turn these into 5 mg and 50 mg. Institutions publish specific do-not-use abbreviation lists; the conventions vary in scope, so treat the *habits* as universal and any particular list as source-dependent.\n- **Illegibility** — any character you must guess at is a character you must clarify.\n\nThe professional response is a fixed sequence: **identify** what is missing or ambiguous → **contact** the prescriber → **document** the clarification (who, what, when, outcome) → annotate the prescription → proceed only with a complete, unambiguous order. Guessing is not a step in the sequence.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Incomplete = element missing; unclear = element ambiguous. Both stop dispensing.\n- Checklist: signature, date, patient, drug, strength, form, dose, route, frequency, duration/quantity, refills.\n- Decimal conventions: leading zero yes (0.5 mg), trailing zero no (5 mg).\n- Response: identify → contact → document → annotate → proceed. Never guess.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Clarification calls are routine, not confrontational: "The strength isn't stated — could you confirm which amoxicillin product?" Prescribers expect these calls; the documentation of each one is the pharmacist's professional record that the safety chain worked.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Audit this line: "amoxil 250, 1 tds, 7/7" — list every missing or unclear element and the question you would ask the prescriber about each.\n2. Conceptual: why is "5.0 mg" the dangerous form of a 5 mg order, and what single convention prevents it?\n3. Sorting: state whether each is *incomplete* or *unclear* — (a) no signature; (b) "q.d." in a tremulous hand; (c) ".8 mg"; (d) refills unstated on a chronic-medication order.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Missing element = incomplete; ambiguous element = unclear; both stop the bench.\n- The anatomy of pct-7-1 is the completeness checklist.\n- Leading zero yes, trailing zero no; clarify → document → annotate → proceed.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 10 — Basic Prescription Screening (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-7-10',
    courseId: 'pct-201',
    topicId: 'pct-7',
    nodeType: 'subtopic',
    title: 'Basic Prescription Screening',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Screening** is the professional read-through that happens before anything is dispensed — the moment all the topic's skills combine into one habit. A basic screen moves through four gates:\n\n1. **Legality and completeness** — valid prescriber, signature, date; every element of pct-7-9's checklist present. Fail → return to prescriber.\n2. **Legibility and clarity** — every abbreviation decoded, every notation safe (leading zeros, no trailing zeros), nothing guessed. Fail → clarify.\n3. **Plausibility** — the estimation habit from pct-4-7 applied to the numbers: does the dose sit in a sane range for this drug and this patient (age, weight where given)? Does the quantity match the sig (pct-7-6's triangle)? Does the strength's volume language match the sig? A 10-fold outlier is almost always a decimal or unit misread — the same 10×/1000× error families pct-4-8 catalogues.\n4. **Awareness flags** — at this level, recognising *that* a question exists: duplicate therapy on the order, a dose-looking dose for a patient at the age extreme, an unclear p.r.n. The deep clinical work (interactions, renal adjustment, individualisation) belongs to the later clinical topics — screening's job is to notice and escalate, not to adjudicate.\n\nEvery gate failure routes to the same place: the prescriber, with a documented question. Screening is not gatekeeping *against* prescribers; it is the second pair of eyes the system deliberately places before the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four gates: legality/completeness → legibility/clarity → plausibility → awareness flags.\n- Plausibility = estimation + the quantity triangle + unit-language matching.\n- 10× outliers are usually decimal or unit misreads — re-derive, don't dismiss.\n- Screening notices and escalates; deep clinical adjudication comes later in the course.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Order:** "paracetamol 500 mg tabs — 2 tabs q.i.d. p.r.n." for an adult.\n\n**Gates 1–2:** complete and legible; abbreviations decode cleanly.\n\n**Gate 3 (plausibility):** 2 × 500 mg = 1,000 mg per administration × 4 = **4,000 mg/day maximum** — exactly the widely used adult daily ceiling for paracetamol. The *p.r.n.* without a minimum interval is the flag: as written, doses could stack arbitrarily close. The screen's question to the prescriber: "Please confirm the minimum dosing interval (and maximum daily dose) for the p.r.n. use."\n\n**Outcome:** clarified and documented before dispensing — the screen did its job by *asking*, not by judging the drug itself.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four screening gates in order and the destination of any failure.\n2. Calculation as screening: "1 tab t.i.d. × 7 days" arrives with "dispense 21" — what does the triangle confirm, and what would 27 signal? (21 ✓ matches; 27 = a 6-tablet excess to query.)\n3. Conceptual: why is "notice and escalate" the right screening behaviour for a possible interaction, rather than rewriting the order?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Screen before dispensing: legality → clarity → plausibility → awareness.\n- Plausibility = estimation habit + quantity triangle + unit matching.\n- Failures route to the prescriber with a documented question — the system's second pair of eyes.`,
      },
    ],
  },
];
