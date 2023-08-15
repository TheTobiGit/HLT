/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#2381E8',
        'brandtext': '#102852',
        'brandbg': '#DDE2EE',
        'brandtextlight': '#ABD3FF',
        'brandtextfade': '#FFFFFF80',
      },
      backgroundImage: {
        'herobg': "url('src/assets/hero_bg.png')",
      }
    },
  },
  plugins: [],
}