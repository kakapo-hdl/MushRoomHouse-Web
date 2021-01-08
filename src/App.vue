<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>

import MouseRoomLogin from './views/login/MouseRoomLogin.vue'

// import Login from './views/login/Login.vue'

export default {
  name: 'App',
  components: { 
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
@import "assets/font-awesome-4.7.0/css/font-awesome.css";
</style>
