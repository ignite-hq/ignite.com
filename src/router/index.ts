import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import Requests from '../views/Requests.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/project', component: Project },
  { path: '/requests', component: Requests }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
