/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundImage: {
      "background-img": "url('/Background.png')",
    },
    colors: {
      whiteish: "#F0E6D2",
      gold: "#C89B3C",
      "dark-white": "#C4B998",
      brown: "#7E633B",
    },
    fontFamily: {
      beaufort: ["Beaufort", "regular"],
      beaufortBold: ["Beaufort", "bold"],
      beaufortHeavy: ["Beaufort", "heavy"],
      beaufortLight: ["Beaufort", "light"]
    },
    fontSize: {
      sm: '20px',
      score: '22px',
      cardTitle: '28px',
      md: '26px',
      md2: '35px',
      xlg: '68px',
    }
  },
},
  plugins: [],
};
