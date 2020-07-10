const Htmlwebpackplugin = require('html-webpack-plugin');
const Minicss = require('mini-css-extract-plugin');
const { resolve } = require('path');

module.exports = {
  configBaseDir: resolve(__dirname, 'node_modules'),
  plugins: [
    'stylelint-group-selectors',
    'stylelint-csstree-validator',
    'stylelint-no-unsupported-browser-features',
    'stylelint-selector-no-empty',
    'stylelint-no-unused-selectors',
  ],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-scss',
    'stylelint-a11y/recommended',
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',

        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new Minicss({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};