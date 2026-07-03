/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1c1c1c', // Vehicles and VIP elegance
          gray: '#333333',
          light: '#f5f5f5', // Salar
          white: '#ffffff',
          earth: '#8B5A2B', // Earth tones
          sand: '#C2B280',
          terracotta: '#E2725B', // Contrast
          andeanBlue: '#005A8C' // Andean blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}