<template>
  <div class="banner-item" >
    <a href="#">
      <div class="fl banner-item-text">
        <div class="banner-item-title" :style='"color:"+itemTextColor'>{{itemTitle}} </div>
        <div class="banner-item-content">{{itemText}} </div>
      </div>
      <div class="banner-item-img fl">
        <slot name="image"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name:"BannerItem",
  props:{
    itemTextColor:{
    type:String,
    default:"black"
    },
    itemTitle:{
    type:String,
    default:""
    },
    itemText:{
    type:String,
    default:""
    }
  }
}
</script>

<style>
.banner-item{
    background: #ffffff;
    width: 230px;
    height: 83px;
    overflow: hidden;
    margin-right: 10px;
    position: relative;
}
.banner-item a{
  display: block;
}
.banner-item-text{
    width: 137px;
    margin-left: 13px;
    margin-top: 15px;
    font-size: 20px;
}
.banner-item-img{
  position: absolute;
  right: 0;
  width: 83px;
  height: 83px;
  
}
.banner-item-img :hover{
      transform: translateY(-5px);
}
.banner-item-img img{
  width: 100%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.4s ease-out;
}
.banner-item-content{
  color: #666;
  font-size: 12px;
}
</style>