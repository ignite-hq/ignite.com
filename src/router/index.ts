import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import ProjectInvest from '../views/ProjectInvest.vue'
import ProjectInvestCreate from '../views/ProjectInvestCreate.vue'
import Projects from '../views/Projects.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/projects', component: Projects },
  { path: '/create-fundraiser', component: ProjectInvestCreate },
  { path: '/projects/:projectId/:tab', component: Project },
  { path: '/projects/:projectId/invest/:investId', component: ProjectInvest }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
