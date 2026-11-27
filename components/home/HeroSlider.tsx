'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2, Sparkles } from 'lucide-react';
import HeroVideo from './HeroVideo';

type HeroSlide = {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

const HLS = (name: string) => ({
  src: `/Videos/hls/${name}/master.m3u8`,
  poster: `/Videos/hls/${name}/poster.webp`,
});

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-slide-main',
    type: 'image',
    src: '/images/hero/hero.webp',
    alt: 'The Pink Aura Luxury Sanctuary',
    className: 'object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000',
  },
  {
    id: 'hero-slide-vid-1',
    type: 'video',
    ...HLS('hero_display_1'),
    alt: 'The Pink Aura Luxury Care Video 1',
    className: 'object-cover object-center',
  },
  {
    id: 'hero-slide-retreat',
    type: 'image',
    src: '/images/hero/Dreamy%20Pink%20Spa%20Beauty%20Retreat.webp',
    alt: 'The Pink Aura Luxury Spa Beauty Retreat',
    className: 'object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000',
  },
  {
    id: 'hero-slide-vid-2',
    type: 'video',
    ...HLS('hero_display_2'),
    alt: 'The Pink Aura Exercise & Fitness Video',
    className: 'object-cover object-[18%_center] sm:object-center transition-all duration-700',
  },
  {
    id: 'hero-slide-hair-spa',
    type: 'image',
    src: '/images/hero/Dreamy%20Pink%20Hair%20Regeneration%20Spa.webp',
    alt: 'The Pink Aura Hair Regeneration Spa',
    className: 'object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000',
  },
  {
    id: 'hero-slide-vid-3',
    type: 'video',
    ...HLS('hero_display_3'),
    alt: 'The Pink Aura Meditation & Wellness Video',
    className: 'object-cover object-center',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Image slides auto-advance on desktop only; on mobile/touch the user taps next,
  // so videos are never streamed on phones unless the visitor asks for them.
  useEffect(() => {
    const current = HERO_SLIDES[currentSlide];
    if (current.type === 'image') {
      setIsVideoLoading(false);
      const isMobile = window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
      if (isMobile) return;
      const timer = setTimeout(nextSlide, 7000);
      return () => clearTimeout(timer);
    }
    setIsVideoLoading(true);
  }, [currentSlide, nextSlide]);

  return (
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
                <HeroVideo
                  src={HERO_SLIDES[currentSlide].src}
                  poster={HERO_SLIDES[currentSlide].poster as string}
                  label={HERO_SLIDES[currentSlide].alt}
                  onEnded={nextSlide}
                  onLoadingChange={setIsVideoLoading}
                  className={HERO_SLIDES[currentSlide].className || 'object-cover object-center'}
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
  );
}
