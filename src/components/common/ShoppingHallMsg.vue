<template>
  <div>
    <div class="slider-wrap">
      <div class="slider-countdown">
        <img src="~assets/image/shoppingmall/countdownimage.png" />
        <div class="count-down-calculation">
          <span>{{ timeDown.hour }}</span>
          <span>:</span>
          <span>{{ timeDown.min }}</span>
          <span>:</span>
          <span>{{ timeDown.second }}</span>
        </div>
      </div>
      <div class="cousel"></div>
    </div>
    <div class="fast-sell-wrap"></div>
  </div>
</template>

<script>
export default {
  name: "ShoppingHallMsg",
  data() {
    return {
      timeDown: { hour:"", min: "", second: "" },
    };
  },
  watch(){
    
  },
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
.slider-countdown {
  position: relative;
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
</style>