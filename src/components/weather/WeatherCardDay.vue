<script setup lang="ts">
withDefaults(
  defineProps<{
    data: WeatherForecast['byDay'] | undefined
    isLoading: boolean
  }>(),
  {
    isLoading: false,
  },
)

const { getColor, getIcon } = useWeatherStyle()

const getWeekday = (dateStr: string) => {
  const date = new Date(`${dateStr}T00:00:00`)

  const today = new Date()
  today.setHours(0, 0, 0)

  if (date.getDay() === today.getDay()) return 'Today'
  if (date.getDay() === today.getDay() + 1) return 'Tomorrow'

  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
}
</script>

<template>
  <template v-if="isLoading">
    <div class="grid grid-rows-5 gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:gap-6">
      <WeatherCardDayLoading v-for="i in 5" :key="i" />
    </div>
  </template>
  <template v-else-if="data">
    <div class="grid grid-rows-5 gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:gap-6">
      <div
        v-for="item in data"
        :key="item.date"
        :class="[
          'flex flex-row items-center justify-between gap-4 rounded-[10px] px-4 py-3 lg:flex-col lg:rounded-[30px] lg:px-8 lg:py-4',
          getColor(item),
        ]"
      >
        <component :is="getIcon(item)" class="size-12 lg:mx-auto" />
        <div class="flex flex-col lg:items-center">
          <span class="text-xe-dark-blue text-lg lg:text-xl">
            {{ getWeekday(item.date) }}
          </span>
          <span class="text-xe-gray text-xs lg:text-center">
            {{ item.condition }}
          </span>
        </div>
        <span class="ml-auto text-xl text-black lg:ml-0">
          {{ `${Math.round(item.temperature)}°C` }}
        </span>
      </div>
    </div>
  </template>
  <template v-else>
    <WeatherCardDayError />
  </template>
</template>
