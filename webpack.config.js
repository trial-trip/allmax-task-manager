const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TEST DEV'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          }
        ]
      },
    ]
  }
}
