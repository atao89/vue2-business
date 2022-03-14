<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 17:54:44
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-14 23:24:48
-->
<template>
  <div class="attribute">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="属性名称"> </el-table-column>
      <el-table-column prop="attribute_category_id" label="属性分类">
      </el-table-column>
    </el-table>
    <MyPage
      :page="currentPage"
      :size="size"
      :total="total"
      @pageChange="pageChange"
      @sizeChange="sizeChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GetAttributeListApi } from "@/request/api";
import MyPage from "./MyPage.vue";

@Component({
  components: {
    MyPage,
  },
})
export default class Attribute extends Vue {
  tableData: Array<any> = [];
  // 页码
  currentPage: number = 1;
  // 一页显示多少条
  size: number = 10;
  // 总数
  total: number = 0;

  // created生命周期
  async created() {
    this.getListData();
  }

  // 获取列表数据
  async getListData() {
    let { errno, errmsg, data }: Ajax.AjaxRsp = await GetAttributeListApi({
      page: this.currentPage + "",
      size: this.size + "",
    });
    if (errno === 0) {
      this.tableData = data.data;
      this.total = data.count;
    } else {
      (this as any).$message.error(errmsg);
    }
  }

  pageChange(page: number): void {
    // console.log("子组件传递过来的page", page);
    this.currentPage = page;
    this.getListData();
  }
  sizeChange(size: number): void {
    // console.log("子组件传递过来的size", size);
    this.size = size;
    this.getListData();
  }
}
</script>

<style lang="less" scoped>
</style>