/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAFAFA',
          pure:    '#FFFFFF',
          subtle:  '#F4F4F5',
          muted:   '#E4E4E7',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          primary: '#0A0A0A',
          secondary: '#525252',
          muted:   '#71717A',
          faint:   '#A1A1AA',
        },
        pitch: {
          DEFAULT: '#09090B',
          surface: '#111115',
          border:  'rgba(255, 255, 255, 0.1)',
        },
        accent: {
          cobalt:  '#0052FF',
          'cobalt-hover': '#0047E0',
          'cobalt-subtle': '#EEF2FF',
          emerald: '#059669',
        },
        brand: {
          navy:    '#1F4285',
          'navy-dark': '#152D5C',
          'navy-deeper': '#0D1B3E',
          accent:  '#B0BCD6',
          'accent-light': '#D6DCE9',
          surface: '#F7F8FB',
          mid:   '#4B5A74',
          light: '#8A96AD',
          electric: '#0052FF',
          'electric-hover': '#0047E0',
          cobalt: '#0052FF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':    'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
