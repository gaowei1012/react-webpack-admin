import axios from 'axios';
import option from './request_config';

const request = (option) => {
  // 简单封装request请求方法
  return new Promise((resolve, reject) => {
    axios({
      url: option.base_url,
      method: 'POST',
      headers: ''
    }).then(response => {
      if (response.statusText !== 'success') return Error(`this is error ====>response statusTestError`)
      if (response.status !== 200) return Error(`this is error ===> resposne status error`) 
      resolve(response.data);
    }).catch(e => {
      reject(e)
    })
  })
} 

module.exports = request;