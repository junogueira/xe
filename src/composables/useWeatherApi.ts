const API_BASE_URL = 'https://api.weatherapi.com/v1'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const useWeatherApi = () => {
  const getUrl = (path: string, params: Record<string, string | number>) => {
    const queryParams = new URLSearchParams({ ...params, key: API_KEY })
    return `${API_BASE_URL}/${path}?${queryParams}`
  }

  const current = (city: Ref<string>) => {
    return useQuery({
      queryKey: ['current', city],
      queryFn: async () => {
        const response = await fetch(getUrl('current.json', { q: city.value }), {
          method: 'GET',
        })

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const weather = await response.json()
        return weather
      },
      select: (data) => {
        return {
          city: data.location.name,
          isDay: data.current.is_day,
          temperature: data.current.temp_c,
          condition: data.current.condition.text.trim(),
          conditionIcon: data.current.condition.code,
        }
      },
    })
  }

  const forecast = (city: Ref<string>) => {
    return useQuery({
      queryKey: ['forecast', city],
      queryFn: async () => {
        // NOTE: I'm sending { days: 5 }, but on the free plan they only return 3 days
        const response = await fetch(getUrl('forecast.json', { q: city.value, days: 5 }), {
          method: 'GET',
        })

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const weather = await response.json()
        return weather
      },
      select: (data) => {
        const byHour = data.forecast.forecastday[0].hour.reduce(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (acc: WeatherForecast['byHour'], curr: Record<string, any>) => {
            const hour = new Date(curr.time).getHours()

            acc[hour] = {
              temperature: curr.temp_c,
              condition: curr.condition.text.trim(),
              conditionIcon: curr.condition.code,
            }

            return acc
          },
          {},
        )

        const byDay = data.forecast.forecastday.reduce(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (acc: WeatherForecast['byDay'], curr: Record<string, any>) => {
            acc[curr.date] = {
              date: curr.date,
              temperature: curr.day.avgtemp_c,
              condition: curr.day.condition.text.trim(),
              conditionIcon: curr.day.condition.code,
            }

            return acc
          },
          {},
        )

        return {
          byHour,
          byDay,
        }
      },
    })
  }

  return {
    current,
    forecast,
  }
}
