import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogCard({
  post,
  priority = false,
  headingLevel = 2,
}: {
  post: BlogPost;
  priority?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className="group clay-card clay-card-hover rounded-4xl overflow-hidden border border-white dark:border-aura-700/30 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-4 left-4 text-[10px] uppercase font-extrabold tracking-wider text-white bg-aura-900/80 backdrop-blur-md px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <div className="p-6 space-y-3 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-[11px] text-charcoal-muted font-medium">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readingMinutes} min read
            </span>
          </div>
          <Heading className="font-serif text-xl font-bold text-charcoal group-hover:text-aura-600 transition-colors leading-snug">
            {post.title}
          </Heading>
          <p className="text-xs text-charcoal-muted font-light leading-relaxed line-clamp-3">{post.excerpt}</p>
          <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-aura-600">
            Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </article>
  );
}
