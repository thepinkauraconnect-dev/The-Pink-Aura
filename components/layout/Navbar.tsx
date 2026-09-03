'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Flower2, Sun, Moon } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/services';

const SERVICE_GROUPS = [
  {
    title: 'BEAUTY & AESTHETICS',
    categories: SERVICE_CATEGORIES.filter((c) => c.group === 'BEAUTY'),
  },
  {
    title: 'HAIR RESTORATION',
    categories: SERVICE_CATEGORIES.filter((c) => c.group === 'HAIR'),
  },
  {
    title: 'BODY CONTOURING',
    categories: SERVICE_CATEGORIES.filter((c) => c.group === 'BODY'),
  },
  {
    title: 'WELLNESS & SPIRITUAL',
    categories: SERVICE_CATEGORIES.filter((c) => c.group === 'WELLNESS'),
  },
  {
    title: 'SURGICAL PROCEDURES',
    categories: SERVICE_CATEGORIES.filter((c) => c.group === 'SURGICAL'),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4.5 pb-1.5 sm:pb-2.5 px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-3.5 sm:px-6 py-1 sm:py-1.5 relative transition-all duration-500 rounded-full ${
          scrolled
            ? 'clay-card bg-[#F8BBD0]/95 dark:bg-[#3D0C1E]/95 backdrop-blur-xl shadow-clay-md border border-white/90 dark:border-aura-700/30'
            : 'clay-badge bg-[#FFF5F8]/95 dark:bg-[#2E0817]/95 backdrop-blur-md border border-white/90 dark:border-aura-700/30 shadow-clay-sm'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Header Brand Logo Image */}
          <Link href="/home" className="flex items-center group shrink-0">
            <div className="relative h-11 xs:h-13 sm:h-16 md:h-18 lg:h-20 w-36 xs:w-48 sm:w-64 md:w-76 lg:w-[350px] shrink-0 -my-2.5 sm:-my-4 lg:-my-5 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-header.png"
                alt="The Pink Aura"
                fill
                className="object-contain object-left transition-all duration-300 dark:brightness-125 dark:drop-shadow-[0_0_16px_rgba(248,187,208,0.55)]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            <Link
              href="/home"
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-aura-600 px-3 py-1.5 rounded-full ${
                pathname === '/home' ? 'clay-badge text-aura-600 font-extrabold' : 'text-charcoal-muted'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-aura-600 px-3 py-1.5 rounded-full ${
                pathname === '/about' ? 'clay-badge text-aura-600 font-extrabold' : 'text-charcoal-muted'
              }`}
            >
              About Us
            </Link>

            {/* Mega Menu Toggle */}
            <div
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all hover:text-aura-600 px-3 py-1.5 rounded-full ${
                  pathname.startsWith('/services') ? 'clay-badge text-aura-600 font-extrabold' : 'text-charcoal-muted'
                }`}
              >
                <span>Services & Treatments</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    megaMenuOpen ? 'rotate-180 text-aura-600' : ''
                  }`}
                />
              </button>

              {/* Desktop Mega Menu Dropdown */}
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute top-full left-2 right-2 md:left-4 md:right-4 mt-3 clay-card bg-white/98 dark:bg-[#290613]/98 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-4 gap-6 shadow-clay-lg z-50 border border-white dark:border-aura-700/30"
                  >
                    {/* Column 1: Beauty & Aesthetics */}
                    <div className="space-y-3 border-r-0 lg:border-r border-aura-100/80 dark:border-aura-800/40 lg:pr-4">
                      <div className="pb-1.5 border-b border-aura-200/80 dark:border-aura-700/50 flex items-center justify-between">
                        <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-aura-950 dark:text-pink-100 bg-aura-100/90 dark:bg-aura-900/70 px-2.5 py-1 rounded-md border border-aura-200 dark:border-aura-700/50 shadow-xs">
                          {SERVICE_GROUPS[0].title}
                        </span>
                      </div>
                      <ul className="space-y-2 pt-1">
                        {SERVICE_GROUPS[0].categories.map((cat) => (
                          <li key={cat.id}>
                            <Link
                              href={`/services/${cat.slug}`}
                              className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-700 dark:hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 font-normal group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-aura-400 dark:bg-aura-500 shrink-0 group-hover:scale-125 transition-transform" />
                              <span>{cat.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Hair Restoration & Body Contouring */}
                    <div className="space-y-5 border-r-0 lg:border-r border-aura-100/80 dark:border-aura-800/40 lg:pr-4">
                      <div className="space-y-3">
                        <div className="pb-1.5 border-b border-aura-200/80 dark:border-aura-700/50 flex items-center justify-between">
                          <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-aura-950 dark:text-pink-100 bg-aura-100/90 dark:bg-aura-900/70 px-2.5 py-1 rounded-md border border-aura-200 dark:border-aura-700/50 shadow-xs">
                            {SERVICE_GROUPS[1].title}
                          </span>
                        </div>
                        <ul className="space-y-2 pt-1">
                          {SERVICE_GROUPS[1].categories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-700 dark:hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 font-normal group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-aura-400 dark:bg-aura-500 shrink-0 group-hover:scale-125 transition-transform" />
                                <span>{cat.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="pb-1.5 border-b border-aura-200/80 dark:border-aura-700/50 flex items-center justify-between">
                          <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-aura-950 dark:text-pink-100 bg-aura-100/90 dark:bg-aura-900/70 px-2.5 py-1 rounded-md border border-aura-200 dark:border-aura-700/50 shadow-xs">
                            {SERVICE_GROUPS[2].title}
                          </span>
                        </div>
                        <ul className="space-y-2 pt-1">
                          {SERVICE_GROUPS[2].categories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-700 dark:hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 font-normal group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-aura-400 dark:bg-aura-500 shrink-0 group-hover:scale-125 transition-transform" />
                                <span>{cat.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Column 3: Wellness & Spiritual & Surgical Procedures */}
                    <div className="space-y-5 border-r-0 lg:border-r border-aura-100/80 dark:border-aura-800/40 lg:pr-4">
                      <div className="space-y-3">
                        <div className="pb-1.5 border-b border-aura-200/80 dark:border-aura-700/50 flex items-center justify-between">
                          <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-aura-950 dark:text-pink-100 bg-aura-100/90 dark:bg-aura-900/70 px-2.5 py-1 rounded-md border border-aura-200 dark:border-aura-700/50 shadow-xs">
                            {SERVICE_GROUPS[3].title}
                          </span>
                        </div>
                        <ul className="space-y-2 pt-1">
                          {SERVICE_GROUPS[3].categories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-700 dark:hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 font-normal group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-aura-400 dark:bg-aura-500 shrink-0 group-hover:scale-125 transition-transform" />
                                <span>{cat.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="pb-1.5 border-b border-aura-200/80 dark:border-aura-700/50 flex items-center justify-between">
                          <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-aura-950 dark:text-pink-100 bg-aura-100/90 dark:bg-aura-900/70 px-2.5 py-1 rounded-md border border-aura-200 dark:border-aura-700/50 shadow-xs">
                            {SERVICE_GROUPS[4].title}
                          </span>
                        </div>
                        <ul className="space-y-2 pt-1">
                          {SERVICE_GROUPS[4].categories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-700 dark:hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 font-normal group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-aura-400 dark:bg-aura-500 shrink-0 group-hover:scale-125 transition-transform" />
                                <span>{cat.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Column 4: Consultation CTA & Directory Link */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-aura-50/95 via-rose-50/40 to-aura-100/60 dark:from-[#3B091D]/90 dark:via-[#290513]/90 dark:to-[#1C030D]/90 border border-aura-200/80 dark:border-aura-700/40 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 text-aura-700 dark:text-aura-200 font-serif font-bold text-sm">
                          <Flower2 className="w-4 h-4 text-aura-600 dark:text-aura-300 shrink-0" />
                          <span>Personalized Care</span>
                        </div>
                        <p className="text-[11px] text-charcoal-muted dark:text-pink-200/70 leading-relaxed font-light">
                          Receive a custom beauty & inner wellness roadmap tailored to your goals.
                        </p>
                        <div className="pt-1">
                          <Link
                            href="/register"
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-aura-700 dark:text-aura-200 hover:text-aura-900 dark:hover:text-white group"
                          >
                            <span>Begin Your Journey</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-aura-600 dark:text-aura-300" />
                          </Link>
                        </div>
                      </div>

                      <div className="pt-1">
                        <Link
                          href="/services"
                          className="clay-btn-primary w-full py-2.5 px-4 text-[11px] font-extrabold uppercase tracking-wider inline-flex items-center justify-center gap-1.5"
                        >
                          <span>View All 12 Categories</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-aura-600 px-3 py-1.5 rounded-full ${
                pathname === '/contact' ? 'clay-badge text-aura-600 font-extrabold' : 'text-charcoal-muted'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action: Night Mode Toggle & CTA (>= 1024px) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Night / Dark Mode"
              title={darkMode ? "Switch to Light Mode" : "Switch to Night / Dark Mode"}
              className="p-2.5 rounded-full clay-badge text-aura-750 hover:text-aura-900 transition-all flex items-center justify-center hover:scale-105 shrink-0"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-aura-750" />}
            </button>
            <Link
              href="/register"
              className="clay-btn-primary px-5 py-2 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shrink-0"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile & Tablet Right Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Night / Dark Mode"
              title={darkMode ? "Switch to Light Mode" : "Switch to Night / Dark Mode"}
              className="p-1.5 sm:p-2 rounded-full clay-badge text-aura-750 transition-all flex items-center justify-center shrink-0"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-aura-750" />}
            </button>
            <Link
              href="/register"
              className="clay-btn-primary px-3 py-1.5 sm:px-4 sm:py-2 text-[9.5px] sm:text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Begin Your Journey</span>
              <span className="sm:hidden">Consult</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 sm:p-2 rounded-full clay-badge text-charcoal hover:bg-aura-100 transition-colors shrink-0"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden mt-2 sm:mt-3 max-w-7xl mx-auto clay-card bg-white/98 dark:bg-[#20040E]/98 backdrop-blur-2xl p-5 sm:p-6 shadow-clay-lg border border-white dark:border-aura-700/40 overflow-hidden"
          >
            <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
              <Link
                href="/home"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-charcoal dark:text-pink-100 hover:text-aura-600 py-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-charcoal dark:text-pink-100 hover:text-aura-600 py-1"
              >
                About Us
              </Link>

              <div className="pt-2 border-t border-aura-100 dark:border-aura-800/40 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-aura-800 dark:text-aura-200 block mb-1">
                  Service Catalogue
                </span>
                <div className="space-y-3 pl-1">
                  {SERVICE_GROUPS.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-1.5">
                      <div className="pb-1 border-b border-aura-200/60 dark:border-aura-800/40">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-aura-900 dark:text-pink-100 bg-aura-100/90 dark:bg-aura-900/70 px-2 py-0.5 rounded border border-aura-200 dark:border-aura-700/50">
                          {group.title}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-1 pl-2">
                        {group.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/services/${cat.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-600 py-1 font-medium flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-aura-400 shrink-0" />
                            <span>{cat.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-aura-100 dark:border-aura-800/40 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-bold text-charcoal dark:text-pink-100 hover:text-aura-600 py-1"
                >
                  Contact & Location
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="clay-btn-primary w-full mt-4 flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider"
                >
                  <span>Begin Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
