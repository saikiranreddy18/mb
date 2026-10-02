import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mummas': {
          'primary': '#1B4D2E',
          'primary-light': '#2D6A42',
          'secondary': '#F5F1EA',
          'earth': '#8B6F47',
          'accent': '#C9A876',
          'white': '#FFFFFF',
          'off-white': '#FAF7F2',
          'text': '#1A1A1A',
          'text-light': '#6B6B6B',
          'border': '#E8E0D5',
        },
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'serif': ['DM Serif Display', 'serif'],
        'instrument': ['Instrument Serif', 'serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['32px', '40px'],
        '4xl': ['40px', '48px'],
        '5xl': ['48px', '56px'],
        '6xl': ['60px', '72px'],
        '7xl': ['72px', '84px'],
      },
      spacing: {
        'section': '120px',
        'section-sm': '60px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};

export default config;
