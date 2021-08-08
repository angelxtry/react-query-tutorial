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
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'naver',
        jsx: 'never',
      },
    ],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
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
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
};
