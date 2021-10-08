module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-purple": "#85A4B3",
        "accent-gray": "#7F7C82",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
