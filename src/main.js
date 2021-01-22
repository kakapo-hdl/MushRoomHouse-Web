import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = to.meta.title||'蘑菇街';
});
    next()
  }
)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
