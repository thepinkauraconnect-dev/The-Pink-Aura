import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, HelpCircle, ChevronRight, Flower2 } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({
    categorySlug: category.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === params.categorySlug);
  if (!category) return { title: 'Service Not Found — The Pink Aura' };

  return {
    title: `${category.title} — The Pink Aura Aesthetic & Wellness`,
    description: `${category.subtitle}. Explore ${category.treatments.length} signature treatments at Pink Aura JP Nagar Bangalore.`,
  };
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === params.categorySlug);

  if (!category) {
    notFound();
  }

  // Related categories
  const relatedCategories = SERVICE_CATEGORIES.filter((c) => c.id !== category.id).slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. CATEGORY HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-16 px-4 overflow-hidden bg-gradient-to-br from-aura-950 via-aura-900 to-charcoal text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-aura-950 via-aura-950/80 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-aura-300 text-xs font-bold uppercase tracking-widest">
            <Flower2 className="w-3.5 h-3.5 text-aura-300" />
            <span>Category {category.number} • {category.group}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight">
            {category.title}
          </h1>

          <p className="text-base sm:text-xl text-aura-200/90 font-serif italic max-w-2xl mx-auto">
            "{category.subtitle}"
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/register?category=${encodeURIComponent(category.title)}`}
              className="clay-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest"
            >
              <span>Begin Consultation for {category.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card bg-white/90 rounded-4xl p-8 sm:p-12 border border-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block">
              Treatment Overview
            </span>
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              Precision Clinical Care & Personalized Craftsmanship
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
              {category.description}
            </p>
          </div>

          {category.highlights && (
            <div className="lg:col-span-5 p-6 rounded-3xl clay-badge bg-aura-50/80 border border-white space-y-3">
              <h4 className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
                <Flower2 className="w-5 h-5 text-aura-600" />
                <span>Key Experience Highlights</span>
              </h4>
              <ul className="space-y-2">
                {category.highlights.map((h, idx) => (
                  <li key={idx} className="text-xs text-charcoal-muted flex items-start gap-2 font-light">
                    <CheckCircle2 className="w-4 h-4 text-aura-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 3. TREATMENTS CATALOGUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block mb-1">
              Service Procedures
            </span>
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              Available Treatments ({category.treatments.length})
            </h2>
          </div>
          <p className="text-xs text-charcoal-muted italic font-light">
            * All treatments customized following your initial medical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="clay-card clay-card-hover rounded-3xl p-6 border border-white flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {treatment.name}
                  </h3>
                  {treatment.tag && (
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-aura-700 clay-badge px-2.5 py-0.5 shrink-0">
                      {treatment.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  {treatment.description}
                </p>
              </div>

              <div className="pt-2 border-t border-aura-100 flex items-center justify-between">
                <span className="text-[11px] text-aura-600 font-bold">Personalized Plan Available</span>
                <Link
                  href={`/register?category=${encodeURIComponent(category.title)}&treatment=${encodeURIComponent(treatment.name)}`}
                  className="text-xs font-bold text-aura-600 hover:text-aura-700 inline-flex items-center gap-1 clay-badge px-3 py-1 hover:scale-105 transition-all"
                >
                  <span>Enquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      {category.faqs && category.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <HelpCircle className="w-8 h-8 text-aura-600 mx-auto" />
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-charcoal-muted font-light">
              Common inquiries regarding {category.title}
            </p>
          </div>

          <div className="space-y-4">
            {category.faqs.map((faq, idx) => (
              <div key={idx} className="clay-card rounded-3xl p-6 border border-white space-y-2">
                <h4 className="font-serif text-base font-bold text-charcoal">
                  {faq.question}
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card-dark text-white rounded-4xl p-8 sm:p-12 text-center shadow-xl space-y-4">
          <h3 className="font-serif text-3xl font-bold">
            Begin Your {category.title} Journey
          </h3>
          <p className="text-sm font-light text-white/90 max-w-xl mx-auto">
            Schedule your confidential consultation with our aesthetic team to discuss your goals and receive a custom treatment roadmap.
          </p>
          <div className="pt-2">
            <Link
              href={`/register?category=${encodeURIComponent(category.title)}`}
              className="clay-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest"
            >
              <span>Register for Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <h3 className="font-serif text-2xl font-bold text-charcoal">
          Explore Related Categories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCategories.map((rel) => (
            <Link
              key={rel.id}
              href={`/services/${rel.slug}`}
              className="clay-card clay-card-hover rounded-3xl p-5 border border-white flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-extrabold text-aura-600 uppercase tracking-wider block">
                  {rel.group}
                </span>
                <h4 className="font-serif text-lg font-bold text-charcoal group-hover:text-aura-600 transition-colors">
                  {rel.title}
                </h4>
              </div>
              <ArrowRight className="w-5 h-5 text-aura-400 group-hover:text-aura-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
