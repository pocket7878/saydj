const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.join(__dirname, 'dist')
const mainConfig = {
  mode: 'development',
  target: 'electron-main',
  entry: './src/main/index.ts',
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
}
const rendererConfig = {
  mode: 'development',
  target: 'electron-renderer',
  entry: './src/renderer/index.tsx',
  output: {
    path: outputPath,
    filename: 'renderer.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src/renderer'), 'node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}

module.exports = [mainConfig, rendererConfig]
