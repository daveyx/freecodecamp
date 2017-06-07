var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    inline: true,
    contentBase: '../../public/06_twitchtv_api',
    port: 3000
  },
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
    path: path.resolve(__dirname, '../../public/06_twitchtv_api'),
    filename: 'js/bundle.[hash].js',
    publicPath: '/freecodecamp/06_twitchtv_api'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("css/styles.css"),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
        template: 'dev/index.html'
    })
  ]
};