import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/challenge/registration'
  },
  {
    path: '/challenge/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/challenge/registration'
      },
      {
        path: 'registration',
        component: () => import('@/views/RegistrationTab.vue')
      },
      {
        path: 'movies',
        component: () => import('@/views/MoviesTab.vue'), 
      },
      {
        path: 'movies/details',
        name: 'movie-details',
        component: () => import('@/views/MovieDetails.vue'),
        props: true
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
