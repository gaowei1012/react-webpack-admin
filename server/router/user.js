const Router = require('koa-router')
const controller = require('../controller/users')

const router = new Router({
  prefix: '/api'
})

router.get('/', controller.getHome);

router.post('/register', controller.postRegisetr);

router.post('/login', controller.postLogin);

module.exports = router;
