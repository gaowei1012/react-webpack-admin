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
  const User = mongoose.model('User')
  let newUser = new User(ctx.request.body)

  let username = ctx.request.body.username

  // 为了防止用户重复注册
  // 查询当前用户注册的用户名是否重复
  const user = await User.findOne({username})
  // 在查询不为空的情况下
  if (user !== null) {
    if(user.username == ctx.request.body.username) {
      ctx.body = {
        code: 1,
        message: '用户名重复，请重新更换用户名'
      }
    } else {
      await newUser.save().then(() => {
        ctx.body = {
          code: 0,
          message: '注册成功'
        }
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          message: `注册失败${err}`
        }
      })
    }
  } else {
    await newUser.save().then(() => {
      ctx.body = {
        code: 0,
        message: '注册成功'
      }
    })
    .catch(err => {
      ctx.body = {
        coed: 500,
        message: `注册失败${err}`
      }
    })
  }
  
  await next()
})


// 用户登录
router.post('/login', async (ctx, next) => {
  let loginUser = ctx.request.body
  let username = loginUser.username
  let password = loginUser.password
  const User = mongoose.model('User')

  await User.findOne({username: username}).exec().then(async (result) => {
    if (result) {
      let newUser = new User()
      // token
      let token = jwt.sign({username}, config.secretOrKey, { expiresIn: 60 * 60 * 60 * 24 })
      await newUser.comparePassword(password, result.password)
        .then((isMatch) => {
          ctx.body = {
            code: 0,
            message: isMatch,
            token: token
          }
        })
        .catch(err => {
          ctx.body = {
            code:1,
            message: err
          }
        })
    } else {
      ctx.body = {
        code: 0,
        message: '用户名不存在'
      }
    }
  }).catch(err => {
    console.log(err)
    ctx.body = {
      code: 500,
      message: err
    }
  })

  await next()
})


module.exports = router
