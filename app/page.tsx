import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Feather, HeartHandshake, Compass } from 'lucide-react';
import ConsultationForm from '@/components/registration/ConsultationForm';

export const metadata: Metadata = {
  title: {
    absolute: 'The Pink Aura — Aesthetic, Skin, Hair & Wellness Clinic in JP Nagar, Bangalore',
  },
  description:
    'Book a consultation at The Pink Aura, a doctor-led aesthetic & wellness clinic in JP Nagar, Bangalore for laser hair reduction, skin rejuvenation, hair restoration, body contouring and IV therapy.',
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

export default function RootEntryPage() {
  return (
    <div className="min-h-[88vh] py-8 sm:py-14 px-4 relative overflow-hidden flex flex-col justify-center">
      {/* Background Soft Aura Orbs */}
      <div
        aria-hidden="true"
        className="animate-float absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-aura-200/40 dark:bg-[#9E1B4E]/25 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-champagne-light/35 dark:bg-[#700B34]/25 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Brand Welcome & Positioning */}
        <div
          className="animate-fade-up lg:col-span-5 space-y-6 text-center lg:text-left"
        >
          {/* Hero Logo with Rectangular Container & Grotoscope Effect */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm sm:max-w-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/95 via-[#FFF5F8]/90 to-[#FCE4EC]/95 dark:from-[#2E0817]/95 dark:to-[#1F040F]/95 shadow-md dark:shadow-[0_0_35px_2px_rgba(158,27,78,0.55)] grotoscope-hover border border-pink-300/60 dark:border-[#9E1B4E]/60 backdrop-blur-md">
              <div className="relative w-full h-32 sm:h-40 lg:h-44">
                <Image
                  src="/landing_page_hero_logo.webp"
                  alt="The Pink Aura Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#2D0617] dark:text-white tracking-tight leading-[1.1]">
            Begin Your Journey with <span className="aura-gradient-text italic font-bold block">The Pink Aura</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5A0E2E] dark:text-pink-100/90 font-normal leading-relaxed">
            Discover a personalized approach to advanced skin aesthetics, hair restoration, body contouring, and spiritual wellbeing.
          </p>

          <div className="p-5 rounded-3xl clay-card clay-card-contour bg-white/95 dark:bg-[#2C0618]/95 border border-pink-200/80 dark:border-pink-900/50 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm italic font-serif text-[#4A0824] dark:text-pink-200 font-bold tracking-wide">
              "Enhance Your Beauty • Elevate Your Aura"
            </p>
            <p className="text-xs text-[#5A0E2E] dark:text-pink-100 font-medium leading-relaxed">
              Register your consultation inquiry to unlock personalized care and explore our complete service catalogue.
            </p>
          </div>

          {/* Quick Clay Pillars */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-xs text-[#4A0A26] dark:text-pink-100 font-medium">
              <div className="w-7 h-7 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Supervised by certified aesthetic physicians & wellness experts</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#4A0A26] dark:text-pink-100 font-medium">
              <div className="w-7 h-7 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                <Feather className="w-4 h-4" />
              </div>
              <span>Tailored non-surgical aesthetic & body contouring programs</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#4A0A26] dark:text-pink-100 font-medium">
              <div className="w-7 h-7 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span>Private luxury consultation suites in JP Nagar, Bangalore</span>
            </div>
          </div>

          {/* Secondary Direct Explorer Link */}
          <div className="pt-3">
            <Link
              href="/home"
              className="clay-btn-secondary inline-flex items-center gap-2.5 px-6 py-3 text-xs font-extrabold uppercase tracking-wider group"
            >
              <Compass className="w-4 h-4 text-aura-600" />
              <span>Explore The Pink Aura Homepage Directly</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side: Claymorphic Consultation Form */}
        <div
          className="animate-fade-up lg:col-span-7"
          style={{ animationDelay: '0.2s' }}
        >
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
