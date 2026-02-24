/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080',
        secondary: '#4CAF50',
        danger: '#EF4444',
        warning: '#F59E0B',
        dark: '#1F2937',
        light: '#F3F4F6',
      },
    },
  },
  plugins: [],
}
