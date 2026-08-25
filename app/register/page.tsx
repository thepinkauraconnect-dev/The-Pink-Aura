import ConsultationForm from '@/components/registration/ConsultationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultation Registration — The Pink Aura',
  description: 'Begin your Pink Aura journey. Register for a personalized consultation in aesthetic care, skin rejuvenation, hair restoration, or holistic wellness.',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Background Subtle Gradient & Organic Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-aura-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-champagne-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <ConsultationForm />
      </div>
    </div>
  );
}
