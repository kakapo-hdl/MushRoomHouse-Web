<template>
<div :style=isShow>
    <div class="header-content-category" >
      <div class="category-item">
        <div class="header-category-flex">
          主题市场
        </div>
        <ul>
          <li v-for="(item,index) in thameMarkets" :key="index" class="header-category-item">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="category-item">
        <div class="header-category-flex header-category-title">
          热门品牌
          <a href="#" >全部品牌  ></a>
        </div>
        <ul>
          <li v-for="(item,index) in hotBrands" :key="index" class="header-category-item">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="category-item popular-topic-item">
        <div  class="header-category-flex header-category-title">
          流行话题 
          <a href="#" >全部话题 ></a>
        </div>
        <ul>
          <li v-for="(item,index) in popularTopic" :key="index" class="header-category-item">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>            
    </div>  
</div>

</template>

<script>
export default {
name:'HeaderCategory',
props:{
   isShow:Object,default(){ return {display:'block'};},
},
data(){
  return{
    thameMarkets:['上衣','上衣','上衣','上衣','上衣','上衣','上衣','上衣','上衣','上衣'],
    hotBrands:['UNIQLO','Adadas','NIKE','PUMA','BACKTOBACK','ZARA'],
    popularTopic:['#怎么多拿压岁钱? 穿的“嫩”啊!#','#圣诞节这样穿一定有人约！#','#微胖女孩冬日如何显瘦?#','#值得收藏！圣诞这套你必赢#','#吃土也要抢的温柔美裙！#','#十月最强套装攻略，穿到冬天#']

   }
 }
}
</script>
<style lang='less' scoped>
.header-content-category {
  width:1120px;
  min-height: 160px;
  position: absolute;
  z-index: 999;
  margin:-20px 0 0 -200px;
  background-color: #fff;
  border: 1px solid  #e5e5e5;
  box-shadow:0 0 20px #e5e5e5 ;
  display: flex;
}
.header-category-flex {
    display: flex;
  justify-content: space-between;
}
.category-item {
  padding: 30px 0 30px 20px;
  flex: 2;
  border-right: solid 1px #eee;
  line-height: 24px;
  color: #333;

}
.header-category-item{
  display: inline-block;
  margin-right: 30px;
   line-height: 36px;
}
.header-category-title a{
  color:#999;
  font-size:12px;
  margin-right: 15px;
}
.popular-topic-item{
  flex: 3;
}
.header-category-item a:hover{
  color: #FF4466;
}
</style>