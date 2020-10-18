import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import mock from './mock-data.js'

Vue.config.productionTip = false;
Vue.use(Argon);

let data = {
  numbers: mock,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
