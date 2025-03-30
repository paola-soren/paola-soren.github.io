import { createRouter, createWebHashHistory } from 'vue-router'
import Work from '../views/Work.vue'
import WorkDetail from '../views/WorkDetail.vue'
import CharacterDetail from '@/views/CharacterDetail.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue')
    },
    {
      path: '/textes',
      name: 'work',
      component: Work
    },
    {
      path: '/textes/:id',
      name: 'work-detail',
      component: WorkDetail,
      props: true
    },
    {
      path: '/personnages/:id',
      name: 'CharacterDetail',
      component: CharacterDetail
    }
  ],
  scrollBehavior() {
    return { 
      top: 0,
    }
  }
})

export default router