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
      },
    },
    fontFamily: {
      heading: ['Syne', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
