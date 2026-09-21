import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-20: Pharmaceutical Calculations in
 * Veterinary Practice.
 *
 * Batch 23: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13/14/15/16/17/
 * 18/19 top-level topic convention) plus its seven children
 * pct-20-1…20-7 (plain unprefixed names). Node IDs and titles mirror
 * curriculum.ts exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-20 has no surviving Phase-1 tier record; the topic and
 * the contextual children (20-5 Veterinary Dosage Forms, 20-6
 * Species-Related Considerations, 20-7 Safe Interpretation) are Tier B,
 * while the calculation children — Veterinary Dosage Calculations
 * (20-1), Animal Body-Weight Calculations (20-2), Dose Determination
 * (20-3), Concentration Calculations (20-4) — are Tier C, matching the
 * calculation-lesson convention (pct-5-7; pct-9…19 blocks).
 * Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns the veterinary *adaptation* of the
 * calculation toolkit: mg/kg dosing across species, animal weight
 * handling (including imperial-to-metric conversion where prescriptions
 * still arrive in pounds), dose determination from regimen, and
 * concentration arithmetic for veterinary presentations. Human-dose
 * machinery is pct-10/12 canon (cross-referenced); paediatric-vs-
 * veterinary contrast is used for orientation only. Species physiology
 * (e.g. feline glucuronidation limits) is included only where it
 * changes the arithmetic or safety interpretation, and is stated
 * qualitatively — no invented species values. Food-animal withdrawal
 * periods and extra-label use are treated as interpretation flags,
 * not as jurisdiction-specific rules.
 */
