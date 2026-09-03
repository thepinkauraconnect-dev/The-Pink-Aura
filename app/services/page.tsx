'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Flower2, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';
import { ServiceGroup } from '@/types/services';

const FILTER_TABS: { label: string; group: ServiceGroup | 'ALL' }[] = [
  { label: 'All Services (12)', group: 'ALL' },
  { label: 'Beauty & Aesthetics', group: 'BEAUTY' },
  { label: 'Hair Restoration', group: 'HAIR' },
  { label: 'Body Contouring', group: 'BODY' },
  { label: 'Wellness & Spiritual', group: 'WELLNESS' },
  { label: 'Surgical Procedures', group: 'SURGICAL' },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceGroup | 'ALL'>('ALL');

  const filteredCategories = activeTab === 'ALL'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((c) => c.group === activeTab);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 overflow-x-hidden">
      {/* 1. HOMEPAGE EDITORIAL HERO BANNER AT TOP OF SERVICES PAGE */}
      <section className="relative px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full min-h-[55vh] sm:min-h-[70vh] lg:min-h-[78vh] rounded-[28px] sm:rounded-[44px] overflow-hidden shadow-[0_28px_70px_-15px_rgba(158,77,104,0.22)] border border-white flex flex-col justify-between p-4 sm:p-8 lg:p-12"
        >
          {/* High-Resolution Editorial Background Image (Same as Homepage Hero) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/editorial-hero.webp"
              alt="The Pink Aura Luxury Editorial Care — Services Catalogue"
              fill
              sizes="100vw"
              quality={85}
              className="object-cover object-center sm:object-[center_28%] scale-100 sm:scale-105 transition-transform duration-1000"
              priority
            />
            {/* Soft Transparent Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-aura-950/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-aura-950/30 via-transparent to-aura-950/40" />
          </div>

          {/* Top Header Badges */}
          <div className="relative z-20 w-full flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/30 dark:bg-black/35 backdrop-blur-md border border-white/40 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-champagne-light shrink-0" />
              <span>Complete Service Catalogue</span>
            </div>

            <div className="inline-flex flex-col items-center justify-center gap-0.5 px-3.5 py-1.5 rounded-2xl bg-white/25 dark:bg-black/30 backdrop-blur-md border border-white/30 text-[9px] font-mono font-bold uppercase tracking-wider text-white/95 text-center">
              <span>Monday - Sunday : 10AM - 7PM</span>
              <span className="text-pink-200">Tuesday's : Closed</span>
            </div>
          </div>

          {/* Hero Main Heading & Description */}
          <div className="relative z-20 w-full max-w-2xl my-auto pt-6 sm:pt-10 space-y-3 sm:space-y-4 text-white drop-shadow-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-champagne-light">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doctor-Led Clinical Aesthetics & Wellness</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Our Complete <span className="italic font-normal text-pink-200">Services & Treatments</span>
            </h1>

            <p className="text-xs sm:text-base text-white/90 font-light leading-relaxed max-w-xl">
              From laser hair reduction and advanced facial rejuvenation to body sculpting, hair restoration, and spiritual wellness — explore our 12 specialized care categories below.
            </p>
          </div>

          {/* Scalable Vector Typography Across Bottom */}
          <div className="relative z-10 w-full pt-3 sm:pt-4 pb-1 select-none pointer-events-none flex items-center justify-center">
            <svg
              viewBox="0 0 1300 150"
              className="w-full h-auto max-h-12 sm:max-h-20 md:max-h-28 lg:max-h-32 overflow-visible"
              aria-label="THE PINK AURA SERVICES"
            >
              <text
                x="50%"
                y="74%"
                textAnchor="middle"
                className="font-serif font-normal"
                fill="rgba(255, 255, 255, 0.96)"
                fontSize="120"
                letterSpacing="0.04em"
                style={{
                  filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.5))',
                }}
              >
                THE PINK AURA
              </text>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES CATALOGUE & FILTER TABS BELOW THE HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Title & Filter Tabs */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Flower2 className="w-3.5 h-3.5 text-aura-600" />
            <span>Select Category</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Browse Our 12 Signature Categories
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.group}
                onClick={() => setActiveTab(tab.group)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.group
                    ? 'clay-btn-primary scale-105 shadow-md'
                    : 'clay-btn-secondary text-charcoal-muted hover:text-aura-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Block Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group clay-card clay-card-hover rounded-4xl overflow-hidden flex flex-col justify-between border border-white dark:border-aura-700/30 shadow-clay-sm"
            >
              <Link href={`/services/${category.slug}`} className="block group">
                {/* Card Image */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-4xl">
                  <Image
                    src={category.cardImage}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-serif text-xs font-bold text-white bg-aura-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {category.number}
                  </span>
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase font-bold tracking-wider text-champagne-light bg-aura-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                    {category.group}
                  </span>
                </div>

                {/* Clean Block Body with Service Name & Subtitle */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-aura-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs font-bold text-aura-600 dark:text-aura-300 italic">
                    {category.subtitle}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aura-50 dark:bg-aura-900/50 text-aura-750 dark:text-aura-200 text-[11px] font-extrabold border border-aura-200/80 dark:border-aura-700/50">
                      <Sparkles className="w-3 h-3 text-aura-500" />
                      <span>{category.treatments.length} Procedures Included</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card Action Block */}
              <div className="px-6 py-4 border-t border-aura-200/60 dark:border-aura-800/40 mt-auto flex items-center justify-between gap-2 bg-[#FCE4EC]/40 dark:bg-[#1C030D]/60 backdrop-blur-sm rounded-b-4xl">
                <Link
                  href={`/register?category=${encodeURIComponent(category.title)}`}
                  className="clay-btn-primary px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/services/${category.slug}`}
                  className="clay-btn-secondary inline-flex items-center gap-1 text-[11px] font-bold px-3.5 py-1.5 text-charcoal-muted dark:text-pink-200/80"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom Banner */}
        <div className="clay-card rounded-4xl p-8 border border-white text-center space-y-4 shadow-clay-lg">
          <h3 className="font-serif text-2xl font-bold text-charcoal">
            Need a Custom Combination or Recommendation?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto font-light">
            Our aesthetic physicians create personalized multi-treatment journey plans tailored to your specific timeline and goals.
          </p>
          <div className="pt-2">
            <Link
              href="/register"
              className="clay-btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest"
            >
              <span>Begin Your Personalized Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
