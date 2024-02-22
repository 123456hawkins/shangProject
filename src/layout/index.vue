<template>
  <div class="container">
    <!-- 顶部菜单 -->
    <div
      class="top"
      :class="{ fold: LayOutSettingStore.isCollapse ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 左侧菜单 -->
    
    <div
      class="left-slider"
      :class="{ fold: LayOutSettingStore.isCollapse ? true : false }"
    >
      <el-scrollbar class="myScrollbar">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          active-text-color="#fff"
          background-color="#001529"
          text-color="#959ea6"
          :collapse="LayOutSettingStore.isCollapse"
          :router="true"
        >
          <Logo></Logo>
          <Menu :menuList="useStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- main -->
    <div
      class="main"
      :class="{ fold: LayOutSettingStore.isCollapse ? true : false }"
    >
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
import Logo from './logo/index.vue'
import Main from './main/index.vue'
import useUserStore from '@/store/modules/user'
import useLayOutLayOutSettingStore from '@/store/modules/setting'
const useStore = useUserStore()
const LayOutSettingStore = useLayOutLayOutSettingStore()
let $route = useRouter()
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: red;
  .top {
    transition: all 0.3s;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .left-slider {
    height: 100%;
    width: $base-menu-width;
    background-color: $base-menu-background;
    transition: all 0.3s;
    .myScrollbar {
      height: calc(100% - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
    .scrollbar-demo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }
  }
  .main {
    transition: all 0.3s;
    position: absolute;
    overflow: auto;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
