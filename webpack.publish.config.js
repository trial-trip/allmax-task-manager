const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const basicConfig = require('./webpack.config.js')

const githubPagesConfig = {
  ...basicConfig,
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    ...basicConfig.plugins,
    new CleanWebpackPlugin(['docs']),
  ],
}

module.exports = githubPagesConfig