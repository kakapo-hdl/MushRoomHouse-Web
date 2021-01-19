<template>
    <div class="left-banner-image" >
        <a v-if="imageIndex==0||imageAndLink.length>=1" href=""><img :src="imageAndLink[imageIndex].src"/></a>
        <a v-else href=""><img src=""/></a>
    </div>
</template>

<script>
export default {
name:"BannerImage",
data(){
  return{
    imageIndex:0
  }
},
props:{
  imageAndLink:{
    type:Array
  }
},
beforeCreate(){


  setInterval(() => {
    this.imageIndex++;
    if(this.imageIndex>1) this.imageIndex=0;
  }, 6000);
}

}
</script>

<style>
.left-banner-image {
  overflow: hidden;
  margin-right: 20px;
  float: left;
}
.left-banner-image img {
  width: 230px;
  height: 555px;
}
</style>