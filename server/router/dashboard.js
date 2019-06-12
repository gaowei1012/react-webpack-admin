// 首页数据
const Router = require('koa-router');
let router = new Router();

router.get('/dashboard', async (ctx, next) => {
  ctx.body = {
    code: 0,
    message: 'success'
  }

  await next();
});

module.exports = router;
