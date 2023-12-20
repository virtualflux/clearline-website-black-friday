/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        catalineBlue: "#082B82",
        silverChalice: "#A4A4A4",
        shuttleGray: "#5A6371",
        athensGray: "#F3F4F8",
        ebonyClay: "#242E3C",
        mako: "#43464B",
        green: "#04CB00",
        sugarCane: "#F3FFF2",
        boulder: "#787878",
        zircon: "#F6F7FF",
        solitude: "#E9F4FF",
        pigeonPost: "#BACCDF",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
