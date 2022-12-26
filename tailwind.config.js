  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      desktop: { min: "801px" },
      mobile: { max: "800px" },
    },
  },
  plugins: [],
}
