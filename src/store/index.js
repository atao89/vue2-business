/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 13:37:16
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-03 00:57:39
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { SETMENU } from './mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: []
  },
  mutations: {
    [SETMENU](state, menu) {
      state.menu = menu;
    }
  },
  actions: {
  },
  modules: {
  }
})
