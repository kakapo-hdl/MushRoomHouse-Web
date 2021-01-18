<template>
  <div>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <shopping-mall-contents></shopping-mall-contents>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '../../components/common/Foot.vue';
import NavigationBar from '../../components/common/NavigationBar.vue';
import NavigationFloat from "../../components/common/NavigationFloat.vue";
import NavigationHeader from "../../components/common/NavigationHeader.vue";
import ShoppingGirlMsg from '../../components/common/ShoppingGirlMsg.vue';
import ShoppingMallContents from '../../components/common/ShoppingMallContents.vue';
import WaterfallDisplay from '../../components/common/WaterfallDisplay.vue';
export default {
  title:'蘑菇街商城',
  components: {
    NavigationFloat, 
    NavigationHeader,
    NavigationBar,
    WaterfallDisplay,
    Foot,
    ShoppingMallContents,
    ShoppingGirlMsg 
     },
  name: "",
};
</script>
<style lang='less' scoped>
</style>