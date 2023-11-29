const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/client/client.js',
  // entry: {
  //   'bundle' : './src/client/client.js',
  //   'service-worker' : './src/client/js/service-worker.js'
  // },
  mode: 'development',
  output: {
    // filename: "[name].js",
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    
    
    
  ],
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};