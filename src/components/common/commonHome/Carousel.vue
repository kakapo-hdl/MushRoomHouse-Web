
<template>
  <div>
    <div class="carousel-display-area">
      <div v-for="(displayItem, index) in displayImage" :key="index" style="overflow:hidden" class="carousel-wiper-item">
        <div v-for="(item, index) in displayItem" :key="index" class="carousele-image-one fl">
          <diV class="carousel-display-block ">
            <img :src="item.src" />
          </diV>
          <a class="carousel-display-text">{{item.text}}</a>
          <div class="carousel-price">
          <span class="fl carousel-display-price">¥{{item.price}}</span>
          <span class="fr carousel-display-original-price">{{item.oriPrice}}</span>
          </div>

        </div>
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
      default: 2000,
    },
  },
  beforeMount() {
    this.$nextTick(
      this.groundImage(this.displayCounter)
    )
  },
  mounted(){
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
  },
};
</script>
<style lang='less' scoped>
.carousel-wiper-item{
  position: absolute;
  top: 0;
  left: 0;
}
.carousel-display-area{
  overflow: hidden;
  width: 1460px ;
  height: 294px ;
  position: relative;
}
.carousel-display-block {
  width: 195px;
  height: 195px;
  overflow: hidden;
}
.carousel-display-block img {
  width: 195px;
}
.carousele-image-one{
  height:248px;
   width:190px;
   padding:30px 23px 16px 23px;
}
.carousel-display-text{
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

.carousel-display-price{
    color: #FF4466;
    font-style: normal;
    font-size: 22px;
    font-family: "PingFang SC";
}
.carousel-display-original-price{
    font-size: 16px;
    color: #999;
    font-family: "PingFang SC";
    margin-left: 10px;
    position: relative;
    top: 9px;
    text-decoration: line-through
}

</style>