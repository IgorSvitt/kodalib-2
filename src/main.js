import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.js"
import './assets/main.css'
import store from "@/store/store";
import router from "@/router/router";

const app = createApp(App)


app
    .use(router)
    .use(store)
    .use(bootstrap)
    .mount('#app')
