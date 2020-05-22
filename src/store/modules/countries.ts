import { Country } from '../models'
import axios from 'axios'

const initialState = () => ({
  countries: []
})

const state: { countries: Country[] } = initialState()

// actions
const actions = {
  async fetchCountries({ dispatch, commit }: any) {
    try {
      await dispatch('appState/appIsLoading', null, { root: true })
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      const countryData = response.data.map(
        (country: { name: string; alpha2Code: string; flag: string }) => {
          return {
            name: country.name,
            code: country.alpha2Code,
            flag: country.flag
          }
        }
      )
      commit('COUNTRIES_FETCHED', countryData)
      await dispatch('appState/appIsDoneLoading', null, { root: true })
    } catch (e) {
      console.log(e.message)
    }
  }
}

// mutations
const mutations = {
  COUNTRIES_FETCHED(state: any, payload: Country[]) {
    state.countries = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
