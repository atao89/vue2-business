/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 09:43:32
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-15 00:21:39
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { GetUserByTokenApi } from '@/request/api'
import store from '@/store'
import { SETMENU } from "@/store/mutation-type";

// Vue.use调用VueRouter里面的install方法
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
  },
]

const routerObj = {
  '/good': {
    path: '/good',
    component: () => import(/* webpackChunkName: "good" */ '../views/good/Good.vue'),
  },
  '/addgood': {
    path: '/addgood',
    component: () => import(/* webpackChunkName: "addgood" */ '../views/good/Addgood.vue'),
  },
  '/editgood': {
    path: '/editgood',
    component: () => import(/* webpackChunkName: "editgood" */ '../views/good/Editgood.vue'),
  },
  '/category': {
    path: '/category',
    component: () => import(/* webpackChunkName: "order" */ '../views/category/Category.vue'),
  },
  '/attribute': {
    path: '/attribute',
    component: () => import(/* webpackChunkName: "attribute" */ '../views/attribute/Attribute.vue'),
  },
  '/order': {
    path: '/order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/Order.vue'),
  },
}

const router = new VueRouter({
  routes
})

// 生成动态路由方法
const generateRoute = () => {
  // 把登录后的权限菜单列表和路由进行对比，得到用户路由规则，动态添加路由
  let newRoutes: Array<any> = []
  for (var i = 0, len = store.state.menu.length; i < len; i++) {
    let path = store.state.menu[i]['path'];
    if (routerObj[path]) {
      newRoutes.push(routerObj[path])
    }
  }
  router.addRoute({
    path: '/',
    component: () => import(/* webpackChunkName: "homepage" */ '../views/homepage/HomePage.vue'),
    children: newRoutes
  })
}

// 前置路由守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (token && store.state.menu.length === 0) {
    GetUserByTokenApi({}).then((res: Ajax.AjaxRsp) => {
      if (res.errno === 0) {
        // 设置vuex权限列表
        store.commit(SETMENU, res.data.menu);
        generateRoute()
      }
      next(to.path)
    })
  } else if (token && store.state.menu.length !== 0 && from.path == '/login' && to.path === '/') {
    generateRoute()
    next(store.state.menu[0]['path'])
  }
  else if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
