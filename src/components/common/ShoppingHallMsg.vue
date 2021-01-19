<template>
  <div class="">
    <!-- 倒计时 -->
    <div class="slider-wrap">
      <div class="slider-countdown fl">
        <img src="~assets/image/shoppingmall/countdownimage.png" />
        <div class="count-down-calculation">
          <span>{{ timeDown.hour }}</span>
          <span>:</span>
          <span>{{ timeDown.min }}</span>
          <span>:</span>
          <span>{{ timeDown.second }}</span>
        </div>
      </div>
      <!-- 轮播图 -->
      <carousel class="shoppingHall-carousel"
                :displayCounter=6
                :imageData="imageData"
                :isDisplayPrice=true
                :isOringinalPrice=true
                :autoWiperTime=4000
                :isAutoSwiper=true> 
      </carousel>
    </div>
    <div class="fast-sell-wrap">
      <a href="#"><img src="~assets/image/shoppingmall/limitTimeSell.png"></a>
        <a href="#"><img src="~assets/image/shoppingmall/SeconKill.png"></a>
          <a href="#"><img src="~assets/image/shoppingmall/hotFastSell.png"></a>
            <a href="#"><img src="~assets/image/shoppingmall/newFastSell.png"></a>
              <a href="#"><img src="~assets/image/shoppingmall/fashionDress.png"></a>
                <a href="#"><img src="~assets/image/shoppingmall/beautyShop.png"></a>
    </div>
  </div>
</template>

<script>
import Carousel from './commonHome/Carousel.vue';
export default {
  components: { Carousel },
  name: "ShoppingHallMsg",
  data() {
    return {
      timeDown: { hour:"", min: "", second: "" },
    //   itemDate: {

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
    }
  },
  // watch(){
    
  // },
  mounted() {
    // this.$nextTick(
       this.getCountDownTime(0)
    // )
 
  },
  methods: {
    getCountDownTime(time) {
      setTimeout(() => {
        let nowDay = new Date();
        this.timeDown.hour=23-nowDay.getHours();
        this.timeDown.min=59 -nowDay.getMinutes();
        if(this.timeDown.min<10) this.timeDown.min='0'+this.timeDown.min
        this.timeDown.second=59-nowDay.getSeconds()
        if(this.timeDown.second<10) this.timeDown.second='0'+this.timeDown.second
        this.getCountDownTime(1000)

      }, time);
    },
  },
};
</script>
<style lang='less' scoped>
.slider-wrap{
  overflow: hidden;
}
.slider-countdown {
  position: relative;
  width: 230px;

}
.slider-countdown img {
  width: 230px;
  height: 294px;
}
.count-down-calculation {
  height: 40px;
  position: absolute;
  //  height: 58px;
  //  line-height: 80px;
  top: 228px;
  left: 42.5px;
}
.count-down-calculation span:nth-of-type(odd) {
  width: 40px;
  height: 40px;
  color: #fff;
  background: #0c0c0c;
  font-family: "DIN Condensed";
  font-size: 32px;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
}
.count-down-calculation span:nth-of-type(even) {
  margin: 0 5px 0 5px;
  color: #0c0c0c;
  font-family: "DIN Condensed";
  font-size: 32px;
}
// 轮播图的大小
.shoppingHall-carousel{
  float: left;
  width:1460px;
  min-height: 100px;
  background-color: #fff;
}
.fast-sell-wrap{
  width: 100%;
  height: 150px;
  overflow: hidden;
  display: flex;
  margin-top: 10px;
}
.fast-sell-wrap a:first-child{
  width:470px;
  height: 150px;
  display: block;
}
.fast-sell-wrap a:not(:first-child){
  width:230px;
  height: 150px;
  display: block;
  margin-left: 10px;
}
.fast-sell-wrap >a img{
  width: 100%;
}

</style>