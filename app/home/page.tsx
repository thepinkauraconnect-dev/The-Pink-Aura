'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  HeartPulse,
  MapPin,
  Clock,
  Mail,
  ChevronRight,
  Flower2,
  Lock
} from 'lucide-react';
import { SERVICE_CATEGORIES, FOUNDERS, CLINIC_INFO } from '@/data/services';

export default function MainHomePage() {
  return (
    <div className="space-y-24 pb-16">
      {/* 1. CINEMATIC CLAY HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 overflow-hidden">
        {/* Ambient Light Orbs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-aura-200/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-champagne-light/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
              <Flower2 className="w-3.5 h-3.5 text-aura-600" />
              <span>Aesthetic & Wellness Centre</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal tracking-tight leading-[1.1]">
              Enhance Your Beauty.{' '}
              <span className="aura-gradient-text font-normal italic block">Elevate Your Aura.</span>
            </h1>

            <p className="text-base sm:text-xl text-charcoal-muted max-w-xl font-light leading-relaxed">
              A personalized sanctuary in Bangalore for advanced aesthetics, skin rejuvenation, laser care, hair restoration, body sculpting, and spiritual wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/register"
                className="clay-btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-extrabold uppercase tracking-widest group"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest"
              >
                <span>Explore 12 Services</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-aura-200/60 grid grid-cols-3 gap-4">
              <div className="clay-card p-3 text-center">
                <span className="font-serif text-2xl font-bold text-aura-600 block">12+</span>
                <span className="text-[11px] text-charcoal-muted font-light">Service Categories</span>
              </div>
              <div className="clay-card p-3 text-center">
                <span className="font-serif text-2xl font-bold text-aura-600 block">100%</span>
                <span className="text-[11px] text-charcoal-muted font-light">Personalized Care</span>
              </div>
              <div className="clay-card p-3 text-center">
                <span className="font-serif text-2xl font-bold text-aura-600 block">JP Nagar</span>
                <span className="text-[11px] text-charcoal-muted font-light">Bangalore Location</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-4xl overflow-hidden clay-card p-3 shadow-clay-lg border border-white">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
                  alt="Pink Aura Aesthetic Care"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-3xl clay-card bg-white/95 text-charcoal">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                      <Flower2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold">Transformative Elegance</h4>
                      <p className="text-xs text-charcoal-muted font-light">Custom aesthetic & wellness programs designed for your unique grace.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card rounded-4xl p-8 sm:p-14 border border-white shadow-clay-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block">
                Brand Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                Where Science Meets Soul & Aesthetic Grace
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-charcoal-muted font-light leading-relaxed text-sm sm:text-base">
              <p>
                At <strong className="font-medium text-charcoal">The Pink Aura</strong>, we believe true beauty is an integrated state of being. It extends beyond surface skin care to encompass emotional vitality, structural body balance, and inner peace.
              </p>
              <p>
                Whether you seek precision laser hair reduction, non-surgical facial rejuvenation, permanent makeup, stem-cell hair restoration, or spiritual guidance, every protocol is delivered with dermatological precision and warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE YOUR JOURNEY — 12 SERVICE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest mb-2">
              <Flower2 className="w-3.5 h-3.5 text-aura-600" />
              <span>Explore Your Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Curated Aesthetic & Wellness Offerings
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aura-600 hover:text-aura-800 group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 12 Clay Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group clay-card clay-card-hover rounded-4xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-4xl">
                  <Image
                    src={category.cardImage}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-serif text-xs font-bold text-white bg-aura-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {category.number}
                  </span>
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase font-bold tracking-wider text-champagne-light bg-aura-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                    {category.group}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-aura-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 border-t border-aura-100/60 mt-4 flex items-center justify-between gap-2">
                <Link
                  href={`/register?category=${encodeURIComponent(category.title)}`}
                  className="text-xs font-bold text-aura-600 hover:text-aura-700 clay-badge px-3 py-1.5 hover:scale-105 transition-all"
                >
                  Enquire Now
                </Link>
                <Link
                  href={`/services/${category.slug}`}
                  className="clay-btn-secondary inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY PINK AURA — CLAY DARK CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card-dark text-white rounded-5xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-300">
              The Pink Aura Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Discerning Clients Choose Pink Aura
            </h2>
            <p className="text-sm text-aura-200/80 font-light leading-relaxed">
              Every detail of our center is thoughtfully engineered to deliver a calming, discreet, and transformational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20">
              <ShieldCheck className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">Doctor-Led Care</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Supervised by experienced medical physicians ensuring high safety standards and evidence-based efficacy.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20">
              <Award className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">State-of-the-Art Tech</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                FDA-approved triple wavelength lasers, US-patented growth factors, and advanced Pico technology.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20">
              <HeartPulse className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">Holistic Harmony</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Unifying physical beauty enhancements with inner spiritual guidance and dietary wellness.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20">
              <Lock className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">Luxury Privacy</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Private consultation suites designed for maximum discretion, comfort, and personalized attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE FOUNDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Flower2 className="w-3.5 h-3.5 text-aura-600" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Meet the Experts Behind Pink Aura
          </h2>
          <p className="text-sm text-charcoal-muted font-light">
            Guiding your transformation with clinical expertise, aesthetic passion, and spiritual vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder, i) => (
            <div key={i} className="clay-card rounded-4xl p-8 border border-white flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{founder.name}</h3>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-aura-600 block mt-1">
                    {founder.role}
                  </span>
                  <span className="text-[11px] text-charcoal-muted italic block mt-0.5 font-light">
                    {founder.qualifications}
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LOCATION & CONTACT SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card rounded-4xl p-8 sm:p-12 border border-white shadow-clay-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block mb-2">
                Visit Our Sanctuary
              </span>
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                Located in JP Nagar, Bangalore
              </h2>
            </div>

            <div className="space-y-4 text-sm text-charcoal-muted font-light">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>{CLINIC_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-aura-600 font-medium hover:underline">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="clay-btn-secondary inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                <span>View Complete Contact Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden relative clay-badge p-6 flex flex-col items-center justify-center text-center space-y-3">
              <MapPin className="w-10 h-10 text-aura-600 animate-bounce" />
              <h4 className="font-serif text-xl font-bold text-charcoal">JP Nagar 4th Phase, Bangalore</h4>
              <p className="text-xs text-charcoal-muted max-w-sm font-light">
                Near Delmia Circle, Dollars Colony. Dedicated customer valet and elevator access available.
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-aura-600 hover:underline pt-2"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card-dark text-white rounded-5xl p-8 sm:p-12 text-center shadow-2xl space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Discover Your Pink Aura?
            </h2>
            <p className="text-sm sm:text-base font-light text-white/90">
              Schedule your personalized consultation today with our experts and begin your bespoke beauty & wellness transformation.
            </p>
            <div className="pt-4">
              <Link
                href="/register"
                className="clay-btn-primary inline-flex items-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
