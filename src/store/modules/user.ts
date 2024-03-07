import { reqLogOut, reqLogin, reqUserInfo } from '@/api/user'
import { defineStore } from 'pinia'
import type { UserState } from './type/type'
import { constantRoute, asyncRoute, anyRoute } from '@/router/routes'
import { ElNotification } from 'element-plus'
import {
  loginFormData,
  loginResponseData,
  logoutResponseData,
  userInfoResponseData,
} from './type'
import router from '@/router'
// 引入深拷贝用于路由赋值
// @ts-expect-error
import { cloneDeep } from 'lodash'
let dynamicRoutes: any = []
// 用于动态生成用户的路由
function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('token'),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    async login(data: loginFormData) {
      const res: loginResponseData = await reqLogin(data)
      console.log(res)

      // console.log(res)
      if (res.code === 200) {
        this.token = res.data as string
        localStorage.setItem('token', res.data as string)
        return 'ok'
      } else {
        // return Promise.reject(new Error(res.data.message))
        ElNotification({
          type: 'error',
          title: `登录失败`,
          message: res.data,
        })
      }
    },
    // 获取用户信息
    async userInfo() {
      const res: userInfoResponseData = await reqUserInfo()
      console.log('infores', res)

      if (res.code === 200) {
        this.username = res.data.name as string
        this.avatar = res.data.avatar as string
        // 过滤路由,对比异步路由表和请求到的数据表
        const userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          res.data.routes,
        )
        // 当前用户所需的路由整理完毕
        this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
        // 目前路由器管理的只有常量路由，用户计算完毕的异步路由、任意路由都要追加
        dynamicRoutes = [...userAsyncRoute, anyRoute]
        dynamicRoutes.forEach((route: any) => {
          router.addRoute(route) // 动态添加路由
        })
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async userLogout() {
      const res: logoutResponseData = await reqLogOut()
      console.log('tuichu', res)

      if (res.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('avatar')
        dynamicRoutes.forEach((route) => {
          router.removeRoute(route.name)
        })
      } else {
        return Promise.reject(new Error('logout error'))
      }
    },
  },
  getters: {},
})
export default useUserStore
