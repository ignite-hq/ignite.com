import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import Projects from '../views/Projects.vue'
import Requests from '../views/Requests.vue'
import Fundraiser from '../views/Fundraiser.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/projects/:projectId/requests', component: Requests },
  { path: '/projects', component: Projects },
  { path: '/fundraiser', component: Fundraiser },
  { path: '/projects/:projectId/:tab', component: Project }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
