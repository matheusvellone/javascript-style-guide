module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: [
    "react",
  ],
  extends: [
    require.resolve('./common'),
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  rules: {
    'react/no-access-state-in-setstate': ['error'],
    'react/no-unused-prop-types': ['error'],
  }
};
