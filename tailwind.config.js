module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "400": '400px'
      },
      fontSize: {
        tiny: "0.625rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Menlo", "Monaco", "Courier New", "monospace"],
      },
      colors: {
        whitish: '#edf2f4',
        gray: '#8d99ae',
        darkGray: '#2b2d42',
        red: '#ef233c',
        darkRed: '#d90429'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
