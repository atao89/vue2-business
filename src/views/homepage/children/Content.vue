<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 16:36:24
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-14 23:52:57
-->
<template>
  <div class="content">
    <router-view class="router-view"></router-view>
    <section class="footer">
      <span class="font-weight">Copyright © 2016-2019 </span>
      <a href="javascript:void(0);" target="_blank">阿涛</a>
      . All rights reserved.
      <p class="footer-version">
        <span class="font-weight">Version</span> 1.0.0
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Content extends Vue {
    
}
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .router-view {
    flex: 1;
    background: #fff;
    padding: 10px;
    overflow-x: hidden;
  }
  .footer {
    height: 60px;
    font-size: 12px;
    padding-top: 8px;
    .font-weight {
      font-weight: 700;
    }
    .footer-version {
      float: right;
      padding-right: 10px;
    }
  }
}
</style>