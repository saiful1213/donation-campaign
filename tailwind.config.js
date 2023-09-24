/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "linear-gradient(to right,rgb(240,248,255),rgb(255,250,250,0.9)),url('/bgImgRv.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
