'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Instagram, ArrowUpRight, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, SERVICE_CATEGORIES } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-aura-950 to-[#230D16] text-white pt-16 pb-8 border-t border-aura-800/40 relative overflow-hidden">
      {/* Background Decorative Aura Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-aura-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-aura-800/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/home" className="flex items-center group">
              <div className="relative h-20 sm:h-24 w-80 sm:w-[420px] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo-header.webp"
                  alt="The Pink Aura"
                  fill
                  sizes="(max-width: 640px) 320px, 420px"
                  className="object-contain object-left brightness-110 drop-shadow-[0_0_16px_rgba(248,187,208,0.45)]"
                />
              </div>
            </Link>

            <p className="text-sm text-aura-200/80 leading-relaxed max-w-md font-light">
              A sophisticated destination for aesthetics, beauty, hair care, body transformation, wellness, and spiritual counselling. Sculpting natural radiance and elevating your vital inner aura.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-aura-400/20 max-w-md">
              <p className="text-xs italic text-champagne-light font-serif text-center">
                "{CLINIC_INFO.tagline}"
              </p>
            </div>

            {/* Consultation Banner */}
            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-aura-600 hover:bg-aura-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-aura-glow hover:scale-105"
              >
                <span>Begin Your Journey with The Pink Aura</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-aura-300">
              Explore
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/home" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  About The Pink Aura
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Service Directory
                </Link>
              </li>
              <li>
                <Link href="/services/wellness" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Lifestyle & Wellness
                </Link>
              </li>
              <li>
                <Link href="/services/spiritual-wellness" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Spiritual Counselling
                </Link>
              </li>
              <li>
                <Link href="/services/iv-drip-therapy" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  IV Drip Therapy
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Consultation Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-aura-200/70 hover:text-white transition-colors min-h-[32px] flex items-center py-1">
                  Blog & Skin Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-aura-300">
              Service Categories
            </h3>
            <ul className="space-y-1.5 text-xs">
              {SERVICE_CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-aura-200/70 hover:text-white transition-colors truncate flex items-center min-h-[32px] py-1"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-aura-400 hover:text-aura-300 transition-colors font-medium inline-flex items-center gap-1 min-h-[32px] py-1 mt-0.5"
                >
                  <span>View All 13 Categories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-aura-300">
              Clinic Location
            </h3>

            <div className="space-y-3 text-xs text-aura-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aura-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  #112, 1st Floor, 16th Cross, Near Delmia Circle, 4th Phase JP Nagar, Dollars Colony, Bangalore – 560078
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-aura-400 shrink-0" />
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${CLINIC_INFO.rawPhone || CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="hover:text-white font-medium transition-colors"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <span className="text-aura-400/40">•</span>
                  <a
                    href={CLINIC_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aura-400 shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-white transition-colors underline decoration-aura-600 underline-offset-4"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-aura-400 mt-0.5">🕒</span>
                <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-2 text-xs">
                  <span>Monday - Sunday</span>
                  <span>:</span>
                  <span>10AM - 7PM</span>
                  <span className="text-pink-300 font-extrabold">Tuesday</span>
                  <span className="text-pink-300 font-extrabold">:</span>
                  <span className="text-pink-300 font-extrabold">Closed</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-aura-400 shrink-0" />
                <a
                  href={CLINIC_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @thepinkaura_official
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Developer Credit bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-aura-300/60 font-light">
          <p>© {new Date().getFullYear()} The Pink Aura. All rights reserved.</p>

          {/* Developed by Vyome Credit Badge */}
          <a
            href="https://vyome.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full clay-badge bg-gradient-to-r from-[#FFF0F4] via-[#FCE4EC] to-[#F8C8DC] border border-white/90 text-aura-750 hover:text-aura-900 hover:scale-105 shadow-clay-sm transition-all duration-300 group"
          >
            <span className="text-[11px] font-medium tracking-wide text-aura-700">
              Developed by
            </span>
            <div className="relative w-6 h-6 shrink-0">
              <Image
                src="/images/Vyome/Vyome%20Logo.webp"
                alt="Vyome Logo"
                fill
                sizes="24px"
                className="object-contain filter drop-shadow-[0_0_8px_rgba(233,30,99,0.45)] group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="font-extrabold text-xs text-aura-750 group-hover:text-aura-900 tracking-wider uppercase">
              Vyome
            </span>
          </a>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link href="/privacy" className="hover:text-aura-200 transition-colors min-h-[36px] flex items-center px-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-aura-200 transition-colors min-h-[36px] flex items-center px-1">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-aura-200 transition-colors min-h-[36px] flex items-center px-1">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
