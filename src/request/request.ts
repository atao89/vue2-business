/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 15:55:49
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-14 22:36:02
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8360',
    timeout: 10000,
})

instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
        config.headers = config.headers || {}
        config.headers['X-Nideshop-Token'] = token
    }
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use((result: AxiosResponse): AxiosResponse => {
    return result.data
}, err => {
    return Promise.reject(err)
})

export default instance