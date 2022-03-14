/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 18:17:14
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-14 22:22:38
 */
export interface LoginParams {
    username: string;
    password: string
}

export interface AttributeParams {
    page: string;
    size: string;
    name?: string;
    c_id?: string
}