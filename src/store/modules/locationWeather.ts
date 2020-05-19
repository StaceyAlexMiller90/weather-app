import axios from 'axios'
import { LocationWeatherModel } from '../models'

const key = process.env.VUE_APP_APIKEY

const initialState = () => ({
  city: '',
  countryCode: '',
  tenDayForecast: [
    {
      minTemp: 0,
      maxTemp: 0
    }
  ]
})

const state: LocationWeatherModel = initialState()

// actions
const actions = {
  async getLocationWeather(
    { dispatch, commit }: any,
    location: { city: string; countryCode: string }
  ) {
    await dispatch('appState/appIsLoading', null, { root: true })
    commit('UPDATE_LOCATION', { location })
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${location.city}&country=${location.countryCode}&key=${key}&days=10`
    )
    console.log('data', response.data)
    await dispatch('appState/appIsDoneLoading', null, { root: true })
  }
}

const mutations = {
  UPDATE_LOCATION(
    state: LocationWeatherModel,
    payload: { city: string; countryCode: string }
  ) {
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
