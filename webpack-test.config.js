const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig,
  {
    devtool: 'inline-source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        eslint: {
          failOnError: false,
          failOnWarning: false,
        },
      }),
    ],
  });
