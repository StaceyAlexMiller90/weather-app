import axios from 'axios'
import { LocationWeatherModel, Colours } from '../models'
import moment from 'moment'

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
  sevenDayForecast: (state: LocationWeatherModel) => {
    return state.tenDayForecast.slice(0, 7)
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
    // Added code for average lowest and av highest to display a fully dynamic gradient,
    //I noticed that just the endpoint does not demonstrate a huge difference when tested
    // const avLowestTen: keyof Colours = (
    //   Math.round(getters.averageLowestTempTenDays / 10) * 10
    // ).toString()
    // const avHighestTen: keyof Colours = (
    //   Math.round(getters.averageHighestTempTenDays / 10) * 10
    // ).toString()
    return `linear-gradient(145.74deg,#9BDBFF -33.02%,#B4DEDA 52.01%,${cols[avNearestTen]} 137.04%)`
  },
  getDateRange: (state: LocationWeatherModel, getters: any) => {
    if (state.city) {
      const monthCheck = getters.sevenDayForecast.map(
        (day: { date: string }) => {
          return moment(day.date).format('MMM')
        }
      )
      const yearCheck = getters.sevenDayForecast.map(
        (day: { date: string }) => {
          return moment(day.date).format('YYYY')
        }
      )
      const month =
        monthCheck[0] === monthCheck[6]
          ? monthCheck[0]
          : `${monthCheck[0]} - ${monthCheck[6]}`
      const date = `${moment(getters.sevenDayForecast[0].date).format(
        'D'
      )} - ${moment(getters.sevenDayForecast[6].date).format('D')}`
      const year =
        yearCheck[0] === yearCheck[6]
          ? yearCheck[0]
          : `${yearCheck[0]} - ${yearCheck[6]}`
      return `${month} ${date} ${year}`
    }
  }
}

// actions
const actions = {
  async getLocationWeather(
    { dispatch, commit }: any,
    location: { city: string; countryCode: string }
  ) {
    if (!location.city || !location.countryCode) {
      dispatch('appState/appError', null, { root: true })
    } else {
      try {
        await dispatch('appState/appIsLoading', null, { root: true })
        // commit('UPDATE_LOCATION', { location })
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${location.city}&country=${location.countryCode}&key=${key}&days=10`
        )
        if (response.data.length === 0) {
          dispatch('appState/appError', null, { root: true })
        } else {
          const tenDayForecast = response.data.data.map((day: any) => {
            return {
              date: day.valid_date,
              minTemp: Math.round(day.min_temp),
              maxTemp: Math.round(day.max_temp),
              average: Math.round((day.min_temp + day.max_temp) / 2)
            }
          })
          dispatch('appState/appOk', null, { root: true })
          commit('UPDATE_LOCATION_WEATHER', {
            city: location.city,
            countryCode: location.countryCode,
            tenDayForecast
          })
        }
      } catch (e) {
        console.log(e.message)
      }
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
