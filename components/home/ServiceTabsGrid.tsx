'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';
import { ServiceGroup } from '@/types/services';

const FILTER_TABS: { label: string; group: ServiceGroup | 'ALL' }[] = [
  { label: 'All Services', group: 'ALL' },
  { label: 'Beauty & Skin', group: 'BEAUTY' },
  { label: 'Hair Care', group: 'HAIR' },
  { label: 'Body Contouring', group: 'BODY' },
  { label: 'Wellness & Spiritual', group: 'WELLNESS' },
  { label: 'Surgical Care', group: 'SURGICAL' },
];

/** Filterable category grid. Server-rendered with "All" selected so every category is in the HTML. */
export default function ServiceTabsGrid() {
  const [activeGroup, setActiveGroup] = useState<ServiceGroup | 'ALL'>('ALL');
  const displayedCategories =
    activeGroup === 'ALL' ? SERVICE_CATEGORIES : SERVICE_CATEGORIES.filter((c) => c.group === activeGroup);

  return (
    <>
    {/* Interactive Filter Tabs */}
    <div className="flex flex-wrap items-center gap-2 pb-2">
      {FILTER_TABS.map((tab) => (
        <button
          key={tab.group}
          onClick={() => setActiveGroup(tab.group)}
          className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
            activeGroup === tab.group
              ? 'clay-btn-primary scale-105 shadow-md'
              : 'clay-btn-secondary text-charcoal-muted hover:text-aura-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Dynamic Category Cards Grid */}
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence initial={false}>
        {displayedCategories.map((category) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            key={category.id}
            className="group clay-card clay-card-hover rounded-4xl overflow-hidden flex flex-col justify-between border border-white dark:border-aura-700/30"
          >
            <Link href={`/services/${category.slug}`} className="block group">
              {/* Image Header (Horizontal Rectangle aspect-16/9) */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-4xl">
                <Image
                  src={category.cardImage}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-serif text-xs font-bold text-white bg-aura-950/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
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
                <p className="text-xs text-aura-700 dark:text-aura-300 font-semibold italic">
                  {category.subtitle}
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light line-clamp-3">
                  {category.description}
                </p>
              </div>
            </Link>

            {/* Card Footer CTA */}
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
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
    </>
  );
}
