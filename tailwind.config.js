module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      vasanth: {
        50: "#dafff9",
        100: "#b2fbf5",
        200: "#86f6f0",
        300: "#5af1ef",
        400: "#33e8ec",
        500: "#1fc9d3",
        600: "#0e98a5",
        700: "#007477",
        800: "#004946",
        900: "#001b19",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
