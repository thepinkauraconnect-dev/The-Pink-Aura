import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Heart, ShieldCheck, Flower2, ArrowRight } from 'lucide-react';
import { FOUNDERS } from '@/data/services';

export const metadata: Metadata = {
  title: 'About Us — The Pink Aura Aesthetic & Wellness',
  description: 'Learn about The Pink Aura, Co-Founder Dr. Yashaswini HV, Founder Nagendra Karanik, and our holistic philosophy of aesthetic & wellness care.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="relative py-16 px-4 text-center overflow-hidden bg-gradient-to-b from-aura-100/60 to-transparent">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Flower2 className="w-3.5 h-3.5 text-aura-600" />
            <span>Our Origin & Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-charcoal tracking-tight">
            About <span className="aura-gradient-text italic font-normal">The Pink Aura</span>
          </h1>

          <p className="text-base sm:text-xl text-charcoal-muted font-light max-w-2xl mx-auto leading-relaxed">
            A sanctuary created to harmonize advanced clinical aesthetics, physical transformation, and inner spiritual peace.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card rounded-4xl p-8 sm:p-14 border border-white shadow-clay-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              Enhance Your Beauty. Elevate Your Aura.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
              Founded in Bangalore, <strong>The Pink Aura — Aesthetic & Wellness Centre</strong> was established to redefine how clients experience beauty and health. Rather than viewing aesthetic care as isolated procedures, we view it as a transformational journey.
            </p>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
              By combining state-of-the-art dermatological equipment, advanced laser technology, and evidence-based clinical protocols with holistic wellness and spiritual counselling, we empower every individual to look radiant and feel grounded.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                alt="The Pink Aura Atmosphere"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block">
            Founding Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            The Visionaries Behind The Pink Aura
          </h2>
          <p className="text-sm text-charcoal-muted font-light">
            Bringing together medical expertise, Ayurvedic wisdom, and spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="clay-card rounded-4xl p-8 sm:p-10 border border-white shadow-clay-lg space-y-6 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-36 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{founder.name}</h3>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-aura-600">
                    {founder.role}
                  </p>
                  <p className="text-xs text-aura-800 font-medium italic bg-aura-50 border border-aura-200/60 rounded-xl px-3 py-2">
                    {founder.qualifications}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light border-t border-aura-100 pt-4">
                {founder.bio}
              </p>

              <div className="pt-2 border-t border-aura-100 flex items-center justify-between text-xs">
                <span className="text-charcoal-muted font-light">Direct Line:</span>
                <a
                  href={`tel:${founder.rawPhone || founder.phone?.replace(/[^0-9+]/g, '')}`}
                  className="font-mono font-bold text-aura-600 hover:underline"
                >
                  {founder.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card-dark text-white rounded-5xl p-8 sm:p-14 shadow-2xl space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold">Our Core Commitments</h2>
            <p className="text-xs text-aura-200/80 font-light">
              Principles guiding every consultation, procedure, and interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <ShieldCheck className="w-8 h-8 text-aura-300 mx-auto" />
              <h4 className="font-serif text-lg font-bold">Clinical Integrity</h4>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Honest, transparent guidance without unnecessary procedures or exaggerated medical promises.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <Heart className="w-8 h-8 text-aura-300 mx-auto" />
              <h4 className="font-serif text-lg font-bold">Empathetic Care</h4>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Listening closely to your personal story and aesthetic goals in a supportive, private space.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <Flower2 className="w-8 h-8 text-champagne mx-auto" />
              <h4 className="font-serif text-lg font-bold">Holistic Synergy</h4>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Combining external skin & body refinement with internal nutritional and energy balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="clay-card rounded-4xl p-10 border border-white space-y-4">
          <h3 className="font-serif text-3xl font-bold text-charcoal">
            Experience The Pink Aura In Person
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto font-light">
            Book a one-on-one consultation with our clinical specialists and begin your personal journey.
          </p>
          <div className="pt-2">
            <Link
              href="/register"
              className="clay-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest"
            >
              <span>Register for Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
