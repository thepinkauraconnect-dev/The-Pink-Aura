import type { BlogPost } from '@/types/blog';
import { POSTS_SKIN_HAIR } from './posts-skin-hair';
import { POSTS_BODY_WELLNESS } from './posts-body-wellness';

export const BLOG_AUTHOR = 'The Pink Aura Clinical Team';

const WORDS_PER_MINUTE = 200;

function countWords(post: Omit<BlogPost, 'readingMinutes'>): number {
  const text = [
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

/** All posts, newest first. Reading time is calculated from the content. */
export const BLOG_POSTS: BlogPost[] = [...POSTS_SKIN_HAIR, ...POSTS_BODY_WELLNESS]
  .map((p) => ({ ...p, readingMinutes: Math.max(3, Math.round(countWords(p) / WORDS_PER_MINUTE)) }))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
