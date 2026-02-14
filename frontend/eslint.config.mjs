import eslint from "eslint";

export default [
  {
    files: ["*.js"],
    languageOptions: { parserOptions: { ecmaVersion: 2020 } },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "warn",
    },
  },
];