/*
 * @Description: webpack dev config
 * @Author: 执念
 * @Date: 2019-09-02 21:19:33
 * @LastEditTime: 2019-09-02 21:28:56
 * @LastEditors: Please set LastEditors
 */
'use strict'
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path')
const webpack = require('webpack');

// const DllPath = path.resolve(__dirname, '../src/assets/all/react-a244f6f39d15b4533bde.dll.js');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = merge(baseWebpackConfig, {
  // 模式
  mode: "development",
  // 调试工具
  devtool: 'inline-source-map',
  // 开发服务器
  devServer: {
    contentBase: false,// 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
    historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true,// 启用gzip压缩
    inline: true,// 设置为true，当源文件改变时会自动刷新页面
    hot: true,// 模块热更新，取决于HotModuleReplacementPlugin
    host: '127.0.0.1',// 设置默认监听域名，如果省略，默认为“localhost”
    port: 8703, // 设置默认监听端口，如果省略，默认为“8080”
    open: false, // 自动打开浏览器
  },
  // 插件
  plugins: [
    // 热更新相关
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DllReferencePlugin({ // 打包优化 提高打包速度
    //   // content: DllPath,
    //   manifest: require('../react.dll.manifest.json'),
    // })
  ],
  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      chunks: 'async',
      minSize: 3000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true, // webpack 运行时会打包runtime.js
  }
});
