<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 16:36:00
 * @LastEditors: 周涛
 * @LastEditTime: 2022-02-28 22:39:49
-->
<template>
  <div class="header">
    <div class="header-left">
      <h3 class="header-title">阿涛的商品管理系统</h3>
      <div class="collapse-btn">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <div class="header-right">
      <el-dropdown class="user-name" @command="handleCommand">
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  datat() {
    return {};
  },
  methods: {
    handleCommand(command) {
      this.$confirm("此操作将退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {
          return;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  .header-left {
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    .header-title {
      padding: 0 15px;
      font-size: 22px;
    }
    .collapse-btn {
      font-size: 22px;
    }
  }
  .header-right {
    height: 100%;
    display: flex;
    align-items: center;
    .user-name {
      padding-right: 15px;
      cursor: pointer;
      .el-dropdown-link {
        color: #fff;
      }
    }
  }
}
</style>