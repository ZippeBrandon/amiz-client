import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dmsans)"],
      },
      colors: {
        "light": "#FFF8F6",
        "dark": "#273541",
        "grey": "#E7E9EA",
        "primary-purple": "#645dc7",
        "purple-shade-1": "#A7A3DE",
        "purple-shade-2": "#ECE1F6",
        "green": "#78DCA6",
        "darkGreen": "#60B085",
        "black": "#0F1F2C",
        "peach": "#FDA388",
        "darkPurple": "#9747FF"
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
