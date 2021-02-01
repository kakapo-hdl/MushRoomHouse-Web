<template>
  <div>
    <div class="carousel-image">
      <div class="main-carousel-image">
        <div class="" ref="carouselImage" @click="MoveImage($event)" @mousemove="ChangeCursor($event)">
          <ul
            class="ul-image"
            style="
              transform: translate3d(0px, 0px, 0px);
              transition-duration: 500ms;
            "
            ref="carouselImage"
          >
            <li v-for="(item, index) in images" class="li-image" :key="index">
              <img :src="item.src" />
            </li>
          </ul>
        </div>
        <!-- <div class="pointer-arrow-left"></div>
       <div class="pointer-arrow-right"></div> -->
      </div>

      <div class="carousel-pointer-image">
        <ul class="ul-pointer-image">
          <li
            v-for="(item, index) in images"
            :class="
              (imagesIndex == index ? 'active-border ' : ' ') +
              'li-pointer-image'
            "
            :key="index"
            @mouseover="ShowImageByPointer(index)"
          >
            <img :src="item.src" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselGoods",
  data() {
    return {
      images: [
        { text: "图片2", src: require("assets/image/TestImage/2.jpg") },
        { text: "图片3", src: require("assets/image/TestImage/3.jpg") },
        { text: "图片4", src: require("assets/image/TestImage/4.jpg") },
        { text: "图片5", src: require("assets/image/TestImage/5.jpg") },
        { text: "图片6", src: require("assets/image/TestImage/6.jpg") },
      ],
      imagesIndex: 0,
      CourouselWidth:0
    };
  },
  watch: {
  },
  created() {
  },
  mounted() {
      //  this.$nextTick(
        //  this.CourouselWidth =   this.$refs.carouselImage.getBoundingClientRect().left +
        // window.scrollX +
        // 620 * this.imagesIndex;
        // //  )
    // this.$nextTick(this.CarouselTimer());
  },
  // destroyed(){
  //   this.StopTimer();
  // },
  methods: {
    MoveImage() {
      if(this.$refs.carouselImage.className.indexOf('arrow-left') > -1){
        this.imagesIndex--;
        if(this.imagesIndex==0){
            this.$refs.carouselImage.className = "";
        }
      }else if(this.$refs.carouselImage.className.indexOf('arrow-right') > -1){
         this.imagesIndex++;
            if(this.imagesIndex==this.images.length-1){
            this.$refs.carouselImage.className = "";
        }
      }
      this.$refs.carouselImage.style =
        "transform: translate3d(-" +
        620 * this.imagesIndex +
        "px, 0px, 0px); transition-duration: 500ms;";
    },
    ChangeCursor(e) {
      let CousorPositionX =
      this.$refs.carouselImage.getBoundingClientRect().left +
      window.scrollX +
      620 * this.imagesIndex;
      let CousorWidth = this.$refs.carouselImage.getBoundingClientRect().width;
      if (
        e.clientX < CousorPositionX + CousorWidth / 2 &&
        this.imagesIndex != 0
      ) {
        this.$refs.carouselImage.className = "pointer-arrow-left";
      } else if (
        e.clientX > CousorPositionX + CousorWidth / 2 &&
        this.imagesIndex != (this.images.length-1)
      ) {
        this.$refs.carouselImage.className = "pointer-arrow-right";
      } else {
        this.$refs.carouselImage.className = "";
      }
    },
    ShowImageByPointer(index) {
      this.imagesIndex = index;
      this.$refs.carouselImage.style =
        "transform: translate3d(-" +
        620 * this.imagesIndex +
        "px, 0px, 0px); transition-duration: 0ms;";
    },
    CarouselTimer() {
      setTimeout(() => {
        this.$refs.carouselImage.style =
          "transform: translate3d(-" +
          620 * this.imagesIndex +
          "px, 0px, 0px); transition-duration: 500ms;";
        if (this.imagesIndex >= this.images.length - 1) this.imagesIndex = 0;
        else this.imagesIndex++;
        this.CarouselTimer();
      }, 4000);
    },
  },
};
</script>
<style lang='less' scoped>
.carousel-image {
  width: 620px;
  position: relative;
  overflow: hidden;
  // top: 100px;
}
.pointer-arrow-left {
  cursor: url(https://s10.mogucdn.com/mlcdn/c45406/190325_18affbk4e9c1ld457698fh51ac3j8.cur),
    copy !important;
}
.pointer-arrow-right {
  cursor: url(https://s10.mogucdn.com/mlcdn/c45406/190325_1da2399gei4fe7776hlaid8de796c.cur),
    copy !important;
}
.ul-image {
  width: 100%;
  display: flex;
  margin-top: 0px;
}
.li-image {
  height: 670px;
  width: 618px;
  display: block;
  border-radius: 10px;
  list-style: none;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
}
.li-image img {
  height: 670px;
  width: 502px;
}
.ul-pointer-image {
  width: 620px;
  margin-top: 10px;
  display: flex;
}
.li-pointer-image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 6px;
  list-style: none;
  margin-top: 2px;
  border: 2px solid transparent;
  // border:solid 2px #fff;
}
.ul-pointer-image img {
  width: 50px;
  height: 60px;
  // border-radius: 3px;
}
.active-border {
  // margin-top: 0px;
  border: 2px solid #f46;
   border-radius: 3px;
      //  box-sizing: border-box;
}
</style>
