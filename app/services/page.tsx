'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Flower2, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';
import { ServiceGroup } from '@/types/services';

const SERVICE_GROUPS: { label: string; value: ServiceGroup | 'ALL' }[] = [
  { label: 'All Services', value: 'ALL' },
  { label: 'Beauty & Skin', value: 'BEAUTY' },
  { label: 'Hair Care', value: 'HAIR' },
  { label: 'Body Sculpting', value: 'BODY' },
  { label: 'Surgical Care', value: 'SURGICAL' },
  { label: 'Wellness & Spiritual', value: 'WELLNESS' },
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
          className="relative w-full min-h-[55vh] sm:min-h-[70vh] lg:min-h-[78vh] rounded-[28px] sm:rounded-[44px] overflow-hidden shadow-clay-lg dark:shadow-[0_28px_70px_-15px_rgba(42,5,19,0.85)] border border-aura-200/80 dark:border-aura-900/60 flex flex-col justify-between p-4 sm:p-8 lg:p-12"
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
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/30 dark:bg-black/45 backdrop-blur-md border border-white/40 dark:border-white/20 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-champagne-light shrink-0" />
              <span>Complete Service Catalogue</span>
            </div>

            <div className="inline-flex flex-col items-center justify-center gap-0.5 px-3.5 py-1.5 rounded-2xl bg-white/25 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/20 text-[9px] font-mono font-bold uppercase tracking-wider text-white/95 text-center">
              <span>Monday - Sunday : 10AM - 7PM</span>
              <span className="text-pink-200 text-[8.5px]">Tuesday's : Closed</span>
            </div>
          </div>

          {/* Center Brand Vector Statement */}
          <div className="relative z-20 my-auto text-center space-y-3 py-6 px-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/20 text-[10px] sm:text-xs font-serif italic text-pink-100 tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-champagne-light" />
              <span>Doctor-Led Clinical Care & Holistic Wellness</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-md max-w-4xl mx-auto">
              Our Services & Treatment Portfolio
            </h1>
          </div>

          {/* Bottom Editorial Callout Bar */}
          <div className="relative z-20 w-full pt-4 border-t border-white/20 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/90">
            <p className="text-xs sm:text-sm font-serif italic text-center sm:text-left text-pink-100/90">
              "Discover our 12 signature categories and 117 customized treatment procedures."
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="clay-btn-primary px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5 shrink-0 shadow-lg"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. CATEGORY GROUP FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SERVICE_GROUPS.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'clay-btn-primary shadow-clay-md scale-105'
                    : 'clay-btn-secondary text-charcoal hover:text-aura-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. CLEAN BLOCK-STYLED CATEGORY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group clay-card clay-card-hover rounded-4xl overflow-hidden flex flex-col justify-between border border-aura-200/80 dark:border-aura-800/40 shadow-clay-md dark:shadow-[0_15px_35px_-10px_rgba(158,27,78,0.25)]"
            >
              <Link href={`/services/${category.slug}`} className="block group">
                {/* Category Header Image */}
                <div className="relative w-full h-56 sm:h-60 overflow-hidden rounded-t-4xl">
                  <Image
                    src={category.cardImage}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  
                  {/* Category Number Badge */}
                  <span className="absolute top-4 left-4 font-serif text-xs font-bold text-white bg-aura-950/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {category.number}
                  </span>

                  {/* Procedure Count Badge */}
                  <span className="absolute top-4 right-4 text-[10px] uppercase font-extrabold tracking-wider text-white bg-aura-600/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                    {category.treatments.length} Procedures Included
                  </span>

                  {/* Category Group Badge */}
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase font-bold tracking-wider text-champagne-light bg-aura-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                    {category.group}
                  </span>
                </div>

                {/* Clean Category Card Body */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-aura-600 transition-colors leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs font-bold text-aura-600 dark:text-pink-300 italic">
                    {category.subtitle}
                  </p>
                </div>
              </Link>

              {/* Action Buttons */}
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
      </section>
    </div>
  );
}
