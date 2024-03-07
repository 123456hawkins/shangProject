import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
// 引入全局样式
import '@/styles/index.scss'
// 暗黑模式实现
import 'element-plus/theme-chalk/dark/css-vars.css'
// 注册全局组件
import globalComponent from './components/index'
import router from './router'
import pinia from './store'
const app = createApp(App)

// 引入路由鉴权
import './permissions'
app.use(router)
app.use(pinia)
app.use(globalComponent)
app.use(ElementPlus)
app.mount('#app')
