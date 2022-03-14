<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-14 22:40:47
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-14 23:23:45
-->
<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="page"
    :page-sizes="[10, 20, 50, 100, 200]"
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  >
  </el-pagination>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class MyPage extends Vue {
  @Prop({ type: Number, default: 1 }) page!: number;
  @Prop({ type: Number, default: 10 }) size!: number;
  @Prop({ type: Number, default: 0 }) total!: number;

  @Emit("pageChange")
  changePage(page: number) {
    return page;
  }
  @Emit("sizeChange")
  changeSize(size: number) {
    return size;
  }

  created() {
    // console.log(this.page, this.size);
  }

  handleSizeChange(size: number): void {
    // console.log(`每页 ${size} 条`);
    this.changeSize(size);
  }
  handleCurrentChange(page: number): void {
    // console.log(`当前页: ${page}`);
    // 触发父组件自定义事件
    // this.$emit('pageChange', page) // 非ts写法
    // ts写法，直接调用上面emit装饰器的方法
    this.changePage(page);
  }
}
</script>


<style lang="less" scoped>
</style>