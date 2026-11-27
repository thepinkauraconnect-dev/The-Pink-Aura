import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  HeartPulse,
  MapPin,
  Clock,
  Mail,
  ChevronDown,
  Flower2,
  Lock,
  Sparkles,
  Phone,
  CheckCircle2,
  Compass,
  Users,
} from 'lucide-react';
import { FOUNDERS, SURGEONS, CLINIC_INFO } from '@/data/services';
import HeroSlider from '@/components/home/HeroSlider';
import ServiceTabsGrid from '@/components/home/ServiceTabsGrid';
import InstagramTestimonials from '@/components/home/InstagramTestimonials';
import JsonLd from '@/components/seo/JsonLd';
import { faqJsonLd } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Best Aesthetic, Skin & Hair Clinic in JP Nagar, Bangalore',
  description:
    'The Pink Aura is a doctor-led aesthetic & wellness clinic in JP Nagar, Bangalore offering laser hair reduction, medi-facials, Botox & fillers, hair restoration, body contouring, IV drips and permanent makeup.',
  keywords: [
    'aesthetic clinic JP Nagar',
    'skin clinic Bangalore',
    'laser hair reduction JP Nagar',
    'hair fall treatment Bangalore',
    'botox and fillers Bangalore',
    'body contouring Bangalore',
    'wellness centre JP Nagar',
  ],
  alternates: { canonical: '/home' },
  openGraph: { url: '/home' },
};

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Personalized Analysis',
    desc: 'In-depth clinical consultation evaluating skin biology, metabolic indicators, and aesthetic aspirations.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Custom Protocol Design',
    desc: 'Physician-crafted treatment roadmap selecting FDA-cleared devices, regenerative serums, and wellness plans.',
    icon: Award,
  },
  {
    step: '03',
    title: 'Precision Treatment',
    desc: 'Gentle, sterile procedure delivery in private luxury suites with dermatological mastery and zero downtime focus.',
    icon: ShieldCheck,
  },
  {
    step: '04',
    title: 'Holistic Vitality',
    desc: 'Comprehensive post-care guidance, lifestyle integration, and spiritual alignment to sustain enduring radiance.',
    icon: HeartPulse,
  },
];

const HOME_FAQS = [
  {
    q: 'Who conducts the consultations and procedures at The Pink Aura?',
    a: 'Every consultation is led by qualified aesthetic physicians and wellness specialists, including Co-Founder Dr. Yashaswini HV (Ayurvedic Doctor & Aesthetic Physician) and board-certified surgical consultants.'
  },
  {
    q: 'What is the clinic timing and weekly schedule?',
    a: 'We are open Monday to Sunday from 10:00 AM to 7:00 PM. Please note that our clinic is closed on Tuesdays.'
  },
  {
    q: 'Are the treatments safe and FDA-approved?',
    a: 'Yes, our clinic exclusively uses US-FDA cleared triple-wavelength lasers, patented Growth Factor Concentrates (GFC), certified organic pigments, and clinically proven aesthetic equipment.'
  },
  {
    q: 'How do I book a private consultation?',
    a: 'You can easily register using our online consultation form, or call/WhatsApp our clinic directly at +91 76191 51455.'
  }
];

