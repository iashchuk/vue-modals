import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";

import routes from "./routes";

import App from "./App.vue";
import "./assets/scss/main.scss";

Vue.use(Vuelidate);
Vue.use(VueRouter);

export const router = new VueRouter({ mode: "history", routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
