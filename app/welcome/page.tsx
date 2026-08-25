'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Feather, Flower2 } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center relative overflow-hidden px-4 py-12">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-aura-200/40 via-aura-300/20 to-champagne/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Animated Brand Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center justify-center p-3 rounded-full bg-white/80 clay-badge mb-4"
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/logo/Logo-01.png"
              alt="The Pink Aura Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </motion.div>

        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest"
        >
          <Flower2 className="w-3.5 h-3.5 text-aura-600" />
          <span>Aesthetic & Wellness Centre</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal tracking-tight leading-[1.15]"
        >
          Begin Your <span className="aura-gradient-text font-normal italic">Pink Aura</span> Journey
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-charcoal-muted max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover a personalized approach to beauty, advanced aesthetics, body sculpting, and holistic wellbeing.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
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
            <span>Explore Pink Aura</span>
          </Link>
        </motion.div>

        {/* Brand Value Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto"
        >
          <div className="p-4 rounded-3xl clay-card text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-aura-600 mx-auto" />
            <h4 className="font-serif text-base font-bold text-charcoal">Clinical Excellence</h4>
            <p className="text-xs text-charcoal-muted font-light">Supervised by qualified aesthetic doctors and wellness experts.</p>
          </div>

          <div className="p-4 rounded-3xl clay-card text-center space-y-2">
            <Feather className="w-6 h-6 text-aura-600 mx-auto" />
            <h4 className="font-serif text-base font-bold text-charcoal">Personalized Care</h4>
            <p className="text-xs text-charcoal-muted font-light">Custom consultation plans tailored to your unique biology.</p>
          </div>

          <div className="p-4 rounded-3xl clay-card text-center space-y-2">
            <HeartHandshake className="w-6 h-6 text-aura-600 mx-auto" />
            <h4 className="font-serif text-base font-bold text-charcoal">Holistic Wellbeing</h4>
            <p className="text-xs text-charcoal-muted font-light">Harmonizing external beauty with internal vitality and peace.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
