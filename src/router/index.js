import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/category.vue')
const Login = () => import('../views/login/MouseRoomLogin.vue')
const Goods = () => import('../views/goods/GoodsDetail.vue')
const ShppingMall = () => import('../views/shoppingMall/ShoppingMall.vue')
const Register = () => import('../views/register/RegisterUser.vue')
const routers = [
  {
    path: '*',
    redirect: '/ShppingMall',
  },
  {
    path: '/Home',
    component: Home,
    meta: { title: '蘑菇街' }
  },
  {
    path: '/Category',
    component: Category, 
    meta: { title: 'Skills - MyApp' }
  },
  {
    path: '/Login',
    component: Login,
    meta: { title: '登录' }
  },
  {
    path: '/Goods',
    component: Goods
  },
  {
    path: '/ShppingMall',
    component: ShppingMall,
     meta: { title: '蘑菇街商城' }
  },
  {
    path:'/register',
    component:Register,
    meta:{title:"注册账户"}
  }
]

export default new VueRouter({
  // 指定路由的模式,此处使用的是hash模式
  // history: createWebHashHistory(),
  // // 路由地址
  // mode:'hash',
  routes: routers
})