import Vue from "vue";
import Router from "vue-router";
import Top from "./components/Whole.vue";
import House from "./components/House/HousePage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top
    },
    {
      path: "/house",
      name: "house",
      component: House
    },
    {
      path: "*",
      name: "notfound",
      redirect: "/"
    }
  ]
});
