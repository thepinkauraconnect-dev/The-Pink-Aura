/** @type {import('next').NextConfig} */
const ONE_DAY = 60 * 60 * 24;

const nextConfig = {
  poweredByHeader: false,
  images: {
    // All images are pre-optimised to WebP (+ a -640 variant) by scripts/optimize-images.mjs.
    // The custom loader picks the right file, so Vercel Image Optimization is never used
    // (keeps the project inside the Hobby/free tier limits).
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    const cache = [
      // Browsers reuse assets for a day, then revalidate in the background (cheap 304s).
      // Filenames are not content-hashed, so a long max-age would keep replaced images stale.
      { key: 'Cache-Control', value: `public, max-age=${ONE_DAY}, stale-while-revalidate=${ONE_DAY * 7}` },
    ];
    return [
      { source: '/images/:path*', headers: cache },
      { source: '/Videos/:path*', headers: cache },
      { source: '/:file(landing_page_hero_logo.*|logo-header.*|og-image.jpg)', headers: cache },
      // Explicit HLS content types (".ts" is otherwise ambiguous)
      { source: '/Videos/hls/:path*.m3u8', headers: [{ key: 'Content-Type', value: 'application/vnd.apple.mpegurl' }] },
      { source: '/Videos/hls/:path*.ts', headers: [{ key: 'Content-Type', value: 'video/mp2t' }] },
    ];
  },
};

export default nextConfig;
