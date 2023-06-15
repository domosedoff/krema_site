/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      header_logo: ["Lilita One", "cursive"],
      header_title: ["Paytone One", "sans-serif"],
      card_title: ["Concert One", "cursive"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
