/**
 * SUB-TREATMENT / SERVICE PROCEDURE IMAGE MAP & MULTI-TIERED FALLBACKS
 * 
 * Auto-generated from The_Pink_Aura_126_Image_Mapping_Final.xlsx (126 Exact Treatments).
 * Primary 1: Client Uploaded Numbered Image (/images/treatments/{num}.webp)
 * Alternative 1: High-resolution Stock Photo Fallbacks
 * Alternative 2: Main Category WebP Image
 */

export const SUB_TREATMENT_FILENAMES: Record<string, string> = {
  'lhr-1': '1.webp', // #1 Upper Lip
  'lhr-2': '2.webp', // #2 Chin
  'lhr-3': '3.webp', // #3 Upper Lip + Chin
  'lhr-4': '4.webp', // #4 Full Face
  'lhr-5': '5.webp', // #5 Beard Line Shaping
  'lhr-6': '6.webp', // #6 Underarms
  'lhr-7': '7.webp', // #7 Full Arms
  'lhr-8': '8.webp', // #8 Full Legs
  'lhr-9': '9.webp', // #9 Full Arms + Full Legs
  'lhr-10': '10.webp', // #10 Full Front
  'lhr-11': '11.webp', // #11 Full Back
  'lhr-12': '12.webp', // #12 Full Bikini
  'lhr-13': '13.webp', // #13 Buttocks
  'lhr-14': '14.webp', // #14 Full Bikini + Buttocks
  'lhr-15': '15.webp', // #15 Full Body
  'sk-1': '16.webp', // #16 Hydra Medi Facial
  'sk-2': '17.webp', // #17 Carbon Facial
  'sk-3': '18.webp', // #18 Korean Glass Skin Treatment
  'sk-4': '19.webp', // #19 Q-Switched Laser
  'sk-5': '20.webp', // #20 Pico Laser
  'sk-6': '21.webp', // #21 CO₂ Fractional Laser
  'sk-7': '22.webp', // #22 Fractional Laser
  'sk-8': '23.webp', // #23 AHA Peel
  'sk-9': '24.webp', // #24 BHA/Salicylic Peel
  'sk-10': '25.webp', // #25 Black Peel
  'sk-11': '26.webp', // #26 TCA Peel
  'sk-12': '27.webp', // #27 Yellow Peel
  'sk-13': '28.webp', // #28 Retises Peel
  'sk-14': '29.webp', // #29 Cosmelan Peel
  'sk-15': '30.webp', // #30 Microdermabrasion
  'sk-16': '31.webp', // #31 Dermapen/Dermaroller/Microneedling
  'sk-17': '32.webp', // #32 PRP + Microneedling
  'sk-18': '33.webp', // #33 Photofacial/IPL
  'sk-19': '34.webp', // #34 Mole Removal
  'sk-20': '35.webp', // #35 Wart Removal
  'sk-21': '36.webp', // #36 Skin Tag Removal
  'sk-22': '37.webp', // #37 Radiofrequency Skin Tightening
  'sk-23': '38.webp', // #38 HIFU Face
  'sk-24': '39.webp', // #39 LED Light Therapy
  'sk-25': '40.webp', // #40 Tattoo Removal
  'inj-1': '41.webp', // #41 PRP for Skin Rejuvenation
  'inj-2': '42.webp', // #42 Plasmolift
  'inj-3': '43.webp', // #43 Vampire Facelift
  'inj-4': '44.webp', // #44 Botox
  'inj-5': '45.webp', // #45 Dermal Fillers
  'inj-6': '46.webp', // #46 Skin Boosters
  'inj-7': '47.webp', // #47 Deoxycholic Acid
  'inj-8': '48.webp', // #48 Bio Fillers
  'inj-9': '49.webp', // #49 Microneedling with PRP
  'inj-10': '50.webp', // #50 Subcision
  'inj-11': '51.webp', // #51 Thread Lift
  'inj-12': '52.webp', // #52 Mesolipolysis
  'inj-13': '53.webp', // #53 FatX
  'inj-14': '54.webp', // #54 Exosome Therapy
  'inj-15': '55.webp', // #55 PDRN
  'inj-16': '56.webp', // #56 NCTF 135HA
  'inj-17': '57.webp', // #57 Skin Rebirth Therapy
  'inj-18': '58.webp', // #58 Skin Infusion Therapy
  'pmu-1': '59.webp', // #59 Microblading
  'pmu-2': '60.webp', // #60 Ombre Powder Brows
  'pmu-3': '61.webp', // #61 Combination Brows
  'pmu-4': '62.webp', // #62 Scalp Micropigmentation
  'pmu-5': '63.webp', // #63 Lip Tinting/Lip Blush
  'pmu-6': '64.webp', // #64 Eyeliner Tattoo
  'pmu-7': '65.webp', // #65 Full Eyeliner
  'pmu-8': '66.webp', // #66 Beauty Spot
  'pmu-9': '67.webp', // #67 PMU Touch-Up
  'pmu-10': '68.webp', // #68 Annual Color Refresh
  'hr-1': '69.webp', // #69 High Frequency Hair Therapy
  'hr-2': '70.webp', // #70 Laser Helmet/LLLT
  'hr-3': '71.webp', // #71 PRP Hair Treatment
  'hr-4': '72.webp', // #72 GFC
  'hr-5': '73.webp', // #73 QR678 Hair Therapy
  'hr-6': '74.webp', // #74 Hair Fillers
  'hr-7': '75.webp', // #75 Exosome Hair Therapy
  'hr-8': '76.webp', // #76 Bio-PRF Hair Treatment
  'hr-9': '77.webp', // #77 Stem Cell/Regenerative Hair Therapy
  'ht-1': '78.webp', // #78 FUE
  'ht-2': '79.webp', // #79 Bio FUE
  'ht-3': 'hair_transplant_dhi.webp', // DHI Direct Hair Implantation
  'sl-1': '80.webp', // #80 Body Composition Analysis
  'sl-2': '81.webp', // #81 Weight Management Consultation
  'sl-3': '82.webp', // #82 Personalized Diet & Lifestyle Plan
  'sl-4': '83.webp', // #83 Body Firming
  'sl-5': '84.webp', // #84 Body Toning
  'sl-6': '85.webp', // #85 Weight Loss Program
  'sl-7': '86.webp', // #86 Lipolaser
  'sl-8': '87.webp', // #87 Radiofrequency Body Tightening
  'sl-9': '88.webp', // #88 CoolSculpting / Cryolipolysis
  'sl-10': '89.webp', // #89 Mesolipolysis
  'sl-11': '90.webp', // #90 Bust Reduction / Non-Surgical Program
  'pkg-1': '91.webp', // #91 Basic Slimming Package
  'pkg-2': '92.webp', // #92 Advanced Body Contouring Package
  'pkg-3': '93.webp', // #93 Premium Weight Transformation Program
  'wel-1': '94.webp', // #94 Personalized Diet Chart / Nutrition Planning
  'wel-2': '95.webp', // #95 Yoga & Exercise Guidance
  'wel-3': '96.webp', // #96 Lifestyle Modification Consultation
  'surg-1': '97.webp', // #97 Liposuction / Body Contouring
  'surg-2': '98.webp', // #98 Tummy Tuck / Abdominoplasty
  'surg-3': '99.webp', // #99 Breast Augmentation / Implants
  'surg-4': '100.webp', // #100 Breast Lift
  'surg-5': '101.webp', // #101 Breast Reduction
  'surg-6': '102.webp', // #102 Gynecomastia Surgery
  'surg-7': '103.webp', // #103 Fat Grafting / Fat Transfer
  'surg-8': '104.webp', // #104 Rhinoplasty
  'surg-9': '105.webp', // #105 Blepharoplasty
  'surg-10': '106.webp', // #106 Facelift
  'surg-11': '107.webp', // #107 Neck Lift
  'surg-12': '108.webp', // #108 Scar Revision Surgery
  'surg-13': '109.webp', // #109 Brazilian Butt Lift
  'surg-14': '110.webp', // #110 Buttock Implants
  'surg-15': '111.webp', // #111 Arm Lift
  'surg-16': '112.webp', // #112 Thigh Lift
  'surg-17': '113.webp', // #113 Calf Augmentation / Calf Implants
  'surg-18': '114.webp', // #114 Dimple Creation / Dimpleplasty
  'int-1': '115.webp', // #115 Vaginoplasty
  'int-2': '116.webp', // #116 Labiaplasty
  'int-3': '117.webp', // #117 Penile Cosmetic Procedures
  'sp-1': '118.webp', // #118 Spiritual Counseling Treatment
  'sp-2': 'spiritual_awareness_program.webp', // Spiritual Awareness Program
  'sp-3': 'spiritual_enlightenment_sessions.webp', // Spiritual Enlightenment Sessions
  'iv-1': '119.webp', // #119 Beauty Boost IV Drip
  'iv-2': '120.webp', // #120 Energy IV Drip
  'iv-3': '121.webp', // #121 Immune Boost IV Drip
  'iv-4': '122.webp', // #122 Multivitamin IV Drip
  'iv-5': '123.webp', // #123 B12 IV Drip
  'iv-6': '124.webp', // #124 Detox IV Drip
  'iv-7': '125.webp', // #125 Vitamin C IV Drip
  'iv-8': '126.webp', // #126 Glutathione IV Drip
};

