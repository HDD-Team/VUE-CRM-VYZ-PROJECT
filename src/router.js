import { createRouter, createWebHistory } from 'vue-router'
import Requests from './components/Requests.vue'
import Events from './components/Events.vue'
import Analytics from './components/Analytics.vue'
import Settings from './components/Settings.vue'
import Students from './components/Students.vue'

const routes = [
  { path: '/', component: Requests, name: 'Requests' },
  { path: '/events', component: Events, name: 'Events' },
  { path: '/analytics', component: Analytics, name: 'Analytics' },
  { path: '/settings', component: Settings, name: 'Settings' },
  { path: '/students', component: Students, name: 'Students' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
