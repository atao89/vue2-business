/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 09:43:32
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-15 00:20:29
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