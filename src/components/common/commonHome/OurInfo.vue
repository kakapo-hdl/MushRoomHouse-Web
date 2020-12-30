<template>
  <div>
    <div class="mgj-foot-info">
      <ul class="mgj-foot-list">
        <li v-for="item in shopInfo" class="mgj-foot-item" :key="item[0]">
          {{ item[0] }}
        </li>
      </ul>
    </div>
    <div class="mgj-foot-companyname">
      <span>©2020 Mogu.com 杭州卷瓜网络有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
name:'OurInfo',
data(){
  return{
     shopInfo: [
        ["关于我们", ""],
        ["招聘信息", "#"],
        ["联系我们", "#"],
        ["有害信息举报", "#"],
        ["规则众议院", "#"],
        ["商家服务", ""],
        ["商家入驻", "#"],
        ["规则中心", "#"],
        ["用户隐私保护", "#"],
      ], 
  }
 
}
}
</script>
<style lang='less' scoped>
.mgj-foot-info {
  min-height: 20px;
  margin-top: 50px;
  overflow: hidden;
}
.mgj-foot-item {
  display: inline-block;
}
.mgj-foot-list {
  text-align: center;
}
.mgj-foot-item:not(:first-child):before {
  content: "|";
  margin: 0 28px;
  font-weight: 300;
}
.mgj-foot-companyname {
  font-weight: 100;
  text-align: center;
  margin-top: 20px;
  display: flex;
}
.mgj-foot-companyname::before {
  flex: 1;
  content: "";
  border-color: #fff;
  border-bottom: 1px solid #fff;
  transform: translate(0, -50%);
}
.mgj-foot-companyname::after {
  flex: 1;
  content: "";
  border-color: #fff;
  border-bottom: 1px solid #fff;
  transform: translate(0, -50%);
}
.mgj-foot-companyname span {
  padding: 0 26px 0 26px;
}
</style>