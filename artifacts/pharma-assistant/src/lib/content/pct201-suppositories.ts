import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-41: Suppositories and Other Rectal/
 * Vaginal Preparations.
 *
 * Batch 44: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–40
 * top-level topic convention) plus its eight children pct-41-1…41-8
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-41 has no surviving Phase-1 tier record; the
 * quantitative child — 41-4 Displacement Value (the canonical
 * displacement-value/mould-fill calculation) — is Tier C under the
 * established calculation-lesson convention; the topic and remaining
 * children are Tier B. Convention-derived, flagged pending
 * confirmation. THE DISPLACEMENT-VALUE CALCULATION IS CANONICALLY
 * HERE per reviewer instruction.
 *
 * Scope discipline: THIS topic owns rectal/vaginal dosage-form design.
 * pct-34-5/pct-34-3 techniques referenced (geometric dilution,
 * levigation for incorporation); pct-32 rheology consumed (base
 * consistency); melting/pouring craft echoes 40-7 (referenced); pH/
 * tonicity strict canon pct-13/pct-42's (referenced); sterility for
 * surgical/compounded specialities named-and-deferred (PHM 201);
 * absorption path pct-30-7 referenced; packaging canon pct-28
 * (applied). Worked values stated illustrative, independently
 * verified.
 */
