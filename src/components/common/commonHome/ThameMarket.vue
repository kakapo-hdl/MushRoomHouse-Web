<template>
    <div class="thame-market">
      <ul class="thame-goods-list">
        <li v-for="(item,index) in thameMarkets"  :key="index" class="thame-goods-item">
          <a href="#" class="market-list-title">{{item.category}}</a> 
          <span style="margin-left:12px">
          <div v-for="(item2,index) in item.categoryChild"  :key="index" style="display:inline-block">
            <a class="market-item-content" href="#" >
              {{item2}} 
            </a>
            <span v-if="index>=0 && index!=item.categoryChild.length-1" class="text-splitter"></span>
          </div>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
name:'ThameMarket',
data(){
  return{
     thameMarkets:[
      {category:'上衣',categoryChild:['T恤','时尚套装','卫衣']},
      {category:'裙子',categoryChild:['连衣裙','半身裙','笑裙套装']},
      {category:'裤子',categoryChild:['休闲裤','运动裤','牛仔裤']},
      {category:'女鞋',categoryChild:['靴子','单鞋','休闲运动']},
      {category:'包包',categoryChild:['双肩包','拉杆箱','斜挎包']},
      {category:'家居',categoryChild:['床上用品','收纳整理','纸品清洁']},
      {category:'家居',categoryChild:['床上用品','收纳整理','纸品清洁']},
     ]
  }
}  
}
</script>
<style lang='less' scoped>
.thame-market{
  background-color: rgba(255, 255, 255, 0.8);
  width: 305px;
  height: 440px;
  z-index: 3;

}
.thame-goods-list{
  list-style-type: none;
  padding: 0;
  margin: 4px 0 0 0 ;
  font-family: 'PingFang SC';
}
.thame-goods-item{
  padding:5px 0 5px 18px;
}
.thame-goods-item:hover{
  background-color: #fff;
}
.thame-goods-item a:hover{
  text-decoration-line: underline;
}.market-list-title{
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
.market-item-content{
  color: #666;
  // font-weight: 600;
  font-size: 12px;
  font-weight: normal;
}
.text-splitter{ 
    color:#fff ;
    font-size: 0;
    height: 12px;
    width: 0;
    // float: left;
    border-left: 1px solid rgba(255, 255, 255,0.8);
    margin: 6px 9px 0;
}
</style>
