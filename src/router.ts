import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";

export const routes = [
  {
    path: "/",
    name: "scrollerNumber",
    component: () => import("./components/scrollerNumber/index.vue"),
    meta: {
      title: "滚动的数字",
    },
  },
  {
    path: "/slidingClock",
    name: "slidingClock",
    component: () => import("./components/slidingClock/index.vue"),
    meta: {
      title: "滑动的时钟",
    },
  },
  {
    path: "/whiteSlidingClock",
    name: "whiteSlidingClock",
    component: () => import("./components/whiteSlidingClock/index.vue"),
    meta: {
      title: "滑动的时钟白天",
    },
  },
];

const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  history: createWebHistory(),
  routes,
});

export default router;
