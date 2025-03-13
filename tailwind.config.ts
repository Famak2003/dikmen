import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        "xl": "1150px",
        "lmd": "850px",
        "tab": "950px",
        "ltab": "1100px",
        "xxl": "1210px",
        "3xl": "1380px",
        "lmobile": "550px",
        "mobile": "450px",
        "smobile": "350px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_grey: "#595959",
        dark: "#171717",
        dark_side: "#212121e6",
        primary_light_grey: "#FaFaFa",
        secondary_light_grey: "#706F6F",
        blue_head: "#67c5dc",
        primary_black: "#000",
        white: "#fff",
        navDark: "#1e293b",
        deep_red: "#E51E25",
        cool_red: "#E40613",
        base_yellow: "#D7DD17",
        light_gray: "#c7c7c7",
        text_light_gray: "#bebebe",
        base_gray: "#757575",
        body_bg: "#fafafa",
        secondary_gray: "#585858",
        section_bg: "#F5F5F5",
        dark_yellow: "#6C6F00",
        light_dark_yellow: "#9B9F00",
        dark_gray: "#4A4B4D",
        faint_gray: "#BBBBBB",
        pale_yellow: "#FAFBD4"
      },
      boxShadow: {
        custom_shad1: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        custom_shad2: "rgb(88, 88, 88, 0.25) 0px -12px 10px, rgb(88, 88, 88, 0.22) 0px -12px 10px",
        custom_shad3: " 0px -11px 18px -4px, rgba(88, 88, 88, 1)",
        custom_shad4: " rgba(149, 157, 165, 0.2) 0px 8px 24px"

      },
      animation: {
        "pulse_once": "pulse 2s ease-in-out 1",
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Correctly imported as a require statement
  ],
  darkMode: 'class'
} satisfies Config;
