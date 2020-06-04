module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "prettier", "react"],
  root: true,
  rules: {
    // eslint official
    "newline-before-return": "error",
    "no-console": "warn",
    "no-continue": "off",
    "require-yield": "error",

    // for react-app-env.d.ts (https://github.com/facebook/create-react-app/issues/6560)
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"],
      },
    ],

    // @typescript-eslint
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-empty-function": "off",

    // react
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: ["jsx", "tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [
      "warn",
      {
        custom: "ignore",
      },
    ],
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",

    // import
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
