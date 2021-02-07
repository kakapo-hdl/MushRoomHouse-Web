import axios from 'axios'


export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  // 2.axios的拦截器
  instance.interceptors.request.use(
    config => {
    if(localStorage.getItem('Token')!=''){
      config.headers.Token = localStorage.getItem('Token');
    }
    // if (config.method === 'post') {
    //       if (config.headers['Content-Type'] != 'application/json') {
    //         console.log();
    //       }
    //     }
      return config
    }
  )
  // 2.2.响应拦截
  instance.interceptors.response.use((data) => {
    return data.data;
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

