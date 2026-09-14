/**
 * SUB-TREATMENT / SERVICE PROCEDURE IMAGE MAP & MULTI-TIERED FALLBACKS
 * 
 * Auto-generated from The_Pink_Aura_126_Image_Mapping_Final.xlsx (126 Exact Treatments).
 * Primary 1: Client Uploaded Numbered Image (/images/treatments/{num}.png / .webp / .jpg)
 * Primary 2: Client Sub treatment images Folder (/images/treatments/Sub%20treatment%20images/{filename})
 * Alternative 1: High-resolution Stock Photo Fallbacks
 * Alternative 2: Main Category WebP Image
 */

export const SUB_TREATMENT_FILENAMES: Record<string, string> = {
  'lhr-1': '1.png', // #1 Upper Lip
  'lhr-2': '2.png', // #2 Chin
  'lhr-3': '3.png', // #3 Upper Lip + Chin
  'lhr-4': '4.png', // #4 Full Face
  'lhr-5': '5.png', // #5 Beard Line Shaping
  'lhr-6': '6.png', // #6 Underarms
  'lhr-7': '7.png', // #7 Full Arms
  'lhr-8': '8.png', // #8 Full Legs
  'lhr-9': '9.png', // #9 Full Arms + Full Legs
  'lhr-10': '10.png', // #10 Full Front
  'lhr-11': '11.png', // #11 Full Back
  'lhr-12': '12.png', // #12 Full Bikini
  'lhr-13': '13.png', // #13 Buttocks
  'lhr-14': '14.png', // #14 Full Bikini + Buttocks
  'lhr-15': '15.png', // #15 Full Body
  'sk-1': '16.png', // #16 Hydra Medi Facial
  'sk-2': '17.png', // #17 Carbon Facial
  'sk-3': '18.png', // #18 Korean Glass Skin Treatment
  'sk-4': '19.png', // #19 Q-Switched Laser
  'sk-5': '20.png', // #20 Pico Laser
  'sk-6': '21.png', // #21 CO₂ Fractional Laser
  'sk-7': '22.png', // #22 Fractional Laser
  'sk-8': '23.png', // #23 AHA Peel
  'sk-9': '24.png', // #24 BHA/Salicylic Peel
  'sk-10': '25.png', // #25 Black Peel
  'sk-11': '26.png', // #26 TCA Peel
  'sk-12': '27.png', // #27 Yellow Peel
  'sk-13': '28.png', // #28 Retises Peel
  'sk-14': '29.png', // #29 Cosmelan Peel
  'sk-15': '30.png', // #30 Microdermabrasion
  'sk-16': '31.png', // #31 Dermapen/Dermaroller/Microneedling
  'sk-17': '32.png', // #32 PRP + Microneedling
  'sk-18': '33.png', // #33 Photofacial/IPL
  'sk-19': '34.png', // #34 Mole Removal
  'sk-20': '35.png', // #35 Wart Removal
  'sk-21': '36.png', // #36 Skin Tag Removal
  'sk-22': '37.png', // #37 Radiofrequency Skin Tightening
  'sk-23': '38.png', // #38 HIFU Face
  'sk-24': '39.png', // #39 LED Light Therapy
  'sk-25': '40.png', // #40 Tattoo Removal
  'inj-1': '41.png', // #41 PRP for Skin Rejuvenation
  'inj-2': '42.png', // #42 Plasmolift
  'inj-3': '43.png', // #43 Vampire Facelift
  'inj-4': '44.png', // #44 Botox
  'inj-5': '45.png', // #45 Dermal Fillers
  'inj-6': '46.png', // #46 Skin Boosters
  'inj-7': '47.png', // #47 Deoxycholic Acid
  'inj-8': '48.png', // #48 Bio Fillers
  'inj-9': '49.png', // #49 Microneedling with PRP
  'inj-10': '50.png', // #50 Subcision
  'inj-11': '51.png', // #51 Thread Lift
  'inj-12': '52.png', // #52 Mesolipolysis
  'inj-13': '53.png', // #53 FatX
  'inj-14': '54.png', // #54 Exosome Therapy
  'inj-15': '55.png', // #55 PDRN
  'inj-16': '56.png', // #56 NCTF 135HA
  'inj-17': '57.png', // #57 Skin Rebirth Therapy
  'inj-18': '58.png', // #58 Skin Infusion Therapy
  'pmu-1': '59.png', // #59 Microblading
  'pmu-2': '60.png', // #60 Ombre Powder Brows
  'pmu-3': '61.png', // #61 Combination Brows
  'pmu-4': '62.png', // #62 Scalp Micropigmentation
  'pmu-5': '63.png', // #63 Lip Tinting/Lip Blush
  'pmu-6': '64.png', // #64 Eyeliner Tattoo
  'pmu-7': '65.png', // #65 Full Eyeliner
  'pmu-8': '66.png', // #66 Beauty Spot
  'pmu-9': '67.png', // #67 PMU Touch-Up
  'pmu-10': '68.png', // #68 Annual Color Refresh
  'hr-1': '69.png', // #69 High Frequency Hair Therapy
  'hr-2': '70.png', // #70 Laser Helmet/LLLT
  'hr-3': '71.png', // #71 PRP Hair Treatment
  'hr-4': '72.png', // #72 GFC
  'hr-5': '73.png', // #73 QR678 Hair Therapy
  'hr-6': '74.png', // #74 Hair Fillers
  'hr-7': '75.png', // #75 Exosome Hair Therapy
  'hr-8': '76.png', // #76 Bio-PRF Hair Treatment
  'hr-9': '77.png', // #77 Stem Cell/Regenerative Hair Therapy
  'ht-1': '78.png', // #78 FUE
  'ht-2': '79.png', // #79 FUT
  'sl-1': '80.png', // #80 Body Composition Analysis
  'sl-2': '81.png', // #81 Weight Management Consultation
  'sl-3': '82.png', // #82 Personalized Diet & Lifestyle Plan
  'sl-4': '83.png', // #83 Body Firming
  'sl-5': '84.png', // #84 Body Toning
  'sl-6': '85.png', // #85 Weight Loss Program
  'sl-7': '86.png', // #86 Lipolaser
  'sl-8': '87.png', // #87 Radiofrequency Body Tightening
  'sl-9': '88.png', // #88 CoolSculpting / Cryolipolysis
  'sl-10': '89.png', // #89 Mesolipolysis
  'sl-11': '90.png', // #90 Bust Reduction / Non-Surgical Program
  'pkg-1': '91.png', // #91 Basic Slimming Package
  'pkg-2': '92.png', // #92 Advanced Body Contouring Package
  'pkg-3': '93.png', // #93 Premium Weight Transformation Program
  'wel-1': '94.png', // #94 Personalized Diet Chart / Nutrition Planning
  'wel-2': '95.png', // #95 Yoga & Exercise Guidance
  'wel-3': '96.png', // #96 Lifestyle Modification Consultation
  'surg-1': '97.png', // #97 Liposuction / Body Contouring
  'surg-2': '98.png', // #98 Tummy Tuck / Abdominoplasty
  'surg-3': '99.webp', // #99 Breast Augmentation / Implants
  'surg-4': '100.png', // #100 Breast Lift
  'surg-5': '101.png', // #101 Breast Reduction
  'surg-6': '102.png', // #102 Gynecomastia Surgery
  'surg-7': '103.jpg', // #103 Fat Grafting / Fat Transfer
  'surg-8': '104.png', // #104 Rhinoplasty
  'surg-9': '105.png', // #105 Blepharoplasty
  'surg-10': '106.png', // #106 Facelift
  'surg-11': '107.png', // #107 Neck Lift
  'surg-12': '108.png', // #108 Scar Revision Surgery
  'surg-13': '109.png', // #109 Brazilian Butt Lift
  'surg-14': '110.png', // #110 Buttock Implants
  'surg-15': '111.jpg', // #111 Arm Lift
  'surg-16': '112.png', // #112 Thigh Lift
  'surg-17': '113.png', // #113 Calf Augmentation / Calf Implants
  'surg-18': '114.png', // #114 Dimple Creation / Dimpleplasty
  'int-1': '115.png', // #115 Vaginoplasty
  'int-2': '116.png', // #116 Labiaplasty
  'int-3': '117.png', // #117 Penile Cosmetic Procedures
  'sp-1': '118.png', // #118 Spiritual Counselling
  'iv-1': '119.png', // #119 Beauty Boost IV Drip
  'iv-2': '120.png', // #120 Energy IV Drip
  'iv-3': '121.png', // #121 Immune Boost IV Drip
  'iv-4': '122.png', // #122 Multivitamin IV Drip
  'iv-5': '123.png', // #123 B12 IV Drip
  'iv-6': '124.png', // #124 Detox IV Drip
  'iv-7': '125.png', // #125 Vitamin C IV Drip
  'iv-8': '126.png', // #126 Glutathione IV Drip
};

