import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    {
      path: '/content-search',
      name: 'content-search',
      component: () => import('@/views/ContentSearch.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('@/views/Practice.vue')
    },
    {
      path: '/practice-landing',
      name: 'practice-landing',
      component: () => import('@/views/PracticeLanding.vue')
    },
    {
      path: '/practice-result',
      name: 'practice-result',
      component: () => import('@/views/PracticeResult.vue')
    }
  ]
})

export default router
