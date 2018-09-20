const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    // publicPath is prefixed onto every URL created by runtimes or loaders.
    // Docs: https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(eot|svg)$/,
        use: 'file-loader?name=assets/[name].[hash:20].[ext]'
      },
      {
        test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        use: 'url-loader?name=assets/[name].[hash:20].[ext]&limit=10000'
      },
      // CSS imports from node_modules are extracted into an external stylesheet.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [{ loader: 'css-loader', options: { minimize: true } }]
        }),
        include: [/node_modules/]
      }
    ]
  },

  plugins: [
    // HtmlWebpackPlugin automatically generates an index.html file based on the provided template.
    new HtmlWebpackPlugin({
      template: './config/index.template.html'
    }),
    // ExtractTextPlugin allows us to extract certain styles to be loaded separately from the app.
    new ExtractTextPlugin('styles/[name].css')
  ],

  resolve: {
    // Allows certain file extensions to be imported without specifying the extension.
    // For example, `import Component from 'component'` rather than `import Component from
    // 'component.js'`.
    extensions: ['.js', '.jsx', '.json'],

    // Allows packages in node_modules to be loaded by name.
    modules: [path.resolve(__dirname, './../node_modules')]
  },

  // Specifies what data is displayed when running the `webpack` command.
  stats: {
    all: false,
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true
  }
}
