import { reqLogOut, reqLogin, reqUserInfo } from '@/api/user'
import {
  loginFormData,
  loginResponseData,
  userLogoutResponseData,
} from '@/api/user/type'
import { defineStore } from 'pinia'
import type { UserState } from './type/type'
import { constantRoute } from '@/router/routes'
import { ElNotification } from 'element-plus'
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('token'),
      menuRoutes: constantRoute,
      username: localStorage.getItem('username'),
      avatar: localStorage.getItem('avatar'),
    }
  },
  actions: {
    async login(data: any) {
      const res: any = await reqLogin(data)
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
      const res: any = await reqUserInfo()
      console.log('res', res)

      if (res.code === 200) {
        localStorage.setItem('avatar', res.data.avatar)
        localStorage.setItem('username', res.data.name)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async userLogout() {
      const res: userLogoutResponseData = await reqLogOut()
      console.log('tuichu', res)

      if (res.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('avatar')
        // dynamicRoutes.forEach((route) => {
        //   router.removeRoute(route.name)
        // })
      } else {
        return Promise.reject(new Error('logout error'))
      }
    },
  },
  getters: {},
})
export default useUserStore
