<template>
  <div>
<el-dialog title="新增属性" :visible.sync="modalVisible"  >
  <el-form :model="categoryForm" style="width: 80%"  label-position="right" label-width="100px">
    <el-form-item label="属性名称" >
      <el-input v-model="categoryForm.name" autocomplete="off" placeholder="请输入属性名称" ></el-input>
    </el-form-item>
    <el-form-item label="属性描述" >
      <el-input v-model="categoryForm.description" placeholder="请选择活动区域" >
        <!-- <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option> -->
      </el-input>
    </el-form-item>
  <el-form-item label="缩略图">
    <upload-single-img :previewURL="categoryForm.imageUrl" @uploadImage="getFile" ref="uploadImg">
    </upload-single-img>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm()">确 定</el-button>
  </div>
</el-dialog>

    <div>
      <el-table
    :data="Categorys"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="name"
      label="商品类别"
      sortable
      width="180">
    </el-table-column>
    <el-table-column prop="description" label="类别描述">
    </el-table-column>
     <el-table-column type="image" label="缩略图"  width="200">
      <template slot-scope="scope">
      <div v-show="scope.row.imageUrl!==''"><img class="thumbnail-image" :src="scope.row.imageUrl"></div>
      </template>
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建日期">
    </el-table-column>   
    <el-table-column
    prop="updateDate"
      label="更新日期">
    </el-table-column> 
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button type="text"
          @click="handleDelete(scope.row)">删除</el-button>
        <el-button type="text"
          @click="handleAdd( scope.row)" v-show="scope.row.menuLevel != '3'">新增</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
import uploadSingleImg from '../../../components/common/uploadFile/uploadSingleImg.vue'
import {GetAllCategory,UpdateOrCreate,DeleteCategory} from '../../../network/category'
import {JsToFormData,Format} from "../../../util/util"
export default {
  components: { uploadSingleImg },
name:'BackStageSetting',
data(){
  return{
    imageFile:{},
    modalVisible:false,
    Categorys:[],
    categoryForm:{
    id:'',
    name:'',
    description:'',
    imageUrl:'',
    parentId:'',
    },
  }
},
created(){
  this.loadCategoryData();
},
methods:{
  loadCategoryData(){
    GetAllCategory().then(
      response=>{ 
        this.Categorys = response.result;
      })
  },
  clearDate(){
    this.categoryForm={};  
    this.imageFile={};
  },
  getFile(data){
    this.imageFile=data; 

  },
  handleAdd(data){
    let menuLevel;
    if(data.menuLevel=="0"){
      menuLevel="1"
    }else if(data.menuLevel == "1"){
      menuLevel="2"
    }else{  menuLevel="3"}
    this.categoryForm.menuLevel=menuLevel;
    this.categoryForm.parentId = data.id; 
    console.log(this.categoryForm);
    this.modalVisible=true;
    this.$nextTick(()=>{
    this.$refs.uploadImg.urlChange();
    })
  },
  handleEdit(data){
    this.categoryForm.description=data.description;
    this.categoryForm.id=data.id;
    this.categoryForm.name=data.name;
    this.categoryForm.imageUrl=data.imageUrl;
    this.categoryForm.parentId=data.parentId;
    console.log(this.categoryForm);
    this.modalVisible=true;
    this.$nextTick(()=>{
    this.$refs.uploadImg.urlChange();
    })
  },
  formCheck(){
    let formData = JsToFormData(this.categoryForm);
    formData.append('imageFile',this.imageFile)
    return formData;
  },
  handleDelete(data){
    try {
      if(data.children.length>0){
        alert("子属性不为零，请清空后再删除");
      }else{
        DeleteCategory(data.id).then(
      res=>{
        if(res.code == 200){
          this.loadCategoryData();
        }else{
          console.log(res.message);
        }
      }
    );
      }
    } catch (error) {
       DeleteCategory(data.id).then(
      res=>{
        if(res.code == 200){
          this.loadCategoryData();
        }else{
          console.log(res.message);
        }
      }
    );
    }

  },
  submitForm(){
    let formData = JsToFormData(this.categoryForm);
    formData.append('imageFile',this.imageFile)
    UpdateOrCreate(formData).then(
      res=>{
        if(res.code == 200){
          this.loadCategoryData();
        }else{
          console.log(res.message);
        }
      }
    );
    this.modalVisible=false;
  }
}
}
</script>

<style>

</style>