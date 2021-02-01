
<template>
  <div>
    <div class="carousel-display-area" @mouseover=StopTimer @mouseout=StartTimer>
      <div
        v-for="(displayItem, index) in displayImage"
        :key="index"
        style="overflow: hidden"
        class="carousel-wiper-item"
        ref="swiperItem"
      >
        <div
          v-for="(item, index) in displayItem"
          :key="index"
          class="carousele-image-one fl"
        >
          <div class="carousel-display-block">
            <img :src="item.src" />
          </div>
          <a class="carousel-display-text">{{ item.text }}</a>
          <div class="carousel-price">
            <span class="fl carousel-display-price">¥{{ item.price }}</span>
            <!-- <span class="fr carousel-display-original-price">¥{{item.oriPrice}}</span> -->
          </div>
        </div>
      </div>
      <div class="carousel-dot-wrap ">
        <a v-for="(displayItem, index) in displayImage" @mouseover="MouseOnDot(index)" :key="index" class="carousel-dot-swiper" :style="index==displayIndex ? 'background-color:#666':''">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      displayImage: [],
      displayIndex: 0,
      timer:Object,
      couterTime:0,
    };
  },
  props: {
    imageClass: {
      height: {
        type: Object,
        default: {},
      },
    },
    isDisplayPrice: {
      type: Boolean,
      default: false,
    },
    isOringinalPrice: {
      type: Boolean,
      default: false,
    },
    displayCounter: {
      type: Number,
      default: 6,
    },
    imageData: {
      type: Array,
    },
    //是否自动轮播
    isAutoSwiper: {
      type: Boolean,
      default: false,
    },
    //自动轮播时间 单位毫秒
    autoWiperTime: {
      type: Number,
      default: 1000,
    },
  },
  beforeMount() {
    this.$nextTick(this.groundImage(this.displayCounter));
    this.StartTimer()
  },
  mounted() {
    this.$refs.swiperItem[this.displayIndex].style = "left:0px;display:block;";
  },
    destroyed(){
    this.StopTimer();
  },
  methods: {
    groundImage(number) {
      let imagesNumber = this.imageData.length;
      for (let i = 0; i < imagesNumber / number; i++) {
        this.displayImage[i] = this.imageData.slice(
          i * number, (i + 1) * number
        );
      }
    },  
    slideCarousel(diretion) {
      let originalIndex=this.displayIndex
      if (diretion == "left") {
        if (this.displayIndex >= this.displayImage.length - 1)
          this.displayIndex = 0;
        else this.displayIndex++;
        this.CaroselMove("left", this.displayIndex,originalIndex 
        
        );
      } else {
        if (this.displayIndex > 0) this.displayIndex--;
        else this.displayIndex = this.displayImage.length - 1;
        this.CaroselMove("right", this.displayIndex,originalIndex);
      }
    },
    CaroselMove(diretion, index,originalIndex) {
      if (diretion == "left") {
        this.$refs.swiperItem[index].style =
          "left:1120px;display:block;transition-duration:0ms";
        setTimeout(() => {
          this.$refs.swiperItem[originalIndex].style = "left:-1120px;display:block;";
          this.$refs.swiperItem[index].style = "left:0px;display:block;";
        }, 10);
      }
      else{
         this.$refs.swiperItem[index].style =
          "left:-1120px;display:block;transition-duration:0ms";
        setTimeout(() => {
         this.$refs.swiperItem[originalIndex].style = "left:1120px;display:block;";
          this.$refs.swiperItem[index].style = "left:0px;display:block;";
        }, 10);
      }
    },
    StopTimer(){
      clearInterval(this.timer)
    },
    StartTimer(){
     this.timer=setInterval(() => {
     this.couterTime++;
     if(this.couterTime>=(this.autoWiperTime*0.1)){
     this.slideCarousel("left") 
     this.couterTime=0
     }  
     }, 10);
    },
    MouseOnDot(index){
      
      if(index<this.displayIndex){
        // move direction left
        this.CaroselMove("right",index,this.displayIndex)
      }else if(index>this.displayIndex){ 
        // move direction right
          this.CaroselMove("left",index,this.displayIndex)
      }
     this.displayIndex= index;
    }
  },
};
</script>
<style lang='less' scoped>
.carousel-display-area {
  overflow: hidden;
  width: 1120px;
  height: 555px;
  background-color: white;
  position: relative;
}
.carousel-wiper-item {
  width: 100%;
  height: 520px;
  display: none;
  position: absolute;
  top: 0;
  left: -1120px;
  transition-property: left;
  transition-duration: 500ms;
}
.carousel-display-block {
   width: 182px;
  height: 182px;
  overflow: hidden;
}
.carousel-display-block img {
  width: 182px;
  height: 100%;
}
.carousele-image-one {
  height: 233px;
  width: 182px;
  padding: 21px 21px 0px 21px;
}
.carousel-display-text {
display: inline-block;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    height: 20px;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 182px;
    color: #333333;
}
.carousel-price {
  position: relative;
  top: -5px;

}
.carousel-display-price {
    color: #ff4466;
    font-style: normal;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.carousel-display-original-price {
  font-size: 16px;
  color: #999;
  font-family: "PingFang SC";
  margin-left: 10px;
  position: relative;
  top: 5px;
  text-decoration: line-through;
}
.slide-icon-left {
  width: 25px;
  height: 48px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  background-color: #333;
  opacity: 0.3;
  cursor: pointer;
  top: 50%;
  margin-top: -24px;
  line-height: 48px;
  padding-left: 4px;
  color: #fff;
  box-sizing: border-box;
  font-size: 18px;
}
.slide-icon-right {
  width: 25px;
  height: 48px;
  right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  background-color: #333;
  opacity: 0.3;
  cursor: pointer;
  top: 50%;
  margin-top: -24px;
  line-height: 48px;
  padding-left: 8px;
  color: #fff;
  box-sizing: border-box;
  font-size: 18px;
}
.carousel-dot-wrap{
  width: 100%;
  height: 20px;
  text-align: center;
  position: absolute;
  bottom: 10px;
}
.carousel-dot-swiper{
    margin-right: 18px;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    cursor: pointer;
    padding: 0;
    background: #D8D8D8;
    display: inline-block;
}
</style>