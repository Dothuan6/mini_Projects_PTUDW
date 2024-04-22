import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import router from "@/router";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
