import type { Lesson } from './types';

/**
 * BCH 201 — Biochemistry · Batch 13: Protein-Calorie Malnutrition (PCM).
 * Node IDs, titles, and ordering mirror curriculum.ts exactly.
 * Topic base C; overview/clinical subtopics A; descriptive B.
 */

export const bch201PcmLessons: Lesson[] = [
  // ─────────────── TOPIC (Tier C — session base) ───────────────
  {
    nodeId: 'protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'topic',
    title: 'Protein-Calorie Malnutrition (PCM)',
    tier: 'C',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Protein-calorie malnutrition (PCM)** — also called protein-energy malnutrition (PEM) — is the disease spectrum that follows when dietary protein and/or energy fall below body needs: growth falters, tissues waste, immunity collapses, and metabolism rewires itself for survival. It spans two textbook extremes — **marasmus** (total-energy deficiency) and **kwashiorkor** (protein deficiency despite some energy) — with most real cases mixed (**marasmic kwashiorkor**).

The topic is biochemistry at its most human: it draws on nearly everything the course has taught — the amino-acid pool, gluconeogenesis, ketone bodies, nitrogen balance, lipolysis, and the glucose–alanine cycle — and shows them running in a starving body. **The metabolic sequence of starvation** is the organising skeleton:

1. **Hours 0–24:** glycogenolysis maintains glucose; then hepatic glycogen (~80 g) is exhausted.
2. **Days 1–3:** gluconeogenesis from amino acids (muscle wasting begins), glycerol, lactate; lipolysis accelerates; ketogenesis starts.
3. **Days 3–7+:** **brain adapts to ketone bodies** (covering ~two-thirds of its needs), slashing its glucose demand — the protein-sparing pivot; muscle proteolysis slows; basal metabolic rate falls (thyroid down-regulation).
4. **Weeks:** fat stores dominate energy; when fat is nearly gone, **visceral protein must burn** — the terminal phase (marasmus endpoint), immune collapse, death from pneumonia/infection.

**Kwashiorkor's distinct puzzle:** adequate-ish calories (often cassava-based diets) but protein-poor → hypoalbuminaemia → **oedema** masks wasting ("hidden hunger"), fatty liver (impaired apolipoprotein export), oxidant stress, depigmented hair/skin (flaky-paint dermatosis).

**Clinical relevance for pharmacists:** PCM is everywhere in paediatric wards, oncology (cachexia), surgery, dialysis, and elderly care; drug dosing (albumin binding, distribution volume), refeeding-syndrome vigilance, and nutrition-support products (F-75/F-100 therapeutic milks, RUTF) are pharmacy's direct contributions.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- PCM spectrum: marasmus (energy), kwashiorkor (protein ± oedema), mixed forms.
- Starvation sequence: glycogenolysis → gluconeogenesis → ketosis → brain ketone adaptation (protein sparing).
- Terminal phase: fat exhausted → visceral protein burns → immune collapse.
- Kwashiorkor: hypoalbuminaemic oedema, fatty liver, dermatosis; marasmus: severe wasting, no oedema.
- Pharmacy: dosing changes, refeeding syndrome, RUTF/F-75/F-100 products.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Nutrition products (F-75/F-100, RUTF), refeeding electrolytes (potassium/magnesium/phosphate), albumin-dependent drug dosing, and appetite/metabolic drug safety in wasting states are PCM-pharmacy practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Outline the four metabolic phases of starvation with their fuel sources.
2. Contrast marasmus and kwashiorkor in protein/energy profile and hallmark signs.
3. Why does brain ketone adaptation "spare protein"?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- PCM = fuel deficiency reorganising metabolism for survival.
- Glycogen → gluconeogenesis → ketones → protein-burning endgame.
- Marasmus wastes visibly; kwashiorkor hides behind oedema.
- Treatment is staged nutrition + electrolyte vigilance.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — orientation) ───────────────
  {
    nodeId: 'protein-calorie-malnutrition-overview',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Protein-Calorie Malnutrition',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `An orientation to PCM's scale, causes, and public-health shape before the clinical details.

**Epidemiology:** PCM affects every country: severe wasting kills hundreds of thousands of under-fives annually (mostly in South Asia/Sub-Saharan Africa); stunting (chronic undernutrition) affects ~150 million children; and in high-income settings **hospital malnutrition** affects up to 30–50% of inpatients (elderly, oncology, peri-operative) — a pharmacist-visible epidemic in plain sight.

**Causes (immediate → underlying → basic):**
- **Immediate:** inadequate intake (poverty, appetite loss, illness), increased losses (malabsorption — CF/coeliac; nephrosis; chronic diarrhoea), increased needs (fever, surgery, cancer cachexia, HIV/TB).
- **Underlying:** household food insecurity, inadequate care/feeding practices, unhealthy environment (infection load — the malnutrition–infection cycle: infection worsens nutrition, malnutrition worsens infection immunity).
- **Basic:** poverty, conflict, education, systems.

**Assessment framework (WHO):**
- **Anthropometry:** weight-for-height (**wasting** — acute), height-for-age (**stunting** — chronic), weight-for-age (underweight); mid-upper-arm circumference (**MUAC < 115 mm** = severe acute malnutrition in 6–59-month-olds — the community-screening tool); oedema presence upgrades classification.
- **Biochemical:** serum albumin/prealbumin (inflammatory confounders!), transferrin, IGF-1; electrolytes (refe-eding risk).
- **Clinical:** appetite test (RUTF acceptance), skin/hair changes, immune/function tests.

**Classifications (WHO):** severe acute malnutrition (SAM) = weight-for-height z < −3, MUAC < 115 mm, or bilateral pitting oedema; moderate acute malnutrition (MAM) between −2 and −3 z; stunting reflects chronicity.

**Programmatic response:** community screening (MUAC), outpatient therapeutic programmes (RUTF), inpatient stabilization (F-75 → transition), supplementation (MAM), and prevention (breastfeeding, vaccination, food security) — pharmacy's supply chain and counselling are structural pieces.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Global: childhood SAM deaths + stunting ~150M; hospital malnutrition 30–50% in HICs.
- Causes: intake/losses/needs (immediate) ← care/environment (underlying) ← poverty (basic).
- Malnutrition–infection cycle amplifies both.
- Tools: weight-for-height (wasting), height-for-age (stunting), MUAC < 115 mm (SAM), oedema.
- Response ladder: community MUAC → RUTF outpatient → F-75 inpatient → prevention.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `RUTF supply chains, electrolyte/rehydration stock management, and hospital-malnutrition screening integration are direct pharmacist roles.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Distinguish wasting, stunting, and underweight with the indices used.
2. What MUAC threshold defines SAM in 6–59-month children?
3. Explain the malnutrition–infection cycle with one example.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- PCM is global — wards and communities both.
- Three anthropometric axes + MUAC + oedema classify.
- Causes layer from poverty to appetite.
- The response is programmatic; pharmacy is in the supply chain.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'definition-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Protein-Calorie Malnutrition — Definition',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `**Definition (working):** Protein-calorie malnutrition (PCM/PEM) is a **pathological state of nutrition deficiency** in which inadequate dietary protein and/or energy — relative to physiological requirements — causes measurable adverse effects on **body composition (tissue wasting/growth faltering), function (immune, muscular, metabolic), and clinical outcome**.

**Unpacking the definition's clauses:**

- **"Inadequate relative to requirements"** — requirements scale with growth (children), illness (catabolic surges), pregnancy/lactation; the *same* intake can be adequate for an adult and catastrophic for a growing child. PCM is a **balance-sheet disease** (needs vs supply), not merely a food-quantity state.
- **"Protein and/or energy"** — the slash matters: pure-protein deficiency (kwashiorkor), pure-energy deficiency (marasmus), or both; micronutrients frequently co-travel (zinc, vitamin A) but define separate deficiency states.
- **"Measurable adverse effects"** — the definition is operational: anthropometric faltering, biochemical shifts (hypoalbuminaemia, low IGF-1), functional loss (immunity, work capacity), and outcome changes (mortality/infection). Nutrition is diagnosed by consequences, not just intake.

**Terminology map:**
- **PEM** (protein-energy malnutrition) ≈ **PCM** — used interchangeably; PEM favoured in modern WHO usage.
- **SAM** (severe acute malnutrition) — the operational WHO case-definition subset (wasting z < −3 / MUAC < 115 mm / oedema).
- **Stunting** — chronic PCM's height-for-age signature (a different axis from acute wasting).
- **Cachexia** — PCM's *illness-driven* cousin (cancer/heart failure): inflammation-driven metabolic derangement where feeding alone reverses little — a distinct metabolic phenotype sharing endpoints.
- **Sarcopenia/malnutrition in elderly** — ageing + undernutrition overlap.

**Historical note:** kwashiorkor's name (Ga: "displaced child" — displaced from the breast by a new pregnancy) encodes the weaning-protein story; marasmus (Greek: "wasting") the energy story.

**Why the definition matters clinically:** thresholds drive treatment protocols (F-75/F-100 eligibility), and case definitions drive surveillance — pharmacist-relevant because nutrition-product stock and dosing follow the definitions.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- PCM = deficiency of protein and/or energy *relative to requirements* with measurable adverse effects.
- Requirements scale with growth/illness — balance-sheet disease.
- Spectrum: marasmus (energy) ↔ kwashiorkor (protein) ↔ mixed; stunting = chronic axis.
- SAM = operational WHO subset (z < −3, MUAC < 115 mm, oedema).
- Cachexia = inflammation-driven cousin; feeding alone insufficient.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Protocol-driven products (F-75/F-100/RUTF) map to case definitions; cachexia-drug trials (ghrelin agonists etc.) illustrate phenotype-specific therapy.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Reproduce the working definition clause by clause.
2. Why is PCM called a "balance-sheet disease"?
3. Distinguish PCM from cachexia metabolically.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Definition = relative deficiency + measurable harm.
- Spectrum by protein vs energy; chronic vs acute axes.
- Case definitions gate treatment protocols.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'classification-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Classification of Protein-Calorie Malnutrition',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `PCM's classifications serve two masters: **pathophysiological teaching** (Wellcome/Gómez traditions) and **operational case-finding** (WHO). Fluency in both is expected.

**1. Wellcome classification (pathophysiology-oriented):** by weight-for-age (% of reference) × oedema:
- **Kwashiorkor:** 60–80% WFA **with oedema**.
- **Marasmic kwashiorkor:** < 60% WFA with oedema.
- **Underweight/marasmus:** < 60% WFA **without oedema** (older texts split "underweight" 60–80% without oedema).
*Teaching value:* separates the oedema axis from the wasting axis.

**2. Gómez classification (historic severity grading):** weight-for-age % — Grade I (76–90%), II (61–75%), III (< 60%) — dominated older paediatric records; limited by age-dependence and missing acute-vs-chronic distinction.

**3. Waterlow classification:** height-for-age % (**stunting** — chronic) × weight-for-height % (**wasting** — acute) — the first system to separate acute from chronic malnutrition conceptually.

**4. WHO operational classification (current standard):**
- **Severe acute malnutrition (SAM):** weight-for-height z < −3 **or** MUAC < 115 mm (6–59 mo) **or** bilateral pitting oedema (+/- any wasting).
- **Moderate acute malnutrition (MAM):** WHZ −3 to −2 / MUAC 115–125 mm.
- **Stunting:** height-for-age z < −2 (chronic; severe < −3).
- **Underweight:** weight-for-age z < −2 (composite, ambiguous axis).
- **Adults:** BMI < 18.5 undernutrition; < 16 severe; MUAC < 185–220 mm bands in pregnancy/emergency screening.

**Marasmus vs kwashiorkor — the two-pathophysiology table:**

| Feature | Marasmus | Kwashiorkor |
|---|---|---|
| Deficit | total energy (± protein) | protein predominant, energy semi-adequate |
| Onset | gradual, months | rapid, weeks (often post-infection/weaning) |
| Weight | severe wasting | mild-moderate (oedema masks) |
| Oedema | absent | **present (hypoalbuminaemia)** |
| Liver | normal/thin | **fatty (apolipoprotein export failure)** |
| Skin/hair | "old man" facies, thin | **flaky-paint dermatosis, flag-sign hair** |
| Appetite | usually preserved | anorexia common |
| Mortality risk | high (late) | **higher (early, metabolic instability)** |
| Metabolic core | adaptation works | adaptation fails (dysregulated) |

Modern immunological research reframes kwashiorkor's oedema as partly **gut-microbiome/oxidant/electrolyte** dysregulation — but the protein-deficit teaching frame remains the exam standard.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Wellcome: WFA% × oedema (kwashiorkor/marasmic-kwashiorkor/marasmus) — pathophysiology teaching.
- Gómez: WFA% grades (historic); Waterlow: acute wasting vs chronic stunting axes.
- WHO: SAM (WHZ < −3 / MUAC < 115 / oedema), MAM (−3 to −2), stunting (HAZ < −2); adults by BMI/MUAC.
- Marasmus = adapted starvation, no oedema; kwashiorkor = failed adaptation + oedema + fatty liver + dermatosis.
- Kwashiorkor carries higher early mortality; oedema masks weight loss.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Protocol products differ by classification (SAM: F-75/F-100/RUTF; MAM: supplementary foods); recognising oedematous SAM as an emergency routes pharmacy supply correctly.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Apply the Wellcome classification to three case vignettes.
2. Which WHO criteria define SAM?
3. Build the marasmus–kwashiorkor comparison table from memory.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Old systems teach pathophysiology; WHO drives operations.
- Oedema is the axis that changes everything (and hides wasting).
- Kwashiorkor = metabolic instability; treat as emergency.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'signs-and-clinical-features-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Signs and Clinical Features',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `PCM writes its story on every organ system — recognition is pattern-matching.

**Growth/body composition:** weight faltering → visible wasting (rib-cage, buttock wasting; "old-man" facies in marasmus); stunting with chronicity; MUAC thinning.

**Oedema (kwashiorkor's signature):** bilateral pitting, starting feet/ankles → legs → face (periorbital puffiness); graded +/++/+++ (ascites at +++); mechanism: **hypoalbuminaemia** (oncotic pressure) + electrolyte (Na⁺ retention/K⁺ depletion) + possible endothelial/microbiome factors.

**Skin (dermatosis):** **flaky-paint dermatosis** — dark, peeling patches over pressure/irritated areas (perineum, knees, elbows); hypopigmented/hyperpigmented mosaic; fragile skin fissures → infection portals. (Distinguish pellagra's sun-exposed dermatitis and kwashiorkor's post-weaning context.)

**Hair:** dyspigmentation (**flag sign** — alternating pale/dark bands reflecting episodic protein availability), sparse, easily plucked (anagen-effluvium-like).

**Eyes:** vitamin A co-deficiency signs — night blindness, Bitot's spots, xerosis → keratomalacia risk (emergency vitamin A in SAM protocols).

**Mouth/GI:** angular stomatitis, glossitis (B-vitamin co-deficits); anorexia (kwashiorkor) vs voracious appetite (marasmus); diarrhoea (mucosal atrophy, infection, fermentation).

**Musculoskeletal:** muscle wasting (esp. temporal/interosseous), hypotonia; bone growth arrestlines (radiology); rickets overlap in vitamin-D co-deficit.

**Cardiovascular/renal:** bradycardia, hypotension, reduced cardiac output (late marasmus — sudden-death risk in aggressive refeeding); impaired renal concentrating ability; sodium-pump (Na⁺/K⁺-ATPase) depression → intracellular K⁺ depletion.

**Neuro/behavioural:** apathy/irritability (kwashiorkor's miserable alertness vs marasmus's listless alertness); developmental regression.

**Haematological:** anaemia (iron/B12/folate/protein co-deficits; malaria burden), leukopenia, thrombocytopenia in severe states.

**Immunity:** thymic atrophy, lymphoid depletion, impaired cell-mediated immunity, reduced complement/secretory IgA — the infection susceptibility engine (measles mortality amplification).

**Metabolic vitals:** hypothermia (energy failure), hypoglycaemia risk (emergency F-75/10% dextrose protocols).`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Wasting + stunting axes; MUAC thinning; old-man facies (marasmus).
- Oedema: pitting, graded; hypoalbuminaemia + electrolyte shifts (kwashiorkor).
- Skin: flaky-paint dermatosis; hair: flag sign; eyes: vitamin A danger.
- CV/renal: bradycardia, hypotension, Na⁺-pump depression (K⁺ depletion).
- Immune: thymic/lymphoid atrophy → infection susceptibility; hypoglycaemia/hypothermia risks.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Vitamin A/emergency protocols, electrolyte (K/Mg/Zn) replacement, skin-infection antibiotics per WHO charts, and hypothermia/hypoglycaemia management products are the pharmacist's SAM toolkit.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Grade kwashiorkor oedema clinically.
2. Explain the flag sign's metabolic meaning.
3. Why does SAM demand hypoglycaemia/hypothermia vigilance?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Every system signs: growth, skin, hair, eyes, gut, heart, immunity.
- Oedema grades severity; dermatosis/flag sign are pathognomonic.
- Metabolic emergencies (glucose, temperature) define early care.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'biochemical-changes-in-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Biochemical Changes',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `PCM's laboratory fingerprint rewires everything the course has taught — read each analyte as metabolism speaking.

**Proteins:**
- **Serum albumin ↓↓** (kwashiorkor hallmark; synthesis falls, oncotic oedema follows; also a drug-binding change — free fraction ↑ for albumin-bound drugs).
- **Prealbumin/transthyretin ↓** (shorter half-life — tracks recent change; inflammation-confounded), transferrin ↓, retinol-binding protein ↓, **IGF-1 ↓** (early, sensitive — growth-hormone resistance pattern: GH rises, IGF-1 falls).
- Complement C3 ↓, secretory IgA ↓ (infection link).

**Energy/metabolic axes:**
- **Glucose:** fasting hypoglycaemia risk (glycogen gone; gluconeogenic capacity strained); glucose-6-phosphatase activity falls late.
- **Insulin ↓ / glucagon ↑ / cortisol & GH ↑** — the counter-regulatory storm; T3 ↓ (adaptive hypothyroid-like state, "euthyroid sick") lowering BMR.
- **Ketones ↑** (adaptive ketosis; marasmus's successful adaptation) — but kwashiorkor shows paradoxically poor ketogenesis (dysregulated gluconeogenesis).
- **FFA/glycerol ↑** (lipolysis), cholesterol usually low.

**Amino-acid/nitrogen markers:**
- **Amino-acid ratio shifts:** essential AAs ↓, non-essential ↑ (E/N ratio falls) — kwashiorkor's biochemical signature; **urea/creatinine ↓** (muscle mass loss + low protein intake → urea production falls).
- **Nitrogen balance strongly negative**; urinary 3-methylhistidine reflects myofibrillar breakdown.
- **Hydroxyproline index ↓** (collagen turnover — growth faltering index).

**Electrolytes/minerals (the refeeding-syndrome set):**
- **Intracellular depletion with normal plasma:** **K⁺, Mg²⁺, phosphate** — masked until feeding drives them into cells (insulin surge) → sudden plasma crashes → **refeeding syndrome** (arrhythmia, respiratory failure — why F-75 is low-protein/low-sodium, staged).
- **Zinc ↓** (growth/immune/taste), selenium ↓ (antioxidant enzymes), copper variable.
- **Na⁺ handling:** sodium-pump failure → intracellular Na⁺ ↑, K⁺ ↓; excess Na⁺ in feeds is dangerous.

**Liver:**
- **Fatty liver (kwashiorkor):** apolipoprotein (B-100/VLDL) synthesis short of substrate → hepatic TAG export fails; enzymes (ALT/AST) usually *not* strikingly high (fatty infiltration ≠ hepatitis); choline deficiency contribution.

**Haematology:** anaemia (mixed micro/macrocytic — iron/B12/folate + protein), low erythropoietin response.

**Oxidant stress:** reduced GSH, vitamin E/C/A co-depletion — the oxidant-injury hypothesis of kwashiorkor's dermatosis/hepatic changes.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Albumin/prealbumin/transferrin ↓; IGF-1 ↓ with GH ↑ (resistance pattern); T3 ↓ (BMR adaptation).
- Glucose: hypoglycaemia risk; ketosis in marasmus; poor ketogenesis in kwashiorkor.
- E/N amino-acid ratio ↓; urea/creatinine ↓; N-balance negative; 3-methylhistidine ↑ (breakdown).
- K⁺/Mg²⁺/PO₄³⁻ intracellular depletion → **refeeding syndrome** danger; Na⁺-pump failure.
- Fatty liver = apoB/VLDL export failure; oxidant stress (GSH/vitamins ↓).`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Refeeding electrolytes (K/Mg/PO₄) protocolised; albumin-bound-drug free-fraction changes; thiamine before refeeding (Wernicke prevention) are the biochemical pharmacy of PCM.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Explain the GH-high/IGF-1-low pattern as adaptation.
2. Why does kwashiorkor develop fatty liver?
3. Trace refeeding syndrome to intracellular electrolyte depletion.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Labs read as adaptation: proteins ↓, counter-regulatory hormones ↑, BMR down.
- Electrolytes hide intracellularly; feeding unmasks them.
- Fatty liver = export failure, not hepatitis.
- Oxidant stress links to skin/liver signs.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'diagnosis-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Diagnosis',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Diagnosis integrates **history, anthropometry, clinical signs, and targeted labs** — operationalised by WHO protocols.

**History:** intake (breastfeeding/breastfeeding cessation, weaning foods, household food security), losses (diarrhoea, vomiting, malabsorption), needs (fever/infection — TB/HIV screening!), social context (conflict, displacement), vaccinations.

**Anthropometry (the backbone):**
- **Weight-for-height z (WHZ)** — acute wasting: < −2 MAM, < −3 SAM.
- **Height-for-age z (HAZ)** — chronic stunting < −2.
- **MUAC** (6–59 months): **< 115 mm SAM**, 115–125 MAM; single best community tool (low resource, high mortality-prediction).
- **Oedema** — bilateral pitting: SAM regardless of indices; grade +/++/+++.
- Adults: BMI < 18.5 (< 16 severe); MUAC < 185 mm pregnancy/emergency; weight-loss % (≥ 5%/month significant).
- Growth charts/faltering trend matter more than single points.

**Clinical examination:** the signs list (dermatosis, flag-sign hair, eye signs, old-man facies, apathy); **appetite test** (RUTF acceptance — the operational gate for outpatient vs inpatient care).

**Laboratory (targeted, not exhaustive):**
- **Glucose** (hypoglycaemia screen — every SAM child on admission), electrolytes (K/Mg/Na), **haemoglobin/malaria smear** (co-burden), HIV/TB screening per protocols.
- **Albumin/prealbumin** (kwashiorkor marker; inflammation-confounded — CRP co-check).
- Vitamin/mineral assessment where feasible (vitamin A, zinc) — often empirical.
- Urinalysis (protein loss), stool (parasites), blood culture if infected (hypothermia hides sepsis!).

**Differential diagnosis:** nephrotic syndrome (oedema + proteinuria), hepatic disease, cardiac failure (oedema), coeliac/CF (malabsorption-PCM), endocrine (growth failure), malignancy/cachexia; **iodine deficiency** cretinism for stunting context.

**Operational triage outputs:** inpatient stabilization vs outpatient RUTF programme; refeeding-risk stratification (age < 2, oedema +++, MUAC < 70 mm, appetite failure); emergency signs (hypoglycaemia, hypothermia < 35.5 °C, dehydration, shock, severe anaemia, eye signs, dermatosis++).

**Documentation/repeat measurement:** MUAC every 2 weeks (community); weight weekly (inpatient) — trend is the treatment-response metric.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- History: intake/losses/needs/social + infection screen (TB/HIV).
- Anthropometry: WHZ (acute), HAZ (chronic), **MUAC < 115 = SAM**, oedema upgrades.
- Appetite test gates outpatient-RUTF vs inpatient care.
- Labs: glucose/electrolytes/Hb/malaria on admission; albumin (CRP-confounded).
- Differentials: nephrotic, hepatic, cardiac, coeliac/CF, malignancy.
- Trends (MUAC q2wk, weight wkly) measure response.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Point-of-care glucose stock, electrolyte solutions, malaria/HIV test kits, and protocol antibiotic packs are pharmacy-anchored diagnostics.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Recite the three WHO SAM criteria.
2. Why is the appetite test operationally decisive?
3. Name four differentials for oedematous malnutrition.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Measure (anthropometry), look (signs), test (targeted), decide (in/out patient).
- MUAC + oedema carry the operational weight.
- Admission labs target the killers: glucose, K⁺, infection.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'consequences-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Consequences',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `PCM's costs are immediate (mortality), developmental (stunting/cognition), and systemic (immunity, economy).

**1. Mortality:** SAM case-fatality historically 20–30% untreated; infection (pneumonia, diarrhoea, measles) is the proximate killer in ~50–70%; hypoglycaemia/hypothermia/electrolyte crashes (refeeding) are the iatrogenic-neighboured killers; modern WHO protocols cut fatality to < 5–10% where implemented.

**2. Growth and development:**
- **Stunting** — chronic PCM's permanent legacy: adult height loss, and (the critical science) **impaired cognitive development** — stunted children score lower on cognition/schooling; window: **conception → 2 years (first 1000 days)** — brain growth velocity makes early deficiency partly irreversible.
- **Organ mass:** brain spared relatively (head-sparing physiology) until late; liver/kidney/GI mass falls; thymus shrinks dramatically.

**3. Immune/infection consequences:** cell-mediated immunity collapses (thymic atrophy; T-cell counts fall), complement/secretory-IgA fall, macrophage killing reduced (oxidative burst low) → infection susceptibility amplifies PCM (the cycle); **measles** case-fatality multiplied; TB/HIV progression accelerated.

**4. Metabolic/endocrine legacy:** glucose intolerance risk in later life (fetal/early-life programming — DOHaD); catch-up growth risks obesity/metabolic syndrome if catch-up is fat-heavy (programmatic challenge in refugee transitions).

**5. Functional/economic:** adult work capacity ↓ (VO₂max, muscle mass), pregnancy outcomes worsen (LBW babies — the intergenerational cycle: LBW → stunted child → stunted adolescent mother → LBW baby), national GDP losses estimated up to several % from stunting alone.

**6. Drug-related consequences (pharmacy lens):**
- **Pharmacokinetics:** hypoalbuminaemia (↑ free fraction), cachectic Vd changes, hepatic CYP down-regulation (metabolism slows), renal function shifts — dosing adaptations needed (aminoglycosides, phenytoin, thiopentone).
- **Pharmacodynamics:** malnourished myocardium/tissues respond differently (opioids/digoxin toxicity risk at usual doses).
- **Formulation:** tablet-splitting/diluent strategies for small masses; electrolyte-load caution in feeds/drugs.

**7. Micronutrient co-casualties:** vitamin A (eyes/infection), zinc (immune/skin/growth), iron (anaemia — but iron *withholding* in early acute phase per protocols — free-iron feeding pathogens!), folate/B12, iodine.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Mortality: infection-led; protocols cut CFR from ~25% to < 10%.
- Stunting: permanent; first-1000-days cognitive impact; head-sparing until late.
- Immunity: CMI/complement/s-IgA collapse → infection amplification cycle.
- DOHaD: early malnutrition programs later metabolic disease; catch-up must avoid fat-heavy overcorrection.
- PK shifts: albumin/free-fraction, CYP down, Vd changes — dose adaptations.
- Intergenerational cycle: LBW → stunting → stunted mother → LBW.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Dose adjustments (aminoglycosides/phenytoin), iron-timing protocols, and catch-up-formula composition are consequence-driven pharmacy decisions.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Why is infection the proximate cause of PCM death?
2. Explain the first-1000-days window's irreversibility logic.
3. Name three PK changes demanding drug-dose adaptation in SAM.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Consequences span death, development, immunity, economy.
- 1000 days shapes the brain; infection closes the cycle.
- PK/PD shifts make "usual doses" unsafe.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier A — clinical) ───────────────
  {
    nodeId: 'treatment-and-prevention-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Treatment and Prevention',
    tier: 'A',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Treatment follows WHO's **10-step inpatient protocol** for complicated SAM and **community RUTF** for uncomplicated SAM; prevention is the cheaper victory.

**Phase 1 — Stabilisation (days 1–7; F-75):**
- Treat/prevent the kill-triad: **hypoglycaemia** (10% dextrose/early feeds), **hypothermia** (warm, cover), **dehydration/shock** (ReSoMal — *modified* ORS, low Na⁺/high K⁺ — NOT standard ORS; IV only for shock), **infection** (broad antibiotics empirically — ampicillin+gentamicin class protocols; no waiting for cultures — immunity is blind), **severe anaemia** (packed cells cautiously; no iron yet).
- **F-75** (75 kcal/100 mL, low protein/Na⁺, high K⁺/Mg²⁺/Zn) — feeds small/frequent (2–3-hourly NG if needed); **NO rapid weight gain yet** (the goal is metabolic stabilisation).
- Electrolyte repair (K⁺ 3–4 mmol/kg/day, Mg²⁺), **thiamine/multivitamin** (before refeeding!), vitamin A day 1.
- Caution: digoxin/diuretics usually *not* indicated (heart failure is rare; oedema is not fluid overload).

**Phase 2 — Rehabilitation (weeks 2–6; F-100 → RUTF):**
- **F-100** (100 kcal/100 mL, higher protein) then **RUTF** (ready-to-use therapeutic food — peanut paste/milk/sugar/oil/vitamin-mineral; isotonic, no water needed, safe at home); ~150–220 kcal/kg/day target.
- **Catch-up growth** — the metabolic sprint: new tissue synthesis (protein + micronutrient demand: K⁺/Mg²⁺/Zn/Fe *now* added, phosphorus monitored).
- **Refeeding syndrome vigilance** (first 3–5 days of phase-2 escalation: PO₄/K/Mg crashes — slow escalation, electrolyte monitoring).
- Stimulation/play (developmental catch-up), mother-training, vaccination catch-up.

**Phase 3 — Follow-up/discharge:** target weight-for-height ≥ −1/−2, MUAC ≥ 125 mm trend; relapse prevention (household food support, follow-up q1–3 months).

**Community/uncomplicated SAM:** appetite test pass + medically well → **outpatient RUTF** (~200 kcal/kg/day) with MUAC/weight surveillance — the programmatic backbone (CMAM model).

**Prevention ladder:**
- **Exclusive breastfeeding 6 months + safe complementary feeding** (the single biggest intervention).
- Micronutrient supplementation: **vitamin A** (6-monthly, 6–59 mo), **zinc** in diarrhoea (20 mg × 10–14 days), iron/folate in pregnancy; salt iodisation.
- Vaccination (measles!), sanitation/water, food security programmes, social protection (cash transfers).
- Maternal nutrition (first-1000-days upstream end: pregnancy).

**Adult/clinical-ward counterparts:** NG/parenteral nutrition algorithms, dietitian-pharmacist TPN teams, cachexia management (illness-treating first), post-discharge supplementation.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Stabilisation: F-75, ReSoMal (not standard ORS), empirical antibiotics, no iron yet, K/Mg repair, thiamine before feeding.
- Rehabilitation: F-100 → RUTF (150–220 kcal/kg/day), catch-up growth, refeeding-syndrome watch (PO₄/K/Mg).
- Community SAM: appetite-pass → outpatient RUTF (CMAM).
- Prevention: exclusive BF + complementary feeding, vit A/zinc/iodine/iron strategies, vaccination, sanitation, social protection.
- Oedema ≠ fluid overload — diuretics/digoxin usually wrong.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `F-75/F-100/RUTF compounding/supply, ReSoMal composition, antibiotic/vitamin-A protocols, and refeeding electrolyte monitoring are pharmacy's clinical SAM core.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. List the stabilisation-phase emergencies and their standing treatments.
2. Why is iron withheld early but given later?
3. Explain ReSoMal's composition difference from standard ORS.`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Stabilise slowly (F-75), rebuild deliberately (F-100/RUTF), prevent structurally.
- Killers first: glucose, warmth, K⁺, infection, anaemia.
- Refeeding syndrome is the treatment's own hazard.
- Prevention outranks cure — breastfeeding leads.`,
      },
    ],
  },

  // ─────────────── SUBTOPIC (Tier B) ───────────────
  {
    nodeId: 'prevention-of-protein-calorie-malnutrition',
    courseId: 'bch-201',
    topicId: 'protein-calorie-malnutrition',
    nodeType: 'subtopic',
    title: 'Treatment and Prevention — Prevention of Protein-Calorie Malnutrition',
    tier: 'B',
    sections: [
      {
        kind: 'UNDERSTAND',
        body: `Prevention operates on the **UNICEF conceptual framework**: adequate food/health/care — and on the lifecycle: maternal → fetal → infant → child.

**1. Maternal/antenatal (the first window):**
- Balanced energy-protein supplementation in undernourished pregnancies (reduces LBW ~30%), iron-folate routine, calcium (pre-eclampsia), iodised salt (cretinism prevention), maternal BMI/micronutrient optimisation.
- Adolescent-girl nutrition (stunted mothers → LBW cycle interruption — "nutrition before pregnancy").

**2. Infancy (0–6 months):**
- **Exclusive breastfeeding** — the single most protective practice (immunological + nutritional);Baby-Friendly Hospital Initiative (no formula marketing in facilities), early initiation (< 1 h), on-demand feeding, no prelacteals/water.

**3. Complementary feeding (6–24 months — the danger window):**
- Adequate frequency (2–3 + snacks), density, diversity; **energy-dense complementary foods**; hygienic preparation; responsive feeding practices.
- Fortified foods/micronutrient powders (sprinkles) where diet is thin.

**4. Micronutrient strategies:**
- **Vitamin A** 6-monthly capsules (6–59 months) — mortality/eye protection.
- **Zinc** adjunct in diarrhoea (shortens episodes; improves post-episode growth).
- Iron-folate (children/pregnancy; malaria-adapted dosing), iodised salt (universal), vitamin D where indicated.

**5. Infection control (breaking the cycle):**
- **Vaccination** (measles — the great malnutrition-amplifier; Rotavirus, pneumococcus), WASH (diarrhoea reduction), malaria control, HIV/TB PMTCT/management, deworming where endemic.

**6. Food-system/social interventions:**
- Household food security (production, markets, **cash transfers** — evidence-strong), school feeding (education + nutrition), fortification programmes (flour: iron/folate/B12; oil: A/D).
- Emergency preparedness (MUAC screening systems, RUTF pipeline pre-positioning).

**7. Behaviour/care practices:**
- Maternal education/care time, birth spacing, responsive feeding/care during illness ("feed through illness" counselling), hygiene.

**Evaluation:** prevalence trends (stunting/wasting surveys), coverage metrics (vit-A rounds, BF rates), programme cost-effectiveness (cash + BCC trials) — the evidence architecture pharmacists encounter in public-health roles.`,
      },
      {
        kind: 'KEY FACTS',
        body: `- Lifecycle ladder: maternal supplementation → exclusive BF → complementary feeding (6–24 mo window) → micronutrients (A/Zn/Fe/iodine).
- Infection control breaks the cycle: measles/rota/pneumo vaccines, WASH, malaria/HIV/TB.
- Social layer: cash transfers, fortification, school feeding, emergency pipelines.
- First-1000-days framing organises all windows.
- Evidence: BF + vit-A + zinc + cash are the heavy hitters.`,
      },
      {
        kind: 'PHARMACY CONNECTION',
        body: `Vitamin-A campaigns, zinc-in-diarrhoea dispensing rules, fortification QC, and RUTF supply chains are prevention-pharmacy practice.`,
      },
      {
        kind: 'CHECK QUESTIONS',
        body: `1. Map the UNICEF framework's three pillars to two interventions each.
2. Why does measles vaccination protect against malnutrition?
3. What makes 6–24 months the danger window?`,
      },
      {
        kind: 'QUICK RECAP',
        body: `- Prevent upstream: mother, breast, complementary foods, micronutrients.
- Vaccines and WASH break the infection loop.
- Cash and fortification fix access; education fixes practice.`,
      },
    ],
  },
];
