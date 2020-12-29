<template>
  <div id="Waterfall">
    <div class="display-page">
      <div class="wrap-content-1200" ref="water_fall_wrap">
          <div class="waterfall-wrap"  v-if="screenWidth==='one'">
          <div v-for="(item, index) in argOne" :key="index" :class="index==argOne.length-1 ? 'column-wrap-last':'column-wrap'" :id="'column'+index" :style="(index>=1&&index<=3) ? 'padding-top: 1202px':''">
            <div v-for="(item, index) in argOne[index]" :key="index" class="image-item ">
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
          </div>
          <content-title class="cloumn-title-wrap" style="left: 245px">
          </content-title>
        </div>

        <div class="waterfall-wrap"  v-if="screenWidth==='two'">
          <div v-for="(item, index) in argTwo" :key="index" :class="index==argTwo.length-1 ? 'column-wrap-last':'column-wrap'"  :id="'column'+index" :style="(index>=1&&index<=3) ? 'padding-top: 1202px':''">
            <div v-for="(item, index) in argTwo[index]" :key="index" class="image-item ">
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
          </div>
          <content-title class="cloumn-title-wrap" style="left: 245px">
          </content-title>
        </div>

        <div class="waterfall-wrap"  v-if="screenWidth==='three'">
          <div v-for="(item, index) in argThree" :key="index" :class="index==argThree.length-1 ? 'column-wrap-last':'column-wrap'"  :id="'column'+index" :style="(index>=2&&index<=4) ? 'padding-top: 1202px':''">
            <div v-for="(item, index) in argThree[index]" :key="index" class="image-item ">
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
          </div>
          <content-title class="cloumn-title-wrap" :style="(screenWidth==='three') ? 'left: 488px':'left: 245px'">
          </content-title>
        </div>     
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
      screenWidth:"two",
      heightArray: [],
      argOne: [[], [], [], []],
      argTwo: [[], [], [], [], []],
      argThree:[[], [], [], [], [],[],[]],
      // arg1:[],arg2:[],arg3:[],arg4:[],arg5:[],
    };
  },
 beforeMount: function() {
    //choce display column by screen width
    let width =document.body.offsetWidth;
    if(width<=1200) this.screenWidth="one";
    else if(1690>width>1200) this.screenWidth="two"; 
    else if(1690<width) this.screenWidth="three";  
     console.log(this.screenWidth+'  '+width)
  },
  mounted: function () {
    this.$nextTick(() => {
     
      if(this.screenWidth=='one'){ 
        this.$refs.water_fall_wrap.className="wrap-content-960"
        this.loadingimageOne(this.images, 0);
      }else if(this.screenWidth=='two'){
        this.loadingimageTwo(this.images, 0);
        this.$refs.water_fall_wrap.className="wrap-content-1200"
      }else if(this.screenWidth=="three"){
        console.log(this.screenWidth)
        this.$refs.water_fall_wrap.className="wrap-content-1690"
        this.loadingimageThree(this.images, 0);
      }

    });
  },
  methods: {
    loadingimageOne(arr, Aindex) {
      setTimeout(() => {
        if (Aindex >= arr.length) {
          return console.log("image loading finish !");
        }
        this.heightArray[0] = document.getElementById('column0').offsetHeight;
        this.heightArray[1] = document.getElementById('column1').offsetHeight;
        this.heightArray[2] = document.getElementById('column2').offsetHeight;
        this.heightArray[3] = document.getElementById('column3').offsetHeight;
        let minHeight = this.heightArray[0];
        let index = 0;
        for (let i = 0; i < this.heightArray.length; i++) {
          if (minHeight > this.heightArray[i]) {
            minHeight = this.heightArray[i];
            index = i;
          }
        }
        this.$set(this.argOne[index], this.argOne[index].length, arr[Aindex]);
        Aindex++;
        this.$nextTick(function () {
          this.loadingimageOne(arr, Aindex);
        });
      }, 50);
    },    
    loadingimageTwo(arr, Aindex) {
      setTimeout(() => {
        if (Aindex >= arr.length) {
          return console.log("image loading finish !");
        }
        this.heightArray[0] =document.getElementById('column0').offsetHeight;
        this.heightArray[1] = document.getElementById('column1').offsetHeight;
        this.heightArray[2] = document.getElementById('column2').offsetHeight;
        this.heightArray[3] = document.getElementById('column3').offsetHeight;
        this.heightArray[4] = document.getElementById('column4').offsetHeight;
        let minHeight = this.heightArray[0];
        let index = 0;
        for (let i = 0; i < this.heightArray.length; i++) {
          if (minHeight > this.heightArray[i]) {
            minHeight = this.heightArray[i];
            index = i;
          }
        }
        this.$set(this.argTwo[index], this.argTwo[index].length, arr[Aindex]);
        Aindex++;
        this.$nextTick(function () {
          this.loadingimageTwo(arr, Aindex);
        });
      }, 50);
    },
    loadingimageThree(arr, Aindex) {
      setTimeout(() => {
        if (Aindex >= arr.length) {
          return console.log("image loading finish !");
        }
        this.heightArray[0] =document.getElementById('column0').offsetHeight;
        this.heightArray[1] = document.getElementById('column1').offsetHeight;
        this.heightArray[2] = document.getElementById('column2').offsetHeight;
        this.heightArray[3] = document.getElementById('column3').offsetHeight;
        this.heightArray[4] = document.getElementById('column4').offsetHeight;
        this.heightArray[5] = document.getElementById('column5').offsetHeight;
        this.heightArray[6] = document.getElementById('column6').offsetHeight;
        let minHeight = this.heightArray[0];
        let index = 0;
        for (let i = 0; i < this.heightArray.length; i++) {
          if (minHeight > this.heightArray[i]) {
            minHeight = this.heightArray[i];
            index = i;
          }
        }
        this.$set(this.argThree[index], this.argThree[index].length, arr[Aindex]);
        Aindex++;
        this.$nextTick(function () {
          this.loadingimageThree(arr, Aindex);
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
.wrap-content-960 {
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  width: 960px;
  padding-bottom: 200px;
}
.wrap-content-1200 {
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  width: 1200px;
  padding-bottom: 200px;
}
.wrap-content-1690 {
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  width: 1690px;
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
.image-item  img {
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