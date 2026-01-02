/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["GeistRegular", "sans-serif"],
        geistBold: ["GeistBold", "sans-serif"],
        geistSemiBold: ["GeistSemiBold", "sans-serif"],
        katanmruy: ["KatanmruyRegular", "sans-serif"],
        katanmruyBold: ["KatanmruyBold", "sans-serif"],
        KatanmruySemiBold: ["KatanmruySemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
