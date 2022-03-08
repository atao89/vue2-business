<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-03 23:30:50
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-05 23:13:17
-->
<template>
  <div class="category">
    <el-form :inline="true" size="small">
      <el-form-item>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        v-for="column in columns1"
      ></el-table-column>
      <el-table-column prop="img_url" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img_url" style="width: 90px; height: 45px" />
        </template>
      </el-table-column>
      <el-table-column prop="level" label="分类级别">
        <template v-slot="scope">
          {{ scope.row.level === 1 ? "顶级分类" : "子分类" }}
        </template>
      </el-table-column>
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        v-for="column in columnsSlot"
      >
        <template v-slot="scope">
          {{ scope.row[column.prop] ? "是" : "否" }}
        </template>
      </el-table-column>
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        v-for="column in columns2"
      ></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editHandle(scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { GetCategoryApi } from "@/request/api";
export default {
  data() {
    return {
      tableData: [],
      columns1: [
        {
          prop: "id",
          label: "ID",
        },
        {
          prop: "name",
          label: "分类名称",
        },
      ],
      columnsSlot: [
        {
          prop: "is_show",
          label: "是否显示",
        },
      ],
      columns2: [
        {
          prop: "sort_order",
          label: "排序",
        },
      ],
    };
  },
  created() {
    this.getCategoryList();
  },
  methods: {
    // 添加
    handleAdd() {},
    // 编辑
    editHandle(row) {
      console.log("row-", row);
    },
    // 获取商品分类列表
    getCategoryList() {
      GetCategoryApi({
        page: this.currentPage,
        size: this.pageSize,
      }).then((res) => {
        if (res.errno === 0) {
          this.tableData = res.data;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.category {
  .el-pagination {
    padding: 15px 20px 5px 0;
    text-align: right;
  }
}
</style>