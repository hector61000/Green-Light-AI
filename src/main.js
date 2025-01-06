import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'

const app = createApp(App)
app.component('ErrorBoundary', ErrorBoundary)
app.mount('#app')