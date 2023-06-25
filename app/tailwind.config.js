/** @type {import('tailwindcss').Config} */
import baseColors from 'tailwindcss/colors'

const colors = {
  ...baseColors,
  emerald: {
    ...baseColors.emerald,
    1000: '#021d16',
  },
}

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
        primary: colors.emerald[950],
        secondary: colors.teal[800],
        tertiary: colors.emerald[1000],
      },
      backgroundImage: {
        'hero-pattern': 'url("./assets/pattern.svg")',
      },
    },
    colors,
    fontFamily: {
      heading: ['Syne', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
