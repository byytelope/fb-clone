module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      lightBg: "#F0F2F5",
      lightSecondary: "#E4E6EB",
      darkBg: "#18191A",
      darkSecondary: "#242526",
      bluePrimary: "#1877f2",
      blueSecondary: "#1B74E4",
      blueTertiary: "#4267b2",
      greenPrimary: "#42b72a",
      greenSecondary: "#2b9217",
      red: "#E41E3F",
      textPrimary: "#050505",
      textSecondary: "#B0B3B8",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
