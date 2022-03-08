/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 15:53:14
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-08 22:16:19
 */
import request from "./request"

// 登录
export const LoginApi = (params) => request.post("/admin/auth/login", params)
// 使用：LoginApi({username: 'xxx', password: 'xxx'})

// 根据token获取用户登录信息
export const GetUserByTokenApi = (params) => request.post("/admin/auth/getUserByToken", params)

// 获取商品列表
export const GetGoodsApi = (params) => request.get("/admin/goods", { params })

// 获取商品分类列表
export const GetCategoryApi = (params) => request.get("/admin/category", { params })

// 上传图片
export const UploadGoodPicApi = (params) => request.post("/admin/upload/goodNewPic", params)

// 查询品牌列表
export const GetBrandApi = (params) => request.get("/admin/brand", { params })

// 新增/编辑商品
export const StoreApi = (params) => request.post("/admin/goods/store", params)