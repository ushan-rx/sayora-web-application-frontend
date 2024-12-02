import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'current',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',

        ring: 'hsl(var(--ring))',

        'gradient-cream': 'hsl(var(--gradient-cream))',
        'gradient-blue': 'hsl(var(--gradient-blue))',
        'gradient-purple': 'hsl(var(--gradient-purple))',

        pelorous: {
          DEFAULT: '#16acbd',
          '50': '#eefdfc',
          '100': '#d3f9fa',
          '200': '#acf0f5',
          '300': '#73e4ed',
          '400': '#33cedd',
          '500': '#16acbd',
          '600': '#168fa4',
          '700': '#197385',
          '800': '#1d5e6d',
          '900': '#1c4e5d',
          '950': '#0d333f',
        },
        gulf_blue: {
          '50': '#e7f5ff',
          '100': '#d4edff',
          '200': '#b1ddff',
          '300': '#83c3ff',
          '400': '#529aff',
          '500': '#2b70ff',
          '600': '#0742ff',
          '700': '#003bff',
          '800': '#0335d0',
          '900': '#0d34a2',
          '950': '#071952',
        },
        blue_dianne: {
          '50': '#e7fffd',
          '100': '#c2fffb',
          '200': '#8efff7',
          '300': '#40fff2',
          '400': '#00fff1',
          '500': '#00efff',
          '600': '#00bce0',
          '700': '#0094b3',
          '800': '#00768f',
          '900': '#014f63',
          '950': '#004054',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
