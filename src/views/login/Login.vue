<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-13 12:01:26
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-13 18:16:48
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
      <el-button style="width: 100%" type="primary" @click="submitForm">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script lang="ts">
import { ElForm } from "element-ui/types/form";
import { Component, Vue, Ref } from "vue-property-decorator";
import { LoginApi } from "@/request/api";

interface UserInfo {
  username: string;
  password: string;
}

interface RulesObj {
  required: boolean;
  message: string;
  trriger: string;
}

// 网络请求的返回值接口
// interface AjaxRsp {
//     errno: number;
//     errmsg: string;
//     data: any
// }
// 使用全局定义

@Component
export default class Login extends Vue {
  // 直接定义
  //   ruleForm: { username: string; password: string } = {
  //     username: "",
  //     password: "",
  //   };
  // 使用接口定义
  ruleForm: UserInfo = { username: "", password: "" };
  readonly rules: { username: Array<RulesObj>; password: Array<RulesObj> } = {
    username: [{ required: true, message: "用户名不能为空", trriger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trriger: "blur" }],
  };

  @Ref("ruleForm") readonly ruleFormRef!: ElForm;
  // 响应登录按钮
  submitForm(): void {
    this.ruleFormRef.validate(async (valid: boolean) => {
      if (valid) {
        // 发送网络请求
        // LoginApi({
        //   username: this.ruleForm.username,
        //   password: this.ruleForm.password,
        // }).then((res: Ajax.AjaxRsp) => {
        //   res.errno
        // });

        // 使用anync、await
        let { errno, errmsg, data }: Ajax.AjaxRsp = await LoginApi({
          username: this.ruleForm.username,
          password: this.ruleForm.password,
        });
        if (errno === 0) {
          // 登录成功
          localStorage.setItem("token", data.token);
          this.$router.push("/");
        } else {
          (this as any).$message.error(errmsg);
        }
      }
    });
  }
}
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