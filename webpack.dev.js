const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './src/client/client.js',
  mode: 'development',
  devtool: 'eval-source-map',
  stats: 'verbose',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    })
  ],
};