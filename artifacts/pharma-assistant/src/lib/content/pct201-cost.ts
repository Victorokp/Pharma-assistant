import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-25: Pharmaceutical Cost Calculations.
 *
 * Batch 28: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–24
 * top-level topic convention) plus its six children pct-25-1…25-6
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-25 has no surviving Phase-1 tier record; the topic
 * and the conceptual children (25-1 Cost of Pharmaceutical Products,
 * 25-6 Economic Considerations in Drug Therapy) are Tier B, while the
 * calculation children — Cost per Dose (25-2), Cost per Treatment
 * Course (25-3), Cost Comparison (25-4), Cost Differential Calculations
 * (25-5) — are Tier C, matching the calculation-lesson convention
 * (pct-5-7; pct-9…24 blocks). Convention-derived, flagged pending
 * confirmation.
 *
 * Currency convention: monetary amounts appear as bare numbers with
 * the stated unit "LCU" (local currency unit — the standard neutral
 * abbreviation in pharmacoeconomics). No specific currency, fee
 * schedule, or institutional price list is assumed or invented;
 * every price in examples is a stated illustrative value.
 *
 * Scope discipline: THIS topic owns the arithmetic of product cost —
 * unit pricing, per-dose and per-course cost, comparison and
 * differential calculations. Bioequivalence (the technical licence
 * for generic price comparison) is pct-24-4's canon (cross-referenced);
 * expiry dating is pct-43's; dose arithmetic is pct-10; prescription
 * reading for quantity is pct-7. Full pharmacoeconomics
 * (cost-effectiveness/cost-utility analysis) is beyond-200L canon,
 * named and referenced, not developed.
 */
