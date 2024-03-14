import { createApp } from "vue";
import App from "./App.vue";
import {vueReadTime} from '../dist/vue-read-time'
const app=createApp(App)
app.use(vueReadTime);
app.mount("#app");
