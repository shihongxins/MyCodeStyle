module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  /*
  extends: ["plugin:vue/essential", "standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  */
  extends: ["plugin:vue/vue3-recommended", "plugin:vue/essential", "standard", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
    requireConfigFile: false,
    parser: "@babel/eslint-parser",
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        vueIndentScriptAndStyle: true,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
