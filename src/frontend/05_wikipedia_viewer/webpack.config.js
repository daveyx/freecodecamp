var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '../../../public/frontend/05_wikipedia_viewer');

var config = {
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './src/client/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src/client/app'),
        loader: 'babel-loader'
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
