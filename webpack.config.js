const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      './src/vendor.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // activate source maps via loader query
            {
              loader: 'css-loader',
              options: { sourceMap: true, importLoaders: 1 },
            },
            {
              loader: 'less-loader',
              options: { sourceMap: true },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    // extract CSS into separate file
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    compress: true,
    publicPath: '/dist/',
  },
};
