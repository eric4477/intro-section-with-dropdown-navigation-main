/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xsm: "375px",
      sm: "480px",
      md: "860px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
