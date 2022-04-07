import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import ProjectValidators from '../views/ProjectValidators.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/project', component: Project },
  { path: '/:campaignId/:launchId/validators', component: ProjectValidators }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
