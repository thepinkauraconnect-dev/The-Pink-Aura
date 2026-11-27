import { Metadata } from 'next';
import { CLINIC_INFO } from '@/data/services';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and data protection guidelines for consultation inquiries at The Pink Aura.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-aura-200 pb-6 space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Privacy Policy</h1>
        <p className="text-xs text-charcoal-muted font-light">
          Last Updated: August 2026 • The Pink Aura Aesthetic & Wellness Centre
        </p>
      </div>

      <div className="prose prose-sm max-w-none text-charcoal-muted space-y-6 font-light leading-relaxed">
        <p>
          At <strong>The Pink Aura — Aesthetic & Wellness Centre</strong>, protecting your personal privacy is paramount. This Privacy Policy details how we handle information collected during consultation registrations on our website.
        </p>

        <h3 className="font-serif text-xl font-bold text-charcoal">1. Information We Collect</h3>
        <p>
          When you register for a personalized consultation on our website, we collect personal contact information provided voluntarily by you, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Selected Service Category of Interest</li>
          <li>Voluntary Consultation Requirements / Notes</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-charcoal">2. How We Use Your Information</h3>
        <p>
          Your information is used strictly to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Review and process your consultation request.</li>
          <li>Contact you via email or phone regarding your inquiry and appointment options.</li>
          <li>Provide personalized aesthetic and wellness care recommendations.</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-charcoal">3. Confidentiality & Security</h3>
        <p>
          We do not sell, rent, or distribute your personal contact information to third parties. All lead records stored in our server infrastructure are secured with strict access controls.
        </p>

        <h3 className="font-serif text-xl font-bold text-charcoal">4. Contact Us</h3>
        <p>
          If you have questions regarding your data or wish to update your contact preferences, please reach out to us at{' '}
          <a href={`mailto:${CLINIC_INFO.email}`} className="text-aura-600 font-medium hover:underline">
            {CLINIC_INFO.email}
          </a>.
        </p>
      </div>
    </div>
  );
}
