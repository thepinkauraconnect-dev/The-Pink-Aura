export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** <title> (rendered with the "| The Pink Aura" template) */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  /** Pre-optimised .webp in /public */
  cover: string;
  coverAlt: string;
  category: string;
  /** ISO date */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  /** Related /services/[slug] page for internal linking */
  serviceSlug: string;
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFAQ[];
}
