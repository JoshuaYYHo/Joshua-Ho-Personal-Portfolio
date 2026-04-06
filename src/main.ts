import { createApp } from 'vue'
import App from './App.vue'
import { DARK_MAIN, WHITE_TEXT } from './constants/theme'

const app = createApp(App)
app.mount('#app')

// Set global background color
document.body.style.backgroundColor = DARK_MAIN
document.body.style.color = WHITE_TEXT
