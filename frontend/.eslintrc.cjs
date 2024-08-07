/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'], // Ensures Prettier rules are enforced
    // Add any additional rules or overrides here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
};
