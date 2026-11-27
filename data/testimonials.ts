import { CLINIC_INFO } from './services';

export interface InstagramTestimonial {
  id: string;
  /** Treatment shown on the card */
  treatment: string;
  /** Short neutral caption (do not invent patient quotes) */
  caption: string;
  /** Link to the Instagram reel/post, e.g. https://www.instagram.com/reel/XXXXXXXX/ */
  instagramUrl: string;
  /** Optional cover image in /public (pre-optimised .webp). Falls back to the category image. */
  thumbnail?: string;
  /** Related service page slug */
  serviceSlug?: string;
}

/**
 * Client testimonial reels.
 * TODO: replace each `instagramUrl` with the real reel/post URL (and optionally a thumbnail)
 * once the clinic shares the links. Until then the cards open the clinic's Instagram profile.
 */
const PLACEHOLDER = CLINIC_INFO.instagram;

export const INSTAGRAM_TESTIMONIALS: InstagramTestimonial[] = [
  {
    id: 'ig-1',
    treatment: 'Laser Hair Reduction',
    caption: 'A client shares her laser hair reduction journey at The Pink Aura.',
    instagramUrl: PLACEHOLDER, // TODO: replace with reel URL
    thumbnail: '/images/services/WEB%20IMAGES/Laser%20Hair%20Reduction.webp',
    serviceSlug: 'laser-hair-reduction',
  },
  {
    id: 'ig-2',
    treatment: 'Hydra Medi Facial',
    caption: 'Glass-skin glow after a customised medi-facial session.',
    instagramUrl: PLACEHOLDER, // TODO: replace with reel URL
    thumbnail: '/images/services/WEB%20IMAGES/SKIN%20CARE,%20FACIALS%20&%20LASER%20TREATMENTS.webp',
    serviceSlug: 'skin-care',
  },
  {
    id: 'ig-3',
    treatment: 'Hair Restoration (GFC)',
    caption: 'Hair-fall control and density results with growth factor therapy.',
    instagramUrl: PLACEHOLDER, // TODO: replace with reel URL
    thumbnail: '/images/services/WEB%20IMAGES/HAIR%20CARE%20&%20HAIR%20RESTORATION.webp',
    serviceSlug: 'hair-care',
  },
  {
    id: 'ig-4',
    treatment: 'Permanent Makeup',
    caption: 'Natural-looking brows and lip blush by our PMU artists.',
    instagramUrl: PLACEHOLDER, // TODO: replace with reel URL
    thumbnail: '/images/services/WEB%20IMAGES/PERMANENT%20MAKEUP%20(PMU).webp',
    serviceSlug: 'permanent-makeup',
  },
  {
    id: 'ig-5',
    treatment: 'Body Contouring',
    caption: 'Inch-loss and contouring progress from our slimming programme.',
    instagramUrl: PLACEHOLDER, // TODO: replace with reel URL
    thumbnail: '/images/services/WEB%20IMAGES/SLIMMING,%20WEIGHT%20MANAGEMENT%20&%20BODY%20CONTOURING%20PACKAGES.webp',
    serviceSlug: 'slimming',
  },
  {
    id: 'ig-6',
    treatment: 'IV Drip Therapy',
    caption: 'Inside a relaxing glow & wellness IV drip session.',
    instagramUrl: PLACEHOLDER, // TODO: replace with reel URL
    thumbnail: '/images/services/WEB%20IMAGES/IV%20Drips.webp',
    serviceSlug: 'iv-drip-therapy',
  },
];
