import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronDown, ChevronRight, Clock, MessageCircle, Phone, CheckCircle2, Info } from 'lucide-react';
import { BLOG_POSTS, BLOG_AUTHOR, getPost, sectionId } from '@/data/blog';
import { SERVICE_CATEGORIES, CLINIC_INFO } from '@/data/services';
import BlogCard, { formatDate } from '@/components/blog/BlogCard';
import JsonLd from '@/components/seo/JsonLd';
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd } from '@/lib/site';

interface BlogPostPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Article Not Found' };
  const path = `/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: BLOG_AUTHOR }],
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      section: post.category,
      tags: post.keywords,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.metaDescription, images: [post.cover] },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const service = SERVICE_CATEGORIES.find((c) => c.slug === post.serviceSlug);
  const related = [
    ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.serviceSlug === post.serviceSlug),
    ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.serviceSlug !== post.serviceSlug),
  ].slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: [absoluteUrl(post.cover)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: BLOG_AUTHOR, url: absoluteUrl('/about') },
    publisher: { '@id': absoluteUrl('/#clinic') },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(path) },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: 'en-IN',
  };

  return (
    <article className="pb-20">
      <JsonLd
        data={[
          articleJsonLd,
          faqJsonLd(post.faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/home' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
          ]),
        ]}
      />

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-6 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-1.5 text-[11px] font-semibold text-charcoal-muted">
          <Link href="/home" className="hover:text-aura-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-aura-600">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-aura-700 dark:text-aura-300">{post.category}</span>
        </nav>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed max-w-2xl mx-auto">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-xs text-charcoal-muted font-medium">
          <span>By {BLOG_AUTHOR}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readingMinutes} min read
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        <div className="relative w-full aspect-[16/9] rounded-3xl sm:rounded-4xl overflow-hidden shadow-clay-lg border border-white">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Table of contents */}
        <aside className="lg:col-span-4 lg:order-2">
          <div className="lg:sticky lg:top-28 space-y-6">
            <details open className="clay-card rounded-3xl p-5 border border-white group">
              <summary className="font-serif text-lg font-bold text-charcoal cursor-pointer list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
                In this article
                <ChevronDown className="w-4 h-4 text-aura-600 transition-transform group-open:rotate-180" />
              </summary>
              <ol className="mt-3 space-y-2 text-xs text-charcoal-muted">
                {post.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#${sectionId(s.heading)}`} className="hover:text-aura-600 flex gap-2">
                      <span className="text-aura-500 font-bold">{i + 1}.</span>
                      <span>{s.heading}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="hover:text-aura-600 flex gap-2">
                    <span className="text-aura-500 font-bold">{post.sections.length + 1}.</span>
                    <span>Frequently asked questions</span>
                  </a>
                </li>
              </ol>
            </details>

            {service && (
              <div className="clay-card-dark text-white rounded-3xl p-6 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-aura-300">Related treatment</span>
                <p className="font-serif text-xl font-bold leading-snug">{service.title}</p>
                <p className="text-xs text-white/80 font-light leading-relaxed">{service.subtitle}</p>
                <div className="flex flex-col gap-2 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider"
                  >
                    View treatments <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/register?category=${encodeURIComponent(service.title)}`}
                    className="clay-btn-primary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider"
                  >
                    Book consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-8 lg:order-1 space-y-10 text-charcoal">
          <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-charcoal-muted">
            {post.intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-charcoal font-medium' : ''}>
                {p}
              </p>
            ))}
          </div>

          {post.sections.map((section) => (
            <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal leading-snug">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] sm:text-base leading-relaxed text-charcoal-muted">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] sm:text-base leading-relaxed text-charcoal-muted">
                      <CheckCircle2 className="w-4 h-4 text-aura-600 shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="scroll-mt-28 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">Frequently asked questions</h2>
            <div className="space-y-3">
              {post.faqs.map((faq, i) => (
                <details key={i} open={i === 0} className="group clay-card rounded-3xl border border-white overflow-hidden">
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal">{faq.q}</h3>
                    <ChevronDown className="w-4 h-4 text-aura-600 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 pt-1 text-sm leading-relaxed text-charcoal-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="clay-card rounded-4xl p-6 sm:p-8 border border-white space-y-4">
            <h2 className="font-serif text-2xl font-bold text-charcoal">Talk to our team in JP Nagar</h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Every skin and body is different. Book a consultation at The Pink Aura and get a plan built around your
              goals, timeline and medical history.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/register"
                className="clay-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-extrabold uppercase tracking-widest"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={CLINIC_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" /> {CLINIC_INFO.phone}
              </a>
            </div>
          </section>

          <p className="flex items-start gap-2 text-[11px] leading-relaxed text-charcoal-muted/80 border-t border-aura-100 pt-5">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <span>
              This article is for general information only and is not a substitute for medical advice. Results vary
              between individuals. Please consult a qualified doctor before starting any treatment.
            </span>
          </p>
        </div>
      </div>

      {/* Related */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">Keep reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} headingLevel={3} />
          ))}
        </div>
      </section>
    </article>
  );
}
