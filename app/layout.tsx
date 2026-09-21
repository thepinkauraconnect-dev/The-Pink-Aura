import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFF3F6',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thepinkaura.co.in'),
  title: 'The Pink Aura — Aesthetic & Wellness Centre',
  description: 'A premium destination for advanced aesthetics, skin rejuvenation, laser hair reduction, body contouring, hair restoration, and spiritual wellness in JP Nagar, Bangalore.',
  keywords: [
    'The Pink Aura',
    'Aesthetic Centre Bangalore',
    'Laser Hair Reduction JP Nagar',
    'Skin Rejuvenation Bangalore',
    'Permanent Makeup PMU',
    'Hair Transplant Bangalore',
    'CoolSculpting Body Contouring',
    'Spiritual Wellness',
    'Dr Yashaswini HV',
    'Nagendra Karanik',
  ],
  authors: [{ name: 'The Pink Aura' }],
  openGraph: {
    title: 'The Pink Aura — Aesthetic & Wellness Centre',
    description: 'Enhance Your Beauty • Elevate Your Aura',
    url: 'https://thepinkaura.co.in',
    siteName: 'The Pink Aura',
    images: [
      {
        url: '/images/logo/Logo%20the%20pink%20aura.png',
        width: 1200,
        height: 630,
        alt: 'The Pink Aura Aesthetic & Wellness Centre',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/logo/Logo%20the%20pink%20aura.png',
    apple: '/images/logo/Logo%20the%20pink%20aura.png',
  },
};

import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${jakarta.variable}`}>
      <head>
        {/* FORCE Light Mode on every initial page load — Dark Mode only activates when the user clicks the toggle */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-ivory bg-aura-mesh text-charcoal antialiased flex flex-col min-h-screen selection:bg-aura-200 selection:text-aura-900 relative">
        <SmoothScrollProvider>
          {/* Subtle Silk Pattern Overlay */}
          <div className="fixed inset-0 bg-silk-pattern pointer-events-none opacity-60 z-0" />

          {/* Ambient Luxury Aura Orbs (GPU-optimized with responsive blur) */}
          <div className="absolute top-10 left-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-aura-200/25 dark:bg-[#9E1B4E]/15 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none z-0 transform-gpu transition-colors duration-700 will-change-transform" />
          <div className="absolute bottom-20 right-10 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] bg-champagne-light/25 dark:bg-[#700B34]/15 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none z-0 transform-gpu transition-colors duration-700 will-change-transform" />
          <div className="hidden sm:block absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-aura-100/30 dark:bg-[#4A0A22]/20 rounded-full blur-[70px] pointer-events-none z-0 transform-gpu transition-colors duration-700 will-change-transform" />

          {/* Layout Shell */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16 sm:pt-20">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
