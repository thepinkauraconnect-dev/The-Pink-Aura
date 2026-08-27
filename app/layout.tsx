import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
        url: '/images/logo/Logo-01.png',
        width: 1200,
        height: 630,
        alt: 'The Pink Aura Aesthetic & Wellness Centre',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/logo/Logo-01.png',
    apple: '/images/logo/Logo-01.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory bg-aura-mesh text-charcoal antialiased flex flex-col min-h-screen selection:bg-aura-200 selection:text-aura-900 relative">
        {/* Subtle Silk Pattern Overlay */}
        <div className="fixed inset-0 bg-silk-pattern pointer-events-none opacity-60 z-0" />

        {/* Ambient Animated Luxury Aura Orbs */}
        <div className="fixed top-10 left-10 w-[600px] h-[600px] bg-aura-200/35 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
        <div className="fixed bottom-20 right-10 w-[550px] h-[550px] bg-champagne-light/35 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-1/2 left-1/3 w-[450px] h-[450px] bg-aura-100/40 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Layout Shell */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
