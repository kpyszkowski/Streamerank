/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: colors.amber[400],
          lighter: colors.yellow[400],
          darker: colors.amber[500],
        },
        emerald: {
          1000: '#021d16',
        },
        primary: colors.emerald[950],
        secondary: colors.teal[800],
        tertiary: colors.emerald[1000],
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
