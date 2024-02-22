<template>
  <div class="toolbar">
    <div class="toolbar_left">
      <breadcrumb></breadcrumb>
    </div>
    <div class="toolbar_right">456</div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import breadcrumb from './breadcrumb/index.vue'

</script>
<style scoped lang="scss">
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .toolbar_left {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .toolbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
