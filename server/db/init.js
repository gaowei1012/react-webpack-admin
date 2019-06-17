// 数据库连接操作
// 初始化数据库，连接优化处理
const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/fl_service'
const config = require('./../config/config')
const glob = require('glob')
const { resolve } = require('path')

// init schema 
exports.initShema = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

// mongodb connect 
exports.connect = () => {
  mongoose.connect(config.db)
  let maxConnection = 0

  return new Promise((resolve, reject) => {
    mongoose.connection.on('disconnected', () => {
      console.log('数据库连接成功')
      if (maxConnection <= 3) {
        maxConnection++
        mongoose.connect(config.db)
      }
      else {
        reject()
        throw new Error('数据库连接失败，请检查数据库是否正常开启')
      }
    })

    mongoose.connection.on('error', () => {
      console.log('数据量连接失败')
      if (maxConnection <= 3) {
        maxConnection++
        mongoose.connect(config.db)
      }
      else {
        reject()
        throw new Error('数据库连接失败， 请检查是否打开正常')
      }
    })

    mongoose.connection.once('open', () => {
      console.log('数据库打开成功')
      resolve()
    })
  })
}
