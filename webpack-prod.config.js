var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config');

module.exports = merge(baseConfig,
{
  devtool: 'cheap-module-source-map',
  output: {
    chunkFilename: '[id].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      eslint: {
        failOnError: true,
        failOnWarning: true
      }
    }),
  ]
});
