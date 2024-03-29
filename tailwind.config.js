module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Marron-F": "#CEC7B9",
        "Default/me/Marron-C": "#F8E9DE",
        "Default/me/Marron-TF": "#9A735F"
      },
      "fontSize": {
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5625rem",
        "2xl": "1.875rem",
        "3xl": "2.1875rem",
        "4xl": "5rem"
      },
      "fontFamily": {
        "poppins": "Poppins",
        "Lato": "Lato"
      },
      "boxShadow": {
        "EFFET": "0px 0px 10px 0px rgba(255,255,255,0.75)"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "1.25rem",
        "default": "1.875rem",
        "lg": "2rem",
        "xl": "2.1875rem",
        "full": "9999px"
      }
    },
  },
  plugins: [],
}
