import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        dark: '#0A0A0A'
      },
      
    },
  },
  plugins: [daisyui]
}

