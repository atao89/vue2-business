<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-14 23:49:42
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-14 23:51:19
-->
<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="250px">
        <Nav />
      </el-aside>
      <el-main>
        <Content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./children/Header.vue";
import Nav from "./children/Nav.vue";
import Content from "./children/Content.vue";

@Component({
  components: {
    Header,
    Nav,
    Content,
  },
})
export default class HomePage extends Vue {
    
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #409eff;
  height: 70px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  height: 100%;
  overflow-y: scroll;
}
.el-aside::-webkit-scrollbar {
  width: 0;
}

.el-main {
  background-color: #e9eef3;
  height: 100%;
  padding: 20px 0 20px 20px;
}
</style>