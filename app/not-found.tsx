'use client';

import Link from 'next/link';
import { ArrowLeft, Flower2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-16">
      <div className="w-16 h-16 rounded-full bg-aura-100/60 border border-aura-200 flex items-center justify-center text-aura-600 mb-6 shadow-sm">
        <Flower2 className="w-8 h-8 animate-pulse" />
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-4">
        Page Not Found
      </h1>
      <p className="text-muted-dark max-w-md mx-auto text-base mb-8">
        The page you are looking for does not exist or may have been relocated.
      </p>
      <Link
        href="/home"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-aura-600 to-aura-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Home
      </Link>
    </div>
  );
}
