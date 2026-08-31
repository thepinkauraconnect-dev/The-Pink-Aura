'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Feather, HeartHandshake, Compass } from 'lucide-react';
import ConsultationForm from '@/components/registration/ConsultationForm';

export default function RootEntryPage() {
  return (
    <div className="min-h-[88vh] py-8 sm:py-14 px-4 relative overflow-hidden flex flex-col justify-center">
      {/* Background Soft Aura Orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-aura-200/40 dark:bg-[#9E1B4E]/25 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-champagne-light/35 dark:bg-[#700B34]/25 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Brand Welcome & Positioning */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          {/* Logo & Clay Emblem */}
          <div className="inline-flex items-center gap-3 p-2 pr-5 rounded-full clay-badge">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 shadow-sm">
              <Image
                src="/images/logo/Logo%20the%20pink%20aura.png"
                alt="The Pink Aura Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="text-xs font-extrabold text-aura-800 uppercase tracking-widest">
              The Pink Aura
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-charcoal tracking-tight leading-[1.1]">
            Begin Your Journey with <span className="aura-gradient-text italic font-normal block">The Pink Aura</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            Discover a personalized approach to beauty, advanced aesthetics, hair restoration, body sculpting, and holistic wellbeing.
          </p>

          <div className="p-5 rounded-3xl clay-card clay-card-contour space-y-2">
            <p className="text-xs italic font-serif text-aura-700 font-bold">
              "Enhance Your Beauty • Elevate Your Aura"
            </p>
            <p className="text-[11px] text-charcoal-muted font-light leading-relaxed">
              Register your consultation inquiry to unlock personalized care and explore our complete service catalogue.
            </p>
          </div>

          {/* Quick Clay Pillars */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-xs text-charcoal-muted font-medium">
              <div className="w-7 h-7 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Supervised by certified aesthetic doctors & wellness experts</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-charcoal-muted font-medium">
              <div className="w-7 h-7 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                <Feather className="w-4 h-4" />
              </div>
              <span>Tailored non-surgical aesthetic & body contouring programs</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-charcoal-muted font-medium">
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
        </motion.div>

        {/* Right Side: Claymorphic Consultation Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <ConsultationForm />
        </motion.div>
      </div>
    </div>
  );
}
