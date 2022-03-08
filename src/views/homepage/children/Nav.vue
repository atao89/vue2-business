<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 16:36:16
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-05 23:47:49
-->
<template>
  <el-menu
    :default-active="currentSelect"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    router
  >
    <el-submenu
      :index="index + ''"
      v-for="(menu, index) in newMenu"
      :key="index"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ menu.title }}</span>
      </template>
      <el-menu-item
        :index="submenu.path"
        v-for="(submenu, sidx) in menu.subs"
        :key="sidx"
        >{{ submenu.title }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menuConfig: [
        {
          title: "商品管理",
          subs: [
            {
              title: "商品列表",
              path: "/good",
            },
            {
              title: "商品分类",
              path: "/category",
            },
            {
              title: "品牌管理",
              path: "/brand",
            },
            {
              title: "商品属性管理",
              path: "/attribute",
            },
          ],
        },
        {
          title: "订单中心",
          subs: [
            {
              title: "订单列表",
              path: "/order",
            },
          ],
        },
        {
          title: "店铺运营",
          subs: [
            {
              title: "专题管理",
              path: "/topic",
            },
            {
              title: "运营数据",
              path: "/statdata",
            },
          ],
        },
      ],
      newMenu: [],
    };
  },
  computed: {
    currentSelect() {
      let goodArr = ["/good", "/addgood", "/editgood"];
      let categoryArr = ["/category", "/addcategory", "/editcategory"];
      let brandArr = ["/brand", "/addbrand", "/editbrand"];
      let topicArr = ["/topic", "addtopic", "/edittopic"];
      let attributeArr = ["/attribute", "addattribute", "/editattribute"];
      if (goodArr.includes(this.$route.path)) {
        return goodArr[0];
      } else if (categoryArr.includes(this.$route.path)) {
        return categoryArr[0];
      } else if (brandArr.includes(this.$route.path)) {
        return brandArr[0];
      } else if (topicArr.includes(this.$route.path)) {
        return topicArr[0];
      } else if (attributeArr.includes(this.$route.path)) {
        return attributeArr[0];
      }
      return this.$route.path;
    },
  },
  created() {
    let menu = this.$store.state.menu;
    // 把vuex里面的权限列表转换成对象
    let menuObj = menu.reduce((prev, current) => {
      prev[current.path] = current;
      return prev;
    }, {});

    // 循环完整菜单数组，生成当前用户菜单
    for (let i = 0, length = this.menuConfig.length; i < length; i++) {
      let newSubs = [];
      for (let j = 0, len = this.menuConfig[i].subs.length; j < len; j++) {
        let subObj = this.menuConfig[i].subs[j];
        if (menuObj[subObj.path]) {
          newSubs.push(subObj);
        }
      }
      // 有二级菜单才显示它对应的一极菜单
      if (newSubs.length) {
        // this.newMenu.push({
        //   title: this.menuConfig[i].title,
        //   subs: newSubs,
        // });
        // 解构方式
        this.newMenu.push({
          ...this.menuConfig[i],
          subs: newSubs,
        });
      }
    }
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
}
</style>