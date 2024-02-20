<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin, reqUserInfo } from './api/user'
onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
  reqUserInfo()
})
</script>
<style scoped lang="scss"></style>
