'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only initialize Lenis on desktop mouse devices (pointer: fine and >= 768px)
    // Touch/mobile devices already have native 60-120fps GPU compositor momentum scrolling
    const isDesktop = window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 768;
    if (!isDesktop) return;

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

    let animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
