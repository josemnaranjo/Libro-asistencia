/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "rgba(252, 187, 20, 0.58)",
        "primary-middle": "rgba(255, 191, 26, 0.85)",
        "primary-dark": "rgba(255, 191, 24, 1)",

        "secondary-light": "rgba(98, 114, 238, 1)",
        "secondary-middle": "rgba(55, 75, 229, 0.97)",
        "secondary-dark": "rgba(34, 54, 214, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      disabledButton:
        "bg-white border-2 border-orange-500 cursor-not-allowed py-1 w-24 rounded-lg ",
      enabledButton: "bg-primary-dark py-1 w-24 rounded-lg text-white",
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
};
