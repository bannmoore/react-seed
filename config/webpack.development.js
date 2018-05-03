const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],

  output: {
    path: path.resolve(__dirname, './../dev')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: { path: './config/postcss.config.js' } }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader']
        }),
        include: [/node_modules/]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
