<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-03 02:17:50
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-15 00:51:41
-->
<template>
  <div class="good">
    <el-form :inline="true" :model="formInline" ref="formInline" size="small">
      <el-form-item prop="name">
        <el-input v-model="formInline.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSerch">查询</el-button>
        <el-button type="primary" @click="handleAdd">添加</el-button>
        <el-button type="primary" @click="handleReset('formInline')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        v-for="(column, index) in columns1"
        :key="index"
      ></el-table-column>
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        v-for="(column, index) in columnsSlot"
        :key="index"
      >
        <template v-slot="scope">
          {{ scope.row[column.prop] ? "是" : "否" }}
        </template>
      </el-table-column>
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        v-for="(column, index) in columns2"
        :key="index"
      ></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editHandle(scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GetGoodsApi } from "@/request/api";

@Component
export default class Good extends Vue {
  formInline: any = {
    name: "",
  };
  tableData: Array<any> = [];
  columns1: Array<any> = [
    {
      prop: "category_id",
      label: "ID",
    },
    {
      prop: "name",
      label: "商名称",
    },
    {
      prop: "retail_price",
      label: "售价",
    },
    {
      prop: "goods_number",
      label: "库存",
    },
  ];
  columnsSlot: Array<any> = [
    {
      prop: "is_new",
      label: "新品",
    },
    {
      prop: "is_hot",
      label: "人气",
    },
    {
      prop: "is_on_sale",
      label: "上架",
    },
  ];
  columns2: Array<any> = [
    {
      prop: "sort_order",
      label: "排序",
    },
  ];
  currentPage: number = 1;
  pageSize: number = 10;
  total: number = 0;
  created() {
    this.getGoodsList();
  }

  // 查询
  handleSerch() {
    if (this.formInline.name.trim()) {
      this.getGoodsList();
    }
  }
  // 添加
  handleAdd() {
    this.$router.push("/addgood");
  }
  // 重置
  handleReset(formName: string): void {
    (this as any).$refs[formName].resetFields();
    this.currentPage = 1;
    this.pageSize = 10;
    this.getGoodsList();
  }
  // pageSize 改变时会触发-每页条数
  handleSizeChange(size: number) {
    // console.log(`每页 ${size} 条`);
    this.pageSize = size;
    this.getGoodsList();
  }
  // currentPage 改变时会触发-当前页
  handleCurrentChange(page: number) {
    // console.log(`当前页: ${page}`);
    this.currentPage = page;
    this.getGoodsList();
  }
  // 编辑
  editHandle(row: object) {
    // console.log("row-", row);
    this.$router.push("/editgood");
  }
  // 获取商品列表
  getGoodsList() {
    GetGoodsApi({
      page: this.currentPage + "",
      size: this.pageSize + "",
      name: this.formInline.name || "",
    }).then((res) => {
      if (res.errno === 0) {
        this.tableData = res.data.data;
        this.total = res.data.count;
      }
    });
  }
}
</script>

<style lang="less" scoped>
.good {
  .el-pagination {
    padding: 15px 20px 5px 0;
    text-align: right;
  }
}
</style>