<template>
  <div class="register-contet-wrap">
    <div class="resister-table-wrap">
      <div class="user-resister-table">
      <div class="register-info-title">
        <span class="register-title-text">基本资料</span>
      </div>
      <div class="upload-avatar-wrap">
        <div class="upload-avatar-lable">头像</div>
        <div class="upload-avatar" @click="GetFile()">
        <div  class="avatar-image"  :style="previewURL == '' ? 'display:none' : ''">
          <img :src="previewURL" alt="Image preview..." />
        </div>
        <div class="upload-avatar-icon">
          <i class="fa fa-plus"></i>
          <input  style="display: none"  accept="*"  type="file"  ref="uploadImg"   @change="uploadImage" />
        </div>
      </div>
      </div>


      <el-form :model="UserForm" :rules="rules" ref="UserForm">
        <el-form-item label="用户名" label-width="100px"  prop="userName">
          <el-input  v-model="UserForm.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px"  prop="password">
          <el-input size="small"  type="password" v-model="UserForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" label-width="100px" prop="checkPassword">
          <el-input size="small" type="password" v-model="UserForm.checkPassword"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="100px" prop="name">
          <el-radio-group v-model="UserSex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="生日" label-width="100px" prop="name" style="width:300px">
          <el-date-picker
          size="medium"
            v-model="UserForm.birthday"
            @change="DateChange"
          >
          </el-date-picker>
        </el-form-item>
                <el-form-item label="职业" label-width="100px" prop="name">
          <el-select v-model="UserForm.profession" size="small" style="width:220px" >
            <el-option  v-for="item in professionOptions " :key="item.value" :label="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  label="所在地" label-width="100px" prop="name">
          <el-cascader
           style="width: 300px"
            size="medium"
            :options="option"
            v-model="UserForm.location"
            @change="handleChange"
            :clearable=true
          >
          </el-cascader>
        </el-form-item>
        
        <el-form-item label="手机号码" label-width="100px" prop="name">
          <el-input size="small" v-model="UserForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px" prop="name">
          <el-input size="small" v-model="UserForm.email"></el-input>
        </el-form-item>

      <div class="register-info-title">
        <span class="register-title-text">基本资料</span>
      </div>
        <el-form-item label="自我介绍" label-width="100px" >
          <el-input
            type="textarea"
            rows="5"
            placeholder="随便写点什么，让大家了解你吧。"
            v-model="UserForm.description"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="table-function">
        <el-button size="small" type="primary" @click="SubmitForm('UserForm')">提交</el-button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
import { InsertUser } from "../../../network/home";
import {jsToFormData} from "../../../util/util"
import axios from 'axios'
export default {
  name: "Register-content",
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.UserForm.password !== '') {
            this.$refs.UserForm.validateField('checkPass');
          }
          callback();
        }
      };
     var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.UserForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();}
        };
    return {
      previewURL: "",
      professionOptions:[
        {  value: '白领'
        },
        {  value: '学生'
        },
        {  value: '时尚妈咪'
        },
        {  value: '模特'
        },
        {  value: '时尚店主'
        },
        {  value: '其他'
        },
      ],
      option: regionData,
      imageFile:"",
      UserSex:'',
      UserForm: {
        userName: "",
        password: "",
        checkPassword:'',
        phone: "",
        email: "",
        sex: "",
        birthday: "",
        location: "",
        profession: "",
        description: "",
      },
      rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
             {  required: true,validator: validatePass, trigger: 'blur'},
              // { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,15}$/, message: '密码必须6-15位，并且包含大小写数字' }
          ],
          checkPassword: [
             {  required: true,validator: validatePass2, trigger: 'blur'} 
          ],
        }      
    };
  },
  // mounted(){
  //   // console.log(this.option);
  // },
  methods: {
    GetFile() {
      this.$refs.uploadImg.click();
    },
    handleChange() {},
    DateChange() {},
    uploadImage() {
      let file = this.$refs.uploadImg.files[0];
      this.previewURL = URL.createObjectURL(file);
    },
    SubmitForm(formName){
      let flie = this.$refs.uploadImg.files[0];
      let cacheData = new FormData();
      
         this.$refs[formName].validate((valid) => {
          if (valid) {
          if(this.UserSex === "男") this.UserForm.sex=true;
          else this.UserForm.sex=false;
        //  cacheData  = this.UserForm;
         cacheData.append('imageFile',flie)
         cacheData.append('userName',this.UserForm.userName)
          cacheData.append('password',this.UserForm.password)
//           Object.keys(this.UserForm).map(key=>{

//    cacheData.append(key,this.UserForm[key]);

// });
          console.log(cacheData);
          let ax=axios.create();
          ax.post('http://localhost:8080/api/insert', cacheData, {
    // headers: {
    //   'Content-Type': 'multipart/form-data'
    // }
})
          // InsertUser(cacheData)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  },
};
</script>
<style lang='less' scoped>
.register-contet-wrap {
  width: 970px;
  margin: 0 auto 0 auto;
}
.resister-table-wrap {
  background: #fff;
  border: 1px solid #dfdfdf;
  overflow: hidden;
  border-radius: 2px;
  min-height: 500px;
}
.user-resister-table{
width: 670px;
overflow: hidden;
padding-bottom: 20px;
}
.register-info-title {
  width: 100%;
  height: 30px;
  margin-bottom:20px;
  padding-left: 20px;
  background-color: #f9f9f9;
}
.register-title-text {
  color: var(--color-pink);
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
}
.upload-avatar-lable{
  width: 100px;
  height: 137px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 137px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}
.upload-avatar {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.upload-avatar:hover {
  border: 1px dashed blue;
}
.upload-avatar-icon {
  font-size: 28px;
  color: #8c939d;
  width: 130px;
  height: 130px;
  line-height: 130px;
  text-align: center;
}
.avatar-image {
  position: absolute;
  width: 130px;
  height: 130px;
}
.avatar-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.table-function{
  text-align: right;
  // margin-right:px;
}
</style>