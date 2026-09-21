import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-35: Tablets.
 *
 * Batch 38: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7/13–34
 * top-level topic convention) plus its ten children pct-35-1…35-10
 * (plain unprefixed names). Node IDs and titles mirror curriculum.ts
 * exactly; nothing here creates or renames nodes.
 *
 * Tier note: pct-35 has no surviving Phase-1 tier record; the block is
 * technology-driven with no calculation children, so all eleven
 * lessons are Tier B under the established conceptual-lesson
 * convention. Convention-derived, flagged pending confirmation.
 *
 * Scope discipline: THIS topic owns tablet technology. pct-3 keeps the
 * general excipient canon (35-3 APPLIES it, role-by-role); pct-34-5/34-8
 * own compounding granulation technique (35-5/35-6 teach the MANUFACTURING
 * route with parameters — machine canon named-and-bounded); pct-33 owns
 * particle science (consumed as verdicts); pct-28 owns packaging canon
 * (35-10 applies); PCY 201 owns quality-system/regulatory interpretation
 * (35-9 keeps test SCIENCE, defers programme interpretation); stability
 * science pct-43 (referenced). No numeric specs invented — pharmacopeial
 * ranges named as "stated ranges", never as constants.
 */
export const pct201TabletsLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-35',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'topic',
    title: 'Tablets',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `The **tablet** is the world's dominant solid oral dosage form: a compressed unit of drug plus excipients, manufactured by the hundred thousand, swallowed by the billion. This block is its technology — how a powder becomes a die-fill becomes a hard, uniform, dissolving disc.\\n\\n**The map.** (1) **Introduction** — why compression won (35-1). (2) **Types** — the swarm of tablet species and what each is FOR (35-2). (3) **Ingredients** — the excipient team, applied (35-3). (4–6) **The three production routes** — direct compression (35-4), wet granulation (35-5), dry granulation (35-6). (7) **Manufacturing principles** — the press, the die, the cycle (35-7). (8) **Defects** — the classic failure catalogue (35-8). (9) **Quality evaluation** — the test battery (35-9). (10) **Packaging and storage** — the shield and the shelf (35-10).\\n\\n**Boundaries policed.** Excipient SCIENCE is pct-3's canon (applied here role-by-role, not re-derived); compounding-scale granulation is pct-34-8's (the manufacturing route here adds presses and parameters); particle SCIENCE is pct-33's (consumed as verdicts); packaging CANON is pct-28's (applied); quality-programme interpretation is PCY 201's (this block keeps test science); stability science is pct-43's (referenced).\\n\\n**Standing discipline**: worked values stated illustrative, independently verified; pharmacopeial ranges named as "stated ranges", never presented as invented constants.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Tablet = compressed unit dose; the dominant solid oral form.\\n- Map: intro → types → ingredients → 3 routes (DC/wet/dry) → press principles → defects → evaluation → packaging.\\n- Excipient science pct-3 (applied); particle science pct-33 (consumed); packaging pct-28 (applied).\\n- Quality-programme interpretation PCY 201's; test science stays here.\\n- No invented specs — stated ranges only.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Recite the map and the lesson owning each station.\\n2. Which four topics' canons does this block apply or consume, and which does it defer?\\n3. What does 35-3 do with pct-3's canon that pct-3 does not?\\n4. Where does quality-programme interpretation live, and what stays here?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Powder in, promise out: the tablet is pharmacy's industrial flagship. Routes, defects, tests — the technology that turns grams of powder into millions of doses.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-35', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-35-1',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Introduction to Tablets',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Why did compression win? The **introduction lesson** answers with the tablet's advantages — and stays honest about the costs.\\n\\n**Advantages** (the reason for dominance): *unit dose precision* — each tablet a pharmacist-or-factory-weighed dose, not a patient-measured one (the pct-34-1 boundary, industrialised); *mass production economy*; *chemical/microbial stability* (dry, low surface exposure — the pct-43 logic); *portability and patient acceptability*; *identification* (embossing, colour); *modified-release capability* (the delivery platform).\\n\\n**Disadvantages** (the honest column): *compression hazards for some drugs* (shear/heat-sensitive actives); *difficult compression properties* (some drugs refuse to bind — the formulator pays in excipients); *poor bioavailability potential for poorly soluble, poorly wetted drugs* (the pct-29/pct-31 chain applied); *swallowing difficulty* (paediatric/geriatric limits); *taste* (masked by coating — 35-2's canon).\\n\\n**The central physics** (the bridge to 35-4–35-7): tablets are made by COMPRESSION — pressure applied to a powder bed in a die until particles bond into a coherent solid. The formulator's whole art is making a powder that (a) flows into the die uniformly (pct-33-7's verdict consumed), (b) compresses into a strong compact, and (c) dissolves acceptably (pct-29's canon) — three demands in permanent tension.\\n\\n**The anatomy of the event**: die fill → compression (bond formation) → ejection — the cycle whose details are 35-7's lesson; whose failure modes are 35-8's; whose quality verdicts are 35-9's.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Advantages: unit-dose precision, economy, stability, acceptability, ID, MR platform.\\n- Disadvantages: compression hazards, difficult binders, dissolution risk, swallow/taste limits.\\n- Central physics: flow → compact → dissolve, three demands in tension.\\n- Cycle: fill → compress → eject (details 35-7).\\n- Unit-dose precision is pct-34-1's division logic industrialised.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give four advantages and three disadvantages, each with its mechanism.\\n2. State the three-demand tension and which earlier topics supply each demand's science.\\n3. Name the cycle's three events.\\n4. Why is a tablet's stability advantage a pct-43 argument?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Compression won on precision and price; the formulator's tax is making powder flow, bond, and dissolve at once. Fill, press, eject — the whole industry in three beats.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-2',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Types of Tablets',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Types of tablets** form a swarm; the organising trick is classifying by WHERE they act and HOW they release — each type a design answer to a specific need.\\n\\n**By site of action — swallowed (systemic)**: *standard compressed tablets* (the default); *film/sugar-coated* (taste/odour masking, protection, appearance — the coat canon); *enteric-coated* (the coat delays release past the stomach — acid-labile drugs, gastric-irritant drugs); *modified-release* (matrix or membrane designs stretching the release profile — the dissolution science pct-29's, engineered); *multiple-compressed* (layered or tablet-in-tablet — incompatible drugs separated, or MR cores).\\n\\n**By site — buccal/sublingual**: dissolve in the mouth's saliva for local (buccal) or absorption-through-oral-mucosa (sublingual) action — bypassing gut and first-pass (the pct-30-7 absorption canon applied); small, hard, non-disintegrating by design.\\n\\n**By site — dissolved before use**: *effervescent* (acid–carbonate release, the pct-34-7 canon tableted); *dispersible/soluble* (dissolve/disperse in water before dosing).\\n\\n**By site — external/vaginal**: *vaginal tablets* (lactobacilli-compatible bases, local action).\\n\\n**Manufacturing-need types** (not patient-facing): *chewable* (for the swallowing-limited; mannitol-class bases, pct-3 applied); *compressed lozenges/troches* (slow local dissolve in the mouth); *implants* (sterile, long-acting — the sterility boundary named, PHM 201's canon for the sterilisation science).\\n\\n**The habit to build**: for each type, ask (1) what release/site problem does it solve, (2) what formulation price does it pay — e.g. enteric coats delay and complicate (QC + tests), MR designs concentrate release risk (pct-43's watchfulness).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Classify by site (swallowed/oral-mucosa/dissolve-before-use/external) and release (immediate/delayed/modified).\\n- Enteric = acid-labile or irritant drugs; MR = engineered profile; multiple-compressed = incompatibles or MR cores.\\n- Sublingual bypasses gut + first-pass (pct-30-7 applied).\\n- Effervescent/dispersible = dissolve before use (pct-34-7 tableted).\\n- Every type solves a problem and pays a price — ask both.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Classify the swallowed types by release behaviour.\\n2. Why does sublingual delivery avoid first-pass, and which pct-30 lesson owns the absorption canon?\\n3. What problem does an enteric coat solve — two drug classes?\\n4. Name two manufacturing-need types and their formulation price.\\n5. Which pct-34 lesson's canon does the effervescent tablet apply?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Swallow it, suck it, dissolve it, implant it: every tablet type is a release problem solved — at a formulation price. Name the problem, name the price.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-3',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Tablet Ingredients',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `A tablet is mostly **not drug**: the excipient team carries the dose, shapes the compact, and governs the release. This lesson APPLIES the pct-3 excipient canon (the science of what each class is) to the tablet's specific roles — the tablet-formulator's seat assignments.\\n\\n**Diluents (bulking agents)** — make a low-dose drug into a pressable mass: lactose (the classic, flow+compatibility+solubility), starch, microcrystalline cellulose (MCC — the direct-compression star: compactible AND flowing), dibasic calcium phosphate. Selection trade: compactibility vs flow vs solubility vs incompatibility (pct-3's science).\\n\\n**Binders** — glue the compact: starch paste, PVP, HPMC, acacia. Level is a trade (too little → friable; too much → hard, slow-release — the pct-34-8 echo at tablet scale).\\n\\n**Disintegrants** — the un-gluer: starch (swelling), croscarmellose/sodium starch glycolate/SSG superdisintegrants (rapid wicking+swelling). The release switch — the bridge between swallowing and dissolution (pct-29).\\n\\n**Glidants/lubricants** — the machine team: colloidal silica glidant (flow, pct-33-7's remedy); magnesium stearate lubricant (die-wall friction, punch fouling). The lubricant trade: over-lubrication waterproofs the bed and slows dissolution + weakens compacts — the classic over-formulation error.\\n\\n**Antiadherants, sorbents, flavourants, colourants, sweeteners** — the supporting classes (pct-3 canon named, roles assigned).\\n\\n**The formulation logic this lesson installs**: excipients are a TEAM with interactions — the lubricant can fight the disintegrant; the diluent's solubility can fight the release profile; the formulator balances, never stacks.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Diluents (lactose/MCC/DCP): make low-dose drugs pressable; trade compactibility/flow/solubility.\\n- Binders (starch paste/PVP/HPMC): glue — level trades friability against release.\\n- Disintegrants (starch, superdisintegrants): the release switch (wicking+swelling).\\n- Glidant (silica) vs lubricant (Mg stearate): flow aid vs die-wall friction — different jobs.\\n- Over-lubrication: the classic error — waterproofs, weakens, slows release.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Assign each excipient class its tablet job and one canonical example.\\n2. Why is MCC the direct-compression star — two properties?\\n3. State the binder-level trade and where its compounding-scale echo came from.\\n4. Distinguish glidant and lubricant jobs.\\n5. Why is over-lubrication an error, and what does it degrade?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Bulk it, glue it, un-glue it, slide it: the tablet's four-man excipient team. Lubricate generously and you waterproof the medicine you just built.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-4',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Direct Compression',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Direct compression (DC)** is the minimal route: blend drug + excipients, compress — no granulation, no drying. Its economics are obvious (fewest steps, least heat/moisture exposure, fastest); its demands are brutal (the powder blend must flow, compact, and stay uniform ALL BY ITSELF).\\n\\n**The demands** (each a pct-33 verdict consumed):\\n\\n*Flow* — the blend must fill dies uniformly at speed: pct-33-7's canon; a poor-flowing blend = weight variation (35-9's nightmare).\\n\\n*Compactibility* — the blend must bond under pressure: this is where DC's excipient stars earn seats (MCC's plastic deformation; spray-dried lactose's brittleness).\\n\\n*Uniformity* — low-dose potent drugs risk content uniformity: the 34-4/34-5 discipline at industrial scale (ordered mixing named as the industrial answer).\\n\\n**When DC works**: drug is a decent fraction (not ultra-low-dose), physically compatible, and the blend's flow/compactibility hold. **When it fails**: very low-dose drugs (uniformity), very high-dose drugs (no excipient room to fix flow/compaction — the diluent budget is spent), poor-flowing/poor-compacting actives, segregation-prone blends.\\n\\n**The working formulation pattern**: drug + DC-grade diluent (MCC-class) + disintegrant + glidant + lubricant — five roles, one blend, no wet steps.\\n\\n**The honest costs**: DC-grade excipients cost more; segregation risk persists (no granule to lock the blend); flow/compaction tuning is formulation-heavy — the route trades process simplicity for formulation vigilance.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- DC = blend + compress: fewest steps, no heat/moisture, fastest.\\n- Demands: flow (pct-33-7), compactibility (MCC/spray-dried lactose), uniformity (ordered mixing).\\n- Fails for: ultra-low-dose (uniformity), high-dose (no excipient room), bad flow/compaction.\\n- Five-role pattern: drug + DC diluent + disintegrant + glidant + lubricant.\\n- Trade: process simplicity for formulation vigilance and pricier excipients.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does DC minimise stability risk — two exposure classes avoided?\\n2. Name the three demands and the pct-33/34 lessons each consumes.\\n3. Why does a high-dose drug struggle in DC?\\n4. What is ordered mixing and which uniformity problem does it answer?\\n5. State the honest cost column of DC.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Blend and press: the direct route is the fastest and the most demanding — the powder must behave perfectly with no wet steps to save it. Stars: MCC and flow.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-5',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Wet Granulation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Wet granulation** is the classic industrial route: build granules (pct-34-8's process canon) and compress THEM. This lesson teaches the manufacturing route — the same five stages, now with process parameters and quality demands at scale.\\n\\n**The route** (34-8's stages, industrial register): blend (drug + diluent + disintegrant) → binder-solution massing → wet screening (coarse sieve) → dry (tray or **fluid-bed** — the combined dryer-granulator named) → size (mill/sieve) → final blend (glidant + lubricant added LAST — after the wet steps that would wash them off) → compress.\\n\\n**The parameters this lesson owns** (the manufacturing upgrade over 34-8's principles):\\n\\n*Binder concentration and volume* — the granule's glue budget: too little → friable granules, fines, weight variation; too much → hard granules, slow dissolution (the pct-29 trade at scale).\\n\\n*Massing endpoint* — the craft sense of "wet enough": hand-squeeze tests named as tradition, instrumented endpoints (torque/power curves) named as the modern answer.\\n\\n*Drying endpoint* — the moisture variable: too wet → sticking, mould risk (the pct-43 logic); too dry → friable, static. Loss-on-drying named as the control.\\n\\n*Milled granule size* — the die-feed register (pct-33-2's distribution canon on a granule class).\\n\\n**Why granulate for tablets** (the benefits ladder consumed from 34-7): flow, uniformity, compression behaviour, dust control.\\n\\n**The costs**: water + heat exposure (moisture/heat-labile drugs disqualified — the 34-8 honesty), MORE steps (cost, time, loss), and the final-blend discipline: over-mixing after lubricant addition waterproofs (35-3's echo).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Route: blend → mass → wet-screen → dry → size → final blend → compress.\\n- Lubricant/glidant added LAST — after wet steps.\\n- Parameters: binder level, massing endpoint, drying endpoint, granule size.\\n- Fluid-bed dryer-granulator named (combine + modern route).\\n- Costs: water+heat exposure, more steps — the pct-34-8 honesty at scale.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the seven stages in order — where do glidant/lubricant enter, and why there?\\n2. State the binder-level trade with its failure modes.\\n3. Name two massing-endpoint methods (traditional and modern).\\n4. Why does drying endpoint matter — two failure directions?\\n5. Which drug classes are disqualified, and by which exposure?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Mass, screen, dry, size, blend, press: the wet route builds granules to feed the die. Glue enough — not too much — dry just right, and lubricate only at the end.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-6',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Dry Granulation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Dry granulation** builds granules without water: compact the powder blend into sheets or slugs, mill, size, compress. The route for actives that water or heat would damage (the 34-8 honesty carried into manufacturing).\\n\\n**The routes** (named-and-bounded):\\n\\n*Slugging* — compress a large, heavy slug on a press sized for it; break/mill the slug to granule register. The traditional form: simple equipment, poor process control (a slug is a bigtablet, not an instrument reading).\\n\\n*Roller compaction* — squeeze the blend between counter-rotating rolls into a sheet; mill the sheet. The modern form: CONTINUOUS, controllable (roll pressure, gap, speed are instrument settings), better uniformity of granule properties — the industrial answer.\\n\\n**The demands** (the honest column): the powder must be COMPACTIBLE — dry bonding is harder than wet: the blend leans heavily on compactible excipients (MCC-class, pct-3's canon) since the drug may contribute little. It must also flow (roller feeds need it — pct-33-7's canon). And the compacts must mill predictably (friability of the sheet becomes a process variable).\\n\\n**When chosen**: moisture-labile (aspirin-class hydrolysis honesty, pct-43's logic), heat-labile, effervescent pairs (34-7's requirement), or when the blend is too poor-flowing for DC but too moisture-sensitive for wet.\\n\\n**The costs**: no binder solution means weaker granules (more fines — milling discipline needed); multiple compaction cycles can reduce compactibility (work-hardening named); dust and fire-hazard controls (dry processes raise both); equipment is capital-intensive.\\n\\n**The route-selection discipline this lesson closes**: DC (simplest, most demanding of the blend) → dry granulation (no water, needs compactibility) → wet granulation (most forgiving of the blend, hardest on the drug) — chosen by the DRUG's sensitivities and the BLEND's properties, not preference.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Dry granulation = compact → mill → size → compress; no water/heat.\\n- Slugging (traditional, poor control) vs roller compaction (modern, instrumented, continuous).\\n- Demands: compactible blend (MCC-class), flow (roller feed), millable sheet.\\n- Chosen for: moisture-labile, heat-labile, effervescents, poor-flow-but-wet-sensitive.\\n- Costs: weaker granules, work-hardening risk, dust/hazards, capital.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Contrast slugging and roller compaction on control and continuity.\\n2. Why does dry granulation lean on compactible excipients?\\n3. Name three patient indications for the dry route (drug classes).\\n4. What is work-hardening and when does it bite?\\n5. State the route-selection ladder and the deciding factors.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Squeeze the blend into sheet or slug, mill, press: granulation without a drop of water. Rolls beat slugs for control; compactible excipients carry the bond.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-7',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Tablet Manufacturing Principles',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**The tablet press** is where formulation meets machine: the powder's behaviour (pct-33's verdicts) meets the press's mechanics (this lesson's canon). Machine ENGINEERING is named-and-bounded — the 200L scope is the PRINCIPLES that connect powder to product.\\n\\n**The cycle, mechanically** (35-1's three beats with hardware): **die fill** — the hopper+feeder deliver blend into the die bore (flow demand live here: pct-33-7); **compression** — upper punch descends, force transmitted through the bed, particles bond (bond mechanisms: mechanical interlocking + intermolecular forces; plastic deformation vs brittle fracture named as the excipient-behaviour classes); **ejection** — lower punch rises, the compact's wall friction resisted by the lubricant (35-3's job description, live).\\n\\n**The machine families** (named): single-station (the "R&D" press) vs rotary (production: many die stations rotating through fill/compress/eject); compression force applied by rolls (pre-compression named: a gentler first squeeze deaerates and improves the main event).\\n\\n**The process variables** (the principle set): **compression force/pressure** — the master variable (hardness rises; dissolution can fall — the classic trade, pct-29's canon); **die fill depth** (weight → dose); **punch speed** (rate can outpace air escape — entrapment defects); **pre-compression** (named above).\\n\\n**Weight vs hardness vs thickness** (the three-way production check): weight = dose; hardness = strength + release proxy; thickness couples with both — the press operator's triangle, feeding 35-9's formal tests.\\n\\n**The bonding honesty**: compression is not merely squeezing — it is particle deformation + bonding + air escape + elastic recovery on release (the elastic memory that causes capping — 35-8's preview).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Cycle: fill (flow live) → compress (bonding) → eject (lubricant live).\\n- Bond mechanisms: interlocking + intermolecular forces; plastic vs brittle classes.\\n- Machines: single-station vs rotary; pre-compression deaerates.\\n- Master variable: compression force — hardness ↑ often dissolution ↓.\\n- Operator triangle: weight/hardness/thickness — the informal QC loop.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Walk the cycle and name the excipient/powder demand live at each beat.\\n2. Contrast plastic-deformation and brittle-fracture bonding with excipient examples.\\n3. Why can faster punch speed cause defects?\\n4. State the force–hardness–dissolution trade.\\n5. What does pre-compression improve?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Fill, press, eject — and the lubricant pays the ejection bill. Force is the master variable: buy hardness, pay dissolution. The rotary press is the industry's heart.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-8',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Basic Tablet Defects',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Tablet defects** are the process speaking: each classic failure names its cause, and the cause names its fix. This lesson is the diagnostic map.\\n\\n**Capping** — the cap (top crown) splits off intact. Cause: **air entrapment + elastic recovery** (the 35-7 bonding honesty gone wrong): the compact springs back and fractures at the crown. Contributors: too-fast punch speed, over-dried/over-fines material, deep punches. Fix direction: slow down, pre-compress, adjust moisture, less fines.\\n\\n**Lamination** — the tablet splits into LAYERS. Same family as capping (elastic recovery + trapped air) but internal — often material-specific (some granulations' elastic memory). Fix direction mirrors capping.\\n\\n**Chipping** — edges crumble. Cause: friability (weak compact — binder/moisture/force deficits) or machine abrasion. Fix direction: more binder/force, better granule, watch the machine path.\\n\\n**Sticking/picking** — granulation adheres to punch faces (sticking) or into punch-tip lettering (picking). Causes: insufficient lubricant, moisture too high, punch-tip wear/roughness, high compression. Fix: lubrication discipline (35-3's trade — not overdone), moisture control, punch maintenance.\\n\\n**Mottling** — uneven colour distribution. Causes: poor colour dispersion (the 34-4 mixing canon at industrial register), migration of dye during drying (wet-granulation specific). Fix: mix better, use coated dyes/lakes, adjust drying.\\n\\n**Weight variation** — the die-fill crime (pct-33-7's flow verdict, 35-7's fill mechanics). Causes: poor flow, segregation (34-4's enemy), machine setting drift.\\n\\n**Hardness variation** — force/flow/material inconsistencies.\\n\\n**The habit this lesson installs**: name the defect → name the mechanism → name the stage → fix the stage, not the symptom.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Capping: crown splits — air entrapment + elastic recovery; fix speed/moisture/pre-compression.\\n- Lamination: layered splits — same family, internal.\\n- Chipping: edge crumble — friability/machine path.\\n- Sticking/picking: punch adhesion — lubricant/moisture/punch wear.\\n- Mottling: colour segregation or dye migration; weight/hardness variation = fill/force drift.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish capping and lamination — mechanism and site.\\n2. Why does elastic recovery cause both, and which 35-7 concept connects?\\n3. Name three sticking causes and the lubrication discipline that balances them.\\n4. Why does dye migrate in wet granulation, and what are two fixes?\\n5. Trace weight variation back to the pct-33 lesson it inherits.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Caps fly, layers split, edges crumble, punches stick, colour mottles: every defect names its stage. Fix the cause, not the symptom — the press is telling you where it hurts.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-9',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Tablet Quality Evaluation',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Tablet quality evaluation** is the test battery that converts the press's output into verifiable quality — the SCIENCE of each test lives here; programme/regulatory interpretation (sampling plans, specs as regulatory objects) is PCY 201's canon, deferred with named boundaries.\\n\\n**The official battery** (tests named with their science):\\n\\n*Uniformity of weight* — weigh a sample of tablets; the stated compendial limits (percentage deviations by weight band) define acceptable spread — the dose-consistency verdict (35-8's weight-variation crime formally measured).\\n\\n*Hardness* — the crushing-force test (hardness testers named-and-bounded): strength for handling + a release proxy (the 35-7 trade live).\\n\\n*Friability* — tumbling a weighed sample (the friabilator named) and reweighing: the stated percentage limit defines acceptable surface strength — the handling-durability verdict.\\n\\n*Disintegration* — the disintegration apparatus (the basket rig named): time to break apart in stated media at stated temperature — the FIRST release gate (mechanical, not yet dissolution).\\n\\n*Dissolution* — the apparatus families (basket/paddle named): the RATE of drug release into stated medium — the bioavailability-relevant verdict (pct-29's canon formally measured; pct-30's absorption chain downstream).\\n\\n*Content uniformity* — assay of individual tablets (the uniformity of dosage units concept named): the potent-dose crime (34-4/34-5's) formally measured.\\n\\n*Identity, assay, impurities, water content* — the chemical battery (named, bounded).\\n\\n**The release-gate logic** (the pedagogical spine): disintegration answers "did it break apart?"; dissolution answers "is the drug OUT?" — a tablet can pass the first and fail the second (over-lubrication, over-compression — 35-3/35-7's trades); the two tests guard different failure modes.\\n\\n**Boundary honoured**: acceptance criteria, sampling plans, OOS programmes, stability-programme interpretation — PCY 201's; here the tests and their sciences.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Battery: weight uniformity, hardness, friability, disintegration, dissolution, content uniformity, chemical tests.\\n- Friability: tumble-and-reweigh vs stated limit — handling durability.\\n- Disintegration = broke apart; dissolution = drug OUT — different failure gates.\\n- Content uniformity: the potent-dose verdict, formally.\\n- PCY 201 owns programme/regulatory interpretation; this lesson owns test science.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the battery and the failure mode each test guards.\\n2. Explain the two release gates and name two ways a tablet passes one, fails the other.\\n3. What does friability measure and how?\\n4. Which test formalises the 34-4 discipline, and which the 35-8 weight crime?\\n5. State the PCY 201 boundary precisely.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Weigh, crush, tumble, disintegrate, dissolve, assay: the tablet's report card. Breaking apart is not drug out — the two gates guard different sins.`,
      },
    ],
  },
  {
    nodeId: 'pct-35-10',
    courseId: 'pct-201',
    topicId: 'pct-35',
    nodeType: 'subtopic',
    title: 'Packaging and Storage',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Tablet packaging** applies the pct-28 packaging canon to the product this block built — the enemies (moisture, light, oxygen, mechanical shock) and the defences, in tablet register.\\n\\n**Blister packs** (the dominant unit-dose defence): formed cavity + lidding; materials named-and-bounded (PVC the classic forming film; PVDC coatings for higher moisture barrier; foil-foil alu-alu for the highest barrier — the moisture-sensitive hierarchy). Roles: unit-dose integrity, tamper evidence, calendar compliance aids, protection.\\n\\n**Strip packs** — heat-sealed pouch per tablet (foil laminate): a blister alternative where forming films cannot reach the barrier needed.\\n\\n**Bottles** (bulk/multi-dose): HDPE/polypropylene containers + closures; **desiccants** (silica-class) where justified; cotton wool the traditional filler (named, with its moisture-trap honesty); **count as the dose** — the bottle is the pharmacy-dispensing interface too.\\n\\n**Light protection** — amber glass/opaque films for photolabile contents (the pct-43-6 echo applied).\\n\\n**The label duties** (pct-28-6/7 canon applied): identity/strength, quantity, batch+expiry (the traceability pair), storage statements, and the tablet-specific counselling hooks (swallow whole for MR/enteric — the 35-2 canon's patient-facing echo).\\n\\n**Storage statements** (the pct-28-9 translation duty): "store below 30°C, protect from moisture" is a mechanism instruction pair — temperature for chemical stability (pct-43-5's echo), moisture for hydrolysis/physical integrity (pct-43-7's).\\n\\n**The packaging-decision discipline**: choose by (1) the content's enemy profile (moisture? light? oxygen?), (2) the market's dose interface (calendar blister? bulk bottle?), (3) the economics — the same three-factor model pct-28 teaches, at tablet scale.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Enemies: moisture, light, oxygen, shock — pct-28 canon applied.\\n- Blister hierarchy: PVC → PVDC-coated → foil-foil (barrier ladder).\\n- Bottles: HDPE/PP + desiccant; cotton wool's moisture-trap honesty named.\\n- MR/enteric tablets: "swallow whole" is a 35-2 canon echo on the label.\\n- Decision model: enemy profile → dose interface → economics.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Rank the blister materials by moisture barrier and name who needs the top.\\n2. When does a strip pack beat a blister, and why?\\n3. Why is cotton wool a mixed blessing in a bottle?\\n4. Which two storage statements pair with which pct-43 mechanisms?\\n5. State the three-factor packaging decision model.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Foil against water, amber against light, desiccant against the rest: packaging is the tablet's last excipient. Label the swallow-whole tablets, and teach it.`,
      },
    ],
  },
];
