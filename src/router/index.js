import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: "index",
    path: '/',
    component: () => import(/* webpackChunkName: "Index" */ "../views/indexPage.vue") ,
  },
  {
    name: 'qrcode',
    path: '/qrcode',
    component: () => import(/* webpackChunkName: "qrCode" */ "../views/qrcodePage.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
