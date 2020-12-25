<template>
  <div id="app" @scroll="getScollPosition($event)">
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <waterfall-display></waterfall-display>
    <foot></foot>
 


  </div>
</template>


<script>
import NavigationFloat from 'components/common/NavigationFloat.vue'
import NavigationHeader from 'common/NavigationHeader.vue'
import NavigationBar from 'components/common/NavigationBar.vue'
import WaterfallDisplay from './components/common/WaterfallDisplay.vue'
import Foot from './components/common/Foot.vue'



export default {
  name: 'App',
  components: { 
    NavigationFloat,
    NavigationBar,
    NavigationHeader,
    WaterfallDisplay,
    Foot
  }
}
</script>

<style  scoped>
@import "assets/css/base.css";

</style>
