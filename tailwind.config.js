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
      backgroundImage: {
        productBanner: "url('../../public/assets/images/productbanner.png')",
        resAlcohol: "url('../../public/assets/images/resAlcohol.png')",
        resChildhood: "url('../../public/assets/images/resChildhood.png')",
        resCovid: "url('../../public/assets/images/resCovid.png')",
        resHandWashing: "url('../../public/assets/images/resHandWashing.png')",
        resHepatitis: "url('../../public/assets/images/resHepatitis.png')",
        resImmune: "url('../../public/assets/images/resImmune.png')",
        resSuperFood: "url('../../public/assets/images/resSuperFood.png')",
        resWorkplace: "url('../../public/assets/images/resWorkplace.png')",
        providerBanner: "url('../../public/assets/images/providerBanner.png')",
        providerMobileBanner:
          "url('../../public/assets/images/providerMobileBanner.png')",
        quotebanner: "url('../../public/assets/images/quotebanner.png')",
      },
    },
  },
  plugins: [],
};
