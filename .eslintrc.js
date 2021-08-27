module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['react-hooks', 'jest', 'simple-import-sort'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-nested-ternary': 'off',
    'no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-console': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 0,
    'import/no-unresolved': 2,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    camelcase: 'off',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
      },
    },
  ],
};
