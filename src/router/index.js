import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/init',
      name: 'initial',
      component: () => import('../views/Initial.vue')
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import('../views/Game.vue')
    },
    {
      path: '/rules',
      name: 'Rules',
      component: () => import('../views/Rules.vue')
    }
  ]
})

export default router