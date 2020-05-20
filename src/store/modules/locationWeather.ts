import axios from 'axios'
import { LocationWeatherModel, LoadingModel } from '../models'

const key = process.env.VUE_APP_APIKEY

const initialState = () => ({
  city: '',
  countryCode: '',
  tenDayForecast: [
    {
      date: '',
      minTemp: 0,
      maxTemp: 0,
      average: 0
    }
  ]
})

const state: LocationWeatherModel = initialState()

// getters
const getters = {
  averageTempTenDays: (state: LocationWeatherModel) => {
    return Math.round(
      state.tenDayForecast
        .map(day => day.average)
        .reduce((prev, curr) => (curr += prev)) / 10
    )
  }
}

// actions
const actions = {
  async getLocationWeather(
    { dispatch, commit }: any,
    location: { city: string; countryCode: string }
  ) {
    try {
      await dispatch('appState/appIsLoading', null, { root: true })
      // commit('UPDATE_LOCATION', { location })
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${location.city}&country=${location.countryCode}&key=${key}&days=10`
      )
      const tenDayForecast = response.data.data.map((day: any) => {
        return {
          date: day.valid_date,
          minTemp: day.min_temp,
          maxTemp: day.max_temp,
          average: Math.round(day.min_temp + day.max_temp / 2)
        }
      })
      commit('UPDATE_LOCATION_WEATHER', {
        city: location.city,
        countryCode: location.countryCode,
        tenDayForecast
      })
    } catch (e) {
      console.log(e.message)
    }
    await dispatch('appState/appIsDoneLoading', null, { root: true })
  }
}

const mutations = {
  UPDATE_LOCATION_WEATHER(
    state: LocationWeatherModel,
    payload: LocationWeatherModel
  ) {
    state.city = payload.city
    state.countryCode = payload.countryCode
    state.tenDayForecast = payload.tenDayForecast
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
