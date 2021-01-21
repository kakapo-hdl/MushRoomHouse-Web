<template>
  <div>
      <top-link :cateLinks=topLinkContent :iconColor=iconColor title="女装"></top-link>
      <div class="left-banner">
      <a href="">
        <img
          src="~assets/image/shoppingmall/fashionGirl.png"/>
      </a>
    </div>
    <div class="right-area-message">
     <carousel-two class="shoppingHall-carousel"
                :displayCounter=6
                :imageData="imageData"
                :isDisplayPrice=true
                :isOringinalPrice=true
                :autoWiperTime=60000
                :isAutoSwiper=true> 
      </carousel-two>
      <div class="bottom-banner-first">
        <a class="fl" ><img src="~assets/image/shoppingmall/bannerOne.png"></a>
        <a class="fl"><img src="~assets/image/shoppingmall/bannerTwo.png"></a>
        <a class="fl"><img src="~assets/image/shoppingmall/bannerThree.png"></a>
      </div>
      <div class="bottom-banner-two">
        <banner-item itemText='秋季衬衫心机穿搭' itemTitle="心机衬衫" itemTextColor="#E139D8">
          <template slot="image"><img src="https://s10.mogucdn.com/mlcdn/c45406/180912_08e76539flif1ejg59fj6d85586g4_1125x1125.png_180x180.v1cAC.40.webp"></template>
        </banner-item>
        <banner-item itemText='秋季衬衫心机穿搭' itemTitle="心机衬衫" itemTextColor="#E139D8">
          <template slot="image"><img src="https://s10.mogucdn.com/mlcdn/c45406/180912_08e76539flif1ejg59fj6d85586g4_1125x1125.png_180x180.v1cAC.40.webp"></template>
        </banner-item>
        <banner-item itemText='秋季衬衫心机穿搭' itemTitle="心机衬衫" itemTextColor="#E139D8">
          <template slot="image"><img src="https://s10.mogucdn.com/mlcdn/c45406/180912_08e76539flif1ejg59fj6d85586g4_1125x1125.png_180x180.v1cAC.40.webp"></template>
        </banner-item>
        <banner-item itemText='秋季衬衫心机穿搭' itemTitle="心机衬衫" itemTextColor="#E139D8">
          <template slot="image"><img src="https://s10.mogucdn.com/mlcdn/c45406/180912_08e76539flif1ejg59fj6d85586g4_1125x1125.png_180x180.v1cAC.40.webp"></template>
        </banner-item>
        <banner-item itemText='秋季衬衫心机穿搭' itemTitle="心机衬衫" itemTextColor="#E139D8">
          <template slot="image"><img src="https://s10.mogucdn.com/mlcdn/c45406/180912_08e76539flif1ejg59fj6d85586g4_1125x1125.png_180x180.v1cAC.40.webp"></template>
        </banner-item>
         <banner-item itemText='秋季衬衫心机穿搭' itemTitle="心机衬衫" itemTextColor="#E139D8">
          <template slot="image"><img src="https://s10.mogucdn.com/mlcdn/c45406/180912_08e76539flif1ejg59fj6d85586g4_1125x1125.png_180x180.v1cAC.40.webp"></template>
        </banner-item>               
      </div>
    </div>

  </div>
</template>

<script>
import CarouselTwo from '../../common/carousel/CarouselTwo.vue';
import BannerItem from './component/BannerItem.vue';
import TopLink from './component/TopLink.vue';


export default {
  name: "ShoppingGirlMsg",
  components: {
    TopLink,
    CarouselTwo,
    BannerItem,
  },
  data() {
    return {
      topLinkContent:['时尚套装','长袖外套','牛仔外套','卫衣','牛仔裤','休闲裤'],
      topTitle:"女装",
      iconColor:"#FFA1B8",
      isDisplayPrice:true,
      isOringinalPrice:true,
      displayCounter:6,
      imageData:[
        {text:'墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙',src:require('assets/image/TestImage/7.jpg'),price:29.6,oriPrice:33.4},
        {text:'墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙',src:require('assets/image/TestImage/8.jpg'),price:29.6,oriPrice:33.4},
        {text:'墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙',src:require('assets/image/TestImage/3.jpg'),price:29.6,oriPrice:33.4},
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
  /* width: 1118px !important; */
  /* padding-left: 12px; */
}
.bottom-banner-first{
  overflow: hidden;
  width: 100%;
  height: 113px;
}
.bottom-banner-first a:first-child{
  width: 470px;
  height: 113px;
  margin-right: 15px;
  display:block;
}
.bottom-banner-first a:not(:first-child){
  width: 230px;
  height: 113px;
    margin-right: 15px;
  display:block;
}
.bottom-banner-first img{
width: 100%;
}
.bottom-banner-two{
  width: 100%;
  height: 88px;
  overflow: hidden;
  margin-top: 9px;
}
.bottom-banner-two div{
  float: left;
}
</style>