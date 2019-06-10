const Router = require('koa-router')

let router = new Router()

router.get('/', async ctx => {
  ctx.body = {
    code: 0,
    message: '用户页面'
  }
})


module.exports = router