export const pct201VeterinaryLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-20',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'topic',
    title: 'Pharmaceutical Calculations in Veterinary Practice',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Veterinary pharmacotherapy serves patients that differ from humans in the one variable calculations care most about — **size** — and in several that chemistry cares about: metabolic pathways, dosing conventions, and who reads the label (the owner, administering to an animal that cannot report effects). The arithmetic toolkit is the same one built across pct-10/12/14/15; this topic adapts it to animals.\\\\n\\\\n**What actually changes.** (1) **Weights span grams to hundreds of kilograms** — a kitten at 0.5 kg and a horse at 500 kg bracket every human dose question, so weight handling and unit discipline matter more, not less. (2) **Doses are conventionally written per kilogram** (mg/kg), sometimes per species — the mg/kg line is the prescription's core instruction. (3) **Presentations differ**: large-animal in-feed or in-water medication, pour-ons, drenches, long-acting injections — concentration arithmetic is applied to unfamiliar packages. (4) **Safety interpretation is different**: the person dosing is not the patient; withdrawal periods for food animals and species-specific toxicities become calculation-adjacent duties.\\\\n\\\\n**The route map**: 20-1 adapts mg/kg dosing to animals; 20-2 handles animal weights (metric conversion included); 20-3 assembles weight × dose × duration into a full dose determination; 20-4 computes and adjusts concentrations for veterinary presentations; 20-5 surveys the dosage forms; 20-6 covers species considerations that alter numbers or safety; 20-7 closes with safe prescription interpretation.\\\\n\\\\n**Standing rule** carried from the human topics: every computed dose is checked by a second route (per-day vs per-course, or per-dose × count) before it reaches the label.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Same arithmetic toolkit as human dosing; animals add extreme weight ranges and species conventions.\\\\n- mg/kg is the core prescription instruction in veterinary practice.\\\\n- Presentations extend to in-feed/in-water medication, pour-ons, drenches, long-acting injections.\\\\n- Withdrawal periods and species toxicities are safety duties tied to the calculation.\\\\n- Double-check rule: every dose verified by a second independent route.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name three ways veterinary patients change the calculation task beyond size.\\\\n2. Why does the owner-as-administrator relationship create calculation-adjacent duties?\\\\n3. Which earlier topics own the dose machinery this topic adapts?\\\\n4. State the standing double-check rule.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Veterinary calculations = human toolkit + extreme weights + mg/kg conventions + unfamiliar presentations + species safety. Same identity, wider world; verify everything twice.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-20', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-20-1',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Veterinary Dosage Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The workhorse computation: a prescription reads "5 mg/kg twice daily" for a named animal of known weight, and the dispenser must turn it into an amount per administration and a quantity for the course. The chain is identical to pct-12-1's body-weight method — **dose per kg × weight = dose per administration** — with two veterinary refinements.\\\\n\\\\n**Refinement 1 — the weight may arrive in imperial units.** Companion-animal owners often state weight in pounds; the prescription may even record it that way. Convert first, calculate second: kilograms = pounds ÷ 2.2 (the conventional veterinary conversion factor), and *use the converted weight on the worksheet*, not the pounds.\\\\n\\\\n**Refinement 2 — the product must be measured into the dose.** A 75 mg requirement against a 25 mg tablet is 3 tablets; against a 50 mg/mL oral suspension it is 1.5 mL. The measuring-step arithmetic (amount ÷ concentration, or amount ÷ per-unit strength) is the same as pct-10-3's canon, applied to veterinary packages.\\\\n\\\\n**Rounding discipline**: round the *measurable* result to a sensible accuracy for the presentation (whole tablets, 0.1 mL on a 1 mL syringe) and state the rounding. Never round the mg/kg weight itself — rounding the weight changes every dose downstream.\\\\n\\\\n**Course quantity** follows pct-7-6's triangle: dose per administration × administrations per day × days = course total, which sizes the dispensed amount.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dose per administration = dose rate (mg/kg) × animal weight (kg).\\\\n- Convert pounds to kilograms first (kg = lb ÷ 2.2); never round the converted weight.\\\\n- Measuring step: amount ÷ concentration (liquids) or ÷ per-unit strength (units).\\\\n- Round only the measurable result, and state the rounding.\\\\n- Course total = dose × administrations/day × days.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Dose per administration**\\\\n\\\\n$$\\\\nm_{\\\\text{dose}} = D_{\\\\text{rate}} \\\\times W\\\\n$$\\\\n\\\\n**Measuring step** (concentration $c$)\\\\n\\\\n$$\\\\nV_{\\\\text{dose}} = \\\\frac{m_{\\\\text{dose}}}{c}\\\\n$$\\\\n\\\\n**Course total**\\\\n\\\\n$$\\\\nm_{\\\\text{course}} = m_{\\\\text{dose}} \\\\times N_{\\\\text{per day}} \\\\times \\\\text{days}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — metric weight.** Dog, 15 kg; "5 mg/kg q12h for 7 days"; 25 mg tablets.\\\\n\\\\nPer dose: 5 × 15 = **75 mg** → 3 tablets. Per day: 75 × 2 = 150 mg. Course: 150 × 7 = **1050 mg** = 42 tablets. Check: 42 = 3 × 2 × 7 ✓.\\\\n\\\\n**Example 2 — imperial weight.** Dog recorded at 22 lb; "10 mg/kg once daily for 5 days"; oral suspension 40 mg/mL.\\\\n\\\\nWeight: 22 ÷ 2.2 = **10 kg**. Per dose: 10 × 10 = **100 mg** → 100 ÷ 40 = **2.5 mL** per daily dose. Course: 100 × 5 = 500 mg = 12.5 mL — dispense 15 mL (stated margin), label "2.5 mL once daily".\\\\n\\\\n**Example 3 — rounding to the presentation.** Cat, 4.2 kg; "2 mg/kg q24h"; 5 mg tablets → 8.4 mg required: a half tablet (2.5 mg) is 0.6 mg/kg — underdose; a whole tablet is 1.19 mg/kg. Tablet strengths do not always fit: the finding goes back to the prescriber for a liquid or a different strength — silent substitution is not a decision the dispenser makes.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A 30 kg dog needs 4 mg/kg q12h for 10 days. Compute the per-dose amount and total tablets if 100 mg tablets are used (120 mg/dose; 24 tablets).\\\\n2. Convert 66 lb to kilograms and compute a 15 mg/kg single dose (30 kg; 450 mg).\\\\n3. Why is rounding the converted animal weight a worse error than rounding the final volume?\\\\n4. In Example 3, what is the professional action when no tablet strength fits, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `mg/kg × kg = dose; convert lb ÷ 2.2 first; measure with amount ÷ concentration; round only what is measured; course = dose × per-day × days. Non-fitting strengths go back to the prescriber.`,
      },
    ],
  },
  {
    nodeId: 'pct-20-2',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Animal Body-Weight Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Every downstream number inherits the animal's weight, so weight handling is a calculation topic in its own right. Three competencies matter.\\\\n\\\\n**Unit fluency across species sizes.** Small animals may be weighed in grams (a 250 g rodent = 0.25 kg); companion animals in kilograms; horses and livestock in kilograms (sometimes in pounds in older records). The mg/kg rate assumes kilograms — convert before anything else. Two conversions cover the ground: **kg = lb ÷ 2.2**; grams → kilograms = ÷ 1000.\\\\n\\\\n**Weight quality.** An owner-estimated weight ("about 20 kg") is an input with uncertainty. Where the dose is narrow-margin, the professional response is to weigh the animal at the pharmacy or ask the prescriber to confirm the weight — a 20% weight error is a 20% dose error, and many veterinary drugs have narrow margins. The worksheet should record *whose* estimate the weight was.\\\\n\\\\n**Dose-per-animal vs dose-per-kg.** Some prescriptions state an amount **per animal** ("one 500 mg tablet per dog") regardless of weight; others state per kg. The two conventions produce different arithmetic and different error modes: per-animal dosing skips the weight step entirely, per-kg dosing fails loudly if the weight is wrong. Recognising which convention the prescription uses is step zero — applying mg/kg arithmetic to a per-animal prescription (or the reverse) is a classic veterinary dispensing error.\\\\n\\\\n**Where the weight appears again**: feed medication (20-4) converts mg/kg of *feed*, a different "kg" — body weight vs feed mass must never be silently swapped.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- All rates assume kilograms: kg = lb ÷ 2.2; g → kg = ÷ 1000.\\\\n- Weight uncertainty becomes dose uncertainty; weigh or confirm for narrow-margin drugs.\\\\n- Record the weight's source (owner estimate, clinic weigh-in).\\\\n- Per-animal and per-kg prescriptions use different arithmetic — identify the convention first.\\\\n- mg/kg of body weight vs mg/kg of feed are different quantities — never swap them.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Weight conversions**\\\\n\\\\n$$\\\\nW_{\\\\text{kg}} = \\\\frac{W_{\\\\text{lb}}}{2.2}, \\\\qquad W_{\\\\text{kg}} = \\\\frac{W_{\\\\text{g}}}{1000}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — small animal in grams.** Rodent at 250 g; rate 8 mg/kg.\\\\n\\\\nWeight: 250 ÷ 1000 = 0.25 kg → dose = 8 × 0.25 = **2 mg**. (Forgetting the ÷1000 gives 2000 mg — a 1000-fold overdose; this is the classic small-animal unit error.)\\\\n\\\\n**Example 2 — owner estimate.** Dog "about 20 kg", rate 20 mg/kg once daily.\\\\n\\\\nDose = **400 mg**. If the true weight were 16 kg, the correct dose is 320 mg — 25% higher than needed. For a narrow-margin drug the dispensed dose waits on a confirmed weight; the worksheet notes "owner estimate, unverified".\\\\n\\\\n**Example 3 — convention check.** Prescription: "1 tablet per dog once daily" (per-animal). A colleague begins converting the dog's 30 kg. Stop — the prescription is per-animal: no weight step exists. Conversely "5 mg/kg per cat" requires the weight; a per-animal habit would skip a mandatory step.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Convert 44 lb and 350 g to kilograms (20 kg; 0.35 kg).\\\\n2. A 0.35 kg animal at 10 mg/kg gets how much? (3.5 mg.)\\\\n3. Why does an owner-estimated weight carry a recorded source on the worksheet?\\\\n4. Distinguish per-animal and per-kg prescriptions and the error mode of mixing them up.\\\\n5. Why must mg/kg of feed never be treated as mg/kg of body weight?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Kilograms always: lb ÷ 2.2, g ÷ 1000. Weight quality is dose quality; record the source. Identify per-animal vs per-kg before any arithmetic; body-weight kg and feed kg are different animals.`,
      },
    ],
  },
  {
    nodeId: 'pct-20-3',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Dose Determination',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `20-1 computed a single administration from a stated rate; **dose determination** assembles the full regimen — weight, rate, frequency, duration, and total quantity — and verifies that the pieces agree. It is the veterinary analogue of pct-7-6's quantity/duration triangle, run in reverse: from the prescription's parts to a coherent whole.\\\\n\\\\n**The assembly.** (1) Weight (converted, source recorded). (2) Rate × weight = dose per administration. (3) Frequency divides the daily dose: q12h = ×2 per day, q24h = ×1. (4) Duration multiplies to the course. (5) Course total sizes the dispensed quantity, rounded to a sensible package size **with the margin stated**.\\\\n\\\\n**Daily-dose cross-check.** Compute the daily dose two ways — (rate × weight × administrations/day) and (dose per administration × administrations/day) — they must agree. This one identity catches most transcription slips (a q12h misread as q24h shows up immediately as a factor-2 disagreement).\\\\n\\\\n**Frequency conventions matter.** Veterinary prescriptions may write q8h, "three times daily", or TID — the dispenser translates each to a multiplier and shows it on the worksheet; ambiguous frequency ("twice daily as needed") is resolved with the prescriber before any quantity is computed, since the course total depends on it.\\\\n\\\\n**Presentations with built-in intervals.** Long-acting injections state their own redosing interval ("every 14 days"); the course arithmetic then counts administrations differently — 3 injections cover 42 days, not 42 daily doses. Reading the presentation's dosing model is part of dose determination, not an afterthought.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Full assembly: weight → dose per administration → daily dose → course total → dispensed quantity.\\\\n- Daily-dose cross-check: rate × weight × N must equal dose × N — agreement catches transcription slips.\\\\n- Translate q8h/TID/"times daily" to explicit multipliers on the worksheet.\\\\n- Course quantity rounds to a package size with a stated margin.\\\\n- Long-acting presentations change the administration count (3 × 14-day doses = 42 days).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Regimen assembly**\\\\n\\\\n$$\\\\nm_{\\\\text{dose}} = D_{\\\\text{rate}} \\\\times W, \\\\quad m_{\\\\text{day}} = m_{\\\\text{dose}} \\\\times N, \\\\quad m_{\\\\text{course}} = m_{\\\\text{day}} \\\\times \\\\text{days}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — full assembly.** Dog 25 kg; 12 mg/kg q12h for 14 days; 200 mg tablets.\\\\n\\\\nPer dose: 12 × 25 = **300 mg** → 1.5 tablets (round to measurable: 1.5 tab, cut scored tablet — state it). Daily: 300 × 2 = 600 mg = 3 tablets. Cross-check: 12 × 25 × 2 = 600 ✓. Course: 600 × 14 = 8400 mg = **42 tablets**.\\\\n\\\\n**Example 2 — frequency slip caught.** Same prescription transcribed as q24h: daily = 300 mg. Cross-check vs rate × weight × 1 = 300 — agreement *appears* to hold because the multiplier was changed consistently; the slip surfaces only against the prescription line. Lesson: the cross-check validates internal consistency; the prescription line itself must be read twice.\\\\n\\\\n**Example 3 — long-acting presentation.** Cattle, long-acting injection "1 mL/50 kg every 14 days", animal 400 kg, two redoses planned.\\\\n\\\\nPer administration: 400 ÷ 50 = **8 mL**. Administrations: initial + 2 redoses = 3 → **24 mL** total; 3 doses cover 42 days.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A 20 kg animal at 15 mg/kg q8h for 7 days: per-dose, daily, and course amounts (300 mg; 900 mg; 6.3 g).\\\\n2. Show the daily-dose cross-check for question 1.\\\\n3. Why did Example 2's cross-check not catch the frequency slip, and what does that teach?\\\\n4. How many administrations cover 56 days for a 28-day long-acting product? (2.)`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Assemble weight → dose → daily → course; cross-check daily two ways; read the prescription line twice; long-acting products count administrations, not days.`,
      },
    ],
  },
  {
    nodeId: 'pct-20-4',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Concentration Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Veterinary presentations express strength in all the familiar ways (mg/mL, mg/tablet, % w/v) plus two package-scale conventions that deserve their own pass: **in-feed/in-water medication** and **dose-per-mass-of-product** presentations.\\\\n\\\\n**Standard concentration arithmetic** (pct-9/10 canon): dose volume = dose ÷ concentration; dilution obeys C₁V₁ = C₂V₂. A 100 mg/mL stock diluted to 25 mg/mL quarters the concentration and quadruples the volume — 1 mL + diluent to 4 mL.\\\\n\\\\n**In-feed/in-water medication.** Prescriptions like "10 mg/kg body weight in feed" must first be converted into a **feed concentration**: feed concentration (mg/kg feed) = (dose rate mg/kg body weight × total body weight of the group) ÷ total feed (kg) consumed over the treatment window. The two "kg"s — body weight and feed mass — are different quantities; the conversion between them is the entire calculation. Group dosing then works at the feed-mixing scale, not per-animal.\\\\n\\\\n**Dose-per-mass products.** Pour-ons and drenches state rates like "1 mL/10 kg": the animal's weight ÷ 10 = mL to apply. Same structure as dosing by concentration, with the product's own rate unit.\\\\n\\\\n**Percentage strengths.** A 10% w/v drench contains 100 mg/mL (the pct-9-3 identity, % → mg/mL: multiply by 10); livestock doses in mL convert to mg by this bridge. Keeping the % ↔ mg/mL conversion automatic prevents the common order-of-magnitude error on large volumes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dose volume = dose ÷ concentration; dilution obeys C₁V₁ = C₂V₂.\\\\n- In-feed: convert mg/kg body weight into mg/kg feed via total body weight ÷ total feed.\\\\n- Body-weight kg and feed kg are different quantities — the conversion is the calculation.\\\\n- Dose-per-mass products (1 mL/10 kg) divide weight by the rate's mass unit.\\\\n- % w/v → mg/mL is ×10 (10% = 100 mg/mL); keep it automatic on large volumes.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Feed concentration** (group medication)\\\\n\\\\n$$\\\\nC_{\\\\text{feed}} = \\\\frac{D_{\\\\text{rate}} \\\\times W_{\\\\text{group}}}{M_{\\\\text{feed}}}\\\\n$$\\\\n\\\\n**Percentage bridge**\\\\n\\\\n$$\\\\nx\\\\% \\\\; \\\\text{w/v} \\\\;\\\\to\\\\; 10x \\\\; \\\\text{mg/mL}\\\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — dilution.** Dilute a 100 mg/mL injectable to 25 mg/mL: C₁V₁ = C₂V₂ → take 1 mL and dilute to 4 mL (add 3 mL diluent). Check: 100 × 1 = 25 × 4 ✓.\\\\n\\\\n**Example 2 — in-feed.** Poultry group: 2000 birds × 1.5 kg average = 3000 kg total body weight; daily feed consumption 350 kg; medication rate 10 mg/kg body weight per day.\\\\n\\\\nDaily drug needed = 10 × 3000 = **30 000 mg = 30 g**. Feed concentration = 30 000 ÷ 350 = **85.7 mg/kg feed** (≈ 86 mg/kg as prepared — stated rounding). Each bird's dose arrives via its feed intake, so the concentration must assume the stated consumption; a consumption drop changes the dose — a monitoring point, flagged.\\\\n\\\\n**Example 3 — pour-on.** Rate "1 mL/10 kg"; animal 320 kg → 320 ÷ 10 = **32 mL** applied along the backline, measured in the product's own applicator.\\\\n\\\\n**Example 4 — % bridge.** A 5% w/v drench = 50 mg/mL; a 45 kg sheep at 10 mg/kg needs 450 mg = **9 mL** (450 ÷ 50).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Dilute 40 mg/mL to 10 mg/mL: describe the dilution (1 mL to 4 mL, add 3 mL).\\\\n2. Group: total body weight 1200 kg, daily feed 150 kg, rate 8 mg/kg → feed concentration (64 mg/kg).\\\\n3. A 20% w/v drench is how many mg/mL, and what volume gives 800 mg? (200 mg/mL; 4 mL.)\\\\n4. Why does reduced feed intake change an in-feed dose, and what is the monitoring point?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same concentration machinery; new packages. Convert body-weight dosing into feed concentrations via total weight ÷ total feed; divide weight by pour-on rate units; % w/v → mg/mL is ×10. Watch which "kg" you are in.`,
      },
    ],
  },
  {
    nodeId: 'pct-20-5',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Veterinary Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Veterinary practice uses the same core dosage forms as pct-2 — tablets, capsules, liquids, injectables, topicals — and adds presentations shaped by **species anatomy and husbandry**: the patient cannot swallow a tablet on instruction, may be one of a thousand in a flock, or must be medicated without handling stress.\\\\n\\\\n**The veterinary additions, by intent.** *Compliance forms*: palatable chewables and flavoured pastes for companion animals; pill-devices exist because voluntary tablet intake is unreliable. *Group forms*: in-feed and in-water medication (20-4's concentration arithmetic), recommended where individual dosing is impractical. *External forms*: pour-ons, spot-ons, sprays, and dips deliver external/ectoparasite therapy without injection. *Large-animal oral forms*: drenches (oral liquids dosed by weight band) and boluses (large sustained-release intraruminal devices). *Long-acting injectables*: depot presentations whose dosing model is interval-based (20-3).\\\\n\\\\n**Calculation consequences by form.** Each form carries its own measuring convention: drenches dose in mL from a weight band; pour-ons in mL per kg along the backline; feeds as mg/kg feed mixed into a batch; chewables as whole units (cutting may destroy a palatable matrix). The dispenser's arithmetic must match the form's convention — a perfect mg answer applied to the wrong measuring convention is still a wrong dose.\\\\n\\\\n**Selection view** (for orientation): form choice is the prescriber's; the dispenser's contribution is recognising what each form implies for measurement, label directions, and the owner-instruction language (20-7).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Core forms are shared with pct-2; veterinary additions are husbandry-driven.\\\\n- Group forms (feed/water) move dosing to batch scale; external forms dose per kg by application.\\\\n- Drenches dose by weight band in mL; boluses are sustained-release intraruminal devices.\\\\n- Every form has its own measuring convention — the arithmetic must match the form.\\\\n- Chewables/tablets are usually whole units; cutting may not be appropriate.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `The same 450 mg requirement can be 9 mL of a 5% drench, 1 mL of a 450 mg/mL injectable, or half of a 900 mg chewable — the prescription's form decides which measuring convention, syringe, and owner instruction the label needs. The arithmetic did not change; the form did.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the veterinary form additions and the husbandry need each answers.\\\\n2. Why does in-feed medication change the scale of the calculation?\\\\n3. What goes wrong if mg arithmetic is applied with the wrong form's measuring convention?\\\\n4. Why may a chewable not be cut like an ordinary tablet?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Forms follow husbandry: group dosing in feed/water, external per-kg application, weight-band drenches, interval injectables. Match the arithmetic to the form's convention — and write owner instructions to match.`,
      },
    ],
  },
  {
    nodeId: 'pct-20-6',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Species-Related Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A mg/kg rate is not portable between species by arithmetic alone: behind every species-specific dose rate stands physiology that changes what the number means. This lesson gives the 200L-level picture — qualitative, tied to the calculation consequences.\\\\n\\\\n**Metabolic differences change rates and safety.** Species differ in drug-metabolising enzymes; the classic 200L example is the cat's limited glucuronidation capacity, which makes several human-common drugs (notably paracetamol) hazardous at doses tolerated by dogs and humans. The calculation consequence is absolute: **a dose rate is species-specific data, never interpolated across species** — "well it works in dogs" is not an arithmetic step.\\\\n\\\\n**Size extremes stress the linear assumption.** Mg/kg dosing assumes proportionality to weight; across very large size ranges, metabolic scaling is not strictly linear, which is one reason large-animal dose rates are established per species rather than extrapolated. Where pharmacokinetics matter, per-species data (or body-surface-area approaches, pct-12-2's canon) govern; the 200L rule is simply: use the rate written for *that* species.\\\\n\\\\n**Life stage and status.** Paediatric, geriatric, pregnant, and lactating animals may need rate adjustments stated by the product's own data — handled exactly like the human special-population case: the adjustment arrives from the prescription/product, not from the dispenser's judgement.\\\\n\\\\n**Food animals add a safety dimension.** Drugs used in animals entering the food chain carry **withdrawal periods** — the interval after the last dose before milk, eggs, or meat may enter the food supply. The withdrawal date is computed from the last administration date plus the stated period: a calendar calculation the dispenser must label correctly.\\\\n\\\\n**Behavioural/handling notes** (dosing an uncooperative patient, topical application areas) affect compliance, not arithmetic — they belong to the label instructions of 20-7.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dose rates are species-specific data; never interpolate across species.\\\\n- Feline glucuronidation is limited — some human-common drugs are feline hazards (e.g. paracetamol).\\\\n- Size extremes and life-stage status shift rates via per-species/product data, not dispenser judgement.\\\\n- Food animals carry withdrawal periods: last-dose date + stated period = withdrawal date on the label.\\\\n- Handling and behavioural factors shape label instructions, not arithmetic.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A prescription for a food-producing animal is incomplete for dispensing until the withdrawal period is on the label: last dose + stated withdrawal = the date the animal's products may re-enter the food chain. The calendar calculation is as much a dispensing step as the mL.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is a canine dose rate not transferable to cats, even at the same mg/kg?\\\\n2. Name the classic feline metabolic limitation and one drug it endangers.\\\\n3. Compute the withdrawal date if the last dose is 3 March and the stated withdrawal is 21 days (24 March).\\\\n4. Which human-topic analogue governs life-stage rate adjustments, and where do the adjusted numbers come from?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Rates are species property, not arithmetic property. Cats are not small dogs; size extremes need per-species data; special statuses follow the product; food animals carry a withdrawal date the label must state.`,
      },
    ],
  },
  {
    nodeId: 'pct-20-7',
    courseId: 'pct-201',
    topicId: 'pct-20',
    nodeType: 'subtopic',
    title: 'Safe Interpretation of Veterinary Prescriptions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A veterinary prescription is read with the same screening discipline pct-7-9/7-10 built — plus species-specific fields whose absence or ambiguity is itself a finding. The pre-dispensing pass:\\\\n\\\\n**Identify the patient chain.** Species and breed (rates and forms are species-specific), the animal's identity/name, the owner, and the animal's weight **with its source**. A prescription naming a species but not a weight, or a weight but not a species, cannot be computed safely — both are clarify-before-dispensing items.\\\\n\\\\n**Read the dose language precisely.** Confirm the convention (per kg vs per animal), the rate, the frequency, the duration, and — for group medication — which mass (body weight or feed) each "kg" refers to. Ambiguities ("twice daily as needed", unnamed concentration for an injection) are resolved with the prescriber, exactly as pct-7's clarify-document-annotate sequence requires.\\\\n\\\\n**Check the safety fields.** For food animals: withdrawal period stated and the withdrawal date computable (20-6). For all species: species-drug contraindication awareness (the feline hazard class), presentation-measurability (can the owner measure 0.37 mL with the provided device?), and extra-label use awareness — a prescription deliberately deviating from the product's licensed species/indication is a prescriber decision that should be visibly documented, not silently normalised.\\\\n\\\\n**Label for the administrator.** The person dosing is the owner: the label states species, animal name, dose in measurable units of the dispensed form, frequency in clock terms, duration/end date, storage, and — where applicable — the withdrawal date. Owner instructions are written in plain language, because the reader is not a pharmacist.\\\\n\\\\n**Documentation closes it**: species/weight source, computed amounts, clarify notes, withdrawal computation — the same worksheet audit trail as human dispensing, with species fields added.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Screening adds species, breed, animal identity, owner, and weight-with-source as required fields.\\\\n- Missing species or missing weight = cannot compute safely = clarify before dispensing.\\\\n- Ambiguous dose language and group-medication "kg" references are prescriber queries.\\\\n- Food animals: withdrawal period on the prescription → withdrawal date on the label.\\\\n- Extra-label use is documented prescriber intent, never silently normalised.\\\\n- Labels are written in plain language for a non-pharmacist administrator.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the fields a veterinary prescription must carry before dose computation is safe.\\\\n2. Which two missing items make computation impossible, and what is the correct action?\\\\n3. What withdrawal information must flow from prescription to label, through what calculation?\\\\n4. Why are owner instructions written differently from professional labels?\\\\n5. How is extra-label use handled, and why not silently?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Same screening discipline, species fields added: species + weight + convention before arithmetic; withdrawal dates for food animals; document the clarifications; label in the owner's language.`,
      },
    ],
  },
];
