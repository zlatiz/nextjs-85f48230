import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A63D8',
        secondary: '#0F1724',
        accent: '#FF6B5C',
        background: '#FFFFFF',
        surface: '#F7FAFC',
        foreground: '#0B1220',
        muted: '#6B7280',
        border: '#E6E9EE'
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px'
      },
      boxShadow: {
        sm: '0 1px 3px rgba(11,22,50,0.06)',
        md: '0 8px 24px rgba(11,22,50,0.08)',
        lg: '0 24px 48px rgba(11,22,50,0.12)'
      },
      transitionTimingFunction: {
        'soft-ease': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: []
};

export default config;
