<template>
    <div id='head' class="head">  

      <div class="header-wrap">
        <router-link to="/Home" class="logo" title="蘑菇街首页" >
          <img src="~/assets/image/navgation/logo.png">
        </router-link>
        <div class="header-category"  @mouseover=openCategoryMsg @mouseleave=closeCategoryMsg>
          <img src="~/assets/image/navgation/headerManu.png" alt="" >
          目录
          <header-category :isShow="isShowCategory"></header-category>
        </div>
         <header-tool style="margin-top:28px;overflow:hidden;"></header-tool>
      <!-- </div> -->
       
      </div>
    </div>
</template>

<script>
import HeaderCategory from '../../common/headerCategory/HeaderCategory.vue';
import HeaderTool from './component/HeaderTool.vue'
export default {
  name:'NavigationBar',
  components:{
    HeaderCategory,
    HeaderTool,
  },
  data(){
    return{
      isShowCategory: {display:'none'},
    }
  },
  methods:{
    closeCategoryMsg: function(){
      this.isShowCategory.display='none';
    },
    openCategoryMsg: function(){
      this.isShowCategory.display='block'
    }

  }
}
</script>
<style  lang='less' scoped>
.head{
    position: relative;
    clear:both;
    background-color: #fff;
    z-index: 999;
}

.header-wrap{
  width: 1200px;
  height:100px;
  margin-left: auto;
  margin-right: auto;
}
.logo img{
  float: left;
  width: 130px;
  height: 100px;
  background-size: 100%;
}
.header-category{
  float: left;
  margin-left: 30px;
  line-height: 100px;
  color: #333;
}
.header-category img {
  display: inline-block;
  background-repeat: no-repeat;
  width: 18px;
  height: 12px;
  background-size: cover;
  margin-right: 2px;
  margin-bottom: 3px;
}
</style>