import Vue from "vue";
import App from "./App.vue";
import "flag-icons/sass/flag-icons.scss"; // import flag icons

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
