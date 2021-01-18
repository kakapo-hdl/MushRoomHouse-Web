<template>
  <div>
      <top-link :cateLinks=topLinkContent iconColor="#8FABFF" title="女鞋包包"></top-link>
      <banner-img :imageAndLink=bannerImg></banner-img>
    <div class="right-area-message">
     <carousel-three class="shoppingHall-carousel"
                :displayCounter=10
                :imageData="imageData"
                :isDisplayPrice=true
                :isOringinalPrice=true
                :autoWiperTime=600000
                :isAutoSwiper=true> 
      </carousel-three>
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
import BannerImg from './commonHome/BannerImg.vue';
import BannerItem from './commonHome/BannerItem.vue';
import CarouselThree from './commonHome/CarouselThree.vue';
import CarouselTwo from './commonHome/CarouselTwo.vue';
import TopLink from './commonHome/TopLink.vue';

export default {
  name: "ShoppingPakegetMsg",
  components: {
    TopLink,
    CarouselTwo,
    BannerItem,  
     BannerImg,
         CarouselThree
  },
  data()
  {
  return {
     bannerImg:[
       {src:'https://s10.mogucdn.com/mlcdn/c45406/181031_454bbi840hi2l3h88h3ekeeklk8di_690x1665.jpg_750x9999.v1c7E.81.webp'},
       {src:'https://s10.mogucdn.com/mlcdn/c45406/181031_2615dkk1cjbjei96ai87jlf725da9_690x1665.jpg_750x9999.v1c7E.81.webp'}
       ],
      topLinkContent:['单鞋','小白鞋','运动鞋','帆布鞋','斜挎包','双肩包','手提包','拉杆箱'],
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