<template>
    <div id='head' class="head">  

      <div class="header-wrap">
        <a class="logo" title="蘑菇街首页" >
          <img src="~/assets/image/navgation/logo.png">
        </a>
        <div class="header-category">
          <img src="~/assets/image/navgation/headerManu.png" alt="">
          目录
        </div>
        <div class="seach-nav-content">
          <div class="normal-seach-content">
            <div class="top-nav-seach">
              <input class="input-nav" type="text" placeholder="内衣">
              <button class="search-btn">
              </button>
            </div>
          </div>
          <div class="">
            
          </div>

        </div>
      </div>
    </div>
</template>

<script>

// import { component } from 'vue/types/umd'

export default {
  name:'NavigationBar',
  components:{
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
}
.seach-nav-content{
  float: left;
  margin-left: 76px;
}
.normal-seach-content {
  width: 550px;
  margin:28px 0 0 0;
  height: 44px;
}
.top-nav-seach{
  position: relative;
  width: 552px;
}
.input-nav{
  float: left;
  width:462px;
  height:48px;
  line-height: 48px;
  border: none;
  background-color: #f7f7f7f7;
  color: #666;
  padding:0 15px 0 15px;
}
.search-btn{
  height: 48px;
  width: 58px;
  border: none;
  cursor:pointer;
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181205_2llkjh1g0fe27h51ahh5k5f27gkk9_116x96.png);
  background-size:100%;
  border-radius: 4px;
}
</style>