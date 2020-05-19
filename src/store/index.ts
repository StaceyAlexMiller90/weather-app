import Vue from 'vue'
import Vuex from 'vuex'
import appState from './modules/appState'
import location from './modules/location'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appState,
    location
  }
})
