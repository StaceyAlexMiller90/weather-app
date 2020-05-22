export interface appModel {
  appLoading: boolean
  appStatus: string
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

export interface Colours {
  [key: string]: string
}

export interface Country {
  name: string
  code: string
  flag: string
}
