'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Hero3DElement() {
  // Track global page scroll for realistic 3D coin rotation
  const { scrollY } = useScroll();

  // Slow, smooth coin rotation on Y-axis (1 full 360° spin per ~1000px scrolled)
  const rawRotateY = useTransform(scrollY, [0, 3000], [0, 1080]);

  // Buttery smooth physics for realistic coin weight & momentum
  const rotateY = useSpring(rawRotateY, { stiffness: 45, damping: 22, mass: 0.8 });

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-40 select-none">
      {/* 3D Fixed Coin Container */}
      <motion.div
        style={{
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 800,
        }}
        className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-white/95 via-pink-50/90 to-aura-100/90 dark:from-[#3B091D] dark:via-[#250512] dark:to-[#1A030C] backdrop-blur-xl border-2 border-white/90 dark:border-aura-400/50 shadow-[0_12px_32px_rgba(158,27,78,0.4)] flex items-center justify-center p-2 cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        {/* Soft Pink Aura Glow Behind Coin */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-aura-400/35 via-pink-300/25 to-champagne/30 blur-md pointer-events-none" />

        {/* Outer Metallic Coin Bevel Rim */}
        <div className="absolute inset-0.5 rounded-full border border-white/70 dark:border-white/20 pointer-events-none" />

        {/* Pink Aura Logo Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/images/logo/Logo%20the%20pink%20aura.webp"
            alt="The Pink Aura 3D Coin Logo"
            fill
            className="object-contain p-0.5 rounded-full"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
