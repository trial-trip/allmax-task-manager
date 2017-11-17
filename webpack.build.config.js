const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const basicConfig = require('./webpack.config.js')

const buildConfig = {
  ...basicConfig,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    ...basicConfig.plugins,
    new CleanWebpackPlugin(['build']),
  ],
}

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

module.exports = [buildConfig, githubPagesConfig]