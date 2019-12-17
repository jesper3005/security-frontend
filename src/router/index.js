import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import Facebook from '@/pages/LoginPages/Facebook'
import Google from '@/pages/LoginPages/Google'
import Captcha from '@/pages/LoginPages/Captcha'
import TTTLogin from '@/pages/LoginPages/TTTLogin'
import Profile from '@/pages/Profile'
import LegalNotes from '@/pages/LegalNotes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      exact: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      exact: true,
      children: [
        { path: 'facebook', component: Facebook },
        { path: 'google', component: Google },
        { path: 'captcha', component: Captcha },
        { path: 'our-login', component: TTTLogin }
      ]
    },
    {
      path: '/legal-notes',
      name: 'LegalNotes',
      component: LegalNotes,
      exact: true,
    }
  ]
})
