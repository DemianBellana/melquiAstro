/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1025px',
      },
      colors: {
        cream: '#f5f0e8',
        'warm-white': '#faf8f4',
        dark: '#1a1714',
        mid: '#5a5248',
        light: '#9e9088',
        accent: '#b08d6a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
