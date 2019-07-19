import { getUsersByPageSize  } from './mockdata/user';

export default {
  'post /mock/login': (config) => {
    const { username, password } = JSON.parse(config.data);
    return new Promise((resolve, reject) => {
      if(username !== 'test' || password !== '111') {
        setTimeout(() => {
          reject({
            code: -1,
            message: '用户名或密码错误'
          })
        }, 1000);
      } else {
        setTimeout(() => {
          resolve({
            code: 1,
            message: '登录成功'
          })
        }, 1000);
      }
    })
  },

  'post /mock/logout': {},

  'post /mock/user-center': (config) => {
    const { password, pageNum } = config.params;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([200, {
          pageNum,
          pageSize,
          total,
          list: getUsersByPageSize(pageSize)
        }])
      }, 1000);
    })
  },

  'post /mock/user-center/.+': {id: 1, name: '执念', age: 22, job: 'web devlement' },
  'post /mock/user-center': true,
  'post /mock/user-center': true,
  'delete re:/mock/user-center/.+': 'id',
}