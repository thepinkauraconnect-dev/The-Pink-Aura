import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          canvas: "#FDF0F5",
          "bg-200": "#F8BBD0",
          "bg-250": "#F4A6C1",
          clay: "#F4A6C1",
          "clay-light": "#FCE4EC",
          contour: "#E91E63",
          750: "#9E1B4E",
          50: "#FFF3F6",
          100: "#FCE4EC",
          200: "#F8BBD0",
          250: "#F4A6C1",
          300: "#F080A8",
          400: "#EC407A",
          500: "#E91E63",
          600: "#D81B60",
          700: "#C2185B",
          800: "#880E4F",
          900: "#560631",
          950: "#38021F",
        },
        ivory: {
          DEFAULT: "#FDF0F5",
          light: "#FFF3F6",
          dark: "#F8BBD0",
        },
        champagne: {
          DEFAULT: "#F4A6C1",
          light: "#FCE4EC",
          muted: "#9E1B4E",
        },
        charcoal: {
          DEFAULT: "#6B0D34",
          muted: "#7A1840",
          soft: "#8C204B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        'clay-sm': '6px 8px 18px -4px rgba(158, 27, 78, 0.12), -4px -4px 12px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.85), inset -2px -2px 4px rgba(194, 24, 91, 0.12)',
        'clay-md': '12px 16px 32px -6px rgba(158, 27, 78, 0.15), -8px -8px 24px rgba(255, 255, 255, 0.95), inset 4px 4px 10px rgba(255, 255, 255, 0.85), inset -5px -5px 12px rgba(194, 24, 91, 0.15)',
        'clay-lg': '16px 22px 40px -6px rgba(158, 27, 78, 0.2), -10px -10px 28px rgba(255, 255, 255, 1), inset 5px 5px 14px rgba(255, 255, 255, 0.9), inset -6px -6px 14px rgba(194, 24, 91, 0.18)',
        'clay-btn': '8px 12px 24px -4px rgba(158, 27, 78, 0.35), -4px -4px 12px rgba(255, 255, 255, 0.7), inset 2px 2px 5px rgba(255, 255, 255, 0.4), inset -3px -3px 6px rgba(86, 6, 49, 0.3)',
        'clay-inset': 'inset 3px 3px 6px rgba(194, 24, 91, 0.14), inset -3px -3px 6px rgba(255, 255, 255, 0.85)',
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
