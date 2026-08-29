import Link from 'next/link';
import { CheckCircle2, ArrowRight, Heart, Flower2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You For Trusting The Pink Aura',
  description: 'Thank you for trusting The Pink Aura Aesthetic & Wellness Centre. We have received your consultation inquiry.',
};

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden">
      {/* Background Soft Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-aura-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto clay-card bg-white/95 backdrop-blur-2xl rounded-4xl p-8 sm:p-12 border border-white shadow-clay-lg relative z-10 space-y-6">
        {/* Animated Check Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-aura-500 to-aura-400 text-white flex items-center justify-center shadow-aura-glow">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-wider">
            <Flower2 className="w-3.5 h-3.5 text-aura-600" />
            <span>Consultation Request Confirmed</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Thank You for Trusting The Pink Aura
          </h1>
        </div>

        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
          We have received your consultation inquiry. Our expert care team will review your requirements and reach out to you shortly.
        </p>

        <div className="p-4 rounded-2xl bg-aura-50/80 border border-aura-200/60 text-xs text-aura-800 space-y-1">
          <p className="font-bold flex items-center justify-center gap-1">
            <Heart className="w-3.5 h-3.5 text-aura-600 fill-aura-600" />
            <span>Thank you for trusting The Pink Aura</span>
          </p>
          <p className="text-charcoal-muted font-light">A confirmation notice has been sent to your email.</p>
        </div>

        <div className="pt-4">
          <Link
            href="/home"
            className="clay-btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest group"
          >
            <span>Enter The Pink Aura Homepage</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
