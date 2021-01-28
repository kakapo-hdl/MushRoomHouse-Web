<template>
    <div>
      <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>
    <register-conent></register-conent>
    <foot></foot>
    </div>
</template>

<script>
import Foot from '../../components/content/foot/Foot.vue'
import NavigationBar from '../../components/content/navigation/NavigationBar.vue'
import NavigationFloat from '../../components/content/navigation/NavigationFloat.vue'
import NavigationHeader from '../../components/content/navigationHead/NavigationHeader.vue'
import RegisterConent from './registerChild/RegisterConent.vue'

export default {
components: { NavigationFloat, NavigationHeader, NavigationBar, Foot, RegisterConent },
name:'RegisterUser',
    RegisterConent
}
</script>
<style lang='less' scoped>
    
</style>