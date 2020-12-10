<template>
    <div id='head' class="head">  
      <div class="header-nav">
        <div class="header-nav-wrap">
          <div class="header-nav-content">
            <div class="header-nav-item">
              <img src="~/assets/image/navgation/Home20x20.png">
              首页
            </div>
            <div class="header-nav-item">
              <img src="~/assets/image/navgation/market20x20.png">
              商城
            </div>
              <div class="header-nav-item">
              我的订单
            </div>
              <div class="header-nav-item">
              关于我们
              <img src="~/assets/image/navgation/IconRowDown.png">
            </div>
          </div>
        </div>
      
      </div>
      <div class="header-wrap">
        <a class="logo" title="蘑菇街首页" >
          <img src="~/assets/image/navgation/logo.png">
        </a>
        <div class="header-category">
          <img src="~/assets/image/navgation/headerManu.png" alt="">
          目录
        </div>
        <div class="seach-nav-content">
          <div class="normal_seach-content">
            <div class="top-nav-seach">
              <input class="input-nav" type="text" placeholder="内衣">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name:'NavigationBar'
}
</script>
<style  lang='less' scoped>
.head{
    position: relative;
    clear:both;
    background-color: #fff;
    z-index: 999;
}
.header-nav{
  height: 33px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.header-nav-wrap{
  width:1200px;
  margin-left: auto;
  margin-right: auto;
}
.header-nav-content{
  float: right;
  color:#999;
}
.header-nav-item{
  line-height: 33px;
  display: inline-block;
  vertical-align: top;
  margin: 0 0 0 20px;
  font-size: 12px;
  

}
.header-nav-item img{
 width: 10px;
 height: 10px;
 margin-right: 3px;
 vertical-align: middle;
 display: inline-block;
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
.normal_seach-content {
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
}
</style>