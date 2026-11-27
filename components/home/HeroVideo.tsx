'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroVideoProps {
  /** HLS master playlist, e.g. /Videos/hls/hero_display_1/master.m3u8 */
  src: string;
  poster: string;
  label: string;
  className?: string;
  onEnded?: () => void;
  onLoadingChange?: (loading: boolean) => void;
}

/**
 * Bandwidth-friendly hero video:
 * - Adaptive HLS (480p/720p) — Safari/iOS play it natively, other browsers lazy-load hls.js (light build)
 *   only when a video slide is actually shown, so it never ships in the initial bundle.
 * - Starts at the lowest rendition and is capped to the player size.
 * - Data Saver / reduced-motion users only see the poster (no video bytes downloaded).
 */
export default function HeroVideo({ src, poster, label, className, onEnded, onLoadingChange }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [posterOnly, setPosterOnly] = useState(false);
  const endedRef = useRef(onEnded);
  const loadingRef = useRef(onLoadingChange);
  endedRef.current = onEnded;
  loadingRef.current = onLoadingChange;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (conn?.saveData || reduceMotion) {
      setPosterOnly(true);
      loadingRef.current?.(false);
      const t = setTimeout(() => endedRef.current?.(), 6000);
      return () => clearTimeout(t);
    }

    let destroyed = false;
    let hls: { destroy: () => void } | null = null;
    const play = () => {
      video.play().catch(() => {
        /* autoplay blocked — poster stays visible */
      });
    };
    const fail = () => {
      if (destroyed) return;
      setPosterOnly(true);
      loadingRef.current?.(false);
    };

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      play();
    } else {
      import('hls.js/dist/hls.light.mjs')
        .then(({ default: Hls }) => {
          if (destroyed) return;
          if (!Hls.isSupported()) return fail();
          const instance = new Hls({
            startLevel: 0,
            capLevelToPlayerSize: true,
            maxBufferLength: 12,
            maxMaxBufferLength: 20,
          });
          hls = instance;
          instance.on(Hls.Events.ERROR, (_e, data) => {
            if (data.fatal) fail();
          });
          instance.loadSource(src);
          instance.attachMedia(video);
          instance.on(Hls.Events.MANIFEST_PARSED, play);
        })
        .catch(fail);
    }

    return () => {
      destroyed = true;
      hls?.destroy();
    };
  }, [src]);

  if (posterOnly) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={poster} alt={label} className={`w-full h-full ${className ?? 'object-cover'}`} />
    );
  }

  return (
    <video
      ref={ref}
      poster={poster}
      aria-label={label}
      preload="none"
      muted
      playsInline
      autoPlay
      onWaiting={() => loadingRef.current?.(true)}
      onPlaying={() => loadingRef.current?.(false)}
      onCanPlay={() => loadingRef.current?.(false)}
      onEnded={() => endedRef.current?.()}
      onError={() => {
        setPosterOnly(true);
        loadingRef.current?.(false);
      }}
      className={`w-full h-full ${className ?? 'object-cover object-center'}`}
    />
  );
}
