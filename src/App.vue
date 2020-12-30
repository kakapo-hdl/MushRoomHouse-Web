<template>
  <div id="app">
    <!-- <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <router-view></router-view>
    <foot></foot> -->
    <mouse-room-login></mouse-room-login>
  </div>
</template>


<script>
import NavigationFloat from 'components/common/NavigationFloat.vue'
import NavigationHeader from 'common/NavigationHeader.vue'
import NavigationBar from 'components/common/NavigationBar.vue'
// import WaterfallDisplay from './components/common/WaterfallDisplay.vue'
import Foot from './components/common/Foot.vue'
import MouseRoomLogin from './views/login/MouseRoomLogin.vue'

// import Login from './views/login/Login.vue'

export default {
  name: 'App',
  components: { 
    NavigationFloat,
    NavigationBar,
    NavigationHeader,
    Foot,
    MouseRoomLogin,
  },
  methods:{
    
    LoginrouteClick(){
          console.log(this.$route.path)
  }
  }
}
</script>

<style  scoped>
@import "assets/css/base.css";

</style>
