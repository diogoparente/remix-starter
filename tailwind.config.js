const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

const breakpoints = {
  sm: "400px",
  m: "767px",
  lg: "1024px",
};

const themeColors = {
  ivory: "#F2F1E8",
  black: "#182747",
  cornflower: "#4C5270",
  charcoal: "#36454F",
  peach: "#FD7C6E",
  navy: "#000035",
  purple: "#784B84",
};

const lighterThemeColors = {
  ivory: "#fafaf7",
  black: "#92a9da",
  cornflower: "#bcbfd1",
  charcoal: "#b1bfc9",
  peach: "#feb0a8",
  navy: "#5f5fff",
  purple: "#d2bbd9",
};

const dark = {
  c1: themeColors.black,
  c2: themeColors.charcoal,
  c3: themeColors.navy,
  c4: themeColors.ivory,
  c5: themeColors.purple,
  c6: themeColors.cornflower,
  "c1-light": lighterThemeColors.black,
  "c2-light": lighterThemeColors.charcoal,
  "c3-light": lighterThemeColors.navy,
  "c4-light": lighterThemeColors.ivory,
  "c5-light": lighterThemeColors.purple,
  "c6-light": lighterThemeColors.cornflower,
};

const light = {
  c1: themeColors.ivory,
  c2: themeColors.peach,
  c3: themeColors.charcoal,
  c4: themeColors.navy,
  c5: themeColors.cornflower,
  c6: themeColors.black,
  "c1-light": lighterThemeColors.ivory,
  "c2-light": lighterThemeColors.peach,
  "c3-light": lighterThemeColors.charcoal,
  "c4-light": lighterThemeColors.navy,
  "c5-light": lighterThemeColors.cornflower,
  "c6-light": lighterThemeColors.black,
};

/**@type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./app/**/*.{ts,js,tsx,jsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      screens: {
        "sm-max": { max: breakpoints.sm },
        "md-max": { max: breakpoints.m },
        "lg-max": { max: breakpoints.lg },
        "sm-min": { min: breakpoints.sm },
        "md-min": { min: breakpoints.m },
        "lg-min": { min: breakpoints.lg },
      },
      colors: {
        ...colors,
        c1: "var(--colors-c1)",
        c2: "var(--colors-c2)",
        c3: "var(--colors-c3)",
        c4: "var(--colors-c4)",
        c5: "var(--colors-c5)",
        c6: "var(--colors-c6)",
        "c1-light": "var(--colors-c1-light)",
        "c2-light": "var(--colors-c2-light)",
        "c3-light": "var(--colors-c3-light)",
        "c4-light": "var(--colors-c4-light)",
        "c5-light": "var(--colors-c5-light)",
        "c6-light": "var(--colors-c6-light)",
      },
      variables: {
        DEFAULT: {
          colors: light,
          breakpoints,
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: dark,
        },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    require("@mertasan/tailwindcss-variables"),
    require("tailwind-scrollbar-hide"),
  ],
};
