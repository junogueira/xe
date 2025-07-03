<script setup lang="ts">
const city = ref('Denver')
const weatherApi = useWeatherApi()

const {
  data: current,
  isPending: isPendingCurrent,
  isFetching: isFetchingCurrent,
} = weatherApi.current(city)

const {
  data: forecast,
  isPending: isPendingForecast,
  isFetching: isFetchingForecast,
} = weatherApi.forecast(city)
</script>

<template>
  <div class="relative">
    <div v-if="isFetchingCurrent || isFetchingForecast" class="absolute right-0 bottom-0">
      <AppIconUpdating />
    </div>
    <div class="grid grid-flow-row auto-rows-max gap-8 lg:grid-cols-[256px_auto]">
      <WeatherCardNow
        :data="current"
        :is-loading="isPendingCurrent"
        :is-fetching="isFetchingCurrent"
      />
      <div class="grid grid-flow-row auto-rows-max content-center gap-8">
        <div class="overflow-x-auto">
          <WeatherCardHour
            :data="forecast?.byHour"
            :is-loading="isPendingForecast"
            :is-fetching="isFetchingForecast"
          />
        </div>
        <div>
          <WeatherCardDay
            :data="forecast?.byDay"
            :is-loading="isPendingForecast"
            :is-fetching="isFetchingForecast"
          />
        </div>
      </div>
    </div>
  </div>
</template>
