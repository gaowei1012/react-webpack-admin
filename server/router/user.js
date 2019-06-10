const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = {
    code: 0,
    message: '用户页面'
  }

  await next()
})

// 用户注册
router.post('/register', async (ctx, next) => {

  let User = mongoose.model('User')
  let newUser = new User(ctx.request.body)

  await newUser.save().then(() => {
    ctx.body = {
      code: 0,
      message: '注册成功'
    }
  })
  .then((err) => {
    ctx.body = {
      code: 1,
      message: '注册失败'
    }
  })

  await next()
})

// 用户登录


module.exports = router
