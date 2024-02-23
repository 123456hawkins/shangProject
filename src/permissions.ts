// 路由鉴权专用，项目中路由能不能被访问设置
import router from './router'
// 引入进度条插件
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import useUserStore from './store/modules/user'
import { ElNotification, tabBarProps } from 'element-plus'
const userStore = useUserStore(pinia)
// 未登录不能访问除了登录页面的其他页面
// 扽了后不能访问登录页面
// 项目中任意路由切换前都会切换
nprogress.configure({ showSpinner: false })
router.beforeEach(async (to: any, from: any, next: any) => {
  // tab页名
  document.title = '硅谷甄选-' + to.meta.title
  // 进度条开始
  nprogress.start()
  if (userStore.token) {
    // 已登录
    if (to.path === '/login') {
      // 不让进登录页
      next({ path: '/' })
    } else {
      if (userStore.username) {
        next()
      } else {
        // 有用户信息就放行没有就不放行
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          // token失效
          ElNotification({ type: 'error', message: 'token过期' })
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    // 未登录
    if (to.path === '/login') {
      next()
    } else {
      ElNotification({ type: 'error', message: '请先登录' })
      next({ path: '/login', query: { redirect: to.path } })
    }
  }

  next()
})
// 项目中任意路由切换后都会切换
router.afterEach((to: any, from: any) => {
  // 进度条结束
  nprogress.done()
})
