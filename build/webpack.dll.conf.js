'use strict'

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dllPath = path.resolve(__dirname, '../src/assets/dll')

module.exports = {
  entry: {
    react: ['react', 'react-dom', 'react-router-dom', 'antd', 'axios', 'moment', 'prop-types', 'recharts', 'redux-alita', 'redux-logger', 'react-amap', 'react-document-title', 'react-color']
  },
  output: {
    path: dllPath,
    filename: '[name]-[hash].js',
    library: '_dll_[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]_[hash]',
      path: path.join(__dirname, '../', '[name].dll.manifest.json')
    }),
    new CleanWebpackPlugin(['*.js'], {
      root: dllPath
    })
  ]
}