export const pct201SuppositoriesLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-41',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'topic',
    title: 'Suppositories and Other Rectal/Vaginal Preparations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Suppositories** are bullet/ovoid solids that melt or dissolve at body temperature to release drug in the rectum; **pessaries** are their vaginal cousins; together with enemas and creams they form the rectal/vaginal family — dosage forms for the two portals where local therapy is classical and systemic absorption is a genuine alternative route.\\n\\n**The map.** (1) **Suppositories** — the form itself (41-1). (2) **Pessaries** — the vaginal class (41-2). (3) **Bases** — the melt-at-body-temperature science (41-3). (4) **Displacement value** — the canonical calculation (41-4, Tier C). (5) **Preparation** — moulding craft (41-5). (6) **Packaging** — the fridge-door discipline (41-6). (7) **Storage** — heat's enemy list (41-7). (8) **Basic dosage-form considerations** — administration and patient care (41-8).\\n\\n**Boundaries policed.** Incorporation techniques reference pct-34-3/34-5; base rheology consumes pct-32; melting/pouring craft echoes 40-7; strict pH/tonicity canon is pct-13/pct-42's (referenced); sterility for specialities is named-and-deferred (PHM 201); the absorption path references pct-30-7; packaging canon pct-28 (applied).\\n\\n**Standing discipline**: worked values stated illustrative, independently verified; anatomical/physiological statements standard and bounded.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Family: suppositories (rectal), pessaries (vaginal), enemas/creams — local + systemic portals.\\n- Map: suppositories → pessaries → bases → displacement (41-4, canonical calc) → preparation → packaging → storage → considerations.\\n- Techniques reference pct-34; craft echoes 40-7; strict pH/tonicity pct-13/42's.\\n- Sterility specialities deferred (PHM 201); absorption path pct-30-7 referenced.\\n- The form melts or dissolves at body temperature — the base is the design.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the family members and their portals.\\n2. Recite the map and the lesson owning each station.\\n3. Which canons are referenced vs applied here?\\n4. What defines the family physically — the temperature trigger?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A solid that yields at body temperature: the rectal/vaginal family trades elegance for local precision and a real systemic alternative. Melt science and mould craft follow.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-41', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-41-1',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Suppositories',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Suppositories** are solid, bullet/ovoid/torpedo-shaped units for rectal insertion — sized for the purpose (adult classes commonly ~1–4 g stated as the typical register; paediatric smaller — no invented per-mould standards), designed to melt, soften, or dissolve at body temperature and release drug.\\n\\n**The two purposes**: **local** (haemorrhoidal/laxative/anti-inflammatory-class — the drug works where put) and **systemic** (the rectal route as an absorption portal — the classic rationale: partial avoidance of first-pass metabolism via the lower-rectal venous drainage; the physiology is standard teaching, bounded here, with the honest caveat that drainage varies and total avoidance is NOT guaranteed — pct-30-7's absorption canon referenced for the pathway).\\n\\n**When the route is chosen**: vomiting/unconscious/paediatric patients (the oral route unavailable); drugs destroyed by gastric juice/first-pass (the classic examples taught by class); local rectal disease; the "no needles" systemic backup.\\n\\n**The form's demands**: the base must MELT or DISSOLVE promptly at body temperature (41-3's science); the drug must release INTO the small rectal fluid volume (the release question: melting alone is not release — the partition argument echoes 40-8); insertion depth matters for systemic intent (the lower-rectum placement teaching — the standard counselling point, 41-8's brief).\\n\\n**Advantages**: route bypass where oral fails; local precision; self-administration possible. **Disadvantages**: patient acceptability (the honest cultural tax); storage fragility (heat — 41-7); interrupted/poor absorption variability (the honesty of the route); incomplete insertion losses (the counselling duty).\\n\\n**The spine**: a suppository is a liquid-release design in a solid wrapper — everything follows from the melt and the release.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Solid units for rectal insertion; melt/soften/dissolve at body temperature.\\n- Local (haemorrhoid/laxative-class) vs systemic (lower-rectal drainage partial first-pass bypass — honest caveats).\\n- Chosen when oral fails: vomiting, paediatric, gastric-destroyed drugs.\\n- Release needs melt + partition into limited fluid (40-8 echo); insertion depth counsels (41-8).\\n- Costs: acceptability, heat fragility, absorption variability.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the two purposes with one drug-class example each.\\n2. Why is "avoids first-pass" only PARTLY true — the drainage honesty?\\n3. When is the route chosen — three patient scenarios?\\n4. Why is melting not release — which lesson's argument echoes?\\n5. Name the form's three cost columns.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A bullet that becomes a pool: local therapy or a systemic bypass with honest asterisks. Melt fast, release fully, insert properly — the form's whole contract.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-2',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Pessaries',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Pessaries** are vaginal suppositories — ovoid/ globular (often almond-shaped) units, larger than rectal classes (typical mass register stated as the common class figure), designed to melt/dissolve in vaginal fluid and deliver drug LOCALLY (the systemic intent is rare).\\n\\n**The use classes** (named by class): antifungal (candidiasis — the classic), antibacterial, anti-inflammatory/hormonal local therapy, and supportive/moisturising vehicles — the classes named, no brand inventions.\\n\\n**Formulation differences from rectal suppositories**: *shape/size* (ovoid/globular for vaginal anatomy vs bullet for rectal); *base selection tilts water-soluble* (the vaginal fluid volume is small; a PEG-class water-soluble base dissolves rather than melts-pools — the leakage-honesty trade: melting bases pool and leak; dissolving bases release with less mess but slower — 41-3's trade made vaginal); *pH consideration* (the acidic vaginal environment — the formulation respects/restores it; strict pH canon pct-13/pct-42's, referenced); *hygiene demands* (application aids — the applicator canon).\\n\\n**Companion vaginal forms** (named for the family): vaginal tablets, creams/gels (the 40-2/40-3 vehicles at vaginal register), vaginal rings (the sustained-release device class, named).\\n\\n**The counselling duties** (41-8's brief, vaginal register): insertion depth (the standard teaching), the applicator discipline, hygiene, leak-management (the pad honesty), course completion (the antifungal-class compliance duty).\\n\\n**The spine**: pessaries are suppositories with a different anatomy, a different fluid reality, and a water-soluble tilt — local therapy first, always.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Vaginal suppositories: ovoid/globular, larger register, LOCAL intent.\\n- Use classes: antifungal/antibacterial/anti-inflammatory/supportive.\\n- Base tilt: water-soluble (dissolve) vs melting (leak trade) — 41-3's trade vaginal.\\n- pH respected (strict canon pct-13/42 referenced); applicator hygiene canon.\\n- Companion forms: vaginal tablets/creams/rings (named).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast pessary and rectal-suppository anatomy/intent.\\n2. Why does base choice tilt water-soluble here — the leak/dissolve trade?\\n3. Name three use classes and one companion form.\\n4. Which pH canon is referenced and why is vaginal pH special?\\n5. Give three counselling duties in the vaginal register.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A pessary is a suppository reimagined for a different room: ovoid, local, water-friendly, applicator-assisted. Dissolve cleanly, respect the pH, finish the course.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-3',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Bases',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **base** is the suppository's engine — it must be solid at room temperature and release the drug at body temperature. Two families, one physics.\\n\\n**Fatty (oleaginous) bases** — the melt family: **theobroma oil (cocoa butter)**, the classic — melts just below body temperature (its ~34–35 °C melting register is the canonical teaching figure), BUT polymorphic (the crystal-form honesty: melted-and-rapidly-cooled cocoa butter sets in a lower-melting form — the melt-and-overheat discipline named as the craft rule; the pct-29 polymorph canon referenced); semi-synthetic hard fats (the modern defaults — hydrogenated vegetable-oil triglyceride classes: polymorph-robust, blanching-tested, narrower melting windows — the "Witepsol/Suppocire-class" families named by class). Melting is the release mechanism — melt-pool, drug partitions out (40-8's argument, rectal register).\\n\\n**Water-soluble/miscible bases** — the dissolve family: **PEG/macrogol classes** (blends tuned for a dissolution profile), plus gelatin-glycerin mass (the soft-elastic tradition, named). No melting needed — the base dissolves in the available fluid; slower but leak-free (the 41-2 trade from the rectal side too — for diarrhoea-prone patients the dissolving base is the honest choice).\\n\\n**Base selection criteria** (the checklist): melting/dissolution window vs body temperature; drug release logic (partition vs dissolution); stability of the drug in the base (the water-vs-anhydrous honesty); displacement behaviour (41-4's arithmetic depends on the base); appearance/finish (the blanching/moulding craft); acceptability (the leakage/mess honesty).\\n\\n**The rheology echo** (pct-32 consumed): base consistency at use temperature sets spreading/mucosal contact; the pour/mould craft echoes 40-7's fusion discipline.\\n\\n**The spine**: melt family for classic release, dissolve family for cleanliness and special patients — and every base choice rewrites the 41-4 arithmetic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fatty bases (theobroma ~34–35 °C; semi-synthetic hard fats modern default) melt to release; polymorphism honesty for cocoa butter.\\n- Water-soluble bases (PEG classes; gelatin-glycerin named) dissolve to release — slower, leak-free.\\n- Selection: melt window, release logic, drug stability, displacement, finish, acceptability.\\n- Release = partition-from-pool (40-8 echo) or dissolution; diarrhoea patient → dissolving base.\\n- Rheology pct-32 consumed; pour craft echoes 40-7.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the two families with their release mechanisms.\\n2. What is cocoa butter's polymorph problem and the craft rule?\\n3. Why are semi-synthetic hard fats the modern default — three reasons?\\n4. Which patients prefer dissolving bases, and why?\\n5. How does base choice rewrite the 41-4 arithmetic?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Cocoa butter melts below body heat (mind its crystal moods); PEG dissolves instead. Pick the engine, and the release — and the arithmetic — follow.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-4',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Displacement Value',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Displacement value (DV)** is the block's canonical calculation: when a drug is added to a mould-filling base, the drug DISPLACES its own volume of base — the mould holds VOLUME, the formula wants MASS, and DV converts between them.\\n\\n**The concept** (the A-level bridge in density language): each gram of drug occupies 1/DV grams-of-base worth of mould volume. **DV = the number of grams of drug that displace one gram of base** — equivalently, the ratio of the drug's density to the base's density: a drug denser than the base (DV > 1) displaces LESS base per gram; a light drug (DV < 1 — some oils) displaces MORE.\\n\\n**Determining DV** (the lab method, named): prepare moulds of base alone (each mould = m grams of base) and moulds with a known drug mass x added: the base displaced per gram of drug gives DV — the standard determination stated; DV values are published per drug-per-base pair (stated as published values — never invented).\\n\\n**The working formula** (this lesson's Tier C core):\\n\\n$$\\n\\text{base required} = \\text{total mould base} - \\frac{\\text{total drug mass}}{DV}\\n$$\\n\\n(total mould base = mould capacity × number of moulds). And the determination form: DV = (base displaced) / (drug added) computed from the mould experiment.\\n\\n**The honest limits**: DV applies when drug mass is significant relative to mould capacity (the small-dose shortcut named: if the drug's total mass is negligible, many recipes ignore displacement — stated as the pragmatic convention, with the teaching that formal DV arithmetic is the professional habit); DV is base-specific (a DV in cocoa butter is not the DV in PEG — the pair rule).\\n\\n**Boundary honoured**: the calculation is canonical HERE; pct-22's ratio/arithmetic canon supplies general technique (referenced).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Displacement value (determination)**\\n\\n$$\\nDV = \\frac{\\text{base displaced (g)}}{\\text{drug added (g)}}\\n$$\\n\\n**Base required for a batch**\\n\\n$$\\n\\text{base} = (C \\times N) - \\frac{M_{drug}}{DV}\\n$$\\n\\nC = mould capacity (g of base), N = number of moulds, M(drug) = total drug mass, DV = displacement value.\\n\\n**Small-dose convention (named)**\\n\\n$$\\nM_{drug} \\ll C \\cdot N \\;\\Rightarrow\\; \\text{displacement often negligible (stated convention)}\\n$$`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — read a DV determination.** A mould holds 2.0 g of plain base. Adding 0.6 g of drug to one mould leaves 1.6 g of base needed → base displaced = 0.4 g. **DV = 0.4/0.6 ≈ 0.667** — the drug is LIGHT relative to the base (0.6 g of it displaces 0.6 g base only if DV = 1; it displaced less because... it displaced MORE volume: DV < 1 means each gram displaces MORE than a gram of base). Sanity: DV < 1 ⇔ drug less dense than base ✓.\\n\\n**Example 2 — batch calculation.** 12 moulds × 2.0 g capacity = 24 g total mould base. Drug: 240 mg/suppository × 12 = 2.88 g; published DV = 1.5.\\n\\n$$\\n\\text{base} = 24 - \\frac{2.88}{1.5} = 24 - 1.92 = 22.08\\ \\text{g}\\n$$\\n\\n**≈ 22.1 g of base** for the batch.\\n\\n**Example 3 — DV = 1 sanity.** Drug with DV = 1.0 (same density as base): base = 24 − 2.88 = 21.12 g — displacement equals drug mass; the identity case.\\n\\n**Example 4 — check key.** 20 moulds × 1.0 g, drug 100 mg each, DV 2.0: base = 20 − (2.0/2.0) = **19.0 g** — total drug 2 g displaces 1 g of base ✓.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define DV in grams-of-base language and in density language.\\n2. Mould 2.0 g; +0.8 g drug leaves 1.55 g base — DV? (0.45/0.8 = 0.5625.)\\n3. 15 moulds × 2.0 g, drug 200 mg each, DV 0.8 — base? (30 − 3.75 = 26.25 g.)\\n4. Why is DV base-specific?\\n5. When is displacement negligible, and what is the professional habit regardless?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Every gram of drug shoves its own volume of base out of the mould: DV = grams of drug per gram of base displaced. Batch arithmetic = capacity minus drug-over-DV — and the numbers are always the PAIR's numbers.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-5',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Preparation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Suppository preparation is moulding: melt, disperse, pour, cool, finish — the craft this lesson owns.\\n\\n**The fusion (moulding) method** — the standard route:\\n\\n1. **Calibrate the mould** (the craft's first discipline): fill moulds with base alone, check the capacity mass (the 41-4 arithmetic depends on C — the calibration habit).\\n\\n2. **Melt the base gently** — the lowest workable heat (the cocoa-butter polymorph discipline from 41-3; overheat and the base sets wrong).\\n\\n3. **Incorporate the drug** — solids by levigation-into-a-little-melted-base (pct-34-3's technique referenced) then geometric-style build-up (pct-34-5 referenced); the 41-4 arithmetic decides the base mass.\\n\\n4. **Pour at the right temperature** — before thickening, in one continuous pass (the pour discipline: no seams, no trapped air; the 40-7 echo).\\n\\n5. **Cool** — controlled cooling (the flash-cooling honesty: too-cold fridges set stress and cracks; steady cool air is the craft).\\n\\n6. **Finish** — trim/polish, weigh samples (the capacity/weight check — the QC echo), package (41-6).\\n\\n**The hand-roll and compression routes** (named, bounded): hand-rolling on the slab (the small-scale/urgent route — less elegant), compression-moulding (cold base forced into moulds — for thermolabile/insoluble-drug cases; named as the equipment route).\\n\\n**The failure catalogue** (each names its stage): pitted surfaces (overheated/moist base), cracks (flash cooling), finning (overfill/poor clamp), air holes (careless pour), weight spread (calibration drift) — the 35-8 diagnostic habit applied to moulding.\\n\\n**The spine**: calibrate, melt gently, disperse fully, pour in one pass, cool steadily — moulding is temperature choreography.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fusion route: calibrate → gentle melt → incorporate (levigate/build) → pour in one pass → cool steadily → finish.\\n- Mould calibration is first (41-4's C depends on it).\\n- Cocoa-butter discipline: lowest workable heat (polymorphs).\\n- Alternate routes: hand-roll (small scale), compression-moulding (thermolabile cases) — named.\\n- Failures map to stages: pits, cracks, finning, air holes, weight spread.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the fusion stages and the discipline each carries.\\n2. Why calibrate the mould before any arithmetic?\\n3. What does over-heating cocoa butter do — the polymorph echo?\\n4. Name two alternate routes and their case.\\n5. Map three failures to their stages.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Calibrate, melt low, mix fully, pour once, cool slowly: a suppository is choreography in wax. The mould remembers every mistake — pits, cracks, and all.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-6',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Packaging',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Suppository packaging is the pct-28 canon applied to a product whose shape IS part of the dose — protection of geometry, surface, and temperature all at once.\\n\\n**The unit packaging** (the class standard): each suppository in its own **moulded-plastic/foil cavity** (the blister-style unit pack — shape protected, one-at-a-time dispensing, the "insert ONE" clarity built in); strip packs the alternative (named); the traditional bulk box (the compounding register — with the shape-damage honesty).\\n\\n**Why unit packaging is the form's best practice**: **shape** (a bent/melted-bumped suppository is a dosing problem — the anatomy protects the function); **hygiene** (the insertion route demands it — the contamination logic from 40-9 applied harder); **dosage clarity** (count the units — the paediatric-dose discipline); **moisture/light** barriers per the base/drug (the pct-28-3 material canon applied: foil laminates for the sensitive pairs).\\n\\n**The compounding register**: individually wrapped in foil/waxed film, labelled per unit where counselling demands (the "one nightly" clarity), wide-mouth jars honestly discouraged for the hygiene reason.\\n\\n**The label duties** (pct-28-6/7 applied): identity/strength per unit, batch + expiry, **storage statement** (41-7's brief — the cool/dry/refrigerate-where-stated discipline), route line ("for rectal/vaginal use" — the route-safety clarity), and the quantity (the course-count discipline).\\n\\n**The counselling hooks** (41-8 develops): keep in the pack until use (the hygiene argument), the refrigeration honesty where stated (not all bases need it — read the label), and the "if it melts, re-solidify carefully" truth (the heat-accident protocol: cool WITHOUT stirring, use if intact — the practical rescue named as practice guidance).\\n\\n**The spine**: the cavity pack is a suppository's second mould — it holds the shape, the hygiene, and the dose discipline.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Unit cavity packs (plastic/foil) are the class standard: shape + hygiene + dose clarity.\\n- Strip packs named; bulk boxes carry shape/hygiene honesty (compounding register).\\n- Material per pct-28-3 canon; foil laminates for sensitive pairs.\\n- Label: strength/unit + batch/expiry + storage + route + course count.\\n- Heat-accident protocol named: cool without stirring, use if intact.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give three reasons unit cavity packs win for this form.\\n2. Why is the bulk box honestly discouraged?\\n3. List the label duties with the form's accents.\\n4. State the heat-accident protocol and its limits.\\n5. Which pct-28 canons are applied here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A bent suppository is a dosing problem: cavity packs hold shape, hygiene, and count. Keep it in the pack, keep it cool, and rescue gently if summer wins.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-7',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Suppository storage is the heat-war honesty — the base's melting point IS the product's shelf-life cliff.\\n\\n**The temperature ladder** (the discipline): **cool storage for fatty bases** (the "store in a cool place" statement — the pct-28-9 translation: below the melt window with margin); **refrigeration where stated** (tropical climates/summer — but the condensation honesty: sealed unit packs go in cold, and must be brought to cool-room temperature BEFORE unwrapping — condensation on the product is a hygiene/melting double problem); **PEG/dissolving bases are the heat-tolerant classes** (their melt point is high — the honest advantage named).\\n\\n**The enemies** (each named): **heat** (melting/bulging/sticking — the cavity-pack rescue protocol from 41-6 named), **temperature cycling** (melt-reset cycles coarsen texture and can stress drug dispersion — the 38-8 flocculation-drift echo at suppository register), **humidity** (condensation, wrapper softening), **light/oxygen** (base rancidification where natural fats — the pct-43-8 echo), **time** (polymorph drift in cocoa-butter-class bases — the 41-3 honesty's shelf consequence).\\n\\n**The stability echo** (pct-43's canon referenced): drug-in-base chemical stability follows the water-vs-anhydrous logic (water-soluble bases carry hydrolysis duty for water-sensitive drugs — the 40-6 echo); the BUD discipline for extemporaneous units (pct-43-10 referenced — the pharmacist's date is the honest one).\\n\\n**The counselling duties** (the dispensing loop): storage instruction demonstrated (the fridge honesty per label), the travel honesty (a hot car is a melt event — the plan-ahead advice), and the visual check habit (intact, uniform, un-cracked before use).\\n\\n**The spine**: a suppository is a temperature hostage — cool, steady, sealed, dated; the label's storage line is the form's survival manual.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Fatty bases: cool storage; refrigeration where stated (condensation honesty: warm before unwrapping).\\n- PEG/dissolving bases heat-tolerant — the honest advantage.\\n- Enemies: heat, cycles, humidity, light/oxygen (rancidify), time (polymorph drift).\\n- Water-soluble bases carry hydrolysis duty (40-6 echo); BUD for extemporaneous (pct-43-10).\\n- Counselling: demonstrate storage, plan travel, visual-check habit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Build the temperature ladder by base class.\\n2. Why warm before unwrapping from the fridge — the double problem?\\n3. What do melt-reset cycles do to texture?\\n4. Which base class escapes the heat cliff, and why?\\n5. Name the four counselling duties.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Cocoa butter's cliff is 35 degrees; PEG laughs at summer: store cool, steady, sealed, dated. A hot car writes its own medication error.`,
      },
    ],
  },
  {
    nodeId: 'pct-41-8',
    courseId: 'pct-201',
    topicId: 'pct-41',
    nodeType: 'subtopic',
    title: 'Basic Dosage-Form Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The closing considerations: administration craft, patient care, and the form's honest limits — the considerations that make the dose work.\\n\\n**Administration craft (rectal)**: empty bowel where appropriate (the standard counselling), **insert beyond the sphincter** — the lower-rectum placement teaching for systemic intent (the venous-drainage rationale from 41-1, operationalised), moisten/warm slightly for comfort (the craft honesty), remain lying/resting briefly (the retention duty), and the hygiene sequence (gloves/finger-cots/applicators — the contamination discipline).\\n\\n**Administration craft (vaginal)**: the applicator discipline (fill, insert, deposit, withdraw — the 41-2 craft), bedtime dosing where the class teaches it (retention + leakage management), the pad honesty (the leak plan), and course completion (the antifungal-class compliance argument).\\n\\n**The patient-care considerations**: dignity/privacy (the counselling tone), acceptability (the honest conversation — alternatives exist), the paediatric/geriatric nuances (size classes; caregiver teaching), and the storage-at-home reinforcement (41-7's brief at the patient's shelf).\\n\\n**The form's honest limits** (the synthesis): absorption variability (the route's honesty from 41-1), interruption losses (the retention duty), acceptability taxes, and the mast-production economics — the form is chosen when its advantages PAY, not by habit.\\n\\n**The referral/escalation discipline**: persistent rectal bleeding/pain is not a self-treated suppository problem (the red-flag referral teaching — the pharmacist's boundary stated plainly).\\n\\n**The spine**: the best-formulated suppository fails at the wrong insertion depth or a warm shelf — administration and patient care are half the dosage form.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Rectal craft: bowel prep where apt, beyond-sphincter placement, moisten, rest, hygiene.\\n- Vaginal craft: applicator sequence, bedtime dosing, leak plan, complete the course.\\n- Patient care: dignity, acceptability, size classes, caregiver teaching, home-storage reinforcement.\\n- Honest limits: absorption variability, interruption losses, acceptability, economics.\\n- Red-flag referral: persistent bleeding/pain is beyond self-treatment — the boundary stated.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give the five rectal administration steps with reasons.\\n2. State the applicator sequence and the bedtime rationale.\\n3. Why is placement depth a SYSTEMIC question?\\n4. List the form's four honest limits.\\n5. Name the red-flag boundary and its referral duty.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Beyond the sphincter, past the dignity hurdle, onto a cool shelf: the suppository works when craft and care do. Bleeding and pain are medicine's problem, not ours alone.`,
      },
    ],
  },
];
