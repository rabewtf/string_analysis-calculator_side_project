module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: 'eslint:recommended',
  plugins: 'prettier',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
