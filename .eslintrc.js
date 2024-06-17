module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': ['error', 4],
    'indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx', 'tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
  },
  globals: {
    '__IS_DEV__': true
  },
};
