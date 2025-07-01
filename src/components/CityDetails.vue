<script setup lang="ts">
</script>

<template>
  <div class="grid grid-flow-row auto-rows-max lg:grid-cols-[256px_auto] gap-8">
    <!-- current city -->
    <div class="flex flex-row gap-4 items-center lg:flex-col bg-xe-blue rounded-[20px] lg:rounded-4xl p-4 pr-5 lg:p-12">
      <div class="rounded-full bg-[#aed3f4] p-3 lg:p-5">
        <IconWeatherSnow class="size-9 lg:size-15" />
      </div>
      <div class="flex flex-col gap-1 lg:text-center">
        <span class="text-xl lg:text-[32px]">Denver</span>
        <span class="text-xs text-xe-gray">Snowing</span>
      </div>
      <div class="ml-auto lg:ml-0 lg:mt-16">
        <span class="text-[52px] lg:text-[120px] leading-none font-medium">2<sup
            class="text-xl lg:text-[32px] align-super">°C</sup></span>
      </div>
    </div>
    <div class="grid grid-flow-row auto-rows-max content-center gap-8">
      <!-- temperatures today -->
      <div class="overflow-x-auto">
        <div class="flex flex-nowrap md:gap-6">
          <div v-for="i in 5" :key="i" class="flex flex-col gap-5 items-center px-8">
            <span class="text-xe-gray text-xl">Now</span>
            <div class="rounded-full bg-xe-light-blue p-4">
              <IconWeatherSnow class="size-12" />
            </div>
            <span class="text-black text-xl">2°C</span>
          </div>
        </div>
      </div>
      <!-- temperatures this week -->
      <div>
        <div class="grid grid-rows-5 lg:grid-rows-1 lg:grid-cols-5 gap-4 lg:gap-6">
          <div v-for="i in 5" :key="i"
            class="flex flex-row lg:flex-col items-center gap-4 lg:gap-6 px-4 lg:px-8 py-3 lg:py-4 bg-xe-blue rounded-[10px] lg:rounded-[30px]">
            <IconWeatherSnow class="size-12 lg:mx-auto" />
            <div class="flex flex-col lg:items-center">
              <span class="text-xe-dark-blue text-lg lg:text-xl">Today</span>
              <span class="text-xe-gray text-xs">Frozen</span>
            </div>
            <span class="text-black text-xl ml-auto lg:ml-0">2°C</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>