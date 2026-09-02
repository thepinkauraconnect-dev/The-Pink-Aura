export type ServiceGroup = 'BEAUTY' | 'HAIR' | 'BODY' | 'WELLNESS' | 'SURGICAL';

export interface TreatmentItem {
  id: string;
  name: string;
  description: string;
  benefits?: string[];
  tag?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  group: ServiceGroup;
  heroImage: string;
  cardImage: string;
  treatments: TreatmentItem[];
  faqs: ServiceFAQ[];
  highlights?: string[];
}

export interface SurgeonHighlight {
  title: string;
  desc: string;
}

export interface Surgeon {
  name: string;
  role: string;
  qualifications: string;
  intro: string;
  whyChooseTitle: string;
  highlights: SurgeonHighlight[];
  bio: string;
  image: string;
}


