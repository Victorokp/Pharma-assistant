import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-42: Sterile and Ophthalmic Preparations.
 *
 * Batch 45: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–41
 * top-level topic convention) plus its eight children pct-42-1…42-8
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-42 has no surviving Phase-1 tier record; the block is
 * requirements/principles-driven with NO calculation children (the
 * reviewer-fixed boundary: pct-15 retains ALL dose/rate/infusion
 * calculations; pct-13 retains tonicity/particle-counting
 * calculations; PHM 201 owns sterilization microbiology), so all nine
 * lessons are Tier B under the established conceptual-lesson
 * convention. Convention-derived, flagged pending confirmation.
 *
 * Scope discipline (reviewer-fixed): THIS topic owns sterile/ophthalmic
 * REQUIREMENTS, aseptic PRINCIPLES, preparation CONCEPTS, and
 * pharmaceutical quality considerations. Calculation canons deferred:
 * dose/rate/infusion → pct-15 (referenced); tonicity → pct-13
 * (referenced); particle counting → pct-13 (referenced).
 * Sterilization microbiology (organism kill-kinetics, BI/D-value
 * science) → PHM 201 (named-and-deferred). Packaging canon pct-28
 * (applied). Stability science pct-43 (referenced). No invented
 * specifications — compendial items named as "stated" items.
 */
