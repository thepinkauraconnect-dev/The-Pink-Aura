'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, CheckCircle2, Flower2 } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
          <Flower2 className="w-3.5 h-3.5 text-aura-600" />
          <span>Complete Service Catalogue</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-charcoal tracking-tight">
          Explore Our <span className="aura-gradient-text italic font-normal">Aesthetic & Wellness</span> Offerings
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
          From laser hair reduction and advanced facial rejuvenation to body sculpting, hair transplant, and spiritual guidance, discover our 12 specialized care categories.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-4 border-b border-aura-200/60">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.group}
            onClick={() => setActiveTab(tab.group)}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
              activeTab === tab.group
                ? 'clay-btn-primary scale-105'
                : 'clay-btn-secondary text-charcoal-muted hover:text-aura-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="group clay-card clay-card-hover rounded-4xl overflow-hidden flex flex-col justify-between border border-white dark:border-aura-700/30"
          >
            <Link href={`/services/${category.slug}`} className="block group">
              {/* Card Image */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-4xl">
                <Image
                  src={category.cardImage}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
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

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-aura-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs font-bold text-aura-600 dark:text-aura-300 italic">
                  {category.subtitle}
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light line-clamp-3">
                  {category.description}
                </p>

                {/* Highlights */}
                {category.highlights && (
                  <ul className="space-y-1.5 pt-2">
                    {category.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="text-[11px] text-charcoal-muted flex items-start gap-1.5 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-aura-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>

            {/* Card Action */}
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
                className="clay-btn-secondary inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 text-charcoal-muted dark:text-pink-200/80"
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
    </div>
  );
}
