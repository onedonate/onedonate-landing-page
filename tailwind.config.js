module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "#4F4F4F",
        "brand-green": "#85A4B3",
        "light-gray": "#DFDFDF",
        "light-text-gray": "#9B9B9B",
        "light-accent-gray": "#F2F2F4",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1600px",
        xl: "1600px",
        "2xl": "1600px",
      },
    },
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
    lineHeight: {
      "extra-loose": "3rem",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
