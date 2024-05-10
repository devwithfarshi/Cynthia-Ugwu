/** @type {import('tailwindcss').Config} */
export default {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        generalRegular: ["GeneralSansRegular"],
        generalMedium: ["GeneralSansMedium"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
