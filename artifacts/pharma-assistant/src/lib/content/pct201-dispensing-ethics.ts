import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-26: Principles and Ethics of Dispensing.
 *
 * Batch 29: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–24
 * top-level topic convention) plus its eleven children pct-26-1…26-11
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-26 has no surviving Phase-1 tier record; every child
 * is conceptual (no calculation children — the block is the
 * professional/ethical frame around the supply act), so the whole
 * block is Tier B under the established convention. Convention-derived,
 * flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the principles/ethics of the
 * dispensing act itself. Prescription-interpretation mechanics and
 * screening for errors of dose/strength arithmetic are pct-7's canon
 * (26-10 covers recognising *questionable* prescriptions as a
 * professional act, cross-referenced); dosage forms sit in pct-2 and
 * packaging/labelling in pct-28 (26-7 covers presentation as a professional
 * duty); compounding technique is pct-19. Ethical frameworks are
 * presented as standard frameworks; no statute text, institutional
 * policy, or professional-code wording is quoted or invented.
 */
export const pct201DispensingEthicsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-26',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'topic',
    title: 'Principles and Ethics of Dispensing',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Dispensing is the pharmacist-controlled act of turning a valid medication order into medicine correctly prepared, accurately labelled, and properly handed to the patient with the understanding to use it. This topic frames that act with its **principles** (how dispensing is done well) and its **ethics** (the moral obligations that govern the dispenser).\\n\\n**Why a professional frame matters.** The arithmetic of earlier topics produces numbers; dispensing turns numbers into therapy for a particular person. Between the two sits judgement: is the order valid, is the product appropriate, does the patient understand, is the record complete. Errors here are not abstract — a wrong label or an ignored ambiguity becomes a patient harm.\\n\\n**The four pillars of the topic.** (1) **Competence and accuracy** — the technical duty to dispense right (26-1, 26-2, 26-9). (2) **Responsibility** — owning the act and its consequences (26-3, 26-11). (3) **Respect for the person** — confidentiality and autonomy (26-5, 26-6). (4) **Communication and presentation** — the medicine must be usable, and the patient must understand it (26-7, 26-8).\\n\\n**Relationship to prior topics**: prescription interpretation (pct-7) supplies the reading skills this topic assumes; the screening arithmetic (pct-10, pct-14, pct-22) supplies the checks; this topic supplies the professional conduct that binds them into a safe supply.\\n\\n**Standing discipline**: frameworks are taught as standard ethical frameworks; statutes, codes, and institutional policies are referenced as *sources of specific rules*, never quoted or invented here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dispensing = valid order → correctly prepared, labelled, delivered, understood medicine.\\n- Four pillars: accuracy/competence, responsibility, respect for persons, communication/presentation.\\n- Prior topics supply the reading and checking skills; this topic supplies professional conduct.\\n- Ethical frameworks are standard; specific rules live in statutes/codes/policies, not here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define dispensing and name its four professional pillars.\\n2. How do pct-7 and the screening topics relate to this topic's content?\\n3. Why is dispensing described as a professional act rather than a mechanical one?\\n4. What is the standing discipline about statutes and professional codes?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Dispensing is judgement wrapped around accuracy: valid order, right medicine, right label, understood use — governed by responsibility and respect for the person.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-26', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-26-1',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Meaning and Purpose of Dispensing',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Dispensing** is the interpretation of a medication order, the selection/preparation and checking of the ordered product, its accurate labelling, and its supply to the patient with appropriate information. It ends when the patient can use the medicine correctly — not when the product leaves the bench.\\n\\n**What dispensing is not.** It is not mere selling: the pharmacist is accountable for the order's validity and the product's suitability. It is not prescribing: the clinical choice of therapy belongs to the prescriber; the pharmacist verifies, prepares, and delivers it safely — and intervenes when safety requires (26-11).\\n\\n**The purposes, in order.** (1) *Safety*: the right medicine, dose, form, and route reach the right patient. (2) *Efficacy*: the medicine arrives usable — correct directions, intact storage, adequate quantity for the course. (3) *Legality*: the supply satisfies the order's requirements (valid prescriber, required particulars, controlled-substance rules as governed by law). (4) *Understanding*: the patient leaves knowing what they have, why, and how to use it.\\n\\n**The dispensing cycle** ties the purposes to a repeatable order of work: receive and read the order → interpret and check (pct-7 canon) → prepare/assemble → label and final-check → supply and counsel → document. Lessons 26-7…26-9 walk the parts of this cycle where presentation and errors live.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dispensing spans interpretation → checking → preparation → labelling → supply with information.\\n- Not selling (accountable for validity/suitability), not prescribing (therapy choice is the prescriber's).\\n- Purposes: safety, efficacy, legality, understanding.\\n- The dispensing cycle is a fixed order of work — errors live at its transitions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the stages of the dispensing cycle in order.\\n2. Distinguish dispensing from selling and from prescribing.\\n3. Which purpose does labelling serve that packaging alone cannot?\\n4. Where do the reading skills assumed by this cycle come from?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Interpret, check, prepare, label, supply, counsel, document — a cycle whose end is a patient who understands, not a product that has left the bench.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-2',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Role of the Pharmacist in Dispensing',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The pharmacist is the **final professional check** between the prescriber's intention and the patient's mouth — the last person positioned to catch an error before it reaches the patient.\\n\\n**The roles, concretely.** *Translator*: the order's abbreviations and conventions become unambiguous directions (pct-7 skills). *Verifier*: identity, strength, dose arithmetic, and suitability against the order — including the screening calculations of earlier topics. *Preparer*: correct product, correct form, correct count, correct handling. *Labeller*: directions the patient can actually follow (26-7). *Educator*: how, when, how long, what to expect, what to avoid (26-8). *Monitor*: recognising interactions and questionable orders, and acting on them (26-10, 26-11). *Record-keeper*: the supply is documented so the act can be reconstructed (26-3).\\n\\n**Why the role is distinct from other staff.** Technicians and assistants may perform delegated steps under supervision; the professional judgement steps — validity, suitability, final check, counselling, intervention — belong to the pharmacist. Delegation transfers tasks, not responsibility.\\n\\n**Boundaries of the role**: the pharmacist does not change therapy unilaterally; changes run through the prescriber (26-11's resolution path), except where law explicitly empowers otherwise (a legal question, referenced not resolved here).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The pharmacist is the final professional check before the patient.\\n- Seven concrete roles: translator, verifier, preparer, labeller, educator, monitor, record-keeper.\\n- Judgement steps are non-delegable; delegation transfers tasks, not responsibility.\\n- Therapy changes run through the prescriber; the pharmacist verifies and intervenes, not overrides.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the seven dispensing roles and one concrete action for each.\\n2. Which steps are non-delegable, and why?\\n3. How does the pharmacist act on a wrong dose without prescribing?\\n4. What does 'final professional check' mean operationally at the bench?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Seven roles, one principle: judgement stays with the pharmacist. Translate, verify, prepare, label, educate, monitor, document — and never transfer the accountability.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-3',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Professional Responsibility',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Professional responsibility** is the obligation to answer for the dispensing act — its accuracy, its documentation, and its consequences. It has four working parts at 200L: **accountability**, **competence**, **diligence**, and **honesty**.\\n\\n*Accountability*: the pharmacist owns every supply made under their check — including work delegated to others — and can explain each step from order to handover. This is why records matter: documentation is what makes an act *reconstructable* (what was supplied, on whose order, what was said to the patient, what was queried).\\n\\n*Competence*: dispensing only within current knowledge and skill — and maintaining both. Working while impaired, or beyond one's competence, is itself the professional failure; the remedy is referral to a colleague or escalation, not silent improvisation.\\n\\n*Diligence*: the checks are performed properly every time, not ceremonially. The habit from earlier topics — recompute, don't assume — is the arithmetic face of diligence (a stated calculation is verified; an ambiguous order is queried, never guessed).\\n\\n*Honesty*: errors and near-misses are reported through the appropriate channel (26-9's error-learning frame). Concealment compounds the harm: the patient loses the chance of correction, the system loses the chance of prevention.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four parts: accountability (answerable, reconstructable), competence (work within skill), diligence (real checks, every time), honesty (report, don't conceal).\\n- Documentation makes the act reconstructable — the backbone of accountability.\\n- Beyond-competence work is itself the failure; the remedy is referral/escalation.\\n- 'Recompute, don't assume' is diligence's arithmetic habit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four parts of professional responsibility and a concrete behaviour for each.\\n2. Why does documentation make accountability possible rather than merely convenient?\\n3. What is the correct response to being asked to dispense beyond one's competence?\\n4. How does concealment of an error compound harm?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Own the act, stay competent, check for real, tell the truth. Records make responsibility provable; concealment turns an error into a second one.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-4',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Ethics of Dispensing',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Ethics gives the dispensing act its moral structure. The four standard **principles of biomedical ethics** — beneficence, non-maleficence, justice, and respect for autonomy — map directly onto dispensing decisions.\\n\\n*Beneficence* (act for the patient's good): choosing, when an order is ambiguous, to query rather than supply on a guess; counselling that genuinely improves use. *Non-maleficence* (avoid harm): the entire error-prevention machinery of 26-9 — this principle is why 'I followed the order' is not a complete defence when the order was visibly questionable. *Justice* (fairness): consistent professional service regardless of the patient's identity or means, and fair allocation when supplies are short — the pharmacist applies the same standard to every patient. *Respect for autonomy*: the patient's informed choices about their own treatment are honoured (26-6).\\n\\n**How conflicts are handled.** Principles can collide — a confidentiality duty vs a serious safety threat (26-5's disclosure question), or a patient's refusal vs foreseeable harm. The 200L method: identify the principles in conflict, gather the facts, escalate to senior colleagues or the governing framework when resolution is not clear — the escalation habit, not a private ruling.\\n\\n**Professional codes** exist to give these duties concrete, local expression. This topic teaches the frameworks; the code's specific wording is consulted as reference material, not reproduced or invented here.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four principles: beneficence, non-maleficence, justice, respect for autonomy — each with a direct dispensing behaviour.\\n- 'Followed the order' is incomplete when the order was visibly questionable (non-maleficence).\\n- Conflicts are resolved by: facts → principles identified → escalation, not private rulings.\\n- Codes give duties local form; consult them, never invent them.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Map each of the four principles to one concrete dispensing behaviour.\\n2. Why is non-maleficence the reason 'I followed the order' can be incomplete?\\n3. What is the 200L method when two principles collide?\\n4. What is the standing rule about professional codes in this topic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Good done, harm avoided, fairness kept, autonomy respected. When principles collide: facts, identify, escalate. Codes are consulted — never quoted from memory.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-5',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Patient Confidentiality',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Confidentiality** is the duty to protect information learned in the professional relationship — diagnoses, medicines, and the fact of the visit itself. Patients disclose sensitive information on the premise that it stays professional; the pharmacy relationship depends on that premise.\\n\\n**What is protected**: everything identifiable — the prescription's contents, the patient's condition implied by the medicine, records and conversation. A patient's medicine list *is* clinical information (an astute observer can infer diagnoses from it), which is why supply practice — screens not visible to the queue, conversations not overheard, records not left open — is part of the duty, not an office nicety.\\n\\n**Legitimate disclosure** is limited and principled: (1) the patient's **consent** (express or clearly implied — e.g. a carer collecting medicine with the patient's knowledge); (2) **legal requirement** (law compels the disclosure — a legal question, referenced not adjudicated here); (3) **serious risk to others** where law/professional guidance requires action. Outside these, the default is refusal — politely, and without confirming whether a person is even a patient.\\n\\n**The colliding principle**: confidentiality vs a serious safety threat is the classic conflict (26-4's method applies: facts, principles, escalation). The 200L position: the default is protection; override requires the legitimate channel, not personal judgement alone.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Protected: all identifiable information, including the fact of being a patient and what a medicine list implies.\\n- Physical practice is part of the duty: screens, conversations, records.\\n- Disclosure requires consent, legal compulsion, or mandated serious-risk action — otherwise refuse.\\n- Override of confidentiality runs through the legitimate channel, never personal judgement alone.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. What three categories justify disclosure, and what is the default otherwise?\\n2. Why is a medicine list itself sensitive clinical information?\\n3. Name three physical-practice safeguards of confidentiality at the counter.\\n4. How should a confidentiality-vs-safety conflict be processed?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Protect everything identifiable — including the inference from the medicine. Disclosure needs consent, law, or mandated risk; the default is protection, and escalation settles conflicts.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-6',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Patient Autonomy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Respect for autonomy** means the patient's informed choices about their own treatment govern — after a competent patient is given the information they need to choose. In dispensing this shows up in three everyday obligations.\\n\\n*(1) Inform before you supply.* The patient is told what the medicine is, what it is for, how to use it, and what to watch for — in language they understand (26-8's craft). Information withheld is a choice taken from the patient.\\n\\n*(2) Honour informed refusal.* A competent patient may decline counselling, decline a medicine, or decline a formulation. The refusal is respected *after* the consequences are explained plainly; where refusal risks serious harm, the pharmacist documents the explanation given and escalates per the professional framework — the patient is not coerced, and the concern is not silently dropped.\\n\\n*(3) Do not deceive.* Placebos-as-deception, minimised side-effects, and softened directions are autonomy violations even when intended kindly: the patient cannot govern what they do not know.\\n\\n**Autonomy's limits** are recognised, not ignored: children and patients lacking decision-making capacity have surrogate decision-makers (capacity is a clinical/legal determination, referenced not adjudicated here), and public-health or legal duties can constrain choice (26-5's boundary). Within those limits, the informed patient governs.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Autonomy = informed choice governs; inform before supply, honour informed refusal, never deceive.\\n- Refusal is respected after consequences are explained — documented and escalated when serious.\\n- Deception (placebo, softened directions) violates autonomy even when kind.\\n- Limits: capacity/surrogates and legal duties — referenced, not adjudicated, at 200L.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three everyday obligations of autonomy in dispensing.\\n2. What must accompany an honoured refusal when serious harm is foreseeable?\\n3. Why is a softened side-effect description an autonomy violation?\\n4. Which two limits on autonomy are recognised, and who determines them?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Inform, respect refusal, never deceive. Capacity and law mark autonomy's edges; inside them, the informed patient governs their own treatment.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-7',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Appropriate Presentation of Pharmaceutical Products',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Presentation** is how the medicine arrives in the patient's hands: the container, the label, the auxiliary markings, and the physical condition of the product. Good presentation is a safety system — most patients' only copy of their dosing instructions is the label.\\n\\n**The container**: appropriate to the product (light/moisture protection per the product's storage needs — pct-28's packaging canon; child-resistant closures where indicated as good practice), clean, and correctly sized so directions fit.\\n\\n**The main label**, complete and accurate: patient identity, drug name and strength, quantity/dose directions, frequency and duration, route, prescriber identity, date, and storage instructions. Every element must trace to the order (26-1's cycle) — a label that adds a direction the order did not carry has *changed the prescription*, the classic presentation error.\\n\\n**Auxiliary labels** carry the warnings the main label cannot: 'take with food', 'may cause drowsiness', 'shake the bottle', 'keep out of reach of children' — chosen because they apply to *this* product and *this* patient, not stapled on reflexively; an aux label that always appears trains the patient to read none.\\n\\n**Product condition at handover**: intact packaging, in-date stock (the expiry check — pct-43's dating canon), correct form. Presentation is where all the upstream checks become visible; a perfect calculation with a wrong label still fails the patient.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Presentation = container + main label + auxiliary labels + product condition — the patient's only copy of instructions is often the label.\\n- Every label element traces to the order; added directions = a changed prescription.\\n- Aux labels are chosen for this product/patient, not applied reflexively.\\n- Condition checks: intact, in-date, correct form (dating canon pct-43).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four components of presentation and one failure mode for each.\\n2. Why is an added direction on a label an error rather than a helpful clarification?\\n3. What makes an auxiliary label meaningful rather than noise?\\n4. Which earlier topic owns expiry dating, and what does this lesson add?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Right container, complete label traced to the order, chosen aux warnings, sound product. The label is the dose the patient actually uses — make it match the prescription.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-8',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Professional Communication',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Counselling is the supply's last mile: a perfectly dispensed medicine with poorly communicated directions is still a failed supply. Professional communication has testable parts.\\n\\n**Clarity and plain language**: dosage instructions in the patient's own register — 'two tablets three times a day after food', not 'b.i.d. p.c.'. jargon is translated or explained; every direction survives the question 'can the patient repeat this tomorrow without us?'.\\n\\n**Confirmation (teach-back)**: the patient repeats the plan in their own words — what the medicine is, how they will take it, what they will watch for. Teach-back converts hearing into understanding, and it is the pharmacist's check, not the patient's exam: 'just so I know I explained it well…'.\\n\\n**Structure**: the essentials first (what/why/how/how long), warnings next, then questions — and the key facts repeated at the end, when the patient is no longer absorbing the shock of new information.\\n\\n**Written-visual support**: the label (26-7) and any printed information reinforce, never replace, the conversation.\\n\\n**Non-verbal and setting**: privacy for sensitive topics (26-5), attention to the patient's distress or confusion, and awareness that a patient who feels judged stops asking — communication that ends questions has ended the safety loop.\\n\\n**Boundary**: clinical interpretation of results and therapy decisions belong to the prescriber; the pharmacist communicates the medicine's use, and routes clinical questions to the prescriber (26-11).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Plain language; every direction must survive 'can the patient repeat it tomorrow?'.\\n- Teach-back = the pharmacist's check that understanding happened.\\n- Structure: essentials → warnings → questions → repeat the key facts.\\n- Label/print support the conversation, never replace it; clinical decisions route to the prescriber.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Rewrite '1 tab t.d.s. p.c.' for a patient, and state the test it must pass.\\n2. What is teach-back, and whose understanding does it check?\\n3. Order the counselling structure and say why key facts repeat at the end.\\n4. Which communication choices end the safety loop, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Say it plainly, hear it back, structure it, write it down, protect the setting. Communication that survives tomorrow is the supply's last mile — done.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-9',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Avoiding Dispensing Errors',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **dispensing error** is any deviation between what was ordered and what was supplied — wrong drug, wrong strength, wrong form, wrong quantity, wrong directions, wrong patient, or a missed interaction. Error prevention is a system property, not a personality trait.\\n\\n**Where errors come from.** *Look-alike/sound-alike (LASA)* drugs: similar names and packaging invite substitution (the defence is separation in storage and a deliberate read-back of name AND strength). *Transcription slips*: misread abbreviations and zeros/decimals (pct-7's reading canon; the trailing-zero/decimal-point conventions exist precisely because of this class of error). *Interruptions and workload*: most slips occur when the check sequence is broken mid-flight — hence the rule that a dispensing cycle, once started, is not interleaved with another. *Confirmation bias*: seeing the number you expected; the defence is independent verification (a second check against the order, not against memory).\\n\\n**The system defences, in order.** (1) Read the order actively (pct-7). (2) Check each selection against the order — name, strength, form — before counting. (3) Label away from the product, then final-check label against order and product. (4) Final professional check by the pharmacist (26-2). (5) Counsel with teach-back (26-8) — the last catch, and the patient as partner in safety.\\n\\n**When errors happen**: correct first (patient before paperwork), inform honestly, document, report through the error-reporting channel — the learning system (26-3's honesty) that turns one error into prevented others.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Error = any deviation from the order: drug, strength, form, quantity, directions, patient, interaction.\\n- Sources: LASA, transcription slips, interruptions, confirmation bias.\\n- Defences are a fixed sequence: active reading → per-item check → label-then-verify → final check → teach-back.\\n- Never interleave two dispensing cycles; verify against the order, not memory.\\n- Error response: correct, inform, document, report — the learning loop.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the error classes and one systematic defence for each.\\n2. Why is checking against the order — not memory — the defence for confirmation bias?\\n3. What is the rule about interleaving dispensing cycles, and which error source justifies it?\\n4. Order the response steps after an error reaches the bench, and justify the first one.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Errors are systems problems: separate the look-alikes, read actively, check each item against the order, finish one cycle before starting another, and let teach-back be the last catch.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-10',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Recognising Questionable Prescriptions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **questionable prescription** is one whose validity, completeness, or clinical sense is in doubt — and the pharmacist's duty is to *recognise and resolve*, never to supply on doubt.\\n\\n**Three question classes.** *Validity/completeness*: does the order carry its required particulars (patient, date, drug, strength, dose, directions, quantity, prescriber identity) per the governing rules — the particulars are a legal matter, referenced here as the checklist habit rather than adjudicated. *Ambiguity/illegibility*: the dose reads two ways, the drug name is uncertain, an abbreviation is nonstandard — these are queries to the prescriber, in every case. *Clinical sense*: a dose outside the plausible range, a duplicating pair of medicines, a known-interaction pair, a frequency that does not fit the product — the screening skills of earlier topics (pct-7, pct-10, pct-22) become judgement here.\\n\\n**The recognition habit**: read the whole order first, then test it — identity (right patient?), completeness (all particulars?), sense (dose/route/frequency plausible?), combination (interactions/duplications?).\\n\\n**The response rule**: a questionable order is **queried before supply** — a professional query to the prescriber, documented, with the prescription held until resolved. Supplying 'on the balance of probabilities' is the error 26-9 exists to prevent. Forged or altered orders are suspected, not adjudicated, by the dispenser: the response is refusal-plus-escalation through the proper channel.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Three question classes: validity/completeness, ambiguity/illegibility, clinical sense.\\n- Whole-order reading then testing: identity → completeness → sense → combination.\\n- Query before supply; hold the prescription until resolved; document the query.\\n- Suspected forgery = refuse + escalate through the proper channel; the dispenser does not adjudicate.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three question classes with one example of each.\\n2. What is the response rule for ambiguity, and why is it absolute?\\n3. Which earlier topics supply the screening skills used here?\\n4. What is the dispenser's role when forgery is suspected?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Read whole, test identity/completeness/sense/combination, query before supply, hold until resolved. Doubt is a question to the prescriber — never a guess to the patient.`,
      },
    ],
  },
  {
    nodeId: 'pct-26-11',
    courseId: 'pct-201',
    topicId: 'pct-26',
    nodeType: 'subtopic',
    title: 'Pharmacist Intervention',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Pharmacist intervention** is the professional act of stopping or correcting a supply problem before it reaches the patient — the enforcement arm of everything in this topic.\\n\\n**When to intervene.** Invalid or incomplete order (26-10); clinical sense problem (dose, interaction, duplication, allergy note — the screening canon); presentation failure discovered at final check (26-7); an error caught late in the cycle (26-9); or a patient question that reveals a misunderstanding. The trigger is always the same: **a problem between the order and the patient**.\\n\\n**How to intervene — the resolution path.** (1) *Stop* the supply — nothing leaves the bench while doubt stands. (2) *Verify* — recheck the facts before raising the concern (26-3's diligence; a wrong alarm damages the next real one). (3) *Query the prescriber* — factual, specific, solution-oriented ('the dose written exceeds the stated maximum; please confirm or amend'), not adversarial. (4) *Document* the query and its outcome. (5) *Escalate* if unresolved or urgent — senior pharmacist first; beyond the pharmacy, the professional framework's channels.\\n\\n**Patient-facing interventions** follow the same path in miniature: stop, verify, explain, resolve, document.\\n\\n**The professional footing**: intervention is not confrontation — it is the duty the whole topic has built (26-4's non-maleficence, 26-3's accountability). The pharmacist who never intervenes has not avoided conflict; they have outsourced their responsibility to luck.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Trigger: any problem between the order and the patient.\\n- Path: stop → verify → query (factual, specific, solution-oriented) → document → escalate.\\n- Verify before raising — a wrong alarm damages the next real one.\\n- Intervention is duty, not confrontation; the pharmacist who never intervenes has outsourced responsibility to luck.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the five intervention steps in order and the reason each exists.\\n2. What makes a prescriber query professional rather than adversarial?\\n3. Why must verification precede the query?\\n4. Which earlier lessons' duties converge in the act of intervention?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Stop the doubt, verify the facts, query with a solution, write it down, escalate if it stands. Intervention is the topic's duties made operational — not conflict, but responsibility.`,
      },
    ],
  },
];
