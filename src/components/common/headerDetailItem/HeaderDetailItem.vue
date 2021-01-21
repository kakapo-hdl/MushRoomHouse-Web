<template>
  <div class="mgj-header-mod">
      <!-- <div > -->
        <div v-for="(content,index) in Contents" :key="index"  :class="[index==0 ?'mgj-header-title':'mgj-header-Item']" >

          <div v-if="index==0">
              {{ content[0]}} 
          </div>

          <a v-else :href=content[1]>{{ content[0]}} </a>
      </div>
      <!-- </div> -->
  </div>
    
</template>

<script>
export default {
name:'HeaderDetailItem',
props:{
  Contents:Array,
  default(){return []},
}
}
</script>
<style lang='less' scoped>
.mgj-header-mod{
  flex: 1;
}
.mgj-header-title{
  font-size: 14px;
  margin-bottom:23px;
  line-height: 20px;
}
.mgj-title-border {
    width: 30px;
    height: 1px;
    background: #999;
    margin-top: 4px;
}
.mgj-header-Item {
  // margin-bottom: 12px;
  font-size:12px;
  height: 17px;
  line-height:17px;
  font-weight: 300;
}

.mgj-header-Item:not(:last-child) {
    margin-bottom: 12px;
}
a:-webkit-any-link {
  color:#333 ;
}
a:hover{
  color: #FF4466;
}

</style>