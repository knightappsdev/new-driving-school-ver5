/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a'
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          900: '#14532d'
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706'
        },
        success: {
          500: '#10b981',
          600: '#059669'
        }
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #2563eb 0%, #16a34a 100%)',
      },
      fontSize: {
        'xs': ['0.6875rem', { lineHeight: '1rem' }],
        'sm': ['0.8125rem', { lineHeight: '1.25rem' }],
        'base': ['0.9375rem', { lineHeight: '1.5rem' }],
        'lg': ['1.0625rem', { lineHeight: '1.75rem' }],
        'xl': ['1.1875rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.4375rem', { lineHeight: '2rem' }],
        '3xl': ['1.8125rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.1875rem', { lineHeight: '2.5rem' }],
        '5xl': ['2.9375rem', { lineHeight: '1' }],
        '6xl': ['3.6875rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
