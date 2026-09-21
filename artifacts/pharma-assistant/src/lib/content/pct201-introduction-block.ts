import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-1: Introduction to Pharmaceutics.
 *
 * Batch 12: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-10 Batch 8 convention) plus
 * its six children pct-1-1…1-6 (Tier B, plain names). Node IDs and titles
 * mirror curriculum.ts exactly; nothing here creates or renames nodes.
 *
 * Scope discipline: definitional/foundational content — no clinical values,
 * no arithmetic to verify beyond illustrative proportion sense; the
 * formulation-design depth belongs to later PCT topics (e.g. preformulation,
 * dosage-form technology) and is only pointed to, not taught.
 */
export const pct201IntroductionLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'topic',
    title: 'Introduction to Pharmaceutics',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Pharmaceutics** is the discipline that turns a molecule into a medicine: the science (and art) of designing, formulating, manufacturing, and evaluating **dosage forms** — the tablets, capsules, solutions, creams, injections that deliver a drug to the patient. The API (active pharmaceutical ingredient) is what pharmacology studies; pharmaceutics is everything that gets it there — the vehicle, the form, the route, the stability, the release.

Why it exists as a discipline: the same drug can succeed or fail by its delivery. A drug that is chemically perfect but poorly soluble, irritant, unstable in solution, or destroyed by first-pass metabolism is a **formulation problem** before it is a pharmacology problem. Pharmaceutics supplies the controlled variables — particle size, salt form, excipients, dosage form, route — that turn pharmacological potential into a usable product.

This topic lesson is the orientation and the map. The six child lessons run: **meaning and scope** → **why pharmaceutics matters in pharmacy** → the trio **drug, dosage form, and route** → **principles of dosage-form design** → **factors affecting dosage-form selection** → **basic pharmaceutical terminology**. One thread to carry through the whole course: *the dosage form is the product the patient actually uses* — every later topic (calculations, physical pharmacy, biopharmaceutics, dispensing) refines some part of that statement.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pharmaceutics: designing/formulating/evaluating dosage forms — molecule to medicine.
- The API is the pharmacology; the dosage form is the product the patient uses.
- Same drug, different form → different success: delivery is a design problem.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define pharmaceutics in one sentence, then state what it adds beyond pharmacology.
2. Conceptual: a drug is potent in vitro but fails in patients due to poor solubility. Why is this *first* a pharmaceutics problem?
3. Map check: name three of the six child lessons and what each contributes to the course arc.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Pharmaceutics = molecule → medicine via dosage forms.
- The dosage form is the product; delivery is a design problem.
- Six child lessons build the vocabulary the whole course depends on.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Meaning and Scope of Pharmaceutics (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1-1',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'subtopic',
    title: 'Meaning and Scope of Pharmaceutics',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Formally: **pharmaceutics** is the branch of pharmacy concerned with the design, formulation, manufacture, evaluation, and use of dosage forms — the science of transforming a drug substance into a safe, stable, acceptable, and effective **drug product**. Its scope is correspondingly wide, and naming it is the lesson: **physical pharmacy** (the physicochemical rules — solubility, pH, partitioning, stability — that constrain design), **formulation science** (choosing and combining ingredients into a product), **manufacturing technology** (scaling a formula to thousands of uniform units), **biopharmaceutics** (how the formulation's properties drive the drug's absorption and pharmacokinetics), **pharmaceutical calculations** (the quantitative backbone, your pct-4 foundation), and the **regulatory/legal** frame (quality standards, GMP, product registration).

The scope list is also the course map: PCT 201 moves through the physicochemical foundations, then the dosage forms themselves; the biopharmaceutics course builds on the same vocabulary. Two distinctions worth fixing early. **Drug substance vs drug product:** the substance is the molecule (API); the product is the formulated, packaged, labelled thing that reaches the patient — pharmaceutics' deliverable. **Formulation vs dosage form:** the formulation is the recipe (API + excipients + process); the dosage form is the physical presentation (tablet, syrup, cream) — one formulation concept can be realised as different dosage forms.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pharmaceutics: design → formulation → manufacture → evaluation → use of dosage forms.
- Scope: physical pharmacy, formulation, manufacturing, biopharmaceutics, calculations, regulation.
- Drug substance (API) ≠ drug product; formulation (recipe) ≠ dosage form (presentation).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The pharmacist's daily judgements — is this product interchangeable, is this suspension shaken because it's a suspension, why is this drug enteric-coated — are all applications of scope knowledge: knowing which branch of pharmaceutics explains the product in your hand.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define pharmaceutics and name four of its scope areas.
2. Distinguish drug substance from drug product with a concrete example (e.g. paracetamol molecule vs a 500 mg tablet).
3. Conceptual: why is pharmaceutical calculations *inside* the scope of pharmaceutics rather than a separate subject?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Scope: physical pharmacy → formulation → manufacture → biopharmaceutics → calculations → regulation.
- Substance vs product; recipe vs presentation — two distinctions to keep for the whole course.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Role of Pharmaceutics in Pharmacy (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1-2',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'subtopic',
    title: 'Role of Pharmaceutics in Pharmacy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The role question — *what does pharmaceutics do for the practising pharmacist?* — has a four-part answer. **Product understanding:** pharmaceutics explains what a product *is* — why a suspension must be shaken (it's a disperse system), why an enteric coat exists (acid-lability), why a solution needs preservative (aqueous, multi-use) — turning the label's instructions from arbitrary rules into reasons. **Selection and substitution:** choosing among products (tablet vs syrup for this patient's swallowing ability; brand vs generic once equivalence is established) is pharmaceutics reasoning about dosage-form properties. **Compounding and preparation:** extemporaneous preparation — the dispensary's remaining make-it-yourself work — applies formulation principles at the bench, with pct-6's measurement craft and pct-4's arithmetic. **Quality and counselling:** judging product quality (crystallised syrup = solute precipitated; broken emulsion = cracked system) and explaining use to patients (store in the fridge because X; shake because Y) are both pharmaceutics literacy in action.

