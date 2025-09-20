const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const theme = require('./app.theme');

//const JsUtil = require('../jsx/common/JsUtil.jsx');
//const publicPath = JsUtil.prod_mode == 1? 'https://www.pc8g.com/': 'https://d18.pc8g.com/';
const publicPath = 'http://ec2-13-229-223-170.ap-southeast-1.compute.amazonaws.com:8443/';

const webpackConfig = {
  mode:  'production',
  entry: {
    app: path.join(__dirname, '../jsx/index.jsx'),
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-router']
  },
  output: {
    path: path.join(__dirname, '../prd'),
    filename: 'fe/js/[name].[chunkhash].js',
    publicPath: publicPath
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 102400,
      maxSize: 202400,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: 'pcng-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  cache: true,
  devtool: false,
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
          {
            loader: 'babel-loader'
          },
          {
            loader: 'lazyload-loader'
          }
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
        use: ['url-loader?limit=1&name=fe/images/[name].[hash:8].[ext]']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=1&name=iconfont/[name].[hash:8].[ext]']
      },
      {
        test: /\.mp3$/,
        use: ['file-loader?name=media/[name].[hash:8].[ext]']
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname,
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new webpack.LoaderOptionsPlugin({
      options:{
        mode:'production',
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressBarPlugin({
      format: '  build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 60
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../static/html/index.html'),
      inject: true,
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        collapseWhitespace: true
      }
    })
  ]
}

module.exports = webpackConfig;
