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
import { getAllUser, DeleteUserById } from "../../network/home";

import NavigationBar from '../../components/content/navigation/NavigationBar.vue'
import NavigationFloat from '../../components/content/navigation/NavigationFloat.vue'
import NavigationHeader from '../../components/content/navigationHead/NavigationHeader.vue'
import ShoppingMallContents from './childShoppingMall/ShoppingMallContents.vue';
import Foot from '../../components/content/foot/Foot.vue';
export default {
  name: "ShoppingMall",
  title: "蘑菇街商城",
  components: {
    NavigationFloat,
    NavigationHeader,
    NavigationBar,
    Foot,
    ShoppingMallContents,
  },
  data(){
    return{
      User:[]
    }
  },
  created(){
    this.getAllUsers()
  },
  methods: {
    getAllUsers() {
         getAllUser().then(res => {
          this.User=res
        })
    },
  },
};
</script>
<style lang='less' scoped>
</style>