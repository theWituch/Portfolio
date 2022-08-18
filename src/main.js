import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/theme.css";
import "@/assets/main.css";

document.title = "Portfolio";

createApp(App).use(router).mount("#app");
