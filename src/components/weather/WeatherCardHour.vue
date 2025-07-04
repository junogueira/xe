<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    data: WeatherForecast['byHour'] | undefined
    isLoading: boolean
  }>(),
  {
    isLoading: false,
  },
)

const { getColor, getIcon } = useWeatherStyle()

const items = computed(() => {
  if (!props.data) return []

  const TOTAL_ITEMS = 5
  const result = []
  const currentHour = new Date().getHours()

  for (let i = 0; i < TOTAL_ITEMS; i++) {
    const hour = i + currentHour
    const hourLabel = i === 0 ? 'Now' : hour < 12 ? `${hour} AM` : `${hour} PM`
    const entry = props.data[hour]

    if (entry) {
      result.push({ hour: hourLabel, ...entry })
    }
  }

  return result
})
</script>

<template>
  <template v-if="isLoading">
    <div class="flex flex-nowrap md:gap-6">
      <WeatherCardHourLoading v-for="i in 5" :key="i" />
    </div>
  </template>
  <template v-else-if="data">
    <div class="flex flex-nowrap md:gap-6">
      <div v-for="item in items" :key="item.hour" class="flex flex-col items-center gap-5 px-8">
        <span class="text-xe-gray text-xl">
          {{ item.hour }}
        </span>
        <div :class="['rounded-full p-4', getColor(item)]">
          <component :is="getIcon(item)" class="size-12" />
        </div>
        <span class="text-xl text-black">
          {{ `${Math.round(item.temperature)}°C` }}
        </span>
      </div>
    </div>
  </template>
  <template v-else>
    <WeatherCardHourError />
  </template>
</template>
