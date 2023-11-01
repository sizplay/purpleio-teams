import type { Config } from "tailwindcss";
// import { range } from "lodash";

// const pxToRem = (px: number) => `${px / 16}rem`;

const config: Config = {
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
    },
    // spacing: {
    //   ...range(1, 100).reduce((acc, px) => {
    //     acc[`${px}pxr` as string] = pxToRem(px);
    //     return acc;
    //   }, {} as { [key: string]: string }),
    // },
  },
  plugins: [],
};
export default config;
