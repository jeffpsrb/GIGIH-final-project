module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'import/prefer-default-export': 'off',
  },
};
