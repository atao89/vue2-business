<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-03-07 22:19:58
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-08 00:07:21
-->
<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="基本信息" name="first">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="所属分类" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择所属分类">
            <el-option
              v-for="item in categoryList"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所属品牌" prop="brand">
          <el-select v-model="ruleForm.brand" placeholder="请选择所属品牌">
            <el-option
              v-for="item in brandList"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品简介" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>

        <!-- <el-form-item label="商品图片" prop="desc">
          <el-upload
            class="avatar-uploader"
            action="http://kumanxuan1.f3322.net:8360/admin/upload/goodNewPic"
            :headers="headers"
            name="good_pic"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item> -->
        <el-form-item label="商品图片" prop="">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
            :http-request="uploadGoodPic"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="轮播图片" prop="">
          <el-upload
            action=""
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :http-request="uploadGoodAds"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>

        <el-form-item label="商品单位" prop="unit">
          <el-input v-model="ruleForm.unit"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="inventory">
          <el-input v-model="ruleForm.inventory"></el-input>
        </el-form-item>
        <el-form-item label="商品售价" prop="price">
          <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item label="推荐类型" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="新品" name="type"></el-checkbox>
            <el-checkbox label="人气" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="上架" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="ruleForm.sort"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="商品详情" name="second">商品详情</el-tab-pane>
  </el-tabs>
</template>

<script>
import { uploadGoodPicApi, GetCategoryApi, GetBrandApi } from "@/request/api";
export default {
  data() {
    return {
      activeName: "first",
      ruleForm: {
        region: "",
        name: "",
        brand: "",
        desc: "",
        unit: "",
        inventory: "",
        price: "",
        type: [],
        delivery: false,
        sort: "",
      },
      rules: {
        region: [
          { required: true, message: "请选择所属分类", trigger: "change" },
        ],
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        brand: [
          { required: true, message: "请选择所属品牌", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写商品简介", trigger: "blur" }],
        unit: [{ required: true, message: "请填写商品单位", trigger: "blur" }],
        inventory: [
          { required: true, message: "请填写商品库存", trigger: "blur" },
        ],
        price: [{ required: true, message: "请填写商品售价", trigger: "blur" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个推荐类型",
            trigger: "change",
          },
        ],
        sort: [{ required: true, message: "请填写排序号", trigger: "blur" }],
      },
      imageUrl: "",
      headers: {
        "X-Nideshop-Token": localStorage.getItem("token"),
      },
      dialogImageUrl: "",
      dialogVisible: false,
      categoryList: [],
      brandList: [],
    };
  },
  created() {
    this.getCategoryList();
    this.getBrandList();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 自定义上传
    uploadGoodPic(data) {
      let formdata = new FormData();
      formdata.append("good_pic", data.file);
      uploadGoodPicApi(formdata).then((res) => {
        if (res.errno === 0) {
          this.imageUrl = res.data.fileUrl;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadGoodAds(data) {
      let formdata = new FormData();
      formdata.append("good_pic", data.file);
      uploadGoodPicApi(formdata).then((res) => {
        if (res.errno === 0) {
          this.dialogImageUrl = res.data.fileUrl;
        }
      });
    },
    // 获取分类list
    getCategoryList(){
        GetCategoryApi({ size: 100 }).then((res) => {
        if (res.errno === 0) {
          this.categoryList = res.data;
        }
      });
    },
    // 获取品牌list
    getBrandList() {
      GetBrandApi({ size: 100 }).then((res) => {
        if (res.errno === 0) {
          this.brandList = res.data.data;
        }
      });
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>