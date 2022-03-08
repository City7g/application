import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/football',
    name: 'football',
    component: () => import('../views/Football/Home.vue'),
  },
  {
    path: '/football/:country',
    name: 'football-country',
    component: () => import('../views/Football/Country.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router