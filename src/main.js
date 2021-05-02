import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import VueProgressiveImage from 'vue-progressive-image'


Vue.config.productionTip = false;
Vue.use(moment);
Vue.use(VueProgressiveImage)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
