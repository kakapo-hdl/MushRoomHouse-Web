<template>
  <div>
      <!-- <cate-title-bar><cate-title-bar> -->
      <div class="left-banner">

      <a href="">
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/200908_39jgj8aceiih1i50391g7a14gd414_690x1872.png_750x9999.v1c7E.81.webp"/>
      </a>
    </div>
    <div class="right-area-message">
     <carousel class="shoppingHall-carousel"
                :displayCounter=6
                :imageData="imageData"
                :isDisplayPrice=true
                :isOringinalPrice=true
                :autoWiperTime=4000
                :isAutoSwiper=true> 
      </carousel>
        <div></div>
    </div>

  </div>
</template>

<script>
import Carousel from "./commonHome/Carousel.vue";
import CateTitleBar from './commonHome/CateTitleBar.vue';

export default {
  name: "ShoppingGirlMsg",
  components: {
    Carousel,
    CateTitleBar,
  },
  data() {
    return {
     isDisplayPrice:true,
      isOringinalPrice:true,
      displayCounter:6,
      imageData:[
        {text:'加绒休闲老爹鞋女ins潮ssssssss',src:require('assets/image/TestImage/7.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片8',src:require('assets/image/TestImage/8.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片3',src:require('assets/image/TestImage/3.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片4',src:require('assets/image/TestImage/4.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片5',src:require('assets/image/TestImage/5.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片6',src:require('assets/image/TestImage/6.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片2',src:require('assets/image/TestImage/2.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片5',src:require('assets/image/TestImage/5.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片6',src:require('assets/image/TestImage/6.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片2',src:require('assets/image/TestImage/2.jpg'),price:29.6,oriPrice:33.4},
        {text:'加绒休闲老爹鞋女ins潮',src:require('assets/image/TestImage/7.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片8',src:require('assets/image/TestImage/8.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片3',src:require('assets/image/TestImage/3.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片4',src:require('assets/image/TestImage/4.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片5',src:require('assets/image/TestImage/5.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片6',src:require('assets/image/TestImage/6.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片2',src:require('assets/image/TestImage/2.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片5',src:require('assets/image/TestImage/5.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片6',src:require('assets/image/TestImage/6.jpg'),price:29.6,oriPrice:33.4},
        {text:'图片2',src:require('assets/image/TestImage/2.jpg'),price:29.6,oriPrice:33.4},
      ],
    };
  },
};
</script>

<style>
.left-banner {
  overflow: hidden;
  margin-right: 10px;
  float: left;
}
.left-banner img {
  width: 230px;
  height: 624px;
}
.right-area-message {
    float: left;
  height: 624px;
  width: 1118px !important;
  padding-left: 12px;
}
</style>