interface dataType {
  token: string
}
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
export interface loginFormData {
  username: string
  password: string
}
export interface loginResponseData {
  code: number
  data: dataType
}
export interface userInfoResponseData {
  code: number
  data: user
}
