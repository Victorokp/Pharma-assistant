/**
 * Smart drug-name checker for Drug Explorer.
 *
 * Purpose: when a student misspells a drug name, offer spelling suggestions
 * instead of a dead end. Two hard safety rules:
 *
 *  1. Suggestions are NEVER auto-applied. The user always confirms by tapping
 *     "Search <correct name>", and the confirmed name is what gets searched.
 *  2. Matching is conservative — when two or more names are plausible, the
 *     UI asks the user to choose; nothing is silently converted.
 *
 * The reference list is a compact set of commonly studied drugs used ONLY for
 * spelling suggestions. It is NOT a drug database: all drug information still
 * comes from the existing AI backend, exactly as before. Add a name here when
 * students commonly misspell it.
 */

/** Compact reference list of commonly studied pharmacy drugs (generic names). */
export const DRUG_REFERENCE_NAMES: string[] = [
  // Analgesics / antipyretics
  'Paracetamol', 'Acetaminophen', 'Ibuprofen', 'Aspirin', 'Diclofenac', 'Naproxen',
  'Tramadol', 'Morphine', 'Pethidine', 'Codeine', 'Indomethacin', 'Ketoprofen',
  // Antibiotics
  'Amoxicillin', 'Ampicillin', 'Penicillin', 'Benzylpenicillin', 'Cloxacillin',
  'Cephalexin', 'Ceftriaxone', 'Cefuroxime', 'Cefixime', 'Azithromycin',
  'Erythromycin', 'Clarithromycin', 'Gentamicin', 'Ciprofloxacin', 'Levofloxacin',
  'Ofloxacin', 'Metronidazole', 'Clindamycin', 'Doxycycline', 'Tetracycline',
  'Chloramphenicol', 'Co-trimoxazole', 'Nitrofurantoin', 'Vancomycin', 'Meropenem',
  // Antimalarials
  'Artemether', 'Lumefantrine', 'Artesunate', 'Chloroquine', 'Quinine',
  'Sulfadoxine', 'Pyrimethamine', 'Primaquine', 'Mefloquine',
  // Cardiovascular
  'Amlodipine', 'Nifedipine', 'Lisinopril', 'Enalapril', 'Losartan', 'Valsartan',
  'Atenolol', 'Bisoprolol', 'Carvedilol', 'Propranolol', 'Metoprolol',
  'Hydrochlorothiazide', 'Furosemide', 'Spironolactone', 'Digoxin', 'Amiodarone',
  'Atorvastatin', 'Simvastatin', 'Rosuvastatin', 'Clopidogrel', 'Warfarin',
  'Heparin', 'Enoxaparin', 'Nitroglycerin', 'Isosorbide', 'Doxazosin',
  // Endocrine
  'Metformin', 'Glibenclamide', 'Glimepiride', 'Gliclazide', 'Insulin',
  'Levothyroxine', 'Carbimazole', 'Propylthiouracil', 'Prednisolone', 'Dexamethasone',
  // Respiratory / allergy
  'Cetirizine', 'Loratadine', 'Chlorpheniramine', 'Salbutamol', 'Salmeterol',
  'Montelukast', 'Prednisone', 'Budesonide', 'Ipratropium', 'Theophylline',
  // CNS
  'Diazepam', 'Lorazepam', 'Phenobarbitone', 'Phenytoin', 'Carbamazepine',
  'Sodium Valproate', 'Gabapentin', 'Haloperidol', 'Olanzapine', 'Risperidone',
  'Fluoxetine', 'Sertraline', 'Amitriptyline', 'Imipramine', 'Donepezil',
  // GI
  'Omeprazole', 'Pantoprazole', 'Esomeprazole', 'Ranitidine', 'Cimetidine',
  'Metoclopramide', 'Domperidone', 'Ondansetron', 'Loperamide', 'Bisacodyl',
  'Oral Rehydration Salts', 'Sucralfate', 'Misoprostol',
  // Vitamins / minerals / supplements
  'Ferrous Sulphate', 'Folic Acid', 'Calcium Carbonate', 'Vitamin D', 'Zinc Sulphate',
  'Multivitamin', 'Thiamine', 'Pyridoxine',
  // Antifungals / antivirals / antiretrovirals
  'Fluconazole', 'Ketoconazole', 'Nystatin', 'Griseofulvin', 'Terbinafine',
  'Clotrimazole', 'Acyclovir', 'Oseltamivir', 'Zidovudine', 'Nevirapine', 'Efavirenz',
];

