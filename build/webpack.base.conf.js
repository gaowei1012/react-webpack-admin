'use strict'
const path = require('path');
const webpack = require('webpack');
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
        exclude: /(node_modules|bower_components)/,// 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader',
        // query: { // 编译jsx语法
        //   presets: ['es2015','react']
        // }  
      },
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
    })
  ]
};
