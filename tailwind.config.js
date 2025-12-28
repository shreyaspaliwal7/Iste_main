/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paytone: ['"Paytone One"', 'sans-serif'],
      },
      colors: {
        'footer-bg': '#151515',
        'copyright-gold': '#BC9040',
        'copyright-rose': '#BD9090',
      },
    },
  },
  plugins: [],
}

