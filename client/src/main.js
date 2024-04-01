import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "@/router";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
