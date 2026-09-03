import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock, Instagram, ExternalLink, ArrowRight, Flower2, UserCheck } from 'lucide-react';
import { CLINIC_INFO, FOUNDERS } from '@/data/services';

export const metadata: Metadata = {
  title: 'Contact Us — The Pink Aura Aesthetic & Wellness',
  description: 'Visit The Pink Aura in JP Nagar 4th Phase, Bangalore. Get clinic location, address, phone number, email, operating hours, and consultation details.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
          <Flower2 className="w-3.5 h-3.5 text-aura-600" />
          <span>Location & Visiting Information</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-charcoal tracking-tight">
          Connect With <span className="aura-gradient-text italic font-normal">The Pink Aura</span>
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
          We welcome you to visit our aesthetic sanctuary in JP Nagar, Bangalore. Our team is ready to assist you with every detail of your consultation.
        </p>
      </div>

      {/* Main Grid: Contact Details & Interactive Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 clay-card bg-white/95 dark:bg-[#250512]/95 rounded-4xl p-8 sm:p-10 border border-white dark:border-aura-700/30 shadow-clay-lg dark:shadow-none space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-charcoal">Clinic Information</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-charcoal">
                    Phone & WhatsApp Direct Line
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${CLINIC_INFO.rawPhone || CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm text-aura-700 font-bold hover:underline"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <a
                      href={CLINIC_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] px-3 py-1 rounded-full shadow-sm transition-all"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-1">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-xs sm:text-sm text-aura-600 font-medium hover:underline block"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-1">
                    Operating Hours
                  </h4>
                  <div className="text-xs sm:text-sm text-charcoal-muted font-light flex flex-col">
                    <span>{CLINIC_INFO.hours}</span>
                    <span className="text-aura-700 dark:text-pink-300 font-semibold text-xs mt-0.5">{CLINIC_INFO.closed}</span>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full clay-badge flex items-center justify-center text-aura-600 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-1">
                    Social Media
                  </h4>
                  <a
                    href={CLINIC_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-aura-600 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>@thepinkaura_official</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-aura-100 dark:border-aura-800/40">
            <Link
              href="/register"
              className="clay-btn-primary w-full py-3.5 px-6 rounded-full text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Begin Consultation Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Map Location Preview */}
        <div className="lg:col-span-7 clay-card bg-white/95 dark:bg-[#250512]/95 rounded-4xl p-4 sm:p-6 border border-white dark:border-aura-700/30 shadow-clay-lg dark:shadow-none flex flex-col justify-between">
          <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden bg-aura-100 dark:bg-[#1E040D] border border-aura-200 dark:border-aura-800/40">
            {/* Embedded Google Map iframe */}
            <iframe
              title="The Pink Aura Location Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.029365171525!2d77.5951944!3d12.905833300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzIxLjAiTiA3N8KwMzUnNDIuNyJF!5e0!3m2!1sen!2sin!4v1787991568406!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 text-xs text-charcoal-muted">
            <span>Landmark: Near Delmia Circle, 4th Phase JP Nagar, Dollars Colony.</span>
            <a
              href="https://maps.google.com/?q=JP+Nagar+4th+Phase+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aura-600 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>Get Driving Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Leadership & Direct Founder Contacts */}
      <section className="space-y-8 pt-4">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 text-aura-600" />
            <span>Founding Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Direct Founder Inquiries
          </h2>
          <p className="text-sm text-charcoal-muted font-light">
            Connect directly with the founders of The Pink Aura for personalized guidance and executive consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="clay-card bg-white/95 dark:bg-[#250512]/95 rounded-4xl p-8 border border-white dark:border-aura-700/30 shadow-clay-lg dark:shadow-none flex flex-col justify-between space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shrink-0 shadow-md border-2 border-white dark:border-aura-700/40">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{founder.name}</h3>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-aura-600 dark:text-aura-300">
                    {founder.role}
                  </p>
                  <p className="text-[11px] text-charcoal-muted dark:text-pink-200/70 italic font-light">
                    {founder.qualifications}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-aura-100/80 dark:border-aura-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 bg-aura-50/60 dark:bg-[#20040E]/90 border border-transparent dark:border-aura-700/30 p-4 rounded-2xl">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-aura-800 dark:text-aura-200 block">
                    Direct Phone Number
                  </span>
                  <span className="font-mono text-sm font-bold text-charcoal">
                    {founder.phone}
                  </span>
                </div>
                <a
                  href={`tel:${founder.rawPhone || founder.phone?.replace(/[^0-9+]/g, '')}`}
                  className="clay-btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {founder.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
