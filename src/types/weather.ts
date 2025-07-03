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
