/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      green: {
        900: "#34A853",
      },
      gray: {
        900: "#454545",
        800: "#AEAEAE"
      },
      orange: {
        900: "#FB8500",
      },
    },
  },
  },
  plugins: [],
}
