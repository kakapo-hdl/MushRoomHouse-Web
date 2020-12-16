<template>
      <div class="header-nav">
        <div class="header-nav-wrap">
          <div class="header-nav-content">
            <navigation-item>
              <template v-slot:title>
               <img src="~assets/image/navgation/Home20x20.png">
                首页
              </template>
            </navigation-item>

             <navigation-item>
              <template v-slot:title>
               <img src="~assets/image/navgation/market20x20.png">
                商城
              </template>
            </navigation-item>

            <navigation-item>
              <template v-slot:title>
               <img src="~assets/image/navgation/IconRowDown.png">
                我的订单
              </template>
            </navigation-item>

             <navigation-item>
              <template v-slot:title>
                关于我们
              </template>
            </navigation-item>

            <!-- <div v-for="(title,index) in titles" class="header-nav-item" :key="index">
              <span v-if="index!=0" style="margin-right:10px">|</span> 
              <div v-if="title[1]===''" style="display:none"></div>
              <div v-else class="header-nav-item"><img :src="title[1]"></div>
              {{title[0]}}
            </div> -->
          </div>
        </div> 
      </div>
</template>

<script>
import NavigationItem from 'common/commonHome/NavigationItem.vue'
export default {
  name: 'NavigationHeader',
  components:{
    NavigationItem
  },
  props:{
    title:String,
    imageUrl:String
  },
  data(){
    return{
      titles:[
        ['首页',require('assets/image/navgation/Home20x20.png') ],
        ['商城',require('assets/image/navgation/market20x20.png')],
        ['我的订单',require("assets/image/navgation/IconRowDown.png")],
        ['关于我们','']
        ]
    }
  }
  
}
</script>
<style lang='less' scoped>
.header-nav{
  float: right;
  height: 33px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  width:100%;
}
.header-nav-wrap{
  width: 1690px;
  margin-left: auto;
  margin-right: auto;
}
.header-nav-content{
  float: right;
  color:#999;
  line-height: 30px;
}


</style>