const Router = require('koa-router')
const controller = require('../controller/users')

const router = new Router({
  prefix: '/api'
})

router.get('/', controller.getHome);

router.post('/user/register', controller.postRegisetr);

router.post('/user/login', controller.postLogin);

module.exports = router;
