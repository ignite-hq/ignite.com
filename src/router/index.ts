import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import ProjectValidators from '../views/ProjectValidators.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/validators', component: ProjectValidators }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
