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
            <Link href="/home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white/10 p-1 border border-aura-400/40 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo/Logo%20the%20pink%20aura.png"
                  alt="The Pink Aura Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  The Pink Aura
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-aura-300">
                  Aesthetic & Wellness Centre
                </span>
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-aura-300">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/home" className="text-aura-200/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-aura-200/70 hover:text-white transition-colors">
                  About The Pink Aura
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-aura-200/70 hover:text-white transition-colors">
                  Service Directory
                </Link>
              </li>
              <li>
                <Link href="/services/wellness" className="text-aura-200/70 hover:text-white transition-colors">
                  Lifestyle & Wellness
                </Link>
              </li>
              <li>
                <Link href="/services/spiritual-wellness" className="text-aura-200/70 hover:text-white transition-colors">
                  Spiritual Counselling
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-aura-200/70 hover:text-white transition-colors">
                  Consultation Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-aura-200/70 hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-aura-300">
              Service Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-aura-200/70 hover:text-white transition-colors truncate block"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-aura-400 hover:text-aura-300 transition-colors font-medium inline-flex items-center gap-1 mt-1"
                >
                  <span>View All 12 Categories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-aura-300">
              Clinic Location
            </h4>

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
                <span className="text-aura-400">🕒</span>
                <span>{CLINIC_INFO.hours}</span>
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
            <div className="relative w-4 h-4 shrink-0">
              <Image
                src="/images/Vyome/Vyome%20Logo.png"
                alt="Vyome Logo"
                fill
                className="object-contain filter drop-shadow-[0_0_6px_rgba(233,30,99,0.35)] group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="font-extrabold text-xs text-aura-750 group-hover:text-aura-900 tracking-wider uppercase">
              Vyome
            </span>
          </a>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-aura-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-aura-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-aura-200 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
