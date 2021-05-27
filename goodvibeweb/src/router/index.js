import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import Album from '../views/album.vue';
import Merch from '../views/merch.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/albums',
    name: 'Album',
    component: Album
  },
  {
    path: '/merch',
    name: 'Merch',
    component: Merch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
