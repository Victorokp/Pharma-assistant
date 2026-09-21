import type { Lesson } from './types';

/**
 * PCT 201 — Pharmaceutics · pct-13: Isotonic and Buffer Solutions.
 *
 * Batch 16: the locked TOP-LEVEL topic block — the Tier B topic lesson
 * (self-binding topicId, plain title, per the pct-1/2/3/7 top-level topic
 * convention) plus its ten children pct-13-1…13-10 (plain unprefixed
 * names). Node IDs and titles mirror curriculum.ts exactly; nothing here
 * creates or renames nodes.
 *
 * Tier note: pct-13 has no surviving Phase-1 tier record; the topic and
 * conceptual children are Tier B (pct-1/2/3/7 convention, flagged pending
 * confirmation), while the calculation children — Sodium Chloride
 * Equivalent (13-4), Isotonicity Calculations (13-6), Basic Buffer
 * Calculations (13-10) — are Tier C, matching the demonstrated
 * calculation-lesson convention (pct-5-7 and the pct-9/pct-10 blocks).
 *
 * Scope discipline: tonicity/isotonicity is THIS topic's canon. pH/pKa
 * chemistry appears only as prerequisite; percent/ratio strength
 * arithmetic stays with pct-9; dose calculations stay with pct-10;
 * sterility is pct-2-5's canon; disperse systems are pct-39/PHM 201's
 * canon; stability depth is pct-43/PCY 201's canon — all cross-referenced,
 * not re-taught. The 13-4 lesson owns the E-value *definition*; 13-6 owns
 * the full multi-ingredient *adjustment arithmetic*; 13-5 owns the
 * freezing-point *concept* — the worked problems deliberately do not
 * repeat across the three.
 */
