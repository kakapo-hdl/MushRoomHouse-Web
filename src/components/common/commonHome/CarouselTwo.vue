
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
          class="carousel-image-two fl"
        >
          <div class="carousel-display-block-two">
            <img :src="item.src" />
          </div>
          <a class="carousel-display-text">{{ item.text }}</a>
          <div class="carousel-price">
            <span class="fl carousel-display-price">¥{{ item.price }}</span>
            <!-- <span class="fr carousel-display-original-price">¥{{item.oriPrice}}</span> -->
          </div>
        </div>
      </div>
      <div class="slide-icon-left" @click="slideCarousel('left')">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div class="slide-icon-right" @click="slideCarousel('right')">
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselTwo",
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
  methods: {
    groundImage(number) {
      let imagesNumber = this.imageData.length;
      for (let i = 0; i < imagesNumber / number; i++) {
        this.displayImage[i] = this.imageData.slice(
          i * number,
          (i + 1) * number
        );
      }
    },  
    slideCarousel(diretion) {
      if (diretion == "left") {
        if (this.displayIndex >= this.displayImage.length - 1)
          this.displayIndex = 0;
        else this.displayIndex++;
        this.CaroselMove("left", this.displayIndex);
      } else {
        if (this.displayIndex > 0) this.displayIndex--;
        else this.displayIndex = this.displayImage.length - 1;
        this.CaroselMove("right", this.displayIndex);
      }
    },
    CaroselMove(diretion, index) {
      if (diretion == "left") {
        this.$refs.swiperItem[index].style =
          "left:1460px;display:block;transition-duration:0ms";
        setTimeout(() => {
          if (index == 0) {
            this.$refs.swiperItem[this.displayImage.length - 1].style =
              "left:-1460px;display:block;";
          } else {
            this.$refs.swiperItem[index - 1].style =
              "left:-1460px;display:block;";
          }
          this.$refs.swiperItem[index].style = "left:0px;display:block;";
        }, 0);
      }
      else{
         this.$refs.swiperItem[index].style =
          "left:-1460px;display:block;transition-duration:0ms";
        setTimeout(() => {
          if (index == this.displayImage.length - 1) {
            this.$refs.swiperItem[0].style =
              "left:1460px;display:block;";
          } else {
            this.$refs.swiperItem[index+1].style =
              "left:1460px;display:block;";
          }
          this.$refs.swiperItem[index].style = "left:0px;display:block;";
        }, 0);
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
    }
  },
};
</script>
<style lang='less' scoped>
.carousel-display-area {
  overflow: hidden;
  // width: 1460px;
  width: 1450px;
  height: 408px;
  position: relative;
  margin-bottom: 10px;
}
.carousel-wiper-item {
  display: none;
  position: absolute;
  top: 0;
  width: 1450px;
  // left: -1460px;
  transition-property: left;
  transition-duration: 500ms;
}

.carousel-display-block-two {
position: relative;
    width: 199px;
    height: 297px;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 7px;
}
.carousel-display-block-two img {
     position: absolute;
    border-radius: 4px;
    width: 100%;
    height: 100%
}
.carousel-image-two{
    width: 230px;
    height: 408px;
    padding: 16px;
    margin-right: 10px;
    box-sizing: border-box;
    display: inline-block;
    background: #ffffff;
    border-radius: 5px;
    overflow: hidden;
}

.carousel-display-text {
  width:199px;
  color: #666;
  font-size: 16px;
  line-height: 22px;
  height: 44px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 13px;
  margin-bottom: 2px;
}
.carousel-price {
  position: relative;
  top: -5px;
  // padding: 0 10px;
}
.carousel-display-price {
  color: #ff4466;
  font-style: normal;
  font-size: 22px;
  // font-family: "PingFang SC";
   font:  tahoma,arial,sans-serif;
   font-family: Arial, Helvetica, sans-serif;
}
.carousel-display-original-price {
  font-size: 22px;
  color: #999;
  font-family: "PingFang SC";
  margin-left: 10px;
  position: relative;
  top: 5px;
  text-decoration: line-through;
}
.slide-icon-left {
  width: 25px;
  height: 53px;  line-height: 53px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  background-color: #333;
  opacity: 0.8;
  left: 16px;
  cursor: pointer;
  top: 41%;
  margin-top: -24px;

  padding-left: 4px;
  color: #fff;
  box-sizing: border-box;
  font-size: 18px;
}
.slide-icon-right {
  width: 25px;
  height: 53px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  background-color: #333;
  opacity: 0.8;
  right:36px;
  cursor: pointer;
  top: 41%;
  margin-top: -24px;
  line-height: 53px;
  padding-left: 8px;
  color: #fff;
  box-sizing: border-box;
  font-size: 18px;
}
</style>