The through-line: pharmaceutics is the discipline that makes the pharmacist the **product expert** on the health team — the professional who understands not just *what* the medicine does (pharmacology) but *what the medicine is* (its form, its vehicle, its behaviour in storage and in use).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four roles: product understanding, selection/substitution, compounding, quality + counselling.
- "Shake well", "keep refrigerated", enteric coats — label rules become reasons.
- Pharmaceutics makes the pharmacist the product expert of the health team.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every counselling point that starts "because it's a..." — a suspension, an emulsion, an effervescent — is this lesson in action. The product expert is the role the rest of the course is training you for.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four roles and give a one-line example of each.
2. Conceptual: a patient asks why their antibiotic suspension needs refrigeration. Which role are you exercising, and what kind of knowledge does the answer draw on?
3. Conceptual: why is dosing a child from an adult tablet (halving it) also a *pharmaceutics* judgement, not only a dose calculation?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Understand products, select between them, compound, judge quality, counsel.
- Label instructions have formulation reasons — know them.
- The product expert is the role; the course is the training.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Drug, Dosage Form and Route of Administration (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1-3',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'subtopic',
    title: 'Drug, Dosage Form and Route of Administration',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Three terms, one chain, deliberately distinguished. The **drug** is the active molecule — the pharmacological agent itself. The **dosage form** is the physical presentation engineered around it — tablet, capsule, syrup, injection, cream, suppository — carrying the drug, protecting it, and controlling its release. The **route of administration** is the pathway by which the dosage form delivers the drug into the body — oral, topical, parenteral (injection), rectal, inhalation, and the rest. The chain runs: **drug → (formulated into) dosage form → (administered by) route → (reaches) site of action.**

The insight that makes the trio more than vocabulary: each link constrains the others. A drug's properties shape which forms are possible (an acid-labile drug can't survive a plain oral tablet — hence an enteric coat or a different route); a chosen form permits certain routes (a tablet is oral; a solution can be oral, topical, or injected *depending on its formulation class* — a sterile injectable solution is a different product from a syrup); and the route sets the requirements (sterility for injection, isotonicity and pH for ophthalmic, fineness for inhalation). Example chain: paracetamol (drug) → 500 mg tablet (form) → oral (route) → systemic absorption; the same drug as a suppository takes the rectal route and a completely different formulation logic. The trio is the vocabulary the dosage-forms topic (pct-2) systematises.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Drug (molecule) → dosage form (presentation) → route (pathway) — one chain, three decisions.
- Each link constrains the others: drug properties ↔ possible forms ↔ route requirements.
- Route sets product demands: sterility (injection), isotonicity (eye), fineness (inhalation).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Prescription reading uses the chain daily: amoxicillin (drug) 250 mg/5 mL suspension (form), oral (route) — three facts that determine storage, shelf-life after dispensing, administration instructions, and counselling. Naming the three links is the first step of every product assessment.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define each term in one line and state the chain order.
2. Conceptual: why can't an acid-labile drug be delivered as a plain oral tablet, and what are two pharmaceutics responses?
3. Chain-building: place drug, dosage form, route, and site of action in order, then classify each for an eye-drop example.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Drug → form → route → action: the four-link chain.
- Constraints flow both ways along the chain.
- The trio is the vocabulary of every product discussion that follows.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — Principles of Dosage-Form Design (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1-4',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'subtopic',
    title: 'Principles of Dosage-Form Design',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Designing a dosage form is a balancing act among demands, and the principles are the named demands. **Drug-related:** the molecule's own properties — solubility, stability (against hydrolysis, oxidation, light), taste, particle behaviour — set what is achievable; an unstable-in-water drug rules out simple aqueous solutions. **Patient-related:** age (paediatric liquid vs adult tablet), swallowing ability, acceptability (taste, size), and the practicalities of the patient's life — the form must be one the patient can and will use correctly. **Therapeutic/clinical:** the intended onset and duration (a rapid-onset situation wants a solution or dispersible, not a coated tablet), the dose size, and the site to be reached. **Manufacturing/quality:** the form must be producible at scale with uniform dose, adequate stability, and acceptable cost.

The design act is resolving these against each other — typically a drug constraint forces a class of forms, patient and therapeutic needs narrow within it, and manufacturing feasibility finalises it. Example (illustrative logic, not a prescription): a bitter, acid-labile, low-dose drug for adults → coating solves taste and acid (film-coated tablet); for a child → the same logic lands on a coated granule in a suspension or sachet, because swallowing a tablet is the limiting demand. The principles topic here is the *framework*; the dosage-form technology topics later in the course supply the engineering for each form class.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Four demand sets: drug properties, patient factors, therapeutic intent, manufacturing/quality.
- Design = resolving them: drug constraints → form class; patient/clinical → choice within it.
- Every design decision is a trade-off; nothing is optimised in isolation.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `When a pharmacist asks "why does this product exist in this shape?", the answer is a resolved trade-off — and when a product fails a patient (too big to swallow, intolerable taste), it is a design trade-off the patient lost. Design literacy lets you anticipate both.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four demand sets and give one example constraint from each.
2. Conceptual: a bitter, acid-labile drug is wanted for both adults and children — sketch how the design logic branches, naming which demand drives each branch.
3. Conceptual: why is "acceptable cost" a design principle rather than a commercial afterthought?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Drug + patient + therapeutic + manufacturing = the four-way design balance.
- Constraints cascade: drug → class, patient/clinical → choice, manufacturing → finalisation.
- Every product is a resolved trade-off — read products by asking what was balanced.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Factors Affecting Dosage-Form Selection (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1-5',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'subtopic',
    title: 'Factors Affecting Dosage-Form Selection',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Where pct-1-4 asked *how a form is designed*, this lesson asks the practical inverse: *given several possible forms for a drug, which is selected, and why?* The factors, grouped. **Physicochemical:** solubility and dissolution behaviour, stability profile, taste and odour — the drug's own hand of cards. **Biopharmaceutical:** the site and mechanism of absorption, first-pass metabolism (a high-first-pass drug may be better delivered by a non-oral route or a formulation that bypasses it), the therapeutic site (local skin disease invites a topical form; systemic action usually needs absorption). **Patient/clinical:** age and swallowing capability, the acuity of the situation (emergency → fastest appropriate route), duration of therapy (long courses favour convenient forms), and any special conditions (vomiting → parenteral or rectal; unconscious patient → parenteral). **Practical/commercial:** manufacturability, cost, shelf-life, and pack convenience — the form must exist, be stable, and be affordable.

The distinction that keeps this lesson sharp: **selection happens among *available* forms** — the design principles explain what can exist; the selection factors explain what is *chosen* for a given need, which is the pharmacist's everyday reasoning territory (and why this lesson, not design, sits next to the dispensing courses).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Factor groups: physicochemical, biopharmaceutical, patient/clinical, practical/commercial.
- Selection = choosing among available forms; design = deciding what can exist.
- First-pass, swallowing, onset speed, therapy length — the everyday selection levers.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `This is the reasoning a pharmacist runs when a prescription offers options (tablet vs suspension; oral vs injectable) or when counselling on why the prescribed form suits this patient — selection logic is daily professional judgement.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four factor groups and one example factor in each.
2. Conceptual: a drug undergoes extensive first-pass metabolism. Name two selection responses and the factor group each belongs to.
3. Conceptual: a 4-year-old needs a 3-week course. Which two patient/clinical factors drive form choice, and toward what kind of form do they point?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Four factor groups; selection is choosing among forms that exist.
- Design decides what's possible; selection decides what's right here.
- The levers: chemistry, absorption/first-pass, patient, practicality.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Basic Pharmaceutical Terminology (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-1-6',
    courseId: 'pct-201',
    topicId: 'pct-1',
    nodeType: 'subtopic',
    title: 'Basic Pharmaceutical Terminology',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The working vocabulary, defined once and used for the rest of the course. **API** (active pharmaceutical ingredient) — the pharmacologically active component; **excipient** — any intentionally inactive ingredient performing a formulation function (vehicle, binder, preservative — the full cast lives in pct-3). **Formulation** — the complete recipe: API, excipients, and process. **Dosage form** — the physical presentation. **Drug product** — the formulated, packaged, labelled item. **Strength** — the amount of API per unit of the dosage form (250 mg per tablet; 250 mg/5 mL) — the number calculations use. **Unit dose** — a single measured administration unit. **Vehicle** — the carrier medium (water, syrup, ointment base). **Extemporaneous preparation** — made for one patient at the time of need, as opposed to **manufactured** products. **Proprietary (brand) name** vs **generic (non-proprietary) name** — the marketing name versus the established non-proprietary name of the same drug substance.

Two usage disciplines: terms are **precise** — a suspension is not a solution, a strength is not a dose (250 mg/5 mL is the strength; 250 mg is the dose per 5 mL administered; the dose *prescribed* may be 500 mg = 10 mL), and confusing them corrupts calculations downstream. And abbreviations are learned with their risks — "µg" vs "mg" magnitude, Roman-numeral style — because terminology is where calculation errors are seeded (pct-5-3 made this point in unit language; this lesson makes it in word language).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- API vs excipient; formulation (recipe) vs dosage form (presentation) vs drug product (packaged item).
- Strength = API per unit (250 mg/tablet; 250 mg/5 mL) — never confuse strength with dose.
- Extemporaneous vs manufactured; brand vs generic name — with precision, because errors are seeded in vocabulary.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Labels, prescriptions, and monographs speak this language; the pharmacist reads and writes it daily. The strength/dose distinction alone protects every dose calculation you will ever perform.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define excipient and vehicle, and state their relationship (is a vehicle an excipient?).
2. Distinguish strength from dose using "250 mg/5 mL" — which number is which, and why does the distinction matter for calculations?
3. Conceptual: a prescription reads "amoxicillin suspension 250 mg/5 mL". Which terms from this lesson appear in it, and what does each pin down?
4. Conceptual: why can terminology errors (suspension vs solution) become calculation errors downstream?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Vocabulary: API, excipient, formulation, dosage form, drug product, strength, unit dose, vehicle, extemporaneous, brand/generic.
- Strength ≠ dose; suspension ≠ solution — precision here protects calculations everywhere.
- This lesson is the course's dictionary; return to it whenever a term wobbles.`,
      },
    ],
  },
];
