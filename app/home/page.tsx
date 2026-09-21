'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  HeartPulse,
  MapPin,
  Clock,
  Mail,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Flower2,
  Lock,
  Sparkles,
  Phone,
  CheckCircle2,
  Compass,
  Star,
  Users,
  CalendarCheck,
  Loader2
} from 'lucide-react';
import { SERVICE_CATEGORIES, FOUNDERS, SURGEONS, CLINIC_INFO } from '@/data/services';
import { ServiceGroup } from '@/types/services';

const HERO_SLIDES = [
  {
    id: 'hero-slide-img',
    type: 'image',
    src: '/images/hero/editorial-hero.webp',
    alt: 'The Pink Aura Luxury Editorial Care',
    duration: 3500,
    className: 'object-cover object-center sm:object-[center_28%] scale-100 sm:scale-105 transition-transform duration-1000',
  },
  {
    id: 'hero-slide-vid-1',
    type: 'video',
    src: '/Videos/Hero_section_videos/hero_display_1.mp4',
    alt: 'The Pink Aura Luxury Care Video 1',
    className: 'object-cover object-center',
  },
  {
    id: 'hero-slide-vid-2',
    type: 'video',
    src: '/Videos/Hero_section_videos/hero_display_2.mp4',
    alt: 'The Pink Aura Exercise & Fitness Video',
    className: 'object-cover object-[18%_center] sm:object-center transition-all duration-700',
  },
  {
    id: 'hero-slide-vid-3',
    type: 'video',
    src: '/Videos/Hero_section_videos/hero__display_3.mp4',
    alt: 'The Pink Aura Meditation & Wellness Video',
    className: 'object-cover object-center',
  },
];

