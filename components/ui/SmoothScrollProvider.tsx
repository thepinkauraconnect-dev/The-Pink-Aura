'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Only initialize Lenis on desktop mouse devices (pointer: fine and >= 768px)
    // Touch/mobile devices already have native 60-120fps GPU compositor momentum scrolling
    const isDesktop = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 768;
    if (!isDesktop) return;

    let animId: number;

    import('lenis').then(({ default: Lenis }) => {
      // Initialize Lenis High-FPS Inertia Smooth Scroll Engine for desktop
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silk smooth exponential inertia curve
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.08,
        infinite: false,
      });

      lenisRef.current = lenis;

      // High performance GPU-synchronized animation loop
      function raf(time: number) {
        lenis.raf(time);
        animId = requestAnimationFrame(raf);
      }

      animId = requestAnimationFrame(raf);
    });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}

