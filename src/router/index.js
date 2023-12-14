import {createRouter, createWebHistory} from "vue-router";
import axios from 'axios';
import CONSTANTS from '@/constants';
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/PokemonLite-vue/',
      name: 'Home',
      component: Home
    },
    {
      path: '/PokemonLite-vue/init',
      name: 'initial',
      component: () => import('../views/Initial.vue')
    },
    {
      path: '/PokemonLite-vue/game',
      name: 'Game',
      component: () => import('../views/Game.vue')
    },
    {
      path: '/PokemonLite-vue/rules',
      name: 'Rules',
      component: () => import('../views/Rules.vue')
    },
    {
      path: '/PokemonLite-vue/restart',
      name: 'Restart',
      // Implement a method or action to reset the state and navigate to the initial route
      beforeEnter: (to, from, next) => {
        axios.get(`${CONSTANTS.serverUrl}/restart`)



        next('/');
      }
    },
  ]
})

export default router