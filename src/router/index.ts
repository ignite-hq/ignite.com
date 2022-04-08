import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import Requests from '../views/Requests.vue'
import ProjectValidators from '../views/ProjectValidators.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/project', component: Project },
  { path: '/requests', component: Requests },
  { path: '/:campaignID/:launchID/validators', component: ProjectValidators }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
