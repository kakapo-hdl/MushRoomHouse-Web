<template>
  <div>
<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <!-- <el-form :model="categoryForm">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form> -->
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
    <el-table-column
      prop="description"
      label="类别描述">
    </el-table-column>
     <el-table-column
      type="image"
      label="缩略图"
      width="200">
      <template slot-scope="scope">
      <div>{{scope.row.name}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建日期">
    </el-table-column>   
         <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text"
          @click="handleEdit( scope.row)">编辑</el-button>
        <el-button type="text"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
import {GetAllCategory} from '../../../network/category'
export default {
name:'BackStageSetting',
data(){
  return{
    dialogFormVisible:false,
    Categorys:[],
    categoryForm:{
    id:'',
    name:'',
    description:'',
    image:'',
    parentId:'',
    },
  }
},
beforeCreate(){
  GetAllCategory().then(
    response=>{ 
    //  console.log(response);
      this.Categorys = response.result;

      //  console.log(this.Categorys);
    
    }
  )
},
methods:{
  handleEdit(data){
    this.categoryForm=data;
    this.dialogFormVisible=true
    console.log(data);
  }
}
}
</script>

<style>

</style>