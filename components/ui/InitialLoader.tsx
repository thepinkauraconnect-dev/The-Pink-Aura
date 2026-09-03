'use client';

import { useState, useEffect } from 'react';
import PageLoader from './PageLoader';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide initial loader once window and initial DOM assets are ready
    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(timer);
    }

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 400);
    };

    window.addEventListener('load', handleLoad);
    // Fallback safety timer so loader never gets stuck
    const fallbackTimer = setTimeout(() => setLoading(false), 1200);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return <PageLoader isLoading={loading} />;
}
