import Vue from 'vue'
import Vuex from 'vuex'
import appState from './modules/appState'
import locationWeather from './modules/locationWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appState,
    locationWeather
  }
})
