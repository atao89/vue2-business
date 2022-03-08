<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 14:53:49
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-03 23:42:09
-->
<template>
<div class="login">
  <h4 class="login-title">登 录</h4>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
  >
    <el-form-item prop="username">
      <el-input
        type="text"
        v-model="ruleForm.username"
        placeholder="账号"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        placeholder="密码"
        autocomplete="off"
      ></el-input>
    </el-form-item>
      <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { LoginApi } from "@/request/api";
import { SETMENU } from "@/store/mutation-type";
export default {
  data() {
    return {
      ruleForm: {},
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { validator: this.valiName, trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 校验username
    valiName(rule, value, callback) {
      if (value.length < 3 || value.length > 20) {
        callback("账号长度3-20个字符");
      } else {
        callback();
      }
    },

    // 登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 实现登录
          LoginApi({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
          })
            .then((res) => {
              if (res.errno === 0) {
                // 储存token
                localStorage.setItem("token", res.data.token);
                this.$store.commit(SETMENU, res.data.menu);
                // 跳转
                // this.$router.push(
                //   "/",
                //   (complete) => {},
                //   (err) => {
                //     // console.log(err); // 捕获路由报错,不输出到页面
                //   }
                // );
                
                this.$router.push("/").catch((err) => {
                  // console.log(err)
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
};
</script>

<style lang="less">
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 200px;
  margin: 0 auto;
  transform: translate(-250px, -100px);
  .login-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>