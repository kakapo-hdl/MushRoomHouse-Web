<template>
  <div id="Waterfall">
    <div class="display-page">
      <div class="wrap-content">
        <div class="waterfall-wrap">
          
          <content-title class="cloumn-title-wrap" style="left: 245px">
          </content-title>
        </div>
        <!-- <div class="waterfall-wrap">
          
          <div class="column-wrap" ref="one">
            <div v-for="(item, index) in arg[0]" :key="index" class="image-item ">
              <div class="">
                <a href="最外面的连接" title=" 「 穿上TA等待初雪 」亮丝羽绒棉服女ins冬季长款外套2020新款潮  #今天穿什么#" style="display:block">
                  <section>
                    <div class="content-under-shadow display-section" >
                     <div class="goods-number">
                     </div>
                     <div class="goods-text">
                        这期颜色搭配也太好看了！🌈陪你过五颜六色的冬天吧～
                        <a class="goods-text-link">#配饰就该这么搭#</a>
                     </div>
                    </div>
                    <div >
                       <img :src="item.src" />
                    </div>
                    <div class="img-mark-description display-section">
                    </div>
                  </section>
                </a>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div class="column-wrap" ref="one" style="padding-top: 1202px">
            <div
              v-for="(item, index) in arg[1]"
              :key="index"
              class="image-item"
            >
              <a href="#">
                <img :src="item.src" />
              </a>
            </div>
          </div>
          <div class="column-wrap" ref="three" style="padding-top: 1202px">
            <div
              v-for="(item, index) in arg[2]"
              :key="index"
              class="image-item"
            >
              <a href="#">
                <img :src="item.src" />
              </a>
            </div>
          </div>
          <div class="column-wrap" ref="four" style="padding-top: 1202px">
            <div
              v-for="(item, index) in arg[3]"
              :key="index"
              class="image-item"
            >
              <a href="#">
                <img :src="item.src" />
              </a>
            </div>
          </div>
          <div class="column-wrap column-wrap-last" ref="five">
            <div
              v-for="(item, index) in arg[4]"
              :key="index"
              class="image-item"
            >
              <a href="#">
                <img :src="item.src" />
              </a>
            </div>
          </div>
          <content-title class="cloumn-title-wrap" style="left: 245px">
          </content-title>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "./commonHome/ContentTitle.vue";
export default {
  components: { ContentTitle },
  name: "WaterfallDisplay",
  data() {
    return {
      images: [
        {text:'图片一',src:require('assets/image/TestImage/1.gif')},
        // {text:'图片2',src:require('assets/image/TestImage/2.jpg')},
        {text:'图片3',src:require('assets/image/TestImage/3.jpg')},
        {text:'图片4',src:require('assets/image/TestImage/4.jpg')},
        {text:'图片5',src:require('assets/image/TestImage/5.jpg')},
        { text: "图片6", src: require("assets/image/TestImage/6.jpg") },
        // {text:'图片7',src:require('assets/image/TestImage/7.jpg')},
        // {text:'图片8',src:require('assets/image/TestImage/8.jpg')},
        // {text:'图片一',src:require('assets/image/TestImage/1.gif')},
        // {text:'图片3',src:require('assets/image/TestImage/3.jpg')},
        // {text:'图片4',src:require('assets/image/TestImage/4.jpg')},
        // {text:'图片5',src:require('assets/image/TestImage/5.jpg')},
        // {text:'图片6',src:require('assets/image/TestImage/6.jpg')},
        // {text:'图片一',src:require('assets/image/TestImage/1.gif')},
        // {text:'图片2',src:require('assets/image/TestImage/2.jpg')},
        // {text:'图片5',src:require('assets/image/TestImage/5.jpg')},
        // {text:'图片6',src:require('assets/image/TestImage/6.jpg')},
        // {text:'图片一',src:require('assets/image/TestImage/1.gif')},
        // {text:'图片2',src:require('assets/image/TestImage/2.jpg')},
      ],
      screenWidth:"1690",
      heightArray: [0, 0, 0, 0, 0],
      arg: [[], [], [], [], []],
      // arg1:[],arg2:[],arg3:[],arg4:[],arg5:[],
    };
  },
  beforeCreate: function() {
    //choce display column by screen width
    let width =document.body.offsetWidth;
    if(width<=1200) this.screenWidth="1200";
    if(1690<=width>1200) this.screenWidth="1200-1690";   
    if(1690<width) this.screenWidth="1690";  
  },
  mounted: function () {
    this.$nextTick(() => {
      this.loadingimage(this.images, 0);
    });
  },

  methods: {
    loadingimage(arr, Aindex) {
      setTimeout(() => {
        if (Aindex >= arr.length) {
          return console.log("image loading finish !");
        }
        this.heightArray[0] = this.$refs.one.offsetHeight;
        // this.heightArray[1] = this.$refs.two.offsetHeight;
        this.heightArray[2] = this.$refs.three.offsetHeight;
        this.heightArray[3] = this.$refs.four.offsetHeight;
        this.heightArray[4] = this.$refs.five.offsetHeight;
        // console.log(this.$refs.one);
        let minHeight = this.heightArray[0];
        let index = 0;
        // if(this.arg[0].length==0 ||this.arg[1].length==0 ||this.arg[2].length==0||this.arg[3].length==0||this.arg[4].length==0){
        //   for(let i=0;i<this.arg.length;i++){
        //     if(this.arg[i]==0){
        //        this.$set(this.arg[i],this.arg[i].length,arr[Aindex]);
        //       //  console.log(this.arg)
        //       // this.arg[i].push(arr[Aindex]);
        //       break;
        //       }
        //     }
        //   }
        //   else{
        // }
        for (let i = 0; i < this.heightArray.length; i++) {
          if (minHeight > this.heightArray[i]) {
            minHeight = this.heightArray[i];
            index = i;
          }
        }
        this.$set(this.arg[index], this.arg[index].length, arr[Aindex]);

        Aindex++;
        this.$nextTick(function () {
          this.loadingimage(arr, Aindex);
        });
      }, 50);
    },
  },
};
</script>
<style lang='less' scoped>
.display-page {
  padding-top: 10px;
}
.wrap-content {
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  width: 1200px;
  padding-bottom: 200px;
}
.waterfall-wrap {
  width: 100%;
  padding-top: 30px;
  overflow: hidden;
  position: relative;
}
.column-wrap {
  width: 220px;
  margin-right: 24px;
  float: left;
}
.column-wrap-last {
  width: 220px;
  margin-right: 0;
  float: left;
}
.column-wrap img {
  width: 100%;
  border-radius: 10px;
  // margin-bottom: 24px;
}
.cloumn-title-wrap {
  position: absolute;
}
.img-mark-description {
    border-radius: 10px;
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
}
.display-section {
  display: none;
}
.image-item {
  position: relative;
  margin-bottom: 24px;
  transition: 0.5s;
}
.image-item:hover{
  transform: translate(0,-3px);
}
.image-item:hover .display-section {
  display: block;
}
.content-under-shadow {
  position:absolute;
  bottom: 0;
  z-index: 1;
  margin-bottom: 12px;
  padding:0 14px 0 14px
}
.goods-text{
  word-break: break-all;
  color: #fff;
  font-size: 14px;
}
.goods-text-link {
  font-weight: 700;
  text-decoration: underline;
   color: #fff;
  font-family: PingFangSC-Medium;
}
</style>
