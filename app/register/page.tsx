import { Suspense } from 'react';
import ConsultationForm from '@/components/registration/ConsultationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Begin your journey with The Pink Aura. Register for a personalized consultation in advanced skin aesthetics, hair restoration, body contouring, or spiritual wellbeing.',
  alternates: { canonical: '/register' },
};

export default function RegisterPage() {
  return (
    <div className="py-6 sm:py-10 px-3 sm:px-4 relative overflow-hidden flex justify-center">
      {/* Background Subtle Gradient & Organic Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-aura-200/40 dark:bg-[#9E1B4E]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-champagne-light/30 dark:bg-[#700B34]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <Suspense fallback={
          <div className="w-full max-w-2xl mx-auto clay-card bg-white/95 rounded-4xl p-12 text-center text-charcoal-muted font-light">
            <div className="w-8 h-8 border-2 border-aura-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p>Loading Consultation Registration Form...</p>
          </div>
        }>
          <ConsultationForm />
        </Suspense>
      </div>
    </div>
  );
}
