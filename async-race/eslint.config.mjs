export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['error', { "ignoreTypeIndexes": true }],
    'max-lines-per-function': ['error', { max: 40, skipBlankLines: true, skipComments: true }],
  },
  ignorePatterns: ["dist", "node_modules"],
}