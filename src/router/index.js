import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/indexPage.vue'
import qrcode from '../views/qrcodePage.vue'


const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/qrcode',
    component: qrcode,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
