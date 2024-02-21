<template>
  <div class="container">
    <div class="top">123</div>
    <div class="left-slider">
      <Logo></Logo>
      <el-scrollbar class="myScrollbar">
        <!-- <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p> -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="001529"
          text-color="#ffffff"
        >
          <Menu :menuList="useStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="main"><Main></Main></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import Menu from './menu/index.vue'
import Logo from './logo/index.vue'
import Main from './main/index.vue'
import useUserStore from '@/store/modules/user'
const useStore = useUserStore()
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: red;
  .top {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    background: cyan;
    top: 0px;
    left: $base-menu-width;
  }
  .left-slider {
    height: 100%;
    width: $base-menu-width;
    background-color: $base-menu-background;
    .myScrollbar {
      height: calc(100% - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
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
    position: absolute;
    overflow: auto;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
  }
}
</style>
