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

    const getSystemOrTimeTheme = () => {
      // 1. Phone / OS System Dark Mode Preference
      if (typeof window !== 'undefined' && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.matches) return true;
      }
      // 2. Automatic Day / Night Time Fallback (Night: 7 PM to 6 AM)
      const hour = new Date().getHours();
      return hour >= 19 || hour < 6;
    };

    const isDark = savedTheme ? savedTheme === 'dark' : getSystemOrTimeTheme();
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen to live Phone / System OS theme changes if user hasn't explicitly overridden it
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
          const nextDark = e.matches;
          setDarkMode(nextDark);
          if (nextDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
      }
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
                    className="absolute top-full left-4 right-4 md:left-6 md:right-6 mt-3 clay-card bg-white/98 dark:bg-[#290613]/98 backdrop-blur-2xl rounded-3xl p-7 grid grid-cols-3 gap-6 shadow-clay-lg z-50 border border-white dark:border-aura-700/30"
                  >
                    <div className="col-span-2 grid grid-cols-2 gap-6 border-r border-aura-100/80 dark:border-aura-800/40 pr-6">
                      {SERVICE_GROUPS.slice(0, 3).map((group, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-[10px] font-extrabold tracking-widest text-aura-600 dark:text-aura-300 uppercase">
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {group.categories.map((cat) => (
                              <li key={cat.id}>
                                <Link
                                  href={`/services/${cat.slug}`}
                                  className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-600 dark:hover:text-aura-300 hover:translate-x-1 transition-all inline-flex items-center gap-1 font-medium"
                                >
                                  <span>{cat.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Surgical & CTA */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[10px] font-extrabold tracking-widest text-aura-600 dark:text-aura-300 uppercase mb-2">
                          {SERVICE_GROUPS[3].title}
                        </h4>
                        <ul className="space-y-1.5 mb-4">
                          {SERVICE_GROUPS[3].categories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-xs text-charcoal-muted dark:text-pink-200/80 hover:text-aura-600 dark:hover:text-aura-300 hover:translate-x-1 transition-all inline-flex items-center gap-1 font-medium"
                              >
                                <span>{cat.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-br from-aura-50/95 via-rose-50/40 to-aura-100/60 dark:from-[#3B091D]/90 dark:via-[#290513]/90 dark:to-[#1C030D]/90 border border-aura-200/80 dark:border-aura-700/40 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 text-aura-700 dark:text-aura-200 font-serif font-bold text-sm">
                          <Flower2 className="w-4 h-4 text-aura-600 dark:text-aura-300 shrink-0" />
                          <span>Personalized Consultation</span>
                        </div>
                        <p className="text-[11px] text-charcoal-muted dark:text-pink-200/70 leading-relaxed font-light">
                          Receive a custom beauty roadmap tailored to your skin & aesthetic goals.
                        </p>
                        <div className="pt-1">
                          <Link
                            href="/register"
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-aura-700 dark:text-aura-200 hover:text-aura-900 dark:hover:text-white group"
                          >
                            <span>Begin Your Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-aura-600 dark:text-aura-300" />
                          </Link>
                        </div>
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

              <div className="pt-2 border-t border-aura-100 dark:border-aura-800/40">
                <span className="text-xs font-bold uppercase tracking-wider text-aura-600 dark:text-aura-300 block mb-2">
                  Service Categories
                </span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {SERVICE_CATEGORIES.filter((c) => c.group !== 'WELLNESS').map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-charcoal-muted dark:text-pink-200/80 hover:text-aura-600 dark:hover:text-aura-300 py-1 font-medium"
                    >
                      {cat.title}
                    </Link>
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
