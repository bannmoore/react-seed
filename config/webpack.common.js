const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: process.env.MODE,

  output: {
    publicPath: ''
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './config/index.template.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.MODE)
    }),
    new ExtractTextPlugin('styles/[name].css')
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './../node_modules')]
  },

  stats: {
    all: false,
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true
  }
}
