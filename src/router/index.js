import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/project', component: Project }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
