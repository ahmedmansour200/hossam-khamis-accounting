/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071526',
          900: '#0F2747', // Deep Navy
          850: '#123259',
          800: '#163D6B', // Primary Blue
          700: '#1E508C',
          600: '#2563EB',
          100: '#E6EEF7',
          50: '#F0F5FA',
        },
        gold: {
          700: '#9E7E32',
          600: '#B5913B',
          500: '#C9A44C', // Gold Accent
          400: '#D8B767',
          300: '#E7CF94',
          100: '#F9F5EC',
          50: '#FCFAF6',
        },
        slate: {
          bg: '#F7F8FA',
          subtle: '#EEF1F5',
        },
        ink: {
          primary: '#1F2937',
          muted: '#6B7280',
          light: '#9CA3AF',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'IBM Plex Sans Arabic', 'sans-serif'],
        arabic: ['Cairo', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(15, 39, 71, 0.05), 0 1px 2px rgba(15, 39, 71, 0.03)',
        'soft': '0 4px 16px rgba(15, 39, 71, 0.06), 0 1px 3px rgba(15, 39, 71, 0.04)',
        'soft-lg': '0 10px 30px rgba(15, 39, 71, 0.08), 0 3px 8px rgba(15, 39, 71, 0.04)',
        'soft-xl': '0 20px 40px rgba(15, 39, 71, 0.10)',
        'gold-glow': '0 4px 20px rgba(201, 164, 76, 0.25)',
      }
    },
  },
  plugins: [],
}
