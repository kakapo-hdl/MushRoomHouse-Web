<template>
  <div>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <div class="goods-wrap">
      <div class="fl">
        <carousel></carousel>
        <div class="comment-text">
          高端货和便宜货的区别，大家自己看吧哈<br /><br />看着像不代表一样，我们只做高端品质，谢谢我家粉丝的信任和支持，爱你们❤️
        </div>
        <div class="look-detail text-999">
          <div class="fl">
            <div class="text-999">
              18 天前 <span class="text-splitter" /> 6.1万浏览
              <span class="text-splitter" />
              2评论
            </div>
          </div>
          <div class="fr">
            <div class="fa fa-share-square-o"></div>
            <div class="fa fa-star-o"> 收藏</div>
            <div class="fa fa-thumbs-o-up"> 13</div>
          </div>
        </div>
      </div>

      <men-introduction class="fr" :images="images"></men-introduction>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Carousel from "../../components/common/commonHome/Carousel.vue";
import MenIntroduction from "../../components/common/commonHome/MenIntroduction.vue";
import Foot from "../../components/common/Foot.vue";
import NavigationBar from "../../components/common/NavigationBar.vue";
import NavigationFloat from "../../components/common/NavigationFloat.vue";
import NavigationHeader from "../../components/common/NavigationHeader.vue";
export default {
  components: {
    NavigationFloat,
    NavigationHeader,
    Foot,
    NavigationBar,
    Carousel,
    MenIntroduction,
  },
  name: "goods",
  data() {
    return {
      images: [
        { text: "图片2", src: require("assets/image/TestImage/2.jpg") },
        { text: "图片3", src: require("assets/image/TestImage/3.jpg") },
        { text: "图片4", src: require("assets/image/TestImage/4.jpg") },
        { text: "图片5", src: require("assets/image/TestImage/5.jpg") },
        { text: "图片6", src: require("assets/image/TestImage/6.jpg") },
        { text: "图片7", src: require("assets/image/TestImage/7.jpg") },
      ],
    };
  },
};
</script>
<style lang='less' scoped>
.goods-wrap {
  overflow: hidden;
  width: 960px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
}
.comment-text {
  margin-top: 24px;
}
.look-detail{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-bottom:20px;
}
.look-detail div:nth-child(2) div{
  font-size: 15px;
  margin-right: 30px;
}
</style>