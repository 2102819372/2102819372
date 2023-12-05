module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["@typescript-eslint", "vue", "html"],
  rules: {
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": true,
        "x-invalid-namespace": false,
      },
    ],
    "no-console": "error",
    "no-debugger": "error",
  },
};
