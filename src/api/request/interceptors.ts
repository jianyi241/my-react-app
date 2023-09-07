import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios'
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const instance: AxiosInstance = axios.create({
    timeout: 20000,
    withCredentials: true
})

// 请求拦截
instance.interceptors.request.use(
    (conf) => {
        console.log('URL ---> ', conf.url, '--->', conf)
        const token = sessionStorage.getItem('token') || ''
        // conf.headers?.auth = token
        Object.assign(conf.headers!, {
            auth: token
        })
        return Promise.resolve(conf)
    },
    (err) => {
        return Promise.reject(err)
    }
)

// 响应拦截
instance.interceptors.response.use(
    (res) => {
        return Promise.resolve(res)
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
