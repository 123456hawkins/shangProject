import { reqLogin, reqUserInfo } from '@/api/user'
import { loginFormData, loginResponseData } from '@/api/user/type'
import { defineStore } from 'pinia'
import type { UserState } from './type/type'
import { constantRoute } from '@/router/routes'
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
      // console.log(res)
      if (res.code === 200) {
        this.token = res.data.token as string
        localStorage.setItem('token', res.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
    // 获取用户信息
    async userInfo() {
      const res: any = await reqUserInfo()
      console.log('res', res)
      if (res.code === 200) {
        this.avatar = res.data.checkUser.avatar
        this.username = res.data.checkUser.username
      } else {
      }
    },
  },
  getters: {},
})
export default useUserStore
