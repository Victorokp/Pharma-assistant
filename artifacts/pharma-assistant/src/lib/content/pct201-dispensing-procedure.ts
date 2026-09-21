import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-27: General Dispensing Procedure.
 *
 * Batch 30: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–26
 * top-level topic convention) plus its eighteen children
 * pct-27-1…27-18 (plain unprefixed names). Node IDs and titles mirror
 * curriculum.ts exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-27 has no surviving Phase-1 tier record; the block is
 * conceptual procedure, with one calculation child — 27-7 Calculations,
 * Tier C under the established convention (matching pct-5-7 and the
 * Tier C children of pct-9…25). All other children Tier B.
 * Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the dispensing procedure as an
 * ordered sequence of bench steps. The ethical frame (confidentiality,
 * autonomy, responsibility, intervention duty) is pct-26's canon
 * (cross-referenced at each step where conduct binds); presentation
 * duties overlap 26-7 (procedure here, ethics there); prescription
 * READING skills (abbreviations, conventions) are pct-7's canon —
 * 27-4 covers interpretation as a procedure step, not a re-teaching
 * of abbreviation systems; packaging/labelling detail is pct-28's
 * canon (27-12/27-13 cover the bench steps); compounding TECHNIQUE is
 * pct-19's canon (27-11 covers when/what at the bench); expiry dating
 * is pct-43's (27-9 covers the check itself); communication craft is
 * 26-8's canon (27-16 covers the step's placement and record).
 */
