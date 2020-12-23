<template>
  <div id="app" @scroll="getScollPosition($event)">
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <waterfall-display></waterfall-display>
 


  </div>
</template>


<script>
import NavigationFloat from 'components/common/NavigationFloat.vue'
import NavigationHeader from 'common/NavigationHeader.vue'
import NavigationBar from 'components/common/NavigationBar.vue'
import WaterfallDisplay from './components/common/WaterfallDisplay.vue'



export default {
  name: 'App',
  components: { 
    NavigationFloat,
    NavigationBar,
    NavigationHeader,
    WaterfallDisplay
  }
}
</script>

<style  scoped>
@import "assets/css/base.css";

</style>
