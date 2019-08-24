module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'dot-notation': 'off',
    'jsx-a11y/href-no-hash': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
  globals: {
    __DEV__: true,
  },
};
