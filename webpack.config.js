const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Allmax Task Manager'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, exclude: /node_modules/, use: { loader: 'awesome-typescript-loader' } },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       query: {
      //         modules: true,
      //         camelCase: true,
      //         importLoaders: 1,
      //         sourceMap: true,
      //         localIdentName: '[name]__[local]__[hash:base64:5]'
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }
    ]
  }
};
