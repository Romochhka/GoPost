/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutralWhite: "#FFFFFF",
        neutralBgGrey: "#F0F2F5",
        neutralBgGrey15: "#F8F8F8",
        neutralHoverBgGrey: "#E6E9ED",
        neutralLightGrey: "#DCE1E5",
        neutralMiddleGrey: "#ADB0B2",
        neutralSmokeGrey: "#687B8D",
        neutralDarkGrey: "#797D80",
        neutralGreySmoke: "#9AA7B3",
        neutralDarkBg: "#242729",
        neutralBlack: "#18191A",
        alphaWhite10: "#FFFFFF1a",
        alphaWhite25: "#FFFFFF40",
        alphaWhite50: "#FFFFFF80",
        alphaWhite75: "#FFFFFFbf",
        alphaWhite85: "#E6E9EC",
        alphaBlack5: "#0A11290D",
        alphaBlack15: "#0A112926",
        alphaBlack30: "#0A11294d",
        alphaBlack45: "#0A112973",
        alphaBlack65: "#0A1129a6",
        alphaBlack75: "#032341",
        alphaGreyBlurBg85: "#F6F7F8D9",
        primaryLightBlue: "#EDF1FF",
        primaryLightBlueHover: "#DDE5FF",
        primaryDarkModeBlue: "#4399FF",
        primaryDarkBlueHover: "#2D7CD8",
        primaryBlue: "#355DEE",
        primarySkyBlue: "#008FFF",
      },
    },
  },
  plugins: [],
}
