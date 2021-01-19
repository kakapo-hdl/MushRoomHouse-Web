<template>
    <div class="top-link">
      <div class="top-link-icon" :style='"background-color:"+iconColor'></div>
      <div class="top-link-title">{{title}}</div>
      <div class="top-link-item">
        <a href="#" v-for="(item,index) in cateLinks" :key="index">{{item}} </a>
      </div>
    </div>
</template>

<script>
export default {
name:'TopLink',
props:{
  iconColor: {
      type: String,
      default: "black",
    },
    title:{type:String,
    default:""
    },
    cateLinks:{
      type:Array,
    }
}
}
</script>
<style lang='less' scoped>
.top-link{
      height: 22px;
    /* line-height: 22px; */
    overflow: hidden;
    margin: 0 0 16px;
  width: 100%;
  font-family: Microsoft Yahei,arial,Hiragino Sans GB,å¾®è½¯é›…é»‘,å®‹ä½“,å®‹ä½“,Tahoma,Arial,Helvetica,STHeiti;
}  
.top-link-icon{
    width: 8px;
    height: 100%;
    float: left;
    margin-right: 10px;
}
.top-link-title{
  float: left;
  margin-right: 46px;
  height: 22px;
  line-height: 22px;
  font-size: 20px;
  font-weight: 700;
}
.top-link-item{
  font-size: 14px;
  height: 100%;
  float: left;
}
.top-link-item a{
  margin:0 16px 0 0px;
}
.top-link-item a:hover{
  color:var(--color-link);
}
.top-link-item a::after{
  content: "|";
  margin-left: 17px;
  color:#333;
}
</style>