<template>
  <div>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <goods-display></goods-display>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '../../components/content/foot/Foot.vue';
import NavigationBar from '../../components/content/navigation/NavigationBar.vue';
import NavigationFloat from '../../components/content/navigation/NavigationFloat.vue';
import NavigationHeader from '../../components/content/navigationHead/NavigationHeader.vue';
import GoodsDisplay from './childGoods/GoodsDisplay.vue';

export default {
  components: {
    GoodsDisplay,
    NavigationFloat,
    NavigationHeader,
    NavigationBar,
    Foot,

  },
  name: "GoodsDetail",
};
</script>
<style lang='less' scoped>
</style>