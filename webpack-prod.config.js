var webpack = require("webpack");
var merge = require("webpack-merge");
var baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
  devtool: "cheap-module-source-map",
  mode: production,
  output: {
    chunkFilename: "[id].[chunkhash].js"
  }
});
