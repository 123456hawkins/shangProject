<template>
  <div>
    <span class="container">ceshi</span>
    <svg-icon name="phone" color="red"></svg-icon>
    <svg-icon name="back" color="green"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
// 测试假接口
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '11111',
  },
}).then((res) => {
  console.log(res)
})
</script>
<style scoped lang="scss">
.container {
  color: $color;
}
</style>
