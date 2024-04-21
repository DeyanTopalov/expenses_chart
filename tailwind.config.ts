import type { Config } from "tailwindcss";

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }): string => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsla(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-soft-red": withOpacity("--soft-red")({}),
        "clr-cyan": withOpacity("--cyan")({}),
        "clr-brown-800": withOpacity("--brown-800")({}),
        "clr-brown-600": withOpacity("--brown-600")({}),
        "clr-cream": withOpacity("--cream")({}),
        "clr-orange-200": withOpacity("--orange-200")({}),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
