import Vue from 'vue'
import Vuex from 'vuex'
import appState from './modules/appState'
import locationWeather from './modules/locationWeather'
import countries from './modules/countries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appState,
    locationWeather,
    countries
  }
})
