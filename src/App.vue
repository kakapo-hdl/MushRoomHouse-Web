<template>
  <div id="app">
    <navigation-bar></navigation-bar>
  </div>
</template>


<script>
import  NavigationBar from 'components/common/NavigationBar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
