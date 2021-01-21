<template>
  <div>
    <div class="header-login">
      <div class="header-login-logo">
        <router-link to="/Home" class="header-login-img">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/190102_088f4i166l4gkl08k297h5kk8690i_260x200.png"
          />
        </router-link>
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
            <div class="fl">
              <a
                :class="isActive == 'one' ? 'login-text-tab' : ''"
                @click="clickTab('one')"
                >扫码登陆</a
              >
            </div>
            <div class="fl">
              <a
                :class="isActive == 'two' ? 'login-text-tab' : ''"
                :style="isActive != 'three' ? '' : 'display:none'"
                @click="clickTab('two')"
                >账号密码登录
              </a>
            </div>
            <div class="fl">
              <a
                :class="isActive == 'three' ? 'login-text-tab' : ''"
                :style="isActive == 'three' ? '' : 'display:none'"
                >手机号登录
              </a>
            </div>
          </div>
          <div
            class="qrcode-wrap"
            :style="isActive == 'one' ? 'display:block' : 'display:none'"
          >
            <div class="qrcode-text">打开APP-搜索-右下角扫一扫</div>
            <div class="qrcode-image">
              <img src="~/assets/image/login/qrCode.png" />
            </div>
            <div><a class="click-down">下载蘑菇街APP</a></div>
          </div>
          <div
            class="account-login"
            :style="isActive != 'one' ? 'display:block' : 'display:none'"
          >
            <!-- <p>账号或者密码错误</p> -->
            <div class="login-form">
              <form method="post">
                <!-- 账号登录 -->
                <div
                  :style="isActive == 'two' ? 'display:block' : 'display:none'"
                >
                  <input
                    type="text"
                    placeholder="账号/邮箱/手机号"
                    class="login-input"
                  />
                  <input
                    type="password"
                    placeholder="请输入密🐎"
                    class="login-input"
                  />
                </div>
                <!-- 手机密码登录 -->
                <div
                  :style="
                    isActive == 'three'
                      ? 'display:block;position:relative;'
                      : 'display:none'
                  "
                >
                  <a href="" class="active-password">获取动态密码</a>
                  <input type="text" placeholder="手机号" class="login-input" />
                  <input
                    type="password"
                    placeholder="验证🐎"
                    class="login-input"
                  />
                </div>
                <!-- 登录按钮等等 -->
                <div class="login-btn">
                  <input
                    type="submit"
                    class="login-input"
                    value="登录"
                    style="
                      background-color: #fe4260;
                      color: #fff;
                      border: none;
                      cursor: pointer;
                    "
                  />
                </div>
                <div class="forgive-password">
                  <a
                    href="#"
                    :style="
                      isActive == 'two' ? 'display:block' : 'display:none'
                    "
                    >忘记密码</a
                  >
                </div>
                <div
                  class="change-login-method"
                  :style="
                    isActive == 'three' ? 'display:block' : 'display:none'
                  "
                >
                  <a @click="clickTab('two')">账号密码登录</a>
                </div>
                <div
                  class="change-login-method"
                  :style="isActive == 'two' ? 'display:block' : 'display:none'"
                >
                  <a @click="clickTab('three')">手机号登录</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="other-login">
          <div style="margin-left: 32px">社交账号登录</div>
          <div style="margin-left: 18px">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/200303_09kb84laflbiiab492f7fli43c0l3_44x44.png"
            />微信登录
          </div>
          <div style="margin-left: 32px">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/200303_1ef44bdbe932f23fliea61f2fgjje_44x44.png"
            />qq登录
          </div>
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
import CompanyRight from '../../components/common/companyRight/CompanyRight.vue';
import OurInfo from '../../components/content/foot/components/OurInfo.vue';
export default {
  components: {OurInfo, CompanyRight  },
  name: "MouseRoomLogin",
  data() {
    return {
      isActive: "one",
    };
  },
  methods: {
    clickTab(params) {
      this.isActive = params;
    },
  },
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

  background-image: url(../../assets/image/login/login-backgroud.png);
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
  overflow: hidden;
  margin-bottom: 24px;
}
.login-box-tab div {
  width: 50%;
  text-align: center;
  padding-bottom: 3px;
}
.login-box-tab a {
  width: 64px;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
}
.qrcode-wrap div {
  text-align: center;
}
.qrcode-text {
  font-size: 14px;
  color: #666666;
  margin-bottom: 12px;
}
.qrcode-image img {
  width: 180px;
  height: 180px;
}
.click-down {
  width: 180px;
  color: var(--color-pink);
  border: 1px solid var(--color-pink);
  height: 30px;
  line-height: 30px;
  border-radius: 16px;
  display: inline-block;
  margin-top: 12px;
}
.other-login {
  width: 400px;
  background-color: #f5f5f5;
  opacity: 0.9;
  margin-top: 6px;
  overflow: hidden;
  border-radius: 10px;
  padding: 20px 0 20px 0;
}
.other-login div {
  float: left;
}
.other-login img {
  width: 22px;
  height: 22px;
  margin-right: 6px;
}
.footer {
  width: 1200px;
  margin-top: 50px;
  overflow: hidden;
  margin: 0 auto 0 auto;
}
.login-text-tab {
  border-bottom: 3px solid #f46;
}
.account-login {
  text-align: center;
}
.login-input {
  width: 310px;
  height: 44px;
  padding: 0 17px 0 17px;
  border-radius: 22px;
  border: 1px solid #ccc;
  outline: none;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.forgive-password {
  text-align: right;
  min-height: 20px;
  // height: 30px;
  // line-height: 30px;
  color: #959595;
  font-size: 13px;
  padding-right: 45px;
}
.forgive-password a {
  color: #959595;
  text-decoration: underline;
}
.change-login-method {
  font-size: 14px;
}
.change-login-method a {
  border-bottom: 1px solid #333;
}
.hidden {
  display: none;
}
.active-password {
  position: absolute;
  color: #f46;
  top: 71px;
  left: 263px;
}
</style>
