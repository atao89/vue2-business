<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    <div>
      <p>
        {{ str }}
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="handleClick">el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  // components: {
  //   HelloWorld,
  // },
  filters: {},
  directives: {},
})
export default class App extends Vue {
  // private str: string =
  //   "If Element is successfully added to this project, you'll see an";
  // private handleClick(): void {
  //   console.log("handleClick");
  // }
  // created生命周期
  created() {
    // console.log("created生命周期");
  }
}
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
