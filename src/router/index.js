import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const CatalogPage = () => import('../views/CatalogPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/catalog/:category?',
      name: 'catalog',
      component: CatalogPage
    }
  ],
  linkActiveClass: 'active'
})

export default router