export const SUB_TREATMENT_IMAGES: Record<string, string> = {
  'lhr-1': '/images/treatments/1.png', // #1 Upper Lip
  'lhr-2': '/images/treatments/2.png', // #2 Chin
  'lhr-3': '/images/treatments/3.png', // #3 Upper Lip + Chin
  'lhr-4': '/images/treatments/4.png', // #4 Full Face
  'lhr-5': '/images/treatments/5.png', // #5 Beard Line Shaping
  'lhr-6': '/images/treatments/6.png', // #6 Underarms
  'lhr-7': '/images/treatments/7.png', // #7 Full Arms
  'lhr-8': '/images/treatments/8.png', // #8 Full Legs
  'lhr-9': '/images/treatments/9.png', // #9 Full Arms + Full Legs
  'lhr-10': '/images/treatments/10.png', // #10 Full Front
  'lhr-11': '/images/treatments/11.png', // #11 Full Back
  'lhr-12': '/images/treatments/12.png', // #12 Full Bikini
  'lhr-13': '/images/treatments/13.png', // #13 Buttocks
  'lhr-14': '/images/treatments/14.png', // #14 Full Bikini + Buttocks
  'lhr-15': '/images/treatments/15.png', // #15 Full Body
  'sk-1': '/images/treatments/16.png', // #16 Hydra Medi Facial
  'sk-2': '/images/treatments/17.png', // #17 Carbon Facial
  'sk-3': '/images/treatments/18.png', // #18 Korean Glass Skin Treatment
  'sk-4': '/images/treatments/19.png', // #19 Q-Switched Laser
  'sk-5': '/images/treatments/20.png', // #20 Pico Laser
  'sk-6': '/images/treatments/21.png', // #21 CO₂ Fractional Laser
  'sk-7': '/images/treatments/22.png', // #22 Fractional Laser
  'sk-8': '/images/treatments/23.png', // #23 AHA Peel
  'sk-9': '/images/treatments/24.png', // #24 BHA/Salicylic Peel
  'sk-10': '/images/treatments/25.png', // #25 Black Peel
  'sk-11': '/images/treatments/26.png', // #26 TCA Peel
  'sk-12': '/images/treatments/27.png', // #27 Yellow Peel
  'sk-13': '/images/treatments/28.png', // #28 Retises Peel
  'sk-14': '/images/treatments/29.png', // #29 Cosmelan Peel
  'sk-15': '/images/treatments/30.png', // #30 Microdermabrasion
  'sk-16': '/images/treatments/31.png', // #31 Dermapen/Dermaroller/Microneedling
  'sk-17': '/images/treatments/32.png', // #32 PRP + Microneedling
  'sk-18': '/images/treatments/33.png', // #33 Photofacial/IPL
  'sk-19': '/images/treatments/34.png', // #34 Mole Removal
  'sk-20': '/images/treatments/35.png', // #35 Wart Removal
  'sk-21': '/images/treatments/36.png', // #36 Skin Tag Removal
  'sk-22': '/images/treatments/37.png', // #37 Radiofrequency Skin Tightening
  'sk-23': '/images/treatments/38.png', // #38 HIFU Face
  'sk-24': '/images/treatments/39.png', // #39 LED Light Therapy
  'sk-25': '/images/treatments/40.png', // #40 Tattoo Removal
  'inj-1': '/images/treatments/41.png', // #41 PRP for Skin Rejuvenation
  'inj-2': '/images/treatments/42.png', // #42 Plasmolift
  'inj-3': '/images/treatments/43.png', // #43 Vampire Facelift
  'inj-4': '/images/treatments/44.png', // #44 Botox
  'inj-5': '/images/treatments/45.png', // #45 Dermal Fillers
  'inj-6': '/images/treatments/46.png', // #46 Skin Boosters
  'inj-7': '/images/treatments/47.png', // #47 Deoxycholic Acid
  'inj-8': '/images/treatments/48.png', // #48 Bio Fillers
  'inj-9': '/images/treatments/49.png', // #49 Microneedling with PRP
  'inj-10': '/images/treatments/50.png', // #50 Subcision
  'inj-11': '/images/treatments/51.png', // #51 Thread Lift
  'inj-12': '/images/treatments/52.png', // #52 Mesolipolysis
  'inj-13': '/images/treatments/53.png', // #53 FatX
  'inj-14': '/images/treatments/54.png', // #54 Exosome Therapy
  'inj-15': '/images/treatments/55.png', // #55 PDRN
  'inj-16': '/images/treatments/56.png', // #56 NCTF 135HA
  'inj-17': '/images/treatments/57.png', // #57 Skin Rebirth Therapy
  'inj-18': '/images/treatments/58.png', // #58 Skin Infusion Therapy
  'pmu-1': '/images/treatments/59.png', // #59 Microblading
  'pmu-2': '/images/treatments/60.png', // #60 Ombre Powder Brows
  'pmu-3': '/images/treatments/61.png', // #61 Combination Brows
  'pmu-4': '/images/treatments/62.png', // #62 Scalp Micropigmentation
  'pmu-5': '/images/treatments/63.png', // #63 Lip Tinting/Lip Blush
  'pmu-6': '/images/treatments/64.png', // #64 Eyeliner Tattoo
  'pmu-7': '/images/treatments/65.png', // #65 Full Eyeliner
  'pmu-8': '/images/treatments/66.png', // #66 Beauty Spot
  'pmu-9': '/images/treatments/67.png', // #67 PMU Touch-Up
  'pmu-10': '/images/treatments/68.png', // #68 Annual Color Refresh
  'hr-1': '/images/treatments/69.png', // #69 High Frequency Hair Therapy
  'hr-2': '/images/treatments/70.png', // #70 Laser Helmet/LLLT
  'hr-3': '/images/treatments/71.png', // #71 PRP Hair Treatment
  'hr-4': '/images/treatments/72.png', // #72 GFC
  'hr-5': '/images/treatments/73.png', // #73 QR678 Hair Therapy
  'hr-6': '/images/treatments/74.png', // #74 Hair Fillers
  'hr-7': '/images/treatments/75.png', // #75 Exosome Hair Therapy
  'hr-8': '/images/treatments/76.png', // #76 Bio-PRF Hair Treatment
  'hr-9': '/images/treatments/77.png', // #77 Stem Cell/Regenerative Hair Therapy
  'ht-1': '/images/treatments/78.png', // #78 FUE
  'ht-2': '/images/treatments/79.png', // #79 FUT
  'sl-1': '/images/treatments/80.png', // #80 Body Composition Analysis
  'sl-2': '/images/treatments/81.png', // #81 Weight Management Consultation
  'sl-3': '/images/treatments/82.png', // #82 Personalized Diet & Lifestyle Plan
  'sl-4': '/images/treatments/83.png', // #83 Body Firming
  'sl-5': '/images/treatments/84.png', // #84 Body Toning
  'sl-6': '/images/treatments/85.png', // #85 Weight Loss Program
  'sl-7': '/images/treatments/86.png', // #86 Lipolaser
  'sl-8': '/images/treatments/87.png', // #87 Radiofrequency Body Tightening
  'sl-9': '/images/treatments/88.png', // #88 CoolSculpting / Cryolipolysis
  'sl-10': '/images/treatments/89.png', // #89 Mesolipolysis
  'sl-11': '/images/treatments/90.png', // #90 Bust Reduction / Non-Surgical Program
  'pkg-1': '/images/treatments/91.png', // #91 Basic Slimming Package
  'pkg-2': '/images/treatments/92.png', // #92 Advanced Body Contouring Package
  'pkg-3': '/images/treatments/93.png', // #93 Premium Weight Transformation Program
  'wel-1': '/images/treatments/94.png', // #94 Personalized Diet Chart / Nutrition Planning
  'wel-2': '/images/treatments/95.png', // #95 Yoga & Exercise Guidance
  'wel-3': '/images/treatments/96.png', // #96 Lifestyle Modification Consultation
  'surg-1': '/images/treatments/97.png', // #97 Liposuction / Body Contouring
  'surg-2': '/images/treatments/98.png', // #98 Tummy Tuck / Abdominoplasty
  'surg-3': '/images/treatments/99.webp', // #99 Breast Augmentation / Implants
  'surg-4': '/images/treatments/100.png', // #100 Breast Lift
  'surg-5': '/images/treatments/101.png', // #101 Breast Reduction
  'surg-6': '/images/treatments/102.png', // #102 Gynecomastia Surgery
  'surg-7': '/images/treatments/103.jpg', // #103 Fat Grafting / Fat Transfer
  'surg-8': '/images/treatments/104.png', // #104 Rhinoplasty
  'surg-9': '/images/treatments/105.png', // #105 Blepharoplasty
  'surg-10': '/images/treatments/106.png', // #106 Facelift
  'surg-11': '/images/treatments/107.png', // #107 Neck Lift
  'surg-12': '/images/treatments/108.png', // #108 Scar Revision Surgery
  'surg-13': '/images/treatments/109.png', // #109 Brazilian Butt Lift
  'surg-14': '/images/treatments/110.png', // #110 Buttock Implants
  'surg-15': '/images/treatments/111.jpg', // #111 Arm Lift
  'surg-16': '/images/treatments/112.png', // #112 Thigh Lift
  'surg-17': '/images/treatments/113.png', // #113 Calf Augmentation / Calf Implants
  'surg-18': '/images/treatments/114.png', // #114 Dimple Creation / Dimpleplasty
  'int-1': '/images/treatments/115.png', // #115 Vaginoplasty
  'int-2': '/images/treatments/116.png', // #116 Labiaplasty
  'int-3': '/images/treatments/117.png', // #117 Penile Cosmetic Procedures
  'sp-1': '/images/treatments/118.png', // #118 Spiritual Counselling
  'iv-1': '/images/treatments/119.png', // #119 Beauty Boost IV Drip
  'iv-2': '/images/treatments/120.png', // #120 Energy IV Drip
  'iv-3': '/images/treatments/121.png', // #121 Immune Boost IV Drip
  'iv-4': '/images/treatments/122.png', // #122 Multivitamin IV Drip
  'iv-5': '/images/treatments/123.png', // #123 B12 IV Drip
  'iv-6': '/images/treatments/124.png', // #124 Detox IV Drip
  'iv-7': '/images/treatments/125.png', // #125 Vitamin C IV Drip
  'iv-8': '/images/treatments/126.png', // #126 Glutathione IV Drip
};

