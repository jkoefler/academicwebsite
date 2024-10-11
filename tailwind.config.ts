import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        moveline: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        movedown: {
          '0%': { opacity: '1', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        moveline: 'moveline 6s linear forwards',
        movedown: 'movedown 0.5s linear forwards',
      },
    },
  },
  plugins: [],
};
export default config;
