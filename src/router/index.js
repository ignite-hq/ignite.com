import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Index.vue'

const routerHistory = createWebHistory()

const routes = [{ path: '/', component: Home }]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
