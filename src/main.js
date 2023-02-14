import { createApp } from "vue";
import App from "./app/App.vue";
import store from "./store";
import "./assets/tailwind.css";
import phoneMask from "./shared/directives/phoneMask";

createApp(App).directive("phone", phoneMask).use(store).mount("#app");
