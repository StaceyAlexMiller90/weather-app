export interface LoadingModel {
  appLoading: boolean
}

export interface LocationWeatherModel {
  city: string
  countryCode: string
  tenDayForecast: {
    minTemp: number
    maxTemp: number
  }[]
}
