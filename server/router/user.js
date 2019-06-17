const Router = require('koa-router')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
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
      message: `注册失败 => ${err}`
    }
  })

  await next()
})

// 用户登录
router.post('/login', async (ctx, next) => {

  let loginUser = ctx.request.body
  let username = loginUser.username
  let password = loginUser.password

  const User = mongoose.model('User')

  await User.findOne({username}).exec()
    .then(async user => {
      if (user) {
        let newUser = new User()
        // 密码加密后处理,设置token作为登录验证
        // expiresIn 过期时效性
        let token = jwt.sign({username}, config.secretOrKey, {expiresIn: 60 * 60 * 1})
        await newUser.comparePassword(password, user.password)
          .then(isMatch => {
            ctx.body = {
              code: 0,
              message: '登录成功',
              token: token
            }
          })
          .catch(error => {
            ctx.body = {
              code: 1,
              message: 'error: ' + error
            }
          })
      } else {
        ctx.body = {
          code: 1,
          message: '登录失败,请检查用户名或密码是否正确'
        }
      }
    })

  /*
  await User.findOne({username: username}).exec()
    .then(async result => {
      if (result) {
        let newUser = new User()
        await newUser.comparePassword(password, result.password)
          .then(isMatch => {
            ctx.body = {
              code: 0,
              message: isMatch
            }
          })
          .catch(err => {
            ctx.body = {
              code: 1,
              message: err
            }
          })
      } else {
        ctx.body = {
          code: 0,
          message: '用户名不存在'
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: 500,
        message: err
      }
    })
    */

  await next()
})



module.exports = router
