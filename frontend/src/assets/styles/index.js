// Import all styles to allow single import in main.js
import './main.css';

// Export design system variables for programmatic access if needed
export const designSystem = {
  colors: {
    primary: '#0066FF',
    primaryLight: '#3385ff',
    primaryDark: '#0052cc',
    secondary: '#7000FF',
    accent: '#00CCFF',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.85)',
    textMuted: 'rgba(255, 255, 255, 0.6)',
    bgDark: 'rgba(20, 30, 48, 0.6)',
    bgGlass: 'rgba(20, 30, 48, 0.6)',
    bgLightGlass: 'rgba(240, 240, 245, 0.6)',
    border: 'rgba(255, 255, 255, 0.05)',
  },
  spacing: {
    '2xs': '0.25rem', // 4px
    'xs': '0.5rem', // 8px
    'sm': '0.75rem', // 12px
    'md': '1rem', // 16px
    'lg': '1.5rem', // 24px
    'xl': '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  },
  borderRadius: {
    'sm': '0.25rem',
    'md': '0.5rem',
    'lg': '0.75rem',
    'xl': '1rem',
    '2xl': '1.5rem',
    'full': '9999px',
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    fontSizes: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
};

export default designSystem;
