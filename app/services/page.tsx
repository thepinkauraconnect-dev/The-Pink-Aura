import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flower2, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';
import ServicesCatalogue from '@/components/services/ServicesCatalogue';
import JsonLd from '@/components/seo/JsonLd';
import { absoluteUrl, breadcrumbJsonLd } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Aesthetic, Skin, Hair & Wellness Treatments in Bangalore',
  description:
    'Explore 13 treatment categories and 125+ procedures at The Pink Aura, JP Nagar — laser hair reduction, medi-facials, peels, Botox & fillers, PMU, GFC/PRP hair therapy, hair transplant, body contouring, IV drips and wellness.',
  keywords: [
    'aesthetic treatments Bangalore',
    'skin treatments JP Nagar',
    'hair treatment Bangalore',
    'cosmetic clinic services Bangalore',
  ],
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The Pink Aura treatment categories',
  itemListElement: SERVICE_CATEGORIES.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.title,
    url: absoluteUrl(`/services/${c.slug}`),
  })),
};

export default function ServicesPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 overflow-x-hidden">
      <JsonLd
        data={[
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: 'Home', path: '/home' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />
      {/* 1. HOMEPAGE EDITORIAL HERO BANNER AT TOP OF SERVICES PAGE */}
      <section className="relative px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 max-w-[1440px] mx-auto">
        <div
          className="animate-fade-in relative w-full min-h-[55vh] sm:min-h-[70vh] lg:min-h-[78vh] rounded-[28px] sm:rounded-[44px] overflow-hidden shadow-clay-lg dark:shadow-[0_28px_70px_-15px_rgba(42,5,19,0.85)] border border-aura-200/80 dark:border-aura-900/60 flex flex-col justify-between p-4 sm:p-8 lg:p-12"
        >
          {/* High-Resolution Editorial Background Image (Same as Homepage Hero) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero.webp"
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

            <div className="inline-grid grid-cols-[auto_auto_1fr] items-center gap-x-2 px-3.5 py-1.5 rounded-2xl bg-white/25 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/20 text-[9px] font-mono tracking-wider text-white/95 text-left">
              <span className="font-medium uppercase">Monday - Sunday</span>
              <span className="font-medium">:</span>
              <span className="font-medium uppercase">10AM - 7PM</span>
              <span className="font-extrabold text-pink-200 uppercase">Tuesday</span>
              <span className="font-extrabold text-pink-200">:</span>
              <span className="font-extrabold text-pink-200 uppercase">Closed</span>
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
              "Discover our 13 signature categories and 125 customized treatment procedures."
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
        </div>
      </section>

      <ServicesCatalogue />
    </div>
  );
}
