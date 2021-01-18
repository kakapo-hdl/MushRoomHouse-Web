<template>
  <div>
    <div class="shopping-mall-wrapper">
      <div class="shopping-mall-herder">
        <div class="fl">
          <a>主题市场</a>
        </div>
        <div class="fl">
          <a>限时快抢</a>
        </div>
      </div>
    </div>
    <div class="shopping-mall-content">
      <div class="shopping-mall-wrapper">
        <div class="shopping-mall-main">
          <thame-market class="fl"></thame-market>
          <!-- /*标题背景图片 */ -->
          <a href="#" class="header-image fl"> </a>
          <div class="fl user-info">
            <div class="block-top">
              <a href="#" class="user-info-image"></a>
              <div>
                菇凉好! <span style="font-weight: bold"> 欢迎来到蘑菇街~</span>
              </div>
              <a href="#" class="user-info-member"> 会员中心 </a>
            </div>
            <div class="block-top">
              <a href="#">
                <div class="block-tow-title">来蘑菇街APP</div>
                <div style="color: #666">海量时尚好货</div>
                <a class="user-gift-image"></a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 有个倒计时和轮播图 -->
    <div style="overflow:hidden; background-color:#F5F5F5" >
      <div class="shopping-mall-wrapper" style="margin-top: 15px">
        <shopping-hall-msg ></shopping-hall-msg>
        <shopping-girl-msg ></shopping-girl-msg>
        <shopping-pakeget-msg></shopping-pakeget-msg>
      </div>
    </div>
  </div>
</template>

<script>
import ThameMarket from "./commonHome/ThameMarket.vue";
import ShoppingGirlMsg from './ShoppingGirlMsg.vue';
import ShoppingHallMsg from "./ShoppingHallMsg.vue";
import ShoppingPakegetMsg from './ShoppingPakegetMsg.vue';
export default {
  components: { ThameMarket, ShoppingHallMsg, ShoppingGirlMsg, ShoppingPakegetMsg },
  name: "ShoppingMallContents",
};
</script>
<style lang='less' scoped>
.shopping-mall-wrapper {
  width: 1690px;
  margin: 0 auto 0 auto;
}
.shopping-mall-wrapper:nth-of-type(2) {
  background-color: #f5f5f5;
}
.shopping-mall-herder {
  height: 40px;
}
.shopping-mall-herder div {
  overflow: hidden;
}
.shopping-mall-herder div:nth-of-type(1) {
  width: 305px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: url("../../assets/image/shoppingmall/shoppingmallheader.png");
  background-size: 95% 100%;
}
.shopping-mall-herder div:nth-of-type(1) a {
  position: absolute;
  left: 50px;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  height: 40px;
  line-height: 40px;
}
.shopping-mall-herder div:nth-of-type(2) a {
  display: block;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 140px;
  font-size: 18px;
}
.shopping-mall-herder div:nth-of-type(2) a:hover {
  cursor: pointer;
  color: var(--color-pink);
}
/*content style */
.shopping-mall-content {
  overflow: hidden;
  background-color: #db5b5a;
  border-top: 1px solid #ff4466;
  margin: 1px 0 0 0;
}
.shopping-mall-main {
  min-height: 400px;
}
.header-image {
  display: block;
  background: url("../../assets/image/shoppingmall/headerImage.jpg");
  height: 440px;
  width: 1134px;
  background-size: 100% 100%;
}
.user-info {
  width: 250px;
  height: 420px;
  margin-top: 10px;
}
.block-top {
  text-align: center;
  width: 100%;
  height: 205px;
  background-color: rgba(255, 255, 255, 0.8);
}
.block-top:nth-child(2) {
  margin-top: 10px;
}
.block-top:first-child {
  height: 195px;
  padding-top: 10px;
}
.user-info-image {
  display: block;
  text-decoration: none;
  width: 72px;
  height: 72px;
  margin: 0 auto 0px auto;
  border-radius: 100%;
  background: #ff94c6 url("../../assets/image/shoppingmall/user.png") no-repeat
    center center;
  background-size: 30px 30px;
}
.user-info-member {
  margin: 7px auto 0px auto;
  width: 72px;
  height: 24px;
  line-height: 24px;
  border: #ff4466 1px solid;
  color: #ff4466;
  display: block;
}
.block-tow-title {
  padding: 20px 0 5px 0;
  font-size: 16px;
}
.user-gift-image {
  display: block;
  height: 130px;
  width: 130px;
  margin: 5px auto 0px auto;
  background: #f8dede url("../../assets/image/shoppingmall/gift.png") no-repeat
    center;
  background-size: contain;
}
.shopping-mall-wrapper div{
  overflow: hidden;
  margin-bottom: 48px;
}
</style>