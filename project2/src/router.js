import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Main from "./components/MainContent.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/list",
    component: List,
    // children : [
    //   path: "/comment",
    //   component: List,
    // ]
  },
  {
    path: "/",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 