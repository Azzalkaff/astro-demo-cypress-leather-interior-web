/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFFFFF',
          card: '#FDFDFD',
          accent: '#E63946', // Vibrant red from the image
          text: '#1A1A1A',
          muted: '#666666'
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', '"Segoe UI"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
