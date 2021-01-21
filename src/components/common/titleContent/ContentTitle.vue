<template>
  <div>
    <div class="column-title-image">
      <img src="~assets/image/DisplayTitle/mainImage.jpg">
    </div>
    <div class="shopping-msg">
      <div class="shopping-mall-wrap">
        <a class="shopping-item-link" href="http://www.baidu.com"/>
        <a class="cate-icon-link" v-for="(item,index) in displayMsgs" :key="index" :style="{backgroundImage:'url('+item.src+')'}" >
          <!-- <img src="~/assets/image/DisplayTitle/baby.png"> -->
          <div class="cate-icon-text">{{item.text}}</div>
        </a>
      </div>
      <div class="shopping-word-wrap">
        <a v-for="(item,index) in wordLink" :key=index class="word-item-link" :style="index===0 ? 'color: var(--color-pink)':''">
          {{item}}
        </a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
name:'ContentTitle',
data(){
  return{
    wordLink:['时尚套装','百搭卫衣','T恤','短袖外套','人气衬衫','宽松毛衣','连衣裙','休闲裤','牛仔裤','靴子'],
    displayMsgs:[
      {text:'上衣',src:(require('assets/image/DisplayTitle/shirt.png'))},
      {text:'裙子',src:(require('assets/image/DisplayTitle/skirt.png'))},
      {text:'裤子',src:(require('assets/image/DisplayTitle/pants.png'))},
      {text:'套装',src:(require('assets/image/DisplayTitle/suit.jpg'))},
      {text:'女鞋',src:(require('assets/image/DisplayTitle/womenshop.png'))},
      {text:'包包',src:(require('assets/image/DisplayTitle/pakege.png'))},
      {text:'男装',src:(require('assets/image/DisplayTitle/menshirt.png'))},
      {text:'男鞋',src:(require('assets/image/DisplayTitle/menshop.png'))},
      {text:'内衣',src:(require('assets/image/DisplayTitle/underwear.png'))},
      {text:'母婴',src:(require('assets/image/DisplayTitle/baby.png'))},
      {text:'家具',src:(require('assets/image/DisplayTitle/house.png'))},
      {text:'快抢',src:(require('assets/image/DisplayTitle/other.png'))},
    ]
  }
}
}
</script>
<style lang='less' scoped>
.column-title-image {
  width: 710px;
  height: 750px;
  margin-bottom: 24px;
}
div img{
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.shopping-msg{
  border-radius: 10px;
  box-shadow: 0 0 18px #eee;
}
.shopping-word-wrap{
  width: 710px;
  background-color: --color-text #fff;
  margin-bottom:6px;
    overflow: hidden;
}
.shopping-mall-wrap{
  width: 710px;
  background-image: url("../../../assets/image/DisplayTitle/ShoppingMarket.gif");
  background-size: 100%;
  height: 279px;
  padding-left: 12px;
  margin-bottom: 20px;
}
.shopping-item-link{
  height: 55px;
  display: block;
}
.cate-icon-link{
  width: 112px;
  height: 112px;
    background-size: 100%;
  float: left;
}
.cate-icon-text{
  text-align: center;
  height: 26px;
  line-height: 26px;
  // display: inline;
  margin-top: 75px;
  font-size: 12px;

  // background-color: #fff;
}
.word-item-link {
  width:120px;
  height: 35px;
  line-height:35px;
  margin: 0 0 14px 18px;
  background: #F5F5F5;
  border-radius: 22px;
  float: left;
  display: block;
  text-align: center;
  font-size: 14px;
}
</style>