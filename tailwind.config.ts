import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          50: "#FAF3F5",
          100: "#F5E6EC",
          200: "#EAD0DC",
          300: "#D9AAC0",
          400: "#C87D94",
          500: "#B55B77",
          600: "#9E4D68",
          700: "#813A51",
          800: "#6A3043",
          900: "#572A3A",
          950: "#331420",
        },
        ivory: {
          DEFAULT: "#FAF5F7",
          light: "#FDFBF7",
          dark: "#F0ECE1",
        },
        champagne: {
          DEFAULT: "#D4AF37",
          light: "#F3E8C8",
          muted: "#C5A059",
        },
        charcoal: {
          DEFAULT: "#1C1917",
          muted: "#44403C",
          soft: "#78716C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        'clay-sm': '6px 8px 16px -4px rgba(158, 77, 104, 0.08), -4px -4px 12px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.8), inset -2px -2px 4px rgba(200, 125, 148, 0.1)',
        'clay-md': '12px 16px 32px -8px rgba(158, 77, 104, 0.12), -8px -8px 24px rgba(255, 255, 255, 0.95), inset 3px 3px 8px rgba(255, 255, 255, 0.9), inset -4px -4px 10px rgba(200, 125, 148, 0.12)',
        'clay-lg': '18px 24px 44px -10px rgba(158, 77, 104, 0.18), -10px -10px 30px rgba(255, 255, 255, 1), inset 4px 4px 12px rgba(255, 255, 255, 1), inset -5px -5px 14px rgba(200, 125, 148, 0.15)',
        'clay-btn': '8px 12px 24px -4px rgba(158, 77, 104, 0.35), -4px -4px 12px rgba(255, 255, 255, 0.5), inset 2px 2px 5px rgba(255, 255, 255, 0.4), inset -3px -3px 6px rgba(51, 20, 32, 0.3)',
        'clay-inset': 'inset 3px 3px 6px rgba(158, 77, 104, 0.12), inset -3px -3px 6px rgba(255, 255, 255, 0.9)',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};

export default config;
