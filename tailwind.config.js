/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F97316",
          "secondary": "#FFD8BC",
          "accent": "FFD8BC",
          "neutral": "#F97316",
          "base-100": "#ffffff",
          "info": "#F97316",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add your desired font family here
      },
    },
  },
  plugins: [require('daisyui')],
}