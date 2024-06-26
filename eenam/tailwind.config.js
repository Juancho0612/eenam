/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#6c1c9c",
        secondary: "#F5E6E0",
        bg: "#bb32d4",
        button: "#e41e8d",
      },
      backgroundImage: {
        bgg: "url(https://img.freepik.com/vector-gratis/bokeh-fondo-realista_23-2149321460.jpg?w=996&t=st=1714159229~exp=1714159829~hmac=832f697f7d9c7136930bc8381e824a71ccfb57793a22b667c79f2ac9a60be818)",
        hero: "url('/img/bg.jpg')"
      },
      
    },
  },
  plugins: [],
};
