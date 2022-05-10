import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blue from '../views/Blue.vue';
import Shirts from '../views/Shirts.vue';
import SpeciesList from '../views/SpeciesList.vue';
import SpeciesDetail from '../views/SpeciesDetail.vue';
import Information from '../views/Information.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blue',
      name: 'blue',
      component: Blue
    },
    {
      path: '/shirts',
      name: 'shirts',
      component: Shirts
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/species',
      name: 'species',
      component: SpeciesList
    },
    {
      path: "/species/:id",
      name: "species-detail",
      component: SpeciesDetail
    }
  ]
})

export default router
