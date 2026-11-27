import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';
import BlogCard from '@/components/blog/BlogCard';
import JsonLd from '@/components/seo/JsonLd';
import { absoluteUrl, breadcrumbJsonLd, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Skin, Hair & Wellness Blog — Expert Guides from JP Nagar, Bangalore',
  description:
    'Expert guides on laser hair reduction, medi-facials, Botox & fillers, hair fall treatment, hair transplants, permanent makeup, body contouring, IV drips and bridal skin care from The Pink Aura, Bangalore.',
  keywords: [
    'skin care blog Bangalore',
    'aesthetic treatment guide',
    'hair fall treatment guide',
    'laser hair reduction guide',
    'bridal skin care tips',
  ],
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', type: 'website' },
};

export default function BlogIndexPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} Blog`,
    url: absoluteUrl('/blog'),
    publisher: { '@id': absoluteUrl('/#clinic') },
    blogPost: BLOG_POSTS.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.publishedAt,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <JsonLd
        data={[
          blogJsonLd,
          breadcrumbJsonLd([
            { name: 'Home', path: '/home' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />

      <header className="text-center space-y-4 max-w-3xl mx-auto animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-800 text-xs font-extrabold uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5 text-aura-600" />
          <span>The Aura Journal</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal tracking-tight leading-tight">
          Skin, Hair &amp; Wellness Guides
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
          Honest, clinic-side answers about aesthetic treatments — how they work, who they suit, recovery and results —
          from our team in JP Nagar, Bangalore.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, i) => (
          <BlogCard key={post.slug} post={post} priority={i < 3} />
        ))}
      </div>

      <section className="clay-card-dark text-white rounded-5xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">Have a question about your skin or hair?</h2>
        <p className="text-sm text-white/85 font-light max-w-xl mx-auto">
          Every body is different. Book a consultation and our doctors will build a plan around your goals.
        </p>
        <Link
          href="/register"
          className="clay-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest"
        >
          Book Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
