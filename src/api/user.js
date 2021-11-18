import axios from '../uitls/request'
// 定义有关user相关的网络请求
export const login = (data) => {
  // axios的请求 返回promise
  return axios.request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 请求...
