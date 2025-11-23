/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // brand colors
        'brand-primary': 'var(--brand-color1)',
        'brand-secondary': 'var(--brand-color2)',

        // (Background)
        'bg-main': 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        'bg-element': 'var(--color-elements)',

        // text colors
        'text-high': 'var(--color-text-high)',
        'text-low': 'var(--color-text-low)',
        'text-title': 'var(--color-titles)',
        white: 'var(--color-white)',

        // neutral colors / elements
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        space: ['var(--font-space)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

export default config
