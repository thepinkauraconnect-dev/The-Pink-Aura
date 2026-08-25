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
