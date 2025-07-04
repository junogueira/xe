<script setup lang="ts">
const { currentCity } = useCity()
const weatherApi = useWeatherApi()

const {
  data: current,
  isPending: isPendingCurrent,
  isFetching: isFetchingCurrent,
} = weatherApi.current(currentCity)

const {
  data: forecast,
  isPending: isPendingForecast,
  isFetching: isFetchingForecast,
} = weatherApi.forecast(currentCity)
</script>

<template>
  <div class="relative">
    <div
      v-if="!(isPendingCurrent || isPendingForecast) && (isFetchingCurrent || isFetchingForecast)"
      class="absolute right-0 bottom-0"
    >
      <AppIconUpdating />
    </div>
    <div class="grid grid-flow-row auto-rows-max gap-8 lg:grid-cols-[256px_auto]">
      <WeatherCardNow :data="current" :is-loading="isPendingCurrent" />
      <div class="grid grid-flow-row auto-rows-max content-center gap-8">
        <div class="overflow-x-auto pb-3">
          <WeatherCardHour :data="forecast?.byHour" :is-loading="isPendingForecast" />
        </div>
        <div>
          <WeatherCardDay :data="forecast?.byDay" :is-loading="isPendingForecast" />
        </div>
      </div>
    </div>
  </div>
</template>