const FILTER_TABS: { label: string; group: ServiceGroup | 'ALL' }[] = [
  { label: 'All Services', group: 'ALL' },
  { label: 'Beauty & Skin', group: 'BEAUTY' },
  { label: 'Hair Care', group: 'HAIR' },
  { label: 'Body Contouring', group: 'BODY' },
  { label: 'Wellness & Spiritual', group: 'WELLNESS' },
  { label: 'Surgical Care', group: 'SURGICAL' },
];

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
    a: 'Every consultation is led by qualified aesthetic doctors and wellness specialists, including Co-Founder Dr. Yashaswini HV (Ayurvedic Physician & Aesthetic Physician) and board-certified surgical consultants.'
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
  const [activeGroup, setActiveGroup] = useState<ServiceGroup | 'ALL'>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Hero Slider Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Timer for image slide (gentle auto-rotation on desktop, user-controlled on mobile to save data & performance)
  useEffect(() => {
    const current = HERO_SLIDES[currentSlide];
    if (current.type === 'image') {
      setIsVideoLoading(false);
      // On mobile / touch devices, do not force-stream 45MB videos automatically; let users tap next
      const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
      if (isMobile) return;

      const timer = setTimeout(() => {
        nextSlide();
      }, 7000);
      return () => clearTimeout(timer);
    } else {
      setIsVideoLoading(true);
    }
  }, [currentSlide, nextSlide]);

  // Reset & play video at normal 1.0x rate when video slide becomes active
  useEffect(() => {
    const current = HERO_SLIDES[currentSlide];
    if (current.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(() => {
        // Handle autoplay policy gracefully
      });
    }
  }, [currentSlide]);

  const displayedCategories = activeGroup === 'ALL'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((c) => c.group === activeGroup);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20 overflow-x-hidden">
      {/* 1. HIGH-FASHION EDITORIAL LUXURY HERO CANVAS */}
      <section className="relative px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-8 max-w-[1440px] mx-auto">
        <h1 className="sr-only">The Pink Aura — Aesthetic & Wellness Sanctuary Bangalore</h1>
        <div className="relative w-full min-h-[65vh] sm:min-h-[84vh] lg:min-h-[88vh] rounded-[24px] sm:rounded-[44px] overflow-hidden shadow-[0_28px_70px_-15px_rgba(158,77,104,0.22)] border border-white flex flex-col justify-between p-3.5 sm:p-8 lg:p-12">
          {/* Dynamic Hero Slide Media (Image + 3 Videos) */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={HERO_SLIDES[currentSlide].id}
                initial={currentSlide === 0 ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {HERO_SLIDES[currentSlide].type === 'image' ? (
                  <Image
                    src={HERO_SLIDES[currentSlide].src}
                    alt={HERO_SLIDES[currentSlide].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 95vw, 1400px"
                    quality={80}
                    className={HERO_SLIDES[currentSlide].className || "object-cover object-center sm:object-[center_28%] scale-100 sm:scale-105 transition-transform duration-1000"}
                    priority
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={HERO_SLIDES[currentSlide].src}
                    aria-label={HERO_SLIDES[currentSlide].alt}
                    preload="metadata"
                    autoPlay
                    muted
                    playsInline
                    onLoadStart={() => setIsVideoLoading(true)}
                    onWaiting={() => setIsVideoLoading(true)}
                    onCanPlay={() => setIsVideoLoading(false)}
                    onPlaying={() => setIsVideoLoading(false)}
                    onLoadedData={() => setIsVideoLoading(false)}
                    onEnded={nextSlide}
                    className={`w-full h-full ${HERO_SLIDES[currentSlide].className || 'object-cover object-center'}`}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Video Buffering / Loading Indicator */}
            <AnimatePresence>
              {isVideoLoading && HERO_SLIDES[currentSlide].type === 'video' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md text-white space-y-2 pointer-events-none"
                >
                  <div className="relative flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-pink-300 animate-spin" />
                    <Sparkles className="w-3.5 h-3.5 text-pink-200 absolute animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/90">
                    Loading Media...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ultra-Clear Subtle Gradient Scrim (Keeps Center Media 100% Radiant & Unobscured) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/75 pointer-events-none z-10" />
          </div>

          {/* Desktop/Laptop Side Navigation Arrows (Guaranteed safe distance with container inset) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden sm:flex absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md border border-white/30 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden sm:flex absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md border border-white/30 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Top Canvas Header Badges (Responsive, Compact Glassmorphic Design) */}
          <div className="relative z-20 w-full flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap px-1 sm:px-0">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-black/35 sm:bg-white/30 backdrop-blur-md border border-white/30 sm:border-white/40 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm">
              <span className="hidden xs:inline">Aesthetic & Wellness Sanctuary</span>
              <span className="xs:hidden">Aesthetic & Wellness</span>
            </div>

            <div className="inline-grid grid-cols-[auto_auto_1fr] items-center gap-x-2 px-3 sm:px-3.5 py-1.5 rounded-2xl bg-black/35 sm:bg-white/25 backdrop-blur-md border border-white/30 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-white/95 text-left">
              <span className="font-medium uppercase">Monday - Sunday</span>
              <span className="font-medium">:</span>
              <span className="font-medium uppercase">10AM - 7PM</span>
              <span className="font-extrabold text-pink-200 uppercase">Tuesday</span>
              <span className="font-extrabold text-pink-200">:</span>
              <span className="font-extrabold text-pink-200 uppercase">Closed</span>
            </div>
          </div>

          {/* Floating Luxury Editorial Callouts (With Safe Horizontal Inset on Laptop to Avoid Side Arrows) */}
          <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 my-auto pt-4 sm:pt-10 px-2 sm:px-12 md:px-16 lg:px-20">
            {/* Left subtle doctor-led badge (desktop) */}
            <div className="hidden lg:block max-w-xs space-y-2 text-white drop-shadow-md">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-extrabold uppercase tracking-widest text-champagne-light">
                <span>JP Nagar 4th Phase • Bangalore</span>
              </div>
              <p className="text-xs text-white/85 font-light leading-relaxed">
                Doctor-led clinical dermatology fused with holistic inner vitality.
              </p>
            </div>

            {/* Mobile subtle location pill */}
            <div className="inline-flex lg:hidden items-center px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[9.5px] font-extrabold uppercase tracking-wider text-champagne-light shadow-sm mb-1">
              <span>JP Nagar 4th Phase • Bangalore</span>
            </div>

            {/* Right side Editorial description - Clean, unobscured layout without heavy dark box on mobile */}
            <div className="max-w-xs sm:max-w-sm md:ml-auto text-center sm:text-right space-y-1.5 text-white">
              <p className="text-[11px] sm:text-xs md:text-sm text-white/95 font-medium sm:font-light leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                Advanced aesthetic care & clinical dermatology engineered with precision. Gentle enough for daily wellbeing, powerful enough for lasting radiance.
              </p>
            </div>
          </div>

          {/* Bottom Area: Scalable Branding + Responsive Slide Controls */}
          <div className="relative z-20 w-full space-y-2 sm:space-y-3 pt-2 sm:pt-4 pb-1">
            {/* Scalable Precision Vector Typography */}
            <div className="w-full select-none pointer-events-none flex items-center justify-center" aria-hidden="true">
              <svg
                viewBox="0 0 1300 150"
                className="w-full h-auto max-h-8 sm:max-h-20 md:max-h-28 lg:max-h-36 overflow-visible"
                aria-label="THE PINK AURA"
              >
                <text
                  x="50%"
                  y="74%"
                  textAnchor="middle"
                  className="font-serif font-normal"
                  fill="rgba(255, 255, 255, 0.96)"
                  fontSize="128"
                  letterSpacing="0.04em"
                  style={{
                    filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  THE PINK AURA
                </text>
              </svg>
            </div>

            {/* Responsive Slide Controls (Accessible 44px Touch Targets) */}
            <div className="flex items-center justify-center gap-1 pt-1">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="sm:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white/90 backdrop-blur-md border border-white/20 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center group"
                  >
                    <span
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === currentSlide
                          ? 'w-7 sm:w-8 bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]'
                          : 'w-2.5 bg-white/50 group-hover:bg-white/80'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="sm:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white/90 backdrop-blur-md border border-white/20 active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="clay-card clay-card-hover rounded-3xl p-6 border border-white dark:border-aura-700/30 flex flex-col justify-between space-y-4 relative overflow-hidden group"
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
              </motion.div>
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
          <AnimatePresence>
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
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="clay-card rounded-3xl overflow-hidden border border-white transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-charcoal hover:text-aura-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-aura-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light border-t border-aura-100/60 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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