export const SUB_TREATMENT_FALLBACKS: Record<string, string[]> = {
  'lhr-1': [
    '/images/treatments/1.png',
    '/images/treatments/Sub%20treatment%20images/1.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-2': [
    '/images/treatments/2.png',
    '/images/treatments/Sub%20treatment%20images/2.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-3': [
    '/images/treatments/3.png',
    '/images/treatments/Sub%20treatment%20images/3.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-4': [
    '/images/treatments/4.png',
    '/images/treatments/Sub%20treatment%20images/4.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-5': [
    '/images/treatments/5.png',
    '/images/treatments/Sub%20treatment%20images/5.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-6': [
    '/images/treatments/6.png',
    '/images/treatments/Sub%20treatment%20images/6.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-7': [
    '/images/treatments/7.png',
    '/images/treatments/Sub%20treatment%20images/7.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-8': [
    '/images/treatments/8.png',
    '/images/treatments/Sub%20treatment%20images/8.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-9': [
    '/images/treatments/9.png',
    '/images/treatments/Sub%20treatment%20images/9.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-10': [
    '/images/treatments/10.png',
    '/images/treatments/Sub%20treatment%20images/10.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-11': [
    '/images/treatments/11.png',
    '/images/treatments/Sub%20treatment%20images/11.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-12': [
    '/images/treatments/12.png',
    '/images/treatments/Sub%20treatment%20images/12.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-13': [
    '/images/treatments/13.png',
    '/images/treatments/Sub%20treatment%20images/13.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-14': [
    '/images/treatments/14.png',
    '/images/treatments/Sub%20treatment%20images/14.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'lhr-15': [
    '/images/treatments/15.png',
    '/images/treatments/Sub%20treatment%20images/15.png',
    '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp'
  ],
  'sk-1': [
    '/images/treatments/16.png',
    '/images/treatments/Sub%20treatment%20images/16.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-2': [
    '/images/treatments/17.png',
    '/images/treatments/Sub%20treatment%20images/17.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-3': [
    '/images/treatments/18.png',
    '/images/treatments/Sub%20treatment%20images/18.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-4': [
    '/images/treatments/19.png',
    '/images/treatments/Sub%20treatment%20images/19.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-5': [
    '/images/treatments/20.png',
    '/images/treatments/Sub%20treatment%20images/20.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-6': [
    '/images/treatments/21.png',
    '/images/treatments/Sub%20treatment%20images/21.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-7': [
    '/images/treatments/22.png',
    '/images/treatments/Sub%20treatment%20images/22.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-8': [
    '/images/treatments/23.png',
    '/images/treatments/Sub%20treatment%20images/23.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-9': [
    '/images/treatments/24.png',
    '/images/treatments/Sub%20treatment%20images/24.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-10': [
    '/images/treatments/25.png',
    '/images/treatments/Sub%20treatment%20images/25.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-11': [
    '/images/treatments/26.png',
    '/images/treatments/Sub%20treatment%20images/26.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-12': [
    '/images/treatments/27.png',
    '/images/treatments/Sub%20treatment%20images/27.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-13': [
    '/images/treatments/28.png',
    '/images/treatments/Sub%20treatment%20images/28.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-14': [
    '/images/treatments/29.png',
    '/images/treatments/Sub%20treatment%20images/29.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-15': [
    '/images/treatments/30.png',
    '/images/treatments/Sub%20treatment%20images/30.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-16': [
    '/images/treatments/31.png',
    '/images/treatments/Sub%20treatment%20images/31.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-17': [
    '/images/treatments/32.png',
    '/images/treatments/Sub%20treatment%20images/32.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-18': [
    '/images/treatments/33.png',
    '/images/treatments/Sub%20treatment%20images/33.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-19': [
    '/images/treatments/34.png',
    '/images/treatments/Sub%20treatment%20images/34.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-20': [
    '/images/treatments/35.png',
    '/images/treatments/Sub%20treatment%20images/35.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-21': [
    '/images/treatments/36.png',
    '/images/treatments/Sub%20treatment%20images/36.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-22': [
    '/images/treatments/37.png',
    '/images/treatments/Sub%20treatment%20images/37.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-23': [
    '/images/treatments/38.png',
    '/images/treatments/Sub%20treatment%20images/38.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-24': [
    '/images/treatments/39.png',
    '/images/treatments/Sub%20treatment%20images/39.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'sk-25': [
    '/images/treatments/40.png',
    '/images/treatments/Sub%20treatment%20images/40.png',
    '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20%26%20LASER%20TREATMENTS.webp'
  ],
  'inj-1': [
    '/images/treatments/41.png',
    '/images/treatments/Sub%20treatment%20images/41.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-2': [
    '/images/treatments/42.png',
    '/images/treatments/Sub%20treatment%20images/42.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-3': [
    '/images/treatments/43.png',
    '/images/treatments/Sub%20treatment%20images/43.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-4': [
    '/images/treatments/44.png',
    '/images/treatments/Sub%20treatment%20images/44.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-5': [
    '/images/treatments/45.png',
    '/images/treatments/Sub%20treatment%20images/45.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-6': [
    '/images/treatments/46.png',
    '/images/treatments/Sub%20treatment%20images/46.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-7': [
    '/images/treatments/47.png',
    '/images/treatments/Sub%20treatment%20images/47.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-8': [
    '/images/treatments/48.png',
    '/images/treatments/Sub%20treatment%20images/48.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-9': [
    '/images/treatments/49.png',
    '/images/treatments/Sub%20treatment%20images/49.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-10': [
    '/images/treatments/50.png',
    '/images/treatments/Sub%20treatment%20images/50.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-11': [
    '/images/treatments/51.png',
    '/images/treatments/Sub%20treatment%20images/51.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-12': [
    '/images/treatments/52.png',
    '/images/treatments/Sub%20treatment%20images/52.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-13': [
    '/images/treatments/53.png',
    '/images/treatments/Sub%20treatment%20images/53.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-14': [
    '/images/treatments/54.png',
    '/images/treatments/Sub%20treatment%20images/54.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-15': [
    '/images/treatments/55.png',
    '/images/treatments/Sub%20treatment%20images/55.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-16': [
    '/images/treatments/56.png',
    '/images/treatments/Sub%20treatment%20images/56.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-17': [
    '/images/treatments/57.png',
    '/images/treatments/Sub%20treatment%20images/57.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'inj-18': [
    '/images/treatments/58.png',
    '/images/treatments/Sub%20treatment%20images/58.png',
    '/images/services/WEB%20IMAGES/ADVANCED%20SKIN%20REJUVENATION%20%26%20INJECTABLE%20AESTHETICS.webp'
  ],
  'pmu-1': [
    '/images/treatments/59.png',
    '/images/treatments/Sub%20treatment%20images/59.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-2': [
    '/images/treatments/60.png',
    '/images/treatments/Sub%20treatment%20images/60.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-3': [
    '/images/treatments/61.png',
    '/images/treatments/Sub%20treatment%20images/61.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-4': [
    '/images/treatments/62.png',
    '/images/treatments/Sub%20treatment%20images/62.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-5': [
    '/images/treatments/63.png',
    '/images/treatments/Sub%20treatment%20images/63.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-6': [
    '/images/treatments/64.png',
    '/images/treatments/Sub%20treatment%20images/64.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-7': [
    '/images/treatments/65.png',
    '/images/treatments/Sub%20treatment%20images/65.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-8': [
    '/images/treatments/66.png',
    '/images/treatments/Sub%20treatment%20images/66.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-9': [
    '/images/treatments/67.png',
    '/images/treatments/Sub%20treatment%20images/67.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'pmu-10': [
    '/images/treatments/68.png',
    '/images/treatments/Sub%20treatment%20images/68.png',
    '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp'
  ],
  'hr-1': [
    '/images/treatments/69.png',
    '/images/treatments/Sub%20treatment%20images/69.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-2': [
    '/images/treatments/70.png',
    '/images/treatments/Sub%20treatment%20images/70.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-3': [
    '/images/treatments/71.png',
    '/images/treatments/Sub%20treatment%20images/71.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-4': [
    '/images/treatments/72.png',
    '/images/treatments/Sub%20treatment%20images/72.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-5': [
    '/images/treatments/73.png',
    '/images/treatments/Sub%20treatment%20images/73.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-6': [
    '/images/treatments/74.png',
    '/images/treatments/Sub%20treatment%20images/74.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-7': [
    '/images/treatments/75.png',
    '/images/treatments/Sub%20treatment%20images/75.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-8': [
    '/images/treatments/76.png',
    '/images/treatments/Sub%20treatment%20images/76.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'hr-9': [
    '/images/treatments/77.png',
    '/images/treatments/Sub%20treatment%20images/77.png',
    '/images/services/WEB%20IMAGES/HAIR%20CARE%20%26%20HAIR%20RESTORATION.webp'
  ],
  'ht-1': [
    '/images/treatments/78.png',
    '/images/treatments/Sub%20treatment%20images/78.png',
    '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.webp'
  ],
  'ht-2': [
    '/images/treatments/79.png',
    '/images/treatments/Sub%20treatment%20images/79.png',
    '/images/services/WEB%20IMAGES/HAIR%20TRANSPLANT.webp'
  ],
  'sl-1': [
    '/images/treatments/80.png',
    '/images/treatments/Sub%20treatment%20images/80.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-2': [
    '/images/treatments/81.png',
    '/images/treatments/Sub%20treatment%20images/81.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-3': [
    '/images/treatments/82.png',
    '/images/treatments/Sub%20treatment%20images/82.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-4': [
    '/images/treatments/83.png',
    '/images/treatments/Sub%20treatment%20images/83.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-5': [
    '/images/treatments/84.png',
    '/images/treatments/Sub%20treatment%20images/84.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-6': [
    '/images/treatments/85.png',
    '/images/treatments/Sub%20treatment%20images/85.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-7': [
    '/images/treatments/86.png',
    '/images/treatments/Sub%20treatment%20images/86.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-8': [
    '/images/treatments/87.png',
    '/images/treatments/Sub%20treatment%20images/87.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-9': [
    '/images/treatments/88.png',
    '/images/treatments/Sub%20treatment%20images/88.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-10': [
    '/images/treatments/89.png',
    '/images/treatments/Sub%20treatment%20images/89.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'sl-11': [
    '/images/treatments/90.png',
    '/images/treatments/Sub%20treatment%20images/90.png',
    '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20%26%20BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'pkg-1': [
    '/images/treatments/91.png',
    '/images/treatments/Sub%20treatment%20images/91.png',
    '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'pkg-2': [
    '/images/treatments/92.png',
    '/images/treatments/Sub%20treatment%20images/92.png',
    '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'pkg-3': [
    '/images/treatments/93.png',
    '/images/treatments/Sub%20treatment%20images/93.png',
    '/images/services/WEB%20IMAGES/BODY%20CONTOURING%20PACKAGES.webp'
  ],
  'wel-1': [
    '/images/treatments/94.png',
    '/images/treatments/Sub%20treatment%20images/94.png',
    '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20%26%20WELLNESS.webp'
  ],
  'wel-2': [
    '/images/treatments/95.png',
    '/images/treatments/Sub%20treatment%20images/95.png',
    '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20%26%20WELLNESS.webp'
  ],
  'wel-3': [
    '/images/treatments/96.png',
    '/images/treatments/Sub%20treatment%20images/96.png',
    '/images/services/WEB%20IMAGES/LIFESTYLE%20MODIFICATION%20%26%20WELLNESS.webp'
  ],
  'surg-1': [
    '/images/treatments/97.png',
    '/images/treatments/Sub%20treatment%20images/97.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-2': [
    '/images/treatments/98.png',
    '/images/treatments/Sub%20treatment%20images/98.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-3': [
    '/images/treatments/99.webp',
    '/images/treatments/Sub%20treatment%20images/99.webp',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-4': [
    '/images/treatments/100.png',
    '/images/treatments/Sub%20treatment%20images/100.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-5': [
    '/images/treatments/101.png',
    '/images/treatments/Sub%20treatment%20images/101.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-6': [
    '/images/treatments/102.png',
    '/images/treatments/Sub%20treatment%20images/102.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-7': [
    '/images/treatments/103.jpg',
    '/images/treatments/Sub%20treatment%20images/103.jpg',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-8': [
    '/images/treatments/104.png',
    '/images/treatments/Sub%20treatment%20images/104.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-9': [
    '/images/treatments/105.png',
    '/images/treatments/Sub%20treatment%20images/105.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-10': [
    '/images/treatments/106.png',
    '/images/treatments/Sub%20treatment%20images/106.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-11': [
    '/images/treatments/107.png',
    '/images/treatments/Sub%20treatment%20images/107.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-12': [
    '/images/treatments/108.png',
    '/images/treatments/Sub%20treatment%20images/108.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-13': [
    '/images/treatments/109.png',
    '/images/treatments/Sub%20treatment%20images/109.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-14': [
    '/images/treatments/110.png',
    '/images/treatments/Sub%20treatment%20images/110.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-15': [
    '/images/treatments/111.jpg',
    '/images/treatments/Sub%20treatment%20images/111.jpg',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-16': [
    '/images/treatments/112.png',
    '/images/treatments/Sub%20treatment%20images/112.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-17': [
    '/images/treatments/113.png',
    '/images/treatments/Sub%20treatment%20images/113.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'surg-18': [
    '/images/treatments/114.png',
    '/images/treatments/Sub%20treatment%20images/114.png',
    '/images/services/WEB%20IMAGES/COSMETIC%20%26%20PLASTIC%20SURGERY.webp'
  ],
  'int-1': [
    '/images/treatments/115.png',
    '/images/treatments/Sub%20treatment%20images/115.png',
    '/images/services/WEB%20IMAGES/INTIMATE%20%26%20GENITAL%20COSMETIC%20PROCEDURES.webp'
  ],
  'int-2': [
    '/images/treatments/116.png',
    '/images/treatments/Sub%20treatment%20images/116.png',
    '/images/services/WEB%20IMAGES/INTIMATE%20%26%20GENITAL%20COSMETIC%20PROCEDURES.webp'
  ],
  'int-3': [
    '/images/treatments/117.png',
    '/images/treatments/Sub%20treatment%20images/117.png',
    '/images/services/WEB%20IMAGES/INTIMATE%20%26%20GENITAL%20COSMETIC%20PROCEDURES.webp'
  ],
  'sp-1': [
    '/images/treatments/118.png',
    '/images/treatments/Sub%20treatment%20images/118.png',
    '/images/services/WEB%20IMAGES/SPIRITUAL%20COUNSELLING%20%26%20WELLNESS.webp'
  ],
  'iv-1': [
    '/images/treatments/119.png',
    '/images/treatments/Sub%20treatment%20images/119.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-2': [
    '/images/treatments/120.png',
    '/images/treatments/Sub%20treatment%20images/120.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-3': [
    '/images/treatments/121.png',
    '/images/treatments/Sub%20treatment%20images/121.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-4': [
    '/images/treatments/122.png',
    '/images/treatments/Sub%20treatment%20images/122.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-5': [
    '/images/treatments/123.png',
    '/images/treatments/Sub%20treatment%20images/123.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-6': [
    '/images/treatments/124.png',
    '/images/treatments/Sub%20treatment%20images/124.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-7': [
    '/images/treatments/125.png',
    '/images/treatments/Sub%20treatment%20images/125.png',
    '/images/services/WEB%20IMAGES/IV%20Drips.webp'
  ],
  'iv-8': [
    '/images/treatments/126.png',
    '/images/treatments/Sub%20treatment%20images/126.png',
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
