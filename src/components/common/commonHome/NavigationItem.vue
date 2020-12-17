<template>
  <div class="header-nav-item">
    <slot name="title"></slot>
    <!-- <slot name="imageUrl"></slot> -->
  </div>
</template>

<script>
export default {
name:'NavigationItem',
// props:{
//   // title:String,
//   // imageUrl:String
// }  
}
</script>
<style lang='less' scoped>
    .header-nav-item{
  line-height: 33px;
  display: inline-block;
  vertical-align: top;
  margin: 0 20px 0 20px;
  font-size: 12px;
  

}
.header-nav-item img{
 width: 10px;
 height: 10px;
 margin-right: 3px;
 vertical-align: middle;
 display: inline-block;
}

</style>