export const pct201DispensingProcedureLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-27',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'topic',
    title: 'General Dispensing Procedure',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where pct-26 gave dispensing its principles and ethics, this topic gives it its **procedure** — the ordered sequence of bench steps that carries a prescription from the counter to a counsellable, documented supply. The procedure exists to make safety reproducible: every step is a checkpoint with a defined purpose, and the order of the steps is itself a safety device (checks before preparation, preparation before labelling, labelling before final check).\\n\\n**The map of the topic.** *Front end* — receiving the order and establishing identity (27-1, 27-2). *Assessment* — reading and testing the order (27-3…27-7): assessment, interpretation, legality/completeness, drug/strength/form, and the calculations step that assembles the earlier topics' arithmetic. *Execution* — product selection, expiry/integrity, weighing and measuring, compounding where needed (27-8…27-11). *Closing* — packaging, labelling, final check, documentation, counselling, storage instructions, follow-up (27-12…27-18).\\n\\n**How to study it.** Each lesson owns one step: what it is for, what is done, what stops the process. The **stop rule** is uniform: any doubt at any step halts the supply until resolved (pct-26-11's intervention path).\\n\\n**Relationship to prior canon**: the reading skills are pct-7's; the arithmetic is pct-9…pct-25's; the ethics are pct-26's; the packaging/labelling detail is pct-28's; the compounding technique is pct-19's. This topic is the **assembly** — the sequence that makes the parts a supply.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The procedure is an ordered sequence of checkpoints; the order itself is a safety device.\\n- Four phases: front end → assessment → execution → closing.\\n- Uniform stop rule: any doubt halts the supply until resolved (pct-26-11).\\n- Each lesson owns one step — what it is for, what is done, what stops it.\\n- The topic assembles prior canon; it does not re-teach it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four phases of the procedure and the steps inside each.\\n2. Why is the ORDER of the steps itself a safety device?\\n3. What is the uniform stop rule and where does it come from?\\n4. Which five prior canon areas does this topic assemble?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Receive, identify, assess, calculate, execute, close. The procedure is the ethics made repeatable — each step a checkpoint, any doubt a halt.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-27', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-27-1',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Receiving the Prescription',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Receiving** is the formal handover of the prescription into the pharmacist's care — the step that opens the legal and professional chain of custody for both the paper (or electronic order) and the supply that follows.\\n\\n**What receiving includes.** (1) *Acknowledgement* — the order is accepted, dated as received, and kept in the pharmacist's control; from this moment the pharmacy is accountable for it (pct-26-3's accountability begins here, not at the bench). (2) *First physical read* — is the order legible enough to begin assessment? Is anything physically missing (no drug written, no signature block where the framework requires one)? A grossly incomplete order is returned or queried at this step, before work begins. (3) *Queue position* — the order enters the dispensing sequence; urgency is noted (and acute presentations recognised as requiring prioritisation per the framework — a practice matter, referenced not adjudicated).\\n\\n**Confidentiality begins at the counter**: the order now carries identifiable clinical information, and the handling duties of pct-26-5 apply from receipt — not from dispensing.\\n\\n**What receiving is not**: it is not assessment. Nothing is interpreted, calculated, or verified here — only accepted, dated, and examined for gross completeness. Jumping ahead (e.g. promising a waiting time before reading) is the classic error of this step.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Receiving = acknowledgement + dating + custody + first physical read for gross completeness.\\n- Accountability (pct-26-3) and confidentiality (pct-26-5) begin at receipt.\\n- Grossly incomplete orders are returned/queried before work begins.\\n- No interpretation or calculation happens at this step — that is 27-3 onward.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What three formal acts does receiving perform on the order?\\n2. Which two pct-26 duties begin at receipt, and why there?\\n3. What kind of defect is caught at receiving, and what happens to such an order?\\n4. Why is promising a waiting time before reading the order an error?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Accept, date, take custody, glance for gross completeness — nothing more. The chain of accountability starts the moment the paper changes hands.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-2',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Patient Identification',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Patient identification** establishes *who the medicine is for* — the anchor for every later check and the first patient-safety step of the procedure.\\n\\n**Why it comes second, not later.** Every subsequent check is a comparison against a specific person: the screening (27-3), the label (27-13), the counselling (27-16). Identification done late means earlier work may have been done against the wrong person's order — rework at best, supply to the wrong patient at worst.\\n\\n**The two identifications.** *On the order*: patient name (and age/weight where the framework requires or the therapy demands — paediatric dosing, pct-10's weight-based canon). *At the counter*: the person presenting is confirmed as the patient or their authorised representative — the confirmatory question is open ('how will this be used?' style, per local practice), never leading.\\n\\n**The look-alike hazard.** Similar names, family members with shared names, and repeat patients with changed prescriptions are the classic mismatches; the defence is a deliberate comparison, not recognition ('I remember this patient' is not identification).\\n\\n**Confidentiality interplay** (pct-26-5): confirmation questions are asked so they cannot be overheard; and confirming whether a person is a patient of the pharmacy to a third party is itself a disclosure — the default is protection.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Identification anchors every later check: screening, label, counselling.\\n- Two identifications: on the order (name, age/weight where required) and at the counter (patient or authorised representative).\\n- Deliberate comparison beats recognition; look-alike names and family members are the classic mismatches.\\n- Confirmation questions are asked privately; third-party status questions are confidentiality events (pct-26-5).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why must identification precede assessment rather than follow it?\\n2. What are the two identifications, and what does each establish?\\n3. Why is 'I remember this patient' not identification?\\n4. How does confidentiality shape the way confirmation is asked?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Know who the medicine is for — on paper and in person — before a single tablet is counted. Deliberate comparison, private questions.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-3',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Prescription Assessment',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Assessment** is the whole-order first pass: reading the prescription as a document before engaging with any single item — the 'read the whole order first' habit from pct-26-10, given its procedural home.\\n\\n**What the first pass establishes.** (1) *Is this one prescription or several?* Multi-item orders are dispensed item-by-item with the checks repeated per item. (2) *Is anything outside the pharmacist's lane present?* — e.g. a therapy question rather than a supply question is noted for the prescriber route (pct-26-11). (3) *Is the order processable as written?* — gross ambiguity or illegibility is a query-before-work situation: assessment may end the procedure here, returning the order for clarification. (4) *Context for later steps* — the patient's age on the order (paediatric checks sharpen), the date (freshness/still-valid per the framework), the prescriber's identity (verifiable per the framework).\\n\\n**Assessment vs interpretation (27-4)**: assessment decides *how to proceed*; interpretation decides *what the order says*. Assessment is the triage that makes interpretation safe — it catches the orders that should not be interpreted at all until the prescriber is consulted.\\n\\n**The stop rule at this step**: doubt about validity, identity, or processability halts the supply (the uniform stop rule; pct-26-10's response rule is the conduct that resolves it).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Assessment = whole-order first pass: one order or many, processable, context for later steps.\\n- It may END the procedure: gross ambiguity → query before work.\\n- Assessment decides how to proceed; interpretation (27-4) decides what the order says.\\n- Stop rule applies: validity/identity/processability doubt halts the supply.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What four things does the whole-order first pass establish?\\n2. Distinguish assessment from interpretation, and say which must come first.\\n3. When may assessment legitimately end the procedure, and what replaces it?\\n4. Which pct-26 lesson supplies the response rule that resolves assessment doubts?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Read the whole order as a document first: triage it, count its items, catch the ones that must go back. Triage before translation.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-4',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Interpretation of Prescription',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Interpretation** converts the assessed order into an unambiguous work instruction: what medicine, what strength, what form, what dose, how often, how long, how taken.\\n\\n**The knowledge it draws on** is pct-7's canon (abbreviations, Latin conventions, sig decoding, numeric conventions) — this step is that canon *in sequence*, applied to this order, with pct-26-10's discipline attached: an abbreviation that reads two ways, a nonstandard abbreviation, or an ambiguous quantity is **queried, never guessed**.\\n\\n**The interpretation record** (mental or written, per practice): the decoded instruction in plain words — the same words that will appear on the label (27-13). If the decoded instruction cannot be written as a complete, followable sentence, the interpretation is not finished; ambiguity at this stage becomes a wrong label downstream, and wrong labels are the error class the whole procedure exists to prevent.\\n\\n**Plausibility begins here.** Decoding produces the values the checks will test: the dose that 27-6 will verify against the product and the patient, the quantity that 27-7 will assemble into amounts. An implausible decoded value is caught NOW, not after product selection — the cheapest place to catch an error is the step that creates it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Interpretation converts the order into an unambiguous work instruction.\\n- Reading canon is pct-7's; the discipline is pct-26-10's: ambiguous → query, never guess.\\n- The decoded instruction must be writable as a complete, followable sentence (the future label text).\\n- Decoded values feed the later checks; implausibility is caught at the step that creates it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does interpretation produce, and what happens if it cannot be written as a complete sentence?\\n2. Which topic owns the reading canon and which owns the query discipline?\\n3. Give two examples of values whose plausibility is first testable at this step.\\n4. Why is this the cheapest place to catch an interpretation error?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Decode to a sentence a patient could follow; anything that reads two ways is a query. The label will only ever be as good as this step.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-5',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Checking Legality and Completeness',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `This step tests the order as a **legal document**: does it carry the particulars the governing framework requires, from an identifiable prescriber, in a form the framework accepts?\\n\\n**Completeness checklist** (the particulars habitually required — the framework is the authority, referenced not adjudicated at 200L): patient identity; date of the order; drug name; strength; dose/frequency/duration or quantity; directions; prescriber identity (name, and registration/contact particulars per the framework). A missing particular is a **query**, not a guess — pct-26-10's rule in procedural form.\\n\\n**Legality dimensions.** (1) *Prescriber authority*: is this prescriber type empowered to order this product? (2) *Product class rules*: controlled substances and other restricted classes carry additional requirements (details are framework canon; the procedural point is that the class is recognised and its extra checks are executed). (3) *Temporal validity*: an order's validity is time-limited per the framework — a stale order is a query, not a supply.\\n\\n**The two-outcome rule.** Every particular is present and the order is legal → proceed to 27-6. Anything missing, ambiguous, or legally doubtful → **hold and query** (pct-26-11's path), documented. The procedure does not grade incompleteness: a missing prescriber identity and a missing date both stop the supply.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The order is tested as a legal document: particulars, prescriber authority, product class, temporal validity.\\n- The particulars checklist is framework-dependent — referenced, never adjudicated, at 200L.\\n- Missing/ambiguous particular = query, never guess (pct-26-10 in procedural form).\\n- Two outcomes only: proceed, or hold-and-query — incompleteness is not graded.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the particulars on the completeness checklist and state the two-outcome rule.\\n2. Name the three legality dimensions tested at this step.\\n3. Why is incompleteness not graded (a missing date vs a missing prescriber identity)?\\n4. Which conduct rules govern the hold-and-query outcome?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Particulars present, prescriber authorised, class rules met, order fresh — or the supply holds. The order must be legal before it can be clinical.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-6',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Checking Drug, Strength and Dosage Form',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The clinical-sense check of the three essentials: **the right drug, at the right strength, in the right form** for this patient and this order.\\n\\n**Drug check.** The decoded name is tested for identity and sense: look-alike/sound-alike distance from the written name is examined deliberately (pct-26-9's LASA defence), the therapeutic plausibility is screened (does this class fit this presentation? — the pharmacist screens; therapy choice remains the prescriber's, pct-26-2), and duplicate-therapy pairs within the order are checked.\\n\\n**Strength check.** The written strength is tested against the products available: does it exist? Is the unit convention sane (mg vs µg is the classic fatal confusion — pct-5's unit discipline is the defence)? For multi-unit orders, strengths are compared across items for consistency (a 10-fold gap between two orders of the same drug is a query, not a coincidence).\\n\\n**Dosage-form check.** The written form must exist for the drug-strength pair AND suit the patient and route: a tablet for a patient who cannot swallow, a form the route forbids, or a form the indication makes pointless are all queries. Form suitability draws on pct-2's dosage-form canon.\\n\\n**The check is per-item**: multi-item orders repeat all three checks for every item — the sequence is not 'once per prescription' but 'once per medicine'.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three essentials, per item: drug (identity/LASA/duplicates), strength (exists? unit convention sane?), form (exists? suits patient and route?).\\n- mg vs µg is the classic fatal confusion; pct-5's unit discipline is the defence.\\n- Form suitability draws on pct-2's canon; therapy choice stays with the prescriber.\\n- The check runs once per medicine, not once per prescription.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Run the three essentials on a written order for 'Digoxin 0.25 mg tablets' — what is tested at each?\\n2. Why is the mg/µg confusion the classic fatal one, and which canon defends against it?\\n3. What makes a form check fail even when the drug-strength pair exists?\\n4. How does the check change for a five-item prescription?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Right drug, right strength, right form — tested per item, deliberately, against what exists and what suits this patient. Screen, do not prescribe.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-7',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **calculations step** is where the whole course's arithmetic becomes a dispensing checkpoint: the dose and quantity the order implies are **computed and verified** before any product is selected.\\n\\n**What is calculated at the bench.** (1) *Dose verification*: the per-administration dose from the order, checked for unit consistency (pct-10's dose chain: dose × weight where weight-based). (2) *Daily dose*: dose × doses/day — the number screened against plausible ranges for the product class (screening values are reference data, stated as such). (3) *Course quantity*: doses/day × days, then converted to units (tablets/capsules/mL) and to packs if packaged — pct-25-3's pack-rounding logic at the bench. (4) *Quantity to dispense*: what the order's stated quantity must reconcile with — a mismatch between computed course quantity and the order's stated quantity is a **query**.\\n\\n**The verification habit**: every computed value is reverse-checked (the pct-5/9 habit): daily-dose × days must rebuild the course; pack count × units/pack must cover the course with the stated rounding.\\n\\n**The screening frame** (pct-26-10's clinical-sense class): the computed numbers are compared against reference ranges — flagged as reference data, never assumed as universal constants — and a value outside the plausible range is queried before supply.\\n\\n**What this step is not**: it is not new arithmetic — every identity was built in pct-9…pct-25. It is the procedure's single place where that arithmetic is *executed as a check* on an order.`,
      },
      {
        kind: 'FORMULAS',
        body: `**The bench chain**\\n\\n$$\\n\\text{course quantity} = \\text{doses/day} \\times \\text{days} \\times \\text{units per dose}\\n$$\\n\\n$$\\n\\text{packs} = \\left\\lceil \\frac{\\text{course quantity}}{\\text{units per pack}} \\right\\rceil\\n$$\\n\\n**Reverse check**\\n\\n$$\\n\\text{packs} \\times \\text{units/pack} \\ge \\text{course quantity}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — course quantity.** Order: 1 tablet three times daily for 7 days. Course = 3 × 7 × 1 = **21 tablets**; a 21-tab pack fits exactly (packs = ⌈21/21⌉ = 1; reverse: 21 ≥ 21 ✓).\\n\\n**Example 2 — pack rounding.** Same order, but stocked in 10-packs: packs = ⌈21/10⌉ = **3 packs** (reverse: 30 ≥ 21 ✓ — 9 tablets spare, the patient is told why, 25-3's wastage note).\\n\\n**Example 3 — liquid quantity.** 5 mL four times daily for 5 days: 4 × 5 × 5 = **100 mL** — dispense a 100 mL container or state the rounding; reverse: 100 ÷ (5 × 4) = 5 days ✓.\\n\\n**Example 4 — the query case.** Computed course 21 tablets, but the order states 'dispense 60': the mismatch is **queried** — computed and stated must reconcile before supply.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 2 capsules twice daily for 10 days — course quantity, and packs if stocked in 15-packs? (40; ⌈40/15⌉ = 3 packs, reverse 45 ≥ 40 ✓.)\\n2. 10 mL twice daily for 7 days — liquid quantity? (140 mL.)\\n3. Computed course 28, order states 30 — supply or query, and why?\\n4. Which prior canon supplies each part of the bench chain?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Doses → daily → course → packs, each number reverse-checked, computed quantity reconciled with the stated one — the course's arithmetic, run as a checkpoint.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-8',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Selection of Product',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Product selection** chooses the actual item from the shelf that satisfies the verified order: right drug, strength, form — and, where the framework allows choice, the right *brand or generic*.\\n\\n**The selection tests, in order.** (1) *Identity*: name, strength, form match the verified order (27-6's output is the input here). (2) *Stock truth*: in date, intact packaging, correct storage condition (the integrity screen proper is 27-9; here it is a first pass). (3) *Substitution frame*: where a generic equivalent exists and the framework permits substitution, the equivalence licence is **bioequivalence** (pct-24-4's canon) and the economics are pct-25's — the pharmacist selects within the rules; the rules are referenced, not adjudicated. (4) *Batch thinking*: first-to-expire-first-out from available stock (pct-43's rotation canon serving both safety and shelf economics, pct-25-6).\\n\\n**The wrong-selection error class** is pct-26-9's LASA/materialised: similar names and similar packaging on adjacent shelves — the defence is selection against the **written decoded order**, never against memory of what the shelf usually holds.\\n\\n**What selection is not**: it is not therapy choice. The prescriber's medicine stands; the pharmacist selects the product that delivers it.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Selection = identity + stock truth + substitution-within-rules + FEFO batch thinking.\\n- Generic substitution is licensed by bioequivalence (pct-24-4) and framed by the substitution rules.\\n- Select against the written decoded order, never against shelf memory (LASA defence, pct-26-9).\\n- The prescriber's therapy stands; the pharmacist selects the product that delivers it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four selection tests in order.\\n2. Which two prior canons make substitution both technically and economically sound?\\n3. What does 'select against the decoded order' mean operationally, and which error class justifies it?\\n4. Why is FEFO both a safety and a financial control?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Right product, in date, from the front of the shelf, chosen by the written order — substitution inside the rules, never against memory.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-9',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Checking Expiry and Product Integrity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The selected product is tested as a **physical object** before it is prepared: is it within its expiry, and is it demonstrably intact?\\n\\n**Expiry.** The expiry date is read from the actual pack — not assumed from the shelf position — and the beyond-use distinction is kept sharp: **expiry** belongs to the manufacturer's sealed product (pct-43's dating canon); **beyond-use dating** is the shorter date a preparation receives once opened or compounded (pct-28-10's canon, cross-referenced at labelling 27-13). An expired pack is removed from the selection — no exceptions, no 'probably still good'; the stock-removal duty (remove from dispensing stock, report, restock) is the professional response.\\n\\n**Integrity.** The product is inspected for the defects its form can show: intact seals and packaging; containers undamaged; contents consistent (no discolouration, caking, cracking, cloudiness where clarity is expected — form-specific signs draw on pct-2's form canon). A failing product is replaced, not dispensed 'with a note'.\\n\\n**The step's output** is a product proven sound — the input the labelling and final check steps can trust. Skipping it does not save time; it moves the failure to the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Expiry is read from the actual pack; expired = removed from stock, reported, restocked — no exceptions.\\n- Expiry (sealed product, pct-43) vs beyond-use dating (opened/compounded, pct-28-10) are distinct.\\n- Integrity is form-specific: seals, containers, contents consistent with the form (pct-2 canon).\\n- The step's output is a proven-sound product that later steps can trust.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish expiry from beyond-use dating and name each canon.\\n2. What is the professional response to an expired pack at selection?\\n3. Name three form-specific integrity signs.\\n4. What does this step hand to labelling and final check?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Read the date on the actual pack, inspect like the form demands, replace what fails. Sound in, sound out — the later steps trust this one.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-10',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Weighing and Measuring',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where the supply requires the pharmacist to measure — splitting packs, measuring liquids, or weighing for a compounded item — **this step** owns the measurement discipline.\\n\\n**Instruments and their ranges.** Balance for solids, graduated measures for liquids; each instrument has a capacity and a minimum measurable quantity (pct-6's measurement canon) — weighing below the balance's reliable minimum is an **aliquot** situation (pct-6's canon), or a rethink of the method, never a guess.\\n\\n**Technique discipline.** Flat surface, level check, tare the vessel, read the meniscus at eye level, select the measure whose size matches the volume (the pct-6 'closest measure' rule). Precision is stated, not implied: the measurement is recorded with the instrument's implied precision.\\n\\n**Unit discipline.** The order's units govern (pct-5's SI canon): conversions are made explicitly, on paper where the quantity matters, never mentally at the bench — the unit-slip errors (mg/g, mL/L) are the bench's classic fatal pair.\\n\\n**Where compounding is needed**, this step flows into 27-11; where the product is counted or measured as packaged, the discipline is lighter but the unit rule stands.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Every instrument has a capacity and a reliable minimum; below-minimum work is aliquot or rethink (pct-6 canon).\\n- Technique: flat surface, level, tare, meniscus at eye level, closest measure size, stated precision.\\n- Conversions are explicit and on paper — mg/g and mL/L are the classic fatal pair.\\n- The order's units govern (pct-5 canon).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What are the two numerical properties of every instrument, and what does below-minimum work demand?\\n2. List the technique discipline for a liquid measurement.\\n3. Why are conversions written at the bench, not done mentally?\\n4. Which pct-6 canon does this step operationalise?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Right instrument, right range, right technique, written conversions. Measure like the number matters — it is the patient's dose.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-11',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Compounding Where Necessary',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `When no suitable manufactured product exists — strength, form, or combination — the pharmacy prepares the medicine: **compounding**. At the procedure level, this step asks *when* and *what*, and hands technique to the canon that owns it.\\n\\n**When compounding is the answer.** The verified order cannot be met by selection (27-8 failed on availability, not on sense): a strength that is not manufactured, a form the patient cannot use (a liquid for a patient who cannot swallow tablets), a combination ordered deliberately (e.g. two actives in one preparation where no product exists).\\n\\n**What this step does**: the preparation is planned against the master formula discipline (pct-18-1's canon) — the formula scaled (pct-18-2's R = desired/formula), quantities computed (pct-19's compounding calculations: dilutions, aliquots, displacement where relevant), equipment and container selected, the beyond-use date determined (pct-28-10's canon — a compounded product's dating is shorter and stricter), and the whole documented (27-15's canon, extra diligence because the product has no manufacturer's guarantee behind it).\\n\\n**The boundary, stated plainly**: pct-19 owns the compounding CALCULATIONS and pct-19/pct-18 the technique canon; pct-43/pct-28-10 own stability and dating. This step is the procedure's junction box — it routes the work to the canon and brings the finished preparation back into the sequence at 27-12.\\n\\n**When NOT to compound**: where the preparation would exceed the pharmacy's competence, equipment, or the framework's limits — the stop rule applies, and the supply is referred rather than improvised.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Compound when selection cannot meet the verified order: unavailable strength, unusable form, deliberate combination.\\n- Plan against pct-18 master-formula/scaling canon and pct-19 calculation canon; date per pct-28-10.\\n- Compounded products carry extra documentation duty — no manufacturer guarantee behind them.\\n- Beyond competence/equipment/framework limits: stop and refer, never improvise.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three situations that make compounding the answer.\\n2. Which canons does this step route the work to, and what does it own itself?\\n3. Why does documentation duty increase for compounded products?\\n4. What stops a compounding decision, and what replaces the supply?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Compound when the shelf cannot deliver what was verified — plan, scale, calculate, date, document — and stop cleanly when the preparation outruns the pharmacy.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-12',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Packaging** places the verified product into the container that will protect it and travel home with the patient — the bench step whose detail canon is pct-28's.\\n\\n**What the step does.** (1) *Container selection*: appropriate to the product's protection needs (light, moisture, air — pct-28's canon) and the supply's size; child-resistant closures where indicated (a safety practice, pct-28-11's canon). (2) *Decant discipline*: the product enters a clean, dry, correct container — nothing is decanted between containers casually; the container is not a mix-and-match choice. (3) *Fit for labelling*: the container is sized so the complete label (27-13) fits legibly — an overfull container forces abbreviated labels, and abbreviated labels are the error class 26-9 documents.\\n\\n**Procedure vs canon**: this step owns the ORDER OF OPERATIONS (select container → verify cleanliness → transfer → prepare for labelling); pct-28 owns container science, closure systems, and the packaging-to-patient-safety story.\\n\\n**The step's output**: the product, protected and ready for its label — never handed over unlabelled, even 'just to carry'.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Packaging = container selection + decant discipline + fit-for-labelling.\\n- Container science and closure systems are pct-28's canon; this step owns the order of operations.\\n- Size the container for the complete label — abbreviated labels are the error 26-9 documents.\\n- Nothing leaves the bench unlabelled.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What three things does the packaging step do, and what does it deliberately not own?\\n2. Why does container size matter for label safety?\\n3. Which pct-28 lessons supply the container-selection canon?\\n4. What is the rule about unlabelled handovers?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Clean right-sized container, protected product, room for the whole label. Packaging is the label's partner — never a carry-bag decision.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-13',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Labelling',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Labelling** writes the medicine's instructions onto the container — the patient's only durable copy of how to use the medicine, and the step where the decoded order (27-4) becomes patient-facing text.\\n\\n**Content** (the complete set; pct-28's mandatory-information canon governs the formal list): patient identity, drug name and strength, dose and directions in plain language, frequency and duration, route, quantity dispensed, date, prescriber identity, storage instructions (27-17's detail), and beyond-use/expiry information where applicable (pct-28-10's canon). Auxiliary labels are **chosen** for this product and patient (26-7's discipline), not applied reflexively.\\n\\n**The label traces to the order.** Every element comes from the verified order — a direction added on the label that the order did not carry has changed the prescription (26-7's rule). The plain-language duty (26-8's craft) shapes HOW the directions read, never WHAT they instruct.\\n\\n**Procedure discipline.** The label is written **away from the product**, then attached — and the final check (27-14) reads label against order AND product together. Writing on a container in hand is the classic route to the wrong-product label; the sequence (write → attach → check later) is the defence.\\n\\n**Legibility and completeness**: the complete instruction set, readable at a glance — an unreadable label fails exactly as an absent one.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The label is the patient's durable copy; content traces element-by-element to the verified order.\\n- Plain language shapes HOW, never WHAT; aux labels are chosen, not reflexive (26-7).\\n- Write away from the product, attach, verify at final check — the sequence defends against wrong-product labels.\\n- Storage (27-17) and beyond-use (pct-28-10) information belong on the label where applicable.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the label content set and name the canon that governs the formal list.\\n2. What does 'the label traces to the order' forbid, and why?\\n3. Why is the label written away from the product?\\n4. How do plain-language duty and fidelity to the order coexist?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Decode (27-4) → write → attach → check. The label is the order, said plainly, traced exactly — written away from the product it will name.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-14',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Final Product Check',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **final check** is the pharmacist's verification of the finished supply against the verified order — the last checkpoint before the patient, and the procedural home of the 'final professional check' duty (pct-26-2).\\n\\n**The check reads three things together**: the **order** (the verified, decoded instruction set), the **label** (what the container now says), and the **product** (what the container now holds). Each is compared against the other two: label vs order (every element traced), product vs order (drug, strength, form, quantity), product vs label (the container's contents are what the label names).\\n\\n**The check is deliberate and fresh** — performed as its own act, not from memory of the steps just done (pct-26-9's confirmation-bias defence: verify against the document, not against recollection). Where the framework requires a second check for defined classes, the second check is a genuinely independent act — fresh eyes, fresh read.\\n\\n**The check can end the cycle.** A mismatch at final check means the supply does not leave the bench: the error is corrected, and the cycle re-runs from the failed step (27-7's numbers, 27-8's selection, 27-13's label — wherever the defect entered). The final check is also the LAST point where correction is cheap; after handover, correction means patient contact.\\n\\n**Output**: a supply proven consistent with the order — and the confidence to document (27-15) and counsel (27-16) honestly.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three-way read: order ↔ label ↔ product, each against the other two.\\n- Deliberate and fresh — against the document, not memory (confirmation-bias defence).\\n- Mismatch = supply does not leave; correct and re-run from the failed step.\\n- The last cheap correction point — after handover, correction means patient contact.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What are the three readings, and how are they compared?\\n2. Why must the check be fresh rather than remembered?\\n3. What happens to the cycle when final check finds a mismatch?\\n4. Why is this the last cheap correction point in the whole procedure?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Read order, label, product together — freshly, deliberately. Mismatch stops the supply; correction now is cheap, correction after handover is not.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-15',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Documentation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Documentation** records the supply so the act is **reconstructable** — the accountability backbone pct-26-3 established, executed here as a concrete step.\\n\\n**What is recorded** (per the framework's requirements, referenced not adjudicated): the prescription's particulars; the product(s) supplied with batch/lot where required; quantity; date; the pharmacist responsible; and significant professional acts — queries raised and their resolution, interventions made, refusals, counselling highlights where material.\\n\\n**Why batch records matter**: a recalled lot is only traceable to patients if the record carries it — documentation is also a **public-health instrument**, not paperwork.\\n\\n**Query documentation** deserves emphasis: an order queried and resolved is recorded as queried-and-resolved — the record shows the professional judgement exercised (pct-26-11's path), which is exactly what makes the record a professional document rather than a till roll.\\n\\n**The order's custody** closes here: the dispensed-and-marked prescription is retained per the framework's rules — filed, retrievable, and protected for confidentiality (pct-26-5 extends to stored records).\\n\\n**Contemporaneity**: records are made at the time, not reconstructed at closing time — a record made from memory days later is a reconstruction, and reconstructions are the raw material of disputes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Documentation makes the act reconstructable: particulars, product, batch, quantity, date, pharmacist, significant professional acts.\\n- Batch records are a public-health instrument (recalls trace through them).\\n- Queries/interventions are recorded as professional judgements, not just outcomes.\\n- Records are contemporaneous; the prescription's custody is retained per framework, confidentially (pct-26-5).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What is recorded, and what makes the record 'reconstructable'?\\n2. Why are batch records a public-health instrument?\\n3. Why document a resolved query even though it caused no change?\\n4. What does contemporaneity protect the record — and the pharmacist — from?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Write it when it happens: product, batch, quantity, decisions, queries. The record is the supply's memory — and the pharmacist's evidence.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-16',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Patient Counselling',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Counselling** is the supply's handover to the patient: the face-to-face communication of what the medicine is, how to use it, and what to watch for — the procedural placement of 26-8's communication craft.\\n\\n**The step's content** is 26-8's canon applied now: plain-language directions, teach-back confirmation, essentials → warnings → questions → key-facts repeat. What THIS step adds is the **procedure's perspective**: counselling is a checkpoint, not a courtesy — the teach-back response can surface a mislabelled direction, an unclarified ambiguity, or a mismatch the final check could not see (the patient's understanding is the last system defence, pct-26-9's point).\\n\\n**The offer vs the requirement**: the professional standard is that counselling is offered to every patient; the framework may define who must be counselled (new therapies, changed regimens, specific classes — referenced, not adjudicated). Declining the offer is honoured after its consequences are explained (26-6's autonomy discipline).\\n\\n**Counselling inputs**: the final-checked supply (27-14's output), the label as the visual aid (27-13), and the patient's questions as data — a question that reveals a system failure is recorded as such (27-15).\\n\\n**The step's output**: a patient who can state what they have and how they will use it — or a documented offer, declined with consequences explained.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Counselling = 26-8's craft placed as a procedure checkpoint, not a courtesy.\\n- Teach-back is the last system defence — it can surface errors no earlier check could see.\\n- Offered to every patient; frameworks may define who must be counselled; declined offers are honoured with consequences explained.\\n- Inputs: final-checked supply, label as visual aid, patient questions as failure data.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does this step add beyond 26-8's craft, and what is the last system defence?\\n2. Distinguish the offer standard from framework requirements.\\n3. What are the step's three inputs, and what can a patient's question become?\\n4. What is the step's output when the offer is declined?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Hand over the medicine AND the understanding — teach-back as the last defence, the offer to every patient, the questions logged as system data.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-17',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Storage Instructions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Storage instructions** translate the product's stability requirements into the patient's home conditions — the last mile of pct-43's stability canon, delivered as label text and spoken instruction.\\n\\n**What the instruction covers.** Temperature (room vs refrigeration, with the meaning of each term made concrete — 'the fridge door shelf is warmer than the back; the freezer ruins most medicines'), light and moisture (keep in the original/assigned container, not the bathroom cabinet), position (upright for some forms), and duration limits (reconstituted products and opened containers carry beyond-use limits, pct-28-10's canon — the patient needs the DATE as well as the rule).\\n\\n**Form-specific instructions** draw on pct-2's form canon: refrigerate the suspension after reconstitution, protect the effervescent tablet from moisture, do not decant the soft-gel.\\n\\n**The practical translation duty**: the instruction must survive the patient's real home — 'store below 25 °C' becomes 'not on the windowsill, not in the car, not in the steamy bathroom'. The instruction is effective only if it is followable (26-8's plain-language rule, applied to storage).\\n\\n**On the label**: storage instructions are label content (27-13's set) — the spoken instruction reinforces, never replaces, the written one.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Storage instruction = temperature + light/moisture + position + duration limits, translated to the patient's home reality.\\n- Beyond-use limits come with their DATE (pct-28-10 canon), not just the rule.\\n- Form-specific instructions draw on pct-2's canon.\\n- Written on the label (27-13); spoken instruction reinforces, never replaces.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four coverage areas of a storage instruction.\\n2. Why must beyond-use limits carry a date, not just a rule?\\n3. Translate 'store below 25 °C' for a real home — what does the translation duty demand?\\n4. Which two canons supply the form-specific and dating content?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Temperature, light, position, duration — dated where limits apply, spoken plainly, written on the label. A storage rule the home cannot follow is not a rule.`,
      },
    ],
  },
  {
    nodeId: 'pct-27-18',
    courseId: 'pct-201',
    topicId: 'pct-27',
    nodeType: 'subtopic',
    title: 'Follow-Up and Referral',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The supply does not end the relationship: **follow-up** confirms the therapy is working as intended, and **referral** routes what the pharmacy cannot own to the professional who can — the procedure's closing pair.\\n\\n**Follow-up** (form varies by practice/framework, referenced not adjudicated): confirming understanding persisted beyond the counter (the teach-back decays), checking adverse effects the patient was warned about, reviewing adherence obstacles (cost — pct-25-6's canon — regimen burden, storage failures), and resolving the questions patients think of on the way home. Where the framework provides structured review points, the pharmacist initiates them; at minimum, the patient knows HOW to return with questions.\\n\\n**Referral** routes three classes of problem: (1) *clinical questions beyond the pharmacist's lane* — therapy changes, results interpretation → the prescriber (pct-26-11's resolution path); (2) *presentations outside pharmacy's scope* — the patient whose symptoms need assessment is directed to appropriate care, promptly and without improvisation; (3) *supplies the pharmacy cannot make* — preparations beyond competence/equipment (27-11's stop rule) or stock problems requiring prescriber alternatives.\\n\\n**Both are documented** (27-15's canon): a referral is recorded with its reason and destination; a follow-up is recorded with its outcome. The procedure closes not with the handover but with the **loop closed** — the patient has a route back, and the pharmacy has a record of why.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Follow-up: understanding decays, adverse effects need checking, adherence obstacles (cost — pct-25-6) need surfacing.\\n- Referral routes three classes: beyond-lane clinical questions → prescriber; out-of-scope presentations → appropriate care; impossible supplies → alternatives.\\n- Both are documented with reason, destination, outcome (27-15).\\n- The procedure closes with the loop back to the patient, not with the handover.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What does follow-up check, and why does understanding decay?\\n2. Name the three referral classes and their destinations.\\n3. How does pct-25-6's canon appear in follow-up work?\\n4. Why is the procedure's true end 'loop closed' rather than 'medicine handed over'?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Bring the patient back into reach and know when to send them on — document both. The supply ends when the loop is closed, not when the counter is.`,
      },
    ],
  },
];
