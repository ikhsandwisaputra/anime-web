/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./ index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        maColor1: '#3B3A3D',
        maColor2: '#06B6D4'
      },
      fontFamily: {
        poppins: ['poppins'],
      },
    },
  },
  plugins: [],
}

