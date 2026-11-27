import { Metadata } from 'next';
import { CLINIC_INFO } from '@/data/services';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service and Website Use terms for The Pink Aura Aesthetic & Wellness Centre.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-aura-200 pb-6 space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Terms of Service</h1>
        <p className="text-xs text-charcoal-muted font-light">
          Last Updated: August 2026 • The Pink Aura Aesthetic & Wellness Centre
        </p>
      </div>

      <div className="prose prose-sm max-w-none text-charcoal-muted space-y-6 font-light leading-relaxed">
        <p>
          Welcome to the official website of <strong>The Pink Aura — Aesthetic & Wellness Centre</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms.
        </p>

        <h3 className="font-serif text-xl font-bold text-charcoal">1. Informational Purpose Only</h3>
        <p>
          The content, service descriptions, and wellness information provided on this website are for general marketing and educational discovery purposes only. They do not constitute formal medical diagnoses or guarantees of specific outcomes.
        </p>

        <h3 className="font-serif text-xl font-bold text-charcoal">2. Personalized Consultation Required</h3>
        <p>
          All clinical aesthetic procedures, injectables, hair transplants, and body contouring treatments require a formal in-person or virtual consultation with our qualified medical practitioners to evaluate suitability and health history prior to treatment.
        </p>

        <h3 className="font-serif text-xl font-bold text-charcoal">3. Intellectual Property</h3>
        <p>
          All brand elements, logos, custom typography, images, and text content contained on this site are the property of The Pink Aura and protected by copyright laws.
        </p>

        <h3 className="font-serif text-xl font-bold text-charcoal">4. Contact</h3>
        <p>
          For any inquiries regarding our terms, please email us at{' '}
          <a href={`mailto:${CLINIC_INFO.email}`} className="text-aura-600 font-medium hover:underline">
            {CLINIC_INFO.email}
          </a>.
        </p>
      </div>
    </div>
  );
}
