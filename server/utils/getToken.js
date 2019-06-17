/**
 * 封装token方法
 */

const jwt = require('jsonwebtoken')
const config = require('../config/config')

const getToken = (payload = {}) => {
  return jwt.sign(payload, config.secretOrKey, { expiresIn: '4h' })
}

module.exports = getToken
