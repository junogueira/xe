<script setup lang="ts">
withDefaults(
  defineProps<{
    data: WeatherCurrent | undefined
    isLoading: boolean
  }>(),
  {
    isLoading: false,
  },
)

const { getColor, getIcon } = useWeatherStyle()
</script>

<template>
  <template v-if="isLoading">
    <WeatherCardNowLoading />
  </template>
  <template v-else-if="data">
    <div
      :class="[
        'flex flex-row items-center gap-4 rounded-[20px] p-4 pr-5 lg:flex-col lg:rounded-4xl lg:p-12',
        getColor(data),
      ]"
    >
      <div :class="['bg-xe-gray/20 rounded-full p-3 lg:p-5']">
        <component :is="getIcon(data)" class="size-9 lg:size-15" />
      </div>
      <div class="flex flex-col gap-1 lg:text-center">
        <span class="text-xl lg:text-[32px]">{{ data.city }}</span>
        <span class="text-xe-gray text-xs">{{ data.condition }}</span>
      </div>
      <div class="ml-auto lg:mt-16 lg:ml-0">
        <span class="text-[52px] leading-none font-medium lg:text-[120px]"
          >{{ data.temperature.toFixed()
          }}<sup class="align-super text-xl lg:text-[32px]">°C</sup></span
        >
      </div>
    </div>
  </template>
  <template v-else>
    <!-- TODO -->
    error
  </template>
</template>
