import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Notifications from '../views/Notifications.vue'
import Project from '../views/Project.vue'
import ProjectFundraiser from '../views/ProjectFundraiser.vue'
import ProjectFundraiserCreate from '../views/ProjectFundraiserCreate.vue'
import Projects from '../views/Projects.vue'
import SignIn from '../views/SignIn.vue'
import Validate from '../views/Validate.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/projects', component: Projects },
  { path: '/notifications', component: Notifications },
  { path: '/create-fundraiser', component: ProjectFundraiserCreate },
  { path: '/projects/:projectId/:tab', component: Project },
  {
    path: '/projects/:projectId/fundraisers/:fundraiserId',
    component: ProjectFundraiser
  },
  { path: '/validate', component: Validate },
  { path: '/validate/:tab', component: Validate },
  {
    path: '/sign-in',
    component: SignIn
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
