export interface Weather {
  temperature: number
  condition: string
  conditionIcon: number
}

export interface WeatherCurrent extends Weather {
  city: string
  isDay: boolean
}

export interface WeatherForecast {
  byHour: {
    [key: string]: Weather
  }
  byDay: {
    [key: string]: Weather & {
      date: string
    }
  }
}

export interface WeatherSearchResponse {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}
