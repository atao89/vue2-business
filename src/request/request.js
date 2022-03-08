/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 15:59:27
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-03 02:00:39
 */
import axios from "axios"
import { Message } from 'element-ui'

// create
const instance = axios.create({
    timeout: 1500,
    baseURL: 'http://kumanxuan1.f3322.net:8360'
})

// 请求拦截器
instance.interceptors.request.use(config => {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers = config.headers || ''
        config.headers['X-Nideshop-Token'] = token
    }
    return config;
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(result => {
    let data = result.data
    if (data.errno != 0) {
        // 提示错误
        Message({
            message: data.errmsg || "网络请求错误",
            type: "error",
        });
    }
    return data;
}, err => {
    return Promise.reject(err)
})

export default instance