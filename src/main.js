import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/styles/main.scss";

document.title = "Portfolio";

createApp(App).use(router).mount("#app");
