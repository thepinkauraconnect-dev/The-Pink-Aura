'use client';

import { useEffect } from 'react';

export default function GrotoscopeObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('grotoscope-active');
          } else {
            entry.target.classList.remove('grotoscope-active');
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    let timeoutId: NodeJS.Timeout;

    const observeElements = () => {
      const elements = document.querySelectorAll('.grotoscope-hover, .clay-card-hover');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(observeElements, 200);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
