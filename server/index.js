const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const { initShema, connect } = require('./db/init')

const app = new Koa()
let router = new Router()

let user = require('./router/user')

router.use('/user', user.routes())

// 数据库连接操作
;(async () => {
  await connect()
  // initShema()
})()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3030, () => {
  console.log('server started at port 3030')
})