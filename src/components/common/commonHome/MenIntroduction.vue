<template>
    <div class="user-dashborad text-center">

      <a href="#" class=" user-a ">
        <div class="user-img">
          <img src="https://s11.mogucdn.com/mlcdn/c45406/201222_69k5fg7ke16i7gdge8hl8h36ec692_400x400.jpg_180x999.v1c96.40.webp" >
        </div>
      </a>
      <a class="user-name">
        我是风清扬，风清扬！
      </a>
      <div class="user-meterial">160cm 52kg | 南昌 | 业务</div>
      <div class="user-operate">
        <div class="user-private-chat pink-buttom " style="width:113px">
           <span class="fa fa-heart-o" style="margin-right:3px"></span>关注
        </div>
        <div class="user-attention gray-buttom" style="width:113px">
          <span class="fa fa-commenting " style="margin-right:3px"></span>私聊</div>
      </div>
      <div class="user-fans-attention">
        <div><p>9.7 万</p> <p>粉丝</p></div>
        <div><p>109</p>    <p>关注</p></div>
      </div>
      <div class="user-image-display">
        <a v-for="(item,index) in images" class="user-image-item" :key="index">
          <div>
            <img :src="item.src">
          </div>
        </a>
      </div>
      <a class="user-more-link">
        <span>查看更多</span>
        <span class="fa fa-angle-right">
        </span>
      </a>
    </div>

</template>

<script>
export default {
name:'MenIntroduction',
props:{
  images:Array
}
}
</script>
<style lang='less' scoped>
.user-dashborad{
  width:317px;
  border:.5px solid #e5e5e5;
  padding-top: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
}
.user-a{
  display: block;
  justify-content: center;
  display: flex;
}
.user-img{
  width:90px;
  height:90px;
  border-radius: 45px;
  overflow: hidden;
}
.user-img img{
  width:100%;
}
.text-center{
  text-align: center;
}
.user-name{
  font-size: 14px;
  display: block;
  margin-top: 12px;
  font-weight: 700;
}
.user-meterial{
  margin-top: 3px;
  color: #666;
}
.user-operate{
  margin:14px auto 24px auto;
  width: 240px;
  display: flex;
  justify-content: space-between;
}
.user-fans-attention{
  display: flex;
  border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  margin-top: 10px;
  padding: 6px 0 6px 0;
}
.user-fans-attention > div{
  position: relative;
  flex-grow: 1;
  font-size: 14px;
}
.user-fans-attention > div >p:nth-last-child(1){
  font-size: 13px;
  color:#999;
}
.user-fans-attention > div:first-child:after {
    position: absolute;
    right: 0;
    top: 10px;
    content: "";
    width: 1px;
    height: 22px;
    background: #efefef;
}
.user-image-display{
  display: flex;
  padding:22px;
  flex-wrap: wrap ;
}
.user-image-item{
  display: block;
  height:148px ;
  width: 88px ;
  margin: 0 1px 0 1px;
}
.user-image-item div{
  position: relative;
  height:148px ;
  width: 89px ;
  overflow: hidden;
}
.user-image-item div > img{
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
    /* -webkit-transform: translateX(-50%); */
  transform: translateX(-50%);
}
.user-more-link{
  width: 100%;
  height: 50px;
  display: block;
  line-height: 50px;
  background-color: #f9f9f9;
  text-align: center;
}
.user-more-link span:nth-child(2){
  font-size: 16px;
  margin-left: 3px;
}
</style>
