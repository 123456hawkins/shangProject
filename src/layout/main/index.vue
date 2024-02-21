<template>
  <!-- 可以在这边结合route中的meta信息自定义每个页面的过度动画 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
