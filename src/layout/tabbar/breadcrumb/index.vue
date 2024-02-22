<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <Expand></Expand>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
const useStore = useLayOutSettingStore()
const changeIcon = () => {
  useStore.isCollapse = !useStore.isCollapse
}
</script>
<style scoped lang="scss"></style>
