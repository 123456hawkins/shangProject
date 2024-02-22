// 统一管理用户接口
import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINGO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => {
  return request.get<any, userInfoResponseData>(API.USERINGO_URL)
}
