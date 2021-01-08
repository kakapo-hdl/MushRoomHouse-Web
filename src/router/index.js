import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/category.vue')
const Login = () => import('../views/login/MouseRoomLogin.vue')
const Goods = () => import('../views/goods/GoodsDetail.vue')
const routers = [
  {
    path: '*',
    redirect: '/Goods'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Goods',
    component: Goods
  },
]

export default new VueRouter({
  // 指定路由的模式,此处使用的是hash模式
  // history: createWebHashHistory(),
  // // 路由地址
  // mode:'hash',
  routes: routers
})