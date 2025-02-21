import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
  routes: [
    { path: "/", redirect: "/home", meta: { requiresAuth: true } },
    {
      path: "/",
      name: "layout",
      component: () => import("../layout/default.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../pages/index.vue"),
          meta: {
            requiresAuth: true,
          },
        },

        {
          path: "about",
          name: "about",
          component: () => import("../pages/about.vue"),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !localStorage.getItem("token")
  ) {
    return next({ name: "login" });
  }

  next();
});

export default router;
