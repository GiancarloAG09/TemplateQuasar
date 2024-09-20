const routes = [
  {
    path: "/", // Nueva ruta para el login
    // component: () => import("layouts/LoginLayout.vue"),
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/landingpage", // Nueva ruta para el login
    // component: () => import("layouts/LoginLayout.vue"),
    component: () => import("pages/LandinPage.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "profile", component: () => import("pages/Perfil.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
