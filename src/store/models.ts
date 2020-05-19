export interface LoadingModel {
  appLoading: boolean
}

export interface LocationWeatherModel {
  city: string
  countryCode: string
  tenDayForecast: {
    date: string
    minTemp: number
    maxTemp: number
    average: number
  }[]
}
