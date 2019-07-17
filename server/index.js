const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const { initShema, connect } = require('./db/init')

const app = new Koa()
let router = new Router()

app.use(require('./router/user').routes())

// 数据库连接操作
;(async () => {
  await connect(),
  initShema()
})();


app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3032, () => {
  console.log('server started at port 3032')
})