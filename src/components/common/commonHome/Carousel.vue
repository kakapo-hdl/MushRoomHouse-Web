<template>
  <div>
    <div class="carousel-image">
      <ul class="ul-image" style="transform: translate3d(0px, 0px, 0px); transition-duration: 500ms;" ref="carousel-image">
        <li v-for="(item,index) in images" class="li-image" :key="index">
          <img :src="item.src">
        </li>
      </ul>
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
    };
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
.ul-image{
  width: 100%;
  display: flex;
}
.li-image{
  height: 670px;
  width: 618px;
  display: block;
  border-radius: 10px;
  list-style: none;
  background-color: #F9F9F9;
  border: 1px solid #e5e5e5;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
}
.li-image img{
  height: 670px;
  width: 502px;
}
</style>
