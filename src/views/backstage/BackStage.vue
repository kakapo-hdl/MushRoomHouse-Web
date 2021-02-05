  <template>
    <div style="background-color:#F0F2F5">
      <div class="manage-header-nav">
        <div class="header-wrapper">
          <div class="header-logo fl">
            <router-link to="/BackStage">
              <img src="~assets/image/BackStage/BackStageLogo.png">
             </router-link> 
          </div>
          <div class="header-menu fl">
            <a class="header-menu-buttom">商家后台</a>
            <a class="header-menu-buttom">规则中心</a>
            <a class="header-menu-buttom">全站通知</a>
            <a class="header-menu-buttom">开店指南</a>
            <a class="header-menu-buttom">服务中心</a>            
          </div>
        </div>
      </div>
      <div class="manage-body">
        <div class="manage-right-memu">  
              <!-- @open="handleOpen"
      @close="handleClose" -->
    <el-menu
    router
      default-active="2"
      class="el-menu-vertical-demo"

      background-color="#1C273F"
      text-color="#fff"
      active-text-color="#FF4466">
     
      <!-- <el-submenu  index="1">
        <template slot="title">
         <i class="el-icon-menu"></i> 信息总览
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
        <el-submenu index="2">
        <template slot="title">
         <i class="el-icon-shopping-bag-1"></i> 商品管理
        </template>
        <!-- <el-menu-item-group>
           <template slot="title"></template> -->
          <el-menu-item index="/BackStage/ProductSetting">发布新商品</el-menu-item>
          <!-- <el-menu-item >出售中</el-menu-item>
          <el-menu-item >仓库中</el-menu-item>
          <el-menu-item >审核中的商品</el-menu-item>
          <el-menu-item >审核未通过</el-menu-item>    -->
          <el-menu-item index="/BackStage/CategorySetting" > 商品分类设置</el-menu-item> 
          <!-- <el-menu-item  > 商品关联设置</el-menu-item>       -->
        <!-- </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
        </div>
        <div class="manage-body-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="manage-footer">
        <div class="manage-footer-content">
          <div class="footer-title">美丽联合集团旗下商家管理平台</div>
          <div class="footer-content">
            <a class="footer-text">入住协议</a>
            <a class="footer-text">意见反馈</a> 
            <a class="footer-text">服务中心</a>
            <a class="footer-text"> 开放平台</a> 
          </div>
          <div class="footer-buttom">
            <a class="footer-text">营业执照注册号：330106000129004</a><span>|</span>
            <a class="footer-text">ICP备案号：浙ICP备10044327号-3</a><span>|</span>
            <span class="fr ">2014-2018 Mogujie.com 杭州卷瓜网络有限公司</span>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
name:'BackStage',
mounted(){
  this.LogNoFuncMessage();
},
methods:{
  LogNoFuncMessage(){
    let menus = document.getElementsByClassName('header-menu-buttom');
    for(var i = 0; i < menus.length; i++){
      menus[i].onclick = (function(i){
        return function(){
          alert('功能没做哦');
        }
      })(i)
    }
  }
}
}
</script>
<style lang='less' scoped>
.manage-header-nav{
  background-color: #1C273F;
}
.header-wrapper{
  height:40px ;
  width: 1200px;
  margin: 0 auto;
}
.header-logo{
  width: 200px;
  height: 40px;
  line-height: 28px;
  padding: 6px 0  6px 0;
  text-align: center;
    box-sizing: border-box;
}
.header-logo img{
  height: 80%;
}
.header-menu-buttom{
  width: 92px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  display: block;
  float: left;
  cursor: pointer;
  transition: background-color 0.3s;
}
.header-menu-buttom:hover{
  background-color: #324265;
}
.manage-body{
  width: 1200px;
  margin: 0 auto;
  min-height: 700px;
  display: table;
  padding:20px 0;
  margin-bottom:20px;
}
.manage-right-memu{
    display: table-cell;
    width: 200px;
    background: #fff;
    border-right: 1px solid #eee;
    overflow-x: hidden;
    padding-bottom: 30px;
}
.manage-footer{
      border-top: 1px solid #eee;
    background-color: #333;
    width: 100%;
    min-width: 1200px;
    color: #fff;
    margin: 0;
    text-align: center;
    position: relative;
}
.manage-footer-content{
      width: 100%;
    height: 180px;
    min-width: 1200px;
    background-color: #1c273f;
    margin: 0 auto;
    box-sizing: border-box;
}
.footer-title{
    padding-top:40px;
    letter-spacing: 6px;
    color: hsla(0,0%,100%,.6);
}
.footer-content{
    padding-top:20px;
    letter-spacing: 6px;
    font-size: 14px;
    color: hsla(0,0%,100%,.7);
}
.footer-content > a{
  margin:0 25px;
}

.footer-buttom{
  height: 27px;
  width: 100%;
  line-height: 27px;
  padding: 0 20px 0 20px;
  text-align: left;
  position: absolute;
  bottom: 0;
  font-size: 12px;
  border-top: 1px solid hsla(0,0%,100%,.08);
  box-sizing: border-box
}
.footer-buttom > span:not(:last-child){
  margin: 0 5px;
}
.footer-text{
  cursor: pointer;
  color: hsla(0,0%,100%,.7);
}
.footer-text:hover{
  color: #2ad;
}
</style>
