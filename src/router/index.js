import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Recipe from "../views/Recipe.vue";
import Requirements from "../views/Requirements.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/requirements",
    name: "Requirements",
    component: Requirements,
  },
  {
    path: "/recipe/:slug",
    name: "Recipe",
    component: Recipe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
