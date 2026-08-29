import { ServiceCategory } from '@/types/services';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cat-1',
    slug: 'laser-hair-reduction',
    number: '01',
    title: 'Laser Hair Reduction',
    subtitle: 'Precision Laser Technology for Smooth, Flawless Skin',
    description: 'Experience painless, state-of-the-art medical laser hair reduction tailored to your unique skin tone and hair structure for long-lasting silky perfection.',
    group: 'BEAUTY',
    heroImage: '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.png',
    cardImage: '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.png',
    highlights: [
      'FDA-approved triple wavelength cooling laser technology',
      'Safe & effective for all skin tones and hair types',
      'Virtually painless with integrated contact chilling',
      'Targeted facial & full-body custom packages'
    ],
    treatments: [
      { id: 'lhr-1', name: 'Upper Lip', description: 'Targeted laser treatment for fine facial hair around the upper lip area.', tag: 'Facial' },
      { id: 'lhr-2', name: 'Chin', description: 'Precision hair removal focusing on chin stubble and fine hairs.', tag: 'Facial' },
      { id: 'lhr-3', name: 'Upper Lip + Chin', description: 'Combined lower face precision treatment for a clean, velvety finish.', tag: 'Facial' },
      { id: 'lhr-4', name: 'Full Face', description: 'Comprehensive facial hair reduction covering cheeks, upper lip, chin, and jawline.', tag: 'Facial' },
      { id: 'lhr-5', name: 'Beard Line Shaping', description: 'Defined, sharp beard contours for men with smooth surrounding cheek and neck skin.', tag: 'Grooming' },
      { id: 'lhr-6', name: 'Underarms', description: 'Quick and effective laser session for smooth, shadow-free underarms.', tag: 'Body' },
      { id: 'lhr-7', name: 'Full Arms', description: 'Complete arm treatment from shoulders to wrists for seamless radiance.', tag: 'Body' },
      { id: 'lhr-8', name: 'Full Legs', description: 'Full leg laser reduction covering thighs, knees, and lower legs.', tag: 'Body' },
      { id: 'lhr-9', name: 'Full Arms + Full Legs', description: 'Integrated arm and leg laser reduction for complete limb smoothness.', tag: 'Combo' },
      { id: 'lhr-10', name: 'Full Front', description: 'Custom chest and abdomen laser reduction for smooth upper body aesthetic.', tag: 'Body' },
      { id: 'lhr-11', name: 'Full Back', description: 'Complete back laser reduction including shoulders and lower back.', tag: 'Body' },
      { id: 'lhr-12', name: 'Full Bikini', description: 'Gentle, hygienic laser hair reduction for sensitive bikini contours.', tag: 'Intimate' },
      { id: 'lhr-13', name: 'Buttocks', description: 'Smooth skin treatment covering the entire seat and hip region.', tag: 'Body' },
      { id: 'lhr-14', name: 'Full Bikini + Buttocks', description: 'Comprehensive lower intimate area grooming for effortless confidence.', tag: 'Combo' },
      { id: 'lhr-15', name: 'Full Body', description: 'The ultimate head-to-toe laser package tailored for maximum smoothness and ease.', tag: 'Signature' }
    ],
    faqs: [
      { question: 'Is laser hair reduction painful?', answer: 'Our advanced laser system features active contact cooling technology that keeps the skin comfortable throughout the session, making the procedure virtually painless.' },
      { question: 'How many sessions will I need?', answer: 'Most clients achieve optimum results within 6 to 8 sessions, as hair grows in distinct cycles. Your aesthetic consultant will personalize a plan during your initial visit.' },
      { question: 'Is there any downtime after a session?', answer: 'There is zero downtime. You may experience slight temporary redness similar to mild sun exposure, which subsides within a few hours.' }
    ]
  },
  {
    id: 'cat-2',
    slug: 'skin-care',
    number: '02',
    title: 'Skin Care, Facials & Laser Treatments',
    subtitle: 'Nourishing Medi-Facials & Clinical Laser Radiance',
    description: 'Transform your skin texture, tone, and luminosity with customized medi-facials, dermatological peels, and high-precision Q-Switched & Pico laser therapies.',
    group: 'BEAUTY',
    heroImage: '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20&%20LASER%20TREATMENTS.png',
    cardImage: '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20&%20LASER%20TREATMENTS.png',
    highlights: [
      'Customized medical-grade serums and peel formulations',
      'Advanced Hydro-dermabrasion and carbon laser technologies',
      'Targeted hyperpigmentation, acne scar, and glow treatments',
      'Dermatologically supervised protocols'
    ],
    treatments: [
      { id: 'sk-1', name: 'Hydra Medi Facial', description: 'Multi-step vortex deep cleansing, exfoliation, and deep antioxidant hydration infusion.' },
      { id: 'sk-2', name: 'Carbon Facial', description: 'Hollywood China Doll facial utilizing liquid carbon and laser light for pore tightening and radiant glow.' },
      { id: 'sk-3', name: 'Korean Glass Skin Treatment', description: 'Intense moisture surge and micro-nutrient infusion for a smooth, glass-like skin finish.' },
      { id: 'sk-4', name: 'Q-Switched Laser', description: 'High-speed laser light targeting stubborn pigmentation, freckles, and age spots.' },
      { id: 'sk-5', name: 'Pico Laser', description: 'Picosecond pulse technology for targeted melasma reduction and collagen remodeling.' },
      { id: 'sk-6', name: 'CO₂ Fractional Laser', description: 'Micro-ablative resurfacing targeting deep acne scars, enlarged pores, and fine wrinkles.' },
      { id: 'sk-7', name: 'Fractional Laser', description: 'Gentle skin renewal laser stimulating natural elastin and collagen synthesis.' },
      { id: 'sk-8', name: 'AHA Peel', description: 'Alpha Hydroxy Acid exfoliation ideal for brightening dull complexions.' },
      { id: 'sk-9', name: 'BHA / Salicylic Peel', description: 'Deep pore penetration formulated to clarify acne-prone, congested skin.' },
      { id: 'sk-10', name: 'Black Peel', description: 'Black acetic acid formulation targeting resistant acne, inflammation, and sebum control.' },
      { id: 'sk-11', name: 'TCA Peel', description: 'Trichloroacetic acid chemical peel for deep skin restructuring and sun damage repair.' },
      { id: 'sk-12', name: 'Yellow Peel', description: 'Retinol-enriched peel designed to inhibit melanin production and restore youthful glow.' },
      { id: 'sk-13', name: 'Retises Peel', description: 'Concentrated Vitamin A therapy enhancing cellular turnover and skin tightness.' },
      { id: 'sk-14', name: 'Cosmelan Peel', description: 'World-leading depigmentation treatment for stubborn melasma and dark spots.' },
      { id: 'sk-15', name: 'Microdermabrasion', description: 'Diamond-tip mechanical exfoliation removing dead surface cells for silkiness.' },
      { id: 'sk-16', name: 'Dermapen / Dermaroller / Microneedling', description: 'Controlled collagen induction therapy to refine texture and minimize pores.' },
      { id: 'sk-17', name: 'PRP + Microneedling', description: 'Autologous platelet-rich plasma combined with microneedling for cellular renewal.' },
      { id: 'sk-18', name: 'Photofacial / IPL', description: 'Intense Pulsed Light targeting redness, sun damage, and uneven skin tone.' },
      { id: 'sk-19', name: 'Mole Removal', description: 'Safe clinical removal of benign facial and body moles with minimal scarring.' },
      { id: 'sk-20', name: 'Wart Removal', description: 'Precision electro-cautery or radiofrequency removal of cutaneous warts.' },
      { id: 'sk-21', name: 'Skin Tag Removal', description: 'Quick, painless elimination of unwanted skin tags around neck and underarms.' },
      { id: 'sk-22', name: 'Radiofrequency Skin Tightening', description: 'Thermal energy heating sub-dermal layers to lift and firm loose skin.' },
      { id: 'sk-23', name: 'HIFU Face', description: 'High-Intensity Focused Ultrasound non-surgical face lift targeting the SMAS layer.' },
      { id: 'sk-24', name: 'LED Light Therapy', description: 'Therapeutic light waves calming inflammation, boosting collagen, and clearing bacteria.' },
      { id: 'sk-25', name: 'Tattoo Removal', description: 'Laser pigment shattering to fade unwanted body art safely over multi-session protocols.' }
    ],
    faqs: [
      { question: 'Which facial is best suited for my skin type?', answer: 'During your initial consultation, our aesthetic expert performs a skin analysis to recommend the ideal blend of medi-facials or clinical peels for your concerns.' },
      { question: 'What is the difference between Pico Laser and Q-Switched Laser?', answer: 'Pico laser operates in picoseconds (trillionths of a second), shattering pigment into microscopic dust particles faster and with minimal heat compared to nanosecond Q-Switched lasers.' }
    ]
  },
  {
    id: 'cat-3',
    slug: 'advanced-rejuvenation',
    number: '03',
    title: 'Advanced Skin Rejuvenation & Injectable Aesthetics',
    subtitle: 'Artistic Facial Sculpting, Fillers & Bio-Remodeling',
    description: 'Restore youthful volume, refine facial contours, and stimulate deep cellular regeneration with premium injectables, exosomes, Botox, and dermal fillers.',
    group: 'BEAUTY',
    heroImage: '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20&%20INJECTABLE%20AESTHETICS.png',
    cardImage: '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20&%20INJECTABLE%20AESTHETICS.png',
    highlights: [
      'Administered exclusively by certified aesthetic doctors',
      'Premium hyaluronic acid fillers & US-FDA approved anti-wrinkle toxins',
      'Cutting-edge regenerative therapies: Exosomes, PDRN & NCTF 135HA',
      'Subtle, natural enhancements honoring your facial geometry'
    ],
    treatments: [
      { id: 'inj-1', name: 'PRP for Skin Rejuvenation', description: 'Platelet-rich plasma growth factor injections restoring skin vitality and collagen density.' },
      { id: 'inj-2', name: 'Plasmolift', description: 'Concentrated autologous plasma mesh providing subtle volume elevation and glow.' },
      { id: 'inj-3', name: 'Vampire Facelift', description: 'Synergistic combination of hyaluronic acid dermal fillers and rich growth factor plasma.' },
      { id: 'inj-4', name: 'Botox', description: 'Precision neuromuscular relaxant for smoothing forehead lines, crow’s feet, and frown lines.' },
      { id: 'inj-5', name: 'Dermal Fillers', description: 'Hyaluronic acid injections sculpting lips, cheekbones, jawline, and tear troughs.' },
      { id: 'inj-6', name: 'Skin Boosters', description: 'Micro-droplet hyaluronic acid hydration restoring inner glow and elastic bounce.' },
      { id: 'inj-7', name: 'Deoxycholic Acid', description: 'Targeted lipolytic treatment contoured to dissolve double chin fullness.' },
      { id: 'inj-8', name: 'Bio Fillers', description: 'Autologous plasma gel derived from your blood for natural volume restoration.' },
      { id: 'inj-9', name: 'Microneedling with PRP', description: 'Deep epidermal micro-channeling infused with active growth factor serums.' },
      { id: 'inj-10', name: 'Subcision', description: 'Minor surgical release of fibrous tethered scar tissue underneath depressed acne scars.' },
      { id: 'inj-11', name: 'Thread Lift', description: 'Absorbable PDO/PLLA barbed threads repositioning sagging cheek and jawline tissues.' },
      { id: 'inj-12', name: 'Mesolipolysis', description: 'Micro-injections breaking down localized stubborn fat deposits on lower face and chin.' },
      { id: 'inj-13', name: 'FatX', description: 'Advanced lipolytic formulation targeting localized adiposity for defined facial contours.' },
      { id: 'inj-14', name: 'Exosome Therapy', description: 'Stem cell-derived extracellular vesicles packed with growth factors for intense skin repair.' },
      { id: 'inj-15', name: 'PDRN', description: 'Polydeoxyribonucleotide salmon DNA therapy triggering cellular tissue regeneration.' },
      { id: 'inj-16', name: 'NCTF 135HA', description: 'French poly-revitalizing cocktail containing 59 active nutrients plus hyaluronic acid.' },
      { id: 'inj-17', name: 'Skin Rebirth Therapy', description: 'Multi-layer skin restoration protocol revitalizing sun-damaged and mature skin.' },
      { id: 'inj-18', name: 'Skin Infusion Therapy', description: 'Direct cellular nutrient micro-infusion tailored for ultimate radiance.' }
    ],
    faqs: [
      { question: 'Will Botox make my face look frozen or unnatural?', answer: 'Not at all. At The Pink Aura, our philosophy centers on subtle, micro-droplet artistry that preserves your natural expressions while softening dynamic wrinkles.' },
      { question: 'How long do Dermal Fillers last?', answer: 'Depending on the treatment area and product density, premium hyaluronic acid fillers generally last between 9 to 18 months.' }
    ]
  },
  {
    id: 'cat-4',
    slug: 'permanent-makeup',
    number: '04',
    title: 'Permanent Makeup (PMU)',
    subtitle: 'Micropigmentation Artistry for Effortless Everyday Elegance',
    description: 'Enhance your natural features with semi-permanent micropigmentation. From feather-light microblading to ombre brows and velvety lip blush, wake up radiant every day.',
    group: 'BEAUTY',
    heroImage: '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).png',
    cardImage: '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).png',
    highlights: [
      'Hypoallergenic, organic pigments tailored to your skin undertone',
      'Custom brow mapping tailored to facial bone structure',
      'Sterile, single-use micro-needles and precision digital blades',
      'Long-lasting natural enhancements with zero daily maintenance'
    ],
    treatments: [
      { id: 'pmu-1', name: 'Microblading', description: 'Manual hair-stroke eyebrow micropigmentation creating hyper-realistic, full brows.' },
      { id: 'pmu-2', name: 'Ombre Powder Brows', description: 'Soft, misty pixelated pigment shading giving a soft makeup powder look.' },
      { id: 'pmu-3', name: 'Combination Brows', description: 'The ideal blend of realistic front hair strokes with shaded arch density.' },
      { id: 'pmu-4', name: 'Scalp Micropigmentation', description: 'Precision scalp micro-dots replicating dense hair follicles to camouflage thinning.' },
      { id: 'pmu-5', name: 'Lip Tinting / Lip Blush', description: 'Velvety semi-permanent lip blush enhancing lip symmetry, border definition, and rosy tone.' },
      { id: 'pmu-6', name: 'Eyeliner Tattoo', description: 'Subtle lash-line enhancement creating the illusion of thicker, darker eyelashes.' },
      { id: 'pmu-7', name: 'Full Eyeliner', description: 'Defined upper or lower eyeliner contour tailored to enhance your eye shape.' },
      { id: 'pmu-8', name: 'Beauty Spot', description: 'Delicate, natural beauty mark micro-pigmentation placement.' },
      { id: 'pmu-9', name: 'PMU Touch-Up', description: 'Perfecting session held 4 to 6 weeks after initial treatment for pigment saturation.' },
      { id: 'pmu-10', name: 'Annual Color Refresh', description: 'Color boost session to maintain vibrant pigment clarity and crispness.' }
    ],
    faqs: [
      { question: 'How long does Microblading or Lip Blush last?', answer: 'PMU treatments typically remain beautiful for 1.5 to 3 years depending on skin type, lifestyle, and sun exposure before needing a color refresh.' },
      { question: 'Is the procedure comfortable?', answer: 'We apply medical-grade topical numbing cream prior to and during the procedure to ensure you feel minimal discomfort.' }
    ]
  },
  {
    id: 'cat-5',
    slug: 'hair-care',
    number: '05',
    title: 'Hair Care & Hair Restoration',
    subtitle: 'Clinical Therapies to Arrest Hair Loss & Boost Density',
    description: 'Combating hair thinning and scalp stress with medical hair restoration, GFC, stem cell micro-infusions, and low-level laser light therapy.',
    group: 'HAIR',
    heroImage: '/images/services/WEB%20IMAGES/HAIR%20CARE%20&%20HAIR%20RESTORATION.png',
    cardImage: '/images/services/WEB%20IMAGES/HAIR%20CARE%20&%20HAIR%20RESTORATION.png',
    highlights: [
      'Comprehensive trichological scalp evaluation',
      'Autologous Growth Factor Concentrate (GFC) & QR678 patented therapies',
      'Non-surgical follicular revitalization & hair shaft thickening',
      'Targeted for male and female pattern androgenetic alopecia'
    ],
    treatments: [
      { id: 'hr-1', name: 'High Frequency Hair Therapy', description: 'Scalp micro-current stimulation boosting blood micro-circulation to hair roots.' },
      { id: 'hr-2', name: 'Laser Helmet / LLLT', description: 'Low-Level Laser Therapy energizing cellular ATP within dormant hair follicles.' },
      { id: 'hr-3', name: 'PRP Hair Treatment', description: 'Platelet-rich plasma growth factor injections arresting hair shedding.' },
      { id: 'hr-4', name: 'GFC (Growth Factor Concentrate)', description: 'Next-generation highly concentrated growth factors harvested from autologous platelets.' },
      { id: 'hr-5', name: 'QR678 Hair Therapy', description: 'US & Indian patented bio-engineered growth factor cocktail for hair re-growth.' },
      { id: 'hr-6', name: 'Hair Fillers', description: 'Peptide micro-injections promoting blood flow and hair shaft diameter reinforcement.' },
      { id: 'hr-7', name: 'Exosome Hair Therapy', description: 'Potent stem-cell signaling exosome vesicles reactivating dormant hair follicles.' },
      { id: 'hr-8', name: 'Bio-PRF Hair Treatment', description: 'Platelet-Rich Fibrin slow-release scaffold nourishing weakened hair roots.' },
      { id: 'hr-9', name: 'Stem Cell / Regenerative Hair Therapy', description: 'Advanced cellular therapy targeting root micro-environment restoration.' }
    ],
    faqs: [
      { question: 'What is the difference between PRP and GFC for hair loss?', answer: 'GFC (Growth Factor Concentrate) is a pure, cell-free preparation where growth factors are extracted from platelets before injection, yielding higher stability and less discomfort than standard PRP.' },
      { question: 'When can I expect to see reduced hair fall?', answer: 'Most clients notice a reduction in excessive hair shedding after 2 to 3 sessions, followed by visible hair thickening over 3 to 6 months.' }
    ]
  },
  {
    id: 'cat-6',
    slug: 'hair-transplant',
    number: '06',
    title: 'Hair Transplant',
    subtitle: 'Surgical Precision Follicular Unit Extraction & Grafting',
    description: 'Permanent, natural hairline restoration using advanced FUE and FUT surgical graft implantation techniques performed by skilled surgical specialists.',
    group: 'HAIR',
    heroImage: '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.png',
    cardImage: '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.png',
    highlights: [
      'Advanced Follicular Unit Extraction (FUE) & FUT techniques',
      'Micro-punch graft harvesting with zero linear scarring option',
      'Artistic hairline design matched to natural growth angle',
      'High graft survival rates and permanent natural results'
    ],
    treatments: [
      { id: 'ht-1', name: 'Hair Transplant — FUE', description: 'Follicular Unit Extraction harvesting individual hair grafts with minimal micro-incisions and rapid healing.' },
      { id: 'ht-2', name: 'Hair Transplant — FUT', description: 'Follicular Unit Transplantation strip method allowing high-density graft collection for extensive balding areas.' }
    ],
    faqs: [
      { question: 'Are transplanted hair grafts permanent?', answer: 'Yes. Grafts harvested from the donor zone (back and sides of the scalp) are genetically resistant to DHT-induced balding, ensuring permanent growth.' },
      { question: 'How long is the recovery period after an FUE transplant?', answer: 'Initial healing takes 7 to 10 days. Most clients return to light office activities within 3 to 4 days.' }
    ]
  },
  {
    id: 'cat-7',
    slug: 'slimming',
    number: '07',
    title: 'Slimming, Weight Management & Body Contouring',
    subtitle: 'Scientific Body Sculpting & Non-Invasive Fat Reduction',
    description: 'Sculpt your silhouette with non-surgical fat melting, RF skin tightening, CoolSculpting cryolipolysis, and metabolic weight management programs.',
    group: 'BODY',
    heroImage: '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20&%20BODY%20CONTOURING%20PACKAGES.png',
    cardImage: '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20&%20BODY%20CONTOURING%20PACKAGES.png',
    highlights: [
      'In-depth Body Composition Analysis (BCA)',
      'Non-invasive fat freezing (Cryolipolysis) & radiofrequency thermal melting',
      'Custom nutrition, exercise, and metabolic alignment guidance',
      'Targeted stubborn fat reduction for belly, thighs, arms, and flanks'
    ],
    treatments: [
      { id: 'sl-1', name: 'Body Composition Analysis', description: 'Comprehensive diagnostic breakdown of visceral fat, muscle mass, metabolic rate, and hydration levels.' },
      { id: 'sl-2', name: 'Weight Management Consultation', description: 'In-depth physician consultation targeting root causes of weight gain and metabolic bottlenecks.' },
      { id: 'sl-3', name: 'Personalized Diet & Lifestyle Plan', description: 'Tailored macro-nutrient diet charts paired with actionable daily wellness habits.' },
      { id: 'sl-4', name: 'Body Firming', description: 'Clinical electro-stimulation and firming therapy improving skin laxity after weight loss.' },
      { id: 'sl-5', name: 'Body Toning', description: 'Targeted muscle activation therapy strengthening underlying core and limb muscles.' },
      { id: 'sl-6', name: 'Weight Loss Program', description: 'Integrated physician-guided weight management protocol combining therapy and nutrition.' },
      { id: 'sl-7', name: 'Lipolaser', description: 'Low-level laser energy creating micro-pores in fat cells to release stored triglycerides.' },
      { id: 'sl-8', name: 'Radiofrequency Body Tightening', description: 'Thermal energy heating deep subcutaneous tissue to stimulate collagen and smooth cellulite.' },
      { id: 'sl-9', name: 'CoolSculpting / Cryolipolysis', description: 'Controlled cooling technology freezing and permanently eliminating stubborn fat cells.' },
      { id: 'sl-10', name: 'Mesolipolysis', description: 'Targeted micro-injections dissolving resistant localized fat deposits on abdomen or thighs.' },
      { id: 'sl-11', name: 'Bust Reduction / Non-Surgical Program', description: 'Non-surgical radiofrequency and tissue toning therapy for breast firming and contour refinement.' }
    ],
    faqs: [
      { question: 'Is CoolSculpting permanent?', answer: 'Yes. Cryolipolysis crystallizes and permanently destroys target fat cells, which are naturally processed and eliminated by the lymphatic system.' },
      { question: 'How quickly can I see results from body contouring?', answer: 'Initial skin tightening is visible within weeks, while cryolipolysis fat reduction develops fully over 8 to 12 weeks.' }
    ]
  },
  {
    id: 'cat-8',
    slug: 'body-contouring-packages',
    number: '08',
    title: 'Body Contouring Packages',
    subtitle: 'Holistic Transformation Programs for Targeted Results',
    description: 'Curated multi-modality body reshaping packages designed to achieve visible inch loss, skin firming, and structural body transformation.',
    group: 'BODY',
    heroImage: '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.png',
    cardImage: '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.png',
    highlights: [
      'Multi-modality treatment combinations for synergistic fat loss',
      'Dedicated body contouring therapist monitoring your progress',
      'Custom tailored duration based on body goals',
      'Focus on permanent inch loss and skin elasticity'
    ],
    treatments: [
      { id: 'pkg-1', name: 'Basic Slimming Package', description: 'Targeted program combining Body Composition Analysis, introductory RF slimming sessions, and customized dietary guidance.' },
      { id: 'pkg-2', name: 'Advanced Body Contouring Package', description: 'Comprehensive package integrating Lipolaser, RF skin firming, targeted mesolipolysis, and metabolic tracking.' },
      { id: 'pkg-3', name: 'Premium Weight Transformation Program', description: 'The ultimate holistic body transformation protocol featuring Cryolipolysis, body toning, custom nutrition, and lifestyle alignment.' }
    ],
    faqs: [
      { question: 'Which body contouring package is right for me?', answer: 'We determine the ideal package during your initial body analysis consultation based on your target inch-loss goals and target areas.' }
    ]
  },
  {
    id: 'cat-9',
    slug: 'wellness',
    number: '09',
    title: 'Lifestyle Modification & Wellness',
    subtitle: 'Holistic Nutrition, Mindful Habits & Metabolic Health',
    description: 'Harmonize your inner health with personalized nutrition plans, restorative exercise guidance, and holistic lifestyle consultations.',
    group: 'WELLNESS',
    heroImage: '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20&%20WELLNESS.png',
    cardImage: '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20&%20WELLNESS.png',
    highlights: [
      'Supervised by Ayurvedic & Wellness Expert Dr. Yashaswini HV',
      'Personalized nutrition charts without extreme restrictive diets',
      'Yoga & movement therapy tailored for hormonal balance',
      'Stress reduction & metabolic optimization protocols'
    ],
    treatments: [
      { id: 'wel-1', name: 'Personalized Diet Chart / Nutrition Planning', description: 'Custom nutritional meal blueprints designed around your bio-individual needs and lifestyle.' },
      { id: 'wel-2', name: 'Yoga & Exercise Guidance', description: 'Therapeutic yoga postures and low-impact exercise routines designed for physical vigor and inner peace.' },
      { id: 'wel-3', name: 'Lifestyle Modification Consultation', description: 'One-on-one wellness consultation focusing on sleep hygiene, stress reduction, and hormonal harmony.' }
    ],
    faqs: [
      { question: 'How does wellness support aesthetic treatments?', answer: 'True radiance stems from within. Balancing your metabolic health and stress levels accelerates skin healing, reduces inflammation, and enhances treatment longevity.' }
    ]
  },
  {
    id: 'cat-10',
    slug: 'cosmetic-surgery',
    number: '10',
    title: 'Cosmetic & Plastic Surgery',
    subtitle: 'Expert Surgical Sculpting & Reconstruction',
    description: 'Hospital-grade aesthetic plastic surgery performed by leading board-certified plastic surgeons in state-of-the-art sterile surgical suites.',
    group: 'SURGICAL',
    heroImage: '/images/services/WEB%20IMAGES/COSMETIC%20&%20PLASTIC%20SURGERY.png',
    cardImage: '/images/services/WEB%20IMAGES/COSMETIC%20&%20PLASTIC%20SURGERY.png',
    highlights: [
      'Board-certified aesthetic plastic surgeons',
      'Comprehensive pre-operative assessment & sterile operating environment',
      'Refined natural anatomical outcomes with subtle scarring protocols',
      'Dedicated post-operative nursing care & recovery support'
    ],
    treatments: [
      { id: 'surg-1', name: 'Liposuction / Body Contouring', description: 'Precision surgical removal of deep stubborn fat deposits from flanks, abdomen, or thighs.' },
      { id: 'surg-2', name: 'Tummy Tuck / Abdominoplasty', description: 'Surgical excision of loose abdominal skin and tightening of underlying rectus muscle wall.' },
      { id: 'surg-3', name: 'Breast Augmentation / Implants', description: 'Enhancement of breast volume and shape using premium silicone implants.' },
      { id: 'surg-4', name: 'Breast Lift', description: 'Surgical elevation and reshaping of sagging breast tissue for a youthful contour.' },
      { id: 'surg-5', name: 'Breast Reduction', description: 'Reduction of oversized breast tissue to alleviate neck pain and restore proportionate balance.' },
      { id: 'surg-6', name: 'Gynecomastia Surgery', description: 'Surgical male breast reduction removing glandular tissue and excess fat.' },
      { id: 'surg-7', name: 'Fat Grafting / Fat Transfer', description: 'Harvesting autologous fat from unwanted body areas to restore volume in face or buttocks.' },
      { id: 'surg-8', name: 'Rhinoplasty', description: 'Surgical nose reshaping improving nasal bridge symmetry, tip projection, and breathing.' },
      { id: 'surg-9', name: 'Blepharoplasty', description: 'Eyelid surgery removing drooping upper lid skin or puffiness underneath the lower eyes.' },
      { id: 'surg-10', name: 'Facelift', description: 'Deep SMAS layer face repositioning smoothing jowls, sagging cheeks, and deep facial folds.' },
      { id: 'surg-11', name: 'Neck Lift', description: 'Surgical contouring of lax neck skin and platysma muscle bands.' },
      { id: 'surg-12', name: 'Scar Revision Surgery', description: 'Reconstructive surgical refining of hypertrophic or irregular surgical and traumatic scars.' },
      { id: 'surg-13', name: 'Brazilian Butt Lift', description: 'Autologous fat transfer enhancing buttock projection and hip dip fullness.' },
      { id: 'surg-14', name: 'Buttock Implants', description: 'Surgical placement of anatomical implants for structural buttock enhancement.' },
      { id: 'surg-15', name: 'Arm Lift', description: 'Brachioplasty surgical removal of sagging arm skin for defined arm contours.' },
      { id: 'surg-16', name: 'Thigh Lift', description: 'Excision of redundant skin along the inner or outer thighs following major weight loss.' },
      { id: 'surg-17', name: 'Calf Augmentation / Calf Implants', description: 'Placement of silicone calf implants defining lower leg muscular symmetry.' }
    ],
    faqs: [
      { question: 'Where are cosmetic surgeries performed?', answer: 'All surgical procedures are conducted in accredited high-spec hospital operating theaters with dedicated anesthesiologists.' },
      { question: 'What is required prior to scheduling surgery?', answer: 'A comprehensive surgical consultation, blood work, medical clearance, and pre-op planning session are mandatory before any surgical booking.' }
    ]
  },
  {
    id: 'cat-11',
    slug: 'intimate-cosmetic',
    number: '11',
    title: 'Intimate & Genital Cosmetic Procedures',
    subtitle: 'Discreet, Specialized Aesthetic Care & Functional Wellness',
    description: 'Private, respectful, and confidential intimate cosmetic procedures designed to enhance functional comfort, symmetry, and personal confidence.',
    group: 'SURGICAL',
    heroImage: '/images/services/WEB%20IMAGES/INTIMATE%20&%20GENITAL%20COSMETIC%20PROCEDURES.png',
    cardImage: '/images/services/WEB%20IMAGES/INTIMATE%20&%20GENITAL%20COSMETIC%20PROCEDURES.png',
    highlights: [
      'Utmost privacy, confidentiality, and female surgeon options',
      'Refined surgical & non-surgical functional enhancements',
      'Rapid recovery protocols with minimal disruption',
      'Focus on restoring comfort, symmetry, and self-assurance'
    ],
    treatments: [
      { id: 'int-1', name: 'Vaginoplasty', description: 'Surgical vaginal tightening procedure restoring muscle tone and structural support.' },
      { id: 'int-2', name: 'Labiaplasty', description: 'Precision reduction and sculpting of labia minora or labia majora for symmetry and comfort.' },
      { id: 'int-3', name: 'Penile Cosmetic Procedures', description: 'Discreet cosmetic contouring procedures enhancing aesthetics and self-confidence.' }
    ],
    faqs: [
      { question: 'How confidential are intimate aesthetic consultations?', answer: 'Your privacy is paramount. Consultations take place in private clinical suites with strict medical record confidentiality protocols.' }
    ]
  },
  {
    id: 'cat-12',
    slug: 'spiritual-wellness',
    number: '12',
    title: 'Spiritual Counselling & Wellness',
    subtitle: 'Inner Harmony, Mindful Guidance & Energy Alignment',
    description: 'Elevate your internal aura and emotional clarity with meditative guidance and spiritual counselling led by Founder Nagendra Karanik.',
    group: 'WELLNESS',
    heroImage: '/images/services/WEB%20IMAGES/SPIRITUAL%20COUNSELLING%20&%20WELLNESS.png',
    cardImage: '/images/services/WEB%20IMAGES/SPIRITUAL%20COUNSELLING%20&%20WELLNESS.png',
    highlights: [
      'Guided by Founder, Spiritual Guide & Filmmaker Nagendra Karanik',
      'Mindfulness & aura alignment sessions',
      'Emotional releasing & clarity dialogues',
      'Holistic integration of physical beauty and inner spirit'
    ],
    treatments: [
      { id: 'sp-1', name: 'Spiritual Counselling', description: 'One-on-one reflective guidance sessions designed to quiet mental noise, foster self-compassion, and align your life energy.' }
    ],
    faqs: [
      { question: 'What can I expect in a Spiritual Counselling session?', answer: 'A peaceful, non-judgmental environment where you explore personal growth, release emotional tension, and cultivate deep inner harmony.' }
    ]
  }
];

