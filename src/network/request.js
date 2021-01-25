import axios from 'axios'
import Qs from 'qs'


export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用

  // instance.request(config => {
  //   return config
  // }, err => {
  //   console.log(err);
  // })
  instance.interceptors.request.use((config=>{
    console.log(config);
    if(config.method  === 'post'){
      if(config.headers['Content-Type'] != 'application/json'){
        console.log(config.data);
        config.data = Qs.stringify(config.data)
        console.log(config.data);
      }
    }
        // console.log(config);
    // if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    //   // 把一个参数对象格式化为一个字符串
    //   return Qs.stringify(config.data)
    // } else if (config.headers['Content-Type'] === 'multipart/form-data;charset=UTF-8') {
    //   return config
    // } else {
    //   config.headers['Content-Type'] = 'application/json'
    // }
    // JSON.stringify(config.data)
    return config
  }))
  // 2.2.响应拦截
  instance.interceptors.response.use((config) => {

    return config;
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

