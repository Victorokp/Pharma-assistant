/**
 * Centralized pharmacy curriculum data source.
 *
 * Single source of truth for the pharmacy curriculum structure:
 * Course → Course Code → Topics → Subtopics.
 *
 * Study Mode, Quiz Mode, and Student Progress can consume this module later;
 * nothing else is wired to it yet. To add a course, topic, or subtopic,
 * append it here — components require no changes.
 */

export type CurriculumSubtopic = {
  /** Stable identifier (slug) for keys and future cross-feature links. */
  id: string;
  name: string;
};

export type CurriculumTopic = {
  /** Stable identifier (slug) for keys and future cross-feature links. */
  id: string;
  name: string;
  /** Optional subtopics; a topic may have none yet. */
  subtopics: CurriculumSubtopic[];
};

export type CurriculumCourse = {
  /** Stable identifier (slug) for keys and future cross-feature links. */
  id: string;
  /** Course title, e.g. "Biochemistry". */
  name: string;
  /** Course code, e.g. "BCH 201". */
  code: string;
  /** Academic level marker, e.g. "200L". */
  level: string;
  /** Credit units assigned by the programme. */
  creditUnits: number;
  /** Short line shown under the course name on its card. */
  description: string;
  topics: CurriculumTopic[];
};

export const CURRICULUM: CurriculumCourse[] = [
  {
    id: 'ent-211',
    name: 'Entrepreneurship and Innovation',
    code: 'ENT 211',
    level: '200L',
    creditUnits: 2,
    description: 'Foundations of entrepreneurship and innovation for health professionals.',
    topics: [],
  },
  {
    id: 'ana-201',
    name: 'Human Gross Anatomy/Neuroanatomy',
    code: 'ANA 201',
    level: '200L',
    creditUnits: 2,
    description: 'Gross structure of the human body and the nervous system.',
    topics: [
      {
        id: 'integumentary-system',
        name: 'Integumentary System',
        subtopics: [
          { id: 'introduction-to-the-integumentary-system', name: 'Introduction to the Integumentary System' },
          { id: 'gross-anatomy-of-the-skin-hair-glands-and-nails', name: 'Gross Anatomy of the Skin, Hair, Glands and Nails' },
          { id: 'general-functions-of-the-integumentary-system', name: 'General Functions of the Integumentary System' },
          { id: 'the-epidermis', name: 'The Epidermis' },
          { id: 'strata-layers-of-the-epidermis', name: 'Strata (Layers) of the Epidermis' },
          { id: 'cells-of-the-epidermis', name: 'Cells of the Epidermis' },
          { id: 'the-dermis', name: 'The Dermis' },
          { id: 'the-reticular-layer', name: 'The Reticular Layer' },
          { id: 'dermatomes', name: 'Dermatomes' },
          { id: 'other-basic-elements-of-the-reticular-layer', name: 'Other Basic Elements of the Reticular Layer' },
          { id: 'the-hypodermis', name: 'The Hypodermis' },
          { id: 'accessory-structures-of-the-integumentary-system', name: 'Accessory Structures of the Integumentary System (Epidermal Appendages)' },
          { id: 'hair', name: 'Hair' },
          { id: 'three-layers-of-the-hair', name: 'Three Layers of the Hair' },
          { id: 'three-different-types-of-human-hair', name: 'Three Different Types of Human Hair' },
          { id: 'hair-follicles', name: 'Hair Follicles' },
          { id: 'sudoriferous-glands', name: 'Sudoriferous Glands' },
          { id: 'sebaceous-glands', name: 'Sebaceous Glands' },
          { id: 'ceruminous-glands', name: 'Ceruminous Glands' },
          { id: 'fingernails-and-toenails', name: 'Fingernails and Toenails' },
          { id: 'skin-color', name: 'Skin Color' },
          { id: 'carotene', name: 'Carotene' },
          { id: 'hemoglobin', name: 'Hemoglobin' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'blood-supply-of-the-skin', name: 'Blood Supply of the Skin' },
          { id: 'sensory-innervation-of-the-skin', name: 'Sensory Innervation of the Skin' },
          { id: 'cutaneous-receptors', name: 'Cutaneous Receptors' },
          { id: 'clinical-relevance-of-dermatomes', name: 'Clinical Relevance of Dermatomes' },
        ],
      },
      {
        id: 'skeletal-muscle',
        name: 'Skeletal Muscle',
        subtopics: [
          { id: 'skeletal-muscle-overview', name: 'Skeletal Muscle' },
          { id: 'skeletal-muscle-tissue-and-muscle-organization', name: 'Skeletal Muscle Tissue and Muscle Organization' },
          { id: 'functions-of-the-skeletal-muscular-system', name: 'Functions of the Skeletal Muscular System' },
          { id: 'structural-arrangement-of-skeletal-muscle-cells', name: 'Structural Arrangement of Skeletal Muscle Cells' },
          { id: 'microanatomy-of-skeletal-muscle', name: 'Microanatomy of Skeletal Muscle' },
          { id: 'muscle-control-and-motor-units', name: 'Muscle Control and Motor Units' },
          { id: 'classification-of-skeletal-muscles-by-organization-of-muscle-fascicles', name: 'Classification of Skeletal Muscles by Organization of Muscle Fascicles' },
          { id: 'types-of-skeletal-muscle-fibers', name: 'Types of Skeletal Muscle Fibers' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'neuromuscular-junction', name: 'Neuromuscular Junction' },
          { id: 'sarcomere', name: 'Sarcomere' },
          { id: 'actin-and-myosin', name: 'Actin and Myosin' },
          { id: 'sliding-filament-theory', name: 'Sliding Filament Theory' },
          { id: 'excitation-contraction-coupling', name: 'Excitation-Contraction Coupling' },
          { id: 'mechanism-of-muscle-contraction', name: 'Mechanism of Muscle Contraction' },
          { id: 'muscle-fatigue', name: 'Muscle Fatigue' },
          { id: 'basic-comparison-of-skeletal-cardiac-and-smooth-muscle', name: 'Basic Comparison of Skeletal, Cardiac and Smooth Muscle' },
        ],
      },
      {
        id: 'bone-joints-and-vertebrae',
        name: 'Bone, Joints and Vertebrae',
        subtopics: [
          { id: 'bone', name: 'Bone' },
          // Curriculum-completeness additions — Bone (ANA 201 academic review).
          { id: 'functions-of-bone', name: 'Functions of Bone' },
          { id: 'classification-of-bones', name: 'Classification of Bones' },
          { id: 'gross-structure-of-a-typical-long-bone', name: 'Gross Structure of a Typical Long Bone' },
          { id: 'compact-bone', name: 'Compact Bone' },
          { id: 'cancellous-spongy-bone', name: 'Cancellous/Spongy Bone' },
          { id: 'periosteum', name: 'Periosteum' },
          { id: 'endosteum', name: 'Endosteum' },
          { id: 'bone-marrow', name: 'Bone Marrow' },
          { id: 'bone-cells', name: 'Bone Cells' },
          { id: 'ossification', name: 'Ossification' },
          { id: 'bone-growth-and-remodelling', name: 'Bone Growth and Remodelling' },
          // Curriculum-completeness additions — Joints.
          { id: 'joints', name: 'Joints' },
          { id: 'classification-of-joints', name: 'Classification of Joints' },
          { id: 'fibrous-joints', name: 'Fibrous Joints' },
          { id: 'cartilaginous-joints', name: 'Cartilaginous Joints' },
          { id: 'synovial-joints', name: 'Synovial Joints' },
          { id: 'structure-of-a-synovial-joint', name: 'Structure of a Synovial Joint' },
          { id: 'types-of-synovial-joints', name: 'Types of Synovial Joints' },
          { id: 'movements-at-joints', name: 'Movements at Joints' },
          // Curriculum-completeness additions — Vertebral column.
          { id: 'vertebrae', name: 'Vertebrae' },
          { id: 'typical-vertebra', name: 'Typical Vertebra' },
          { id: 'distinguishing-features-of-vertebrae', name: 'Distinguishing Features of Vertebrae' },
          { id: 'cervical-vertebrae', name: 'Cervical Vertebrae' },
          { id: 'thoracic-vertebrae', name: 'Thoracic Vertebrae' },
          { id: 'lumbar-vertebrae', name: 'Lumbar Vertebrae' },
          { id: 'sacrum', name: 'Sacrum' },
          { id: 'coccyx', name: 'Coccyx' },
          { id: 'intervertebral-discs', name: 'Intervertebral Discs' },
          { id: 'curvatures-of-the-vertebral-column', name: 'Curvatures of the Vertebral Column' },
        ],
      },
      {
        id: 'naming-and-actions-of-muscles',
        name: 'Naming and Actions of Muscles',
        subtopics: [
          { id: 'eight-basic-categories-for-the-naming-of-muscles', name: 'Eight Basic Categories for the Naming of Muscles' },
          { id: 'naming-muscles-by-size', name: 'Naming Muscles by Size — magnus, minor, longus, brevis, etc.' },
          { id: 'naming-muscles-by-shape', name: 'Naming Muscles by Shape — deltoid, teres, etc.' },
          { id: 'naming-muscles-by-orientation-of-muscle-fibers', name: 'Naming Muscles by Orientation of Muscle Fibers — rectus, oblique, transverse, etc.' },
          { id: 'naming-muscles-by-action', name: 'Naming Muscles by Action — adductor, flexor, tensor, extensor, supinator, etc.' },
          { id: 'naming-muscles-by-number-of-heads', name: 'Naming Muscles by Number of Heads — bi, tri and quad' },
          { id: 'naming-muscles-by-origin-and-insertion', name: 'Naming Muscles by Origin and Insertion — sternocleidomastoid, stylohyoid, iliocostalis, zygomaticus, etc.' },
          { id: 'naming-muscles-by-histology-function-or-specific-features', name: 'Naming Muscles by Histology, Function or Specific Features — serratus, sartorius, buccinator, etc.' },
          { id: 'naming-muscles-by-location-and-relative-position', name: 'Naming Muscles by Location and Relative Position — abdominis, femoris, pectoralis, subscapularis, etc.' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'origin-and-insertion', name: 'Origin and Insertion' },
          { id: 'agonist-prime-mover', name: 'Agonist/Prime Mover' },
          { id: 'antagonist', name: 'Antagonist' },
          { id: 'synergist', name: 'Synergist' },
          { id: 'fixator', name: 'Fixator' },
          { id: 'flexion', name: 'Flexion' },
          { id: 'extension', name: 'Extension' },
          { id: 'abduction', name: 'Abduction' },
          { id: 'adduction', name: 'Adduction' },
          { id: 'rotation', name: 'Rotation' },
          { id: 'circumduction', name: 'Circumduction' },
          { id: 'other-basic-anatomical-movements', name: 'Other Basic Anatomical Movements' },
          { id: 'actions-of-muscles', name: 'Actions of Muscles' },
          { id: 'body-movement', name: 'Body Movement' },
        ],
      },
      {
        id: 'lever-systems-and-body-movement',
        name: 'Lever Systems and Body Movement',
        subtopics: [
          { id: 'lever-systems', name: 'Lever Systems' },
          { id: 'levers-power-versus-speed', name: 'Levers: Power versus Speed' },
          { id: 'classes-of-levers-in-the-human-body', name: 'Classes of Levers in the Human Body' },
          { id: 'summary-of-lever-systems-in-the-human-body', name: 'Summary of Lever Systems in the Human Body' },
          { id: 'specific-examples-of-classes-of-levers', name: 'Specific Examples of Classes of Levers' },
        ],
      },
      {
        id: 'heart-gross-anatomy',
        name: 'Heart — Gross Anatomy',
        subtopics: [
          { id: 'heart', name: 'Heart' },
          { id: 'dimensions-of-the-heart', name: 'Dimensions of the Heart' },
          { id: 'relations-of-the-heart', name: 'Relations of the Heart' },
          { id: 'surfaces-and-borders', name: 'Surfaces and Borders' },
          { id: 'sulci-of-the-heart', name: 'Sulci of the Heart' },
          { id: 'pericardial-sinuses', name: 'Pericardial Sinuses' },
          { id: 'anterior-surface-of-the-heart', name: 'Anterior Surface of the Heart' },
          { id: 'auricle', name: 'Auricle' },
          { id: 'posterior-surface-of-the-heart', name: 'Posterior Surface of the Heart' },
          { id: 'coverings-of-the-heart', name: 'Coverings of the Heart' },
          { id: 'relationship-of-serous-pericardium-to-the-heart', name: 'Relationship of Serous Pericardium to the Heart' },
          { id: 'pericardial-layers', name: 'Pericardial Layers' },
          { id: 'layers-of-the-heart-wall', name: 'Layers of the Heart Wall' },
          { id: 'epicardium', name: 'Epicardium' },
          { id: 'myocardium', name: 'Myocardium' },
          { id: 'circular-and-spiral-arrangements-of-cardiac-muscle', name: 'Circular and Spiral Arrangements of Cardiac Muscle' },
          { id: 'endocardium', name: 'Endocardium' },
          { id: 'chambers-of-the-heart', name: 'Chambers of the Heart' },
          { id: 'right-atrium', name: 'Right Atrium' },
          { id: 'right-ventricle', name: 'Right Ventricle' },
          { id: 'left-atrium', name: 'Left Atrium' },
          { id: 'left-ventricle', name: 'Left Ventricle' },
          { id: 'comparison-of-the-heart-chambers', name: 'Comparison of the Heart Chambers' },
          // Curriculum-completeness additions — Great vessels (ANA 201 academic review).
          { id: 'great-vessels-of-the-heart', name: 'Great Vessels of the Heart' },
          { id: 'aorta', name: 'Aorta' },
          { id: 'pulmonary-trunk', name: 'Pulmonary Trunk' },
          { id: 'superior-vena-cava', name: 'Superior Vena Cava' },
          { id: 'inferior-vena-cava', name: 'Inferior Vena Cava' },
          { id: 'pulmonary-veins', name: 'Pulmonary Veins' },
          // Curriculum-completeness additions — Coronary circulation.
          { id: 'coronary-arteries-and-major-branches', name: 'Coronary Arteries and Major Branches' },
          { id: 'coronary-sinus', name: 'Coronary Sinus' },
          // Curriculum-completeness additions — Conducting system.
          { id: 'conducting-system-of-the-heart', name: 'Conducting System of the Heart' },
          { id: 'sa-node', name: 'SA Node' },
          { id: 'av-node', name: 'AV Node' },
          { id: 'atrioventricular-bundle', name: 'Atrioventricular Bundle' },
          { id: 'bundle-branches', name: 'Bundle Branches' },
          { id: 'purkinje-fibres', name: 'Purkinje Fibres' },
          { id: 'fibrous-skeleton-of-the-heart', name: 'Fibrous Skeleton of the Heart' },
        ],
      },
      {
        id: 'heart-valves-blood-supply-and-nerve-supply',
        name: 'Heart — Valves, Blood Supply and Nerve Supply',
        subtopics: [
          { id: 'valves-of-the-heart', name: 'Valves of the Heart' },
          { id: 'blood-supply-to-the-heart', name: 'Blood Supply to the Heart' },
          { id: 'nerve-supply-to-the-heart', name: 'Nerve Supply to the Heart' },
          { id: 'sympathetic-and-parasympathetic-nerve-actions', name: 'Sympathetic and Parasympathetic Nerve Actions' },
          { id: 'cardiac-muscle-fibers', name: 'Cardiac Muscle Fibers' },
          { id: 'applied-anatomy', name: 'Applied Anatomy' },
          { id: 'coronary-angiography', name: 'Coronary Angiography' },
        ],
      },
      {
        id: 'blood-and-circulatory-system',
        name: 'Blood and Circulatory System',
        subtopics: [
          { id: 'blood-fluids-and-circulation', name: 'Blood Fluids and Circulation' },
          { id: 'blood-composition', name: 'Blood Composition' },
          { id: 'blood-corpuscles-or-formed-elements', name: 'Blood Corpuscles or Formed Elements' },
          { id: 'granulocytes', name: 'Granulocytes' },
          { id: 'agranulocytes', name: 'Agranulocytes' },
          { id: 'water-circulatory-system', name: 'Water Circulatory System' },
          { id: 'blood-circulatory-system', name: 'Blood Circulatory System' },
          { id: 'comparison-between-open-and-closed-circulatory-systems', name: 'Comparison Between Open and Closed Circulatory Systems' },
          { id: 'comparison-between-arteries-and-veins', name: 'Comparison Between Arteries and Veins' },
          { id: 'blood-groups', name: 'Blood Groups' },
          { id: 'abo-blood-grouping', name: 'ABO Blood Grouping' },
          { id: 'heart-in-chordates', name: 'Heart in Chordates' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'erythrocytes', name: 'Erythrocytes' },
          { id: 'platelets', name: 'Platelets' },
          { id: 'major-leukocyte-types', name: 'Major Leukocyte Types' },
          { id: 'basic-functions-of-blood-cells', name: 'Basic Functions of Blood Cells' },
          { id: 'major-types-of-blood-vessels', name: 'Major Types of Blood Vessels' },
          { id: 'capillaries', name: 'Capillaries' },
          { id: 'basic-structure-of-arteries', name: 'Basic Structure of Arteries' },
          { id: 'basic-structure-of-veins', name: 'Basic Structure of Veins' },
          { id: 'microcirculation', name: 'Microcirculation' },
        ],
      },
      {
        id: 'human-heart-internal-structure-and-blood-flow',
        name: 'Human Heart — Internal Structure and Blood Flow',
        subtopics: [
          { id: 'structure-of-the-human-heart', name: 'Structure of the Human Heart' },
          { id: 'internal-structure-of-the-human-heart', name: 'Internal Structure of the Human Heart' },
          { id: 'blood-flow-through-the-human-heart', name: 'Blood Flow Through the Human Heart' },
          { id: 'double-circulation', name: 'Double Circulation' },
          { id: 'systemic-circulation', name: 'Systemic Circulation' },
          { id: 'pulmonary-circulation', name: 'Pulmonary Circulation' },
        ],
      },
      {
        id: 'cardiac-cycle-and-heart-function',
        name: 'Cardiac Cycle and Heart Function',
        subtopics: [
          { id: 'cardiac-cycle', name: 'Cardiac Cycle' },
          { id: 'systolic-phase', name: 'Systolic Phase' },
          { id: 'atrial-diastolic-phase', name: 'Atrial Diastolic Phase' },
          { id: 'ventricular-systole', name: 'Ventricular Systole' },
          { id: 'first-heart-sound-lubb', name: 'First Heart Sound — "Lubb"' },
          { id: 'second-heart-sound-dubb', name: 'Second Heart Sound — "Dubb"' },
          { id: 'ventricular-diastole', name: 'Ventricular Diastole' },
          { id: 'joint-diastole', name: 'Joint Diastole' },
          { id: 'origin-of-heartbeat', name: 'Origin of Heartbeat' },
          { id: 'start-of-a-new-cardiac-cycle', name: 'Start of a New Cardiac Cycle' },
          { id: 'pulse-rate', name: 'Pulse Rate' },
          { id: 'cardiac-impulse', name: 'Cardiac Impulse' },
          { id: 'cardiac-output', name: 'Cardiac Output' },
          { id: 'arterial-blood-pressure', name: 'Arterial Blood Pressure' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'stroke-volume', name: 'Stroke Volume' },
          { id: 'heart-rate', name: 'Heart Rate' },
          { id: 'cardiac-output-relationship-co-hr-sv', name: 'Cardiac Output Relationship: CO = HR × SV' },
          { id: 'basic-regulation-of-heart-rate', name: 'Basic Regulation of Heart Rate' },
          { id: 'basic-regulation-of-blood-pressure', name: 'Basic Regulation of Blood Pressure' },
        ],
      },
      {
        id: 'lymphatic-system-and-immunity',
        name: 'Lymphatic System and Immunity',
        subtopics: [
          { id: 'lymphatic-system', name: 'Lymphatic System' },
          { id: 'lymph-nodes', name: 'Lymph Nodes' },
          { id: 'lymphatic-capillaries', name: 'Lymphatic Capillaries' },
          { id: 'lymphatic-vessels', name: 'Lymphatic Vessels' },
          { id: 'lymphatic-trunks', name: 'Lymphatic Trunks' },
          { id: 'lymphatic-ducts', name: 'Lymphatic Ducts' },
          { id: 'lymphatic-cells', name: 'Lymphatic Cells' },
          { id: 'lymphatic-organs', name: 'Lymphatic Organs' },
          { id: 'tissue-fluid-and-the-immune-response', name: 'Tissue Fluid and the Immune Response' },
          { id: 'cells-of-the-immune-system', name: 'Cells of the Immune System' },
          { id: 'innate-immune-response', name: 'Innate Immune Response' },
          { id: 'innate-immune-recognition', name: 'Innate Immune Recognition' },
          { id: 'mechanisms-of-adaptive-immunity', name: 'Mechanisms of Adaptive Immunity' },
          { id: 'antibodies-and-humoral-immunity', name: 'Antibodies and Humoral Immunity' },
          { id: 'vaccination-vs-immunization', name: 'Vaccination vs. Immunization' },
          { id: 'comparison-between-blood-and-lymph', name: 'Comparison Between Blood and Lymph' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'thoracic-duct', name: 'Thoracic Duct' },
          { id: 'right-lymphatic-duct', name: 'Right Lymphatic Duct' },
          { id: 'major-lymph-node-groups', name: 'Major Lymph Node Groups' },
          { id: 'spleen', name: 'Spleen' },
          { id: 'thymus', name: 'Thymus' },
          { id: 'tonsils', name: 'Tonsils' },
          { id: 'bone-marrow-lymphatic', name: 'Bone Marrow' },
          { id: 'primary-lymphoid-organs', name: 'Primary Lymphoid Organs' },
          { id: 'secondary-lymphoid-organs', name: 'Secondary Lymphoid Organs' },
          { id: 'basic-lymph-flow', name: 'Basic Lymph Flow' },
        ],
      },
      {
        id: 'portal-system',
        name: 'Portal System',
        subtopics: [
          { id: 'portal-system-overview', name: 'Portal System' },
          { id: 'types-and-significance-of-portal-system', name: 'Types and Significance of Portal System' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'hepatic-portal-system', name: 'Hepatic Portal System' },
          { id: 'hepatic-portal-vein', name: 'Hepatic Portal Vein' },
          { id: 'tributaries-of-the-hepatic-portal-vein', name: 'Tributaries of the Hepatic Portal Vein' },
          { id: 'portal-circulation', name: 'Portal Circulation' },
          { id: 'relationship-between-portal-and-systemic-circulation', name: 'Relationship Between Portal and Systemic Circulation' },
          { id: 'clinical-significance-of-portal-hypertension', name: 'Clinical Significance of Portal Hypertension' },
        ],
      },
      {
        id: 'electrocardiogram',
        name: 'Electrocardiogram',
        subtopics: [
          { id: 'electrocardiogram-ecg', name: 'Electrocardiogram (ECG)' },
          { id: 'u-wave', name: 'U Wave' },
          { id: 'heart-block', name: 'Heart Block' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'what-an-ecg-represents', name: 'What an ECG Represents' },
          { id: 'p-wave', name: 'P Wave' },
          { id: 'qrs-complex', name: 'QRS Complex' },
          { id: 't-wave', name: 'T Wave' },
          { id: 'pr-interval', name: 'PR Interval' },
          { id: 'qrs-duration', name: 'QRS Duration' },
          { id: 'qt-interval', name: 'QT Interval' },
          { id: 'st-segment', name: 'ST Segment' },
          { id: 'basic-ecg-interpretation', name: 'Basic ECG Interpretation' },
          { id: 'normal-sinus-rhythm', name: 'Normal Sinus Rhythm' },
        ],
      },
      {
        id: 'common-heart-disorders',
        name: 'Common Heart Disorders',
        subtopics: [
          { id: 'common-heart-disorders-overview', name: 'Common Heart Disorders' },
        ],
      },
      {
        id: 'hematopoietic-organs',
        name: 'Hematopoietic Organs',
        subtopics: [
          { id: 'hematopoietic-organs-overview', name: 'Hematopoietic Organs' },
          // Curriculum-completeness additions (ANA 201 academic review).
          { id: 'bone-marrow-hematopoietic', name: 'Bone Marrow' },
          { id: 'spleen-hematopoietic', name: 'Spleen' },
          { id: 'thymus-hematopoietic', name: 'Thymus' },
          { id: 'lymph-nodes-hematopoietic', name: 'Lymph Nodes' },
          { id: 'basic-sites-of-hematopoiesis', name: 'Basic Sites of Hematopoiesis' },
          { id: 'functions-of-hematopoietic-organs', name: 'Functions of Hematopoietic Organs' },
        ],
      },
      {
        id: 'nervous-system-anatomy',
        name: 'Nervous System Anatomy',
        subtopics: [
          { id: 'nervous-system-anatomy-overview', name: 'Nervous System Anatomy' },
          // Curriculum-completeness additions — Organization (ANA 201 academic review).
          { id: 'nervous-system-organization', name: 'Nervous System Organization' },
          { id: 'central-nervous-system', name: 'Central Nervous System' },
          { id: 'peripheral-nervous-system', name: 'Peripheral Nervous System' },
          { id: 'somatic-nervous-system', name: 'Somatic Nervous System' },
          { id: 'autonomic-nervous-system', name: 'Autonomic Nervous System' },
          // Brain.
          { id: 'major-divisions-of-the-brain', name: 'Major Divisions of the Brain' },
          { id: 'cerebrum', name: 'Cerebrum' },
          { id: 'cerebral-hemispheres', name: 'Cerebral Hemispheres' },
          { id: 'lobes-of-the-brain', name: 'Lobes of the Brain' },
          { id: 'cerebellum', name: 'Cerebellum' },
          { id: 'brainstem', name: 'Brainstem' },
          { id: 'diencephalon', name: 'Diencephalon' },
          // Spinal cord.
          { id: 'gross-structure-of-the-spinal-cord', name: 'Gross Structure of the Spinal Cord' },
          { id: 'spinal-nerves', name: 'Spinal Nerves' },
          { id: 'basic-organization-of-the-spinal-cord', name: 'Basic Organization of the Spinal Cord' },
          // Meninges.
          { id: 'meninges', name: 'Meninges' },
          { id: 'dura-mater', name: 'Dura Mater' },
          { id: 'arachnoid-mater', name: 'Arachnoid Mater' },
          { id: 'pia-mater', name: 'Pia Mater' },
          { id: 'subarachnoid-space', name: 'Subarachnoid Space' },
          // Ventricular system and CSF.
          { id: 'brain-ventricles', name: 'Brain Ventricles' },
          { id: 'cerebrospinal-fluid', name: 'Cerebrospinal Fluid' },
          { id: 'basic-circulation-of-csf', name: 'Basic Circulation of CSF' },
          // Cranial nerves.
          { id: 'cranial-nerves-i-xii', name: 'Cranial Nerves I–XII' },
          { id: 'basic-functions-of-cranial-nerves', name: 'Basic Functions of Cranial Nerves' },
          { id: 'sensory-motor-and-mixed-cranial-nerves', name: 'Sensory, Motor and Mixed Cranial Nerves' },
          // Autonomic nervous system.
          { id: 'sympathetic-nervous-system', name: 'Sympathetic Nervous System' },
          { id: 'parasympathetic-nervous-system', name: 'Parasympathetic Nervous System' },
          // Cerebral circulation.
          { id: 'basic-blood-supply-of-the-brain', name: 'Basic Blood Supply of the Brain' },
          { id: 'circle-of-willis', name: 'Circle of Willis' },
          // Functional anatomy.
          { id: 'major-motor-areas', name: 'Major Motor Areas' },
          { id: 'major-sensory-areas', name: 'Major Sensory Areas' },
          { id: 'basic-language-areas', name: 'Basic Language Areas' },
        ],
      },
    ],
  },
  {
    id: 'ana-203',
    name: 'Histology',
    code: 'ANA 203',
    level: '200L',
    creditUnits: 1,
    description: 'Microscopic structure of tissues and organs.',
    topics: [],
  },
  {
    id: 'bch-201',
    name: 'Biochemistry',
    code: 'BCH 201',
    level: '200L',
    creditUnits: 3,
    description: 'Chemical processes within living organisms — the foundation of drug action.',
    topics: [
      {
        id: 'introduction-to-biochemistry',
        name: 'Introduction to Biochemistry',
        subtopics: [
          { id: 'importance-of-biochemistry-to-health-sciences', name: 'Importance of Biochemistry to Health Sciences' },
        ],
      },
      {
        // Reintroduced — enzymes are core 200L Biochemistry. Curriculum-completeness
        // addition (not from the lecturer PDF); id matches the pre-outline topic.
        id: 'enzymes',
        name: 'Enzymes',
        subtopics: [
          { id: 'introduction-to-enzymes', name: 'Introduction to Enzymes' },
          { id: 'classification-of-enzymes', name: 'Classification of Enzymes' },
          { id: 'enzyme-specificity', name: 'Enzyme Specificity' },
          { id: 'factors-affecting-enzyme-activity', name: 'Factors Affecting Enzyme Activity' },
          { id: 'enzyme-kinetics', name: 'Enzyme Kinetics' },
          { id: 'michaelis-menten-kinetics', name: 'Michaelis-Menten Kinetics' },
          { id: 'km-and-vmax', name: 'Km and Vmax' },
          { id: 'competitive-inhibition', name: 'Competitive Inhibition' },
          { id: 'non-competitive-inhibition', name: 'Non-competitive Inhibition' },
          { id: 'enzyme-regulation', name: 'Enzyme Regulation' },
          { id: 'clinical-significance-of-enzymes', name: 'Clinical Significance of Enzymes' },
        ],
      },
      {
        id: 'metabolism',
        name: 'Metabolism — Introduction to the Study of Intermediary Metabolism',
        subtopics: [
          { id: 'metabolism-overview', name: 'Metabolism' },
          { id: 'catabolism', name: 'Catabolism' },
          { id: 'anabolism', name: 'Anabolism' },
          { id: 'functions-of-metabolism', name: 'Functions of metabolism' },
          { id: 'intermediary-metabolism', name: 'Intermediary or intermediate metabolism' },
          // Stable ids reused from the previous outline (same subjects).
          { id: 'carbohydrate-metabolism', name: 'Carbohydrate metabolism' },
          { id: 'protein-metabolism', name: 'Protein metabolism' },
          { id: 'lipid-metabolism', name: 'Fats metabolism' },
          { id: 'major-intermediates', name: 'Major intermediates' },
          { id: 'tricarboxylic-acid-cycle', name: 'The Tricarboxylic Acid Cycle (TCA cycle)' },
          { id: 'regulation-of-metabolism', name: 'Regulation of metabolism' },
        ],
      },
      {
        // Curriculum-completeness expansion — promoted to a full topic; topic id
        // reuses the existing metabolism subtopic id (same subject, stable link).
        id: 'carbohydrate-metabolism-topic',
        name: 'Carbohydrate Metabolism',
        subtopics: [
          { id: 'glycolysis', name: 'Glycolysis' },
          { id: 'major-steps-of-glycolysis', name: 'Major Steps of Glycolysis' },
          { id: 'regulation-of-glycolysis', name: 'Regulation of Glycolysis' },
          { id: 'fate-of-pyruvate', name: 'Fate of Pyruvate' },
          { id: 'pyruvate-oxidation', name: 'Pyruvate Oxidation' },
          { id: 'citric-acid-cycle-relationship', name: 'Citric Acid Cycle Relationship' },
          { id: 'gluconeogenesis-carb', name: 'Gluconeogenesis' },
          { id: 'regulation-of-gluconeogenesis', name: 'Regulation of Gluconeogenesis' },
          { id: 'glycogenesis', name: 'Glycogenesis' },
          { id: 'glycogenolysis', name: 'Glycogenolysis' },
          { id: 'regulation-of-glycogen-metabolism', name: 'Regulation of Glycogen Metabolism' },
          { id: 'pentose-phosphate-pathway', name: 'Pentose Phosphate Pathway' },
          { id: 'major-functions-of-the-pentose-phosphate-pathway', name: 'Major Functions of the Pentose Phosphate Pathway' },
          { id: 'blood-glucose-regulation', name: 'Blood Glucose Regulation' },
          { id: 'basic-hormonal-regulation-of-glucose-metabolism', name: 'Basic Hormonal Regulation of Glucose Metabolism' },
        ],
      },
      {
        // Curriculum-completeness expansion — topic id reuses the existing
        // metabolism subtopic id (same subject, stable link).
        id: 'protein-metabolism-topic',
        name: 'Protein Metabolism',
        subtopics: [
          { id: 'protein-turnover', name: 'Protein Turnover' },
          { id: 'amino-acid-pool', name: 'Amino Acid Pool' },
          { id: 'protein-synthesis-overview', name: 'Protein Synthesis Overview' },
          { id: 'nitrogen-balance', name: 'Nitrogen Balance' },
          { id: 'transamination', name: 'Transamination' },
          { id: 'oxidative-deamination', name: 'Oxidative Deamination' },
          { id: 'ammonia-metabolism', name: 'Ammonia Metabolism' },
          { id: 'urea-cycle-protein', name: 'Urea Cycle' },
          { id: 'regulation-significance-of-the-urea-cycle', name: 'Regulation/Significance of the Urea Cycle' },
          { id: 'fate-of-amino-acid-carbon-skeletons', name: 'Fate of Amino Acid Carbon Skeletons' },
        ],
      },
      {
        // Curriculum-completeness expansion — topic id reuses the existing
        // metabolism subtopic id (same subject, stable link).
        id: 'lipid-metabolism-topic',
        name: 'Lipid/Fats Metabolism',
        subtopics: [
          { id: 'digestion-and-absorption-of-lipids', name: 'Digestion and Absorption of Lipids' },
          { id: 'fatty-acid-activation', name: 'Fatty Acid Activation' },
          { id: 'beta-oxidation', name: 'Beta-oxidation' },
          { id: 'regulation-of-beta-oxidation', name: 'Regulation of Beta-oxidation' },
          { id: 'fatty-acid-synthesis', name: 'Fatty Acid Synthesis' },
          { id: 'ketone-bodies', name: 'Ketone Bodies' },
          { id: 'ketogenesis', name: 'Ketogenesis' },
          { id: 'ketone-body-utilization', name: 'Ketone Body Utilization' },
          { id: 'cholesterol-synthesis', name: 'Cholesterol Synthesis' },
          { id: 'cholesterol-transport', name: 'Cholesterol Transport' },
          { id: 'lipoproteins', name: 'Lipoproteins' },
          { id: 'basic-lipid-storage-and-mobilization', name: 'Basic Lipid Storage and Mobilization' },
        ],
      },
      {
        id: 'disorders-of-intermediary-metabolism',
        name: 'Disorders of Intermediary Metabolism',
        subtopics: [
          { id: 'aminoacidopathies', name: 'Aminoacidopathies' },
          { id: 'organic-acidurias', name: 'Organic Acidurias' },
          { id: 'disorders-of-ammonia-detoxification', name: 'Disorders of Ammonia Detoxification (Urea Cycle Disorders)' },
          { id: 'fatty-acid-oxidation-disorders', name: 'Fatty acid oxidation disorders' },
        ],
      },
      {
        id: 'amino-acids',
        name: 'Amino Acids',
        subtopics: [
          { id: 'introduction-to-amino-acids', name: 'Introduction to amino acids' },
          { id: 'classification-of-amino-acids', name: 'Classification of amino acids' },
          { id: 'classification-based-on-nutritional-status', name: 'Classification based on nutritional status' },
          { id: 'classification-based-on-r-group-properties', name: 'Classification based on R-group properties' },
          { id: 'other-amino-acid-classifications', name: 'Other amino acid classifications' },
          { id: 'charged-and-uncharged-amino-acids', name: 'Charged and uncharged amino acids' },
          { id: 'hydrophobic-and-hydrophilic-amino-acids', name: 'Hydrophobic and hydrophilic amino acids' },
          { id: 'hydrophobic-amino-acids', name: 'Hydrophobic amino acids' },
          { id: 'polar-and-nonpolar-amino-acids', name: 'Polar and nonpolar amino acids' },
          { id: 'classification-based-on-energy-production', name: 'Classification based on energy production' },
        ],
      },
      {
        id: 'amino-acid-metabolism',
        name: 'Amino Acid Metabolism',
        subtopics: [
          { id: 'amino-acid-catabolism', name: 'Amino acid catabolism' },
          { id: 'amino-acid-biosynthesis', name: 'Amino acid biosynthesis' },
          { id: 'glutamate-pathway', name: 'Glutamate pathway' },
          { id: 'aspartate-pathway', name: 'Aspartate pathway' },
          { id: 'amino-acid-degradation', name: 'Amino acid degradation' },
          { id: 'features-of-transamination', name: 'Features of transamination' },
          { id: 'oxidation-of-carbon-skeletons', name: 'Oxidation of carbon skeletons' },
          { id: 'amino-acids-as-precursors', name: 'Amino acids as precursors' },
          { id: 'amino-acids-as-precursors-of-neurotransmitters', name: 'Amino acids as precursors of neurotransmitters' },
          { id: 'amino-acids-as-precursors-of-hormones', name: 'Amino acids as precursors of hormones' },
          { id: 'amino-acids-as-precursors-of-nucleotides', name: 'Amino acids as precursors of nucleotides' },
        ],
      },
      {
        id: 'urea-cycle',
        name: 'Urea Cycle',
        subtopics: [
          { id: 'urea-cycle-overview', name: 'Urea cycle' },
        ],
      },
      {
        id: 'keto-acid-utilization',
        name: 'Keto Acid Utilization',
        subtopics: [
          { id: 'keto-acid-utilization-overview', name: 'Keto acid utilization' },
        ],
      },
      {
        id: 'gluconeogenesis',
        name: 'Gluconeogenesis',
        subtopics: [
          { id: 'gluconeogenesis-overview', name: 'Gluconeogenesis' },
        ],
      },
      {
        id: 'citric-acid-cycle',
        name: 'Citric Acid Cycle (Krebs Cycle)',
        subtopics: [
          { id: 'citric-acid-cycle-overview', name: 'Citric Acid Cycle (Krebs Cycle)' },
          { id: 'pyruvate-derived-from-alanine', name: 'Pyruvate — derived from alanine' },
          { id: 'alpha-ketoglutarate-derived-from-glutamate', name: 'α-Ketoglutarate — derived from glutamate' },
          { id: 'succinyl-coa-derived-from-amino-acids', name: 'Succinyl-CoA — derived from amino acids such as valine and isoleucine' },
          { id: 'oxaloacetate-derived-from-aspartate', name: 'Oxaloacetate — derived from aspartate' },
        ],
      },
      {
        id: 'protein-structure-and-function',
        name: 'Protein Structure and Function',
        subtopics: [
          { id: 'protein-structure-and-function-overview', name: 'Protein structure and function' },
          { id: 'primary-structure', name: 'Primary structure' },
          { id: 'secondary-structure', name: 'Secondary structure' },
          { id: 'examples-of-secondary-structure', name: 'Examples of secondary structure' },
          { id: 'tertiary-structure', name: 'Tertiary structure' },
          { id: 'examples-of-tertiary-structure', name: 'Examples of tertiary structure' },
          { id: 'quaternary-structure', name: 'Quaternary structure' },
          { id: 'protein-structure-function-relationship', name: 'Protein structure-function relationship' },
          // Curriculum-completeness additions (BCH 201 academic review).
          { id: 'amino-acid-peptide-bonds', name: 'Amino Acid Peptide Bonds' },
          { id: 'protein-folding', name: 'Protein Folding' },
          { id: 'denaturation', name: 'Denaturation' },
          { id: 'renaturation', name: 'Renaturation' },
          { id: 'forces-stabilizing-protein-structure', name: 'Forces Stabilizing Protein Structure' },
          { id: 'functional-consequences-of-structural-changes', name: 'Functional Consequences of Structural Changes' },
        ],
      },
      {
        id: 'membranes-and-cell-structure',
        name: 'Membranes and Cell Structure',
        subtopics: [
          { id: 'membranes-and-cell-structure-overview', name: 'Membranes and cell structure' },
          { id: 'cell-structure', name: 'Cell structure' },
          { id: 'techniques-used-in-biochemistry-and-medicine', name: 'Techniques used in biochemistry and medicine' },
          { id: 'nuclear-magnetic-resonance-spectroscopy', name: 'Nuclear Magnetic Resonance (NMR) spectroscopy' },
          { id: 'x-ray-crystallography', name: 'X-ray crystallography' },
          { id: 'electron-microscopy', name: 'Electron microscopy' },
          { id: 'transmission-electron-microscopy', name: 'Transmission electron microscopy' },
          { id: 'scanning-electron-microscopy', name: 'Scanning electron microscopy' },
          // Curriculum-completeness additions (BCH 201 academic review).
          { id: 'biological-membranes', name: 'Biological Membranes' },
          { id: 'membrane-lipids', name: 'Membrane Lipids' },
          { id: 'membrane-proteins', name: 'Membrane Proteins' },
          { id: 'membrane-transport', name: 'Membrane Transport' },
          { id: 'passive-transport', name: 'Passive Transport' },
          { id: 'facilitated-diffusion', name: 'Facilitated Diffusion' },
          { id: 'active-transport', name: 'Active Transport' },
          { id: 'endocytosis', name: 'Endocytosis' },
          { id: 'exocytosis', name: 'Exocytosis' },
        ],
      },
      {
        id: 'digestion',
        name: 'Digestion',
        subtopics: [
          { id: 'protein-digestion', name: 'Protein digestion' },
          // Curriculum-completeness additions (BCH 201 academic review).
          { id: 'carbohydrate-digestion', name: 'Carbohydrate Digestion' },
          { id: 'lipid-digestion', name: 'Lipid Digestion' },
        ],
      },
      {
        id: 'absorption',
        name: 'Absorption',
        subtopics: [
          { id: 'mechanisms-of-absorption', name: 'Mechanisms of absorption' },
          // Curriculum-completeness additions (BCH 201 academic review).
          { id: 'absorption-of-carbohydrates', name: 'Absorption of Carbohydrates' },
          { id: 'absorption-of-amino-acids-peptides', name: 'Absorption of Amino Acids/Peptides' },
          { id: 'absorption-of-lipids', name: 'Absorption of Lipids' },
          { id: 'basic-mechanisms-of-intestinal-absorption', name: 'Basic Mechanisms of Intestinal Absorption' },
        ],
      },
      {
        id: 'protein-transport',
        name: 'Protein Transport',
        subtopics: [
          { id: 'protein-transport-overview', name: 'Protein transport' },
        ],
      },
      {
        id: 'protein-calorie-malnutrition',
        name: 'Protein-Calorie Malnutrition (PCM)',
        subtopics: [
          { id: 'protein-calorie-malnutrition-overview', name: 'Protein-Calorie Malnutrition' },
          { id: 'classification-of-protein-calorie-malnutrition', name: 'Classification of Protein-Calorie Malnutrition' },
          { id: 'signs-and-clinical-features-of-protein-calorie-malnutrition', name: 'Signs and clinical features of Protein-Calorie Malnutrition' },
          { id: 'biochemical-changes-in-protein-calorie-malnutrition', name: 'Biochemical changes in Protein-Calorie Malnutrition' },
          { id: 'diagnosis-of-protein-calorie-malnutrition', name: 'Diagnosis of Protein-Calorie Malnutrition' },
          { id: 'consequences-of-protein-calorie-malnutrition', name: 'Consequences of Protein-Calorie Malnutrition' },
          { id: 'treatment-and-prevention-of-protein-calorie-malnutrition', name: 'Treatment and prevention of Protein-Calorie Malnutrition' },
          // Curriculum-completeness additions — explicit definition/prevention items
          // (BCH 201 academic review; the seven supplied lines above stay intact).
          { id: 'definition-of-protein-calorie-malnutrition', name: 'Definition of Protein-Calorie Malnutrition' },
          { id: 'prevention-of-protein-calorie-malnutrition', name: 'Prevention of Protein-Calorie Malnutrition' },
        ],
      },
      {
        // Curriculum-completeness addition — foundational section (BCH 201
        // academic review; not from the lecturer PDF).
        id: 'bioenergetics',
        name: 'Bioenergetics',
        subtopics: [
          { id: 'atp', name: 'ATP' },
          { id: 'high-energy-compounds', name: 'High-energy Compounds' },
          { id: 'oxidation-reduction-reactions', name: 'Oxidation-Reduction Reactions' },
          { id: 'electron-transport-chain', name: 'Electron Transport Chain' },
          { id: 'oxidative-phosphorylation', name: 'Oxidative Phosphorylation' },
          { id: 'mitochondrial-energy-production', name: 'Mitochondrial Energy Production' },
        ],
      },
      {
        // Curriculum-completeness addition — foundational section (BCH 201
        // academic review; not from the lecturer PDF).
        id: 'nucleotides-and-nucleic-acids',
        name: 'Nucleotides and Nucleic Acids',
        subtopics: [
          { id: 'structure-of-nucleotides', name: 'Structure of Nucleotides' },
          { id: 'dna-structure', name: 'DNA Structure' },
          { id: 'rna-structure', name: 'RNA Structure' },
          { id: 'dna-vs-rna', name: 'DNA vs RNA' },
          { id: 'nucleotide-functions', name: 'Nucleotide Functions' },
          { id: 'overview-of-dna-replication', name: 'Overview of DNA Replication' },
          { id: 'overview-of-transcription', name: 'Overview of Transcription' },
          { id: 'overview-of-translation', name: 'Overview of Translation' },
          { id: 'purine-metabolism', name: 'Purine Metabolism' },
          { id: 'pyrimidine-metabolism', name: 'Pyrimidine Metabolism' },
        ],
      },
      {
        // Curriculum-completeness addition — foundational section (BCH 201
        // academic review; not from the lecturer PDF).
        id: 'clinical-biochemistry',
        name: 'Clinical Biochemistry',
        subtopics: [
          { id: 'biochemical-markers-and-their-clinical-significance', name: 'Biochemical Markers and their Clinical Significance' },
          { id: 'basic-interpretation-of-blood-glucose', name: 'Basic Interpretation of Blood Glucose' },
          { id: 'basic-interpretation-of-lipid-profile', name: 'Basic Interpretation of Lipid Profile' },
          { id: 'basic-interpretation-of-liver-related-biochemical-tests', name: 'Basic Interpretation of Liver-related Biochemical Tests' },
          { id: 'basic-interpretation-of-renal-related-biochemical-tests', name: 'Basic Interpretation of Renal-related Biochemical Tests' },
        ],
      },
    ],
  },
  {
    id: 'phm-201',
    name: 'Introduction to Pharmaceutical Microbiology',
    code: 'PHM 201',
    level: '200L',
    creditUnits: 3,
    description: 'Microorganisms and how medicines control them — sterilization to infection.',
    topics: [
      {
        id: 'history-of-microbiology',
        name: 'Introduction and History of Microbiology',
        subtopics: [
          { id: 'microorganisms', name: 'Microorganisms' },
          { id: 'discovery-of-microorganisms', name: 'Discovery of Microorganisms' },
          { id: 'spontaneous-generation-vs-biogenesis', name: 'Spontaneous Generation vs Biogenesis' },
          { id: 'recognition-of-microorganisms-in-disease', name: 'Recognition of Microorganisms in Disease' },
          { id: 'historical-development-of-microbiology', name: 'Historical Development of Microbiology' },
          { id: 'development-of-microbiology-as-a-scientific-field', name: 'Development of Microbiology as a Scientific Field' },
          { id: 'progress-in-the-20th-century', name: 'Progress in the 20th Century' },
          { id: 'effects-of-microbiology-on-health', name: 'Effects of Microbiology on Health' },
        ],
      },
      {
        // Preserved existing topic id 'bacteria' (was the bare 'Bacteria' topic).
        id: 'bacteria',
        name: 'Bacterial Cell Structure and Classification',
        subtopics: [
          { id: 'systematic-classification-of-bacteria', name: 'Systematic Classification of Bacteria' },
          { id: 'nine-bacterial-classifications-types', name: 'The Nine Bacterial Classifications/Types' },
          { id: 'eubacteria-and-archaea', name: 'Eubacteria and Archaea' },
          { id: 'structure-of-bacterial-cells', name: 'Structure of Bacterial Cells' },
          { id: 'cell-wall', name: 'Cell Wall' },
          { id: 'peptidoglycan', name: 'Peptidoglycan' },
          { id: 'cytoplasmic-membrane', name: 'Cytoplasmic Membrane' },
          { id: 'capsule-slime-layer', name: 'Capsule/Slime Layer' },
          { id: 'flagella', name: 'Flagella' },
          { id: 'fimbriae-pili', name: 'Fimbriae/Pili' },
          { id: 'ribosomes', name: 'Ribosomes' },
          { id: 'nucleoid', name: 'Nucleoid' },
          { id: 'plasmids', name: 'Plasmids' },
          { id: 'functions-of-major-bacterial-structures', name: 'Functions of Major Bacterial Structures' },
          { id: 'gram-positive-vs-gram-negative-bacteria', name: 'Gram-positive vs Gram-negative Bacteria' },
          { id: 'basic-gram-staining-principle', name: 'Basic Gram Staining Principle' },
        ],
      },
      {
        id: 'bacterial-growth-and-physiology',
        name: 'Bacterial Growth and Physiology',
        subtopics: [
          { id: 'mechanism-of-bacterial-growth', name: 'Mechanism of Bacterial Growth' },
          { id: 'binary-fission', name: 'Binary Fission' },
          { id: 'growth-rate', name: 'Growth Rate' },
          { id: 'generation-time-and-formula', name: 'Generation Time and Formula' },
          { id: 'generation-time-of-selected-bacteria', name: 'Generation Time of Selected Bacteria' },
          { id: 'bacterial-growth-curve', name: 'Bacterial Growth Curve' },
          { id: 'bacterial-growth-cycle', name: 'Bacterial Growth Cycle' },
          { id: 'lag-phase', name: 'Lag Phase' },
          { id: 'factors-affecting-lag-phase', name: 'Factors Affecting Lag Phase' },
          { id: 'exponential-log-phase', name: 'Exponential/Log Phase' },
          { id: 'stationary-phase', name: 'Stationary Phase' },
          { id: 'decline-death-phase', name: 'Decline/Death Phase' },
          { id: 'factors-affecting-bacterial-growth', name: 'Factors Affecting Bacterial Growth' },
          { id: 'temperature', name: 'Temperature' },
          { id: 'oxygen-requirements', name: 'Oxygen Requirements' },
          { id: 'ph', name: 'pH' },
          { id: 'nutritional-requirements-of-bacteria', name: 'Nutritional Requirements of Bacteria' },
          { id: 'carbon-nitrogen-minerals-and-growth-factors', name: 'Carbon, Nitrogen, Minerals and Growth Factors' },
          { id: 'aerobic-organisms', name: 'Aerobic Organisms' },
          { id: 'anaerobic-organisms', name: 'Anaerobic Organisms' },
          { id: 'facultative-anaerobes', name: 'Facultative Anaerobes' },
          { id: 'microaerophiles', name: 'Microaerophiles' },
          { id: 'oxygen-requirements-and-cultivation', name: 'Oxygen Requirements and Cultivation' },
        ],
      },
      {
        id: 'culture-media-cultivation-isolation',
        name: 'Culture Media, Cultivation and Isolation',
        subtopics: [
          { id: 'reasons-for-microbial-cultivation', name: 'Reasons for Microbial Cultivation' },
          { id: 'purpose-of-culturing-microorganisms', name: 'Purpose of Culturing Microorganisms' },
          { id: 'advantages-of-culturing', name: 'Advantages of Culturing' },
          { id: 'limitations-of-culturing', name: 'Limitations of Culturing' },
          { id: 'culture-media', name: 'Culture Media' },
          { id: 'composition-of-culture-media', name: 'Composition of Culture Media' },
          { id: 'common-ingredients-of-culture-media', name: 'Common Ingredients of Culture Media' },
          { id: 'properties-of-agar', name: 'Properties of Agar' },
          { id: 'classification-of-culture-media', name: 'Classification of Culture Media' },
          { id: 'methods-of-culturing', name: 'Methods of Culturing' },
          { id: 'cultivation-and-isolation-methods', name: 'Cultivation and Isolation Methods' },
          { id: 'pure-culture', name: 'Pure Culture' },
          { id: 'streak-plate-method', name: 'Streak Plate Method' },
          { id: 'spread-plate-method', name: 'Spread Plate Method' },
          { id: 'pour-plate-method', name: 'Pour Plate Method' },
          { id: 'anaerobic-culture-techniques', name: 'Anaerobic Culture Techniques' },
          { id: 'colony-morphology', name: 'Colony Morphology' },
          { id: 'basic-interpretation-of-microbial-growth', name: 'Basic Interpretation of Microbial Growth' },
        ],
      },
      {
        id: 'microbial-identification',
        name: 'Microbial Identification',
        subtopics: [
          { id: 'microscopy-in-microbial-identification', name: 'Microscopy in Microbial Identification' },
          { id: 'gram-staining', name: 'Gram Staining' },
          { id: 'acid-fast-staining', name: 'Acid-fast Staining' },
          { id: 'colony-morphology-identification', name: 'Colony Morphology' },
          { id: 'biochemical-tests-and-reactions', name: 'Biochemical Tests and Reactions' },
          { id: 'biochemical-identification-principles', name: 'Biochemical Identification Principles' },
          { id: 'basic-bacterial-identification-workflow', name: 'Basic Bacterial Identification Workflow' },
        ],
      },
      {
        id: 'enumeration-of-microorganisms',
        name: 'Enumeration of Microorganisms',
        subtopics: [
          { id: 'enumeration-of-microbes', name: 'Enumeration of Microbes' },
          { id: 'enumeration-methods', name: 'Enumeration Methods' },
          { id: 'standard-plate-count-viable-cell-count', name: 'Standard Plate Count / Viable Cell Count' },
          { id: 'advantages-and-limitations-of-the-plate-count', name: 'Advantages and Limitations of the Plate Count' },
          { id: 'determination-of-cfu-per-ml', name: 'Determination of CFU/mL' },
          { id: 'dilution-factor', name: 'Dilution Factor' },
          { id: 'cfu-per-ml-calculations', name: 'CFU/mL Calculations' },
          { id: 'direct-microscopic-count', name: 'Direct Microscopic Count' },
          { id: 'membrane-filtration', name: 'Membrane Filtration' },
          { id: 'most-probable-number', name: 'Most Probable Number (MPN)' },
          { id: 'presumptive-test', name: 'Presumptive Test' },
          { id: 'confirmed-test', name: 'Confirmed Test' },
          { id: 'completed-test', name: 'Completed Test' },
          { id: 'turbidity-count-test', name: 'Turbidity Count/Test' },
        ],
      },
      {
        id: 'bacterial-spores-and-l-forms',
        name: 'Bacterial Spores and L-Forms',
        subtopics: [
          { id: 'bacterial-spores', name: 'Bacterial Spores (Endospores)' },
          { id: 'spore-structure', name: 'Spore Structure' },
          { id: 'sporulation', name: 'Sporulation' },
          { id: 'resistance-to-inactivating-agents', name: 'Resistance to Inactivating Agents' },
          { id: 'role-of-spore-structure-in-resistance', name: 'Role of Spore Structure in Resistance' },
          { id: 'limitations-of-resistance', name: 'Limitations of Resistance' },
          { id: 'mechanisms-by-which-chemical-biocides-kill-spores', name: 'Mechanisms by Which Chemical Biocides Kill Spores' },
          { id: 'protoplasts', name: 'Protoplasts' },
          { id: 'spheroplasts', name: 'Spheroplasts' },
          { id: 'l-forms', name: 'L-forms' },
          { id: 'significance-of-l-forms', name: 'Significance of L-forms' },
        ],
      },
      {
        // Preserved existing topic id 'sterilization' (was the bare topic).
        id: 'sterilization',
        name: 'Microbial Control: Sterilization, Disinfection and Antisepsis',
        subtopics: [
          { id: 'sterilization-overview', name: 'Sterilization' },
          // Preserved existing topic id 'disinfection' as a subtopic id.
          { id: 'disinfection', name: 'Disinfection' },
          { id: 'antisepsis', name: 'Antisepsis' },
          { id: 'sanitization', name: 'Sanitization' },
          { id: 'aseptic-technique', name: 'Aseptic Technique' },
          { id: 'physical-methods-of-microbial-control', name: 'Physical Methods of Microbial Control' },
          { id: 'moist-heat', name: 'Moist Heat' },
          { id: 'dry-heat', name: 'Dry Heat' },
          { id: 'autoclaving', name: 'Autoclaving' },
          { id: 'filtration', name: 'Filtration' },
          { id: 'radiation', name: 'Radiation' },
          { id: 'chemical-methods-of-microbial-control', name: 'Chemical Methods of Microbial Control' },
          { id: 'mechanisms-of-action-of-disinfectants', name: 'Mechanisms of Action of Disinfectants' },
          { id: 'factors-affecting-disinfectant-effectiveness', name: 'Factors Affecting Disinfectant Effectiveness' },
          { id: 'chemical-indicators', name: 'Chemical Indicators' },
          { id: 'biological-indicators', name: 'Biological Indicators' },
          { id: 'monitoring-and-validation-of-sterilization', name: 'Monitoring and Validation of Sterilization' },
          { id: 'pharmaceutical-relevance-of-sterilization', name: 'Pharmaceutical Relevance of Sterilization' },
        ],
      },
      {
        id: 'antimicrobial-agents-and-susceptibility-testing',
        name: 'Antimicrobial Agents and Susceptibility Testing',
        subtopics: [
          { id: 'antimicrobial-agents', name: 'Antimicrobial Agents' },
          { id: 'antibiotics-vs-chemotherapeutic-agents', name: 'Antibiotics vs Chemotherapeutic Agents' },
          { id: 'bactericidal-vs-bacteriostatic-agents', name: 'Bactericidal vs Bacteriostatic Agents' },
          { id: 'major-cellular-targets-of-antimicrobial-agents', name: 'Major Cellular Targets of Antimicrobial Agents' },
          { id: 'basic-mechanisms-of-antimicrobial-action', name: 'Basic Mechanisms of Antimicrobial Action' },
          { id: 'factors-affecting-antimicrobial-effectiveness', name: 'Factors Affecting Antimicrobial Effectiveness' },
          { id: 'purpose-of-susceptibility-testing', name: 'Purpose of Susceptibility Testing' },
          { id: 'kirby-bauer-disc-diffusion', name: 'Kirby-Bauer Disc Diffusion' },
          { id: 'zones-of-inhibition', name: 'Zones of Inhibition' },
          { id: 'minimum-inhibitory-concentration', name: 'Minimum Inhibitory Concentration (MIC)' },
          { id: 'minimum-bactericidal-concentration', name: 'Minimum Bactericidal Concentration (MBC)' },
          { id: 'basic-interpretation-of-susceptibility-results', name: 'Basic Interpretation of Susceptibility Results' },
        ],
      },
      {
        id: 'antimicrobial-resistance-and-genetics',
        name: 'Antimicrobial Resistance and Microbial Genetics',
        subtopics: [
          { id: 'definition-of-antimicrobial-resistance', name: 'Definition of Antimicrobial Resistance' },
          { id: 'intrinsic-vs-acquired-resistance', name: 'Intrinsic vs Acquired Resistance' },
          { id: 'bacterial-dna', name: 'Bacterial DNA' },
          { id: 'plasmids-genetics', name: 'Plasmids' },
          { id: 'mutation', name: 'Mutation' },
          { id: 'genetic-variation', name: 'Genetic Variation' },
          { id: 'horizontal-gene-transfer', name: 'Horizontal Gene Transfer' },
          { id: 'transformation', name: 'Transformation' },
          { id: 'transduction', name: 'Transduction' },
          { id: 'conjugation', name: 'Conjugation' },
          { id: 'gene-transfer-and-antimicrobial-resistance', name: 'Gene Transfer and Antimicrobial Resistance' },
          { id: 'enzymatic-drug-inactivation', name: 'Enzymatic Drug Inactivation' },
          { id: 'altered-drug-targets', name: 'Altered Drug Targets' },
          { id: 'reduced-permeability', name: 'Reduced Permeability' },
          { id: 'efflux-pumps', name: 'Efflux Pumps' },
          { id: 'biofilms-as-a-contributor-to-resistance', name: 'Biofilms as a Contributor to Resistance' },
          { id: 'factors-promoting-antimicrobial-resistance', name: 'Factors Promoting Antimicrobial Resistance' },
          { id: 'basic-antimicrobial-stewardship-concept', name: 'Basic Antimicrobial Stewardship Concept' },
        ],
      },
      {
        // Preserved existing topic id 'viruses' (was the bare 'Viruses' topic).
        id: 'viruses',
        name: 'Virology',
        subtopics: [
          { id: 'characteristics-of-viruses', name: 'Characteristics of Viruses' },
          { id: 'viral-structure', name: 'Viral Structure' },
          { id: 'capsid', name: 'Capsid' },
          { id: 'envelope', name: 'Envelope' },
          { id: 'viral-genome-types', name: 'Viral Genome Types' },
          { id: 'dna-vs-rna-viruses', name: 'DNA vs RNA Viruses' },
          { id: 'classification-of-viruses', name: 'Classification of Viruses' },
          { id: 'reasons-for-studying-viruses', name: 'Reasons for Studying Viruses' },
          { id: 'human-diseases-caused-by-viruses', name: 'Human Diseases Caused by Viruses' },
          { id: 'viral-replication-cycle', name: 'Viral Replication Cycle' },
          { id: 'attachment-adsorption', name: 'Attachment/Adsorption' },
          { id: 'penetration', name: 'Penetration' },
          { id: 'uncoating', name: 'Uncoating' },
          { id: 'replication-viral', name: 'Replication' },
          { id: 'assembly', name: 'Assembly' },
          { id: 'release', name: 'Release' },
          { id: 'lytic-infection', name: 'Lytic Infection' },
          { id: 'latent-infection', name: 'Latent Infection' },
          { id: 'basic-viral-cultivation', name: 'Basic Viral Cultivation' },
          { id: 'basic-principles-of-antiviral-action', name: 'Basic Principles of Antiviral Action' },
        ],
      },
      {
        id: 'hiv',
        name: 'HIV',
        subtopics: [
          { id: 'hiv-structure', name: 'HIV Structure' },
          { id: 'cd4-cells-and-target-cells', name: 'CD4 Cells and Target Cells' },
          { id: 'reverse-transcriptase', name: 'Reverse Transcriptase' },
          { id: 'integrase', name: 'Integrase' },
          { id: 'protease', name: 'Protease' },
          { id: 'basic-hiv-replication-mechanism', name: 'Basic HIV Replication Mechanism' },
          { id: 'hiv-pathogenesis', name: 'Pathogenesis' },
          { id: 'hiv-multiplication-replication', name: 'Multiplication/Replication' },
          { id: 'hiv-disease-progression', name: 'Disease Progression' },
          { id: 'hiv-acute-infection', name: 'Acute Infection' },
          { id: 'hiv-chronic-infection', name: 'Chronic Infection' },
          { id: 'advanced-hiv-disease-aids', name: 'Advanced HIV Disease/AIDS' },
          { id: 'signs-of-aids', name: 'Signs of AIDS' },
          { id: 'hiv-modes-of-transmission', name: 'Modes of Transmission' },
          { id: 'window-period', name: 'Window Period' },
          { id: 'hiv-testing', name: 'HIV Testing' },
          { id: 'pre-exposure-prophylaxis-prep', name: 'Pre-exposure Prophylaxis (PrEP)' },
          { id: 'post-exposure-prophylaxis-pep', name: 'Post-exposure Prophylaxis (PEP)' },
          { id: 'art-concept', name: 'ART Concept' },
          { id: 'hiv-prevention-strategies', name: 'Prevention Strategies' },
        ],
      },
      {
        // Preserved existing topic id 'fungi' (was the bare 'Fungi' topic).
        id: 'fungi',
        name: 'Mycology',
        subtopics: [
          { id: 'general-characteristics-of-fungi', name: 'General Characteristics of Fungi' },
          { id: 'yeasts', name: 'Yeasts' },
          { id: 'moulds', name: 'Moulds' },
          { id: 'dimorphic-fungi', name: 'Dimorphic Fungi' },
          { id: 'fungal-cell-structure', name: 'Fungal Cell Structure' },
          { id: 'fungal-reproduction', name: 'Fungal Reproduction' },
          { id: 'basic-fungal-classification', name: 'Basic Fungal Classification' },
          { id: 'medically-important-fungi', name: 'Medically Important Fungi' },
          { id: 'superficial-mycoses', name: 'Superficial Mycoses' },
          { id: 'cutaneous-mycoses', name: 'Cutaneous Mycoses' },
          { id: 'systemic-mycoses', name: 'Systemic Mycoses' },
          { id: 'opportunistic-fungal-infections', name: 'Opportunistic Fungal Infections' },
          { id: 'basic-laboratory-diagnosis-of-fungal-infections', name: 'Basic Laboratory Diagnosis of Fungal Infections' },
          { id: 'basic-antifungal-concepts', name: 'Basic Antifungal Concepts' },
        ],
      },
      {
        id: 'parasitology',
        name: 'Parasitology',
        subtopics: [
          { id: 'host-parasite-association', name: 'Host-Parasite Association' },
          { id: 'classification-of-parasites', name: 'Classification of Parasites' },
          { id: 'protozoa', name: 'Protozoa' },
          { id: 'helminths', name: 'Helminths' },
          { id: 'ectoparasites', name: 'Ectoparasites' },
          { id: 'endoparasites', name: 'Endoparasites' },
          { id: 'hosts-and-types-of-host', name: 'Hosts and Types of Host' },
          { id: 'definitive-host', name: 'Definitive Host' },
          { id: 'intermediate-host', name: 'Intermediate Host' },
          { id: 'reservoir-host', name: 'Reservoir Host' },
          { id: 'vector', name: 'Vector' },
          { id: 'factors-affecting-transmission-of-parasitic-diseases', name: 'Factors Affecting Transmission of Parasitic Diseases' },
          { id: 'source', name: 'Source' },
          { id: 'mode-of-transmission', name: 'Mode of Transmission' },
          { id: 'susceptible-host', name: 'Susceptible Host' },
          { id: 'effects-of-parasites-on-the-host', name: 'Effects of Parasites on the Host' },
          { id: 'toxic-effects', name: 'Toxic Effects' },
          { id: 'allergic-effects', name: 'Allergic Effects' },
          { id: 'basic-medically-important-parasites', name: 'Basic Medically Important Parasites' },
          { id: 'basic-parasite-life-cycles', name: 'Basic Parasite Life Cycles' },
          { id: 'prevention-and-control-of-parasitic-diseases', name: 'Prevention and Control of Parasitic Diseases' },
          { id: 'laboratory-diagnosis-and-treatment', name: 'Laboratory Diagnosis and Treatment' },
          { id: 'basic-diagnostic-specimens-and-methods', name: 'Basic Diagnostic Specimens and Methods' },
        ],
      },
      {
        id: 'clinical-microbiology-and-infection-control',
        name: 'Clinical Microbiology and Infection Control',
        subtopics: [
          { id: 'principles-of-specimen-collection', name: 'Principles of Specimen Collection' },
          { id: 'proper-specimen-handling', name: 'Proper Specimen Handling' },
          { id: 'transport-and-storage', name: 'Transport and Storage' },
          { id: 'prevention-of-contamination', name: 'Prevention of Contamination' },
          { id: 'basic-microbiological-diagnostic-workflow', name: 'Basic Microbiological Diagnostic Workflow' },
          { id: 'microscopy-diagnosis', name: 'Microscopy' },
          { id: 'culture-diagnosis', name: 'Culture' },
          { id: 'identification-diagnosis', name: 'Identification' },
          { id: 'antimicrobial-susceptibility-testing-diagnosis', name: 'Antimicrobial Susceptibility Testing' },
          { id: 'chain-of-infection', name: 'Chain of Infection' },
          { id: 'reservoirs-and-sources', name: 'Reservoirs and Sources' },
          { id: 'modes-of-transmission-ic', name: 'Modes of Transmission' },
          { id: 'standard-precautions', name: 'Standard Precautions' },
          { id: 'hand-hygiene', name: 'Hand Hygiene' },
          { id: 'personal-protective-equipment', name: 'Personal Protective Equipment' },
          { id: 'healthcare-associated-infections', name: 'Healthcare-Associated Infections' },
          { id: 'isolation-principles', name: 'Isolation Principles' },
          { id: 'environmental-infection-control', name: 'Environmental Infection Control' },
        ],
      },
      {
        id: 'pharmaceutical-microbiology',
        name: 'Pharmaceutical Microbiology',
        subtopics: [
          { id: 'microbial-contamination-of-pharmaceutical-products', name: 'Microbial Contamination of Pharmaceutical Products' },
          { id: 'sources-of-pharmaceutical-contamination', name: 'Sources of Pharmaceutical Contamination' },
          { id: 'microbial-spoilage', name: 'Microbial Spoilage' },
          { id: 'factors-affecting-microbial-spoilage', name: 'Factors Affecting Microbial Spoilage' },
          { id: 'preservation-of-pharmaceutical-products', name: 'Preservation of Pharmaceutical Products' },
          { id: 'microbial-limits', name: 'Microbial Limits' },
          { id: 'basic-sterility-testing', name: 'Basic Sterility Testing' },
          { id: 'pharmaceutical-water-microbiology', name: 'Pharmaceutical Water Microbiology' },
          { id: 'environmental-monitoring', name: 'Environmental Monitoring' },
          { id: 'aseptic-pharmaceutical-manufacturing', name: 'Aseptic Pharmaceutical Manufacturing' },
          { id: 'importance-of-microbial-control-in-pharmaceutical-production', name: 'Importance of Microbial Control in Pharmaceutical Production' },
        ],
      },
    ],
  },
  {
    id: 'pch-201',
    name: 'Inorganic Pharmaceutical Chemistry',
    code: 'PCH 201',
    level: '200L',
    creditUnits: 3,
    description: 'Inorganic compounds used as medicines and pharmaceutical aids.',
    topics: [
      { id: 'acids-and-bases', name: 'Acids and bases', subtopics: [] },
      { id: 'electrolytes', name: 'Electrolytes', subtopics: [] },
      {
        id: 'pharmaceutical-inorganic-compounds',
        name: 'Pharmaceutical inorganic compounds',
        subtopics: [
          { id: 'gastrointestinal-agents', name: 'Gastrointestinal agents' },
          { id: 'topical-agents', name: 'Topical agents' },
          { id: 'dental-products', name: 'Dental products' },
        ],
      },
    ],
  },
  {
    id: 'pio-201',
    name: 'Introductory Physiology and Blood',
    code: 'PIO 201',
    level: '200L',
    creditUnits: 3,
    description: 'How the body works, with a focus on blood and its functions.',
    topics: [],
  },
  {
    id: 'pcg-201',
    name: 'Introduction to Pharmacognosy',
    code: 'PCG 201',
    level: '200L',
    creditUnits: 3,
    description: 'Medicines derived from natural sources — plants, microbes, and minerals.',
    topics: [],
  },
  {
    id: 'pcy-201',
    name: 'Pharmaceutical Quality Systems 1',
    code: 'PCY 201',
    level: '200L',
    creditUnits: 2,
    description: 'Quality systems that keep medicines safe, effective, and consistent.',
    topics: [],
  },
  {
    id: 'pct-201',
    name: 'Pharmaceutics',
    code: 'PCT 201',
    level: '200L',
    creditUnits: 2,
    description: 'Designing and formulating medicines into usable dosage forms.',
    topics: [],
  },
  {
    id: 'pct-203',
    name: 'Dispensing Practical',
    code: 'PCT 203',
    level: '200L',
    creditUnits: 1,
    description: 'Hands-on dispensing skills — its own course with its own credit unit.',
    topics: [],
  },
];

