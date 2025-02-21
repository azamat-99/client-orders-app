import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueViewer from "v-viewer";
import { createPinia } from "pinia";
import Toast from "vue3-toastify";

// Styles
import "./index.css";
import "vue3-toastify/dist/index.css";
import "element-plus/dist/index.css";
import "viewerjs/dist/viewer.css";

const options = {
  autoClose: 1000, // Auto close in 3 seconds
  closeOnClick: true,
};

// Directives
const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueViewer);
app.use(Toast, options);

app.mount("#app");
