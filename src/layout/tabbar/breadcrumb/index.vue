<template>
  <el-icon style="margin-right: 10px; cursor: pointer" @click="changeIcon">
    <Expand v-if="useStore.isCollapse"></Expand>
    <Fold v-else></Fold>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <!-- 动态展示路由名字和标题 -->
    <!-- 当为首页时不展示前一级 / 路由 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span style="margin: 0 5px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
const $route = useRoute()
const useStore = useLayOutSettingStore()
const changeIcon = () => {
  useStore.isCollapse = !useStore.isCollapse
}
</script>
<style scoped lang="scss"></style>
