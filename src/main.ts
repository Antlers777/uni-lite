import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import { setupPermission } from '@/utils/permission'

export function createApp() {
    const app = createSSRApp(App)
    setupPermission()
    return {
        app
    }
}
