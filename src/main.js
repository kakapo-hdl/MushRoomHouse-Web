import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || '蘑菇街';
  });
  //  '/Login' || to.path === '/ShoppingMall' ||to.path === '/Goods' || to.path === '/Category' || to.path === '/Home'
  if (to.path !== '/Goods') {
    next();
  } else {
    let token = localStorage.getItem('Token');
     console.log(token);
    if (token === '' || token === null) {
      next('/Login');
    } else {
      next();
    }
  }
}
)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  store:store,
  router: router,
  render: h => h(App),
}).$mount('#app')
