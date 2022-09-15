import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSimpleBem from 'vue-simple-bem';

import "@/styles/main.scss";

document.title = "Portfolio";

const app = createApp(App)
app.use(router)
app.use(VueSimpleBem)

app.mount("#app");
