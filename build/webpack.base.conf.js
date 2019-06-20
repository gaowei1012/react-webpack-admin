'use strict'
const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const os = require('os')
const HappyPack = require('happypack')
const HappyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

// resolve func
const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
  // 入口起点
  entry: {
    app: resolve('./src/index.js'),
    // app: './src/index.js',
  },
  // 输出
  output: {
    path: resolve('../dist'),
    filename: "[name].js",
  },
  // 解析
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.web.js', '.web.jsx']
  },
  // loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'happypack/loader?id=happyBabelJs',
        // loader: 'babel-loader?cacheDirectory=true', // 使用缓存的方式优化加载速度
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/
      },
      {// eslint
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: { fix: true }
        }],
        include: resolve('../src/**/*.js')
        // path.resolve(__dirname, '../src/**/*.js'),
      },
      {// css|less
        test: /\.css$/,
        // use: 'happypack/loader?id=happyBabelCss',
        use: ['style-loader', 'css-loader'],
        // include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.less$/,
        // use: 'happypack/loader?id=happyBabelLess',
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'less-loader',
            options: {javascriptEnabled: true}
          }
        ]
      },
      { // images
        test: /\.(jpg|png|jpge|gif|svg)$/,
        // use: 'happypack/loader?id=happyBabelImg',
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name]-[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  // html plugins config
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    // new AddAssetHtmlPlugin({
    //   publicPath: path.relative(__dirname, '..', './src/assets/all'),
    //   outputPath: 'dll',
    //   filepath: resolve('../src/assets/dll/*.js'),
    //   includeRelatedFiles: false,
    //   typeOfAsset: 'js'
    // }),
    new HappyPack({
      id: 'happyBabelJs',
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory=true'
        }
      ],
      threadPool: HappyThreadPool,
      verbose: true
    }),
    // new HappyPack({
    //   id: 'happyBabelCss',
    //   loaders: [ 'style-loader', 'css-loader' ],
    //   threadPool: HappyThreadPool,
    //   verbose: true
    // }),
    // new HappyPack({
    //   id: 'happyBabelLess',
    //   loaders: [
    //     {loader: 'style-loader'},
    //     {loader: 'css-loader'},
    //     {
    //       loader: 'less-loader',
    //       options: {javascriptEnabled: true}
    //     }
    //   ],
    //   // threadPool: HappyThreadPool,
    //   verbose: true
    // }),
    // new HappyPack({
    //   id: 'happyBabelImg',
    //   loaders: [{
    //     loader: 'url-loader',
    //     options: {
    //        limit: 8192,
    //        name: 'images/[name]-[hash:8].[ext]'
    //     }
    //   }],
    //   threadPool: HappyThreadPool,
    //   verbose: true
    // })
  ]
};
