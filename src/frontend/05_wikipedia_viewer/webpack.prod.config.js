var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '../../../public/frontend/05_wikipedia_viewer');

var config = {
entry: ['babel-polyfill', './src/client/app/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.[hash].js',
    publicPath: '/freecodecamp/frontend/05_wikipedia_viewer'
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
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        template: 'src/client/index.html'
    })
  ]
};

module.exports = config;
