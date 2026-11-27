'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
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

/** Filter tabs + category grid. Server-rendered with "All" selected, so every category is in the HTML. */
export default function ServicesCatalogue() {
  const [activeTab, setActiveTab] = useState<ServiceGroup | 'ALL'>('ALL');
  const filteredCategories =
    activeTab === 'ALL' ? SERVICE_CATEGORIES : SERVICE_CATEGORIES.filter((c) => c.group === activeTab);

  return (
    <>
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
                {/* Category Header Image (Horizontal Rectangle aspect-16/9) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-4xl">
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
                  <h2 className="font-serif text-2xl font-bold text-charcoal group-hover:text-aura-600 transition-colors leading-tight">
                    {category.title}
                  </h2>
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
    </>
  );
}
