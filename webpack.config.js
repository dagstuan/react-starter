const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/js/index.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    // extract CSS into separate file
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].bundle.css"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  devServer: {
    compress: true,
    publicPath: "/dist/"
  }
};
