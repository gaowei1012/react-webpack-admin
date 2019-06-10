const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const { initShema, connect } = require('./db/init')

const app = new Koa()

// 数据库连接操作
;(async () => {
  await connect()
  // initShema()
})()

app.listen(3030, () => {
  console.log('server started at port 3030')
})