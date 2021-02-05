<template>
  <div>
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
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
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
        Categorys:[]
  }
},
beforeCreate(){
  GetAllCategory().then(
    response=>{ 
     console.log(response);
      this.Categorys = response.result;
       console.log(this.Categorys);
    
    }
  )
},
methods:{

}
}
</script>

<style>

</style>