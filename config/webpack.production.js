const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './../dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64]',
              minimize: true
            }
          },
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
          use: [{ loader: 'css-loader', options: { minimize: true } }]
        }),
        include: [/node_modules/]
      }
    ]
  }
})
