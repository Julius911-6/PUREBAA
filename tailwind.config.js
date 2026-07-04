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
          primary: '#1E3A8A', // Deep Blue - Formal and Trustworthy
          secondary: '#334155', // Slate - Serious, readable text
          accent: '#0EA5E9', // Light Blue - Interactive elements
          light: '#F8FAFC', // Off-white backgrounds
          white: '#FFFFFF',
          dark: '#0F172A', // Very dark slate for footers/headers
          border: '#E2E8F0', // Light borders
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