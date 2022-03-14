/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 09:43:32
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-13 18:16:23
 */
declare module '*.vue' {
  import Vue from 'vue'
  declare global {
    namespace Ajax {
      interface AjaxRsp {
        errno: number;
        errmsg: string;
        data: any
      }
    }
  }
  export default Vue
}