export const SUB_TREATMENT_IMAGES: Record<string, string> = {
  'lhr-1': '/images/treatments/1.webp', // #1 Upper Lip
  'lhr-2': '/images/treatments/2.webp', // #2 Chin
  'lhr-3': '/images/treatments/3.webp', // #3 Upper Lip + Chin
  'lhr-4': '/images/treatments/4.webp', // #4 Full Face
  'lhr-5': '/images/treatments/5.webp', // #5 Beard Line Shaping
  'lhr-6': '/images/treatments/6.webp', // #6 Underarms
  'lhr-7': '/images/treatments/7.webp', // #7 Full Arms
  'lhr-8': '/images/treatments/8.webp', // #8 Full Legs
  'lhr-9': '/images/treatments/9.webp', // #9 Full Arms + Full Legs
  'lhr-10': '/images/treatments/10.webp', // #10 Full Front
  'lhr-11': '/images/treatments/11.webp', // #11 Full Back
  'lhr-12': '/images/treatments/12.webp', // #12 Full Bikini
  'lhr-13': '/images/treatments/13.webp', // #13 Buttocks
  'lhr-14': '/images/treatments/14.webp', // #14 Full Bikini + Buttocks
  'lhr-15': '/images/treatments/15.webp', // #15 Full Body
  'sk-1': '/images/treatments/16.webp', // #16 Hydra Medi Facial
  'sk-2': '/images/treatments/17.webp', // #17 Carbon Facial
  'sk-3': '/images/treatments/18.webp', // #18 Korean Glass Skin Treatment
  'sk-4': '/images/treatments/19.webp', // #19 Q-Switched Laser
  'sk-5': '/images/treatments/20.webp', // #20 Pico Laser
  'sk-6': '/images/treatments/21.webp', // #21 CO₂ Fractional Laser
  'sk-7': '/images/treatments/22.webp', // #22 Fractional Laser
  'sk-8': '/images/treatments/23.webp', // #23 AHA Peel
  'sk-9': '/images/treatments/24.webp', // #24 BHA/Salicylic Peel
  'sk-10': '/images/treatments/25.webp', // #25 Black Peel
  'sk-11': '/images/treatments/26.webp', // #26 TCA Peel
  'sk-12': '/images/treatments/27.webp', // #27 Yellow Peel
  'sk-13': '/images/treatments/28.webp', // #28 Retises Peel
  'sk-14': '/images/treatments/29.webp', // #29 Cosmelan Peel
  'sk-15': '/images/treatments/30.webp', // #30 Microdermabrasion
  'sk-16': '/images/treatments/31.webp', // #31 Dermapen/Dermaroller/Microneedling
  'sk-17': '/images/treatments/32.webp', // #32 PRP + Microneedling
  'sk-18': '/images/treatments/33.webp', // #33 Photofacial/IPL
  'sk-19': '/images/treatments/34.webp', // #34 Mole Removal
  'sk-20': '/images/treatments/35.webp', // #35 Wart Removal
  'sk-21': '/images/treatments/36.webp', // #36 Skin Tag Removal
  'sk-22': '/images/treatments/37.webp', // #37 Radiofrequency Skin Tightening
  'sk-23': '/images/treatments/38.webp', // #38 HIFU Face
  'sk-24': '/images/treatments/39.webp', // #39 LED Light Therapy
  'sk-25': '/images/treatments/40.webp', // #40 Tattoo Removal
  'inj-1': '/images/treatments/41.webp', // #41 PRP for Skin Rejuvenation
  'inj-2': '/images/treatments/42.webp', // #42 Plasmolift
  'inj-3': '/images/treatments/43.webp', // #43 Vampire Facelift
  'inj-4': '/images/treatments/44.webp', // #44 Botox
  'inj-5': '/images/treatments/45.webp', // #45 Dermal Fillers
  'inj-6': '/images/treatments/46.webp', // #46 Skin Boosters
  'inj-7': '/images/treatments/47.webp', // #47 Deoxycholic Acid
  'inj-8': '/images/treatments/48.webp', // #48 Bio Fillers
  'inj-9': '/images/treatments/49.webp', // #49 Microneedling with PRP
  'inj-10': '/images/treatments/50.webp', // #50 Subcision
  'inj-11': '/images/treatments/51.webp', // #51 Thread Lift
  'inj-12': '/images/treatments/52.webp', // #52 Mesolipolysis
  'inj-13': '/images/treatments/53.webp', // #53 FatX
  'inj-14': '/images/treatments/54.webp', // #54 Exosome Therapy
  'inj-15': '/images/treatments/55.webp', // #55 PDRN
  'inj-16': '/images/treatments/56.webp', // #56 NCTF 135HA
  'inj-17': '/images/treatments/57.webp', // #57 Skin Rebirth Therapy
  'inj-18': '/images/treatments/58.webp', // #58 Skin Infusion Therapy
  'pmu-1': '/images/treatments/59.webp', // #59 Microblading
  'pmu-2': '/images/treatments/60.webp', // #60 Ombre Powder Brows
  'pmu-3': '/images/treatments/61.webp', // #61 Combination Brows
  'pmu-4': '/images/treatments/62.webp', // #62 Scalp Micropigmentation
  'pmu-5': '/images/treatments/63.webp', // #63 Lip Tinting/Lip Blush
  'pmu-6': '/images/treatments/64.webp', // #64 Eyeliner Tattoo
  'pmu-7': '/images/treatments/65.webp', // #65 Full Eyeliner
  'pmu-8': '/images/treatments/66.webp', // #66 Beauty Spot
  'pmu-9': '/images/treatments/67.webp', // #67 PMU Touch-Up
  'pmu-10': '/images/treatments/68.webp', // #68 Annual Color Refresh
  'hr-1': '/images/treatments/69.webp', // #69 High Frequency Hair Therapy
  'hr-2': '/images/treatments/70.webp', // #70 Laser Helmet/LLLT
  'hr-3': '/images/treatments/71.webp', // #71 PRP Hair Treatment
  'hr-4': '/images/treatments/72.webp', // #72 GFC
  'hr-5': '/images/treatments/73.webp', // #73 QR678 Hair Therapy
  'hr-6': '/images/treatments/74.webp', // #74 Hair Fillers
  'hr-7': '/images/treatments/75.webp', // #75 Exosome Hair Therapy
  'hr-8': '/images/treatments/76.webp', // #76 Bio-PRF Hair Treatment
  'hr-9': '/images/treatments/77.webp', // #77 Stem Cell/Regenerative Hair Therapy
  'ht-1': '/images/treatments/78.webp', // #78 FUE
  'ht-2': '/images/treatments/79.webp', // #79 Bio FUE
  'ht-3': '/images/treatments/hair_transplant_dhi.webp', // DHI Direct Hair Implantation
  'sl-1': '/images/treatments/80.webp', // #80 Body Composition Analysis
  'sl-2': '/images/treatments/81.webp', // #81 Weight Management Consultation
  'sl-3': '/images/treatments/82.webp', // #82 Personalized Diet & Lifestyle Plan
  'sl-4': '/images/treatments/83.webp', // #83 Body Firming
  'sl-5': '/images/treatments/84.webp', // #84 Body Toning
  'sl-6': '/images/treatments/85.webp', // #85 Weight Loss Program
  'sl-7': '/images/treatments/86.webp', // #86 Lipolaser
  'sl-8': '/images/treatments/87.webp', // #87 Radiofrequency Body Tightening
  'sl-9': '/images/treatments/88.webp', // #88 CoolSculpting / Cryolipolysis
  'sl-10': '/images/treatments/89.webp', // #89 Mesolipolysis
  'sl-11': '/images/treatments/90.webp', // #90 Bust Reduction / Non-Surgical Program
  'pkg-1': '/images/treatments/91.webp', // #91 Basic Slimming Package
  'pkg-2': '/images/treatments/92.webp', // #92 Advanced Body Contouring Package
  'pkg-3': '/images/treatments/93.webp', // #93 Premium Weight Transformation Program
  'wel-1': '/images/treatments/94.webp', // #94 Personalized Diet Chart / Nutrition Planning
  'wel-2': '/images/treatments/95.webp', // #95 Yoga & Exercise Guidance
  'wel-3': '/images/treatments/96.webp', // #96 Lifestyle Modification Consultation
  'surg-1': '/images/treatments/97.webp', // #97 Liposuction / Body Contouring
  'surg-2': '/images/treatments/98.webp', // #98 Tummy Tuck / Abdominoplasty
  'surg-3': '/images/treatments/99.webp', // #99 Breast Augmentation / Implants
  'surg-4': '/images/treatments/100.webp', // #100 Breast Lift
  'surg-5': '/images/treatments/101.webp', // #101 Breast Reduction
  'surg-6': '/images/treatments/102.webp', // #102 Gynecomastia Surgery
  'surg-7': '/images/treatments/103.webp', // #103 Fat Grafting / Fat Transfer
  'surg-8': '/images/treatments/104.webp', // #104 Rhinoplasty
  'surg-9': '/images/treatments/105.webp', // #105 Blepharoplasty
  'surg-10': '/images/treatments/106.webp', // #106 Facelift
  'surg-11': '/images/treatments/107.webp', // #107 Neck Lift
  'surg-12': '/images/treatments/108.webp', // #108 Scar Revision Surgery
  'surg-13': '/images/treatments/109.webp', // #109 Brazilian Butt Lift
  'surg-14': '/images/treatments/110.webp', // #110 Buttock Implants
  'surg-15': '/images/treatments/111.webp', // #111 Arm Lift
  'surg-16': '/images/treatments/112.webp', // #112 Thigh Lift
  'surg-17': '/images/treatments/113.webp', // #113 Calf Augmentation / Calf Implants
  'surg-18': '/images/treatments/114.webp', // #114 Dimple Creation / Dimpleplasty
  'int-1': '/images/treatments/115.webp', // #115 Vaginoplasty
  'int-2': '/images/treatments/116.webp', // #116 Labiaplasty
  'int-3': '/images/treatments/117.webp', // #117 Penile Cosmetic Procedures
  'sp-1': '/images/treatments/118.webp', // #118 Spiritual Counseling Treatment
  'sp-2': '/images/treatments/spiritual_awareness_program.webp', // Spiritual Awareness Program
  'sp-3': '/images/treatments/spiritual_enlightenment_sessions.webp', // Spiritual Enlightenment Sessions
  'iv-1': '/images/treatments/119.webp', // #119 Beauty Boost IV Drip
  'iv-2': '/images/treatments/120.webp', // #120 Energy IV Drip
  'iv-3': '/images/treatments/121.webp', // #121 Immune Boost IV Drip
  'iv-4': '/images/treatments/122.webp', // #122 Multivitamin IV Drip
  'iv-5': '/images/treatments/123.webp', // #123 B12 IV Drip
  'iv-6': '/images/treatments/124.webp', // #124 Detox IV Drip
  'iv-7': '/images/treatments/125.webp', // #125 Vitamin C IV Drip
  'iv-8': '/images/treatments/126.webp', // #126 Glutathione IV Drip
};

