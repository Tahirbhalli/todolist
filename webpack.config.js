// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies

import Htmlwebpackplugin from 'html-webpack-plugin';
import Minicss from 'mini-css-extract-plugin';

export const module = {
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
};

export const plugins = [
  new Htmlwebpackplugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new Minicss({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];
