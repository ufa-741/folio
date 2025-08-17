import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProjectsPage from './components/ProjectsPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
  ],
})
