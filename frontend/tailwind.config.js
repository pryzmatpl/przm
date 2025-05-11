/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,ts}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          dark: 'rgb(var(--color-primary-dark))',
          light: 'rgb(var(--color-primary-light))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          dark: 'rgb(var(--color-secondary-dark))',
          light: 'rgb(var(--color-secondary-light))',
        },
        success: 'rgb(var(--color-success))',
        warning: 'rgb(var(--color-warning))',
        danger: 'rgb(var(--color-danger))',
        info: 'rgb(var(--color-info))',
        dark: {
          "bg": '#131b2b',
          "surface": 'rgba(25, 35, 55, 0.95)',
          'surface-elevated': 'rgba(32, 45, 70, 0.9)',
        },
        light: {
          "bg": 'rgba(245, 245, 250, 0.9)',
          "surface": 'rgba(255, 255, 255, 0.85)',
          'surface-elevated': 'rgba(255, 255, 255, 0.95)',
        },
        navy: {
          DEFAULT: '#131b2b',
          dark: '#0d131e',
          light: '#263656',
        },
      },
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Montserrat', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.75rem',
        'lg': '1.25rem',
        'xl': '1.75rem',
        '2xl': '2.5rem',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.5rem',
        '6': '2rem',
        '8': '3rem',
        '10': '4rem',
        '12': '5rem',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.06)',
        'light': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.16)',
        'intense': '0 20px 60px rgba(0, 0, 0, 0.2)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'medium': '250ms',
        'slow': '400ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-left': 'fadeInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fadeInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse': 'pulse 3s infinite ease-in-out',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeIn: {
          'from': {opacity: '0', transform: 'translateY(10px)'},
          'to': {opacity: '1', transform: 'translateY(0)'},
        },
        fadeInLeft: {
          'from': {opacity: '0', transform: 'translateX(-20px)'},
          'to': {opacity: '1', transform: 'translateX(0)'},
        },
        fadeInRight: {
          'from': {opacity: '0', transform: 'translateX(20px)'},
          'to': {opacity: '1', transform: 'translateX(0)'},
        },
        pulse: {
          '0%': {transform: 'scale(1)', opacity: '1'},
          '50%': {transform: 'scale(1.03)', opacity: '0.9'},
          '100%': {transform: 'scale(1)', opacity: '1'},
        },
        shimmer: {
          '0%': {backgroundPosition: '-1000px 0'},
          '100%': {backgroundPosition: '1000px 0'},
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

