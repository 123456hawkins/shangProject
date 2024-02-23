// 统一管理用户接口
import request from '@/utils/request'
// import type {
//   loginFormData,
//   loginResponseData,
//   userInfoResponseData,
//   userLogoutResponseData,
// } from './type'
// // 统一管理接口
// enum API {
//   LOGIN_URL = '/user/login',
//   USERINGO_URL = '/user/info',
//   LOGOUT_URL = '/user/logout',
// }
// // 暴露请求函数
// // 登录接口方法
// export const reqLogin = (data: loginFormData) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data)
// export const reqUserInfo = () => {
//   return request.get<any, userInfoResponseData>(API.USERINGO_URL)
// }
// export const reqLogOut = () =>
//   request.post<any, userLogoutResponseData>(API.LOGOUT_URL)

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINGO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
  MENU_URL = '/admin/acl/index/menu',
}
export const reqLogin = (data: any) =>
  request.post<any, any>(API.LOGIN_URL, data)
export const reqUserInfo = () => {
  return request.get<any, any>(API.USERINGO_URL)
}
export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)
