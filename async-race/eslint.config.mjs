import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import airbnbBase from 'eslint-config-airbnb-base';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default tseslint.config({
  ignores: ['dist', 'node_modules', 'eslint.config.mjs', 'webpack.config.js'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  tseslint.configs.strictTypeChecked,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': ['error', { "ignoreTypeIndexes": true, 'ignore': [1] }],
      'max-lines-per-function': ['error', { max: 40, skipBlankLines: true, skipComments: true }],
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  }
);