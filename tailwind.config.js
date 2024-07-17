/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat"], //500,700
        secondary: ["Fraunces", "Helvetica"], //700
      },
      colors: {
        darkcyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        verydarkblue: " hsl(212, 21%, 14%)",
        darkgrayishblue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        mobile: "url(../assets/images/image-product-mobile.jpg)",
        desktop: "url(../assets/images/image-product-desktop.jpg)",
      },
      screens: {
        xxs: "370px",
        xs: "430px",
        sm: "640px",
        md: "820px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
