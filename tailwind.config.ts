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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'footer-bg': 'var(--footer-bg)',
        'footer-subtitle': 'var(--footer-subtitle)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        success: 'var(--success)',
        'success-foreground': 'var(--success-foreground)',
        'light-gray-blue': 'var(--light-gray-blue)',
        sky: 'var(--sky)',
        aqua: 'var(--aqua)',
        lavender: 'var(--lavender)',
        mint: 'var(--mint)',
        seafoam: 'var(--seafoam)',
        'frosted-glass': 'var(--frosted-glass)',
        glass: 'var(--glass)',
      },
      backgroundImage: {
        'hero-mobile': 'url("/mobile-hero-bg.png")',
        'hero-desktop': 'url("/desktop-hero-bg.png")',
      },
      boxShadow: {
        'employee-card': '0 14px 24px 0 rgba(0,0,0,0.12)',
      },
      spacing: {
        '4.5': '1.125rem',
        '15': '3.75rem',
      },
      fontWeight: {
        'extra-black': '1000',
      },
      borderWidth: {
        anchor: '0.75rem',
      },
      lineHeight: {
        default: 'var(--line-height-default)',
        dense: 'var(--line-height-dense)',
      },
    },
  },
  plugins: [],
};
export default config;
