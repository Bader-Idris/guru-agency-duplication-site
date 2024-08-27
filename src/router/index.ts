import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/PersonalView.vue')
  },
  {
    path: '/branding-agency',
    name: 'branding-agency',
    component: () => import('../views/BrandingAgencyView.vue')
  },
  {
    path: '/horizontal-layout',
    name: 'horizontal-layout',
    component: () => import('../views/HorizontalLayoutView.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/WorkView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
    // same as journal
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/careers',
    name: 'careers',
    component: () => import('../views/CareersView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
