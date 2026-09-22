/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'soft-bg': '#F7F9FA',
        navy: {
          DEFAULT: '#071A2B',
          dark: '#040F1B',
          light: '#0E2A43',
          border: '#1E3A54',
        },
        teal: {
          DEFAULT: '#08C4D4',
          deep: '#00AEBE',
          light: '#E6F9FC',
          border: '#B2F0F7',
        },
        border: {
          DEFAULT: '#E4ECEF',
          dark: '#CBD5E0',
        },
        muted: {
          DEFAULT: '#4A5568',
          light: '#718096',
          dark: '#2D3748',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
