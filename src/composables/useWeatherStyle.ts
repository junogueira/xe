const weatherIconMap: Record<number, string> = {
  1000: 'IconWeatherSunny',
  1003: 'IconWeatherPartlyCloudy',
  1006: 'IconWeatherCloudy',
  1009: 'IconWeatherMostlyCloudy',
  1030: 'IconWeatherClearCloudy',
  1063: 'IconWeatherShowers',
  1066: 'IconWeatherSnowFlurries',
  1069: 'IconWeatherSleet',
  1072: 'IconWeatherDrizzle',
  1087: 'IconWeatherIsolatedThunderstroms',
  1114: 'IconWeatherSnow',
  1117: 'IconWeatherSnow',
  1135: 'IconWeatherClearCloudy',
  1147: 'IconWeatherClearCloudy',
  1150: 'IconWeatherDrizzle',
  1153: 'IconWeatherDrizzle',
  1168: 'IconWeatherDrizzle',
  1171: 'IconWeatherDrizzle',
  1180: 'IconWeatherShowers',
  1183: 'IconWeatherShowers',
  1186: 'IconWeatherShowers',
  1189: 'IconWeatherShowers',
  1192: 'IconWeatherShowers',
  1195: 'IconWeatherShowers',
  1198: 'IconWeatherSleet',
  1201: 'IconWeatherSleet',
  1204: 'IconWeatherSleet',
  1207: 'IconWeatherSleet',
  1210: 'IconWeatherSnowFlurries',
  1213: 'IconWeatherSnow',
  1216: 'IconWeatherSnow',
  1219: 'IconWeatherSnow',
  1222: 'IconWeatherSnow',
  1225: 'IconWeatherSnow',
  1237: 'IconWeatherHail',
  1240: 'IconWeatherShowers',
  1243: 'IconWeatherShowers',
  1246: 'IconWeatherShowers',
  1249: 'IconWeatherSleet',
  1252: 'IconWeatherSleet',
  1255: 'IconWeatherSnow',
  1258: 'IconWeatherSnow',
  1261: 'IconWeatherHail',
  1264: 'IconWeatherHail',
  1273: 'IconWeatherThunderstroms',
  1276: 'IconWeatherThunderstroms',
  1279: 'IconWeatherSnow',
  1282: 'IconWeatherSnow',
  9001: 'IconWeatherWindy',
  9002: 'IconWeatherTornado',
}

export const useWeatherStyle = () => {
  const getColor = (weather: Weather) => {
    if (!weather.temperature) return 'bg-xe-blue'

    if (weather.temperature <= 6) return 'bg-xe-blue'
    if (weather.temperature <= 12) return 'bg-xe-green'
    if (weather.temperature <= 24) return 'bg-xe-yellow'

    return 'bg-xe-red'
  }

  const getIcon = (weather: Weather) => {
    const defaultIcon = 'IconWeatherCloudy'

    if (!weather.conditionIcon) return defaultIcon
    const iconName = weatherIconMap[weather.conditionIcon] ?? defaultIcon

    return defineAsyncComponent(() => import(`./../components/icon/${iconName}.vue`))
  }

  return {
    getColor,
    getIcon,
  }
}
