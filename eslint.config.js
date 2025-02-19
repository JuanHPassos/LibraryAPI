import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      ecmaVersion: "latest",
      sourceType: "module"
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: "eslint:recommended",
  },
  pluginJs.configs.recommended,
];