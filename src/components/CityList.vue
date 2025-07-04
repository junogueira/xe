<script setup lang="ts">
const { cities, currentCity, setCurrentCity } = useCity()
</script>

<template>
  <div class="flex items-center justify-between">
    <nav class="overflow-x-auto pb-3">
      <ul class="flex flex-row flex-nowrap gap-2">
        <li v-for="city in cities" :key="city.name">
          <button
            type="button"
            @click="setCurrentCity(city)"
            :class="[
              'hover:bg-xe-light-blue focus-visible:bg-xe-light-blue flex cursor-pointer flex-row items-center gap-1 rounded-[10px] px-6 py-2 leading-tight whitespace-nowrap outline-0 transition-colors duration-300',
              { 'bg-xe-blue': city.name === currentCity.name },
            ]"
          >
            <span>{{ city.name }}</span>
            <span>{{ city.emoji }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
