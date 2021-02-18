<template>
  <div>
    <el-dialog title="新增属性" :visible.sync="modalVisible">
      <el-form
        :model="categoryForm"
        style="width: 80%"
        label-position="right"
        label-width="100px">
        <el-form-item label="属性名称">
          <el-input
            v-model="categoryForm.name"
            autocomplete="off"
            placeholder="请输入属性名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="属性描述">
          <el-input  v-model="categoryForm.description"  placeholder="请输入属性描述" >
          </el-input>
        </el-form-item>
        <el-form-item label="属性参数">
          <el-col :span="10">
            <el-input v-model="categoryParam" placeholder="请输入属性参数"></el-input> 
          </el-col>
           <i class="fa fa-plus-square category-icon-add" @click="addParams()"></i>
        </el-form-item>
        <el-form-item>
          <span class="category-param-item" v-for="(item,index) in categoryForm.categoryParams" :key="index">
          {{item}} <i class="fa fa-times category-icon-delete" @click="categoryParamDelete(index)"></i>
          </span>
        </el-form-item>
          <!-- <el-input  v-model="categoryForm.description"  placeholder="请输入属性描述" >
          </el-input> -->
        <el-form-item label="缩略图">
          <upload-single-img
            :previewURL="categoryForm.imageUrl"
            @uploadImage="getFile"
            ref="uploadImg">
          </upload-single-img>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modalCancle()">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </div>
    </el-dialog>
    <div>
      <div class="category-edit-area">
    
      </div>
      <el-table  :data="Categorys"  style="width: 100%; margin-bottom: 20px"  row-key="id"  border  :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
        <el-table-column prop="name" label="商品类别" sortable width="180">
        </el-table-column>
        <el-table-column prop="description" label="类别描述"> </el-table-column>
        <el-table-column type="image" label="图片" width="200">
          <template slot-scope="scope">
            <div v-show="scope.row.imageUrl !== ''">
              <img class="thumbnail-image" :src="scope.row.imageUrl" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="createDate" label="创建日期"> </el-table-column>
        <el-table-column prop="updateDate" label="更新日期"> </el-table-column>
        <el-table-column label="操作" width="138">
          <template slot="header">
            <span class="category-table-edit">操作</span>
            <el-button class="fr" type="text" @click="handleAdd()" >新增</el-button>
          </template>
          <!-- <template  slot="header">
          <el-button type="text"
            @click="handleAdd( scope.row)" v-show="scope.row.menuLevel != '3'">新增</el-button>
        </template> -->
          <template slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.row)">
              编辑</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">
              删除</el-button>
            <el-button
              type="text"
              @click="handleAdd(scope.row)"
              v-show="scope.row.menuLevel != '2'">
              新增</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import uploadSingleImg from "../../../components/common/uploadFile/uploadSingleImg.vue";
import {
  GetAllCategory,
  UpdateOrCreate,
  DeleteCategory,
} from "../../../network/category";
import { JsToFormData } from "../../../util/util";
export default {
  components: { uploadSingleImg },
  name: "BackStageSetting",
  data() {
    return {
      categoryParam:'',
      imageFile: {},
      modalVisible: false,
      Categorys: [],
      categoryForm: {
        id: "",
        categoryParams:[],
        name: "",
        description: "",
        imageUrl: "",
        parentId: "",
      },
    };
  },
  created() {
    this.loadCategoryData();
  },
  methods: {
    loadCategoryData() {
      GetAllCategory().then((response) => {
        this.Categorys = response.result;
      });
    },
    clearDate() {
      this.categoryForm.categoryParams=[];
      this.categoryParam=""
      this.categoryForm.description = "";
      this.categoryForm.id = "";
      this.categoryForm.name = "";
      this.categoryForm.imageUrl = "";
      this.categoryForm.parentId = "";
      this.imageFile = {};
    },
    getFile(data) {
      this.imageFile = data;
    },
    modalCancle(){

      this.modalVisible = false;
    },
    handleAdd(data) {
      let menuLevel = "";
      this.clearDate();
      if (data == undefined) {
        menuLevel = "0";
         this.categoryForm.parentId="0"
      } else {
        if (data.menuLevel == "0") {
          menuLevel = "1";
        } else if (data.menuLevel == "1") {
          menuLevel = "2";
        } 
        this.categoryForm.parentId = data.id;
      }
      this.categoryForm.menuLevel = menuLevel;

      this.modalVisible = true;
      this.$nextTick(() => {
        this.$refs.uploadImg.urlChange();
      });
    },
    addParams(){
      if(this.categoryParam!=""){
      this.categoryForm.categoryParams.push(this.categoryParam)
      console.log(this.categoryForm.categoryParams);
      }
    },
    categoryParamDelete(index){
  
       this.categoryForm.categoryParams.splice(index,1) ;   console.log(index);
    },
    handleEdit(data) {
      this.clearDate();
      this.categoryForm.description = data.description;
      this.categoryForm.id = data.id;
      this.categoryForm.name = data.name;
      this.categoryForm.imageUrl = data.imageUrl;
      this.categoryForm.parentId = data.parentId;
      this.imageFile = {};
      this.modalVisible = true;
      this.$nextTick(() => {
        this.$refs.uploadImg.urlChange();
      });
    },
    formCheck() {
      let formData = JsToFormData(this.categoryForm);
      formData.append("imageFile", this.imageFile);
      return formData;
    },
    handleDelete(data) {
      try {
        if (data.children.length > 0) {
          alert("子属性不为零，请清空后再删除");
        } else {
          DeleteCategory(data.id).then((res) => {
            if (res.code == 200) {
              this.loadCategoryData();
            } else {
              console.log(res.message);
            }
          });
        }
      } catch (error) {
        DeleteCategory(data.id).then((res) => {
          if (res.code == 200) {
            this.loadCategoryData();
          } else {
            console.log(res.message);
          }
        });
      }
    },
    submitForm() {
      let formData = JsToFormData(this.categoryForm);
      formData.append("imageFile", this.imageFile);
      UpdateOrCreate(formData).then((res) => {
        if (res.code == 200) {
          this.loadCategoryData();
        } else {
          console.log(res.message);
        }
      });
      this.modalVisible = false;
    },
  },
};
</script>

<style>
.category-edit-area {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 3px;
  background-color: #fff;
}
.category-table-edit {
  height: 40px;
  display: inline-block;
  line-height: 40px;
}
.category-icon-add{
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  transition-duration:0.2s;
}
.category-icon-add:hover{
  color: var(--color-pink);
}
.category-param-item{
  display: inline-block;
  height: 30x;
  line-height: 30px;
  margin-right: 10px;
  padding-right: 5px;
  padding-left: 5px;
  background-color: #E7EAED;
}
.category-icon-delete{
  font-size: 15px;
    cursor: pointer;
     transition-duration:0.2s;
}
.category-icon-delete:hover{
    color: var(--color-pink);
}
</style>