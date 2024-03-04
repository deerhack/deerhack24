import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6633CC",
        secondary: "#F5C144",
        "dark-purple": "#110C24",
        violet: "#241A4A",
        grape: "#6633CC",
        purpures: "#9D4BAD",
        saffron: "#F5C144",
        magnolia: "#FCF7FF",
        green: "#004F2D",
        red: "#c70017",
        mutedColor:'rgba(17, 12, 36, 0.6)',
      },
      gradientColorStopPositions: {
        3: "3%",
        1: "1%",
      },
      fontFamily: {
        "cabinet-light": ["var(--font-cabinet-light)"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1280px",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 70s linear infinite",
        "inf-scroll": "inf-scroll 70s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "inf-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    opacity: true,
    transitionProperty: true,
  },
};
export default config;
