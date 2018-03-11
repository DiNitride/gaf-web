import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Arma from '@/pages/Arma'
import DiscordEtiquette from '@/pages/DiscordEtiquette'
import Archive from '@/pages/Archive'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/arma',
      name: 'arma',
      component: Arma
    },
    {
      path: '/discord_etiquette',
      name: 'discord_etiquette',
      component: DiscordEtiquette
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    }
  ]
})
