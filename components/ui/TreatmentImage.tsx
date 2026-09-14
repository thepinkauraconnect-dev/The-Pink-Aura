'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface TreatmentImageProps {
  src: string;
  fallbacks?: string[];
  alt: string;
  className?: string;
  aspectRatio?: string; // Default: aspect-[16/9] for horizontal rectangle
  priority?: boolean;
  roundedClassName?: string;
  children?: React.ReactNode;
}

export function TreatmentImage({
  src,
  fallbacks = [],
  alt,
  className = "object-cover group-hover:scale-105 transition-transform duration-700",
  aspectRatio = "aspect-[16/9]",
  priority = false,
  roundedClassName = "rounded-t-3xl",
  children
}: TreatmentImageProps) {
  // Deduplicate sources
  const sources = React.useMemo(() => {
    const list = [src, ...fallbacks].filter((s): s is string => Boolean(s) && typeof s === 'string');
    return Array.from(new Set(list));
  }, [src, fallbacks]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentSrc = sources[currentIndex];

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex, currentSrc]);

  const handleError = () => {
    if (currentIndex < sources.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative w-full overflow-hidden ${aspectRatio} bg-aura-950/10 dark:bg-aura-950/40 ${roundedClassName}`}>
      {/* Luxury Loading Rotator Overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-aura-100/40 dark:bg-aura-900/50 backdrop-blur-[2px] animate-pulse">
          <div className="relative flex items-center justify-center">
            {/* Spinning gradient aura ring */}
            <div className="w-9 h-9 rounded-full border-2 border-aura-500/30 border-t-aura-600 dark:border-t-aura-400 animate-spin" />
            <Loader2 className="w-4 h-4 text-aura-600 dark:text-aura-300 animate-spin absolute" />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-aura-800 dark:text-aura-200 font-bold mt-2.5 opacity-90">
            Loading Image...
          </span>
        </div>
      )}

      {!hasError && currentSrc ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          priority={priority}
          className={`${className} transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onError={handleError}
          onLoad={handleLoad}
          loading={priority ? undefined : "lazy"}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-aura-500/20 via-pink-400/20 to-rose-900/40 text-charcoal dark:text-white p-4 text-center border border-pink-200/40">
          <span className="font-serif text-sm font-bold tracking-wide drop-shadow">{alt}</span>
          <span className="text-[10px] text-aura-700 dark:text-aura-300 uppercase tracking-widest mt-1.5 font-sans font-semibold">
            The Pink Aura Luxury Care
          </span>
        </div>
      )}

      {children}
    </div>
  );
}
