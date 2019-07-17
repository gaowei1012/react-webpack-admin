import axios from 'axios';
import { message } from 'antd';

// 封装一个请求方法，用户获取请求后端数据
// 拦截处理

axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    message.error(`请求超时 ==> ${err}`, 3);
  }
);

axios.interceptors.request.use(
  data => {
    if (data.status && data.status == 200 && data.data.message == 'err') {
      message.error(`request err ====> ${data.data.message}`);
      return;
    }
    return data;
  },
  err => {
    if (data.response.status == 504 && data.response.status == 404) {
      message.error('服务器被🐩吃了(#‵′)凸', 3);
    } else if (data.response.status == 403) {
      message.error('亲，你权限不足', 3);
    } else {
      message.error('未知错误', 3);
    }
    return Promise.reject(err);
  }
);

let base = 'http://localhost:3030/';

/**
 *
 * @param {String} url 请求路径
 * @param {Object} parmas?<可选> 请求参数
 */
export const requestHome = (url, parmas = {}) => {
  axios({
    url: `${base}${url}`,
    method: 'GET',
    headers: {
      'Content-Type': 'appliction/x-www-form-urlencode'
    }
  })
}

// export const potRequest = (url, parmas) =>  {
//   axios({
//     method: "POST",
//     url: `${base}${url}`,
//     data: parmas,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencode'
//     }
//   })
// }

export const postRequest = (url, parmas) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${base}${url}`,
      data: parmas,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        resolve(res.data);
        console.log('res--->' + res)
      })
      .catch(err => {
        reject(err);
      });
  });
};
