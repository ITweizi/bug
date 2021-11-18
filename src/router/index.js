import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index'
import Index from '../views/Layout/index'
const routes = [
  {
    // 登陆
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    // 首页
    path: '/',
    name: 'Index',
    component: Index
    // component: () => {
    //   return import('../views/Layout/index.vue')
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
