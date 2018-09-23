module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'compat'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    "strict": 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/destructuring-assignment': 0,
    'import/prefer-default-export': 1,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
    'operator-linebreak': 0,
    'react/jsx-wrap-multilines': 0,
  },
};