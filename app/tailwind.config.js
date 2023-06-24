/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        accent: colors.yellow[500],
        primary: colors.emerald[950],
        secondary: colors.teal[800],
        emerald: {
          1000: '#02261d',
        },
      },
      backgroundImage: {
        'hero-pattern': 'url("./assets/pattern.svg")',
      },
    },
    fontFamily: {
      heading: ['Syne', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
