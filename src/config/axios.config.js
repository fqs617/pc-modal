import Vue from 'vue'
import axios from 'axios'
// import store from '@/stores'

/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */

const service = axios.create({
  timeout: 20000,                  // 请求超时时间
  withCredentials: true          // 跨域
})
// loading 组
let ARR_LOADING = []
let IS_LOADING = false
let LOADING_INSTANCE
service.interceptors.request.use(config => {
  if (config.isLoading) {
    ARR_LOADING.push(config.url)
    if (!IS_LOADING && !LOADING_INSTANCE) {
      IS_LOADING = true
      LOADING_INSTANCE = Vue.$loading()
    }
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    let {data: {code, message, data}, config} = response
    if (config.isLoading) {
      let index = ARR_LOADING.indexOf(config.url)
      ARR_LOADING.splice(index, 1)
      if (ARR_LOADING.length === 0 && LOADING_INSTANCE) {
        LOADING_INSTANCE.close()
        IS_LOADING = false
      }
    }
    // 如果不是code 返回值
    if (Vue.bqUtils.isUndefined(code)) {
      return response.data
    }
    if (code !== '0') {
      // 登录失效时移除cookie
      // 是否自动提示消息
      if (config.isAutoMsg) {
        Vue.$notify({
          title: '提示',
          message: message,
          duration: 0
        })
      }
      return Promise.reject({code, data, message}) // eslint-disable-line
    } else {
      return data
    }
  },
  error => {
    console.log('err' + error)
    if (error.message !== undefined) {
      Vue.$notify.error({
        title: '消息提示',
        message: error.message
      })
      ARR_LOADING = []
      LOADING_INSTANCE && LOADING_INSTANCE.close()
      IS_LOADING = false
    }
    return Promise.reject(error)
  }
)

export default service
