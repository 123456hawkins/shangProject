// 路由鉴权专用，项目中路由能不能被访问设置
import router from './router'
// 引入进度条插件
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 项目中任意路由切换前都会切换
router.beforeEach((to: any, from: any, next: any) => {
  // 进度条开始
  nprogress.start()
  next()
})
// 项目中任意路由切换后都会切换
router.afterEach((to: any, from: any) => {
  // 进度条结束
  nprogress.done()
})
