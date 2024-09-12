/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./docs/**/*.mdx", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
