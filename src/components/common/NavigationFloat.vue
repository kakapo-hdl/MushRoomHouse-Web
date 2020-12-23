<template>
    <div id='sticky-content' class="header-sticky-content">
      <div class="header-wrap">
        <div  class="sticky-image-content">
          <a href="#">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190102_6df9775216h16jc84da8c9hdfi3ga_258x60.png" alt="">
          </a>
        </div>
        <header-tool></header-tool>
      </div>
    </div>
</template>

<script>
import HeaderTool from './commonHome/HeaderTool.vue';
export default {
components: { 
    HeaderTool 
    },
name:'NavigationFloat',
mounted(){
    this.$nextTick(function(){
        window.addEventListener('scroll',function(){
        let scrollTop = document.documentElement.scrollTop;
        let sticky = document.getElementById('sticky-content');
        // console.log(scrollTop+'');
        if(scrollTop>120 && sticky.className.indexOf('header-sticky-show')==-1){
          sticky.className+=' header-sticky-show';
        }
        if(scrollTop<120){
          sticky.classList.remove('header-sticky-show');
        }
        })
    })
},
methods:{

}
}
</script>
<style lang='less' scoped>
.header-sticky-content {
  width: 100%;
  position:fixed;
  top:-75px;
  padding:12px 0 9px 0;
  box-shadow:0 1px 6px #ccc;
  transition: all 0.5s ease ;
  background-color: #fff;
}
.header-sticky-show {
  top:0;
  transition: all 0.5s ease ;
}
.header-wrap{
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.sticky-image-content{
  width:195px;
  height: 30px;
  margin-top: 8px;
  float: left;
}
.sticky-image-content img{
  width:129px;
  height: 30px;
}
.normal-seach-content {
  width: 550px;
  margin:0 0 0 0;
  height: 44px;
}
.function-icon{
  width:335px;
  float: left;
  margin: 0 0 0 26px;
  // margin: 30px 0 0 26px;
}
</style>