export const pct201IsotonicBuffersLessons: Lesson[] = [
  // ------------------------------------------------------------------
  // TOPIC LESSON (Tier B — topic self-binding, plain title)
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-13',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'topic',
    title: 'Isotonic and Buffer Solutions',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Two properties decide how a solution *feels* to the body and how well a dissolved drug *lasts* on the shelf: its effective particle concentration relative to body fluids (**tonicity**) and its hydrogen-ion concentration (**pH**). This topic teaches both, plus the arithmetic that lets a pharmacist control them.\\n\\n**Isotonicity.** Body fluids — blood serum, tears — hold dissolved particles at a certain effective concentration. A solution matching that concentration is **isotonic**; one with more effective particles is **hypertonic** and draws water out of cells; one with fewer is **hypotonic** and water moves into cells. Because osmotic effects depend on particle *count* rather than particle identity, pharmacy has two standard tools for comparing any drug solution with the reference (0.9% w/v sodium chloride): the **sodium chloride equivalent** and **freezing-point depression**. The calculation lessons turn those tools into the adjustment arithmetic used daily in compounding.\\n\\n**Buffers.** Many drugs are comfortable and chemically stable only within a narrow pH window. A **buffer solution** — a weak acid together with its conjugate base — resists pH change when small amounts of acid or base are added. Its resistance has a measurable strength (**buffer capacity**) and a computable pH (**Henderson–Hasselbalch**).\\n\\nThe ten lessons: what **isotonicity** is; why **isotonic preparations matter**; how **tonicity adjustment** is done; the **sodium chloride equivalent**; the **freezing-point depression** view of the same problem; the full **isotonicity calculations**; **buffer solutions**; **buffer capacity**; **pharmaceutical applications of buffers**; and **basic buffer calculations**.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Tonicity = effective osmotic pressure relative to body fluids: isotonic, hypotonic, or hypertonic.\\n- Isotonic preparations protect sensitive tissues — eye and bloodstream respond sharply to osmotic mismatch.\\n- Sodium chloride equivalent (E) and freezing-point depression are the two standard routes to isotonicity.\\n- A buffer (weak acid + conjugate base) resists pH change; capacity measures its strength.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define isotonic, hypotonic and hypertonic in terms of water movement across a membrane.\\n2. Why are ophthalmic solutions routinely adjusted for tonicity?\\n3. Name the two standard tools for computing a tonicity adjustment.\\n4. What does a buffer do, and what quantity measures how strong that protection is?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Tonicity = effective osmotic pressure vs body fluids: isotonic matches, hypotonic swells cells, hypertonic shrinks them. Tools: E-values and freezing-point depression. Buffers resist pH change; buffer capacity is the measure of resistance.`,
      },
    ],
  },
  // ------------------------------------------------------------------
  // CHILD LESSONS (bind topicId: 'pct-13', nodeType: 'subtopic')
  // ------------------------------------------------------------------
  {
    nodeId: 'pct-13-1',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Isotonicity',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Osmosis** is the movement of water across a semipermeable membrane from the more dilute solution toward the more concentrated one. **Osmotic pressure** is the pressure that would just stop that flow. The fact pharmacy builds on: osmotic pressure depends on the **number of dissolved particles**, not their identity or mass — one sodium ion and one large sugar molecule each count as one particle.\\n\\nDissociation complicates the count. One formula unit of NaCl enters solution as two particles (Na⁺ and Cl⁻), so it produces nearly twice the osmotic effect of the same molar amount of a non-electrolyte such as dextrose, which stays whole. The effective particle count per formula unit is called the **dissociation factor (i)**: close to 2 for fully dissociated NaCl in ideal conditions, measured ≈ 1.8 in dilute real solutions (some ion pairing keeps units together), and exactly 1.0 for non-electrolytes.\\n\\nThe reference point for all comparisons is **0.9% w/v sodium chloride** — "normal saline" — chosen because it experimentally matches the osmotic behaviour of serum and tears. Isotonicity is always discussed *relative to this standard*.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `An **isotonic** solution exerts the same effective osmotic pressure as the reference body fluid (serum or lachrymal fluid). A **hypertonic** solution has the higher effective particle concentration: water leaves contacted cells, which shrink — red cells crenate, corneal cells sting. A **hypotonic** solution has the lower effective particle concentration: water enters cells, which swell and may burst (haemolysis).\\n\\nOne distinction separates careful students from careless ones: tonicity is defined by particles the membrane **cannot cross**. A urea solution has plenty of dissolved particles, but urea permeates cell membranes freely, so it sets up no lasting water gradient — it contributes to osmotic *pressure measurements* but not to *tonicity*. Tonicity is therefore a **physiological** description built on an **effective** particle count, not a pure particle census. This is also why the practical tools later in this topic (E-values, freezing points) are measured, drug-specific tables rather than pure theory.\\n\\nIn everyday pharmacy language the comparison is always against **0.9% w/v NaCl**: a solution equivalent to it is isotonic; stronger is hypertonic; weaker is hypotonic.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Osmosis moves water across a semipermeable membrane toward the higher particle concentration.\\n- Isotonic = same effective osmotic pressure as serum/tears; the reference is 0.9% w/v NaCl.\\n- Hypertonic: water out of cells (crenation, stinging). Hypotonic: water in (swelling, haemolysis).\\n- Only membrane-impermeant particles count — urea contributes to osmolality but not tonicity.\\n- Dissociation factor i: NaCl ≈ 1.8, non-electrolytes = 1.0.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Every ophthalmic, nasal, injectable and irrigation solution on the shelf was either formulated isotonic by the manufacturer or carries explicit reconstitution instructions so the *user* makes it isotonic. The compounding pharmacist extending this to a magistral preparation uses the tools of lessons 13-4 through 13-6.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does osmotic pressure depend on particle count rather than particle identity or mass?\\n2. A solution contains 0.45% w/v NaCl — hypertonic or hypotonic? Predict what happens to red cells placed in it.\\n3. Why is urea ignored when judging tonicity even though it adds dissolved particles?\\n4. What does the dissociation factor i tell you, and why is it about 1.8 rather than 2.0 for sodium chloride?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Osmosis moves water toward the higher effective particle concentration. Isotonic = equal effective osmotic pressure vs body fluids; 0.9% saline is the reference. Hypotonic swells cells, hypertonic shrinks them; only membrane-retained particles count.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-2',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Importance of Isotonic Preparations',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Why adjust tonicity at all? Because the tissues meeting pharmaceutical solutions are built of cells that respond immediately — sometimes irreversibly — to osmotic mismatch.\\n\\n**The eye.** The cornea and conjunctiva are densely innervated. A drop far from isotonicity causes immediate stinging and reflex tearing — and reflex tears then dilute and wash out the drug, so the dose that reaches the target falls precisely when comfort fails. Reflex tears are themselves hypotonic relative to serum, so a hypertonic drop is flushed fastest of all.\\n\\n**The bloodstream.** Intravenous fluids enter a large, flowing compartment, and blood dilutes a small injected volume rapidly — which is why some concentrated drug injections are tolerated after dilution in the infusion line. But that tolerance has limits: an appreciable volume of hypertonic fluid crenates red cells and irritates the vein; a hypotonic one haemolyses cells as water rushes in. Routine large-volume fluids are therefore isotonic by formulation (0.9% saline, 5% dextrose), and deliberately non-isotonic fluids are labelled therapeutic tools with administration rules that belong to clinical practice — cross-referenced, not re-taught here.\\n\\n**Other routes.** Nasal and otic preparations are adjusted for comfort; irrigating solutions contact open tissue and are kept isotonic; dry syrups and injections for reconstitution carry explicit diluent instructions so the final solution ends up isotonic.\\n\\n**When deviation is deliberate.** Osmosis can be the therapy: hypertonic saline in symptomatic hyponatraemia, mannitol to draw water from swollen brain tissue. Deviation from isotonicity is then a prescribing decision, not a formulation accident.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Ophthalmic drops far from isotonicity sting, trigger reflex tears, and wash the drug out.\\n- Blood dilutes small injected volumes; larger hypotonic volumes haemolyse, hypertonic volumes crenate.\\n- Nasal, otic, irrigation and reconstituted products carry tonicity expectations for comfort and safety.\\n- Deliberate hyper/hypotonicity (hypertonic saline, mannitol) is osmotic therapy, not an accident.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `"Isotonic" on an eye- or nasal-drop licence is a quality claim. When a pharmacist verifies a compounded preparation against that claim, they are re-deriving the same property with the E-value and freezing-point tools of this topic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Give two reasons a strongly hypertonic eye drop is counterproductive for drug delivery.\\n2. Why does a small hypotonic injection often cause no haemolysis while a large one can?\\n3. Name two product classes for which isotonicity is a stated quality attribute.\\n4. Mannitol is given to reduce cerebral oedema — explain the osmotic logic in one sentence.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Sensitive tissues respond sharply to tonicity mismatch: the eye stings and tears; blood haemolyses or crenates. Isotonicity is the default for ophthalmic, nasal, otic, irrigation and IV products; deviations are deliberate therapy.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-3',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Tonicity Adjustment',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Tonicity adjustment** is the deliberate modification of a solution so its effective particle concentration matches the isotonic reference. Conceptually the move is always the same: compare what is already dissolved with what isotonicity requires, then supply or remove the difference.\\n\\n**The agents.** Any solute can supply osmotically active particles, but formulation practice favours a short list: **sodium chloride** (the default, also closest to physiological salt), **dextrose** (when chloride load or sodium load is unwanted), **boric acid** (traditional for ophthalmic use, where it also mildly buffers — but unsuitable for injection), and **glycerin or propylene glycol** (useful non-electrolyte agents). Agent choice is a formulation decision: compatibility with the drug, route, and intended use all matter.\\n\\n**The methods.** Pharmacy uses two equivalent routes to *quantify* the adjustment, both built on measured tables: the **sodium chloride equivalent method** (lesson 13-4 defines E; lesson 13-6 runs the full arithmetic) and the **cryoscopic method**, which works in freezing-point degrees (lesson 13-5 gives the concept; 13-6 the arithmetic). Both express "how far from isotonic is this solution, and how much agent closes the gap". A third, historical family of **class methods** grouped substances by chemical class with approximate rules of thumb — they survive in old texts and are not used for compounding today.\\n\\n**Adjustment is not buffering.** Tonicity and pH are independent properties: an isotonic solution can be acidic, and a perfectly buffered solution can be dangerously hypotonic. Eye-drop formulation does both jobs — adjust tonicity *and* set pH — but they are separate operations with separate tools.\\n\\n**Dilution instead of addition.** When a solution is already hypertonic, no agent fixes it — the correction is dilution (or reformulation), since dilution lowers the effective particle concentration toward the reference.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Adjustment = compare current effective particle concentration with the isotonic requirement; supply the difference.\\n- Common agents: NaCl, dextrose, boric acid (ophthalmic; not injectable), glycerin, propylene glycol.\\n- Two quantitative routes: sodium chloride equivalent method and cryoscopic (freezing-point) method.\\n- Tonicity adjustment and pH buffering are separate operations with separate tools.\\n- A hypertonic solution is corrected by dilution, not by adding agent.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A compounding worksheet for an extemporaneous eye drop typically shows both adjustments side by side: "buffer to pH 7.4 (phosphate)" and "make isotonic (NaCl equivalent … g)". The two lines are different skills from the same topic.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the general logic of any tonicity adjustment in one sentence.\\n2. Why is boric acid acceptable for an ophthalmic adjustment but not an injectable one?\\n3. A solution tests hypertonic — why is *adding* an agent the wrong correction, and what is right?\\n4. Explain why "adjust the tonicity" and "buffer the solution" are two separate instructions.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Tonicity adjustment supplies (or removes, by dilution) the effective-particle difference vs the isotonic reference. Agents: NaCl, dextrose, boric acid (ophthalmic), glycerin. Two quantifying routes: E-values and freezing points. Buffering is a separate operation.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-4',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Sodium Chloride Equivalent',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `Two prerequisites, both already established. First, **percent strength** and **ratio strength** notation — pct-9 (Percentage Strength) is canonical for their mathematics and this lesson uses them without re-teaching. Second, the **dissociation factor i** from lesson 13-1: NaCl counts as ≈ 1.8 particles per formula unit in dilute solution, non-electrolytes as 1.0.\\n\\nOne more quantity makes the tables work: **L**, the osmotic contribution per mole of solute, read off measured freezing-point depressions (ΔT_f = L × c, with c in mol/L — lesson 13-5 develops this). Standard table values, measured averages rather than exact physical constants: L = 3.4 for univalent/univalent electrolytes (NaCl type), 2.0 for univalent/divalent, 1.5 for divalent/divalent, and 1.9 for non-electrolytes. These are **convention-dependent measured values** — sources differ slightly, which is one reason published E-values are treated as authoritative tables rather than freshly calculated numbers.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `The **sodium chloride equivalent (E)** of a substance answers one question: *how many grams of NaCl are osmotically equivalent to 1 g of this substance?*\\n\\nThe working formula is:\\n\\n$$\\nE = 17\\,\\frac{L}{M}\\n$$\\n\\nwhere L is the table value for the substance's electrolyte class and M its molecular weight. The constant 17 bundles the reference arithmetic (0.9% NaCl ↔ the isotonic particle concentration ↔ one osmole behaviour), and the formula **self-checks**: for NaCl itself, L = 3.4 and M = 58.5, so E = 17 × 3.4/58.5 = 0.99 ≈ 1.0 — exactly what the definition demands, since NaCl is its own equivalent.\\n\\n**Reading the table.** If a drug's E = 0.18, then 1 g of that drug "behaves like" 0.18 g of NaCl osmotically. The drug in a solution therefore *contributes* grams-of-drug × E grams of NaCl-equivalent toward isotonicity, and the compounding task reduces to ordinary subtraction — the full workflow is lesson 13-6's.\\n\\n**Why tables, not fresh calculation.** Real solutions are not ideal: the measured E depends mildly on concentration and on hydration state (anhydrous vs monohydrate forms differ in M and therefore in E). Published E-values encode real-solution behaviour at typical use concentrations — always use the value for the **exact form and grade** in hand.`,
      },
      {
        kind: 'FORMULAS',
        body: `**Sodium chloride equivalent**\\n\\n$$\\nE = 17\\,\\frac{L}{M}\\n$$\\n\\nE = grams of NaCl osmotically equivalent to 1 g of substance · L = osmotic table value (3.4 univalent/univalent; 2.0 univalent/divalent; 1.5 divalent/divalent; 1.9 non-electrolyte) · M = molecular weight (g/mol).\\n\\n**NaCl-equivalent contributed by an ingredient**\\n\\n$$\\n\\text{NaCl equiv.} = \\text{grams of ingredient} \\times E\\n$$\\n\\n**Isotonic NaCl quota for a volume V (mL)**\\n\\n$$\\n\\text{quota} = 0.009 \\times V \\;\\; \\text{grams}\\n$$\\n\\n(from 0.9 g NaCl per 100 mL). Unit logic: mL × (g/100 mL) × 100 = g; g × (g NaCl/g) = g NaCl-equivalent — every term is a mass, so the subtraction in lesson 13-6 is dimensionally clean.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — E from the formula.** Boric acid, H₃BO₃: M = 61.8 g/mol, non-electrolyte (L = 1.9).\\n\\nE = 17 × 1.9 / 61.8 = 32.3 / 61.8 = **0.52**\\n\\nSo 1 g of boric acid is osmotically equivalent to about 0.52 g of NaCl — matching the published table value (≈ 0.50–0.52, source-dependent).\\n\\n**Example 2 — one-step use.** Make 60 mL of 1% w/v pilocarpine nitrate solution isotonic with sodium chloride (E of pilocarpine nitrate = 0.23).\\n\\nStep 1 — drug mass: 1% w/v for 60 mL = 0.6 g.\\nStep 2 — drug's NaCl contribution: 0.6 × 0.23 = 0.138 g.\\nStep 3 — isotonic quota for 60 mL: 0.009 × 60 = 0.54 g.\\nStep 4 — NaCl to add: 0.54 − 0.138 = 0.402 ≈ **0.40 g**.\\n\\n**Check.** The drug supplies 0.138/0.54 ≈ 26% of the requirement; NaCl supplies the rest. Magnitude: the answer must be less than the quota, since the drug already contributes — 0.40 < 0.54 ✓.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `E-values are tabulated in pharmaceutical handbooks and pharmacopoeial compilations for hundreds of drugs. The compounding workflow is exactly Example 2: look up E, multiply by drug mass, subtract from the volume's quota, weigh the difference.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define the sodium chloride equivalent in one sentence.\\n2. Drug X has E = 0.18. How many grams of NaCl does 0.5 g of X contribute?\\n3. Why must E be exactly 1.0 for NaCl, and how does the formula E = 17L/M confirm this?\\n4. In Example 2, why is the added NaCl (0.40 g) smaller than the volume's full quota (0.54 g)?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `E = grams of NaCl osmotically equivalent to 1 g of substance; E = 17L/M, self-checking to 1.0 for NaCl. Ingredient contribution = mass × E; isotonic quota = 0.009 × V mL. Use the tabulated E for the exact form/grade in hand.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-5',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Freezing-Point Depression Concept',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Freezing-point depression** is a **colligative property**: dissolving particles in water lowers its freezing point in proportion to the **effective particle concentration**, regardless of what the particles are. Pure water freezes at 0 °C; the isotonic reference (0.9% w/v NaCl, 0.154 mol/L × i ≈ 1.8) freezes at **−0.52 °C**.\\n\\nThat single number is the bridge to isotonicity: **a solution freezing at −0.52 °C has the same effective particle concentration as serum and tears — it is isotonic.** Serum and tears happen to agree at this value, giving pharmacy one isotonic target for both ophthalmic and parenteral work.\\n\\nThe working relation is:\\n\\n$$\\n\\Delta T_f = L \\times c\\n$$\\n\\nwith ΔT_f in °C, c the molar concentration (mol/L), and **L** the osmotic table value from lesson 13-4 (1.9 non-electrolytes; 3.4 univalent/univalent; 2.0 univalent/divalent; 1.5 divalent/divalent). The L values are measured averages that absorb real-solution nonideality — convention-dependent to the degree sources differ, and flagged as such wherever they appear.\\n\\n**Why freezing point and not osmotic pressure directly?** Because both are colligative, a property that lowers the freezing point also generates osmotic pressure — measuring one measures the other's cause. This is not an analogy: commercial **osmometers work by measuring freezing-point depression** and reporting the result as osmolality. The freezing point is literally the quantity behind most reported osmolality values.\\n\\n**Practical form.** Freezing-point depressions of 1% w/v solutions are tabulated per substance (e.g. 1% NaCl ≈ 0.58 °C, 1% boric acid ≈ 0.29 °C). To assess a compounded solution: add each ingredient's tabulated depression (scaled by its actual percent strength), compare the sum with 0.52 °C, and the difference is what the tonicity agent must still supply. The full adjustment arithmetic — including choosing the agent — is lesson 13-6's.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Freezing-point depression is colligative: proportional to effective particle concentration.\\n- The isotonic target is ΔT_f = 0.52 °C (serum and tears agree).\\n- ΔT_f = L × c; L values (1.9 / 3.4 / 2.0 / 1.5) are measured, source-dependent table values.\\n- Tabulated ΔT_f values of 1% solutions are added per ingredient; the deficit vs 0.52 °C is the agent's job.\\n- Osmometers measure freezing-point depression and report osmolality — the two are the same measurement.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why does measuring a solution's freezing point reveal information about its osmotic pressure?\\n2. Why is a solution freezing at −0.52 °C isotonic?\\n3. 1% w/v boric acid freezes at −0.29 °C. Without any arithmetic beyond comparison, is it isotonic, hypotonic or hypertonic?\\n4. Why are L values described as measured table values rather than exact physical constants?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `ΔT_f = L × c — colligative, so freezing point tracks effective particle concentration. Isotonic target: 0.52 °C. Tabulate each ingredient's 1% depression, sum, compare with 0.52; the deficit is what the tonicity agent supplies.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-6',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Isotonicity Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `This lesson runs the full adjustment arithmetic that lessons 13-4 and 13-5 equipped: multi-ingredient problems, adjustments with agents *other* than NaCl, and the direction discipline that decides whether a deficit exists at all. Prerequisites: E-values and the quota (13-4), tabulated freezing-point depressions (13-5), percent-strength handling (pct-9).\\n\\n**Direction discipline — read before computing.** Every isotonicity problem is the same skeleton: (1) compute the NaCl **quota** for the final volume, 0.009 × V grams; (2) sum the NaCl-equivalents already present, Σ(gᵢ × Eᵢ); (3) **deficit** → add the difference as tonicity agent; **surplus** → the solution is already hypertonic and the correction is dilution, never addition. Checking the sign before choosing an operation is the single most error-proofing habit in this lesson.\\n\\n**Converting a NaCl-equivalent deficit into a mass of another agent.** A deficit of D grams NaCl-equivalent, adjusted with an agent of E-value E_agent, needs D / E_agent grams of that agent. (The agent with E = 0.52 delivers 0.52 g NaCl-equivalence per gram, so D/0.52 grams delivers D.)`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**The two routes in one frame.** The E-route works in "grams NaCl-equivalent"; the cryoscopic route works in "°C". Both measure effective particle concentration, and the bridge between them is the reference point itself: 0.9% NaCl ↔ 0.52 °C ↔ isotonic. Used consistently, the two routes agree on well-tabulated substances; where published tables differ slightly (they are measured at different reference concentrations), the professional response is to **use one system throughout a calculation** and never mix systems mid-problem.\\n\\n**Multi-ingredient problems** are additive on both routes: sum every ingredient's NaCl-equivalent (or every ingredient's freezing-point depression, scaled from the 1% table value by its actual strength), then compare with the quota (or with 0.52 °C).\\n\\n**Agent choice** changes only the final division: divide the deficit by the chosen agent's E (E-route) or by its 1% depression per percent (cryoscopic route). The agent list — NaCl, dextrose, boric acid for ophthalmics, glycerin — comes from lesson 13-3.`,
      },
      {
        kind: 'FORMULAS',
        body: `**E-route (grams NaCl-equivalent)**\\n\\n$$\\n\\text{agent mass} = \\frac{0.009\\,V - \\sum (g_i \\times E_i)}{E_{\\text{agent}}}\\n$$\\n\\nV in mL; gᵢ, Eᵢ per ingredient; E_agent the adjustment agent's E-value. If the numerator is negative → surplus → dilute, do not add.\\n\\n**Cryoscopic route (°C)**\\n\\n$$\\n\\text{agent (\\% w/v)} = \\frac{0.52 - \\sum \\Delta T_{f,i}}{\\Delta T_{f,\\text{agent}} \\text{ per } 1\\%}\\n$$\\n\\nΔT_f,i scaled from the 1% table value by actual strength (× strength/1).\\n\\n**Unit logic (E-route).** 0.009 × V: mL × g/100 mL → g. gᵢ × Eᵢ: g × g NaCl/g → g NaCl-equiv. Division by E_agent: g NaCl-equiv ÷ (g NaCl-equiv/g agent) → g agent. Every term is a mass; nothing is silently dropped.`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — non-NaCl agent (E-route).** Make 30 mL of 2% w/v zinc sulphate solution isotonic with boric acid (E of ZnSO₄ = 0.12; E of boric acid = 0.52).\\n\\nStep 1 — quota: 0.009 × 30 = 0.27 g.\\nStep 2 — zinc sulphate mass: 2% of 30 mL = 0.6 g; contribution 0.6 × 0.12 = 0.072 g.\\nStep 3 — deficit: 0.27 − 0.072 = 0.198 g NaCl-equivalent. Positive → addition is correct.\\nStep 4 — boric acid: 0.198 / 0.52 = **0.38 g**.\\n\\n**Check.** 0.6 × 0.12 + 0.38 × 0.52 = 0.072 + 0.198 = 0.27 g = quota ✓.\\n\\n**Example 2 — cryoscopic route, cross-checked by the E-route.** 30 mL of 1% w/v boric acid; make isotonic with NaCl. Table values: ΔT_f of 1% boric acid = 0.29 °C; ΔT_f of 1% NaCl = 0.58 °C.\\n\\nDeficit: 0.52 − 0.29 = 0.23 °C. NaCl needed: 0.23 / 0.58 = 0.397% w/v → 0.397 × 30/100 = **0.12 g**.\\n\\nE-route, same problem: boric acid mass 0.3 g × E 0.52 = 0.156 g NaCl-equiv; quota 0.27 g; deficit 0.114 g → 0.11 g NaCl. The routes agree (0.11 vs 0.12 g — the small gap is tabulated-value rounding). Agreement between independently derived routes is the built-in check.\\n\\n**Example 3 — direction discipline.** A 20 mL solution contains 0.5 g of a drug with E = 0.9 and nothing else. Quota: 0.18 g. Contribution: 0.5 × 0.9 = 0.45 g. Numerator: 0.18 − 0.45 = **−0.27 g → surplus**. The solution is already hypertonic; no agent is added — it requires dilution. The exact dilution: 0.45 g of NaCl-equivalent becomes isotonic when it sits in 0.45/0.009 = **50 mL**, giving 0.90% w/v NaCl-equivalent — exactly the isotonic strength.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Hospital and community compounding worksheets phrase it exactly as this lesson does: "q.s. to isotonicity with sodium chloride" or "make isotonic with boric acid". The E-route is the standard workflow; the cryoscopic route is the osmometer's language and appears on lab reports.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the three-step E-route skeleton and the sign test that decides between adding agent and diluting.\\n2. A deficit is 0.198 g NaCl-equivalent and the agent is boric acid (E = 0.52). Why is the required mass 0.198/0.52 rather than 0.198 × 0.52?\\n3. In Example 2 the two routes gave 0.11 g and 0.12 g. What does their near-agreement demonstrate, and what is the professional rule when tables disagree slightly?\\n4. A solution's Σ(gᵢ × Eᵢ) exceeds its quota. What is wrong with adding NaCl, and what is the correct action?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `E-route: agent mass = (0.009V − ΣgᵢEᵢ)/E_agent; negative numerator → dilute. Cryoscopic: (0.52 − ΣΔT_f)/ΔT_f per 1% = % agent. Convert a NaCl-equivalent deficit to another agent by dividing by its E. Use one route per problem; cross-check where tables allow.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-7',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Buffer Solutions',
    tier: 'B',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**pH** is −log₁₀[H₃O⁺]: each pH unit is a tenfold change in hydrogen-ion concentration. Pure water at 25 °C sits at pH 7.00. A **weak acid** HA dissociates only partially: HA ⇌ H⁺ + A⁻.\\n\\nThe prerequisite that makes buffers intelligible is the **conjugate acid–base pair**. When HA loses H⁺ it becomes A⁻, its **conjugate base**; when A⁻ gains H⁺ it returns to HA. A buffer requires **appreciable amounts of both members present together** — acetic acid with acetate, or a weak base with its conjugate acid.\\n\\n**Why both members?** Adding acid (H⁺) to a solution containing A⁻ consumes it: A⁻ + H⁺ → HA. Adding base (OH⁻) to a solution containing HA consumes it: HA + OH⁻ → A⁻ + H₂O. With both members present the solution can absorb either perturbation; with only one member there is no reservoir — adding H⁺ to pure acetic acid merely shifts its equilibrium, and pH moves freely.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `A **buffer solution** resists pH change on addition of small amounts of acid or base. Its pH is governed by the pair's **pKa** and the acid/base ratio (computed in lesson 13-10); its strength — how much perturbation it can absorb — is its **buffer capacity** (lesson 13-8).\\n\\n**Effective range.** A buffer is useful within about **±1 pH unit of its pKa**. Outside that window one member of the pair becomes too scarce to absorb the perturbation: at 10:1 the minor member is 10× outnumbered, at 100:1 it is exhausted almost immediately.\\n\\n**Common pharmaceutical buffer systems**, named as pairs: **acetic acid/acetate**, **citric acid/citrate** (multiple pKa values, useful across a wide acidic range), **boric acid/borate** (mildly acidic, ophthalmic tradition), **phosphoric acid/phosphate** (physiological pH region), and **glycine**, an amino acid that is **amphoteric** — it can donate or accept a proton, so it participates on both sides.\\n\\n**What a buffer does not do.** It does not neutralise unlimited acid/base, it does not fix pH exactly (small shifts still occur), and its behaviour in the bottle says little about behaviour against living tissue — that gap is lesson 13-8's subject.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Buffer = weak acid + its conjugate base (or weak base + conjugate acid) in appreciable joint concentration.\\n- A⁻ consumes added acid; HA consumes added base — the pair is the reservoir.\\n- Effective within about ±1 pH unit of the pair's pKa.\\n- Common systems: acetate, citrate, borate, phosphate; glycine is amphoteric.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Eye drops are commonly buffered near tear pH for comfort; aspirin-containing preparations are buffered to slow hydrolysis; adrenaline (epinephrine) injections are buffered to limit oxidation-linked pH drift. The buffer species is chosen for drug compatibility, not pH alone.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why must a buffer contain BOTH members of a conjugate pair?\\n2. A little HCl is added to an acetate buffer. Which member reacts, and what does it become?\\n3. Why is a buffer pair ineffective at pH more than about 1 unit from its pKa?\\n4. Glycine is described as amphoteric — what does that mean for its role in a buffer?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Buffer = weak acid + conjugate base jointly present; A⁻ absorbs acid, HA absorbs base. Useful range ≈ pKa ± 1. Systems: acetate, citrate, borate, phosphate, glycine (amphoteric).`,
      },
    ],
  },
  {
    nodeId: 'pct-13-8',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Buffer Capacity',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Buffer capacity (β)** quantifies buffer strength: the amount of strong acid or base required to shift the pH of a buffer by one unit (conventionally per litre). Units: mol/L per pH unit. A larger β means a flatter pH response to the same perturbation.\\n\\nTwo rules govern β:\\n\\n1. **β rises with total buffer concentration.** Doubling both members doubles the reservoir available to absorb H⁺ or OH⁻.\\n2. **β is maximum at pH = pKa.** There [A⁻] = [HA], so neither member is scarce: added acid finds abundant A⁻, added base finds abundant HA. As pH moves toward pKa ± 2–3, one member is nearly exhausted, and capacity collapses toward zero.\\n\\n**Selection discipline** follows directly: choose a buffer pair whose **pKa sits near the target pH**, then set the total concentration to deliver the capacity the formulation needs.\\n\\n**In-bottle vs in-vivo.** Capacity measured in the bottle is a formulation attribute; what the tissue experiences depends on how fast the biological environment replaces the instilled fluid. An ophthalmic drop (20–70 µL typical instillation; volumes source-dependent) meets basal tear flow of roughly 1 µL/min — and reflex flow orders of magnitude higher after irritation. Even a well-buffered drop is diluted away within minutes; the eye then re-establishes its own pH. **Heavy buffering can therefore be a disadvantage**: it prolongs the time the tissue is held away from its preferred pH. Ophthalmic buffers are chosen to hold pH on the shelf but yield quickly in the eye. (Tear flow and drop-volume figures are order-of-magnitude, source-dependent values — flagged.)`,
      },
      {
        kind: 'KEY FACTS',
        body: `- β = mol of strong acid/base per litre needed to shift pH by one unit.\\n- β ∝ total buffer concentration; maximum at pH = pKa; near-zero at pKa ± 2–3.\\n- Selection: pKa near target pH first, then concentration for the required capacity.\\n- Ophthalmic buffers must hold pH on the shelf yet yield to the eye's own pH in use.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `A pH 6.0 eye drop buffered with a pKa 7.2 pair sits outside the ideal range; a formulator would instead pick a pair with pKa nearer 6 (or adjust the target pH within the drug's stability window). Capacity, pKa position, and tissue tolerance are negotiated together.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Define buffer capacity and give its units.\\n2. Two buffers share a pH of 5.0; one is 0.05 M total, the other 0.5 M. Which has the higher capacity and why?\\n3. Why is capacity maximal exactly at pH = pKa?\\n4. Why can a *strongly* buffered eye drop be less comfortable than a lightly buffered one?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `β = mol/L per pH unit; grows with total concentration; peaks at pH = pKa; dies off by pKa ± 2–3. Pick pKa near the target, then dose the concentration. Ophthalmics balance shelf-life holding vs in-eye yielding.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-9',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Pharmaceutical Applications of Buffers',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Buffers appear wherever a formulation must hold a pH window — for **comfort**, for **stability**, or for **solubility**.\\n\\n**Ophthalmic preparations.** Tears sit near pH 7.4 (range roughly 7.0–7.7, source-dependent). Drops are buffered toward this region for comfort, with the capacity discipline of lesson 13-8: hold pH on the shelf, yield in the eye. Borate and phosphate systems are traditional here.\\n\\n**Injectables.** Formulation pH is chosen within the drug's stability and solubility window and held with a buffer (phosphate and citrate families are common). The physiological context: blood itself is buffered (the bicarbonate system among others), so modest formulation pH deviations are diluted and corrected in the bloodstream — the formulation buffer's job is the bottle and the infusion line, not the body.\\n\\n**Stability service.** Many degradation reactions are pH-catalysed. Aspirin hydrolyses faster at extremes of pH; adrenaline (epinephrine) is prone to oxidation whose rate is pH-dependent. Buffering inside the stability window is therefore a direct shelf-life tool. (Degradation kinetics are pct-43's canon and PCY 201's — this is a contextual mention, not the full treatment.)\\n\\n**Solubility control.** Weak acids and bases change ionisation state — and hence solubility — with pH; a buffer holds the ionisation state (and therefore the dissolved fraction) the formulation was designed around.\\n\\n**Selection criteria**, in the order a formulator meets them: (1) pKa near target pH; (2) drug compatibility — the buffer must not react, complex, or catalyse the drug's degradation; (3) capacity matched to need (lesson 13-8); (4) route tolerance — borate suits ophthalmics but not injection; (5) manufacturing robustness — the buffer must survive sterilisation/autoclaving without shifting pH.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Buffers serve comfort (ophthalmics near tear pH), stability (pH-catalysed degradation), and solubility (ionisation state).\\n- Injectables: formulation buffer manages bottle/line pH; blood's own buffers manage the body.\\n- Selection: pKa near target, drug compatibility, capacity, route tolerance (borate ≠ injectable), autoclave robustness.\\n- Degradation kinetics and stability testing are pct-43/PCY 201 canon — only contextual here.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Name the three formulation needs a buffer can serve, with one example each.\\n2. Why is the bicarbonate buffer of blood not a substitute for buffering an injectable in its vial?\\n3. Why must buffer selection consider the route (give the borate example)?\\n4. A drug hydrolyses fastest at acidic pH. How does buffering extend its shelf life in one sentence?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `Buffers hold pH for comfort (eye drops ≈ tear pH), stability (pH-catalysed degradation), and solubility (ionisation state). Selection: pKa near target, compatible, right capacity, route-tolerant, autoclave-stable.`,
      },
    ],
  },
  {
    nodeId: 'pct-13-10',
    courseId: 'pct-201',
    topicId: 'pct-13',
    nodeType: 'subtopic',
    title: 'Basic Buffer Calculations',
    tier: 'C',
    sections: [
      {
        kind: 'FOUNDATION',
        body: `**Logarithms — the minimum needed here.** log₁₀(x) asks: 10 to what power gives x? log 1 = 0, log 10 = 1, log 100 = 2; log 0.1 = −1, log 0.01 = −2. Rules used constantly: log(a × b) = log a + log b; log(a/b) = log a − log b; log(10ⁿ) = n.\\n\\n**pKa.** For a weak acid HA ⇌ H⁺ + A⁻, the acid dissociation constant is K_a = [H⁺][A⁻]/[HA], and pKa = −log₁₀ K_a. Smaller pKa = stronger acid.\\n\\n**Deriving Henderson–Hasselbalch.** Rearranging K_a: [H⁺] = K_a × [HA]/[A⁻]. Take −log of both sides: −log[H⁺] = −log K_a − log([HA]/[A⁻]). Since −log(1/x) = +log(x), the last term flips sign, giving:\\n\\n$$\\n\\text{pH} = \\text{pKa} + \\log\\!\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)\\n$$\\n\\n**Instant reading.** When [A⁻] = [HA] the ratio is 1, log 1 = 0, so **pH = pKa** — the same fact as lesson 13-8's maximum-capacity point, now seen from the arithmetic side. Ratio 10 → pH = pKa + 1; ratio 1/10 → pH = pKa − 1 — which is exactly why the buffer range is ±1 pH unit.`,
      },
      {
        kind: 'UNDERSTAND',
        body: `**The equation's three uses.**\\n\\n1. **pH of a buffer** from its composition: pH = pKa + log([A⁻]/[HA]).\\n2. **Composition for a target pH**: rearranged, [A⁻]/[HA] = 10^(pH − pKa).\\n3. **pH after an addition**: the added strong acid consumes A⁻ or added base consumes HA; recompute the ratio with the new amounts.\\n\\n**Mole ratios, not concentrations.** Both members share the same volume, so [A⁻]/[HA] equals the **mole ratio** — the volumes cancel. This is why buffer recipes in formularies are written as mole (or molar-amount) ratios.\\n\\n**Assumptions — flagged.** Henderson–Hasselbalch treats concentrations as activities and assumes ideal behaviour; it is accurate in the mid-range of the buffer window and degrades toward its extremes. It is a working approximation, not an exact law — one more reason final formulations are pH-metered, not just calculated.\\n\\n**Sanity checks for every answer.** The ratio must be positive; the pH must sit within pKa ± 1 for a genuinely useful buffer; both members must be in the same units (they cancel, so mol vs mol/L is safe as long as both sides match).`,
      },
      {
        kind: 'FORMULAS',
        body: `**Henderson–Hasselbalch (acid buffer)**\\n\\n$$\\n\\text{pH} = \\text{pKa} + \\log\\!\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)\\n$$\\n\\npH = target/observed pH · pKa = −log K_a of the weak acid · [A⁻] = conjugate base amount (mol or mol/L) · [HA] = weak acid amount (same units).\\n\\n**Target-composition rearrangement**\\n\\n$$\\n\\frac{[\\text{A}^-]}{[\\text{HA}]} = 10^{\\text{pH} - \\text{pKa}}\\n$$\\n\\n**After an addition** (n mol strong acid added): new ratio = (n_A − n)/(n_HA + n); for n mol strong base: (n_A + n)/(n_HA − n).\\n\\nFor a weak-base buffer the pair is written B/BH⁺ and the equation becomes pH = pKa + log([B]/[BH⁺]).`,
      },
      {
        kind: 'WORKED EXAMPLE',
        body: `**Example 1 — pH from composition.** Acetate buffer: 0.20 mol acetic acid + 0.20 mol sodium acetate per litre; pKa = 4.76.\\npH = 4.76 + log(0.20/0.20) = 4.76 + 0 = **4.76**.\\n\\n**Example 2 — composition for a target pH.** Phosphate pair (H₂PO₄⁻/HPO₄²⁻), pKa = 7.21, target pH 7.40.\\nRatio = 10^(7.40 − 7.21) = 10^0.19 = **1.55** (base member HPO₄²⁻ : acid member H₂PO₄⁻). For 100 mL of 0.1 M total buffer: 0.010 mol total → base = 0.010 × 1.55/2.55 = 0.0061 mol; acid = 0.0039 mol. Check: 0.0061/0.0039 = 1.56 ✓.\\n\\n**Example 3 — pH after adding strong acid.** To Example 1's buffer add 0.01 mol HCl.\\nH⁺ consumes A⁻: A⁻ 0.20 → 0.19; HA 0.20 → 0.21.\\npH = 4.76 + log(0.19/0.21) = 4.76 + log(0.905) = 4.76 − 0.043 = **4.72**.\\n\\n**Same dose into 1 L of unbuffered water:** [H⁺] jumps from 10⁻⁷ to ≈ 0.01 mol/L; pH ≈ **2.0**. The buffer moved 0.04 units; the water moved ~5 units — the reservoir works.\\n\\n**Example 4 — reverse direction.** Target pH 5.00 with the acetate pair: ratio = 10^(5.00 − 4.76) = 10^0.24 = **1.74** — for every 1 mol of acid, 1.74 mol of acetate.\\n\\n**Unit note.** In every example the members were counted in moles; mol/L would give identical ratios (volume cancels). Mixed units (mol vs mmol) in one ratio would corrupt the answer — keep them consistent.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Preparing 100 mL of pH 7.40 phosphate buffer at 0.1 M: compute the ratio (Example 2), weigh the two salts, dissolve, meter the pH, fine-adjust. The H–H equation is why formularies can print fixed salt-pair recipes that reliably hit their stated pH.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. State the Henderson–Hasselbalch equation and define every symbol.\\n2. Why is pH exactly pKa when [A⁻] = [HA]?\\n3. To Example 1's buffer, 0.01 mol NaOH is added instead of HCl. Compute the new pH.\\n4. A buffer is being used at pH = pKa + 1.8. Explain — in ratio terms — why it is a poor choice.\\n5. Why do buffer recipes written in mole ratios survive the volume-cancellation argument?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `pH = pKa + log([A⁻]/[HA]). Ratio 1 → pH = pKa; ×10 → +1 unit; ÷10 → −1. Compositions from targets: ratio = 10^(pH−pKa). Additions: consume one member, recompute. Mole ratios because volume cancels. Approximation — best mid-range.`,
      },
    ],
  },
];
