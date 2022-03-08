<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 13:37:16
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-05 19:24:05
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  overflow: hidden;
}
ul, li {
  list-style: none;
}
#app {
  height: 100%;
}
</style>
