<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 15:51:06
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-05 22:01:06
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
  <!-- <div> -->
  <!-- 头部 -->
  <!-- <Header /> -->
  <!-- 左侧菜单 -->
  <!-- <Nav /> -->
  <!-- 中间内容 -->
  <!-- <Content /> -->
  <!-- </div> -->
</template>

<script>
import Header from "./children/Header.vue";
import Nav from "./children/Nav.vue";
import Content from "./children/Content.vue";
export default {
  components: {
    Header,
    Nav,
    Content,
  },
};
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