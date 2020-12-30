<template>
  <div>
    <div class="header-login">
      <div class="header-login-logo">
        <a class="header-login-img">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/190102_088f4i166l4gkl08k297h5kk8690i_260x200.png"
          />
        </a>
        <span class="header-login-tips">
          依《网络安全法》相关要求，即日起蘑菇街会员登陆需绑定手机。为保障您的账户安全及正常使用，如您尚未绑定，请尽快完成绑定，感谢您的理解和支持!</span
        >
      </div>
    </div>
    <div class="login-content">
      <div class="login-space"></div>
      <div class="fl">
        <div class="login-box">
          <div class="login-box-tab">
            <div class="fl"><a>扫码登陆</a></div>
            <div class="fl"><a>账号密码登录</a></div>
          </div>
          <div class="qrcode-wrap">
            <div class="qrcode-text">打开APP-搜索-右下角扫一扫</div>
            <div class="qrcode-image"><img src="~/assets/image/login/qrCode.png"> </div>
            <div><a class="click-down">下载蘑菇街APP</a> </div>
          </div>
        </div>
        <div class="other-login">
          <div style="margin-left:32px">社交账号登录</div>
          <div style="margin-left:18px"> <img src="https://s10.mogucdn.com/mlcdn/c45406/200303_09kb84laflbiiab492f7fli43c0l3_44x44.png">微信登录</div>
          <div style="margin-left:32px">  <img src="https://s10.mogucdn.com/mlcdn/c45406/200303_1ef44bdbe932f23fliea61f2fgjje_44x44.png">qq登录</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <our-info></our-info>
      <company-right></company-right>
    </div>
  </div>
</template>

<script>
import CompanyRight from '../../components/common/commonHome/CompanyRight.vue';
import OurInfo from '../../components/common/commonHome/OurInfo.vue';
export default {
  components: { OurInfo, CompanyRight },
  name: "MouseRoomLogin",
};
</script>
<style lang='less' scoped>
.header-login {
  padding: 20px 0 20px 0;
  width: 100%;
  background-color: #fff;
}
.header-login-logo {
  margin: 0 auto 0 auto;
  width: 1200px;
  min-height: 10px;
}
.header-login-img {
  width: 130px;
  height: 57px;
  display: inline-block;
  position: relative;
}
.header-login-img img {
  width: 100%;
  position: absolute;
  top: -28px;
}
.header-login-tips {
  background-color: #ffefef;
  border: 1px solid #ffc0cc;
  margin-left: 20px;
  height: 28px;
  line-height: 28px;
  display: inline-block;
  padding: 1px;
  position: absolute;
  top: 26px;
}
.login-content {
  overflow: hidden;
  background-image: url(../../assets/image/login/login-backgroud.png) ;
  width: 100%;
}
.login-space {
  height: 600px;
  float: left;
  width: 62.5%;
}
.login-box {

  width: 400px;
  min-height: 20px;
  overflow: hidden;
  background-color: #fff;
  opacity: 0.9;
  margin-top: 60px;
  border-radius: 10px;
  padding-bottom: 30px;
}
.login-box-tab {
  padding-top: 24px;
  overflow: auto;
  margin-bottom: 24px;
}
.login-box-tab div {
  width: 50%;
  text-align: center;
}
.login-box-tab a {
  width: 64px;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.qrcode-wrap div{
  text-align: center;
}
.qrcode-text{
   font-size: 14px;
   color: #666666;
   margin-bottom: 12px;
}
.qrcode-image img{
  width: 180px;
  height: 180px;
}
.click-down{
  width: 180px;
  color: var(--color-pink);
  border: 1px solid var(--color-pink);
  height: 30px;
  line-height: 30px;
  border-radius: 16px;
  display: inline-block;
  margin-top: 12px;
}
.other-login{
  width: 400px;
  background-color: #f5f5f5;
  opacity: 0.9;
  margin-top: 6px;
  overflow: hidden;
  border-radius: 10px;
  padding: 20px 0 20px 0;
}
.other-login div{
  float: left;
}
.other-login img{
 width: 22px;
 height: 22px;
 margin-right: 6px;
}
.footer{
  margin-top: 50px;
  overflow: hidden;
}

</style>
