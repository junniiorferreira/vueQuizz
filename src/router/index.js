import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start.vue'
import SolucoesDigitais from '@/views/SolucoesDigitais.vue'
import SolucoesPresenciais from '@/views/SolucoesPresenciais.vue'
import SolucoesBlended from '@/views/SolucoesBlended.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import '@/assets/css/montserrat.css'
import '@/assets/css/raleway.css'
import '@/assets/css/roboto.css'
Vue.use(Buefy)
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/solucoes-digitais',
      name: 'digitais',
      component: SolucoesDigitais
    },
    {
      path: '/solucoes-presenciais',
      name: 'presenciais',
      component: SolucoesPresenciais
    },
    {
      path: '/solucoes-blended',
      name: 'blended',
      component: SolucoesBlended
    },            
  ]
})
