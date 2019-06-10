const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
let ObjjectId = Schema.Types.ObjectId
const SALT_WORK_FACTOR = 10


// 用户注册模型
const userSchema = new Schema({
  UserId: ObjjectId,
  username: {required: true, type: String},
  password: {required: true, type: String},
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type: Date, default: Date.now()}
}, {
  collation: 'user'
})

// 加密用户密码
userSchema.pre('save', function(next) {
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) throw next(err)
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) throw next(err)
      this.password = hash
      next()
    })
  })
})

userSchema.method = {
  // 对比两次密码是否为一致
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}

mongoose.model('User', userSchema)