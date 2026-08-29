/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: {
          50: '#fdfcf9',
          100: '#faf7f1',
          200: '#f3eee4',
          300: '#e9e1d3',
          400: '#d9ccb8',
        },
        clay: {
          50: '#faf6f2',
          100: '#f0e6dc',
          200: '#e2d0c0',
          300: '#cdb59e',
          400: '#b89878',
          500: '#9c7d5e',
          600: '#7e6448',
        },
        charcoal: {
          600: '#4a443e',
          700: '#38332e',
          800: '#272320',
          900: '#1a1714',
          950: '#100e0c',
        },
        sage: {
          300: '#b8c4b3',
          400: '#9eae99',
          500: '#7d9079',
          600: '#647660',
          700: '#4f5d4c',
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.3em',
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'slide-in': 'slide-in 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
