/*
 * @Description: webpack prod config
 * @Author: 执念
 * @Date: 2019-09-02 21:19:33
 * @LastEditTime: 2019-09-02 21:39:47
 * @LastEditors: Please set LastEditors
 */
'use strict'
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = merge(baseWebpackConfig, {
  // 模式
  mode: "production",
  // 调试工具
  devtool: '#source-map',
  // 输出
  output: {
    path: resolve('../dist/js'),
    //filename: "js/[name].[chunkhash].js",
    filename: '[name].[chunkhash].js'
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(['dist',], {
      root: resolve('../'),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  // 代码分离相关
  optimization: {
    nodeEnv: 'production',
    minimizer: [new UglifyJSPlugin()],
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        }
      }
    }
  }
});
