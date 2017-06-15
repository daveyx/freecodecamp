var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '../../../public/frontend/04_local_weather');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  devServer: {
    inline: true,
    contentBase: '../../../public/frontend/04_local_weather',
    port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
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
        template: 'src/client/index.html'
    })
  ]
};

module.exports = config;
