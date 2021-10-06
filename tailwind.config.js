module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-purple": "#BFA2DB",
        "brand-purple": "#F0D9FF",
        "accent-gray": "#7F7C82",
        "light-accent-gray": "#F2F2F4",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
        xl: "1224px",
        "2xl": "1224px",
      },
    },
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
