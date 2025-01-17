/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      fontSize:{
        textCursor: " 0.5rem",
        textXxs: " 0.5rem",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#5472B8", 
        primaryDark: "#58E6D9",
        secondary: "#E4080A",
        secondaryDark: "#960608",
        spiritedAwayColor:"#00ADFE",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage:{
        brainBackground: "url('/images/svgs/BrainIcon.svg')", //url('images/cerebro-humano.png')",
        brainBackgroundLight: "url('/images/svgs/BrainIconLight.svg')",
        circularLight: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);',
        circularDark: ' repeating-radial-gradient(rgba(250,250,250,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px);'
      },
      padding: {        
        'custom-left': '4.8rem',
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }

      xxs: { max: "370px" },
      // => @media (max-width: 310px) { ... }

    },
  },
  plugins: [],
};
