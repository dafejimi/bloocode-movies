module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_0c": "var(--black_900_0c)",
          "900_13": "var(--black_900_13)"
        },
        blue_gray: {
          700: "var(--blue_gray_700)",
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)"
        },
        gray: {
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "500_01": "var(--gray_500_01)",
          "900_01": "var(--gray_900_01)"
        },
        green: {
          300: "var(--green_300)"
        },
        white: {
          a700: "var(--white_a700)"
        }
      },
      boxShadow: {
        bs: "inset 0 1px 1px 0 #00000013",
        bs1: "inset 0 1px 1px 1px #0000000c"
      },
      fontFamily: {
        notosans: "Noto Sans",
        microsoftyahei: "Microsoft YaHei"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};