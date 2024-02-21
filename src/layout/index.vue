<template>
  <div class="container">
    <div class="top">123</div>
    <div class="left-slider">
      <Logo></Logo>
    </div>
    <div class="main">123</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import Logo from './logo/index.vue'
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
