import axios from 'axios'
// import { getToken } from './auth'
const requestBaseURL = process.env.NODE_ENV === "development" ? '' : '/pro-api'

const request = axios.create({
  baseURL: requestBaseURL,
  timeout: 5000
})

//请求拦截
// request.interceptors.request.use(request => {
//   //从localStorage获取token并添加到headers
//   const token = getToken()
//   if(token) {
//     request.headers.common['Authorization'] = 'Bearer ' + token
//   }
//   return request
// })

//响应拦截
// request.interceptors.response.use(response => {
  // 如果token检测失败则跳转到登录页
  // if(response.status === 401) {
  //   // window.location.href = "http://localhost:3000/"
  //   removeUser()
  // }
  // console.log(response)
//   return response
// },
// error => {
//   console.log(error)
//   return Promise.reject(error)
// }
// )

export default request

