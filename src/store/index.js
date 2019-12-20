import Vue from 'vue';
import Vuex from 'vuex'
import { account } from './account/account'
import { alert } from './account/alert'
import { recaptcha } from './recaptcha/recaptcha'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    //Insert imported modules
    account,
    alert,
    recaptcha,
  }
})