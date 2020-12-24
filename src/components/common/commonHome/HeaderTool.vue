<template>
    <div>
       <div class="seach-nav-content">
          <div class="normal-seach-content">
            <div class="top-nav-seach">
              <input class="input-nav" type="text" placeholder="内衣">
              <button class="search-btn">
              </button>
            </div>
          </div>
        </div>
          <div class="function-icon">
            <div class="function-icon-list">
              <div class="fl">
                <a href="#" class="nav-icon-item header-msg-icon"/>消息
              </div>
              <a href="#" class="header-collectcion-margin fl"> 
                <p class="header-collection-icon nav-icon-item" ></p>
                收藏
              </a>
              <a href="#" class="header-shopcar-margin fl"> 
                <p class="header-shopcar-icon nav-icon-item" ></p>
                购物车
              </a>
              <a href="#" class="header-download-margin fl"> 
                <p class="header-download-icon nav-icon-item" ></p>
                下载APP
              </a>
              <div class="header-login fr">
                <a href="#" class="header-login-margin">
                  <img class="header-login-icon" src="https://s10.mogucdn.com/mlcdn/c45406/181016_143l3ehl4ebad6c2326gjk6d4h41g_48x48.png">
                  登录
                </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
name:'HeaderTool'
  
}
</script>
<style lang='less' scoped>
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
.function-icon{
  width:335px;
  float: left;
  margin: 30px 0 0 26px;
}
.nav-icon-item{
  margin-top:4px;
  margin-bottom: 2px;
  width:24px;
  height: 24px;
} 

.header-msg-icon{
  display: block;
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181016_626h76eek6jgl5621492ck0438af3_48x44.png);
  background-size:100%;
}
.header-collection-icon{
  display: block;
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181016_1e18fbc53dab5f8f6c45h6e57954d_44x44.png);
  background-size: 100%;
}
.header-collectcion-margin{
  margin-left: 28px;
}
.header-shopcar-icon{
  display: block;
  margin-left: 4px;
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181016_22cba5f6a88gdl2gf42i14hj7flk8_48x46.png);
  background-size:100%;
}

.header-shopcar-margin{
  margin-left: 23px;
}
.header-download-icon{
  display: block;
  margin-left: 5px;
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181205_2f1dbgdfffde6147cfl3e09864lge_40x40.png);
  background-size:100%;
}
.header-download-margin{
  margin-left:10px;
}
.header-login{
  float: right;
  margin-left:30px;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
}
.header-login-icon{
  width:30px;
  height: 30px;
}
.header-login-margin{
margin-bottom:10px ;
}
</style>