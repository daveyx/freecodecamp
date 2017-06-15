var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3000
  },
  devtool: 'source-map',
  entry: './dev/js/index.js',
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
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'js/bundle.min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        template: 'dev/index.html'
    })
  ]
};
