'use client';

import { useEffect, useState, useRef } from 'react';

export default function PinkSunCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    // Activate custom cursor on desktop/laptop mouse devices only
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    // Detect hover over interactive / clickable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        !!target.closest(
          'button, a, input, textarea, select, label, [role="button"], [data-clickable], .clickable, .cursor-pointer'
        ) || (typeof window !== 'undefined' && window.getComputedStyle(target).cursor === 'pointer');

      if (isHoveredRef.current !== isInteractive) {
        isHoveredRef.current = isInteractive;
        setIsHovered(isInteractive);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    document.documentElement.classList.add('custom-cursor-active');

    // High performance animation loop
    const updateCursor = () => {
      // Pin main container to cursor coordinates with exact hotspot offsets
      if (cursorRef.current) {
        if (isHoveredRef.current) {
          // Hand pointer mode: index finger tip (11px, 2px) aligned directly to mouse pixel
          cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-11px, -2px)`;
        } else {
          // Dot mode: center of dot (50%, 50%) aligned directly to mouse pixel
          cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      animFrameRef.current = requestAnimationFrame(updateCursor);
    };

    animFrameRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onMouseOver);
      document.documentElement.classList.remove('custom-cursor-active');
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999999] will-change-transform transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } hidden lg:block`}
      aria-hidden="true"
    >
      {isHovered ? (
        /* Still, Precision High-Contrast Hand Pointer (White Halo Outer Stroke for 100% Visibility over Pink & Dark Buttons) */
        <div className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer White Contour Halo - ensures hand is 100% visible over pink buttons */}
            <path
              d="M10 2C9.44772 2 9 2.44772 9 3V11.5L7.41421 9.91421C6.63316 9.13316 5.36683 9.13316 4.58579 9.91421C3.80474 10.6953 3.80474 11.9616 4.58579 12.7426L9.17157 17.3284C10.6719 18.8287 12.7071 19.6716 14.8284 19.6716H16C18.2091 19.6716 20 17.8807 20 15.6716V10.5C20 9.94772 19.5523 9.5 19 9.5C18.4477 9.5 18 9.94772 18 10.5V9.5C18 8.94772 17.5523 8.5 17 8.5C16.4477 8.5 16 8.94772 16 8.5V7.5C16 6.94772 15.5523 6.5 15 6.5C14.4477 6.5 14 6.94772 14 7.5V3C14 2.44772 13.5523 2 13 2H10Z"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Vibrant Pink Hand with Deep Rose Stroke */}
            <path
              d="M10 2C9.44772 2 9 2.44772 9 3V11.5L7.41421 9.91421C6.63316 9.13316 5.36683 9.13316 4.58579 9.91421C3.80474 10.6953 3.80474 11.9616 4.58579 12.7426L9.17157 17.3284C10.6719 18.8287 12.7071 19.6716 14.8284 19.6716H16C18.2091 19.6716 20 17.8807 20 15.6716V10.5C20 9.94772 19.5523 9.5 19 9.5C18.4477 9.5 18 9.94772 18 10.5V9.5C18 8.94772 17.5523 8.5 17 8.5C16.4477 8.5 16 8.94772 16 8.5V7.5C16 6.94772 15.5523 6.5 15 6.5C14.4477 6.5 14 6.94772 14 7.5V3C14 2.44772 13.5523 2 13 2H10Z"
              fill="#F472B6"
              stroke="#881337"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        /* Elegant Pink Dot Cursor State (Default Mouse Position) */
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-pink-400/20 border border-pink-400/30 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-pink-500 border border-white shadow-[0_0_8px_rgba(236,72,153,0.7)]" />
          </div>
        </div>
      )}
    </div>
  );
}


