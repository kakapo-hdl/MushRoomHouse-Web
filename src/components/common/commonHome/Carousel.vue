<template>
  <div>
    <div class="carousel-image">
     <div class="main-carousel-image">
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
        <li v-if="images.length > 3" class="li-image">
          <img :src="images[images.length - 1].src" />
        </li>
      </ul>
     </div> 
     <!-- <div class="carousel-pointer-image">
       <ul class="ul-pointer-image">
        <li v-for="(item, index) in images" :class="(imageIndex==index ? 'active-border ': ' ' )+'li-pointer-image'" :key="index" >
          <img :src="item.src" />
        </li>
      </ul>
     </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  // props: {
  //   images:Array,
  //   delay:Number,
  //   isAuto:Boolean
  // },
  data() {
    return {
      images: [
        // { text: "图片一", src: require("assets/image/TestImage/1.gif") },
        { text: "图片2", src: require("assets/image/TestImage/2.jpg") },
        { text: "图片3", src: require("assets/image/TestImage/3.jpg") },
        { text: "图片4", src: require("assets/image/TestImage/4.jpg") },
        { text: "图片5", src: require("assets/image/TestImage/5.jpg") },
        { text: "图片6", src: require("assets/image/TestImage/6.jpg") },
      ],
      imagesIndex: 0,
    };
  },
  created() {
    // this.imagesIndex=this.images.length
  },
  mounted() {
    this.$nextTick(this.CarouselTimer());
  },
  methods: {
    CarouselTimer() {
      setTimeout(() => {
        if(this.imagesIndex >= this.images.length)
        this.$refs.carouselImage.style ="transform: translate3d(-" +620 * this.imagesIndex +"px, 0px, 0px); transition-duration: 500ms;";
        console.log(this.$refs.carouselImage);
        if (this.imagesIndex >= this.images.length - 1) this.imagesIndex = 0;
        else this.imagesIndex++;
        this.CarouselTimer();
      }, 1000);
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
.ul-image {
  width: 100%;
  display: flex;
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
.carousel-pointer-image {
  width:620px;
  margin-top: 10px;
  display: flex;
}
.li-pointer-image{
  width: 50px;
  height: 60px;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 6px;
  list-style: none;

}
.ul-pointer-image img{
  width: 50px;
  height: 60px;
}
.active-border{
  border:solid 2px red;
}
</style>