export const SUB_TREATMENT_FALLBACKS: Record<string, string[]> = {
  'lhr-1': [
    '/images/treatments/1.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-2': [
    '/images/treatments/2.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-3': [
    '/images/treatments/3.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-4': [
    '/images/treatments/4.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-5': [
    '/images/treatments/5.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-6': [
    '/images/treatments/6.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-7': [
    '/images/treatments/7.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-8': [
    '/images/treatments/8.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-9': [
    '/images/treatments/9.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-10': [
    '/images/treatments/10.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-11': [
    '/images/treatments/11.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-12': [
    '/images/treatments/12.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-13': [
    '/images/treatments/13.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-14': [
    '/images/treatments/14.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-15': [
    '/images/treatments/15.webp',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'sk-1': [
    '/images/treatments/16.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-2': [
    '/images/treatments/17.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-3': [
    '/images/treatments/18.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-4': [
    '/images/treatments/19.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-5': [
    '/images/treatments/20.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-6': [
    '/images/treatments/21.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-7': [
    '/images/treatments/22.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-8': [
    '/images/treatments/23.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-9': [
    '/images/treatments/24.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-10': [
    '/images/treatments/25.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-11': [
    '/images/treatments/26.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-12': [
    '/images/treatments/27.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-13': [
    '/images/treatments/28.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-14': [
    '/images/treatments/29.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-15': [
    '/images/treatments/30.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-16': [
    '/images/treatments/31.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-17': [
    '/images/treatments/32.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-18': [
    '/images/treatments/33.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-19': [
    '/images/treatments/34.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-20': [
    '/images/treatments/35.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-21': [
    '/images/treatments/36.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-22': [
    '/images/treatments/37.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-23': [
    '/images/treatments/38.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-24': [
    '/images/treatments/39.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-25': [
    '/images/treatments/40.webp',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'inj-1': [
    '/images/treatments/41.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-2': [
    '/images/treatments/42.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-3': [
    '/images/treatments/43.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-4': [
    '/images/treatments/44.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-5': [
    '/images/treatments/45.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-6': [
    '/images/treatments/46.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-7': [
    '/images/treatments/47.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-8': [
    '/images/treatments/48.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-9': [
    '/images/treatments/49.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-10': [
    '/images/treatments/50.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-11': [
    '/images/treatments/51.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-12': [
    '/images/treatments/52.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-13': [
    '/images/treatments/53.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-14': [
    '/images/treatments/54.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-15': [
    '/images/treatments/55.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-16': [
    '/images/treatments/56.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-17': [
    '/images/treatments/57.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-18': [
    '/images/treatments/58.webp',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'pmu-1': [
    '/images/treatments/59.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-2': [
    '/images/treatments/60.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-3': [
    '/images/treatments/61.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-4': [
    '/images/treatments/62.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-5': [
    '/images/treatments/63.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-6': [
    '/images/treatments/64.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-7': [
    '/images/treatments/65.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-8': [
    '/images/treatments/66.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-9': [
    '/images/treatments/67.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-10': [
    '/images/treatments/68.webp',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'hr-1': [
    '/images/treatments/69.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-2': [
    '/images/treatments/70.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-3': [
    '/images/treatments/71.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-4': [
    '/images/treatments/72.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-5': [
    '/images/treatments/73.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-6': [
    '/images/treatments/74.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-7': [
    '/images/treatments/75.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-8': [
    '/images/treatments/76.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-9': [
    '/images/treatments/77.webp',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'ht-1': [
    '/images/treatments/78.webp',
    '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.webp'
  ],
  'ht-2': [
    '/images/treatments/79.webp',
    '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.webp'
  ],
  'ht-3': [
    '/images/treatments/hair_transplant_dhi.webp',
    '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.webp'
  ],
  'sl-1': [
    '/images/treatments/80.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-2': [
    '/images/treatments/81.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-3': [
    '/images/treatments/82.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-4': [
    '/images/treatments/83.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-5': [
    '/images/treatments/84.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-6': [
    '/images/treatments/85.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-7': [
    '/images/treatments/86.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-8': [
    '/images/treatments/87.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-9': [
    '/images/treatments/88.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-10': [
    '/images/treatments/89.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-11': [
    '/images/treatments/90.webp',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'pkg-1': [
    '/images/treatments/91.webp',
    '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'pkg-2': [
    '/images/treatments/92.webp',
    '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'pkg-3': [
    '/images/treatments/93.webp',
    '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'wel-1': [
    '/images/treatments/94.webp',
    '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20%26%20WELLNESS.webp'
  ],
  'wel-2': [
    '/images/treatments/95.webp',
    '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20%26%20WELLNESS.webp'
  ],
  'wel-3': [
    '/images/treatments/96.webp',
    '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20%26%20WELLNESS.webp'
  ],
  'surg-1': [
    '/images/treatments/97.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-2': [
    '/images/treatments/98.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-3': [
    '/images/treatments/99.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-4': [
    '/images/treatments/100.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-5': [
    '/images/treatments/101.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-6': [
    '/images/treatments/102.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-7': [
    '/images/treatments/103.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-8': [
    '/images/treatments/104.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-9': [
    '/images/treatments/105.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-10': [
    '/images/treatments/106.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-11': [
    '/images/treatments/107.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-12': [
    '/images/treatments/108.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-13': [
    '/images/treatments/109.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-14': [
    '/images/treatments/110.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-15': [
    '/images/treatments/111.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-16': [
    '/images/treatments/112.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-17': [
    '/images/treatments/113.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-18': [
    '/images/treatments/114.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'int-1': [
    '/images/treatments/115.webp',
    '/images/services/WEB%20IMAGES/INTIMATE%20%26%20GENITAL%20COSMETIC%20PROCEDURES.webp'
  ],
  'int-2': [
    '/images/treatments/116.webp',
    '/images/services/WEB%20IMAGES/INTIMATE%20%26%20GENITAL%20COSMETIC%20PROCEDURES.webp'
  ],
  'int-3': [
    '/images/treatments/117.webp',
    '/images/services/WEB%20IMAGES/INTIMATE%20%26%20GENITAL%20COSMETIC%20PROCEDURES.webp'
  ],
  'sp-1': [
    '/images/treatments/118.webp',
    '/images/services/WEB%20IMAGES/SPIRITUAL%20COUNSELLING%20%26%20WELLNESS.webp'
  ],
  'sp-2': [
    '/images/treatments/spiritual_awareness_program.webp',
    '/images/treatments/118.webp',
    '/images/services/WEB%20IMAGES/SPIRITUAL%20COUNSELLING%20%26%20WELLNESS.webp'
  ],
  'sp-3': [
    '/images/treatments/spiritual_enlightenment_sessions.webp',
    '/images/treatments/118.webp',
    '/images/services/WEB%20IMAGES/SPIRITUAL%20COUNSELLING%20%26%20WELLNESS.webp'
  ],
  'iv-1': [
    '/images/treatments/119.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-2': [
    '/images/treatments/120.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-3': [
    '/images/treatments/121.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-4': [
    '/images/treatments/122.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-5': [
    '/images/treatments/123.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-6': [
    '/images/treatments/124.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-7': [
    '/images/treatments/125.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-8': [
    '/images/treatments/126.webp',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
};

/**
 * Helper function to retrieve all fallback image sources for a treatment
 */
export function getTreatmentImageSources(treatmentId: string, categoryCardImage?: string): string[] {
  const fallbacks = SUB_TREATMENT_FALLBACKS[treatmentId] || [];
  if (categoryCardImage && !fallbacks.includes(categoryCardImage)) {
    return [...fallbacks, categoryCardImage];
  }
  return fallbacks;
}
