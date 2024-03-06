export interface loginFormData {
  username: string
  password: string
}
// 定义接口统一返回公共类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
// 登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}
export interface userInfoResponseData extends ResponseData {
  data: Data
}
export interface logoutResponseData extends ResponseData {
  data: any
}
export interface Data {
  routes: string[]
  buttons: string[]
  roles: string[]
  name: string
  avatar: string
}
