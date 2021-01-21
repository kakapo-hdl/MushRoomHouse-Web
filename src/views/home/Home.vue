<template>
    <div>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <waterfall-display></waterfall-display>
    <foot></foot>
    </div>
</template>

<script>
import Foot from '../../components/content/foot/Foot.vue'
import NavigationBar from '../../components/content/navigation/NavigationBar.vue'
import NavigationFloat from '../../components/content/navigation/NavigationFloat.vue'
import NavigationHeader from '../../components/content/navigationHead/NavigationHeader.vue'
import WaterfallDisplay from './ChildHome/WaterfallDisplay.vue'

export default {
  components: {
    NavigationFloat,
    NavigationHeader,
    NavigationBar,
    WaterfallDisplay,
    Foot,
  },
name:'Home',
}
</script>
<style scoped>

@import "../../assets/css/base.css";
</style>