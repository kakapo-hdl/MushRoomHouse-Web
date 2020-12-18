<template>
  <div id="app">
    <NavigationHeader></NavigationHeader>
    <navigation-bar></navigation-bar>
  </div>
</template>


<script>
import  NavigationBar from 'components/common/NavigationBar.vue'
import NavigationHeader from 'common/NavigationHeader.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
    NavigationHeader
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
