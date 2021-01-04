<template>
  <div>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <div class="goods-wrap"><carousel></carousel></div>

    <foot></foot>F
  </div>
</template>

<script>
import Carousel from "../../components/common/commonHome/Carousel.vue";
import Foot from "../../components/common/Foot.vue";
import NavigationBar from "../../components/common/NavigationBar.vue";
import NavigationFloat from "../../components/common/NavigationFloat.vue";
import NavigationHeader from "../../components/common/NavigationHeader.vue";
export default {
  components: {
    NavigationFloat,
    NavigationHeader,
    Foot,
    NavigationBar,
    Carousel,
  },
  name: "goods",
};
</script>
<style lang='less' scoped>
.goods-wrap {
  width: 1200px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>