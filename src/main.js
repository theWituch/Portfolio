import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/theme.css";
import "@/assets/main.css";
import "@/assets/css/tweaks/material-icons.css";

document.title = "Portfolio";

createApp(App).use(router).mount("#app");
