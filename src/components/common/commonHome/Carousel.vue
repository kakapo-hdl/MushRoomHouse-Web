
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
            <span class="fr carousel-display-original-price">¥{{item.oriPrice}}</span>
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
  width: 1460px;
  height: 294px;
  position: relative;
}
.carousel-wiper-item {
  display: none;
  position: absolute;
  top: 0;
  left: -1460px;
  transition-property: left;
  transition-duration: 500ms;
  padding: 0 20px 0 20px;
}

.carousel-display-block {
  width: 195px;
  height: 195px;
  overflow: hidden;
}
.carousel-display-block img {
  width: 195px;
}
.carousele-image-one {
  height: 248px;
  width: 190px;
  padding: 30px 23px 16px 23px;
}
.carousel-display-text {
  color: #666;
  font-size: 16px;
  line-height: 20px;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin-top: 13px;
  margin-bottom: 2px;
  padding: 0 10px;
}
.carousel-price {
  position: relative;
  top: -5px;
  padding: 0 10px;
}
.carousel-display-price {
  color: #ff4466;
  font-style: normal;
  font-size: 22px;
  font-family: "PingFang SC";
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
</style>