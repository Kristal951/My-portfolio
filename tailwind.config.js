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
      colors:{
        primary: "var(--primary)",
        text: "var(--text)",
        muted: "var(--muted)",
        card: "var(--card)",
        border: "var(--border)",
        textInverse: "var(--text-inverse)",
        bg: "var(--bg)",
      }
    },
  },
  plugins: [],
};
