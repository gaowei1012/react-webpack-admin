'use strict'
const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口起点
  entry: {
    app: './src/index.js',
  },
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
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
        loader: 'babel-loader?cacheDirectory', // 使用缓存的方式优化加载速度
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules|bower_components)/,// 屏蔽不需要处理的文件（文件夹）（可选）
      //   loader: 'babel-loader',
      //   include: path.resolve(__dirname, '../src')
      // },
      {// eslint
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: { fix: true }
        }],
        include: path.resolve(__dirname, '../src/**/*.js'),
      },
      {// css|less
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       publicPath: (resourcePath, context) => {
        //         // publicPath is the relative path of the resource to the context
        //         // e.g. for ./css/admin/main.css the publicPath will be ../../
        //         // while for ./css/main.css the publicPath will be ../
        //         return path.relative(path.dirname(resourcePath), context) + '/';
        //       },
        //     },
        //   },
        //   'style-loader',
        //   'css-loader'
        // ]
      },
      {
        test: /\.less$/,
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
    // minix extract css
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css'
    // })
  ]
};
