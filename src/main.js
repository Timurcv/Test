import '@/assets/main.css'
import components from '@/directives';
import router from '@/router/router.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import VIntersection from "@/directives/VIntersection";
import directives from '@/directives';
import store from '@/store';
const app = createApp(App)

components.forEach(components => {
    app.component(components.name, components)
})
directives.forEach(directive => {
app.directive(directive.name, directive)
})


app
.use(router)
.use(store)
.mount('#app')




// app.use(createPinia())
// app.use(router)
