import { reqLogin } from '@/api/user'
import { loginFormData, loginResponseData } from '@/api/user/type'
import { defineStore } from 'pinia'
import type { UserState } from './type/type'
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('token'),
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
  },
  getters: {},
})
export default useUserStore
