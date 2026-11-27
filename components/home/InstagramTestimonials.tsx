import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Play, Heart, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_TESTIMONIALS } from '@/data/testimonials';
import { CLINIC_INFO } from '@/data/services';

/**
 * Server-rendered testimonial cards that link out to Instagram reels.
 * Deliberately avoids Instagram's embed.js (≈1MB+ of third-party JS) to keep the page fast.
 */
export default function InstagramTestimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-labelledby="testimonials-heading">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
          <Heart className="w-3.5 h-3.5 text-aura-600" />
          <span>Client Stories</span>
        </div>
        <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
          Real Transformations, Shared on Instagram
        </h2>
        <p className="text-sm text-charcoal-muted font-light">
          Watch our clients talk about their experience at The Pink Aura, JP Nagar.
        </p>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {INSTAGRAM_TESTIMONIALS.map((t) => (
          <li key={t.id}>
            <a
              href={t.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${t.treatment} testimonial on Instagram`}
              className="group block clay-card clay-card-hover rounded-3xl overflow-hidden border border-white dark:border-aura-700/30 h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-aura-300 via-aura-500 to-aura-800">
                {t.thumbnail && (
                  <Image
                    src={t.thumbnail}
                    alt={`${t.treatment} client testimonial`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  <Instagram className="w-3.5 h-3.5" /> Reel
                </span>
                <span className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white" />
                </span>
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white space-y-1">
                  <p className="font-serif text-base sm:text-lg font-bold leading-tight">{t.treatment}</p>
                  <p className="hidden sm:block text-xs text-white/85 font-light leading-snug line-clamp-2">{t.caption}</p>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-aura-700 dark:text-aura-200">
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link
          href={CLINIC_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="clay-btn-secondary inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
        >
          <Instagram className="w-4 h-4" />
          <span>Follow @thepinkaura_official</span>
        </Link>
      </div>
    </section>
  );
}
