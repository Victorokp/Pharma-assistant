import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-36: Capsules.
 *
 * Batch 39: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–35
 * top-level topic convention) plus its seven children pct-36-1…36-7
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-36 has no surviving Phase-1 tier record; the block is
 * technology/formulation-driven with no calculation children, so all
 * eight lessons are Tier B under the established conceptual-lesson
 * convention. Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns capsule technology. pct-3 keeps the
 * general excipient canon (36-3 APPLIES it); pct-33 keeps particle
 * science (consumed as verdicts — flow for filling, 36-4); pct-28 owns
 * packaging canon (36-7 applies); stability SCIENCE is pct-43's canon —
 * gelatin storage/stability is treated as formulation behaviour with
 * pct-43 referenced, never as a stability-programme lesson; PCY 201
 * owns quality-programme interpretation (36-6 keeps test/consideration
 * science). No invented specifications; compendial items named as
 * "stated" items.
 */
export const pct201CapsulesLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-36',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'topic',
    title: 'Capsules',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **capsule** is the tablet's elegant sibling: drug + excipients sealed inside a soluble shell. Where the tablet compresses its contents into one solid, the capsule ENCLOSES them — taste and odour vanish behind the shell, liquids and oily drugs become swallowable, and the shell itself becomes a delivery design element.\\n\\n**The map.** (1) **Hard gelatin capsules** — the two-piece workhorse (36-1). (2) **Soft gelatin capsules** — the one-piece sealed form for liquids (36-2). (3) **Capsule ingredients** — shell and fill anatomy (36-3). (4) **Capsule filling** — the packaging of powder into shells (36-4). (5) **Advantages and disadvantages** — the honest ledger (36-5). (6) **Quality considerations** — what makes a capsule good (36-6). (7) **Packaging and storage** — the gelatin's environment (36-7).\\n\\n**Boundaries policed.** Excipient science is pct-3's (applied, role-by-role); particle/flow science is pct-33's (consumed in 36-4); packaging canon is pct-28's (applied in 36-7); stability SCIENCE is pct-43's (referenced — the gelatin's moisture sensitivity treated as formulation behaviour here); quality-programme interpretation is PCY 201's.\\n\\n**Standing discipline**: no invented specifications; worked values stated illustrative, verified; shell-material science bounded at 200L.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Capsule = drug + excipients inside a soluble shell — enclosed, not compressed.\\n- Map: hard (36-1) → soft (36-2) → ingredients (36-3) → filling (36-4) → ledger (36-5) → quality (36-6) → packaging/storage (36-7).\\n- pct-3 applied; pct-33 consumed; pct-28 applied; pct-43 referenced.\\n- PCY 201 owns quality-programme interpretation.\\n- Gelatin's moisture sensitivity is formulation behaviour — pct-43 owns the science.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast the capsule's enclosure principle with the tablet's compression principle.\\n2. Recite the map and the lesson owning each station.\\n3. Which canons are applied vs consumed vs referenced in this block?\\n4. What does the shell add that a tablet cannot — two delivery-design points?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Tablets compress; capsules conceal. The shell hides taste, swallows oils, and designs release — this block is the art of filling and keeping it.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-36', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-36-1',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Hard Gelatin Capsules',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Hard gelatin capsules** are two-piece systems — a **body** (the longer, narrower cylinder) into which the fill goes, and a **cap** (shorter, wider) that slides over and locks it. Powder, granules, pellets, even small tablets and liquids (with sealing) — the two-piece form is pharmacy's most flexible enclosure.\\n\\n**The shell anatomy**: gelatin + water (the plasticiser that keeps it flexible — the moisture balance is the shell's life) + colourants/opacifiers (titanium dioxide the classic opacifier) + processing aids. The shell is rigid because gelatin gels; it dissolves because gelatin is a protein that hydrates, swells, and dissolves in gastric fluid.\\n\\n**The size system** (the vocabulary every pharmacist needs): capsule sizes run from the largest (000) down through 00, 0, 1, 2, 3, 4, to 5 (smallest) — a counter-intuitive ladder where BIGGER NUMBER = SMALLER capsule. Selection logic: the smallest capsule that holds the dose comfortably with room to close — capacity depends on the fill's density (the pct-33-6 vocabulary consumed).\\n\\n**Locking designs** (named-and-bounded): the modern snap/locking rings (con corto-style locking) prevent separation in handling and shipping — the mechanical answer to the classic "cap pops off" failure.\\n\\n**When the hard capsule is the form of choice**: taste/odour masking (the shell hides what the tablet cannot without coating); substances difficult to compress (oily/liquid actives with sealing; poor-compaction drugs as powders); dose flexibility in compounding (the extemporaneous workhorse); access to pellets/MR fills (the delivery platform).\\n\\n**The moisture honesty**: the shell holds ~13–16% water (stated as the typical band, convention-derived) — too dry and it cracks (brittle), too humid and it softens/sticks (36-7's storage lesson is the shell's life-support manual).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two-piece: body (longer/narrower) + cap (shorter/wider) — locking rings prevent separation.\\n- Shell: gelatin + water (plasticiser) + colourants/opacifiers — dissolves by protein hydration.\\n- Size ladder 000 → 5: BIGGER number = SMALLER capsule; pick smallest that closes comfortably.\\n- Fills: powders, granules, pellets, tablets, (sealed) liquids — the flexible enclosure.\\n- Shell water ~13–16% (typical band): dry → cracks; humid → softens (36-7's brief).`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Describe body/cap anatomy and why locking rings exist.\\n2. Why does the shell dissolve — the gelatin mechanism in one line?\\n3. Order sizes 0, 00, 2 from largest to smallest.\\n4. Name four fill types and the one that requires sealing.\\n5. State the shell-moisture double bind and the failure each direction causes.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Body, cap, click: the two-piece shell that hides, carries, and dissolves. Count down in size as the numbers climb — and never let the shell dry out.`,
      },
    ],
  },
  {
    nodeId: 'pct-36-2',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Soft Gelatin Capsules',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Soft gelatin capsules (softgels)** are one-piece, hermetically sealed shells of gelatin plasticised to genuine softness — manufactured filled-and-sealed in a single continuous process. Where the hard capsule is a container you fill, the softgel is a SEALED DROP you cannot open.\\n\\n**The shell**: gelatin + a plasticiser system (glycerol/sorbitol-class) + water — the plasticiser fraction is what makes it soft (more plasticiser, softer shell). Colourants/opacifiers as needed. The shell is thicker than hard-capsule gelatin and hermetically sealed — no cap to pop.\\n\\n**The fill spectrum** (the softgel's specialty): **oily/lipophilic liquids** (the classic — vitamins A/D/E, oil-based drugs), **hydrophobic drugs dissolved/suspended in lipophilic vehicles** (the bioavailability play: the drug presented pre-dissolved — the pct-29/pct-30 chain applied at formulation scale), **suspensions and pastes** (thixotropic fills — pct-32's vocabulary live), even **semi-solid fills**. Water-soluble fills are largely EXCLUDED (water migrates into the shell — the honesty column).\\n\\n**The process** (named-and-bounded): the rotary-die process — molten gelatin ribbon + metered fill meet between rotating dies: form, fill, seal in one motion; the capsules then dry to equilibrium. The 200L scope is the principle (simultaneous form-fill-seal), not the machine engineering.\\n\\n**Why industry chooses softgels**: liquid drugs that cannot be compressed or dry-filled; taste/odour sealing; the dissolution/bioavailability edge (pre-solubilised drug + readily dissolving shell); tamper evidence by construction (a sealed drop shows intrusion); dose precision (industrial metering).\\n\\n**The costs**: specialised equipment (no extemporaneous softgel — compounding uses hard shells); higher cost; moisture/heat-sensitive shell (36-7 again); fill water-content limits (the exclusion above).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- One-piece, hermetically sealed; gelatin + plasticiser (glycerol/sorbitol) + water.\\n- Fill spectrum: oily/lipophilic liquids, hydrophobic drugs pre-dissolved, suspensions/pastes — water-soluble fills excluded.\\n- Rotary-die process: form-fill-seal in one motion (principle, not machine engineering).\\n- Value: liquid fills, sealing, bioavailability edge (pre-dissolved drug), tamper-evident by construction.\\n- Costs: specialised equipment (no extemporaneous softgels), price, shell sensitivity.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast softgel and hard-capsule shells — the plasticiser's role in each.\\n2. Why does pre-dissolving a hydrophobic drug give a bioavailability edge — which canon does that apply?\\n3. Why are water-soluble fills excluded?\\n4. Describe the rotary-die principle in one sentence.\\n5. Name the softgel's three cost columns.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `A softgel is a sealed drop: oil inside, plasticised gelatin around, form-fill-seal in one turn. Water stays out of the recipe — and out of the fill.`,
      },
    ],
  },
  {
    nodeId: 'pct-36-3',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Capsule Ingredients',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A capsule has TWO formulation spaces — the **shell** and the **fill** — and this lesson assigns the ingredient roles in both, applying the pct-3 excipient canon.\\n\\n**Shell ingredients** (both capsule types): **gelatin** (Type A acid-processed, Type B alkali-processed — the types named for completeness; both dissolve similarly in use) + **water** (the plasticiser — the shell's flexibility budget) + **plasticisers** where softness is designed (glycerol/sorbitol-class — the softgel's defining addition) + **colourants** (identity/branding; the pct-28-6 labelling honesty: colour is information) + **opacifiers** (titanium dioxide — light protection for photosensitive fills, the pct-43-6 echo at shell scale) + **preservatives** (historical; modern shell handling often omits — stated as practice context) + flavour/sweeteners in chewable-class shells (named).\\n\\n**Fill ingredients — powder fills** (the hard-capsule space): **active** + **diluent** (lactose/MCC-class — the pct-34-2 anatomy continues; the diluent must FILL the shell evenly — flow + packing verdicts from pct-33 consumed) + **glidant/lubricant** (colloidal silica / magnesium stearate-class — the flow-for-filling team, 36-4's dependency) + **disintegrant** where the shell's dissolution is not enough (the release switch, pct-29's chain).\\n\\n**Fill ingredients — liquid/softgel fills**: the drug in **lipophilic vehicles** (vegetable oils, medium-chain triglycerides), **suspending systems** (thixotropic — pct-32's canon consumed), **wetting agents** where suspensions are filled (pct-31-3's canon named), antioxidants for oxidation-prone oils (pct-43-8's echo).\\n\\n**The incompatibility discipline**: shell–fill interactions are real — aldehydes/gi borderline materials can crosslink gelatin (the dissolution-slowing hazard, named), water migrates both ways, hygroscopic fills parch or soften the shell. The formulator screens the PAIR, not each side alone.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two formulation spaces: shell (gelatin/water/plasticiser/colour/opacifier) and fill.\\n- Powder fills: active + diluent + glidant/lubricant (+ disintegrant) — pct-34-2 anatomy + pct-33 verdicts.\\n- Liquid fills: lipophilic vehicles, thixotropic suspensions, wetting agents, antioxidants.\\n- Colour is information (pct-28-6); opacifier is light protection (pct-43-6 echo).\\n- Shell–fill incompatibilities: aldehyde crosslinking, water migration, hygroscopic stress — screen the PAIR.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the shell team and each member's job.\\n2. Contrast powder-fill and liquid-fill ingredient logic.\\n3. What does an opacifier protect, and which pct-43 lesson owns the science?\\n4. Explain gelatin crosslinking and its formulation consequence.\\n5. Why must the pair be screened, not each side alone?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Shell and fill, two recipes in one capsule: gelatin keeps the house, the fill carries the promise. Screen them together — water and aldehydes are the traitors.`,
      },
    ],
  },
  {
    nodeId: 'pct-36-4',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Capsule Filling',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Capsule filling** is the packaging of a dose INTO a shell — powder compaction by gravity, not force. The craft and the machines both live on one principle: a capsule's dose is its **fill weight**, set by shell volume × fill density (the pct-33-6 vocabulary consumed; no fixed capacity tables invented — stated-practice only).\\n\\n**The compounding method** (the pharmacist's craft, named-and-taught): **punch method** — calculate the base fill for one capsule, prepare the blend, compress plugs of blend with the capsule body repeatedly until the count is made (the classic extemporaneous technique; pct-34-5's uniformity discipline applies to the blend BEFORE filling).\\n\\n**The industrial methods** (named-and-bounded): **auger/screw filling** (continuous screw delivers powder — weight by time), **volumetric/tamping filling** (pins dip into a powder bed, compress plugs of controlled depth — the dominant modern method: weight controlled by bed density + plug depth), **vacuum filling** (porous vacuum dip draws a plug — the precision alternative). Machine engineering stays bounded; the PRINCIPLE — every method is a way of metering a consistent plug — is the lesson.\\n\\n**The flow dependency** (the pct-33-7 verdict live): every filling method demands a free-flowing blend — poor flow = weight variation (the same crime as tablets, same pct-33 remedy: glidant, granulate, size the blend).\\n\\n**The locking and closing step** (36-1's anatomy, operational): filled bodies meet caps, locking rings engage; **banding/sealing** (a gelatin band around the seam) for liquid fills or tamper evidence — named.\\n\\n**Weight variation discipline**: capsule quality is checked dose-by-dose (individual weights vs stated compendial limits — the 35-9 vocabulary applied; no invented numbers) — filling accuracy IS capsule quality.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dose = shell volume × fill density — metering a consistent plug is the whole game.\\n- Craft: punch method (repeated plugs of blend); blend uniformity first (pct-34-5 discipline).\\n- Industrial: auger (time), tamping/volumetric (bed + depth — dominant), vacuum (precision).\\n- Flow dependency: pct-33-7's verdict — poor flow = weight variation.\\n- Locking + banding/sealing named; individual weights checked vs stated limits.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the dose equation conceptually and the pct-33 lesson each term consumes.\\n2. Describe the punch method and the discipline that must precede it.\\n3. Contrast tamping and auger filling on the metering principle.\\n4. Why does flow matter as much here as in tableting?\\n5. What is banding, and when is it required?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Gravity is the press: meter a plug, lock the cap, band if it's liquid. Tamping rules the factory; the punch method rules the bench — both live on good flow.`,
      },
    ],
  },
  {
    nodeId: 'pct-36-5',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Advantages and Disadvantages',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The honest ledger — when the capsule wins and when it loses against its solid-dosage siblings.\\n\\n**Advantages** (each with its mechanism):\\n\\n*Taste/odour masking without coating* — the shell physically separates drug from tongue (the tablet pays for this with a coat; the capsule includes it).\\n\\n*Liquid and oil delivery as a solid* — softgels make oily drugs swallowable (36-2's specialty).\\n\\n*Formulation flexibility* — poor-compaction drugs need no compression; pellets/MR fills drop in; extemporaneous dosing adjusts (the compounding workhorse).\\n\\n*Rapid release potential* — the shell dissolves fast and the fill is uncompressed (porous, disintegrant-friendly — the pct-29 chain favoured vs a hard compact).\\n\\n*Identity/appearance* — two-piece colour combinations (the 36-3 colour-is-information echo).\\n\\n**Disadvantages** (the honest column):\\n\\n*Gelatin's sensitivities* — moisture swings (crack/soften — 36-1's double bind), temperature, and the animal-origin question (religious/dietary acceptability — the HPMC "veggie" capsule named as the industry answer).\\n\\n*Cost* — shells and filling cost more than tableting per dose at scale.\\n\\n*Filling flow demands* — poor-flow blends are as troublesome as in tableting (36-4's dependency).\\n\\n*Not for very effervescent/very hygroscopic fills* — moisture warfare (the shell loses).\\n\\n*Crosslinking risk* — aldehyde-class incompatibilities slow dissolution (36-3's hazard).\\n\\n*Swallowing* — large capsules challenge the same patients large tablets do.\\n\\n**The habit**: capsule vs tablet is a formulation + patient + economics decision — the ledger above is how the decision is argued.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Wins: taste masking built-in, liquid/oil delivery, no-compression flexibility, fast-release potential, appearance.\\n- Loses: gelatin sensitivities (moisture/temperature/animal-origin — HPMC named), cost, flow demands, hygroscopic/effervescent fills, crosslinking risk, swallowing size.\\n- Fast release: uncompressed fill + dissolving shell favours pct-29's chain.\\n- HPMC capsules: the dietary-acceptability answer (named).\\n- The ledger argues capsule-vs-tablet case by case.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give three advantages with mechanisms a tablet would need extra work to match.\\n2. State the gelatin double bind and its dietary third front.\\n3. Why might a capsule release FASTER than a tablet — two structural reasons?\\n4. Which two fill classes disqualify capsules, and why?\\n5. Name the industry's animal-origin answer.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `The capsule buys masking, flexibility, and liquid delivery; it pays in gelatin's moods, money, and flow discipline. Choose by ledger, not by habit.`,
      },
    ],
  },
  {
    nodeId: 'pct-36-6',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Capsule Quality Considerations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Capsule quality** mirrors the tablet battery (35-9's science) with capsule-specific accents — test science here; quality-programme interpretation stays PCY 201's (the boundary honoured).\\n\\n**Weight/uniformity**: individual capsule weights vs stated compendial limits (36-4's filling verdict formally measured); content uniformity for potent fills — the same two gates as tablets.\\n\\n**Disintegration/dissolution**: the shell must rupture and the fill release — the same two-gate logic (break apart vs drug OUT, 35-9's spine); capsule-specific notes: the shell's dissolution is usually fast, so the FILL (packing, crosslinking, hydrophobicity) governs — a crosslinked shell or over-dense plug slows release (36-3/36-4's hazards measured).\\n\\n**Moisture/brittleness** (capsule-specific): shell water content within its working band — the 36-1 double bind made a QC variable (brittle shells crack in blisters; wet shells stick); moisture analyzers named-and-bounded.\\n\\n**Appearance/defects** (the capsule defect catalogue): dented/twinned shells, telescoping (cap sliding up — the locking failure), leaking softgels (seam integrity), spots/mottling (fill bleed-through), air bubbles in softgel seams — each defect names its process stage (filling, locking, sealing, drying) — the 35-8 diagnostic habit applied.\\n\\n**Identification/colour**: the two-piece colour scheme and printing as identity checks (pct-28-6's canon applied at product scale).\\n\\n**The two-gate habit this lesson installs**: every quality test answers "is the DOSE right?" (weight/content) or "is the RELEASE right?" (disintegration/dissolution, shell integrity) — the same structure as the tablet battery, capsule accents.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Two gates, capsule accents: dose right (weight/content) + release right (disintegration/dissolution).\\n- Fill governs release: plug density, crosslinking, hydrophobicity — not just the shell.\\n- Moisture/brittleness is a capsule-specific QC variable (the 36-1 double bind measured).\\n- Defect catalogue: dents, twinning, telescoping, leaks, bleed-through, air bubbles — each names its stage.\\n- Programme/regulatory interpretation: PCY 201's; test science here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Map the two quality gates onto capsule anatomy.\\n2. Why does the fill often govern release, and which two hazards illustrate?\\n3. What is telescoping and which mechanism failed?\\n4. Why is shell moisture a QC variable — both failure directions?\\n5. State the PCY 201 boundary precisely.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Right dose, right release, sound shell: the capsule's report card echoes the tablet's — plus moisture and seams. Every defect names the stage that slipped.`,
      },
    ],
  },
  {
    nodeId: 'pct-36-7',
    courseId: 'pct-201',
    topicId: 'pct-36',
    nodeType: 'subtopic',
    title: 'Packaging and Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Capsule packaging and storage is the pct-28 canon applied to the most moisture-sensitive shell in the dispensary — the 36-1 double bind (dry cracks, wet softens) becomes the storage brief.\\n\\n**Blister packs** — the dominant defence: forming films (PVC-class) + higher-barrier coatings (PVDC) + **foil-foil for the moisture-critical** (the 35-10 ladder re-applied at capsule sensitivity); blisters also stop twinning/abrasion (the 36-6 defect catalogue's transport section).\\n\\n**Bottles** — HDPE/PP with tight closures; **desiccants** near-mandatory for gelatin (the shell's moisture life-support); the cotton-wool moisture-trap honesty (35-10's echo) applies double for capsules; **child-resistant closures** where required (pct-28's canon).\\n\\n**Temperature discipline** — the stated-practice brief: cool, dry storage; NOT refrigerated (domestic refrigerators are humid — condensation on cooling/warming cycles is the shell's enemy — the mechanism, not an invented number); away from direct heat/sunlight (opacified shells help — 36-3's echo).\\n\\n**The transport honesty**: shipping heat + humidity + vibration combine (the pct-33-7 echo for handling) — barrier packaging + controlled logistics are the answer; the pharmacist's job is the LAST mile: don't leave capsules on a sunny counter, don't move them to a bathroom cabinet.\\n\\n**Label duties** (pct-28-6/7/9 applied): identity/strength, batch+expiry, storage statement ("store in a dry place" — the mechanism instruction pair from pct-28-9's vocabulary), and the counselling hooks: swallow with water upright (the oesophageal-safety echo — named as counselling canon), don't empty shells unless directed (the taste-masking is the point).\\n\\n**The discipline this lesson installs**: for gelatin, packaging is not protection from the world — it is CLIMATE CONTROL for a living shell.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- The storage brief IS the 36-1 double bind: dry cracks, wet softens.\\n- Blisters: PVC → PVDC → foil-foil ladder re-applied at capsule sensitivity.\\n- Bottles: tight closure + desiccant near-mandatory; cotton wool doubly suspect.\\n- Cool, DRY, not refrigerated (condensation mechanism); away from heat/light.\\n- Counselling hooks: water + upright; shells stay closed unless directed.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Translate the 36-1 double bind into two storage rules.\\n2. Rank blister barriers and name who needs the top rung.\\n3. Why is the domestic refrigerator a bad home for capsules?\\n4. Give the two counselling hooks and their mechanisms.\\n5. What does "climate control for a shell" mean operationally?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Gelatin wants one climate: cool, dry, steady. Foil and desiccant guard the journey; the pharmacist guards the last mile — and says "swallow it whole, with water, upright."`,
      },
    ],
  },
];
