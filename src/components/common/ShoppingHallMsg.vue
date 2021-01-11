<template>
    <div>
      <div class="slider-wrap">
        <div class="slider-countdown">
          <img src="~assets/image/shoppingmall/countdownimage.png">
          <div class="count-down-calculation">
            <span>05</span>
            <span>:</span>
            <span>06</span>
            <span>:</span>
            <span>09</span>
          </div>
        </div>
        <div class="cousel">
          
        </div>
      </div>
      <div class="fast-sell-wrap">

      </div>
    </div>
</template>

<script>
export default {
name:'ShoppingHallMsg'
  
}
</script>
<style lang='less' scoped>
 .slider-countdown{
   position: relative;
 }
 .slider-countdown img{
   width:230px;
   height: 294px;
 }
 .count-down-calculation{
   position: absolute;
  //  height: 58px;
  //  line-height: 80px;
   top: 228px;
   left: 42.5px;
 }
 .count-down-calculation span:nth-of-type(odd){
   width:40px;
   height: 40px;
   color: #fff;
   background: #0C0C0C;
   font-family: "DIN Condensed";
   font-size: 32px;
   display: inline-block;
   text-align: center;
   border-radius: 4px;
 }
 .count-down-calculation span:nth-of-type(even){
  margin: 0 5px 0 5px;
  color: #0C0C0C;
  font-family: "DIN Condensed";
  font-size: 32px;
 }
</style>