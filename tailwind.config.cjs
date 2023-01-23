/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeBg: "#fbaf85",
        orangeText: "#d87d4a",
        grayText: "#fafafa",
        grayBg: "#f1f1f1",
        redCustom: "#cd2c2c",
        blk1: "#cfcfcf",
        blk2: "#979797",
        blk3: "#4c4c4c",
        blk4: "#101010",
      },
    },
  },
  plugins: [],
};
