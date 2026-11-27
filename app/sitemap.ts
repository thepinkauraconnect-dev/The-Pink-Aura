import type { MetadataRoute } from 'next';
import { SERVICE_CATEGORIES } from '@/data/services';
import { BLOG_POSTS } from '@/data/blog';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    lastModified: Date = now,
  ) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority });

  return [
    page('/', 1.0, 'weekly'),
    page('/home', 1.0, 'weekly'),
    page('/services', 0.9, 'weekly'),
    ...SERVICE_CATEGORIES.map((c) => page(`/services/${c.slug}`, 0.9, 'monthly')),
    page('/blog', 0.8, 'weekly'),
    ...BLOG_POSTS.map((p) => page(`/blog/${p.slug}`, 0.7, 'monthly', new Date(p.updatedAt ?? p.publishedAt))),
    page('/about', 0.7, 'monthly'),
    page('/contact', 0.8, 'monthly'),
    page('/register', 0.8, 'monthly'),
    page('/privacy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
  ];
}
