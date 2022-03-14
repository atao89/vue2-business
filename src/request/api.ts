/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 15:55:43
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-15 00:33:10
 */
import request from './request'
import { LoginParams, AttributeParams } from '@/types/params'

// 登录
export const LoginApi = (data: LoginParams): Promise<Ajax.AjaxRsp> => request.post('/admin/auth/login', data)

// 属性列表
export const GetAttributeListApi = (params: AttributeParams): Promise<Ajax.AjaxRsp> => request.get('/admin/attribute', { params })

// 根据token获取用户登录信息
export const GetUserByTokenApi = (params: any): Promise<Ajax.AjaxRsp> => request.post("/admin/auth/getUserByToken", params)

// 获取商品列表
export const GetGoodsApi = (params: AttributeParams): Promise<Ajax.AjaxRsp> => request.get("/admin/goods", { params })

// 获取商品分类列表
export const GetCategoryApi = (params: any): Promise<Ajax.AjaxRsp> => request.get("/admin/category", { params })

// 上传图片
export const UploadGoodPicApi = (params: string): Promise<Ajax.AjaxRsp> => request.post("/admin/upload/goodNewPic", params)

// 查询品牌列表
export const GetBrandApi = (params: AttributeParams): Promise<Ajax.AjaxRsp> => request.get("/admin/brand", { params })

// 新增/编辑商品
export const StoreApi = (params: any): Promise<Ajax.AjaxRsp> => request.post("/admin/goods/store", params)