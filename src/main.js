// Important!
// It is necessary to import global styles before importing the application so that in-component styles will be higher in the cascade
import "@/styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import bem from "vue-simple-bem";

document.title = "Portfolio";

const app = createApp(App);
app.use(router);
app.use(bem);

app.mount("#app");
