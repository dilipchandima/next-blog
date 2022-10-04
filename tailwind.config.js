/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      mono: ["Source Code Pro", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
