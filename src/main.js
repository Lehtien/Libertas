import Vue from "vue";
import App from "./App.vue";
import VueObserveVisibility from "vue-observe-visibility";
import VueScrollTo from "vue-scrollto";
import VueLazyload from "vue-lazyload";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(VueObserveVisibility);
Vue.use(VueScrollTo, { duration: 500, easing: "ease" });
Vue.use(VueLazyload, { preLoad: 2, observer: true, throttleWait: 0 });
Vue.use(Vue2TouchEvents, { swipeTolerance: 380 });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
