import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, HelpCircle, ChevronRight, Flower2 } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';
import { TreatmentImage } from '@/components/ui/TreatmentImage';
import { getTreatmentImageSources } from '@/data/subTreatmentImages';

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
    description: `${category.subtitle}. Explore ${category.treatments.length} signature treatments at The Pink Aura JP Nagar Bangalore.`,
  };
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === params.categorySlug);

  if (!category) {
    notFound();
  }

  // All other categories except the current one
  const otherCategories = SERVICE_CATEGORIES.filter((c) => c.id !== category.id);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 overflow-x-hidden">
      {/* 1. TOP HERO BANNER: PROPER RECTANGLE WITH SERVICE TITLE & TAGLINE AT BOTTOM SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 max-w-6xl mx-auto">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] md:min-h-[500px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-clay-lg dark:shadow-[0_20px_50px_-15px_rgba(158,27,78,0.3)] border border-aura-200/80 dark:border-aura-900/60 flex flex-col justify-end p-6 sm:p-8 md:p-10">
          {/* Custom Uploaded Image for this Specific Service Category */}
          <div className="absolute inset-0 z-0">
            <Image
              src={category.heroImage}
              alt={category.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={90}
              className="object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000"
              priority
            />
            {/* Transparent Soft Gradient Overlays for High Legibility at the Bottom Section */}
            <div className="absolute inset-0 bg-gradient-to-t from-aura-950/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-aura-950/60 via-transparent to-aura-950/40" />
          </div>

          {/* Hero Content: Service Name, Tagline & Button INSIDE the Bottom Section of the Image */}
          <div className="relative z-20 w-full max-w-3xl space-y-2.5 sm:space-y-3.5 text-white drop-shadow-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/20 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-champagne-light">
              <span>Category {category.number} • {category.group}</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15]">
              {category.title}
            </h1>

            <p className="text-xs sm:text-lg text-pink-100 font-serif italic max-w-2xl leading-relaxed">
              "{category.subtitle}"
            </p>

            <div className="pt-1.5">
              <Link
                href={`/register?category=${encodeURIComponent(category.title)}`}
                className="clay-btn-primary inline-flex items-center gap-2 px-6 sm:px-7 py-3 text-xs font-extrabold uppercase tracking-widest shadow-lg"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AVAILABLE TREATMENTS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block mb-1">
              Service Procedures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Available Treatments ({category.treatments.length})
            </h2>
          </div>
          <p className="text-xs text-charcoal-muted italic font-light">
            * All treatments customized following your initial medical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.treatments.map((treatment) => {
            const imageFallbacks = getTreatmentImageSources(treatment.id, category.cardImage);
            const primarySrc = treatment.image || imageFallbacks[0] || category.cardImage;
            return (
              <div
                key={treatment.id}
                className="group clay-card clay-card-hover rounded-3xl overflow-hidden border border-aura-200/80 dark:border-aura-800/40 flex flex-col justify-between"
              >
                {/* Sub-treatment Image Header (Horizontal Rectangle aspect-16/9 with Loading Rotator & Fallback Support) */}
                <TreatmentImage
                  src={primarySrc}
                  fallbacks={imageFallbacks}
                  alt={treatment.name}
                  aspectRatio="aspect-[16/9]"
                  roundedClassName="rounded-t-3xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none z-10" />
                  {treatment.tag && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider text-white bg-aura-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 z-10">
                      {treatment.tag}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-md">
                      {treatment.name}
                    </h3>
                  </div>
                </TreatmentImage>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="text-xs leading-relaxed font-light space-y-1.5">
                    {treatment.description.includes('\n') ? (
                      treatment.description.split('\n').map((line, idx) => (
                        <p
                          key={idx}
                          className={
                            idx === 0
                              ? "font-medium text-aura-800 dark:text-aura-300 tracking-wide"
                              : "text-charcoal-muted dark:text-pink-100/70 text-[11px]"
                          }
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-charcoal-muted dark:text-pink-100/70">{treatment.description}</p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-aura-200/50 dark:border-aura-700/30 flex items-center justify-between gap-2 mt-auto">
                    <span className="text-[11px] text-aura-750 dark:text-aura-300 font-bold">Doctor Assessment Plan</span>
                    <Link
                      href={`/register?category=${encodeURIComponent(category.title)}&treatment=${encodeURIComponent(treatment.name)}`}
                      className="clay-btn-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shrink-0"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TREATMENT OVERVIEW & KEY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card bg-white/90 dark:bg-[#320A19]/90 rounded-4xl p-8 sm:p-12 border border-aura-200/80 dark:border-aura-800/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block">
              Treatment Overview
            </span>
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              Precision Clinical Care & Personalized Craftsmanship
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-normal">
              {category.description}
            </p>
          </div>

          {category.highlights && (
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFF0F4] via-[#FCE4EC] to-[#F8C8DC] dark:from-[#320A19] dark:via-[#240511] dark:to-[#160309] border border-aura-200/80 dark:border-aura-700/30 shadow-clay-sm dark:shadow-none space-y-4">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-charcoal flex items-center gap-2.5">
                <Flower2 className="w-5 h-5 text-aura-600 dark:text-aura-300 shrink-0" />
                <span>Key Experience Highlights</span>
              </h4>
              <ul className="space-y-3">
                {category.highlights.map((h, idx) => (
                  <li key={idx} className="text-xs sm:text-sm flex items-start gap-2.5 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-aura-600 dark:text-aura-300 shrink-0 mt-0.5" />
                    <span className="text-charcoal">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
              <div key={idx} className="clay-card clay-card-hover rounded-3xl p-6 border border-aura-200/80 dark:border-aura-800/40 space-y-2">
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

      {/* 5. ALL OTHER SERVICES (PLACED BELOW FREQUENTLY ASKED QUESTIONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Flower2 className="w-3.5 h-3.5 text-aura-600" />
            <span>Explore More Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal tracking-tight">
            All Other Services
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted font-light">
            Discover our complete catalogue of signature aesthetic, body contouring, hair restoration, IV drip therapy, and spiritual wellness categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCategories.map((otherCat) => (
            <div
              key={otherCat.id}
              className="group clay-card clay-card-hover rounded-4xl overflow-hidden flex flex-col justify-between border border-aura-200/80 dark:border-aura-800/40"
            >
              <Link href={`/services/${otherCat.slug}`} className="block group">
                {/* Card Image */}
                <div className="relative w-full h-52 overflow-hidden rounded-t-4xl">
                  <Image
                    src={otherCat.cardImage}
                    alt={otherCat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-serif text-xs font-bold text-white bg-aura-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {otherCat.number}
                  </span>
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase font-bold tracking-wider text-champagne-light bg-aura-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                    {otherCat.group}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-aura-600 transition-colors">
                    {otherCat.title}
                  </h3>
                  <p className="text-xs font-bold text-aura-600 dark:text-aura-300 italic">
                    {otherCat.subtitle}
                  </p>
                </div>
              </Link>

              {/* Card Action */}
              <div className="px-6 py-4 border-t border-aura-200/60 dark:border-aura-800/40 mt-auto flex items-center justify-between gap-2 bg-[#FCE4EC]/40 dark:bg-[#1C030D]/60 backdrop-blur-sm rounded-b-4xl">
                <Link
                  href={`/register?category=${encodeURIComponent(otherCat.title)}`}
                  className="clay-btn-primary px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/services/${otherCat.slug}`}
                  className="clay-btn-secondary inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 text-charcoal-muted dark:text-pink-200/80"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card clay-card-hover rounded-4xl p-8 sm:p-12 text-center shadow-clay-lg dark:shadow-[0_20px_50px_-15px_rgba(158,27,78,0.3)] border border-aura-200/80 dark:border-aura-800/40 space-y-4">
          <h3 className="font-serif text-3xl font-bold text-charcoal">
            Begin Your {category.title} Journey
          </h3>
          <p className="text-sm font-light text-charcoal-muted max-w-xl mx-auto">
            Schedule your confidential consultation with our dedicated medical & wellness team to explore your goals and begin your {category.title} journey.
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
    </div>
  );
}
