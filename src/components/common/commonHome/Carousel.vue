<template>
  <div>
    <div class="carousel-image">
     <div class="main-carousel-image" ref="mainCarouselImage" @click="moveImage($event)" @mouseover="ChangeCursor">
       <!-- <div class="pointer-arrow-left"></div>
       <div class="pointer-arrow-right"></div> -->
      <ul class="ul-image" style=" transform: translate3d(0px, 0px, 0px); transition-duration: 500ms;" ref="carouselImage">
        <li v-for="(item, index) in images" class="li-image" :key="index">
          <img :src="item.src" />
        </li>
      </ul>
     </div> 

     <div class="carousel-pointer-image">
       <ul class="ul-pointer-image">
        <li v-for="(item, index) in images" :class="(imagesIndex==index ? 'active-border ': ' ' )+'li-pointer-image'" :key="index" @mouseover="ShowImageByPointer(index)">
          <img :src="item.src" />
        </li>
      </ul>
     </div>

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
        // { text: "图片7", src: require("assets/image/TestImage/8.gif") },
        { text: "图片2", src: require("assets/image/TestImage/2.jpg") },
        { text: "图片3", src: require("assets/image/TestImage/3.jpg") },
        { text: "图片4", src: require("assets/image/TestImage/4.jpg") },
        { text: "图片5", src: require("assets/image/TestImage/5.jpg") },
        { text: "图片6", src: require("assets/image/TestImage/6.jpg") },
      ],
      imagesIndex: 0,
    };
  },
  watch:{
    // imagesIndex:function(){
    //   // console.log(this.imagesIndex);
    // }
  },
  created() {
    // this.imagesIndex=this.images.length
  },
  mounted() {
    // this.$nextTick(this.CarouselTimer());
  },
  methods: {
    moveImage(e){
      console.log(this.$refs.carouselImage.offsetLeft)
       console.log(this.$refs.carouselImage.getBoundingClientRect().left+window.scrollX)
      console.log(e)
    },
    ChangeCursor(){

    },
    ShowImageByPointer(index){
      this.imagesIndex = index
      this.$refs.carouselImage.style ="transform: translate3d(-" +620 * this.imagesIndex +"px, 0px, 0px); transition-duration: 0ms;";
    },
    CarouselTimer() {
      setTimeout(() => {
        this.$refs.carouselImage.style ="transform: translate3d(-" +620 * this.imagesIndex +"px, 0px, 0px); transition-duration: 500ms;";
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
.pointer-arrow-left{
  position: absolute;
  // z-index: 2;
  overflow: hidden;
  height: 100%;
  width: 50%;
  cursor: url(https://s10.mogucdn.com/mlcdn/c45406/190325_1da2399gei4fe7776hlaid8de796c.cur),copy!important;
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
.ul-pointer-image {
  width:620px;
  margin-top: 10px;
  display: flex;

}
.li-pointer-image{
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 6px;
  list-style: none;
  margin-top: 2px;
  // box-sizing:border-box;
  // border:solid 2px #fff;

}
.ul-pointer-image img{
  width: 50px;
  height: 60px;
    // border-radius: 3px;
}
.active-border{
  margin-top: 0px;
  border:solid 2px red;
}
</style>
