const cities = ref<City[]>([
  { name: 'Denver', emoji: '🏔' },
  { name: 'Rio de Janeiro', emoji: '⛱️' },
  { name: 'Madrid', emoji: '💃' },
  { name: 'Japan', emoji: '🍣' },
  { name: 'Australia', emoji: '🐨' },
])

const currentCity = ref<City>(cities.value[0])

export const useCity = () => {
  const setCurrentCity = (city: City) => {
    currentCity.value = city
  }

  const addCity = (city: City) => {
    cities.value.unshift(city)
  }

  return {
    cities: readonly(cities),
    currentCity: readonly(currentCity),
    setCurrentCity,
    addCity
  }
}