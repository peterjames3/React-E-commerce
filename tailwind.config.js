/* const flowbite = require("flowbite-react/tailwind"); */
import flowbite from 'flowbite-react/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontSize: {
        Base: "16px",
      },
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],

      },
      colors: {
        //Primary
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        //Neutral
        GrayishBlue: " hsl(217, 19%, 38%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        LightGrayishBlue: " hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",

      },
      boxShadow: {
        'custom': '0px 3px 12px 4px rgba(85,255,170,0.83)',
      },

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}