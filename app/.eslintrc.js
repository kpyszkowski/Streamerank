module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  root: true,
  extends: ["custom", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn"
  }
};