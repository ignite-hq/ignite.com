import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import ProjectFundraiser from '../views/ProjectFundraiser.vue'
import ProjectFundraiserCreate from '../views/ProjectFundraiserCreate.vue'
import Projects from '../views/Projects.vue'
import Signin from '../views/Signin.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/projects', component: Projects },
  { path: '/create-fundraiser', component: ProjectFundraiserCreate },
  { path: '/projects/:projectId/:tab', component: Project },
  {
    path: '/projects/:projectId/fundraisers/:fundraiserId',
    component: ProjectFundraiser
  },
  {
    path: '/sign-in',
    component: Signin
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
