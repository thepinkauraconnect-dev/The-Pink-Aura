/**
 * Custom next/image loader — serves pre-generated WebP files directly from /public.
 * For rendered widths <= 640px it swaps in the "-640.webp" variant created by
 * scripts/optimize-images.mjs. No server-side image optimisation is used.
 */
type LoaderArgs = { src: string; width: number; quality?: number };

const SMALL = 640;

export default function imageLoader({ src, width }: LoaderArgs): string {
  if (/^https?:\/\//.test(src)) return src;
  if (width <= SMALL && src.endsWith('.webp') && !src.endsWith('-640.webp')) {
    return src.replace(/\.webp$/, '-640.webp');
  }
  return src;
}
