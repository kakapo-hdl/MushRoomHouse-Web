<template>
    <div id='Waterfall'>
      <div class="display-page">
        <div class="wrap-content">
          <div class="waterfall-wrap" >
              <div class="column-wrap" ref="one">
                <div v-for="(item,index) in arg[0]" :key="index" class="image-item">
                  <a href="#">
                  <img :src=item.src>
                  {{item.text}}
                  </a> 
                </div>
              </div>
              <div class="column-wrap" ref="two"> 
                <div v-for="(item,index) in arg[1]" :key="index" class="image-item">
                  <a href="#">
                   <img :src=item.src>
                   {{item.text}}
                  </a> 
                </div>
              </div>
              <div class="column-wrap" ref="three">
                <div v-for="(item,index) in arg[2]" :key="index" class="image-item">
                  <a href="#">
                   <img :src=item.src>
                   {{item.text}}
                  </a> 
                </div>
                </div>
              <div class="column-wrap" ref="four">
                <div v-for="(item,index) in arg[3]" :key="index" class="image-item">
                  <a href="#">
                   <img :src=item.src>
                   {{item.text}}
                  </a> 
                </div>                
              </div>
              <div class="column-wrap column-wrap-last" ref="five">
                <div v-for="(item,index) in arg[4]" :key="index" class="image-item">
                  <a href="#">
                   <img :src=item.src>
                   {{item.text}}
                  </a> 
                </div>                  
              </div>
              <!-- <div class="column-wrap">                   -->
              <div></div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
name:'WaterfallDisplay',
data(){
  return{
    images:[
      {text:'图片一',src:require('assets/image/TestImage/1.gif')},
      {text:'图片2',src:require('assets/image/TestImage/2.jpg')}, 
      {text:'图片3',src:require('assets/image/TestImage/3.jpg')},   
      {text:'图片4',src:require('assets/image/TestImage/4.jpg')},  
      {text:'图片5',src:require('assets/image/TestImage/5.jpg')},
      {text:'图片6',src:require('assets/image/TestImage/6.jpg')},
      {text:'图片7',src:require('assets/image/TestImage/7.jpg')},
      {text:'图片8',src:require('assets/image/TestImage/8.jpg')}
      ],
      heightArray:[],
      arg:[[],[],[],[],[]],
      arg1:[],arg2:[],arg3:[],arg4:[],arg5:[],
  }
},
created:function(){
    this.$nextTick(function () {
      this.images.forEach((Element,Iindex) => {
        this.$nextTick(function(){
        this.heightArray[0]=this.$refs.one.offsetHeight;
        this.heightArray[1]=this.$refs.two.offsetHeight;
        this.heightArray[2]=this.$refs.three.offsetHeight;
        this.heightArray[3]=this.$refs.four.offsetHeight;
        this.heightArray[4]=this.$refs.five.offsetHeight;
          console.log(this.heightArray)
        })

        //得到最小高度的位置
        let minHeight=0;
        let index = 0;
        if(this.arg[0].length==0 ||this.arg[1].length==0 ||this.arg[2].length==0||this.arg[3].length==0||this.arg[4].length==0){
              this.arg[Iindex].push(Element)
        }
        else{
            for(let i=0;i<this.heightArray.length;i++){
            if(minHeight>this.heightArray[i]){
              minHeight=this.heightArray[i];
              index = i;
            }
          }

        this.arg[index].push(Element)
        }
        console.log(this.$refs.one.offsetHeight)
      });
  })
},
methods:{
  // uploadimage
}

}
</script>
<style lang='less' scoped>
.display-page {
  padding-top:10px;

}
.wrap-content {
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  width: 1200px;
  padding-bottom: 200px;
}
.waterfall-wrap {
  width:100%;
  padding-top:30px;
  overflow: hidden;
}
.column-wrap{
  width:220px;
  margin-right: 24px;
  float: left;
}
.column-wrap-last{
  width:220px;
  margin-right: 0;
  float: left;
}
.column-wrap img{
  width: 100%;
  border-radius:10px;
}
</style>
