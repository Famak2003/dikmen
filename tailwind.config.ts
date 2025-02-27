import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xl": "1150px",
        "lmd": "850px",
        "tab": "950px",
        "ltab": "1100px",
        "xxl": "1250px",
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
        light_gray: "#c7c7c7",
        primary_black: "#000",
        white: "#fff",
        navDark: "#1e293b",
        deep_red: "#E51E25"
      },
      boxShadow: {
        custom_shad1: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        custome_sha2: "rgb(240, 143, 178, 0.25) 0px 14px 28px, rgb(240, 143, 178, 0.22) 0px 10px 10px"
      },
      animation: {
        "pulse_once": "pulse 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config;
