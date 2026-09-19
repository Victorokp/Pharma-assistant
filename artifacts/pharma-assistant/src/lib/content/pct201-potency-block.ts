import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · Topic 4: Fundamentals of Pharmaceutical Calculations.
 *
 * Batch 6: completes the locked pct-11 group block ("Pharmaceutical Potency
 * and Units of Activity"): the Tier D orientation lesson plus all seven
 * children (pct-11-1 … pct-11-5 Tier B; pct-11-6, pct-11-7 Tier C). Node IDs,
 * titles, and the parent topic (pct-4) mirror curriculum.ts exactly; nothing
 * here creates, renames, or reorders curriculum nodes.
 *
 * Numeric-value discipline (per the approved standard):
 *  - definitional values (e.g. "U-100 = 100 units/mL") are taught as definitions;
 *  - arithmetic-derived values are traceable step-by-step;
 *  - substance-specific IU mass-equivalences are WHO/pharmacopoeial CONVENTIONS,
 *    quoted as illustrative textbook values and carried in verifyFlags — never
 *    presented as universal conversions.
 *
 * Cross-references: pct-9 (concentration dialects — units/mL is the activity
 * cousin of mg/mL; the dilution law recurs), pct-8 (nothing here needs
 * density), pct-9-10 (the missing-data impossibility rule mirrors).
 */
export const pct201PotencyLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // GROUP ORIENTATION (Tier D — overview only; children are the units)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity',
    tier: 'D',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Not every medicine can be dosed confidently by mass. A biological extract contains a mixture of molecular forms; an antibiotic ferments alongside inactive impurities; a vitamin degrades on storage. Two preparations with the same weight of "active" can deliver very different **effect**. The answer of pharmaceutical science is to measure and declare *activity* — in **units** — and to relate units to mass through **potency**.

The ladder runs: **Units of Activity** (what a "unit" is) → **Biological Activity** (why effect, not mass, must sometimes be measured) → **Potency** (activity per unit mass — the bridge quantity) → **International Units** (worldwide standardization of the unit) → **Units/mL and Related Expressions** (how products declare activity) → then the two quantitative capstones: **Calculations Involving Potency** and **Converting Between Potency Expressions**.

One structural idea organises everything: this block is the *activity cousin* of the concentration block (pct-9). There, grams became moles through the molar mass $M_r$; here, mass becomes activity through potency (units per mg). Every conversion skill you built — canonical ratios, dilution balances, missing-data impossibility — reappears wearing activity units.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Some drugs must be dosed by activity (units), not mass — mixtures, biologicals, degradable substances.
- Potency (units/mg) is the bridge between mass and activity, as $M_r$ is between mass and moles.
- The unit is defined by convention against a reference standard — it is not a physical constant.
- Product declarations (units/mL, units per vial) and dose calculations run on activity balances.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Orientation lesson — the seven child lessons are the real study units, in ladder order: Units of Activity → Biological Activity → Potency → International Units → Units/mL → Calculations Involving Potency → Converting Between Potency Expressions.
- One family idea: mass ↔ activity conversion via potency, mirroring the mass ↔ mole conversion via molar mass.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 1 — Units of Activity (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-1',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — Units of Activity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A **unit of activity** is an arbitrarily defined amount of a biologically active substance that produces a specified biological effect under defined test conditions. The definition is deliberate in every word. *Arbitrarily defined*: the unit is fixed by an authoritative convention, not derived from physics — there is no universal "one unit" any more than there is a universal "one dose". *Specified biological effect*: the definition points at what the substance **does** (prevent clotting, lower blood glucose, kill a test organism), measured in a standardised assay. *Defined conditions*: the assay method, organism, and reference preparation are part of the definition.

Why bother? Because for some substances mass simply does not predict effect. Penicillin produced by fermentation is a family of related compounds with differing activity; heparin is a mixture of chain lengths whose anticoagulant power depends on composition; vitamins degrade, so old stock may weigh the same but do less. For these, the honest quantity is *how much activity is present*, and the unit is the counting word for it.

The immediate practical consequence: unit-containing products must be handled as a parallel system to the gram/milligram system you already know — parallel labels, parallel dose arithmetic, and a conversion key (**potency**, units per mg) that belongs to each specific substance. That key is this block's central object, introduced properly in the Potency lesson.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Unit = arbitrarily defined amount producing a specified biological effect under defined assay conditions.
- Units exist because mass does not always predict effect (mixtures, isoforms, degradation).
- The unit's meaning is set by convention against a reference standard — substance-specific, not universal.
- Unit-based dosing is a parallel system to mass-based dosing; potency is the bridge between them.`,
      },
      {
        kind: 'FORMULAS',
        body: `No formula is needed for the concept itself — this lesson defines the counting word. The working arithmetic of units arrives with potency:

$$
\\text{total units} = \\text{mass (mg)} \\times \\text{potency (units/mg)}
$$

introduced fully in the Potency and calculation lessons.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example (reading a unit label).**

**Given:** a vial is labelled "heparin sodium 5,000 units". **Task:** interpret the label.

1. The "5,000" is an **activity** declaration — 5,000 defined units of anticoagulant effect.
2. It is *not* a mass: the vial's actual powder weight is a different number entirely, determined by the batch's potency.
3. Dosing statements in units ("5,000 units") are matched to the label's unit declaration — never to a gram equivalent unless the product's potency is known.

**Interpretation:** the unit system stands on its own feet. Reading "units" as if it were a sloppy synonym for "mg" is the classic beginner error this block exists to prevent.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Units are the daily language of several medicine families you will dispense: insulins (U-100 on every pen and vial), heparins, many antibiotics (declared in units or µg of activity), and fat-soluble vitamins. Prescription and label must meet in the same dialect — a units prescription against a mass label (or vice versa) is a dispensing intervention, not a calculation. Understanding *why* units exist makes that safety habit principled rather than memorised.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. In the definition of a unit of activity, what work does each of these phrases do: "arbitrarily defined", "specified biological effect", "defined conditions"?
2. Why would two preparations containing the same mass of a biological extract plausibly require different doses?
3. A colleague reads "heparin 5,000 units" as "5,000 mg". Explain the category error and what information would be needed to relate the two.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- A unit is a convention-defined amount of biological effect, measured under defined assay conditions.
- Mass ≠ activity for mixtures, biologicals, and degradable substances — hence units.
- Units form a parallel dosing system; potency (units/mg) is the conversion key to mass.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 2 — Biological Activity (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-2',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — Biological Activity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Biological activity** is the capacity of a substance to produce a defined biological effect. The measurement problem this lesson addresses: how do you *quantify* effect when you cannot deduce it from chemical mass alone?

The traditional answer is the **bioassay** — measure the effect on a living system under controlled conditions and compare it with a **reference standard**: a preparation whose activity in units has been officially established. The unknown sample's effect is matched against the standard's under identical conditions, and the sample is *assigned* units by comparison. Two implications matter. First, the unit is **relative by construction**: it means "activity equal to that of so much of the standard", which is why international agreement on standards (next lessons) is essential. Second, the assigned activity is **assay-dependent**: change the biological system or the conditions and the comparison can shift — which is precisely why the definition of each unit pins down its method.

Why mass fails as a proxy is worth dwelling on, because it drives the whole design: biological drugs are often *mixtures of active and less-active molecular forms*; impurities dilute; degradation products may be inert or harmful; and some effects (clotting, immune response) emerge from the interaction of several components. The same milligrams, distributed differently among these forms, deliver different activity.

The modern landscape uses bioassays where they are irreplaceable (complex biologicals, heparin-like mixtures) and physicochemical assays where mass truly does predict effect (pure small molecules) — but the unit concept, born in the bioassay, remains the dosing language wherever biology, not mass, sets the dose.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Bioassay = effect measured in a living system, compared against an officially established reference standard.
- Units are assigned by comparison — relative by construction, and assay-dependent by nature.
- Mass fails as an activity proxy for mixtures, isoform distributions, impurities, and degradation.
- Pure small molecules can usually be assayed physicochemically; complex biologicals need bioassays.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Conceptual worked-through example — assigning activity by comparison.**

**Given:** a reference standard is declared 1,000 units per mg. In a standardised assay, 1 mg of the standard produces a measured response R. An unknown sample, 1 mg, produces 0.95 R under identical conditions.

1. Response ratio: unknown ÷ standard = 0.95.
2. Assign activity by proportion: 0.95 × 1,000 units/mg.
3. Result: the sample's potency is 950 units/mg — *in this assay, against this standard*.

**Interpretation:** the arithmetic is trivial proportion, but notice what it rests on: identical conditions, one standard, one method. Change the assay and the number could legitimately differ — the units assignment is a comparison outcome, not a mass measurement. (Numbers are illustrative and exactly computable: 0.95 × 1,000 = 950.)`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every time you handle a units-labelled product, you are holding the end result of this comparison process: some laboratory, somewhere, matched a production batch against a standard and assigned its units. Batch-to-batch consistency in heparin or insulin is achieved by exactly this loop — assay, compare, adjust — and it is why the units on the label are trustworthy in a way that weight alone could never be for these products.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is a unit assigned by comparison with a standard, rather than measured "directly"? What role does the standard play?
2. An assay finds sample A at 980 units/mg and sample B at 1,020 units/mg, though both weigh the same. Give two chemically plausible reasons.
3. Why does the phrase "defined conditions" appear in the bioassay concept — what could go wrong without it?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Biological activity is quantified by bioassay against a reference standard — units are assigned by comparison.
- Assignments are relative and assay-dependent; the method is part of the definition.
- Mass ≠ activity whenever composition varies (mixtures, impurities, degradation).
- Product labels in units carry an invisible comparison history — that is their guarantee.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 3 — Potency (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-3',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — Potency',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Potency** is the activity per unit mass of a preparation, expressed as **units per milligram** (units/mg) or units per gram. It is the conversion key between the two dosing dialects: mass (what a balance reads) and activity (what a label declares and a dose requires).

$$
\\text{potency} = \\frac{\\text{activity (units)}}{\\text{mass (mg)}} \\qquad \\text{total units} = \\text{mass (mg)} \\times \\text{potency (units/mg)}
$$

Two distinctions keep the concept sharp. First, **potency is not concentration**: concentration (pct-9) states how much solute sits in how much *product*; potency states how much *activity* each milligram of the substance itself carries. A raw-material powder, a tablet, and an injection can each have their own potency statement. Second, **potency is not purity**, though they relate: purity asks what *fraction* of the powder is drug; potency asks how *active* the powder is per milligram — a degraded but pure preparation loses potency while remaining chemically pure.

Because potency is measured per batch, specifications set acceptance ranges around it — a batch must fall *within* a declared potency window (commonly expressed as a percentage of the labelled potency) to be released. Ageing does the same thing in slow motion: potency drifts downward with storage, which is why unit-labelled products carry expiry dates grounded in potency retention, not just chemical stability.

In the calculation lessons that follow, potency plays exactly the structural role that molar mass plays in pct-9-8: the substance-specific conversion factor that turns grams into the chemically/physiologically meaningful count — there moles, here units.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Potency = activity per unit mass (units/mg) — the mass ↔ activity conversion key.
- total units = mass × potency; potency = units ÷ mass.
- Potency ≠ concentration (product-based) and ≠ purity (fraction-based) — related but distinct.
- Batch specifications and expiry are grounded in potency retention.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{potency (units/mg)} = \\frac{\\text{total activity (units)}}{\\text{mass (mg)}} \\qquad \\text{mass (mg)} = \\frac{\\text{total activity (units)}}{\\text{potency (units/mg)}}
$$

Potency retention against a labelled value:

$$
\\text{retention (\\%)} = \\frac{\\text{measured potency}}{\\text{labelled potency}} \\times 100
$$

All forms are unit-consistent: units ÷ (units/mg) = mg; (units/mg) × mg = units.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** an antibiotic raw material has a labelled potency of 920 units/mg. A released batch assays at 903 units/mg. **Find:** the potency retention, and the mass carrying 46,000 units.

1. Retention: $\\dfrac{903}{920} \\times 100$.
2. Calculate: 903 ÷ 920 = 0.9815…; × 100 ≈ 98.2%.
3. Mass for the dose: $\\text{mass} = \\dfrac{46{,}000 \\text{ units}}{903 \\text{ units/mg}}$.
4. Calculate: 46,000 ÷ 903 ≈ 50.9 mg.

**Answer:** retention ≈ 98.2%; mass ≈ 50.9 mg. **Interpretation:** the batch carries 98.2% of its labelled activity — inside its specification window, it is released; but note the dose arithmetic ran on the *measured* potency (903), because that is the activity actually present. Using the labelled 920 would have short-delivered the dose. Every number here is traceable: 903/920 × 100 and 46,000/903 are single-step divisions.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Potency is the working concept behind several everyday labels: antibiotic vials declared "equivalent to X mg of activity", biological products specified "not less than Y units per mg", and the general principle that a batch's declared strength is its measured activity, not its weight. When a monograph or certificate of analysis quotes units per mg, you are reading a potency — the bridge you will use in every calculation of the next two lessons.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish potency from concentration, and potency from purity — one sentence each.
2. A powder assays 950 units/mg. How many milligrams carry 28,500 units? Show the unit cancellation.
3. Why should dose arithmetic use measured potency rather than labelled potency when both are available?
4. Why is expiry for a units-labelled product grounded in potency retention rather than mass loss?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Potency = units/mg: the bridge factor between mass and activity (the $M_r$ of this block).
- units = mass × potency; mass = units ÷ potency; retention % = measured/labelled × 100.
- Potency ≠ concentration ≠ purity — three different questions about the same powder.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 4 — International Units (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-4',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — International Units',
    tier: 'B',
    verifyFlags: [
      'IU mass-equivalences (insulin ≈ 0.0345 mg/IU; vitamin D 0.025 µg/IU cholecalciferol; vitamin A 0.3 µg/IU retinol; vitamin E ≈ 0.67 mg/IU d-alpha-tocopherol) are substance-specific WHO/pharmacopoeial conventions quoted here as commonly cited illustrative textbook values. Authoritative work must quote the current standard for the specific substance and molecular form; equivalences differ per substance and can be revised.',
    ],
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `If every country defined its own units, a label would change meaning at the border. The **International Unit (IU)** solves this: for each substance, an expert body (the World Health Organization (WHO), through its biological standardization programme) establishes an **International Standard** preparation and defines the IU as the activity of a specified amount of that standard. Every IU-labelled product worldwide is ultimately calibrated — directly or through an approved chain — against that single reference.

The essential insight, and the one examiners love: **the mass equivalent of 1 IU is specific to each substance, and even to each molecular form of a substance.** There is no universal "1 IU = so many mg". One IU of insulin, one IU of vitamin D, and one IU of heparin are three different quantities with three different definitions. Commonly cited textbook equivalences illustrate the spread: vitamin D, 1 IU = 0.025 µg of cholecalciferol (a definitional convention); insulin, 1 IU ≈ 0.0345 mg of human insulin; vitamin A, 1 IU = 0.3 µg of retinol; vitamin E, 1 IU ≈ 0.67 mg of d-alpha-tocopherol — with *different* equivalences for other tocopherol forms. These are conventions maintained by standardization bodies, occasionally revised as methods improve, and they differ between molecular forms of the same vitamin — all of which is why authoritative work always quotes the current pharmacopoeial standard for the exact substance at hand (this lesson's verify flag records that discipline).

The practical skill is therefore two-fold: **treat IU mass-equivalences as lookups with citations, never as derivable conversions**; and recognise that within one substance, IU arithmetic is perfectly ordinary proportion — 400 IU is twice 200 IU, whatever its mass equivalent may be.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- 1 IU = activity of a specified amount of the WHO International Standard for that substance.
- IU mass-equivalences are substance- AND form-specific conventions — never a universal conversion.
- Illustrative textbook equivalences (vit D 0.025 µg/IU; insulin ≈ 0.0345 mg/IU; vit A 0.3 µg/IU retinol; vit E ≈ 0.67 mg/IU) carry a verify flag — cite the current standard in authoritative work.
- Within one substance, IU arithmetic is ordinary proportion.`,
      },
      {
        kind: 'FORMULAS',
        body: `For a substance whose IU mass-equivalence is $k$ (mass per IU — looked up, never derived):

$$
\\text{mass} = \\text{IU} \\times k \\qquad \\text{IU} = \\frac{\\text{mass}}{k}
$$

Proportionality within one substance needs no lookup at all:

$$
\\frac{\\text{IU}_1}{\\text{IU}_2} = \\frac{\\text{mass}_1}{\\text{mass}_2}
$$

$k$ differs per substance and per molecular form; it is fixed by the current International Standard, not by chemistry.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** vitamin D (cholecalciferol) drops labelled 400 IU per 0.25 mL, using the commonly cited convention 1 IU = 0.025 µg cholecalciferol. **Find:** the mass of cholecalciferol per 0.25 mL, and per mL.

1. Mass per 0.25 mL: $400 \\text{ IU} \\times 0.025 \\; \\mu\\text{g/IU} = 10 \\; \\mu\\text{g}$.
2. Per mL: 10 µg ÷ 0.25 mL = 40 µg/mL.

**Answer:** 10 µg per 0.25 mL = 40 µg/mL. **Interpretation:** the arithmetic is exact proportion; the *only* non-derivable input is the 0.025 µg/IU convention itself — which is precisely the value your reference source must confirm (and which differs for other vitamins and forms). The two-part habit — convention lookup + exact proportion — is the IU method in miniature.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `IU labels surround the vitamin aisle and the diabetes shelf. Counselling a patient switching vitamin D products, checking that a prenatal supplement's IU declarations are internally consistent, or reading an insulin strength all rest on knowing what the IU *is*: a standardised activity convention — comparable across products of the same substance, meaningless to convert across substances. The verify-flag discipline of this lesson (cite the current standard, name the molecular form) is exactly how professional references handle it.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why can there be no universal conversion factor between IU and mg?
2. Vitamin A has different mass equivalences for different molecular forms (retinol vs beta-carotene). What does that tell you about what the IU actually standardises?
3. A supplement is labelled 800 IU vitamin D. Using the flagged convention (0.025 µg/IU), compute the cholecalciferol mass — and state explicitly which part of your working is a convention and which is proportion.
4. Why might a standardization body revise an IU equivalence, and what must happen to product labels when it does?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- IU = activity of a defined amount of the WHO International Standard for that substance.
- Mass-per-IU is a substance- and form-specific convention (lookup + cite), never a derivable conversion.
- Within one substance: pure proportion — 400 IU = 2 × 200 IU regardless of the mass equivalent.
- Flagged illustrative equivalences (vit D, A, E, insulin) exist to teach the method; cite the current standard in real work.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 5 — Units/mL and Related Expressions (Tier B)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-5',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — Units/mL and Related Expressions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Products declare activity per container or per volume, exactly as mass-labelled products do — the dialects of this lesson are the activity cousins of pct-9's concentration expressions:

- **units/mL** — activity concentration: units of activity per millilitre of product. The insulin designations are definitional: **U-100 means 100 units per mL**, U-40 means 40 units per mL — the number after "U" *is* the units/mL declaration.
- **units per container** — the total activity in a vial, ampoule, or pen ("heparin 5,000 units" on a vial of stated fill volume).
- **units per dosage unit** — tablets or capsules declared in units (common for some enzymes and vitamin products).

Converting between them needs only the fill volume or the dosage-unit count — pure proportion, no conventions:

$$
\\text{total units} = \\text{units/mL} \\times V \\text{(mL)} \\qquad \\text{units/mL} = \\frac{\\text{total units}}{V}
$$

The safety-critical reading skill: **units/mL is not interchangeable across products or strengths.** A U-100 and a U-40 insulin deliver different volumes for the same dose; drawing either with the wrong matched syringe is a classic, dangerous error — the educational point being that the units/mL declaration and the dosing device must always correspond. The dose-volume arithmetic itself is ordinary: dose (units) ÷ strength (units/mL) = volume (mL), units cancelling exactly as mg ÷ (mg/mL) did in pct-9.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- units/mL = activity concentration — the activity cousin of mg/mL.
- U-100 = 100 units/mL, U-40 = 40 units/mL: definitional, not a conversion.
- total units = units/mL × volume; volume for a dose = dose ÷ units/mL.
- Units/mL differs across products/strengths — declaration and dosing device must match.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{total units} = \\text{units/mL} \\times V \\text{(mL)} \\qquad V \\text{(mL for dose)} = \\frac{\\text{dose (units)}}{\\text{units/mL}}
$$

$$
\\text{units per container} = \\text{units/mL} \\times \\text{fill volume (mL)}
$$

All forms are dimensionally self-checking: units/mL × mL = units; units ÷ (units/mL) = mL.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — volume for a dose (definitional strength).**

**Given:** insulin U-100; dose 12 units. **Find:** the volume.

1. Definition: U-100 = 100 units/mL.
2. Formula: $V = \\dfrac{12 \\text{ units}}{100 \\text{ units/mL}}$.
3. Calculate: 12 ÷ 100 = 0.12.

**Answer:** 0.12 mL. **Interpretation:** units ÷ (units/mL) cancels to mL, exactly as the mg/mL arithmetic did in the concentration block. (U-100 insulins are dispensed with matching 100-calibrated devices; the calculation here teaches the arithmetic, the pairing habit carries the safety.)

**Example 2 — container activity.**

**Given:** a vial contains 5 mL at 1,000 units/mL. **Find:** total activity and the volume delivering 5,000 units.

1. Total: 1,000 units/mL × 5 mL = 5,000 units.
2. Volume: 5,000 units ÷ 1,000 units/mL = 5 mL — the whole vial, as it must be.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every insulin pen (U-100), every heparin vial, and every units-declared syringe in the dispensary runs on this lesson. Two professional reflexes come from it: always read the units/mL declaration *before* any volume statement, and always check that a units-dose and the product's strength speak the same dialect before arithmetic begins. The U-40 vs U-100 mismatch is the textbook demonstration of why both reflexes exist.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is "U-40 = 40 units/mL" a definition rather than a conversion? What would make it a conversion?
2. A product is 250 units/mL. What volume delivers 1,000 units? Show the unit cancellation.
3. A vial holds 10 mL at 5,000 units/mL. State its total activity, and the volume delivering 12,500 units.
4. What pairing must always be checked between an insulin product and its administration device, and why?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- units/mL is the activity concentration; "U-100" literally means 100 units/mL (definition).
- total = strength × volume; volume = dose ÷ strength — units cancel like mg/mL arithmetic.
- Container and dosage-unit declarations convert to units/mL by pure proportion (fill volume, unit count).
- Declaration-device pairing is the standing safety check.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 6 — Calculations Involving Potency (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-6',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — Calculations Involving Potency',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Bring the block's tools together:

- the potency identity from the Potency lesson: units = mass × potency, and its rearrangements;
- the dilution law from pct-9-8: $c_1 V_1 = c_2 V_2$ — here as an **activity balance** (units conserved on dilution);
- the pipeline habit from the calculation lessons: given → formula → substitute with units → compute → check.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Potency calculations are the working core of this block, and they all run on one identity applied in whatever direction the problem demands:

$$
\\text{units} = \\text{mass (mg)} \\times \\text{potency (units/mg)}
$$

Three directions dominate practice. **Mass → units** (batch work): a known mass of material of known potency contains a computable total activity. **Units → mass** (formulation): a required activity, divided by potency, gives the mass to weigh. **Activity balance on dilution**: diluting changes the units/mL but never the total units — so $\\text{units/mL}_1 \\times V_1 = \\text{units/mL}_2 \\times V_2$, the same conservation law as $c_1 V_1 = c_2 V_2$, now in activity units.

Two disciplines keep Tier C work honest. First, **use the correct potency**: measured batch potency where available (as the Potency lesson argued), labelled potency otherwise — and say which you used. Second, **run the unit check explicitly**: mg × (units/mg) collapses to units; units ÷ (units/mg) collapses to mg; (units/mL) × mL collapses to units. If the units do not resolve to the target, the arrangement — not the arithmetic — is wrong. Reconstitution problems chain the same identity: dry powder of total activity U is dissolved to volume V, so the resulting concentration is U/V units/mL — the declaration follows from the act of making up to volume, exactly as % w/v did.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- One identity, three directions: units = mass × potency (and both rearrangements).
- Dilution conserves total units: strength₁ × V₁ = strength₂ × V₂ (activity balance).
- Reconstitution: concentration after making up to V = total units ÷ V.
- Unit check every step: mg × units/mg → units; units ÷ units/mg → mg; units/mL × mL → units.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{units} = m \\text{(mg)} \\times P \\text{(units/mg)} \\qquad m \\text{(mg)} = \\frac{\\text{units}}{P} \\qquad P \\text{(units/mg)} = \\frac{\\text{units}}{m \\text{(mg)}}
$$

$$
S_1 V_1 = S_2 V_2 \\quad (S = \\text{units/mL}) \\\\
\\text{units/mL after reconstitution} = \\frac{\\text{total units}}{\\text{final volume (mL)}}
$$

P = potency; the dilution law is a total-activity balance, identical in structure to $c_1V_1 = c_2V_2$.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — mass → total units.**

**Given:** 250 mg of an antibiotic at measured potency 940 units/mg. **Find:** total activity.

1. Formula: units = m × P.
2. Substitute with units: 250 mg × 940 units/mg.
3. Calculate: 250 × 940 = 235,000; units: mg × units/mg = units. ✓

**Answer:** 235,000 units.

**Example 2 — activity balance on dilution.**

**Given:** 5 mL of a 10,000 units/mL solution is diluted to a final volume of 25 mL. **Find:** the new strength.

1. Total units before: 10,000 units/mL × 5 mL = 50,000 units.
2. Balance: total units unchanged by dilution.
3. New strength: 50,000 units ÷ 25 mL = 2,000 units/mL.
4. Cross-check via the law: $10{,}000 \\times 5 = 2{,}000 \\times 25$ = 50,000 ✓.

**Answer:** 2,000 units/mL — a fivefold dilution produced a fivefold weaker strength, as the balance demands.

**Example 3 — units → mass (formulation direction).**

**Given:** a formulation requires 47,000 units of the Example-1 antibiotic (P = 940 units/mg). **Find:** the mass to weigh.

1. Formula: $m = \\dfrac{47{,}000 \\text{ units}}{940 \\text{ units/mg}}$.
2. Calculate: 47,000 ÷ 940 = 50.

**Answer:** exactly 50 mg. **Interpretation:** the three examples are one identity read in three directions — batch analysis, dilution, and formulation. The unit check is the safety rail on each.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `These are the actual arithmetic tasks behind unit-labelled pharmacy stock: confirming how much activity a delivered vial contains, preparing a weaker activity strength from a stock, and converting a required activity into a weighable mass at compounding. The activity balance is the same conservation reasoning used for every dilution in pct-9 — only the dialect has changed.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. 120 mg of a substance at 850 units/mg carries what total activity? Show the unit collapse.
2. 4 mL of an 8,000 units/mL solution is diluted to 32 mL. What is the new strength, and which conservation law are you using?
3. A formulation needs 63,000 units of a substance whose potency is 1,050 units/mg. What mass is weighed?
4. A vial contains 100,000 units of dry powder, reconstituted to 4 mL. What is the resulting units/mL — and which step of the working mirrors "made up to volume" in the % w/v lesson?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- One identity in three directions: units = m × P; m = units/P; P = units/m.
- Dilution: S₁V₁ = S₂V₂ — total units conserved.
- Reconstitution to V: strength = total units ÷ V (the "made up to volume" principle, in activity dialect).
- Unit check at every substitution: the arrangement is verified by the units resolving.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  // CHILD 7 — Converting Between Potency Expressions (Tier C)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-11-7',
    courseId: 'pct-201',
    topicId: 'pct-4',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Potency and Units of Activity — Converting Between Potency Expressions',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This capstone assembles the block plus one habit from pct-9-10:

- the potency identity (units = m × P) and the activity balance (S₁V₁ = S₂V₂);
- the **missing-data impossibility rule**: a conversion that needs a factor nobody supplied must be named as impossible, never guessed.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `Potency expressions convert by returning to a **canonical activity ratio** — units per mg (or units per mL) — and re-expressing both sides in the target units. The bridges and their triggers:

- **units/mg ↔ units/g** — needs nothing: ×1,000 or ÷1,000 (milligram to gram ladder).
- **units/mL ↔ units/L** — needs nothing: ×1,000 or ÷1,000.
- **units per container ↔ units/mL** — needs the **fill volume**: total ÷ V.
- **mass ↔ units** — needs the **potency P (units/mg)**: the substance-specific conversion key.
- **units dose ↔ volume** — needs the **units/mL declaration**: dose ÷ strength.

The parallel with pct-9-10 is exact and worth naming: there, mass ↔ moles needed the molar mass, and % w/w ↔ % w/v needed density; here, mass ↔ units needs potency, and container ↔ concentration needs volume. In both blocks the professional skill is recognising **which bridge each conversion demands** — and therefore when the data in hand are insufficient. Converting a mass to units *without* a potency value is not a hard calculation; it is an impossible one, and saying so precisely is part of competence.

Magnitude sanity completes the defence: activity numbers scale with mass through P, so a result that moves in the wrong direction relative to its input (a smaller mass yielding more units at the same P) signals an inverted arrangement — caught by inspection before any arithmetic is trusted.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Canonical ratio first (units/mg or units/mL), then re-express both sides.
- Ladder bridges need nothing (×1,000); container ↔ concentration needs volume; mass ↔ units needs P; dose ↔ volume needs units/mL.
- The pct-9-10 impossibility rule recurs: no potency given ⇒ mass ↔ units conversion is impossible — state it.
- Direction check: at fixed P, units scale with mass; at fixed total units, strength scales inversely with volume.`,
      },
      {
        kind: 'FORMULAS',
        body: `$$
\\text{units/g} = \\text{units/mg} \\times 1{,}000 \\qquad \\text{units/mL} = \\frac{\\text{total units}}{V \\text{(mL)}} \\\\
\\text{units} = m \\text{(mg)} \\times P \\text{(units/mg)} \\qquad V \\text{(mL)} = \\frac{\\text{dose (units)}}{\\text{units/mL}}
$$

Every bridge above is a single multiplication or division; the only inputs that can be *missing* are P (potency), V (fill or final volume), or the units/mL declaration — each of which makes its dependent conversion impossible rather than merely hard.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Given:** a vial contains 80 mg of a substance with potency 5,000 units/mg, made up to a final volume of 2 mL. **Express its activity as:** total units, units/mL, units/g, and the volume delivering 50,000 units.

1. **Total units:** 80 mg × 5,000 units/mg = 400,000 units. (mg × units/mg = units ✓)
2. **units/mL:** 400,000 units ÷ 2 mL = 200,000 units/mL.
3. **units/g:** 5,000 units/mg × 1,000 = 5,000,000 units/g.
4. **Volume for a dose:** 50,000 units ÷ 200,000 units/mL = 0.25 mL.

**Answer:** 400,000 units = 200,000 units/mL = 5,000,000 units/g; dose volume 0.25 mL. **Cross-check:** strength × volume returns the total (200,000 × 2 = 400,000 ✓); the dose volume times the strength returns the dose (200,000 × 0.25 = 50,000 ✓).

**Impossibility case:** the same vial's mass (80 mg) is quoted but its potency is *not* — and no units/mL declaration exists. Converting 80 mg to units is then **impossible from the given data**: the required bridge (P) is missing. State the missing factor; do not invent one.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Conversion fluency here is the activity-block counterpart of the concentration block's: checking a certificate of analysis (units/mg) against a product label (units per vial), reconciling a formulation's required activity with a weighable mass, and confirming a dose volume against a vial's declared strength. Each check is one bridge — and each prevents a factor-class error in products where the dose is declared in effect, not mass.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. A substance has potency 2,400 units/mg. Express this in units/g, and state the mass carrying 60,000 units.
2. A 10 mL vial is declared 4,000,000 units in total. What is its units/mL, and what volume delivers 300,000 units?
3. You are given a mass of powder and asked for its total activity, but no potency value appears anywhere on the documentation. What is the correct professional response — and which earlier lesson established the identical rule?
4. For a fixed total activity in a vial, what happens to the units/mL when the reconstitution volume is doubled? Justify with the activity balance.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Canonical ratio (units/mg, units/mL) → target expression; ladder steps are ×1,000.
- Bridges: container ↔ concentration needs V; mass ↔ units needs P; dose ↔ volume needs units/mL.
- Missing bridge ⇒ impossible conversion — name the missing factor (the pct-9-10 rule, in activity dialect).
- Defend every result: direction check, unit collapse, strength × volume = total.`,
      },
    ],
  },
];
