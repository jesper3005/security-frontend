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
import Verfication from '@/pages/LoginPages/Verification'

Vue.use(Router)

export const router = new Router({
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
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verfication,
      exact: true,
    }
  ]
})

/**
 * Returns user to login if entering restriced pages
 * 
 * 
 */
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/login/facebook', '/login/google', '/login/captcha', '/login/our-login'];
  const authRequired = !publicPages.includes(to.path);
  const isLoggedIn = localStorage.getItem('data')
  const verified = localStorage.getItem('verified')

  if (authRequired && !verified && !isLoggedIn) {
    return next('/login');
  }

  next();
})