/** A fuzzy-matching suggestion with its similarity score. */
export type DrugSuggestion = {
  /** Canonical reference name, e.g. "Amoxicillin". */
  name: string;
  /** Similarity in [0, 1]; higher is closer. */
  score: number;
};

/** Outcome of checking a raw search string against the reference list. */
export type DrugNameCheck = {
  /** Exact (case/space-insensitive) hit — search as typed, no suggestion needed. */
  exact: boolean;
  /** One confidently-close name — safe to offer as "Did you mean X?". */
  suggestion: DrugSuggestion | null;
  /** Several plausible names — ask the user to choose. Empty when none. */
  choices: DrugSuggestion[];
};

/** Confidence band boundaries. Tuned conservatively for a pharmacy app. */
const STRONG_SCORE = 0.82;
const PLAUSIBLE_SCORE = 0.7;

/** Normalized Levenshtein similarity: 1 = identical, 0 = nothing alike. */
function levenshteinSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;

  // Two-row DP; row indices swap each iteration.
  let prev = new Array<number>(b.length + 1);
  let curr = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return 1 - prev[b.length] / maxLen;
}

/** Normalize: trim, lowercase, collapse whitespace, strip punctuation. */
export function normalizeDrugName(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, ' ');
}

/**
 * Check a raw user input against the reference list.
 *
 * `exact` is true for a case/space-insensitive match so the existing search
 * behavior is preserved exactly. Otherwise suggestions are ranked by a blend
 * of normalized Levenshtein similarity and a shared-character (bigram) score,
 * which together handle missing/extra/swapped/duplicated letters. Only names
 * in the confidence bands are returned; a completely different input yields
 * no suggestions and the existing not-found behavior stays as-is.
 */
export function checkDrugName(raw: string): DrugNameCheck {
  const query = normalizeDrugName(raw);
  if (!query) return { exact: false, suggestion: null, choices: [] };

  let best: DrugSuggestion | null = null;
  const plausible: DrugSuggestion[] = [];

  for (const name of DRUG_REFERENCE_NAMES) {
    const normalized = normalizeDrugName(name);
    if (normalized === query) {
      return { exact: true, suggestion: null, choices: [] };
    }

    const lev = levenshteinSimilarity(query, normalized);
    const bigrams = bigramSimilarity(query, normalized);
    // Weighted blend: edit distance catches length typos, bigrams catch
    // transpositions and fragmented spellings.
    let score = 0.6 * lev + 0.4 * bigrams;

    // Prefix bonus: a student typing the first few letters of a drug name
    // ("ampi…", "ami…") should see names starting with those letters. Only
    // applies from 3+ typed characters so one stray letter can't flood the
    // list. The user still confirms, so this stays safe.
    if (query.length >= 3 && (normalized.startsWith(query) || query.startsWith(normalized))) {
      score = Math.max(score, STRONG_SCORE + 0.03);
    }

    if (score >= PLAUSIBLE_SCORE) {
      const entry: DrugSuggestion = { name, score };
      plausible.push(entry);
      if (!best || score > best.score) best = entry;
    }
  }

  plausible.sort((a, b) => b.score - a.score);

  // Single strong match → safe "Did you mean?".
  if (best && best.score >= STRONG_SCORE && plausible.filter((p) => p.score >= STRONG_SCORE).length === 1) {
    return { exact: false, suggestion: best, choices: [] };
  }

  // Two or more plausible names → let the user choose.
  const choices = best ? plausible.slice(0, 5) : [];
  return { exact: false, suggestion: null, choices };
}

/** Normalized bigram (Dice) similarity — order-sensitive character pairs. */
function bigramSimilarity(a: string, b: string): number {
  if (a.length < 2 || b.length < 2) {
    return a === b ? 1 : 0;
  }
  const bigramsA = new Map<string, number>();
  for (let i = 0; i < a.length - 1; i++) {
    const g = a.slice(i, i + 2);
    bigramsA.set(g, (bigramsA.get(g) ?? 0) + 1);
  }
  let shared = 0;
  const total = (a.length - 1) + (b.length - 1);
  for (let i = 0; i < b.length - 1; i++) {
    const g = b.slice(i, i + 2);
    const count = bigramsA.get(g);
    if (count && count > 0) {
      shared += 1;
      bigramsA.set(g, count - 1);
    }
  }
  return (2 * shared) / total;
}
