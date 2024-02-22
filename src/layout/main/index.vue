<template>
  <!-- 可以在这边结合route中的meta信息自定义每个页面的过度动画 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
// 刷新页面功能实现
import useLayOutSettingStore from '@/store/modules/setting'
import { nextTick, ref, watch } from 'vue'
const layoutSettingStore = useLayOutSettingStore()
const flag = ref(true)
// 监听数据是否发生变换
watch(
  () => layoutSettingStore.refsh,
  () => {
    // 点击刷新按钮，路由组件要销毁
    flag.value = false
    // 响应式数据修改后等待dom更新完毕
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<style scoped lang="scss"></style>
