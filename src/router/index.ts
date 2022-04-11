import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/projects', component: Projects },
  { path: '/projects/:projectID/:tab', component: Project }
]

const router = createRouter({
  history: routerHistory,
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router
