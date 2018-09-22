module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'compat'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'import/prefer-default-export': 1,
    'implicit-arrow-linebreak': 0
  },
};