import { LocationModel } from '../models'
import appState from '../modules/appState'

const initialState = () => ({
  city: '',
  countryCode: ''
})

const state: LocationModel = initialState()

// actions
const actions = {
  getLocationWeather({ dispatch, commit }: any, location: LocationModel) {
    dispatch('appState/appIsLoading')
    commit('UPDATE_LOCATION', location)
    dispatch('appState/appIsDoneLoading')
  }
}

const mutations = {
  UPDATE_LOCATION(state: LocationModel, payload: LocationModel) {
    state.city = payload.city
    state.countryCode = payload.countryCode
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
