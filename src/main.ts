import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
const app = createApp(App)
// 引入全局样式
import '@/styles/index.scss'
// 注册全局组件
import globalComponent from './components/index'
app.use(globalComponent)
app.use(ElementPlus)
app.mount('#app')