/** Look up a course by id (e.g. for future deep links from Study/Quiz). */
export function findCourse(courseId: string): CurriculumCourse | undefined {
  return CURRICULUM.find((course) => course.id === courseId);
}

/**
 * Cross-feature handoff payload: what "Study this topic" / "Quiz me on this
 * topic" pass from the Curriculum browser into Study Mode or Quiz Mode.
 *
 * For a subtopic selection, `topic` is the more specific subtopic while the
 * parent topic and course are retained as `parentTopic` and `subject` context.
 */
export type CurriculumHandoff = {
  /** Course code, e.g. "BCH 201" — used as the subject line. */
  courseCode: string;
  /** Course title, e.g. "Biochemistry" — part of the context note. */
  courseName: string;
  /** The topic (or subtopic, when one is selected) to study or quiz on. */
  topic: string;
  /** Parent topic name when `topic` is a subtopic; otherwise null. */
  parentTopic: string | null;
};

/**
 * Resolve a curriculum selection into a handoff payload.
 *
 * Selecting a topic:  topic = topic, parentTopic = null.
 * Selecting a subtopic: topic = subtopic, parentTopic = topic.
 */
export function buildHandoff(
  course: CurriculumCourse,
  topic: CurriculumTopic,
  subtopic?: CurriculumSubtopic | null,
): CurriculumHandoff {
  return {
    courseCode: course.code,
    courseName: course.name,
    topic: subtopic ? subtopic.name : topic.name,
    parentTopic: subtopic ? topic.name : null,
  };
}

/**
 * Compose the curriculum context string handed to Study Mode or Quiz Mode.
 * Study Mode uses it for its session context; Quiz Mode embeds it in the
 * generation prompt. Returns null when nothing extra to add.
 */
export function composeCurriculumContext(handoff: CurriculumHandoff): string | null {
  const parts: string[] = [];
  parts.push(`Course: ${handoff.courseCode} — ${handoff.courseName}`);
  if (handoff.parentTopic) parts.push(`Parent topic: ${handoff.parentTopic}`);
  return parts.length > 0 ? parts.join(' · ') : null;
}

/** Count helpers for card badges — no component has to recount. */
export function countTopics(course: CurriculumCourse): number {
  return course.topics.length;
}

export function countSubtopics(course: CurriculumCourse): number {
  return course.topics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
