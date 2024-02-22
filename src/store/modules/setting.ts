// layout相关配置
import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      isCollapse: false,
      refsh: false,//用于控制刷新效果
    }
  },
})

export default useLayOutSettingStore
