/*
 * @Author: Hawkins
 * @Date: 2024-03-06 13:58:43
 * @Last Modified by:   Hawkins
 * @Last Modified time: 2024-03-06 13:58:43
 */
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
export interface Permission {
  id: number
  createTime: string
  updateTime: string
  pid: number
  name: string
  code: null
  toCode: null
  type: number
  status: null
  level: number
  children?: PermissionList
  select: boolean
}

export type PermissionList = Permission[]

export interface PermissionResponseData extends ResponseData {
  data: PermissionList
}

export interface MenuParams {
  id?: number
  code: string
  level: number
  name: string
  pid: number
}