export const pct201CostLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-25',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'topic',
    title: 'Pharmaceutical Cost Calculations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every prescription ends in a purchase, and the pharmacist is the professional who can see both sides of it: the patient's out-of-pocket cost and the pharmacy's economics. This topic builds the arithmetic that makes cost a calculable quantity rather than a feeling — the same discipline the calculation topics applied to doses and concentrations, applied to money.\\n\\n**The unit convention.** Monetary amounts in this topic carry the stated unit **LCU** (local currency unit) — deliberately neutral, because the arithmetic is identical in any currency and no specific price list is being taught. Every worked value is a stated illustrative value.\\n\\n**The four calculation families.** (1) **Cost per dose** — the pack price divided into the doses it actually delivers (25-2). (2) **Cost per treatment course** — the full cost of completing a course, including the pack-rounding that forces purchasing more than is used (25-3). (3) **Cost comparison** — two or more options on a common basis (25-4). (4) **Cost differentials** — the absolute and percentage gap between options (25-5). Lesson 25-1 supplies the price data and the per-unit derivation; 25-6 frames what the numbers mean for therapy.\\n\\n**The central trap: purchase basis vs use basis.** Medicine is bought in packs but taken in doses. A pack price, a per-unit price, a per-dose price, and a per-used-dose price are four different true numbers for the same medicine — the pct-22 basis habit (state your basis, every time) carried into money. Most cost errors at the bench are basis errors, not arithmetic errors.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Costs carry the stated unit LCU; all example values are illustrative.\\n- Four families: per dose, per course, comparison, differential.\\n- Purchase basis (pack) vs use basis (dose/course) — four true prices per medicine; basis errors beat arithmetic errors.\\n- The pct-22 basis habit and pct-10 dose arithmetic are the machinery underneath.\\n- Full pharmacoeconomics is beyond-200L canon; this topic owns the arithmetic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the four calculation families and the question each answers.\\n2. Why do pack, per-unit, per-dose, and per-used-dose prices differ for one medicine?\\n3. Which earlier topics' habits does cost arithmetic inherit?\\n4. What is the LCU convention and why is it used?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Money gets the same discipline as doses: state the basis, divide honestly, check the reverse. Packs are bought, doses are taken — never mix the two bases silently.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-25', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-25-1',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'subtopic',
    title: 'Cost of Pharmaceutical Products',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Before any cost calculation sits the price data itself — where it comes from and what its basis is.\\n\\n**What the pharmacy pays** is more than the invoice: acquisition price, ordering and handling effort, storage (with capital tied up in stock), and the expiry risk — a product that reaches its expiry date unsold loses 100% of its cost (pct-43's dating canon makes stock rotation a financial control, not just a safety one).\\n\\n**What the patient pays** is the product price plus any dispensing fee the governing framework allows — fee structures are regulatory matters, referenced here as 'the applicable framework', never invented.\\n\\n**The per-unit derivation.** Prices usually arrive per pack; the working unit is usually per tablet/capsule/mL. The derivation is one honest division — pack price ÷ units per pack — and it inherits a discipline from pct-5's measurement work: state the basis with the number ('2.80 LCU per 10-pack', '0.28 LCU per tablet' are different statements, both true only with their basis attached).\\n\\n**Pack-size nonlinearity.** Larger packs often carry a lower per-unit price — but a higher absolute outlay, and for a short course the surplus expires or is wasted. The cheapest per unit is not automatically the cheapest for this patient's course; that judgement belongs to 25-3's arithmetic.\\n\\n**Price variability.** The same molecule can carry different prices by brand, by supplier, and over time — the full brand-vs-generic economics is 25-6's canon; this lesson's take-away is that a price is a data point with a date and a source, and calculations are only as honest as the data they consume.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Pharmacy cost = acquisition + handling + storage + expiry risk (expired stock = 100% loss; pct-43 canon).\\n- Patient price = product price + framework-allowed dispensing fee (referenced, never invented).\\n- Per-unit price = pack price ÷ units per pack — always stated with its basis.\\n- Larger pack ≠ cheaper course: per-unit savings can be eaten by outlay and expiry.\\n- Every price carries a source and a date; data quality caps calculation quality.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the components of what the pharmacy pays, and which earlier canon makes stock rotation financial.\\n2. Derive the per-tablet price from a 24-tablet pack at 4.80 LCU (0.20 LCU/tablet).\\n3. Why can the lowest per-unit pack be the wrong purchase for a 5-day course?\\n4. What three attachments does an honest price statement carry?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Prices are data: source, date, basis. Divide pack by units to get per-unit — then ask what the patient's course actually needs before calling anything cheap.`,
      },
    ],
  },
  {
    nodeId: 'pct-25-2',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'subtopic',
    title: 'Cost per Dose',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Cost per dose** converts a pack price into the money each administration actually consumes — the patient's most natural mental unit, and the dosing-frequency input to per-day costs (25-4).\\n\\n**The two-step identity**: first find how many doses the pack delivers, then divide. The dose-per-administration comes from the order (pct-10/pct-7 canon) — the same pack delivers different numbers of doses at 1 tablet versus 2 tablets per administration, so the order, not the pack, decides.\\n\\n**The basis trap, made concrete.** From one 20-tablet pack at 180 LCU: per-tablet (purchased) basis = 9 LCU; per-dose basis at 2 tablets/dose = 18 LCU. Both are true; they answer different questions. A per-dose figure quoted as if it were per-tablet (or the reverse) is the cost version of pct-22's basis drift — and the check is the same: every money figure is written with its basis.\\n\\n**Where per-dose costs are used**: counselling ('this pack gives you 10 doses at 18 LCU each'), per-day regimens (doses/day × cost/dose), and comparing presentations whose dose sizes differ — where only the per-dose basis is a fair comparison.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Cost per dose**\\n\\n$$\\nC_{\\text{dose}} = \\frac{C_{\\text{pack}}}{N_{\\text{doses}}}, \\qquad N_{\\text{doses}} = \\frac{\\text{units per pack}}{\\text{units per dose}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — one-tablet dosing.** Pack of 30 tablets at 900 LCU, 1 tablet per dose: N = 30/1 = 30 doses → C(dose) = 900/30 = **30 LCU/dose**.\\n\\n**Example 2 — two-tablet dosing.** Pack of 20 tablets at 180 LCU, 2 tablets per dose: N = 20/2 = 10 doses → C(dose) = 180/10 = **18 LCU/dose**.\\n\\n**Example 3 — the two bases.** Same pack: purchased basis 180/20 = **9 LCU/tablet**; administered basis **18 LCU/dose**. Both correct, different questions — state the basis, always.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Pack of 24 tablets at 480 LCU, 1 tablet per dose — cost per dose? (20 LCU/dose.)\\n2. Why does the order, not the pack, decide N(doses)?\\n3. A colleague quotes '9 LCU per dose' for Example 2's pack — what exactly went wrong?\\n4. Which basis is fairest when two presentations have different dose sizes?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Doses in the pack come from the order; divide the pack price by them. Per-tablet and per-dose are both true — attach the basis or the number lies.`,
      },
    ],
  },
  {
    nodeId: 'pct-25-3',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'subtopic',
    title: 'Cost per Treatment Course',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **treatment course** is the complete quantity needed to finish the prescribed therapy — and its cost is what the patient actually experiences, because packs do not divide: the pharmacy's rounding rule (whole packs) forces purchasing more than the course uses.\\n\\n**The chain**: doses needed = doses/day × days (pct-10's quantity arithmetic); packs purchased = the needed doses rounded **up** to whole packs; course cost = packs × pack price. The gap between bought and used is **wastage** — the patient pays for it either way, which is why the honest course figure is cost per **used** dose, not cost per **purchased** dose.\\n\\n**The two unit-price bases of a course.** Purchased basis: pack unit price (cheap-looking — it divides by every tablet bought). Used basis: course cost ÷ doses actually taken (honest — it charges the waste to the course). Example 3 makes the gap large enough to matter, and the pct-22 lesson repeats: the smaller number belongs to the medicine that gets thrown away.\\n\\n**Where course costs are used**: counselling a fixed-duration therapy, comparing options with equal durations (25-4), and the affordability conversation — a course the patient cannot fund in one purchase may be feasible as the pharmacy's dispensing pattern allows; that flexibility is professional practice, governed by the applicable framework.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Course chain**\\n\\n$$\\nN_{\\text{needed}} = \\text{doses/day} \\times \\text{days}, \\quad \\text{packs} = \\left\\lceil \\frac{N_{\\text{needed}}}{\\text{units/pack}} \\right\\rceil, \\quad C_{\\text{course}} = \\text{packs} \\times C_{\\text{pack}}\\n$$\\n\\n**Used-basis unit price and wastage**\\n\\n$$\\nC_{\\text{used unit}} = \\frac{C_{\\text{course}}}{N_{\\text{needed}}}, \\qquad \\text{wastage \\%} = \\frac{\\text{purchased} - \\text{used}}{\\text{purchased}} \\times 100\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — exact pack fit.** Course needs 21 capsules; a 21-capsule pack costs 630 LCU: C(course) = 630 LCU; used basis 630/21 = **30 LCU/capsule**; wastage 0%.\\n\\n**Example 2 — pack rounding.** Needs 21 capsules; sold only in 10-packs at 280 LCU: packs = ⌈21/10⌉ = 3 → C(course) = 3 × 280 = **840 LCU**; used basis 840/21 = **40 LCU/capsule**; wastage (30 − 21)/30 = **30%**.\\n\\n**Example 3 — the two bases of one course.** Same course: purchased unit price 280/10 = **28 LCU**; used unit price **40 LCU**. The 28 belongs to tablets, three of which were never taken — the course costs 40.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 2 capsules/day × 14 days; 10-packs at 150 LCU — packs, course cost, used-basis price, wastage %? (3 packs; 450 LCU; ≈16.1 LCU/capsule; 2/30 ≈ 6.7%.)\\n2. Why is the purchased unit price systematically lower than the used unit price?\\n3. When does pack rounding cause zero wastage?\\n4. Which earlier topic supplies the doses-needed arithmetic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Doses needed → packs rounded up → course cost. Divide by doses *used* for the honest unit price; the leftover tablets are not free, just discarded.`,
      },
    ],
  },
  {
    nodeId: 'pct-25-4',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'subtopic',
    title: 'Cost Comparison',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **cost comparison** ranks two or more options — but only on a **common basis**. Three things must be held constant before any price comparison is meaningful.\\n\\n**(1) The same unit.** Per dose, per day, per course — pick one and convert every option to it. Comparing a per-course figure against a per-day figure is a basis error (pct-22's habit), not a conclusion.\\n\\n**(2) The same scope.** Acquisition price only, or patient total (product + fee)? Product only, or product + wastage? A comparison silently mixing scopes compares different things.\\n\\n**(3) The same clinical frame.** Price comparison between products presumes they are therapeutically interchangeable for this use — for generic substitution that licence is **bioequivalence** (pct-24-4's canon); for other switches the clinical decision belongs to the prescriber. The pharmacist compares prices; equivalence is a separate, prior question.\\n\\n**Duration mismatch**: when courses differ in length, per-course figures are not comparable — normalise to per day (course ÷ days) and state the clinical question the basis answers ('fixed 7-day therapy' vs 'price of a day of treatment').\\n\\n**Beyond money**: equal-cost options can differ in administration burden and adherence demands — 25-6 completes the picture.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Per-day normalisation**\\n\\n$$\\nC_{\\text{day}} = \\frac{C_{\\text{course}}}{\\text{days}}\\n$$\\n\\n**Per-day from the regimen**\\n\\n$$\\nC_{\\text{day}} = \\text{doses/day} \\times C_{\\text{dose}}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — same duration.** A: 840 LCU/7 days → **120 LCU/day**; B: 1050 LCU/7 days → **150 LCU/day**. A is cheaper per day and per course — consistent on both bases.\\n\\n**Example 2 — duration mismatch.** A: 500 LCU/5 days; B: 560 LCU/7 days. Per course B is dearer (560 > 500); per day B is cheaper (560/7 = **80** vs 500/5 = **100**). Both true — the basis must match the question (finish a fixed course? price a day of therapy?).\\n\\n**Example 3 — equal money, unequal burden.** A: 30 LCU/dose × 3 doses/day = 90 LCU/day; B: 45 LCU/dose × 2 doses/day = 90 LCU/day. Equal daily cost; B asks fewer administrations — a 25-6 consideration the price alone hides.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A: 400 LCU/5 days; B: 630 LCU/7 days — per-day basis? (80 vs 90; A cheaper per day, B dearer per course.)\\n2. Name the three constants a fair comparison holds fixed.\\n3. Which prior canon licenses a generic price comparison, and what decision does it not replace?\\n4. Why can 'per course' mislead when durations differ?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same unit, same scope, same clinical frame — then compare. Duration mismatch → normalise per day. Equal prices can still hide unequal burdens.`,
      },
    ],
  },
  {
    nodeId: 'pct-25-5',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'subtopic',
    title: 'Cost Differential Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **cost differential** quantifies the gap between two options — absolute (LCU) and relative (%). It is the number that turns 'A is cheaper' into 'A is 25% cheaper on this basis', the form decisions and reports actually use.\\n\\n**The identities**: Δ = C(B) − C(A); the percentage is **relative to a named reference**: Δ/C(ref) × 100. The reference is a choice — 'B costs 25% more than A' (ref A) and 'A costs 20% less than B' (ref B) describe the same Δ with different denominators. Both are true; the sentence is only honest when the reference is named. The pct-22 basis habit, again, now in its most seductive form — percentages hide their denominators.\\n\\n**The reverse check** closes every differential: C(A) × (1 + p) must reconstruct C(B) for the stated percentage — and the reciprocal relationship between the two directions (1/0.8 = 1.25) is the algebra that makes '20% less' and '25% more' consistent rather than contradictory.\\n\\n**Multi-option work**: rank per course (or per day, once normalised), then compute each option's differential against the stated reference (conventionally the cheapest or the incumbent) — the ranking is arithmetic; the *basis* is the decision that makes it meaningful.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Differential and percentage**\\n\\n$$\\n\\Delta = C_B - C_A, \\qquad \\text{\\% diff} = \\frac{\\Delta}{C_{\\text{ref}}} \\times 100\\n$$\\n\\n**Reverse check**\\n\\n$$\\nC_A \\times (1 + p) = C_B\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — one gap, two honest sentences.** A = 840, B = 1050 LCU: Δ = **210 LCU**. Relative to A: 210/840 = **25%** ('B costs 25% more than A'). Relative to B: 210/1050 = **20%** ('A costs 20% less than B'). Reverse checks: 840 × 1.25 = 1050 ✓; 1050 × 0.8 = 840 ✓ — the 25% and 20% are the reciprocal pair 1.25/0.8, exactly consistent.\\n\\n**Example 2 — three options.** Courses: 620, 700, 840 LCU. Ranked. Differentials vs the cheapest (620): 700 → Δ 80 = **12.9%**; 840 → Δ 220 = **35.5%**. Every percentage carries its reference ('of 620') or it is incomplete.\\n\\n**Example 3 — the denominator trap.** A colleague reports 'the switch saves 20%'; the invoice shows 210 LCU saved on B — the saving is 20% *of B* (210/1050) and 25% *of A* (210/840). The LCU figure is unambiguous; the percentage needed its denominator.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A = 640, B = 800 LCU — Δ, % vs A, % vs B? (160; 25%; 20%.)\\n2. Verify the reciprocal consistency of '25% more' and '20% less' with the reverse check.\\n3. Why is 'saves 20%' incomplete without its denominator?\\n4. In multi-option work, what is the conventional reference and what must every percentage still carry?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Δ in LCU, percentage with a named denominator, reverse check to close. '20% less' and '25% more' are one gap seen from two sides — say which side you are on.`,
      },
    ],
  },
  {
    nodeId: 'pct-25-6',
    courseId: 'pct-201',
    topicId: 'pct-25',
    nodeType: 'subtopic',
    title: 'Economic Considerations in Drug Therapy',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The arithmetic of 25-2…25-5 feeds therapy decisions. This closing lesson connects the numbers to their professional meaning — without drifting into pharmacoeconomics proper.\\n\\n**Affordability is a clinical variable.** A regimen the patient cannot sustain financially is not a regimen — it is a partial course and a treatment failure in waiting. Cost per course (25-3) and per day (25-4) are the numbers that let the pharmacist and prescriber choose a therapy the patient can actually finish; the conversation itself is a communication skill handled with the same privacy and respect as any sensitive subject (the pct-26 professional-canon lessons frame the conduct).\\n\\n**Cheapest is not best value.** Price comparisons are valid only within clinical equivalence (pct-24-4); where outcomes differ, value requires outcomes in the comparison — **cost-effectiveness and cost-utility analysis** — which is beyond-200L canon, named here so the boundary is visible: this topic's arithmetic produces costs; adding outcomes is a further, separate discipline.\\n\\n**Generic substitution economics.** The same active moiety (pct-22) at a lower price is the everyday value lever — licensed technically by bioequivalence, and legally by the substitution framework the pharmacist operates under (referenced, not adjudicated). The savings arithmetic is exactly 25-5's differential.\\n\\n**Stock economics mirror course economics.** The pack-rounding lesson cuts both ways: the patient's leftover tablets and the shelf's overstock are the same arithmetic at different scales, and expiry (pct-43) converts unsold stock into a 100% loss — purchasing discipline is a financial control as much as a supply one.\\n\\n**Equity.** Professional service is consistent regardless of the patient's means (the justice principle in its everyday form); cost awareness serves that duty — it targets help, it never rations respect.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Unaffordable regimens fail clinically; cost per course/day is the input to therapy choice.\\n- Price vs value: outcomes enter only through cost-effectiveness/cost-utility analysis — beyond-200L canon, named and bounded.\\n- Generic substitution = pct-22 moiety identity + pct-24-4 bioequivalence + the legal framework; savings are 25-5 differentials.\\n- Pack rounding at shelf scale + expiry (pct-43) = purchasing discipline as financial control.\\n- Cost awareness targets help; equity keeps service consistent regardless of means.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is affordability a clinical variable rather than a convenience?\\n2. What must be added to a price comparison before it becomes a value comparison, and what is that discipline called?\\n3. Name the three components that license generic substitution and the calculation that quantifies its benefit.\\n4. How does the pack-rounding arithmetic reappear at the pharmacy-shelf scale?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Costs steer therapy: affordable courses get finished, equivalence licenses substitution, expiry punishes overstock, and value needs outcomes — a further discipline beyond this one.`,
      },
    ],
  },
];
