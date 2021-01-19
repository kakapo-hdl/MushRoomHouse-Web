<template>
    <div class="hot-recommend">
      <div class="hot-recommend-title"> 
        <span class="fl">热销商品推荐</span>  <i class="fa fa-refresh fr hot-recommend-refresh" aria-hidden="true" @click="getRecommendsData"> 换一批</i>
        <span class="fr"></span>
      </div>
      <div class="hot-recommend-goods" v-for="(item, index ) in recommendData[recommendDataIndex]" :key="index">
        <div class="hot-recommend-image fl">
          <img :src="item.src">
        </div>
        <div class="hot-recommend-msg fl">
          <span class="hot-recommend-text">{{item.text}} </span>
          <span class="price-text">{{item.price}} </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name:'HotGoodsRecommend',
data(){
  return{
    recommendDataIndex:0,
    recommendData:[],
    recommendGoods: [
        {
          text: "墨锦休闲短外套秋季女我举得不新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/shoppingImage/7.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/shoppingImage/8.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/shoppingImage/3.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/shoppingImage/4.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "加绒休闲老爹鞋女ins潮",
          src: require("assets/image/shoppingImage/7.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片8",
          src: require("assets/image/shoppingImage/8.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片3",
          src: require("assets/image/shoppingImage/3.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/shoppingImage/4.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/shoppingImage/7.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/shoppingImage/8.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/shoppingImage/3.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/shoppingImage/4.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "加绒休闲老爹鞋女ins潮",
          src: require("assets/image/shoppingImage/7.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片8",
          src: require("assets/image/shoppingImage/8.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片3",
          src: require("assets/image/shoppingImage/3.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/shoppingImage/4.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/shoppingImage/5.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/shoppingImage/6.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/shoppingImage/2.png"),
          price: 29.6,
          oriPrice: 33.4,
        },
      ],
  }
},
created(){
  this.generalRecommendsData()
},
methods:{
  generalRecommendsData(){
      for (let i = 0; i < this.recommendGoods.length / 4; i++) {
        this.recommendData[i] = this.recommendGoods.slice(
          i * 4,
          (i + 1) * 4
        );
      }
  },
  getRecommendsData(){
  this.recommendDataIndex= Math.round(
     Math.random().toFixed(1)* (this.recommendData.length-1)
   )
     console.log(this.recommendDataIndex);
  }
}
}
</script>
<style lang='less' scoped>
.hot-recommend{
  width:310px;
  height:555px;
  background-color: #fff;
}
.hot-recommend-title{
  padding: 28px 20px 26px;
  font-size: 18px;
   // letter-spacing: 0;
  color: #333333;
  height: 22px;
  line-height: 22px;
}
.hot-recommend-refresh{
  cursor: pointer;
  color: #5f5f5f;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  font-weight:350;
}
.hot-recommend-goods{
      width: 274px;
    display: block;
    height: 93px;
    margin: 0 auto 21px;
    cursor: pointer;
}
.hot-recommend-image{
  width:93px;
  height: 93px;
  overflow: hidden;
}
.hot-recommend-image img{
  width: 100%;
}
.hot-recommend-msg{
  width: 170px;
  margin-left: 10px;
}
.hot-recommend-text{
  color: #666;
  font-size: 14px;
  line-height: 22px;
  height: 44px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;

    //   width: 100%;
    // font-size: 14px;
    // color: #666666;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // display: -webkit-box;
    // height: 44px;
    // position: relative;
    // line-height: 22px;
    // -webkit-line-clamp: 2;
    // -webkit-box-orient: vertical;
}
</style>