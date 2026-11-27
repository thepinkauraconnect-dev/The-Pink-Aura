'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  isLoading?: boolean;
}

export default function PageLoader({ isLoading = true }: PageLoaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF5F8] dark:bg-[#1A030C] transition-colors duration-500 select-none overflow-hidden"
      >
        {/* Soft Ambient Background Aura Glows */}
        <div className="absolute w-96 h-96 bg-aura-300/30 dark:bg-aura-800/30 rounded-full blur-[90px] animate-pulse pointer-events-none" />
        <div className="absolute w-72 h-72 bg-champagne-light/40 dark:bg-pink-900/20 rounded-full blur-[70px] pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center space-y-6 text-center z-10 px-4">
          {/* Rolling Logo Outer Ring & Rolling Animation */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
            {/* Outer Spinning Dash Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-aura-500/70 dark:border-pink-300/70"
            />

            {/* Counter-rotating Inner Gradient Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-1.5 rounded-full border border-aura-300/40 dark:border-aura-700/40"
            />

            {/* Pulsing Logo Container */}
            <motion.div
              animate={{ scale: [0.94, 1.06, 0.94] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 dark:bg-[#2A0514]/90 backdrop-blur-md p-3 shadow-clay-md border border-white dark:border-aura-700/50 flex items-center justify-center"
            >
              <Image
                src="/images/logo/Logo the pink aura.webp"
                alt="The Pink Aura Logo"
                fill
                sizes="(max-width: 640px) 96px, 120px"
                quality={90}
                className="object-contain p-2 dark:brightness-125 dark:drop-shadow-[0_0_12px_rgba(248,187,208,0.6)]"
                priority
              />
            </motion.div>
          </div>

          {/* Brand Typography & Loading Bar */}
          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal dark:text-pink-100">
              The Pink Aura
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-aura-700 dark:text-pink-200/80 tracking-wide">
              Enhance Your Beauty • Elevate Your Aura
            </p>
          </div>

          {/* Animated Loading Bar */}
          <div className="w-44 sm:w-56 h-1 rounded-full bg-aura-200/60 dark:bg-aura-900/60 overflow-hidden relative border border-white/40 dark:border-aura-700/40">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-aura-400 via-aura-600 to-aura-400 dark:from-pink-400 dark:via-aura-300 dark:to-pink-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
