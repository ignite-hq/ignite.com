import { createRouter, createWebHistory } from 'vue-router'

import Fundraiser from '../views/Fundraiser.vue'
import Home from '../views/Index.vue'
import Project from '../views/Project.vue'
import ProjectInvest from '../views/ProjectInvest.vue'
import Projects from '../views/Projects.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/create-fundraiser', component: Fundraiser },
  { path: '/projects/:projectId/:tab', component: Project },
  { path: '/projects/:projectId/invest/:investId', component: ProjectInvest }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
