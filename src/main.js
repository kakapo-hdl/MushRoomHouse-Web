import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = to.meta.title||'蘑菇街';
});
    next()
  }
)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
