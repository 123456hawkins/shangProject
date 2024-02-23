<template>
  <div class="container">
    <el-row style="height: 100%">
      <!-- xs的目的是当视口宽度小于768的时候，左边不显示 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" style="display: flex; align-items: center">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>用户登录</span>
            </div>
          </template>
          <el-form :rules="ruleForm" :model="userForm" ref="ruleFormRef">
            <el-form-item label="账号" prop="username">
              <el-input
                :prefix-icon="User"
                v-model="userForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                :prefix-icon="Lock"
                type="password"
                v-model="userForm.password"
                show-password
              ></el-input>
            </el-form-item>
          </el-form>
          <template #footer>
            <el-button
              :loading="loading"
              type="primary"
              class="loginBtn"
              @click="login(ruleFormRef)"
            >
              登录
            </el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElMessage, ElNotification, FormInstance } from 'element-plus'
import { useRoute } from 'vue-router'
import getTime from '@/utils/time'
let $router = useRouter()
const $route = useRoute()
let useStore = useUserStore()
const ruleFormRef = ref<FormInstance>()
const loading = ref(false)
const userForm = ref({ username: 'admin', password: '111111' })
const ruleForm = {
  username: [
    {
      required: true,
      min: 5,
      max: 16,
      message: '用户名长度应为5-16位',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 16,
      message: '密码长度应为6-16位',
      trigger: 'change',
    },
  ],
}
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  try {
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        loading.value = true
        const res: any = await useStore.login(userForm.value)
        let redirect: string = $route.query.redirect as string

        if (res === 'ok') {
          let msg = getTime()
          ElNotification({
            type: 'success',
            title: `Hi, ${msg}`,
            message: '欢迎回来',
          })
          const infoRes = await useStore.userInfo()
          if (infoRes === 'ok') {
            // 如果login有地址参数就跳转到相应地址
            $router.push({ path: redirect || '/' })
          } else {
            ElNotification({
              type: 'error',
              title: `获取信息失败`,
            })
          }

          // $router.push('/')
        }
      } else {
        // console.log(fields)

        ElNotification({
          type: 'error',
          title: 'error submit!',
        })
      }
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    loading.value = false
  }
}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg');
  background-size: cover;

  .box-card {
    width: 60%;
    min-width: 480px;
    height: 264px;
    border: 1px solid transparent;
    border-radius: 3%;
    background-color: rgba(255, 255, 255, 0.55);
    .el-card__footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .loginBtn {
      width: 100%;
    }
  }
}
</style>