export const FOUNDERS = [
  {
    name: 'Dr. Yashaswini HV',
    role: 'Co-Founder & Chief Aesthetic Physician',
    qualifications: 'BAMS | Ayurvedic Doctor | Aesthetic Physician | Wellness Expert',
    bio: 'Dr. Yashaswini HV blends time-tested Ayurvedic wellness principles with state-of-the-art modern aesthetic physician expertise. Her holistic philosophy ensures every treatment enhances external natural beauty while nurturing internal vital aura.',
    image: '/images/Founders%20Images/Dr.%20Yashaswini.jpeg',
    phone: '+91 96639 11089',
    rawPhone: '9663911089'
  },
  {
    name: 'Nagendra Karanik',
    role: 'Founder, CEO & Spiritual Guide',
    qualifications: 'Founder | CEO | Spiritual Guide | Filmmaker',
    bio: 'Nagendra Karanik brings a profound vision of holistic human transformation to The Pink Aura. As a filmmaker and spiritual guide, he shapes The Pink Aura into more than a center — a sanctuary where inner confidence and outer beauty meet.',
    image: '/images/Founders%20Images/Mr.%20Nagendra%20Karanik.jpeg',
    phone: '+91 63623 48467',
    rawPhone: '6362348467'
  }
];

export const CLINIC_INFO = {
  name: 'The Pink Aura — Aesthetic & Wellness Centre',
  tagline: 'Enhance Your Beauty • Elevate Your Aura',
  address: '#112, 1st Floor, 16th Cross, Near Delmia Circle, 4th Phase JP Nagar, Dollars Colony, Bangalore – 560078',
  email: 'thepinkaura.connect@gmail.com',
  phone: '+91 76191 51455',
  rawPhone: '7619151455',
  instagram: 'https://www.instagram.com/thepinkaura_official?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==',
  hours: '10:00 AM – 7:00 PM (Closed on Tuesdays)'
};
