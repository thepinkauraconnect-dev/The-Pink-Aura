'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Flower2 } from 'lucide-react';
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-6 py-3 relative transition-all duration-500 rounded-full ${
          scrolled
            ? 'clay-card bg-white/90 backdrop-blur-xl shadow-clay-md border border-white'
            : 'bg-white/70 backdrop-blur-md border border-white/80 shadow-clay-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full clay-badge p-1 group-hover:scale-105 transition-transform flex items-center justify-center">
              <Image
                src="/images/logo/Logo%20the%20pink%20aura.png"
                alt="The Pink Aura Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-charcoal group-hover:text-aura-600 transition-colors">
                The Pink Aura
              </span>
              <span className="text-[9px] tracking-widest uppercase font-bold text-aura-600 -mt-1">
                Aesthetic & Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
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
                    className="absolute top-full left-4 right-4 md:left-6 md:right-6 mt-3 clay-card bg-white/98 backdrop-blur-2xl rounded-3xl p-7 grid grid-cols-3 gap-6 shadow-clay-lg z-50 border border-white"
                  >
                    <div className="col-span-2 grid grid-cols-2 gap-6 border-r border-aura-100/80 pr-6">
                      {SERVICE_GROUPS.slice(0, 4).map((group, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-[10px] font-extrabold tracking-widest text-aura-600 uppercase">
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {group.categories.map((cat) => (
                              <li key={cat.id}>
                                <Link
                                  href={`/services/${cat.slug}`}
                                  className="text-xs text-charcoal-muted hover:text-aura-600 hover:translate-x-1 transition-all inline-flex items-center gap-1 font-medium"
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
                        <h4 className="text-[10px] font-extrabold tracking-widest text-aura-600 uppercase mb-2">
                          {SERVICE_GROUPS[4].title}
                        </h4>
                        <ul className="space-y-1.5 mb-4">
                          {SERVICE_GROUPS[4].categories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-xs text-charcoal-muted hover:text-aura-600 hover:translate-x-1 transition-all inline-flex items-center gap-1 font-medium"
                              >
                                <span>{cat.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-br from-aura-50/95 via-rose-50/40 to-aura-100/60 border border-aura-200/80 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 text-aura-700 font-serif font-bold text-sm">
                          <Flower2 className="w-4 h-4 text-aura-600 shrink-0" />
                          <span>Personalized Consultation</span>
                        </div>
                        <p className="text-[11px] text-charcoal-muted leading-relaxed font-light">
                          Receive a custom beauty roadmap tailored to your skin & wellness goals.
                        </p>
                        <div className="pt-1">
                          <Link
                            href="/register"
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-aura-700 hover:text-aura-900 group"
                          >
                            <span>Begin Your Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-aura-600" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/services/wellness"
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-aura-600 px-3 py-1.5 rounded-full ${
                pathname === '/services/wellness' ? 'clay-badge text-aura-600 font-extrabold' : 'text-charcoal-muted'
              }`}
            >
              Wellness
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-aura-600 px-3 py-1.5 rounded-full ${
                pathname === '/contact' ? 'clay-badge text-aura-600 font-extrabold' : 'text-charcoal-muted'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/register"
              className="clay-btn-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/register"
              className="clay-btn-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider sm:hidden"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-full clay-badge text-charcoal hover:bg-aura-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden mt-3 max-w-7xl mx-auto clay-card bg-white/98 backdrop-blur-2xl p-6 shadow-clay-lg overflow-hidden"
          >
            <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
              <Link
                href="/home"
                className="block text-base font-bold text-charcoal hover:text-aura-600 py-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-base font-bold text-charcoal hover:text-aura-600 py-1"
              >
                About Us
              </Link>

              <div className="pt-2 border-t border-aura-100">
                <span className="text-xs font-bold uppercase tracking-wider text-aura-600 block mb-2">
                  Service Categories
                </span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services/${cat.slug}`}
                      className="text-sm text-charcoal-muted hover:text-aura-600 py-1 font-medium"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-aura-100 space-y-2">
                <Link
                  href="/contact"
                  className="block text-base font-bold text-charcoal hover:text-aura-600 py-1"
                >
                  Contact & Location
                </Link>
                <Link
                  href="/register"
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
