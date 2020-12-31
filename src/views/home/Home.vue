<template>
    <div id='home'>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <waterfall-display></waterfall-display>
    <foot></foot>
    </div>
</template>

<script>
import Foot from '../../components/common/Foot.vue'
import NavigationBar from '../../components/common/NavigationBar.vue'

import NavigationFloat from '../../components/common/NavigationFloat.vue'
import NavigationHeader from '../../components/common/NavigationHeader.vue'
import WaterfallDisplay from '../../components/common/WaterfallDisplay.vue'
export default {
  components: {
    NavigationFloat,
    NavigationHeader,
    NavigationBar,
    WaterfallDisplay,
    Foot
  },
name:'Home',
}
</script>
<style scoped>

@import "../../assets/css/base.css";
</style>