import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddPage from '../views/AddPage.vue'
import ListPage from '../views/ListPage.vue'
import CalendarPage from '../views/CalendarPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage
  },
  {
    path: '/add',
    name: '/Add',
    component: AddPage
  },
  {
    path: '/calendar',
    name: '/Calendar',
    component: CalendarPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
