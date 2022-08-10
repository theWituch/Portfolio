import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.css"
import "@/assets/theme.css"

document.title = "Portfolio"

createApp(App).use(router).mount('#app')
