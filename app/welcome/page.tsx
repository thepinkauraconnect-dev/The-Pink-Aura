import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Feather, Flower2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Welcome',
  description:
    'Begin your journey with The Pink Aura — personalised skin aesthetics, hair restoration, body contouring and spiritual wellbeing in JP Nagar, Bangalore.',
  // Near-duplicate of the landing page — consolidate ranking signals on "/"
  alternates: { canonical: '/' },
};

export default function WelcomePage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center relative overflow-hidden px-4 py-12">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-aura-200/40 via-aura-300/20 to-champagne/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Animated Brand Emblem */}
        <div
          className="animate-fade-up inline-flex items-center justify-center p-4 rounded-full bg-white/90 clay-badge grotoscope-hover mb-4 shadow-clay-lg"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-white p-1.5 shadow-md">
            <Image
              src="/images/logo/Logo%20the%20pink%20aura.webp"
              alt="The Pink Aura Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </div>

        {/* Subtitle Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest"
          style={{ animationDelay: '0.2s' }}
        >
          <Flower2 className="w-3.5 h-3.5 text-aura-600" />
          <span>The Pink Aura Aesthetic & Wellness</span>
        </div>

        {/* Main Headline */}
        <h1
          className="animate-fade-up font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal tracking-tight leading-[1.15]"
          style={{ animationDelay: '0.3s' }}
        >
          Begin Your Journey with <span className="aura-gradient-text font-normal italic">The Pink Aura</span>
        </h1>

        {/* Supporting Copy */}
        <p
          className="animate-fade-up text-base sm:text-xl text-charcoal-muted max-w-2xl mx-auto font-light leading-relaxed"
          style={{ animationDelay: '0.4s' }}
        >
          Discover a personalized approach to advanced skin aesthetics, hair restoration, body contouring, and spiritual wellbeing.
        </p>

        {/* Action CTAs */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          style={{ animationDelay: '0.5s' }}
        >
          <Link
            href="/register"
            className="w-full sm:w-auto clay-btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-extrabold uppercase tracking-widest group"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/home"
            className="w-full sm:w-auto clay-btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-charcoal"
          >
            <Compass className="w-4 h-4 text-aura-600" />
            <span>Explore The Pink Aura</span>
          </Link>
        </div>

        {/* Brand Value Pillars */}
        <div
          className="animate-fade-up grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="p-4 rounded-3xl clay-card text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-aura-600 mx-auto" />
            <h4 className="font-serif text-base font-bold text-charcoal">Clinical Excellence</h4>
            <p className="text-xs text-charcoal-muted font-light">Supervised by qualified aesthetic physicians and wellness experts.</p>
          </div>

          <div className="p-4 rounded-3xl clay-card text-center space-y-2">
            <Feather className="w-6 h-6 text-aura-600 mx-auto" />
            <h4 className="font-serif text-base font-bold text-charcoal">Personalized Care</h4>
            <p className="text-xs text-charcoal-muted font-light">Custom consultation plans tailored to your unique biology.</p>
          </div>

          <div className="p-4 rounded-3xl clay-card text-center space-y-2">
            <HeartHandshake className="w-6 h-6 text-aura-600 mx-auto" />
            <h4 className="font-serif text-base font-bold text-charcoal">Spiritual Wellbeing</h4>
            <p className="text-xs text-charcoal-muted font-light">Harmonizing external beauty with internal vitality and peace.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
