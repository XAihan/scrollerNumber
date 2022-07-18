import { createApp } from "vue";
import VueRouter from "vue-router";
import router from "./router";
import "./style.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