export default function MainHomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20 overflow-x-hidden">
      <JsonLd data={faqJsonLd(HOME_FAQS)} />

      {/* 1. HERO (client island: slides + streamed videos) */}
      <HeroSlider />

      {/* 2. THE 4-STEP AURA JOURNEY PROTOCOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-aura-600" />
            <span>The Transformation Path</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal tracking-tight">
            How Your Journey Unfolds
          </h2>
          <p className="text-sm text-charcoal-muted font-light">
            Every transformation at The Pink Aura follows a rigorous, doctor-led clinical pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="clay-card clay-card-hover hover:-translate-y-1.5 transition-transform duration-300 rounded-3xl p-6 border border-white dark:border-aura-700/30 flex flex-col justify-between space-y-4 relative overflow-hidden group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-aura-600/50 dark:text-aura-200/60 group-hover:text-aura-600 dark:group-hover:text-aura-100 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl clay-badge flex items-center justify-center text-aura-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-aura-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-aura-100 dark:border-aura-700/30 flex items-center text-[10px] uppercase font-bold text-aura-600 dark:text-aura-300">
                  <span>Step {step.step} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. EXPLORE OUR 13 SIGNATURE OFFERINGS WITH INTERACTIVE TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest mb-2">
              <Flower2 className="w-3.5 h-3.5 text-aura-600" />
              <span>Curated Clinical Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Explore Our Signature Offerings
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aura-600 hover:text-aura-800 group shrink-0"
          >
            <span>View All 13 Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ServiceTabsGrid />
      </section>

      {/* 4. WHY THE PINK AURA — CLAY DARK CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card-dark text-white rounded-5xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-aura-300">
              The Pink Aura Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Discerning Clients Choose The Pink Aura
            </h2>
            <p className="text-sm text-aura-200/80 font-light leading-relaxed">
              Every protocol is crafted with scientific integrity, clinical discretion, and attentive care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20 hover:border-aura-300/60 transition-colors">
              <ShieldCheck className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">Doctor-Led Care</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Supervised by experienced medical physicians ensuring high safety standards and evidence-based efficacy.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20 hover:border-aura-300/60 transition-colors">
              <Award className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">State-of-the-Art Tech</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                FDA-approved triple wavelength lasers, US-patented growth factors, and advanced Pico technology.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20 hover:border-aura-300/60 transition-colors">
              <HeartPulse className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">Holistic Harmony</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Unifying physical beauty enhancements with inner spiritual guidance and dietary wellness.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-aura-400/20 hover:border-aura-300/60 transition-colors">
              <Lock className="w-8 h-8 text-aura-300" />
              <h3 className="font-serif text-lg font-bold">Luxury Privacy</h3>
              <p className="text-xs text-aura-200/70 font-light leading-relaxed">
                Private consultation suites designed for maximum discretion, comfort, and personalized attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE FOUNDERS & DIRECT CONTACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-aura-600" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Meet the Experts Behind The Pink Aura
          </h2>
          <p className="text-sm text-charcoal-muted font-light">
            Guiding your transformation with clinical expertise, aesthetic passion, and spiritual vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder, i) => (
            <div
              key={i}
              className="clay-card clay-card-hover rounded-4xl p-8 border border-white dark:border-aura-700/30 flex flex-col justify-between space-y-6 shadow-clay-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white dark:border-aura-700/30">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={80}
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal">{founder.name}</h3>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-aura-600 block mt-1">
                      {founder.role}
                    </span>
                    <span className="text-[11px] text-charcoal-muted italic block mt-0.5 font-light">
                      {founder.qualifications}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {founder.bio}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-aura-100 dark:border-aura-700/30 flex flex-col sm:flex-row items-center justify-between gap-3 bg-aura-50/70 dark:bg-[#20040E]/90 p-3.5 rounded-2xl border border-aura-200/50 dark:border-aura-700/30">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-aura-800 dark:text-aura-100 block">
                    Direct Contact
                  </span>
                  <span className="font-mono text-sm font-bold text-charcoal">
                    {founder.phone}
                  </span>
                </div>
                <a
                  href={`tel:${founder.rawPhone || founder.phone?.replace(/[^0-9+]/g, '')}`}
                  className="clay-btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {founder.name.startsWith('Dr.') ? founder.name.split(' ').slice(0, 2).join(' ') : founder.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}

          {SURGEONS.map((surgeon, sIdx) => (
            <div
              key={`surgeon-${sIdx}`}
              className="clay-card clay-card-hover rounded-4xl p-6 sm:p-8 border border-white dark:border-aura-700/30 flex flex-col justify-between space-y-6 shadow-clay-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white dark:border-aura-700/30">
                  <Image
                    src={surgeon.image}
                    alt={surgeon.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={85}
                    className="object-cover object-[center_15%]"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal">{surgeon.name}</h3>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-aura-600 block mt-1">
                      {surgeon.role}
                    </span>
                    <span className="text-[11px] text-charcoal-muted italic block mt-0.5 font-light">
                      {surgeon.qualifications}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light pt-1">
                    {surgeon.intro || surgeon.bio}
                  </p>
                </div>
              </div>

              {surgeon.highlights && surgeon.highlights.length > 0 && (
                <div className="space-y-3 pt-5 border-t border-aura-100 dark:border-aura-700/30">
                  <h4 className="font-serif text-base font-bold text-charcoal">
                    {surgeon.whyChooseTitle || `Why Choose ${surgeon.name}?`}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {surgeon.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 text-xs text-charcoal-muted">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-charcoal">{h.title}: </span>
                          <span className="font-light leading-relaxed">{h.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT STORIES — INSTAGRAM TESTIMONIALS */}
      <InstagramTestimonials />

      {/* 6. LOCATION & INTERACTIVE EMBEDDED GOOGLE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card rounded-4xl p-6 sm:p-10 border border-white shadow-clay-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Clinic Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-aura-600 block mb-2">
                Visit Our Sanctuary
              </span>
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                Located in JP Nagar, Bangalore
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted font-light">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-2 text-xs">
                  <span className="font-medium">Monday - Sunday</span>
                  <span className="font-medium">:</span>
                  <span className="font-medium">10AM - 7PM</span>
                  <span className="text-aura-700 dark:text-pink-300 font-extrabold">Tuesday</span>
                  <span className="text-aura-700 dark:text-pink-300 font-extrabold">:</span>
                  <span className="text-aura-700 dark:text-pink-300 font-extrabold">Closed</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="text-aura-700 font-bold hover:underline"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-aura-600 font-medium hover:underline">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                <span>Full Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/register"
                className="clay-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>

          {/* Interactive Google Map Embed (New Exact Location) */}
          <div className="lg:col-span-7">
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden relative bg-aura-100 border border-aura-200 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.029365171525!2d77.5951944!3d12.905833300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzIxLjAiTiA3N8KwMzUnNDIuNyJF!5e0!3m2!1sen!2sin!4v1787991568406!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.04) saturate(1.08)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Pink Aura Exact Clinic Location Map"
              />
            </div>
            <div className="pt-3 flex items-center justify-between text-xs text-charcoal-muted px-1">
              <span>Landmark: Near Delmia Circle, 4th Phase JP Nagar</span>
              <a
                href="https://maps.google.com/?q=12.9058333,77.5951944"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aura-600 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-aura-600" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted font-light">
            Everything you need to know prior to your visit.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {HOME_FAQS.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group clay-card rounded-3xl overflow-hidden border border-white transition-all"
            >
              <summary className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-charcoal hover:text-aura-700 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3>{faq.q}</h3>
                <ChevronDown className="w-4 h-4 text-aura-600 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light border-t border-aura-100/60 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 8. FINAL CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card-dark text-white rounded-5xl p-8 sm:p-14 text-center shadow-2xl space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-champagne-light text-xs font-extrabold uppercase tracking-widest mx-auto">
              <Flower2 className="w-3.5 h-3.5 text-champagne-light" />
              <span>Begin Your Transformation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Ready to Discover The Pink Aura?
            </h2>
            <p className="text-sm sm:text-base font-light text-white/90 leading-relaxed">
              Schedule your personalized consultation today with our clinical team and embark on your bespoke aesthetic & wellness roadmap.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="w-full sm:w-auto clay-btn-primary inline-flex items-center justify-center gap-2 px-9 py-4 text-xs font-extrabold uppercase tracking-widest shadow-lg hover:shadow-aura-glow"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
              >
                <Phone className="w-4 h-4 text-champagne-light" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
