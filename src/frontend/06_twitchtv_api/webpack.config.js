var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '../../../public/frontend/06_twitchtv_api');

module.exports = {
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './dev/js/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("css-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        template: 'dev/index.html'
    })
  ]
};