export const pct201SterileLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-42',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'topic',
    title: 'Sterile and Ophthalmic Preparations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Sterile preparations cross the body's defences — injections, infusions, eye drops — where a single surviving microbe or a stray particle can do what no oral form could. This block is the REQUIREMENTS side: what sterile products must satisfy, the aseptic principles that try to deliver them, and the preparation concepts behind the cleanroom door.\\n\\n**The map.** (1) **Introduction** — the form class and why sterility is absolute (42-1). (2) **Parenteral preparations** — the injection family (42-2). (3) **Ophthalmic preparations** — the eye's special demands (42-3). (4) **Requirements** — the checklist: sterility, pyrogens, particles, tonicity, pH (42-4). (5) **Basic aseptic principles** — the practice philosophy (42-5). (6) **Routes of parenteral administration** — the access map (42-6). (7) **Basic sterility considerations** — methods named and bounded (42-7). (8) **Packaging and storage** — the container as product (42-8).\\n\\n**Boundaries policed (reviewer-fixed).** ALL dose/rate/infusion calculations are pct-15's canon (referenced); tonicity and particle-counting calculations are pct-13's (referenced); sterilization MICROBIOLOGY is PHM 201's (named-and-deferred — this block names methods, never teaches kill-kinetics); stability science pct-43 (referenced); packaging canon pct-28 (applied).\\n\\n**Standing discipline**: compendial items named as "stated" items; no invented specifications; no procedure instructions that would substitute for trained, validated practice — this is a concepts block.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sterile forms cross defences — sterility, pyrogens, particles, tonicity are absolute-class demands.\\n- Map: intro → parenteral → ophthalmic → requirements → aseptic principles → routes → sterility methods (bounded) → packaging.\\n- Calculations: pct-15 owns dose/rate/infusion; pct-13 owns tonicity/particle counting.\\n- Sterilization microbiology is PHM 201's — methods named only.\\n- Concepts block: no invented specs, no substitute for validated practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is sterility an absolute-class demand for this family?\\n2. Recite the map and the lesson owning each station.\\n3. State the three deferred canons and what each retains.\\n4. What does "concepts block" mean operationally?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Past the skin, no second chances: sterility, particles, pyrogens — the requirements are absolutes. This block is the checklist and the philosophy; the math and microbiology live next door.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-42', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-42-1',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Introduction to Sterile Dosage Forms',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Sterile dosage forms** are products required to be free of viable microorganisms — and, for injections, free of pyrogens and visible particles too. The family: injections/infusions, ophthalmic drops/ointments, irrigation fluids, and the named speciality classes.\\n\\n**Why the demands are absolute-class**: parenteral routes bypass the body's three great barriers (skin, gastric acid, gut flora) — there is NO host defence between the product and the bloodstream (or the eye's interior); a microbial survivor is an infection; a pyrogen is a fever event; a particle is an embolism risk. The oral form's contamination is dilution and defence — the sterile form's contamination is inoculation.\\n\\n**The vocabulary** (the class terms): **sterile** (no viable organisms — the state), **pyrogen-free/endotoxin-controlled** (the fever-molecule demand — the LPS concept named, the science deferred to PHM 201), **particulate-controlled** (the particle demand), **aseptic** (the process of maintaining sterility — 42-5's philosophy).\\n\\n**The form classes** (named): small-volume injections (SVP), large-volume parenterals (LVP/infusions), ophthalmic preparations, irrigation/dialysis-class fluids, implants/pellets (the 35-2 echo at sterile register), and powders for reconstitution (the 38-1 pattern at sterile register — the two-life design).\\n\\n**The conceptual spine**: sterility is a STATE designed into the product by validated PROCESS — the state cannot be inspected in afterwards with confidence; this block's lessons are the state's requirements and the process's philosophy.\\n\\n**The boundary note**: what sterilisation DOES to microbes — kill-kinetics, D-values, biological indicators — is PHM 201's canon; here: the methods' names and the state they deliver.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Sterile = no viable organisms; injections add pyrogen/endotoxin + particle control.\\n- Absolute-class because skin/gut barriers are bypassed — contamination is inoculation.\\n- Vocabulary: sterile (state), pyrogen-free (LPS named), particulate-controlled, aseptic (process).\\n- Classes: SVP, LVP, ophthalmic, irrigation, implants, powders-for-reconstitution.\\n- Sterility is a state by validated process — not inspectable-in afterwards; kill-kinetics are PHM 201's.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast the contamination consequence in oral vs parenteral forms.\\n2. Define sterile, pyrogen-free, particulate-controlled, aseptic — state vs process.\\n3. Name four form classes and one echo each from earlier blocks.\\n4. Why is "inspect it in later" a fallacy?\\n5. What exactly does PHM 201 own here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `No skin, no acid, no flora — the product meets the bloodstream directly: so sterility is absolute, pyrogens are exiled, particles are counted out. A state, built by process.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-2',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Parenteral Preparations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Parenteral preparations** are sterile products administered by needle/cannula (par-ENTER-al — beside the gut): the injection family, named and characterised.\\n\\n**The volume classes**: **small-volume injections (SVP)** — ampoules/vials, single-dose bolus therapy; **large-volume parenterals (LVP)** — the infusion bags/bottles (the continuous-therapy vehicles; the infusion ARITHMETIC is pct-15's canon, referenced); **powders for reconstitution** (the stability design — dry until use; the BUD echo pct-43-10 referenced).\\n\\n**The container classes** (the anatomy): **ampoules** (sealed glass — break-to-open, single use), **vials** (stoppered — single or multi-dose; the multi-dose preservative question named — the preservative duty echoes 37-8's logic at sterile register), **infusion containers** (bags/bottles), **pre-filled syringes/cartridges** (the modern dose-ready format).\\n\\n**The vehicle demands** (the requirement family previewed from 42-4): water-for-injection as the default vehicle (the compendial grade named), co-solvents/oils for special solubility cases (named, bounded), the tonicity/pH requirements — **pct-13's canon owns the tonicity arithmetic** (referenced).\\n\\n**The formulation anatomy**: drug + vehicle + tonicity adjusters (pct-13 referenced) + buffers (pct-13's canon named) + preservatives ONLY where multi-dose (the design honesty) + antioxidants/stabilisers where the drug demands (pct-43 echoes).\\n\\n**The admixture boundary**: mixing drugs into infusions at the bench — pct-15-7's Parenteral Admixtures lesson owns the calculation/compatibility canon (referenced; the compatibility CONCEPT is pct-15-9's).\\n\\n**The spine**: the injection family is the sterile state delivered in glass/plastic — the vehicle demands are the state's requirements wearing formulation clothes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Parenteral = beside the gut: SVP, LVP, powders-for-reconstitution (the two-life design).\\n- Containers: ampoule (break-to-open), vial (multi-dose preservative question), infusion bags, pre-filled syringes.\\n- Vehicle: water-for-injection named; tonicity/pH arithmetic is pct-13's (referenced).\\n- Preservatives only multi-dose; stabilisers per drug (pct-43 echoes).\\n- Admixture calculation/compatibility canon is pct-15-7/15-9's — referenced.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast SVP and LVP with one use each.\\n2. Why do ampoules need no preservative and vials might?\\n3. Which canon owns infusion arithmetic, and which owns tonicity arithmetic?\\n4. Name the container classes and one signature property each.\\n5. What does the two-life design mean for reconstitution powders?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Ampoule to bag: the injection family is sterile water given purpose. Tonicity and rates are next door's arithmetic; the state — sterile, particle-free, pyrogen-free — is this block's law.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-3',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Ophthalmic Preparations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Ophthalmic preparations** serve the eye — drops, ointments, and the named gel/insert classes. The eye is the most demanding application site in pharmacy: sterile ABSOLUTELY, but also non-irritating, isosmotic, pH-buffered, and particle-free.\\n\\n**The demands ladder** (each absolute-class for its reason):\\n\\n*Sterility* — the eye's defences (lids, tears) are limited and infection risks sight itself; single-dose presentation preferred where feasible (the contamination-after-opening honesty — the preservative debate: preserved multi-dose bottles vs single-use units, named as the design trade).\\n\\n*Isosmoticity* — tears are the reference osmotic environment; ophthalmic products are adjusted to be comfortable (the tonicity ARITHMETIC is pct-13's canon — referenced; the requirement is stated here).\\n\\n*pH buffering* — tears sit near the neutral-slightly-alkaline range (stated as the physiological reference); products buffer to comfort AND drug stability (the two-way negotiation — pct-13's buffer canon named).\\n\\n*Particle control* — no undissolved particles may scratch/irritate: solutions are filtered-polished; suspensions are size-engineered (pct-33's canon referenced; the particle-COUNTING arithmetic is pct-13's — referenced).\\n\\n*Preservation* — multi-dose systems need the preserved-water-phase discipline (37-8's echo; the ophthalmic preservative tolerability honesty named).\\n\\n**The dosage forms** (named): solutions (drops — the default), suspensions (insoluble drugs — the pct-38-1 logic at sterile register), ointments (the pct-40-1 vehicle at sterile register — residence-time advantage at night), gels (the pct-40-3 logic), inserts/ocular systems (named-and-bounded).\\n\\n**The counselling duties** (the dispensing loop): wash hands, no tip-touching (the contamination crime), one-eye hygiene where one eye is infected (the cross-infection teaching), the wait-between-multiple-drops discipline, and discard-on-schedule after opening (the BUD echo — pct-43-10 referenced).\\n\\n**The spine**: the eye forgives nothing — sterile, isosmotic, buffered, particle-free, and taught properly.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Eye = the most demanding site: sterile + isosmotic + buffered + particle-free.\\n- Preserved multi-dose vs single-use: the named design trade (after-opening honesty).\\n- Tonicity/particle-counting arithmetic is pct-13's (referenced); requirements stated here.\\n- Forms: drops, suspensions, ointments (sterile 40-1), gels (sterile 40-3), inserts (bounded).\\n- Counselling: no tip-touch, one-eye hygiene, spacing between drops, discard on schedule.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the four demands and the reason for each.\\n2. State the multi-dose/single-use trade.\\n3. Which two pct-13 canons are referenced and what do they own?\\n4. Why do ointments suit night dosing — the residence argument?\\n5. Give the four counselling duties.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sterile, isosmotic, buffered, particle-free: the eye's four commandments. Don't touch the tip, mind the clock between drops, and throw the bottle away on time.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-4',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Requirements for Sterile Products',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **requirements** lesson — the checklist every sterile product must satisfy; each requirement stated with its reason; the arithmetic and the microbiology deferred to their canon-owners.\\n\\n**Sterility** — the state (42-1's definition), delivered by validated sterilisation or aseptic assembly (42-5/42-7's lessons; the method science PHM 201's).\\n\\n**Pyrogen freedom / endotoxin control** — the fever-molecule demand: pyrogens (bacterial-endotoxin class — the LPS concept named) survive boiling that kills organisms, so water-for-injection is DISTILLED/reverse-osmosis-class produced and containers are depyrogenated (the two-step honesty: sterilise the product, DEPYROGENATE the container); the microbiology is PHM 201's (referenced).\\n\\n**Particulate control** — visible and sub-visible particles limited (stated as compendial-class requirements): filtered vehicles, clean assemblies; the counting ARITHMETIC is pct-13's (referenced).\\n\\n**Isosmoticity/tonicity** — blood and tears set the reference; products adjusted to match or deliberately-tolerated ranges — the ARITHMETIC is pct-13's (referenced; the requirement is this lesson's).\\n\\n**pH control** — physiological comfort + drug stability (the two-way negotiation; pct-13's buffer canon named).\\n\\n**Sterility of the assembly environment** — the cleanroom/aseptic philosophy (42-5).\\n\\n**Container-closure integrity** — the pack must MAINTAIN the state (42-8's lesson; the pct-28 canon applied).\\n\\n**Labelling and traceability** — batch/expiry and the sterile-form accents (pct-28-6/7 applied; "single-dose discard" honesty named).\\n\\n**The spine**: the requirements form a chain — make it sterile, keep it sterile, and make it physiologically welcome; each link has an owner, and none is optional.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The chain: sterility → pyrogen/endotoxin control → particulate control → isosmoticity → pH → environment → integrity → labelling.\\n- Pyrogens survive boiling — the two-step honesty (sterilise product, depyrogenate container).\\n- Tonicity + particle-counting arithmetic: pct-13's (referenced).\\n- Environment: cleanroom/aseptic philosophy (42-5); integrity: the pack maintains the state (42-8).\\n- Each requirement has an owner; none optional.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Recite the eight-link chain in order.\\n2. Why does sterilising the product not depyrogenate the container?\\n3. Which two requirements defer their arithmetic to pct-13?\\n4. What does container-closure integrity protect?\\n5. Name the owner of each: kill-kinetics, tonicity math, rate math.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sterile, pyrogen-free, particle-free, isosmotic, buffered, made in a clean room, sealed to stay that way, labelled to prove it: the chain has no weak link — because the bloodstream has no defence.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-5',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Basic Aseptic Principles',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Asepsis** is the philosophy of never introducing contamination — distinct from sterilisation (destroying what is there): sterile PRODUCTS are made by terminal sterilisation OR aseptic assembly; the principles here are the assembly philosophy.\\n\\n**The conceptual hierarchy** (the cleanest-to-crudest protection):\\n\\n*Source elimination* — remove the microbe's highway: filtered air (HEPA-class filtration named), positive-pressure cleanrooms (air flows OUT through doorways, not in), restricted personnel (the gowning concept named).\\n\\n*Barrier isolation* — the operator behind physical barriers: isolators/glove-boxes (the modern philosophy: PEOPLE are the biggest contaminant source — the honesty that drives the field).\\n\\n*Technique* — the classical discipline: **first-air** (never interrupt the HEPA stream between filter and product), **no direct contact** (sterile tools only), **minimal movement** (turbulence is contamination transport), clean-to-dirty workflow (the directional discipline).\\n\\n**The Laminar-Airflow-System workbench** (the named classic: the LAF cabinet — HEPA-filtered air sweeping the work zone; the first-air principle operationalised; the validation concept named — an LAF cabinet that was never certified is a belief, not a barrier).\\n\\n**The pharmaceutical-concept honesty** (this is a concepts block): the VALIDATED, regulated practice (qualification, media-fills, gowning certification) is professional canon beyond 200L scope — named so the student knows the mountain exists; the principles here are the mountain's shape.\\n\\n**The failure-mode framing** (why technique rules exist): every rule defeats a named failure — interrupted first-air lets airborne fallout land; direct contact delivers skin flora; fast motion stirs settled dust; dirty-to-clean flow seeds the zone.\\n\\n**The spine**: sterility is a chain of behaviours — air, barriers, technique — and the weakest behaviour sets the product's true sterility.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Asepsis ≠ sterilisation: assembly philosophy vs destruction process.\\n- Hierarchy: source elimination (HEPA/positive pressure/restricted personnel) → barrier isolation (isolators) → technique (first-air, no contact, minimal motion, clean-to-dirty).\\n- LAF cabinet named; unvalidated = belief, not barrier.\\n- People are the biggest source — the driving honesty.\\n- Every technique rule defeats a named failure mode.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast asepsis and sterilisation with one example each.\\n2. Recite the three-tier hierarchy with one feature each.\\n3. Define first-air and the failure it prevents.\\n4. Why is personnel control the field's central obsession?\\n5. What is named-and-bounded here vs professional canon?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Clean air, barriers, and humble hands: never interrupt the first air, never touch what must be sterile, never move more than needed. The weakest habit sets the sterility.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-6',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Routes of Parenteral Administration',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Parenteral routes** are the access map: where the needle lands decides speed, duration, and risk — the route is part of the dose.\\n\\n**The route classes** (each with its character):\\n\\n*Intravenous (IV)* — INTO the vein: instantaneous onset, complete bioavailability (no absorption step — pct-30-7's canon referenced), the IRREVERSIBLE route (an error is in the blood: the dose/rate arithmetic discipline is pct-15's canon, referenced); bolus vs infusion modes (pct-15-2/15-3's lessons referenced).\\n\\n*Intramuscular (IM)* — into muscle: rapid-but-not-instant absorption via muscle perfusion; depot oils extend duration (the 39-class vehicle echo named); volume limits stated as the practical register.\\n\\n*Subcutaneous (SC)* — under the skin: slower, sustained (the insulin-class register); small volumes (the practical honesty).\\n\\n*Intradermal (ID)* — into the dermis: slowest, tiny volumes, diagnostic/vaccination register (the test-dose logic).\\n\\n**The named others** (bounded): intrathecal/epidural (the spinal route — the strictest sterility/handling class, named for the boundary), intra-articular, intraperitoneal.\\n\\n**The route-selection logic** (the discipline): speed needed → IV; duration wanted → IM depot/SC; diagnostic → ID; the risk ladder runs the same direction (IV highest consequence — the irreversibility honesty).\\n\\n**The boundaries honoured**: ALL rate/dose/dilution calculations are pct-15's (referenced — drops-per-minute, mL/h, admixture compatibility); the administration TECHNIQUE is clinical-practice canon beyond this block (named).\\n\\n**The spine**: route = onset + duration + risk — choose it as part of the dose, because it is one.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- IV: instant, complete (no absorption step), irreversible — the highest-consequence route.\\n- IM: rapid via perfusion, depot oils extend; SC: slow/sustained, small volumes; ID: slowest, diagnostic.\\n- Named others: intrathecal/epidural (strictest class), intra-articular.\\n- Route-selection: speed → IV; duration → depot/SC; risk climbs the same ladder.\\n- Rate/dose math is pct-15's; technique is clinical canon — both named-and-deferred.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Order the four classic routes by onset speed and explain each.\\n2. Why is IV bioavailability complete — which canon?\\n3. What makes IV irreversible, and what discipline follows?\\n4. Which route class carries the strictest sterility boundary?\\n5. State the two deferrals this lesson honours.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Vein means now and forever; muscle means soon; skin means slowly; dermis means just a test. Route is onset, duration, and risk — one decision, three dimensions.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-7',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Basic Sterility Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Sterility methods** — named and bounded: WHAT each achieves and WHERE it fits; the microbiology (kill-kinetics, resistance mechanisms, indicator science) is PHM 201's canon (the reviewer-fixed boundary).\\n\\n**Terminal sterilisation** (sterilise the product in its final container — the preferred logic):\\n\\n*Moist heat (autoclaving)* — steam under pressure: the default for heat-stable aqueous products (the named method; the WHY-it-works science is PHM 201's).\\n\\n*Dry heat* — hot air: for oils/powders/glass; ALSO the depyrogenation method (the two-jobs honesty from 42-4).\\n\\n*Filtration* — sterile filtration through validated membrane filters (the 0.22 µm-class nominal figure, stated as the classic reference): for THERMOLABILE solutions — the product is filter-sterilised THEN aseptically filled (the 42-5 link).\\n\\n*Gas (ethylene oxide-class) and radiation methods* — named for heat/moisture-sensitive equipment/materials (bounded).\\n\\n**Aseptic processing** (no terminal step): components sterilised separately, assembled aseptically (42-5's philosophy) — the higher-risk route (more steps = more chance; the honesty that drives isolator adoption).\\n\\n**The selection logic** (the discipline): terminal sterilisation WHEREVER the product tolerates it; sterile filtration + aseptic fill for heat-labile solutions; the validation concept (a process is sterile because it is PROVEN so — the named principle) belongs to professional canon (bounded).\\n\\n**The environment echo**: water quality (the WFI grade named), container preparation (wash/depyrogenate), and the cleanroom classes (named) — the environment is part of the method.\\n\\n**The spine**: heat it, filter it, or never let it get dirty — and know which choice your product's chemistry allows.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Terminal methods: moist heat (aqueous default), dry heat (oils/glass + depyrogenation), filtration (thermolabile — 0.22 µm-class, stated), gas/radiation (named).\\n- Aseptic processing: separate sterilisation + assembly — higher-risk, more steps.\\n- Selection: terminal wherever tolerated; filter+fill for heat-labile.\\n- Kill-kinetics/indicator science: PHM 201's — named-and-deferred.\\n- Environment (WFI, depyrogenation, cleanroom classes) is part of the method.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the terminal methods and the product class each suits.\\n2. Why does filtration + aseptic fill pair for thermolabile solutions?\\n3. Which method doubles as depyrogenation, and why does it work there?\\n4. Why is aseptic processing the higher-risk route?\\n5. State exactly what PHM 201 owns in this lesson.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Steam it if it can take it, filter it if it cannot, never let it see dirt either way: method follows chemistry, and validation makes the belief a fact.`,
      },
    ],
  },
  {
    nodeId: 'pct-42-8',
    courseId: 'pct-201',
    topicId: 'pct-42',
    nodeType: 'subtopic',
    title: 'Packaging and Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Sterile packaging is not protection of the product — it IS part of the product: the container-closure system maintains the sterile state, delivers the dose, and survives use. The pct-28 canon is applied at sterile register.\\n\\n**The container classes** (42-2's anatomy, packaging register): ampoules (glass — inert, sealed forever, break-to-open), vials (glass/plastic + stopper + seal — the stopper is the integrity question), infusion bags (flexible plastic — the compatibility honesty: drug sorption/leachables named as the material test), pre-filled syringes (the dose-ready unit).\\n\\n**Container-closure integrity** (the central concept): the pack must bar microbes while allowing use — the integrity tests named-and-bounded; a breached seal is a sterile-state loss (the "maintain the state" requirement from 42-4 made physical).\\n\\n**Material honesties**: glass (inert but breakable — the particulate-from-glass honesty), plastics (flexible but sorptive/leachable-capable — the compatibility test named), stoppers (the extractables honesty — the material canon pct-28-3 applied).\\n\\n**Multi-dose vs single-dose** (the design trade from 42-3): single-dose = no preservative, no after-opening risk; multi-dose = preservative demand (37-8's echo) + after-opening discipline (the BUD echo pct-43-10 referenced; the discard-date counselling).\\n\\n**Storage**: per-label temperature (the pct-43-5 echo); protect-from-light for photosensitive contents (pct-28 canon); the single-use discard honesty (once opened/punctured — the clock runs); visual inspection before use (particulate/leak check — the counselling duty).\\n\\n**The counselling loop**: storage instruction, discard-after-opening discipline, the visual check, and the no-sharing rule (the contamination logic patient-facing).\\n\\n**The spine**: the package maintains the state — glass, stopper, seal, and the patient's discipline are all one system holding sterility until the dose.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Container-closure integrity: the pack maintains the state (42-4's requirement made physical).\\n- Classes: ampoule/vial/infusion-bag/pre-filled — each with its material honesty (glass breakable; plastics sorptive; stoppers extractable).\\n- Single vs multi-dose: preservative demand + after-opening BUD discipline (pct-43-10 referenced).\\n- Storage: per-label temperature, light protection, visual check before use.\\n- Counselling: discard clock, no sharing, inspect first.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is sterile packaging "part of the product"?\\n2. Name one material honesty each for glass, plastic, stopper.\\n3. Contrast single- and multi-dose on preservative and discard duties.\\n4. What does the visual check before use look for?\\n5. Which pct-28 and pct-43 canons are applied here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The seal is the state: glass that breaks, plastic that drinks, stoppers that leak truth under testing. Single dose, single clock — inspect, discard, never share.`,
      },
    ],
  },
];
