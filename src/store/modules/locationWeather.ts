import axios from 'axios'
import { LocationWeatherModel, Colours } from '../models'

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
  },
  averageLowestTempTenDays: (state: LocationWeatherModel) => {
    return Math.round(
      state.tenDayForecast
        .map(day => day.minTemp)
        .reduce((prev, curr) => (curr += prev)) / 10
    )
  },
  averageHighestTempTenDays: (state: LocationWeatherModel) => {
    return Math.round(
      state.tenDayForecast
        .map(day => day.maxTemp)
        .reduce((prev, curr) => (curr += prev)) / 10
    )
  },
  colForLocation: (state: LocationWeatherModel, getters: any) => {
    const cols: Colours = {
      '-40': '#102F7E',
      '-30': '#0C8DD6',
      '-20': '#1AA0EC',
      '-10': '#60C6FF',
      '0': '#9bdbff',
      '10': '#b4deda',
      '20': '#ffd66b',
      '30': '#ffc178',
      '40': '#fe9255'
    }
    const avNearestTen: keyof Colours = (
      Math.round(getters.averageTempTenDays / 10) * 10
    ).toString()
    const avLowestTen: keyof Colours = (
      Math.round(getters.averageLowestTempTenDays / 10) * 10
    ).toString()
    const avHighesttTen: keyof Colours = (
      Math.round(getters.averageHighestTempTenDays / 10) * 10
    ).toString()
    return `linear-gradient(145.74deg,${cols[avLowestTen]} -33.02%,${cols[avNearestTen]} 52.01%,${cols[avHighesttTen]} 137.04%)`
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
