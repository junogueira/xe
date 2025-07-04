<script setup lang="ts">
const { addCity, setCurrentCity } = useCity()
const weatherApi = useWeatherApi()

const searchQuery = ref('')

const { data, refetch: search } = weatherApi.search(searchQuery)

const handleSearch = useDebounceFn(() => {
  search()
}, 300)

const clearSearch = () => {
  searchQuery.value = ''
}

const handleSelectCity = (city: WeatherSearchResponse) => {
  const newCity = { name: city.name, emoji: '🏙️' }

  addCity(newCity)
  setCurrentCity(newCity)

  searchQuery.value = ''
}
</script>

<template>
  <div class="relative">
    <div class="relative">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        name="search-query"
        type="text"
        placeholder="Search city..."
        class="border-xe-dark-blue focus:outline-xe-blue w-full rounded-full border-2 py-2 pr-10 pl-4 text-sm focus:outline-offset-2"
      />
      <button
        v-if="searchQuery"
        type="button"
        class="text-xe-dark-blue focus:outline-xe-blue absolute top-1 right-1 cursor-pointer rounded-full outline-0 focus:outline-2 focus:outline-offset-0"
        @click="clearSearch"
      >
        <IconClose class="size-8" />
      </button>
    </div>

    <ul v-if="data?.length" class="absolute z-10 mt-1 w-full rounded-xl border-2 bg-white">
      <li
        v-for="city in data"
        :key="city.id"
        @click="handleSelectCity(city)"
        @keydown.enter="handleSelectCity(city)"
        class="hover:bg-xe-light-blue focus-visible:bg-xe-light-blue cursor-pointer px-4 py-2 first:rounded-t-[10px] last:rounded-b-[10px] focus:outline-0"
        tabindex="0"
      >
        {{ [city.name, city.region, city.country].join(', ') }}
      </li>
    </ul>
  </div>
</template>
