import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  username: string | null
  avatar: string | null
  buttons: []
}
export interface SettingState {
  fold: boolean
}
