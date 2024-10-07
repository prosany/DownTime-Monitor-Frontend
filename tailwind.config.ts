import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/configs/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#FFFFFF',
          100: 'var(--text-color)',
          600: 'var(--input-border)',
          700: 'var(--background-color)',
          800: 'var(--background-input)',
          900: 'var(--background-surface)',
        },
        statusSuccess: '#91D61B',
        statusFailed: '#DB453D',
        actionViolet: '#7B39FE',
        custom: {
          dark: {
            900: '#313131',
          },
          primary: {
            50: '#F4F2FF',
            100: '#EBE7FF',
            200: '#D9D2FF',
            400: '#9E81FF',
            500: '#7B39FE',
          },
          white: {
            50: '#F6F7F9',
            base: '#FFFFFF',
            transparent: 'rgba(255, 255, 255, 0.6)',
          },
          gray: {
            100: '#D1D5DB',
            600: '#6B7280',
            700: '#374151',
          },
          neutral: {
            100: '#EDEEF1',
            200: '#D7DAE0',
            300: '#B3B9C6',
            400: '#8A94A6',
            500: '#667085',
            600: '#565E73',
            800: '#3D424F',
            900: '#363A44',
            950: '#24262D',
          },
          success: {
            800: '#447C08',
            700: '#5B9A0D',
            600: '#75B813',
            500: '#91D61B',
            200: '#E4FAA3',
          },
          danger: {
            800: '#931A27',
            700: '#B72A2E',
            600: '#DB453D',
            500: '#FF6A54',
            200: '#FFD3BA',
          },
        },
      },
      fontFamily: {
        plusJakartaSans: 'var(--font-plus-jakarta-sans)',
        inter: 'var(--font-inter)',
        asap: 'var(--font-asap)',
        nunito: 'var(--font-nunito)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        upDown: 'upDown 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
