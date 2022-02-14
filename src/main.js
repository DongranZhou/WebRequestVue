import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import api from './api';

const app = createApp(App)

app.config.globalProperties.$api = api;

app.use(ElementPlus)
app.mount('#app')