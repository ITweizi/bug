// 用户鉴权 路由守卫
import router from './router/index.js'
import store from './store/index.js'
const whiteRouter = ['/login']
// 进入每一个路由都会执行这个钩子
router.beforeEach((to, from, next) => {
  // 用户未登录(没有token) 只能进入login
  // 用户登陆,token没过期之前 不允许进入login页面

  // 登陆
  if (store.getters.token) {
    if (to.path === '/login') {
      // 不允许
      next('/')
    } else {
      next()
    }
    // 未登录
  } else {
    if (whiteRouter.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

// /  登陆
// index 首页
