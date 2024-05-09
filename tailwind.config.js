/** @type {import('tailwindcss').Config} */
export default {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        generalRegular: ["GeneralSansRegular"],
        generalMedium: ["GeneralSansMedium"],
      },
    },
  },
  plugins: [],
};
