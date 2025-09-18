const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./app.theme');

const webpackConfig = {
  mode:  'development',
  entry: {
    app: path.join(__dirname, '../jsx/index.jsx')
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      image: path.join(__dirname, '../static/image'),
      video: path.join(__dirname, '../static/video'),
      jsx: path.join(__dirname, '../jsx'),
      js: path.join(__dirname, '../static/js'),
      css: path.join(__dirname, '../static/css')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=1&name=images/[name].[ext]']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=1&name=iconfont/[name].[ext]']
      },
      {
        test: /\.mp3$/,
        use: ['file-loader?name=media/[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../static/html/index.html'),
      inject: true
    })
  ]
}

module.exports = webpackConfig;
